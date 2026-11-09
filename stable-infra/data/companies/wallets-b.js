// Wallets & consumer apps, batch B — Ledger through Trust Wallet.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const WALLETS_B = [
  {
    id: "ledger",
    name: "Ledger",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      // "Gemalto (security partnership)" maps to canonical Gemalto, now a Thales brand — gemalto.com redirects to Thales.
      "Intel (security partnership)": "https://www.intel.com",
      "Gemalto (security partnership)": "https://www.thalesgroup.com",
      "Samsung (investor)": "https://www.samsung.com",
      "Crypto.com (investor)": "https://www.crypto.com",
      "Animoca Brands (investor)": "https://www.animocabrands.com",
    },

    productLinks: {
      "Ledger Nano S Plus": "https://shop.ledger.com/products/ledger-nano-s-plus",
      "Ledger Nano X": "https://shop.ledger.com/products/ledger-nano-x",
      "Ledger Stax": "https://shop.ledger.com/pages/ledger-stax",
      "Ledger Flex": "https://shop.ledger.com/pages/ledger-flex",
      "Ledger Live": "https://www.ledger.com/ledger-live",
      "Ledger Recover": "https://www.ledger.com/blog/announcing-the-ledger-recover-cryptographic-protocol-white-paper",
    },

    facts: {
      founded: "2014",
      description:
        "Paris-based digital-asset security company best known for its Nano hardware wallets and the Ledger Live companion app, securing crypto and stablecoins through self-custody devices.",
      products: ["Ledger Nano S Plus", "Ledger Nano X", "Ledger Stax", "Ledger Flex", "Ledger Live", "Ledger Recover"],
      funding:
        "Reported ~€486M total across rounds — $1.5M seed (2015), $7M Series A led by MAIF Avenir (2017), $75M Series B led by Draper Esprit (Jan 2018), $380M Series C led by 10T Holdings at a >$1.5B valuation (Jun 2021), €100M (~$108M) Series C extension (Mar 2023); plus a $2.9M strategic investment from Samsung (2019)",
      stage:
        "Hardware wallets sold in 165+ countries with 1M+ devices sold by 2018; unicorn valuation above $1.5B after the 2021 Series C; expanded beyond hardware with Ledger Recover (2023) and the Stax and Flex touchscreen devices",
      partners: ["Intel (security partnership)", "Gemalto (security partnership)", "Samsung (investor)", "Crypto.com (investor)", "Animoca Brands (investor)"],
      tech: [
        "Hardware key storage on Secure Element chips running Ledger's proprietary OS, with transaction clear signing",
        "Open-sourced ~95% of its codebase, including the ledger-secure-os core, on GitHub (2023–2024)",
        "Ledger Recover — Shamir-secret-sharing key recovery split across independent custodians, published as a cryptographic protocol white paper (2023)",
      ],
      metrics: [
        "Devices (signers) sold: 8M+ (as of November 2026, Ledger.com)",
        "Share of global crypto secured: 30%+ (as of November 2026, Ledger.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.ledger.com" },
        { label: "X (Twitter)", url: "https://x.com/Ledger" },
        { label: "Ledger — \"Ledger is 95% open source, why not 100%?\" (Jul 2024)", url: "https://www.ledger.com/blog-ledger-is-95-opensource-why-not-100" },
        { label: "Ledger — Ledger Recover cryptographic protocol white paper (Jun 2023)", url: "https://www.ledger.com/blog/announcing-the-ledger-recover-cryptographic-protocol-white-paper" },
      ],
      people: [
        { name: "Eric Larchevêque", role: "Co-founder", linkedin: "https://www.linkedin.com/in/ericlarch", x: "https://x.com/EricLarch" },
        { name: "Pascal Gauthier", role: "Chairman & CEO", linkedin: "https://www.linkedin.com/in/pascalgauthier1" },
      ],
    },
  },
  {
    id: "lemon",
    name: "Lemon",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Visa (card network)": "https://www.visa.com",
      "Pomelo (card issuing infrastructure)": "https://pomelo.la",
      "Kingsway Capital (lead investor)": "https://kingswaycap.com",
      "F-Prime (lead investor)": "https://www.fprimecapital.com",
      "ParaFi (lead investor)": "https://parafi.com",
      "Coinbase Ventures (investor)": "https://www.coinbase.com/ventures",
    },

    productLinks: {
      "Lemon wallet": "https://lemon.me",
      "Visa Lemon Card": "https://www.lemon.me/lemon_card",
      "Crypto dollars (USDC)": "https://lemon.me",
    },

    facts: {
      founded: "2019",
      description:
        "Buenos Aires crypto fintech founded by Marcelo Cavazzoli — a pesos/crypto wallet with crypto dollars (USDC), Lemon Earn yield, and the Visa Lemon Card that converts crypto and stablecoins at checkout across Latin America.",
      products: ["Lemon wallet", "Visa Lemon Card", "Lemon Earn", "Crypto dollars (USDC)"],
      funding:
        "Reported $37M+ across disclosed rounds — $1.1M seed led by Draper University and Draper Cygnus (2020), $16.3M Series A led by Kingsway Capital (Jul 2021), $20M Series B led by F-Prime and ParaFi (Oct 2025); the company reports $66M raised in total, which the disclosed rounds do not fully reconcile",
      stage:
        "Issued 100,000+ Visa cards in Argentina within a month of the 2021 Lemon Card launch; reached 1M users in 2022 and 2M in 2023; launched in Peru (2024), reaching 1M users there in under a year with 150k+ Visa cards; reports 4M+ validated users regionally; no verified public valuation",
      partners: ["Visa (card network)", "Pomelo (card issuing infrastructure)", "Kingsway Capital (lead investor)", "F-Prime (lead investor)", "ParaFi (lead investor)", "Coinbase Ventures (investor)"],
      tech: [
        "Publishes proof-of-reserves for custodied user assets",
        "Digital-dollar balances (\"dólares digitales\") run on stablecoins (USDt) placed in DeFi protocols to generate daily yield",
        "Visa prepaid and credit cards that debit crypto and stablecoin balances at checkout",
      ],
      metrics: [
        "Validated users: 4M+ (as of November 2026, Lemon.me)",
        "Visa cards issued: 2M+ (as of November 2026, Lemon.me)",
        "Processed volume: US$9.3B (as of November 2026, Lemon.me)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.lemon.me" },
        { label: "X (Twitter)", url: "https://x.com/lemonapp_ar" },
        { label: "Lemon Card launch with Visa (Bloomberg Línea, Nov 2021)", url: "https://www.bloomberglinea.com/2021/11/08/la-argentina-lemon-busca-hackear-las-finanzas-tradicionales-con-su-cryptovisa/" },
        { label: "Lemon — proof of reserves", url: "https://lemon.me/prueba-de-reservas" },
      ],
      people: [
        { name: "Marcelo Cavazzoli", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/marcelocavazzoli" },
        { name: "Maximiliano Raimondi", role: "CFO", linkedin: "https://www.linkedin.com/in/maxiraimondi" },
      ],
    },
  },
  {
    id: "metamask",
    name: "MetaMask",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Mastercard (card network)": "https://www.mastercard.com",
      "Baanx (card issuing)": "https://baanx.com",
      "MoonPay (fiat on-ramp)": "https://www.moonpay.com",
      "ParaFi Capital (lead investor)": "https://parafi.com",
      "Third Point (investor)": "https://thirdpoint.com",
      "Marshall Wace (investor)": "https://www.mwam.com",
    },

    productLinks: {
      "MetaMask browser extension": "https://metamask.io/download",
      "MetaMask Mobile": "https://metamask.io/download",
      "MetaMask Snaps": "https://metamask.io/developer/snaps",
      "MetaMask Card": "https://metamask.io/card",
      "Swaps, bridges, and staking": "https://metamask.io",
    },

    facts: {
      founded: "2016",
      description:
        "Self-custody crypto wallet launched in July 2016 inside Consensys by Dan Finlay and Aaron Davis — browser extension and mobile wallet for holding, swapping, bridging, and staking across EVM networks, with the Snaps extension system, MetaMask Card, and fiat on-ramps.",
      products: ["MetaMask browser extension", "MetaMask Mobile", "MetaMask Snaps", "MetaMask Card", "Swaps, bridges, and staking"],
      funding:
        "Reported $765M+ raised by parent Consensys across rounds — $65M Series B with JPMorgan, Mastercard, and UBS (Apr 2021), $200M Series C at a ~$3.2B valuation (Nov 2021), $450M Series D led by ParaFi Capital at a >$7B valuation (Mar 2022); MetaMask-specific capital was never separately itemized",
      stage:
        "Surpassed 30M monthly active users in January 2022, up 42% in four months per Consensys; expanded from the Ethereum extension to mobile, Snaps, and the Mastercard-powered MetaMask Card (2024); no verified current user count or new priced round since the 2022 Series D",
      partners: ["Mastercard (card network)", "Baanx (card issuing)", "MoonPay (fiat on-ramp)", "ParaFi Capital (lead investor)", "Third Point (investor)", "Marshall Wace (investor)"],
      tech: [
        "Snaps — an open extension system that adds new chains, accounts, and features to the wallet without forking the core",
        "Open-source core maintained under the MetaMask GitHub organization",
        "MetaMask Card — Mastercard-powered spending directly from a self-custody wallet (with Baanx, announced Aug 2024 on metamask.com)",
        "Supports 700+ networks with built-in swaps, bridging, and staking",
      ],
      metrics: [
        "Downloads: 100M+ worldwide (as of November 2026, MetaMask.io)",
        "Assets moved: $30B+ over 10 years (as of November 2026, MetaMask.io)",
      ],
      links: [
        { label: "Website (official)", url: "https://metamask.io" },
        { label: "X (Twitter)", url: "https://x.com/MetaMask" },
        { label: "MetaMask — Snaps developer platform", url: "https://metamask.io/developer/snaps" },
        { label: "MetaMask — GitHub organization (open-source core)", url: "https://github.com/MetaMask" },
      ],
      people: [
        { name: "Joseph Lubin", role: "Chairman & CEO", linkedin: "https://www.linkedin.com/in/joseph-lubin-48406489" },
      ],
    },
  },
  {
    id: "minipay",
    name: "MiniPay",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Opera (parent)": "https://www.opera.com",
      "Celo (blockchain)": "https://celo.org",
      "Tether (USDT and XAU₮0)": "https://tether.to",
      "Visa (card network)": "https://www.visa.com",
      "Gnosis Pay (card infrastructure)": "https://gnosispay.com/",
      "Noah (USD/EUR transfers)": "https://noah.com/",
    },
    productLinks: {
      "MiniPay stablecoin wallet (Celo)": "https://minipay.to",
      "MiniPay Card (Visa, powered by Gnosis Pay)": "https://minipay.to/card",
      "Phone-number P2P transfers": "https://minipay.to",
      "Mini Apps and USD/EUR accounts": "https://minipay.to/virtual-usd-eur-accounts",
      "Cash-in/cash-out via local partners": "https://minipay.to",
    },
    facts: {
      founded: "2023",
      description:
        "Opera's self-custodial stablecoin wallet, launched in 2023 on the Celo blockchain and operated by Blueboard Limited, an Opera company — phone-number P2P stablecoin payments across Africa and emerging markets, with mini-apps, USD/EUR accounts, and the Gnosis Pay-powered MiniPay Card.",
      products: ["MiniPay stablecoin wallet (Celo)", "MiniPay Card (Visa, powered by Gnosis Pay)", "Phone-number P2P transfers", "Mini Apps and USD/EUR accounts", "Cash-in/cash-out via local partners"],
      funding:
        "No publicly disclosed venture round — built inside Opera and operated by Blueboard Limited, an Opera company; a proposed 160M CELO ecosystem allocation and developer grant programs are ecosystem arrangements, not equity funding",
      stage:
        "More than 3 million activated wallets within a year of launch (Jul 2024); 8M phone-verified wallets and 200M transactions (Jul 2025); Opera reported 16M+ activated wallets across 65+ countries (Jun 2026), with the Celo ecosystem update citing 18M+ activations and 541M+ transactions (Q2 2026)",
      partners: ["Opera (parent)", "Celo (blockchain)", "Tether (USDT and XAU₮0)", "Visa (card network)", "Gnosis Pay (card infrastructure)", "Noah (USD/EUR transfers)"],
      tech: [
        "Self-custodial stablecoin wallet on Celo — phone-number P2P transfers settle in seconds with sub-cent fees",
        "Pockets — instant drag-and-drop swaps across USDC, USDT, and cUSD",
        "70+ embedded Mini Apps that transact in stablecoins without separate installs",
        "MiniPay Card — Visa card debiting a self-custodial stablecoin balance via Gnosis Pay",
      ],
      metrics: [
        "Phone-verified wallets: 21M+ (as of November 2026, minipay.to)",
        "Transactions settled on Celo: 617M+ (as of November 2026, minipay.to)",
        "Send reach: 70+ countries (as of November 2026, minipay.to)",
      ],
      links: [
        { label: "Website (official)", url: "https://minipay.to" },
        { label: "X (Twitter)", url: "https://x.com/minipay" },
        { label: "Gnosis Pay — MiniPay Visa Card infrastructure (Jun 2026)", url: "https://www.gnosis.io/blog/minipay-launches-visa-card-powered-by-gnosis-pay" },
        { label: "Celo forum — MiniPay Update Q2 2026", url: "https://forum.celo.org/t/minipay-update-q2-2026/13664" },
      ],
      people: [
        { name: "Jørgen Arnesen", role: "EVP Mobile, Opera — leads MiniPay", linkedin: "https://www.linkedin.com/in/arnesenjorgen" },
      ],
    },
  },
  {
    id: "nubank",
    name: "Nubank",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Berkshire Hathaway (investor)": "https://berkshirehathaway.com",
      "Sequoia Capital (early investor)": "https://sequoiacap.com",
      "Tiger Global (investor)": "https://www.tigerglobal.com",
      "Kaszek Ventures (early investor)": "https://kaszek.com",
      "Lead Bank (FDIC-insured US deposits)": "https://www.lead.bank/",
    },
    productLinks: {
      "Digital bank (accounts, credit, payments, investments)": "https://nu.com",
      "Nu Global multicurrency stablecoin account (USDC and EURC)": "https://nu.com/global",
      "In-app crypto trading (Bitcoin and Ether via Nu Global)": "https://nu.com/global",
      "Nucoin loyalty token": "https://nubank.com.br/nu/nucoin",
      "International transfers across 35+ countries": "https://nu.com/global",
    },
    facts: {
      founded: "2013",
      description:
        "Latin America's largest digital bank (Nu Holdings, NYSE: NU), founded in 2013 by David Vélez, Cristina Junqueira and Edward Wible — its Nu Global account puts stablecoins at the center of international expansion, converting deposits into USDC and EURC for dollar and euro balances.",
      products: ["Digital bank (accounts, credit, payments, investments)", "Nu Global multicurrency stablecoin account (USDC and EURC)", "In-app crypto trading (Bitcoin and Ether via Nu Global)", "Nucoin loyalty token", "International transfers across 35+ countries"],
      funding:
        "Reported: $2M seed (2013, Sequoia and Kaszek); $14.3M Series A led by Sequoia (2014); $30M Series B led by Tiger Global (2015); $400M round (Jan 2021); $750M round led by Berkshire Hathaway's $500M commitment (Jun 2021, ~$30B valuation); NYSE IPO in Dec 2021 raising ~$2.6B at a ~$41.4B implied valuation",
      stage:
        "139 million customers globally at Q2 2026 (about 118M in Brazil, 15.8M in Mexico, 5M+ in Colombia) with 83.5% monthly activity; launched U.S. operations on Sep 10, 2026 with Nu Global — a multicurrency account converting deposits into USDC and EURC with transfers across 35+ countries; Q2 2026 gross revenue ~$5.9B and net income ~$1.1B",
      partners: ["Berkshire Hathaway (investor)", "Sequoia Capital (early investor)", "Tiger Global (investor)", "Kaszek Ventures (early investor)", "Lead Bank (FDIC-insured US deposits)"],
      tech: [
        "In-app crypto trading built on Paxos as regulated custody and execution partner (Paxos newsroom, May 2022)",
        "USDC digital-dollar experiences — first phase of a partnership with Circle (Dec 2023)",
        "Nu Global account converts deposits into USDC and EURC for dollar and euro balances, with transfers across 35+ countries (notice to the market, Sep 2026)",
      ],
      metrics: [
        "Customers: 139M (as of June 2026, Nu Holdings Q2 2026 Form 6-K)",
        "Net income: ~$1.1B (as of Q2 2026, Nu Holdings Form 6-K)",
      ],
      links: [
        { label: "Website (official)", url: "https://nu.com" },
        { label: "X (Twitter)", url: "https://x.com/nubank" },
        { label: "Nu Holdings Q2 2026 results — SEC Form 6-K (Aug 2026)", url: "https://www.sec.gov/Archives/edgar/data/1691493/000129281426004222/nupr2q26_6k.htm" },
        { label: "Nubank — partnership with Circle for USDC digital dollars (Dec 2023)", url: "https://nu.com/en/newsroom/consumers/nubank-partners-with-circle-to-offer-experiences-with-digital-dollars" },
      ],
      people: [
        { name: "David Vélez", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/david-v%C3%A9lez-1004875" },
        { name: "Cristina Junqueira", role: "Co-founder", linkedin: "https://www.linkedin.com/in/crisjunqueira" },
        { name: "Edward Wible", role: "Co-founder", linkedin: "https://www.linkedin.com/in/adamedwardwible" },
      ],
    },
  },
  {
    id: "oobit",
    name: "Oobit",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Tether (investor)": "https://tether.to",
      "CMCC Global Titan Fund (investor)": "https://www.titan.fund/",
      "468 Capital (investor)": "https://468cap.com/",
    },
    productLinks: {
      "Tap & Pay crypto spending at contactless terminals": "https://www.oobit.com",
      "Crypto-to-fiat conversion and settlement for merchants": "https://www.oobit.com/business",
      "Mobile crypto wallet with planned external-wallet and non-custodial support": "https://www.oobit.com",
      "Web3 gateway (announced at Series A)": "https://www.oobit.com/news/oobit-raises-25m-in-series-a-funding-round",
    },
    facts: {
      founded: "2017",
      description:
        "Singapore-based crypto-payments app founded in 2017 by Amram Adar and Aharon Miller — Oobit lets users spend crypto through contactless Tap & Pay at merchants where Visa and Mastercard are accepted while merchants receive fiat currency.",
      products: ["Tap & Pay crypto spending at contactless terminals", "Crypto-to-fiat conversion and settlement for merchants", "Mobile crypto wallet with planned external-wallet and non-custodial support", "Web3 gateway (announced at Series A)"],
      funding:
        "Reported: $25M Series A (Feb 2024) led by Tether's investment arm with CMCC Global's Titan Fund, 468 Capital and Solana co-founder Anatoly Yakovenko participating; an $8M seed round (Dec 2020) is reported by secondary databases — contemporaneous totals of ~$28M and ~$33M have not been reconciled",
      stage:
        "Oobit's 2024 Series A announcement claimed tap-to-pay access at more than 175 million merchants globally wherever Visa is accepted — a network-reach estimate, not Oobit's own signed-merchant base; no verified user, transaction-volume or 2026-scale figures were disclosed in the checked sources",
      partners: ["Tether (investor)", "CMCC Global Titan Fund (investor)", "468 Capital (investor)", "Anatoly Yakovenko (angel investor)", "Visa and Mastercard merchant networks (acceptance)"],
      tech: [
        "Tap & Pay — contactless crypto spending at Visa/Mastercard terminals, with merchants settled in fiat",
        "Pay via Apple Pay and Google Wallet and local QR payment rails directly from stablecoin balances",
      ],
      metrics: [
        "Merchant acceptance network reach: 175M+ (as of November 2026, Oobit.com — network reach, not Oobit's signed-merchant base)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.oobit.com" },
        { label: "X (Twitter)", url: "https://x.com/oobit" },
        { label: "Oobit — $25M Series A funding announcement (Feb 2024)", url: "https://www.oobit.com/news/oobit-raises-25m-in-series-a-funding-round" },
        { label: "CoinDesk — Oobit raises $25M Series A led by Tether (Feb 2024)", url: "https://www.coindesk.com/business/2024/02/05/crypto-payments-app-oobit-raises-25m-in-series-a-funding-round-led-by-tether" },
      ],
      people: [
        { name: "Amram Adar", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/amram-adar" },
        { name: "Aharon Miller", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/aharonmiller" },
      ],
    },
  },
  {
    id: "phantom",
    name: "Phantom",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Andreessen Horowitz (investor)": "https://a16z.com",
      "Paradigm (investor)": "https://www.paradigm.xyz",
      "Sequoia Capital (investor)": "https://sequoiacap.com",
      "Variant Fund (investor)": "https://variant.fund",
      "Jump Capital (investor)": "https://jumpcap.com",
      "Solana Ventures (investor)": "https://solana.ventures/",
    },
    productLinks: {
      "Self-custodial multichain wallet (Solana, Ethereum, Base, Bitcoin, Polygon, Sui, Monad)": "https://phantom.com",
      "Browser extension and mobile apps": "https://phantom.com/download",
      "In-wallet swaps, staking and NFT management": "https://phantom.com",
      "Usernames, social discovery and peer-to-peer payments": "https://phantom.com",
      "Embedded-wallet infrastructure (Bitski) and transaction-security (Blowfish) technology via acquisitions": "https://phantom.com/learn/blog/phantom-acquires-bitski",
    },
    facts: {
      founded: "2021",
      description:
        "Self-custodial multichain crypto wallet founded in 2021 in San Francisco by 0x alumni Brandon Millman, Francesco Agosti and Chris Kalani — Solana-first, now spanning Ethereum, Base, Bitcoin and other networks with in-wallet swaps, staking, NFTs and peer-to-peer payments.",
      products: ["Self-custodial multichain wallet (Solana, Ethereum, Base, Bitcoin, Polygon, Sui, Monad)", "Browser extension and mobile apps", "In-wallet swaps, staking and NFT management", "Usernames, social discovery and peer-to-peer payments", "Embedded-wallet infrastructure (Bitski) and transaction-security (Blowfish) technology via acquisitions"],
      funding:
        "Reported: $9M Series A led by Andreessen Horowitz (Jul 2021); $109M Series B led by Paradigm (Jan 2022, $1.2B valuation); $150M Series C co-led by Sequoia Capital and Paradigm (Jan 2025, $3B valuation) — about $268M disclosed total",
      stage:
        "Company-reported at the Jan 2025 Series C: 15 million monthly active users, $20 billion in annual swap volume, 850 million on-chain transactions and $25 billion in self-custody assets; Phantom's site later displayed 20M+ users in 2026 — a different measure than monthly actives",
      partners: ["Andreessen Horowitz (investor)", "Paradigm (investor)", "Sequoia Capital (investor)", "Variant Fund (investor)", "Jump Capital (investor)", "Solana Ventures (investor)"],
      tech: [
        "Acquired Blowfish (2024), a transaction-simulation and security startup whose API screens malicious transactions before signing — the basis of Phantom's in-wallet transaction warnings (Phantom 2024 year in review)",
        "Acquired Bitski (2024) to bring embedded-wallet infrastructure in-house, enabling simpler onboarding for users without seed phrases (Phantom 2024 year in review)",
        "Expanded from a Solana-first wallet to multichain self-custody across Ethereum, Base, Bitcoin, Polygon, Sui and Monad with in-wallet swaps, staking and peer-to-peer payments (Phantom 2024 year in review)",
      ],
      metrics: [
        "Monthly active users: 15 million (as of January 2025, Phantom Series C announcement)",
        "Annual swap volume: $20 billion (as of January 2025, Phantom Series C announcement)",
        "Self-custody assets: $25 billion (as of January 2025, Phantom Series C announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://phantom.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/phantom",
        },
        {
          label: "Phantom — Series C announcement (Jan 2025)",
          url: "https://phantom.com/learn/blog/phantom-series-c",
        },
        {
          label: "Phantom — 2024 year in review",
          url: "https://phantom.com/learn/blog/phantom-2024-year-in-review",
        },
      ],
      people: [
        { name: "Brandon Millman", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/brandon-millman-b093a022" },
        { name: "Francesco Agosti", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/fragosti" },
        { name: "Chris Kalani", role: "Co-founder & CPO", linkedin: "https://www.linkedin.com/in/chriskalani" },
      ],
    },
  },
  {
    id: "redotpay",
    name: "RedotPay",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Visa (card network)": "https://www.visa.com",
      "Goodwater Capital (investor)": "https://goodwatercap.com",
      "Lightspeed (investor)": "https://lsvp.com",
      "Ripple (payout partnership)": "https://ripple.com/",
    },
    productLinks: {
      "Stablecoin-funded Visa virtual and physical cards": "https://www.redotpay.com",
      "Multi-currency wallet with swaps, P2P marketplace and staking": "https://www.redotpay.com",
      "Cross-border and business payouts": "https://www.redotpay.com",
      "RedotPay Connect — merchant stablecoin acceptance with fiat settlement": "https://www.redotpay.com/redotpay-connect",
    },
    facts: {
      founded: "2023",
      description:
        "Hong Kong-based stablecoin-payments fintech established in 2023, co-founded by CEO Michael Gao (some databases cite 2021) — RedotPay issues stablecoin-funded Visa virtual and physical cards so users can spend USDT, USDC and other digital assets at merchants who receive fiat, alongside a multi-currency wallet, cross-border payouts and stablecoin acceptance for merchants.",
      products: ["Stablecoin-funded Visa virtual and physical cards", "Multi-currency wallet with swaps, P2P marketplace and staking", "Cross-border and business payouts", "RedotPay Connect — merchant stablecoin acceptance with fiat settlement"],
      funding:
        "Reported: $40M Series A led by Lightspeed (Mar 2025, with HSG and Galaxy); $47M strategic financing (Sep 2025, Coinbase Ventures, Galaxy Ventures and Vertex Ventures, valuing RedotPay above $1B); $107M Series B led by Goodwater Capital (Dec 2025, with Pantera Capital, Blockchain Capital and Circle Ventures) — $194M raised across 2025",
      stage:
        "Company-reported: more than 6 million registered users across 100+ markets and over $10 billion in annualized payment volume as of the Dec 2025 Series B (3M+ users at the Mar 2025 Series A), with card-network acceptance at roughly 130 million merchant and ATM locations; Bloomberg reported US IPO plans in Oct 2026",
      partners: ["Visa (card network)", "Goodwater Capital (investor)", "Lightspeed (investor)", "Pantera Capital and Circle Ventures (investors)", "Ripple (payout partnership)", "MetaMask and Coinbase wallets (Connect acceptance)"],
      tech: [
        "Card program infrastructure detailed by partner StraitsX: Visa BIN sponsorship, stablecoin funding via dedicated virtual accounts, and 1:1 settlement backed by StraitsX's XUSD stablecoin linking fiat inflows with on-chain and card spending (StraitsX case study)",
        "RedotPay Connect (Jun 2026, launched at Money20/20): a B2B stablecoin-acceptance gateway letting merchants accept USDT and USDC with settlement in local fiat currencies, positioned as cutting merchant costs ~70% versus card rails (redotpay.com/redotpay-connect; RedotPay news)",
        "Issues stablecoin-funded Visa virtual and physical cards with real-time crypto-to-fiat conversion at checkout, so merchants receive fiat while users spend USDT, USDC and other digital assets (RedotPay)",
      ],
      metrics: [
        "Registered users: 6 million+ (as of December 2025, RedotPay Series B announcement)",
        "Annualized payment volume: $10 billion+ (as of December 2025, RedotPay Series B announcement)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.redotpay.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/RedotPay",
        },
        {
          label: "RedotPay — $107M Series B announcement (Dec 2025)",
          url: "https://www.redotpay.com/news/redotpay-raises-us107m-in-series-b-to-drive-stablecoin-payments-adoption-globally",
        },
        {
          label: "StraitsX case study — RedotPay wallet-ready card program",
          url: "https://www.straitsx.com/case-study/from-launch-to-scale-redotpays-wallet-ready-card-program",
        },
      ],
      people: [
        { name: "Michael Gao", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/michael-gao-652160191" },
      ],
    },
  },
  {
    id: "revolut",
    name: "Revolut",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "DST Global (investor)": "https://dst-global.com/",
      "Balderton Capital (investor)": "https://balderton.com",
      "Bridge, a Stripe company (EURR issuer)": "https://bridge.xyz",
    },
    productLinks: {
      "Multi-currency accounts, international transfers and debit cards": "https://www.revolut.com",
      "Savings, credit, insurance, and stock and commodity trading": "https://www.revolut.com",
      "Crypto trading since 2017 with 1:1 USD conversion into USDC and USDT": "https://www.revolut.com/crypto/stablecoin-conversion/",
      "EURR — Revolut's own euro stablecoin, issued by Bridge, a Stripe company": "https://reserves.bridge.xyz/eurr",
      "Revolut Business accounts and payments": "https://www.revolut.com/business/",
    },
    facts: {
      founded: "2015",
      description:
        "Global financial super-app founded in 2015 in London by Nikolay Storonsky and Vlad Yatsenko — multi-currency accounts, transfers, cards, savings, insurance and trading for tens of millions of customers, with crypto trading since 2017, fee-free 1:1 dollar conversion into USDC and USDT, and its own euro stablecoin EURR launched in 2026.",
      products: ["Multi-currency accounts, international transfers and debit cards", "Savings, credit, insurance, and stock and commodity trading", "Crypto trading since 2017 with 1:1 USD conversion into USDC and USDT", "EURR — Revolut's own euro stablecoin, issued by Bridge, a Stripe company", "Revolut Business accounts and payments"],
      funding:
        "Reported: ~$2.3M seed (2015), ~$10M Series A (2016) and ~$66M Series B (2017) with Balderton; $250M Series C led by DST Global (2018, ~$1.7B valuation); $500M Series D (2020, ~$5.5B; some reports cite $580M with an extension); $800M Series E led by SoftBank Vision Fund 2 and Tiger Global (Jul 2021, $33B) — later share sales valued Revolut at $45B (Aug 2024), $75B (Nov 2025) and $115B (Nov 2026, led by Glade Brook Capital Partners)",
      stage:
        "UK banking licence with restrictions (Jul 2024, in mobilisation) and an EU MiCA crypto licence (2025); company-reported 50M+ customers in late 2024 rising to 80M+ in 2026 reporting, with ~$6B revenue and ~$2.3B pre-tax profit reported for 2025; stablecoin payment volumes estimated at ~$10.5B in 2025, up 156% year over year",
      partners: ["SoftBank Vision Fund 2 and Tiger Global (investors)", "DST Global (investor)", "Balderton Capital (investor)", "Glade Brook Capital Partners, Coatue and Durable Capital (latest share-sale investors)", "Bridge, a Stripe company (EURR issuer)", "Circle and Tether (USDC and USDT conversion rails)"],
      tech: [
        "Fee-free 1:1 conversion between USD and USDC/USDT with zero spreads, plus withdrawals to external wallets on major blockchains (Revolut stablecoin conversion product page)",
        "EURR — Revolut's own euro stablecoin (Aug 2026), issued in partnership with Bridge, a Stripe company, and integrated into app balances, spending and transfers (Revolut EURR announcement)",
        "Dollar-to-stablecoin swaps enabled under Revolut's EU MiCA crypto licence (Oct 2025), extending compliant stablecoin rails across the EEA (Finance Magnates)",
      ],
      metrics: [
        "Retail customers: 68.3 million (as of December 2025, Revolut 2025 Annual Report)",
        "Revenue: $6.0 billion (FY 2025, Revolut 2025 annual results announcement)",
        "Total customer balances: £50.2 billion (as of December 2025, Revolut 2025 Annual Report)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.revolut.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Revolut",
        },
        {
          label: "Revolut — 1:1 stablecoin conversion product page",
          url: "https://www.revolut.com/crypto/stablecoin-conversion/",
        },
        {
          label: "Revolut — 2025 annual results: record $2.3bn profit on $6bn revenue (Mar 2026)",
          url: "https://www.revolut.com/en-US/news/revolut_reports_record_profit_of_2_3bn_for_2025_as_revenue_surges_to_6bn/",
        },
      ],
      people: [
        { name: "Nik Storonsky", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/nstoronsky" },
        { name: "Vlad Yatsenko", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/yatsenko" },
      ],
    },
  },
  {
    id: "sorted",
    name: "Sorted",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Tether (investor and partner)": "https://tether.to",
      "Gnosis (investor)": "https://gnosis.io",
      "Breez (Lightning SDK integration)": "https://breez.technology",
      "OneSeed (tree-planting partnership)": "https://www.oneseed.eco/",
    },
    productLinks: {
      "Lightweight non-custodial stablecoin wallet for feature phones and low-powered Android devices": "https://sorted.io",
      "Remittances with cash-out to mobile money and bank accounts (Kenya and Nigeria)": "https://sorted.io",
      "Sorted Top-Up Card for spending digital dollars": "https://www.sorted.io/help-center/sorted-top-up-cards",
      "Bitcoin Lightning support via Breez SDK and gasless USDt transfers": "https://sorted.io",
    },
    facts: {
      founded: "2023",
      description:
        "Hong Kong-based stablecoin wallet startup launched in 2023 by Stephen Browne — Sorted builds a lightweight non-custodial wallet for feature phones and low-end Android devices, letting users send and hold digital dollars and bitcoin, cash out to mobile money and bank accounts, and pay for bills, airtime and market purchases across Africa and South Asia.",
      products: ["Lightweight non-custodial stablecoin wallet for feature phones and low-powered Android devices", "Remittances with cash-out to mobile money and bank accounts (Kenya and Nigeria)", "Sorted Top-Up Card for spending digital dollars", "Bitcoin Lightning support via Breez SDK and gasless USDt transfers"],
      funding:
        "Reported: $1.5M strategic pre-seed from Tether (2024); $4.4M seed led by Tether and Gnosis (May 2026) with participation from Movement, Angel Invest and angel investors including the founders of RWA.io",
      stage:
        "Company-reported: launched 2023 as the first non-custodial crypto wallet built for feature phones; 500,000+ downloads across 160+ countries as of 2026, after 170,000+ installs in 2024 and 250,000+ in 2025; top-up card programme and mobile-money off-ramp live in Kenya and Nigeria; selected for the 2026 Stellar x CV Labs Accelerator",
      partners: ["Tether (investor and partner)", "Gnosis (investor)", "Movement and Angel Invest (investors)", "Breez (Lightning SDK integration)", "OneSeed (tree-planting partnership)", "Stellar x CV Labs Accelerator (2026 cohort)"],
      tech: [
        "Built on the Liquid-based Breez SDK for non-custodial Bitcoin Lightning payments without requiring users to run a full node — light enough for constrained devices (Breez case study)",
        "Roughly 10 MB app footprint designed for KaiOS feature phones and low-end Androids with ~50 MB storage and patchy connectivity, distributed via KaiStore and Android app stores (Breez case study)",
        "Gasless USDt transfers across Ethereum, Polygon, BNB Chain and Celo (2026), so senders do not need to hold a second token for network fees (Sorted Medium post, Apr 2026)",
      ],
      metrics: [
        "Downloads: 500,000+ across 160+ countries (as of May 2026, Sorted seed-round announcement / Breez case study)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://sorted.io",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/sortedwallet",
        },
        {
          label: "Breez case study — Sorted: Bitcoin for feature phones",
          url: "https://breez.technology/case-studies/sorted/",
        },
        {
          label: "Sorted — Send Money Home Without Holding Two Tokens (gasless USDt, Apr 2026)",
          url: "https://medium.com/@sortedwallet/send-money-home-without-holding-two-tokens-e6a6e64c524f",
        },
      ],
      people: [
        { name: "Stephen Browne", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/stephen-browne" },
      ],
    },
  },
  {
    id: "toss",
    name: "Toss",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Solana Foundation (Toss Bank remittance and settlement MOU)": "https://solana.org",
      "Kleiner Perkins (investor)": "https://kleinerperkins.com",
      "Sequoia China/HongShan (investor)": "https://www.hongshan.com/",
      "GIC (investor)": "https://www.gic.com.sg/",
      "Korea Development Bank (investor)": "https://www.kdb.co.kr/",
    },
    productLinks: {
      "Toss super-app: payments, P2P transfers, banking, investing, insurance and lending": "https://toss.im",
      "Toss Bank — internet-only bank with cross-border remittances across 30 countries and 7 major currencies": "https://www.tossbank.com/",
      "Toss Securities brokerage and investment services": "https://corp.tossinvest.com/",
      "Toss Payments payment gateway and Toss Place merchant services": "https://www.tosspayments.com/",
    },
    facts: {
      founded: "2011",
      description:
        "South Korean financial super-app founded by Lee Seung-gun (Viva Republica, 2011; Toss app launched 2015) — payments, transfers, banking, securities, insurance and lending used by tens of millions in Korea. Its Toss Bank has explored blockchain remittance rails and KRW-stablecoin use with the Solana Foundation, though no Toss-issued stablecoin has launched.",
      products: ["Toss super-app: payments, P2P transfers, banking, investing, insurance and lending", "Toss Bank — internet-only bank with cross-border remittances across 30 countries and 7 major currencies", "Toss Securities brokerage and investment services", "Toss Payments payment gateway and Toss Place merchant services"],
      funding:
        "Reported: ~$410M round (Jun 2021, ~$7.4B valuation); $405M Series G led by Tonic Private Equity (Dec 2022, ~$7B valuation) with Korea Development Bank, Altos Ventures, Goodwater Capital, Greyhound Capital, Aspex and Bond Capital; earlier backers include Kleiner Perkins, Sequoia China/HongShan and GIC — totals estimated at $1.2B+ across rounds, with a December 2025 pre-IPO secondary sale reported and ~₩200B (~$180M) of fresh funding reported in 2026",
      stage:
        "Press-reported: 24M registered Toss users (Dec 2022) and ~15M Toss Bank customers (Jun 2026); explored KRW-pegged stablecoins via 24 trademark filings including TOSSKRW (Jun 2025) and a Toss Bank–Solana Foundation MOU on blockchain remittance and settlement (Jun 2026) — a proof of concept, with no Toss-issued stablecoin launched; a US IPO at reported $10B+ valuations has been reported but not confirmed",
      partners: ["Solana Foundation (Toss Bank remittance and settlement MOU)", "Tonic Private Equity (Series G lead)", "Kleiner Perkins (investor)", "Sequoia China/HongShan (investor)", "GIC (investor)", "Korea Development Bank (investor)"],
      tech: [
        "Toss Bank\u2013Solana Foundation MOU (signed Jun 19, 2026): a phased proof of concept for Solana-based stablecoin cross-border remittances and settlement — the first direct partnership between a Korean internet-only bank and the Solana ecosystem; exploratory, with no production commitment (Blockhead)",
        "Proof of concept with Optimism and Sunnyside Labs (Jul 2026) evaluating blockchain infrastructure — institutional custody and compliance controls — for potential KRW-backed stablecoin applications (Toss newsroom 52031)",
        "Strategic MOU with Circle (Jul 2026) with Toss Bank to explore stablecoin payment models and digital-asset infrastructure built on USDC, including KRW-denominated digital assets and cross-border settlement, subject to regulation (Toss newsroom 52071)",
      ],
      metrics: [
        "Registered users: 30 million+ (as of July 2026, Toss blockchain-infrastructure announcement)",
        "Toss Bank customers: ~15 million (as of June 2026, Toss Bank\u2013Solana Foundation MOU announcements)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://toss.im",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/toss__official",
        },
        {
          label: "Blockhead — Toss Bank\\u2019s Solana bet: remittance pilot and stablecoin plans (Jun 2026)",
          url: "https://www.blockhead.co/2026/07/01/toss-banks-solana-bet-is-a-pre-ipo-play-disguised-as-a-remittance-pilot/",
        },
        {
          label: "Toss — digital finance infrastructure PoC with Optimism and Sunnyside Labs (Jul 2026)",
          url: "https://toss.im/en-us/newsroom/52031",
        },
      ],
      people: [
        { name: "Lee Seung-gun (SG Lee)", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/seunggun-lee" },
      ],
    },
  },
  {
    id: "trust-wallet",
    name: "Trust Wallet",
    categoryId: "wallets",
    profileStatus: "complete",
    partnerLinks: {
      "Binance (acquired Trust Wallet in 2018)": "https://www.binance.com",
      "BNB Chain (TWT token home and ecosystem partner)": "https://www.bnbchain.org",
      "YZi Labs (Trust Moon supporter)": "https://yzilabs.com",
      "Polygon (Trust Moon supporter)": "https://polygon.technology",
      "MoonPay (Trust Moon supporter)": "https://www.moonpay.com",
      "AWS (Trust Moon supporter)": "https://aws.amazon.com",
    },
    productLinks: {
      "Self-custodial multichain mobile wallet supporting 100+ blockchains": "https://trustwallet.com",
      "Trust Wallet browser extension with dApp access": "https://trustwallet.com/download",
      "In-wallet swaps, staking and NFT support": "https://trustwallet.com",
      "Trust Wallet Token (TWT) — BEP-20 utility and governance token on BNB Chain": "https://trustwallet.com/blog/company/trust-wallet-token-twt-litepaper",
      "Trust Moon Web3 accelerator for builders": "https://trustwallet.com/blog/company/introducing-trust-moon-the-web3-accelerator-by-trust-wallet",
    },
    facts: {
      founded: "2017",
      description:
        "Self-custodial multichain crypto wallet founded in 2017 by Viktor Radchenko and acquired by Binance in 2018 (its first acquisition) — Trust Wallet supports assets across 100+ blockchains on mobile and browser extension, with swaps, staking, NFTs and Web3 dApp access, and issues the TWT utility and governance token on BNB Chain.",
      products: ["Self-custodial multichain mobile wallet supporting 100+ blockchains", "Trust Wallet browser extension with dApp access", "In-wallet swaps, staking and NFT support", "Trust Wallet Token (TWT) — BEP-20 utility and governance token on BNB Chain", "Trust Moon Web3 accelerator for builders"],
      funding:
        "No disclosed venture funding rounds; acquired by Binance in July 2018 — Binance's first acquisition — for undisclosed consideration reported as a mix of cash, Binance equity and BNB (TechCrunch); TWT launched in 2020 via community distribution with no token sale or fundraising round",
      stage:
        "Company-reported: 210M+ users (Sep 2025) growing to 220M+ (Dec 2025 — company claims, methodology unspecified, not monthly actives); Trust Moon accelerator launched with support from Binance, YZi Labs, BNB Chain, Polygon, MoonPay and AWS (Sep 2025); TWT launched 2020 with an October 2020 burn that cut supply ~99% to ~1B; a browser-extension compromise (v2.68) was reported in December 2025 with a clean 2.69 replacement issued; CEO Eowyn Chen (2022–2026) was succeeded by Felix Fan in February 2026 (secondary-source reported)",
      partners: ["Binance (acquired Trust Wallet in 2018)", "BNB Chain (TWT token home and ecosystem partner)", "YZi Labs (Trust Moon supporter)", "Polygon (Trust Moon supporter)", "MoonPay (Trust Moon supporter)", "AWS (Trust Moon supporter)"],
      tech: [
        "Maintains wallet-core, an open-source C++ cross-platform signing library powering the mobile and extension builds across 100+ blockchains (GitHub trustwallet/wallet-core)",
        "Responded to the December 2025 browser-extension supply-chain compromise (v2.68) by disabling publishing access, shipping a clean 2.69, identifying roughly 2,520 affected addresses (~$8.5M) and announcing voluntary reimbursement (Trust Wallet year-end wrap-up, Dec 2025)",
        "TWT launched in 2020 with an October 2020 burn that cut supply ~99% to about 1 billion tokens, with no token sale or fundraising round (TWT litepaper)",
      ],
      metrics: [
        "Users: 220 million+ (as of December 2025, Trust Wallet company reporting — claim, methodology unspecified, not monthly actives)",
        "TWT circulating supply: ~416.65 million (as of November 2026, CoinGecko)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://trustwallet.com",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/TrustWallet",
        },
        {
          label: "Trust Wallet — Trust Wallet in 2025: Leading the Wallet Era (Dec 2025)",
          url: "https://trustwallet.com/blog/company/trust-wallet-in-2025-year-end-wrap-up",
        },
        {
          label: "wallet-core — open-source cross-platform signing library (GitHub)",
          url: "https://github.com/trustwallet/wallet-core",
        },
      ],
      people: [
        { name: "Viktor Radchenko", role: "Founder", x: "https://x.com/vikmeup" },
        { name: "Felix Fan", role: "CEO", linkedin: "https://www.linkedin.com/in/fanchiyinfelix" },
      ],
    },
  },
];
