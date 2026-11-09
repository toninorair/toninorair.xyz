// Payment networks, batch B — Mastercard through Worldpay.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const PAYMENT_NETWORKS_B = [
  {
    id: "mastercard",
    name: "Mastercard",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Paxos": "https://www.paxos.com",
      "Nuvei": "https://www.nuvei.com",
      "OKX": "https://www.okx.com",
      "MetaMask": "https://metamask.io",
      "Kraken": "https://www.kraken.com",
      "Fiserv": "https://www.fiserv.com",
      "BVNK": "https://www.bvnk.com",
      "JPMorgan Chase": "https://www.jpmorganchase.com",
      "Standard Chartered": "https://www.sc.com",
    },

    productLinks: {
      "Payments network": "https://www.mastercard.com/us/en.html",
      "Multi-Token Network (MTN)": "https://www.mastercard.com/us/en/business/payments/consumer-payments/next-gen-payments/digital-asset-solutions/multi-token-network.html",
      "Mastercard Move": "https://www.mastercard.com/us/en/business/payments/mastercard-move.html",
      "Crypto Secure & Crypto Credential": "https://www.mastercard.com/global/en/business/payments/consumer-payments/next-gen-payments/digital-asset-solutions.html",
      "Global Money Platform (with BVNK)": "https://www.mastercard.com/us/en/news-and-trends/press/2026/october/mastercard-and-bvnk-launch-global-money-platform-to-power-a-mult.html",
    },
    facts: {
      founded: "1966",
      description:
        "Global payments network (NYSE: MA) enabling stablecoin spending, settlement and money movement through its Multi-Token Network and, since its BVNK acquisition, on-chain payments infrastructure.",
      products: [
        "Payments network",
        "Multi-Token Network (MTN)",
        "Mastercard Move",
        "Crypto Secure & Crypto Credential",
        "Global Money Platform (with BVNK)",
      ],
      funding:
        "No venture funding — listed via its NYSE IPO of May 25, 2006, raising ~$2.4B at $39/share",
      stage:
        "End-to-end stablecoin capabilities unveiled with OKX and Nuvei (Apr 2025); joined Paxos' Global Dollar Network, enabling USDG alongside USDC, PYUSD and FIUSD (Jun 2025); expanded settlement options to regulated stablecoins, intraday and weekend settlement (announced Jun 2026); agreed to acquire stablecoin-infrastructure firm BVNK for up to $1.8B (Mar 17, 2026), completed Aug 3, 2026; Global Money Platform launched with BVNK (Oct 2026)",
      partners: [
        "Circle",
        "Paxos",
        "Nuvei",
        "OKX",
        "MetaMask",
        "Kraken",
        "Fiserv",
        "BVNK",
        "JPMorgan Chase",
        "Standard Chartered",
      ],
      tech: [
        "Multi-Token Network (MTN): production blockchain-based tokenization and payment infrastructure, running on Kaleido chain infrastructure since 2023",
        "End-to-end stablecoin acceptance and settlement — wallets to checkouts — expanded to regulated stablecoins with intraday and weekend settlement",
      ],
      metrics: [
        "Market cap: $585.7B (as of Nov 4, 2026, market data)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.mastercard.com/us/en.html",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Mastercard",
        },
        {
          label: "Mastercard — Multi-Token Network white paper (Jul 2023)",
          url: "https://www.mastercard.com/news/media/5zmixdjy/unlocking-the-potential-of-digital-asset-innovation-building-a-mastercard-multi-token-network-1-1.pdf",
        },
        {
          label: "Mastercard — end-to-end stablecoin capabilities",
          url: "https://www.mastercard.com/us/en/news-and-trends/press/2025/april/mastercard-unveils-end-to-end-capabilities-to-power-stablecoin-transactions-from-wallets-to-checkouts.html",
        },
      ],
      people: [
        { name: "Michael Miebach", role: "CEO", linkedin: "https://www.linkedin.com/in/michaelmiebach" },
      ],
    },
  },
  {
    id: "nuvei",
    name: "Nuvei",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "Circle": "https://www.circle.com",
      "Visa": "https://www.visa.com",
    },

    productLinks: {
      "Merchant acquiring": "https://www.nuvei.com/",
      "Crypto payments": "https://www.nuvei.com/solutions/crypto-digital-assets",
      "USDC merchant settlement": "https://www.nuvei.com/solutions/crypto-digital-assets",
    },
    facts: {
      founded: "2003",
      description:
        "Montreal-based payments technology company (founded as Pivotal Payments) offering acquiring, card issuing and crypto payments across 200+ markets, with merchant settlement in USDC.",
      products: [
        "Merchant acquiring",
        "Crypto payments",
        "USDC merchant settlement",
        "Card issuing",
      ],
      funding:
        "Taken private by Advent International at ~US$6.3B enterprise value ($34/share) — announced Apr 1, 2024, completed Nov 15, 2024",
      stage:
        "TSX IPO (Sep 2020), later Nasdaq-listed (NVEI); post-take-private ownership Advent 46%, founder Philip Fayer 24%, Novacap 18%, CDPQ 12%; merchant settlement in USDC with Mastercard and Circle (Apr 2025); named an expected early participant in Mastercard's stablecoin settlement in the US and Latin America (2026)",
      partners: ["Mastercard", "Circle", "Visa"],
      tech: [
        "Visa stablecoin settlement pilot: USDC settlement over the Solana blockchain as a merchant acquirer (Sep 2023)",
        "Simplex acquisition (~$250M, 2021): fiat-to-crypto on/off-ramp gateway with AI-driven fraud and risk management tools folded into Nuvei's platform",
      ],
      links: [
        { label: "Website (official)", url: "https://www.nuvei.com/" },
        { label: "X (Twitter)", url: "https://x.com/Nuvei" },
        {
          label: "Visa — stablecoin settlement with acquirers (Nuvei pilot)",
          url: "https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.19881.html",
        },
        {
          label: "Nuvei — Simplex acquisition",
          url: "https://www.nuvei.com/posts/nuvei-to-acquire-simplex-a-payment-solution-provider-to-the-cryptocurrency-industry",
        },
      ],
    },
  },
  {
    id: "paypal",
    name: "PayPal",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Paxos": "https://www.paxos.com",
      "Solana": "https://solana.com",
      "Stellar": "https://stellar.org",
      "Arbitrum": "https://arbitrum.io",
    },

    productLinks: {
      "PYUSD stablecoin": "https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd",
      "PayPal World": "https://www.paypalworld.com/us/home",
      "Pay with Crypto": "https://www.paypal.com/us/business/accept-crypto-payments",
    },
    facts: {
      founded: "1998",
      description:
        "Global payments platform (Nasdaq: PYPL) and issuer of PYUSD, the Paxos-issued dollar stablecoin usable across PayPal, Venmo and external wallets.",
      products: [
        "PayPal",
        "Venmo",
        "PYUSD stablecoin",
        "PayPal World",
        "Pay with Crypto",
      ],
      funding:
        "No venture funding as PayPal — IPO Feb 2002 (~$70M), acquired by eBay for ~$1.5B (Oct 2002), spun off as an independent public company (Jul 2015)",
      stage:
        "Founded as Confinity (Dec 1998), merged with X.com (2000); PYUSD launched Aug 2023, expanded to Solana (May 2024) and Arbitrum and Stellar (2025), ~$2.6B market cap (Nov 2026); Pay with Crypto and the PayPal World wallet-interoperability platform announced (2025); CEO Alex Chriss since Sep 2023",
      partners: ["Paxos", "Solana", "Stellar", "Arbitrum"],
      tech: [
        "PYUSD multichain: launched on Solana (May 2024), later extended to Arbitrum and Stellar",
        "Pay with Crypto: merchants accept 100+ cryptocurrencies at checkout, with settlement via PYUSD and lower-cost cross-border rails (Jul 2025)",
      ],
      metrics: [
        "PYUSD circulating supply: 2.70B tokens (~$2.70B market cap) (as of Nov 4, 2026, CoinGecko)",
        "Market cap (PayPal Holdings, Nasdaq: PYPL): $49.98B (as of Nov 4, 2026, market data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.paypal.com/" },
        { label: "X (Twitter)", url: "https://x.com/PayPal" },
        {
          label: "PayPal — PYUSD on Solana",
          url: "https://newsroom.paypal-corp.com/2024-05-29-PayPal-USD-Stablecoin-Now-Available-on-Solana-Blockchain,-Providing-Faster,-Cheaper-Transactions-for-Consumers",
        },
        {
          label: "PayPal — Pay with Crypto launch",
          url: "https://newsroom.paypal-corp.com/2025-07-28-PayPal-Drives-Crypto-Payments-into-the-Mainstream,-Reducing-Costs-and-Expanding-Global-Commerce",
        },
      ],
      people: [
        { name: "Max Levchin", role: "Co-founder", linkedin: "https://www.linkedin.com/in/maxlevchin" },
        { name: "Alex Chriss", role: "President & CEO", linkedin: "https://www.linkedin.com/in/alexchriss" },
      ],
    },
  },
  {
    id: "paysafe",
    name: "Paysafe",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "MoonPay": "https://www.moonpay.com",
    },

    productLinks: {
      "Skrill & Neteller wallets": "https://www.skrill.com/en/",
      "Merchant acquiring": "https://www.paysafe.com/",
      "Crypto On-Ramp": "https://www.paysafe.com/en/crypto-on-ramp/",
      "Pay with Crypto": "https://www.paysafe.com/us-en/crypto/",
    },
    facts: {
      founded: "1996",
      description:
        "Payments platform (NYSE: PSFE) spanning wallets (Skrill, Neteller), acquiring and digital-asset access, now powering crypto acceptance for US iGaming merchants.",
      products: [
        "Skrill & Neteller wallets",
        "Merchant acquiring",
        "Crypto On-Ramp",
        "Pay with Crypto",
      ],
      funding:
        "Taken private by a CVC Capital Partners and Blackstone consortium (~$4B equity value, Dec 2017); returned to public markets via a ~$9B SPAC merger with Foley Trasimene Acquisition Corp. II (completed Mar 30, 2021)",
      stage:
        "Roots in NETBANX (1996) and Neteller (1999), renamed Paysafe Group (2015); NYSE: PSFE since Mar 31, 2021; CEO Bruce Lowthers since May 2022; sold Paysafe Direct to KORT Payments (Feb 2025); Pay with Crypto launched with MoonPay for US iGaming demand (Apr 2026)",
      partners: ["MoonPay"],
      metrics: [
        "Market cap (Paysafe Limited, NYSE: PSFE): $313.8M (as of Nov 3, 2026, market data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.paysafe.com/" },
        { label: "X (Twitter)", url: "https://x.com/Paysafe" },
        {
          label: "Paysafe — Pay with Crypto launch",
          url: "https://ir.paysafe.com/news-events/press-releases/detail/261/paysafe-launches-pay-with-crypto-solution-to-meet-us-igaming-market-demand",
        },
        {
          label: "Paysafe × MoonPay",
          url: "https://www.prnewswire.com/news-releases/paysafe-taps-moonpay-to-bring-crypto-payments-to-its-167-billion-a-year-platform-302737426.html",
        },
      ],
      people: [
        { name: "Bruce Lowthers", role: "CEO", linkedin: "https://www.linkedin.com/in/blowthers" },
      ],
    },
  },
  {
    id: "shift4",
    name: "Shift4",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Global Blue": "https://www.globalblue.com",
      "Polygon": "https://polygon.technology",
      "Lydian": "https://lydian.com",
      "Viva Wallet": "https://www.viva.com",
    },
    productLinks: {
      "Integrated payments": "https://www.shift4.com/",
      "Global Blue tax-free shopping": "https://www.globalblue.com",
      "Shift4 One": "https://www.shift4.com/shift4-one",
      "Stablecoin settlement platform": "https://www.shift4.com/news/shift4-to-launches-global-stablecoin-settlement-platform-unlocking-faster-payments-for-merchants",
    },
    facts: {
      founded: "1999",
      description:
        "Commerce technology company (NYSE: FOUR) processing tens of billions in quarterly payments for hospitality and retail, now running a multi-chain stablecoin settlement platform.",
      products: [
        "Integrated payments",
        "Global Blue tax-free shopping",
        "Shift4 One",
        "Stablecoin settlement platform",
      ],
      funding:
        "No venture funding on record — listed via its NYSE IPO (Jun 2020, NYSE: FOUR); acquisitive growth including Viva Wallet, Bambora North America, Smartpay and Global Blue (~$2.5B enterprise value, completed Jul 3, 2025)",
      stage:
        "Founded by Jared Isaacman (1999); CEO Taylor Lauber since Jun 2025; global 24/7 stablecoin settlement platform launched on Polygon (Dec 22, 2025); USDT acceptance via Lydian partnership (May 2026); Shift4 One launched across Europe with Global Blue (Jul 2026)",
      partners: ["Global Blue", "Polygon", "Lydian", "Viva Wallet"],
      tech: [
        "Global 24/7 stablecoin settlement platform launched on Polygon (Dec 2025) — merchant settlement runs around the clock instead of banking hours",
        "USDT acceptance via the Lydian partnership (May 2026), with local-currency settlement for merchants",
      ],
      metrics: [
        "Market cap (Shift4, NYSE: FOUR): $3.32B (as of Nov 3, 2026, market data)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.shift4.com/" },
        { label: "X (Twitter)", url: "https://x.com/Shift4" },
        {
          label: "Shift4 — stablecoin settlement platform",
          url: "https://www.shift4.com/news/shift4-to-launches-global-stablecoin-settlement-platform-unlocking-faster-payments-for-merchants",
        },
        {
          label: "Shift4 × Lydian — USDT acceptance",
          url: "https://www.fintechlaunches.com/announcements/shift4-lydian-usdt-payment-acceptance-local-currency-settlement-partnership/",
        },
      ],
      people: [
        { name: "Jared Isaacman", role: "Founder & Chairman", x: "https://x.com/rookisaacman" },
        { name: "Taylor Lauber", role: "CEO", linkedin: "https://www.linkedin.com/in/d-taylor-lauber-b37b90b" },
      ],
    },
  },
  {
    id: "shopify",
    name: "Shopify",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase": "https://www.coinbase.com",
      "Stripe": "https://stripe.com",
      "Circle": "https://www.circle.com",
      "Base": "https://base.org",
    },
    productLinks: {
      "Shopify platform": "https://www.shopify.com",
      "Shop Pay": "https://www.shopify.com/shop-pay",
      "Shopify Payments": "https://www.shopify.com/payments",
      "USDC on Base": "https://www.base.org/customers/shopify",
    },
    facts: {
      founded: "2004",
      description:
        "Commerce platform (NYSE: SHOP) whose merchants accept USDC on Base through Shopify Payments, built with Coinbase and Stripe.",
      products: [
        "Shopify platform",
        "Shop Pay",
        "Shopify Payments",
        "USDC on Base",
      ],
      funding:
        "Public company — NYSE IPO May 21, 2015, priced at $17/share (~7.7M Class A shares)",
      stage:
        "Founded by Tobias Lütke, Daniel Weinand and Scott Lake (2004); USDC on Shopify announced with Coinbase and Stripe (Jun 12, 2025) — early access across 34 countries, an escrow smart contract supporting authorize-now-capture-later, up to 0.50% USDC order rebates, local-currency settlement by default or direct USDC payout",
      partners: ["Coinbase", "Stripe", "Circle", "Base"],
      tech: [
        "USDC acceptance through Shopify Payments built with Coinbase and Stripe — customers pay from supported crypto wallets at checkout or Shop Pay while merchants keep their normal order, capture, refund and payout flow (shopify.com news)",
        "Co-built the Commerce Payments Protocol on Base with Coinbase: a smart contract holds the buyer's authorized USDC in escrow until the merchant captures, supporting cancellations before capture and refunds after; the protocol is open source (Base case study)",
        "Coinbase Payments executes protocol transactions and sponsors customer gas so buyers can pay USDC without holding ETH for network fees (Base case study)",
        "Merchants settle in local currency on the normal Shopify Payments schedule or withdraw USDC to a Base-compatible wallet (Shopify enterprise blog)",
      ],
      metrics: [
        "Public float: $140,315,345,495 of Class A Subordinate Voting Shares held by non-affiliates (as of June 30, 2025 close, FY2025 10-K)",
        "Shares outstanding: 1,226,037,779 Class A Subordinate Voting Shares (as of February 6, 2026, FY2025 10-K)",
        "Net settled payment volume on the Commerce Payments Protocol: more than $42M across 448K+ payments (as of October 2, 2026, Base case study)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.shopify.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/shopify",
        },
        {
          label: "Shopify — stablecoins on Shopify",
          url: "https://www.shopify.com/news/stablecoins-on-shopify",
        },
        {
          label: "Base — Shopify Commerce Payments Protocol case study",
          url: "https://www.base.org/customers/shopify",
        },
      ],
      people: [
        { name: "Tobias Lütke", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/tobiaslutke" },
      ],
    },
  },
  {
    id: "stripe",
    name: "Stripe",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Shopify": "https://www.shopify.com",
      "Visa": "https://www.visa.com",
      "Bridge": "https://www.bridge.xyz",
      "Privy": "https://www.privy.io/",
      "Paradigm": "https://www.paradigm.xyz",
      "Coinbase": "https://www.coinbase.com",
      "Deel": "https://www.deel.com",
    },
    productLinks: {
      "Payments & financial accounts": "https://stripe.com",
      "Stablecoin financial accounts": "https://docs.stripe.com/stablecoins/ecosystem",
      "Bridge (issuance, Open Issuance)": "https://www.bridge.xyz",
      "Privy (embedded wallets)": "https://www.privy.io/",
      "Tempo blockchain": "https://www.tempo.xyz",
    },
    facts: {
      founded: "2010",
      description:
        "Financial infrastructure platform for businesses; after acquiring Bridge and Privy and incubating the Tempo blockchain, it operates the most vertically integrated stablecoin stack in payments.",
      products: [
        "Payments & financial accounts",
        "Stablecoin financial accounts",
        "Bridge (issuance, Open Issuance)",
        "Privy (embedded wallets)",
        "Tempo blockchain",
      ],
      funding:
        "Reported $6.5B Series I at a $50B valuation (Mar 2023); private tender offers at ~$91.5B (Feb 2025) and ~$159B (Feb 2026)",
      stage:
        "Founded by Patrick and John Collison (2010); USDC acceptance relaunched (Oct 2024); Bridge acquisition completed (~$1.1B, Feb 4, 2025) and Privy announced (Jun 11, 2025); stablecoin financial accounts in 101 countries (May 2025); Open Issuance launched with BlackRock, Fidelity and Superstate reserve management (Sep 30, 2025); Tempo — incubated with Paradigm — testnet (Dec 9, 2025) then mainnet (Mar 18, 2026)",
      partners: ["Shopify", "Visa", "Bridge", "Privy", "Paradigm", "Coinbase", "Deel"],
      tech: [
        "Bridge, acquired February 2025, provides stablecoin orchestration: converting between fiat and stablecoins across supported rails and blockchains, with issuance, redemption, custody and settlement APIs (Stripe stablecoin docs)",
        "Extends its Global Payments and Treasury Network with stablecoins as new wallet and blockchain-settlement edges on the existing graph of accounts, rails, netting, liquidity and reconciliation systems rather than a separate stack (stripe.dev engineering blog)",
        "Tempo, unveiled September 2025 and incubated with Paradigm, is a payments-focused L1 with dedicated payment lanes, sub-second finality, predictable sub-cent fees and opt-in privacy (Stripe 2025 annual letter)",
        "Privy (acquired July 2025) powers more than 110 million programmable wallets inside Stripe's stablecoin stack (Stripe 2025 annual letter)",
        "Machine payments let developers charge AI agents directly for API, MCP and HTTP usage using stablecoin micropayments (Stripe 2025 annual letter)",
      ],
      metrics: [
        "Total volume across businesses on Stripe: $1.9 trillion, up 34% from 2024 (as of February 2026, Stripe 2025 annual letter)",
        "Stablecoin payments volume: around $400 billion, roughly double year over year, an estimated 60% B2B (as of February 2026, Stripe 2025 annual letter)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://stripe.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/stripe",
        },
        {
          label: "Stripe — stablecoin ecosystem (Bridge, Privy, Tempo docs)",
          url: "https://docs.stripe.com/stablecoins/ecosystem",
        },
        {
          label: "Stripe — 2025 annual letter announcement",
          url: "https://stripe.com/newsroom/news/stripe-2025-update",
        },
      ],
      people: [
        { name: "Patrick Collison", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/patrickcollison", x: "https://x.com/patrickc" },
        { name: "John Collison", role: "Co-founder & President", linkedin: "https://www.linkedin.com/in/johnbcollison", x: "https://x.com/collision" },
      ],
    },
  },
  {
    id: "unlimit",
    name: "Unlimit",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard": "https://www.mastercard.com",
      "Visa": "https://www.visa.com",
      "UnionPay": "https://www.unionpayintl.com/en/",
      "Polygon": "https://polygon.technology",
      "Gr4vy": "https://gr4vy.com",
    },
    productLinks: {
      "Merchant acquiring & local payments": "https://www.unlimit.com/",
      "Unlimit Crypto (fiat on/off-ramp)": "https://www.unlimit.com/",
      "Stable.com clearing house": "https://stable.com",
      "Accounts, payouts & card issuing": "https://www.unlimit.com/",
    },
    facts: {
      founded: "2009",
      description:
        "Global payments and BaaS infrastructure company (formerly Unlimint) holding principal Mastercard, Visa and UnionPay memberships, with crypto on/off-ramps and the Stable.com stablecoin clearing house.",
      products: [
        "Merchant acquiring & local payments",
        "Unlimit Crypto (fiat on/off-ramp)",
        "Stable.com clearing house",
        "Accounts, payouts & card issuing",
      ],
      funding:
        "No announced venture rounds — founder-led (Kirill Eves) since 2009",
      stage:
        "Rebranded from Unlimint to Unlimit, with GateFi becoming Unlimit Crypto; Mastercard and Visa principal membership in Peru (Sep 30, 2025) and token-service certification in India (Oct 14, 2025); Stable.com launched as a decentralized stablecoin clearing house (Dec 2, 2025); RBI cross-border licence (Dec 18, 2025); Stable.com integrated with the Polygon Open Money Stack for USDT and PYUSD payouts from self-custody wallets to bank accounts in 150+ currencies (Sep 2026); selected by the Hong Kong government as a strategic enterprise (Oct 2026)",
      partners: ["Mastercard", "Visa", "UnionPay", "Polygon", "Gr4vy"],
      tech: [
        "Launched Stable.com (December 2025), a purpose-built non-custodial decentralized stablecoin clearing house combining non-custodial exchange functionality with Unlimit's global payments infrastructure (Unlimit press release)",
        "Stable.com's Polygon Open Money Stack expansion lets users fund bank transfers directly from self-custodied USDT or PYUSD without first depositing tokens on the platform (Unlimit press release, Sep 17, 2026)",
        "Migrated its Global Accounts business under Stable.com (September 2026), combining multi-currency accounts, bank transfers, cards and treasury management with tokenized assets and non-custodial DeFi access (Unlimit press release, Sep 22, 2026)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.unlimit.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Unlimit_com",
        },
        {
          label: "Unlimit — Stable.com launch (Dec 2025)",
          url: "https://www.unlimit.com/blog/press-release/unlimit-launches-stable-com-the-first-platform-purpose-built-to-combine-decentralized-stablecoin-clearing-house/",
        },
        {
          label: "Unlimit — Stable.com expands to Polygon Open Money Stack (Sep 2026)",
          url: "https://www.unlimit.com/blog/press-release/stable-com-expands-to-polygon-open-money-stack-enabling-users-to-fund-bank-transfers-directly-from-stablecoins/",
        },
      ],
    },
  },
  {
    id: "visa",
    name: "Visa",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Bridge (Stripe)": "https://bridge.xyz",
      "Worldpay": "https://www.worldpay.com",
      "Nuvei": "https://www.nuvei.com",
      "Cross River Bank": "https://www.crossriver.com/",
      "Lead Bank": "https://www.lead.bank",
      "Rain": "https://rain.xyz",
    },
    productLinks: {
      "Card payments network": "https://www.visa.com",
      "USDC settlement": "https://investor.visa.com/news/news-details/2025/Visa-Launches-Stablecoin-Settlement-in-the-United-States-Marking-a-Breakthrough-for-Stablecoin-Integration/default.aspx",
      "VTAP (Visa Tokenized Asset Platform)": "https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.20881.html",
      "Stablecoin-linked Visa cards": "https://www.visa.com/en-us/thought-leadership/innovation/financing-stablecoin-linked-card-programs",
    },
    facts: {
      founded: "1958",
      description:
        "World's largest card network (NYSE: V), settling issuer and acquirer obligations in USDC and issuing stablecoin-linked Visa cards through partners.",
      products: [
        "Card payments network",
        "USDC settlement",
        "VTAP (Visa Tokenized Asset Platform)",
        "Stablecoin-linked Visa cards",
      ],
      funding:
        "No venture funding — listed via its NYSE IPO of March 2008 (~$19.1B total proceeds, then the largest IPO on record)",
      stage:
        "BankAmericard launched 1958, renamed Visa 1976; VTAP for bank-issued tokenized assets announced (Oct 2024); card-issuing product with Bridge (a Stripe company) for stablecoin-linked Visa cards (Apr 30, 2025); USDC settlement launched in the US with Cross River Bank and Lead Bank over Solana (Dec 16, 2025); Bridge card expansion to 100+ countries announced (Mar 2026); ~$5.2B stablecoin-linked card volume in 2025, up 319% year over year",
      partners: ["Bridge (Stripe)", "Worldpay", "Nuvei", "Cross River Bank", "Lead Bank", "Rain"],
      tech: [
        "USDC settlement for participating US issuers and acquirers launched December 2025, initially on Solana, with a stablecoin settlement run rate above $3.5B annualized as of November 30, 2025 (Visa press release)",
        "Visa Tokenized Asset Platform (VTAP) gives banks infrastructure to mint, manage, burn and transact in stablecoins and other tokenized forms of money (corporate.visa.com)",
        "Stablecoin-linked cards: wallet balances verified through API or smart-contract integration, the stablecoin amount reserved and converted at settlement; more than 160 live programs with volume up nearly 200% year over year in fiscal Q2 2026 (Visa thought leadership, Sep 8, 2026)",
        "Design partner for Circle's Arc with plans to use it for USDC settlement and operate a validator node at launch (Visa press release, Dec 2025)",
      ],
      metrics: [
        "Stablecoin settlement run rate: more than $3.5B annualized (as of November 30, 2025, Visa press release)",
        "Stablecoin settlement volume: more than $25B in fiscal 2026, roughly tenfold year-over-year growth (as of October 2026, Visa fiscal Q4 2026 results via TradingView)",
        "Public float: approximately $601.1 billion of Class A common stock held by non-affiliates (as of March 31, 2025 close, FY2025 10-K)",
        "Shares outstanding: 1,687,629,770 Class A, 4,835,384 Class B-1, 120,338,948 Class B-2, 8,938,707 Class C (as of October 30, 2025, FY2025 10-K)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.visa.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/visa",
        },
        {
          label: "Visa — USDC settlement in the US (Dec 2025)",
          url: "https://investor.visa.com/news/news-details/2025/Visa-Launches-Stablecoin-Settlement-in-the-United-States-Marking-a-Breakthrough-for-Stablecoin-Integration/default.aspx",
        },
        {
          label: "Visa — financing a hundred stablecoin-linked card programs",
          url: "https://www.visa.com/en-us/thought-leadership/innovation/financing-stablecoin-linked-card-programs",
        },
      ],
      people: [
        { name: "Ryan McInerney", role: "CEO", linkedin: "https://www.linkedin.com/in/ryan-mcinerney-79838697" },
      ],
    },
  },
  {
    id: "worldpay",
    name: "Worldpay",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "BVNK": "https://www.bvnk.com",
      "Polygon": "https://polygon.technology",
      "Visa": "https://www.visa.com",
      "Global Payments": "https://www.globalpayments.com",
      "GTCR": "https://www.gtcr.com",
      "FIS": "https://www.fisglobal.com",
    },
    productLinks: {
      "Merchant acquiring": "https://www.worldpay.com",
      "Payments processing": "https://www.worldpay.com",
      "USDC settlement": "https://www.worldpay.com/en/press-releases/worldpay-fis-becomes-first-global-merchant-acquirer-offer-direct",
      "Stablecoin payouts (with BVNK)": "https://www.worldpay.com/en/news/worldpay-enable-stablecoin-payouts-global-businesses",
    },
    facts: {
      founded: "1971",
      description:
        "Global merchant acquirer and payments processor — the first global merchant acquirer to offer direct USDC settlement — now part of Global Payments.",
      products: [
        "Merchant acquiring",
        "Payments processing",
        "USDC settlement",
        "Stablecoin payouts (with BVNK)",
      ],
      funding:
        "No venture funding on record — FIS sold a 55% stake to GTCR (completed Jan 31, 2024); Global Payments acquired Worldpay from GTCR and FIS for $24.25B in total value, with GTCR receiving ~15% of Global Payments equity",
      stage:
        "First global merchant acquirer with direct USDC settlement (2022); USDC settlements enabled on Polygon (Nov 2022); stablecoin payouts for global businesses with BVNK (May 2025); Global Payments acquisition announced (Apr 17, 2025) and closed early January 2026, alongside FIS acquiring Global Payments' Issuer Solutions business for $13.5B",
      partners: ["Circle", "BVNK", "Polygon", "Visa", "Global Payments", "GTCR", "FIS"],
      tech: [
        "Offers selected merchants direct USDC settlement of card processing since 2022; in a Visa pilot, Visa sent USDC directly to Worldpay's wallet, which passed it to the merchant, removing an intermediate minting step (Worldpay 2022 release; Worldpay stablecoin learning center)",
        "Stablecoin payouts with BVNK (May 2025): near-instant payouts in stablecoins for clients in the US and Europe across 180+ markets, with the client never holding or managing crypto (Worldpay press release)",
        "About a decade as a card processor for crypto firms, now embedding stablecoin settlement and payouts alongside 135+ fiat payout currencies (BVNK learning center)",
      ],
      metrics: [
        "Annual transactions processed: more than 55 billion across 174 countries and 138 currencies (as of January 2026, GTCR press release)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.worldpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Worldpay_Global",
        },
        {
          label: "Worldpay × BVNK — stablecoin payouts (May 2025)",
          url: "https://www.worldpay.com/en/news/worldpay-enable-stablecoin-payouts-global-businesses",
        },
        {
          label: "GTCR — sale to Global Payments completed (Jan 2026)",
          url: "https://www.prnewswire.com/news-releases/gtcr-completes-sale-of-worldpay-to-global-payments-302658108.html",
        },
      ],
    },
  },
];
