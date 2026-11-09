# Transcription gaps and sources

The roster in `data/companies.js` is transcribed from the source slide
`infra.png` ("Top 200 Stablecoin Companies 2026" — Gaspard Lezin, October 22,
2026, https://x.com/gaspardlezin/status/2113285618545340605), cross-checked
against an earlier transcription of the slide's live-map companion at
https://0usyiiqa2c-8000.hosted.obvious.ai/map.html. The slide claims **200
companies across ten categories**; the transcription now carries **200
names** after the completion pass recorded below.

Per the project rule, no name is invented to close a count gap. Every
addition, correction, and remaining divergence is recorded here with the
source that supports it.

## Evidence hierarchy

1. **The slide** (`infra.png`) is the source of truth for membership and
   category counts. The completion pass re-read it region by region at high
   zoom (multiple OCR passes over the logo clusters).
2. **The source author's own thread lists** (the typed category lists and
   company handles in the X thread above, read via a Nitter mirror) are
   corroborating evidence — the author's rendering of names, not a
   substitute for the slide.
3. **Web research** (company sites and category coverage, November 2026)
   confirms a candidate is a real company in the right context before it
   enters the roster.

## Gap summary

| Category                 | Slide count | Transcribed | Status                                                   |
| ------------------------ | ----------- | ----------- | -------------------------------------------------------- |
| Issuers                  | 20          | 20          | complete                                                  |
| Stablecoin infrastructure| 45          | **50**      | 5 names added; 5 logos read as B2B — relocation pending   |
| B2B payments             | 31          | **25**      | INXY Payments added; 6 names pending relocation           |
| Banks                    | 15          | 15          | complete                                                  |
| Blockchains              | 18          | 18          | complete                                                  |
| Wallets & consumer apps  | 22          | 22          | complete                                                  |
| Remittances              | 12          | **13**      | Sphere reads as a B2B logo — relocation pending           |
| Card issuing             | 7           | 7           | complete                                                  |
| Payment networks         | 17          | 17          | complete                                                  |
| Exchanges                | 13          | 13          | complete                                                  |
| **Total**                | **200**     | **200**     | count reconciled; composition settles after relocations   |

## Identity corrections — audit trail

Two transcription errors from the first pass were corrected. Each correction
names the sources that forced it.

### Muse → M0 (infrastructure)

- **Slide re-examination:** at high zoom the logo is a grid mark followed by
  a short wordmark that reads "M0", not "Muse".
- **Thread corroboration:** the author's infrastructure list renders the
  company as the handle `@m0`.
- Roster entry: id `muse` (kept stable as an opaque key), name "M0".

### Yellow → Yellow Card (infrastructure)

- **Slide re-examination:** the logo is a card-shaped glyph with a
  "Yellow Card" wordmark.
- **Thread corroboration:** the author's infrastructure list renders the
  handle `@yellowcard_app`.
- Roster entry: id `yellow` (kept stable), name "Yellow Card".

### Flags cleared without a name change

The other four names on the first pass's pending-verification list are
confirmed as transcribed, each matching a handle in the author's
infrastructure list: **AEON Community** (`@AEON_Community`), **Diameter**
(`@DiameterPay`), **EFY Finance** (`@EFYFinance`), **Elliptic** (`@elliptic`).

## B2B payments — 25 of 31 (relocations pending)

The slide counts 31 companies; 25 are legible in the block now that INXY
Payments has been added, and the six relocations deferred to a follow-up PR
would complete the composition. The machine-readable gap lives in
`TRANSCRIPTION_GAPS["b2b-payments"]` in `data/companies.js`.

Names that may be OCR mangles (kept as transcribed, pending verification):

- **Due Network** — the slide shows a "due" logotype; "Network" is inferred
  from surrounding context, not read directly.
- **GSX** — low confidence; possibly a fragment of a longer name.
- **Limited** — low confidence; possibly part of a larger logotype.

Resolved (verified real, profile completed):

- **Daya** — confirmed, not a logo misread: Daya (daya.co) is a
  Lagos-based stablecoin-native payments startup founded October 2025
  by Tomiwa "Aleph" Lasebikan and Paul Joe; raised a $2.4M pre-seed led
  by Hivemind Capital (Jun 2026). Sources: techcabal.com, tech.africa.

## Banks (second half) — profile verification (banks-b)

The five names in `data/companies/banks-b.js` were each matched to a real
company during profile research (branch `feat/profile-facts-banks-b`).
All five identities are confirmed; no entry was left pending, and no open
identity questions remain for this batch:

- **Lead Bank** — matched to lead.bank, the Kansas City, Missouri
  FDIC-insured BaaS sponsor bank (1928 charter, acquired by a
  Jackie Reses-led group in 2022). "Lead Bank" is an ambiguous string
  in isolation; the match is confirmed by the slide context — Lead
  powers stablecoin card programs (Stripe/Bridge/Visa) and acquired
  stablecoin payments company Loop.
- **SoFi** — SoFi Technologies / SoFi Bank, N.A. Confirmed.
- **Standard Chartered** — the London-headquartered multinational bank
  (SC Ventures, Zodia Custody, Anchorpoint stablecoin JV). Confirmed.
