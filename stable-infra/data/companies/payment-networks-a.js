// Payment networks, batch A — Adyen through Klarna.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const PAYMENT_NETWORKS_A = [
  {
    id: "adyen",
    name: "Adyen",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Uber": "https://www.uber.com",
      "eBay": "https://www.ebay.com",
      "Meta": "https://meta.com",
      "Netflix": "https://www.netflix.com",
      "Spotify": "https://www.spotify.com",
      "Microsoft": "https://www.microsoft.com",
      "Google (Agent Payments Protocol)": "https://www.google.com",
    },

    productLinks: {
      "Online & in-person payment processing": "https://www.adyen.com/accept-payments",
      "Global acquiring": "https://www.adyen.com/accept-payments",
      "Risk & fraud protection (RevenueProtect)": "https://www.adyen.com/uplift/protect",
      "Issuing": "https://www.adyen.com/issuing",
      "Payout services": "https://www.adyen.com/payouts",
      "Adyen Capital": "https://www.adyen.com/capital",
    },
    facts: {
      founded: "2006",
      description:
        "Dutch payments platform giving enterprises a single stack — one integration, one acquiring relationship — for online, mobile, and in-person payments.",
      products: [
        "Online & in-person payment processing",
        "Global acquiring",
        "Risk & fraud protection (RevenueProtect)",
        "Issuing",
        "Payout services",
        "Adyen Capital",
      ],
      funding:
        "Reported — $250M growth round led by General Atlantic with Temasek, Index Ventures, and Felicis Ventures (Dec 2014); listed on Euronext Amsterdam at €240/share, ~€7.1B market cap (Jun 2018)",
      stage:
        "Chosen by eBay as its primary payments provider (2018); IPO on Euronext Amsterdam (Jun 2018); joined the ECB digital euro pilot as an acquiring PSP (2026); joined the x402 Foundation and Open Standard for agentic-commerce protocols and OpenUSD stablecoin infrastructure (2026)",
      partners: ["Uber", "eBay", "Meta", "Netflix", "Spotify", "Microsoft", "Google (Agent Payments Protocol)"],
      tech: [
        "Single integrated processing stack for online, in-person, and platform payments — €451.1B processed in Q3 2026 with platform processed volume up 55% YoY (Adyen Q3 2026 Business Update)",
        "Joined the x402 Foundation and the Open Standard for agentic-commerce protocols, plus OpenUSD stablecoin infrastructure (Adyen H1 2026 results)",
        "Named an acquiring PSP in the ECB digital euro pilot (Adyen H1 2026 results)",
      ],
      metrics: [
        "Processed volume: €451.1B in Q3 2026, up 30% YoY (as of October 2026, Adyen Q3 2026 Business Update)",
        "Processed volume: €803.8B in H1 2026 (as of August 2026, Adyen H1 2026 results)",
        "Net revenue: €738.1M in Q3 2026, up 23% YoY (as of October 2026, Adyen Q3 2026 Business Update)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.adyen.com" },
        { label: "X (Twitter)", url: "https://x.com/Adyen" },
        { label: "Adyen — H1 2026 results (x402, OpenUSD, digital euro)", url: "https://www.adyen.com/press-and-media/adyen-publishes-h1-2026-financial-results-3wjne" },
        { label: "Adyen — Q3 2026 business update", url: "https://www.adyen.com/press-and-media/adyen-publishes-q3-2026-business-update-6r9vz0" },
      ],
      people: [
        { name: "Pieter van der Does", role: "Co-founder & Co-CEO", linkedin: "https://www.linkedin.com/in/pieter-van-der-does" },
        { name: "Ingo Uytdehaage", role: "Co-CEO", linkedin: "https://www.linkedin.com/in/ingo-uytdehaage-559a9133" },
      ],
    },
  },
  {
    id: "bitpay",
    name: "BitPay",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Microsoft": "https://www.microsoft.com",
      "WordPress.com": "https://wordpress.com",
      "Newegg": "https://www.newegg.com",
      "Namecheap": "https://www.namecheap.com",
      "Index Ventures": "https://www.indexventures.com",
      "Founders Fund": "https://foundersfund.com",
    },

    productLinks: {
      "Crypto & stablecoin checkout for merchants": "https://www.bitpay.com/business",
      "BitPay Wallet": "https://www.bitpay.com/wallet",
      "Mass payouts": "https://www.bitpay.com/business",
      "Crypto-funded gift cards": "https://www.bitpay.com/gift-cards",
      "Payment APIs & e-commerce plugins": "https://developer.bitpay.com/",
    },
    facts: {
      founded: "2011",
      description:
        "Atlanta-based cryptocurrency payments processor — one of the first Bitcoin merchant services — now handling checkout, invoicing, payouts, and settlement in crypto and stablecoins.",
      products: [
        "Crypto & stablecoin checkout for merchants",
        "BitPay Wallet",
        "BitPay Card (Visa prepaid)",
        "Mass payouts",
        "Crypto-funded gift cards",
        "Payment APIs & e-commerce plugins",
      ],
      funding:
        "Reported — $510K seed (Jan 2013), $2M round led by Founders Fund (Jun 2013), $30M Series A led by Index Ventures (May 2014), $30M Series B led by Aquiline Technology Growth (Dec 2017); $70M+ total per company statements",
      stage:
        "WordPress.com was an early merchant; 10,000 merchants by 2013; BitPay Visa prepaid card launched (2016); processed over $1B in Bitcoin payments (2017); stablecoins grew to nearly half of processed payment volume (2026)",
      partners: ["Microsoft", "WordPress.com", "Newegg", "Namecheap", "Index Ventures", "Founders Fund"],
      tech: [
        "Stablecoin checkout (USDC, USDT) for online, in-store, and email invoicing, with settlement in fiat, crypto, or a mix (BitPay stablecoin payments)",
      ],
      metrics: [
        "Cryptocurrency payments processed: 900,000+ (as of June 2026, BitPay 15-year announcement)",
        "Stablecoin share of payment volume: nearly half, up 50% year over year (as of June 2026, BitPay 15-year announcement)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.bitpay.com" },
        { label: "X (Twitter)", url: "https://x.com/BitPay" },
        { label: "BitPay — stablecoin payments", url: "https://www.bitpay.com/stablecoin-payments" },
        { label: "PR Newswire — BitPay at 15 years (Jun 2026)", url: "https://www.morningstar.com/news/pr-newswire/20260611ny81251/bitpay-celebrates-15-years-as-crypto-payments-grow-from-experiment-to-everyday-utility" },
      ],
      people: [
        { name: "Stephen Pair", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/stephen-pair-9a332b9" },
        { name: "Tony Gallippi", role: "Co-founder", linkedin: "https://www.linkedin.com/in/tonygallippi" },
      ],
    },
  },
  {
    id: "checkout-com",
    name: "Checkout.com",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Fireblocks (stablecoin settlement)": "https://www.fireblocks.com",
      "Coinbase (stablecoin acceptance)": "https://www.coinbase.com",
      "Spotify (global payments partnership)": "https://www.spotify.com",
      "FTX (early USDC settlement user)": "https://ftx.com",
    },

    productLinks: {
      "Acquiring & payment processing": "https://www.checkout.com/",
      "Checkout & payment methods": "https://www.checkout.com/",
      "Stablecoin settlement (USDC via Fireblocks)": "https://www.checkout.com/newsroom/checkout-com-scales-stablecoin-settlement-for-us-merchants-in-partnership-with-fireblocks",
      "Stablecoin acceptance (with Coinbase)": "https://www.checkout.com/newsroom/checkout-com-enables-stablecoin-acceptance-for-merchants-in-partnership-with-coinbase",
      "Payouts": "https://www.checkout.com/",
    },
    facts: {
      founded: "2012 (began as Opus Payments, 2009)",
      description:
        "London-headquartered payments platform providing acquiring, processing, and checkout for enterprises, with stablecoin settlement and acceptance built into its merchant offering.",
      products: [
        "Acquiring & payment processing",
        "Checkout & payment methods",
        "Stablecoin settlement (USDC via Fireblocks)",
        "Stablecoin acceptance (with Coinbase)",
        "Payouts",
      ],
      funding:
        "Reported — $230M Series A led by Insight Partners and DST Global (2019), $450M Series C at $15B valuation (2021), $1B Series D at $40B valuation (Jan 2022); ~$1.8B total",
      stage:
        "First PSP to offer 24/7 stablecoin settlement, powered by Fireblocks — USDC, $300M+ processed in beta (Jun 2022); employee share buyback valued it at ~$12B (Sep 2025); acquired Blue EMI, a Lithuanian issuer of euro stablecoins under MiCA, and opened a Vilnius technology centre (Jan 2026); stablecoin acceptance with Coinbase (May 2026) and scaled US stablecoin settlement with Fireblocks (Jun 2026)",
      partners: ["Fireblocks (stablecoin settlement)", "Coinbase (stablecoin acceptance)", "Spotify (global payments partnership)", "FTX (early USDC settlement user)"],
      tech: [
        "Acquired Blue EMI, a Bank of Lithuania-licensed e-money institution issuing euro stablecoins under MiCA, alongside a new Vilnius technology centre (Checkout.com newsroom)",
        "Single unified processing platform — 99.999% uptime in 2025, with 95% of ~100M Black Friday/Cyber Monday transactions completing in under one second; live with Google's Universal Commerce Protocol plus Visa Intelligent Commerce and Mastercard's Agentpay (Checkout.com annual letter)",
      ],
      metrics: [
        "Total processed volume: $300B+ in 2025, up 64% YoY (as of February 2026, Checkout.com annual letter)",
        "Issuing: $5B run rate in Q4 2025 (as of February 2026, Checkout.com annual letter)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.checkout.com" },
        { label: "X (Twitter)", url: "https://x.com/checkout" },
        { label: "Checkout.com — Blue EMI acquisition (Jan 2026)", url: "https://www.checkout.com/newsroom/checkout-com-acquires-blue-emi-a-licensed-issuer-of-euro-stablecoins-and-establishes-lithuania-technology-centre" },
        { label: "Checkout.com — $300B volume and full-year profitability (Feb 2026)", url: "https://www.checkout.com/newsroom/checkout-com-returns-to-full-year-profitability-and-surpasses-300b-in-volume-as-it-positions-for-the-era-of-agentic-commerce" },
      ],
      people: [
        { name: "Guillaume Pousaz", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/guillaumepousaz" },
      ],
    },
  },
  {
    id: "dlocal",
    name: "dLocal",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Circle Payments Network": "https://www.circle.com",
      "BVNK": "https://www.bvnk.com",
      "Amazon": "https://www.amazon.com",
      "Microsoft": "https://www.microsoft.com",
      "Spotify": "https://www.spotify.com",
      "Uber": "https://www.uber.com",
    },

    productLinks: {
      "Pay-ins (local payment methods)": "https://www.dlocal.com/our-solution/payins/",
      "Payouts": "https://www.dlocal.com/our-solution/payouts/",
      "Issuing (local-currency cards)": "https://www.dlocal.com/press-releases/dlocal-launches-direct-issuing-white-labeled-prepaid-cards-in-emerging-markets/",
      "dLocal Defense (fraud & risk)": "https://www.dlocal.com/our-solution/dlocal-defense-suite-for-fraud-management/",
      "Stablecoin payouts & settlement": "https://www.dlocal.com/payments/stablecoins/",
    },
    facts: {
      founded: "2016",
      description:
        "Uruguayan cross-border payments platform connecting global merchants to emerging markets through a single API — pay-ins, payouts, and issuing across 40+ countries.",
      products: [
        "Pay-ins (local payment methods)",
        "Payouts",
        "Issuing (local-currency cards)",
        "dLocal Defense (fraud & risk)",
        "Stablecoin payouts & settlement",
      ],
      funding:
        "Reported — $200M from General Atlantic and Addition at a $1.2B valuation (Sep 2020), $150M led by Alkeon Capital with Tiger Global at ~$5B (Apr 2021); Nasdaq IPO (DLO) raised ~$617M gross (Jun 2021)",
      stage:
        "Uruguay's first unicorn (2020); Nasdaq listing (Jun 2021); acquired PrimeiroPay for ~$40M (2021); partnered with BVNK for stablecoin payouts (Jun 2025); joined the Circle Payments Network (Nov 2025); launched its 'Stablecoin Full' integration for emerging markets (Apr 2026)",
      partners: ["Circle Payments Network", "BVNK", "Amazon", "Microsoft", "Spotify", "Uber"],
      tech: [
        "Stablecoin Full — six modules (funding, settlement, on-ramp, off-ramp, checkout, payouts) under one API, connecting stablecoin rails with 1,000+ local payment methods across 60+ markets (dLocal Stablecoin Full launch)",
      ],
      metrics: [
        "TPV: US$17.69B in Q2 2026, up 92% YoY (as of August 2026, dLocal Q2 2026 earnings release)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.dlocal.com" },
        { label: "X (Twitter)", url: "https://x.com/dLocalPayments" },
        { label: "dLocal — Stablecoin Full launch (Apr 2026)", url: "https://www.dlocal.com/press-releases/dlocal-launches-the-most-seamless-stablecoin-integration-for-payments-in-emerging-markets/" },
        { label: "dLocal — Q2 2026 earnings release (SEC exhibit)", url: "https://www.sec.gov/Archives/edgar/data/1846832/000184683226000031/ex_991-dlocalxearningsxres.htm" },
      ],
      people: [
        { name: "Sebastián Kanovich", role: "Founder & Board Member", linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-kanovich-a0a50830" },
        { name: "Pedro Arnt", role: "CEO", linkedin: "https://www.linkedin.com/in/pedro-arnt-5a7a69" },
      ],
    },
  },
  {
    id: "fiserv",
    name: "Fiserv",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "PayPal (FIUSD–PYUSD interoperability)": "https://www.paypal.com",
      "Circle": "https://www.circle.com",
      "Paxos": "https://www.paxos.com",
      "Solana": "https://solana.com",
      "Mastercard": "https://www.mastercard.com",
      "Fireblocks": "https://www.fireblocks.com",
      "Bank of North Dakota": "https://bnd.nd.gov",
    },

    productLinks: {
      "Merchant acquiring & Clover point-of-sale": "https://www.clover.com/",
      "Core account processing for banks": "https://www.fiserv.com/en/solutions/core-innovation.html",
      "Card issuing & processing": "https://www.fiserv.com/en/solutions/card-issuing-solutions.html",
      "Digital-asset platform & FIUSD stablecoin": "https://www.fiserv.com/en/solutions/embedded-finance/fiusd-stablecoin.html",
      "Cash movement & settlement": "https://www.fiserv.com/",
    },
    facts: {
      founded: "1984",
      description:
        "Global payments and financial-services technology company serving thousands of financial institutions and millions of merchants; announced the FIUSD stablecoin and digital-asset platform for banks.",
      products: [
        "Merchant acquiring & Clover point-of-sale",
        "Core account processing for banks",
        "Card issuing & processing",
        "Digital-asset platform & FIUSD stablecoin",
        "Cash movement & settlement",
      ],
      funding:
        "No private venture rounds — combined with First Data in an all-stock deal valued at ~$22B (announced Jan 2019, completed Jul 2019); publicly traded (Nasdaq: FISV)",
      stage:
        "First Data merger brought the Clover merchant platform (2019); Finxact acquisition (2022); Payfare acquisition (Mar 2025); announced FIUSD with Paxos and Circle infrastructure on Solana, FIUSD–PYUSD interoperability with PayPal, and stablecoin work with Mastercard (Jun 2025); 2026 reporting describes a shifted stablecoin strategy, hosting Bank of North Dakota's Roughrider coin with Fireblocks",
      partners: ["PayPal (FIUSD–PYUSD interoperability)", "Circle", "Paxos", "Solana", "Mastercard", "Fireblocks", "Bank of North Dakota"],
      tech: [
        "Announced FIUSD — a stablecoin and digital-asset platform for banks — on Solana, initially built on Paxos and Circle stablecoin infrastructure (Jun 2025) (Source: https://investors.fiserv.com/news-releases/news-release-details/fiserv-launches-new-fiusd-stablecoin-financial-institutions)",
        "Pivoted in 2026 to build FIUSD as a proprietary coin internally, moving away from the Paxos/Circle arrangement; designed for closed-loop transfers across its 300M+ bank accounts and 5–6M merchants, with future interoperability with external digital wallets (Source: https://www.paymentsdive.com/news/fiserv-payments-processor-stablecoin-pivot-fiusd/832133/)",
        "Digital-asset platform is live in production hosting the Bank of North Dakota's Roughrider stablecoin on Fireblocks infrastructure, available to some 90 North Dakota banks and credit unions (Oct 2026) (Source: https://www.paymentsdive.com/news/fiserv-payments-processor-stablecoin-pivot-fiusd/832133/)",
      ],
      metrics: [
        "Market cap: $32.62B (as of November 2026, stockanalysis.com)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.fiserv.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Fiserv",
        },
        {
          label: "Fiserv — FIUSD launch announcement (Jun 2025)",
          url: "https://investors.fiserv.com/news-releases/news-release-details/fiserv-launches-new-fiusd-stablecoin-financial-institutions",
        },
        {
          label: "Payments Dive — Why Fiserv pivoted on FIUSD (Oct 2026)",
          url: "https://www.paymentsdive.com/news/fiserv-payments-processor-stablecoin-pivot-fiusd/832133/",
        },
      ],
      people: [
        { name: "Takis Georgakopoulos", role: "CEO", linkedin: "https://www.linkedin.com/in/takis-georgakopoulos-bb97b48" },
      ],
    },
  },
  {
    id: "flutterwave",
    name: "Flutterwave",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Polygon Labs": "https://polygon.technology",
      "Turnkey": "https://www.turnkey.com",
      "Nuvion": "https://www.nuvion.co",
      "Ripple": "https://ripple.com",
      "Visa": "https://www.visa.com",
      "Uber": "https://www.uber.com",
    },

    productLinks: {
      "Payment APIs & checkout": "https://www.flutterwave.com/",
      "Flutterwave Send (remittances)": "https://send.flutterwave.com/",
      "Merchant payouts & infrastructure": "https://www.flutterwave.com/",
    },
    facts: {
      founded: "2016",
      description:
        "African payments infrastructure company enabling businesses to pay and get paid across Africa and globally through one API — cards, bank transfers, mobile money, and, increasingly, stablecoin rails.",
      products: [
        "Payment APIs & checkout",
        "Flutterwave Send (remittances)",
        "Barter (consumer payments)",
        "Flutterwave Market",
        "Merchant payouts & infrastructure",
      ],
      funding:
        "Reported — $170M Series C at $1B+ valuation (Mar 2021), $250M Series D led by B Capital Group at $3B+ valuation (Feb 2022); Series E round including a strategic investment from Ripple (Jun 2026, size undisclosed)",
      stage:
        "Processed payments for Uber in Africa from launch (2016); valued above $3B after Series D (2022); 13 US money-transmission licenses (2023); selected Polygon as default blockchain for stablecoin cross-border payments (Oct 2025); stablecoin balances with Turnkey and Nuvion (Jan 2026)",
      partners: ["Polygon Labs", "Turnkey", "Nuvion", "Ripple", "Visa", "Uber"],
      tech: [
        "Selected Polygon as the default blockchain for stablecoin cross-border payments (Oct 2025) — USDC and USDT rails, enterprise rollout from 2025, consumer remittances via Send App planned for 2026 (Source: https://flutterwave.com/sn/blog/flutterwave-partners-with-polygon-as-the-primary-blockchain-partner-for-cross-border-payments)",
        "Ripple joined the Series E (Jun 2026) with planned RLUSD, Ripple Payments, and XRP Ledger integration into Flutterwave's cross-border network (Source: https://v12.flutterwave.com/2026/06/16/building-the-financial-operating-system-for-the-next-decade/)",
        "Company-published scale: 20M+ API calls per day (peaking at 231 requests/second) and 500k+ payments processed daily (Source: https://www.flutterwave.com)",
      ],
      metrics: [
        "Processed volume: over $50 billion across more than 1 billion transactions (as of June 2026, Flutterwave Series E announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.flutterwave.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/theflutterwave",
        },
        {
          label: "Flutterwave × Polygon — stablecoin cross-border rails (Oct 2025)",
          url: "https://flutterwave.com/sn/blog/flutterwave-partners-with-polygon-as-the-primary-blockchain-partner-for-cross-border-payments",
        },
        {
          label: "Flutterwave — Ripple strategic investment in Series E (Jun 2026)",
          url: "https://v12.flutterwave.com/2026/06/16/building-the-financial-operating-system-for-the-next-decade/",
        },
      ],
      people: [
        { name: "Olugbenga Agboola", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/gbagboola" },
        { name: "Iyinoluwa Aboyeji", role: "Co-founder", linkedin: "https://www.linkedin.com/in/eaboyeji" },
      ],
    },
  },
  {
    id: "klarna",
    name: "Klarna",
    categoryId: "payment-networks",
    profileStatus: "complete",
    partnerLinks: {
      "Bridge — Open Issuance (KlarnaUSD issuance)": "https://www.bridge.xyz",
      "Tempo — Stripe & Paradigm blockchain": "https://tempo.xyz",
      "Macy's (early US retail partnership)": "https://www.macys.com",
    },

    productLinks: {
      "Buy now, pay later (Pay later, Pay in 3/4)": "https://www.klarna.com/us/",
      "Klarna Checkout": "https://www.klarna.com/us/",
      "Klarna app": "https://www.klarna.com/us/",
      "Klarna Card": "https://www.klarna.com/us/",
      "KlarnaUSD stablecoin": "https://www.klarna.com/international/press/klarna-launches-klarnausd-as-stablecoin-transactions-hit-usd27-trillion/",
    },
    facts: {
      founded: "2005",
      description:
        "Swedish fintech — founded as Kreditor — built on buy now, pay later; now an app-based bank and checkout network that announced its own dollar stablecoin, KlarnaUSD.",
      products: [
        "Buy now, pay later (Pay later, Pay in 3/4)",
        "Klarna Checkout",
        "Klarna app",
        "Klarna Card",
        "KlarnaUSD stablecoin",
      ],
      funding:
        "Reported — ~$6.2B raised before listing per Crunchbase; peak private valuation ~$45.6B (2021); $800M round at a $6.7B valuation (Jul 2022); NYSE IPO (KLAR) raised ~$1.37B at $40/share (Sep 2025)",
      stage:
        "Acquired SOFORT (2013); full Swedish banking license (2017); NYSE listing (Sep 2025); announced KlarnaUSD, built on Open Issuance by Bridge and launching on the Stripe–Paradigm Tempo blockchain, on testnet with a 2026 mainnet target (Nov 2025)",
      partners: ["Bridge — Open Issuance (KlarnaUSD issuance)", "Tempo — Stripe & Paradigm blockchain", "Macy's (early US retail partnership)"],
      tech: [
        "KlarnaUSD — Klarna's first stablecoin and the first stablecoin launched by a bank on Tempo, the payments-focused Layer-1 blockchain built by Stripe and Paradigm (Nov 2025) (Source: https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Launches-KlarnaUSD-as-Stablecoin-Transactions-Hit-27-Trillion-Annually/default.aspx)",
        "Issued through Open Issuance, Bridge's stablecoin-issuance platform (a Stripe company); dollar-backed, live on Tempo's testnet for testing, prototyping, and integration, with a 2026 Tempo mainnet launch targeted (Source: https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Launches-KlarnaUSD-as-Stablecoin-Transactions-Hit-27-Trillion-Annually/default.aspx)",
        "Motivated by cross-border payment costs — an estimated $120B in annual transaction fees — building on an extensive Klarna–Stripe infrastructure relationship across 26 markets (Source: https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Launches-KlarnaUSD-as-Stablecoin-Transactions-Hit-27-Trillion-Annually/default.aspx)",
      ],
      metrics: [
        "Market cap: US$5.1B (as of November 2026, SimplyWall St)",
        "Annual GMV: $118 billion (as of November 2025, Klarna press release)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.klarna.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Klarna",
        },
        {
          label: "Klarna IR — KlarnaUSD launch (Nov 2025)",
          url: "https://investors.klarna.com/News--Events/news/news-details/2025/Klarna-Launches-KlarnaUSD-as-Stablecoin-Transactions-Hit-27-Trillion-Annually/default.aspx",
        },
        {
          label: "The Local — Klarna launches its own digital currency",
          url: "https://www.thelocal.se/20251125/swedish-payments-giant-klarna-launches-its-own-digital-currency",
        },
      ],
      people: [
        { name: "Sebastian Siemiatkowski", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/sebastian-siemiatkowski-768977", x: "https://x.com/klarnaseb" },
        { name: "Niklas Adalberth", role: "Co-founder", linkedin: "https://www.linkedin.com/in/niklasadalberth" },
      ],
    },
  },
];
