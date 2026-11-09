// B2B payments, batch B — Due Network through Tazapay.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const B2B_PAYMENTS_B = [
  {
    id: "due-network",
    name: "Due Network",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Fabric Ventures (seed lead)": "https://fabric.vc",
      "Speedinvest (seed-extension lead)": "https://www.speedinvest.com",
      "Semantic Capital": "https://www.semcap.co.uk",
      "Polymorphic Capital": "https://polymorphic.capital",
    },
    productLinks: {
      "Stablecoin Payments API": "https://www.opendue.com/api",
      "Cross-border payouts in 80+ countries (SEPA Instant, ACH, Fedwire, PIX, M-Pesa)": "https://www.opendue.com/payments",
      "Multi-currency and virtual accounts": "https://www.opendue.com/accounts",
      "Stablecoin on/off-ramps and collections": "https://www.opendue.com/payments",
      "Payroll and contractor payments": "https://www.opendue.com/payroll-payments",
    },
    facts: {
      founded: "2022",
      description:
        "London-based payments API that combines stablecoin settlement (USDC, USDT, EURC) with local fiat rails for cross-border B2B payments — supplier payouts, payroll, remittances, and multi-currency accounts across 80+ markets.",
      products: [
        "Stablecoin Payments API",
        "Cross-border payouts in 80+ countries (SEPA Instant, ACH, Fedwire, PIX, M-Pesa)",
        "Multi-currency and virtual accounts",
        "Stablecoin on/off-ramps and collections",
        "Payroll and contractor payments",
      ],
      funding:
        "Reported $7.3M seed total — $3.3M initial seed led by Fabric Ventures and Semantic Capital (Nov 2023), extended to $7.3M with a round led by Speedinvest (Jul 2025)",
      stage:
        "Founded September 2022 in London by Robert Sargsian and Alex Popov; Global Stablecoin Payments API launched July 2025 alongside the seed extension, with 100+ country coverage planned; Spanish entity (Due Network, S.L.) registered as a Crypto-Asset Service Provider under MiCA, with operating entities in Spain, the UK, Canada and the US",
      partners: ["Fabric Ventures (seed lead)", "Speedinvest (seed-extension lead)", "Semantic Capital", "Polymorphic Capital", "BlockTower"],
      tech: [
        "Fully non-custodial wallet architecture — users keep complete ownership of their funds, with biometric verification, trusted-device recognition, and backup recovery options for lost keys.",
        "API infrastructure for virtual accounts and on/off-ramp services, letting platforms embed cryptocurrency conversion and multi-currency account capabilities.",
        "Stablecoin settlement rails (USDC, USDT, EURC) combined with local fiat rails across 80+ markets at the July 2025 Global Stablecoin Payments API launch.",
      ],
      links: [
        { label: "Website (official)", url: "https://www.opendue.com/" },
        { label: "X (Twitter)", url: "https://x.com/due_network" },
        { label: "opendue.com — seed extension & API launch", url: "https://www.opendue.com/blog/due-launches-stablecoin-api-extends-seed-round-to-7-3m-to-empower-businesses-with-borderless-payments-solution" },
        { label: "tech.eu — $7.3M seed extension", url: "https://tech.eu/2025/07/30/due-raises-73m-seed-extension-and-launches-stablecoin-api/" },
      ],
      people: [
        { name: "Robert Sargsian", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/robsargsian" },
        { name: "Alex Popov", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/thunder-tech" },
      ],
    },
  },
  {
    id: "gsx",
    name: "GSX",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Prevail Venture Capital (lead investor)": "https://prevailventurecapital.com",
      "Diacente Group": "https://diacentegroup.com",
      "AKIBA International": "https://akiba-international.com",
      "Canton Network": "https://www.canton.network",
    },
    productLinks: {
      "Stablecoin Studio (issuance, minting, redemption, reserve management)": "https://globalsettlement.com/solutions/stablecoin-studio",
      "CBDC Studio (wholesale and retail central-bank digital currency)": "https://globalsettlement.com/solutions/cbdc-studio",
      "Tokenization Studio (real-world assets)": "https://globalsettlement.com/solutions/tokenization-studio",
      "Cross-border settlement rails": "https://globalsettlement.com/solutions",
      "GSX ID compliance layer (Canton Network)": "https://globalsettlement.com/solutions",
    },
    facts: {
      founded: "2023",
      description:
        "Global Settlement Network (GSX) — Miami-based institutional infrastructure for digital-currency issuance and cross-border settlement: stablecoin issuance with reserve management, tokenization, compliance, and settlement rails for banks, governments, and stablecoin issuers.",
      products: [
        "Stablecoin Studio (issuance, minting, redemption, reserve management)",
        "CBDC Studio (wholesale and retail central-bank digital currency)",
        "Tokenization Studio (real-world assets)",
        "Cross-border settlement rails",
        "GSX ID compliance layer (Canton Network)",
      ],
      funding:
        "Reported $11M pre-seed led by Prevail Venture Capital at a valuation above $100M (May 2026) with Outliers VC, EdgeCase Capital Partners, an a16z scout fund, Ubuntu Group and Liquidus Capital, plus $125M+ in committed (not equity) settlement liquidity including a $100M gold-backed allocation",
      stage:
        "Founded 2023 in Miami by Ryan Kirkley and Kyle Sonlin; entered African markets in 2023 with Uganda as flagship; more than $350M settled on-chain by May 2026, mostly in US-dollar stablecoins; October 2025 partnership with Uganda's Diacente Group on a proposed $5.5B digital-infrastructure project; majority stake in AKIBA International (Apr 2026); Canton Network public validator",
      partners: ["Prevail Venture Capital (lead investor)", "Ubuntu Group", "Diacente Group", "AKIBA International", "Canton Network"],
      tech: [
        "Stablecoin Studio — end-to-end issuance control plane with role-based mint approvals and configurable limits, real-time proof of reserves with automated attestation, and burn-and-settle redemption with full audit trails.",
        "Super-node validators enable native cross-chain settlement without fragile bridge dependencies.",
        "Post-quantum cryptographic primitives, privacy tooling, and a policy firewall supporting sanctions screening and Travel Rule interoperability, aimed at regulated settlement.",
      ],
      links: [
        { label: "Website (official)", url: "https://globalsettlement.com/" },
        { label: "X (Twitter)", url: "https://x.com/GSXnetwork" },
        { label: "globalsettlement.com — Stablecoin Studio", url: "https://globalsettlement.com/solutions/stablecoin-studio" },
        { label: "GlobeNewswire — $11M pre-seed", url: "https://www.globenewswire.com/news-release/2026/5/6/3288851/0/en/global-settlement-network-closes-11m-pre-seed-and-activates-125m-in-settlement-liquidity.html" },
      ],
      people: [
        { name: "Ryan Kirkley", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/ryankirkley" },
        { name: "Kyle Sonlin", role: "Co-founder & President", linkedin: "https://www.linkedin.com/in/kylesonlin" },
      ],
    },
  },
  {
    id: "holyheld",
    name: "Holyheld",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Toyota Ventures (lead investor)": "https://toyota.ventures",
      "TempleDAO": "https://templedao.link",
      "Tomahawk VC": "https://tomahawk.vc",
      "Zee Prime Capital": "https://zeeprime.capital",
      "Polygon Labs": "https://www.polygon.technology",
    },
    productLinks: {
      "USD/EUR business accounts for global companies": "https://business.holyheld.com",
      "BRRR protocol (Blockchain Reconciliation and Remittance Record) — on-chain clearing house across 100+ protocols on 15 chains": "https://holyheld.com/brrr",
      "Stablecoin on-ramp and off-ramp (USDC to IBAN)": "https://holyheld.com/off-ramp",
      "Payments in 180+ countries in local currencies or stablecoins": "https://holyheld.com/",
    },
    facts: {
      founded: "2022",
      description:
        "Holyheld provides USD and EUR business accounts with stablecoin rails — on- and off-ramp, global payments in 180+ countries, and treasury in one account — underpinned by its BRRR protocol, an on-chain clearing house connecting blockchains, stablecoins, payment rails, and card networks.",
      products: [
        "USD/EUR business accounts for global companies",
        "BRRR protocol (Blockchain Reconciliation and Remittance Record) — on-chain clearing house across 100+ protocols on 15 chains",
        "Stablecoin on-ramp and off-ramp (USDC to IBAN)",
        "Payments in 180+ countries in local currencies or stablecoins",
        "Web3 debit card spendable from self-custody wallets; personal SEPA IBAN",
      ],
      funding:
        "Reported undisclosed round announced December 2024 — investors include Toyota Ventures (lead), TempleDAO, Tomahawk VC, Prismatic Capital, Zee Prime Capital, Polygon Labs, Kosmos Ventures, and Moonlanding Ventures",
      stage:
        "Founded 2022 by Anton Mozgovoy (CEO) and Anton Zagorodnikov (CTO), with roots in a consumer crypto-payments app launched around 2019; BRRR protocol launched April 2023 and has orchestrated more than $100M in volume across 100+ protocols on 15 chains; consumer app reached 30 European countries by December 2024; today the business centers on USD/EUR business accounts with stablecoin rails",
      partners: ["Toyota Ventures (lead investor)", "TempleDAO", "Tomahawk VC", "Zee Prime Capital", "Polygon Labs"],
      tech: [
        "BRRR protocol (Blockchain Reconciliation and Remittance Record) — an on-chain clearing house connecting blockchains, stablecoins, payment rails, and card networks, orchestrating $100M+ across 100+ protocols on 15 chains since its April 2023 launch.",
        "Passkey- and passcode-protected sign-in and sensitive actions, with PCI DSS Level 1 compliance and yearly independent security audits.",
      ],
      links: [
        { label: "Website (official)", url: "https://holyheld.com/" },
        { label: "X (Twitter)", url: "https://x.com/holyheld" },
        { label: "Chainwire — funding & BRRR launch (Dec 2024)", url: "https://chainwire.org/2024/12/05/holyheld-raises-funding-to-launch-blockchain-reconciliation-and-remittance-record/" },
        { label: "Toyota Ventures — investment post", url: "https://medium.com/toyota-ventures/a-web3-platform-enabling-frictionless-payments-our-investment-in-holyheld-3d864360ba17" },
      ],
      people: [
        { name: "Anton Mozgovoy", role: "Co-founder & CEO", x: "https://x.com/niarbnotna" },
        { name: "Anton Zagorodnikov", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/anton-zagorodnikov-9b6908130" },
      ],
    },
  },
  {
    id: "inxy-payments",
    name: "INXY Payments",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Flashpoint (lead investor)": "https://flashpoint.capital",
      "SolarStaff (named client, per co-founder's public profile)": "https://www.solarstaff.com",
      "Trafficstars (named client, per co-founder's public profile)": "https://trafficstars.com",
      "PropellerAds (named client, per co-founder's public profile)": "https://propellerads.com",
    },
    productLinks: {
      "Crypto/stablecoin payment gateway — API, hosted checkout, plugins; 20+ cryptos including USDC and DAI (ERC-20/TRC-20/BEP-20/Polygon/Tron/TON)": "https://inxy.io/",
      "Crypto-to-fiat auto-conversion (EUR/USD)": "https://inxy.io/",
      "Mass payouts — batches up to 2,500 addresses": "https://inxy.io/mass-crypto-payouts",
      "Business accounts, IBANs, cards, FX, and treasury on inxy.com": "https://inxy.com",
      "KYB/KYC/KYT, AML, and Travel Rule compliance": "https://inxy.io/",
    },
    facts: {
      founded: "2022",
      description:
        "INXY Payments is a Limassol-based crypto and stablecoin payment gateway — API, hosted checkout, and plugins accepting 20+ cryptocurrencies including USDC and DAI across major chains — with crypto-to-fiat auto-conversion, mass payouts, and KYB/KYC/KYT plus AML compliance; its inxy.com platform adds business accounts, IBANs, cards, FX, and treasury.",
      products: [
        "Crypto/stablecoin payment gateway — API, hosted checkout, plugins; 20+ cryptos including USDC and DAI (ERC-20/TRC-20/BEP-20/Polygon/Tron/TON)",
        "Crypto-to-fiat auto-conversion (EUR/USD)",
        "Mass payouts — batches up to 2,500 addresses",
        "White-label API payment infrastructure",
        "Business accounts, IBANs, cards, FX, and treasury on inxy.com",
        "KYB/KYC/KYT, AML, and Travel Rule compliance",
      ],
      funding:
        "Reported about $7M total — about $3M seed (Jan 2025, Flashpoint with angels) and about $4M more (Apr 2026, Flashpoint again), announced by the company as $7M raised",
      stage:
        "Operating since 2022 (some databases list the launch as June 2021), headquartered in Limassol, Cyprus, with EU and Canada-based operations; serves affiliate marketing, e-commerce, gaming, hosting, freelance, and fintech businesses; processing-volume claims differ widely between third-party (about $500M+/year) and company-reported (about $2B+/year) figures",
      partners: ["Flashpoint (lead investor)", "SolarStaff (named client, per co-founder's public profile)", "Trafficstars (named client, per co-founder's public profile)", "PropellerAds (named client, per co-founder's public profile)"],
      tech: [
        "Mass-payout engine — file or API batch payouts of up to 2,500 addresses in one run, payable from fiat balances with automatic on-the-fly multi-currency conversion.",
        "Multi-chain acceptance across ERC-20, TRC-20, BEP-20, Polygon, Tron, and TON (plus DAI and Bitcoin), with automatic conversion of incoming payments to stablecoins or fiat to limit volatility exposure.",
        "Payout security built on transaction signing with team-permission controls, plus Travel Rule and AML/KYT monitoring integrated into the platform.",
      ],
      links: [
        { label: "Website (official)", url: "https://inxy.io/" },
        { label: "X (Twitter)", url: "https://x.com/inxy_io" },
        { label: "INXY — $7M raise announcement (Apr 2026)", url: "https://www.inxy.io/news/inxy-raises-7m" },
        { label: "Cyprus Mail — $7M coverage", url: "https://cyprus-mail.com/2026/04/06/inxy-raises-7m-to-expand-global-payments-platform" },
      ],
      people: [
        { name: "Serge Kuznetsov", role: "Co-founder & CBDO", linkedin: "https://www.linkedin.com/in/madeitwithserge" },
        { name: "Vad Colcev", role: "Co-founder & Director of Revenue", linkedin: "https://www.linkedin.com/in/vdmclcv" },
      ],
    },
  },
  {
    id: "jeeves",
    name: "Jeeves",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "a16z (Series A lead)": "https://a16z.com",
      "CRV (Series B lead)": "https://www.crv.com",
      "CoinFund ($110M round lead)": "https://www.coinfund.io",
      "Tencent": "https://www.tencent.com",
      "Coinbase Ventures": "https://www.coinbase.com/ventures",
      "GIC": "https://www.gic.com.sg",
    },
    productLinks: {
      "Corporate cards (physical and virtual) with expense and spend management": "https://www.tryjeeves.com/products",
      "Accounts payable, bill pay, and working capital": "https://www.tryjeeves.com/product/expense-management",
      "Cross-border payments and treasury": "https://www.tryjeeves.com/product/global-accounts",
      "Stablecoin wallet with payouts to 190 countries": "https://www.tryjeeves.com/product/jeeves-pay",
      "Stablecoin-enabled card, available in 35 countries": "https://www.tryjeeves.com/products",
    },
    facts: {
      founded: "2020",
      description:
        "Jeeves is a New York-based financial platform for global companies — corporate cards, spend management, bill pay, and cross-border treasury — now scaling a stablecoin-native banking layer with a stablecoin wallet for payouts to 190 countries and a stablecoin-enabled card.",
      products: [
        "Corporate cards (physical and virtual) with expense and spend management",
        "Accounts payable, bill pay, and working capital",
        "Cross-border payments and treasury",
        "Stablecoin wallet with payouts to 190 countries",
        "Stablecoin-enabled card, available in 35 countries",
      ],
      funding:
        "Reported about $378M in equity funding — $5M seed (2020); $26M Series A led by Andreessen Horowitz plus $100M debt financing (Jun 2021); $57M Series B led by CRV at a $500M valuation (Sep 2021, with Tencent and SVB Capital); $180M Series C at a $2.1B valuation (Mar 2022); $110M led by CoinFund (Sep 2026, with AllianceBernstein, a16z, Coinbase Ventures, GIC, ParaFi, Wintermute and Vista)",
      stage:
        "Founded 2020 in New York by Dileep Thazhmon (CEO) and Sherwin Gandhi through Y Combinator; pivoted toward cross-border payments in 2023; September 2026: $110M round led by CoinFund, stablecoin wallet launch with payouts to 190 countries, stablecoin card expansion from 25 to 35 countries, Mexico revenue more than doubled year over year (company-reported), and a planned Madrid office",
      partners: ["a16z (Series A lead)", "CRV (Series B lead)", "CoinFund ($110M round lead)", "Tencent", "Coinbase Ventures", "GIC"],
      tech: [
        "Proprietary stablecoin wallet (launched September 2026) with instant payouts to 190 countries.",
        "Stablecoin-enabled corporate card and spend management platform expanded from 25 to 35 countries, covering nearly every market in Central and South America.",
        "Corporate cards, accounts payable, and treasury payments run on stablecoin rails the company says settle in minutes instead of days; company-reported stablecoin volume grew from roughly zero to $1.5B annualized in eight months.",
      ],
      links: [
        { label: "Website (official)", url: "https://www.tryjeeves.com/" },
        { label: "X (Twitter)", url: "https://x.com/tryjeeves" },
        { label: "PRNewswire — $110M round (Sep 2026)", url: "https://www.prnewswire.com/news-releases/jeeves-raises-110-million-equity-round-to-scale-its-stablecoin-native-banking-platform-for-global-enterprises-across-35-countries-302892811.html" },
        { label: "Bloomberg — $110M raise coverage", url: "https://www.bloomberg.com/news/articles/2026-09-29/jeeves-raises-110-million-from-a16z-coinbase-for-crypto-push" },
      ],
      people: [
        { name: "Dileep Thazhmon", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/thazhmon" },
        { name: "Sherwin Gandhi", role: "Co-founder", linkedin: "https://www.linkedin.com/in/sherwingandhi" },
      ],
    },
  },
  {
    id: "keyrails",
    name: "Keyrails",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard (Stablecoin Security initial partner; Start Path program)": "https://www.mastercard.com",
      "Borderless.xyz (co-partner on Mastercard Stablecoin Security)": "https://borderless.xyz",
      "Circle (Alliance Program)": "https://www.circle.com",
      "DFNS": "https://dfns.co",
      "212.VC (backer)": "https://212.vc",
    },
    productLinks: {
      "Stable OS — institutional stablecoin payments and treasury platform": "https://keyrails.com/",
      "High-value payouts to 200+ countries with stablecoin-to-fiat settlement into local banks and RTGS systems": "https://keyrails.com/",
      "USD virtual accounts (Fedwire/ACH/SWIFT) with its own SWIFT BIC (KEYRCA62)": "https://keyrails.com/",
      "Institutional FX and liquidity, plus payment financing for $100k+ rolling USD facilities repaid in 1–4 days": "https://keyrails.com/",
      "Stable OS 2.0 — one wire instruction across 100+ markets, 75+ currencies, 450+ nostro accounts (May 2026)": "https://keyrails.com/",
    },
    facts: {
      founded: "2023",
      description:
        "Keyrails builds Stable OS, an institutional stablecoin payments and treasury platform — high-value payouts to 200+ countries, stablecoin-to-fiat settlement into local banks and RTGS systems, and institutional FX — with its own SWIFT BIC and USD virtual accounts.",
      products: [
        "Stable OS — institutional stablecoin payments and treasury platform",
        "High-value payouts to 200+ countries with stablecoin-to-fiat settlement into local banks and RTGS systems",
        "USD virtual accounts (Fedwire/ACH/SWIFT) with its own SWIFT BIC (KEYRCA62)",
        "Institutional FX and liquidity, plus payment financing for $100k+ rolling USD facilities repaid in 1–4 days",
        "Stable OS 2.0 — one wire instruction across 100+ markets, 75+ currencies, 450+ nostro accounts (May 2026)",
      ],
      funding:
        "No disclosed funding amounts — backers include 212.VC (first invested 2024), Kalkınma Girişim Sermayesi, Neo Portföy (Perge fund), and Cloudberry Pioneer Investments",
      stage:
        "Founded 2023 by Berhan Kongel (CEO) and Rajpal Khangura (CCO), operating across Calgary, London, and a UK-Delaware entity (some sources say 2022); joined Mastercard's Start Path Blockchain and Digital Assets program in 2025; Stable OS 2.0 launched May 2026; October 2026: initial partner for Mastercard Stablecoin Security alongside Borderless.xyz, launching first in North America with wider availability planned for 2027; Circle Alliance Program member; no official X (Twitter) account is linked from keyrails.com as of November 2026",
      partners: ["Mastercard (Stablecoin Security initial partner; Start Path program)", "Borderless.xyz (co-partner on Mastercard Stablecoin Security)", "Circle (Alliance Program)", "DFNS", "212.VC (backer)"],
      tech: [
        "Operates its own SWIFT BIC (KEYRCA62) — stablecoin-to-fiat SWIFT rails that clear locally and settle directly into local RTGS systems with no additional intermediaries; company-reported average of 56m 23s across its last 500 USD payments to China.",
        "Stable OS 2.0 (May 2026) — a single wire instruction across 100+ markets and 75+ currencies, spanning 450+ nostro accounts for emerging-market trade payments.",
        "FX rate locked at instruction — institutional liquidity booked on Keyrails' own credit lines the moment an instruction is approved, removing slippage between quote and execution.",
        "Initial partner for Mastercard Stablecoin Security (October 2026), bringing combined payment and blockchain risk intelligence to high-value cross-border trade payments.",
      ],
      links: [
        { label: "Website (official)", url: "https://keyrails.com/" },
        { label: "PRNewswire — Stable OS 2.0 RTGS network (May 2026)", url: "https://www.prnewswire.com/news-releases/one-wire-instruction-across-75-currencies-keyrails-unveils-worlds-biggest-3rd-party-rtgs-network-for-emerging-markets-302770118.html" },
        { label: "Mastercard — Stablecoin Security release (Oct 2026)", url: "https://www.mastercard.com/us/en/news-and-trends/press/2026/october/Mastercard-brings-risk-intelligence-to-stablecoin-payments.html" },
        { label: "212.vc — Keyrails", url: "https://212.vc/keyrails" },
      ],
      people: [
        { name: "Berhan Kongel", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/berhankongel" },
        { name: "Rajpal Khangura", role: "Co-founder & CCO", linkedin: "https://www.linkedin.com/in/rajpal-khangura-cams-cci-6a784a159" },
      ],
    },
  },
  {
    id: "limited",
    name: "Limited",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "North Island Ventures (seed lead)": "https://northisland.ventures",
      "Third Prime": "https://www.thirdprime.vc",
      "ParaFi Capital": "https://www.parafi.capital",
      "Digital Currency Group": "https://www.dcg.co",
      "1982 Ventures": "https://www.1982.vc",
    },
    productLinks: {
      "Local business accounts (US, EU, UK, LatAm)": "https://www.limitedapp.com/en/products/banking",
      "Cross-border and intercompany payments in 60+ currencies across 300+ rails (ACH, wire, SWIFT, SEPA, SPEI, Pix, Faster Payments, Alipay, WeChat Pay, blockchains)": "https://www.limitedapp.com/en/products/banking",
      "Stablecoin accounts (USDC, USDT, EURC) on fiat rails": "https://www.limitedapp.com/en/products/banking",
      "Corporate cards (physical and virtual, Visa) with bill pay and spend controls": "https://www.limitedapp.com/en/products/cards",
      "Accounting integrations and treasury": "https://www.limitedapp.com/en/products/accounting",
    },
    facts: {
      founded: "2024",
      description:
        "Limited is a San Francisco-based global business financial OS for multinationals — local business accounts across the US, EU, UK, and LatAm, cross-border and intercompany payments in 60+ currencies, and stablecoin accounts (USDC, USDT, EURC) running on more than 300 fiat and blockchain rails.",
      products: [
        "Local business accounts (US, EU, UK, LatAm)",
        "Cross-border and intercompany payments in 60+ currencies across 300+ rails (ACH, wire, SWIFT, SEPA, SPEI, Pix, Faster Payments, Alipay, WeChat Pay, blockchains)",
        "Stablecoin accounts (USDC, USDT, EURC) on fiat rails",
        "Corporate cards (physical and virtual, Visa) with bill pay and spend controls",
        "Accounting integrations and treasury",
      ],
      funding:
        "Reported $3M pre-seed (Feb 2025); $7M seed led by North Island Ventures (Jun 2025, with Third Prime, Arche Capital, Collab+Currency, and SevenX); seed expanded to $18.5M total (Sep 2026, Third Prime preempting, with The House Fund, ParaFi Capital, Pharsalus Capital, Digital Currency Group, 1982 Ventures, and Onigiri Capital joining) — the $18.5M is the cumulative expanded seed, not all-new money",
      stage:
        "Founded 2024 in San Francisco by Hussein Ahmed, previously founder of Oxygen; product launched less than 10 months before the September 2026 seed expansion to $18.5M; coverage figures range from about 158 to 176 countries depending on source; hiring across go-to-market, operations, and compliance",
      partners: ["North Island Ventures (seed lead)", "Third Prime", "ParaFi Capital", "Digital Currency Group", "1982 Ventures"],
      tech: [
        "Self-custody-first architecture — US and EU bank accounts with automatic conversion to self-custodial stablecoins, so businesses keep control of funds while using premium banking services.",
        "Automatic chain and token detection when sending crypto — verifies addresses to prevent misdirected transfers and screens wallets for suspicious or flagged activity.",
        "Receiving support across 50+ chains and tokens (ETH, SOL, Base, Polygon, and more) with one address per user across supported chains.",
      ],
      links: [
        { label: "Website (official)", url: "https://www.limitedapp.com/" },
        { label: "X (Twitter)", url: "https://x.com/limitedgrouphq" },
        { label: "BusinessWire — $7M seed (Jun 2025)", url: "https://www.businesswire.com/news/home/20250602078345/en/LIMITED-Raises-%247-Million-Seed-Round-to-Scale-Global-Stablecoin-Banking-Platform" },
        { label: "Gunderson Dettmer — $18.5M expanded seed (Sep 2026)", url: "https://gc.gunder.com/en/news-insights/client-news/limited-raises-dollar185-million-seed" },
      ],
      people: [
        { name: "Hussein Ahmed", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/husseinahmed" },
      ],
    },
  },
  {
    id: "mesh",
    name: "Mesh",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "PayPal": "https://www.paypal.com",
      "Revolut": "https://www.revolut.com",
      "Deel": "https://www.deel.com",
      "Shift4": "https://www.shift4.com",
      "MetaMask": "https://metamask.io",
      "Visa": "https://www.visa.com",
    },
    productLinks: {
      "Deposit, payment, and payout APIs connecting exchanges, wallets, and financial platforms": "https://www.meshpay.com/payments",
      "Stablecoin checkout and smart funding": "https://www.meshpay.com/payments",
      "Mesh Protect (risk and reconciliation layer)": "https://www.meshpay.com/security",
      "Asset transfers across wallets, chains, and custodians": "https://www.meshpay.com/on-off-ramps",
    },
    facts: {
      founded: "2020",
      description:
        "Mesh is a San Francisco-based global crypto payments network that connects exchanges, wallets, and financial platforms — deposit, payment, and payout APIs, stablecoin checkout, and asset transfers across wallets and chains — with customers including PayPal, Revolut, Deel, and Shift4.",
      products: [
        "Deposit, payment, and payout APIs connecting exchanges, wallets, and financial platforms",
        "Stablecoin checkout and smart funding",
        "Mesh Protect (risk and reconciliation layer)",
        "Asset transfers across wallets, chains, and custodians",
      ],
      funding:
        "Reported more than $200M total — $22M Series A led by Money Forward (Sep 2023, taking cumulative funding to $32M); $82M Series B led by Paradigm (Mar 2025, with Consensys, QuantumLight, and Yolo, largely settled in PYUSD); $75M Series C led by Dragonfly at a $1B valuation (Jan 2026, with Paradigm, Moderne, Coinbase Ventures, SBI Investment, and Liberty City Ventures)",
      stage:
        "Founded 2020 in San Francisco by Bam Azizi (CEO), previously founder of NoPassword (acquired by LogMeIn), and Adam Israel (CCO), an ex-HSBC managing director; partner network reached 400M+ users across 100+ countries in 2025, with a claimed 900 million users worldwide by October 2026 (CB Insights announcement); became a unicorn with the January 2026 Series C and is expanding into LatAm, Asia, and Europe",
      partners: ["PayPal", "Revolut", "Deel", "Shift4", "MetaMask", "Visa"],
      tech: [
        "Deposit APIs connect 300+ exchanges and wallets (Coinbase, Binance, Robinhood, MetaMask, Phantom, Trust Wallet, Ledger); before funds move, Mesh verifies ownership — self-custody users sign a one-time challenge message, exchange accounts connect authenticated — and validates asset and network (Source: https://www.meshpay.com/deposits)",
        "SmartFunding orchestration combines up to five funding sources into a single transaction, converting held assets so the merchant receives exactly the configured settlement asset (Source: https://www.meshpay.com/payments)",
        "Supports 34 blockchain networks across EVM-compatible chains, Solana, Tron, Aptos, and Sui, with USDC/USDT coverage across major chains (Source: https://docs.meshconnect.com/resources/supported-tokens)",
        "Formalized USDC settlement across the Mesh ecosystem with Circle (April 2026) and launched the Mesh Alliance Program (MAP), an interoperability standard for digital money (Source: https://www.meshpay.com/press-releases/mesh-expands-usdc-settlement-circle)",
      ],
      metrics: [
        "Global user reach: 900M+ across connected platforms (as of October 2026, Mesh press release)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.meshpay.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/meshpay",
        },
        {
          label: "Mesh — USDC settlement across the Mesh ecosystem with Circle (Apr 2026)",
          url: "https://www.meshpay.com/press-releases/mesh-expands-usdc-settlement-circle",
        },
        {
          label: "Mesh docs — supported networks and tokens (34 chains)",
          url: "https://docs.meshconnect.com/resources/supported-tokens",
        },
      ],
      people: [
        { name: "Bam Azizi", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/bam-azizi-54117310a" },
        { name: "Adam Israel", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/adam-michael-israel" },
      ],
    },
  },
  {
    id: "mural-pay",
    name: "Mural Pay",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Tether (Series A lead)": "https://tether.to",
      "Deel": "https://www.deel.com",
      "Opera": "https://www.opera.com",
      "Galaxy (seed investor)": "https://www.galaxy.com",
      "Digital Currency Group (seed investor)": "https://www.dcg.co",
    },
    productLinks: {
      "Unified accounts spanning USD, stablecoins, and local currencies": "https://www.muralpay.com/product#receive",
      "Stablecoin FX, conversion, and cross-border enterprise payments API": "https://www.muralpay.com/product#convert",
      "Local-currency payouts, payroll, and remittance workflows": "https://www.muralpay.com/product#send",
      "Identity, permissions, and policy controls": "https://www.muralpay.com/product#comply",
      "Agentic finance — payment rails for AI agents": "https://www.muralpay.com/product#grow",
    },
    facts: {
      founded: "2022",
      description:
        "Mural (formerly Mural Pay) is a New York-based API payments and account infrastructure provider — stablecoin FX and conversion, cross-border enterprise payments, and local-currency payouts through unified accounts holding USD, stablecoins, and local currencies — now extending payment rails to agentic finance for AI-driven businesses.",
      products: [
        "Unified accounts spanning USD, stablecoins, and local currencies",
        "Stablecoin FX, conversion, and cross-border enterprise payments API",
        "Local-currency payouts, payroll, and remittance workflows",
        "Identity, permissions, and policy controls",
        "Agentic finance — payment rails for AI agents",
      ],
      funding:
        "Reported $28M total — $5.6M seed (Aug 2022, with Galaxy, Digital Currency Group, Firstminute Capital, and 1186 Ventures); $15M Series A led by Tether (Oct 2026, with North Island Ventures and existing investors)",
      stage:
        "Founded 2022 in New York by former Palantir engineers Sinclair Toffa (CEO) and Chris Fernandes (CTO/COO); API launched in 2025; $2.1B processed for end users across 128 countries by October 2026, with 2026 year-to-date volume about six times all of 2025; rebranded from Mural Pay to Mural in 2026",
      partners: ["Tether (Series A lead)", "Deel", "Opera", "Galaxy (seed investor)", "Digital Currency Group (seed investor)"],
      tech: [
        "Unified account ledger holds fiat and stablecoin balances side by side — USDC on Polygon, USD, EUR, and more — exposed through one API (Source: https://developers.muralpay.com/docs/account)",
        "Multi-rail funding into a single account: stablecoin wallet transfers plus ACH/wire (USD), SEPA Instant (EUR), PIX (BRL), SPEI (MXN), and PSE/Nequi (COP) (Source: https://developers.muralpay.com/docs/account)",
        "Three custody models — Mural custody, end-user custody, and developer custody — with role-scoped permissions, transaction limits, approvals, and audit trails (Source: https://www.muralpay.com/)",
        "Agentic finance rails for AI agents via an MCP server, with spending limits, approved counterparties, and per-action audit trails (Source: https://www.prnewswire.com/news-releases/mural-raises-28-million-total-to-power-fintechs-and-agentic-finance-302914128.html)",
      ],
      metrics: [
        "Payment volume processed: $2.1B for end users across 128 countries (as of October 2026, Mural announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.muralpay.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/mural_pay",
        },
        {
          label: "Mural — developer documentation (accounts, funding, custody)",
          url: "https://developers.muralpay.com/docs/account",
        },
        {
          label: "Mural — $28M raised to power fintechs and agentic finance (Oct 2026)",
          url: "https://www.muralpay.com/blog/28-million-raised",
        },
      ],
      people: [
        { name: "Sinclair Toffa", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/sinclairtoffa" },
        { name: "Chris Fernandes", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/fernandeschristopher" },
      ],
    },
  },
  {
    id: "nium",
    name: "Nium",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Mastercard": "https://www.mastercard.com",
      "Circle (Circle Payments Network)": "https://www.circle.com",
      "Fiserv": "https://www.fiserv.com",
      "SWIFT": "https://www.swift.com",
      "Deel (customer)": "https://www.deel.com",
      "Singtel (customer)": "https://www.singtel.com",
      "Amadeus (customer)": "https://amadeus.com/en",
    },
    productLinks: {
      "One-API global payments platform with payouts to 190+ countries": "https://www.nium.com/products/cross-border-payouts",
      "Pay-ins, collections, and multi-currency accounts in 100+ currencies": "https://www.nium.com/products/multi-currency-accounts",
      "Card issuing — Visa/Mastercard physical and virtual": "https://www.nium.com/products/physical-and-virtual-cards",
      "Stablecoin payouts and stablecoin-linked cards across Visa/Mastercard networks": "https://www.nium.com/products/stablecoin-payouts",
      "Payroll, FX and treasury, and embedded payments/BaaS": "https://www.nium.com/products/global-fx",
    },
    facts: {
      founded: "2014",
      description:
        "Nium (formerly InstaReM) is a Singapore-based one-API global payments platform — payouts to 190+ countries, pay-ins and collections, multi-currency accounts, and card issuing — that has added stablecoin payouts and stablecoin-linked cards across the Visa and Mastercard networks.",
      products: [
        "One-API global payments platform with payouts to 190+ countries",
        "Pay-ins, collections, and multi-currency accounts in 100+ currencies",
        "Card issuing — Visa/Mastercard physical and virtual",
        "Stablecoin payouts and stablecoin-linked cards across Visa/Mastercard networks",
        "Payroll, FX and treasury, and embedded payments/BaaS",
      ],
      funding:
        "Reported about $338M disclosed — $500k seed (Jan 2015, Global Founders Capital); $5M Series A (2016, Vertex SEA and India, Fullerton Financial Holdings); $13M Series B (2017, GSR Ventures, SBI-FMO); Series C above $20M (2018) plus a $21M extension (2019); above $20M strategic round with BRI Ventures and Visa (2020); $200M Series D with Temasek, Visa, Vertex, NewView Capital, Tribe, Atinum, and Moore Strategic (Jul 2021); $50M Series E led by Brunei Investment Agency (Jun 2024)",
      stage:
        "Founded 2014 in Singapore by Prajit Nanu (CEO) and Michael Bermingham as InstaReM, a consumer remittances service, and rebranded to Nium in 2019; reached about a $1B valuation with the July 2021 Series D (about $2B on 2022 extensions per market databases); Series E followed in June 2024; today 190+ countries, 100+ currencies, 40+ licensed jurisdictions, and 1,000+ customers",
      partners: ["Visa", "Mastercard", "Circle (Circle Payments Network)", "Fiserv", "SWIFT", "Deel (customer)", "Singtel (customer)", "Amadeus (customer)"],
      tech: [
        "Dual-network stablecoin card-issuing platform (March 2026): one API issues Visa and Mastercard cards funded from stablecoin balances, with point-of-sale crypto-to-fiat conversion, per-entity ledgers, and processing-layer spend controls (Source: https://www.nium.com/newsroom/nium-launched-stablecoin-card-issuance-platform)",
        "Circle Payments Network partner: receives USDC settlement from CPN and delivers last-mile payouts through local rails across 190+ countries and 100 currencies (Source: https://www.nium.com/blog/nium-circle-payments-network-cpn)",
        "USDC funding (August 2026): businesses fund payment activity directly from stablecoin balances, reducing trapped pre-funded liquidity (Source: https://www.nium.com/newsroom/nium-launched-stablecoin-card-issuance-platform)",
      ],
      metrics: [
        "Payments processed: $84B over the last 12 months (as of 2026, nium.com)",
        "Card credentials issued: 45M+ (2025, Nium corporate metrics)",
        "Cross-border payments with Relay: $500M in the first year (as of October 2026, Nium newsroom)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.nium.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/NiumGlobal",
        },
        {
          label: "Nium — stablecoin card-issuance platform (Mar 2026)",
          url: "https://www.nium.com/newsroom/nium-launched-stablecoin-card-issuance-platform",
        },
        {
          label: "Nium — Circle Payments Network partner",
          url: "https://www.nium.com/blog/nium-circle-payments-network-cpn",
        },
      ],
      people: [
        { name: "Prajit Nanu", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/prajitnanu" },
        { name: "Mike Bermingham", role: "Co-founder & CBO", linkedin: "https://www.linkedin.com/in/mike-bermingham-91671b23" },
      ],
    },
  },
  {
    id: "noah",
    name: "Noah",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (strategic alliance)": "https://www.circle.com",
      "Paxos (strategic alliance)": "https://www.paxos.com",
      "LocalGlobe (seed lead)": "https://www.phoenixcourt.vc/funds/localglobe",
      "Endeit Capital": "https://www.endeit.com",
      "FJ Labs": "https://www.fjlabs.com",
    },
    productLinks: {
      "Payin — named virtual accounts, local transfers and SWIFT, converting into stablecoins": "https://noah.com/products/payin",
      "Payout — stablecoins to 60+ fiat currencies via bank transfers, Mercado Pago, and mobile money": "https://noah.com/products/payout",
      "Orchestrate — rule-based payment automation": "https://noah.com/products/orchestration",
      "Built-in compliance across rails including PIX, SPEI, M-Pesa, Faster Payments, and UPI": "https://noah.com/",
    },
    facts: {
      founded: "2020",
      description:
        "Noah is a London-based stablecoin payments platform for businesses — named virtual accounts and local transfers that convert into stablecoins, and stablecoin payouts into 60+ fiat currencies via bank transfers, Mercado Pago, and mobile money, with rule-based payment orchestration and built-in compliance.",
      products: [
        "Payin — named virtual accounts, local transfers and SWIFT, converting into stablecoins",
        "Payout — stablecoins to 60+ fiat currencies via bank transfers, Mercado Pago, and mobile money",
        "Orchestrate — rule-based payment automation",
        "Built-in compliance across rails including PIX, SPEI, M-Pesa, Faster Payments, and UPI",
      ],
      funding:
        "Reported $38M total seed — $22M seed led by LocalGlobe (Jun 2025, with Felix Capital, FJ Labs, and angels including Joe Lonsdale, David Helgason, and Tom Stafford); $16M seed extension (Oct 2026, with Endeit Capital, FJ Labs, LocalGlobe, and Felix Capital)",
      stage:
        "Founded 2020 in London by Shah Ramezani (CEO; previously The Hut Group Asia, Kingsway, Lazard, UBS) and Thijn Lamers (President; Adyen founding team and ex-EVP global sales); strategic alliances with Circle and Paxos in 2025; grew from 70+ countries and 50 currencies in 2025 to 150+ markets and 60+ currencies by October 2026, adding 150+ customers with revenue up 538% year over year (company-reported) and a New York office planned",
      partners: ["Circle (strategic alliance)", "Paxos (strategic alliance)", "LocalGlobe (seed lead)", "Endeit Capital", "FJ Labs"],
      tech: [
        "Named virtual accounts in USD, EUR, and GBP that receive via ACH, Fedwire, SEPA, FPS, and SWIFT, then convert into stablecoins delivered to a wallet or held in Noah's treasury layer (Source: https://noah.com/)",
        "Stablecoin payouts into 60+ fiat currencies through local bank transfers and alternative rails including PIX, M-Pesa, UPI, SPEI, Mercado Pago, and mobile money, with rule-based automation and audit controls (Source: https://noah.com/)",
        "Bitget Wallet integration (October 2026): virtual USD and EUR accounts for Bitget Wallet's 100M users, with funds received into self-custodial wallets (Source: https://noah.com/blog/noah-bitgetwallet-partnership)",
        "Selected by Western Union (October 2026) to power its global stablecoin payments network across 200+ countries and territories (Source: https://noah.com/blog/noah-bitgetwallet-partnership)",
      ],
      metrics: [
        "Markets covered: 150+ (as of October 2026, Noah funding announcement)",
        "Payout currencies: 60+ (as of October 2026, Noah funding announcement)",
        "Revenue growth: 538% year to date vs 2025 (as of October 2026, Noah funding announcement, company-reported)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://noah.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Noah_HQ",
        },
        {
          label: "Noah — Bitget Wallet partnership (Oct 2026)",
          url: "https://noah.com/blog/noah-bitgetwallet-partnership",
        },
        {
          label: "Noah — $22M seed round",
          url: "https://noah.com/blog/22m-seed-round",
        },
      ],
      people: [
        { name: "Shah Ramezani", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/shahramezani" },
      ],
    },
  },
  {
    id: "payoneer",
    name: "Payoneer",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "eBay": "https://www.ebay.com",
      "Amazon": "https://www.amazon.com",
      "Airbnb": "https://www.airbnb.com",
      "Google": "https://www.google.com",
      "Upwork": "https://www.upwork.com",
      "Walmart": "https://www.walmart.com",
    },
    productLinks: {
      "Multi-currency receiving accounts and cross-border transfers": "https://www.payoneer.com/receiving-accounts/",
      "Marketplace and platform mass payouts": "https://www.payoneer.com/batch-payments/",
      "Payoneer Checkout for e-commerce": "https://www.payoneer.com/checkout/",
      "Working capital advances and corporate cards with expense management": "https://www.payoneer.com/cash-flow-and-capital/",
      "Workforce payments and EOR via Skuad, plus tax solutions": "https://www.payoneer.com/workforce-management/",
    },
    facts: {
      founded: "2005",
      description:
        "Payoneer is a New York-based global financial technology company powering cross-border B2B payments — multi-currency receiving accounts, mass payouts for marketplaces and platforms, working capital, checkout, and corporate cards — for businesses in 190+ countries and 70+ currencies.",
      products: [
        "Multi-currency receiving accounts and cross-border transfers",
        "Marketplace and platform mass payouts",
        "Payoneer Checkout for e-commerce",
        "Working capital advances and corporate cards with expense management",
        "Workforce payments and EOR via Skuad, plus tax solutions",
      ],
      funding:
        "Reported about $234M of private funding before listing — $2M seed (2005); $4M round led by 83North (2007); $180M from TCV (2016) — plus a $300M PIPE alongside the 2021 Nasdaq listing from Dragoneer, Fidelity, and Franklin Templeton",
      stage:
        "Founded 2005 by Yuval Tal; acquisitions include Armor Payments (2016), Optile (2019), Spott (2023), Skuad for about $61M (2024), and Boundless EOR (2026); listed on Nasdaq as PAYO on June 28, 2021 via merger with FTAC Olympus Acquisition Corp. at about a $3.3B enterprise value; about $80B annual volume in 2024 and its 20th anniversary in 2025; on June 15, 2026, Payoneer agreed to be acquired by Nuvei for $7.40 per share (about $2.75B), with closing expected in mid-2027 pending approvals",
      partners: ["Mastercard", "eBay", "Amazon", "Airbnb", "Google", "Upwork", "Walmart"],
      tech: [
        "Stablecoin capabilities powered by Bridge (announced February 2026): businesses can receive, hold, and send stablecoins with conversion or withdrawal to local bank accounts, with initial rollout in selected markets from Q2 2026 (Source: https://www.payoneer.com/press/payoneer-to-launch-stablecoin-capabilities-powered-by-bridge-bringing-secure-always-on-digital-money-to-global-businesses/)",
        "Applied to the OCC (February 2026) for a de novo national trust bank charter — PAYO Digital Bank, N.A. — supporting a stablecoin strategy reported to include issuing its own PAYO-USD stablecoin (Source: https://www.payoneer.com/press/payoneer-to-launch-stablecoin-capabilities-powered-by-bridge-bringing-secure-always-on-digital-money-to-global-businesses/)",
      ],
      metrics: [
        "Annual payment volume: $87.5B (FY 2025, Form 10-K)",
        "Revenue: $1.05B (FY 2025, Form 10-K)",
        "Public float (market value held by non-affiliates): $2.02B (as of June 30, 2025, Form 10-K)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.payoneer.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Payoneer",
        },
        {
          label: "Payoneer — stablecoin capabilities powered by Bridge (Feb 2026)",
          url: "https://www.payoneer.com/press/payoneer-to-launch-stablecoin-capabilities-powered-by-bridge-bringing-secure-always-on-digital-money-to-global-businesses/",
        },
        {
          label: "Payoneer — FY2025 Form 10-K",
          url: "https://www.sec.gov/Archives/edgar/data/1845815/000110465926020487/payo-20251231x10k.htm",
        },
      ],
      people: [
        { name: "Yuval Tal", role: "Founder", linkedin: "https://www.linkedin.com/in/yuvaltal" },
        { name: "John Caplan", role: "CEO", linkedin: "https://www.linkedin.com/in/johncaplan3000" },
      ],
    },
  },
  {
    id: "rise",
    name: "Rise",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (official partner)": "https://www.circle.com",
      "Mercury": "https://mercury.com",
      "Kast": "https://www.kast.xyz",
      "Pulley": "https://pulley.com",
      "Darien Advisors": "https://darienadvisors.co",
      "Lido DAO (customer)": "https://lido.fi",
      "Bitcoin.com (customer)": "https://bitcoin.com",
    },
    productLinks: {
      "Global payroll for contractors and employees, paid in fiat, stablecoins, or crypto": "https://www.riseworks.io/products/direct-payroll",
      "EOR/AOR employment and agency-of-record services": "https://www.riseworks.io/products/employer-of-record",
      "Stablecoin-funded payroll with local-currency or crypto withdrawal": "https://www.riseworks.io/products/stablecoin-payroll",
      "Local payouts, compliance, and tax across 190+ countries": "https://www.riseworks.io/solutions/for-legal-and-compliance",
    },
    facts: {
      founded: "2019",
      description:
        "Rise is a New York-based global payroll platform — payroll, EOR/AOR, and contractor payments in fiat, stablecoins, or crypto — with stablecoin-funded payroll on smart-contract rails and local payouts in 100+ countries.",
      products: [
        "Global payroll for contractors and employees, paid in fiat, stablecoins, or crypto",
        "EOR/AOR employment and agency-of-record services",
        "Stablecoin-funded payroll with local-currency or crypto withdrawal",
        "Smart-contract payment rails — Arbitrum primary, plus Ethereum, Optimism, Polygon, Avalanche",
        "Local payouts, compliance, and tax across 190+ countries",
      ],
      funding:
        "Reported about $10M total — undisclosed seed (Ryze Labs, Polymorphic Capital, HashKey Capital, Draper Associates, WWVentures, P2P.org, Paradigm Shift Capital); $6.3M Series A led by Draper Associates and co-led by Polymorphic Capital (Nov 2024, with Digital Currency Group, JAM Fund, and Ryze Labs)",
      stage:
        "Venture begun 2019 in New York by Hugo Finkelstein (CEO) and Andrew Maurer (CTO), with the platform launched in 2022; more than $30M payroll volume by the end of 2023 with customers including Lido DAO, Bitcoin.com, and Velodrome; 150+ customers and 100k+ contractors at Series A; $1B in cumulative borderless payroll by June 2025; Circle partnership announced November 2025 making USDC central to payroll An official X/Twitter handle could not be verified as of November 2026, so no X link is included.",
      partners: ["Circle (official partner)", "Mercury", "Kast", "Pulley", "Darien Advisors", "Lido DAO (customer)", "Bitcoin.com (customer)"],
      tech: [
        "Stablecoin payroll built natively in-house, running primarily on USDC over Arbitrum with worker withdrawals also on Ethereum, Optimism, Base, and Polygon — payroll funded once in USD, USDC, or USDT, with each worker choosing payout currency and network (Source: https://www.riseworks.io/products/stablecoin-payroll)",
        "Official Circle partnership integrates USDC across every Rise product (AOR, EOR, global contractor payroll), with onchain payment records (Source: https://partners.circle.com/partner/rise)",
        "Publishes quarterly stablecoin payroll reports with corridor-level on-chain data — Q1 2026: $1,372,939,170 lifetime payroll processed, with Arbitrum the dominant payout chain across tracked withdrawal corridors (Source: https://www.riseworks.io/blog/q1-2026-stablecoin-payroll-report)",
      ],
      metrics: [
        "Lifetime payroll processed: $1,372,939,170 (as of Q1 2026, Rise Stablecoin Payroll Report)",
        "Stablecoin share of worker withdrawals: 50%+ (as of 2026, Rise)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.riseworks.io/",
        },
        {
          label: "Rise — Q1 2026 Stablecoin Payroll Report",
          url: "https://www.riseworks.io/blog/q1-2026-stablecoin-payroll-report",
        },
        {
          label: "Rise — Stablecoin payroll product",
          url: "https://www.riseworks.io/products/stablecoin-payroll",
        },
        {
          label: "Rise — Circle partner listing",
          url: "https://partners.circle.com/partner/rise",
        },
      ],
      people: [
        { name: "Hugo Finkelstein", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/hugo-finkelstein" },
        { name: "Andrew Maurer", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/andrew-maurer-dotme" },
      ],
    },
  },
  {
    id: "tazapay",
    name: "Tazapay",
    categoryId: "b2b-payments",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (acquirer; Series B extension lead; CPN design partner)": "https://www.circle.com",
      "Standard Chartered (global partnership)": "https://www.sc.com/en/",
      "Ripple (investor)": "https://ripple.com",
      "Peak XV (investor)": "https://peakxv.com",
      "IndiaMART (customer)": "https://www.indiamart.com",
      "BrightCHAMPS (customer)": "https://brightchamps.com",
    },
    productLinks: {
      "Cross-border B2B collections and payouts over local payment methods in 100+ markets, with card acceptance in 170+": "https://tazapay.com/payouts",
      "Escrow and Escrow-as-a-Service with buyer protection": "https://tazapay.com/buyer-protection",
      "Checkout and payment links": "https://tazapay.com/payment-gateway",
      "Virtual accounts and multi-currency settlement": "https://tazapay.com/global-accounts",
      "Stablecoin settlement rails": "https://tazapay.com/stable-coin",
    },
    facts: {
      founded: "2020",
      description:
        "Tazapay is a Singapore-based cross-border B2B payments platform — collections and payouts over local rails in 100+ markets, escrow with buyer protection, virtual accounts, and newer stablecoin settlement rails — which Circle signed an agreement to acquire in September 2026.",
      products: [
        "Cross-border B2B collections and payouts over local payment methods in 100+ markets, with card acceptance in 170+",
        "Escrow and Escrow-as-a-Service with buyer protection",
        "Checkout and payment links",
        "Virtual accounts and multi-currency settlement",
        "Stablecoin settlement rails",
      ],
      funding:
        "Reported $16.9M Series A plus a $36M Series B total — undisclosed seed (Foundamental, January Capital, RTP Global, Saison Capital); $16.9M Series A led by Sequoia Capital Southeast Asia (Feb 2023, with EscapeVelocity, PayPal Alumni Fund, and angel Gokul Rajaram); Series B (Aug 2025, with Peak XV, Ripple, Circle Ventures, Norinchukin Capital, and GMO VenturePartners, amount unstated); Series B extension led by Circle Ventures (Mar 2026, with CMT Digital and Coinbase Ventures) bringing the Series B to $36M",
      stage:
        "Founded April 2020 in Singapore by Arul Kumaravel, Rahul Shinghal, and Saroj Mishra; Standard Chartered global partnership (2024) accepting in 70+ markets with 170 onboarding; 1,000+ enterprises and fintechs across 30 countries with revenue doubling three consecutive years; early Circle Payments Network design partner (2025); at the September 8, 2026 acquisition announcement: about $25B annualized volume with more than 60% involving stablecoins, 100+ payout markets, 60+ banking and fintech partners, and licences in Singapore, the US, Canada, Australia, and Hong Kong; closing expected in 2027 pending approvals including MAS",
      partners: ["Circle (acquirer; Series B extension lead; CPN design partner)", "Standard Chartered (global partnership)", "Ripple (investor)", "Peak XV (investor)", "IndiaMART (customer)", "BrightCHAMPS (customer)"],
      tech: [
        "Escrow-style collection-and-release infrastructure with named virtual accounts and local payouts across 100+ markets through 60+ banking and fintech partners (Source: https://www.sec.gov/Archives/edgar/data/1876042/000187604226000267/final_sept82026announcem.htm)",
        "Stablecoin settlement (USDC, USDT) into local bank rails, e-wallets, or SWIFT in local currency; stablecoin services provided by Tazapay Canada Corp., a FINTRAC-registered MSB (Source: https://tazapay.com/)",
        "Circle Payments Network design partner since 2025 and a licensed Beneficiary Financial Institution supporting compliant fiat disbursements into Hong Kong and Asia-Pacific (Source: https://www.sec.gov/Archives/edgar/data/1876042/000187604226000267/final_sept82026announcem.htm)",
      ],
      metrics: [
        "Annualized payment volume: $25B+ (as of July 31, 2026, Circle acquisition announcement)",
        "Share of transaction volume involving stablecoins: about 60% (as of July 31, 2026, Circle Q3 2026 results)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://tazapay.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/tazapay",
        },
        {
          label: "Circle — Tazapay acquisition announcement (SEC EX-99.1, Sep 2026)",
          url: "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000267/final_sept82026announcem.htm",
        },
        {
          label: "Tazapay — Circle acquires Tazapay",
          url: "https://www.tazapay.com/blog/circle-acquires-tazapay",
        },
      ],
      people: [
        { name: "Rahul Shinghal", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/rahulshinghal" },
        { name: "Aayush Singhania", role: "Co-founder & CPO", linkedin: "https://www.linkedin.com/in/aayushsinghania1985" },
      ],
    },
  },
];