- **Sygnum** — the Swiss-Singapore digital asset bank (FINMA licence,
  2019). Confirmed.
- **U.S. Bank** — U.S. Bank N.A., the U.S. Bancorp subsidiary
  (NYDIG custody, Anchorage Digital reserve custody, USBDC stablecoin).
  Confirmed.

## Banks (first half) — profile verification (banks-a)

All ten names in `data/companies/banks-a.js` were matched to real,
verifiable companies during profile research (branch
`feat/profile-facts-banks-a`); none were left pending. Two names are
ambiguous strings in isolation; the resolutions:

- **Augustus** — matched to **Augustus (formerly Ivy)**, the
  Berlin-founded (2022), New York-based "Global Dollar Bank" clearing-bank
  startup pursuing a U.S. national trust charter (conditional OCC approval,
  May 2026; $180M Series B led by Tiger Global, July 2026). Not a
  Roman-emperor-themed token project or unrelated namesake.
- **Hana** — matched to **Hana Bank / Hana Financial Group** (Seoul,
  KOSPI: 086790), the Korean group building won-backed stablecoin issuance
  (consortium with BNK, iM Financial, SC Bank Korea, OK Savings Bank;
  ₩1T stake in Upbit operator Dunamu). Not "Hana Network" or another
  unrelated "Hana" startup.
- **AMINA** — AMINA Bank AG, the Zug-based FINMA-licensed digital asset
  bank formerly SEBA Bank (founded 2018 as SEBA Crypto AG; renamed
  December 2023). Confirmed.
- **Anchorage** — Anchorage Digital / Anchorage Digital Bank, N.A. (first
  federally chartered crypto bank, January 2021). Confirmed.
- **BNY** — The Bank of New York Mellon Corporation (custodian of USDC and
  RLUSD reserves). Confirmed.
- **Catena Labs** — the AI-native financial institution founded by Circle
  co-founder Sean Neville (Catena Trust Bank, conditional OCC charter
  September 2026). Confirmed.
- **Cross River** — Cross River Bank, Fort Lee, New Jersey (embedded
  finance, crypto banking). Confirmed.
- **Customers** — Customers Bank, West Reading, Pennsylvania (NYSE: CUBI;
  CBIT instant payments, USDC settlement banking). "Customers" alone is
  generic; the match is confirmed by its digital-asset banking profile.
- **HSBC** — HSBC Holdings plc (HKMA stablecoin issuer licence, HSBC
  Orion, Tokenised Deposit Service). Confirmed.
- **J.P. Morgan** — JPMorgan Chase / Kinexys (JPM Coin, JPMD deposit
  token). Confirmed.

## Names added — audit trail

Six pending entries (`profileStatus: "pending"`, `facts: null`) complete the
roster to the slide's 200. Each was legible on high-zoom re-reading and
confirmed as a real company in the right category before entry.

| Name            | Category       | Slide evidence                    | Thread handle   | Web verification                                   |
| --------------- | -------------- | --------------------------------- | --------------- | -------------------------------------------------- |
| Transak         | infrastructure | wordmark in the infra block       | `@Transak`      | fiat–crypto on-ramp / payments infrastructure       |
| Ubyx            | infrastructure | wordmark in the infra block       | —               | stablecoin clearing and redemption infrastructure   |
| Zero Hash       | infrastructure | wordmark in the infra block       | `@zerohashx`    | crypto settlement and financial infrastructure      |
| TRM Labs        | infrastructure | wordmark in the infra block       | `@trmlabs`      | digital-asset risk and compliance infrastructure    |
| HIFI            | infrastructure | logo reads "Hifi" in the block    | `@hifiHQ`       | stablecoin and bank-rail payment infrastructure     |
| INXY Payments   | B2B payments   | wordmark reads "INXY Payments"    | `@inxy_io`      | crypto / stablecoin business payments (company site)|

Ubyx was verified by web research only; it does not appear in the thread
excerpt. The other five are corroborated by the author's own lists.

## Deferred relocations — planned follow-up PR

High-zoom re-reading shows six existing entries sitting in the wrong category.
They are **not moved in this pass** because the target chunk files are owned
by profile batch briefs that have not merged yet; relocating them now would
collide with that work. A separate reconciliation PR moves them after the
profile batches land.

| Entry     | From          | To           | Evidence                                                                 |
| --------- | ------------- | ------------ | ------------------------------------------------------------------------ |
| CoinsPaid | infrastructure | B2B payments | logo position inside the B2B block columns                               |
| Latitude  | infrastructure | B2B payments | logo position inside the B2B block                                       |
| ramp      | infrastructure | B2B payments | lowercase "ramp." wordmark sits between the B2B columns                   |
| Slash     | infrastructure | B2B payments | logo position inside the B2B block                                       |
| Walapay   | infrastructure | B2B payments | logo position inside the B2B block                                       |
| Sphere    | remittances    | B2B payments | wordmark sits inside the B2B block; `@sphere_labs` is in the author's business-payments list |

When this PR lands: infrastructure 50 → 45, B2B payments 25 → 31, remittances
13 → 12. The total stays 200 and every category then matches the slide.

## Names we could not resolve — kept as transcribed, not guessed

- **GSX** (B2B payments) — the thread suggests the expansion "GSX Network",
  but that expansion is not independently verified; kept exactly as read.
