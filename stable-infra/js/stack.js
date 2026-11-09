// The isometric stack — the hero's line drawing, after Paradigm.
//
// One block per category on a dashed ground plane, its height the
// number of companies the roster lists for that category. Built from
// plain elements and CSS 3D transforms — no SVG, no canvas, no
// dependency: each block is five faces (four walls and a top) whose
// geometry lives in main.css and reads three custom properties set
// here (--col, --row, --count). Opaque paper fills give hidden-line
// removal for free, so the drawing reads as wireframe line art.
//
// Motion is CSS: blocks rise in sequence on load and the plane turns
// slowly (paused on hover). Both switch off under reduced motion.
// setActive() lifts the given categories and fades the rest — main.js
// drives it from hover on the legend, chips and sections, and from the
// live filter.
//
// Decorative by construction: the stage is aria-hidden in index.html;
// the legend beside it is the accessible control surface.

/** Footprint grid: four, four, then two centered — ten categories. */
export const STACK_LAYOUT = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [1, 2], [2, 2],
];

/** Ms between neighbors in the load-in rise. */
export const RISE_STAGGER_MS = 90;
/** Ms before the first block rises (lets the hero copy lead). */
export const RISE_DELAY_MS = 350;

const FACES = ["back", "left", "right", "front", "top"];

/** Roster count per category id. */
export function countsByCategory(companies) {
  const counts = new Map();
  for (const company of companies) {
    counts.set(company.categoryId, (counts.get(company.categoryId) ?? 0) + 1);
  }
  return counts;
}

/**
 * Build the stack inside `root` and return
 * { plane, blocks, setActive(ids) }. `blocks` are in category order,
 * each carrying `data-category-id`.
 */
export function renderStack(root, { categories, companies }) {
  const doc = root.ownerDocument;
  root.replaceChildren();

  const counts = countsByCategory(companies);

  const plane = doc.createElement("div");
  plane.className = "stack-plane";

  const ground = doc.createElement("div");
  ground.className = "stack-ground";
  plane.append(ground);

  const blocks = categories.map((category, index) => {
    const [col, row] = STACK_LAYOUT[index % STACK_LAYOUT.length];
    const block = doc.createElement("div");
    block.className = "stack-block";
    block.dataset.categoryId = category.id;
    block.style.setProperty("--col", String(col));
    block.style.setProperty("--row", String(row));
    block.style.setProperty("--count", String(counts.get(category.id) ?? 0));
    block.style.setProperty("--rise-delay", `${RISE_DELAY_MS + index * RISE_STAGGER_MS}ms`);

    for (const face of FACES) {
      const el = doc.createElement("div");
      el.className = `stack-face stack-face--${face}`;
      if (face === "top") {
        const label = doc.createElement("span");
        label.className = "stack-label";
        label.textContent = String(index + 1).padStart(2, "0");
        el.append(label);
      }
      block.append(el);
    }
    plane.append(block);
    return block;
  });

  const caption = doc.createElement("p");
  caption.className = "stack-caption";
  caption.textContent = "Hover to pause · height = companies per layer";

  root.append(plane, caption);

  /** Lift the blocks for `ids` (any iterable of category ids); fade the rest. */
  function setActive(ids) {
    const active = new Set(ids);
    plane.classList.toggle("has-active", active.size > 0);
    for (const block of blocks) {
      block.classList.toggle("is-active", active.has(block.dataset.categoryId));
    }
  }

  return { plane, blocks, setActive };
}
