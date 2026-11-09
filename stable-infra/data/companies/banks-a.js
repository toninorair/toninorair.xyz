// Banks, batch A — AMINA through J.P. Morgan.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const BANKS_A = [
  {
    id: "amina",
    name: "AMINA",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Julius Baer": "https://www.juliusbaer.com",
      "LGT Bank": "https://www.lgt.com",
      "St.Galler Kantonalbank": "https://www.sgkb.ch",
      "HashKey Group": "https://www.hashkey.com",
      "Paxos (USDG)": "https://www.paxos.com",
      "Mesh": "https://www.meshpay.com",
    },
    productLinks: {
      "Digital asset custody (hot & cold)": "https://aminagroup.com/enterprise/custody/",
      "Fiat & crypto trading": "https://aminagroup.com/individuals/trading/",
      "Staking": "https://aminagroup.com/enterprise/staking/",
      "Lending": "https://aminagroup.com/enterprise/lending/",
      "Asset management": "https://aminagroup.com/enterprise/investment-solutions/",
      "Stablecoin services (USDC, USDG)": "https://aminagroup.com/enterprise/stablecoin-rewards/",
    },
    facts: {
      founded: "2018 (founded as SEBA Crypto AG, Zug); rebranded AMINA Bank AG (Dec 2023)",
      description:
        "FINMA-licensed Swiss digital asset bank offering integrated fiat and crypto banking — custody, trading, staking, lending, and stablecoin services — to clients worldwide from hubs in Zug, Abu Dhabi, and Hong Kong.",
      products: [
        "Digital asset custody (hot & cold)",
        "Fiat & crypto trading",
        "Staking",
        "Lending",
        "Asset management",
        "Stablecoin services (USDC, USDG)",
      ],
      funding:
        "Reported CHF 100M funding round (Sep 2018) to build the regulated digital-asset banking platform",
      stage:
        "FINMA banking and securities-dealer licence (Aug 2019); CISA licence for institutional collective-scheme custody (Sep 2021); ADGM FSRA permission (2022); Hong Kong SFC licence (2023); SEBA rebranded to AMINA Bank AG (Dec 2023); integrated Paxos USDG and joined the Global Dollar Network (Dec 2025); first regulated bank to integrate the Mesh crypto payments network (Nov 2026)",
      partners: [
        "Julius Baer",
        "LGT Bank",
        "St.Galler Kantonalbank",
        "HashKey Group",
        "Paxos (USDG)",
        "Mesh",
      ],
      tech: [
        "Built a proprietary, API-driven crypto banking platform in-house, supporting B2C, B2B, and B2B2C models with 24/7 trading across fiat and digital assets",
        "First regulated bank to integrate the Mesh crypto payments network — verified stablecoin deposits across 300+ wallet providers, executed inside its regulated online-banking environment",
      ],
      metrics: [
        "Assets under management: $4.2 billion, up 136% YoY (as of December 2024, AMINA Bank 2024 results press release)",
        "Revenue: $40.4 million in FY2024, up 69% YoY (as of December 2024, AMINA Bank 2024 results press release)",
      ],
      links: [
        { label: "Website (official)", url: "https://aminagroup.com/" },
        { label: "X (Twitter)", url: "https://x.com/AMINABankGlobal" },
        { label: "Business Wire — Mesh integration", url: "https://www.sttinfo.fi/tiedote/72195497/amina-becomes-the-first-regulated-bank-to-integrate-leading-crypto-payments-network-mesh?publisherId=58763726&lang=en" },
        { label: "2024 results — record revenue & AUM", url: "https://aminagroup.com/press/amina-bank-emerges-as-switzerlands-fastest-growing-crypto-bank-with-69-revenue-surge/" },
      ],
      people: [
        { name: "Franz Bergmüller", role: "CEO", linkedin: "https://www.linkedin.com/in/franz-bergmueller-7a2531a" },
      ],
    },
  },
  {
    id: "anchorage",
    name: "Anchorage",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Ethena Labs (USDtb)": "https://ethena.fi",
      "Tether (USA₮)": "https://tether.to",
      "Securitize": "https://securitize.io",
      "Visa": "https://www.visa.com",
      "BlackRock (BUIDL reserves)": "https://www.blackrock.com",
      "U.S. Bank (reserve custody)": "https://www.usbank.com",
    },
    productLinks: {
      "Institutional crypto custody": "https://www.anchorage.com/platform/custody",
      "Staking & governance": "https://www.anchorage.com/platform/staking",
      "Trading & settlement": "https://www.anchorage.com/platform/prime",
      "White-label stablecoin issuance": "https://www.anchorage.com/platform/stablecoin-issuance",
      "USDtb / USA₮ / RDUSD issuance": "https://www.anchorage.com/platform/stablecoin-issuance",
    },
    facts: {
      founded: "2017",
      description:
        "Global crypto platform for institutions — home to Anchorage Digital Bank, N.A., the first federally chartered digital asset bank in the United States, providing custody, staking, trading, settlement, and regulated stablecoin issuance.",
      products: [
        "Institutional crypto custody",
        "Staking & governance",
        "Trading & settlement",
        "White-label stablecoin issuance",
        "USDtb / USA₮ / RDUSD issuance",
      ],
      funding:
        "Reported ~$487M total — $17M Series A led by Andreessen Horowitz (2019), $40M Series B led by Blockchain Capital with Visa and GIC (2020), $80M Series C led by GIC (Feb 2021), $350M Series D led by KKR at >$3B valuation (2021)",
      stage:
        "OCC national trust bank charter (Jan 13, 2021) — first federally chartered crypto bank; acquired Mountain Protocol; first federally chartered stablecoin issuer following the GENIUS Act; OCC consent order lifted; brought federally issued stablecoins to Securitize (Oct 2026)",
      partners: [
        "Ethena Labs (USDtb)",
        "Tether (USA₮)",
        "Securitize",
        "Visa",
        "BlackRock (BUIDL reserves)",
        "U.S. Bank (reserve custody)",
      ],
      tech: [
        "Operates the first federally chartered digital asset bank (OCC charter, Jan 2021) under full federal examination; issues federally regulated stablecoins — USDtb (Ethena), USA₮ (Tether US), RDUSD — with monthly AICPA-attested reserve reports disclosing tokens outstanding and reserve composition",
        "Atlas settlement network: institutional collateral management over bankruptcy-remote qualified custody, with real-time 24/7 collateral monitoring and ~600 participants",
      ],
      metrics: [
        "USAT redeemable tokens outstanding: 175,731,350 (as of August 31, 2026, Anchorage USAT Reserve Report attestation)",
        "Atlas network: tens of billions of dollars settled to date across ~600 participants (as of March 2026, Anchorage press release)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.anchorage.com/" },
        { label: "X (Twitter)", url: "https://x.com/Anchorage" },
        { label: "USAT Reserve Report attestation (Aug 2026)", url: "https://learn.anchorage.com/08.31.26_USAT_Stablecoin_Attestation_Report%20(FINAL)%20signed_9.28.26.pdf" },
        { label: "Expanding Atlas — collateral management", url: "https://www.anchorage.com/press-room/expanding-atlas-anchorage-digital-launches-institutional-grade-collateral-management-offering" },
      ],
      people: [
        { name: "Nathan McCauley", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/nathanmccauley" },
        { name: "Diogo Mónica", role: "Co-founder & Executive Chairman", linkedin: "https://www.linkedin.com/in/diogomonica" },
      ],
    },
  },
  {
    id: "augustus",
    name: "Augustus",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Kraken": "https://www.kraken.com",
      "Mollie (early Ivy integration)": "https://www.mollie.com",
      "Circle (early Ivy integration)": "https://www.circle.com",
    },
    productLinks: {
      "USD & EUR operating accounts (incl. FBO and virtual accounts)": "https://augustus.com/",
      "Payment rails: SWIFT, ACH, SEPA, stablecoins": "https://augustus.com/",
      "Stablecoin settlement & digital-asset payment infrastructure": "https://augustus.com/",
      "Correspondent banking & treasury services": "https://augustus.com/",
      "Marble core banking platform": "https://augustus.com/",
    },
    facts: {
      founded: "2022 (founded in Berlin as Ivy; rebranded Augustus)",
      description:
        "The Global Dollar Bank — a clearing bank giving international fintechs, banks, and digital-asset firms direct API access to U.S. dollar and euro accounts and payment rails (SWIFT, ACH, SEPA, and stablecoins) on its proprietary Marble core.",
      products: [
        "USD & EUR operating accounts (incl. FBO and virtual accounts)",
        "Payment rails: SWIFT, ACH, SEPA, stablecoins",
        "Stablecoin settlement & digital-asset payment infrastructure",
        "Correspondent banking & treasury services",
        "Marble core banking platform",
      ],
      funding:
        "Reported ~$210M total — $40M round with Valar Ventures and Creandum, $180M Series B led by Tiger Global at a $1B valuation (Jul 2026)",
      stage:
        "Conditional OCC national trust bank approval (May 2026); $180M Series B at a $1B valuation (Jul 2026); processes payments for customers including Kraken",
      partners: [
        "Kraken",
        "Mollie (early Ivy integration)",
        "Circle (early Ivy integration)",
      ],
      tech: [
        "Marble — a proprietary core banking platform built in-house, giving fintechs, banks, and digital-asset firms direct API access to USD and EUR accounts and payment rails (SWIFT, ACH, SEPA, stablecoins)",
        "Stablecoin payments layer unifying bank account, stablecoin wallet, custody, liquidity, and payment rails in a single operating layer built for the GENIUS era",
      ],
      links: [
        { label: "Website (official)", url: "https://augustus.com/" },
        { label: "X (Twitter)", url: "https://x.com/augustus_bank" },
        { label: "OCC conditional approval — first clearing bank for the AI era", url: "https://augustus.com/newsroom/americas-first-clearing-bank-for-the-AI-era" },
        { label: "Stablecoin payments product", url: "https://augustus.com/products/stablecoin-payments" },
      ],
      people: [
        { name: "Ferdinand Dabitz", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/ferdinand-dabitz" },
        { name: "Simon Wimmer", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/stjwimmer" },
        { name: "Joshua Becker", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/joshua-becker-002a2619b" },
      ],
    },
  },
  {
    id: "bny",
    name: "BNY",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (USDC reserves)": "https://www.circle.com",
      "Ripple (RLUSD reserves)": "https://ripple.com",
    },
    productLinks: {
      "Digital Asset Custody (incl. USDC, XRP, RLUSD)": "https://www.bny.com/corporate/global/en/solutions/platforms/digital-assets.html",
      "Stablecoin reserve custody & mint/redeem enablement": "https://www.bny.com/corporate/global/en/solutions/platforms/digital-assets.html",
      "BNY Dreyfus Stablecoin Reserves Fund (BSRXX)": "https://www.bny.com/investments/us/en/intermediary/products/mm/fund/bny-dreyfus-stablecoin-reserves-fund.html",
      "Tokenized deposits & tokenization/transfer agency": "https://www.bny.com/corporate/global/en/solutions/platforms/digital-assets.html",
      "Tri-party collateral management": "https://www.bny.com/corporate/global/en/solutions/platforms/collateral-management.html",
    },
    facts: {
      founded: "1784 (The Bank of New York); Bank of New York Mellon formed 2007",
      description:
        "The world's leading custodian bank (NYSE: BNY) — not a stablecoin issuer, but the banking and infrastructure layer for stablecoins: primary reserve custodian for USDC and RLUSD, digital asset custody, tokenized deposits, and a stablecoin reserves money-market fund.",
      products: [
        "Digital Asset Custody (incl. USDC, XRP, RLUSD)",
        "Stablecoin reserve custody & mint/redeem enablement",
        "BNY Dreyfus Stablecoin Reserves Fund (BSRXX)",
        "Tokenized deposits & tokenization/transfer agency",
        "Tri-party collateral management",
      ],
      funding: "No venture funding — publicly listed (NYSE: BNY)",
      stage:
        "Launched Digital Asset Custody (2022); selected by Ripple as primary custodian of RLUSD reserves (Jul 2025); launched BNY Dreyfus Stablecoin Reserves Fund (Nov 2025); became primary custodian of Circle USDC reserves (2026); added XRP and RLUSD custody and expanded Digital Asset Custody to the EU under MiCA (Oct 2026)",
      partners: [
        "Circle (USDC reserves)",
        "Ripple (RLUSD reserves)",
      ],
      tech: [
        "Primary reserve custodian for Circle's USDC with institutional mint/redeem enablement — bank-grade custody wired directly into stablecoin issuance",
        "Selected by Ripple to custody the RLUSD stablecoin reserve, embedding OCC-chartered qualified custody in a major issuer's mint/redeem pipeline",
      ],
      metrics: [
        "Assets under custody and/or administration: $63.4 trillion (as of September 30, 2026, BNY 3Q26 earnings release / Form 10-Q)",
        "Assets under management: $2.19 trillion (as of September 30, 2026, BNY 3Q26 earnings release)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bny.com/" },
        { label: "X (Twitter)", url: "https://x.com/BNYglobal" },
        { label: "BNY–Circle stablecoin enablement", url: "https://www.bny.com/corporate/global/en/about-us/newsroom/press-release/bny-expands-relationship-circle-adds-institutional-grade-stablecoin-enablement-services.html" },
        { label: "Ripple selects BNY for RLUSD reserves", url: "https://www.bny.com/corporate/global/en/about-us/newsroom/press-release/ripple-selects-bny-to-custody-ripple-usd-reserves.html" },
      ],
      people: [
        { name: "Robin Vince", role: "Chairman & CEO", linkedin: "https://www.linkedin.com/in/robin-vince" },
      ],
    },
  },
  {
    id: "catena-labs",
    name: "Catena Labs",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (Arc)": "https://www.circle.com",
      "Turnkey": "https://www.turnkey.com",
      "Affirm": "https://www.affirm.com",
      "Mastercard (Agent Pay)": "https://www.mastercard.com",
      "Coinbase (ACK collaborator)": "https://www.coinbase.com",
    },
    productLinks: {
      "Agent accounts & payments": "https://catena.com/",
      "Custody & control of digital assets": "https://catena.com/",
      "Fiat & stablecoin conversion": "https://catena.com/",
      "Payment execution, clearing & settlement (multichain)": "https://catena.com/",
      "Agent Commerce Kit (ACK-ID, ACK-Pay) — open source": "https://www.agentcommercekit.com/",
    },
    facts: {
      founded: "2022 (founded by Circle co-founder Sean Neville; out of stealth May 2025)",
      description:
        "The first AI-native financial institution — a technology platform plus a national trust bank where AI agents hold funds and transact under human-defined controls, settling over stablecoins.",
      products: [
        "Agent accounts & payments",
        "Custody & control of digital assets",
        "Fiat & stablecoin conversion",
        "Payment execution, clearing & settlement (multichain)",
        "Agent Commerce Kit (ACK-ID, ACK-Pay) — open source",
      ],
      funding:
        "Reported $48M total — $18M seed led by a16z crypto (May 2025), $30M Series A co-led by Acrew Capital and a16z crypto (May 2026)",
      stage:
        "Out of stealth with an $18M seed led by a16z crypto (May 2025); open-sourced the Agent Commerce Kit (2025); filed an OCC national trust bank charter application (May 2026); conditional OCC national trust charter for Catena Trust Bank (Sep 2026)",
      partners: [
        "Circle (Arc)",
        "Turnkey",
        "Affirm",
        "Mastercard (Agent Pay)",
        "Coinbase (ACK collaborator)",
      ],
      tech: [
        "Authored and open-sourced the Agent Commerce Kit — ACK-ID for verifiable agent identity and ACK-Pay for agent payments",
        "Stablecoin-first settlement across ten chains and rails, including live USDC payments on Circle's Arc mainnet from day one",
      ],
      links: [
        { label: "Website (official)", url: "https://catena.com/" },
        { label: "X (Twitter)", url: "https://x.com/catena_labs" },
        { label: "Agent Commerce Kit (open source)", url: "https://catena.com/blog/agent-commerce-kit" },
        { label: "Catena and Arc — agentic finance infrastructure", url: "https://catena.com/blog/catena-and-arc-financial-infrastructure-for-the-agentic-economy" },
      ],
      people: [
        { name: "Sean Neville", role: "Co-Founder & CEO", linkedin: "https://www.linkedin.com/in/seanneville" },
      ],
    },
  },
  {
    id: "cross-river",
    name: "Cross River",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase": "https://www.coinbase.com",
      "Circle (USDC settlement)": "https://www.circle.com",
      "Visa (stablecoin settlement pilot)": "https://www.visa.com",
      "Stripe": "https://stripe.com",
      "Affirm": "https://www.affirm.com",
    },
    productLinks: {
      "Payments: ACH, RTP, FedNow, wires, push-to-card": "https://www.crossriver.com/products/ach",
      "Accounts & deposits": "https://www.crossriver.com/products/accounts",
      "Card issuing & processing": "https://www.crossriver.com/products/card-issuing-processing",
      "Lending origination & servicing": "https://www.crossriver.com/products/marketplace-lending",
      "Fiat on/off-ramps & stablecoin settlement": "https://www.crossriver.com/products/stablecoin-payments",
    },
    facts: {
      founded: "2008",
      description:
        "Federally regulated bank (Fort Lee, New Jersey) providing embedded-finance infrastructure — payments, accounts, cards, lending, and crypto/stablecoin rails — through its proprietary Cross River Operating System.",
      products: [
        "Payments: ACH, RTP, FedNow, wires, push-to-card",
        "Accounts & deposits",
        "Card issuing & processing",
        "Lending origination & servicing",
        "Fiat on/off-ramps & stablecoin settlement",
      ],
      funding:
        "Reported ~$725M total — ~$30M round led by Battery Ventures with Andreessen Horowitz and Ribbit Capital (2016), ~$100M led by KKR (2018), $620M led by Andreessen Horowitz and Eldridge at >$3B valuation (Mar 2022), $50M from T. Rowe Price-advised funds (2026)",
      stage:
        "Coinbase banking partner since 2014 (ACH program); expanded into USDC stablecoin settlement; stablecoin settlement pilot with Visa; infrastructure supports stablecoin flows on Ethereum and Solana",
      partners: [
        "Coinbase",
        "Circle (USDC settlement)",
        "Visa (stablecoin settlement pilot)",
        "Stripe",
        "Affirm",
      ],
      tech: [
        "Launched a stablecoin payments offering (Nov 2025) integrated directly with its real-time bank core COS — unifies fiat and stablecoin flows in one interoperable system for settlement, payouts, on/off-ramps, and treasury, without pre-funded ledgers (Cross River newsroom, Nov 24, 2025)",
        "Developer docs specify USDC transfers on Ethereum and Solana with API-selected network, transaction broadcasting and confirmation tracking handled by the bank, and amounts denominated in Wei/Lamport (1 USDC = 1e6 units) (Cross River docs)",
        "In Visa's stablecoin settlement pilot with Highnote (Dec 2025): USDC settlement over Solana in production for card-program settlement, enabling seven-day settlement for US issuers and acquirers (Cross River newsroom, Dec 16, 2025)",
        "Claims 99.9% historical uptime for its API-driven, modular banking operating system (COS) spanning lending, payments, and onchain (crossriver.com)",
      ],
      metrics: [
        "Consumer loans facilitated: $32Bn+ since 2019 (as of November 2026, crossriver.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.crossriver.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/crossriverbank",
        },
        {
          label: "Cross River newsroom — stablecoin payments launch (Nov 2025)",
          url: "https://www.crossriver.com/newsroom/cross-river-launches-stablecoin-payments-with-infrastructure-to-power-the-future-of-onchain-finance",
        },
        {
          label: "Cross River docs — supported assets and networks",
          url: "https://docs.crossriver.com/concepts/onchain-payments/supported-assets-and-networks",
        },
      ],
      people: [
        { name: "Gilles Gade", role: "Founder, CEO & Chairman", linkedin: "https://www.linkedin.com/in/gillesgade" },
      ],
    },
  },
  {
    id: "customers",
    name: "Customers",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Tassat (CBIT)": "https://tassat.com",
      "Circle (USDC settlement)": "https://www.circle.com",
      "Genesis Global Trading": "https://genesistrading.com",
      "GSR": "https://www.gsr.io",
      "XREX": "https://xrex.io",
    },

    productLinks: {
      "Commercial & business banking": "https://www.customersbank.com/",
      "CBIT — Customers Bank Instant Token (tokenized-deposit B2B payments)": "https://tassat.com",
      "cubiX instant payments platform": "https://www.customersbank.com/digital-payments/",
    },

    facts: {
      founded: "2009 (predecessor New Century Bank 1997)",
      description:
        "Pennsylvania-chartered, FDIC-insured commercial bank (West Reading, PA; subsidiary of Customers Bancorp, NYSE: CUBI) and a leading bank for digital-asset businesses, with real-time blockchain-based B2B dollar settlement.",
      products: [
        "Commercial & business banking",
        "Digital-asset client banking (deposits, payments, fiat on/off-ramps)",
        "CBIT — Customers Bank Instant Token (tokenized-deposit B2B payments)",
        "cubiX instant payments platform",
      ],
      funding:
        "No venture funding — publicly listed (NYSE: CUBI since 2013); ~$26.5B in assets (Jun 2026)",
      stage:
        "Launched CBIT blockchain-based instant payments with Tassat (Oct 2021); named inaugural institutional crypto clients (2021); served as a 24/7 settlement channel for Circle's USDC after Signature Bank's shutdown (2023); launched cubiX instant payments",
      partners: [
        "Tassat (CBIT)",
        "Circle (USDC settlement)",
        "Genesis Global Trading",
        "GSR",
        "XREX",
      ],
      tech: [
        "CBIT (Customers Bank Instant Token) — a bank-issued digital fiat token on a Tassat-built blockchain for 24/7 B2B settlement between bank clients, live since Oct 2021 with first clients including Genesis Trading and GSR (CoinDesk, Nov 2, 2021)",
        "cubiX payments platform: single-API access to wire, ACH, RTP and FedNow, 24/7/365, with RESTful API and real-time webhooks (customersbank.com/digital-payments)",
        "cubiX ships an MCP server so LLM-based agents can interact with payment rails directly, positioning the platform for agentic payments (customersbank.com/digital-payments)",
        "Served as a 24/7 settlement channel for Circle's USDC after Signature Bank's 2023 shutdown, keeping mint/redemption flows running for institutional clients (Fortune, Apr 27, 2023)",
      ],
      metrics: [
        "Total deposits: $22.6B (as of September 30, 2026, Q3 2026 press release)",
        "Total loans: $18.5B (as of September 30, 2026, Q3 2026 press release)",
        "cubiX cumulative network transaction volume: $5.6T+ inception-to-date (as of September 30, 2026, Q3 2026 press release)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.customersbank.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/CustomersBank",
        },
        {
          label: "Customers Bank — cubiX digital payments platform",
          url: "https://www.customersbank.com/digital-payments/",
        },
        {
          label: "Q3 2026 results press release",
          url: "https://www.customersbank.com/investor-relations/press-releases/press-release/Customers-Bancorp-Reports-Results-for-Third-Quarter-2026-1802/",
        },
      ],
      people: [
        { name: "Sam Sidhu", role: "Vice Chairman & CEO", linkedin: "https://www.linkedin.com/in/ssidhu" },
      ],
    },
  },
  {
    id: "hana",
    name: "Hana",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Dunamu (Upbit)": "https://dunamu.com",
      "Circle (USDC)": "https://www.circle.com",
      "Tether": "https://tether.to",
      "BitGo (BitGo Korea)": "https://www.bitgo.com",
      "Standard Chartered": "https://www.sc.com/en/",
    },
    productLinks: {
      "Commercial & retail banking": "https://www.hanafn.com/",
      "Won-backed stablecoin issuance consortium": "https://www.hanafn.com/",
      "Digital-asset custody & travel-rule infrastructure": "https://www.hanafn.com/",
      "USDC payment services for foreign visitors": "https://www.hanafn.com/",
    },

    facts: {
      founded: "2005 (Hana Financial Group, Seoul)",
      description:
        "Hana Bank / Hana Financial Group (KOSPI: 086790), one of Korea's largest financial holding companies — building won-backed stablecoin issuance infrastructure with partners including Upbit operator Dunamu.",
      products: [
        "Commercial & retail banking",
        "Won-backed stablecoin issuance consortium",
        "Digital-asset custody & travel-rule infrastructure",
        "USDC payment services for foreign visitors",
      ],
      funding:
        "No venture funding — publicly listed (KOSPI: 086790); investing ~₩1T (~$670M) for a 6.55% stake in Upbit operator Dunamu (2026)",
      stage:
        "Formed Korea's first major-holding-company stablecoin consortium with BNK Financial, iM Financial, SC Bank Korea, and OK Savings Bank (Jan 2026); KRW-backed stablecoin PoC on the XRP Ledger (Hana Financial TI); agreed won-pegged stablecoin development with Dunamu (May 2026); MoU with Tether (Oct 2026)",
      partners: [
        "Dunamu (Upbit)",
        "Circle (USDC)",
        "Tether",
        "BitGo (BitGo Korea)",
        "Standard Chartered",
      ],
      tech: [
        "Won-stablecoin PoC completed with Axelar and XRPL Korea through Hana Financial TI (Apr 2026): verified issuance, circulation, multichain settlement and financial-institution control functions including restricting transactions, recalling assets, and adjusting circulating supply (BloomingBit, Apr 30, 2026)",
        "Developing travel-rule infrastructure for crypto transfers with Upbit Global, aligning cross-border transfer compliance with its stablecoin roadmap (crypto.news, Sep 22, 2026)",
        "No official X account verified — group site links Facebook, Instagram and YouTube only",
      ],
      metrics: [
        "Market cap: KRW 31.06T (as of October 2026, StockAnalysis.com, KRX: 086790)",
        "Shares outstanding: 267.11M / float 262.66M (as of October 2026, StockAnalysis.com, KRX: 086790)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.hanafn.com/",
        },
        {
          label: "CoinDesk — Dunamu stake & won stablecoin",
          url: "https://www.coindesk.com/business/2026/05/15/hana-bank-to-acquire-usd670-million-stake-in-upbit-operator-dunamu",
        },
        {
          label: "Korea Herald — USDC payments with Circle & Crypto.com",
          url: "https://www.koreaherald.com/article/10687842",
        },
        {
          label: "BloomingBit — Axelar/XRPL Korea won-stablecoin PoC (Apr 2026)",
          url: "https://en.bloomingbit.io/feed/news/111094",
        },
      ],
    },
  },
  {
    id: "hsbc",
    name: "HSBC",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "HKSAR Government (digital green bonds)": "https://www.gov.hk",
      "HKMA (e-HKD+, Project Ensemble)": "https://www.hkma.gov.hk",
    },
    productLinks: {
      "HSBC Orion — digital bond issuance & settlement": "https://www.hsbc.com/who-we-are/hsbc-and-digital/hsbc-and-digital-assets-and-currencies",
      "Tokenised Deposit Service (1:1 deposits, 24/7 transfers)": "https://www.hsbc.com/who-we-are/hsbc-and-digital/hsbc-and-digital-assets-and-currencies",
      "HSBC Gold Token (retail tokenized gold)": "https://www.hsbc.com/who-we-are/hsbc-and-digital/hsbc-and-digital-assets-and-currencies",
      "Digital asset custody & settlement": "https://www.hsbc.com/who-we-are/hsbc-and-digital/hsbc-and-digital-assets-and-currencies",
      "HKD stablecoin (planned H2 2026)": "https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence",
    },

    facts: {
      founded: "1865 (The Hongkong and Shanghai Banking Corporation, Hong Kong)",
      description:
        "One of the world's largest banking groups (HSBC Holdings plc, London) — a regulated tokenization leader issuing digital bonds on HSBC Orion, running tokenized deposits, and launching an HKD stablecoin from its Hong Kong bank.",
      products: [
        "HSBC Orion — digital bond issuance & settlement",
        "Tokenised Deposit Service (1:1 deposits, 24/7 transfers)",
        "HSBC Gold Token (retail tokenized gold)",
        "Digital asset custody & settlement",
        "HKD stablecoin (planned H2 2026)",
      ],
      funding:
        "No venture funding — publicly listed (HSBC Holdings plc, London, Hong Kong and New York)",
      stage:
        "World's first multi-currency digital bonds issued on HSBC Orion; supported the HKSAR Government's digital green bond — the largest digital bond issuance globally; HKMA stablecoin issuer licence granted to The Hongkong and Shanghai Banking Corporation (Apr 10, 2026); HKD stablecoin planned for H2 2026; participated in HKMA's e-HKD+ and Project Ensemble pilots",
      partners: [
        "HKSAR Government (digital green bonds)",
        "HKMA (e-HKD+, Project Ensemble)",
      ],
      tech: [
        "HSBC Orion — private-ledger digital assets platform behind landmark digital bonds: world's first multi-currency digital bond for the HKSAR Government, the EIB's first sterling digital bond, and Luxembourg's first digital treasury certificates (hsbc.com digital assets)",
        "Tokenised Deposit Service in Hong Kong — first bank-led blockchain-based settlement service in the city, built on the HKMA Ensemble network for near-instant HKD and USD transfers between corporate wallets (hsbc.com digital assets)",
        "Piloted quantum-safe protection for tokenised gold with Quantinuum: post-quantum cryptography and quantum randomness against \"store now, decrypt later\" attacks, including converting Gold Tokens to ERC-20 for cross-ledger interoperability (HSBC media release, Sep 19, 2024)",
        "First bank-led tokenised deposit transaction over Swift's blockchain-based shared ledger (with Standard Chartered); building a digital-assets custody service for tokenised securities to complement Orion (hsbc.com digital assets)",
      ],
      metrics: [
        "Market cap: $288.94B (as of November 2026, CompaniesMarketCap)",
        "Q3 2026 profit before tax (excl. notable items): $10.0B (as of Q3 2026, hsbc.com results highlights)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.hsbc.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/HSBC",
        },
        {
          label: "HSBC — digital assets and currencies overview",
          url: "https://www.hsbc.com/who-we-are/hsbc-and-digital/hsbc-and-digital-assets-and-currencies",
        },
        {
          label: "HKMA stablecoin issuer licence",
          url: "https://www.about.hsbc.com.hk/news-and-media/hsbc-welcomes-hkmas-grant-of-a-hong-kong-stablecoin-issuer-licence",
        },
      ],
      people: [
        { name: "Pam Kaur", role: "Group CFO", linkedin: "https://www.linkedin.com/in/mpamkaur" },
      ],
    },
  },
  {
    id: "j-p-morgan",
    name: "J.P. Morgan",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase (Base)": "https://www.coinbase.com",
      "Mastercard (JPMD proof of concept)": "https://www.mastercard.com",
      "DBS Bank (Partior)": "https://www.dbs.com",
      "Temasek (Partior)": "https://www.temasek.com.sg",
      "Canton Network": "https://www.canton.network",
    },
    productLinks: {
      "Kinexys Digital Payments (formerly JPM Coin)": "https://www.jpmorgan.com/kinexys/jpm-coin",
      "JPMD — USD deposit token on Base & Ethereum": "https://www.jpmorgan.com/kinexys/jpmd",
      "Kinexys Digital Assets (tokenized assets & funds)": "https://www.jpmorgan.com/kinexys",
      "Kinexys Fund Flow": "https://www.jpmorgan.com/kinexys/fund-flow",
      "Partior multi-bank network (co-founder)": "https://www.partior.com",
    },

    facts: {
      founded: "1799 (The Manhattan Company)",
      description:
        "Global bank (JPMorgan Chase, NYSE: JPM) whose Kinexys blockchain unit (formerly Onyx) issues the JPM Coin / JPMD USD deposit token and processes trillions of dollars in on-chain institutional payments.",
      products: [
        "Kinexys Digital Payments (formerly JPM Coin)",
        "JPMD — USD deposit token on Base & Ethereum",
        "Kinexys Digital Assets (tokenized assets & funds)",
        "Kinexys Fund Flow",
        "Partior multi-bank network (co-founder)",
      ],
      funding: "No venture funding — publicly listed (NYSE: JPM)",
      stage:
        "Blockchain infrastructure since 2015; JPM Coin announced (Feb 2019); Onyx business formed (2020); rebranded Kinexys by J.P. Morgan (Nov 2024); JPMD proof of concept on Base (Jun 2025); JPMD live for institutional clients on Base (Nov 2025) and Ethereum (Oct 2026); more than $3T cumulative transaction volume",
      partners: [
        "Coinbase (Base)",
        "Mastercard (JPMD proof of concept)",
        "DBS Bank (Partior)",
        "Temasek (Partior)",
        "Canton Network",
      ],
      tech: [
        "JPM Coin (JPMD) — a USD deposit token issued on Base (Nov 2025) and Ethereum (Oct 2026) with smart contracts publicly viewable; conversion to/from cash runs through the firm's Blockchain Deposit Account (BDA) framework, keeping funds inside the bank while moving on public EVM chains (jpmorgan.com Kinexys + newsroom)",
        "Only vetted institutional counterparties can transact; activity on public chains is traceable on a shared ledger while most volume runs on Kinexys's permissioned ledger (jpmorgan.com Kinexys)",
        "Kinexys platform is built on Ethereum Virtual Machine technology; company reports more than $4T in cumulative transactions since inception and ~$7B average daily volume (internal calculation, no product breakdown) (J.P. Morgan announcement, Oct 19, 2026)",
        "Tokenized money market funds from J.P. Morgan Asset Management issue, subscribe and redeem on public Ethereum via Kinexys Digital Assets; intraday repo on the permissioned ledger reached ~$1.5T cumulative by Oct 2024 (ICMA, via third-party review, Nov 2026)",
      ],
      metrics: [
        "Market cap: $927.99B (as of November 2026, CompaniesMarketCap)",
        "Kinexys cumulative transaction volume: $4T+ since inception (as of October 2026, J.P. Morgan announcement)",
        "Kinexys average daily transaction volume: $7B (as of October 2026, J.P. Morgan announcement; internally calculated)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.jpmorgan.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/jpmorgan",
        },
        {
          label: "JPM Coin (Kinexys) product page",
          url: "https://www.jpmorgan.com/kinexys/jpm-coin",
        },
        {
          label: "JPM Coin live on Ethereum (Oct 2026)",
          url: "https://www.jpmorgan.com/payments/newsroom/jpm-coin-live-on-ethereum",
        },
      ],
      people: [
        { name: "Jamie Dimon", role: "Chairman & CEO", linkedin: "https://www.linkedin.com/in/jamiedimon" },
      ],
    },
  },
];
