// Exchanges — Binance through Robinhood.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const EXCHANGES = [
  {
    id: "binance",
    name: "Binance",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Visa (Binance Card program)": "https://www.visa.com",
      "Simplex (fiat on-ramp)": "https://www.simplex.com",
      "Trust Wallet (acquired 2018)": "https://trustwallet.com",
    },
    productLinks: {
      "Spot, margin and derivatives trading": "https://www.binance.com",
      "BNB Chain blockchain ecosystem": "https://bnbchain.org",
      "Launchpad token launches": "https://www.binance.com",
      "Binance Earn": "https://www.binance.com/en/earn",
      "Trust Wallet (self-custody wallet)": "https://trustwallet.com",
    },
    facts: {
      founded: "2017",
      description:
        "The world's largest crypto exchange by trading volume, spanning spot and derivatives trading, the BNB Chain ecosystem, token launches and payments.",
      products: [
        "Spot, margin and derivatives trading",
        "BNB Chain blockchain ecosystem",
        "Launchpad token launches",
        "Binance Earn",
        "Binance Pay",
        "Trust Wallet (self-custody wallet)",
      ],
      funding:
        "No announced venture rounds — bootstrapped by a ~$15M BNB ICO (July 2017)",
      stage:
        "Became the world's largest crypto exchange within a year of launch; acquired Trust Wallet (2018) and JEX (2019); settled with U.S. authorities for over $4B (Nov 2023) as founder Changpeng Zhao pleaded guilty and resigned — Richard Teng became CEO",
      partners: [
        "Visa (Binance Card program)",
        "Simplex (fiat on-ramp)",
        "Trust Wallet (acquired 2018)",
        "FTX (2019 strategic investment, exited 2021)",
      ],
      tech: [
        "Monthly proof-of-reserves snapshots: customer balances hashed into a Merkle tree, summed and validated with zk-SNARK proofs so users can independently verify 1:1 backing of custody assets (Binance)",
        "SAFU emergency insurance fund (Secure Asset Fund for Users) — a dedicated reserve maintained at roughly $1 billion for hack and platform-breach recovery (Binance)",
      ],
      metrics: [
        "Spot & futures transactions: $34.883 trillion in 2025 (as of December 2025, Binance)",
        "Average daily trading volume: $95 billion (as of December 2025, Binance)",
        "Registered users: 250 million (as of December 2024, Binance annual report)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.binance.com" },
        { label: "X (Twitter)", url: "https://x.com/binance" },
        {
          label: "Binance — About (volume figures)",
          url: "https://www.binance.com/en/about",
        },
        {
          label: "Binance — Proof of Reserves",
          url: "https://www.binance.com/en/proof-of-reserves",
        },
      ],
    },
  },
  {
    id: "bitkub",
    name: "Bitkub",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Siamrath Group (seed investor)": "https://siamrath.co.th",
      "SeaX Ventures (seed investor)": "https://seaxventures.vc",
    },
    productLinks: {
      "THB crypto trading (spot)": "https://www.bitkub.com",
      "Digital-asset wallets and custody": "https://www.bitkub.com",
      "Fiat deposits and payment gateways": "https://www.bitkub.com",
      "Blockchain and ICO consulting (group)": "https://www.bitkub.com",
    },
    facts: {
      founded: "2018",
      description:
        "Thailand's leading licensed digital-asset exchange, operating THB fiat ramps, crypto trading and custody under Bitkub Capital Group Holdings.",
      products: [
        "THB crypto trading (spot)",
        "Digital-asset wallets and custody",
        "Fiat deposits and payment gateways",
        "Blockchain and ICO consulting (group)",
      ],
      funding:
        "Reported ~$3.2M angel capital at founding; database-estimated ~$21.6M total disclosed funding",
      stage:
        "Licensed under Thailand's SEC framework as an early digital-asset exchange (2018–19); SCB Securities' agreed THB 17.85B (~$536M) purchase of 51% made it Thailand's third unicorn (Nov 2021) but the deal was cancelled in Aug 2022; fined THB 3.9M by the Thai SEC for operational violations (Dec 2021)",
      partners: [
        "DTAC Accelerate (incubator)",
        "Siamrath Group (seed investor)",
        "SeaX Ventures (seed investor)",
        "Thai bank integrations (THB rails)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bitkub.com" },
        { label: "X (Twitter)", url: "https://x.com/BitkubOfficial" },
        {
          label: "e27 — SCB unicorn deal",
          url: "https://e27.co/bitkub-becomes-third-thai-unicorn-after-scbxs-acquisition-of-its-majority-stake-for-us536m-20211103/",
        },
        {
          label: "Thai PBS World — deal cancellation",
          url: "https://www.thaipbsworld.com/economy/poor-market-sentiment-sinks-scbs-multi-billion-baht-deal-for-bitkub",
        },
      ],
    },
  },
  {
    id: "bitpanda",
    name: "Bitpanda",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Deutsche Börse": "https://www.deutsche-boerse.com/dbg-en",
      "Deutsche Bank": "https://www.db.com",
      "LBBW": "https://www.lbbw.de",
      "N26": "https://n26.com",
      "Raiffeisenlandesbank": "https://www.raiffeisen.at/noew/rlb/de/privatkunden.html",
      "Visa": "https://www.visa.com",
    },
    productLinks: {
      "Consumer multi-asset investing (crypto, stocks, ETFs, metals)": "https://www.bitpanda.com",
      "Bitpanda Technology Solutions (white-label APIs)": "https://www.bitpanda.com/en/enterprise/products/investment-as-a-service",
      "Bitpanda Card (Visa)": "https://www.bitpanda.com/en/card",
      "Bitpanda Custody": "https://www.bitpanda.com",
    },
    facts: {
      founded: "2014",
      description:
        "Vienna-based multi-asset investment platform that grew from a Bitcoin brokerage (originally Coinimal) into retail investing plus white-label infrastructure for banks and fintechs.",
      products: [
        "Consumer multi-asset investing (crypto, stocks, ETFs, metals)",
        "Bitpanda Technology Solutions (white-label APIs)",
        "Bitpanda Card (Visa)",
        "Bitpanda Custody",
      ],
      funding:
        "Reported ~$495M total — $52M Series A led by Valar Ventures (Sep 2020), $170M Series B at ~$1.2B valuation (Mar 2021), ~$10M Series B extension (May 2021), $263M Series C led by Valar at ~$4.1B valuation (Aug 2021)",
      stage:
        "Austria's first unicorn (2021); acquired Trustology for institutional custody (2022); MiCA authorisation from Germany's BaFin (Jan 2025) and an Austrian FMA licence (Apr 2025)",
      partners: [
        "Deutsche Börse",
        "Deutsche Bank",
        "LBBW",
        "N26",
        "Raiffeisenlandesbank",
        "Visa",
      ],
      tech: [
        "Bitpanda Technology Solutions — Investing-as-a-Service white-label API (launched 2023) that lets banks and fintechs offer crypto, stocks, ETFs and custody under their own brand; Bitpanda says partners reach 20+ million users across 25+ countries (Bitpanda)",
        "Bitpanda Custody — institutional-grade custody built on the 2022 Trustology acquisition (Bitpanda)",
      ],
      metrics: [
        "Registered customers: 1.3M+ (as of November 2026, Bitpanda Group)",
        "Adjusted revenue: €52M+ (as of November 2026, Bitpanda Group)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bitpanda.com" },
        { label: "X (Twitter)", url: "https://x.com/Bitpanda" },
        {
          label: "Bitpanda Group — company figures",
          url: "https://group.bitpanda.com/en",
        },
        {
          label: "Bitpanda blog — Technology Solutions launch",
          url: "https://blog.bitpanda.com/en/bitpanda-technology-solutions-introduces-investing-service-everyone",
        },
      ],
    },
  },
  {
    id: "bybit",
    name: "Bybit",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Mercuryo (fiat on-ramp)": "https://mercuryo.io",
      "Mastercard (Bybit Card)": "https://www.mastercard.com",
      "Oracle Red Bull Racing (2022–24)": "https://www.redbullracing.com/int-en",
    },
    productLinks: {
      "Spot and derivatives trading (perps, futures, options)": "https://www.bybit.com",
      "Bybit Web3 Wallet (10M+ users)": "https://www.bybit.com",
      "Bybit Pay": "https://www.bybit.com",
      "Copy trading and Unified Trading Account": "https://www.bybit.com",
    },
    facts: {
      founded: "2018",
      description:
        "Dubai-headquartered crypto exchange founded by Ben Zhou, known for derivatives trading and now a full-service platform spanning spot, Web3 wallet and payments.",
      products: [
        "Spot and derivatives trading (perps, futures, options)",
        "Bybit Web3 Wallet (10M+ users)",
        "Bybit Pay",
        "Copy trading and Unified Trading Account",
      ],
      funding:
        "No publicly documented venture rounds — database-listed rounds lack primary sources; the firm's best-documented financing was post-hack emergency liquidity (2025)",
      stage:
        "Hit by the largest crypto exchange hack on record — ~$1.5B in ETH stolen by the North Korea-linked Lazarus Group (Feb 21, 2025); withdrawals stayed live and ETH liquidity was replenished within ~72 hours with help from Galaxy Digital, FalconX and Wintermute; holds a Dubai VARA licence, a MiCA licence (Bybit EU GmbH, Vienna) and India FIU registration",
      partners: [
        "Mercuryo (fiat on-ramp)",
        "Mastercard (Bybit Card)",
        "Oracle Red Bull Racing (2022–24)",
        "Galaxy Digital and FalconX (2025 liquidity)",
      ],
      tech: [
        "Monthly proof-of-reserves reporting independently verified by Hacken, with per-asset reserve ratios (BTC, ETH, USDT and USDC above 100%) (Bybit)",
        "Custody overhaul after the February 2025 multisig signing-interface attack on one ETH cold wallet: stolen ETH replenished within ~72 hours while deposits and withdrawals stayed live (Bybit)",
      ],
      metrics: [
        "Mainstream assets covered by proof of reserves: $17.3 billion across 50 assets, reserves exceeding liabilities (as of October 2026, Bybit 41st PoR report, verified by Hacken)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bybit.com" },
        { label: "X (Twitter)", url: "https://x.com/Bybit_Official" },
        {
          label: "Bybit — security incident timeline",
          url: "https://www.bybit.com/en/learn/this-week-in-bybit/bybit-security-incident-timeline",
        },
        {
          label: "Bybit — proof-of-reserves reports (X)",
          url: "https://x.com/Bybit_Official/status/2083206299550961724",
        },
      ],
    },
  },
  {
    id: "coinbase",
    name: "Coinbase",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Circle (USDC)": "https://www.circle.com",
      "Optimism (OP Stack — Base)": "https://www.optimism.io",
      "Shopify": "https://www.shopify.com",
      "Stripe": "https://stripe.com",
      "Marqeta": "https://www.marqeta.com",
      "Nium": "https://www.nium.com",
    },
    productLinks: {
      "Coinbase Exchange and Coinbase Prime": "https://www.coinbase.com",
      "Base (Ethereum L2)": "https://base.org",
      "USDC (co-founded with Circle)": "https://www.circle.com",
      "Custom Stablecoins": "https://www.coinbase.com/developer-platform/products/stablecoin-as-a-service",
      "Stablecoin payments APIs": "https://www.coinbase.com/developer-platform/paymentfirms",
      "Deribit derivatives": "https://www.deribit.com",
    },
    facts: {
      founded: "2012",
      description:
        "The largest U.S.-regulated crypto exchange, building an \"everything exchange\" around trading, custody, the Base L2 blockchain and USDC stablecoin economics.",
      products: [
        "Coinbase Exchange and Coinbase Prime",
        "Base (Ethereum L2)",
        "USDC (co-founded with Circle)",
        "Custom Stablecoins",
        "Stablecoin payments APIs",
        "Deribit derivatives",
      ],
      funding:
        "Reported $500M+ pre-IPO — $25M Series B led by Andreessen Horowitz (2013), $75M Series C led by DFJ Growth (2015), $100M Series D led by IVP at $1.6B (2017), $300M Series E led by Tiger Global at $8B (2018); direct-listed on Nasdaq April 2021",
      stage:
        "Public on Nasdaq (COIN) since April 2021; closed the Deribit acquisition (Aug 2025); expanded into stocks, prediction markets and 24/7 futures (Dec 2025); captured ~50% of USDC economics over the year to Q3 2026",
      partners: [
        "Circle (USDC)",
        "Optimism (OP Stack — Base)",
        "Shopify",
        "Stripe",
        "Marqeta",
        "Nium",
      ],
      tech: [
        "Base — open-source, permissionless Ethereum L2 built on the OP Stack, targeting ~200ms block times and sub-cent median fees, with Stage 1 decentralization via permissionless fault proofs and a security council (Coinbase Q4'25 shareholder letter)",
        "Stablecoin payments engineering — payment APIs, virtual accounts, merchant rails, automated treasury workflows and USDC settlement infrastructure (Coinbase Q4'25 shareholder letter)",
      ],
      metrics: [
        "Total trading volume: $5.2 trillion in 2025, up 156% year over year (as of December 2025, Coinbase Q4'25 shareholder letter)",
        "Average USDC held in Coinbase products: $17.8 billion (as of December 2025, Coinbase Q4'25 shareholder letter)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.coinbase.com" },
        { label: "X (Twitter)", url: "https://x.com/coinbase" },
        {
          label: "Investor relations — Q3 2025 shareholder letter",
          url: "https://investor.coinbase.com/files/doc_financials/2025/q3/Q3-25-Shareholder-Letter.pdf",
        },
        {
          label: "Q4 2025 shareholder letter (SEC)",
          url: "https://www.sec.gov/Archives/edgar/data/1679788/000167978826000011/q425shareholderletter.htm",
        },
      ],
    },
  },
  {
    id: "coins-ph",
    name: "Coins.ph",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Fireblocks (custody infrastructure)": "https://www.fireblocks.com",
      "Clear Junction (EU payment rails)": "https://clearjunction.com",
      "Circle (stablecoin network)": "https://www.circle.com",
    },
    productLinks: {
      "Crypto trading in PHP (170+ assets)": "https://www.coins.ph",
      "PHPC peso-backed stablecoin": "https://www.coins.ph/en-ph/phpc-whitepaper",
      "Bills payment and mobile top-ups": "https://www.coins.ph",
      "QR Ph merchant payments": "https://www.coins.ph",
      "Remittances": "https://www.coins.ph",
    },
    facts: {
      founded: "2014",
      description:
        "The Philippines' oldest BSP-regulated crypto wallet and exchange, combining peso trading with bills payment, remittances and the PHPC stablecoin.",
      products: [
        "Crypto trading in PHP (170+ assets)",
        "PHPC peso-backed stablecoin",
        "Bills payment and mobile top-ups",
        "QR Ph merchant payments",
        "Remittances",
      ],
      funding:
        "Reported $30M Series C led by Ribbit Capital (May 2022); earlier backers include Naspers, Digital Currency Group, Quona Capital and Pantera Capital",
      stage:
        "First Asian crypto company to hold both central-bank VC and EMI licences; acquired by Gojek (2019) then bought out by a consortium led by former Binance CFO Wei Zhou with Joffre Capital (Apr 2022, reported ~$190M); launched PHPC via the BSP regulatory sandbox (2024); ~18M registered users",
      partners: [
        "Fireblocks (custody infrastructure)",
        "Clear Junction (EU payment rails)",
        "QR Ph (merchant payments)",
        "Circle (stablecoin network)",
      ],
      tech: [
        "Issues PHPC, a 1:1 peso-backed stablecoin on the Polygon and Ronin networks, fully backed by cash, time deposits and short-term money-market instruments (Coins.ph)",
        "PHPC launched through the BSP regulatory sandbox, exiting with all remaining supply fully redeemable (Coins.ph)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.coins.ph" },
        { label: "X (Twitter)", url: "https://x.com/coinsph" },
        {
          label: "PHPC whitepaper",
          url: "https://www.coins.ph/en-ph/phpc-whitepaper",
        },
        {
          label: "Coins.ph — Joffre Capital acquisition",
          url: "https://www.coins.ph/en-ph/blog/coinsph-acquisition-joffre-capital",
        },
      ],
    },
  },
  {
    id: "crypto-com",
    name: "Crypto.com",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Visa (card programs)": "https://www.visa.com",
      "Trump Media & Technology Group (CRO treasury)": "https://tmtgcorp.com",
    },
    productLinks: {
      "Crypto.com Exchange (spot and derivatives)": "https://www.crypto.com/exchange",
      "Cronos blockchain (CRO)": "https://cronos.org",
      "Crypto.com Visa Card": "https://www.crypto.com/card",
      "DeFi Wallet": "https://www.crypto.com/defi-wallet",
      "Crypto.com App": "https://crypto.com",
    },
    facts: {
      founded: "2016",
      description:
        "Singapore-based crypto platform founded as Monaco, spanning an exchange, the Cronos blockchain, Visa card programs and a consumer app.",
      products: [
        "Crypto.com Exchange (spot and derivatives)",
        "Cronos blockchain (CRO)",
        "Crypto.com Visa Card",
        "DeFi Wallet",
        "Crypto.com App",
      ],
      funding:
        "Raised ~$26.7M in the 2017 MCO ICO; expansion funded through token economics and revenue rather than announced venture rounds",
      stage:
        "Rebranded from Monaco after buying the Crypto.com domain (2018); acquired Nadex and the Small Exchange (2021–22); Crypto.com Arena naming rights (2021); MiCA in-principle licence from Malta's MFSA (Jan 2025); SEC closed its investigation with no action (Mar 2025); Trump Media's ~$105M CRO treasury purchase closed (Sep 2025)",
      partners: [
        "Visa (card programs)",
        "Trump Media & Technology Group (CRO treasury)",
        "Nadex and Small Exchange (acquired 2021–22)",
      ],
      tech: [
        "Proof of Reserves via a Mazars ISRS 4400 agreed-upon-procedures engagement comparing on-chain reserve addresses to customer balances through an auditor-overseen live database query, with Merkle-tree self-service verification (December 2022)",
      ],
      links: [
        { label: "Website (official)", url: "https://crypto.com" },
        { label: "X (Twitter)", url: "https://x.com/cryptocom" },
        {
          label: "Crypto.com — Proof of Reserves",
          url: "https://help.crypto.com/en/articles/6799441-proof-of-reserves",
        },
        {
          label: "TechCrunch — Crypto.com domain purchase",
          url: "https://techcrunch.com/2018/07/05/crypto-com-mco/",
        },
      ],
    },
  },
  {
    id: "gemini",
    name: "Gemini",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Nasdaq (strategic investor)": "https://www.nasdaq.com",
      "Morgan Creek Digital": "https://www.morgancreekcap.com/morgan-creek-digital/",
      "ParaFi Capital": "https://parafi.com",
      "Pantera Capital": "https://panteracapital.com",
    },
    productLinks: {
      "Exchange and ActiveTrader": "https://www.gemini.com/",
      "Qualified institutional custody": "https://www.gemini.com/",
      "Staking": "https://www.gemini.com/",
      "Gemini Dollar (GUSD)": "https://www.gemini.com/dollar",
      "Gemini credit card": "https://www.gemini.com/credit-card",
    },
    facts: {
      founded: "2014",
      description:
        "New York trust-company exchange founded by the Winklevoss twins, offering trading, qualified custody, staking and the Gemini Dollar stablecoin.",
      products: [
        "Exchange and ActiveTrader",
        "Qualified institutional custody",
        "Staking",
        "Gemini Dollar (GUSD)",
        "Gemini credit card",
      ],
      funding:
        "Reported $400M at a $7.1B valuation (Nov 2021 — Morgan Creek Digital, 10T Holdings, ParaFi and others); raised ~$425M in its Nasdaq IPO (Sep 2025) with a $50M private placement from Nasdaq",
      stage:
        "Public on Nasdaq (GEMI, Sep 12, 2025); acquired Nifty Gateway (2019); paid $50M to settle Gemini Earn claims after the Genesis bankruptcy (2022–24); secured a Malta-based MiCA authorisation for EU services",
      partners: [
        "Nasdaq (strategic investor)",
        "Morgan Creek Digital",
        "10T Holdings",
        "ParaFi Capital",
        "Pantera Capital",
      ],
      tech: [
        "Gemini Dollar (GUSD) is an ERC-20 stablecoin redeemable 1:1 for USD, backed by bank deposits and US Treasury money-market funds with a monthly BPM LLP attestation (gemini.com/dollar)",
        "GUSD contracts are open source (github.com/gemini/dollar) and were audited by Trail of Bits (gemini.com/dollar)",
        "Operates under SOC 1 Type 2 and SOC 2 Type 2 examinations and ISO 27001 certification (gemini.com/exchange)",

      ],
      metrics: [
        "24-hour spot volume: $39.0M (as of November 4, 2026, CoinMarketCap)",
        "Total assets: $5.36B (as of November 3, 2026, CoinMarketCap)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.gemini.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Gemini",
        },
        {
          label: "Gemini — Gemini Dollar",
          url: "https://www.gemini.com/dollar",
        },
        {
          label: "Nasdaq — IPO closing release",
          url: "https://www.nasdaq.com/press-release/gemini-announces-closing-initial-public-offering-and-full-exercise-underwriters",
        },
      ],
    },
  },
  {
    id: "interactive-brokers",
    name: "Interactive Brokers",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Paxos (crypto custody and execution)": "https://www.paxos.com",
      "Zero Hash (crypto and staking rails)": "https://zerohash.com",
    },
    productLinks: {
      "Trader Workstation and IBKR Desktop": "https://www.interactivebrokers.com/",
      "Crypto trading (via Paxos and Zero Hash)": "https://www.interactivebrokers.com/",
      "Crypto staking (via Zero Hash)": "https://www.interactivebrokers.com/",
      "Stablecoin funding and withdrawals (USDC, PYUSD, RLUSD)": "https://www.interactivebrokers.com/en/trading/stablecoin.php",
      "Stocks, options, futures, forex, bonds": "https://www.interactivebrokers.com/",
    },
    facts: {
      founded: "1978",
      description:
        "Global electronic broker founded by Thomas Peterffy, offering stocks, options, futures, forex and crypto trading in one account across 175+ markets.",
      products: [
        "Trader Workstation and IBKR Desktop",
        "Crypto trading (via Paxos and Zero Hash)",
        "Crypto staking (via Zero Hash)",
        "Stablecoin funding and withdrawals (USDC, PYUSD, RLUSD)",
        "Stocks, options, futures, forex, bonds",
      ],
      funding:
        "No venture funding on record — $1.2B IPO on Nasdaq (May 2007)",
      stage:
        "Crypto trading launched through Paxos (2021) with assets later expanded via Zero Hash; surpassed 4M accounts and joined the S&P 500 (2025); Hong Kong BTC/ETH trading for professional investors (Feb 2026); stablecoin withdrawals and transfers to external wallets added (Jul 2026); crypto staking launched (Oct 2026); evaluating a proprietary stablecoin",
      partners: [
        "Paxos (crypto custody and execution)",
        "Zero Hash (crypto and staking rails)",
      ],
      tech: [
        "Crypto trading is offered through Paxos Trust and Zero Hash; IBKR is not a digital-asset custodian (interactivebrokers.com crypto products page)",
        "USDC funding via Zero Hash is auto-converted to USD, and clients can withdraw crypto including USDC, PYUSD, and RLUSD to external wallets (stablecoin.php, July 15, 2026 release)",

      ],
      metrics: [
        "Public float: $23.756B of common equity held by non-affiliates (as of June 30, 2025, FY2025 10-K)",
        "Shares outstanding: 445,439,458 Class A common shares (as of February 23, 2026, FY2025 10-K)",
        "Funded client accounts: 5.317M (as of July 2026, IBKR monthly metrics)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.interactivebrokers.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/IBKR",
        },
        {
          label: "IBKR — stablecoin deposits",
          url: "https://www.interactivebrokers.com/en/trading/stablecoin.php",
        },
        {
          label: "SEC — FY2025 10-K",
          url: "https://www.sec.gov/Archives/edgar/data/1381197/000138119726000062/ibkr-20251231.htm",
        },
      ],
    },
  },
  {
    id: "kraken",
    name: "Kraken",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Jane Street (investor)": "https://www.janestreet.com",
      "DRW (investor)": "https://drw.com",
      "Citadel Securities (strategic investor)": "https://www.citadelsecurities.com",
      "Backed Finance (xStocks)": "https://backed.fi",
      "NinjaTrader": "https://ninjatrader.com",
      "Williams Racing (2022)": "https://www.williamsf1.com",
    },
    productLinks: {
      "Kraken Pro (spot, margin, derivatives)": "https://www.kraken.com/pro",
      "Institutional custody and OTC": "https://www.kraken.com/",
      "Staking": "https://www.kraken.com/",
      "xStocks (tokenized equities)": "https://backed.fi",
      "NinjaTrader futures": "https://ninjatrader.com",
      "Kraken Wallet": "https://www.kraken.com/wallet",
    },
    facts: {
      founded: "2011",
      description:
        "San Francisco crypto exchange operated by Payward, grown from a 2013 bitcoin-for-fiat market into spot, derivatives, custody, staking and tokenized equities.",
      products: [
        "Kraken Pro (spot, margin, derivatives)",
        "Institutional custody and OTC",
        "Staking",
        "xStocks (tokenized equities)",
        "NinjaTrader futures",
        "Kraken Wallet",
      ],
      funding:
        "Reported $800M across two tranches at a $20B valuation (Nov 2025) — primary tranche led by Jane Street and DRW Venture Capital with Apollo, Oppenheimer and Tribe Capital — plus a $200M strategic investment from Citadel Securities; an earlier ~$500M raise at $15B was reported in Sep 2025",
      stage:
        "First digital-asset company with a U.S. bank charter (Wyoming SPDI); MiCA authorisation via an Irish entity; acquired NinjaTrader for ~$1.5B (2025) and Backed Finance for the xStocks tokenized-equity business",
      partners: [
        "Jane Street (investor)",
        "DRW (investor)",
        "Citadel Securities (strategic investor)",
        "Backed Finance (xStocks)",
        "NinjaTrader",
        "Williams Racing (2022)",
      ],
      tech: [
        "Proof-of-Reserves program uses a Merkle tree with personalized cryptographic proofs so clients can verify their balances are covered (kraken.com/proof-of-reserves)",
        "Holds ISO 27001:2022 and SOC 2 Type 1 certifications and keeps the majority of client assets in cold storage (kraken.com/features/security)",
        "Launched FIX API support for its derivatives markets in 2025 for institutional flow (Kraken blog)",

      ],
      metrics: [
        "Total exchange volume: $186.8B in Q2 2025, up 19% year over year (as of Q2 2025, Kraken)",
        "Total platform transaction volume: $576.8B in Q3 2025 (as of Q3 2025, Kraken blog)",
        "Proof of Reserves: 192,091.25 BTC held against 167,188.68 BTC client balances, 114.9% coverage (as of March 2025, Kraken)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.kraken.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/krakenfx",
        },
        {
          label: "Kraken — Proof of Reserves",
          url: "https://www.kraken.com/proof-of-reserves",
        },
        {
          label: "Kraken blog — Q3 2025 financial highlights",
          url: "https://blog.kraken.com/news/q3-2025-financial-highlights",
        },
      ],
    },
  },
  {
    id: "okx",
    name: "OKX",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Manchester City FC": "https://www.mancity.com",
      "McLaren F1": "https://www.mclaren.com/racing/",
      "Intercontinental Exchange (investor)": "https://www.ice.com",
      "Circle (investor)": "https://www.circle.com",
      "Ripple (investor)": "https://ripple.com",
      "SC Ventures (investor)": "https://scventures.io",
    },
    productLinks: {
      "Spot, margin and derivatives trading": "https://www.okx.com/",
      "OKX Wallet (self-custody)": "https://www.okx.com/",
      "X Layer (Ethereum L2, OKB gas token)": "https://www.okx.com/xlayer",
      "DEX aggregator and NFT marketplace": "https://www.okx.com/",
    },
    facts: {
      founded: "2017",
      description:
        "Global crypto exchange and Web3 company founded by Star Xu — Okcoin (2013) became OKEx (2017) and OKX (2022) — spanning derivatives trading, the self-custody OKX Wallet and the X Layer L2.",
      products: [
        "Spot, margin and derivatives trading",
        "OKX Wallet (self-custody)",
        "X Layer (Ethereum L2, OKB gas token)",
        "DEX aggregator and NFT marketplace",
      ],
      funding:
        "Privately held; Intercontinental Exchange invested ~$200M at a ~$25B valuation (Mar 2026), with an extension joined by Circle, Ripple, Qube Research & Technologies and Standard Chartered's SC Ventures",
      stage:
        "Rebranded from OKEx (Jan 2022); relaunched its U.S. exchange and wallet with a San Jose headquarters (Apr 2025); institutional investment from ICE, Circle, Ripple and SC Ventures (2026); Manchester City and McLaren F1 sponsorships",
      partners: [
        "Manchester City FC",
        "McLaren F1",
        "Intercontinental Exchange (investor)",
        "Circle (investor)",
        "Ripple (investor)",
        "SC Ventures (investor)",
      ],
      tech: [
        "Publishes monthly Proof-of-Reserves reports (running since November 2022) built on an encrypted Merkle tree with zk-STARK attestation (okx.com/proof-of-reserves)",
        "The 49th PoR snapshot (November 2026) covers $33.87B across 21 assets with per-asset exchange, wallet, and third-party-custody breakdowns (okx.com/proof-of-reserves)",

      ],
      metrics: [
        "24-hour spot volume: $3.11B (as of November 3, 2026, CoinMarketCap)",
        "Total assets: $21.16B (as of November 3, 2026, CoinMarketCap)",
        "Proof-of-Reserves holdings: $33.87B across 21 assets, including $27.82B in BTC, ETH, USDT, and USDC (as of November 2026, OKX)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.okx.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/okx",
        },
        {
          label: "OKX — Proof of Reserves",
          url: "https://www.okx.com/en-us/proof-of-reserves",
        },
        {
          label: "OKX — OKEx rebrand",
          url: "https://www.okx.com/en-us/learn/okex-rebrands-to-okx",
        },
      ],
    },
  },
  {
    id: "ripio",
    name: "Ripio",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Mercado Pago / Mercado Libre": "https://www.mercadolibre.com",
      "Visa (card)": "https://www.visa.com",
      "Circle (USDC)": "https://www.circle.com",
      "Chainlink (price feeds)": "https://chain.link",
      "OCA Blue (Uruguay)": "https://ocablue.uy",
    },
    productLinks: {
      "Wallet and exchange (Argentina, Brazil, Mexico)": "https://www.ripio.com/en",
      "wFIAT local-currency stablecoins (wARS, wBRL, wCOP, wMXN, wCLP, wPEN)": "https://www.ripio.com/en/cryptos/local-stablecoins",
      "Crypto as a Service (white-label APIs)": "https://www.ripio.com/en",
      "OTC desk": "https://www.ripio.com/en",
      "Ripio Coin (RPC)": "https://www.ripio.com/en/cryptocurrencies/ripio-coin",
    },
    facts: {
      founded: "2013",
      description:
        "Buenos Aires-founded crypto platform for Latin America, combining a consumer wallet and exchange with local-currency stablecoins and B2B infrastructure.",
      products: [
        "Wallet and exchange (Argentina, Brazil, Mexico)",
        "wFIAT local-currency stablecoins (wARS, wBRL, wCOP, wMXN, wCLP, wPEN)",
        "Crypto as a Service (white-label APIs)",
        "OTC desk",
        "Ripio Coin (RPC)",
      ],
      funding:
        "Reported ~$54M total — ~$37M Ripio Credit Network ICO (2017) and a $50M Series B led by Digital Currency Group (Sep 2021) with Amplo, Tim Draper, Marcos Galperin and Martín Migoya",
      stage:
        "Started as BitPagos, a bitcoin payments processor; acquired Unisend (2015) and Brazil's BitcoinTrade (Jan 2021); powers crypto inside Mercado Pago (Chile, Mexico, Brazil) and collaborated on the Meli Dólar stablecoin; wARS issuance reported on-chain across six networks (Q1 2026)",
      partners: [
        "Mercado Pago / Mercado Libre",
        "Visa (card)",
        "Circle (USDC)",
        "Chainlink (price feeds)",
        "OCA Blue (Uruguay)",
      ],
      tech: [
        "wFIAT suite of 1:1 wrapped local-currency tokens (wARS, wBRL, wCOP, wMXN, wCLP, wPEN) issued on Ethereum, World Chain, Base, BNB Chain, Gnosis, Polygon, and Celo (ripio.com wFIAT pages)",
        "wARS circulating supply of 431M tokens is backed by ARS 447.36M in reserves per a December 31, 2025 attestation (Ripio; CoinDesk wARS launch coverage)",
        "Partners with Circle on digital-dollar access across Latin America (Circle blog)",

      ],
      metrics: [
        "wARS circulating supply: 431M tokens backed by ARS 447.36M in reserves (as of December 31, 2025, Ripio attestation)",
        "First-half 2025 volume: ~$2.5B with assets under custody above $100M (as of H1 2025, Ripio)",
        "Assets under management: ~$300M with 99.9% platform uptime (as of November 2026, ripio.com)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.ripio.com/en",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/RipioApp",
        },
        {
          label: "Ripio — local stablecoins",
          url: "https://www.ripio.com/en/cryptos/local-stablecoins",
        },
        {
          label: "Circle — Ripio partnership",
          url: "https://circle.com/es/blog/ripio-partners-with-circle-to-answer-surging-regional-demand-for-digital-dollars",
        },
      ],
    },
  },
  {
    id: "robinhood",
    name: "Robinhood",
    categoryId: "exchanges",
    profileStatus: "complete",
    partnerLinks: {
      "Bitstamp (acquired)": "https://www.bitstamp.net",
      "WonderFi (acquired)": "https://www.wonder.fi",
      "Arbitrum (Robinhood Chain)": "https://arbitrum.io",
      "Global Dollar Network (USDG)": "https://globaldollar.com",
    },
    productLinks: {
      "Stocks, options, futures and event contracts": "https://robinhood.com/",
      "Crypto trading, transfers and staking": "https://robinhood.com/",
      "Bitstamp exchange (institutional)": "https://www.bitstamp.net",
      "Robinhood Chain (Ethereum L2)": "https://robinhood.com/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/?lang=en",
      "Robinhood Wallet and Connect": "https://robinhood.com/",
      "Robinhood Gold": "https://robinhood.com/gold",
    },
    facts: {
      founded: "2013",
      description:
        "Commission-free U.S. brokerage founded by Vladimir Tenev and Baiju Bhatt that became a multi-asset crypto platform through the Bitstamp acquisition, EU expansion and the Arbitrum-built Robinhood Chain.",
      products: [
        "Stocks, options, futures and event contracts",
        "Crypto trading, transfers and staking",
        "Bitstamp exchange (institutional)",
        "Robinhood Chain (Ethereum L2)",
        "Robinhood Wallet and Connect",
        "Robinhood Gold",
      ],
      funding:
        "Public since July 2021 (Nasdaq: HOOD)",
      stage:
        "IPO July 29, 2021; crypto trading launched 2018; closed Bitstamp (Jun 2025, ~$200M, 50+ licences) and WonderFi (Jun 2026); Robinhood Chain public mainnet launched (Jul 1, 2026); EU services reach 30 countries with tokenized stocks and perpetual futures; supports USDG from the Global Dollar Network",
      partners: [
        "Bitstamp (acquired)",
        "WonderFi (acquired)",
        "Arbitrum (Robinhood Chain)",
        "Global Dollar Network (USDG)",
        "Uniswap, Chainlink, Alchemy, BitGo (integrations)",
      ],
      tech: [
        "Provides self-custody of settled crypto with no third-party custodian for users of its custody solution (FY2025 10-K)",
        "Completed the ~$200M Bitstamp acquisition (June 2, 2025), adding an institutional-grade global exchange (Robinhood newsroom)",
        "Launched Robinhood Chain mainnet (July 1, 2026) for tokenized stocks and agentic trading, with a Web3 wallet live in 150+ countries (Robinhood newsroom; FY2025 10-K)",

      ],
      metrics: [
        "Public float: ~$71.3B of common equity held by non-affiliates (as of June 30, 2025, FY2025 10-K)",
        "Shares outstanding: 790,054,654 Class A and 110,253,736 Class B (as of February 11, 2026, FY2025 10-K)",

      ],
      links: [
        {
          label: "Website (official)",
          url: "https://robinhood.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/RobinhoodApp",
        },
        {
          label: "Robinhood newsroom — Bitstamp close (Jun 2025)",
          url: "https://robinhood.com/newsroom/robinhood-completes-acquisition-of-bitstamp/",
        },
        {
          label: "Robinhood newsroom — Robinhood Chain mainnet",
          url: "https://robinhood.com/newsroom/robinhood-accelerates-global-expansion-robinhood-chain-mainnet-stock-tokens-agentic-trading/?lang=en",
        },
      ],
    },
  },
];
