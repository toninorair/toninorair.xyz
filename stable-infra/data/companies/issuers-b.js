// Issuers, batch B — Qivalis through Zelle.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const ISSUERS_B = [
  {
    id: "qivalis",
    name: "Qivalis",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "ING": "https://www.ing.com",
      "BNP Paribas": "https://www.bnpparibas.com",
      "UniCredit": "https://www.unicreditgroup.eu",
      "CaixaBank": "https://www.caixabank.es",
      "BBVA": "https://www.bbva.com",
      "DZ Bank": "https://www.dzbank.com",
      "Danske Bank": "https://danskebank.com",
      "SEB": "https://sebgroup.com",
      "KBC": "https://www.kbc.com",
      "Raiffeisen Bank International": "https://www.rbinternational.com",
    },

    productLinks: {
      "Euro-referenced EMT stablecoin (pre-launch)": "https://qivalis.eu/",
      "24/7 cross-border business payments": "https://qivalis.eu/",
      "Programmable payments": "https://qivalis.eu/",
      "Digital-asset settlement": "https://qivalis.eu/",
    },
    facts: {
      founded: "2025",
      description:
        "Amsterdam-based electronic money institution owned by a consortium of European banks, preparing a fully reserved, MiCA-compliant euro stablecoin.",
      products: [
        "Euro-referenced EMT stablecoin (pre-launch)",
        "24/7 cross-border business payments",
        "Programmable payments",
        "Digital-asset settlement",
      ],
      funding:
        "Reported: bank-consortium capitalization — 37 European banks across 15 countries; no publicly announced venture rounds",
      stage:
        "Incorporated Sep 2025; consortium announced Dec 2025 with ten banks; authorised as an EMI by De Nederlandsche Bank (Oct 14, 2026); issuance targeted from late 2026",
      partners: [
        "ING",
        "BNP Paribas",
        "UniCredit",
        "CaixaBank",
        "BBVA",
        "DZ Bank",
        "Danske Bank",
        "SEB",
        "KBC",
        "Raiffeisen Bank International",
      ],
      tech: [
        "Authorised by De Nederlandsche Bank as an electronic money institution for issuing, distributing and redeeming electronic money — the licence under which the euro EMT will be issued",
        "Planned 1:1-backed, fully reserved euro EMT under MiCA, with issuance gated on completing MiCA requirements and publishing the token white paper",
        "B2B2X distribution model: Qivalis handles issuance and redemption while banks, exchanges, payment-service providers and custodians integrate the token",
      ],
      links: [
        { label: "Website (official)", url: "https://qivalis.eu/" },
        { label: "X (Twitter)", url: "https://x.com/qivaliseu" },
        {
          label: "Qivalis — DNB EMI authorisation (press release)",
          url: "https://qivalis.eu/press/news/qivalis-receives-authorisation-as-an-electronic-money-institution-from-de-nederlandsche-bank",
        },
        {
          label: "Paperjam — consortium launch",
          url: "https://en.paperjam.lu/article/qivalis-10-bank-eu-consortiums-euro-stablecoin-issuer",
        },
      ],
      people: [
        { name: "Jan-Oliver Sell", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/jan-sell" },
      ],
    },
  },
  {
    id: "quantoz",
    name: "Quantoz",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Kraken": "https://www.kraken.com",
      "Bitfinex": "https://www.bitfinex.com",
      "Tether": "https://tether.to",
      "Fabric Ventures": "https://www.fabric.vc",
      "21X": "https://21x.eu",
      "Zodia Markets": "https://www.zodiamarkets.com",
    },

    productLinks: {
      "EURQ (euro EMT)": "https://www.quantoz.com/tokens/",
      "USDQ (dollar EMT)": "https://www.quantoz.com/tokens/",
      "EURD (euro EMT for consumer payments)": "https://www.quantoz.com/tokens/",
      "PLNQ and GBPQ (2026)": "https://www.quantoz.com/tokens/",
    },
    facts: {
      founded: "2015",
      description:
        "Utrecht-based payments technology company issuing MiCA-compliant euro and US dollar stablecoins as a Dutch electronic money institution.",
      products: [
        "EURQ (euro EMT)",
        "USDQ (dollar EMT)",
        "EURD (euro EMT for consumer payments)",
        "PLNQ and GBPQ (2026)",
      ],
      funding:
        "Reported: undisclosed investment from Fabric Ventures, Kraken and Tether (Nov 2024); no other publicly announced rounds",
      stage:
        "Quantoz Payments founded 2021; DNB EMI licence (Oct 2023); EURD issued 2024; EURQ and USDQ launched on Ethereum (Nov 18, 2024); PLNQ and GBPQ added (Apr 2026) for five licensed tokens",
      partners: ["Kraken", "Bitfinex", "Tether", "Fabric Ventures", "21X", "Zodia Markets"],
      tech: [
        "Modular-API digital money platform pairing vIBAN accounts, wallets and treasury with regulated stablecoin issuance and redemption — company-reported 10+ years in production, 100M+ transactions and 200,000+ tx/day",
        "EURQ and USDQ are minted at par and redeemable at par directly from the issuer; reserves are segregated through Stichting Quantoz and held as deposits at Tier-1 European banks",
        "Tokens deployed on Ethereum, Polygon, Algorand, Stellar and XRP Ledger, with cross-chain movement via LayerZero/Stargate (initially Ethereum and Polygon)",
        "ISO 27001-certified, ISAE 3402 Type II-audited and DORA-aligned platform; DNB-supervised EMI licence passported across the EEA",
      ],
      metrics: [
        "EURQ circulating supply: 3.35M (as of November 2026, CoinMarketCap)",
        "USDQ circulating supply: 7.98M (as of November 2026, CoinMarketCap)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.quantoz.com/" },
        { label: "X (Twitter)", url: "https://x.com/Quantoz" },
        { label: "quantoz.com — token pages", url: "https://www.quantoz.com/tokens/" },
        {
          label: "Quantoz — LayerZero/Stargate cross-chain (X)",
          url: "https://x.com/Quantoz/status/1973298036450156818",
        },
      ],
      people: [
        { name: "Gaston Hendriks", role: "Co-founder & Director", linkedin: "https://www.linkedin.com/in/hendriksgaston" },
        { name: "Nicholas Eastham", role: "Co-founder", linkedin: "https://www.linkedin.com/in/nicholaseastham" },
      ],
    },
  },
  {
    id: "ripple",
    name: "Ripple",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Uphold": "https://uphold.com",
      "Bitso": "https://www.bitso.com",
      "MoonPay": "https://www.moonpay.com",
      "Bullish": "https://www.bullish.com",
      "Bitstamp": "https://www.bitstamp.net",
      "Zero Hash": "https://zerohash.com",
      "Coinbase": "https://www.coinbase.com",
      "Archax": "https://www.archax.com",
      "CoinMENA": "https://www.coinmena.com",
    },

    productLinks: {
      "RLUSD stablecoin": "https://ripple.com/products/stablecoin/",
      "Ripple Payments": "https://ripple.com/products/cross-border-payments/",
      "Digital-asset custody (Metaco)": "https://ripple.com/products/custody/",
      "Prime brokerage (Hidden Road)": "https://ripple.com/products/prime-brokerage/",
    },
    facts: {
      founded: "2012",
      description:
        "Digital-asset infrastructure company issuing RLUSD, a dollar stablecoin for payments and institutional settlement on the XRP Ledger and Ethereum.",
      products: [
        "RLUSD stablecoin",
        "Ripple Payments",
        "Digital-asset custody (Metaco)",
        "Prime brokerage (Hidden Road)",
      ],
      funding:
        "Reported ~$287M total disclosed equity — incl. $200M Series C (Dec 2019); no external rounds since",
      stage:
        "Acquired Metaco ($250M, 2023) and Standard Custody (2024); launched RLUSD (Dec 2024); acquired Hidden Road ($1.25B, closed Oct 2025); OCC final approval for a national trust bank (Oct 2026)",
      partners: ["Uphold", "Bitso", "MoonPay", "Bullish", "Bitstamp", "Zero Hash", "Coinbase", "Archax", "CoinMENA"],
      tech: [
        "RLUSD issued natively on the XRP Ledger and Ethereum and deployed across seven networks — adding Base, Optimism, Ink, Unichain and the XRPL EVM sidechain",
        "Monthly third-party attestations validate RLUSD circulating supply and reserve assets, published on the RLUSD transparency page",
        "XRPL-native issuance controls: trust lines, issuer clawback for compliance, and native AMM liquidity through XRP/RLUSD pools",
        "Institutional custody stack (Metaco) reported securing 1,000,000+ wallets",
      ],
      metrics: [
        "RLUSD in circulation: $2,627.0M with $2,758.6M in reserve funds (as of October 2026, Ripple RLUSD monthly attestation)",
        "RLUSD circulating supply: 2.60B (as of November 2026, CoinGecko)",
      ],
      links: [
        { label: "Website (official)", url: "https://ripple.com/" },
        { label: "X (Twitter)", url: "https://x.com/Ripple" },
        { label: "ripple.com — RLUSD", url: "https://ripple.com/products/stablecoin/" },
        {
          label: "RLUSD transparency — attestations",
          url: "https://ripple.com/products/stablecoin/transparency/",
        },
      ],
      people: [
        { name: "Brad Garlinghouse", role: "CEO", x: "https://x.com/bgarlinghouse" },
      ],
    },
  },
  {
    id: "schuman",
    name: "Schuman",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Société Générale": "https://www.societegenerale.com",
      "KPMG": "https://kpmg.com",
      "RockawayX": "https://www.rockawayx.com",
      "XRP Ledger": "https://xrpl.org",
      "Ethereum": "https://ethereum.org",
      "Polygon": "https://polygon.technology",
    },

    productLinks: {
      "EURØP euro stablecoin": "https://schuman.io/",
      "On-chain FX and payments": "https://schuman.io/",
      "Tokenised real-world asset support": "https://schuman.io/smart-contracts",
    },
    facts: {
      founded: "2024",
      description:
        "Independent European company issuing EURØP, a MiCA-compliant euro stablecoin, through its French-regulated issuer Salvus SAS.",
      products: ["EURØP euro stablecoin", "On-chain FX and payments", "Tokenised real-world asset support"],
      funding:
        "Reported €7M seed led by RockawayX (Sep 2024) — with Lightspeed Faction, Kraken Ventures, Nexo Ventures, Gnosis VC, Delta Blockchain Fund and Bankless Ventures",
      stage:
        "Acquired Salvus SAS, the first French EMT licence holder under MiCA (ACPR); public launch (Nov 2024); EURØP first MiCA-compliant euro stablecoin native on the XRP Ledger (May 2025)",
      partners: ["Société Générale", "KPMG", "RockawayX", "XRP Ledger", "Ethereum", "Polygon"],
      tech: [
        "EURØP minting platform for qualified business clients with direct issuer redemption; reserves held in cash and cash equivalents at European institutions including Société Générale and attested quarterly by KPMG",
        "First MiCA-compliant euro stablecoin natively integrated on the XRP Ledger (May 2025), with deployments across Ethereum, Polygon, Avalanche and Plasma",
      ],
      metrics: [
        "EURØP in circulation: 6,840,292 (as of June 2026, Salvus SAS statutory auditor attestation)",
        "EURØP circulating supply: 13.57M (as of November 2026, CoinGecko)",
      ],
      links: [
        { label: "Website (official)", url: "https://schuman.io/" },
        { label: "X (Twitter)", url: "https://x.com/Schuman_io" },
        {
          label: "EURØP on the XRP Ledger",
          url: "https://schuman.io/blog/schuman-financials-europ-becomes-first-mica-compliant-euro-stablecoin-integrated-on-the-xrp-ledger/",
        },
        {
          label: "Salvus SAS — EURØP circulation attestation (Jun 2026, PDF)",
          url: "https://schuman.io/wp-content/uploads/2026/07/SALVUS_Attestation_relative_au_nombre_de_jetons_EUROP_30_06_2026.pdf",
        },
      ],
      people: [
        { name: "Nicholas Pouzin", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/npouzin" },
      ],
    },
  },
  {
    id: "sky",
    name: "Sky",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Spark": "https://spark.fi",
      "Grove": "https://grove.finance",
      "Centrifuge": "https://centrifuge.io",
      "Janus Henderson": "https://www.janushenderson.com",
      "Wormhole": "https://wormhole.com",
      "Kamino": "https://kamino.com",
      "Jupiter": "https://jup.ag",
    },

    productLinks: {
      "USDS stablecoin": "https://www.sky.money/",
      "DAI (legacy)": "https://www.sky.money/",
      "SKY governance token": "https://www.sky.money/",
      "sUSDS savings token": "https://www.sky.money/susds",
    },
    facts: {
      founded: "2014",
      description:
        "Decentralised stablecoin protocol formerly known as MakerDAO; issues USDS, the successor to DAI, governed by SKY holders.",
      products: ["USDS stablecoin", "DAI (legacy)", "SKY governance token", "sUSDS savings token"],
      funding:
        "Reported: no venture equity rounds — funded by the protocol balance sheet and revenue; historic MKR token sales to a16z, Dragonfly and Paradigm",
      stage:
        "MakerDAO founded by Rune Christensen (2014); rebranded to Sky (Aug 2024); USDS and SKY live (Sep 2024); USDS native on Solana via Wormhole (Nov 2024); $1B Grove allocation to tokenised AAA CLOs with Janus Henderson and Centrifuge (2025)",
      partners: ["Spark", "Grove", "Centrifuge", "Janus Henderson", "Wormhole", "Kamino", "Jupiter"],
      tech: [
        "USDS issued by the decentralised Sky Protocol through overcollateralised vaults, with legacy DAI upgradable 1:1 to USDS and governed by SKY holders",
        "sUSDS savings token is an ERC-4626 vault whose exchange value accrues the governance-set Sky Savings Rate rather than paying interest directly",
        "Native USDS expansion beyond Ethereum — including Solana via Wormhole's Native Token Transfers framework — alongside Base, Arbitrum, OP Mainnet and Unichain deployments",
      ],
      metrics: [
        "USDS and DAI in circulation: $9.54B (as of November 2026, sky.money)",
        "sUSDS supply: 4.51B (as of November 2026, sky.money)",
        "Sky Savings Rate: 3.80% APY (as of November 2026, sky.money)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.sky.money/" },
        { label: "X (Twitter)", url: "https://x.com/SkyEcosystem" },
        { label: "Sky docs", url: "https://insights.skyeco.com/sky-documentation" },
        { label: "sky.money — sUSDS", url: "https://sky.money/susds" },
      ],
      people: [
        { name: "Rune Christensen", role: "Co-founder", linkedin: "https://www.linkedin.com/in/runebentsenchristensen", x: "https://x.com/RuneKek" },
      ],
    },
  },
  {
    id: "societe-generale",
    name: "Société Générale",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Bitpanda": "https://www.bitpanda.com",
      "Bullish Europe": "https://www.bullish.com",
      "Wintermute": "https://www.wintermute.com",
      "Flowdesk": "https://www.flowdesk.co",
      "Bitstamp": "https://www.bitstamp.net",
      "Morpho": "https://morpho.org",
      "Uniswap": "https://uniswap.org",
      "Stellar": "https://stellar.org",
    },

    productLinks: {
      "EURCV euro stablecoin": "https://www.sgforge.com/product/coinvertible/",
      "USDCV dollar stablecoin": "https://www.sgforge.com/product/coinvertible/",
      "Digital-asset custody and issuance services": "https://www.sgforge.com/product/",
    },
    facts: {
      founded: "1864",
      description:
        "Major French bank whose subsidiary SG-FORGE issues the MiCA-compliant EUR CoinVertible (EURCV) and USD CoinVertible (USDCV) stablecoins.",
      products: ["EURCV euro stablecoin", "USDCV dollar stablecoin", "Digital-asset custody and issuance services"],
      funding: "Reported: wholly owned by Société Générale (founded 1864) — no external funding rounds",
      stage:
        "SG-FORGE subsidiary launched EURCV (Apr 2023); first AMF-licensed digital-asset service provider in France (Jul 2023); ACPR EMI authorisation; EURCV upgraded to a freely transferable MiCA EMT (Jul 2024); USDCV launched (Jun 2025)",
      partners: ["Bitpanda", "Bullish Europe", "Wintermute", "Flowdesk", "Bitstamp", "Morpho", "Uniswap", "Stellar"],
      tech: [
        "First bank-issued stablecoin on a public blockchain: EURCV launched April 2023 on Ethereum, issued by SG-FORGE, Société Générale's digital-asset subsidiary (Source: https://www.sgforge.com/product/coinvertible/)",
        "MiCA restructure July 2024: EURCV became a freely transferable e-money token (Source: https://www.sgforge.com/stablecoin-elevation/)",
        "Multichain expansion: the 2026 EURCV whitepaper covers Ethereum, Solana, XRPL, Stellar, and Canton (Source: https://www.sgforge.com/product/coinvertible/)",
        "DeFi deployment: EURCV and USDCV made available on Uniswap and Morpho via partners (Sep 2025) (Source: https://www.sgforge.com/product/coinvertible/)",
        "Mint/redemption at par via a segregated collateral account; EURCV contract 0x5F7827FDeb7c20b443265Fc2F40845B715385Ff2 on Ethereum (Source: https://www.sgforge.com/product/coinvertible/)",
      ],
      metrics: [
        "EURCV in circulation: €173,644,800.93 (as of October 2026, SG-FORGE CoinVertible product page)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.sgforge.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/SG_Forge",
        },
        {
          label: "SG-FORGE — CoinVertible product page (EURCV circulating supply)",
          url: "https://www.sgforge.com/product/coinvertible/",
        },
        {
          label: "SG-FORGE — EURCV stablecoin elevation to e-money token (Jul 2024)",
          url: "https://www.sgforge.com/stablecoin-elevation/",
        },
      ],
      people: [
        { name: "Jean-Marc Stenger", role: "CEO, Société Générale-FORGE", linkedin: "https://www.linkedin.com/in/jean-marc-stenger-89115040" },
      ],
    },
  },
  {
    id: "straitsx",
    name: "StraitsX",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "DBS": "https://www.dbs.com",
      "Standard Chartered": "https://www.sc.com",
      "Visa": "https://www.visa.com",
      "Grab": "https://www.grab.com",
      "Alipay+": "https://www.alipayplus.com",
      "OKX Singapore": "https://www.okx.com",
      "KASIKORNBANK": "https://www.kasikornbank.com",
    },

    productLinks: {
      "XSGD stablecoin": "https://www.straitsx.com/xsgd",
      "XUSD stablecoin": "https://www.straitsx.com/xusd",
      "Digital payment token services": "https://www.straitsx.com/platform",
      "Stablecoin-backed card programmes": "https://www.straitsx.com/platform/card-issuance",
    },
    facts: {
      founded: "2016",
      description:
        "Southeast Asian stablecoin infrastructure provider (formerly Xfers, part of Fazz Financial) issuing the XSGD Singapore dollar and XUSD US dollar stablecoins.",
      products: [
        "XSGD stablecoin",
        "XUSD stablecoin",
        "Digital payment token services",
        "Stablecoin-backed card programmes",
      ],
      funding:
        "Reported — part of Fazz Financial: $100M Series C (2022; Tiger Global, DST Global, B Capital, Insignia Ventures), $30M PayFazz–Xfers merger investment (2021), $10M UQPAY strategic investment (2025)",
      stage:
        "Founded as Xfers (2016); XSGD launched (Oct 2020); MAS Major Payment Institution licences for its issuance entities with the XUSD launch (Jul 2024); XSGD and XUSD acknowledged as compliant with MAS's stablecoin framework; reported $18B+ on-chain volume (2025)",
      partners: ["DBS", "Standard Chartered", "Visa", "Grab", "Alipay+", "OKX Singapore", "KASIKORNBANK"],
      tech: [
        "XSGD — Singapore's first SGD stablecoin; issuer licensed and regulated by the Monetary Authority of Singapore (Major Payment Institution licence) (Source: https://www.straitsx.com/blog-post/introducing-xsgd-the-singapore-dollar-backed-and-travel-rule1-compliant-stablecoin)",
        "Per-network token contracts published for Ethereum, Polygon, Solana, Avalanche, Arbitrum, and XRPL (Source: https://www.straitsx.com/)",
        "XSGD and XUSD live on Solana (Mar 2026), with native XSGD/XUSD issuance on Monad planned early 2027 (Oct 2026) (Source: https://www.straitsx.com/)",
        "Monthly third-party attestation reports on reserves, plus the StraitsX ON platform and Dedicated Virtual Accounts fiat-to-stablecoin rails and a Visa partnership (Source: https://www.straitsx.com/)",
      ],
      metrics: [
        "XSGD circulating supply: ~16.5 million (as of October 2026, Blockhead reporting on-chain data)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.straitsx.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/StraitsX",
        },
        {
          label: "StraitsX — MPI licenses secured and XUSD stablecoin launched",
          url: "https://www.straitsx.com/blog-post/straitsx-secures-major-payment-institution-licenses-and-launches-xusd-stablecoin",
        },
        {
          label: "StraitsX — introducing XSGD, Singapore's SGD-backed stablecoin",
          url: "https://www.straitsx.com/blog-post/introducing-xsgd-the-singapore-dollar-backed-and-travel-rule1-compliant-stablecoin",
        },
      ],
      people: [
        { name: "Tianwei Liu", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/tianweiliu", x: "https://x.com/Tian_wei" },
      ],
    },
  },
  {
    id: "tether",
    name: "Tether",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Anchorage Digital": "https://www.anchorage.com",
      "Bitfinex": "https://www.bitfinex.com",
    },

    productLinks: {
      "USDT stablecoin": "https://tether.to/",
      "USAT US-regulated token": "https://usat.io/",
      "Hadron tokenization platform": "https://hadron.tether.to/en",
    },
    facts: {
      founded: "2014",
      description:
        "Issuer of USDT, the world's largest stablecoin, alongside a US-regulated dollar token (USAT) issued through Anchorage Digital Bank.",
      products: ["USDT stablecoin", "USAT US-regulated token", "Hadron tokenization platform"],
      funding: "Reported: no publicly announced venture rounds — privately held under iFinex (Bitfinex's parent)",
      stage:
        "Founded as Realcoin, renamed Tether (2014); USDT market cap passed $100B (2024); relocated HQ to El Salvador with a local stablecoin licence (2025); USAT launched via Anchorage Digital Bank (Jan 2026); reported ~$13B profit (2024) and $10B+ (2025)",
      partners: ["Anchorage Digital", "Bitfinex"],
      tech: [
        "WDK (Wallet Development Kit): self-custodial wallet and payments toolkit for apps and devices (Source: https://tether.to/)",
        "Hadron: institutional asset-tokenization platform covering issuance, compliance, and lifecycle management (Source: https://tether.to/)",
        "Mint/burn mechanics with chain-specific issuance and redemption moving supply across chains (Source: https://tether.to/)",
        "Quarterly reserve attestations prepared by BDO; the Q3 2026 attestation reported ~$1.5B net operating profit (Source: https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/)",
        "Freeze capability demonstrated: over $1.5B frozen from the Binance hack (Nov 2026) (Source: https://x.com/tether)",
      ],
      metrics: [
        "USDT circulating supply: ~178.3B across 51 chains (as of November 4, 2026, DefiLlama; CoinGecko reports 178,373,746,488 USDT)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://tether.to/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/tether",
        },
        {
          label: "Tether — $10B profits in 2025, record U.S. Treasury exposure",
          url: "https://tether.io/news/tether-delivers-10b-profits-in-2025-6-3b-in-excess-reserves-and-record-141-billion-exposure-in-u-s-treasury-holdings/",
        },
        {
          label: "Anchorage Digital — Tether and Anchorage introduce USAT",
          url: "https://www.anchorage.com/insights/anchorage-digital-tether-introduce-usat",
        },
      ],
      people: [
        { name: "Paolo Ardoino", role: "CEO", x: "https://x.com/paoloardoino" },
      ],
    },
  },
  {
    id: "world-liberty-financial",
    name: "World Liberty Financial",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "BitGo": "https://www.bitgo.com",
      "Binance": "https://www.binance.com",
      "MGX": "https://www.mgx.ae",
      "Ethereum": "https://ethereum.org",
      "BNB Chain": "https://www.bnbchain.org",
    },

    productLinks: {
      "USD1 stablecoin": "https://worldlibertyfinancial.com/usd1",
      "WLFI governance token": "https://worldlibertyfinancial.com/",
    },
    facts: {
      founded: "2024",
      description:
        "DeFi venture co-founded by the Trump family and the Witkoffs that issues USD1, a dollar stablecoin backed by US Treasuries and cash equivalents.",
      products: ["USD1 stablecoin", "WLFI governance token"],
      funding:
        "Reported ~$550M raised via WLFI token sales — ~$300M initial sale plus $250M second sale (2024–25); no announced equity rounds",
      stage:
        "USD1 announced (Mar 2025); reserves custodied by BitGo Trust; MGX's $2B investment into Binance settled in USD1 and Binance listed USD1 (May 2025)",
      partners: ["BitGo", "Binance", "MGX", "Ethereum", "BNB Chain"],
      tech: [
        "USD1 minted and redeemed through BitGo's regulated trust infrastructure; World Liberty Financial owns the brand while BitGo holds reserves and custody (Source: https://worldlibertyfinancial.com/)",
        "1:1 backing: short-term U.S. treasuries, government money-market funds, dollar deposits, and cash equivalents (Source: https://worldlibertyfinancial.com/)",
        "Multichain native deployments including Solana and Tempo (TIP-20 token), across 8+ chains per official updates (Source: https://worldlibertyfinancial.com/)",
        "WLFI staking rewards paid in USD1, verifiable on-chain (Source: https://worldlibertyfinancial.com/)",
      ],
      metrics: [
        "USD1 circulating supply: 3,685,182,990 (market cap ~$3.68B) (as of November 2026, CoinMarketCap)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://worldlibertyfinancial.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/worldlibertyfi",
        },
        {
          label: "Wikipedia — World Liberty Financial",
          url: "https://en.wikipedia.org/wiki/World_Liberty_Financial",
        },
        {
          label: "Binance Academy — what is World Liberty Financial USD (USD1)",
          url: "https://www.binance.com/en/academy/articles/what-is-world-liberty-financial-usd-usd1",
        },
      ],
      people: [
        { name: "Zach Witkoff", role: "Co-founder & CEO", x: "https://x.com/ZachWitkoff" },
      ],
    },
  },
  {
    id: "zelle",
    name: "Zelle",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Bank of America": "https://www.bankofamerica.com",
      "JPMorgan Chase": "https://www.jpmorganchase.com",
      "Wells Fargo": "https://www.wellsfargo.com",
      "PNC Bank": "https://www.pnc.com",
      "Truist": "https://www.truist.com",
      "U.S. Bank": "https://www.usbank.com",
      "Capital One": "https://www.capitalone.com",
    },

    productLinks: {
      "Zelle P2P network": "https://www.zelle.com/",
      "ZelleUSD (ZLUSD) stablecoin": "https://www.zelle.com/press-releases/zelle-heads-to-india-unveils-zelleusdsm-stablecoin-other-markets",
      "Zelle international remittances": "https://www.zelle.com/",
    },
    facts: {
      founded: "2017",
      description:
        "US bank-owned P2P payments network operated by Early Warning Services, now issuing ZelleUSD (ZLUSD) to power international transfers.",
      products: ["Zelle P2P network", "ZelleUSD (ZLUSD) stablecoin", "Zelle international remittances"],
      funding:
        "Reported: bank-owned — capitalized by Early Warning Services' seven bank owners; no publicly announced funding rounds",
      stage:
        "Zelle network launched (2017) and now clears $1T+ in annual payments; stablecoin initiative announced (Oct 2025); ZelleUSD unveiled with India as the first international market (Jun 2026); minting reported underway (Jul 2026)",
      partners: ["Bank of America", "JPMorgan Chase", "Wells Fargo", "PNC Bank", "Truist", "U.S. Bank", "Capital One"],
      tech: [
        "Bank-integrated real-time network connecting 2,400+ banks and credit unions; direct account-to-account payments typically within minutes (Source: https://www.zelle.com/)",
        "Fraud and scam detection on \"Trust Signals\" (billions of signals) with real-time payment interdiction (Source: https://www.zelle.com/)",
        "FI integration paths: direct integration and reseller/partner onboarding (Source: https://www.zelle.com/)",
        "Oct 2025 cross-border expansion initiative, with stablecoin settlement cited in the announcement (Source: https://www.earlywarning.com/press-release/zelle-goes-international-early-warning-expands-1t-payments-network-stablecoin)",
      ],
      metrics: [
        "Payments sent: $1.2T+ across 4.2B transactions in 2025 (as of December 2025, Zelle/Early Warning press release)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.zelle.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Zelle",
        },
        {
          label: "Early Warning — Zelle goes international, stablecoin settlement expansion",
          url: "https://www.earlywarning.com/press-release/zelle-goes-international-early-warning-expands-1t-payments-network-stablecoin",
        },
        {
          label: "Zelle — Zelle heads to India, unveils ZelleUSD stablecoin",
          url: "https://www.zelle.com/press-releases/zelle-heads-to-india-unveils-zelleusdsm-stablecoin-other-markets",
        },
      ],
      people: [
        { name: "Cameron Fowler", role: "CEO, Early Warning Services (Zelle's operator)", linkedin: "https://www.linkedin.com/in/cafowler" },
      ],
    },
  },
];
