// Single source of truth for the stablecoin ecosystem content.
// Category counts come from the "Top 200 Stablecoin Companies 2026" slide
// (infra.png). Transcribed rosters may be short of these counts; gaps are
// documented in TRANSCRIPTION_GAPS and data/TRANSCRIPTION.md — never closed
// by inventing names.
//
// The roster itself lives in per-batch modules under data/companies/ so
// parallel research work can edit one batch file without merge conflicts.
// COMPANIES is the concatenation of every batch in original roster order:
// edit entries in their own batch file, never here.

import { ISSUERS_A } from "./companies/issuers-a.js";
import { ISSUERS_B } from "./companies/issuers-b.js";
import { INFRASTRUCTURE_A } from "./companies/infrastructure-a.js";
import { INFRASTRUCTURE_B } from "./companies/infrastructure-b.js";
import { INFRASTRUCTURE_C } from "./companies/infrastructure-c.js";
import { INFRASTRUCTURE_D } from "./companies/infrastructure-d.js";
import { B2B_PAYMENTS_A } from "./companies/b2b-payments-a.js";
import { B2B_PAYMENTS_B } from "./companies/b2b-payments-b.js";
import { BANKS_A } from "./companies/banks-a.js";
import { BANKS_B } from "./companies/banks-b.js";
import { BLOCKCHAINS_A } from "./companies/blockchains-a.js";
import { BLOCKCHAINS_B } from "./companies/blockchains-b.js";
import { WALLETS_A } from "./companies/wallets-a.js";
import { WALLETS_B } from "./companies/wallets-b.js";
import { REMITTANCES } from "./companies/remittances.js";
import { CARD_ISSUING } from "./companies/card-issuing.js";
import { PAYMENT_NETWORKS_A } from "./companies/payment-networks-a.js";
import { PAYMENT_NETWORKS_B } from "./companies/payment-networks-b.js";
import { EXCHANGES } from "./companies/exchanges.js";

export const CATEGORIES = [
  { id: "issuers", name: "Issuers", count: 20 },
  { id: "infrastructure", name: "Stablecoin infrastructure", count: 45 },
  { id: "b2b-payments", name: "B2B payments", count: 31 },
  { id: "banks", name: "Banks", count: 15 },
  { id: "blockchains", name: "Blockchains", count: 18 },
  { id: "wallets", name: "Wallets & consumer apps", count: 22 },
  { id: "remittances", name: "Remittances", count: 12 },
  { id: "card-issuing", name: "Card issuing", count: 7 },
  { id: "payment-networks", name: "Payment networks", count: 17 },
  { id: "exchanges", name: "Exchanges", count: 13 },
];

// Every company on the slide. profileStatus "complete" means facts are
// confirmed from public sources; "pending" means the name is transcribed from
// the slide but the profile has not been verified yet (facts stay null — no
// guesses). Names the OCR may have mangled are listed in TRANSCRIPTION_GAPS.
export const COMPANIES = [
  ...ISSUERS_A,
  ...ISSUERS_B,
  ...INFRASTRUCTURE_A,
  ...INFRASTRUCTURE_B,
  ...INFRASTRUCTURE_C,
  ...INFRASTRUCTURE_D,
  ...B2B_PAYMENTS_A,
  ...B2B_PAYMENTS_B,
  ...BANKS_A,
  ...BANKS_B,
  ...BLOCKCHAINS_A,
  ...BLOCKCHAINS_B,
  ...WALLETS_A,
  ...WALLETS_B,
  ...REMITTANCES,
  ...CARD_ISSUING,
  ...PAYMENT_NETWORKS_A,
  ...PAYMENT_NETWORKS_B,
  ...EXCHANGES,
];

// Where the transcription does not yet match the slide's counts. Gaps are
// documented, never closed with invented names.
export const TRANSCRIPTION_GAPS = {
  "b2b-payments": {
    slideCount: 31,
    transcribedCount: 25,
    status: "incomplete",
    uncertain: ["Daya", "Due Network", "GSX", "Limited"],
  },
  infrastructure: {
    slideCount: 45,
    transcribedCount: 50,
    status: "overcount",
    uncertain: ["CoinsPaid", "Latitude", "ramp", "Slash", "Walapay"],
  },
  remittances: {
    slideCount: 12,
    transcribedCount: 13,
    status: "overcount",
    uncertain: ["Sphere", "Félix Pago"],
  },
};

// ---------------------------------------------------------------------------
// Derived verified-entity map (round-2 spec: implicit project links).
//
// Aggregates two already-verified sources into one NAME → HTTPS URL map:
// every complete company's "Website (official)" link and every partnerLinks
// value. No new URLs are introduced here — the map only re-exposes URLs the
// dataset already verified.
//
// Keys match exact names, case-insensitively. When two names normalize
// alike, the longer original name wins, so a qualified form like
// "Paxos (USDG)" keeps its own, more specific entry over "Paxos". A
// company's own verified website outranks a partner-link entry for the
// same normalized name — two entries may still disagree (e.g. a bank
// group profiled under its digital-asset subsidiary's domain), and the
// profile's own official-website fact is the primary source.

const normalizedEntityName = (name) => name.trim().toLowerCase();

const collectVerifiedEntities = (companies) => {
  const entities = new Map();
  const add = (name, url, { allowOverwrite = true } = {}) => {
    if (typeof name !== "string" || typeof url !== "string") return;
    if (!url.startsWith("https://")) return;
    const key = normalizedEntityName(name);
    const existing = entities.get(key);
    if (existing != null && (!allowOverwrite || name.length <= existing.name.length)) return;
    entities.set(key, { name, url });
  };

  // Pass 1 — official websites: every company resolves under its own name.
  for (const company of companies) {
    const website = company.facts?.links?.find((link) => link.label === "Website (official)");
    if (website) add(company.name, website.url, { allowOverwrite: false });
  }
  // Pass 2 — partner links: additive only; they never displace a
  // company's own website entry.
  for (const company of companies) {
    for (const [partner, url] of Object.entries(company.partnerLinks ?? {})) {
      add(partner, url);
    }
  }
  return entities;
};

export const VERIFIED_ENTITIES = collectVerifiedEntities(COMPANIES);

/**
 * The verified official URL for `name`, or null when nothing in the
 * dataset verifies that exact name. Case-insensitive; a null or blank
 * name never matches.
 */
export function verifiedEntityUrl(name) {
  if (typeof name !== "string" || name.trim().length === 0) return null;
  return VERIFIED_ENTITIES.get(normalizedEntityName(name))?.url ?? null;
}
