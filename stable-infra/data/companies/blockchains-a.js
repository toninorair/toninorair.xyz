// Blockchains, batch A — Aptos through Ethereum.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const BLOCKCHAINS_A = [
  {
    id: "aptos",
    name: "Aptos",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "a16z Crypto": "https://a16zcrypto.com",
      "Microsoft": "https://www.microsoft.com",
      "Franklin Templeton": "https://www.franklintempleton.com",
      "Circle (USDC)": "https://www.circle.com",
      "Binance Labs": "https://www.yzilabs.com",
      "Dragonfly": "https://dragonfly.xyz",
    },
    productLinks: {
      "Aptos layer-1 blockchain": "https://aptosfoundation.org",
      "Move smart-contract platform": "https://aptos.dev",
      "Aptos Foundation builder funding": "https://aptosfoundation.org",
    },

    facts: {
      founded: "2022",
      description:
        "Move-based layer-1 blockchain built by Aptos Labs, founded by former Meta/Diem engineers, focused on high-throughput payments, tokenization and trading workloads.",
      products: ["Aptos layer-1 blockchain", "Move smart-contract platform", "Aptos Foundation builder funding"],
      funding:
        "Reported ~$400M — $200M strategic round led by a16z Crypto (Mar 2022), $150M Series A led by FTX Ventures and Jump Crypto at a reported ~$2B valuation (Jul 2022), plus Binance Labs and Dragonfly investment (2022)",
      stage:
        "Aptos Labs founded by ex-Meta/Diem engineers Mo Shaikh and Avery Ching (Jan 2022); mainnet launched as the first Move-based blockchain (Oct 18, 2022); Aptos Foundation committed $150M+ to ecosystem builders in 2025 and $50M+ across products, research and trading/AI partnerships in 2026",
      partners: ["a16z Crypto", "Microsoft", "Franklin Templeton", "Circle (USDC)", "Binance Labs", "Dragonfly"],
      tech: [
        "Move-language smart contracts: a resource-oriented type system designed to prevent asset-duplication and authorization bugs in token and payments code (Aptos Labs)",
        "Sub-second transaction latency from optimistic parallel execution (Block-STM) and the Mysticeti consensus line, per Aptos Labs",
        "Open-source Rust core maintained by Aptos Labs at github.com/aptos-labs/aptos-core",
        "Native USDC issued directly by Circle on Aptos since Jan 30, 2025, with CCTP burn-and-mint transfers to nine other chains — no bridging required",
      ],
      metrics: [
        "DeFi TVL: $40M (as of November 2026, DefiLlama)",
        "Stablecoin supply on-chain: $779M (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://aptoslabs.com" },
        { label: "X (Twitter)", url: "https://x.com/aptoslabs" },
        {
          label: "Aptos Labs — sub-second latency (Block-STM, Mysticeti)",
          url: "https://medium.com/aptoslabs/sub-second-latency-aptos-delivers-instant-transactions-4f6e8113c788",
        },
        { label: "Circle — USDC on Aptos", url: "https://www.circle.com/multi-chain-usdc/aptos" },
      ],
      people: [
        { name: "Avery Ching", role: "Co-Founder & CEO, Aptos Labs", linkedin: "https://www.linkedin.com/in/averyching" },
      ],
    },
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Ethereum Foundation": "https://ethereum.org/en/foundation/",
      "Lightspeed Venture Partners": "https://lsvp.com",
      "Robinhood Chain": "https://robinhood.com",
      "Espresso Systems": "https://www.espressosys.com",
      "Chainlink": "https://chain.link",
      "Uniswap": "https://uniswap.org",
    },
    productLinks: {
      "Arbitrum One": "https://arbitrum.io",
      "Arbitrum Orbit app chains": "https://arbitrum.io/orbit",
      "Stylus (Rust/C/C++ contracts)": "https://arbitrum.io/stylus",
      "ARB token / Arbitrum DAO": "https://docs.arbitrum.foundation/concepts/arbitrum-dao",
    },

    facts: {
      founded: "2018",
      description:
        "Ethereum layer-2 scaling ecosystem (Arbitrum One, Nova and Orbit chains) built by Offchain Labs and governed by the ARB-token Arbitrum DAO.",
      products: ["Arbitrum One", "Arbitrum Nova", "Arbitrum Orbit app chains", "Stylus (Rust/C/C++ contracts)", "ARB token / Arbitrum DAO"],
      funding:
        "Reported ~$144M — $3.7M seed led by Pantera Capital (Apr 2019), $20M Series A (Apr 2021), $120M Series B led by Lightspeed Venture Partners at a $1.2B valuation (Aug 2021)",
      stage:
        "Offchain Labs founded by Ed Felten, Steven Goldfeder and Harry Kalodner (2018); Arbitrum One launched on Ethereum mainnet (Aug 31, 2021); ARB token and DAO governance (Mar 2023); Stylus went live on mainnet (Sep 2024); enterprise services for Robinhood Chain's mainnet launch (2026)",
      partners: ["Ethereum Foundation", "Lightspeed Venture Partners", "Robinhood Chain", "Espresso Systems", "Chainlink", "Uniswap"],
      tech: [
        "Nitro — the open-source optimistic-rollup execution stack (github.com/OffchainLabs/nitro) that powers Arbitrum One, Nova and Orbit chains with Ethereum tooling compatibility",
        "Stylus lets contracts written in Rust, C and C++ compile to WASM and run alongside EVM contracts on mainnet (live Sep 2024)",
        "Orbit framework lets institutions and app teams launch customizable Arbitrum chains with their own fee, gas-token and permission policies",
        "Native USDC issued directly by Circle on Arbitrum — no third-party bridge wrapper",
      ],
      metrics: [
        "DeFi TVL: $1.49B (as of November 2026, DefiLlama)",
        "Stablecoin supply on-chain: $3.50B (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://arbitrum.io" },
        { label: "X (Twitter)", url: "https://x.com/arbitrum" },
        { label: "Arbitrum — Stylus live on mainnet", url: "https://blog.arbitrum.io/arbitrum-stylus-mainnet/" },
        { label: "Circle — USDC on Arbitrum", url: "https://www.circle.com/multi-chain-usdc/arbitrum" },
      ],
      people: [
        { name: "Steven Goldfeder", role: "Co-Founder & CEO, Offchain Labs", linkedin: "https://www.linkedin.com/in/sgoldfed", x: "https://x.com/sgoldfed" },
        { name: "Ed Felten", role: "Co-Founder & Chief Scientist, Offchain Labs", linkedin: "https://www.linkedin.com/in/ed-felten-275171" },
      ],
    },
  },
  {
    id: "arc",
    name: "Arc",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "BlackRock": "https://www.blackrock.com",
      "DTCC": "https://www.dtcc.com",
      "Galaxy": "https://www.galaxy.com",
      "ICE": "https://www.ice.com",
      "Mastercard": "https://www.mastercard.com",
      "Visa": "https://www.visa.com",
      "MoneyGram": "https://www.moneygram.com",
      "Standard Chartered": "https://www.sc.com/en/",
      "SBI Group": "https://www.sbigroup.co.jp/english/",
    },
    productLinks: {
      "Arc layer-1 blockchain": "https://www.arc.io",
      "USDC-native gas": "https://www.arc.io",
      "Circle Gateway / CCTP interoperability": "https://www.circle.com/cctp",
      "Integrated FX engine": "https://www.arc.io",
      "Arc App Kits": "https://www.arc.io",
    },

    facts: {
      founded: "2025",
      description:
        "Circle's EVM-compatible layer-1 blockchain purpose-built for stablecoin finance, with USDC as the native gas asset, sub-second deterministic finality and an integrated FX engine.",
      products: ["Arc layer-1 blockchain", "USDC-native gas", "Circle Gateway / CCTP interoperability", "Integrated FX engine", "Arc App Kits"],
      funding:
        "No outside venture rounds — built and funded by Circle (NYSE: CRCL, $1.05B IPO Jun 2025) since its Aug 2025 announcement",
      stage:
        "Announced by Circle (Aug 12, 2025); public testnet launched (Oct 28, 2025) and processed 700M+ transactions; public mainnet launched Sep 16, 2026 with 100+ institutional builders, interoperability across 20+ chains, and a founding validator cohort including BlackRock, DTCC, Galaxy, ICE, Mastercard, Visa, Standard Chartered and Worldpay",
      partners: ["Circle", "BlackRock", "DTCC", "Galaxy", "ICE", "Mastercard", "Visa", "MoneyGram", "Standard Chartered", "SBI Group"],
      tech: [
        "USDC as the native gas asset — transaction fees are paid in USDC, so no volatile network token is needed to pay for transactions (Circle)",
        "Deterministic sub-second finality; Circle measured ~0.5s average settlement across 700M+ testnet transactions (Jan 2026 product-vision update)",
        "Permissioned launch validator cohort of global financial institutions (BlackRock, DTCC, Galaxy, ICE, Mastercard, Visa, Standard Chartered, Worldpay) with a proof-of-stake roadmap",
        "Integrated FX engine and Circle Gateway/CCTP interoperability spanning 20+ chains",
      ],
      metrics: [
        "DeFi TVL: $644M (as of November 2026, DefiLlama)",
        "Stablecoin supply on-chain: $1.19B (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.arc.io" },
        { label: "X (Twitter)", url: "https://x.com/arc" },
        {
          label: "Circle — Arc mainnet launch",
          url: "https://investor.circle.com/news/news-details/2026/Circle-Launches-Arc-Mainnet-an-Economic-Operating-System-for-the-Internet/default.aspx",
        },
        {
          label: "Circle — product vision for 2026 (testnet settlement)",
          url: "https://www.circle.com/blog/building-the-internet-financial-system-circles-product-vision-for-2026",
        },
      ],
      people: [
        { name: "Jeremy Allaire", role: "Co-Founder, Chairman & CEO, Circle (creator of Arc)", linkedin: "https://www.linkedin.com/in/jeremyallaire" },
      ],
    },
  },
  {
    id: "avalanche",
    name: "Avalanche",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "a16z": "https://a16z.com",
      "Polychain Capital": "https://polychain.capital",
      "Galaxy": "https://www.galaxy.com",
      "Dragonfly": "https://dragonfly.xyz",
      "ParaFi Capital": "https://parafi.com",
      "CoinList": "https://coinlist.co",
    },
    productLinks: {
      "Avalanche network": "https://www.avalabs.org",
      "Avalanche L1s (formerly subnets)": "https://docs.avax.network",
      "Avalanche9000 upgrade": "https://www.avalanche.com/about/press/avalanche-momentum-accelerates-as-galaxy-dragonfly-and-parafi-lead-250m-investment-in-support-of-avalanche9000-upgrade/",
    },

    facts: {
      founded: "2018",
      description:
        "High-throughput layer-1 smart-contract platform on Avalanche consensus, developed by Ava Labs, with application-specific L1s and growing stablecoin and tokenized-asset activity.",
      products: ["Avalanche network", "Avalanche L1s (formerly subnets)", "Avalanche9000 upgrade", "Blizzard ecosystem fund"],
      funding:
        "Reported ~$890M — $6M seed led by a16z (2019), $12M private token sale (2019), $42M public token sale via CoinList (Jul 2020), $230M token sale led by Polychain and Three Arrows (Sep 2020), $350M at a reported ~$5.25B valuation (Mar 2022), $250M token sale led by Galaxy, Dragonfly and ParaFi in support of the Avalanche9000 upgrade (Dec 2024)",
      stage:
        "Ava Labs founded by Cornell professors Emin Gün Sirer, Kevin Sekniqi and Maofan 'Ted' Yin (2018); mainnet launched (Sep 2020); Avalanche9000 upgrade announced Dec 2024 to cut the cost of launching L1s; ecosystem spans institutional deployments and tokenized funds",
      partners: ["a16z", "Polychain Capital", "Galaxy", "Dragonfly", "ParaFi Capital", "CoinList"],
      tech: [
        "Avalanche9000 (Dec 2024) reworks the network's layer-1 architecture to cut the cost of launching application-specific L1s, removing the 2,000-AVAX validation floor in favor of recurring-cost economics",
        "Avalanche consensus delivers probabilistic sub-second finality on the C-Chain (Ava Labs)",
        "Open-source Go client maintained by Ava Labs at github.com/ava-labs/avalanchego",
        "Native USDC issued directly by Circle on the C-Chain, with CCTP burn-and-mint interoperability to other chains",
      ],
      metrics: [
        "DeFi TVL: $597M (as of November 2026, DefiLlama)",
        "Stablecoin supply on-chain: $1.26B (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.avalabs.org" },
        { label: "X (Twitter)", url: "https://x.com/avalabs" },
        {
          label: "Avalanche — $250M press release",
          url: "https://www.avalanche.com/about/press/avalanche-momentum-accelerates-as-galaxy-dragonfly-and-parafi-lead-250m-investment-in-support-of-avalanche9000-upgrade/",
        },
        { label: "Circle — USDC on Avalanche", url: "https://www.circle.com/multi-chain-usdc/avalanche" },
      ],
      people: [
        { name: "Emin Gün Sirer", role: "Co-Founder & CEO, Ava Labs", linkedin: "https://www.linkedin.com/in/emin-gun-sirer-0a921a4" },
        { name: "Kevin Sekniqi", role: "Co-Founder, Ava Labs", linkedin: "https://www.linkedin.com/in/sekniqi" },
        { name: "Ted Yin", role: "Co-Founder, Ava Labs", linkedin: "https://www.linkedin.com/in/maofanyin" },
      ],
    },
  },
  {
    id: "base",
    name: "Base",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase": "https://www.coinbase.com",
      "Optimism (OP Stack)": "https://www.optimism.io",
      "OP Labs": "https://www.oplabs.co",
      "Ethereum": "https://ethereum.org",
    },
    productLinks: {
      "Base L2 network": "https://www.base.org",
      "Base App (formerly Coinbase Wallet)": "https://blog.base.org/a-new-day-one",
      "x402 open payments protocol": "https://www.x402.org",
    },

    facts: {
      founded: "2023",
      description:
        "Coinbase-incubated Ethereum layer-2 built for low-cost on-chain payments and consumer apps, with no network token — ETH remains the gas asset.",
      products: ["Base L2 network", "Base App (formerly Coinbase Wallet)", "x402 open payments protocol"],
      funding:
        "No outside venture funding — incubated and backed by Coinbase (Nasdaq: COIN) since the Feb 2023 announcement",
      stage:
        "Testnet launched Feb 23, 2023 as the second L2 on Optimism's OP Stack; public mainnet (Aug 9, 2023); permissionless fault proofs (Oct 2024) and Stage 1 decentralization (2025); Coinbase Wallet relaunched as the Base App, available in 140+ countries (2025); advanced the x402 stablecoin payments protocol",
      partners: ["Coinbase", "Optimism (OP Stack)", "OP Labs", "Ethereum"],
      tech: [
        "x402: an HTTP-native stablecoin payments protocol co-developed by Base and Coinbase, contributed to the x402 Foundation at the Linux Foundation (Apr 2026) alongside Cloudflare and Shopify — enables machine-payable USDC payments for APIs and agents",
        "Built as the second L2 on Optimism's OP Stack with permissionless fault proofs activated (Oct 2024), advancing toward Stage 1 decentralized rollup security",
        "No network token — ETH remains the gas asset, so USD payments settle in USDC without ever needing a Base token",
      ],
      metrics: [
        "DeFi TVL: $6.18B (as of November 2026, DefiLlama)",
        "Stablecoin supply on-chain: $5.02B (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.base.org" },
        { label: "X (Twitter)", url: "https://x.com/base" },
        {
          label: "Coinbase Help — Introducing Base",
          url: "https://help.coinbase.com/en/coinbase/other-topics/other/base",
        },
        {
          label: "Linux Foundation — x402 Foundation launch",
          url: "https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol",
        },
      ],
      people: [
        { name: "Jesse Pollak", role: "Head of Base (creator), Coinbase", linkedin: "https://www.linkedin.com/in/jessepollak" },
      ],
    },
  },
  {
    id: "bnb-chain",
    name: "BNB Chain",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Binance": "https://www.binance.com",
      "Optimism (OP Stack)": "https://www.optimism.io",
      "Ethereum (EVM tooling)": "https://ethereum.org",
    },
    productLinks: {
      "BNB Smart Chain": "https://www.bnbchain.org/en",
      "opBNB layer-2": "https://opbnb.bnbchain.org",
      "BNB Greenfield": "https://greenfield.bnbchain.org",
      "BNB Beacon Chain (retired 2024)": "https://www.bnbchain.org/en",
    },

    facts: {
      founded: "2019",
      description:
        "Binance-initiated, community-driven blockchain ecosystem pairing the EVM-compatible BNB Smart Chain with the opBNB layer-2 and BNB Greenfield decentralized storage.",
      products: ["BNB Smart Chain", "opBNB layer-2", "BNB Greenfield", "BNB Beacon Chain (retired 2024)"],
      funding:
        "No announced outside venture rounds — initiated and backed by Binance, since grown into a community-driven, permissionless ecosystem",
      stage:
        "Binance Chain launched with BNB migrating from Ethereum (Apr 2019); EVM-compatible BNB Smart Chain (Sep 1, 2020); rebranded as BNB Chain (Feb 2022); opBNB mainnet (Sep 2023); Beacon Chain sunset completed via BNB Chain Fusion (Dec 3, 2024); hardforks since cut blocks to ~0.45s with sub-cent fees",
      partners: ["Binance", "Optimism (OP Stack)", "Ethereum (EVM tooling)"],
      tech: [
        "Open-source BSC core: bnb-chain/bsc on GitHub — a BNB Smart Chain client based on a go-ethereum fork (~3.3k stars) — plus tss-lib, a threshold-signature library for ECDSA and EDDSA (~1.1k stars), directly custody/signing-relevant (Source: https://github.com/bnb-chain)",
        "Account-abstraction engineering: official EIP-7702 demo for account abstraction via authorized operations on BSC (Source: https://www.bnbchain.org/en)",
        "Measured performance claims from the company's own site: $0.003823 average gas fee, 650ms finality, 3.037M daily active users, and 12.5M monthly active users (Source: https://www.bnbchain.org/en)",
      ],
      metrics: [
        "DeFi TVL: $5.326B (as of November 5, 2026, DefiLlama)",
        "Stablecoins on-chain market cap: $13.197B (as of November 5, 2026, DefiLlama)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.bnbchain.org/en",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/BNBChain",
        },
        {
          label: "GitHub — bnb-chain org (BSC core, tss-lib)",
          url: "https://github.com/bnb-chain",
        },
        {
          label: "DefiLlama — BNB Chain (TVL, stablecoin market cap)",
          url: "https://defillama.com/chain/bsc",
        },
      ],
      people: [
        { name: "Thomas Chen", role: "Chief Business Officer", linkedin: "https://www.linkedin.com/in/thomasxchen" },
      ],
    },
  },
  {
    id: "canton",
    name: "Canton",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Goldman Sachs": "https://www.goldmansachs.com",
      "BNP Paribas": "https://www.bnpparibas.com",
      "DTCC": "https://www.dtcc.com",
      "Tradeweb": "https://www.tradeweb.com",
      "Circle (USDCx)": "https://www.circle.com",
      "Franklin Templeton (Benji)": "https://www.franklintempleton.com",
      "HSBC": "https://www.hsbc.com",
      "LSEG": "https://www.lseg.com",
    },
    productLinks: {
      "Canton Network": "https://www.canton.network",
      "Global Synchronizer": "https://www.canton.network/global-synchronizer",
      "Canton Coin (native token)": "https://docs.canton.network/overview/understand/canton-coin",
      "Daml smart contracts": "https://www.daml.com",
    },

    facts: {
      founded: "2023",
      description:
        "Privacy-enabled public blockchain for institutional finance built on Digital Asset's Daml, connecting banks, market infrastructure and tokenized-asset apps through the Global Synchronizer.",
      products: ["Canton Network", "Global Synchronizer", "Canton Coin (native token)", "Daml smart contracts"],
      funding:
        "$135M strategic round led by DRW Venture Capital and Tradeweb Markets (Jun 2025), with BNP Paribas, Circle Ventures, Citadel Securities, DTCC, Goldman Sachs, Paxos and others",
      stage:
        "Launched by Digital Asset with 30+ participants incl. Goldman Sachs, BNP Paribas and Microsoft (May 2023); public mainnet and Global Synchronizer live (2024); Global Synchronizer Foundation under Linux Foundation governance (Jul 2024); Circle's USDCx stablecoin launched via xReserve; Franklin Templeton's Benji platform expanded onto Canton (Nov 2025); DTCC tokenization service live (Oct 2026)",
      partners: ["Goldman Sachs", "BNP Paribas", "DTCC", "Tradeweb", "Circle (USDCx)", "Franklin Templeton (Benji)", "HSBC", "LSEG"],
      tech: [
        "Privacy-enabled public chain: describes itself as the first privacy-enabled open blockchain network, enabled by unique smart contract technology (Source: https://www.canton.network)",
        "Global Synchronizer: the decentralized interoperability backbone of the Canton Network, governed neutrally by the Canton Foundation (Source: https://www.canton.network)",
        "Daml smart contracts synchronize financial markets across applications in real time (Source: https://www.canton.network)",
        "DTCC partnership to tokenize DTC-custodied U.S. Treasuries, equities, and ETFs on Canton following the SEC no-action letter for DTCC's tokenization service (Dec 2025) (Source: https://www.digitalasset.com)",
      ],
      metrics: [
        "Transactions per day: 600,000+ (as of October 2025, The Tie state-of-the-network report on canton.network)",
        "Validators: 575+ (up from 24 at launch) (as of October 2025, The Tie report on canton.network)",
        "Wallets: 28,000+ (as of October 2025, The Tie report on canton.network)",
        "Canton Coin circulating supply: 39.996B CC (market cap ~$4.023B) (as of November 5, 2026, CoinGecko)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.canton.network",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/CantonNetwork",
        },
        {
          label: "Canton Network — The Tie state-of-the-network report (Oct 2025)",
          url: "https://www.canton.network/blog/the-canton-network-series-part-4-of-5",
        },
        {
          label: "Digital Asset — Canton creator (DTCC partnership, $355M round)",
          url: "https://www.digitalasset.com",
        },
      ],
      people: [
        { name: "Yuval Rooz", role: "Co-Founder & CEO, Digital Asset (creator of Canton Network)", linkedin: "https://www.linkedin.com/in/yuvalrooz" },
      ],
    },
  },
  {
    id: "celo",
    name: "Celo",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Opera (MiniPay)": "https://www.opera.com",
      "Google Cloud": "https://cloud.google.com",
      "Deutsche Telekom": "https://www.telekom.com",
      "a16z Crypto": "https://a16zcrypto.com",
      "Polychain Capital": "https://polychain.capital",
      "Optimism (OP Stack)": "https://www.optimism.io",
      "EigenDA": "https://www.eigenda.xyz",
    },
    productLinks: {
      "Celo L2 blockchain": "https://celo.org",
      "Mento stablecoins (cUSD, cEUR)": "https://mento.org",
      "MiniPay (by Opera)": "https://minipay.to",
      "Valora wallet": "https://valoraapp.com",
    },

    facts: {
      founded: "2017",
      description:
        "Mobile-first stablecoin-payments blockchain built by cLabs, now an Ethereum layer-2 on the OP Stack with 1-second blocks, home to the Mento stablecoins and the MiniPay wallet.",
      products: ["Celo L2 blockchain", "Mento stablecoins (cUSD, cEUR)", "MiniPay (by Opera)", "Valora wallet"],
      funding:
        "Reported ~$56.5M — $6.5M (Jun 2018, incl. Coinbase Ventures, General Catalyst and a16z), $30M co-led by a16z Crypto and Polychain (Apr 2019), $20M with a16z, Greenfield One and Electric Capital alongside the Valora launch (Feb 2021)",
      stage:
        "Founded by Sep Kamvar, Rene Reinsberg and Marek Olszewski; mainnet launched on Earth Day (Apr 22, 2020); Opera's MiniPay stablecoin wallet launched on Celo (Sep 2023) and passed 11M activations; completed its transition from layer-1 to Ethereum layer-2 on the OP Stack with EigenDA (Mar 26, 2025)",
      partners: ["Opera (MiniPay)", "Google Cloud", "Deutsche Telekom", "a16z Crypto", "Polychain Capital", "Optimism (OP Stack)", "EigenDA"],
      tech: [
        "Ethereum L2 migration: OP-Stack L2 with EigenDA v2 data availability (company claim: 100mb/s capability, lower latency) and zkEVM proofs via Succinct SP1 (Source: https://celo.org)",
        "Payments-first gas design: pay gas with ERC-20 tokens including USDT and USDC; 1s block time, ~$0.0005 average gas fee, and one-block finality (Source: https://celo.org)",
        "Mento on-chain FX: 25+ local digital currencies (local stablecoins) for low-cost FX and payment apps (Source: https://docs.celo.org)",
        "ZK identity and agentic payment rails: Self Protocol privacy-preserving proof-of-humanity, x402 HTTP-402 micropayments for AI agents using stablecoins, and ERC-8004 agent-trust registries (Source: https://docs.celo.org)",
      ],
      metrics: [
        "Stablecoins on-chain market cap: $149.62M (as of November 4, 2026, DefiLlama)",
        "DeFi TVL: $13.58M (as of November 4, 2026, DefiLlama)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://celo.org",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Celo",
        },
        {
          label: "Celo docs — L2 architecture, Mento, identity and agentic rails",
          url: "https://docs.celo.org",
        },
        {
          label: "DefiLlama — Celo (TVL, stablecoin market cap)",
          url: "https://defillama.com/chain/celo",
        },
      ],
      people: [
        { name: "Rene Reinsberg", role: "Co-founder", linkedin: "https://www.linkedin.com/in/reinsberg" },
        { name: "Marek Olszewski", role: "Co-founder", linkedin: "https://www.linkedin.com/in/marekolszewski", x: "https://x.com/marekols" },
      ],
    },
  },
  {
    id: "ethereum",
    name: "Ethereum",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (USDC)": "https://www.circle.com",
      "Tether (USDT)": "https://tether.to",
      "Arbitrum": "https://arbitrum.io",
      "Base": "https://base.org",
      "Optimism": "https://www.optimism.io",
    },
    productLinks: {
      "Ethereum mainnet": "https://ethereum.org",
      "ETH staking": "https://ethereum.org/en/staking/",
      "Layer-2 scaling (Dencun blobs, Fusaka PeerDAS)": "https://ethereum.org/en/layer-2/",
      "Ethereum Foundation grants": "https://esp.ethereum.foundation",
    },

    facts: {
      founded: "2013",
      description:
        "The open smart-contract platform that hosts most of the global stablecoin supply (USDC, USDT) and the largest tokenized-asset and layer-2 ecosystem.",
      products: ["Ethereum mainnet", "ETH staking", "Layer-2 scaling (Dencun blobs, Fusaka PeerDAS)", "Ethereum Foundation grants"],
      funding:
        "No venture rounds — launched via the 42-day ether presale (Jul–Sep 2014) that raised ~$18M in BTC; protocol development supported since by the Ethereum Foundation (Zug, Switzerland)",
      stage:
        "Whitepaper published by Vitalik Buterin (Nov 2013); Frontier mainnet launched (Jul 30, 2015); The Merge moved the network to proof-of-stake (Sep 15, 2022); Dencun proto-danksharding cut layer-2 data costs (Mar 2024); Pectra (May 2025); Fusaka PeerDAS scaling (Dec 3, 2025)",
      partners: ["Circle (USDC)", "Tether (USDT)", "Arbitrum", "Base", "Optimism"],
      tech: [
        "The Merge: proof-of-stake transition of mainnet (September 2022), foundational to ETH staking economics and the validator set (Source: https://ethereum.org)",
        "Dencun upgrade: proto-danksharding / EIP-4844 blob space (2024) slashing L2 data costs — the engineering basis for cheap rollup settlement, directly relevant to stablecoin payments on L2s (Source: https://ethereum.org)",
        "Pectra upgrade (2025): account-abstraction (EIP-7702-style) wallet UX and validator-staking improvements (Source: https://ethereum.org)",
        "Open-source protocol core: ethereum/go-ethereum (~51.5k stars) and the EIPs repository (~14k stars) under the ethereum GitHub org (Source: https://github.com/ethereum)",
      ],
      metrics: [
        "DeFi TVL: $43.822B (as of November 3, 2026, DefiLlama)",
        "Stablecoins on-chain market cap: $138.929B (as of November 3, 2026, DefiLlama)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://ethereum.org",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/ethereumfndn",
        },
        {
          label: "GitHub — ethereum org (go-ethereum, EIPs)",
          url: "https://github.com/ethereum",
        },
        {
          label: "DefiLlama — Ethereum (TVL, stablecoin market cap)",
          url: "https://defillama.com/chain/ethereum",
        },
      ],
      people: [
        { name: "Vitalik Buterin", role: "Co-founder", x: "https://x.com/VitalikButerin" },
        { name: "Gavin Wood", role: "Co-founder", x: "https://x.com/gavofyork" },
        { name: "Joseph Lubin", role: "Co-founder", linkedin: "https://www.linkedin.com/in/joseph-lubin-48406489", x: "https://x.com/ethereumJoseph" },
      ],
    },
  },
];
