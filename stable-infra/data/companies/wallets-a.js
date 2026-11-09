// Wallets & consumer apps, batch A — Belo through KakaoPay.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const WALLETS_A = [
  {
    id: "belo",
    name: "Belo",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Tether": "https://tether.to",
      "Mastercard": "https://www.mastercard.com",
      // "Titan Fund" and "G2" omitted — no live source identifies which fund invested in belo.
      "The Venture City": "https://www.theventurecity.com",
      "Mindset Ventures": "https://mindset.ventures",
    },

    productLinks: {
      "Digital dollar/euro wallet": "https://belo.app/en",
      "Crypto send/receive (USDT, USDC, BTC, ETH, SOL)": "https://belo.app/en",
      "International belo card with cashback in digital dollars": "https://www.belo.app/ar/tarjeta-internacional",
      "Cross-border payments and FX": "https://belo.app/en",
    },

    facts: {
      founded: "2021",
      description:
        "Buenos Aires-based digital wallet that uses stablecoin rails to let users hold dollars and euros, pay with an international card, and move money across borders in Latin America.",
      products: ["Digital dollar/euro wallet", "Crypto send/receive (USDT, USDC, BTC, ETH, SOL)", "International belo card with cashback in digital dollars", "Cross-border payments and FX"],
      funding: "Reported $17M disclosed — $3M seed (May 2022), $14M Series A led by Tether with Titan Fund, The Venture City, Mindset Ventures, and G2 (Apr 2026)",
      stage: "Passed 3 million users across Latin America (2026); reports three years of profitable operations; expanding into Mexico, Chile, Colombia, Peru, Bolivia, and Paraguay while deepening its presence in Brazil",
      partners: ["Tether", "Mastercard", "Titan Fund", "The Venture City", "Mindset Ventures", "G2"],
      tech: [
        "Mastercard Start Path Crypto participant — first fintech in Argentina to offer a Mastercard prepaid card that transacts from crypto balances, with crypto cashback on spending",
        "Runs dollar and euro balances on stablecoin rails (USD₮, USDC) with native send/receive for BTC, ETH, and SOL in one app",
      ],
      links: [
        { label: "Website (official)", url: "https://belo.app/en" },
        { label: "X (Twitter)", url: "https://x.com/belo_app" },
        { label: "Mastercard Newsroom — Belo joins Start Path Crypto (Apr 2022)", url: "https://www.mastercard.com/news/latin-america/en/newsroom/press-releases/pr-en/2022/april/mastercard-adds-two-startups-from-latin-america-to-its-crypto-program-for-fintechs/" },
        { label: "CoinDesk — $14M Series A led by Tether (Apr 2026)", url: "https://www.coindesk.com/business/2026/04/28/tether-leads-belo-s-usd14-million-raise-to-expand-stablecoin-payments-across-latin-america" },
      ],
      people: [
        { name: "Manuel Beaudroit", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/mbeaudroit", x: "https://x.com/mbeaudroit" },
        { name: "Edwin Rager", role: "Co-founder & CMO", linkedin: "https://www.linkedin.com/in/edwinrager" },
      ],
    },
  },
  {
    id: "bitget-wallet",
    name: "Bitget Wallet",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Bitget": "https://www.bitget.com",
      "Circle": "https://www.circle.com",
    },

    productLinks: {
      "Self-custodial multi-chain wallet (130+ chains)": "https://web3.bitget.com/",
      "Bitget Swap DEX aggregator": "https://web3.bitget.com/en/swap",
      "Crypto payments and fiat on/off-ramps": "https://web3.bitget.com/",
      "GetGas fee payment (USDT, USDC, ETH, BGB)": "https://web3.bitget.com/en/academy/getgas",
      "DApp browser, Launchpad, and earning center": "https://web3.bitget.com/",
    },

    facts: {
      founded: "2018",
      description:
        "Self-custodial Web3 wallet (launched as BitKeep, rebranded after Bitget took a controlling stake) spanning 130+ blockchains with swaps, payments, and on/off-ramps for stablecoins.",
      products: ["Self-custodial multi-chain wallet (130+ chains)", "Bitget Swap DEX aggregator", "Crypto payments and fiat on/off-ramps", "GetGas fee payment (USDT, USDC, ETH, BGB)", "DApp browser, Launchpad, and earning center"],
      funding: "Reported $32M disclosed — $2M seed for BitKeep (2018), $30M investment by Bitget for a controlling stake at a $300M valuation (Mar 2023)",
      stage: "Rebranded from BitKeep to Bitget Wallet (Aug 2023); BWB and BGB tokens merged into BGB (Dec 2024); reported 100M+ users, 1M+ tokens, and 20,000+ DApps with daily payment users outnumbering traders (2026)",
      partners: ["Bitget", "Circle"],
      tech: [
        "GetShield pre-transaction screening — checks potentially risky tokens, addresses, and transactions before users interact, alongside real-time transaction risk monitoring across supported chains",
        "Hardware-backed key protection plus social-login wallet creation (Google, Apple ID, email) without a seed phrase",
        "$300M+ User Protection Fund covering losses from platform-originated issues, backed by independent security audits",
        "130+ chain integrations with cross-chain bridging and GetGas multi-token gas payment (USDT, USDC, ETH, BGB)",
        "Bitget Wallet Card with Assetback — spend stablecoin balances at Visa and Mastercard merchants and choose the reward asset (USDC, BTC, gold, tokenized stocks/ETFs); stablecoin QR Pay on local QR standards",
      ],
      links: [
        { label: "Website (official)", url: "https://web3.bitget.com/" },
        { label: "X (Twitter)", url: "https://x.com/BitgetWallet" },
        { label: "Bitget Wallet — What Is Bitget Wallet (academy)", url: "https://web3.bitget.com/en/academy/what-is-bitget-wallet" },
        { label: "The Block — $30M Bitget investment at $300M valuation (Mar 2023)", url: "https://www.theblock.co/news/business/2023-03-22-bitget-bitkeep-acquisition-investment-221903" },
      ],
      people: [
        { name: "Kevin Como", role: "Founder (BitKeep)", x: "https://x.com/uxuykevin" },
        { name: "Karry", role: "CEO", x: "https://x.com/KarryWeb3" },
      ],
    },
  },
  {
    id: "bleap",
    name: "Bleap",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Ethereal Ventures": "https://www.etherealventures.com",
      "Blossom Capital": "https://www.blossomcap.com",
      "Maven 11": "https://maven11.com",
      "Alliance DAO": "https://alliance.xyz",
      "Robot Ventures": "https://robvc.com",
      "Credibly Neutral": "https://crediblyneutral.com",
    },

    productLinks: {
      "Digital account & cashback card (up to 20%)": "https://www.bleap.finance/",
      "Spend straight from EVM self-custodial wallets (no off-ramp)": "https://www.bleap.finance/",
      "Fee-free global money transfers": "https://www.bleap.finance/",
      "Savings up to 8% AER": "https://www.bleap.finance/savings",
      "In-app crypto trading (18,000+ tokens)": "https://www.bleap.finance/",
    },

    facts: {
      founded: "2023",
      description:
        "London-based self-custodial money app from ex-Revolut founders — spend directly from EVM wallets with a cashback card, fee-free global transfers, and onchain savings yield, no bank in between.",
      products: ["Digital account & cashback card (up to 20%)", "Spend straight from EVM self-custodial wallets (no off-ramp)", "Fee-free global money transfers", "Savings up to 8% AER", "In-app crypto trading (18,000+ tokens)"],
      funding: "Reported $8.3M in announced rounds — $2.3M pre-seed led by Ethereal Ventures at a $10M valuation (Nov 2024), $6M seed led by Blossom Capital (Jan 2026)",
      stage: "Beta with select EU users (late 2024) ahead of planned public deployment; the Jan 2026 seed earmarked funds for yield vaults, onchain trading, and growth across Latin America and Europe",
      partners: ["Ethereal Ventures", "Blossom Capital", "Maven 11", "Alliance DAO", "Robot Ventures", "Credibly Neutral"],
      tech: [
        "End-user wallets pair TSS MPC cryptography with account abstraction — a smart-contract wallet generated for each user on Portal's React Native SDK",
        "Internal treasury and hot-wallet liquidity managed through Portal's server-side Enclave MPC API",
        "Mastercard card loads stablecoins (EUR, USD) 1:1 directly from self-custodial EVM wallets — spending with no off-ramp and no bank in between",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bleap.finance/" },
        { label: "X (Twitter)", url: "https://x.com/BleapApp" },
        { label: "Portal — Bleap x Portal engineering case study (Dec 2024)", url: "https://www.portalhq.io/case-studies/bleap-x-portal" },
        { label: "The Block — $6M seed led by Blossom Capital (Jan 2026)", url: "https://www.theblock.co/news/deals/2026-01-28-ex-revolut-duo-raise-6-million-seed-round-to-expand-onchain-finance-app-bleap-387362" },
      ],
      people: [
        { name: "Joao Alves", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/joao-alves-", x: "https://x.com/JoaoAlvesDotETH" },
        { name: "Guilherme Gomes", role: "Co-founder", linkedin: "https://www.linkedin.com/in/funwithgui", x: "https://x.com/funwithgui" },
      ],
    },
  },
  {
    id: "cash-app",
    name: "Cash App",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "Afterpay": "https://www.afterpay.com",
      "Square Financial Services": "https://block.xyz/sfs",
    },

    productLinks: {
      "Peer-to-peer payments and direct deposit": "https://cash.app/",
      "Cash App Card (customizable Visa debit)": "https://cash.app/card",
      "Bitcoin buy/sell with Lightning Network support": "https://cash.app/bitcoin",
      "USDC–dollar balance interchange": "https://cash.app/press/cash-app-stablecoins-all-customers",
      "Afterpay BNPL and Cash App Borrow small-dollar loans": "https://cash.app/borrow",
    },

    facts: {
      founded: "2013",
      description:
        "Consumer finance app inside Block, Inc. (NYSE: XYZ) — peer-to-peer payments plus banking, a Visa debit card, bitcoin, stablecoin balances, BNPL, and small-dollar lending for tens of millions of US users.",
      products: ["Peer-to-peer payments and direct deposit", "Cash App Card (customizable Visa debit)", "Bitcoin buy/sell with Lightning Network support", "USDC–dollar balance interchange", "Afterpay BNPL and Cash App Borrow small-dollar loans"],
      funding: "No venture rounds on the profile — Cash App launched 2013 inside Square; parent Block, Inc. went public on the NYSE in Nov 2015 at $9 per share (ticker now XYZ, changed Jan 2025)",
      stage: "Reported 60 million monthly transacting actives (Sep 2026) with ~26M using Cash App Card monthly; USDC and dollar balances became interchangeable in-app (Q2 2026); consumer-lending origination volume reached $19B (Q3 2026)",
      partners: ["Visa", "Afterpay", "Square Financial Services"],
      tech: [
        "Stablecoin send and receive rolled out to all eligible customers (May 2026) — USDC auto-converts to dollars so customers hold one unified balance; Cash App manages sourcing, conversion, and settlement behind the scenes",
        "Native USDC support on Solana, Ethereum, Polygon, and Arbitrum, fee-free at launch",
      ],
      metrics: [
        "Block, Inc. market cap: $52.96B (as of November 4, 2026, StockAnalysis)",
      ],
      links: [
        { label: "Website (official)", url: "https://cash.app/" },
        { label: "X (Twitter)", url: "https://x.com/CashApp" },
        { label: "Cash App press — stablecoins available to all customers (May 2026)", url: "https://cash.app/press/cash-app-stablecoins-all-customers" },
        { label: "StockAnalysis — Block, Inc. (XYZ) market data", url: "https://stockanalysis.com/stocks/xyz/" },
      ],
      people: [
        { name: "Jack Dorsey", role: "Co-founder & CEO of Block (Cash App co-creator)", x: "https://x.com/jack" },
        { name: "Brian Grassadonia", role: "Cash App co-creator & founding CEO", linkedin: "https://www.linkedin.com/in/brianpg" },
      ],
    },
  },
  {
    id: "ether-fi",
    name: "Ether.fi",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Bullish Capital": "https://www.bullish.com",
      "CoinFund": "https://coinfund.io",
      "OKX Ventures": "https://www.okx.com/ventures",
      "Consensys": "https://consensys.io",
      "Rain": "https://rain.xyz",
      "Ethena": "https://www.ethena.fi",
      "Scroll": "https://scroll.io",
    },

    productLinks: {
      "eETH liquid restaking token": "https://app.ether.fi/weethk",
      "Ether.fi Cash Visa card (Borrow and Direct Pay modes)": "https://www.ether.fi/cash",
      "Vaults and crypto-backed borrowing": "https://www.ether.fi/",
      "ether.fi USD stablecoin (Ethena white-label, Oct 2026)": "https://www.ethena.fi",
    },

    facts: {
      founded: "2023",
      description:
        "Liquid restaking protocol turned onchain neobank — users stake ETH into eETH and spend against their balance with the Cash Visa card, which borrows or deducts stablecoins instead of off-ramping.",
      products: ["eETH liquid restaking token", "Ether.fi Cash Visa card (Borrow and Direct Pay modes)", "Vaults and crypto-backed borrowing", "ether.fi USD stablecoin (Ethena white-label, Oct 2026)"],
      funding: "Reported $27M disclosed — $4M SAFE (late 2023), $23M Series A led by Bullish Capital and CoinFund with OKX Ventures, Foresight Ventures, Consensys, and Amber (Feb 2024)",
      stage: "Launched early 2023; Cash card announced Sept 2024 settling on Scroll via Rain; reported TVL about $4.6B (2026); introduced its own ether.fi USD stablecoin through Ethena's white-label service (Oct 2026)",
      partners: ["Bullish Capital", "CoinFund", "OKX Ventures", "Consensys", "Rain", "Ethena", "Scroll"],
      tech: [
        "eETH — liquid restaking receipt token: ETH holders earn restaking yield while keeping a liquid, composable position across DeFi",
        "Cash Visa card with Borrow mode — spend against crypto-backed liquidity without selling or off-ramping, with cashback rewards",
        "Account balance protection up to $500,000 per eligible account, insurance-backed and audited by Halborn (program not yet live)",
      ],
      metrics: [
        "TVL: about $5.0B (as of November 5, 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.ether.fi/" },
        { label: "X (Twitter)", url: "https://x.com/ether_fi" },
        { label: "CoinDesk — $23M Series A (Feb 2024)", url: "https://www.coindesk.com/business/2024/02/28/liquid-restaking-protocol-etherfi-raises-23m-series-a" },
        { label: "DefiLlama — ether.fi TVL", url: "https://defillama.com/protocol/ether.fi" },
      ],
      people: [
        { name: "Mike Silagadze", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/ethermike" },
        { name: "Rok Kopp", role: "Co-founder & CRO", linkedin: "https://www.linkedin.com/in/rokkopp" },
        { name: "Jozef Vogel", role: "COO", linkedin: "https://www.linkedin.com/in/jozefvogel" },
      ],
    },
  },
  {
    id: "exodus",
    name: "Exodus",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Trezor": "https://trezor.io",
      "Ledger": "https://www.ledger.com",
    },

    productLinks: {
      "Self-custody wallets (desktop, mobile, browser extension)": "https://www.exodus.com/",
      "In-wallet crypto swap and buy/sell ramps": "https://www.exodus.com/",
      "Ledger and Trezor hardware-wallet integration": "https://www.exodus.com/",
      "Exodus payments platform": "https://www.exodus.com/investors/news-events/press-releases/detail/93/exodus-introduces-exodus-pay-to-make-stablecoin-spending-mainstream",
    },

    facts: {
      founded: "2015",
      description:
        "Omaha-based self-custodial wallet for desktop, mobile, and browser — manage, swap, and spend 1,000,000+ digital assets without giving up control; its parent Exodus Movement, Inc. is publicly traded on NYSE American.",
      products: ["Self-custody wallets (desktop, mobile, browser extension)", "In-wallet crypto swap and buy/sell ramps", "Ledger and Trezor hardware-wallet integration", "Exodus payments platform"],
      funding: "No venture rounds on the profile — Exodus Movement, Inc. listed its Class A common stock, uplisting from OTCQX to NYSE American (ticker EXOD) in Dec 2024",
      stage: "Founded 2015; uplisted to NYSE American (Dec 2024) and rang the opening bell (Jan 2025); reports millions of users and 1,000,000+ supported assets (2026)",
      partners: ["Trezor", "Ledger"],
      tech: [
        "Self-custody wallet architecture — users hold their own keys across desktop, mobile, and browser-extension clients supporting 1,000,000+ digital assets (Exodus)",
        "Ledger and Trezor hardware-wallet integration — balances are managed in Exodus while keys stay on hardware devices (Exodus)",
        "Open-source developer stack — publishes the wallet SDK, browser-extension integration, and ecosystem modules through its ExodusMovement/ExodusOSS GitHub organizations (GitHub — ExodusOSS)",
      ],
      metrics: [
        "Monthly active users: 1.4 million (as of June 30, 2026, Q2 2026 shareholder letter)",
        "Shares outstanding: 30,203,258 combined Class A and Class B common stock (as of August 3, 2026, Q2 2026 Form 10-Q)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.exodus.com/" },
        { label: "X (Twitter)", url: "https://x.com/exodus" },
        { label: "SEC — Exodus Movement Q2 2026 Form 10-Q", url: "https://www.sec.gov/Archives/edgar/data/1821534/000162828026055453/exod-20260630.htm" },
        { label: "GitHub — ExodusMovement open-source development", url: "https://github.com/ExodusOSS" },
      ],
      people: [
        { name: "JP Richardson", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/jonpaulrichardson" },
      ],
    },
  },
  {
    id: "fasset",
    name: "Fasset",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "SBI Group": "https://www.sbigroup.co.jp",
      "Mastercard": "https://www.mastercard.com",
      "Investcorp": "https://www.investcorp.com",
      "Liberty City Ventures": "https://www.libertycityventures.com",
      "Fatima Gobi Ventures": "https://fatimagobi.vc",
      "Speedinvest": "https://www.speedinvest.com",
    },

    productLinks: {
      "Stablecoin-powered banking and savings app": "https://fasset.com/",
      "Digital-asset exchange and investing": "https://fasset.com/",
      "Own Network stablecoin settlement chain": "https://fasset.com/about-us/",
      "SME banking, lending, and trade finance": "https://fasset.com/",
    },

    facts: {
      founded: "2019",
      description:
        "AI-powered stablecoin neobank for emerging markets — banking, savings, and digital-asset services moving money across 50+ corridors in Asia, Africa, and the Middle East, settled on its Own Network.",
      products: ["Stablecoin-powered banking and savings app", "Digital-asset exchange and investing", "Own Network stablecoin settlement chain", "SME banking, lending, and trade finance"],
      funding: "Reported $141M disclosed — $22M Series A led by Liberty City Ventures and Fatima Gobi Ventures (Apr 2022), $51M Series B with SBI Group, Investcorp, and Arz Portföy (May 2026), $68M Series C led by SBI Group at a $1B valuation (Aug 2026)",
      stage: "Operates under licenses across the UAE, Bahrain, Indonesia, Malaysia, Pakistan, and Türkiye; reports $40B+ annualized transaction volume, 3M+ wallets, and 1,000+ enterprises served across 125 countries (2026)",
      partners: ["SBI Group", "Mastercard", "Investcorp", "Liberty City Ventures", "Fatima Gobi Ventures", "Speedinvest"],
      tech: [
        "Own Network — a regulated financial network connecting banks, telcos, payment providers, and liquidity providers across 100+ banking corridors, using stablecoins as settlement infrastructure (Fasset — Series C announcement)",
        "Own Chain — an L2 purpose-built for instant settlement underpinning Fasset's banking, saving, and investing products (Fasset — About)",
        "AI-assisted transaction routing across payment rails, currencies, liquidity providers, and settlement methods based on cost, speed, and availability (Fasset — Series C announcement)",
      ],
      metrics: [
        "Annualized transaction volume: over $40 billion (as of August 2026, Fasset Series C announcement)",
        "Wallets served: 3 million+ across 125 countries and 1,000+ enterprises (as of August 2026, Fasset Series C announcement)",
      ],
      links: [
        { label: "Website (official)", url: "https://fasset.com/" },
        { label: "X (Twitter)", url: "https://x.com/fasset" },
        { label: "Fasset — $68M Series C at $1B valuation (Aug 2026)", url: "https://fasset.com/blog/fasset-raises-68m-series-c-led-by-sbi-group/" },
        { label: "Fasset — About and Own Chain overview", url: "https://fasset.com/about-us/" },
      ],
      people: [
        { name: "Mohammad Raafi Hossain", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/raafihossain" },
        { name: "Daniel Ahmed", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/danielahmed1" },
      ],
    },
  },
  {
    id: "infini",
    name: "Infini",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Reforge": "https://reforge.vc",
      "Fortwest Capital": "https://www.fortwestcap.com",
      "Enlight Capital": "https://www.enlight.capital",
      "SNZ Capital": "https://snzholding.com",
      "NextGen Digital Venture": "https://www.nextgendigital.vc",
      // "Vernal" omitted — no official website found (LinkedIn/third-party profiles only).
    },

    productLinks: {
      "Stablecoin global accounts (send, save, receive)": "https://www.infini.money/en/personal",
      "High-yield payment cards": "https://www.infini.money/en/personal",
      "AI Financial Agents for bookkeeping and treasury": "https://www.infini.money/",
      "Invoicing, payroll, and cross-border payouts": "https://www.infini.money/",
    },

    facts: {
      founded: "2024",
      description:
        "Hong Kong-based stablecoin neobank pairing instant stablecoin settlement with AI financial agents — global accounts, high-yield payment cards, and automated treasury for consumers and businesses.",
      products: ["Stablecoin global accounts (send, save, receive)", "High-yield payment cards", "AI Financial Agents for bookkeeping and treasury", "Invoicing, payroll, and cross-border payouts"],
      funding: "Reported $6M seed with Reforge, Fortwest Capital, Enlight Capital, NextGen Digital Venture, SNZ Capital, and Vernal (Sep 2026)",
      stage: "Launched its consumer U-Card (2024–25); a Feb 2025 admin-key exploit drained $49.5M, prompting a Hong Kong lawsuit; shut the consumer card business (June 2025) and pivoted to enterprise treasury; launched a new mobile app alongside its seed round (Sep 2026)",
      partners: ["Reforge", "Fortwest Capital", "Enlight Capital", "SNZ Capital", "NextGen Digital Venture", "Vernal"],
      tech: [
        "Stablecoin-funded Visa card rails — USDC/USDT balances tracked on Infini's ledger while card authorization, fiat conversion, and clearing run through licensed payment partners (Infini)",
        "Infini Earn — daily yield on stablecoin deposits from delta-neutral strategies (funding-rate spreads, basis trades, staking carry), advertised at a 7% reference APY with T+0 redemptions (Infini on X)",
        "Business treasury stack — corporate cards with spend limits, API bulk virtual-card issuance, vendor payouts, and USD/EUR/GBP global virtual accounts (RootData)",
        "Institutional custody via Safeheron with security audits by Zellic (RootData)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.infini.money/" },
        { label: "X (Twitter)", url: "https://x.com/0xinfini" },
        { label: "Infini — stablecoin account and card product page", url: "https://www.infini.money/en/personal" },
        { label: "RootData — Infini project timeline and backers", url: "https://www.rootdata.com/projects/detail/infini" },
      ],
      people: [
        { name: "Christian Li", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/christian-li-478710359", x: "https://x.com/Christianeth" },
        { name: "Ryan Sun", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/ruiyangsun" },
      ],
    },
  },
  {
    id: "kast",
    name: "KAST",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "HSG (HongShan)": "https://hsgcap.com",
      "Peak XV Partners": "https://www.peakxv.com",
      "QED Investors": "https://www.qedinvestors.com",
      "Left Lane Capital": "https://www.leftlane.com",
      "DST Global Partners": "https://dst-global.com",
    },

    productLinks: {
      "Stablecoin accounts (hold, save, transfer)": "https://www.kast.xyz/",
      "Payment cards on standard merchant networks": "https://www.kast.xyz/",
      "Global payments and cross-border transfers": "https://www.kast.xyz/",
      "KAST Business — enterprise payouts, payroll, and cross-border payments": "https://www.kast.xyz/en/business",
    },

    facts: {
      founded: "2024",
      description:
        "Singapore-based stablecoin neobank (founded 2024) giving users dollar-pegged accounts, global payments, and cards that spend stablecoin balances on standard merchant networks — now extending the same rails to business banking.",
      products: ["Stablecoin accounts (hold, save, transfer)", "Payment cards on standard merchant networks", "Global payments and cross-border transfers", "KAST Business — enterprise payouts, payroll, and cross-border payments"],
      funding: "Reported $90M disclosed — $10M seed led by HSG and Peak XV Partners (Dec 2024), $80M Series A co-led by QED Investors and Left Lane Capital (Mar 2026)",
      stage: "Co-founded by former Circle executive Raagulan Pathy and Daniel Bertoli; valued near $600M at its Series A (Mar 2026); expanding across North America, Latin America, and the Middle East while rolling out KAST Business",
      partners: ["HSG (HongShan)", "Peak XV Partners", "QED Investors", "Left Lane Capital", "DST Global Partners"],
      tech: [
        "Earn Vaults launched with risk-management firm Gauntlet — advertised 5–9% rates on USDC and USDT with no lock-up and balances spendable through the card (KAST)",
        "Reserve — treasury-backed rewards on spendable USD balances, initially capped at $100 million in aggregate and powered by M0's US-treasury-backed USDKY (KAST)",
        "Stablecoin support across 10+ chains, including Ethereum, Solana, Polygon, Arbitrum, and Tron, covering USDT, USDC, PYUSD, and RLUSD (KAST)",
        "KAST Business — a 24/7 stablecoin-native business platform combining accounts, cards, global transfers, contractor payouts, and treasury-backed yield (KAST press release)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.kast.xyz/" },
        { label: "X (Twitter)", url: "https://x.com/KASTxyz" },
        { label: "KAST — $80M Series A announcement (Mar 2026)", url: "https://www.kast.xyz/en/newsroom/press-releases/kast-raises-80-million-as-stablecoins-move-from-infrastructure-into-mainstream-financial-services" },
        { label: "KAST — KAST Business launch press release (Sep 2026)", url: "https://www.kast.xyz/en/newsroom/press-releases/stablecoin-powered-kast-launches-24-7-business-platform-for-global-companies" },
      ],
      people: [
        { name: "Raagulan Pathy", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/raagulanpathy", x: "https://x.com/raagulanpathy" },
        { name: "Sam Kerrins", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/sam-kerrins" },
      ],
    },
  },
  {
    id: "kakaopay",
    name: "KakaoPay",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Kakao": "https://www.kakao.com",
      "KakaoBank": "https://www.kakaobank.com",
      "Circle": "https://www.circle.com",
      "Grab": "https://www.grab.com",
      "SCBX": "https://www.scbx.com",
      "Kyobo Life Insurance": "https://www.kyobo.com",
    },

    productLinks: {
      "Mobile payments and money transfers": "https://www.kakaopay.com/",
      "Financial services (securities, insurance, credit)": "https://www.kakaopay.com/",
      "Digital asset wallet for transfer, payment, and settlement": "https://www.kakaopay.com/",
    },

    facts: {
      founded: "2014",
      description:
        "Korea's dominant mobile money and digital-wallet platform — payments, remittance, and financial services inside KakaoTalk for 40M+ users — now building a won-stablecoin ecosystem across Kakao Group.",
      products: ["Mobile payments and money transfers", "Financial services (securities, insurance, credit)", "Digital asset wallet for transfer, payment, and settlement", "Won-stablecoin issuance and distribution with Kakao Group (in preparation)"],
      funding: "No venture rounds on the profile — Kakao spun the fintech unit out as an independent corporation in 2017, and Kakao Pay listed on the Korea Exchange (KOSPI, ticker 377300) in Nov 2021",
      stage: "Service launched Sept 2014 as Korea's first easy-payment platform; Q1 2026 TPV passed KRW 50 trillion in a single quarter; signed an MOU with Circle, joined the x402 Foundation, and completed a digital-asset wallet PoC as it prepares won-stablecoin distribution (2026)",
      partners: ["Kakao", "KakaoBank", "Circle", "Grab", "SCBX", "Kyobo Life Insurance"],
      tech: [
        "Strategic MOU with Circle (Jul 2026) to explore blockchain payment infrastructure, won-based digital assets, tokenized financial services, and merchant settlement (MK)",
        "Founding member of the x402 Foundation — its only South Korean founding member — working on machine-to-machine (AI-agent) payment standards settled in stablecoins (BloomingBit)",
        "Completed a digital-asset wallet PoC integrating blockchain asset management into the KakaoPay Money wallet, and tested stablecoin issuance, redemption, and overseas-payment technology with KB Kookmin Bank (BloomingBit)",
      ],
      metrics: [
        "Total payment volume: over KRW 50 trillion in Q1 2026 (Q1 2026 earnings call transcript)",
        "Market capitalization: KRW 4.565 trillion (intraday, as of October 30, 2026, Yahoo Finance)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.kakaopay.com/" },
        { label: "X (Twitter)", url: "https://x.com/kakaopay_kr" },
        { label: "MK — Circle MOU, x402 Foundation, stablecoin plans (Aug 2026)", url: "https://www.mk.co.kr/en/stock/12117322" },
        { label: "BloomingBit — Kakao Pay CEO on stablecoins, x402, and wallet PoC (Oct 2026)", url: "https://en.bloomingbit.io/feed/news/122916" },
      ],
      people: [
        { name: "Shin Won-geun", role: "CEO", linkedin: "https://www.linkedin.com/in/wonkeun-allen-s-7574508" },
      ],
    },
  },
];