- **Limited** (B2B payments) — the thread suggests "Limited Group"; the
  expansion is unverified, and the name may be a fragment of a longer
  logotype; kept exactly as read.
- **`@Stablecoin`** — a handle in the author's infrastructure list with no
  safe counterpart on the slide; not added to the roster.

## Remittances residual

With Sphere expected to relocate, the residual overcount candidate is
**Félix Pago** (its logo styling differs from neighboring entries). No source
contradicts the name, so it stays as transcribed.

## Card issuing — identity checks (November 2026)

All seven transcribed names matched real, verifiable card-issuing companies;
none were left pending, and none needed to be guessed:

- **Baanx** — Baanx Group (London; CryptoLife Card). Confirmed via its official
  site and CoinDesk (Series A; Exodus acquisition). Some databases list a 2017
  launch date; the official site says founded 2018 (Companies House
  incorporation 17 Jan 2018), which is what the profile uses.
- **Gnosis Pay** — Gnosis Pay Co Ltd (London), launched from the Gnosis
  ecosystem. Confirmed via TechCrunch and its product blog.
- **Immersve** — Immersve Limited (Auckland, New Zealand). Confirmed via
  Mastercard Newsroom and its seed-round announcement.
- **Marqeta** — the US public card-issuing platform (Nasdaq: MQ); unambiguous.
- **Rain** — the OCR-ambiguous name on the slide. Matched to **Rain (Signify
  Holdings Inc., rain.xyz)**, the stablecoin card-issuing platform — the fit is
  confirmed by its Visa principal membership, its funding announcements, and
  Western Union's Stablecard launch on Rain. (Not the several unrelated
  companies also named "Rain".)
- **Reap** — Reap Technologies Holdings (Hong Kong), acquired by Kraken's
  parent Payward. Confirmed via Forbes and Reap's newsroom.
- **Wirex** — Wirex Limited (London). Confirmed via PR Newswire (Mastercard,
  Visa) and SiliconANGLE.

## Infrastructure A — identity checks (November 2026)

"AEON Community" is the community/social identity (the @AEON_Community handle
on X and Telegram) of **AEON (aeon.xyz)** — the stablecoin/AI-agent payments
settlement layer backed by YZi Labs ($8M pre-seed, announced May 2026) — not
a separate company. AEON is the only plausible stablecoin-infrastructure match
for the slide's entry.

The entry stays `pending` because AEON does not publish a founding year
(its first AI-payment product launched May 2025, but "founded" cannot be
filled honestly from any public source checked), so a complete profile would
violate the all-fields-honest rule. Revisit if AEON publishes incorporation
details.

Sources checked: https://aeon.xyz ·
https://crypto.news/aeon-raises-8m-to-wire-ai-agents-into-50m-real-world-merchants/ ·
https://www.theblock.co/sponsored/2025-05-27-aeon-launches-ai-payment-to-power-the-future-of-autonomous-crypto-driven-real-world-commerce-355819

## Blockchains (first half) — identity checks and profiles (November 2026)

All nine names in `data/companies/blockchains-a.js` were matched to real,
unambiguous blockchains; none are OCR mangles, and none were left pending:

- **Arc — identity note.** A one-word name that could point at several
  projects. Matched to **Arc, the layer-1 blockchain purpose-built for
  stablecoin finance and built by Circle** (announced Aug 12, 2025; public
  mainnet Sep 16, 2026). The fit is confirmed by the slide context — a
  stablecoin-industry slide listing Arc next to Base and Ethereum — and by
  Circle's own issuer profile in `data/companies/issuers-a.js`, which already
  lists the Arc blockchain among its products. Sources: circle.com blog,
  arc.io pressroom, Circle's investor-relations mainnet release.
- **Chains are not companies.** Funding strings record the real capital
  events: developer-company rounds for Aptos (~$400M), Arbitrum (~$144M via
  Offchain Labs) and Avalanche (~$890M incl. token sales, which are labeled
  as token sales); Canton's $135M strategic round is Digital Asset's
  (announced Jun 24, 2025). Parent-backed chains state the actual backing
  instead of inventing rounds: Arc → Circle, Base → Coinbase (incubated,
  no network token), BNB Chain → Binance (community-driven since 2022),
  Ethereum → the 2014 ether presale (~$18M) plus Ethereum Foundation
  support.
- **Celo.** The widely cited "$100M" is a 2021 Celo Foundation ecosystem
  pledge, not an equity round, so the funding string carries only the
  announced company financings ($6.5M + $30M + $20M ≈ $56.5M).
- **Ethereum.** "Founded 2013" refers to the whitepaper; the ether presale
  (2014) and Frontier mainnet launch (Jul 30, 2015) are in the stage string.
- **Avalanche.** A rumored ~$1B 2025 financing is not company-announced and
  is deliberately excluded; the largest verified event remains the $250M
  token sale for the Avalanche9000 upgrade (Dec 2024).

## Profile facts sources

Complete profiles are researched batch by batch against public sources
(official sites, regulator or company announcements, reputable press); facts
are added only after verification, and unverifiable facts stay pending rather
than guessed. Every complete entry carries its own `links` array citing the
sources its facts came from.

Complete as of November 2026:

