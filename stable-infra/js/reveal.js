// Scroll-triggered reveals — the Hummingbird motion pass, platform edition.
//
// The reference site (hummingbird.vc/philosophy) drives its text reveals
// with GSAP 3.15 + ScrollTrigger. This app is framework- and CDN-free by
// constraint, so the same visual result — an opacity + filter fade with
// a slight upward translate, ease-out, playing exactly once — is built
// on platform primitives: an IntersectionObserver detects first entry
// and a CSS transition in main.css does the animating. No keyframe
// loops, no external dependency.
//
// The wave: elements that enter together inside one
// `[data-reveal-group]` (a category section) reveal in DOM order with
// a short incremental delay, so a section settles top-to-bottom
// instead of popping as one block. The delay is assigned per
// intersecting batch — a slow scroll still reveals a late row
// immediately, and elements outside any group (page headers) reveal
// solo with no delay. Steps are capped so a 40-row section's tail
// never waits seconds behind its head.
//
// The hidden state only applies once this module arms the document
// (`.reveal-armed` on the document element), so static markup — and any
// page rendered without JavaScript — never hides content.

/** Delay between neighbors in one batch, ms — tighter than the panel's 50ms ladder. */
const STAGGER_STEP_MS = 36;
/** Cap on ladder steps per batch; past this, rows share the last step. */
const STAGGER_MAX_STEPS = 10;
/** Node.DOCUMENT_POSITION_FOLLOWING, spelled out — the module must not
    depend on the Node global (tests run against happy-dom windows). */
const DOCUMENT_POSITION_FOLLOWING = 4;

/** True when the user asked the platform for reduced motion. */
function prefersReducedMotion() {
  return (
    typeof matchMedia === "function" &&
    matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** The group an element staggers within, or null when it reveals solo. */
function revealGroup(target) {
  return target.closest("[data-reveal-group]");
}

/** DOM order for a same-document pair: -1 when `a` precedes `b`. */
function byDocumentOrder(a, b) {
  return a.compareDocumentPosition(b) & DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

/**
 * Reveal the intersecting entries of one observer callback as a wave.
 *
 * Entries are grouped by their reveal-group ancestor; each group's
 * members get an incremental `--reveal-delay` (capped) in DOM order,
 * then every one is marked revealed and unobserved. Non-intersecting
 * entries stay observed.
 */
function revealBatch(entries, observer) {
  const groups = new Map();
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    // The solo scope falls back to the entry's own document — never a
    // global (tests drive happy-dom windows, and workers have none).
    const doc = entry.target.ownerDocument;
    const scope = revealGroup(entry.target) ?? doc.documentElement;
    if (!groups.has(scope)) groups.set(scope, []);
    groups.get(scope).push(entry.target);
  }

  for (const members of groups.values()) {
    for (const [index, target] of members.sort(byDocumentOrder).entries()) {
      const step = Math.min(index, STAGGER_MAX_STEPS);
      if (step > 0) {
        target.style.setProperty("--reveal-delay", `${step * STAGGER_STEP_MS}ms`);
      }
      target.classList.add("is-revealed");
      observer.unobserve(target); // first entry only — never repeats
    }
  }
}

/**
 * Arm and observe every `[data-reveal]` element under `root`.
 *
 * Each element reveals on its first intersection and is then never
 * observed again (once, not repeating). Under reduced motion — or
 * where IntersectionObserver is missing — everything is revealed
 * immediately: zero motion, nothing left hidden.
 *
 * Returns the armed elements.
 */
export function initReveals(root = document) {
  const targets = Array.from(root.querySelectorAll("[data-reveal]"));
  if (targets.length === 0) return targets;

  root.documentElement.classList.add("reveal-armed");

  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
    for (const target of targets) target.classList.add("is-revealed");
    return targets;
  }

  // The observer falls back to the closure binding when the callback
  // is invoked without its second argument (the spec always passes
  // it; direct calls in tests may not).
  const observer = new IntersectionObserver(
    (entries, obs) => revealBatch(entries, obs ?? observer),
    { threshold: 0.15 },
  );

  for (const target of targets) observer.observe(target);
  return targets;
}
