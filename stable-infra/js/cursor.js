// The Hummingbird cursor dot — a small vermilion companion that trails
// the pointer with a smooth lag and swells over hoverable elements.
//
// The reference site builds this with GSAP's ticker; the same feel is
// a handful of platform primitives: a requestAnimationFrame loop that
// drives the dot's position through a damped spring (position +
// velocity, delta-time-based — it overshoots and settles organically
// rather than decaying exponentially) and eases its scale toward its
// target, while delegated pointer listeners only write numbers, never
// layout. Transform and opacity only, so the page never janks.
//
// At speed the dot stretches along its motion vector (capped, keeping
// its apparent area) and relaxes back to a circle at rest.
//
// Deliberate limits, matching the reference's pattern:
// - the dot accompanies the native cursor; it never hides or replaces
//   it, so usability and text-caret behavior are untouched.
// - fine pointers only (no touch devices) and never under
//   prefers-reduced-motion — the module returns null and the page
//   ships zero motion in both cases.
//
// The dot starts hidden and only becomes visible on the first
// pointermove, so it never flashes at (0, 0) before the pointer has
// entered the page.

/** Per-frame easing fraction at 60fps — how much of the lag closes each frame. */
export const EASE_PER_FRAME = 0.18;
/** Reference frame duration for the frame-rate-independent easing. */
export const FRAME_MS = 1000 / 60;
/** Spring stiffness (1/s²) — how hard the dot pulls toward the pointer. */
export const STIFFNESS = 400;
/** Spring damping (1/s) — underdamped (ζ ≈ 0.6), so the settle overshoots once. */
export const DAMPING = 24;
/** Max stretch along the motion vector — 1.4x the long axis at full speed. */
export const MAX_STRETCH = 0.4;
/** Speed (px/s) at which the dot reaches full stretch. */
export const STRETCH_SPEED = 2000;
/** Hover scale — the dot swells to this over links, buttons, inputs. */
const HOVER_SCALE = 1.8;
/** Below this distance (px) and scale delta the loop sleeps until the next event. */
const SETTLE_EPSILON = 0.1;
/** Below this speed (px/s) the dot counts as at rest — a circle again. */
const REST_SPEED = 5;

/** Hoverables the dot reacts to: links, buttons, rows, inputs. */
const HOVER_SELECTOR = "a, button, input, select, textarea, [role='button']";

/**
 * Frame-rate-independent easing fraction for a frame of `dtMs`.
 *
 * `EASE_PER_FRAME` is defined at `FRAME_MS`; this rescales it so the
 * dot's lag feels identical at 120Hz or 30Hz.
 */
export function frameAlpha(dtMs, base = EASE_PER_FRAME, frameMs = FRAME_MS) {
  const frames = Math.max(dtMs, 0) / frameMs;
  return 1 - Math.pow(1 - base, frames);
}

/** One exponential-smoothing step: ease `current` toward `target`. */
export function approach(current, target, alpha) {
  return current + (target - current) * alpha;
}

/**
 * One semi-implicit Euler spring step (position + velocity).
 *
 * `dtMs` is clamped to two reference frames so a background-tab stall
 * can't sling the dot across the page. The damping is below critical,
 * so the integrator overshoots the target once and settles — the
 * organic follow the lerp's exponential decay can't produce.
 */
export function springStep(position, velocity, target, stiffness, damping, dtMs) {
  const dt = Math.min(Math.max(dtMs, 0), FRAME_MS * 2) / 1000;
  const acceleration = -stiffness * (position - target) - damping * velocity;
  const nextVelocity = velocity + acceleration * dt;
  return { position: position + nextVelocity * dt, velocity: nextVelocity };
}

/**
 * Stretch factor for a speed in px/s — linear up to `fullSpeed`, capped
 * at `1 + maxStretch` (1.4x by default). At rest this returns exactly 1:
 * a circle, never an ellipse.
 */
export function stretchFor(speed, maxStretch = MAX_STRETCH, fullSpeed = STRETCH_SPEED) {
  if (speed <= 0) return 1;
  return 1 + Math.min(speed / fullSpeed, 1) * maxStretch;
}