- **Bridge** (`infrastructure-a.js`) — web-sourced from https://www.bridge.xyz,
  Stripe newsroom (acquisition announcement and completion), and
  https://apidocs.bridge.xyz.
- **Infrastructure A, ten more** (`infrastructure-a.js`) — Alchemy Pay through
  BVNK; identity notes in the "Infrastructure A" section above (AEON Community
  stays pending); each entry cites its own `facts.links`.
- **Card issuing, all seven** (`card-issuing.js`) — identity checks in the
  "Card issuing" section above; each entry cites its own `facts.links`.
- **Banks batch A, all ten** (`banks-a.js`) — verification notes in the
  "Banks (first half)" section above; each entry cites its own `facts.links`.
- **Banks batch B, all five** (`banks-b.js`) — verification notes in the
  "Banks (second half)" section above; each entry cites its own `facts.links`.
- **Issuers batch A, all ten** (`issuers-a.js`) — research notes in the
  "Issuer batch A profiles" section below; each entry cites its own `facts.links`.
- **Issuers batch B** (`issuers-b.js`) — Qivalis, Quantoz, Ripple, Schuman,
  Sky, Société Générale, StraitsX, Tether, World Liberty Financial, and Zelle.
  Research notes:
  - **Qivalis** — the OCR name resolved to the Amsterdam bank-consortium
    issuer (37 European banks, DNB EMI authorisation of 14 Oct 2026); no
    relation to any French or ACPR-licensed entity. Sources: qivalis.eu, the
    consortium launch coverage, and The Paypers authorisation report.
  - **Zelle** — included as an issuer on the strength of Early Warning
    Services' announced proprietary ZelleUSD (ZLUSD) stablecoin (Jun 2026);
    issuer identity/custody had not been publicly disclosed at research time.
  - Funding strings use only publicly announced rounds; consortium-owned,
    bank-owned, or protocol-funded entities state that ownership instead of
    an invented round history.
- **Payment networks batch A, all seven** (`payment-networks-a.js`) — research
  notes in the "Payment networks batch A profiles" section below.
- **Payment networks batch B, all ten** (`payment-networks-b.js`) — research
  notes in the "Payment networks batch B profiles" section below.
- **Blockchains batch A, all nine** (`blockchains-a.js`) — research notes in
  the "Blockchains (first half)" section above.
- **Blockchains batch B, all nine** (`blockchains-b.js`) — research notes in
  the "Blockchains batch B profiles" section below.
- **B2B payments batch A, all eleven** (`b2b-payments-a.js`) — research notes
  in the "B2B payments batch A profiles" section below.

Every other company ships `profileStatus: "pending"` with `facts: null`
until verified against a public source. Batch completions are documented
below.

Initially only Bridge shipped complete; the November 2026 profile-research
waves are completing batches against the same rule. Batch
`data/companies/infrastructure-a.js` was completed November 4, 2026 for ten
entries (Alchemy Pay, Allium Labs, Aryze, Banxa, Bastion, BitGo, BlindPay,
Borderless, Brale, BVNK) — each profile's cited links are the sources for its
facts. AEON Community stays pending (see above).

## B2B payments batch A profiles — Airwallex through dtcpay (November 2026)

All eleven names in `data/companies/b2b-payments-a.js` were identity-checked
against live sources and matched a real company; ten needed no identity
question and **Daya** was confirmed real after sitting on the OCR-mangle
watchlist. Facts come only from each company's own site, funding
announcements, or reputable press. Headline sources per company:

- **Airwallex** — airwallex.com newsroom (Series G, Dec 2025) and the
  2025 EOY mission update.
- **AllScale** — allscale.io ($1.5M and $5M seed posts, Animoca
  strategic investment), turnkey.com customer story.
- **Altitude** — altitude.xyz ($18M round post; Squads Labs is the
  operating company), solanacompass.com, decrypt.co.
- **Atum** — atum.xyz, PRNewswire stealth-exit release (Sep 2026),
  finextra.com. Note: no public source states an incorporation year;
  `founded: "2026"` reflects the September 2026 public launch.
- **Bitso** — bitso.com/business, business.bitso.com, fastcompany.com.
- **Coinflow** — coinflow.cash (Series A post, Oct 2025),
  docs.coinflow.cash. Founded year 2022 per Preqin/curat; the CEO's
  Series A post says "launched Coinflow in 2023".
- **Conduit** — conduitpay.com, techcrunch.com, businesswire.com. The
  announced rounds ($17M + $6M + $36M) sum to $59M (CB Insights
  agrees); some databases report $53M — the profile cites the
  announced rounds.
- **Corpay** — corpay.com newsroom, mastercard.com press release,
  investor.corpay.com; incorporation year 2000 per the company's 10-K.
- **Deel** — deel.com (Series E blog, Oct 2025),
  embeddedfinanceindex.com. Reported primary-funding totals vary by
  source ($650M+–$1.6B); the profile uses ~$1B with the two sourced
  rounds.
- **dtcpay** — dtcpay.com, crowdfundinsider.com, vertexventures.sg.
  Founded 2019 per CB Insights; Series A extended to $25M with SBI
  Group (Sep 2026).

## Issuer batch A profiles — Agora through Paxos (November 2026)

