// Pure DOM construction for the ecosystem directory page.
//
// renderMap() builds the grouped directory: one section per category,
// with a plain heading and the companies as full-text names in a clean
// list, each prefixed by its mark (stored logo or monogram fallback —
// see js/marks.js). No SVG, no decorative shapes — the design is ink
// on paper.
// Behavior (main.js) stays separate so tests can run this headlessly
// against the real dataset. Node creation goes through
// root.ownerDocument — no dependency on a global document.

import { companyMark } from "./marks.js";

/**
 * Build the directory inside `root` and return its parts:
 * { directory, grid, blocks } — what main.js consumes. Each block is
 * one category section (`[data-category-id]`).
 */
export function renderMap(root, { categories, companies }) {
  const doc = root.ownerDocument;
  root.replaceChildren();

  const directory = doc.createElement("div");
  directory.className = "directory";

  const grid = doc.createElement("ul");
  grid.className = "directory-grid";
  grid.setAttribute("role", "list"); // list-style is removed in CSS

  const byCategory = groupByCategory(companies);

  for (const [index, category] of categories.entries()) {
    grid.append(
      categorySection(doc, category, index, byCategory.get(category.id) ?? [], companies.length),
    );
  }

  directory.append(grid);
  root.append(directory);

  return {
    directory,
    grid,
    blocks: Array.from(grid.querySelectorAll("[data-category-id]")),
  };
}

// ---------------------------------------------------------------
// Band layout: each category is a full-width band — an aside (kicker,
// heading, share bar) beside a body (every company, in columns).
// ---------------------------------------------------------------

function categorySection(doc, category, index, companies, rosterTotal) {
  const section = doc.createElement("li");
  section.className = "cluster";
  section.dataset.categoryId = category.id;
  // Jump target for the header's [01]–[10] index (see js/hero.js).
  section.id = `category-${category.id}`;
  // Motion pass: this section is one reveal group — elements entering
  // together stagger in a wave (see js/reveal.js).
  section.dataset.revealGroup = "";

  // Deck signature: an eyebrow kicker — the category's index and name,
  // uppercased and letter-spaced in CSS — above the section header.
  const kicker = doc.createElement("p");
  kicker.className = "kicker";
  kicker.textContent = `${String(index + 1).padStart(2, "0")} · ${category.name}`;
  kicker.dataset.reveal = "";

  const header = doc.createElement("header");
  header.className = "cluster-head";
  // Motion pass: section headings join the scroll-reveal set (revealed
  // once, on first entry — see js/reveal.js). Inert without the
  // reveal module's `.reveal-armed` class.
  header.dataset.reveal = "";

  const name = doc.createElement("h2");
  name.className = "category-name";
  name.textContent = category.name;
  // Paradigm pass: the heading drifts a few px with scroll position
  // (see js/drift.js) — a separate element from the [data-reveal]
  // header above, so the one-time reveal and the scroll drift
  // transform different nodes and never contend.
  name.dataset.drift = "";

  // The count is the source slide's number, even where transcription is
  // still short (see data/TRANSCRIPTION.md) — gaps are shown, not hidden.
  const count = doc.createElement("span");
  count.className = "category-count";
  count.textContent = String(category.count);

  header.append(name, count);

  const aside = doc.createElement("div");
  aside.className = "cluster-aside";
  aside.append(kicker, header, shareBar(doc, companies.length, rosterTotal));

  const body = doc.createElement("div");
  body.className = "cluster-body";
  body.append(companyList(doc, companies));

  section.append(aside, body);
  return section;
}

/**
 * The share bar: this category's slice of the listed roster, as a thin
 * rule that grows in on reveal, and a mono "n of N listed" label.
 * Roster counts (not slide counts) — the bar measures what is listed.
 */
function shareBar(doc, count, total) {
  const share = doc.createElement("div");
  share.className = "category-share";
  share.dataset.reveal = "";
  share.style.setProperty("--share", total > 0 ? String(count / total) : "0");

  const track = doc.createElement("span");
  track.className = "category-share-track";
  track.setAttribute("aria-hidden", "true");
  const fill = doc.createElement("span");
  fill.className = "category-share-fill";
  track.append(fill);

  const label = doc.createElement("span");
  label.className = "category-share-label";
  label.textContent = `${count} of ${total} listed`;

  share.append(track, label);
  return share;
}

function groupByCategory(companies) {
  const map = new Map();
  for (const company of companies) {
    if (!map.has(company.categoryId)) map.set(company.categoryId, []);
    map.get(company.categoryId).push(company);
  }
  return map;
}

function companyList(doc, companies) {
  const list = doc.createElement("ul");
  list.className = "company-list";
  list.setAttribute("role", "list"); // list-style is removed in CSS

  for (const company of companies) {
    const item = doc.createElement("li");
    item.className = "company-item";
    // Motion pass: rows join the scroll-reveal set and stagger as a
    // wave within their section (see js/reveal.js). Offscreen rows
    // cost nothing — they are only revealed when they first intersect.
    item.dataset.reveal = "";

    const button = doc.createElement("button");
    button.type = "button";
    button.className = "company";
    button.dataset.companyId = company.id;
    button.dataset.profileStatus = company.profileStatus;

    // The mark (stored logo or monogram) and the full-text name share
    // the grid's name column — the row counter and arrow pseudo-elements
    // keep their own columns, so the row rhythm is untouched.
    const identity = doc.createElement("span");
    identity.className = "company-identity";

    // Full text, always: the name is the whole label — no truncation,
    // no decoration inside the name itself (spec).
    const name = doc.createElement("span");
    name.className = "company-name";
    name.textContent = company.name;

    identity.append(companyMark(button, company), name);
    button.append(identity);
    item.append(button);
    list.append(item);
  }
  return list;
}
