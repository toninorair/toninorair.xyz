// Hero and chrome — pure DOM construction (the render.js idiom) plus
// the one-shot count-up.
//
// renderIndexNav()  the header's [01]–[10] jump links, one per category
// renderLegend()    the hero's layer list: real toggle buttons that
//                   share the filter state with the chips (main.js)
// renderMarquee()   the decorative band of names between hero and
//                   directory (aria-hidden in index.html)
// initCountUp()     the companies stat counting up from zero, once
//
// Every string comes from the dataset; nothing is invented.

import { countsByCategory } from "./stack.js";

const pad = (n) => String(n).padStart(2, "0");

/** Anchor id for a category's directory section. */
export const categoryAnchor = (categoryId) => `category-${categoryId}`;

/** The header index: "[01]" links to each category section. */
export function renderIndexNav(root, { categories }) {
  const doc = root.ownerDocument;
  root.replaceChildren();
  return categories.map((category, index) => {
    const link = doc.createElement("a");
    link.className = "index-link";
    link.href = `#${categoryAnchor(category.id)}`;
    link.textContent = `[${pad(index + 1)}]`;
    link.setAttribute("aria-label", `${pad(index + 1)} ${category.name}`);
    link.title = category.name;
    root.append(link);
    return link;
  });
}

/**
 * The hero legend: one toggle button per category — number, name,
 * roster count. Same `data-category-id` + `aria-pressed` contract as
 * the filter chips, so updateChipStates() syncs both.
 */
export function renderLegend(root, { categories, companies }) {
  const doc = root.ownerDocument;
  root.replaceChildren();
  const counts = countsByCategory(companies);

  return categories.map((category, index) => {
    const button = doc.createElement("button");
    button.type = "button";
    button.className = "legend-item";
    button.dataset.categoryId = category.id;
    button.setAttribute("aria-pressed", "false");

    const num = doc.createElement("span");
    num.className = "legend-num";
    num.textContent = pad(index + 1);

    const name = doc.createElement("span");
    name.className = "legend-name";
    name.textContent = category.name;

    const count = doc.createElement("span");
    count.className = "legend-count";
    count.textContent = String(counts.get(category.id) ?? 0);

    button.append(num, name, count);
    root.append(button);
    return button;
  });
}

/**
 * The name band: the first `perCategory` names of every category,
 * each tagged with its category number, rendered twice so a -50%
 * translate loops seamlessly.
 */
export function renderMarquee(root, { categories, companies, perCategory = 4 }) {
  const doc = root.ownerDocument;
  root.replaceChildren();

  const items = [];
  for (const [index, category] of categories.entries()) {
    const names = companies
      .filter((company) => company.categoryId === category.id)
      .slice(0, perCategory);
    for (const company of names) items.push({ name: company.name, num: pad(index + 1) });
  }

  const track = doc.createElement("div");
  track.className = "marquee-track";
  for (let copy = 0; copy < 2; copy++) {
    const group = doc.createElement("div");
    group.className = "marquee-group";
    for (const item of items) {
      const name = doc.createElement("span");
      name.className = "marquee-name";
      name.textContent = item.name;
      const num = doc.createElement("span");
      num.className = "marquee-num";
      num.textContent = item.num;
      group.append(name, num);
    }
    track.append(group);
  }
  root.append(track);
  return { track, count: items.length };
}

/** Cubic ease-out on [0, 1]. */
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/** True when the user asked the platform for reduced motion. */
function prefersReducedMotion(view) {
  return (
    typeof view?.matchMedia === "function" &&
    view.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Count `el` up from 0 to `target` once. The duration comes from the
 * --motion-count-up token (ms), which collapses to 0 under reduced
 * motion; without requestAnimationFrame, or at 0ms, the final value is
 * written immediately. Returns the final text.
 */
export function initCountUp(el, target) {
  const doc = el.ownerDocument;
  const view = doc.defaultView;
  const final = String(target);

  const token = view?.getComputedStyle?.(doc.documentElement)
    ?.getPropertyValue("--motion-count-up");
  const duration = Number.parseFloat(token) || 0;

  if (
    duration <= 0 ||
    prefersReducedMotion(view) ||
    typeof view?.requestAnimationFrame !== "function"
  ) {
    el.textContent = final;
    return final;
  }

  el.textContent = "0";
  let start = null;
  const step = (now) => {
    if (start === null) start = now;
    const t = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.round(target * easeOutCubic(t)));
    if (t < 1) view.requestAnimationFrame(step);
  };
  view.requestAnimationFrame(step);
  return final;
}