All ten names in `data/companies/issuers-a.js` were identity-checked
against live sources and matched a real, unambiguous company; none are
OCR mangles. Facts come only from each company's own site, funding
announcements, or reputable press (Reuters, Fortune, TechCrunch, Business
Wire, PR Newswire). Research notes:

- **No-round companies:** AllUnity (DWS/Flow Traders/Galaxy JV), Banking
  Circle (acquired by EQT) and First Digital (trust-business origins,
  SPAC agreement) have no announced venture rounds. Their funding strings
  state the actual capital event instead of inventing rounds.
- **Banking Circle** — the $300M EQT deal was reported by TechCrunch; EQT's
  own release did not disclose terms, so the entry says "reported $300M".
- **Frax** — no round size ever disclosed; the funding string records the
  Jul 2021 strategic financing (participants only) and the $50M ATW
  Partners frxUSD commitment (Jan 2026).
- **Ethena** — 2025–26 financings that appear only in funding databases
  (MEXC, ArkStream) are not company announcements; only press-announced
  rounds ($6M seed, $14M strategic, $100M ENA sale) are included.
- **JPYC** — the Series B is a first close (¥1.78B, led by Asteria);
  later closes are not yet public.
- **First Digital** — founded 2019 as First Digital Trust (roots in
  Legacy Trust); 2017 refers to the Legacy Trust-era origin, so 2019 is
  used as the founding year.

## Payment networks batch A profiles — Adyen through Klarna (November 2026)

All seven names in `data/companies/payment-networks-a.js` were
identity-checked against live sources and matched a real, unambiguous
company; none are OCR mangles. All seven are complete. Facts come only
from each company's own site/IR releases, funding announcements, or
reputable press (Reuters, CNBC, TechCrunch, PR Newswire, Payments Dive).
Research notes:

- **Adyen** — no standalone stablecoin product or named stablecoin
  partnership has been announced. Its stablecoin-ecosystem record is the
  ECB digital euro pilot (2026) and the x402 Foundation / Open Standard
  work covering "OpenUSD" stablecoin infrastructure (H1 2026 results).
  Stablecoin tie-ups that circulated in secondary sources (Circle USDC,
  Bridge payouts) did not verify against any primary announcement and
  are excluded.
- **BitPay** — funding databases disagree on 2018 follow-on rounds
  ($10M and $40M variants). Only the four clearly announced rounds
  ($510K seed, $2M Founders Fund, $30M Index Series A, $30M Aquiline
  Series B) plus the company's own "$70M+ total" statement are included.
- **Checkout.com** — the $40B Series D (Jan 2022) was the peak; internal
  valuations were later cut ($11B 409A, ~$9.35B) and a Sep 2025 employee
  buyback priced it at ~$12B. The entry records only announced primary
  rounds. Stablecoin record: first PSP with 24/7 USDC settlement via
  Fireblocks (Jun 2022, $300M+ in beta, FTX an early user), the Blue EMI
  euro-stablecoin issuer acquisition (Jan 2026), Coinbase-powered
  acceptance (May 2026), and scaled US settlement (Jun 2026).
- **dLocal** — stablecoin record is payouts-focused: BVNK partnership
  (Jun 2025), Circle Payments Network membership (Nov 18, 2025), and the
  "Stablecoin Full" launch (Apr 21, 2026).
- **Fiserv** — no private venture rounds; the funding string records the
  actual capital event (the ~$22B First Data merger, completed Jul 2019).
  FIUSD was announced Jun 23, 2025 (Paxos and Circle infrastructure,
  Solana, PayPal PYUSD interoperability) but never launched; 2026
  reporting (Payments Dive) describes a strategy shift toward hosting
  Bank of North Dakota's Roughrider coin with Fireblocks. The entry
  states both the announcement and the pivot.
- **Flutterwave** — several databases misdate the $250M Series D to
  2024; it was announced Feb 16, 2022. Ripple's strategic investment
  (announced Jun 16, 2026) is part of a Series E round with no disclosed
  size, so the entry says "size undisclosed".
- **Klarna** — KlarnaUSD was announced Nov 25, 2025, after the Sep 2025
  NYSE IPO: built on Open Issuance by Bridge, on the Stripe–Paradigm
  Tempo blockchain, testnet at announcement with a 2026 mainnet target.
  The funding string ends at the IPO; the last private primary round
  recorded is the $800M down round at a $6.7B valuation (Jul 2022).

## Payment networks batch B profiles — Mastercard through Worldpay (November 2026)

All ten names in `data/companies/payment-networks-b.js` matched real,
unambiguous companies — no OCR mangles. Facts come from company newsrooms,
investor-relations releases, or reputable press (Reuters, CNBC, Fortune,
Paul, Weiss, PR Newswire), web-sourced in November 2026. Research notes:

- **Public companies:** Mastercard, Visa, PayPal, Shopify, Paysafe and
  Shift4 have no venture rounds; their funding strings record the actual
  capital events (IPO, SPAC merger, take-private) instead of inventing
  rounds.
- **Worldpay** — the founding year uses the 1971 date from the Worldpay,
  Inc. corporate lineage (the Vantiv-era processor), which is what
  reference sources list; the brand's own history spans several
  predecessors, so the year is the least-confident field on the profile.
