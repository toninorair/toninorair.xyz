// Profile panel content — pure DOM construction (the render.js idiom).
//
// renderProfile() fills the panel body for a company from the shared
// dataset: a complete profile shows its sourced facts and citation
// links; a profile without verified facts shows nothing — no facts are
// invented and no placeholder text is rendered.
//
// Nothing here invents content: every rendered string and link target
// comes from data/companies.js.

import { verifiedEntityUrl } from "../data/companies.js";
import { companyMark } from "./marks.js";

/** The panel's fact fields, in display order. */
const FACT_FIELDS = [
  { key: "founded", label: "Founded" },
  { key: "products", label: "Products" },
  { key: "tech", label: "Notes" },
  { key: "metrics", label: "Key metrics" },
  { key: "funding", label: "Reported funding" },
  { key: "stage", label: "Milestones" },
  { key: "partners", label: "Partners & customers" },
  { key: "people", label: "Founders & team" },
  { key: "links", label: "Sources & links" },
];

/**
 * Fill `body` with `company`'s profile. Header filling (category,
 * name) stays with the caller — this function owns the body only.
 */
export function renderProfile(body, company) {
  const doc = body.ownerDocument;
  body.replaceChildren();

  if (company.profileStatus === "complete" && company.facts) {
    const stats = headlineStats(company.facts);
    if (stats.length > 0) body.append(statStrip(doc, stats));
    body.append(
      element(doc, "p", { className: "panel-lede", text: company.facts.description }),
      factList(doc, company.facts, company),
    );
  }
  // Without verified facts there is nothing to show: the header (name,
  // category) still renders, but the body stays empty — no notice, no
  // placeholder rows (spec: zero pending text anywhere).
}

// ---------------------------------------------------------------
// Headline stats — the company page's top strip.
//
// Up to three big figures lifted verbatim from sourced facts: the
// founding year, the leading dollar figure of the funding line, and
// the first key metric that reads "Label: value". Nothing is computed
// or estimated — a fact that does not match its pattern is simply not
// promoted (it still renders in full in the fact list below).
// ---------------------------------------------------------------

/** Leading dollar amount of a funding line, e.g. "$62M" — or null. */
const FUNDING_HEAD = /^(?:US)?\$\s?[\d.,]+\s?(?:[KMB]n?|million|billion)?\+?/i;
/** Longest metric value promoted to the strip; longer ones stay below. */
const MAX_STAT_VALUE = 22;

/** Split "Label: value (qualifier)" into its parts, or null. */
export function splitMetric(text) {
  const sep = text.indexOf(": ");
  if (sep <= 0) return null;
  const label = text.slice(0, sep);
  const rest = text.slice(sep + 2);
  const paren = rest.indexOf(" (");
  return {
    label,
    value: paren > 0 ? rest.slice(0, paren) : rest,
    qualifier: paren > 0 ? rest.slice(paren + 1) : "",
  };
}

/** The strip's figures for `facts`: [{ label, value }], at most three. */
export function headlineStats(facts) {
  const stats = [];
  if (typeof facts.founded === "string" && facts.founded.length > 0 && facts.founded.length <= MAX_STAT_VALUE) {
    stats.push({ label: "Founded", value: facts.founded });
  }
  const funding = typeof facts.funding === "string" ? facts.funding.match(FUNDING_HEAD) : null;
  if (funding) stats.push({ label: "Reported funding", value: funding[0].trim() });
  for (const line of facts.metrics ?? []) {
    const metric = splitMetric(line);
    if (metric && metric.value.length <= MAX_STAT_VALUE && metric.label.length <= 40) {
      stats.push({ label: metric.label, value: metric.value });
      break;
    }
  }
  return stats;
}

function statStrip(doc, stats) {
  const dl = element(doc, "dl", { className: "panel-stats" });
  for (const stat of stats) {
    const item = element(doc, "div", { className: "panel-stat" });
    item.append(
      element(doc, "dt", { className: "panel-stat-label", text: stat.label }),
      element(doc, "dd", { className: "panel-stat-value", text: stat.value }),
    );
    dl.append(item);
  }
  return dl;
}

