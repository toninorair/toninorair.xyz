// Entry point: builds the hero, the grouped directory and the company
// page, and wires selection, filtering, hover-linking and shortcuts.

import { CATEGORIES, COMPANIES } from "../data/companies.js";
import { closeProfilePanel, neighborOf, openProfilePanel } from "./panel.js";
import { renderMap } from "./render.js";
import { applyMapDimming, renderFilterChips, updateChipStates } from "./filters.js";
import { filterCompanies, formatResultsCount } from "./search.js";
import { initCountUp, renderIndexNav, renderLegend, renderMarquee } from "./hero.js";
import { renderStack } from "./stack.js";
import { initCursorDot } from "./cursor.js";
import { initDrift } from "./drift.js";
import { initReveals } from "./reveal.js";

const view = document.defaultView ?? globalThis;

// ---------------------------------------------------------------
// Build: directory, hero chrome, stack.
// ---------------------------------------------------------------

const directoryRoot = document.querySelector("#directory");

const map = renderMap(directoryRoot, {
  categories: CATEGORIES,
  companies: COMPANIES,
});

renderIndexNav(document.querySelector("[data-index-nav]"), { categories: CATEGORIES });

const legend = renderLegend(document.querySelector("[data-legend]"), {
  categories: CATEGORIES,
  companies: COMPANIES,
});

renderMarquee(document.querySelector("[data-marquee]"), {
  categories: CATEGORIES,
  companies: COMPANIES,
});

const stack = renderStack(document.querySelector("[data-stack]"), {
  categories: CATEGORIES,
  companies: COMPANIES,
});

document.querySelector("[data-stat-layers]").textContent = String(CATEGORIES.length);
initCountUp(document.querySelector("[data-stat-companies]"), COMPANIES.length);
document.querySelector("[data-footer-meta]").textContent =
  `${COMPANIES.length} companies · ${CATEGORIES.length} layers`;

// ---------------------------------------------------------------
// Company selection → the company page (profile panel).
//
// A click (or Enter — company names are real buttons) on a directory
// node dispatches "company:select" on `document`; the listener below
// opens the panel for that company. The trigger rides in the detail:
// it is what focus returns to when the panel closes.
// ---------------------------------------------------------------

const panelLayer = document.querySelector("#panel-layer");
const COMPANY_HASH = /^#\/company\/([\w-]+)$/;

function selectCompany(button) {
  const detail = {
    companyId: button.dataset.companyId,
    profileStatus: button.dataset.profileStatus,
    trigger: button,
  };
  document.dispatchEvent(new CustomEvent("company:select", { detail }));
}

directoryRoot.addEventListener("click", (event) => {
  const button = event.target.closest("[data-company-id]");
  if (button) selectCompany(button);
});

let panelTrigger = null;
let currentCompany = null;

/** The directory button for `companyId` — the natural focus-return target. */
const directoryButtonFor = (companyId) =>
  directoryRoot.querySelector(`[data-company-id="${companyId}"]`);

/** Mirror the open company into the URL so the page can be shared. */
function writeHash(companyId) {
  const history = view.history;
  const location = view.location;
  if (!history?.replaceState || !location) return;
  const base = `${location.pathname ?? ""}${location.search ?? ""}`;
  try {
    history.replaceState(null, "", companyId ? `${base}#/company/${companyId}` : base);
  } catch {
    // Opaque origins (file://, sandboxed frames) refuse replaceState —
    // deep links are a convenience, never a requirement.
  }
}

function showCompany(company, trigger) {
  currentCompany = company;
  panelTrigger = trigger ?? directoryButtonFor(company.id) ?? null;
  openProfilePanel(panelLayer, company, { categories: CATEGORIES, companies: COMPANIES });
  writeHash(company.id);
}

document.addEventListener("company:select", (event) => {
  const company = COMPANIES.find((entry) => entry.id === event.detail.companyId);
  if (!company) return;
  showCompany(company, event.detail.trigger ?? null);
});

// Close affordances: the scrim and the close button ([data-panel-close]).
// Focus returns to the name that opened the panel.
function closePanel() {
  if (panelLayer.hidden) return;
  closeProfilePanel(panelLayer, { trigger: panelTrigger });
  panelTrigger = null;
  currentCompany = null;
  writeHash(null);
}

for (const closer of panelLayer.querySelectorAll("[data-panel-close]")) {
  closer.addEventListener("click", closePanel);
}

/** Step through the open company's category, wrapping at the ends. */
function stepCompany(step) {
  if (!currentCompany) return;
  const next = neighborOf(currentCompany, COMPANIES, step);
  // Swapping pages moves the focus-return target along with it, so
  // closing lands on the row of the company last shown.
  if (next) showCompany(next, directoryButtonFor(next.id));
}

panelLayer.querySelector("[data-panel-prev]").addEventListener("click", () => stepCompany(-1));
panelLayer.querySelector("[data-panel-next]").addEventListener("click", () => stepCompany(1));

// "More in <category>" buttons open that sibling's page.
panelLayer.querySelector("[data-panel-more]").addEventListener("click", (event) => {
  const button = event.target.closest("[data-sibling-id]");
  if (!button) return;
  const company = COMPANIES.find((entry) => entry.id === button.dataset.siblingId);
  if (company) showCompany(company, directoryButtonFor(company.id));
});

