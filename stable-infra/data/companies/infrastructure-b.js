// Stablecoin infrastructure, batch B — Chainalysis through Fireblocks.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const INFRASTRUCTURE_B = [
  {
    id: "chainalysis",
    name: "Chainalysis",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "BNY": "https://www.bny.com/",
      "Binance": "https://www.binance.com/en",
      "Coinbase": "https://www.coinbase.com/",
      "Block": "https://block.xyz/",
      "MoonPay": "https://www.moonpay.com/",
      "BitMEX": "https://www.bitmex.com/",
    },

    productLinks: {
      "Reactor (visual investigation platform)": "https://www.chainalysis.com/product/reactor/",
      "KYT — Know Your Transaction (real-time compliance monitoring)": "https://www.chainalysis.com/product/kyt/",
      "Address Screening": "https://www.chainalysis.com/product/address-screening/",
      "Alterya AI fraud detection (acquired Jan 2025)": "https://www.chainalysis.com/product/alterya/",
      "Hexagate Web3 threat prevention (acquired Dec 2024)": "https://www.chainalysis.com/product/hexagate/",
      "Market intelligence and research": "https://www.chainalysis.com",
    },
    facts: {
      founded: "2014",
      description:
        "Blockchain data platform providing data, AI-powered software, services, and research to government agencies, exchanges, financial institutions, and cybersecurity companies in over 70 countries; its compliance and investigation tooling traces crypto and stablecoin flows for AML, sanctions, and law-enforcement use.",
      products: [
        "Reactor (visual investigation platform)",
        "KYT — Know Your Transaction (real-time compliance monitoring)",
        "Address Screening",
        "Alterya AI fraud detection (acquired Jan 2025)",
        "Hexagate Web3 threat prevention (acquired Dec 2024)",
        "Market intelligence and research",
      ],
      funding:
        "Reported ~$536M — $366M raised before the $170M Series F at an $8.6B valuation led by GIC (May 2022); earlier rounds included the $100M Series C at a $1B valuation (Nov 2020), $100M Series D at over $2B led by Paradigm (Mar 2021), and $100M Series E at $4.2B led by Coatue (Jun 2021)",
      stage:
        "Serves 1,500+ customers including 9 of the top 10 crypto exchanges and 50+ regulators worldwide; $34B in illicit funds seized, frozen, or recovered with its data; BNY became the first Global Systemically Important Bank to integrate it for crypto compliance; acquired Hexagate (Dec 2024) and Alterya (Jan 2025)",
      partners: ["BNY", "Binance", "Coinbase", "Block", "MoonPay", "BitMEX"],
      tech: [
        "KYT (Know Your Transaction) — real-time transaction-monitoring engine that risk-scores incoming and outgoing crypto and stablecoin transfers for exchanges and financial institutions",
        "Reactor — visual investigation platform tracing funds across chains; its data underpins $34B+ in illicit funds frozen and recovered",
      ],
      links: [
        { label: "Website (official)", url: "https://www.chainalysis.com" },
        { label: "X (Twitter)", url: "https://x.com/chainalysis" },
        { label: "Chainalysis — KYT product", url: "https://www.chainalysis.com/product/kyt/" },
        { label: "Chainalysis — Reactor product", url: "https://www.chainalysis.com/product/reactor/" },
      ],
      people: [
        { name: "Jonathan Levin", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/jonylevin" },
        { name: "Michael Gronager", role: "Co-founder", linkedin: "https://www.linkedin.com/in/gronager" },
      ],
    },
  },
  {
    id: "checker",
    name: "Checker",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "MoneyGram": "https://www.moneygram.com/",
      "Rail (acquired by Ripple)": "https://rail.io/",
      "Braza Bank": "https://www.brazabank.com.br/",
      "Belo": "https://www.belo.app/en",
      "Bitso": "https://bitso.com/",
      "Airtm": "https://www.airtm.com/en/",
    },

    productLinks: {
      "Stablecoin FX liquidity network": "https://www.checker.finance/trading-solutions",
      "Cross-border payment rails (collections and payouts)": "https://www.checker.finance/payment-solutions",
      "Named and virtual accounts": "https://www.checker.finance/payment-solutions",
      "Treasury and trading tools": "https://www.checker.finance/trading-solutions",
    },
    facts: {
      founded: "2025",
      description:
        "Global network that lets financial institutions plug into stablecoin liquidity, cross-border payments, treasury, and credit through a single API — aggregating exchanges, banks, OTC desks, and payment rails across 75 currencies for emerging-market corridors.",
      products: [
        "Stablecoin FX liquidity network",
        "Cross-border payment rails (collections and payouts)",
        "Named and virtual accounts",
        "Treasury and trading tools",
        "Embedded borrowing and lending (in build)",
      ],
      funding:
        "Reported $8M seed (May 2026) — led by Galaxy Ventures, Al Mada Ventures, and Framework Ventures; participation from Bitso, Airtm, DFS Lab, Onigiri Capital, SNZ Capital, and Velocity, plus fintech operators from Stripe, Tala, and Flutterwave",
      stage:
        "Scaled to $3B total processing volume in its first 12 months (~1% of annual global B2B stablecoin payments volume) across 30 regulated financial institutions; network covers 75 currencies spanning the US, Europe, Latin America, Africa, and Asia",
      partners: ["MoneyGram", "Rail (acquired by Ripple)", "Braza Bank", "Belo", "Bitso", "Airtm"],
      tech: [
        "Single-API programmable network with intelligent order routing across exchanges, banks, OTC desks, and payment providers — returning a standardized response regardless of the underlying provider",
        "Full-stack product surface behind one API — virtual accounts, spot block matching, automated quoting, market-data feeds, and trade bots over Slack, WhatsApp, and Telegram",
        "Circle Alliance member building on USDC and Circle Mint, with on/off-ramps across major chains (Algorand, Aptos, Arbitrum, Avalanche, Base, and more)",
      ],
      metrics: [
        "Total processing volume: $3B in first 12 months (as of May 2026, company via PR Newswire)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.checker.finance/" },
        { label: "X (Twitter)", url: "https://x.com/checkercorp" },
        {
          label: "PRNewswire — $8M seed from Galaxy, Al Mada, Framework (May 2026)",
          url: "https://www.prnewswire.com/apac/news-releases/checker-raises-8m-from-galaxy-ventures-al-mada-ventures-and-framework-ventures-to-unify-fragmented-digital-asset-markets-for-institutions-302776554.html",
        },
        { label: "Circle Alliance — Checker partner profile", url: "https://partners.circle.com/partner/checker" },
      ],
      people: [
        { name: "Jack Chong", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/jack-chong" },
        { name: "Mike Zaczyk", role: "Co-founder & CCO", linkedin: "https://www.linkedin.com/in/michael-zaczyk-8017b319b" },
        { name: "Justin McMahan", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/justin-mcmahan" },
      ],
    },
  },
  {
    id: "coinme",
    name: "Coinme",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "MoneyGram": "https://www.moneygram.com/",
      "Coinstar": "https://www.coinstar.com/",
      "Walmart": "https://www.walmart.com/",
      "CVS": "https://www.cvs.com/",
      "Walgreens": "https://www.walgreens.com/",
    },

    productLinks: {
      "Coinme app (buy/sell crypto with debit card)": "https://coinme.com/buy-and-sell-crypto-with-debit-card/",
      "Coinme Cash retail counters": "https://coinme.com/coinme-cash/",
      "Coinstar Bitcoin ATMs": "https://coinme.com/coinstar/",
      "Coinme wallet supporting USDC and other assets": "https://coinme.com/enterprise/web3-wallets/",
    },
    facts: {
      founded: "2014",
      description:
        "Licensed US cryptocurrency cash exchange connecting cash, debit cards, and digital wallets through retail checkout counters, Coinstar Bitcoin ATMs, and cash-out ATMs in 48 states — USDC is among the assets supported in its wallet.",
      products: [
        "Coinme app (buy/sell crypto with debit card)",
        "Coinme Cash retail counters",
        "Coinstar Bitcoin ATMs",
        "ReadyCode cash-out ATM network",
        "Coinme wallet supporting USDC and other assets",
      ],
      funding:
        "Reported ~$17M across three rounds (2019–2021) — $1.5M pre-Series A (2019, Xpring), $5.5M (2020, Pantera Capital and Blockchain.com Ventures), and a $10M strategic round led by Digital Currency Group (Jun 2021)",
      stage:
        "Operates 40,000+ US access points across 48 states — 14,000+ Coinme Cash retail counters, 6,000+ Coinstar Bitcoin ATMs, and 20,000+ cash-out ATMs; the first licensed Bitcoin ATM operator in the US",
      partners: ["MoneyGram", "Coinstar", "Walmart", "CVS", "Walgreens"],
      tech: [
        "Custody design: the majority of customer crypto held in cold storage, with multi-factor authentication and 24/7 security monitoring (per company FAQ)",
      ],
      links: [
        { label: "Website (official)", url: "https://coinme.com/" },
        { label: "X (Twitter)", url: "https://x.com/Coinme" },
        {
          label: "GeekWire — Coinme raises $10M (Jun 2021)",
          url: "https://www.geekwire.com/2021/coinme-seattle-startup-crypto-enabling-legacy-financial-services-raises-10m/",
        },
        { label: "coinme.com — 40,000+ locations across 48 states", url: "https://coinme.com/locations/usa/" },
      ],
      people: [
        { name: "Neil Bergquist", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/neilbergquist" },
      ],
    },
  },
  {
    id: "coinspaid",
    name: "CoinsPaid",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "PHH Group": "https://phhgroup.eu/",
      "Finery Markets": "https://finerymarkets.com/",
      "Quantum Gaming": "https://quantumgaming.com/",
      "Mirai Flights": "https://mirai.flights/",
    },

    productLinks: {
      "Crypto payment processing gateway": "https://coinspaid.com/",
      "Crypto payouts and mass payments": "https://coinspaid.com/",
      "Custodial wallet infrastructure": "https://coinspaid.com/",
      "Crypto-to-fiat conversion (40+ fiat currencies)": "https://coinspaid.com/",
      "Transaction monitoring and compliance tooling": "https://coinspaid.com/",
    },
    facts: {
      founded: "2014",
      description:
        "Estonia-based enterprise crypto payment gateway (CryptoProcessing by CoinsPaid) providing merchant processing, payouts, custody, and crypto-to-fiat conversion for businesses, financial institutions, and platforms.",
      products: [
        "Crypto payment processing gateway",
        "Crypto payouts and mass payments",
        "Custodial wallet infrastructure",
        "Crypto-to-fiat conversion (40+ fiat currencies)",
        "Transaction monitoring and compliance tooling",
      ],
      funding:
        "No publicly announced venture funding rounds — built as an internal tool at Merkeleon (spun out as a standalone brand in 2018) and operated as privately held through Estonia's Dream Finance OÜ",
      stage:
        "Handled over €875M in monthly volume and nearly 855,000 transactions in July 2024 per a Finery Markets case study; disclosed a July 2023 security incident in which $37.3M in operational funds was stolen (attributed to suspected Lazarus Group), with client funds reported unaffected and volumes restored to ~80% of pre-attack levels within a week. No verified official X (Twitter) handle — neither the CoinsPaid nor CryptoProcessing sites links an official account",
      partners: ["PHH Group", "Finery Markets", "Quantum Gaming", "Mirai Flights"],
      tech: [
        "Modular custody and payments core — secure key management, wallet clustering, and cold-wallet operations, deployable module by module or as a full managed platform",
        "Exchange aggregator with multi-exchange liquidity access, smart order routing, and order-book aggregation",
        "Compliance Guard module — KYT and AML monitoring, risk scoring, approval workflows, and audit trails for regulated setups",
      ],
      metrics: [
        "Monthly processed volume: €875M (as of July 2024, Finery Markets case study)",
      ],
      links: [
        { label: "Website (official)", url: "https://coinspaid.com/" },
        {
          label: "CoinsPaid — July 2023 incident disclosure ($37.3M)",
          url: "https://coinspaid.com/news/crypto-payment-gateway-hacked/",
        },
        {
          label: "CryptoProcessing — PHH Group crypto checkout partnership (Jun 2026)",
          url: "https://cryptoprocessing.com/company-updates/phh-group-and-cryptoprocessing-by-coinspaid-announce-partnership",
        },
        {
          label: "Finery Markets — CoinsPaid scaling case study (€875M monthly volume)",
          url: "https://finerymarkets.com/blog/coinspaid-finchtrade-scaling-crypto-payments-through-finery-markets-institutional-infrastructure",
        },
      ],
      people: [
        { name: "Max Krupyshev", role: "CEO", linkedin: "https://www.linkedin.com/in/mkrupyshev" },
      ],
    },
  },
  {
    id: "crossmint",
    name: "Crossmint",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com/",
      "MoneyGram": "https://www.moneygram.com/",
      "Wirex": "https://www.wirexapp.com/",
      "Western Union": "https://www.westernunion.com/",
      "Tala": "https://tala.co/",
      "Ribbit Capital": "https://www.ribbitcap.com/",
    },

    productLinks: {
      "Programmable embedded wallets": "https://www.crossmint.com/products/wallets",
      "Stablecoin payments and payment-orchestration APIs": "https://www.crossmint.com/products/stablecoin-orchestration",
      "Fiat on-ramp and off-ramp": "https://www.crossmint.com/",
      "AI-agent commerce infrastructure": "https://www.crossmint.com/products/agentic-checkout",
    },
    facts: {
      founded: "2022",
      description:
        "Miami-based onchain platform whose APIs, SDKs, and no-code tools let enterprises embed programmable wallets, stablecoin payments, tokenization, and AI-agent commerce without building the underlying infrastructure themselves.",
      products: [
        "Programmable embedded wallets",
        "Stablecoin payments and payment-orchestration APIs",
        "NFT minting and tokenization APIs",
        "Fiat on-ramp and off-ramp",
        "AI-agent commerce infrastructure",
      ],
      funding:
        "Reported ~$41.7M across seed, Series A, and strategic financing — $23.6M Series A led by Ribbit Capital with Franklin Templeton, Nyca Partners, First Round Capital, and Lightspeed Faction (Mar 2025), a strategic financing from Circle Ventures (Sep 2025), and roughly $18M of earlier seed financing (Jan 2023); total is a database estimate",
      stage:
        "More than 40,000 companies and developers use its platform across 40+ blockchains (Mar 2025); reported 1,100% subscription-revenue growth in 2024; named to the 2026 CB Insights Fintech 100",
      partners: ["Visa", "MoneyGram", "Wirex", "Western Union", "Tala", "Ribbit Capital"],
      tech: [
        "Programmable wallet infrastructure for users, AI agents, and backend treasury operations across 40+ blockchains, with gasless transactions (Crossmint pays gas and bills in fiat)",
        "Stablecoin orchestration and fiat on/off-ramp APIs with licensed coverage across all US states incl. New York, all 27 EU countries under MiCA, and onboarding or payouts in 160+ countries",
        "Agentic payments toolkit — virtual cards and APIs that let AI agents hold assets and transact securely",
        "Open-sourced the Goat SDK (Great Onchain Agent Toolkit), connecting AI agents to on-chain wallets and payments across chains",
      ],
      metrics: [
        "Customer count: 40,000+ enterprises and developers (as of March 2025, company via PR Newswire)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.crossmint.com/" },
        { label: "X (Twitter)", url: "https://x.com/crossmint" },
        {
          label: "PR Newswire — Crossmint secures $23.6M led by Ribbit Capital (Mar 2025)",
          url: "https://www.prnewswire.com/news-releases/crossmint-secures-23-6m-to-bring-businesses--ai-agents-onchain-302404384.html",
        },
        { label: "GitHub — Goat SDK (open source)", url: "https://github.com/goat-sdk/goat" },
      ],
      people: [
        { name: "Rodri Fernández Touza", role: "Co-founder", linkedin: "https://www.linkedin.com/in/rodrifernandez" },
        { name: "Alfonso Gómez-Jordana Mañas", role: "Co-founder", linkedin: "https://www.linkedin.com/in/alfongj" },
      ],
    },
  },
  {
    id: "cycles",
    name: "Cycles",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Lynq": "https://lynq.network/",
      "FalconX": "https://www.falconx.io/",
      "Informal Systems": "https://informal.systems/",
    },

    productLinks: {
      "Cycles Pay — stablecoin payments app (beta, web/iOS/Android)": "https://cycles.money/pay",
      "Cycles Prime — institutional OTC netting and clearing": "https://cycles.money/prime",
      "Quartz — open-source trusted-execution-environment framework": "https://github.com/informalsystems/quartz",
    },
    facts: {
      founded: "2025",
      description:
        "Privacy-preserving multilateral clearing network for crypto markets and stablecoin payments — participants submit obligations, the network cancels offsetting payment loops using trusted-execution environments and zero-knowledge proofs, and only net balances settle. Incubated at Informal Systems and led by Cosmos co-founder Ethan Buchman.",
      products: [
        "Cycles Pay — stablecoin payments app (beta, web/iOS/Android)",
        "Cycles Prime — institutional OTC netting and clearing",
        "Quartz — open-source trusted-execution-environment framework",
      ],
      funding:
        "Reported $8.7M — $6.4M seed led by Blockchange Ventures with Coinbase Ventures, Compound VC, Primitive Ventures, and angel investors (May 2026), plus a $2.3M pre-seed (2025; CMCC Global, Maven 11, Nascent, and Cygni Capital per funding databases)",
      stage:
        "Published the Cycles Protocol whitepaper (Nov 2024); spun out of Informal Systems in 2025; raised its $6.4M seed in May 2026 to expand the clearing network; Cycles Pay in beta — secondary sources cite Cycles Protocol SA in Lausanne while the funding announcement datelines Toronto",
      partners: ["Lynq", "FalconX", "Informal Systems"],
      tech: [
        "Privacy-preserving multilateral netting: participants' obligations are cleared by canceling offsetting payment loops inside trusted-execution environments with zero-knowledge proofs, settling only net balances (whitepaper, Nov 2024)",
        "Quartz — open-source trusted-execution-environment framework developed with Informal Systems",
      ],
      links: [
        { label: "Website (official)", url: "https://cycles.money/" },
        { label: "X (Twitter)", url: "https://x.com/cyclesmoney" },
        { label: "Cycles — Cycles Protocol whitepaper (Nov 2024)", url: "https://cycles.money/whitepaper.pdf" },
        { label: "GitHub — Quartz (open-source TEE framework)", url: "https://github.com/informalsystems/quartz" },
      ],
      people: [
        { name: "Ethan Buchman", role: "CEO", linkedin: "https://www.linkedin.com/in/ethan-buchman-10b34944" },
      ],
    },
  },
  {
    id: "cyclops",
    name: "Cyclops",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com/",
      "Shift4": "https://www.shift4.com/",
    },

    productLinks: {
      "Stablecoin settlement for payment companies": "https://www.cyclops.io/settlement",
      "Global stablecoin and fiat payouts": "https://www.cyclops.io",
      "Crypto and stablecoin payment acceptance": "https://www.cyclops.io",
      "Treasury and FX optimization": "https://www.cyclops.io",
      "Compliance and risk infrastructure": "https://www.cyclops.io",
    },
    facts: {
      founded: "2026",
      description:
        "Miami-based stablecoin and crypto-infrastructure platform built exclusively for payments companies — one API for stablecoin settlement, pay-ins, payouts, payment acceptance, and treasury optimization, with compliance built in. Founded by The Giving Block creators Alex Wilson and Pat Duffy together with David Johnson.",
      products: [
        "Stablecoin settlement for payment companies",
        "Global stablecoin and fiat payouts",
        "Crypto and stablecoin payment acceptance",
        "Treasury and FX optimization",
        "Compliance and risk infrastructure",
      ],
      funding:
        "Reported $28M — $8M seed from Castle Island Ventures, F-Prime, and Shift4 (Mar 2026), followed by a $20M Series A led by Nava Ventures with Coinbase Ventures, Castle Island Ventures, Circle Ventures, GPT Ventures, and Lasagna Ventures (Jul 2026)",
      stage:
        "Launched publicly in March 2026; joined the Mastercard Crypto Program and opened a European headquarters in Vienna later that year; customers collectively serve hundreds of thousands of merchants, with company-reported payment volume growth of 350% month over month at Series A (Jul 2026)",
      partners: ["Mastercard", "Shift4"],
      tech: [
        "Single-API platform that consolidates stablecoin custody, compliance, liquidity and payout rails for payments companies — settlement, pay-ins, payouts and treasury in one integration instead of separate vendors (Source: https://www.cyclops.io/settlement)",
        "Joined the x402 Foundation (Linux Foundation) in October 2026 to help shape the open agentic-commerce standard that settles stablecoin payments in about two seconds (Source: https://www.cyclops.io/post/cyclops-joins-the-x402-foundation-to-accelerate-agentic-commerce-for-payments-companies)",
        "Operates as NMLS-registered Cyclops USA, Inc. (NMLS ID 2829552) with compliance screening embedded in the payout flow (Source: https://www.cyclops.io/)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.cyclops.io",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Cyclops_inc",
        },
        {
          label: "Cyclops — Settlement (one API for stablecoin settlement, pay-ins, payouts, and treasury)",
          url: "https://www.cyclops.io/settlement",
        },
        {
          label: "Cyclops — Cyclops joins the x402 Foundation (Oct 2026)",
          url: "https://www.cyclops.io/post/cyclops-joins-the-x402-foundation-to-accelerate-agentic-commerce-for-payments-companies",
        }

      ],
      people: [
        { name: "Alex Wilson", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/alexwilsontgb" },
        { name: "Pat Duffy", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/thisispatduffy" },
        { name: "David Christopher Johnson", role: "Co-founder", linkedin: "https://www.linkedin.com/in/davld-johnson" },
      ],
    },
  },
  {
    id: "dfns",
    name: "dfns",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "IBM": "https://www.ibm.com/",
      "Zodia Custody": "https://zodia-custody.com/",
      "DTCC": "https://www.dtcc.com/",
      "ADX": "https://www.adx.ae/",
      "PhotonPay": "https://www.photonpay.com/",
    },

    productLinks: {
      "Wallets-as-a-service APIs (multichain, programmable)": "https://dfns.co/wallet-as-a-service",
      "MPC key management with zero-trust controls": "https://dfns.co/key-management",
      "Policy engine for wallet governance and approvals": "https://dfns.co/policy-engine",
      "Digital-asset operations including staking and tokenization workflows": "https://dfns.co/tokenization-engine",
    },
    facts: {
      founded: "2020",
      description:
        "Paris-based wallet infrastructure company offering wallets-as-a-service for fintechs, financial institutions, and Web3 businesses — programmable multichain wallet APIs built on MPC key management within a zero-trust security model, with a policy engine for wallet governance. Founded by Clarisse Hagège and Christopher Grilhault des Fontaines.",
      products: [
        "Wallets-as-a-service APIs (multichain, programmable)",
        "MPC key management with zero-trust controls",
        "Policy engine for wallet governance and approvals",
        "Digital-asset operations including staking and tokenization workflows",
      ],
      funding:
        "Reported over $30M — $16M Series A led by Further Ventures with Wintermute, Motive Ventures, Motier Ventures, and existing backers (Jan 2025), plus a $13.5M seed (2022) with White Star Capital, Coinbase Ventures, Hashed, Susquehanna International Group, and Bpifrance",
      stage:
        "Closed its $16M Series A (Jan 2025); IBM's institutional digital-asset platform launched powered by DFNS wallet infrastructure (Oct 2025); 2026 work includes supporting DTCC's Tokenization Service ecosystem and partnerships with NEC, PhotonPay, Ownera, ADX, and Coincheck Group",
      partners: ["IBM", "Zodia Custody", "DTCC", "ADX", "PhotonPay"],
      tech: [
        "MPC/TSS signing in which a complete private key is never reconstructed — key shares are held across isolated, enclaved signer nodes (Source: https://docs.dfns.co/advanced/deployment-models/mpc)",
        "Key material can be held in MPC, HSMs, or offline, deployed in cloud, hybrid, or self-hosted configurations (Source: https://dfns.co/key-management)",
        "Policy engine enforces wallet governance — transaction approvals, spending limits and quorum rules — before a signature is issued (Source: https://dfns.co/key-management)",
        "Open-source SDKs (TypeScript, Go, Swift) for wallet and policy integration (Source: https://github.com/dfns)",
        "Company-stated reliability: 99.997% historical uptime since 2022 and about 1% of global stablecoin payment volume settling through dfns (Source: https://dfns.co/)",
      ],
      metrics: [
        "Client assets secured: $200B+ (as of November 2026, dfns.co)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://dfns.co",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/dfnsHQ",
        },
        {
          label: "DFNS — Key management (MPC, HSM, or offline keys)",
          url: "https://dfns.co/key-management",
        },
        {
          label: "DFNS — MPC deployment models documentation",
          url: "https://docs.dfns.co/advanced/deployment-models/mpc",
        }

      ],
      people: [
        { name: "Clarisse Hagège", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/clarissehagege" },
        { name: "Christopher Grilhault des Fontaines", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/christopherdesfontaines" },
      ],
    },
  },
  {
    id: "diameter",
    name: "Diameter",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Portage Bank": "https://www.portage.bank/",
      "Stellar Development Foundation": "https://stellar.org/",
      "Payall": "https://payall.com/",
    },

    productLinks: {
      "USD virtual and named accounts for global institutions": "https://diameterpay.com/services/",
      "Payment APIs across wires, ACH, SWIFT, FedNow, and RTP": "https://diameterpay.com/services/",
      "Stablecoin on/off-ramps and on-chain settlement (Stellar USDC)": "https://diameterpay.com/services/",
      "Treasury, reconciliation, and compliance APIs (AML/sanctions screening)": "https://diameterpay.com/services/",
    },
    facts: {
      founded: "2023",
      description:
        "Regulated U.S. dollar payments platform (SendFriend, Inc., doing business as Diameter Pay), based in Jersey City, New Jersey — API access to U.S. dollar accounts and payment rails (wires, ACH, SWIFT, FedNow, RTP) with stablecoin on/off-ramps, treasury tooling, and built-in AML and sanctions compliance for banks, fintechs, and stablecoin platforms. Founded by David Lighton.",
      products: [
        "USD virtual and named accounts for global institutions",
        "Payment APIs across wires, ACH, SWIFT, FedNow, and RTP",
        "Stablecoin on/off-ramps and on-chain settlement (Stellar USDC)",
        "Treasury, reconciliation, and compliance APIs (AML/sanctions screening)",
      ],
      funding:
        "Reported $10M — Series A co-led by CMT Digital and Lightspeed Faction with SixThirty Ventures, Stellar Development Foundation, Tech Council Ventures, Onigiri Capital, and BitRock Capital (announced Sep 2026); the company's first disclosed institutional round after bootstrapping",
      stage:
        "Raised its first disclosed institutional round (announced Sep 2026); company-reported more than $10B payment volume year-to-date in 2026 and more than $1B monthly; advancing a Stellar integration for regulated USD-to-USDC payments; licensed as a money services business and New Jersey money transmitter. X (Twitter) omitted: neither diameterpay.com nor the company's Sep 2026 press release links an X account; third-party aggregators list an @DiameterPay handle, but with no official cross-reference it fails the verification bar.",
      partners: ["SSB Bank", "Portage Bank", "Stellar Development Foundation", "Payall"],
      tech: [
        "Single REST API for USD virtual accounts and payments spanning wires, ACH, SWIFT, FedNow and RTP, with compliance controls embedded across multiple U.S. banking partners (Source: https://diameterpay.mintlify.app/)",
        "Stablecoin on- and off-ramps with on-chain settlement — advancing a Stellar integration for regulated USD-to-USDC payment corridors (Source: https://communityfund.stellar.org/project/diameter-pay-c96)",
        "Automated AML and sanctions screening on transaction flow, built for bank and fintech distribution (Source: https://diameterpay.com/services/)",
      ],
      metrics: [
        "Payment volume: more than $10B processed year-to-date in 2026 (as of September 2026, PR Newswire)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://diameterpay.com",
        },
        {
          label: "Diameter Pay — API documentation (virtual accounts, payments, compliance endpoints)",
          url: "https://diameterpay.mintlify.app/",
        },
        {
          label: "Diameter Pay — Services (USD accounts, payment rails, stablecoin on/off-ramps, compliance)",
          url: "https://diameterpay.com/services/",
        },
        {
          label: "PR Newswire — Diameter Pay Raises $10 Million to Expand Global Access to the US Dollar (Sep 2026)",
          url: "https://www.prnewswire.com/news-releases/diameter-pay-raises-10-million-to-expand-global-access-to-the-us-dollar-302869225.html",
        }

      ],
      people: [
        { name: "David Lighton", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/david-lighton-b027a917" },
      ],
    },
  },
  {
    id: "efy-finance",
    name: "EFY Finance",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Tether": "https://tether.to/",
      "Visa": "https://www.visa.com",
    },
    productLinks: {
      "Multi-currency accounts and payments": "https://www.efyfinance.com",
      "Stablecoin on-ramps and off-ramps (USDT/USAT)": "https://www.efyfinance.com",
      "Cross-border settlement to local bank accounts": "https://www.efyfinance.com",
      "Digital-asset custody, OTC trading, and Visa cards": "https://www.efyfinance.com/en/infrastructure/",
    },
    facts: {
      founded: "2022",
      description:
        "Latin American financial-infrastructure company providing regulated, stablecoin-based payments — multi-currency accounts, USDT/USAT on- and off-ramps, cross-border settlement to local bank accounts in 17 countries, digital-asset custody, OTC trading, and Visa cards. Co-founded by Andrés Tobón, who serves as CEO.",
      products: [
        "Multi-currency accounts and payments",
        "Stablecoin on-ramps and off-ramps (USDT/USAT)",
        "Cross-border settlement to local bank accounts",
        "Digital-asset custody, OTC trading, and Visa cards",
      ],
      funding:
        "Undisclosed amount — Tether invested in EFY's seed round (Oct 2026) to accelerate institutional USDT and USAT adoption across Latin America",
      stage:
        "Operations began in 2023, with company-reported volume growing from about $15M that year to $989M in 2024 and $1.1B in 2025 across more than 25,000 active accounts; licensed as a Digital Asset Service Provider in El Salvador with regulated operations in four markets and settlement coverage in 17 countries",
      partners: ["Tether", "Visa"],
      tech: [
        "Institutional custody on Fireblocks with MPC key sharding (2-of-3 shards), key segregation, and strict access and authorization controls (Source: https://www.efyfinance.com/en/infrastructure/)",
        "Regulated Salvadoran entity — authorized as a Bitcoin Service Provider (PSB) and Digital Asset Service Provider (PSAD), supervised by the BCR and the CNAD (Source: https://www.efyfinance.com/en/infrastructure/)",
        "Compliance stack integrates Chainalysis transaction monitoring, Notabene transfer traceability, and MetaMap identity verification across KYC/KYB/KYT and sanctions checks (Source: https://www.efyfinance.com/en/infrastructure/)",
        "Client funds are held in a Panamanian trust, segregated from the group's operating balance sheet (Source: https://www.efyfinance.com/en/infrastructure/)",
      ],
      metrics: [
        "Transaction volume: $2.5B+ USD (as of November 2026, efyfinance.com)",
        "Settlement countries: 17 (as of November 2026, efyfinance.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.efyfinance.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/EFYFinance",
        },
        {
          label: "EFY Finance — Infrastructure (custody, licensing, and compliance detail)",
          url: "https://www.efyfinance.com/en/infrastructure/",
        },
        {
          label: "Tether — Tether Invests in EFY Finance to Accelerate Institutional Stablecoin Usage in LATAM (Oct 2026)",
          url: "https://tether.io/news/tether-invests-in-efy-finance-to-accelerate-institutional-stablecoin-usage-in-latam/",
        }

      ],
      people: [
        { name: "Andrés Tobón", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/aftobon" },
      ],
    },
  },
  {
    id: "elliptic",
    name: "Elliptic",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "JPMorgan Chase": "https://www.jpmorganchase.com/",
      "HSBC": "https://www.hsbc.com/",
      "Deutsche Bank": "https://www.db.com/",
      "Circle": "https://www.circle.com",
      "Solana Developer Platform": "https://solana.com/",
    },
    productLinks: {
      "Transaction monitoring and sanctions/AML screening": "https://www.elliptic.co/products/lens/",
      "Wallet screening and counterparty risk checks": "https://www.elliptic.co/products/lens/",
      "Cross-chain investigations and forensic tracing": "https://www.elliptic.co/products/investigator/",
      "Stablecoin Risk Management Suite and AI-assisted alert review (Elliptic Copilot)": "https://www.elliptic.co/products/elliptic-copilot/",
    },
    facts: {
      founded: "2013",
      description:
        "London-based blockchain analytics and crypto-compliance company founded in 2013 — screening, monitoring, and investigation tools that help banks, exchanges, payment firms, and governments assess on-chain risk across more than 65 blockchains, with stablecoin-specific risk management. Founded by Dr. James Smith.",
      products: [
        "Transaction monitoring and sanctions/AML screening",
        "Wallet screening and counterparty risk checks",
        "Cross-chain investigations and forensic tracing",
        "Stablecoin Risk Management Suite and AI-assisted alert review (Elliptic Copilot)",
      ],
      funding:
        "Reported about $220M total — $120M Series D led by One Peak with Deutsche Bank and Nasdaq Ventures (May 2026), a $60M Series C with JPMorgan participation (2021), and a strategic investment from HSBC (Sep 2025), making it the only blockchain analytics provider backed by four G-SIBs (HSBC, JPMorgan Chase, Santander, and Wells Fargo)",
      stage:
        "Raised a $120M Series D (May 2026); strategic investment from HSBC (Sep 2025) followed earlier G-SIB backing; 2025 launches included the Stablecoin Risk Management Suite, Elliptic Data Fabric, and AI Copilot; company-stated coverage of 65+ blockchains, more than a billion attributed addresses, and about 97% of global crypto trading volume",
      partners: ["JPMorgan Chase", "HSBC", "Deutsche Bank", "Circle", "Solana Developer Platform"],
      tech: [
        "Stablecoin Risk Management Suite with Issuer Due Diligence — the first compliance toolkit for banks holding stablecoin issuer reserves, assessing issuer, reserve and ecosystem risk (Source: https://www.elliptic.co/newsroom/elliptic-sets-industry-milestone-with-the-first-stablecoin-risk-management-suite/)",
        "Company-stated analytics coverage of 65+ blockchains, more than a billion attributed addresses, and about 97% of global crypto trading volume (Source: https://www.elliptic.co/blockchain-analytics-platform/)",
        "On-chain insights aligned with Wolfsberg Group guidance for banks serving stablecoin issuers — reserve-custody due diligence and issuer-linked wallet monitoring (Source: https://www.elliptic.co/insights/the-wolfsberg-groups-guidance-on-banking-stablecoin-issuers-harnessing-on-chain-insights-to-assess-risk/)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.elliptic.co",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/elliptic",
        },
        {
          label: "Elliptic — Stablecoin Risk Management Suite launch (Aug 2025)",
          url: "https://www.elliptic.co/newsroom/elliptic-sets-industry-milestone-with-the-first-stablecoin-risk-management-suite/",
        },
        {
          label: "Elliptic — Issuer Due Diligence for banks holding stablecoin issuer reserves",
          url: "https://www.elliptic.co/products/issuer-due-diligence/",
        }

      ],
      people: [
        { name: "Tom Robinson", role: "Co-founder & Chief Scientist", linkedin: "https://www.linkedin.com/in/tomarobinson" },
        { name: "James Smith", role: "Co-founder & Chief Strategy Officer", linkedin: "https://www.linkedin.com/in/jamesssmith" },
        { name: "Simone Maini", role: "CEO", linkedin: "https://www.linkedin.com/in/simone-maini" },
      ],
    },
  },
  {
    id: "fireblocks",
    name: "Fireblocks",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "BNY": "https://www.bny.com/",
      "Galaxy": "https://www.galaxy.com/",
      "Worldpay": "https://www.worldpay.com",
      "Bitso": "https://www.bitso.com",
      "Circle": "https://www.circle.com",
    },
    productLinks: {
      "Institutional MPC custody and wallet infrastructure (including Fireblocks Trust Company)": "https://www.fireblocks.com/products/wallets",
      "Asset transfer, treasury, and the Fireblocks Network for Payments": "https://www.fireblocks.com/products/payments",
      "Tokenization and stablecoin issuance tools": "https://www.fireblocks.com/products/tokenization",
      "Digital-asset accounting (Tres Finance) and consumer wallet onboarding (Dynamic)": "https://tres.finance",
    },
    facts: {
      founded: "2018",
      description:
        "New York-based digital-asset infrastructure company founded in 2018 — institutional MPC custody, wallet, transfer, tokenization, and stablecoin payments infrastructure used by banks, payment companies, and exchanges across more than 200 blockchains. Co-founded by Michael Shaulov, Idan Ofrat, and Sefi Vizel.",
      products: [
        "Institutional MPC custody and wallet infrastructure (including Fireblocks Trust Company)",
        "Asset transfer, treasury, and the Fireblocks Network for Payments",
        "Tokenization and stablecoin issuance tools",
        "Digital-asset accounting (Tres Finance) and consumer wallet onboarding (Dynamic)",
      ],
      funding:
        "Reported about $1.04B total — $550M Series E led by D1 Capital Partners and Spark Capital at an $8B valuation (Jan 2022) and a $310M Series D (Jul 2021)",
      stage:
        "Last priced financing was the $550M Series E at an $8B valuation (Jan 2022); annual recurring revenue surpassed $100M in 2022; launched the Fireblocks Network for Payments (2024) and a strategic Circle collaboration (Feb 2025); acquired Dynamic (Oct 2025) and Tres Finance (Jan 2026, reported about $130M); launched an Agentic Payments Suite (May 2026); company-stated scale of thousands of institutions and about $16T in secured digital-asset transactions across 200+ blockchains",
      partners: ["BNY", "Galaxy", "Worldpay", "Bitso", "Circle"],
      tech: [
        "MPC-CMP signing distributes key material so a complete private key never exists in one place — layered with secure hardware enclaves and a signature policy engine for defense-in-depth (Source: https://developers.fireblocks.com/docs/what-is-fireblocks)",
        "Fireblocks Trust Company provides qualified custody built on the same MPC infrastructure that secures client transactions (Source: https://www.fireblocks.com/blog/fireblocks-trust-qualified-custody-proven-security)",
        "Agentic Payments Suite (May 2026) covers both sides of agent-initiated stablecoin transactions — payment acceptance and agent wallet issuance (Source: https://www.fireblocks.com/report/compare-agent-wallets)",
      ],
      metrics: [
        "Secured digital-asset transactions: $16T+ lifetime (as of September 2026, fireblocks.com)",
        "Institutions served: 2,400+, including 100+ banks (as of September 2026, fireblocks.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.fireblocks.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/FireblocksHQ",
        },
        {
          label: "Fireblocks — What is Fireblocks (MPC, enclaves, and policy-engine security architecture)",
          url: "https://developers.fireblocks.com/docs/what-is-fireblocks",
        },
        {
          label: "Fireblocks — Trust: qualified custody on MPC infrastructure (Oct 2025)",
          url: "https://www.fireblocks.com/blog/fireblocks-trust-qualified-custody-proven-security",
        }

      ],
      people: [
        { name: "Michael Shaulov", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/michaelsh" },
        { name: "Pavel Berengoltz", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/pavelberengoltz" },
        { name: "Idan Ofrat", role: "Co-founder & Chief Product Officer", linkedin: "https://www.linkedin.com/in/idanofrat" },
      ],
    },
  },
];
