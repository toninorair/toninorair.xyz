// Issuers, batch A — Agora through Paxos.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const ISSUERS_A = [
  {
    id: "agora",
    name: "Agora",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "VanEck": "https://vaneck.com",
      "State Street": "https://www.statestreet.com",
      "Polygon": "https://polygon.technology",
      "Injective": "https://injective.com",
      "LayerZero": "https://layerzero.network",
      "Monad": "https://monad.xyz",
    },

    productLinks: {
      "AUSD stablecoin": "https://www.agora.finance/product/ausd",
      "Stablecoin API": "https://www.agora.finance/product/stablecoin-api",
      "White-label stablecoin issuance": "https://www.agora.finance",
      "Stable Swaps": "https://www.agora.finance",
    },
    facts: {
      founded: "2023",
      description:
        "Stablecoin issuer and infrastructure platform behind AUSD, a fully reserved digital dollar, with APIs and white-label issuance for businesses.",
      products: ["AUSD stablecoin", "Stablecoin API", "White-label stablecoin issuance", "Stable Swaps"],
      funding:
        "$62M total — $12M seed led by Dragonfly (Apr 2024), $50M Series A led by Paradigm (Jul 2025)",
      stage:
        "AUSD launched Jul 2024 with reserves managed by VanEck and custodied by State Street; Bermuda Class F digital-asset license; preliminary conditional OCC approval for Agora National Trust Bank (Sep 2026)",
      partners: ["VanEck", "State Street", "Polygon", "Injective", "LayerZero", "Monad"],
      tech: [
        "Programmatic 1:1 mint/redeem infrastructure for verified customers — AUSD is redeemable at par with no basis-point fee on redemptions.",
        "Reserves managed by VanEck and custodied at State Street, limited to short-term US Treasuries, overnight repo and other liquid assets.",
        "Grant Thornton LLP serves as financial statement auditor and provides independent attestations on AUSD reserves; internal controls co-sourced with a Big Four firm.",
        "AUSD0, built with LayerZero's chain coverage and Stargate's frontend, extends AUSD across ecosystems without wrapped representations.",
        "Natively deployed across 11+ chains (Ethereum, Solana, Sui, Monad, Avalanche, Arbitrum, Base and others) with supply aggregated across native token contracts.",
      ],
      metrics: [
        "Circulating supply: 175.1M AUSD (as of November 2026, DIA on-chain data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.agora.finance" },
        { label: "X (Twitter)", url: "https://x.com/withAUSD" },
        {
          label: "Fortune — $50M Series A",
          url: "https://fortune.com/crypto/2025/07/10/exclusive-agora-stablecoin-series-a-venture-paradigm-crypto-van-eck/",
        },
        {
          label: "DIA — AUSD on-chain supply",
          url: "https://www.diadata.org/map/global-stablecoins/stablecoin/ausd/",
        },
      ],
      people: [
        { name: "Nick van Eck", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/nick-van-eck-17036212a", x: "https://x.com/Nick_van_Eck" },
      ],
    },
  },
  {
    id: "allunity",
    name: "AllUnity",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "DWS": "https://www.dws.com",
      "Flow Traders": "https://www.flowtraders.com",
      "Galaxy": "https://www.galaxy.com",
      "Metzler Bank": "https://www.metzler.com",
      "Deutsche Börse Group": "https://www.deutsche-boerse.com",
      "Fireblocks": "https://www.fireblocks.com",
      "BitGo": "https://www.bitgo.com",
    },

    productLinks: {
      "EURAU euro stablecoin": "https://allunity.com/eurau",
      "Institutional settlement": "https://allunity.com/on-chain-settlement",
      "Planned CHFAU and SEKAU stablecoins": "https://allunity.com/stablecoins",
    },
    facts: {
      founded: "2024",
      description:
        "BaFin-regulated German e-money institution and joint venture of DWS, Flow Traders and Galaxy, issuing the MiCA-compliant euro stablecoin EURAU.",
      products: ["EURAU euro stablecoin", "Institutional settlement", "Planned CHFAU and SEKAU stablecoins"],
      funding:
        "No announced venture rounds — capitalized and owned by founding partners DWS (Deutsche Bank Group), Flow Traders and Galaxy since the Dec 2023 announcement",
      stage:
        "BaFin EMI license (Jul 2025); EURAU launched on Ethereum as Germany's first fully reserved, MiCA-compliant euro stablecoin (Jul 31, 2025); Deutsche Börse Group MoU (Nov 2025)",
      partners: ["DWS", "Flow Traders", "Galaxy", "Metzler Bank", "Deutsche Börse Group", "Fireblocks", "BitGo"],
      tech: [
        "EURAU is a MiCA e-money token issued under a BaFin EMI license, redeemable 1:1 at par at any time under Art. 49 MiCA, with an Art. 51 white paper published.",
        "Multi-bank euro reserve model — 1:1 euro reserves held with regulated banking partners including V-Bank, Banking Circle and Metzler.",
        "Institutional custody through Fireblocks, BitGo, Zodia, Copper, Dfns and Tangany.",
        "Multichain expansion from Ethereum to Optimism, Arbitrum, Base, Stellar and Solana, with Chainlink-powered cross-chain payments.",
        "Smart-contract audits (Softstack, Hacken) and security reviews (Oak Security) across deployment environments.",
      ],
      metrics: [
        "EURAU total value locked: $20.44M (as of December 2025, AllUnity year in review)",
      ],
      links: [
        { label: "Website (official)", url: "https://allunity.com" },
        { label: "X (Twitter)", url: "https://x.com/AllUnityStable" },
        {
          label: "Galaxy — JV announcement",
          url: "https://www.galaxy.com/newsroom/galaxy-dws-flow-traders-allunity-regulated-eur-denominated-stablecoin",
        },
        {
          label: "AllUnity — 2025 year in review",
          url: "https://allunity.com/articles/allunitys-2025-year-in-review-from-license-to-live-infrastructure",
        },
      ],
      people: [
        { name: "Alexander Höptner", role: "CEO", linkedin: "https://www.linkedin.com/in/alexander-hoeptner-0a00962" },
      ],
    },
  },
  {
    id: "banking-circle",
    name: "Banking Circle",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Binance": "https://www.binance.com",
      "Fireblocks": "https://www.fireblocks.com",
      "Circle": "https://www.circle.com",
      "Bridge (Stripe)": "https://bridge.xyz",
      "AllUnity": "https://allunity.com",
      "Checkout.com": "https://www.checkout.com",
    },

    productLinks: {
      "Cross-border payments": "https://www.bankingcircle.com",
      "Multi-currency accounts and virtual IBANs": "https://www.bankingcircle.com/accounts/",
      "EURI euro stablecoin": "https://www.bankingcircle.com/products/euri",
      "Stablecoin settlement": "https://www.bankingcircle.com",
    },
    facts: {
      founded: "2013",
      description:
        "Luxembourg-based regulated payments bank serving banks and payment companies, now offering MiCA-compliant stablecoin settlement and the EURI euro stablecoin.",
      products: [
        "Cross-border payments",
        "Multi-currency accounts and virtual IBANs",
        "EURI euro stablecoin",
        "Stablecoin settlement",
      ],
      funding:
        "No announced venture rounds — acquired by EQT VIII and EQT Ventures from Saxo Bank in a reported $300M deal (Jul 2018)",
      stage:
        "Founded as Saxo Payments (2013), renamed Banking Circle (2017); Luxembourg banking license (announced Feb 2020); EURI launched with Binance distribution and Fireblocks technology (Aug 2024); Luxembourg CASP license and stablecoin settlement services (Apr 2026)",
      partners: ["Binance", "Fireblocks", "Circle", "Bridge (Stripe)", "AllUnity", "Checkout.com"],
      tech: [
        "EURI minting and burning run through the Fireblocks Tokenization Engine secured by MPC-CMP key management — EURI is minted as euros arrive and burned on redemption, with governance and Elliptic-integrated policy controls.",
        "First bank-backed, MiCA-compliant euro stablecoin issued by a Luxembourg credit institution (CSSF-supervised), structured as an e-money token under MiCA.",
        "Stablecoin settlement inside regulated bank infrastructure — 24/7 fiat-to-stablecoin and stablecoin-to-fiat conversion for EURI, USDC, USDG and EURC, launched under Luxembourg CASP authorization (Apr 2026).",
      ],
      metrics: [
        "EURI circulating supply: 32.6M EURI, about $36.6M (as of November 2026, DIA on-chain data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bankingcircle.com" },
        { label: "X (Twitter) — Eurite (EURI) product account", url: "https://x.com/Eurite_BC" },
        {
          label: "TechCrunch — $300M EQT acquisition",
          url: "https://techcrunch.com/2018/07/09/eqt-acquires-b2b-payment-transfer-business-banking-circle-from-saxo-bank-for-300m/",
        },
        {
          label: "DIA — EURI on-chain supply",
          url: "https://www.diadata.org/map/global-stablecoins/stablecoin/euri/",
        },
      ],
      people: [
        { name: "Kush Saxena", role: "Group CEO", linkedin: "https://www.linkedin.com/in/kush-saxena-9472665" },
      ],
    },
  },
  {
    id: "circle",
    name: "Circle",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase": "https://www.coinbase.com",
      "Binance": "https://www.binance.com",
      "SBI Holdings": "https://www.sbigroup.co.jp",
      "Corpay": "https://www.corpay.com",
      "FIS": "https://www.fisglobal.com",
      "Fiserv": "https://www.fiserv.com",
      "OKX": "https://www.okx.com",
    },

    productLinks: {
      "USDC": "https://www.circle.com/usdc",
      "EURC": "https://www.circle.com/eurc",
      "Circle Payments Network": "https://www.circle.com/cpn",
      "Circle Mint": "https://www.circle.com/circle-mint",
      "CCTP": "https://www.circle.com/cctp",
      "Arc blockchain": "https://arc.io/network",
    },
    facts: {
      founded: "2013",
      description:
        "Financial technology firm and issuer of USDC and EURC, building payments, tokenization and blockchain infrastructure around regulated stablecoins.",
      products: ["USDC", "EURC", "Circle Payments Network", "Circle Mint", "CCTP", "Arc blockchain"],
      funding:
        "Reported $840M venture financing — $440M (May 2021, incl. Fidelity and Digital Currency Group), $400M (Apr 2022, incl. BlackRock and Fidelity) — then a $1.05B NYSE IPO at $31/share (Jun 2025)",
      stage:
        "First NYDFS BitLicense (2015); USDC launched with Coinbase via the Centre consortium (2018); Centre dissolved with Coinbase taking a minority stake (2023); Circle Payments Network launched (May 2025); first major US stablecoin issuer to go public — NYSE: CRCL (Jun 2025)",
      partners: ["Coinbase", "Binance", "SBI Holdings", "Corpay", "FIS", "Fiserv", "OKX"],
      tech: [
        "CCTP (Cross-Chain Transfer Protocol) moves USDC natively via burn-and-mint — no wrapped or liquidity-pool representations; the legacy V1 phase-out began July 31, 2026.",
        "USDC is natively issued on 38 blockchains, and Gateway provides a unified USDC balance with crosschain liquidity in under 500 ms.",
        "Arc, a Layer-1 blockchain for financial markets (mainnet September 2026): EVM-compatible, USDC-denominated gas, deterministic sub-second finality, permissioned founding validators with a proof-of-stake roadmap.",
        "Company-published mint/redeem throughput: over $315B of USDC minted and redeemed in H1 2026, about $1.7B every day.",
      ],
      metrics: [
        "USDC in circulation: $69.8B (as of November 2026, Circle)",
        "Average USDC in circulation: $73.3B (as of Q3 2026, Circle Q3 results)",
        "USDC onchain transaction volume: $13.9T (as of Q3 2026, Circle Q3 results)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.circle.com" },
        { label: "X (Twitter)", url: "https://x.com/circle" },
        {
          label: "Reuters — $1.05B IPO",
          url: "https://www.reuters.com/technology/stablecoin-issuer-circle-raises-105-billion-upsized-us-ipo-2025-06-04/",
        },
        {
          label: "Circle — Q3 2026 results",
          url: "https://www.circle.com/pressroom/circle-reports-third-quarter-2026-results",
        },
      ],
      people: [
        { name: "Jeremy Allaire", role: "Co-founder, Chairman & CEO", linkedin: "https://www.linkedin.com/in/jeremyallaire", x: "https://x.com/jerallaire" },
      ],
    },
  },
  {
    id: "ethena",
    name: "Ethena",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Dragonfly": "https://www.dragonfly.xyz",
      "Binance": "https://www.binance.com",
      "Bybit": "https://www.bybit.com",
      "Franklin Templeton": "https://www.franklintempleton.com",
      "Securitize": "https://www.securitize.io",
      "TON": "https://ton.org",
    },

    productLinks: {
      "USDe": "https://ethena.fi",
      "sUSDe": "https://ethena.fi",
      "USDtb": "https://usdtb.money/",
      "Converge (with Securitize)": "https://www.convergeonchain.xyz/",
    },
    facts: {
      founded: "2023",
      description:
        "Protocol company behind USDe, a synthetic dollar backed by delta-hedged crypto collateral, plus the sUSDe yield instrument and fiat-backed USDtb.",
      products: ["USDe", "sUSDe", "USDtb", "ENA token", "Converge (with Securitize)"],
      funding:
        "Reported $120M — $6M seed led by Dragonfly (Jul 2023), $14M strategic round co-led by Dragonfly and Maelstrom (Feb 2024), $100M ENA token sale (Feb 2025, incl. Franklin Templeton, Pantera and Polychain)",
      stage:
        "USDe launched Feb 2024 and passed $1B in supply within a month; ENA governance token (Apr 2024); Converge chain announced with Securitize (2025)",
      partners: ["Dragonfly", "Binance", "Bybit", "Franklin Templeton", "Securitize", "TON"],
      tech: [
        "Delta-hedged synthetic dollar: volatile collateral (ETH and staked-ETH variants) is backed by roughly equal-notional short perpetual/futures positions, so spot moves are offset by hedge gains.",
        "Backing is held through on-chain and off-exchange custody arrangements — collateral may be posted as margin but custody is not transferred to derivatives venues.",
        "sUSDe, the staked USDe wrapper, accrues rewards through a rising exchange value; negative-funding periods are absorbed by the Reserve Fund rather than turning rewards negative.",
        "Open-source core maintained on GitHub (ethena-labs), covering USDe/sUSDe contracts and protocol tooling.",
      ],
      metrics: [
        "USDe on-chain supply: $4.6B (as of November 2026, DIA on-chain data)",
        "sUSDe supply: $915M (as of November 2026, DIA on-chain data)",
      ],
      links: [
        { label: "Website (official)", url: "https://ethena.fi" },
        { label: "X (Twitter)", url: "https://x.com/ethena_labs" },
        {
          label: "Business Wire — USDe passes $1B",
          url: "https://www.businesswire.com/news/home/20240319861848/en/Ethenas-Synthetic-Dollar-USDe-Exceeds-$1B-Supply",
        },
        {
          label: "DIA — USDe on-chain supply",
          url: "https://www.diadata.org/map/global-stablecoins/issuer/ethena-labs/",
        },
      ],
      people: [
        { name: "Guy Young", role: "Co-founder & CEO", x: "https://x.com/gdog97_" },
      ],
    },
  },
  {
    id: "first-digital",
    name: "First Digital",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Binance": "https://www.binance.com",
      "Ethereum": "https://ethereum.org",
      "BNB Chain": "https://www.bnbchain.org",
      "CSLM (KOYN)": "https://koynspac.com",
    },

    productLinks: {
      "FDUSD stablecoin": "https://www.firstdigitallabs.com/fdusd",
      "Trust and custody": "https://1stdigital.com",
      "Stablecoin-as-a-service": "https://1stdigital.com",
      "Stablecoin payments infrastructure": "https://1stdigital.com",
    },
    facts: {
      founded: "2019",
      description:
        "Hong Kong-headquartered digital-asset trust and custody group whose First Digital Labs issues the FDUSD stablecoin.",
      products: ["FDUSD stablecoin", "Trust and custody", "Stablecoin-as-a-service", "Stablecoin payments infrastructure"],
      funding:
        "No announced venture rounds — agreed Oct 2026 to combine with SPAC CSLM Digital Asset Acquisition Corp III (Nasdaq: KOYN) at a reported ~$250M pre-money valuation",
      stage:
        "Grew out of Legacy Trust; First Digital Trust established 2019; FDUSD launched (Jun 2023) and listed on Binance (Jul 2023); passed $1B market cap within six months (Dec 2023) and peaked above $4.4B (Apr 2024); Nasdaq SPAC agreement (Oct 2026)",
      partners: ["Binance", "Ethereum", "BNB Chain", "CSLM (KOYN)"],
      tech: [
        "FDUSD is fully backed 1:1 by cash and cash equivalents — short-dated U.S. Treasury bills (89.16%), cash (10.26%), fixed deposit (0.58%) as of Sep 30, 2026 — in a bankruptcy-remote trust structure, with monthly independent reserve attestations published under ISAE 3000 (Revised) by AOGB CPA Limited (First Digital Labs FDUSD page)",
        "FDUSD is issued natively (not bridged) on Ethereum, BNB Chain, Sui, Solana, Arbitrum and TON, with per-chain contract addresses published on the official page; the Ethereum/BNB deployments share contract 0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409 (First Digital Labs FDUSD page)",
        "Smart-contract audits are listed per deployment: Quantstamp and PeckShield on the Ethereum/BNB Chain/Arbitrum contracts, OtterSec on the Sui contract (First Digital Labs FDUSD page)",
        "Issued by FD121 (BVI) Limited with reserves held by First Digital Trust (Hong Kong-licensed trust) in segregated accounts; zero-fee mint/redeem for clients subject to AML/CTF checks (First Digital Labs / DIA stablecoin map)",
        "No official X (Twitter) account could be verified — 1stdigital.com and firstdigitallabs.com publish no social links (checked homepage, /fdusd, /about, /contact and page sources); the @FDLabsHQ handle appears only on third-party mirrors and cannot be confirmed as official",
      ],
      metrics: [
        "FDUSD circulating supply: 293.88M FDUSD (as of November 2026, CoinGecko)",
        "Tokens issued and in circulation: $325.0M against $326.3M reserves (as of September 2026, First Digital Labs FDUSD page)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://1stdigital.com",
        },
        {
          label: "First Digital Labs — FDUSD",
          url: "https://www.firstdigitallabs.com/fdusd",
        },
        {
          label: "DIA stablecoin map — First Digital",
          url: "https://www.diadata.org/map/global-stablecoins/stablecoin/fdusd/",
        },
        {
          label: "SEC exhibit — Nasdaq listing agreement",
          url: "https://www.sec.gov/Archives/edgar/data/2068454/000182912625009580/cslmacq3_ex99-1.htm",
        },
      ],
      people: [
        { name: "Vincent Chok", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/vchok", x: "https://x.com/vchok" },
      ],
    },
  },
  {
    id: "frax",
    name: "Frax",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "BlackRock (BUIDL)": "https://www.blackrock.com",
      "Superstate": "https://superstate.co",
      "Securitize": "https://www.securitize.io",
      "WisdomTree": "https://www.wisdomtree.com",
      "Paxos": "https://www.paxos.com",
      "BitGo": "https://www.bitgo.com",
      "Aave": "https://aave.com",
    },

    productLinks: {
      "frxUSD": "https://frax.com/frxUSD",
      "sfrxUSD": "https://docs.frax.com/protocol/assets/frxusd/sfrxusd",
      "frxETH / sfrxETH": "https://docs.frax.com/protocol/assets/frxeth/frxeth_sfrxeth",
      "Fraxtal blockchain": "https://frax.com",
      "Fraxlend": "https://frax.com/lend",
      "Fraxswap": "https://app.frax.finance/fraxswap",
    },
    facts: {
      founded: "2019",
      description:
        "DeFi protocol behind frxUSD, a fully backed dollar stablecoin with reserves tied to tokenized Treasury funds, alongside the Fraxtal blockchain and liquid-staking products.",
      products: ["frxUSD", "sfrxUSD", "frxETH / sfrxETH", "Fraxtal blockchain", "Fraxlend", "Fraxswap"],
      funding:
        "No disclosed round sizes — strategic financing (Jul 2021, investors incl. Dragonfly, Electric Capital and Robot Ventures); $50M frxUSD investment commitment from ATW Partners (Jan 2026)",
      stage:
        "FRAX, the first fractional-algorithmic stablecoin, launched Dec 2020; governance vote to full collateralization (Feb 2023); frxUSD launched backed by tokenized Treasuries (Jan 2025)",
      partners: ["BlackRock (BUIDL)", "Superstate", "Securitize", "WisdomTree", "Paxos", "BitGo", "Aave"],
      tech: [
        "Mint/burn via enshrined custodian contracts: an approved custodian deposits or proves control of $1 of an eligible reserve asset and mints 1 frxUSD through its frxUSDCustodian contract; returning 1 frxUSD releases 1 unit of the custodied asset; each custodian has a governance-approved minting cap (Frax docs)",
        "Tokenized-Treasury reserves: frxUSD is fully collateralized by permitted cash-equivalent tokenized funds — BlackRock BUIDL, Superstate USTB, WisdomTree WTGXX, JTRSY, AUSD — held with regulated asset managers; a Nov 2026 on-chain snapshot showed ~$15.8M BUIDL and ~$21.8M USTB in the redemption structure (Frax docs; frax.com)",
        "Fiat redeemable 1:1; the protocol claims more than $1 billion in frxUSD PegKeeper trading volume validating the peg model (official @fraxfinance announcement, May 2026)",
        "Third-party verified backing: Frax partnered with DefiLlama on its first asset-verification page (Nov 2026), showing real-time on-chain backing for frxUSD (DefiLlama official announcement)",
        "Frax operates its own high-performance EVM Layer 1 (Fraxtal); frxUSD circulates across chains with ~10% of supply native on Fraxtal (frax.com)",
      ],
      metrics: [
        "frxUSD circulating supply: 95.98M frxUSD (as of November 2026, CoinGecko)",
        "sfrxUSD circulating supply: 28.37M sfrxUSD (as of November 2026, CoinGecko)",
        "All Frax stablecoins combined: $221.1M on-chain supply (as of November 2026, DIA stablecoin map)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://frax.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/fraxfinance",
        },
        {
          label: "Frax docs — frxUSD mint/burn mechanics",
          url: "https://docs.frax.com/protocol/assets/frxusd/frxusd",
        },
        {
          label: "frax.finance — legacy protocol domain",
          url: "https://frax.finance",
        },
      ],
      people: [
        { name: "Sam Kazemian", role: "Co-founder & CEO", x: "https://x.com/samkazemian" },
        { name: "Travis Moore", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/travis-moore-0a74a4135" },
      ],
    },
  },
  {
    id: "jpyc",
    name: "JPYC",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "Headline Asia": "https://headline.com",
      "Circle Ventures": "https://www.circle.com",
      "Asteria": "https://www.asteria.com",
      "Elliptic": "https://www.elliptic.co",
      "Sony Bank": "https://sonybank.jp",
      "TIS": "https://www.tis.co.jp",
    },

    productLinks: {
      "JPYC yen stablecoin": "https://jpyc.jp",
      "JPYC EX issuance platform": "https://jpyc.co.jp/",
    },
    facts: {
      founded: "2019",
      description:
        "Tokyo fintech issuing JPYC, the first regulated Japanese yen stablecoin, backed 1:1 by yen deposits and Japanese government bonds.",
      products: ["JPYC yen stablecoin", "JPYC EX issuance platform", "JPYC SDK"],
      funding:
        "Reported ~¥2.3B (~$16M) — ¥500M ($4.4M) Series A led by Headline Asia with Circle Ventures (Nov 2021), ¥1.78B (~$12M) Series B first close led by Asteria (2026)",
      stage:
        "Registered as a funds-transfer service provider under Japan's Payment Services Act — the first yen-pegged stablecoin issuer (Aug 2025); JPYC and JPYC EX launched (Oct 27, 2025); issued on Ethereum, Polygon and Avalanche",
      partners: ["Headline Asia", "Circle Ventures", "Asteria", "Elliptic", "Sony Bank", "TIS"],
      tech: [
        "JPYC Inc. is registered as a funds-transfer service provider under Japan's Payment Services Act — the first registration authorizing a yen-pegged stablecoin issuer (Aug 2025); JPYC and the JPYC EX issuance platform launched Oct 27, 2025 (Reuters)",
        "Issued natively as ERC-20 on Ethereum, Polygon and Avalanche, with support reported on Kaia; each chain has its own token contract, and the Polygon, Shiden and Astar contracts have been migrated to newer versions (CoinGecko; Digital Today)",
        "Mint/burn mechanics: clients complete KYC and wire yen via JPYC EX; JPYC Inc. mints JPYC against received funds and burns tokens on redemption — centrally controlled issuance/redemption, no algorithmic or bridge mechanism (DefiLlama methodology)",
        "Backing model: 1 JPYC = ¥1, backed by yen deposits and Japanese government bonds (short-term government-related assets) (CoinGecko and company materials)",
      ],
      metrics: [
        "JPYC circulating supply: ~3.06 billion JPYC (as of October 2026, DefiLlama; CoinGecko shows 2.6B under different contract/chain coverage)",
        "Cumulative issuance: over ¥12 billion (as of October 2026, company announcement reported by Digital Today)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://jpyc.jp",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/jpy_coin",
        },
        {
          label: "Reuters — yen stablecoin debut",
          url: "https://www.reuters.com/sustainability/boards-policy-regulation/worlds-first-yen-pegged-stablecoin-debuts-japan-2025-10-27/",
        },
        {
          label: "Series A announcement (PR Times)",
          url: "https://prtimes.jp/main/html/rd/p/000000092.000054018.html",
        },
      ],
      people: [
        { name: "Noritaka Okabe", role: "Founder & CEO", x: "https://x.com/noritaka_okabe" },
      ],
    },
  },
  {
    id: "monerium",
    name: "Monerium",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "ConsenSys": "https://consensys.io",
      "Crowberry Capital": "https://www.crowberrycapital.com",
      "Tradeshift": "https://tradeshift.com",
      "Morpho": "https://morpho.org",
      "KPK": "https://kpk.io",
    },

    productLinks: {
      "EURe e-money token": "https://monerium.com/eure",
      "Blockchain IBANs": "https://monerium.com",
      "Fiat on/off-ramps": "https://monerium.com",
      "Programmable settlement": "https://monerium.com",
    },
    facts: {
      founded: "2015",
      description:
        "Icelandic regulated e-money institution issuing EURe, an on-chain euro e-money token redeemable 1:1 and connected to bank accounts through blockchain IBANs.",
      products: ["EURe e-money token", "Blockchain IBANs", "Fiat on/off-ramps", "Programmable settlement"],
      funding:
        "Reported $8M — $2M seed led by Crowberry Capital with ConsenSys (Jan 2019), $4M led by founders of Wise and Teleport (Sep 2021)",
      stage:
        "World's first e-money license authorizing issuance on blockchains, from Iceland's financial supervisor (Jun 2019); license passported across the EEA (2020); blockchain IBANs launched (Sep 2021); EURe lending live on Arbitrum via Morpho",
      partners: ["ConsenSys", "Crowberry Capital", "Tradeshift", "Morpho", "KPK"],
      tech: [
        "IBAN ↔ on-chain mint/burn rail: each customer gets a dedicated IBAN in their own name; SEPA payments to it are automatically minted as EURe into the linked wallet, and outgoing SEPA transfers burn EURe — a fully automated fiat↔token settlement loop (monerium.com/partners)",
        "Regulated e-money architecture: Monerium hf. is an Electronic Money Institution and VASP authorized by the Financial Supervisory Authority of the Central Bank of Iceland (Act No. 17/2013 and No. 18/2018), passported across the EEA — the world's first e-money license authorizing issuance on blockchains (2019) (monerium.com; e-money license announcement)",
        "Token standards: EURe implements ERC-20, ERC-2612 (Permit) and ERC-1271 on EVM networks; available on Ethereum, Gnosis, Polygon, Arbitrum, Base and Linea, with Noble support identified in product information (monerium.com/partners and /eure)",
        "Overcollateralization and audits: each EURe is backed by more than 100% in high-quality liquid assets in segregated accounts, and the token smart contracts are audited by independent security firms (monerium.com)",
        "DeFi integrations: EURe lending live on Arbitrum through Morpho (KPK-curated vault) and an EURe/frxUSD liquidity pool live on Uniswap on Polygon, connecting regulated euro payments to on-chain FX (monerium.com blog)",
      ],
      metrics: [
        "EURe circulating supply: 26.17M EURe (as of November 2026, CoinGecko)",
        "Payment volume: over €9 billion in the last 12 months (as of November 2026, monerium.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://monerium.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/monerium",
        },
        {
          label: "E-money license announcement",
          url: "https://monerium.com/press/20190614-emi/",
        },
        {
          label: "Monerium partners — how the fiat↔token rail works",
          url: "https://monerium.com/partners/",
        },
      ],
      people: [
        { name: "Gísli Kristjánsson", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/gislik" },
        { name: "Sveinn Valfells", role: "Co-founder & Chair", linkedin: "https://www.linkedin.com/in/sveinn-valfells" },
        { name: "Jón Helgi Egilsson", role: "Co-founder", linkedin: "https://www.linkedin.com/in/egilsson" },
      ],
    },
  },
  {
    id: "paxos",
    name: "Paxos",
    categoryId: "issuers",
    profileStatus: "complete",
    partnerLinks: {
      "PayPal": "https://www.paypal.com",
      "Venmo": "https://venmo.com",
      "Interactive Brokers": "https://www.interactivebrokers.com",
      "Mastercard": "https://www.mastercard.com",
      "Mercado Libre": "https://www.mercadolibre.com",
      "Nubank": "https://www.nubank.com.br",
      "Revolut": "https://www.revolut.com",
      "Kraken": "https://www.kraken.com",
      "Robinhood": "https://www.robinhood.com",
    },

    productLinks: {
      "PYUSD (for PayPal)": "https://www.paxos.com/assets/pyusd",
      "USDP": "https://www.paxos.com/assets/usdp",
      "PAXG": "https://www.paxos.com/assets/paxg",
      "USDG (Global Dollar Network)": "https://www.paxos.com/assets/usdg",
      "Crypto brokerage and custody": "https://www.paxos.com/crypto-brokerage/overview",
      "Settlement services": "https://www.paxos.com/paxos-securities-settlement",
    },
    facts: {
      founded: "2012",
      description:
        "Regulated blockchain infrastructure and tokenization company that issues PYUSD for PayPal alongside its own USDP, PAXG and USDG stablecoins.",
      products: [
        "PYUSD (for PayPal)",
        "USDP",
        "PAXG",
        "USDG (Global Dollar Network)",
        "Crypto brokerage and custody",
        "Settlement services",
      ],
      funding:
        "Reported $500M+ — $65M (May 2018), $142M Series C led by Declaration Partners (Dec 2020), $300M Series D led by Oak HC/FT at a $2.4B valuation (Apr 2021)",
      stage:
        "First NYDFS limited-purpose trust charter for digital assets (2015); Paxos Standard, among the first regulated stablecoins (2018); began issuing PYUSD for PayPal (Aug 2023); Singapore MAS Major Payment Institution license; OCC national trust charter conversion (2025)",
      partners: [
        "PayPal",
        "Venmo",
        "Interactive Brokers",
        "Mastercard",
        "Mercado Libre",
        "Nubank",
        "Revolut",
        "Kraken",
        "Robinhood",
      ],
      tech: [
        "Unified mint/redeem infrastructure: a single platform/API for minting, redeeming and converting its regulated stablecoins (PYUSD, USDP, USDG, PAXG), with institutional mint-and-burn access and 1:1 redeemability at face value (paxos.com/mint-and-redeem)",
        "PYUSD multi-chain issuance: issued natively on Ethereum and Solana (native token implementations on each, with token-level compliance capabilities on Solana) and available on Arbitrum, X Layer, Stellar, Polygon and others; Paxos coordinates aggregate supply across chains against reserves (paxos.com PYUSD asset page; Paxos docs)",
        "Regulated trust engineering: first NYDFS limited-purpose trust charter for digital assets (2015); Paxos Trust Company, N.A. now overseen by the OCC as a national trust (2025, \"GENIUS-ready\"); MAS Major Payment Institution license (Singapore, 2022 — first US blockchain infrastructure platform to get it); monthly reserve reports published (paxos.com/company)",
        "PAXG tokenized gold: each token backs one fine troy ounce of London Good Delivery gold in Paxos Trust custody, with a per-token serial-number/weight/vault lookup tool (paxg.com), monthly attestations, and 18-decimal divisibility (paxos.com PAXG asset page)",
        "USDG / Global Dollar Network: USDG issued by Paxos Digital Singapore (MAS-compliant) and Paxos Issuance Europe, natively on seven chains, with 175+ network partners sharing rewards and daily-calculated holding rewards; reserves in segregated cash and short-term US government securities (paxos.com USDG asset page; Paxos newsroom)",
      ],
      metrics: [
        "PYUSD in circulation: $2.5B+ (as of November 2026, Paxos PYUSD asset page)",
        "USDG in circulation: $3B+ (as of November 2026, Paxos USDG asset page)",
        "PAXG approximate value in circulation: ~$2B (as of November 2026, Paxos PAXG asset page)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.paxos.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Paxos",
        },
        {
          label: "Paxos — mint and redeem platform",
          url: "https://www.paxos.com/mint-and-redeem",
        },
        {
          label: "PayPal PYUSD launch",
          url: "https://www.paxos.com/newsroom/paypal-launches-us-dollar-backed-stablecoin",
        },
      ],
      people: [
        { name: "Charles Cascarilla", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/charlescascarilla" },
      ],
    },
  },
];
