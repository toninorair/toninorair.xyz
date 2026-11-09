// B2B payments, batch A — Airwallex through dtcpay.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const B2B_PAYMENTS_A = [
  {
    id: "airwallex",
    name: "Airwallex",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Qantas": "https://www.qantas.com",
      "Rippling": "https://www.rippling.com",
      "Bolt": "https://www.bolt.com",
      "Gusto": "https://gusto.com",
      "Shopify": "https://www.shopify.com/",
      "McLaren Racing": "https://www.mclaren.com",
    },
    productLinks: {
      "Global business accounts (local details in 60+ countries)": "https://www.airwallex.com/business-account",
      "Payment acceptance and cross-border transfers in 130+ currencies": "https://www.airwallex.com/payments",
      "Corporate and virtual cards": "https://www.airwallex.com/en-us/spend-management/cards",
      "FX and treasury": "https://www.airwallex.com/global/platform-api-and-embedded-finance/global-treasury",
      "Spend and expense management": "https://www.airwallex.com/spend-management",
      "Embedded finance APIs": "https://www.airwallex.com/platform",
    },
    facts: {
      founded: "2015",
      description:
        "Global payments and financial platform for modern businesses — multi-currency accounts, cross-border transfers, cards, treasury, and spend on one proprietary network.",
      products: [
        "Global business accounts (local details in 60+ countries)",
        "Payment acceptance and cross-border transfers in 130+ currencies",
        "Corporate and virtual cards",
        "FX and treasury",
        "Spend and expense management",
        "Embedded finance APIs",
      ],
      funding:
        "Reported ~$1.8B total — $200M Series E led by Lone Pine Capital at a $4B valuation (Sep 2021), $100M Series E1 extension (Nov 2021), $100M Series E extension at a $5.6B valuation (Oct 2022), $330M Series G led by Addition at an $8B valuation (Dec 2025)",
      stage:
        "Crossed $1B annualized revenue (Oct 2025) and EBITDA profitability in Q4 2025; $235B+ annualized transaction volume; 80+ licenses and permits; San Francisco named dual global HQ with $1B+ committed to US expansion 2026–2029; majority ownership of Indonesian payments provider Skye Sab (2026); 200,000+ customers",
      partners: ["Qantas", "Rippling", "Bolt", "Gusto", "Shopify", "McLaren Racing"],
      tech: [
        "Stablecoin payout network in early access: API payouts of USDC to stablecoin-wallet beneficiaries, with on-chain submission and confirmation states exposed in the transfer API",
        "Receives USDC (Ethereum) into Global Accounts for on-chain collection, processed with stablecoin infrastructure partner BVNK",
      ],
      links: [
        { label: "Website (official)", url: "https://www.airwallex.com" },
        { label: "X (Twitter)", url: "https://x.com/airwallex" },
        { label: "airwallex.com docs — stablecoin wallet payout network", url: "https://www.airwallex.com/docs/payouts/payout-network/stablecoin-wallets" },
        { label: "airwallex.com docs — receive stablecoin payments", url: "https://www.airwallex.com/docs/global-treasury/receive-funds/receive-stablecoin-payments" },
      ],
      people: [
        { name: "Jack Zhang", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/jack-zhang-05200222/" },
      ],
    },
  },
  {
    id: "allscale",
    name: "AllScale",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Turnkey": "https://www.turnkey.com/",
      "Interlace": "https://www.interlace.money/",
      "Animoca Brands": "https://www.animocabrands.com",
      "Aptos": "https://aptosnetwork.com",
    },
    productLinks: {
      "Invoicing and checkout": "https://www.allscale.io",
      "Contractor payroll": "https://www.allscale.io",
      "Virtual accounts": "https://www.allscale.io",
      "Crypto cards": "https://www.allscale.io",
      "AI-agent payments": "https://www.allscale.io",
    },
    facts: {
      founded: "2025",
      description:
        "Self-custody stablecoin neobank for small businesses — invoicing, checkout, contractor payroll, virtual accounts, and cards with instant cross-border stablecoin settlement.",
      products: [
        "Invoicing and checkout",
        "Contractor payroll",
        "Virtual accounts",
        "Crypto cards",
        "AI-agent payments",
      ],
      funding:
        "Reported ~$6.5M total — $1.5M seed (Jun 2025), $5M seed led by YZi Labs, Informed Ventures, and Generative Ventures (Dec 2025), undisclosed strategic investment from Animoca Brands (Jun 2026)",
      stage:
        "1.5M+ user wallets and $500K+ daily transaction volume on Turnkey self-custody infrastructure (company-reported); Interlace partnership for business payments (2026); exploring stablecoin and agentic payments across Animoca Brands' 600+ company portfolio",
      partners: ["Turnkey", "Interlace", "Animoca Brands", "Aptos"],
      tech: [
        "Self-custody built on Turnkey embedded wallets: secure-enclave signing, session-based signing, and policy enforcement keep key operations out of AllScale's application",
        "Confidential stablecoin payroll validation with Primus (Sep 2026): encrypted salary amounts settled on-chain with employee-authorized viewing, tested in a four-payment run on BNB Chain",
      ],
      links: [
        { label: "Website (official)", url: "https://www.allscale.io" },
        { label: "X (Twitter)", url: "https://x.com/allscaleio" },
        { label: "turnkey.com — AllScale case study", url: "https://www.turnkey.com/customers/allscale-cross-border-stablecoin-transactions" },
        { label: "allscale.io — confidential stablecoin payroll validation", url: "https://www.allscale.io/posts/allscale-confidential-stablecoin-payroll" },
      ],
      people: [
        { name: "Shawn Pang", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/shawnshunxinpang" },
        { name: "Alisha Li", role: "Co-founder", linkedin: "https://www.linkedin.com/in/alisha-li-9432b4369" },
      ],
    },
  },
  {
    id: "altitude",
    name: "Altitude",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Bridge": "https://www.bridge.xyz/",
      "MoonPay": "https://www.moonpay.com/",
      "Infinite": "https://infinite.net",
      "Due": "https://www.opendue.com",
      "Privy": "https://www.privy.io/",
      "Turnkey": "https://www.turnkey.com/",
    },
    productLinks: {
      "Multi-currency business accounts (USD, EUR)": "https://altitude.xyz",
      "Global payments over ACH, SEPA, SWIFT, Pix, SPEI, and stablecoins": "https://altitude.xyz",
      "Corporate cards with cashback": "https://altitude.xyz",
      "Treasury with APY on balances": "https://altitude.xyz",
      "QuickBooks and Xero sync": "https://altitude.xyz",
    },
    facts: {
      founded: "2022",
      description:
        "Stablecoin-native financial operating system from Squads Labs — multi-currency accounts, corporate cards, and global payments settled over stablecoins and licensed PSP rails; not a bank and holds no customer funds.",
      products: [
        "Multi-currency business accounts (USD, EUR)",
        "Global payments over ACH, SEPA, SWIFT, Pix, SPEI, and stablecoins",
        "Corporate cards with cashback",
        "Treasury with APY on balances",
        "QuickBooks and Xero sync",
      ],
      funding:
        "Reported $42.9M total (Squads Labs) — $5M strategic round led by Multicoin Capital (Feb 2022), $5.7M round led by Multicoin (Oct 2023), $18M strategic round led by Solana Ventures with Coinbase Ventures, Haun, Electric Capital, and Jump Crypto (Apr 2026)",
      stage:
        "Squads Protocol launched on Solana mainnet (Feb 2022); Altitude publicly launched in Q4 2025 and processed $200M+ in payments across 50+ countries; $1.7B annualized Altitude payment volume and $20B annualized Squads Protocol transfer volume (Sep 2026); protocol secures $10B+ onchain",
      partners: ["Bridge", "MoonPay", "Infinite", "Due", "Privy", "Turnkey"],
      tech: [
        "Squads Protocol — open-source, formally verified, immutable multisig/smart-account program on Solana; v3 has been immutable since Feb 2023 and v4 since Nov 2024, so deployed logic cannot be altered by Squads Labs",
        "Audited by OtterSec, Certora, and Neodyme; program-upgrade authority can itself be assigned to a Squad, so future upgrades require the configured multisig quorum",
      ],
      metrics: [
        "Squads Protocol annualized stablecoin transfer volume: $20B (as of September 2026, Solana Compass)",
        "Altitude annualized payment volume: $1.7B (as of September 2026, Solana Compass)",
      ],
      links: [
        { label: "Website (official)", url: "https://altitude.xyz" },
        { label: "X (Twitter)", url: "https://x.com/altitude" },
        { label: "solanacompass.com — $20B annualized volume", url: "https://solanacompass.com/news/altitude-reaches-20b-in-annualized-stablecoin-transfer-volume-on-solana" },
        { label: "docs.squads.so — protocol security and immutability", url: "https://docs.squads.so/main/basics/security" },
      ],
      people: [
        { name: "Stepan Simkin", role: "Co-founder & CEO", x: "https://x.com/SimkinStepan" },
      ],
    },
  },
  {
    id: "atum",
    name: "Atum",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "x402 (agentic payment protocol)": "https://www.x402.org",
      "MPP (agentic payment protocol)": "https://mpp.dev",
    },
    productLinks: {
      "Open payments coordination network": "https://atum.xyz",
      "Cross-border payouts and treasury settlement": "https://atum.xyz",
      "Merchant acceptance routing": "https://atum.xyz",
      "Agentic payments (x402, MPP)": "https://atum.xyz",
    },
    facts: {
      founded: "2026",
      description:
        "Open payments network and neutral coordination layer for global stablecoin and tokenized-currency payments — it issues no currency, runs no blockchain, and takes no custody of funds.",
      products: [
        "Open payments coordination network",
        "Cross-border payouts and treasury settlement",
        "Merchant acceptance routing",
        "Agentic payments (x402, MPP)",
      ],
      funding:
        "Reported $13.5M seed — led by Variant, with PayPal Ventures, Abstract Ventures, Road Capital, Mirana Ventures, First Commit, and Credibly Neutral (Sep 2026)",
      stage:
        "Founded by former Visa crypto product lead Pete Cooling; emerged from stealth with the network open to builders (Sep 2026); supports x402 and MPP agentic payment protocols at launch",
      partners: ["x402 (agentic payment protocol)", "MPP (agentic payment protocol)"],
      tech: [
        "Coordination-layer design: settlement providers compete to fulfill each payment while Atum handles authorization, routing, and confirmation — it issues no currency, runs no blockchain, and takes no custody",
        "Supports agentic payment entry points x402 and MPP at launch, with agents transacting under operator-defined instructions, permissions, and limits",
        "Payment instructions name the sent and received assets as two independent CAIP-19 identifiers; contracts use Permit2 one-time token approvals with a fresh signature per payment (reported technical documentation)",
        "Reported technical design includes settlement vaults with proof of delivery on the destination chain and automatic refunds when delivery fails",
      ],
      links: [
        { label: "Website (official)", url: "https://atum.xyz" },
        { label: "X (Twitter)", url: "https://x.com/atumhq" },
        { label: "atum.xyz — stealth exit announcement", url: "https://atum.xyz/insights/607/" },
        { label: "rootdata.com — CAIP-19 and Permit2 technical detail", url: "https://www.rootdata.com/projects/detail/Atum" },
      ],
      people: [
        { name: "Pete Cooling", role: "Founder & CEO", x: "https://x.com/PeteCooling" },
      ],
    },
  },
  {
    id: "bitso",
    name: "Bitso",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Ripple (cross-border liquidity since 2019)": "https://ripple.com/",
      "Stellar": "https://stellar.org/",
      "BVNK (Europe–Latin America corridors)": "https://www.bvnk.com",
      "Circle (USDC)": "https://www.circle.com",
    },
    productLinks: {
      "Bitso Business cross-border payments": "https://www.bitso.com/business",
      "Stablecoin liquidity and FX (USDC, USDT, MXNB, BRL1)": "https://bitso.com/business/products/mxnb-stablecoin",
      "Local rail access (SPEI, Pix, PSE)": "https://www.bitso.com/business",
      "Retail crypto trading app": "https://www.bitso.com",
    },
    facts: {
      founded: "2014",
      description:
        "Latin America's leading crypto exchange turned institutional payments platform — Bitso Business moves money across borders using stablecoins and local payment rails.",
      products: [
        "Bitso Business cross-border payments",
        "Stablecoin liquidity and FX (USDC, USDT, MXNB, BRL1)",
        "Local rail access (SPEI, Pix, PSE)",
        "Retail crypto trading app",
      ],
      funding:
        "Reported ~$331M total — $250M Series C at a $2.2B valuation (May 2021), making it Latin America's first crypto unicorn",
      stage:
        "Bitso Business brand launched serving 1,900+ institutional clients; $6.7B transaction volume in 2024; operates across eight key regions; issues MXNB (Mexican peso) and BRL1 (Brazilian real) stablecoins",
      partners: ["Ripple (cross-border liquidity since 2019)", "Stellar", "BVNK (Europe–Latin America corridors)", "Circle (USDC)"],
      tech: [
        "MXNB, issued by Juno (a Bitso company): 1:1 peso-backed stablecoin minted on SPEI deposit and burned on redemption, with reported independent reserve attestations and MPC-protected vaults",
        "Ripple partnership since 2019: near-instant US–Mexico and LatAm cross-border settlement using XRP and RLUSD as settlement assets on Ripple Payments",
        "MXNB being issued on XRPL and integrated into Ripple's Payments on DEX permissioned environment for regulated USD/MXN institutional liquidity (Jun 2026)",
      ],
      metrics: [
        "Bitso Business annualized total payment volume: US$150B+ (as of November 2026, PRNewswire)",
        "MXNB circulating supply: 67.6M tokens (as of November 2026, CoinGecko)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bitso.com" },
        { label: "X (Twitter)", url: "https://x.com/bitso" },
        { label: "bitso.com — MXNB stablecoin product page", url: "https://bitso.com/business/products/mxnb-stablecoin" },
        { label: "businesswire.com — Ripple and Bitso expand partnership (Jun 2026)", url: "https://www.businesswire.com/news/home/20260611164585/en/Ripple-and-Bitso-Expand-Partnership-to-Advance-Enterprise-Stablecoin-Settlement-in-Latin-America" },
      ],
      people: [
        { name: "Daniel Vogel", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/vogelito" },
      ],
    },
  },
  {
    id: "coinflow",
    name: "Coinflow",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Solana": "https://solana.com/",
      "Circle (USDC)": "https://www.circle.com",
    },
    productLinks: {
      "Global pay-ins (card, ACH)": "https://coinflow.cash",
      "Instant USDC settlement (primarily Solana)": "https://coinflow.cash",
      "Payouts to bank accounts and cards": "https://coinflow.cash",
      "Fraud and chargeback indemnity": "https://coinflow.cash",
      "FX conversion": "https://coinflow.cash",
      "Treasury yield on balances": "https://coinflow.cash",
    },
    facts: {
      founded: "2022",
      description:
        "Stablecoin-native payment service provider — accepts card and ACH pay-ins and settles approved merchants in USDC within minutes, with fraud and chargeback indemnification.",
      products: [
        "Global pay-ins (card, ACH)",
        "Instant USDC settlement (primarily Solana)",
        "Payouts to bank accounts and cards",
        "Fraud and chargeback indemnity",
        "FX conversion",
        "Treasury yield on balances",
      ],
      funding:
        "Reported ~$28.7M total — early pre-seed and seed rounds, $25M Series A led by Pantera Capital with Coinbase Ventures, CMT Digital, and Jump Capital (Oct 2025)",
      stage:
        "$25M Series A led by Pantera Capital (Oct 2025); expanding payout coverage to 100+ countries with focus on Asia and Latin America; serves marketplaces, fintech, gaming, payroll, remittance, and ecommerce merchants",
      partners: ["Solana", "Circle (USDC)"],
      tech: [
        "Settles approved card/ACH pay-ins in USDC on Solana to a Coinflow balance, merchant-controlled wallet, or whitelisted Solana program",
        "Contract settlement wraps merchant program instructions with Coinflow setup and cleanup instructions for atomic USDC delivery, including token swaps via Orca pools when a contract requires a token other than USDC",
        "Fully indemnified chargeback protection on approved transactions, with real-time fraud scoring and 3-D Secure on card flows",
      ],
      links: [
        { label: "Website (official)", url: "https://coinflow.cash" },
        { label: "X (Twitter)", url: "https://x.com/coinflowlabs" },
        { label: "docs.coinflow.cash — settlement to Solana contract", url: "https://docs.coinflow.cash/guides/checkout/settlement-locations/settlement-to-contracts/settle-to-solana-contract/implement-settlement-to-solana-contract" },
        { label: "docs.coinflow.cash — products and features", url: "https://docs.coinflow.cash/guides/product-overview/products-features" },
      ],
      people: [
        { name: "Daniel Lev", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/daniel-m-lev" },
      ],
    },
  },
  {
    id: "conduit",
    name: "Conduit",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Onafriq": "https://onafriq.com/",
      "Yuno": "https://y.uno",
      "Braza Group": "https://www.brazabank.com.br/",
    },
    productLinks: {
      "Cross-border payments via one API": "https://conduitpay.com",
      "Virtual and named local accounts": "https://conduitpay.com",
      "Stablecoin settlement orchestration": "https://conduitpay.com",
      "Onchain FX": "https://conduitpay.com",
    },
    facts: {
      founded: "2021",
      description:
        "B2B cross-border payments network combining local payment rails, virtual accounts, and stablecoin settlement through a single API for businesses and fintechs.",
      products: [
        "Cross-border payments via one API",
        "Virtual and named local accounts",
        "Stablecoin settlement orchestration",
        "Onchain FX",
      ],
      funding:
        "Reported ~$59M total — $17M seed (Jan 2022), $6M seed extension led by Helios Digital Ventures (Aug 2024), $36M Series A co-led by Dragonfly and Altos Ventures (May 2025)",
      stage:
        "Expanded from Latin America into Africa (2024); Series A co-led by Dragonfly and Altos Ventures (May 2025); stablecoin-powered payments partnerships with Braza Group (Jul 2025), Onafriq (Feb 2026), and Yuno (Mar 2026)",
      partners: ["Onafriq", "Yuno", "Braza Group"],
      tech: [
        "Unified fiat–stablecoin orchestration API: one payout model targets bank rails (Fedwire, FedNow, ACH, SWIFT, SEPA, SPEI, Pix) or blockchain addresses, with idempotent v2 endpoints and a documented sandbox (Source: https://conduitpay.com)",
        "On-chain FX engine converts fiat to USDC/USDT and back via smart contracts and algorithmic liquidity rather than a conventional intermediary FX desk, publishing each flow as composable primitives — virtual account, on-ramp, chain transfer, off-ramp (Source: https://conduitpay.com/blog/composability-of-transactions)",
        "Multi-chain stablecoin wallets with multiple custody options hold USD value on-chain alongside named USD/EUR/GBP virtual accounts and virtual IBANs issued through licensed banking partners (Source: https://conduitpay.com)",
        "Tempo partnership adds a payments-optimized settlement chain between Conduit's on-ramp/off-ramp layer and fiat-backed banking systems (Source: https://conduitpay.com/blog/conduit-and-tempo)",
      ],
      metrics: [
        "Banking network: 20+ regulated-bank partnerships, with 8 US banking partners routed for uptime, cost, and compliance (as of 2026, conduitpay.com)",
        "Virtual account availability: 100+ countries and 15 fiat currencies (as of 2026, conduitpay.com)",
        "Advertised cross-border settlement time: 15–20 minutes (as of Mar 2026, Conduit–Yuno partnership announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://conduitpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/ConduitPay",
        },
        {
          label: "Conduit — Tempo settlement partnership",
          url: "https://conduitpay.com/blog/conduit-and-tempo",
        },
        {
          label: "Conduit — transaction composability (on-chain FX primitives)",
          url: "https://conduitpay.com/blog/composability-of-transactions",
        },
      ],
      people: [
        { name: "Kirill Gertman", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/kirillgertman" },
      ],
    },
  },
  {
    id: "corpay",
    name: "Corpay",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "JPMorgan": "https://www.jpmorganchase.com/",
      "BVNK": "https://www.bvnk.com",
      "Circle": "https://www.circle.com",
    },
    productLinks: {
      "Cross-border payments (160+ currencies)": "https://www.corpay.com/cross-border/",
      "Corporate and virtual cards": "https://www.corpay.com",
      "FX risk management": "https://www.corpay.com/cross-border/",
      "Vehicle and lodging payments": "https://www.corpay.com",
      "AP automation": "https://www.corpay.com/ap-automation",
    },
    facts: {
      founded: "2000",
      description:
        "Global corporate payments company (NYSE: CPAY), formerly FLEETCOR — corporate cards, cross-border payments in 160+ currencies, FX risk management, and AP automation.",
      products: [
        "Cross-border payments (160+ currencies)",
        "Corporate and virtual cards",
        "FX risk management",
        "Vehicle and lodging payments",
        "AP automation",
      ],
      funding:
        "Public company (NYSE: CPAY; formerly FLT) — Mastercard made a $300M minority investment in its cross-border business (announced Apr 2025, closed Dec 2025)",
      stage:
        "Rebranded from FLEETCOR to Corpay, Inc. (Mar 2024); completed a cross-border payments acquisition (Jan 2023); acquired Paymerang and a majority of Zapay (2024), GPS Capital Markets (Dec 2024), Alpha Group (~£1.8B, 2025), and AvidXchange with TPG (2025)",
      partners: ["Mastercard", "JPMorgan", "BVNK", "Circle"],
      tech: [
        "Added blockchain-based settlement to its cross-border platform through JPMorgan's Kinexys (tokenized fiat) and BVNK (stablecoin wallets and 24x7 disbursements), layering public-stablecoin and private-blockchain rails onto SWIFT, iACH, and local payment networks (May 2026) (Source: https://investor.corpay.com/news-releases/news-release-details/corpay-signs-jp-morgan-and-bvnk-blockchain-infrastructure/)",
        "Circle collaboration integrates Circle Mint and APIs into Corpay's FX and commercial-card rails: USDC-funded cross-border payouts to local currencies in 80+ countries and commercial/fleet/travel cards funded directly from USDC balances with on-chain authorization (Source: https://www.corpay.com/corporate-newsroom/19066/corpay-and-circle-collaborate-to-bring-stablecoin-payments-to-global-fx-and-commercial-card-rails)",
        "BVNK partnership gives Corpay's 800,000+ customers embedded stablecoin wallets with 24/7 hold, send, receive, and convert capability alongside fiat balances (Source: https://www.bvnk.com/press/corpay-partners-with-bvnk-to-add-stablecoin-wallets-for-global-customers)",
      ],
      metrics: [
        "Annual payment volume: $235B+ across 140+ currencies to 200+ countries (as of 2026, corpay.com)",
        "Shares outstanding: 65,361,919 (as of May 1, 2026, SEC Form 10-Q cover)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.corpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/CorpayInc",
        },
        {
          label: "Corpay — JPMorgan Kinexys and BVNK blockchain settlement (May 2026)",
          url: "https://investor.corpay.com/news-releases/news-release-details/corpay-signs-jp-morgan-and-bvnk-blockchain-infrastructure/",
        },
        {
          label: "Corpay — Circle collaboration for USDC payouts and card funding",
          url: "https://www.corpay.com/corporate-newsroom/19066/corpay-and-circle-collaborate-to-bring-stablecoin-payments-to-global-fx-and-commercial-card-rails",
        },
      ],
      people: [
        { name: "Peter Walker", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/peter-a-walker" },
      ],
    },
  },
  {
    id: "daya",
    name: "Daya",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Aptos Foundation": "https://aptosnetwork.com/foundation",
      "HashKey MENA": "https://global.hashkey.com/ae",
    },
    productLinks: {
      "Virtual USD/HKD/CNY accounts": "https://daya.co",
      "Stablecoin wallets and settlement": "https://daya.co",
      "FX conversion": "https://daya.co",
      "International payouts": "https://daya.co",
      "Payment APIs": "https://docs.daya.co/index",
    },
    facts: {
      founded: "2025",
      description:
        "Lagos-based stablecoin-native payments infrastructure for African businesses — virtual USD, HKD, and CNY accounts, stablecoin settlement, FX, and international payouts.",
      products: [
        "Virtual USD/HKD/CNY accounts",
        "Stablecoin wallets and settlement",
        "FX conversion",
        "International payouts",
        "Payment APIs",
      ],
      funding:
        "Reported $2.4M pre-seed — led by Hivemind Capital, with Lattice Fund, Alliance DAO, Aptos Foundation, and Globelink Investment (Jun 2026)",
      stage:
        "Founded by Tomiwa \"Aleph\" Lasebikan (co-founder of YC-backed Helicarrier) and Paul Joe (Oct 2025); pilot Africa–Middle East settlement corridor with Aptos Foundation and HashKey MENA (2026)",
      partners: ["Aptos Foundation", "HashKey MENA"],
      tech: [
        "Single API moves value between Nigerian naira and USDC/USDT, usually in under one minute, settling to a Daya balance, a local bank account, or an on-chain address (Source: https://docs.daya.co/index)",
        "Proprietary routing layer selects among local payment rails, bank transfers, SWIFT, and blockchain settlement based on corridor and liquidity conditions (Source: https://daya.co)",
        "Added Tempo and Sui as settlement rails — Tempo for payments-optimized throughput, Sui for zero-fee/gasless stablecoin transfers so users need not hold a network token (Sources: https://daya.co/blog/daya-adds-tempo-as-a-settlement-rail-for-stablecoin-payments; https://daya.co/blog/daya-partners-with-sui-for-gasless-network-transfers)",
        "African-side node in the HashKey MENA–Aptos Foundation regulated Middle East–Africa stablecoin corridor pilot: AED/USD on-ramp via HashKey MENA (VARA-licensed), settlement over Aptos, naira off-ramp and payouts via Daya (Source: https://group.hashkey.com/en/hashkey-mena-partners-with-aptos-and-daya-to-build-regulated-stablecoin-payments-corridor-initiative-between-middle-east-and-africa/)",
      ],
      metrics: [
        "NGN–stablecoin conversion time: usually under one minute (as of Oct 2026, docs.daya.co)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://daya.co",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Daya_HQ",
        },
        {
          label: "Daya — API documentation (NGN ↔ USDC/USDT rails)",
          url: "https://docs.daya.co/index",
        },
        {
          label: "HashKey MENA — Aptos–Daya regulated Middle East–Africa corridor pilot",
          url: "https://group.hashkey.com/en/hashkey-mena-partners-with-aptos-and-daya-to-build-regulated-stablecoin-payments-corridor-initiative-between-middle-east-and-africa/",
        },
      ],
      people: [
        { name: "Tomiwa Lasebikan", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/alephl" },
        { name: "Paul Joe", role: "Co-founder", linkedin: "https://www.linkedin.com/in/paul-joe" },
      ],
    },
  },
  {
    id: "deel",
    name: "Deel",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "BVNK": "https://www.bvnk.com",
      "Tempo": "https://tempo.xyz/",
      "Wise Platform": "https://wise.com",
      "Nium": "https://www.nium.com",
      "MoonPay": "https://www.moonpay.com/",
      "Mesh": "https://www.meshpay.com",
    },
    productLinks: {
      "Employer of Record (EOR)": "https://www.deel.com/solutions/payroll/eor/",
      "Global payroll": "https://www.deel.com/global-payroll/",
      "Contractor management": "https://www.deel.com/solutions/payroll/contractors/",
      "Deel Card and spend management": "https://www.deel.com/blog/introducing-deel-card",
      "Stablecoin payouts (DLUSD wallet)": "https://tempo.xyz/blog/deel-launches-dlusd-stablecoin-wallet-for-global-contractors/",
    },
    facts: {
      founded: "2019",
      description:
        "Global HR and payroll platform for hiring and paying workers in 150+ countries — employer of record, contractor management, and stablecoin payout options.",
      products: [
        "Employer of Record (EOR)",
        "Global payroll",
        "Contractor management",
        "Deel Card and spend management",
        "Stablecoin payouts (DLUSD wallet)",
      ],
      funding:
        "Reported ~$1B total — Series D led by Coatue at a $5.1B pre-money valuation (2021), $300M Series E co-led by Ribbit Capital, Andreessen Horowitz, and Coatue at a $17.3B valuation (Oct 2025)",
      stage:
        "Y Combinator (2019); 35,000+ customers and ~$22B annual payroll processed (company-reported); launched DLUSD dollar stablecoin wallet built on Tempo (May 2025); stablecoin salary payouts powered by BVNK and a dedicated crypto division (2026); acquisitions include Hofy, PaySpace, Omnipresent, and Safeguard Global's payroll division",
      partners: ["BVNK", "Tempo", "Wise Platform", "Nium", "MoonPay", "Mesh"],
      tech: [
        "Launched DLUSD, a dollar-backed stablecoin balance, and a contractor stablecoin wallet settling exclusively on Tempo, with rollout starting in Argentina (Jun 2026) (Source: https://tempo.xyz/blog/deel-launches-dlusd-stablecoin-wallet-for-global-contractors/)",
        "Payout stack: Stripe collects employer funding, Bridge (a Stripe company) converts USD into DLUSD, and balances live in embedded Privy wallets inside the existing Deel account — no separate wallet app or key management for contractors (Source: https://stripe.com/newsroom/news/deel-and-stripe)",
        "Tempo integration uses account abstraction, passkey authentication, transaction batching, and fee sponsorship; Tempo fees are fixed at $0.001 payable in stablecoins, and Tempo Zones keep contractor balances and payout history confidential while remaining auditable by Deel (Source: https://tempo.xyz/blog/deel-launches-dlusd-stablecoin-wallet-for-global-contractors/)",
      ],
      metrics: [
        "Annual payroll processed: ~$22B (as of Oct 2025, company-reported)",
        "ARR: $1.5B+ (as of H1 2026, company-reported)",
        "Customers: 40,000+ businesses across 150+ countries (as of Jun 2026, Tempo launch announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.deel.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/deel",
        },
        {
          label: "Tempo — Deel launches DLUSD stablecoin wallet for global contractors",
          url: "https://tempo.xyz/blog/deel-launches-dlusd-stablecoin-wallet-for-global-contractors/",
        },
        {
          label: "Stripe — Deel and Stripe stablecoin wallet",
          url: "https://stripe.com/newsroom/news/deel-and-stripe",
        },
      ],
      people: [
        { name: "Alex Bouaziz", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/alexbouaziz" },
        { name: "Shuo Wang", role: "Co-founder & CRO", linkedin: "https://www.linkedin.com/in/shuooo" },
      ],
    },
  },
  {
    id: "dtcpay",
    name: "dtcpay",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "SBI Group (strategic investor — Japan and Southeast Asia corridors)": "https://www.sbigroup.co.jp",
    },
    productLinks: {
      "Merchant acquisition for fiat and digital currencies": "https://dtcpay.com",
      "Cross-border transfers in 100+ countries": "https://dtcpay.com",
      "Multi-currency swaps": "https://dtcpay.com",
      "Enterprise payment portal": "https://dtcpay.com",
      "Consumer app": "https://dtcpay.com",
    },
    facts: {
      founded: "2019",
      description:
        "Singapore-headquartered, MAS-licensed stablecoin payments company enabling businesses and consumers to accept, hold, and transact stablecoins alongside fiat currencies.",
      products: [
        "Merchant acquisition for fiat and digital currencies",
        "Cross-border transfers in 100+ countries",
        "Multi-currency swaps",
        "Enterprise payment portal",
        "Consumer app",
      ],
      funding:
        "Reported $25M Series A — US$10M first tranche led by Vertex Ventures Southeast Asia & India (2026), extended to US$25M with strategic investor SBI Group and Genedant Capital (Sep 2026)",
      stage:
        "Major Payment Institution licence from the Monetary Authority of Singapore; Electronic Money Institution licence in Luxembourg; licences and registrations in Hong Kong, Australia, the US, and Canada; SBI Group joined as strategic investor for Japan–Southeast Asia corridors (Sep 2026)",
      partners: ["SBI Group (strategic investor — Japan and Southeast Asia corridors)"],
      tech: [
        "Operates as a MAS Major Payment Institution (licence PS20200531) covering digital payment token services, domestic and cross-border money transfer, merchant acquisition, and e-money issuance, with an MSB registration in the US and further licences/registrations in Luxembourg, Hong Kong, Australia, and Canada (Source: https://dtcpay.com/licences)",
        "Visa Principal Member — direct card issuance on Visa's network, with dtcpay cards provisioned to Apple, Google, and Samsung wallets (Source: https://dtcpay.com/licences)",
        "Published security and compliance framework: PCI DSS 4.0 for payment-switch services, SOC 2 Type I and Type II, SOC 3, and ISO 27001 (Source: https://dtcpay.com/licences)",
      ],
      metrics: [
        "Coverage: 7 countries, 35+ supported currencies, 11+ stablecoins (as of 2026, dtcpay.com about page)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://dtcpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/dtcpay_official",
        },
        {
          label: "dtcpay — licences & coverage",
          url: "https://dtcpay.com/licences",
        },
        {
          label: "Crowdfund Insider — dtcpay reports US$25M Series A",
          url: "https://www.crowdfundinsider.com/2026/09/311059-singapore-based-stablecoin-payments-firm-dtcpay-reports-series-a-funding",
        },
      ],
      people: [
        { name: "Alice Liu", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/aliceliujia" },
        { name: "Band Zhao", role: "Co-founder & Chairman", linkedin: "https://www.linkedin.com/in/band-zhao" },
      ],
    },
  },
];
