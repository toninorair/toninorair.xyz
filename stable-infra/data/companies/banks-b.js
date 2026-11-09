// Banks, batch B — Lead Bank through U.S. Bank.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const BANKS_B = [
  {
    id: "lead-bank",
    name: "Lead Bank",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Stripe": "https://stripe.com",
      "Visa": "https://www.visa.com",
      "Bridge": "https://www.bridge.xyz",
      "Mastercard": "https://www.mastercard.com",
      "Chainalysis": "https://www.chainalysis.com",
    },
    productLinks: {
      "Banking-as-a-service APIs": "https://www.lead.bank/",
      "Accounts & payments (ACH, wires, FedNow, RTP)": "https://www.lead.bank/",
      "Card issuing": "https://www.lead.bank/",
      "Lending & embedded finance": "https://www.lead.bank/",
      "Stablecoin on/off-ramps & cross-border FX payouts": "https://www.lead.bank/blog/stablecoin-capabilities",
      "Stablecoin-backed cards": "https://www.lead.bank/blog/stablecoin-capabilities",
    },

    facts: {
      founded: "1928 (bank charter); relaunched 2022",
      description:
        "Missouri-chartered, FDIC-insured bank in Kansas City providing API-driven banking-as-a-service — accounts, payments, cards, and stablecoin on/off-ramps — for fintech and digital-asset companies.",
      products: [
        "Banking-as-a-service APIs",
        "Accounts & payments (ACH, wires, FedNow, RTP)",
        "Card issuing",
        "Lending & embedded finance",
        "Stablecoin on/off-ramps & cross-border FX payouts",
        "Stablecoin-backed cards",
      ],
      funding:
        "Reported — acquired by a Jackie Reses-led investor group for ~$56M (2022), $70M Series B co-led by ICONIQ Capital and Greycroft at a $1.47B valuation (Sep 2025)",
      stage:
        "Acquired by a fintech investor group led by Jackie Reses and relaunched as a sponsor bank (2022); launched stablecoin on/off-ramps and cross-border FX payouts; acquired stablecoin payments company Loop (late 2025); partnered with Mastercard on stablecoin settlement",
      partners: ["Stripe", "Visa", "Bridge", "Mastercard", "Chainalysis"],
      tech: [
        "Stablecoin on/off-ramps and cross-border FX payouts are native rails of its banking API platform, with funds settling directly in Lead deposit accounts across major blockchain networks (Oct 2026)",
        "Acquired stablecoin payments processor Loop Crypto (Dec 2025); Loop's team now leads Lead's stablecoin stack",
        "Company-reported scale: direct Federal Reserve connection with no middleware providers, ~4.15B API calls and 30M+ end users per year",
      ],
      links: [
        { label: "Website (official)", url: "https://www.lead.bank/" },
        { label: "X (Twitter)", url: "https://x.com/Lead_Bank" },
        { label: "Stablecoin capabilities", url: "https://www.lead.bank/blog/stablecoin-capabilities" },
        { label: "Loop Crypto joins Lead", url: "https://www.lead.bank/blog/loop-crypto-joins-lead" },
      ],
      people: [
        { name: "Jackie Reses", role: "Co-Founder, CEO & Chair", linkedin: "https://www.linkedin.com/in/jacqueline-reses-938b7850" },
        { name: "Ronak Vyas", role: "Co-Founder & CTO", linkedin: "https://www.linkedin.com/in/ronakvyas" },
        { name: "Erica Khalili", role: "Co-Founder, Chief Legal & Risk Officer", linkedin: "https://www.linkedin.com/in/erica-khalili-48138570" },
      ],
    },
  },
  {
    id: "sofi",
    name: "SoFi",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Hollywood Park — SoFi Stadium, home of the NFL Rams and Chargers": "https://sofistadium.com",
      "Social Capital Hedosophia V (SPAC merger)": "https://www.socialcapital.com",
    },
    productLinks: {
      "Student loan refinancing": "https://www.sofi.com/student-loans/",
      "Personal loans": "https://www.sofi.com/personal-loans/",
      "Checking & Savings": "https://www.sofi.com/bank/",
      "SoFi Invest": "https://www.sofi.com/invest/",
      "Credit card": "https://www.sofi.com/credit-card/",
      "Galileo fintech platform": "https://tech.sofi.com/",
    },

    facts: {
      founded: "2011",
      description:
        "Digital personal finance company that grew out of student-loan refinancing into SoFi Bank, N.A., a nationally chartered bank offering lending, banking, and investing.",
      products: [
        "Student loan refinancing",
        "Personal loans",
        "Checking & Savings",
        "SoFi Invest",
        "Credit card",
        "Galileo fintech platform",
      ],
      funding:
        "Reported — $1B Series E led by SoftBank (Oct 2015), $500M led by Qatar Investment Authority (May 2019); listed via SPAC merger with Social Capital Hedosophia V at ~$8.65B (Jun 2021)",
      stage:
        "SoFi Stadium naming rights (2019); acquired Galileo for $1.2B (2020); OCC conditional approval as SoFi Bank, N.A. (Jan 2022); completed Golden Pacific Bancorp acquisition (Feb 2022)",
      partners: [
        "Hollywood Park — SoFi Stadium, home of the NFL Rams and Chargers",
        "Social Capital Hedosophia V (SPAC merger)",
      ],
      tech: [
        "Blockchain-powered international money transfers built on Lightspark's Bitcoin Lightning Network infrastructure (announced Aug 2025)",
        "SoFi Crypto (Nov 2025) — first nationally chartered, FDIC-insured US bank to offer consumer crypto trading on its own platform",
      ],
      metrics: [
        "Public float: $20.0 billion (as of June 30, 2025, SoFi Technologies 10-K for FY2025)",
        "Shares outstanding: 1,291,570,324 (as of July 31, 2026, SoFi Technologies 10-Q, Q2 2026)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.sofi.com/" },
        { label: "X (Twitter)", url: "https://x.com/SoFi" },
        { label: "SoFi × Lightspark — blockchain-enabled international money transfers", url: "https://investors.sofi.com/news/news-details/2025/SoFi-Partners-with-Lightspark-to-Power-Blockchain-Enabled-International-Money-Transfers/default.aspx" },
        { label: "SoFi Crypto launch — first nationally chartered bank with consumer crypto trading", url: "https://www.sofi.com/newsroom/sofi-bank-becomes-the-first-and-only-nationally-chartered-bank-to-launch-crypto-trading-for-consumers/" },
      ],
      people: [
        { name: "Anthony Noto", role: "CEO", linkedin: "https://www.linkedin.com/in/anthonynoto", x: "https://x.com/anthonynoto" },
      ],
    },
  },
  {
    id: "standard-chartered",
    name: "Standard Chartered",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Northern Trust (Zodia Custody)": "https://www.northerntrust.com",
      "Animoca Brands (Anchorpoint JV)": "https://www.animocabrands.com",
      "HKT (Anchorpoint JV)": "https://www.hkt.com",
    },
    productLinks: {
      "Institutional digital-asset custody": "https://www.sc.com/en/corporate-investment-banking/digital-assets/",
      "Crypto trading & brokerage": "https://www.sc.com/en/corporate-investment-banking/digital-assets/digital-assets-trading/",
      "Tokenisation": "https://www.sc.com/en/corporate-investment-banking/digital-assets/",
      "Stablecoin settlement & research": "https://www.sc.com/en/corporate-investment-banking/digital-assets/",
      "SC Ventures fintech investing": "https://www.scventures.io",
    },

    facts: {
      founded: "1969 (merger of Standard Bank and Chartered Bank)",
      description:
        "Global bank connecting corporate, institutional and affluent clients to markets across Asia, Africa and the Middle East, with an institutional digital-assets platform spanning custody, trading, tokenisation, and stablecoins.",
      products: [
        "Institutional digital-asset custody",
        "Crypto trading & brokerage",
        "Tokenisation",
        "Stablecoin settlement & research",
        "SC Ventures fintech investing",
      ],
      funding:
        "No venture funding — publicly listed bank (London and Hong Kong listings)",
      stage:
        "Launched Zodia Custody with Northern Trust (Dec 2020, FCA-registered 2021); joined the HKMA stablecoin issuer sandbox with Animoca Brands and HKT (Jul 2024); Anchorpoint JV to issue an HKD-backed stablecoin (Aug 2025); Anchorpoint granted an HKMA stablecoin issuer licence (Apr 2026); agreed to acquire Zodia Custody's custody business (2026)",
      partners: [
        "Northern Trust (Zodia Custody)",
        "Animoca Brands (Anchorpoint JV)",
        "HKT (Anchorpoint JV)",
      ],
      tech: [
        "Anchorpoint Financial — its JV with Animoca Brands and HKT — was granted an HKMA stablecoin issuer licence (Apr 2026) to issue HKDAP, a regulated HKD-backed stablecoin",
        "Standard Chartered Bank (Hong Kong) became the first bank distributor of HKDAP, exploring fund settlement, treasury management, and cross-border trade payment use cases (Aug 2026)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.sc.com/" },
        { label: "X (Twitter)", url: "https://x.com/stanchart" },
        { label: "Anchorpoint granted HKMA stablecoin issuer licence", url: "https://www.sc.com/en/press-release/standard-chartered-backed-anchorpoint-granted-stablecoin-issuer-licence-by-the-hong-kong-monetary-authority/" },
        { label: "First bank distributor of HKDAP", url: "https://www.sc.com/en/press-release/standard-chartered-becomes-first-bank-distributor-of-hkdap-to-unlock-real-economy-benefits-of-hkd-stablecoins/" },
      ],
      people: [
        { name: "Bill Winters", role: "Group Chief Executive", linkedin: "https://www.linkedin.com/in/billthomaswinters" },
      ],
    },
  },
  {
    id: "sygnum",
    name: "Sygnum",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "Artemundi (Picasso tokenization)": "https://artemundi.com",
      "DFINITY (Internet Computer / ICP)": "https://dfinity.org",
    },
    productLinks: {
      "Digital asset custody": "https://www.sygnum.com/custody/",
      "Fiat & crypto banking and trading": "https://www.sygnum.com/",
      "Institutional staking": "https://www.sygnum.com/staking/",
      "Tokenization & asset management": "https://www.sygnum.com/asset-management/",
      "Digital CHF settlement token": "https://www.sygnum.com/",
      "Sygnum Connect settlement network": "https://www.sygnum.com/sygnum-connect/",
    },

    facts: {
      founded: "2017",
      description:
        "Global digital asset banking group built on Swiss and Singapore heritage — the world's first regulated digital asset bank, serving professional and institutional investors.",
      products: [
        "Digital asset custody",
        "Fiat & crypto banking and trading",
        "Institutional staking",
        "Tokenization & asset management",
        "Digital CHF settlement token",
        "Sygnum Connect settlement network",
      ],
      funding:
        "Reported $148M total — $90M Series B (Jan 2022, ~$800M valuation), $58M Strategic Growth Round (Jan 2025, >$1B post-money valuation)",
      stage:
        "FINMA banking & securities-dealer licence (Aug 2019) — world's first digital asset bank; Singapore MAS capital-markets and major-payment licences; tokenized a Picasso with Artemundi (2021); unicorn valuation (Jan 2025)",
      partners: [
        "Artemundi (Picasso tokenization)",
        "DFINITY (Internet Computer / ICP)",
      ],
      tech: [
        "Bank-grade multi-level custody for 70+ digital assets in geo-redundant Swiss data centres, with assets held off-balance-sheet, bankruptcy-remote, and under independently audited key-management controls (Sygnum custody pages)",
        "Sygnum Protect off-exchange custody, launched with Binance (April 2024) and joined by Deribit (March 2025) and Bybit (September 2025), lets institutions trade on exchanges while collateral — including US Treasuries, USDT and USDC — sits in bankruptcy-remote Sygnum custody (Sygnum, March 2026 release)",
        "Sygnum Connect, a 24/7 multi-asset settlement network for instant fiat, crypto and stablecoin settlement that removes counterparty and settlement risk; launch members included AsiaNext and Hidden Road (Sygnum, January 2025 release)",
        "End-to-end bank-grade tokenization: Desygnate issuance and the SygnEx secondary-trading venue cover structuring, issuance, custody and trading of tokenized securities, private-market funds and art (Sygnum tokenization pages)",
        "Regulated institutional staking for proof-of-stake assets (ETH, SOL, ADA, SUI, ATOM, ICP, XTZ) from within regulated custody, with Sygnum-operated validators and in-platform reward distribution (Sygnum staking pages)",
      ],
      metrics: [
        "Total client assets: >USD 5 billion (as of January 2025, Sygnum $58M Strategic Growth Round release)",
        "Sygnum Protect off-exchange custody assets: >USD 1 billion after 900% growth in 2025 (as of March 2026, Sygnum)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.sygnum.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/sygnumofficial",
        },
        {
          label: "Sygnum — Custody",
          url: "https://www.sygnum.com/custody/",
        },
        {
          label: "Sygnum Protect off-exchange custody — assets surpass USD 1bn",
          url: "https://www.sygnum.com/news/sygnum-off-exchange-custody-enabling-tradfi-access-to-crypto-market-volatility-opportunities-assets-surpass-usd-1bn/",
        },
      ],
      people: [
        { name: "Mathias Imbach", role: "Co-Founder & Group CEO", linkedin: "https://www.linkedin.com/in/dimbach" },
      ],
    },
  },
  {
    id: "u-s-bank",
    name: "U.S. Bank",
    categoryId: "banks",
    profileStatus: "complete",
    partnerLinks: {
      "NYDIG (crypto custody sub-custodian)": "https://www.nydig.com",
      "Anchorage Digital Bank (stablecoin reserve custody)": "https://www.anchorage.com",
      "Stellar (USBDC cross-border pilot)": "https://stellar.org",
    },
    productLinks: {
      "Commercial & consumer banking": "https://www.usbank.com/",
      "Global custody & administration": "https://www.usbank.com/",
      "Institutional bitcoin/ETF custody": "https://www.usbank.com/",
      "Stablecoin reserve custody": "https://ir.usbank.com/news-events/news/news-details/2025/U-S--Bank-selected-to-provide-custody-services-for-reserves-backing-payment-stablecoins-from-Anchorage-Digital-Bank/default.aspx",
      "USBDC stablecoin": "https://ir.usbank.com/news-events/news/news-details/2026/U-S--Bank-Launches-USBDC-Stablecoin/default.aspx",
    },

    facts: {
      founded: "1863",
      description:
        "Fifth-largest U.S. commercial bank (Minneapolis; NYSE: USB) and one of the nation's largest global custodians, now moving into institutional crypto custody and stablecoin infrastructure.",
      products: [
        "Commercial & consumer banking",
        "Global custody & administration",
        "Institutional bitcoin/ETF custody",
        "Stablecoin reserve custody",
        "USBDC stablecoin",
      ],
      funding:
        "No venture funding — publicly listed (NYSE: USB); reported $11.7T in assets under custody & administration (Jun 2025)",
      stage:
        "Institutional bitcoin custody with NYDIG as sub-custodian (Oct 2021); custody resumed and expanded to bitcoin ETFs (Sep 2025); selected to custody reserves backing Anchorage Digital Bank payment stablecoins (Oct 2025); launched the USBDC stablecoin with a cross-border pilot (Sep 2026)",
      partners: [
        "NYDIG (crypto custody sub-custodian)",
        "Anchorage Digital Bank (stablecoin reserve custody)",
        "Stellar (USBDC cross-border pilot)",
      ],
      tech: [
        "USBDC, a proprietary USD-backed stablecoin, was piloted live (September 9, 2026) on the public Stellar blockchain for a cross-border payment between U.S. Bank entities in North America and Europe, exercising minting, payment, redemption, freezing and clawback (U.S. Bancorp release)",
        "The pilot validated U.S. Bank's internally developed Digital Asset Platform, which links blockchain rails to the bank's core finance, risk, compliance and operations systems and serves as the foundation for issuing and moving tokenized assets (U.S. Bancorp release)",
        "Institutional bitcoin custody resumed (September 2025) as an early-access program for Global Fund Services clients, with NYDIG as bitcoin sub-custodian and coverage expanded to bitcoin ETFs (U.S. Bank newsroom)",
        "U.S. Bank was selected (October 2025) to provide custody for the reserves backing payment stablecoins issued by Anchorage Digital Bank (U.S. Bancorp release)",
        "A strategic relationship with the Stellar Development Foundation underpins the USBDC work, combining Stellar's near-instant, sub-cent settlement with U.S. Bank payments and treasury operations; further exploration covers liquidity management, collateral mobility and cross-border treasury (U.S. Bancorp release)",
      ],
      metrics: [
        "Market capitalization: $95.1 billion (as of November 2026, stockanalysis.com)",
        "Assets under custody and administration (Wealth, Corporate, Commercial and Institutional Banking): $11.7 trillion (as of June 30, 2025, U.S. Bank)",
        "U.S. Bancorp total assets: $686 billion (as of June 30, 2025, U.S. Bank)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.usbank.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/usbank",
        },
        {
          label: "USBDC stablecoin launch",
          url: "https://ir.usbank.com/news-events/news/news-details/2026/U-S--Bank-Launches-USBDC-Stablecoin/default.aspx",
        },
        {
          label: "Anchorage Digital reserve custody",
          url: "https://ir.usbank.com/news-events/news/news-details/2025/U-S--Bank-selected-to-provide-custody-services-for-reserves-backing-payment-stablecoins-from-Anchorage-Digital-Bank/default.aspx",
        },
      ],
      people: [
        { name: "Gunjan Kedia", role: "Chairman & CEO, U.S. Bancorp", linkedin: "https://www.linkedin.com/in/gunjan-kedia-3746b727" },
      ],
    },
  },
];
