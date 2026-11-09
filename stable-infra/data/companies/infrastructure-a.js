// Stablecoin infrastructure, batch A — AEON Community through BVNK.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const INFRASTRUCTURE_A = [
  { id: "aeon-community", name: "AEON Community", categoryId: "infrastructure", profileStatus: "pending", facts: null },
  {
    id: "alchemy-pay",
    name: "Alchemy Pay",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Worldpay": "https://www.worldpay.com/en",
      "Checkout.com": "https://www.checkout.com/",
      "Nuvei": "https://www.nuvei.com/",
      "Alipay+": "https://www.alipayplus.com/",
      "Shopify": "https://www.shopify.com/",
      "Binance Pay": "https://pay.binance.com/en",
      "Trust Wallet": "https://trustwallet.com/",
    },

    productLinks: {
      "Fiat on/off-ramps": "https://alchemypay.org",
      "Merchant crypto payments": "https://alchemypay.org",
      "Alchemy Chain (announced 2025)": "https://alchemypay.org/Alchemy_Chain_White_Paper.pdf",
    },
    facts: {
      founded: "2017",
      description:
        "Fiat–crypto payment gateway connecting stablecoins, cards, and local payment rails in 173 countries; building Alchemy Chain, a stablecoin-focused settlement network.",
      products: ["Fiat on/off-ramps", "Merchant crypto payments", "NFT Checkout", "Crypto Card (white-label Visa/Mastercard)", "Alchemy Chain (announced 2025)"],
      funding: "Reported $10M — $10M from DWF Labs at a $400M valuation (Apr 2023), plus an undisclosed 2023 strategic round (ZZD Group)",
      stage: "Launched its hybrid crypto-fiat payment system (2019); ACH token (2020); announced Alchemy Chain stablecoin settlement network (Apr 2025)",
      partners: ["Worldpay", "Checkout.com", "Nuvei", "Alipay+", "Shopify", "Binance Pay", "Trust Wallet"],
      tech: [
        "Launched the Alchemy Chain mainnet (May 2026) — a payments-focused layer-1 with native stablecoin support and ACH as its native gas and economic-security token.",
      ],
      metrics: [
        "Fiat–crypto payment transactions: 12.3M network-wide with 332.6% YoY volume growth (as of February 2026, Alchemy Pay)",
        "Network users: 4.4M (as of February 2026, Alchemy Pay)",
      ],
      links: [
        { label: "Website (official)", url: "https://alchemypay.org" },
        { label: "X (Twitter)", url: "https://x.com/AlchemyPay" },
        { label: "Alchemy Pay — Alchemy Chain mainnet launch (May 2026)", url: "https://alchemypay.org/news-and-press/the-alchemy-chain-mainnet-is-live" },
        { label: "CoinDesk — $10M raise (Apr 2023)", url: "https://www.coindesk.com/business/2023/04/03/alchemy-pay-raises-10m-at-400m-to-push-south-korean-expansion-plans" },
      ],
      people: [
        { name: "Shawn Shi", role: "Co-founder", linkedin: "https://www.linkedin.com/in/shawn-shi-b6b16aa7" },
      ],
    },
  },
  {
    id: "allium-labs",
    name: "Allium Labs",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com/",
      "Stripe": "https://stripe.com/",
      "Coinbase": "https://www.coinbase.com/",
      "Phantom": "https://phantom.com/",
      "Uniswap": "https://uniswap.org/",
      "Grayscale": "https://www.grayscale.com/",
      "a16z crypto": "https://a16zcrypto.com/",
    },

    productLinks: {
      "Allium Terminal (analytics)": "https://www.allium.so/product/allium-terminal",
      "Allium Explorer (SQL interface)": "https://www.allium.so/product/allium-explorer",
      "Allium Developer (data APIs)": "https://www.allium.so/product/allium-developer",
      "Datastreams (real-time feeds)": "https://www.allium.so/product/real-time-streaming",
    },
    facts: {
      founded: "2021",
      description:
        "Blockchain data platform that indexes 150+ chains into finance-grade datasets; powers stablecoin and onchain analytics for institutions.",
      products: ["Allium Terminal (analytics)", "Allium Explorer (SQL interface)", "Allium Developer (data APIs)", "Datastreams (real-time feeds)"],
      funding: "Reported $56.5M disclosed — undisclosed seed (2022), $16.5M Series A led by Theory Ventures (Jul 2024), $40M Series B led by Amplify Partners (Jun 2026)",
      stage: "150+ enterprise customers including Visa, Stripe, and Coinbase; built Visa's Onchain Analytics Dashboard; Series B announced June 2026",
      partners: ["Visa", "Stripe", "Coinbase", "Phantom", "Uniswap", "Grayscale", "a16z crypto"],
      tech: [
        "Indexes raw data from 150+ blockchains into finance-grade schemas with traceable data lineage back to node data, under SOC 1 and SOC 2 Type I/II reporting.",
        "Powers Visa's public stablecoin dashboard; its adjusted-volume methodology nets out bot, wash-trading, and intra-entity activity — reducing $176T of reported stablecoin volume to ~$17T of adjusted economic activity in one analysis.",
        "Real-time delivery via Kafka, Pub/Sub, and SNS streams plus REST APIs the company rates at 50–100 ms responses and >100,000 requests/second.",
      ],
      links: [
        { label: "Website (official)", url: "https://www.allium.so" },
        { label: "X (Twitter)", url: "https://x.com/AlliumLabs" },
        { label: "Allium — payment-network data & adjusted stablecoin volume", url: "https://www.allium.so/client/payment-networks" },
        { label: "Allium — real-time onchain data providers", url: "https://www.allium.so/blog/choosing-real-time-onchain-data-providers/" },
      ],
      people: [
        { name: "Ethan Chan", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/ethanyschan" },
        { name: "Cheng Han Lee", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/chenghanlee" },
      ],
    },
  },
  {
    id: "aryze",
    name: "Aryze",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Episode Six": "https://episodesix.com/",
      "Bloxcross": "https://www.blox.global/",
      "Neoma Ventures": "https://www.neomaventures.com/",
      "Solum Global": "https://www.solum.global/",
      "BCIF Gold": "https://bcifgold.com/",
    },

    productLinks: {
      "Digital Cash stablecoins (eEUR, eUSD, eGBP)": "https://app.aryze.io/",
      "Stablecoin issuance platform": "https://aryze.io",
      "reForge cross-chain transfers": "https://www.npmjs.com/package/@aryze/reforge-sdk",
    },
    facts: {
      founded: "2017",
      description:
        "Copenhagen fintech providing stablecoin infrastructure as a managed service — issuance, custody, ledgers, and bank-to-bank fiat rails — for licensed issuers of stablecoins and tokenized assets.",
      products: ["Digital Cash stablecoins (eEUR, eUSD, eGBP)", "Stablecoin issuance platform", "reForge cross-chain transfers", "Tokenized RWA issuance (eGOLD)"],
      funding: "Reported €3M pre-Series A (May 2026); earlier rounds totaled ~DKK 20M through 2023, incl. a DKK 5.8M late seed and an ICO",
      stage: "Launched eEUR (2022), then eUSD and eGBP (2023); reForge cross-chain protocol (2023); tokenized gold eGOLD with BCIF (Oct 2024); €3M pre-Series A (May 2026)",
      partners: ["Episode Six", "Bloxcross", "Neoma Ventures", "Solum Global", "SYNC", "BCIF Gold"],
      tech: [
        "reForge smart-contract and API framework moves e-Assets across chains without conventional third-party bridges or wrapped-token copies.",
        "Digital Cash stablecoins (eEUR/eUSD/eGBP) are full-reserve ERC-20 tokens backed by short-term government assets, deployed across Ethereum, Polygon, BNB Chain, Arbitrum, and Linea.",
      ],
      metrics: [
        "eEUR circulating supply: ~16.7K across six chains (as of November 2026, DIA stablecoin map)",
      ],
      links: [
        { label: "Website (official)", url: "https://aryze.io" },
        { label: "X (Twitter)", url: "https://x.com/AryzeOfficial" },
        { label: "DIA — eEUR supply, peg and reserves", url: "https://www.diadata.org/map/global-stablecoins/stablecoin/eeur/" },
        { label: "Fintech Global — €3M pre-Series A (May 2026)", url: "https://fintech.global/2026/05/19/aryze-closes-e3m-pre-series-a-to-scale-stablecoin-infrastructure" },
      ],
      people: [
        { name: "Jack Nikogosian", role: "Founder", linkedin: "https://www.linkedin.com/in/jacknikogosian" },
        { name: "Morten Nielsen", role: "Co-founder & CFO", linkedin: "https://www.linkedin.com/in/morten-c-nielsen" },
      ],
    },
  },
  {
    id: "banxa",
    name: "Banxa",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Binance": "https://www.binance.com/en",
      "OKX": "https://www.okx.com/",
      "KuCoin": "https://www.kucoin.com/",
      "Hedera (USDC)": "https://hedera.com/",
      "Fireblocks": "https://www.fireblocks.com/",
    },

    productLinks: {
      "Fiat on-ramp": "https://banxa.com/solutions/by-use-case/on-and-off-ramping/",
      "Crypto off-ramp (incl. USDC/USDT)": "https://banxa.com/solutions/by-use-case/on-and-off-ramping/",
      "Enterprise & Native APIs": "https://banxa.com/features/tools/apis/",
      "Compliance-as-a-Service (KYC/AML)": "https://banxa.com",
    },
    facts: {
      founded: "2014",
      description:
        "Fiat-to-crypto payments and compliance infrastructure provider; wallets, exchanges, and Web3 platforms embed its on/off-ramps, including USDC and USDT ramps.",
      products: ["Fiat on-ramp", "Crypto off-ramp (incl. USDC/USDT)", "Enterprise & Native APIs", "Compliance-as-a-Service (KYC/AML)"],
      funding: "Reported $4M venture funding — $2M Series A led by NGC Ventures (Jan 2020), $2M pre-IPO led by OK Group (Jul 2020); TSX Venture Exchange IPO (Jan 2021)",
      stage: "Listed on the TSX Venture Exchange as BNXA (Jan 2021); MiCA licence (2025); acquired by OSL Group (announced Dec 2025)",
      partners: ["Binance", "OKX", "KuCoin", "Hedera (USDC)", "Fireblocks"],
      links: [
        { label: "Website (official)", url: "https://banxa.com" },
        { label: "X (Twitter)", url: "https://x.com/BanxaOfficial" },
        { label: "Banxa — $2M Series A announcement (Jan 2020)", url: "https://banxa.com/binances-fiat-gateway-partner-banxa-raises-2m-in-series-a-round/" },
        { label: "Banxa — OSL acquisition & MiCA licence (Dec 2025)", url: "https://banxa.com/press/big-things-happening-at-banxa/" },
      ],
      people: [
        { name: "Domenic Carosa", role: "Founder", linkedin: "https://www.linkedin.com/in/domeniccarosa" },
        { name: "Zafer Qureshi", role: "Co-CEO", linkedin: "https://www.linkedin.com/in/zafer-qureshi" },
      ],
    },
  },
  {
    id: "bastion",
    name: "Bastion",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Sony Bank": "https://sonybank.jp/en/",
      "Samsung Wallet": "https://www.samsung.com/us/apps/samsung-wallet/",
      "a16z crypto": "https://a16zcrypto.com/",
      "Coinbase Ventures": "https://www.coinbase.com/ventures",
      "Sony Innovation Fund": "https://www.sonyinnovationfund.com/",
      "Samsung Next": "https://www.samsungnext.com/",
    },

    productLinks: {
      "Stablecoin issuance platform": "https://bastion.com",
      "Reserve management": "https://bastion.com",
      "Custodial wallets / wallet-as-a-service": "https://bastion.com",
      "Fiat on/off-ramps (70+ countries)": "https://bastion.com",
    },
    facts: {
      founded: "2023",
      description:
        "White-label, regulated stablecoin issuance infrastructure for enterprises and financial institutions, spanning issuance, reserve management, custody, and fiat on/off-ramps.",
      products: ["Stablecoin issuance platform", "Reserve management", "Custodial wallets / wallet-as-a-service", "Fiat on/off-ramps (70+ countries)"],
      funding: "Reported $39.6M — $25M seed led by a16z crypto (2023), $14.6M led by Coinbase Ventures (Sep 2025)",
      stage: "Sony Bank strategic relationship for USD stablecoin development (Dec 2025); Samsung Wallet stablecoin partner (2026); conditional OCC approval for a national trust charter (Sep 2026)",
      partners: ["Sony Bank", "Samsung Wallet", "a16z crypto", "Coinbase Ventures", "Sony Innovation Fund", "Samsung Next"],
      tech: [
        "OCC granted preliminary conditional approval (Sep 2026) to convert Bastion Platforms Trust Company into Bastion Platforms National Trust Company (Charter No. 27198), approved for stablecoin custody, custodial wallets, conversion services, and white-label issuance.",
        "Platform provides the technology to mint, burn, redeem, and manage reserves for stablecoins, with built-in compliance and risk-management controls.",
      ],
      links: [
        { label: "Website (official)", url: "https://bastion.com" },
        { label: "X (Twitter)", url: "https://x.com/Bastion" },
        { label: "OCC Corporate Decision #1391 — Bastion charter conversion (Sep 2026)", url: "https://www.occ.gov/topics/charters-and-licensing/interpretations-and-decisions/2026/cd1391.pdf" },
        { label: "Sony Bank — Bastion strategic relationship", url: "https://sonybank.jp/en/corporate/topics/2025/1205-01.html" },
      ],
      people: [
        { name: "Nassim Eddequiouaq", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/nassedd" },
        { name: "Riyaz Faizullabhoy", role: "Co-founder", linkedin: "https://www.linkedin.com/in/riyazdf" },
      ],
    },
  },
  {
    id: "bitgo",
    name: "BitGo",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "World Liberty Financial (USD1)": "https://worldlibertyfinancial.com/",
      "SoFi": "https://www.sofi.com/",
      "Hana Bank": "https://www.kebhana.com/",
      "Jupiter": "https://www.jup.ag/",
      "HashKey Group": "https://group.hashkey.com/en/",
    },

    productLinks: {
      "Qualified custody": "https://www.bitgo.com/products/qualified-custody/",
      "Self-custody wallets (multisig/MPC)": "https://www.bitgo.com/products/self-custody/",
      "BitGo Prime (trading, financing, settlement)": "https://www.bitgo.com/products/prime/",
      "Staking": "https://www.bitgo.com/products/staking/",
      "Stablecoin-as-a-Service": "https://www.bitgo.com/products/stablecoin-as-a-service/",
      "Wrapped Bitcoin custodian": "https://wbtc.network",
    },
    facts: {
      founded: "2013",
      description:
        "Institutional digital-asset infrastructure company providing regulated custody, self-custody wallets, prime trading, staking, and stablecoin services from regulated cold storage.",
      products: ["Qualified custody", "Self-custody wallets (multisig/MPC)", "BitGo Prime (trading, financing, settlement)", "Staking", "Stablecoin-as-a-Service", "Wrapped Bitcoin custodian"],
      funding: "Reported $154.5M across Series A–C — $12M Series A led by Redpoint Ventures (2014), $42.5M Series B led by Valor Equity Partners (2017), $100M Series C at a $1.75B valuation (Aug 2023); ~$198.5M NYSE IPO at $18/share (Jan 2026)",
      stage: "Launched BitGo Trust Company (2018); New York trust charter (2021); OCC approval to convert to a national trust bank (Dec 2025); listed on NYSE as BTGO (Jan 2026)",
      partners: ["World Liberty Financial (USD1)", "SoFi", "Hana Bank", "Jupiter", "HashKey Group"],
      tech: [
        "Qualified, bankruptcy-remote custody via BitGo Bank & Trust, N.A. (OCC-regulated) and BitGo New York Trust Company (NYDFS-regulated).",
        "Self-custody wallets use 2-of-3 multisig and MPC/threshold-signature structures where no single key can authorize a transaction.",
        "More than 95% of client assets held in cold storage (as of December 31, 2025).",
        "Supports 1,770+ digital assets with qualified custody across both custodied and self-custody wallet products.",
        "Custodian of Wrapped Bitcoin (WBTC) through its joint venture with BiT Global.",
      ],
      metrics: [
        "Assets on Platform: ~$81.6B (as of December 2025, Form 10-K)",
        "Clients: 5,320+ across 100+ countries (as of December 2025, Form 10-K)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bitgo.com" },
        { label: "X (Twitter)", url: "https://x.com/BitGo" },
        { label: "SEC Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1740604/000174060426000020/btgo-form10xk.htm" },
        { label: "Yahoo Finance — charter & IPO", url: "https://finance.yahoo.com/markets/crypto/articles/chartered-december-public-january-bitgo-160345037.html" },
      ],
      people: [
        { name: "Mike Belshe", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/mikebelshe" },
        { name: "Benedict Chan", role: "CTO", linkedin: "https://www.linkedin.com/in/bencxr" },
      ],
    },
  },
  {
    id: "blindpay",
    name: "BlindPay",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Y Combinator": "https://www.ycombinator.com/",
      "Circle Ventures": "https://www.circle.com/circle-ventures",
      "Bitso Business": "https://business.bitso.com/",
      "468 Capital": "https://468cap.com/",
      "Transpose Platform": "https://www.transposeplatform.vc/",
    },

    productLinks: {
      "Stablecoin payouts": "https://blindpay.com/global-payments",
      "Stablecoin pay-ins & collections": "https://blindpay.com/global-payments",
      "Named virtual accounts": "https://blindpay.com/virtual-accounts",
      "Payment API & SDKs": "https://blindpay.com/docs/api/reference",
      "Compliance tooling (KYC/KYB)": "https://blindpay.com/compliance",
    },
    facts: {
      founded: "2024",
      description:
        "Stablecoin payments API for cross-border payouts and collections — converts USDC and USDT into local fiat over rails like Pix, SPEI, SEPA, and ACH, with built-in compliance tooling.",
      products: ["Stablecoin payouts", "Stablecoin pay-ins & collections", "Named virtual accounts", "Payment API & SDKs", "Compliance tooling (KYC/KYB)"],
      funding: "Reported $3.3M seed (Aug 2025) — Y Combinator, 468 Capital, Circle Ventures, Bitso Business, and angels incl. Jawed Karim",
      stage: "Y Combinator W25 batch (2025); $3.3M seed closed (Aug 2025); Brazilian entity operating under the Central Bank of Brazil's transitional VASP framework (Res. 520/2025)",
      partners: ["Y Combinator", "Circle Ventures", "Bitso Business", "468 Capital", "Transpose Platform"],
      tech: [
        "One OpenAPI 3.1 spec drives official SDKs in five languages: Node/TypeScript, Python, Go, PHP, and Swift (BlindPay)",
        "Nine supported chains — Ethereum, Polygon, Base, Arbitrum, Tempo, Arc, Stellar, Solana, and Tron — with EVM, Solana, and Stellar payout endpoints (BlindPay docs — supported chains)",
        "Quote-then-execute local-rail abstraction (Pix in Brazil, SPEI in Mexico) with fees locked at quote, plus Named Virtual Accounts opened in the customer's own name (BlindPay blog)",
        "AI-native surfaces: BlindPay MCP server (Jan 2026), official Agent Skills for Cursor/Claude Code/Codex (Feb 2026), and a CLI with structured JSON output (Mar 2026), with the USDB test stablecoin for sandbox builds (BlindPay blog)",
        "Open-source presence at github.com/blindpaylabs, listed in the company site's own JSON-LD sameAs data (blindpay.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://blindpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/blindpay",
        },
        {
          label: "BlindPay blog — product and engineering announcements",
          url: "https://blindpay.com/blog",
        },
        {
          label: "BlindPay docs — supported chains",
          url: "https://blindpay.com/docs/kb/supported-chains",
        },
      ],
      people: [
        { name: "Bernardo Simonassi Moura", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/bernardosm" },
        { name: "Gustavo Marinho", role: "Co-founder & CPO", linkedin: "https://www.linkedin.com/in/gustavomarinho" },
        { name: "João Borges", role: "Co-founder", linkedin: "https://www.linkedin.com/in/joaoborgesjr" },
      ],
    },
  },
  {
    id: "borderless",
    name: "Borderless",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com/",
      "Bitso": "https://bitso.com/",
      "Bridge": "https://www.bridge.xyz/",
      "Koywe": "https://www.koywe.com/",
      "Yellowcard": "https://yellowcard.io/",
      "DFNS": "https://dfns.co/",
    },

    productLinks: {
      "Stablecoin on/off-ramps": "https://borderless.xyz/platform",
      "Cross-border collections & payouts": "https://borderless.xyz/platform",
      "FX routing with provider failover": "https://borderless.xyz/platform",
      "Compliance connectivity (KYC/KYB, travel rule)": "https://borderless.xyz/platform",
    },
    facts: {
      founded: "2024",
      description:
        "Stablecoin payment-orchestration network connecting wallets, local banking rails, FX, and licensed on/off-ramp providers through one API in 113+ countries; holds no customer funds.",
      products: ["Stablecoin on/off-ramps", "Cross-border collections & payouts", "FX routing with provider failover", "Compliance connectivity (KYC/KYB, travel rule)"],
      funding: "Reported $3M pre-seed led by Amity Ventures (Oct 2024) — angels include Fireblocks co-founder Michael Shaulov and Talos founder Anton Katz",
      stage: "Emerged from stealth with $3M pre-seed (Oct 2024); Mastercard Start Path blockchain & digital-assets program (2025); launch partner in Mastercard's Crypto Partner Program (2026)",
      partners: ["Mastercard", "Bitso", "Bridge", "Koywe", "Yellowcard", "DFNS"],
      tech: [
        "Non-custodial orchestration network: one API to 19+ locally licensed on/off-ramp providers across 113+ countries and 72+ currencies — Borderless orchestrates operations, data, and compliance, never the money; funds settle directly with providers (borderless.xyz)",
        "Routing intelligence: provider reliability scoring, execution benchmarking, real-time routing, and failover across providers (borderless.xyz)",
        "SOC 2 Type II certification; flat platform fee with no FX markups and direct provider relationships (borderless.xyz)",
      ],
      metrics: [
        "Network coverage: 19+ licensed providers across 113+ countries and 72+ currencies (as of October 2026, borderless.xyz)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://borderless.xyz",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/borderlessxyz",
        },
        {
          label: "Borderless docs",
          url: "https://docs.borderless.xyz/docs/introduction",
        },
        {
          label: "PR Newswire — Mastercard Crypto Partner Program (2026)",
          url: "https://www.prnewswire.com/news-releases/mastercard-taps-borderlessxyz-for-crypto-partner-program-as-stablecoins-move-into-mainstream-adoption-302713335.html",
        },
      ],
      people: [
        { name: "Kevin Lehtiniitty", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/kevinlehtiniitty" },
        { name: "Orest Vovchak", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/orestvovchak" },
      ],
    },
  },
  {
    id: "brale",
    name: "Brale",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Coinflow (cfUSD)": "https://coinflow.cash/",
      "Rain": "https://www.rain.xyz/",
      "Canton Network": "https://www.canton.network/",
      "Lightspark": "https://www.lightspark.com/",
      "Turnkey": "https://www.turnkey.com/",
      "Etherfuse": "https://etherfuse.com/",
    },

    productLinks: {
      "Stablecoin Issuance API": "https://brale.xyz/issuance",
      "Reserve & redemption management": "https://brale.xyz/issuance",
      "Banking connectivity (ACH/wire/RTP)": "https://brale.xyz",
      "Managed custody accounts": "https://brale.xyz/wallets",
      "ION Protocol (alpha)": "https://brale.xyz/blog/introducing-ion-protocol",
    },
    facts: {
      founded: "2022",
      description:
        "Regulated stablecoin issuance platform from Dwolla founder Ben Milne — one API for branded fiat-backed stablecoins with banking rails, custody, compliance, and orchestration across 31+ blockchains.",
      products: ["Stablecoin Issuance API", "Reserve & redemption management", "Banking connectivity (ACH/wire/RTP)", "Managed custody accounts", "ION Protocol (alpha)"],
      funding: "Reported $41.1M — $11.1M seed backed by NEA (Feb 2023), $30M Series A led by Lightspeed Venture Partners (Sep 2025)",
      stage: "Stablecoin Issuance API beta (Nov 2023); MXNe Mexican-peso stablecoin with Etherfuse (May 2024); SOC 2 Type II; ION Protocol announced in alpha (Jul 2026)",
      partners: ["Coinflow (cfUSD)", "Rain", "Canton Network", "Lightspark", "Turnkey", "Etherfuse"],
      tech: [
        "Regulated stablecoin issuance via one API across 29 blockchains; mint/burn at 0 bps; 100+ programs live in production (Brale media kit)",
        "Reserve assurance mechanics: monthly independent CPA reserve attestations built from daily reporting; SOC 2 Type II; zero high findings in the most recent independent penetration test (Brale media kit)",
        "Native stablecoin issuance stack deployed on the Canton Network, participating as an active Canton validator (brale.xyz)",
      ],
      metrics: [
        "Programs live in production: 100+ (as of 2026, brale.xyz/media-kit)",
        "US jurisdictions (licensed or exempt): 47 (as of 2026, brale.xyz/media-kit)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://brale.xyz",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/brale_xyz",
        },
        {
          label: "Brale media kit — issuance scale and compliance figures",
          url: "https://brale.xyz/media-kit",
        },
        {
          label: "Brale — about",
          url: "https://brale.xyz/about/",
        },
      ],
      people: [
        { name: "Ben Milne", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/bpmilne" },
      ],
    },
  },
  {
    id: "bridge",
    name: "Bridge",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Stripe": "https://stripe.com/",
      "Visa": "https://www.visa.com/",
      "Privy": "https://www.privy.io/",
      "Phantom": "https://phantom.com/",
      "Zepz": "https://zepz.io/",
      "Airtm": "https://www.airtm.com/en/",
      "Chipper": "https://www.chippercash.com/",
    },

    productLinks: {
      "Open Issuance": "https://www.bridge.xyz/product/issuance",
      "Stablecoin-linked Visa cards": "https://www.bridge.xyz/product/cards",
      "Orchestration": "https://www.bridge.xyz/product/orchestration",
      "On/off-ramps": "https://www.bridge.xyz",
    },
    facts: {
      founded: "2022",
      description: "API platform for moving money between fiat and stablecoins.",
      products: ["Open Issuance", "Stablecoin-linked Visa cards", "Orchestration", "On/off-ramps"],
      funding: "$83M total — $5M seed (2022), $20M Series A (2023), $58M Series B led by Sequoia (Aug 2024)",
      stage: "Acquired by Stripe (~$1.1B), completed February 4, 2025",
      partners: ["Stripe", "Visa", "Privy", "Phantom", "Zepz", "Airtm", "Chipper"],
      tech: [
        "Open Issuance platform: businesses configure branded stablecoins — choosing chains, reserve strategy, and allow/blocklists — while Bridge manages reserves and mint/burn operations (Bridge API docs)",
        "Issued stablecoins deploy across Tempo, Base, Solana, Ethereum, Aptos, Sui, Polygon, Stellar, Arbitrum, Optimism, Linea, Monad, and HyperEVM (Bridge API docs)",
        "Two-loop design: USDB as Bridge's closed-loop stablecoin plus open-loop interoperability across issued coins (Bridge API docs)",
        "Stripe Issuing integration for stablecoin-backed corporate cards (announced Apr 2026), with reserves invested in US Treasuries earning 3–4% (bridge.xyz)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.bridge.xyz",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/StableCoin",
        },
        {
          label: "Bridge API docs",
          url: "https://apidocs.bridge.xyz",
        },
      ],
      people: [
        { name: "Zach Abrams", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/zacharyabrams" },
        { name: "Sean Yu", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/seanyu87" },
      ],
    },
  },
  {
    id: "bvnk",
    name: "BVNK",
    categoryId: "infrastructure",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com/",
      "Visa (Visa Ventures)": "https://www.visa.com/",
      "Worldpay": "https://www.worldpay.com/en",
      "Deel": "https://www.deel.com/",
      "Rapyd": "https://www.rapyd.net/",
      "Airtm": "https://www.airtm.com/en/",
      "Deriv": "https://www.deriv.com/",
    },

    productLinks: {
      "Stablecoin collections": "https://www.bvnk.com/payments",
      "Global payouts": "https://www.bvnk.com/payouts",
      "Fiat accounts (GBP/EUR IBANs)": "https://www.bvnk.com",
      "Fiat–stablecoin conversion": "https://www.bvnk.com",
      "Layer1 self-custody platform": "https://www.bvnk.com/layer1",
    },
    facts: {
      founded: "2021",
      description:
        "Enterprise stablecoin payments infrastructure connecting fiat accounts and banking rails with stablecoins across major blockchains — collections, payouts, treasury, and conversion through one platform.",
      products: ["Stablecoin collections", "Global payouts", "Fiat accounts (GBP/EUR IBANs)", "Fiat–stablecoin conversion", "Layer1 self-custody platform", "Virtual cards"],
      funding: "Reported $90M across two rounds — $40M Series A led by Tiger Global (May 2022), $50M Series B led by Haun Ventures at a ~$750M valuation (Dec 2024)",
      stage: "UK FCA EMI authorisation; MiCA licence in Malta; US money-transmitter approvals; >$10B annualized payment volume (2024); Visa Ventures strategic investment; Mastercard agreed to acquire BVNK for up to $1.8B (announced Mar 2026)",
      partners: ["Mastercard", "Visa (Visa Ventures)", "Worldpay", "Deel", "Rapyd", "Airtm", "Deriv"],
      tech: [
        "Layer1 platform: modular stablecoin-payment infrastructure with embedded wallets and a Treasury Rules Engine for reserve and treasury automation (bvnk.com/layer1)",
        "Chain and asset integrations with engineering changelog entries: Arc, Stellar, and USDC on Solana, Base, and Arbitrum (BVNK changelog)",
        "TRON gas-cost optimization via staking-based energy management — company reports up to ~90% lower gas costs and $2M+ annual savings (BVNK changelog)",
        "Certifications: SOC 1 Type II, SOC 2 Type II, ISO 27001:2022; 100% of customer e-money funds safeguarded; payment channels with dedicated addresses (bvnk.com)",
      ],
      metrics: [
        "Annual payment volume: $50bn+ (as of October 2026, try.bvnk.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.bvnk.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/BVNKFinance",
        },
        {
          label: "BVNK changelog — chain and asset integrations",
          url: "https://bvnk.com/changelog",
        },
        {
          label: "Reuters via Economic Times — Mastercard acquisition (Mar 2026)",
          url: "https://economictimes.indiatimes.com/tech/technology/mastercard-to-buy-stablecoin-infra-firm-bvnk-for-up-to-1-8-billion/articleshow/129633195.cms",
        },
      ],
      people: [
        { name: "Jesse Hemson-Struthers", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/jessehs" },
        { name: "Chris Harmse", role: "Co-founder & Chief Business Officer", linkedin: "https://www.linkedin.com/in/chrisharmse" },
      ],
    },
  },
];
