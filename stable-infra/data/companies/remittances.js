// Remittances — Airtm through Zepz.
// One slice of the roster; data/companies.js concatenates the batches in original roster order.
export const REMITTANCES = [
  {
    id: "airtm",
    name: "Airtm",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Stellar Development Foundation": "https://stellar.org/",
      "Coinbase Ventures": "https://www.coinbase.com/ventures",
      "Payoneer": "https://www.payoneer.com",
    },
    productLinks: {
      "USDC digital-dollar wallet": "https://www.airtm.com/en/",
      "P2P cross-border exchange network": "https://www.airtm.com/en/",
      "US virtual accounts for non-US residents": "https://www.airtm.com/en/",
      "Airtm Business payouts": "https://www.airtm.com/en/business/",
      "Visa virtual card": "https://www.airtm.com/en/solutions/usd-virtual-card/",
      "EURC support": "https://help.airtm.com/en/support/solutions/articles/47001303741-what-is-the-eurc-balance-",
    },
    facts: {
      founded: "2015",
      description:
        "Digital-dollar wallet and peer-to-peer payments network for emerging markets — users hold USDC balances and move money through 500+ local payment methods, banks, e-wallets, and crypto rails across 190+ countries.",
      products: [
        "USDC digital-dollar wallet",
        "P2P cross-border exchange network",
        "US virtual accounts for non-US residents",
        "Airtm Business payouts",
        "Visa virtual card",
        "EURC support",
      ],
      funding:
        "Reported $24M disclosed — $2M seed (Nov 2017; IGNIA, Wintech Ventures), $7M Series A led by BlueYard Capital (Aug 2018), Coinbase Ventures (2019, undisclosed), $15M strategic investment from the Stellar Development Foundation (May 2021); Circle Ventures is also an investor",
      stage: "Launched AirUSD as a USDC representation on Stellar (2021) and transitioned balances to native USDC (2023); serves freelancers, remittance recipients, and companies paying global teams; no official X (Twitter) account is linked from airtm.com or its blog, so no handle is cited here",
      partners: ["Circle", "Stellar Development Foundation", "Coinbase Ventures", "Payoneer"],
      tech: [
        "Holds balances in native USDC — migrated its AirUSD digital dollar (a 1:1 proxy issued on Stellar) to Circle-issued USDC in 2023",
        "P2P exchange network bridges USDC across 500+ local payment methods and multiple blockchains for cash-in/cash-out in 190+ countries",
        "US virtual account with ACH routing for non-US residents, with direct Payoneer integration for cashing out freelance earnings",
      ],
      metrics: [
        "Cumulative transactions: 58.7M+ (as of November 2026, airtm.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.airtm.com/en/" },
        { label: "Airtm — AirUSD to USDC transition", url: "https://www.airtm.com/en/blog/airusd-to-usdc/" },
        { label: "Circle — Airtm founder story", url: "https://www.circle.com/blog/founder-story-ruben-galindo-steckel-from-airtm" },
      ],
      people: [
        { name: "Rubén Galindo Steckel", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/rub%C3%A9n-galindo-steckel-0860176a" },
      ],
    },
  },
  {
    id: "chipper-cash",
    name: "Chipper Cash",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Bridge (Stripe)": "https://bridge.xyz",
      "Visa": "https://www.visa.com",
    },
    productLinks: {
      "P2P cross-border transfers": "https://chippercash.com/",
      "International remittances": "https://chippercash.com/",
      "Chipper USD Card (Visa)": "https://chippercash.com/chipper-card",
      "Bill pay and airtime": "https://chippercash.com/",
      "Chipper Business payments": "https://business.chippercash.com/",
      "US stock investing": "https://chippercash.com/",
    },
    facts: {
      founded: "2018",
      description:
        "Pan-African payments platform for cross-border money movement between African markets and the US and UK — peer-to-peer transfers, remittances, bill pay, and business payments for 7M+ users.",
      products: [
        "P2P cross-border transfers",
        "International remittances",
        "Chipper USD Card (Visa)",
        "Bill pay and airtime",
        "Chipper Business payments",
        "US stock investing",
      ],
      funding:
        "Reported ~$300M — $2.4M seed (Deciens Capital), $13.8M Series A led by Deciens Capital (Jun 2020), $30M Series B (Nov 2020), $100M Series C led by SVB Capital (May 2021), $150M Series C extension led by FTX (Nov 2021) at a reported $2B+ valuation",
      stage: "Launched the Chipper USD Card with Visa in Nigeria (2021); valuation later repriced to ~$1.25B during the fintech downturn; reported its first positive free-cash-flow quarter (Q4 2025)",
      partners: ["Bridge (Stripe)", "Visa"],
      tech: [
        "Chipper USD Card — a Visa virtual card program built on Bridge (Stripe)'s stablecoin infrastructure, with 1M+ cards issued",
      ],
      metrics: [
        "Users: 5M+ (as of November 2026, chippercash.com)",
        "Virtual Visa cards issued: 1M+ (as of November 2026, chippercash.com)",
        "Daily transactions: 250,000+ (as of November 2026, chippercash.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://chippercash.com/" },
        { label: "X (Twitter)", url: "https://x.com/chippercashapp" },
        { label: "Bridge — Chipper Cash card program case study", url: "https://www.bridge.xyz/blog/unlocking-global-spending-how-chipper-cash-built-a-modern-card-program-for-africa-with-bridge" },
        { label: "BusinessDay — first cash-flow-positive quarter (Jan 2026)", url: "https://businessday.ng/companies/article/chipper-cash-turns-cash-flow-positive-amid-naira-plunge-tough-headwinds/" },
      ],
      people: [
        { name: "Ham Serunjogi", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/hamserunjogi" },
        { name: "Maijid Moujaled", role: "Co-founder & President", linkedin: "https://www.linkedin.com/in/maijid" },
      ],
    },
  },
  {
    id: "felix-pago",
    name: "Félix Pago",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Bitso": "https://www.bitso.com",
    },
    productLinks: {
      "WhatsApp remittance chatbot": "https://www.felixpago.com/",
      "Félix for Business APIs": "https://www.felixpago.com/business",
      "Mobile top-ups": "https://www.felixpago.com/recargas-internacionales",
      "Cash-pickup delivery network": "https://www.felixpago.com/",
    },
    facts: {
      founded: "2021",
      description:
        "WhatsApp-based remittances for US Latinos — senders text the Félix chatbot to move money to 11 Latin American markets, settled over Circle's USDC stablecoin rails with local fiat delivery, no app download required.",
      products: [
        "WhatsApp remittance chatbot",
        "Félix for Business APIs",
        "Mobile top-ups",
        "Cash-pickup delivery network",
      ],
      funding:
        "Reported $200M package (Sep 2026) — $87M Series C led by Andreessen Horowitz plus a $113M General Catalyst credit facility at a reported ~$1.4B valuation; earlier rounds: $2.5M pre-seed (HTwenty Capital, Contour Venture Partners, MELI Capital), a Switch Ventures-led seed extension, and $15.5M Series A led by Castle Island Ventures (May 2024)",
      stage: "Crossed $1B in cumulative transfers with 300k users (2024); by 2026 processed $8B+ for 6M+ customers across 11 countries and is expanding into lending, savings, and AI financial services",
      partners: ["Circle", "Bitso"],
      tech: [
        "USDC settlement corridor — card and ACH dollars are converted to USDC via Circle Mint, moved over the Stellar network to Bitso, and paid out in pesos via SPEI, cutting Félix's per-transaction cost from $4.98 to $2.99 per its Circle case study",
        "WhatsApp-native chatbot flow requiring no app download, operated by a FinCEN-registered money transmitter with SOC 2 certification",
      ],
      metrics: [
        "Cumulative transfer volume: $8B+ (as of September 2026, Finovate)",
        "Customers: 6M+ (as of September 2026, Finovate)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.felixpago.com/" },
        { label: "X (Twitter)", url: "https://x.com/Felixpago" },
        { label: "Finovate — $200M equity + debt package", url: "https://finovate.com/cross-border-money-transfer-outfit-felix-raises-200-million/" },
        { label: "Circle — Félix USDC settlement case study", url: "https://www.circle.com/case-studies/felix" },
      ],
      people: [
        { name: "Manuel J Godoy", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/godoymanuel" },
        { name: "Bernardo García", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/bernardo-garcia-gonzalez" },
      ],
    },
  },
  {
    id: "kotani-pay",
    name: "Kotani Pay",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Celo": "https://celo.org",
      "Stellar": "https://stellar.org",
      "Avalanche": "https://www.avalabs.org",
      "Yellow Card": "https://yellowcard.io",
      "Mercy Corps": "https://mercycorps.org",
      "UNICEF": "https://unicef.org",
      "Tether": "https://tether.to",
    },
    productLinks: {
      "Stablecoin on/off-ramp API": "https://kotanipay.com/",
      "Stablecoin Settlement Solution": "https://kotanipay.com/",
      "SMS Wallet (no internet required)": "https://kotanipay.com/",
      "USSD payment access": "https://kotanipay.com/",
      "Last-mile bulk payouts": "https://kotanipay.com/",
    },
    facts: {
      founded: "2020",
      description:
        "Kenyan payments infrastructure connecting blockchain protocols, wallets, and remittance companies to African mobile money, banks, and USSD/SMS channels — the on/off-ramp layer between stablecoins like USDT and USDC and local currency.",
      products: [
        "Stablecoin on/off-ramp API",
        "Stablecoin Settlement Solution",
        "SMS Wallet (no internet required)",
        "USSD payment access",
        "Last-mile bulk payouts",
      ],
      funding:
        "Reported $3M+ — $1M seed (Jan 2022; Flori Ventures, Luno Expeditions/DCG, Allegory Capital, Peer VC, P1 Ventures, Wuri Ventures, RCA Ventures), $2M pre-seed led by P1 Ventures (Sep 2023) with DCG/Luno, Flori Ventures, Adaverse, and Peer VC, plus Stellar Community Fund and UNICEF Venture Fund grants and an undisclosed Tether strategic investment (Oct 2025)",
      stage: "Live in Kenya, Ghana, Zambia, and South Africa with planned expansion to Rwanda, Senegal, Côte d'Ivoire, Tanzania, and Nigeria; acquired Nigerian blockchain backend Fuhlstack, adding reconciliation and ledger products",
      partners: ["Celo", "Stellar", "Avalanche", "Yellow Card", "Mercy Corps", "UNICEF", "Tether"],
      tech: [
        "Stablecoin on/off-ramp APIs converting between stablecoins (USDT, USDC) and African mobile money, banks, and USSD/SMS channels",
        "15+ chain integrations, including Polygon, Celo, Optimism, Stellar, Arbitrum, Avalanche, Cardano, Lisk, Viction, and Lightning Network",
        "SMS-based blockchain wallet delivering full wallet functionality without internet, plus M-Pesa STK Push collections",
      ],
      links: [
        { label: "Website (official)", url: "https://kotanipay.com/" },
        { label: "X (Twitter)", url: "https://x.com/kotanipay" },
        { label: "TechCrunch — $2M pre-seed (Sep 2023)", url: "https://techcrunch.com/2023/09/04/kotani-pay/" },
        { label: "UNICEF Venture Fund — Kotani Pay profile", url: "https://www.unicefventurefund.org/story/kotani-pay-increasing-access-financial-solutions-underbanked-and-unbanked" },
      ],
      people: [
        { name: "Felix Macharia", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/felix-macharia-a01621154" },
        { name: "Samuel Kariuki", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/samuel-kariuki-" },
      ],
    },
  },
  {
    id: "lemfi",
    name: "LemFi",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Y Combinator": "https://www.ycombinator.com/",
      "Left Lane Capital": "https://leftlanecap.com",
      "Highland Europe": "https://highlandeurope.com",
    },
    productLinks: {
      "No-fee remittance app (iOS/Android)": "https://www.lemfi.com/",
      "Multi-currency home delivery": "https://www.lemfi.com/",
      "Card issuing": "https://lemfi.com/en-us/gb/cards",
    },
    facts: {
      founded: "2020",
      description:
        "Remittance app for international students and immigrants — no-fee transfers from the US, UK, and Canada to mobile wallets and bank accounts across Africa, Asia, and Europe, built by the team behind OPay's international payments.",
      products: [
        "No-fee remittance app (iOS/Android)",
        "Multi-currency home delivery",
        "LemFi Business",
        "Card issuing",
      ],
      funding:
        "Reported $86M+ — $33M Series A led by Left Lane Capital (Aug 2023) following Y Combinator-backed early rounds, and $53M Series B led by Highland Europe (Jan 2025) at a reported $550M valuation",
      stage: "Reports 1M+ customers sending from North America and Europe to 25+ receiving markets across Africa, Asia, and Europe; used its Series B to expand further into Asian and European corridors",
      partners: ["Y Combinator", "Left Lane Capital", "Highland Europe"],
      metrics: [
        "Active users: 1M+ (as of January 2025, TechCrunch)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.lemfi.com/" },
        { label: "X (Twitter)", url: "https://x.com/uselemfi" },
        { label: "TechCrunch — $53M Series B (Jan 2025)", url: "https://techcrunch.com/2025/01/13/lemfi-moves-remittances-further-into-asia-and-europe-with-53m-in-new-funding/" },
        { label: "Highland Europe — Series B announcement", url: "https://www.highlandeurope.com/lemfi-has-secured-53m-in-series-b-funding-led-by-highland-europe/" },
      ],
      people: [
        { name: "Ridwan Olalere", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/darilldrems" },
        { name: "Rian Cochran", role: "Co-founder", linkedin: "https://www.linkedin.com/in/rian-cochran-a3a9404" },
      ],
    },
  },
  {
    id: "moneygram",
    name: "MoneyGram",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Stellar Development Foundation": "https://stellar.org/",
      "Madison Dearborn Partners": "https://mdcp.com",
    },
    productLinks: {
      "Cash-to-cash money transfers": "https://www.moneygram.com/",
      "Digital money transfers (app and web)": "https://www.moneygram.com/",
      "MoneyGram Access crypto-to-cash on/off-ramp": "https://www.moneygram.com/us/en/ramps",
      "Bill payments": "https://www.moneygram.com/",
      "Money orders": "https://www.moneygram.com/us/en/services/money-orders",
    },
    facts: {
      founded: "1940",
      description:
        "Global money-transfer network connecting consumers in 200+ countries and territories through agent locations, retail, and digital channels — now bridging cash and blockchain networks with stablecoin on/off-ramps.",
      products: [
        "Cash-to-cash money transfers",
        "Digital money transfers (app and web)",
        "MoneyGram Access crypto-to-cash on/off-ramp",
        "Bill payments",
        "Money orders",
      ],
      funding:
        "Taken private by Madison Dearborn Partners — announced February 2022 at a reported $1.8B deal value and completed June 2023; previously listed on NASDAQ (MGI) since 2011, with a strategic investment from the Stellar Development Foundation in 2022 as part of its blockchain partnership",
      stage: "Digital-first pivot under private ownership — MoneyGram Access crypto-to-cash on/off-ramp live on the Stellar network and a non-custodial digital wallet announced for 2023–2024",
      partners: ["Stellar Development Foundation", "Madison Dearborn Partners"],
      tech: [
        "MoneyGram Access (now branded MoneyGram Ramps) — a crypto-to-cash on/off-ramp built on the Stellar network, converting crypto to cash across its 470,000+ location retail footprint",
        "Non-custodial digital wallet bridging cash and blockchain networks, part of its strategic partnership with the Stellar Development Foundation",
      ],
      metrics: [
        "Retail locations: 470,000+ (as of November 2026, moneygram.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.moneygram.com/" },
        { label: "X (Twitter)", url: "https://x.com/MoneyGram" },
        { label: "Stellar — MoneyGram crypto-to-cash launch", url: "https://stellar.org/press/moneygram-launches-pioneering-global-crypto-to-cash-service-on-the-stellar-network" },
        { label: "SDF — strategic investment in MoneyGram", url: "https://stellar.org/blog/foundation-news/sdfs-investment-in-moneygram-international" },
      ],
      people: [
        { name: "Anthony Soohoo", role: "Chairman & CEO", linkedin: "https://www.linkedin.com/in/anthonysoohoo" },
        { name: "Marc Winniford", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/marcwinniford" },
        { name: "Luke Tuttle", role: "Chief Product and Technology Officer", linkedin: "https://www.linkedin.com/in/luketuttle" },
      ],
    },
  },
  {
    id: "nala",
    name: "NALA",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Acrew Capital": "https://acrewcapital.com",
      "M-Pesa": "https://www.safaricom.co.ke/m-pesa",
      "TransferGo": "https://transfergo.com",
    },
    productLinks: {
      "NALA consumer remittance app": "https://www.nala.com/",
      "Rafiki B2B payments platform": "https://www.nala.com/blog/why-are-payments-in-africa-still-1-built-introducing-rafiki-api",
      "Direct mobile-money payouts (M-Pesa and 25 others)": "https://www.nala.com/",
      "Bill pay into local wallets": "https://www.nala.com/",
    },
    facts: {
      founded: "2017",
      description:
        "Remittance app for the African diaspora in the EU, UK, and US — payments into 249 banks and 26 mobile money services across 11 African markets, powered by its own B2B payments platform Rafiki.",
      products: [
        "NALA consumer remittance app",
        "Rafiki B2B payments platform",
        "Direct mobile-money payouts (M-Pesa and 25 others)",
        "Bill pay into local wallets",
      ],
      funding:
        "Reported $50M — $10M seed (2022) and a $40M equity Series A led by Acrew Capital (Jul 2024) with DST Global Partners, Norrsken22, HOF Capital, Amplo, and NYCA Partners, plus angels including Chime's Ryan King and Robinhood's Vlad Tenev",
      stage: "Pivoted from Tanzanian local transfers (2017) to diaspora remittances (2021); approaching 500k customers and profitable at the time of its Series A, with Rafiki clients including TransferGo and Cadana",
      partners: ["Acrew Capital", "M-Pesa", "TransferGo"],
      tech: [
        "Rafiki — NALA's B2B payments API for instant payouts, collections, and settlement across the US, UK, Europe, Asia, and Africa in local currency or stablecoins",
        "Consumer balances held in a fully-reserved, US dollar-backed stablecoin with institutional-grade security",
      ],
      metrics: [
        "Users: 1M+ across 35+ countries (as of November 2026, nala.com)",
        "Transfer speed: 98% of transfers arrive within 10 minutes (as of November 2026, nala.com)",
      ],
      links: [
        { label: "Website (official)", url: "https://www.nala.com/" },
        { label: "X (Twitter)", url: "https://x.com/nalamoney" },
        { label: "nala.com — $40M announcement", url: "https://www.nala.com/blog/40m-announcement" },
        { label: "TechCrunch — $40M Series A (Jul 2024)", url: "https://techcrunch.com/2024/07/09/nala-series-a/" },
      ],
      people: [
        { name: "Benjamin Fernandes", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/benjaminf7" },
        { name: "Nicolai Eddy", role: "Co-founder & COO", linkedin: "https://www.linkedin.com/in/nicolai-eddy" },
        { name: "Nicolas Esteves", role: "Co-founder & CTO", linkedin: "https://www.linkedin.com/in/nesteves" },
      ],
    },
  },
  {
    id: "onafriq",
    name: "Onafriq",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Ripple": "https://ripple.com/",
      "AfricInvest": "https://africinvest.com",
      "Goodwell Investments": "https://goodwell.nl/",
      "LUN Partners Group": "https://www.lunpartners.com/en/",
    },
    productLinks: {
      "Cross-border payments hub (mobile money, banks, cards)": "https://onafriq.com/",
      "USDC stablecoin settlement (with Circle)": "https://www.circle.com/case-studies/onafriq",
      "Digital-asset-enabled payouts (with Ripple)": "https://ripple.com/ripple-press/ripple-partners-with-onafriq-to-power-digital-asset-enabled-cross-border-payments-between-africa-and-the-rest-of-the-world/",
      "B2B cross-border APIs": "https://onafriq.com/",
    },
    facts: {
      founded: "2009",
      description:
        "Africa's largest digital payments hub (formerly MFS Africa) — a network of networks connecting mobile wallets, banks, and card schemes across 35+ African countries and hundreds of corridors, now scaling cross-border stablecoin settlement with Circle and Ripple.",
      products: [
        "Cross-border payments hub (mobile money, banks, cards)",
        "USDC stablecoin settlement (with Circle)",
        "Digital-asset-enabled payouts (with Ripple)",
        "B2B cross-border APIs",
        "Agent-network payouts (Baxi)",
      ],
      funding:
        "Reported $100M Series C (Nov 2021) — $70M equity and $30M debt co-led by AfricInvest FIVE, Goodwell Investments, and LUN Partners Group, joined by CommerzVentures, Allan Gray Ventures, Endeavor Catalyst, and Endeavor Harvest, with debt from Lendable and Norsad",
      stage: "Founded 2009 by Dare Okoudjou; rebranded from MFS Africa to Onafriq (2023); connects 320M+ mobile money wallets across 35+ African countries and 700 corridors; acquired Beyonic, GTP, and Baxi; scaling cross-border stablecoin settlement with Circle and Ripple",
      partners: ["Circle", "Ripple", "AfricInvest", "Goodwell Investments", "LUN Partners Group"],
      tech: [
        "\"Network of networks\" connecting 40+ African markets across mobile money, banks, cards, and agent networks for remittances, payouts, collections, card issuing and agency banking (onafriq.com)",
        "Settles cross-border payments in USDC through a Circle stablecoin settlement integration (Circle case study)",
        "Ripple partnership (Nov 2023) powers digital-asset-enabled cross-border payments between Africa and the rest of the world across three corridors (Ripple press)",
      ],
      metrics: [
        "Series C funding: $100M (as of November 2021, Onafriq press / TechCrunch)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://onafriq.com/",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/Onafriq",
        },
        {
          label: "Circle — Onafriq stablecoin settlement case study",
          url: "https://www.circle.com/case-studies/onafriq",
        },
        {
          label: "Ripple — Onafriq partnership (Nov 2023)",
          url: "https://ripple.com/ripple-press/ripple-partners-with-onafriq-to-power-digital-asset-enabled-cross-border-payments-between-africa-and-the-rest-of-the-world/",
        },
      ],
      people: [
        { name: "Omotayo Ogunlade", role: "Group Chief Technology Officer", linkedin: "https://www.linkedin.com/in/omotayo-ogunlade-69574a18a" },
      ],
    },
  },
  {
    id: "remitly",
    name: "Remitly",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Generation Investment Management": "https://generationim.com",
      "PayU (Naspers)": "https://payu.com",
      "Stripes Group": "https://www.stripes.co/",
    },
    productLinks: {
      "Remitly app (iOS/Android and web)": "https://www.remitly.com/us/en",
      "Bank deposit and cash pickup delivery": "https://www.remitly.com/us/en",
      "Mobile wallet delivery (e.g. M-Pesa)": "https://www.remitly.com/us/en",
      "Economy and express transfer options": "https://www.remitly.com/us/en",
    },
    facts: {
      founded: "2011",
      description:
        "Digital-first international money transfer for immigrants — sending from 17+ countries into 115+ receiving markets via app and web, with bank deposit, cash pickup, and mobile wallet delivery.",
      products: [
        "Remitly app (iOS/Android and web)",
        "Bank deposit and cash pickup delivery",
        "Mobile wallet delivery (e.g. M-Pesa)",
        "Economy and express transfer options",
      ],
      funding:
        "Reported $505M raised privately — $135M Series E equity led by Generation Investment Management with Owl Rock, Princeville Global, Prudential Financial, Schroder & Co Bank, and Top Tier Capital Partners, plus $85M syndicated debt (Jul 2019); earlier rounds led by PayU/Naspers, Stripes Group, and Threshold; Nasdaq IPO (Sep 2021) raised ~$300M at a $6.9B valuation",
      stage: "Nasdaq debut (Sep 2021) priced at $43 and closed up 12%+ on day one; processed $16.1B across the 12 months to June 2021 for 2.4M quarterly transacting customers; its S-1 flagged growing cryptocurrency usage as a competitive factor",
      partners: ["Generation Investment Management", "PayU (Naspers)", "Stripes Group"],
      tech: [
        "Circle partnership brings USDC into the Remitly Wallet (beta 2025), with Bridge (Stripe) supporting planned stablecoin payout rails (Remitly newsroom)",
        "USD-to-USDC wallet deposits and withdrawals available in Argentina and Nigeria (remitly.com stablecoin page)",
        "Remitly Global Card (Visa, 2026) and the Remitly One membership round out the digital offering beside 170+-country payouts (remitly.com)",
      ],
      metrics: [
        "Quarterly send volume: $23.5B (as of Q2 2026, Remitly results)",
        "Active customers: 10.2M (as of Q2 2026, Remitly results)",
        "Quarterly revenue: ~$495.2M, up 20% year over year (as of Q2 2026, Remitly results)",
        "First full GAAP-profitable year: 2025 (Remitly results)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.remitly.com/us/en",
        },
        {
          label: "X (Twitter)",
          url: "https://x.com/remitly",
        },
        {
          label: "Remitly newsroom — harnesses stablecoins",
          url: "https://news.remitly.com/innovation/remitly-harnesses-stablecoins/",
        },
        {
          label: "Remitly — send stablecoin with Remitly",
          url: "https://www.remitly.com/us/en/landing/send-stablecoin-with-remitly",
        },
      ],
      people: [
        { name: "Matt Oppenheimer", role: "Co-founder & Chairman", linkedin: "https://www.linkedin.com/in/mattoppenheimer" },
        { name: "Josh Hug", role: "Co-founder", linkedin: "https://www.linkedin.com/in/joshhug" },
        { name: "Sebastian Gunningham", role: "Chief Executive Officer", linkedin: "https://www.linkedin.com/in/sebastian-j-gunningham-ba820" },
      ],
    },
  },
  {
    id: "sphere",
    name: "Sphere",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Coinbase Ventures": "https://www.coinbase.com/ventures",
      "Kraken Ventures": "https://www.krakenventures.com/",
      "TCG Crypto": "https://ventures.tcg.co/",
      "Jump Crypto": "https://jumpcrypto.com",
    },
    productLinks: {
      "Stablecoin payments API": "https://spherepay.co/",
      "Cross-border routing and settlement orchestration": "https://spherepay.co/",
      "Sphere dashboard": "https://spherepay.co/",
      "Local-currency payout via partner banks": "https://spherepay.co/",
    },
    facts: {
      founded: "2022",
      description:
        "Stablecoin payments infrastructure (Sphere Laboratories) — an API that lets fintechs and licensed money transfer services move funds between countries over stablecoins, settling into local currency through partner banks in 15–30 minutes.",
      products: [
        "Stablecoin payments API",
        "Cross-border routing and settlement orchestration",
        "Sphere dashboard",
        "Local-currency payout via partner banks",
      ],
      funding:
        "Reported $7.8M — $2.8M seed co-led by The Chernin Group (TCG Crypto) and Jump Crypto (Feb 2024) with Hudson River Trading, Republic Capital, Big Brain Holdings, and Solana Ventures, plus angels including Solana founders Anatoly Yakovenko and Raj Gokal; and a $5M round led by Coinbase Ventures and Kraken Ventures (Dec 2024)",
      stage: "Co-founders Arnold Lee and Luigi Charles met at Columbia and won a Stripe-sponsored payments hackathon before starting Sphere; early traction in Latin America and the Caribbean with a first $1M volume day and 1,000%+ month-over-month growth in early 2024; the 2024 round funded regulatory compliance and risk management",
      partners: ["Coinbase Ventures", "Kraken Ventures", "TCG Crypto", "Jump Crypto"],
      tech: [
        "Stablecoin cross-border payments API converting between bank rails and USDC, USDT, and EURC across 160+ markets with roughly 15–30 minute settlement (spherepay.co; Fortune)",
        "Multichain support led by Solana, plus Ethereum, Polygon, Base, Avalanche, Arbitrum, Tron, Aptos, and Starknet (Sphere developer materials)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://spherepay.co/",
        },
        {
          label: "Medium — $2.8M seed announcement (Feb 2024)",
          url: "https://medium.com/@spherepay/sphere-raises-2-8-million-to-accelerate-global-access-to-stablecoins-09d5a0688cd1",
        },
        {
          label: "Fortune — $5M Coinbase/Kraken round (Dec 2024)",
          url: "https://fortune.com/crypto/2024/12/11/sphere-crypto-fundraising-round-cross-border-payment-stablecoin-coinbase-kraken/",
        },
        {
          label: "Circle — The Money Movement ep. 99 (Sphere)",
          url: "https://www.circle.com/the-money-movement/ep-99-a-new-era-for-cross-border-payments",
        },
      ],
      people: [
        { name: "Arnold Lee", role: "Co-founder & CEO", linkedin: "https://www.linkedin.com/in/arnoldhlee" },
        { name: "Luigi Charles", role: "Co-founder", linkedin: "https://www.linkedin.com/in/luigicharles" },
      ],
    },
  },
  {
    id: "thunes",
    name: "Thunes",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Circle": "https://www.circle.com",
      "Visa": "https://www.visa.com",
      "M-Pesa": "https://www.safaricom.co.ke/m-pesa",
      "WeChat Pay": "https://pay.weixin.qq.com",
      "MoneyGram": "https://www.moneygram.com/",
      "Remitly": "https://www.remitly.com/us/en",
    },
    productLinks: {
      "Cross-border payments network (payouts to 132 countries)": "https://www.thunes.com/direct-global-network/",
      "Collections across 70 markets": "https://www.thunes.com/network-collections/",
      "Multi-currency settlement (300 payment methods, 80 currencies)": "https://www.thunes.com/solutions/",
      "Stablecoin-powered liquidity management (with Circle)": "https://www.thunes.com/insights/solutions/thunes-circle-stablecoin-liquidity/",
    },
    facts: {
      founded: "2016",
      description:
        "Singapore- and London-based cross-border payments network (formerly TransferTo) connecting businesses to mobile wallets and alternative rails — 3 billion wallets and 4 billion bank accounts across 80 currencies, now adding stablecoin-powered liquidity with Circle.",
      products: [
        "Cross-border payments network (payouts to 132 countries)",
        "Collections across 70 markets",
        "Multi-currency settlement (300 payment methods, 80 currencies)",
        "Stablecoin-powered liquidity management (with Circle)",
      ],
      funding:
        "Reported $72M Series C — a $60M first close (Jun 2023) extended to $72M led by Marshall Wace with Bessemer Venture Partners, 01Fintech, Visa, EDBI, and Endeavor Catalyst, at a reported $900M+ valuation",
      stage: "Founded 2016 by Peter De Caluwe; has processed $50B+ in transactions across 300 payment methods and 80 currencies; network partners include M-Pesa, WeChat Pay, PayPal, MoneyGram, and Remitly; launched a stablecoin-powered liquidity management solution with Circle (Oct 2024)",
      partners: ["Circle", "Visa", "M-Pesa", "WeChat Pay", "MoneyGram", "Remitly"],
      tech: [
        "Direct Global Network pays out to banks, mobile wallets, stablecoin wallets, and cards across 140+ countries and 90 currencies, with about 85% of transactions settling instantly (thunes.com)",
        "Circle collaboration for USDC-powered liquidity management (Oct 2024) and Circle Payments Network Managed Payments (Apr 2026) (thunes.com news)",
        "Mastercard Move partnership brings stablecoin-wallet payouts to mainstream senders (Nov 2025) (thunes.com news)",
        "Ripple joined the network (Sep 2025) to connect blockchain-based payout rails; network members include Uber, Grab, PayPal, Remitly, Revolut, and Finastra (thunes.com)",
      ],
      metrics: [
        "Series C extended to $72M at a $900M valuation (as of July 2023, TechCrunch)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.thunes.com/",
        },
        {
          label: "TechCrunch — $72M Series C (Jul 2023)",
          url: "https://techcrunch.com/2023/07/17/thunes-pockets-72m-at-a-900m-valuation-to-expand-its-cross-border-b2b-payment-platform/",
        },
        {
          label: "Thunes — Circle stablecoin liquidity solution (Oct 2024)",
          url: "https://www.thunes.com/news/thunes-and-circle-to-launch-stablecoin-powered-liquidity-management-solution/",
        },
        {
          label: "Thunes — Mastercard Move stablecoin payouts (Nov 2025)",
          url: "https://www.thunes.com/news/mastercard-and-thunes-bring-stablecoin-payouts-to-the-mainstream/",
        },
      ],
      people: [
        { name: "Peter De Caluwe", role: "Co-founder, Deputy Chairman & CEO", linkedin: "https://www.linkedin.com/in/peterdecaluwe" },
        { name: "Chloé Mayenobe", role: "Deputy CEO", linkedin: "https://www.linkedin.com/in/chloe-mayenobe" },
        { name: "Guy Duncan", role: "Chief Technology and Product Officer", linkedin: "https://www.linkedin.com/in/duncanguy" },
      ],
    },
  },
  {
    id: "western-union",
    name: "Western Union",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Anchorage Digital": "https://www.anchorage.com",
      "Solana": "https://solana.com",
    },

    productLinks: {
      "Retail money transfer (hundreds of thousands of agent locations)": "https://www.westernunion.com/us/en/send-money.html",
      "Digital money transfer (app and web)": "https://www.westernunion.com/us/en/send-money.html",
      "USDPT stablecoin (on Solana, anticipated H1 2026)": "https://www.westernunion.com/global/en/digital-assets-stablecoin.html",
      "Digital Asset Network crypto cash off-ramps": "https://ir.westernunion.com/news/archived-press-releases/press-release-details/2025/Western-Union-Announces-USDPT-Stablecoin-on-Solana-and-Digital-Asset-Network/default.aspx",
      "Bill payments and business payouts": "https://www.westernunion.com/us/en/pay-bills.html",
    },
    facts: {
      founded: "1851",
      description:
        "Global cross-border, cross-currency money movement (NYSE: WU) across 200+ countries and territories and 130+ currencies — hundreds of thousands of retail locations plus digital channels; now issuing its own USDPT stablecoin on Solana with a Digital Asset Network for crypto cash off-ramps.",
      products: [
        "Retail money transfer (hundreds of thousands of agent locations)",
        "Digital money transfer (app and web)",
        "USDPT stablecoin (on Solana, anticipated H1 2026)",
        "Digital Asset Network crypto cash off-ramps",
        "Bill payments and business payouts",
      ],
      funding:
        "Publicly listed (NYSE: WU) since 2006; no venture funding — announced its issuer-owned USDPT stablecoin (Oct 2025) to own the economics linked to stablecoins, issued via Anchorage Digital Bank",
      stage: "Announced USDPT on Solana and the Digital Asset Network (Oct 28, 2025), with USDPT anticipated in the first half of 2026 via partner exchanges; the Digital Asset Network targets the last mile of the crypto journey by turning its 200-country retail footprint into cash off-ramps for wallets",
      partners: ["Anchorage Digital", "Solana"],
      tech: [
        "USDPT (US Dollar Payment Token): Western Union's USD stablecoin on Solana, issued by Anchorage Digital Bank NA and 1:1 redeemable, targeted for the first half of 2026 (IR release; Anchorage Digital)",
        "Digital Asset Network (announced Oct 28, 2025) connects crypto wallets to Western Union's global physical retail network for fiat cash-out (IR release)",
        "Stable Card, a stablecoin-funded card, announced alongside USDPT for 2026 (westernunion.com digital assets page)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://www.westernunion.com/",
        },
        {
          label: "Western Union IR — USDPT announcement (Oct 2025)",
          url: "https://ir.westernunion.com/news/archived-press-releases/press-release-details/2025/Western-Union-Announces-USDPT-Stablecoin-on-Solana-and-Digital-Asset-Network/default.aspx",
        },
        {
          label: "Anchorage Digital — USDPT partnership",
          url: "https://www.anchorage.com/press-room/anchorage-digital-western-union-partner-launch-usdpt-federally-regulated-stablecoin-solana",
        },
        {
          label: "Western Union — USDPT digital assets page",
          url: "https://www.westernunion.com/global/en/digital-assets-stablecoin.html",
        },
      ],
      people: [
        { name: "Devin McGranahan", role: "President & CEO", linkedin: "https://www.linkedin.com/in/devinmcgranahan" },
        { name: "Matt Cagwin", role: "Chief Financial Officer", linkedin: "https://www.linkedin.com/in/matt-cagwin-b7a1434" },
      ],
    },
  },
  {
    id: "zepz",
    name: "Zepz",
    categoryId: "remittances",
    profileStatus: "complete",
    partnerLinks: {
      "Farallon Capital": "https://www.faralloncapital.com",
      "LeapFrog": "https://leapfroginvest.com",
      "TCV": "https://www.tcv.com",
      "Accel": "https://www.accel.com",
    },

    productLinks: {
      "WorldRemit digital remittances": "https://www.worldremit.com/",
      "Sendwave remittances (acquired 2021)": "https://www.sendwave.com/",
      "Bank deposit, cash collection, and mobile money payouts": "https://www.worldremit.com/",
      "Mobile airtime top-up": "https://www.worldremit.com/",
    },
    facts: {
      founded: "2010",
      description:
        "London-based digital cross-border payments group (formerly WorldRemit Group) powering two remittance brands — WorldRemit and Sendwave — with 11M+ users across 150 countries, 5,000+ corridors, and 85% of transactions settled in minutes.",
      products: [
        "WorldRemit digital remittances",
        "Sendwave remittances (acquired 2021)",
        "Bank deposit, cash collection, and mobile money payouts",
        "Mobile airtime top-up",
      ],
      funding:
        "Reported $292M primary Series E (Aug 2021) at a $5B valuation — new equity investor Farallon Capital with backing from existing investors LeapFrog, TCV, and Accel",
      stage: "Rebranded from WorldRemit Group to Zepz after acquiring Sendwave (2021); 2020: 4.5M monthly transactions, ~$10B gross send volume, and $338M revenue across its brands; average customer transacts ~4x per month",
      partners: ["Farallon Capital", "LeapFrog", "TCV", "Accel"],
      tech: [
        "Sendwave Wallet (Oct 2025) lets users hold and send USDC on Solana across 100+ countries (Zepz/Sendwave announcements)",
        "Bridge partnership enables Visa-linked stablecoin cards, with Portal supplying the wallet infrastructure (company announcements)",
        "TRM Labs partnership (Mar 2026) adds blockchain intelligence for safer stablecoin remittances (TRM Labs blog)",
      ],
      metrics: [
        "Customers: 9M+ (as of January 2026, FXC Intelligence interview)",
        "Money transferred: $17B in 2025 (as of January 2026, FXC Intelligence interview)",
        "Coverage: 50+ sending markets, 130+ receiving countries, 5,000+ corridors (as of January 2026, FXC Intelligence interview)",
      ],
      links: [
        {
          label: "Website (official)",
          url: "https://zepz.io/",
        },
        {
          label: "Zepz — $292M Series E announcement (Aug 2021)",
          url: "https://www.worldremit.com/en/news/zepz-raises-292-million-in-new-funding",
        },
        {
          label: "TRM Labs — Zepz partnership (Mar 2026)",
          url: "https://www.trmlabs.com/resources/blog/trm-labs-and-zepz-join-forces-to-support-safer-stablecoin-remittances-for-migrant-communities",
        },
        {
          label: "FXC Intelligence — Zepz CEO interview (Jan 2026)",
          url: "https://www.fxcintel.com/research/reports/ct-zepz-interview-2026",
        },
      ],
      people: [
        { name: "Ismail Ahmed", role: "Founder, WorldRemit", linkedin: "https://www.linkedin.com/in/ismailiahmed" },
        { name: "Barrie Morris", role: "Interim CEO", linkedin: "https://www.linkedin.com/in/barrie-morris-48211a16" },
      ],
    },
  },
];