- **Unlimit** — no announced venture rounds (founder-led since 2009); the
  founder's $45M commitment (Oct 2026) funds the separate Phase
  blockchain project, not Unlimit, so it is excluded from the funding
  string.
- **Paysafe** — profiled as the payments platform (Skrill/Neteller/
  acquiring) behind the Apr 2026 Pay with Crypto launch with MoonPay; no
  stablecoin issuance is attributed to it.
- **Shift4's** stablecoin angle is the settlement platform announced Dec
  22, 2025 (Polygon) and Lydian USDT acceptance (May 2026), not
  acquisition rumors that circulated separately.
- **Identity anchors:** Mastercard's BVNK acquisition (completed Aug
  2026) refers to the same BVNK verified and completed in
  `data/companies/infrastructure-a.js`.
## Blockchains batch B profiles — Hyperliquid through TRON (November 2026)

All nine names in `data/companies/blockchains-b.js` were identity-checked
against live sources and matched real, unambiguous companies; none are
OCR mangles. Facts come only from each company's own site, funding
announcements, or reputable press (Bloomberg, The Block, Fortune, Binance
Research, official blogs). Research notes:

- **Hyperliquid** — self-funded with no external capital, so the funding
  string records that fact plus the reportedly declined offer and the HYPE
  community airdrop instead of inventing venture rounds. The ICE and Kraken
  ties are press-reported (Bloomberg, Nov 2026) and phrased as reported.
- **Stellar** — the Stellar Development Foundation is a nonprofit; the
  funding string records the ~15.5B XLM endowment and the original $3M
  Stripe loan (repaid in lumens) rather than a venture round.
- **Stable** — only the announced $28M seed (Bitfinex + Hack VC, July 2025)
  and the PayPal Ventures strategic investment (Sept 2025) are included;
  a reported $110M round could not be verified in any checked source and
  was excluded.
- **Noble** — mid-migration: the stage string records both the move from
  the Cosmos appchain to a standalone EVM Layer 1 (2026) and Circle's
  sunsetting of USDC/CCTP V1 on the legacy chain (full pause scheduled
  Jan 12, 2027).
- **Plasma** — the July 2025 XPL public sale drew ~$373M in commitments
  against a $50M target at a $500M FDV; the funding string distinguishes
  those commitments from the $3.5M seed and $24M seed/Series A. Ether.fi
  was excluded as a launch partner — it is not named in the official
  launch materials.

Every profile's cited links are the sources for its facts.

Facts are added only after verification against a public source.

## Wallets batch B profiles — Ledger through Trust Wallet (November 2026)

