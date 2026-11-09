// Blockchains, batch B — Hyperliquid through TRON.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const BLOCKCHAINS_B = [
  {
    id: "hyperliquid",
    name: "Hyperliquid",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Trade.xyz": "https://trade.xyz",
      "Intercontinental Exchange": "https://www.ice.com",
      "Kraken": "https://www.kraken.com",
    },
    productLinks: {
      "HyperCore perpetual exchange (on-chain CLOB)": "https://app.hyperliquid.xyz",
      "HyperEVM smart-contract environment": "https://hyperliquid.gitbook.io/hyperliquid-docs/about-hyperliquid",
      "HYPE token": "https://hyperliquid.xyz",
      "USDH native stablecoin": "https://www.usdh.com/",
      "HIP-3 permissionless builder markets": "https://hyperliquid.gitbook.io/hyperliquid-docs/hyperliquid-improvement-proposals-hips/hip-3-builder-deployed-perpetuals",
    },

    facts: {
      founded: "2022",
      description:
        "High-performance L1 blockchain housing the largest decentralized perpetual-futures exchange, built by a self-funded team of former high-frequency traders.",
      products: [
        "HyperCore perpetual exchange (on-chain CLOB)",
        "HyperEVM smart-contract environment",
        "HYPE token",
        "USDH native stablecoin",
        "HIP-3 permissionless builder markets",
      ],
      funding:
        "Self-funded — no external capital taken; reportedly declined a ~$100M offer at a ~$1B valuation (2024); HYPE community airdrop distributed ~31% of supply (Nov 2024)",
      stage:
        "Mainnet 2023; HyperEVM mainnet (Feb 18, 2025); HIP-3 permissionless market deployment (Oct 2025); reported ~$2.9T trading volume in 2025; ICE-backed Trade.xyz bringing equity and index perps toward the US pending regulatory approval (2026)",
      partners: ["Trade.xyz", "Intercontinental Exchange", "Kraken"],
      tech: [
        "HyperBFT — HotStuff-inspired consensus delivering one-block finality",
        "HyperCore: fully on-chain spot and perpetual order books (margin, matching, liquidations) at a self-reported 200k orders/second",
        "HyperEVM: general-purpose EVM secured by the same HyperBFT consensus, exposing HyperCore order-book liquidity as composable primitives",
        "HIP-3: permissionless, builder-deployed perpetual markets",
      ],
      metrics: [
        "Stablecoin supply on-chain: $6.7B (as of November 2026, DefiLlama)",
        "DeFi TVL: $2.6B (as of November 2026, DefiLlama)",
        "HYPE circulating market cap: $21.7B (as of October 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://hyperliquid.xyz" },
        { label: "X (Twitter)", url: "https://x.com/HyperliquidX" },
        {
          label: "Hyperliquid docs — technical overview",
          url: "https://hyperliquid.gitbook.io/hyperliquid-docs/about-hyperliquid",
        },
        { label: "DefiLlama — Hyperliquid L1", url: "https://defillama.com/chain/hyperliquid-l1" },
      ],
      people: [
        { name: "Jeff Yan", role: "Co-founder & CEO", x: "https://x.com/chameleon_jeff" },
      ],
    },
  },
  {
    id: "noble",
    name: "Noble",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Paradigm": "https://www.paradigm.xyz",
      "M0": "https://m0.org",
      "dYdX Chain": "https://www.dydx.trade",
    },
    productLinks: {
      "Native USDC issuance for Cosmos (IBC)": "https://noble.xyz/blog/announcing-usdc-on-noble",
      "Circle CCTP routing": "https://www.circle.com/cctp",
      "Noble Dollar (USDN) yield-bearing stablecoin": "https://docs.noble.xyz/",
      "Tokenfactory issuance module": "https://docs.noble.xyz/",
    },

    facts: {
      founded: "2022",
      description:
        "Cosmos-native appchain for asset issuance and interoperability that brought canonical USDC to the IBC ecosystem, now migrating to a standalone EVM Layer 1 for stablecoin payments.",
      products: [
        "Native USDC issuance for Cosmos (IBC)",
        "Circle CCTP routing",
        "Noble Dollar (USDN) yield-bearing stablecoin",
        "Tokenfactory issuance module",
      ],
      funding:
        "$18.3M total — $3.3M seed (Oct 2023), $15M Series A led by Paradigm (Nov 2024)",
      stage:
        "Mainnet March 2023; USDC live Sept 2023 with CCTP following; Noble Dollar (USDN) with M0 launched 2025; migrating to a standalone EVM Layer 1 (2026); Circle sunsetting USDC/CCTP V1 on the legacy Cosmos chain (full pause scheduled Jan 12, 2027)",
      partners: ["Circle", "Paradigm", "M0", "dYdX Chain"],
      tech: [
        "Native USDC issuance on-chain — mint/burn through a custom Token Factory module rather than custodial wrapped assets (Circle's first Cosmos issuance)",
        "Circle CCTP integration for native burn-and-mint USDC transfers across the IBC ecosystem",
        "Noble Dollar (USDN) module issues a stablecoin backed by M0's $M token, IBC-compatible by design",
        "Next-generation EVM Layer 1 pairs the Reth execution client with Commonware's threshold-simplex consensus — sub-500ms finality target and dedicated payment lanes",
      ],
      metrics: [
        "Stablecoin supply on-chain: $80M (as of November 2026, DefiLlama)",
        "USDC issued through Noble: $425M+ (as of July 2025, Cosmos ecosystem update)",
      ],
      links: [
        { label: "Website (official)", url: "https://noble.xyz" },
        { label: "X (Twitter)", url: "https://x.com/noble_xyz" },
        { label: "noble.xyz — announcing USDC on Noble", url: "https://noble.xyz/blog/announcing-usdc-on-noble" },
        { label: "noble.xyz — A New Noble World", url: "https://noble.xyz/blog/a-new-noble-world" },
      ],
      people: [
        { name: "Jelena Djuric", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/djuricjelena" },
      ],
    },
  },
  {
    id: "plasma",
    name: "Plasma",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Tether": "https://tether.to",
      "Bitfinex": "https://www.bitfinex.com",
      "Aave": "https://aave.com",
      "Rain": "https://rain.xyz",
      "LayerZero": "https://layerzero.network",
    },
    productLinks: {
      "Plasma mainnet (EVM L1 anchored to Bitcoin)": "https://www.plasma.org/docs/docs/get-started/introduction/start-here",
      "Zero-fee USDT transfers": "https://www.plasma.org",
      "XPL token": "https://www.plasma.org/company/blog/xpl-the-public-sale-and-its-role-in-the-plasma-ecosystem",
      "Plasma One stablecoin neobank with Visa card": "https://www.plasma.org/company/blog/introducing-plasma-one-the-one-app-for-your-money",
    },

    facts: {
      founded: "2024",
      description:
        "Bitcoin-anchored, EVM-compatible Layer 1 purpose-built for stablecoin payments, launched with zero-fee USDT transfers and $2B+ in day-one stablecoin liquidity.",
      products: [
        "Plasma mainnet (EVM L1 anchored to Bitcoin)",
        "Zero-fee USDT transfers",
        "XPL token",
        "Plasma One stablecoin neobank with Visa card",
      ],
      funding:
        "$3.5M seed led by Bitfinex (Oct 2024), $24M total seed and Series A led by Framework Ventures with Bitfinex/USD₮0 (Feb 2025), XPL public sale drew ~$373M in commitments at a $500M fully diluted valuation (July 2025)",
      stage:
        "Mainnet beta + XPL went live September 25, 2025 with 100+ DeFi integrations; Plasma One Visa card, issued by Rain, launched June 2026",
      partners: ["Tether", "Bitfinex", "Aave", "Rain", "LayerZero"],
      tech: [
        "PlasmaBFT — Rust implementation of a Fast HotStuff-variant BFT consensus for low-latency payment finality",
        "Reth-based EVM execution layer, preserving Ethereum tooling compatibility",
        "Trust-minimized Bitcoin bridge periodically anchors chain state to Bitcoin for settlement security",
        "Zero-fee USDT transfers via dedicated network routes, with gas payable in stablecoin-native assets",
      ],
      metrics: [
        "Stablecoin supply on-chain: $1.4B (as of November 2026, DefiLlama)",
        "DeFi TVL: $490M (as of November 2026, DefiLlama)",
        "Annual transfer volume: $250B+ (as of 2026, company network page)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.plasma.org" },
        { label: "X (Twitter)", url: "https://x.com/Plasma" },
        { label: "Plasma docs — start here", url: "https://www.plasma.org/docs/docs/get-started/introduction/start-here" },
        { label: "Plasma — network page", url: "https://www.plasma.org/network" },
      ],
      people: [
        { name: "Paul Faecks", role: "Founder & CEO", x: "https://x.com/pauliepunt" },
      ],
    },
  },
  {
    id: "polygon",
    name: "Polygon",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Stripe": "https://stripe.com",
      "Revolut": "https://www.revolut.com",
      "Flutterwave": "https://www.flutterwave.com",
      "Shift4": "https://www.shift4.com",
    },

    productLinks: {
      "Polygon PoS": "https://polygon.technology/pos",
      "AggLayer": "https://polygon.technology/agglayer",
      "Chain Development Kit (CDK)": "https://polygon.technology/polygon-cdk",
      "Polygon zkEVM": "https://polygon.technology/polygon-zkevm",
    },

    facts: {
      founded: "2017",
      description:
        "Ethereum scaling network (founded as Matic Network) that has repositioned itself as payments infrastructure — the 'Open Money Stack' for stablecoin payments and tokenized deposits.",
      products: [
        "Polygon PoS",
        "AggLayer",
        "Chain Development Kit (CDK)",
        "Polygon zkEVM",
      ],
      funding:
        "$450M total — token raise led by Sequoia Capital India with SoftBank and Tiger Global (Feb 2022)",
      stage:
        "PoS mainnet 2020; rebrand to Polygon 2021; MATIC→POL migration (2024–2025, ~99% complete); Heimdall v2 cut finality from ~90s to ~5s (2025); acquired Coinme and Sequence for a reported $250M+ combined (2026); zkEVM wound down in favor of PoS + AggLayer",
      partners: ["Stripe", "Revolut", "Flutterwave", "Shift4"],
      tech: [
        "Two-layer PoS architecture: Bor (Go-Ethereum-derived execution) with Heimdall v2 (Cosmos SDK/CometBFT) consensus and Ethereum checkpoints",
        "Self-reported performance after Heimdall v2: sub-5s finality, 3,800 TPS, ~$0.002 average transaction cost",
        "Polygon CDK — open-source toolkit for launching ZK-powered chains; AggLayer connects chains and unifies liquidity",
      ],
      metrics: [
        "Stablecoin supply on-chain: $2.9B (as of November 2026, DefiLlama)",
        "Stablecoin supply all-time high: $3.4B (as of February 2026, Polygon blog)",
        "DeFi TVL: $645M (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://polygon.technology" },
        { label: "X (Twitter)", url: "https://x.com/0xPolygon" },
        {
          label: "Polygon docs — PoS architecture (Bor + Heimdall v2)",
          url: "https://docs.polygon.technology/pos/architecture/overview",
        },
        { label: "Polygon — \"It's not our first trillion\"", url: "https://polygon.technology/blog/its-not-our-first-trillion" },
      ],
      people: [
        { name: "Jaynti Kanani", role: "Co-founder", linkedin: "https://www.linkedin.com/in/jdkanani" },
        { name: "Sandeep Nailwal", role: "Co-founder & CEO, Polygon Foundation", linkedin: "https://www.linkedin.com/in/sandeep-nailwal-60709a33" },
        { name: "Anurag Arjun", role: "Co-founder", linkedin: "https://www.linkedin.com/in/anuragarjun" },
      ],
    },
  },
  {
    id: "solana",
    name: "Solana",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Visa": "https://www.visa.com",
      "PayPal": "https://www.paypal.com",
      "Shopify": "https://www.shopify.com",
      "Jump Crypto": "https://jumpcrypto.com",
    },

    productLinks: {
      "Solana mainnet (Proof of History)": "https://solana.com/",
      "Firedancer validator client (with Jump Crypto)": "https://firedancer.io",
      "Solana Pay": "https://solanapay.com",
      "Token-2022 program": "https://solana.com/docs/tokens/extensions",
    },

    facts: {
      founded: "2017",
      description:
        "High-throughput Layer 1 built on Proof of History that has become a leading network for stablecoin payments, settlement, and regulated investment products.",
      products: [
        "Solana mainnet (Proof of History)",
        "Firedancer validator client (with Jump Crypto)",
        "Solana Pay",
        "Token-2022 program",
      ],
      funding:
        "$20M+ early token sales (2018–2019), ~$314M private token sale led by Andreessen Horowitz and Polychain (June 2021)",
      stage:
        "Mainnet beta March 2020; Visa USDC settlement (2023, expanded to US banks 2025); PYUSD on Solana; US spot SOL ETFs began trading Oct 2025; Firedancer live on mainnet Dec 2025; Alpenglow consensus upgrade (~150ms finality) Oct 2026; ~$17B stablecoin supply (Oct 2026)",
      partners: ["Visa", "PayPal", "Shopify", "Jump Crypto"],
      tech: [
        "Firedancer — independent C++ validator client built by Jump Crypto for performance, resilience, and client diversity",
        "Alpenglow consensus upgrade targeting ~150ms finality; live on devnet September 2026",
        "Block capacity increase added ~5M compute units per block (~20,000 additional token transfers) without hardware changes",
        "Token-2022 token program underpins payments, settlement, and treasury issuance on Solana",
      ],
      metrics: [
        "Stablecoin supply on-chain: $14.8B (as of November 2026, DefiLlama)",
        "Stablecoin supply record: $17.5B (as of September 2026, Solana ecosystem roundup)",
        "DeFi TVL: $5.6B (as of November 2026, DefiLlama)",
      ],
      links: [
        { label: "Website (official)", url: "https://solana.com/" },
        { label: "X (Twitter)", url: "https://x.com/solana" },
        {
          label: "Solana — How Solana is Scaling to Enable Internet Capital Markets",
          url: "https://solana.com/news/blog-internet-capital-markets",
        },
        { label: "Solana ecosystem roundup — September 2026", url: "https://solana.com/news/solana-ecosystem-roundup-september-2026" },
      ],
      people: [
        { name: "Anatoly Yakovenko", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/anatoly-yakovenko", x: "https://x.com/aeyakovenko" },
        { name: "Raj Gokal", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/rajgokal" },
      ],
    },
  },
  {
    id: "stable",
    name: "Stable",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Tether": "https://tether.to",
      "Bitfinex": "https://www.bitfinex.com",
      "PayPal Ventures": "https://www.paypal.vc",
      "LayerZero": "https://layerzero.network",
    },

    productLinks: {
      "StableChain (USDT0-native gas L1)": "https://www.stable.xyz/",
      "Gas-free USDT transfers": "https://docs.stable.xyz/en/reference/faq/",
      "STABLE staking and governance token": "https://www.stable.xyz/",
    },

    facts: {
      founded: "2025",
      description:
        "USDT-native Layer 1 ('stablechain') built for payments — transaction fees are paid directly in USDT0 rather than a volatile network token.",
      products: [
        "StableChain (USDT0-native gas L1)",
        "Gas-free USDT transfers",
        "STABLE staking and governance token",
      ],
      funding:
        "$28M seed co-led by Bitfinex and Hack VC (July 2025) with Franklin Templeton, Castle Island Ventures, Susquehanna, Nascent, and Bybit Mirana; PayPal Ventures strategic investment (Sept 2025)",
      stage:
        "Emerged from stealth July 2025; mainnet launched December 8, 2025 with the STABLE token generation event after a $2B+ pre-deposit campaign; gas switched from wrapped gUSDT to native USDT0 (Feb 2026)",
      partners: ["Tether", "Bitfinex", "PayPal Ventures", "LayerZero"],
      tech: [
        "StableBFT consensus — a CometBFT-based DPoS design with deterministic sub-second finality (~0.7s block times) built for payment settlement (Source: https://www.stable.xyz/whitepaper.pdf)",
        "StableEVM adds custom precompiles for USDT operations and optimistic parallel execution for payment workloads (Source: https://docs.stable.xyz/en/explanation/overview/)",
        "Native gas asset is USDT0 (a LayerZero OFT), not a volatile network token — gas switched from wrapped gUSDT to native USDT0 in protocol upgrade v1.2.0 (Feb 4, 2026) (Source: https://docs.stable.xyz/en/reference/faq/)",
      ],
      metrics: [
        "TVL: $28.4M (as of November 2026, DefiLlama)",
        "On-chain stablecoin supply: $20.3M (as of November 2026, DefiLlama)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.stable.xyz/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Stable",
        },
        {
          label: "Stable — whitepaper (StableBFT consensus and StableEVM design)",
          url: "https://www.stable.xyz/whitepaper.pdf",
        },
        {
          label: "Stable docs — overview and FAQ (USDT0 gas, v1.2.0 upgrade)",
          url: "https://docs.stable.xyz/en/explanation/overview/",
        },
      ],
      people: [
        { name: "Brian Mehler", role: "CEO", linkedin: "https://www.linkedin.com/in/brianmehler" },
        { name: "Sam Kazemian", role: "CTO", linkedin: "https://www.linkedin.com/in/sam-kazemian-99b198353", x: "https://x.com/samkazemian" },
      ],
    },
  },
  {
    id: "stellar",
    name: "Stellar",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "MoneyGram": "https://www.moneygram.com",
      "Franklin Templeton": "https://www.franklintempleton.com",
      "Circle": "https://www.circle.com",
      "Visa": "https://www.visa.com",
      "Tether": "https://tether.to",
      "PayPal": "https://www.paypal.com",
    },

    productLinks: {
      "Stellar network (Stellar Consensus Protocol)": "https://stellar.org/",
      "Soroban smart contracts": "https://developers.stellar.org/docs/smart-contracts/overview",
      "Protocol 23 'Whisk' parallel execution": "https://stellar.org/blog/developers/announcing-protocol-23",
      "MoneyGram cash on/off-ramps": "https://www.moneygram.com",
    },

    facts: {
      founded: "2014",
      description:
        "Payments-focused blockchain stewarded by the nonprofit Stellar Development Foundation, combining low-cost settlement with regulated stablecoin and tokenized-fund infrastructure.",
      products: [
        "Stellar network (Stellar Consensus Protocol)",
        "Soroban smart contracts",
        "Protocol 23 'Whisk' parallel execution",
        "MoneyGram cash on/off-ramps",
      ],
      funding:
        "Nonprofit funded by an endowment of ~15.5B XLM; seeded by a $3M Stripe loan (2014), later repaid in lumens",
      stage:
        "USDC live 2021; Soroban smart contracts via Protocol 20 (2024); Protocol 23 'Whisk' (Sept 2025); Protocol 25 'X-Ray' ZK primitives (Jan 2026); MoneyGram partnership extended multi-year (2026); Franklin Templeton's BENJI tokenized fund on Stellar exceeded $580M (2025)",
      partners: ["MoneyGram", "Franklin Templeton", "Circle", "Visa", "Tether", "PayPal"],
      tech: [
        "Protocol 23 \"Whisk\" (Sept 2025) enables parallel Soroban smart-contract execution per CAP-0063 — theoretical throughput above 2,000 TPS, targeting 5,000 TPS (Source: https://stellar.org/blog/developers/announcing-protocol-23)",
        "Protocol 25 \"X-Ray\" (activated Jan 22, 2026) adds native BN254 elliptic-curve operations and Poseidon/Poseidon2 hashing host functions for on-chain zero-knowledge verification (Source: https://stellar.org/blog/developers/announcing-stellar-x-ray-protocol-25)",
      ],
      metrics: [
        "TVL: $227M (as of November 2026, DefiLlama)",
        "On-chain stablecoin supply: $351.6M (as of November 2026, DefiLlama)",
        "Tokenized real-world assets on Stellar: $4.1B (as of Q3 2026, Stellar Development Foundation)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://stellar.org/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/StellarOrg",
        },
        {
          label: "Stellar — Announcing Protocol 23 \"Whisk\" (parallel Soroban execution)",
          url: "https://stellar.org/blog/developers/announcing-protocol-23",
        },
        {
          label: "Stellar — Announcing Protocol 25 \"X-Ray\" (native ZK primitives)",
          url: "https://stellar.org/blog/developers/announcing-stellar-x-ray-protocol-25",
        },
      ],
      people: [
        { name: "Jed McCaleb", role: "Co-founder", linkedin: "https://www.linkedin.com/in/jed-mccaleb-4052a4", x: "https://x.com/jedmccaleb" },
        { name: "Denelle Dixon", role: "CEO & Executive Director (SDF)", x: "https://x.com/DenelleDixon" },
      ],
    },
  },
  {
    id: "tempo",
    name: "Tempo",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Stripe": "https://stripe.com",
      "Paradigm": "https://www.paradigm.xyz",
      "OpenAI": "https://openai.com",
      "Revolut": "https://www.revolut.com",
      "Shopify": "https://www.shopify.com",
      "Visa": "https://www.visa.com",
      "Deutsche Bank": "https://www.db.com",
      "Anthropic": "https://www.anthropic.com",
    },

    productLinks: {
      "Tempo payments L1 (EVM-compatible)": "https://tempo.xyz/",
      "Stablecoin-denominated fees (USDC, USDT, pathUSD)": "https://tempo.xyz/faq",
      "TIP-20 token standard": "https://tempo.xyz/faq",
      "Machine Payments Protocol for AI-agent payments": "https://tempo.xyz/solutions/agentic-payments/",
    },

    facts: {
      founded: "2025",
      description:
        "Payments-first EVM Layer 1 for stablecoin settlement, incubated by Stripe and Paradigm — fees are paid in supported dollar stablecoins rather than a native token.",
      products: [
        "Tempo payments L1 (EVM-compatible)",
        "Stablecoin-denominated fees (USDC, USDT, pathUSD)",
        "TIP-20 token standard",
        "Machine Payments Protocol for AI-agent payments",
      ],
      funding:
        "$500M Series A at a ~$5B valuation (Oct 2025), led by Thrive Capital and Greenoaks with Sequoia, Ribbit Capital, and SV Angel",
      stage:
        "Announced September 4, 2025; Moderato public testnet December 2025; mainnet live March 18, 2026 with the Machine Payments Protocol; stablecoin advisory launched (April 2026); led by Matt Huang, Paradigm co-founder",
      partners: ["Stripe", "Paradigm", "OpenAI", "Revolut", "Shopify", "Visa", "Deutsche Bank", "Anthropic"],
      tech: [
        "Simplex BFT consensus with deterministic finality on an EVM-compatible chain built on the Reth SDK; mainnet live March 18, 2026 (chain ID 4217) (Source: https://tempo.xyz/blog/mainnet)",
        "TIP-20 payment-token standard — transaction fees are paid in USD TIP-20 stablecoins, with transfer memos and a TIP-403 policy registry for allowlists/blocklists (Source: https://tempo.xyz/faq)",
        "Payment lanes reserve protocol-level blockspace for predictable payment inclusion; the Machine Payments Protocol for AI-agent payments, co-authored with Stripe, launched at mainnet (Source: https://tempo.xyz/blog/mainnet)",
      ],
      metrics: [
        "TVL: $104.9M (as of November 2026, DefiLlama)",
        "On-chain stablecoin supply: $756.8M (as of November 2026, DefiLlama)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://tempo.xyz/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/tempo",
        },
        {
          label: "Tempo — mainnet announcement (Mar 2026)",
          url: "https://tempo.xyz/blog/mainnet",
        },
        {
          label: "Tempo — FAQ (Simplex BFT, TIP-20 fee tokens, TIP-403 policy registry)",
          url: "https://tempo.xyz/faq",
        },
      ],
      people: [
        { name: "Matt Huang", role: "Founder & CEO", x: "https://x.com/matthuang" },
      ],
    },
  },
  {
    id: "tron",
    name: "TRON",
    categoryId: "blockchains",
    profileStatus: "complete",
    partnerLinks: {
      "Tether": "https://tether.to",
      "BitTorrent": "https://www.bittorrent.com",
      "Chainlink": "https://chain.link",
      "Mastercard": "https://www.mastercard.com",
      "Anchorage Digital": "https://www.anchorage.com",
    },

    productLinks: {
      "TRON network (DPoS L1)": "https://tron.network/",
      "TRC-20 USDT settlement": "https://tron.network/usdt",
      "USDD decentralized stablecoin": "https://usdd.io",
      "BitTorrent (BTT)": "https://www.bittorrent.com",
    },

    facts: {
      founded: "2017",
      description:
        "High-throughput DPoS blockchain founded by Justin Sun that has become the dominant rail for USDT settlement, carrying the majority of global USDT transfer activity.",
      products: [
        "TRON network (DPoS L1)",
        "TRC-20 USDT settlement",
        "USDD decentralized stablecoin",
        "BitTorrent (BTT)",
      ],
      funding: "~$70M TRX token sale (2017); ~$140M BitTorrent acquisition (2018)",
      stage:
        "Mainnet June 2018; TRC-20 USDT launched 2019 — the largest USDT rail with $90B+ circulating (July 2026) and 300M+ accounts; Tron Inc. Nasdaq-listed via SRM Entertainment reverse merger (2025); Mastercard Crypto Partner Program and Anchorage Digital custody/staking (2026)",
      partners: ["Tether", "BitTorrent", "Chainlink", "Mastercard", "Anchorage Digital"],
      tech: [
        "The dominant TRC-20 USDT settlement rail, carrying 40%+ of global USDT circulation (Source: https://tron.network/usdt)",
        "GreatVoyage v4.8.2 \"Pyrrho\" with Proposal 107 brings Ethereum-aligned TVM compatibility and secp256r1 signature support, enabling passkey-style authentication with Apple Secure Enclave and Android Keystore (Source: https://trondao.org/research/state-of-tron-q3-2026-tron-passes-the-30-trillion-mark)",
        "TVM tracks Ethereum Prague/Osaka hard-fork features (late Aug 2026) to keep EVM tooling compatible for developers porting payment contracts (Source: https://trondao.org/research/state-of-tron-q3-2026-tron-passes-the-30-trillion-mark)",
      ],
      metrics: [
        "TVL: $5.11B (as of November 2026, DefiLlama)",
        "On-chain stablecoin supply: $94.08B (as of November 2026, DefiLlama)",
        "TRX circulating supply: 95.0B tokens, market cap $30.4B (as of November 2026, CoinGecko)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://tron.network/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/trondao",
        },
        {
          label: "TRON — TRC-20 USDT settlement rail",
          url: "https://tron.network/usdt",
        },
        {
          label: "TRON DAO Research — State of TRON Q3 2026",
          url: "https://trondao.org/research/state-of-tron-q3-2026-tron-passes-the-30-trillion-mark",
        },
      ],
      people: [
        { name: "Justin Sun", role: "Founder", linkedin: "https://www.linkedin.com/in/justinsuntron", x: "https://x.com/justinsuntron" },
      ],
    },
  },
];