/** Open the company named by a `#/company/<id>` hash, if any. */
function openFromHash() {
  const match = (view.location?.hash ?? "").match(COMPANY_HASH);
  if (!match) return;
  const company = COMPANIES.find((entry) => entry.id === match[1]);
  if (company && company !== currentCompany) showCompany(company, directoryButtonFor(company.id));
}

view.addEventListener?.("hashchange", openFromHash);

// ---------------------------------------------------------------
// Search & filters — the toolbar above the directory, plus the hero
// legend, which shares the chips' category state.
// One combined state drives the results count, the empty state, the
// chip and legend pressed states, the section dimming and the stack;
// every control mutates the state and re-runs updateResults().
// ---------------------------------------------------------------

const chips = renderFilterChips(document.querySelector("[data-filter-chips]"), {
  categories: CATEGORIES,
  companies: COMPANIES,
});

const state = { query: "", categoryIds: new Set(), hovered: null };

const searchInput = document.querySelector("#search-input");
const resultsCount = document.querySelector("[data-results-count]");
const emptyState = document.querySelector("[data-empty-state]");

let lastMatches = COMPANIES;

/** Re-run the combined filter and sync the toolbar and directory to it. */
function updateResults() {
  lastMatches = filterCompanies(COMPANIES, {
    query: state.query,
    categoryIds: [...state.categoryIds],
  });
  resultsCount.textContent = formatResultsCount(lastMatches.length, COMPANIES.length);
  emptyState.hidden = lastMatches.length > 0;
  applyMapDimming(map.blocks, COMPANIES, lastMatches, isFiltering());
  updateStack();
}

/** A filter is live when the query is non-blank or any chip is pressed. */
function isFiltering() {
  return state.query.trim() !== "" || state.categoryIds.size > 0;
}

/**
 * The stack lifts what the reader is pointing at; otherwise, while
 * filtering, every category that still has matches.
 */
function updateStack() {
  if (state.hovered) {
    stack.setActive([state.hovered]);
    return;
  }
  stack.setActive(isFiltering() ? new Set(lastMatches.map((company) => company.categoryId)) : []);
}

function setHovered(categoryId) {
  if (state.hovered === categoryId) return;
  state.hovered = categoryId;
  updateStack();
}

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  updateResults();
});

/** Chips and legend are multi-select toggles over the same state. */
function toggleCategory(categoryId) {
  if (state.categoryIds.has(categoryId)) state.categoryIds.delete(categoryId);
  else state.categoryIds.add(categoryId);
  updateChipStates(chips, state.categoryIds);
  updateChipStates(legend, state.categoryIds);
  updateResults();
}

for (const control of [...chips, ...legend]) {
  const categoryId = control.dataset.categoryId;
  control.addEventListener("click", () => toggleCategory(categoryId));
  control.addEventListener("mouseenter", () => setHovered(categoryId));
  control.addEventListener("mouseleave", () => setHovered(null));
  control.addEventListener("focus", () => setHovered(categoryId));
  control.addEventListener("blur", () => setHovered(null));
}

// Pointing at a directory section lifts its block too.
for (const block of map.blocks) {
  block.addEventListener("mouseenter", () => setHovered(block.dataset.categoryId));
  block.addEventListener("mouseleave", () => setHovered(null));
}

// The empty state's reset action: clear the query and the active
// chips, and return the toolbar to the full roster.
function resetFilters() {
  state.query = "";
  state.categoryIds.clear();
  searchInput.value = "";
  updateChipStates(chips, state.categoryIds);
  updateChipStates(legend, state.categoryIds);
  updateResults();
  searchInput.focus();
}

document.querySelector("[data-filters-reset]").addEventListener("click", resetFilters);

/** Clear the query only — Escape's one-level back-out for search. */
function clearSearch() {
  state.query = "";
  searchInput.value = "";
  updateResults();
}

/** Bring the search field into view and focus it — the [F] key. */
function focusSearch() {
  searchInput.scrollIntoView?.({ block: "center", behavior: "smooth" });
  searchInput.focus({ preventScroll: true });
}

document.querySelector("[data-find]").addEventListener("click", focusSearch);

/** True when keystrokes belong to a text field, not to shortcuts. */
function isTyping(target) {
  return Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));
}

// Keyboard:
// - Escape backs out one level at a time: an open panel first, then an
//   active search when focus is in the field (never the chips).
// - ← / → step through the open company's category.
// - F jumps to search when the panel is closed and nobody is typing.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!panelLayer.hidden) {
      closePanel();
      return;
    }
    if (event.target === searchInput && state.query !== "") clearSearch();
    return;
  }

  if (event.metaKey || event.ctrlKey || event.altKey) return;

  if (!panelLayer.hidden && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
    if (isTyping(event.target)) return;
    event.preventDefault();
    stepCompany(event.key === "ArrowLeft" ? -1 : 1);
    return;
  }

  if (panelLayer.hidden && (event.key === "f" || event.key === "F") && !isTyping(event.target)) {
    event.preventDefault();
    focusSearch();
  }
});

updateResults();
openFromHash();

// Hummingbird motion: section headings and rows fade up on first
// scroll into view.
initReveals(document);

// Hummingbird motion: the trailing cursor dot. No-op on touch pointers
// and under reduced motion.
initCursorDot(document);

// Paradigm motion: category headings drift a few px with scroll
// position. Also a no-op under reduced motion.
initDrift(document);