/**
 * Arm the cursor dot on `root`'s document.
 *
 * Everything hangs off the resolved document and its view (not
 * globals), so tests can drive a happy-dom window directly.
 *
 * Returns the dot element while it is active, or null when the
 * environment opted out (coarse pointer, reduced motion, no rAF) —
 * callers must treat null as "feature off", not an error.
 */
export function initCursorDot(root = document) {
  const doc = root.documentElement ? root : root.ownerDocument;
  const view = doc.defaultView;
  if (!view) return null;

  const media = (query) => view.matchMedia?.(query)?.matches ?? false;
  if (media("(prefers-reduced-motion: reduce)") || !media("(pointer: fine)")) {
    return null;
  }
  if (typeof view.requestAnimationFrame !== "function") return null;

  const dot = doc.createElement("div");
  dot.className = "cursor-dot";
  dot.setAttribute("aria-hidden", "true");
  doc.body.append(dot);

  // Position in CSS pixels, velocity in px/s (the spring's memory);
  // scale eases exponentially. The dot starts offscreen and unseen.
  const current = { x: -100, y: -100, scale: 1 };
  const velocity = { x: 0, y: 0 };
  const target = { x: -100, y: -100, scale: 1 };
  let rafId = 0;
  let lastTime = 0;
  let running = false;

  function frame(time) {
    const dtMs = lastTime === 0 ? FRAME_MS : time - lastTime;
    lastTime = time;

    // Position: a spring, not a lerp — velocity carries between frames,
    // so the dot overshoots and settles instead of decaying.
    const x = springStep(current.x, velocity.x, target.x, STIFFNESS, DAMPING, dtMs);
    const y = springStep(current.y, velocity.y, target.y, STIFFNESS, DAMPING, dtMs);
    current.x = x.position;
    current.y = y.position;
    velocity.x = x.velocity;
    velocity.y = y.velocity;

    // Scale (the hover swell) keeps its exponential ease: a springy
    // radius reads as wobble, not polish.
    const alpha = frameAlpha(dtMs);
    current.scale = approach(current.scale, target.scale, alpha);

    // Velocity stretch: elongate along the motion vector, keeping the
    // apparent area (scaleX * scaleY) roughly constant. At rest the
    // stretch snaps to 1 — the last painted frame is a circle, never
    // a residual ellipse.
    const speed = Math.hypot(velocity.x, velocity.y);
    const stretch = speed < REST_SPEED ? 1 : stretchFor(speed);
    const angle = Math.atan2(velocity.y, velocity.x);
    const scaleX = current.scale * stretch;
    const scaleY = current.scale / stretch;
    dot.style.transform =
      `translate3d(${current.x}px, ${current.y}px, 0) ` +
      `rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;

    const settled =
      Math.abs(target.x - current.x) < SETTLE_EPSILON &&
      Math.abs(target.y - current.y) < SETTLE_EPSILON &&
      Math.abs(target.scale - current.scale) < SETTLE_EPSILON &&
      speed < REST_SPEED;
    if (settled) {
      running = false; // sleep until the pointer moves again
      return;
    }
    rafId = view.requestAnimationFrame(frame);
  }

  /** (Re)start the easing loop, dropping one stale frame of dt. */
  function wake() {
    if (running) return;
    running = true;
    lastTime = 0;
    rafId = view.requestAnimationFrame(frame);
  }

  doc.addEventListener("pointermove", (event) => {
    target.x = event.clientX;
    target.y = event.clientY;
    dot.classList.add("is-visible");
    wake();
  });

  doc.addEventListener(
    "pointerover",
    (event) => {
      if (event.target.closest?.(HOVER_SELECTOR)) {
        target.scale = HOVER_SCALE;
        wake();
      }
    },
    true,
  );

  doc.addEventListener(
    "pointerout",
    (event) => {
      if (event.target.closest?.(HOVER_SELECTOR)) {
        target.scale = 1;
        wake();
      }
    },
    true,
  );

  // Left the window: fade the dot out so it doesn't freeze mid-page.
  doc.addEventListener("pointerleave", () => {
    dot.classList.remove("is-visible");
  });

  // The user can flip reduced motion mid-session; the dot must honor
  // it immediately, not on reload.
  view.matchMedia?.("(prefers-reduced-motion: reduce)")?.addEventListener?.(
    "change",
    (event) => {
      if (!event.matches) return;
      view.cancelAnimationFrame(rafId);
      dot.remove();
    },
  );

  return dot;
}