/** One `dl` row per sourced fact field; unsourced fields are omitted. */
function factList(doc, facts, company) {
  const dl = element(doc, "dl", { className: "fact-list" });
  for (const field of FACT_FIELDS) {
    const value = facts[field.key];
    if (value == null || value.length === 0) continue; // omitted, never a placeholder
    const row = element(doc, "div", { className: "fact" });
    row.append(element(doc, "dt", { text: field.label }), fieldValue(doc, field.key, value, company));
    dl.append(row);
  }
  return dl;
}

function fieldValue(doc, key, value, company) {
  const dd = element(doc, "dd");

  if (key === "links") {
    const list = element(doc, "ul");
    for (const link of value) list.append(linkItem(doc, link));
    dd.append(list);
    return dd;
  }

  if (key === "people") {
    // Verified founders and current C-suite: "Name — Role" plus inline
    // profile anchors only for platforms the data verified. People without
    // a verifiable profile are absent from the data entirely (no-guess).
    const list = element(doc, "ul", { className: "fact-lines" });
    for (const person of value) list.append(personItem(doc, person));
    dd.append(list);
    return dd;
  }

  if (key === "partners") {
    // Verified partner names become links via the profile's optional
    // partnerLinks map; everything else renders exactly as before.
    const list = element(doc, "ul");
    for (const item of value) list.append(factPill(doc, item, company.partnerLinks?.[item]));
    dd.append(list);
    return dd;
  }

  if (key === "products" || key === "tech") {
    // Implicit linking (spec): a pill naming a verified entity — any
    // company's official website or any verified partner link — becomes
    // a link itself; an explicit productLinks entry wins over the
    // global map. Unverified names stay plain text.
    const list = element(doc, "ul");
    for (const item of value) {
      list.append(factPill(doc, item, company.productLinks?.[item] ?? verifiedEntityUrl(item)));
    }
    dd.append(list);
    return dd;
  }

  if (key === "metrics") {
    // Metrics read as plain metric lines, not chip pills (spec).
    // A "Label: value" line splits into styled spans whose text still
    // concatenates to the exact sourced string.
    const list = element(doc, "ul", { className: "fact-lines fact-metrics" });
    for (const item of value) list.append(metricItem(doc, item));
    dd.append(list);
    return dd;
  }

  dd.textContent = value;
  return dd;
}

/**
 * A fact pill: plain text unless `href` resolves — via the profile's
 * partnerLinks/productLinks maps or the global verified-entity map —
 * in which case the pill wraps a single external link, same target/rel
 * contract as the citation links.
 */
function factPill(doc, text, href) {
  const pill = element(doc, "li", { className: "fact-pill" });
  if (href == null) {
    pill.textContent = text;
    return pill;
  }
  const anchor = element(doc, "a", { className: "fact-pill-link", text });
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  pill.replaceChildren(anchor);
  return pill;
}

function metricItem(doc, text) {
  const item = element(doc, "li");
  const metric = splitMetric(text);
  if (!metric) {
    item.textContent = text;
    return item;
  }
  item.append(
    element(doc, "span", { className: "metric-label", text: metric.label }),
    element(doc, "span", { className: "metric-sep", text: ": " }),
    element(doc, "span", { className: "metric-value", text: metric.value }),
  );
  if (metric.qualifier) {
    item.append(element(doc, "span", { className: "metric-qualifier", text: ` ${metric.qualifier}` }));
  }
  return item;
}

/** Hostname without "www." for a source URL, or "" when it won't parse. */
export function sourceDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function linkItem(doc, link) {
  const item = element(doc, "li", { className: "source" });
  const anchor = element(doc, "a", { className: "fact-link", text: link.label });
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  item.append(anchor);
  const domain = sourceDomain(link.url);
  if (domain) item.append(element(doc, "span", { className: "source-domain", text: domain }));
  return item;
}

/** One roster line: "Name — Role" with inline LinkedIn/X anchors where verified. */
function personItem(doc, person) {
  const item = element(doc, "li");
  item.textContent = `${person.name} — ${person.role}`;
  for (const [key, label] of [
    ["linkedin", "LinkedIn"],
    ["x", "X"],
  ]) {
    if (person[key] == null) continue;
    item.append(" ", personLink(doc, label, person[key]));
  }
  return item;
}

function personLink(doc, text, href) {
  const anchor = element(doc, "a", { className: "fact-link", text });
  anchor.href = href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  return anchor;
}

