// Category filter chips — pure DOM construction (the render.js idiom).
//
// Chips render from the dataset's CATEGORIES with the transcribed
// roster count, which is NOT always the slide count (B2B payments is
// 24 of 31, remittances 13 against 12 — see data/TRANSCRIPTION.md).
// Gaps are shown, not hidden; the map headers keep the slide counts.

/**
 * Render one chip per category into `root` and return the buttons in
 * category order. Each chip is a real toggle button (aria-pressed);
 * wiring stays with the caller, which owns the filter state.
 */
export function renderFilterChips(root, { categories, companies }) {
  const doc = root.ownerDocument;
  root.replaceChildren();

  return categories.map((category) => {
    const inRoster = companies.filter((entry) => entry.categoryId === category.id).length;

    const chip = doc.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.categoryId = category.id;
    chip.setAttribute("aria-pressed", "false");
    chip.title = `${category.name}: ${inRoster} in the roster`;

    const name = doc.createElement("span");
    name.className = "chip-name";
    name.textContent = category.name;

    const count = doc.createElement("span");
    count.className = "chip-count";
    count.textContent = String(inRoster);

    chip.append(name, count);
    root.append(chip);
    return chip;
  });
}

/** Press the chips for `categoryIds`; every other chip releases. */
export function updateChipStates(chips, categoryIds) {
  const selected = new Set(categoryIds);
  for (const chip of chips) {
    chip.setAttribute("aria-pressed", String(selected.has(chip.dataset.categoryId)));
  }
}

/**
 * Sync the directory's dimming to `matches`. With `filtering` false (no
 * query, no chips) everything clears. When filtering: a section with
 * zero matches fades whole; inside live sections the non-matching
 * companies fade so the matches read at a glance. Opacity only —
 * nothing is ever removed from the DOM (spec).
 */
export function applyMapDimming(blocks, companies, matches, filtering) {
  const matchedIds = new Set(matches.map((company) => company.id));
  const matchedByCategory = new Map();
  for (const company of matches) {
    const seen = matchedByCategory.get(company.categoryId) ?? 0;
    matchedByCategory.set(company.categoryId, seen + 1);
  }

  for (const block of blocks) {
    const live = (matchedByCategory.get(block.dataset.categoryId) ?? 0) > 0;
    block.classList.toggle("is-dimmed", filtering && !live);
    for (const button of block.querySelectorAll("[data-company-id]")) {
      button.classList.toggle("is-dimmed", filtering && !matchedIds.has(button.dataset.companyId));
    }
  }
}
