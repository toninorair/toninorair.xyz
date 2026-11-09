// Company marks — the logo module shared by the directory and the
// profile panel.
//
// A mark is either the company's locally stored logo (resolved through
// the generated manifest, app/logos/manifest.js) or a monogram fallback
// — the name's first letter in the app's sans face, ink on a hairline
// rule. Fallbacks are real text, never a broken image (spec). Nothing
// here touches the network: assets are served from app/logos/.

import { LOGO_MANIFEST } from "../logos/manifest.js";

/**
 * The manifest entry for a company id — or the fallback shape when the
 * id is unknown or no mark was sourced for it.
 */
export function logoEntry(companyId) {
  const entry = LOGO_MANIFEST[companyId];
  return entry && !entry.fallback ? entry : { fallback: true };
}

/**
 * Build the mark node for `company`. Pure DOM construction (the
 * render.js idiom): node creation goes through `root.ownerDocument`,
 * so tests can run this headlessly.
 *
 * variant: "row" (directory mark, grayscale at rest in CSS) or "panel"
 * (profile header mark, always full color in CSS). Sizes live in the
 * stylesheet; the width/height attributes only give the browser an
 * intrinsic box before CSS applies.
 */
export function companyMark(root, company, { variant = "row" } = {}) {
  const doc = root.ownerDocument;
  const entry = logoEntry(company.id);

  if (entry.fallback) {
    const mark = doc.createElement("span");
    mark.className = `company-mark company-mark--fallback company-mark--${variant}`;
    // Decorative: the full name renders right beside it, so assistive
    // tech reads the name once — the letter itself stays screen-reader
    // clean (spec).
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = company.name.charAt(0);
    return mark;
  }

  const img = doc.createElement("img");
  img.className = `company-mark company-mark--${variant}`;
  img.src = entry.src;
  img.alt = company.name;
  img.loading = "lazy";
  img.decoding = "async";
  const px = variant === "panel" ? 40 : 17;
  img.width = px;
  img.height = px;
  return img;
}