function element(doc, tag, { className, text } = {}) {
  const el = doc.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

/**
 * Show the panel for `company`: fill header and body from the dataset,
 * unhide the layer, and move focus to the company name so assistive
 * tech announces the dialog. Pure DOM — open state stays with the
 * caller, which owns the trigger for focus return on close.
 */
export function openProfilePanel(layer, company, { categories = [], companies = [] } = {}) {
  const categoryIndex = categories.findIndex((entry) => entry.id === company.categoryId);
  const category = categories[categoryIndex];

  const kicker = layer.querySelector("[data-panel-category]");
  kicker.textContent = category ? category.name : "";
  // The "01 · " prefix is drawn from this attribute in CSS, so the
  // kicker's text stays the bare category name.
  if (categoryIndex >= 0) kicker.dataset.index = String(categoryIndex + 1).padStart(2, "0");
  else delete kicker.dataset.index;

  // The mark (stored logo or monogram) sits beside the name, full color
  // here — grayscale-at-rest is a directory-row treatment only (spec).
  layer
    .querySelector("[data-panel-logo]")
    ?.replaceChildren(companyMark(layer, company, { variant: "panel" }));

  const name = layer.querySelector("[data-panel-name]");
  name.textContent = company.name;

  const siblings = siblingsOf(company, companies);
  const position = layer.querySelector("[data-panel-position]");
  if (position) {
    const at = siblings.findIndex((entry) => entry.id === company.id);
    position.textContent = siblings.length > 0 ? `${pad2(at + 1)} / ${pad2(siblings.length)}` : "";
  }
  for (const selector of ["[data-panel-prev]", "[data-panel-next]"]) {
    const step = layer.querySelector(selector);
    if (step) step.hidden = siblings.length < 2;
  }

  renderProfile(layer.querySelector("[data-panel-body]"), company);
  renderMore(layer, company, siblings, category);

  // Restart the entrance/stagger animations on every open, including
  // a swap while already open (prev/next): toggling the class forces
  // the keyframes to replay.
  const panel = layer.querySelector(".profile-panel");
  if (panel) {
    panel.classList.remove("is-entering");
    void panel.offsetWidth;
    panel.classList.add("is-entering");
  }
  const scroller = layer.querySelector(".panel-scroll");
  if (scroller) scroller.scrollTop = 0;

  layer.hidden = false;
  name.focus();
}

const pad2 = (n) => String(n).padStart(2, "0");

/** The companies sharing `company`'s category, in roster order. */
export function siblingsOf(company, companies) {
  return companies.filter((entry) => entry.categoryId === company.categoryId);
}

/**
 * The neighbor `step` places from `company` within its category,
 * wrapping at both ends — or null when the category has no other member.
 */
export function neighborOf(company, companies, step) {
  const siblings = siblingsOf(company, companies);
  if (siblings.length < 2) return null;
  const at = siblings.findIndex((entry) => entry.id === company.id);
  return siblings[(at + step + siblings.length) % siblings.length];
}

/**
 * "More in <category>": the other members of the category as buttons
 * (`data-sibling-id`), so a profile — even one without verified facts
 * yet — always leads somewhere. Lives outside the body: the body holds
 * sourced facts only.
 */
function renderMore(layer, company, siblings, category) {
  const nav = layer.querySelector("[data-panel-more]");
  if (!nav) return;
  const doc = nav.ownerDocument;
  const list = nav.querySelector("[data-panel-more-list]");
  const title = nav.querySelector("[data-panel-more-title]");
  const others = siblings.filter((entry) => entry.id !== company.id);

  list.replaceChildren();
  nav.hidden = others.length === 0;
  if (others.length === 0) return;

  title.textContent = category ? `More in ${category.name}` : "More in this category";
  for (const other of others) {
    const item = element(doc, "li", { className: "panel-more-item" });
    const button = element(doc, "button", { className: "panel-more-link", text: other.name });
    button.type = "button";
    button.dataset.siblingId = other.id;
    item.append(button);
    list.append(item);
  }
}

/**
 * Hide the panel and return focus to `trigger` — the map node that
 * opened it — when that node is still in the document.
 */
export function closeProfilePanel(layer, { trigger } = {}) {
  if (layer.hidden) return;
  layer.hidden = true;
  if (trigger && trigger.isConnected) trigger.focus();
}

