// Search matching — pure functions over the company dataset.
//
// A query matches a company when every whitespace-separated token
// appears somewhere in its name or product list (case-insensitive).
// Products live on facts, so only complete profiles contribute product
// terms; a pending profile stays searchable by name. Nothing here
// touches the DOM — main.js wires these to the toolbar.

/** Lowercased haystack for `company`: its name plus any product names. */
export function searchableText(company) {
  const products = company.facts?.products ?? [];
  return [company.name, ...products].join(" ").toLowerCase();
}

/** True when every token in `query` matches `company`'s name or products. */
export function matchesQuery(company, query) {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;
  const haystack = searchableText(company);
  return tokens.every((token) => haystack.includes(token));
}

/**
 * Combined filter: search AND categories. A query's tokens must all
 * match; selected categoryIds are multi-select (a company passes when
 * it belongs to any of them), and an empty set means all categories.
 */
export function filterCompanies(companies, { query = "", categoryIds = [] } = {}) {
  const selected = new Set(categoryIds);
  return companies.filter(
    (company) =>
      matchesQuery(company, query) &&
      (selected.size === 0 || selected.has(company.categoryId)),
  );
}

/** The live results line: totals hide nothing, shortfalls name the gap. */
export function formatResultsCount(matches, total) {
  return matches === total
    ? `Showing all ${total} companies`
    : `Showing ${matches} of ${total} companies`;
}