Profiled one company per PR (per the user's serial-PR request); each entry's
cited links are the sources for its facts. Research notes as completed:

- **Ledger** — matched to the Paris-based hardware-wallet maker founded 2014
  (unchanged from the slide). Funding follows the rounds confirmed in Ledger's
  own press releases and TechCrunch: $1.5M seed (2015), $7M Series A (2017),
  $75M Series B led by Draper Esprit (2018), $380M Series C led by 10T
  Holdings at a >$1.5B valuation (Jun 2021), and the €100M Series C extension
  (Mar 2023). The widely circulated totals differ by currency/classification
  (tech.eu records ~€486M), so the funding string carries "Reported ~€486M
  total" rather than a single USD sum. Partners limited to relationships the
  sources document — the 2018 Intel and Gemalto security partnerships and the
  Samsung, Crypto.com, and Animoca Brands investments; circulating
  Visa/PayPal/1inch integration claims could not be verified in the checked
  sources and were excluded.
- **Lemon** — matched to Lemon Cash, the Buenos Aires crypto fintech founded
  by Marcelo Cavazzoli; 2019 is the best-supported founding year. Forbes
  Argentina also names Borja Martel Seward as a co-founder, though Lemon's
  current company page does not. Disclosed rounds: $1.1M seed (2020), $16.3M
  Series A led by Kingsway Capital (Jul 2021), $20M Series B led by F-Prime
  and ParaFi (Oct 2025). The company's own "$66M raised" figure does not
  reconcile with those rounds — the funding string attributes it to the
  company and flags the discrepancy. Unverified investor-name claims
  (Tapas/Xapno, Alan Howard) were excluded; no verified public valuation.
- **MetaMask** — launched July 2016 inside Consensys by Dan Finlay and Aaron
  Davis. The disclosed financings are Consensys corporate rounds — $65M
  Series B with JPMorgan, Mastercard and UBS (Apr 2021), $200M Series C
  (~$3.2B valuation, Nov 2021), $450M Series D led by ParaFi (>$7B, Mar
  2022) — never separately itemized for MetaMask, and the funding string
  attributes them to Consensys. 30M monthly active users is a January 2022
  metric, dated as such; no verified current MAU or standalone MetaMask
  valuation exists. MetaMask Card is verified as Mastercard-powered with
  Baanx issuing; unconfirmed Visa claims and Consensys-IPO speculation were
  excluded.
- **MiniPay** — launched 2023 as Opera's self-custodial Celo wallet,
  initially in Nigeria, operated by Blueboard Limited, an Opera company;
  public materials name no separate founders. No disclosed venture round —
  the proposed 160M CELO ecosystem allocation and developer grants are
  ecosystem arrangements, not company financing. Scale methodologies are
  kept separated: Opera reported 16M+ activated wallets across 65+ countries
  (Jun 2026) while a Celo Q2 2026 update cites 18M+ activations and 541M+
  transactions. The MiniPay Card is a Visa debit card powered by Gnosis Pay.
  Unverified GoodDollar-integration and universal airtime/bill-pay claims
  were excluded.
- **Nubank** — Nu Holdings (NYSE: NU), founded 2013 by David Vélez,
  Cristina Junqueira and Edward Wible; a reported fourth co-founder
  (Carlos Gorczynski) was excluded as unverified. Funding correction made
  during research: Berkshire Hathaway's $500M belongs to the $750M round
  announced June 2021, not a separate 2019 investment; uncertain Series C/D
  lead attributions were omitted. Stablecoin angle: Nu Global launched with
  the U.S. expansion (Sep 10, 2026), converting deposits to USDC and EURC
  across 35+ countries with Lead Bank providing FDIC-insured U.S. deposits.
  Scale and financials are date-stamped (Q2 2026: 138.9M customers).
- **Oobit** — Singapore-based crypto-payments app founded 2017 by Amram
  Adar and Aharon Miller. $25M Series A (Feb 2024) led by Tether's
  investment arm with CMCC Global's Titan Fund, 468 Capital and angel
  Anatoly Yakovenko; an $8M seed (Dec 2020) is database-reported and
  contemporaneous totals (~$28M, ~$33M) were not reconciled — the funding
  string says so. The "175M+ merchants" figure is a Visa/Mastercard
  network-reach estimate from the Series A announcement, not a signed-
  merchant count; no verified user, volume or 2026-scale figures exist.
- **Phantom** — founded 2021 in San Francisco by 0x alumni Brandon Millman,
  Francesco Agosti and Chris Kalani; $9M Series A led by a16z (Jul 2021),
  $109M Series B led by Paradigm (Jan 2022, $1.2B), $150M Series C co-led
  by Sequoia and Paradigm (Jan 2025, $3B) — ~$268M disclosed. Scale metrics
  come from the Jan 2025 Series C announcement (15M monthly actives, $20B
  annual swap volume, 850M transactions, $25B self-custody assets); the
  site's 2026 "20M+ users" is a different measure and is labelled as such.
  The Bitski and Blowfish acquisitions are recorded as technology
  acquisitions in products.
- **RedotPay** — Hong Kong stablecoin-payments fintech established 2023
  (some databases cite 2021 — the profile notes both), co-founded by CEO
  Michael Gao. $194M raised across 2025 in three tranches: $40M Series A
  led by Lightspeed (Mar 2025), a $47M strategic round above a $1B
  valuation (Sep 2025), and a $107M Series B led by Goodwater Capital
  (Dec 2025). 6M+ registered users, 100+ markets and $10B+ annualized
  volume are company-reported at the Series B; the ~130M-merchant/ATM
  figure is network acceptance, not direct merchants. Bloomberg's Oct 2026
  US-IPO report is labelled as reported, not confirmed.
- **Revolut** — founded 2015 in London by Nikolay Storonsky and Vlad
  Yatsenko. Funding ladder verified round-by-round (seed 2015 through the
  $800M Series E at $33B, Jul 2021) with subsequent share sales at $45B
  (Aug 2024), $75B (Nov 2025) and $115B (Nov 2026, led by Glade Brook
  Capital Partners). Stablecoin facts: crypto trading since 2017, fee-free
  1:1 USD conversion into USDC and USDT, and the EURR euro stablecoin
  issued by Bridge, a Stripe company (2026). The UK banking licence is
  stated precisely (restricted, Jul 2024, in mobilisation); 80M+ customers
  and 2025 financials are company reporting; the ~$10.5B 2025 stablecoin
  volume is an estimate and labelled as such.
- **Sorted** — identity resolved: Sorted Wallet (sorted.io), the
  feature-phone stablecoin wallet — not the New Zealand government
  financial-capability site or the UK death-tech company. Its own timeline
  starts 2023 (TechCabal traces the idea to 2022); the profile uses 2023.
  HQ conflict documented: Hong Kong per TechCabal and funding databases
  (its own disclaimer is HK-jurisdiction framed) versus one outlet's
  "London-based" claim. Tether's $1.5M pre-seed (2024) and the $4.4M seed
  led by Tether and Gnosis (May 2026) are verified; a "Lateral Front
  Ventures" seed lead and $1M Vox Solutions backing were excluded as
  inconsistent single-source claims; "Movement" vs "Move Industries" is a
  naming inconsistency in the same announcement cycle (majority: Movement).
  500k+ downloads across 160+ countries is company-reported.
- **Toss** — the financial super-app of Viva Republica Co., Ltd. (Seoul),
  founded by Lee Seung-gun; company dated 2011, Toss app launched 2015 —
  both stated so neither is mistaken for the other. The stablecoin angle is
  exploratory and stated as such: 24 KRW-stablecoin trademark filings
  including TOSSKRW (Jun 2025) and a Toss Bank–Solana Foundation MOU (Jun
  19, 2026) as a remittance/settlement proof of concept — no Toss-issued
  stablecoin, launch date or reserve model is confirmed, and "Project
  Unify" plus Korea's stablecoin legislation are reported backdrop, not
  products. Funding is kept round-by-round (~$410M in 2021; $405M Series G
  led by Tonic Private Equity, Dec 2022, ~$7B) because database totals
  conflict ($1.2B+ vs $1.8B including a secondary). Excluded as
  contradicted: SetterVC's "$1.6B Sept 2023 valuation" and "IPO'd on NYSE
  2026" entries, ribbit Capital and Alkeon as investors, and 24M+ MAU as a
  current metric (the verified figure is 24M registered users, Dec 2022).
- **Trust Wallet** — founded 2017 by Viktor Radchenko; acquired by Binance
  on July 31, 2018, Binance's first acquisition, for undisclosed
  consideration reported as cash + Binance equity + BNB (TechCrunch). No
  disclosed venture rounds exist and the funding string says so; TWT
  launched 2020 via community distribution (no token sale), with the
  October 2020 burn cutting supply ~99% to ~1B. 210M+ (Sep 2025) and 220M+
  (Dec 2025) users are company claims with methodology unspecified —
  explicitly not monthly actives; 10M+ MAU is unverified and excluded.
  "Trust Wallet LaunchCircle" is not verified — Trust Moon (Sep 25, 2025)
  is the documented accelerator. The browser-extension compromise is dated
  December 2025 (v2.68 → clean 2.69) per available reporting, included
  with "reported" attribution; a July 2025 date found in some summaries is
  unsupported. Eowyn Chen was CEO 2022–2026; Felix Fan's succession is
  secondary-source reported and labelled as such.

All twelve wallets batch B entries are now `complete`: Ledger (#20),
Lemon (#21), MetaMask (#25), MiniPay (#36), Nubank (#82), Oobit (#91),
Phantom (#93), RedotPay (#95), Revolut (#96), Sorted (#98), Toss (#101)
and Trust Wallet (#103) — each merged individually with QA evidence
against its tested head, per the user's serial one-PR-per-company
process. Per-company PRs after #20 deliberately left this file alone;
this section is the single consolidated ledger update.

## Exchanges — profile verification (November 2026)

All 13 names in `data/companies/exchanges.js` were identity-checked
against live sources and matched a real, unambiguous company; none are
OCR mangles and no entry was left pending. Facts come only from each
company's own site or announcements, funding databases, or reputable
press (Reuters, CNBC, TechCrunch, NYT, Wikipedia). Research notes:

- **No documented venture rounds:** Binance (~$15M BNB ICO, July 2017),
  Bybit, Crypto.com (~$26.7M MCO ICO, 2017) and Interactive Brokers
  ($1.2B IPO, May 2007) have no primary-sourced venture rounds. Their
  funding strings state the actual capital event instead of inventing
  rounds.
- **Bybit** — funding databases list four unverified rounds ($20M–
  $200M, 2019–2023) with no primary documentation; the entries were
  treated as undocumented and excluded.
- **Bitkub** — the ~$3.2M angel capital figure is founder-reported
  (Kr-Asia); the ~$21.6M total is a CB Insights database estimate, and
  the funding string labels it as such. The SCB Securities 51% deal
  (THB 17.85B, Nov 2021) was cancelled in Aug 2022 — recorded in the
  stage string, not as funding.
- **Kraken** — Kraken's own release describes the Nov 2025 financing
  as $800M across two tranches plus a separate $200M Citadel Securities
  strategic investment at a $20B valuation; some databases collapse
  this into a single round. The Sept 2025 $500M/$15B raise is included
  with "reported" phrasing.
- **OKX** — the ICE ~$200M investment (Mar 2026, ~$25B valuation) and
  the extension (Circle, Ripple, Qube, SC Ventures; amounts
  undisclosed) are 2026 reported figures, not a complete funding
  history.
- **Crypto.com** — the SEC matter is stated precisely: Crypto.com
  countersued in Oct 2024 after a Wells notice; the SEC closed its
  investigation with no action on Mar 27, 2025. Trump Media's ~$105M
  CRO purchase (announced Aug 26, closed Sep 5, 2025) is included; the
  later Trump Media pull-back (Aug 2026) is not part of the entry's
  milestones as the treasury plan's final state was still in flux.
- **Interactive Brokers** — founded as a broker-dealer in 1978 (its
  history page marks the 49th broker-dealer year in Jan 2026);
  Interactive Brokers LLC was formed 1993. Crypto rails are third-party
  (Paxos since 2021, Zero Hash for expanded assets, staking and
  stablecoin funding) — the stablecoin consideration is per Reuters,
  not a confirmed product.
- **Coins.ph** — identity: the Philippine BSP-regulated wallet
  (Betur Inc.), not Coins.co.th (a separate Thai wallet later acquired
  by Gojek). The ~$190M Joffre/Wei Zhou buyout figure varies by source
  and is marked "reported".
- **Test staleness fix** — `app/tests/panel-behavior.test.js`
  hardcoded `coinbase` (and `bvnk`) as its "pending profile" examples;
  completing Coinbase broke one test. Both examples now pick a pending
  company dynamically from `COMPANIES`, matching the dynamic loop the
  panel-render suite already uses.
