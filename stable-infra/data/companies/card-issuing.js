// Card issuing — Baanx through Wirex.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
// Every profile below was verified against public sources in November 2026 —
// each entry cites the official site plus funding/milestone announcements.
export const CARD_ISSUING = [
  {
    id: "baanx",
    name: "Baanx",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "Visa": "https://www.visa.com",
      "Ledger": "https://www.ledger.com",
      "MetaMask": "https://metamask.io",
      "Monavate": "https://www.monavate.com",
    },

    productLinks: {
      "CryptoLife Card — white-label crypto debit cards": "https://www.baanx.com/",
      "Banking-as-a-service APIs": "https://www.baanx.com/",
      "Hybrid fiat/crypto wallets": "https://www.baanx.com/",
      "Payment gateways and IBANs": "https://www.baanx.com/",
    },
    facts: {
      founded: "2018",
      description:
        "White-label crypto payments and card-issuing company (CryptoLife Card) that bridges traditional banking and DeFi for wallets, exchanges and fintechs.",
      products: [
        "CryptoLife Card — white-label crypto debit cards",
        "Banking-as-a-service APIs",
        "Hybrid fiat/crypto wallets",
        "Payment gateways and IBANs",
      ],
      funding:
        "Reported ~$35M across three rounds — $2M equity (2018), $12.6M equity (2020), $20M Series A with Ledger, Tezos Foundation, Chiron and British Business Bank (Mar 2024)",
      stage:
        "FCA-authorised in the UK; agreed to be acquired — Exodus is buying its parent W3C Corp (Baanx and Monavate) for $175M, announced November 2025 and expected to close in 2026; no verified official X (Twitter) handle as of November 2026 — baanx.com and its official pages publish no handle, so none was added",
      partners: ["Mastercard", "Visa", "Ledger", "MetaMask", "Monavate"],
      tech: [
        "Powers the self-custodial card stack behind the Ledger CL Card, the MetaMask Card and the 1inch Card — users buy, spend and borrow directly against digital assets held in their own wallets (baanx.com; withcl.com)",
        "Baanx API is a multi-tenant crypto-to-card gateway: OAuth 2.0 with PKCE for authorization, and sensitive card operations built on tokenized access patterns so card data never touches the partner application (docs.baanx.com)",
        "Documented Card API covers the full card lifecycle — ordering, activation, PIN management and transaction monitoring for virtual and physical cards (docs.baanx.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.baanx.com/" },
        {
          label: "withcl.com — Crypto Life (CL Card) consumer brand",
          url: "https://www.withcl.com/about",
        },
        {
          label: "Baanx API docs — card operations",
          url: "https://docs.baanx.com/guides/card/overview",
        },
        {
          label: "CoinDesk — Exodus $175M acquisition",
          url: "https://www.coindesk.com/business/2025/11/24/crypto-wallet-firm-exodus-buys-baanx-and-monavate-for-usd175m",
        },
      ],
      people: [
        { name: "Garth Howat", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/garthhowat" },
        { name: "Daniel Jones", role: "COO", linkedin: "https://www.linkedin.com/in/daniel-jones-645781112" },
      ],
    },
  },
  {
    id: "gnosis-pay",
    name: "Gnosis Pay",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Monavate": "https://www.monavate.com",
      "Safe": "https://safe.global",
      "Rebind": "https://rebind.co",
      "MiniPay": "https://minipay.to",
    },

    productLinks: {
      "Gnosis Card — self-custodial Visa debit card": "https://gnosispay.com/",
      "White-label stablecoin card programs": "https://gnosispay.com/",
      "Fiat rails and on/off-ramps": "https://gnosispay.com/",
      "Multi-chain, multi-currency accounts": "https://gnosispay.com/",
    },
    facts: {
      founded: "2022",
      description:
        "Decentralized payments network that launched as crypto's first self-custodial Visa card and has since pivoted to enterprise-grade stablecoin card program management for wallets and fintechs.",
      products: [
        "Gnosis Card — self-custodial Visa debit card",
        "White-label stablecoin card programs",
        "Fiat rails and on/off-ramps",
        "Multi-chain, multi-currency accounts",
      ],
      funding:
        "No publicly announced venture rounds — built within the Gnosis ecosystem; a GnosisDAO vote (GIP-154) approved a $15M stablecoin grant to Gnosis Ltd supporting Gnosis Pay plus a $2M working-capital loan to Gnosis Pay",
      stage:
        "Gnosis Card launched at EthCC Paris (Jul 2023); enterprise card-program-manager platform live with partners since early 2026, with the consumer web app winding down (Sep 2026)",
      partners: ["Visa", "Monavate", "Safe", "Rebind", "MiniPay"],
      tech: [
        "Issues Visa debit cards against on-chain Safe smart accounts — card spends, daily limits and admin actions are enforced on-chain through a module stack of Zodiac primitives plus a custom Gnosis Pay Spender (Bouncer) module (docs.gnosispay.com)",
        "Safe accounts add Delay and Roles smart-contract modules that create a programmable security layer governing how and when self-custodial funds can be spent (docs.gnosispay.com; help.gnosispay.com)",
        "Acts as the orchestration layer connecting KYC flows, self-custody of funds through Safe accounts, KYT/AML checks on transfers, payment processing and settlement (docs.gnosispay.com)",
      ],
      metrics: [
        "Volume processed: $209.5M+ (as of November 2026, gnosispay.com)",
        "Transactions processed: 3.9M+ (as of November 2026, gnosispay.com)",
        "Accounts deployed: 84.6K+ (as of November 2026, gnosispay.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://gnosispay.com/" },
        { label: "X (Twitter)", url: "https://x.com/gnosispay" },
        {
          label: "Gnosis Pay docs — Safe account architecture",
          url: "https://docs.gnosispay.com/concepts/safe/overview",
        },
        {
          label: "TechCrunch — Gnosis Card launch",
          url: "https://techcrunch.com/2023/07/17/gnosis-has-a-visa-card-that-lets-you-spend-self-custodial-crypto-in-europe-soon-us-and-hong-kong/",
        },
      ],
      people: [
        { name: "Martin Köppelmann", role: "Co-founder & CEO, Gnosis", linkedin: "https://www.linkedin.com/in/koeppelmann" },
        { name: "Stefan George", role: "Co-founder & CTO, Gnosis", linkedin: "https://www.linkedin.com/in/stefangeorge" },
        { name: "Mattia Asta", role: "CEO, Gnosis Pay", linkedin: "https://www.linkedin.com/in/mattia-asta-1987b3a7" },
      ],
    },
  },
  {
    id: "immersve",
    name: "Immersve",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "Bitget Wallet": "https://web3.bitget.com",
      "Xaman Wallet": "https://xaman.app",
      "Pera Wallet": "https://perawallet.app",
    },

    productLinks: {
      "Web3 payment protocol": "https://immersve.com/",
      "Issuing-as-a-service APIs and smart contracts": "https://immersve.com/",
      "Virtual and physical Mastercard cards": "https://immersve.com/",
      "Apple Pay / Google Pay support": "https://immersve.com/",
    },
    facts: {
      founded: "2021",
      description:
        "Web3 payment protocol and Mastercard principal member — non-custodial, bank-free card issuing through APIs and smart contracts on EVM and non-EVM chains.",
      products: [
        "Web3 payment protocol",
        "Issuing-as-a-service APIs and smart contracts",
        "Virtual and physical Mastercard cards",
        "Apple Pay / Google Pay support",
      ],
      funding:
        "Undisclosed seed round led by Outlier Ventures with TCG Crypto and DAO Jones (Jun 2022) — amount not publicly disclosed",
      stage:
        "Mastercard partnership delivering a \"world first\" web3 payment experience in Australia and New Zealand (Feb 2023); card programs shipped with Bitget Wallet, Xaman Wallet and Pera Wallet",
      partners: ["Mastercard", "Bitget Wallet", "Xaman Wallet", "Pera Wallet"],
      tech: [
        "Non-custodial card funding through on-chain contracts — approval-based funding protocols use standard token approvals so cards spend stablecoins directly from self-custodial web3 wallets; the funding contracts are open-source on GitHub for EVM and Algorand chains (docs.immersve.com)",
        "Genuine multi-chain payment protocol: web3 wallets, DeFi apps, exchanges and blockchains integrate the same issuing APIs across EVM and non-EVM chains (docs.immersve.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://immersve.com/" },
        { label: "X (Twitter)", url: "https://x.com/immersve" },
        {
          label: "Immersve docs — funding protocols",
          url: "https://docs.immersve.com/guides/funding-protocols/",
        },
        {
          label: "Mastercard Newsroom — partnership",
          url: "https://www.mastercard.com/news/ap/en/newsroom/press-releases/en/2023/immersve-partners-with-mastercard-to-deliver-world-first-web3-payment-innovation-in-australia-and-new-zealand/",
        },
      ],
      people: [
        { name: "Matic Lesjak", role: "Co-founder & Chief Innovation Officer", linkedin: "https://www.linkedin.com/in/maticlesjak" },
        { name: "Nathan Jones", role: "Co-founder & Principal Engineer", linkedin: "https://www.linkedin.com/in/nathan-c-jones" },
      ],
    },
  },
  {
    id: "marqeta",
    name: "Marqeta",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Square (Block)": "https://squareup.com",
      "DoorDash": "https://www.doordash.com",
      "Klarna": "https://www.klarna.com",
      "Instacart": "https://www.instacart.com",
      "Affirm": "https://www.affirm.com",
      "Uber": "https://www.uber.com",
      "Google": "https://www.google.com",
      "Coinbase": "https://www.coinbase.com",
    },

    productLinks: {
      "Card issuing APIs — physical, virtual and tokenized cards": "https://www.marqeta.com/platform/card-issuing",
      "Payment processing": "https://www.marqeta.com/platform/card-issuing",
      "Card program management tools": "https://www.marqeta.com/platform/card-issuing",
    },
    facts: {
      founded: "2010",
      description:
        "Modern card-issuing platform whose APIs let companies create, distribute and manage physical, virtual and tokenized payment cards.",
      products: [
        "Card issuing APIs — physical, virtual and tokenized cards",
        "Payment processing",
        "Card program management tools",
      ],
      funding:
        "Reported $530M+ in venture funding led by Coatue and ICONIQ (final private round May 2020 at a $4.3B valuation), then a ~$1.2B Nasdaq IPO priced at $27 a share (Jun 2021)",
      stage:
        "Nasdaq IPO under ticker MQ (Jun 2021), debuting above a $17B market cap; Square accounted for 70% of 2020 revenue",
      partners: ["Square (Block)", "DoorDash", "Klarna", "Instacart", "Affirm", "Uber", "Google", "Coinbase"],
      tech: [
        "Just-in-Time (JIT) Funding: the platform funds accounts in real time during the transaction itself, and Gateway JIT Funding forwards every funding decision to the customer's own endpoint to approve or deny under its own business rules (docs.marqeta.com)",
        "Stablecoin-backed card infrastructure: collaborations with ZeroHash (Jul 2026), BVNK (Sep 2026) and Coinbase (Oct 2026) to enable stablecoin-backed card payments across global card networks (investors.marqeta.com; marqeta.com blog)",
        "Published reliability and scale claims: 99.99% platform uptime in 2025, $400B+ processed in the four quarters to June 30, 2026, certified to operate in 40+ countries (marqeta.com)",
      ],
      metrics: [
        "Payment volume processed: $400B+ (four quarters ending June 30, 2026, marqeta.com)",
        "Public float: $2.3B of Class A common stock held by non-affiliates (as of June 30, 2025, FY2025 Form 10-K)",
        "Market cap: ≈$1.9B (November 2026 — 103,810,843 combined Class A and B shares outstanding per Q3 2026 Form 10-Q × the $18.60 close on Nov 4, 2026, OTC Markets trade data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.marqeta.com" },
        { label: "X (Twitter)", url: "https://x.com/marqeta" },
        {
          label: "Marqeta docs — About Just-in-Time Funding",
          url: "https://www.marqeta.com/docs/developer-guides/about-jit-funding",
        },
        {
          label: "Marqeta — Coinbase stablecoin-backed card collaboration",
          url: "https://investors.marqeta.com/news-releases/news-release-details/marqeta-and-coinbase-collaborate-enable-stablecoin-backed-card/",
        },
      ],
      people: [
        { name: "Mike Milotich", role: "CEO", linkedin: "https://www.linkedin.com/in/mike-milotich-7b78402" },
        { name: "Patti Kangwankij", role: "CFO", linkedin: "https://www.linkedin.com/in/patti-kangwankij-1057807" },
      ],
    },
  },
  {
    id: "rain",
    name: "Rain",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Mastercard": "https://www.mastercard.com",
      "Western Union": "https://www.westernunion.com",
      "Nuvei": "https://www.nuvei.com",
      "KAST": "https://www.kast.xyz",
      "Dakota": "https://dakota.xyz",
      "Rizon": "https://www.getrizon.com",
    },

    productLinks: {
      "Stablecoin-backed Visa and Mastercard card issuing": "https://www.rain.xyz/",
      "Embedded stablecoin wallets and virtual accounts": "https://www.rain.xyz/",
      "On/off-ramps and cross-border payments": "https://www.rain.xyz/",
    },
    facts: {
      founded: "2021",
      description:
        "Enterprise stablecoin payments platform — a Visa and Mastercard principal member whose single API lets companies issue stablecoin-backed cards, embed wallets, and move money across borders.",
      products: [
        "Stablecoin-backed Visa and Mastercard card issuing",
        "Embedded stablecoin wallets and virtual accounts",
        "On/off-ramps and cross-border payments",
      ],
      funding:
        "Reported $338M+ — $24.5M Series A led by Norwest (Mar 2025), $58M Series B led by Sapphire Ventures (Aug 2025), $250M Series C led by ICONIQ (Jan 2026) at a $1.95B valuation",
      stage:
        "Visa principal member; Mastercard principal membership announced May 2026; valued at $1.95B after the Series C, with 200+ partners and about $3B in annualized transaction volume; powers Western Union's Stablecard",
      partners: ["Visa", "Mastercard", "Western Union", "Nuvei", "KAST", "Dakota", "Rizon"],
      tech: [
        "Tokenized its credit-card receivables and moved all settlement transactions for its Visa cards to USDC through Visa's stablecoin settlement pilot, enabling settlement seven days a week (rain.xyz resources; Visa thought leadership)",
        "Funds daily Visa settlement obligations through a Credit Coop onchain revolving facility — about $2B of Visa settlement volume financed since August 2023 across 2,000+ borrow events with zero defaults (Visa thought leadership, Sep 8, 2026)",
        "Single API unifies wallets, cards, on/off-ramps, FX, and cross-chain routing across 12 blockchains including Ethereum, Solana, Base, Arbitrum, and Plasma (rain.xyz)",
      ],
      metrics: [
        "Visa settlement volume financed via onchain facility: ~$2B (as of September 2026, Visa)",
        "Annualized transaction volume: ~$3B (as of January 2026, PR Newswire)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.rain.xyz/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/raincards",
        },
        {
          label: "Visa — financing stablecoin-linked card programs",
          url: "https://www.visa.com/en-us/thought-leadership/innovation/financing-stablecoin-linked-card-programs",
        },
        {
          label: "PR Newswire — $250M Series C",
          url: "https://www.prnewswire.com/news-releases/rain-raises-250m-series-c-to-scale-stablecoin-powered-payments-infrastructure-for-global-enterprises-302657084.html",
        },
      ],
      people: [
        { name: "Farooq Malik", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/fhmalik" },
        { name: "Charles Yoo-Naut", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/charlesnaut" },
      ],
    },
  },
  {
    id: "reap",
    name: "Reap",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Kraken (Payward)": "https://www.kraken.com",
      "Circle": "https://www.circle.com",
      "Acorn Pacific Ventures": "https://www.acornpacific.ventures",
      "HashKey Capital": "https://hashkey.capital",
    },

    productLinks: {
      "Stablecoin-settled Visa corporate credit cards": "https://reap.global/",
      "Card issuing infrastructure": "https://reap.global/",
      "Cross-border money movement": "https://reap.global/",
      "Expense management and compliance tooling": "https://reap.global/",
    },
    facts: {
      founded: "2018",
      description:
        "Hong Kong fintech building stablecoin-native financial infrastructure — corporate Visa cards that spend in fiat and settle in stablecoins, alongside card issuing, money movement and compliance APIs.",
      products: [
        "Stablecoin-settled Visa corporate credit cards",
        "Card issuing infrastructure",
        "Cross-border money movement",
        "Expense management and compliance tooling",
      ],
      funding:
        "Reported ~$60M total — $1M seed led by Fresco Capital (Jul 2019), $40M Series A led by Acorn Pacific Ventures, Arcadia Funds and HashKey Capital in equity and debt (Oct 2022)",
      stage:
        "Among the first in Asia to issue Visa cards as a non-bank; Visa Principal Member in Hong Kong and Mexico; Payward (Kraken's parent) agreed to acquire Reap for up to $600M (May 2026), and a Visa collaboration extends its stablecoin card programs to 100+ markets (Sep 2026)",
      partners: ["Visa", "Kraken (Payward)", "Circle", "Acorn Pacific Ventures", "HashKey Capital"],
      tech: [
        "Settles Visa payment obligations directly in stablecoins through Visa's Asia-Pacific stablecoin settlement program, clearing outside conventional banking hours without weekend delays (Reap newsroom, Sep 23, 2026)",
        "Issues 1:1-collateralized Visa credit cards — partners post stablecoin collateral and cardholders repay in USDC or USDT on Ethereum, Polygon, Solana, and TRON (reap.global/products/cards)",
        "Runs Chainalysis-powered monitoring on stablecoin collateral and digital-currency payments alongside card-transaction fraud controls (reap.global/products/cards)",
        "Agent-native card checkout with spend limits, tokenization, and 3-D Secure so AI agents can pay at any merchant without card-data exposure (reap.global)",
      ],
      metrics: [
        "Cards issued: 2M+ (as of November 2026, Reap)",
        "Dispute win rate: ~100% (as of November 2026, Reap)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://reap.global/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/reapglobal",
        },
        {
          label: "Reap — stablecoin corporate credit cards",
          url: "https://reap.global/products/cards",
        },
        {
          label: "Reap — Visa 100+ markets collaboration",
          url: "https://reap.global/newsroom/reap-visa-launch-100-markets-stablecoin-card-program",
        },
      ],
      people: [
        { name: "Daren Guo", role: "Co-Founder & CEO", linkedin: "https://www.linkedin.com/in/daren-guo" },
        { name: "Kevin Kang", role: "Co-Founder & COO", linkedin: "https://www.linkedin.com/in/kevin-kang-07086821" },
      ],
    },
  },
  {
    id: "wirex",
    name: "Wirex",
    categoryId: "card-issuing",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "Visa": "https://www.visa.com",
      "SBI Holdings": "https://www.sbigroup.co.jp",
      "Curve": "https://www.curve.com",
      "COCA": "https://coca.xyz",
    },

    productLinks: {
      "Multi-currency accounts — 20+ traditional and crypto currencies": "https://wirexapp.com/",
      "Crypto-enabled Visa and Mastercard debit cards, virtual and physical": "https://wirexapp.com/",
      "In-app exchange and wallet": "https://wirexapp.com/",
      "Yield products": "https://wirexapp.com/",
    },
    facts: {
      founded: "2014",
      description:
        "Crypto and stablecoin payments platform offering multi-currency accounts and crypto-enabled debit cards, operating as a principal member of both Visa and Mastercard.",
      products: [
        "Multi-currency accounts — 20+ traditional and crypto currencies",
        "Crypto-enabled Visa and Mastercard debit cards, virtual and physical",
        "In-app exchange and wallet",
        "Yield products",
      ],
      funding:
        "Reported $3M Series A from SBI Group (Mar 2017); SBI followed with a cryptocurrency-payments joint venture agreement (Oct 2017)",
      stage:
        "Rebranded from E-Coin (2016); world's first crypto-native platform to secure Mastercard principal membership (Jul 2020); global Visa partnership enabling direct card issuance in 40+ countries (Feb 2023); FCA-authorised e-money institution in the UK",
      partners: ["Mastercard", "Visa", "SBI Holdings", "Curve", "COCA"],
      tech: [
        "First dual-stablecoin Visa settlement network — settles card obligations directly in Circle's USDC and EURC on Stellar with real-time reconciliation, without intermediary banks (live November 2025) (PR Newswire)",
        "Wirex Pay provides self-custodial smart-account infrastructure connecting onchain wallets to Visa card and banking payments (wirexapp.com)",
        "BaaS unified-balance layer normalizes USDT, USDC, and EURC across chains into chain-agnostic WUSD and WEUR tokens (Wirex docs)",
      ],
      metrics: [
        "Users: 7M+ across 130+ countries (as of November 2025, PR Newswire)",
        "Annualized onchain stablecoin volume on BaaS: $1B+ reached 131 days after launch (as of April 2026, Wirex)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://wirexapp.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/wirexapp",
        },
        {
          label: "PR Newswire — Wirex and Stellar dual-stablecoin Visa settlement (Nov 2025)",
          url: "https://www.prnewswire.com/news-releases/wirex-and-stellar-go-live-with-dual-stablecoin-visa-settlement-in-usdc-and-eurc-for-7-million-users-302618287.html",
        },
        {
          label: "Wirex — $1B annualized onchain volume on BaaS (Apr 2026)",
          url: "https://www.wirexapp.com/post/wirex-sets-new-record-as-fastest-growing-stablecoin-infrastructure",
        },
      ],
      people: [
        { name: "Pavel Matveev", role: "Co-Founder & Group CEO", linkedin: "https://www.linkedin.com/in/pmatveev" },
        { name: "Dmitry Lazarichev", role: "Co-Founder & CEO", linkedin: "https://www.linkedin.com/in/dmitrylazarichev" },
      ],
    },
  },
];
