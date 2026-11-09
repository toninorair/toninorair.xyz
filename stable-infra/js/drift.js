// Scroll-linked section drift — the Paradigm pass, platform edition.
//
// The reference site keeps its section headings continuously alive
// while scrolling (GSAP + ScrollTrigger, scrubbed to scroll position).
// This app is framework- and CDN-free by constraint, so the same feel
// at a whisper of the intensity is platform primitives: each heading's
// translateY is a pure function of its position in the viewport, and a
// single requestAnimationFrame loop — driven by scroll and resize
// listeners, never a persistent ticker — recomputes it per frame.
//
// Deliberate limits, keeping the page jank-free and the text crisp:
// - transform-only (translateY; no top/left/width — those layout).
// - headings only (~a dozen nodes), never the 200-row list itself;
//   rect reads are bounded, so a scroll frame costs microseconds.
// - drift is applied only while a heading is near the viewport
// (within a 25% margin); far-off headings shed their inline transform.
// - translate values snap to device pixels (no fractional-pixel text
// blur).
//
// The drift never fights the one-time reveals: reveal.js animates the
// `.cluster-head` wrapper through a CSS transition, drift.js writes
// translateY on the h2 inside it — different elements, no transition
// on the h2, so both transforms compose without contention.

/** Total drift in px across a full viewport traversal — split around center. */
export const MAX_DRIFT_PX = 8;
/** How far beyond the viewport (fraction of its height) drift still applies. */
const VIEWPORT_MARGIN = 0.25;

/**
 * Drift (px) for a heading whose center sits at `progress` through the
 * viewport — 0 at the top edge, 1 at the bottom.
 *
 * The sign lags the scroll: a heading moving up the screen translates
 * slightly downward relative to it, so it reads as moving a touch
 * slower than the page — parallax-weight, not slide-in. Zero at dead
 * center, ±`maxPx` at the edges.
 */
export function driftFor(progress, maxPx = MAX_DRIFT_PX) {
  return (0.5 - progress) * 2 * maxPx;
}

/**
 * Snap a CSS-pixel value to the device-pixel grid — a translate of
 * 3.7 CSS px at dpr 2 lands on 3.5, so glyph rasterization never
 * rides a fractional pixel. dpr 1 rounds to whole pixels.
 */
export function snapToPixel(px, dpr = 1) {
  const scale = Math.max(dpr, 1);
  return Math.round(px * scale) / scale;
}

/**
 * Arm scroll drift on every `[data-drift]` element under `root`.
 *
 * One rAF loop, (re)scheduled by scroll/resize events and idle between
 * them. Under reduced motion — or without rAF — nothing is armed and
 * nothing is written; a mid-session preference flip strips the
 * listeners and every inline transform.
 *
 * Returns the armed elements (empty when opted out).
 */
export function initDrift(root = document) {
  const doc = root.documentElement ? root : root.ownerDocument;
  const view = doc.defaultView;
  if (!view) return [];
  if (view.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return [];
  if (typeof view.requestAnimationFrame !== "function") return [];

  const targets = Array.from(doc.querySelectorAll("[data-drift]"));
  if (targets.length === 0) return targets;

  let rafId = 0;
  let scheduled = false;

  function update() {
    scheduled = false;
    const viewportHeight = view.innerHeight;
    const margin = viewportHeight * VIEWPORT_MARGIN;
    const dpr = view.devicePixelRatio || 1;
    for (const target of targets) {
      const rect = target.getBoundingClientRect();
      // Near/in the viewport only; farther out the transform is
      // dropped so nothing accumulates offscreen work or state.
      if (rect.bottom <= -margin || rect.top >= viewportHeight + margin) {
        if (target.style.transform) target.style.transform = "";
        continue;
      }
      const progress = (rect.top + rect.height / 2) / viewportHeight;
      const drift = snapToPixel(driftFor(progress), dpr);
      target.style.transform = `translate3d(0, ${drift}px, 0)`;
    }
  }

  /** Schedule one shared frame per event burst — never a persistent loop. */
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    rafId = view.requestAnimationFrame(update);
  }

  view.addEventListener("scroll", schedule, { passive: true });
  view.addEventListener("resize", schedule);
  schedule(); // arm with the current scroll position

  // The user can flip reduced motion mid-session; drift must honor it
  // immediately, not on reload.
  view.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener?.(
    "change",
    (event) => {
      if (!event.matches) return;
      view.removeEventListener("scroll", schedule);
      view.removeEventListener("resize", schedule);
      view.cancelAnimationFrame(rafId);
      for (const target of targets) target.style.transform = "";
    },
  );

  return targets;
}
