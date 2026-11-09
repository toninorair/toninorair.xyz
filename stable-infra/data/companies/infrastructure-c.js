// Stablecoin infrastructure — HIFI through Ramp Network.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const INFRASTRUCTURE_C = [
  {
    id: "hifi",
    name: "HIFI",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Cross River Bank": "https://www.crossriver.com/",
      "Visa Direct": "https://www.visa.com",
      "Circle Payments Network": "https://www.circle.com",
      "Polygon": "https://polygon.technology",
      "Anchorage Digital": "https://www.anchorage.com/",
      "Tradeweb": "https://www.tradeweb.com/",
      "Sumitomo": "https://www.sumitomocorp.com/en/global",
      "Arival Bank": "https://arival.com/",
    },
    productLinks: {
      "Stablecoin inflows and payouts APIs": "https://www.hifi.com/inflows",
      "Fiat–stablecoin conversion and virtual USD accounts": "https://www.hifi.com/outflows",
      "Visa Direct push-to-card payouts": "https://www.hifi.com/push-to-card",
      "Programmable settlement (escrow, batching, multi-party routing)": "https://www.hifi.com/workflows",
      "Tokenized capital-markets rails (tokenized repo)": "https://www.hifi.com/institutional-finance",
    },
    facts: {
      founded: "2022",
      description:
        "API infrastructure for moving money across stablecoins, banks, cards, and other payment rails — handling inflows, payouts, fiat–stablecoin conversion, and programmable settlement for fintechs and institutions.",
      products: [
        "Stablecoin inflows and payouts APIs",
        "Fiat–stablecoin conversion and virtual USD accounts",
        "Visa Direct push-to-card payouts",
        "Programmable settlement (escrow, batching, multi-party routing)",
        "Tokenized capital-markets rails (tokenized repo)",
      ],
      funding:
        "Reported $37M Series A led by Left Lane Capital (Sep 2026); earlier pre-seed and seed rounds (2022–2024, including a reported $6M seed in Dec 2024) per funding trackers",
      stage:
        "Settled $227M+ across 6M+ transactions on Polygon since Jan 2025; integrated Circle Payments Network and Visa Direct; supported a live tokenized-repo transaction on Tradeweb (DRW/Marex, USDCx cash leg on Canton); Series A announced Sep 2026",
      partners: [
        "Cross River Bank",
        "Visa Direct",
        "Circle Payments Network",
        "Polygon",
        "Anchorage Digital",
        "Tradeweb",
        "Sumitomo",
        "Arival Bank",
      ],
      tech: [
        "Canton integration for private onchain settlement of institutional payments, with USDCx bridged between Ethereum and Canton via Circle's XReserve — lock USDC, mint USDCx, burn to redeem.",
        "Payments API supporting multi-chain settlement across Polygon, Ethereum, and Canton with programmable escrow, batching, split routing, and push-to-card payouts.",
        "Compliance engineered in: SOC 2 Type II, registered MSB with principal-agent bank partnerships, and sanctions screening with dedicated review agents inside the platform.",
      ],
      metrics: [
        "Settled on Polygon: $227M+ across 6M+ transactions since Jan 2025 (as of Jul 2026, Polygon customer story)",
        "Developers and businesses building on the API: 1,000+ (as of Jul 2026, Polygon customer story)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.hifi.com/" },
        { label: "X (Twitter)", url: "https://x.com/hifiHQ" },
        {
          label: "Polygon — HIFI customer story ($227M+ settled)",
          url: "https://polygon.technology/customers/hifi",
        },
        {
          label: "HIFI docs — USDCx bridging via Circle XReserve",
          url: "https://docs.hifi.com/features/canton/usdcx-bridging",
        },
      ],
      people: [
        { name: "Zach Walsh", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/zachary-walsh" },
        { name: "Mohamed Afifi", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/mohamed-afifi-30b92123" },
      ],
    },
  },
  {
    id: "latitude",
    name: "Latitude",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase": "https://www.coinbase.com",
      "Paxos": "https://www.paxos.com",
      "Bitso": "https://www.bitso.com",
      "Solana Ventures": "https://solana.com/",
      "OpenFX": "https://www.openfx.com/",
      "Velo": "https://www.velo.org/",
    },
    productLinks: {
      "Global Payouts (50+ countries, flat 0.5% at interbank FX)": "https://docs.latitude.xyz/products/global-fiat-payouts",
      "Embeddable stablecoin on/off-ramps": "https://docs.latitude.xyz/integration-guides/on-ramp-integration-guide",
      "Latitude Liquidity Network (stablecoin issuers, US bank partners, licensed local payers)": "https://latitude.xyz",
    },
    facts: {
      founded: "2025",
      description:
        "Cross-border payments infrastructure connecting stablecoin settlement to local rails through a single API — businesses send USD or stablecoins and recipients receive local currency in bank accounts or mobile wallets.",
      products: [
        "Global Payouts (50+ countries, flat 0.5% at interbank FX)",
        "Embeddable stablecoin on/off-ramps",
        "Latitude Liquidity Network (stablecoin issuers, US bank partners, licensed local payers)",
      ],
      funding:
        "Reported $43M — $8M seed led by NEA (2026), then a $35M Series A led by Oak HC/FT (Sep 2026) with NEA, Coinbase, Lightspeed Faction, and OpenFX participating",
      stage:
        "Emerged from stealth in 2026 with Global Payouts live across 50+ markets; named customer Velo (Philippines payouts); Series A announced Sep 2026. No verified X (Twitter) handle found on the company's own site (checked Nov 2026), so none is linked",
      partners: ["Coinbase", "Paxos", "Bitso", "Solana Ventures", "OpenFX", "Velo"],
      tech: [
        "Latitude Settlement Network: one REST API for global fiat payouts and stablecoin on/off-ramps, with real-time payout status and a batch-file alternative for business-to-consumer payouts.",
        "Any-to-any currency payouts: non-USD payouts lock the historical USD equivalent (interbank/ECB rate) at creation, keeping pricing transparent and benchmarked against the interbank rate.",
        "Named virtual accounts on local bank rails give stablecoin neobanks, exchanges, and fintechs a compliant path between local fiat and stablecoins.",
        "Licensed or cleared to operate in 45 US jurisdictions; SOC 2 Type I completed with a SOC 2 Type II audit targeted for Q4 2026.",
      ],
      links: [
        { label: "Website (official)", url: "https://latitude.xyz" },
        {
          label: "Latitude developer docs — any-to-any currency payouts",
          url: "https://developer.latitude.brightwell.com/docs/any-to-any-currency-data-file",
        },
        {
          label: "Latitude developer docs — API integration overview",
          url: "https://developer.latitude.brightwell.com/docs/api-integration-guide",
        },
        {
          label: "Fortune — $35M Series A exclusive (Sep 2026)",
          url: "https://fortune.com/2026/09/09/exclusive-latitude-stripe-uber-alums-35-million-stablecoins-local-payments/",
        },
      ],
      people: [
        { name: "Cyril Mathew", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/cyrilm" },
        { name: "Brian Wrightson", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/bwrightson" },
        { name: "Vivek Morzaria", role: "Co-founder", linkedin: "https://www.linkedin.com/in/vivek-morzaria-a048ab49" },
      ],
    },
  },
  {
    id: "mercuryo",
    name: "Mercuryo",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "MetaMask": "https://metamask.io",
      "Trust Wallet": "https://trustwallet.com",
      "Ledger": "https://www.ledger.com",
      "Tangem": "https://tangem.com",
      "Visa": "https://www.visa.com",
      "Mastercard": "https://www.mastercard.com/us/en.html",
      "Polygon Labs": "https://polygon.technology",
      "Stellar": "https://stellar.org/",
      "Bybit": "https://www.bybit.com",
    },
    productLinks: {
      "Fiat on-ramp (cards, Apple Pay, Google Pay, open banking)": "https://mercuryo.io/on-ramp",
      "Off-ramp with Visa Direct payouts": "https://mercuryo.io/pay-out",
      "Multi-chain Swap with fixed quotes": "https://mercuryo.io/swaps",
      "Spend crypto card (with Mastercard)": "https://mercuryo.io/spend",
      "Stablecoin rails (USDC, USDT, EURC)": "https://mercuryo.io/",
    },
    facts: {
      founded: "2018",
      description:
        "Global payments infrastructure platform offering embedded fiat–crypto on-ramps, off-ramps, swaps, and cards — with stablecoins now the core asset its wallets, exchanges, and fintech customers buy and cash out.",
      products: [
        "Fiat on-ramp (cards, Apple Pay, Google Pay, open banking)",
        "Off-ramp with Visa Direct payouts",
        "Multi-chain Swap with fixed quotes",
        "Spend crypto card (with Mastercard)",
        "Stablecoin rails (USDC, USDT, EURC)",
      ],
      funding:
        "Reported $10M+ — €2.5M seed (Sep 2020) and a $7.5M Series A led by Target Global (Jun 2021, announced with $50M+ ARR); no primary announcements of later equity rounds",
      stage:
        "Serves 250+ platforms including MetaMask, Trust Wallet, and Ledger; stablecoins reached 60% of purchase value in H1 2026; Visa Direct off-ramp partnership (Jan 2026) and multi-chain Swaps launch (Oct 2026)",
      partners: [
        "MetaMask",
        "Trust Wallet",
        "Ledger",
        "Tangem",
        "Visa",
        "Mastercard",
        "Polygon Labs",
        "Stellar",
        "Bybit",
      ],
      tech: [
        "Multi-chain Swaps (launched Oct 2026): fixed quotes with zero slippage across 38 tokens and 700 pairs, delivering native tokens on the target chain.",
        "Embedded on/off-ramp widget and partner APIs with configurable KYC flow, languages, and payment methods across 150+ countries.",
        "Stablecoin rails (USDC, USDT, EURC) core to its wallets, exchange, and fintech customers, with stablecoin adoption data published from its own platform.",
      ],
      metrics: [
        "Stablecoin share of accepted off-ramp transactions: 57% (as of H1 2026, Mercuryo data)",
        "Stablecoin share of off-ramp turnover: 56%, up from 30% a year earlier (as of H1 2026, Mercuryo data)",
      ],
      links: [
        { label: "Website (official)", url: "https://mercuryo.io/" },
        { label: "X (Twitter)", url: "https://x.com/Mercuryo_io" },
        {
          label: "Mercuryo — stablecoin off-ramp growth data (Aug 2026)",
          url: "https://mercuryo.io/press/crypto-payroll-growth-stablecoin-adoption",
        },
        {
          label: "Mercuryo — Swaps launch (Oct 2026)",
          url: "https://mercuryo.io/press/mercuryo-launches-swaps-for-seamless-movement-between-digital-tokens",
        },
      ],
      people: [
        { name: "Petr Kozyakov", role: "Co-founder", linkedin: "https://www.linkedin.com/in/petr-kozyakov-8b536938" },
        { name: "Greg Waisman", role: "Co-founder", linkedin: "https://www.linkedin.com/in/gregorywaisman" },
        { name: "Alexander Vasiliev", role: "Co-founder & Chief Commercial Officer", linkedin: "https://www.linkedin.com/in/aleksandr-vasilev-57b85166" },
      ],
    },
  },
  {
    id: "moonpay",
    name: "MoonPay",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com/us/en.html",
      "PayPal": "https://www.paypal.com/",
      "Deel": "https://www.deel.com",
      "Paysafe": "https://www.paysafe.com/",
      "MetaMask": "https://metamask.io",
      "OpenSea": "https://opensea.io/",
      "Exodus": "https://www.exodus.com/",
      "Universal Pictures": "https://www.universalpictures.com/",
    },
    productLinks: {
      "Fiat on-ramp / off-ramp (embedded widget and API)": "https://www.moonpay.com/business",
      "MoonPay Account and MoonPay Trade": "https://www.moonpay.com/trade",
      "MoonPay Commerce (Helio checkout and payments API)": "https://www.moonpay.com/business/commerce",
      "MoonPay Enterprise (Pay In / Convert / Pay Out / Issue, on Iron rails)": "https://www.moonpay.com/enterprise",
    },
    facts: {
      founded: "2019",
      description:
        "Crypto payments platform providing fiat on/off-ramps and stablecoin payments infrastructure — wallets, fintechs, and enterprises buy, sell, and move stablecoins through MoonPay's embedded widgets, accounts, and enterprise rails.",
      products: [
        "Fiat on-ramp / off-ramp (embedded widget and API)",
        "MoonPay Account and MoonPay Trade",
        "MoonPay Commerce (Helio checkout and payments API)",
        "MoonPay Enterprise (Pay In / Convert / Pay Out / Issue, on Iron rails)",
        "NFT Checkout and HyperMint",
      ],
      funding:
        "Reported $555M — Series A (2021) at a $3.4B post-money valuation, led by Tiger Global and Coatue with Blossom Capital, Thrive Capital, Paradigm, and NEA participating",
      stage:
        "Acquired Helio (Jan 2025, reported $175M) and Iron (Mar 2025), with Meso announced Sep 2025; PYUSDx developer framework built with PayPal and M0; Mastercard stablecoin-linked card initiative; stablecoin payroll for Deel and merchant checkout with Paysafe; MoonPay Enterprise launched Aug 2026",
      partners: [
        "Mastercard",
        "PayPal",
        "Deel",
        "Paysafe",
        "MetaMask",
        "OpenSea",
        "Exodus",
        "Universal Pictures",
      ],
      tech: [
        "Iron (acquired Mar 2025): API-first stablecoin banking infrastructure — virtual accounts, ramps, swaps, FX, and global payouts — behind MoonPay Enterprise.",
        "Helio (acquired Jan 2025): Solana payment processor powering MoonPay Commerce checkout and payments APIs.",
        "PYUSDx with PayPal and M0: framework for application-specific stablecoins backed 1:1 by PayPal USD, with non-rebasing per-account rewards and shared liquidity across PYUSDx-powered tokens.",
      ],
      metrics: [
        "Customers: 30M+ (as of Mar 2025, MoonPay)",
        "Helio merchant network: 6,500+ merchants with $1.5B+ in transactions (as of Mar 2025, MoonPay)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.moonpay.com/" },
        { label: "X (Twitter)", url: "https://x.com/moonpay" },
        {
          label: "MoonPay newsroom — Iron acquisition",
          url: "https://www.moonpay.com/newsroom/iron-acquisition",
        },
        {
          label: "MoonPay — PYUSDx (with PayPal and M0)",
          url: "https://www.moonpay.com/enterprise/pyusdx",
        },
      ],
      people: [
        { name: "Ivan Soto-Wright", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/isotowright" },
        { name: "Victor Faramond", role: "Co-founder & Chief Engineer", linkedin: "https://www.linkedin.com/in/victorfaramond" },
        { name: "Max Crown", role: "Co-founder & Board Director", linkedin: "https://www.linkedin.com/in/mcrown" },
      ],
    },
  },
  {
    id: "muse",
    name: "M0",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Bridge": "https://www.bridge.xyz",
      "MetaMask": "https://metamask.io",
      "PayPal": "https://www.paypal.com/",
      "MoonPay": "https://www.moonpay.com/",
      "Noble": "https://noble.xyz",
      "Usual": "https://usual.money/",
      "Exodus": "https://www.exodus.com/",
      "Anchorage Digital": "https://www.anchorage.com/",
    },
    productLinks: {
      "Stablecoin issuance and governance platform ($M base digital dollar)": "https://www.m0.org/products",
      "MetaMask USD (mUSD) — application-specific issuance": "https://www.m0.org/products#Application",
      "PYUSDx developer framework (with PayPal and MoonPay)": "https://www.moonpay.com/enterprise/pyusdx",
    },
    facts: {
      founded: "2023",
      description:
        "Stablecoin issuance platform letting applications and institutions launch interoperable, application-specific stablecoins built on M0's base digital dollar ($M) — with shared governance, collateral, and liquidity rather than isolated per-issuer systems.",
      products: [
        "Stablecoin issuance and governance platform ($M base digital dollar)",
        "MetaMask USD (mUSD) — application-specific issuance",
        "PYUSDx developer framework (with PayPal and MoonPay)",
        "Game Dollar and Solana-based deployments",
      ],
      funding:
        "Reported $100M — $22.5M seed led by Pantera Capital (2023), a $35M Series A led by Bain Capital Crypto (Jun 2024), and a $40M Series B from Polychain Capital and Ribbit Capital (Aug 2025)",
      stage:
        "$300M+ aggregate supply of M0-backed stablecoins (Jul 2025, up 215% YTD) across 20+ launches with $24B in annual volume; Exodus and MoonPay USD-backed stablecoins; Anchorage Digital partnership (Apr 2026)",
      partners: [
        "Bridge",
        "MetaMask",
        "PayPal",
        "MoonPay",
        "Noble",
        "Usual",
        "Exodus",
        "Anchorage Digital",
      ],
      tech: [
        "$M base dollar: immutable ERC-20 backed 1:1 by approved collateral, with dual-balance accounting — static non-earning balances and automatically accruing earning balances.",
        "Separates reserve management from programmability: regulated entities hold and manage reserves while developers define who can mint, hold, and transfer — keeping liquidity unified across application-specific stablecoins.",
        "Application-specific issuance in production: MetaMask's mUSD stablecoin is built on M0's platform.",
      ],
      metrics: [
        "Aggregate supply of M0-backed stablecoins: $300M+, up 215% since the start of 2025 (as of Aug 2025, M0)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.m0.org/" },
        { label: "X (Twitter)", url: "https://x.com/m0foundation" },
        {
          label: "M0 docs — $M token dual-balance accounting",
          url: "https://docs.m0.org/raw/protocol/m-token.md",
        },
        {
          label: "M0 — $40M Series B, $100M total (Aug 2025)",
          url: "https://www.m0.org/press-releases/m0-raises-series-b-with-investment-from-polychain-and-ribbit-capital-bringing-total-funding-to-100m",
        },
      ],
      people: [
        { name: "Luca Prosperi", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/lucaprosperi", x: "https://x.com/LucaProsperi" },
        { name: "Gregory Di Prisco", role: "Co-founder & Chief Architect", linkedin: "https://www.linkedin.com/in/gregory-di-prisco-0672a9125" },
      ],
    },
  },
  {
    id: "nevermined",
    name: "Nevermined",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "VGS": "https://www.verygoodsecurity.com/",
      "Coinbase": "https://www.coinbase.com",
      "Exa": "https://exa.ai/",
      "Olas": "https://olas.network/",
    },
    productLinks: {
      "Agent budgets and delegated spending": "https://nevermined.ai",
      "Metering, access control, and pay-per-call settlement": "https://nevermined.ai",
      "x402 payment facilitator (stablecoin and card rails)": "https://nevermined.ai/x402/",
      "Python/TS SDKs, MCP server, and Nevermined Catalog": "https://nevermined.ai/docs/mcp/catalog-mcp/overview",
    },
    facts: {
      founded: "2022",
      description:
        "Payments and access-control infrastructure for AI agents — giving autonomous agents budgets and delegated spending authority with metered, pay-per-call settlement over stablecoin and card rails.",
      products: [
        "Agent budgets and delegated spending",
        "Metering, access control, and pay-per-call settlement",
        "x402 payment facilitator (stablecoin and card rails)",
        "Python/TS SDKs, MCP server, and Nevermined Catalog",
      ],
      funding:
        "Reported €3M first round co-led by Signature Ventures and Polymorphic Capital (2023), then a $4M seed led by Generative Ventures (Jan 2025) with NEAR, Polymorphic Capital, Arca, Halo Syndicate, Lyrik Ventures, and Factor Capital participating",
      stage:
        "Visa Intelligent Commerce integration with VGS for agent card payments (Apr 2026); x402 Foundation launched under the Linux Foundation (Apr 2026); x402 V2 shipped (Dec 2025); agent-payments integration with Exa (May 2026); Catalog lists ~160 agent services",
      partners: ["Visa", "VGS", "Coinbase", "Exa", "Olas"],
      tech: [
        "Runs x402 payments in production: HTTP 402-native settlement for agent traffic in crypto or on card — signed access token, 402 response, verify and settle — with no relayer or gas wallet.",
        "Catalog MCP: hosted MCP server (mcp.live.nevermined.app) so agents in Claude, ChatGPT, or Cursor can discover and pay for catalog services.",
        "Compliance posture: ISO 27001, SOC 2 Type II, and PCI SAQ-D certifications.",
      ],
      links: [
        { label: "Website (official)", url: "https://nevermined.ai/" },
        { label: "X (Twitter)", url: "https://x.com/neverminedio" },
        {
          label: "Nevermined — x402 in production",
          url: "https://nevermined.ai/x402/",
        },
        {
          label: "Nevermined docs — Catalog MCP",
          url: "https://nevermined.ai/docs/mcp/catalog-mcp/overview",
        },
      ],
      people: [
        { name: "Donald Gossen", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/donald-gossen-40ab96", x: "https://x.com/dongossen" },
        { name: "Aitor Argomaniz", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/aitorargomaniz" },
        { name: "Dimitri De Jonghe", role: "Co-founder", linkedin: "https://www.linkedin.com/in/dimitridejonghe" },
      ],
    },
  },
  {
    id: "nowpayments",
    name: "NOWPayments",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "ChangeNOW": "https://changenow.io/",
      "Banxa": "https://banxa.com",
      "Chainstack": "https://chainstack.com/",
      "GetBlock": "https://getblock.io/",
      "Edge Wallet": "https://edge.app/",
    },
    productLinks: {
      "Crypto payment API, invoices, widgets, and donation tools": "https://nowpayments.io/api",
      "E-commerce plugins (WooCommerce, Magento 2), POS, and subscriptions": "https://nowpayments.io/api/ecommerce",
      "Mass payouts and crypto-to-fiat settlement": "https://nowpayments.io/api/mass-payments",
    },
    facts: {
      founded: "2019",
      description:
        "Non-custodial crypto payment gateway from the team behind ChangeNOW — merchants and charities accept 350+ cryptocurrencies (with stablecoins across 25+ networks) and settle in crypto or fiat.",
      products: [
        "Crypto payment API, invoices, widgets, and donation tools",
        "E-commerce plugins (WooCommerce, Magento 2), POS, and subscriptions",
        "Mass payouts and crypto-to-fiat settlement",
      ],
      funding: "None disclosed — operated by the team behind ChangeNOW, with no announced external funding rounds",
      stage:
        "20,000+ partners and 10,000+ business integrations at its 7th anniversary (2026); 105 new partnerships in 2025 including a Banxa fiat on-ramp integration; supports USDT on 20+ networks, USDC, USDS, USAT (Anchorage Digital, 2026), and USD1 (2026); ChangeNOW PRO zero-fee payout API (Jul 2026)",
      partners: ["ChangeNOW", "Banxa", "Chainstack", "GetBlock", "Edge Wallet"],
      tech: [
        "Non-custodial crypto payment gateway: one API for payments, invoices, and auto-conversion into a chosen settlement coin.",
        "Official Node.js SDK for hosted checkout, direct payments, and mass payouts, plus a JS API client.",
        "Mass payouts with autoconversion and scheduled withdrawals; batch processing up to 1,000 transactions at a time.",
        "Stablecoin coverage across 25+ networks — USDT on 20+ networks, USDC, USDS, USAT (via Anchorage Digital), USD1.",
      ],
      metrics: [
        "Partner businesses: 20,000+ (as of Apr 2026, NOWPayments)",
      ],
      links: [
        { label: "Website (official)", url: "https://nowpayments.io/" },
        { label: "X (Twitter)", url: "https://x.com/NOWPayments_io" },
        {
          label: "NOWPayments — 7 years of payments and payouts (Apr 2026)",
          url: "https://nowpayments.io/blog/7-years-of-simplifying-global-payments-and-payouts-for-online-businesses",
        },
        {
          label: "NowPaymentsIO — official Node.js SDK",
          url: "https://github.com/NowPaymentsIO/nowpayments-sdk-nodejs",
        },
      ],
      people: [
        { name: "Kate Lifshits", role: "CEO", linkedin: "https://www.linkedin.com/in/kate-lifshits-0407" },
      ],
    },
  },
  {
    id: "onramper",
    name: "Onramper",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Banxa": "https://banxa.com",
      "Alchemy Pay": "https://alchemypay.org",
      "Paybis": "https://paybis.com/",
      "Yellow Card": "https://yellowcard.io/",
      "Payward Ramp by Kraken": "https://www.kraken.com/",
      "Revolut": "https://www.revolut.com",
      "Trust Wallet": "https://trustwallet.com",
      "Zengo": "https://zengo.com/",
    },
    productLinks: {
      "On-ramp widget and API with provider aggregation and routing (30+ providers)": "https://onramper.com/products/onramp",
      "Off-ramps and swaps": "https://onramper.com/products/offramp",
      "Chrome extension for in-browser purchases": "https://chromewebstore.google.com/detail/onramper-%E2%80%94-buy-sell-swap/hdjhkgkkleakkfagdfmpaoaabgcepmfl",
    },
    facts: {
      founded: "2020",
      description:
        "Fiat on-ramp aggregator for wallets and dApps — one widget and API that route users to the best available on-ramp provider across 30+ providers, 130+ payment methods, and 190+ countries.",
      products: [
        "On-ramp widget and API with provider aggregation and routing (30+ providers)",
        "Off-ramps and swaps",
        "Chrome extension for in-browser purchases",
      ],
      funding:
        "Reported $6M — seed led by EQT Ventures (announced Jan 2022); no later verified rounds",
      stage:
        "2,000+ assets and 190+ countries; integrations with Payward Ramp by Kraken (Feb 2026), Trust Wallet (Oct 2025), Yellow Card for African onboarding (Nov 2024), Revolut, and Banxa; Chrome extension launched Oct 2026",
      partners: [
        "Banxa",
        "Alchemy Pay",
        "Paybis",
        "Yellow Card",
        "Payward Ramp by Kraken",
        "Revolut",
        "Trust Wallet",
        "Zengo",
      ],
      tech: [
        "Smart-routing engine evaluates each transaction across 70+ factors (expected conversion, price, KYC friction) to route to the best-fit provider among 30+ aggregated on-ramps (onramper.com)",
        "One API/widget (~8 lines to embed) spans 175+ payment methods including off-ramps and cross-chain swaps; headless Terminal product for fully native ramp UIs (onramper.com)",
      ],
      metrics: [
        "Aggregated on-ramp providers: 30+ (as of November 2026, onramper.com)",
        "Payment methods supported: 175+ (as of November 2026, onramper.com)",
        "Countries covered: 190+ (as of November 2026, onramper.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://onramper.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/getonramper",
        },
        {
          label: "Onramper — Payward Ramp by Kraken integration",
          url: "https://onramper.com/blog/onramper-expands-global-payments-coverage-with-integration-to-kraken-via-payward-ramp",
        },
        {
          label: "Onramper — Yellow Card partnership",
          url: "https://onramper.com/blog/yellow-card-partners-with-onramper-to-enhance-crypto-onboarding-in-africa",
        },
      ],
      people: [
        { name: "Thijs Maas", role: "Founder", linkedin: "https://www.linkedin.com/in/thijs-maas" },
        { name: "Maurits Dewina", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/mauritsdewina" },
        { name: "Rick Thomas", role: "Co-CEO", linkedin: "https://www.linkedin.com/in/rick-thomas" },
      ],
    },
  },
  {
    id: "openfx",
    name: "OpenFX",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "MoneyGram": "https://www.moneygram.com/",
      "Yellow Card": "https://yellowcard.io/",
      "alfred.": "https://alfredpay.io/",
    },
    productLinks: {
      "API-first FX settlement (collections, conversion, payouts)": "https://www.openfx.com/api",
      "Stablecoin settlement rails": "https://www.openfx.com/product",
      "Settlement and treasury accounts with automated treasury": "https://www.openfx.com/product",
    },
    facts: {
      founded: "2024",
      description:
        "API-first FX settlement infrastructure for institutions — collections, FX conversion across 40+ pairs, stablecoin settlement, and payouts, with 98% of transactions settling in under 60 minutes.",
      products: [
        "API-first FX settlement (collections, conversion, payouts)",
        "Stablecoin settlement rails",
        "Settlement and treasury accounts with automated treasury",
      ],
      funding:
        "Reported $117M — $23M seed led by Accel (May 2025), then a $94M Series A led by Accel and Atomico (Mar 2026) with Lightspeed Faction, M13, Northzone, and Pantera participating, at a reported ~$500M valuation",
      stage:
        "$45B annualized volume and 100+ institutional customers at Series A; $70B total payment volume milestone (Oct 2026); expanding across Southeast Asia (UPI, PayNow, PromptPay) and Latin America",
      partners: ["MoneyGram", "Yellow Card", "alfred."],
      tech: [
        "Stablecoin settlement rails connect local fiat rails end-to-end (collections, FX conversion across 40+ pairs, payouts), bypassing correspondent-bank pre-funding; 98% of transactions settle in under 60 minutes (BusinessWire Series A release; openfx.com)",
        "Published all-in pricing of 0.01–0.3% per transaction with 24/7/365 settlement availability (openfx.com)",
        "Founder Prabhakar Reddy is co-founder of crypto brokerage FalconX; infrastructure operates under NMLS ID 2680829 (Red Envelope Delta, Inc.) (rareevo.io; openfx.com footer)",
      ],
      metrics: [
        "Annualized payment volume: $45B (as of March 2026, BusinessWire Series A release)",
        "Annualized payment volume: $80B+ across 100+ fintech customers (as of October 2026, OpenFX blog)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.openfx.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/openfx_",
        },
        {
          label: "BusinessWire — $94M Series A release (Mar 2026)",
          url: "https://www.businesswire.com/news/home/20260330586743/en/OpenFX-Raises-$94-Million-Series-A-to-Scale-Cross-Border-Money-Movement",
        },
        {
          label: "OpenFX — Introducing OpenFX Ventures (Oct 2026)",
          url: "https://www.openfx.com/blog/introducing-openfx-ventures",
        },
      ],
      people: [
        { name: "Prabhakar Reddy", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/prabhakar2reddy" },
      ],
    },
  },
  {
    id: "opentrade",
    name: "OpenTrade",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Zodia Custody": "https://zodia-custody.com/",
      "Five Sigma": "https://fivesigma.ai/",
      "Enigma Securities": "https://enigma-securities.io/",
      "WOO X": "https://woox.io/",
      "Kyber Network": "https://kyber.network/",
      "Belo": "https://belo.app/en",
      "BuenBit": "https://buenbit.com/",
      "Littio": "https://littio.co/",
      "Criptan": "https://criptan.com/",
    },
    productLinks: {
      "Yield-as-a-service API on tokenized US T-bills": "https://www.opentrade.io/earn",
      "Stablecoin lending against high-quality liquid assets": "https://www.opentrade.io/treasury",
      "Vault orchestration for tokenized RWA products": "https://www.opentrade.io/vaults",
    },
    facts: {
      founded: "2023",
      description:
        "RWA-backed stablecoin yield infrastructure — lets fintechs, wallets, and neobanks embed tokenized US T-bill and high-quality-liquid-asset yields into stablecoin products through a yield-as-a-service API.",
      products: [
        "Yield-as-a-service API on tokenized US T-bills",
        "Stablecoin lending against high-quality liquid assets",
        "Vault orchestration for tokenized RWA products",
      ],
      funding:
        "Reported $30M+ — first round led by Sino Global Capital (May 2023) with Circle Ventures, Polygon Labs, Kronos Research, Kyber Ventures, and Outlier Ventures; 2024 seed financing ($3.2M Apr, $4M Nov); a $7M strategic round led by Notion Capital and Mercury Fund (Jun 2025); and a $17M strategic round led by Mercury Fund and Notion Capital (May 2026)",
      stage:
        "First product (tokenized US T-bills) launched Sep 2023; $300M TVL with $1B in 12-month volume (2026); embedders include Belo, BuenBit, Littio, and Criptan; former Swift CEO Lazaro Campos named chairman (Oct 2026)",
      partners: [
        "Circle",
        "Zodia Custody",
        "Five Sigma",
        "Enigma Securities",
        "WOO X",
        "Kyber Network",
        "Belo",
        "BuenBit",
        "Littio",
        "Criptan",
      ],
      tech: [
        "Built on Perimeter, the open-source stablecoin-lending protocol developed by Circle Research: deposits of USDC/USDT/EURC go into ERC-4626 vaults whose token exchange rate accrues coupon income and redeems back to stablecoin (OpenTrade docs; OpenTrade resource)",
        "Vault backing (T-bills, MMFs, commercial paper, private credit) held in bankruptcy-remote structures with segregated accounts via regulated custodians; permissioned vaults plus a permissionless SIERRA on-chain rail (opentrade.io/vaults; OpenTrade docs)",
        "Yield-as-a-service API with branded vaults and reporting; most client integrations launch in under 30 days (opentrade.io)",
      ],
      metrics: [
        "Total value locked: $300M+ (as of November 2026, opentrade.io)",
        "Transaction volume: $1.5B+ (as of November 2026, opentrade.io)",
        "Institutional partners: 60+ (as of November 2026, opentrade.io)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.opentrade.io/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/opentrade_io",
        },
        {
          label: "OpenTrade — tokenized T-bills launch on Perimeter",
          url: "https://www.opentrade.io/resource/opentrade-launches-tokenised-treasury-bills-on-newly-unveiled-perimeter-protocol-developed-by-circle-research",
        },
        {
          label: "OpenTrade docs — blockchain protocol",
          url: "https://docs.opentrade.io/developers/blockchain-protocol.md",
        },
      ],
      people: [
        { name: "Dave Sutter", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/sutterdavid" },
        { name: "Jeff Handler", role: "Co-founder & CCO", linkedin: "https://www.linkedin.com/in/jeffreyhandler" },
        { name: "Tom Niermann", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/tniermann" },
      ],
    },
  },
  {
    id: "privy",
    name: "Privy",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Stripe": "https://stripe.com",
      "Klarna": "https://www.klarna.com",
      "Deel": "https://www.deel.com",
      "MAJORITY": "https://majority.com",
      "Onafriq": "https://onafriq.com/",
      "Kraken": "https://www.kraken.com/",
      "Solana": "https://solana.com/",
      "AllUnity": "https://allunity.com",
    },
    productLinks: {
      "Embedded and user wallets; custodial wallets (Feb 2026)": "https://www.privy.io/wallets",
      "Digital Asset Accounts and Treasury Management (Sep 2026)": "https://www.privy.io/treasury",
      "Agentic wallets and Agent CLI": "https://www.privy.io/ai",
    },
    facts: {
      founded: "2021",
      description:
        "Wallet infrastructure for stablecoin products — embedded and custodial wallets, digital asset accounts, treasury management, and policy controls. Acquired by Stripe (announced Jun 2025).",
      products: [
        "Embedded and user wallets; custodial wallets (Feb 2026)",
        "Organization Wallets for treasury and operations (Aug 2026)",
        "Digital Asset Accounts and Treasury Management (Sep 2026)",
        "Stablecoin card components with Stripe Issuing (25+ countries)",
        "Agentic wallets and Agent CLI",
      ],
      funding:
        "Reported $41.3M+ — $8.3M seed co-led by Sequoia Capital and BlueYard Capital (Apr 2022), an $18M Series A led by Paradigm (Nov 2023), and a $15M round led by Ribbit Capital (Mar 2025); acquired by Stripe in Jun 2025 with terms undisclosed",
      stage:
        "150M+ accounts (Aug 2026) and billions in stablecoin volume; first Stripe Sessions as a Stripe company (May 2026); Klarna wallet partnership; customers include Deel, MAJORITY, Onafriq, and Kraken",
      partners: [
        "Stripe",
        "Klarna",
        "Deel",
        "MAJORITY",
        "Onafriq",
        "Kraken",
        "Solana",
        "AllUnity",
      ],
      tech: [
        "Key material is stored as two encrypted shares — one sealed to AWS Nitro Enclave TEE hardware, one bound to user authentication — and reconstructed transiently in-enclave only for signing; keys are never stored whole (Shamir + TEE, explicitly not MPC/TSS) (Privy docs architecture)",
        "Policy engine enforces recipient/contract allowlists, transfer limits, MFA, and m-of-n approval quorums across embedded, custodial, server, and agent wallets (Privy docs security FAQs)",
        "Added fully managed custodial wallets through the same API as non-custodial wallets (Feb 2026, first-provider claim); custodial wallets live on Solana for USDC, USDB, EURC (Apr 2026) (Privy docs changelog)",
      ],
      metrics: [
        "Global accounts: 200M+ (as of November 2026, privy.io)",
        "Monthly transaction volume: $25B+ (as of November 2026, privy.io)",
        "Historical uptime: 99.99% (as of November 2026, privy.io)",
        "Countries supported: 180+ (as of November 2026, privy.io)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.privy.io/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/privy_io",
        },
        {
          label: "Privy docs — wallet infrastructure architecture",
          url: "https://docs.privy.io/security/wallet-infrastructure/architecture",
        },
        {
          label: "Privy docs — product changelog",
          url: "https://docs.privy.io/changelogs/product-updates",
        },
      ],
      people: [
        { name: "Henri Stern", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/henri-stern" },
        { name: "Asta Li", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/asta-li" },
      ],
    },
  },
  {
    id: "ramp",
    name: "ramp",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Stripe Issuing": "https://stripe.com",
      "Privy": "https://www.privy.io/",
    },
    productLinks: {
      "Corporate cards and spend management": "https://ramp.com",
      "Stablecoin Accounts — hold USDC/USDT, pay vendors in fiat or stablecoins (GA Jul 2026)": "https://ramp.com/stablecoins",
      "Bill payments, accounting automation, and travel": "https://ramp.com",
    },
    facts: {
      founded: "2019",
      description:
        "Corporate card and spend-management platform for businesses — its Stablecoin Accounts (GA Jul 2026) let companies hold USDC and USDT and pay vendors in fiat or stablecoins, funded from USD bank accounts.",
      products: [
        "Corporate cards and spend management",
        "Stablecoin Accounts — hold USDC/USDT, pay vendors in fiat or stablecoins (GA Jul 2026)",
        "Bill payments, accounting automation, and travel",
      ],
      funding:
        "Reported ~$5B total equity — most recently $1.85B at a $60B valuation led by Dragoneer (Oct 2026), after a $750M Series F at $44B led by ICONIQ Growth, GIC, and Ontario Teachers' (Jun 2026); 2025 Series E financings ($200M at $16B, $500M at $22.5B, $300M at $32B); Series C/D rounds 2021-2024",
      stage:
        "85,000+ business customers, $2B+ annualized revenue, and cash-flow positive (Oct 2026); Stablecoin Accounts and stablecoin payments made generally available Jul 21 2026",
      partners: ["Visa", "Stripe Issuing", "Privy"],
      tech: [
        "Stablecoin Accounts custody and related services are provided by Bridge Building Inc and affiliates; Ramp Business Corporation is not a bank or digital asset custodian and balances are not FDIC-insured (ramp.com/stablecoins)",
        "1:1 USD↔USDC/USDT conversion with no on/off-ramping fees; stablecoin deposits and payments supported on Base, Ethereum, Polygon, Arbitrum, Optimism, Solana, and Tempo (ramp.com/stablecoins)",
        "Stablecoin balances can earn up to 3.25% in monthly rewards (activity criteria apply; paid by Ramp, not interest), and Ramp covers gas fees on stablecoin payments; balances sync to ERP/accounting as cash equivalents (ramp.com/stablecoins)",
      ],
      metrics: [
        "Business customers: 85,000+ (as of October 2026, Ramp blog)",
        "Annualized revenue: $2B+ (as of October 2026, Ramp blog)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://ramp.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/tryramp",
        },
        {
          label: "Ramp — Stablecoin Accounts",
          url: "https://ramp.com/stablecoins",
        },
        {
          label: "Ramp blog — at $60 billion in volume",
          url: "https://ramp.com/blog/ramp-at-60-billion",
        },
      ],
      people: [
        { name: "Eric Glyman", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/eglyman" },
        { name: "Karim Atiyeh", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/karimatiyeh" },
      ],
    },
  },
  {
    id: "ramp-network",
    name: "Ramp Network",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "MetaMask": "https://metamask.io",
      "Trust Wallet": "https://trustwallet.com",
      "Ledger": "https://www.ledger.com",
      "Zengo": "https://zengo.com/",
      "Mynt": "https://www.mynt.com.br/",
    },
    productLinks: {
      "Fiat on-ramp and off-ramp widget and API": "https://rampnetwork.com/buy-crypto",
      "Cross-chain swaps (1,200+ pairs across 16 networks, Apr 2026)": "https://rampnetwork.com",
      "Multichain Wallet and consumer app (Sep 2025)": "https://rampnetwork.com",
      "USDC Everyday Account (migrated to Stellar, Aug 2026)": "https://rampnetwork.com/blog/everyday-account-now-on-stellar",
    },
    facts: {
      founded: "2017",
      description:
        "Fiat on/off-ramp infrastructure for wallets and apps — a single widget and API that lets users in 150+ countries buy crypto and stablecoins with local payment methods, plus cross-chain swaps and a consumer app.",
      products: [
        "Fiat on-ramp and off-ramp widget and API",
        "Cross-chain swaps (1,200+ pairs across 16 networks, Apr 2026)",
        "Multichain Wallet and consumer app (Sep 2025)",
        "USDC Everyday Account (migrated to Stellar, Aug 2026)",
      ],
      funding:
        "Reported ~$134M — $52.7M Series A led by Balderton Capital (Dec 2021, then the largest Polish Series A, with NFX, Galaxy Digital, Seedcamp, and firstminute Capital) and a $70M Series B led by Mubadala Capital and Korelya Capital (Nov 2022) at a reported ~$450M valuation",
      stage:
        "First fiat on-ramp registered with the UK FCA (Aug 2021); global off-ramp across 130+ countries (Feb 2023); MiCAR authorization from the Central Bank of Ireland covering all 27 EU states (Dec 2025); FinCEN-registered MSB; $1B+ in transactions processed across 250+ wallet and app partners",
      partners: ["MetaMask", "Trust Wallet", "Ledger", "Zengo", "Mynt"],
      tech: [
        "Self-custodial multichain wallet: keys stay on-device behind passkeys with optional export and email recovery; no centralized custody of user assets (rampnetwork.com/wallet; multichain wallet launch post)",
        "Bridgeless cross-chain swaps: 1,200+ pairs across 16 networks, wallet-to-wallet with fixed pricing — including native BTC↔ETH — funds never leave self-custody (rampnetwork.com/about timeline)",
        "USDC Everyday Account migrated to Stellar (Jul 23, 2026) for ~5-second, sub-cent transfers; USDT0 on Stellar supported from launch day (Oct 2026); free Base→Stellar USDC swap for existing balances (Ramp Network blog)",
        "Licensed/registered stack: MiCA CASP authorized by the Central Bank of Ireland (all 27 EU states), FCA-registered cryptoasset firm (FRN 928783), FinCEN-registered MSB plus US state money-transmitter licenses (rampnetwork.com regulation section)",
      ],
      metrics: [
        "Transactions processed: $1B+ (as of November 2026, rampnetwork.com)",
        "Customers: 10M+ (as of November 2026, rampnetwork.com)",
        "Countries and territories served: 150+ (as of November 2026, rampnetwork.com)",
        "Cryptoassets supported: 120+ across 40+ fiat currencies (as of November 2026, rampnetwork.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://rampnetwork.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/RampNetwork",
        },
        {
          label: "Ramp Network — about and product timeline",
          url: "https://rampnetwork.com/about",
        },
        {
          label: "Ramp Network — Everyday Account now on Stellar (Jul 2026)",
          url: "https://rampnetwork.com/blog/everyday-account-now-on-stellar",
        },
      ],
      people: [
        { name: "Szymon Sypniewicz", role: "Co-founder", linkedin: "https://www.linkedin.com/in/szymonsypniewicz" },
        { name: "Przemek Kowalczyk", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/przemekkowalczyk" },
      ],
    },
  },
];
