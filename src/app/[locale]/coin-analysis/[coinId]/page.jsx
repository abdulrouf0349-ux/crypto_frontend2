// app/[locale]/coin-analysis/[coinId]/page.jsx
// ============================================================
// SLUG PAGE — each coin gets its own crawlable URL:
//   /coin-analysis/bitcoin
//   /ur/coin-analysis/ethereum
//   etc.
//
// SEO Improvements Applied:
//  ✅ og:type changed from "article" → "website"
//  ✅ FinancialProduct schema (coin-specific)
//  ✅ CollectionPage isPartOf linking
//  ✅ Optimised title format for dual keyword capture
//  ✅ article:modified_time in <other> meta
//  ✅ Twitter handle guard
//  ✅ 700-word SSR content block per coin
// ============================================================

import Script from "next/script";
import CoinAnalysisPage from "../data";

// ─── Constants ───────────────────────────────────────────────
const SITE_URL      = process.env.NEXT_PUBLIC_SITE_URL  ?? "https://cryptonewstrend.com";
const SITE_NAME     = "CryptoNewsTrend";
// Set the real Twitter handle here — leave empty string to omit the tag
const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "";
const PAGE_PATH     = "/coin-analysis";
const YEAR          = new Date().getFullYear();

const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// ─── Coin metadata ───────────────────────────────────────────
// name      → human-readable display name
// ticker    → symbol used in FinancialProduct schema + title
// about     → one-line description for SSR content intro
const COINS = {
  bitcoin: {
    name: "Bitcoin",
    ticker: "BTC",
    about:
      "Bitcoin is the world's first and largest cryptocurrency by market cap, created in 2009 by the pseudonymous Satoshi Nakamoto as a decentralised peer-to-peer digital currency.",
  },
  ethereum: {
    name: "Ethereum",
    ticker: "ETH",
    about:
      "Ethereum is a programmable blockchain that introduced smart contracts, enabling decentralised applications (dApps), DeFi protocols, and NFT marketplaces.",
  },
  binancecoin: {
    name: "BNB",
    ticker: "BNB",
    about:
      "BNB is the native token of the BNB Chain ecosystem, originally launched by Binance and used for trading fee discounts, on-chain gas, and token launches.",
  },
  solana: {
    name: "Solana",
    ticker: "SOL",
    about:
      "Solana is a high-throughput Layer-1 blockchain known for its Proof-of-History consensus, capable of processing thousands of transactions per second at very low fees.",
  },
  ripple: {
    name: "XRP",
    ticker: "XRP",
    about:
      "XRP is the digital asset native to the XRP Ledger, designed by Ripple Labs to facilitate fast, low-cost cross-border payments between financial institutions.",
  },
  cardano: {
    name: "Cardano",
    ticker: "ADA",
    about:
      "Cardano is a proof-of-stake blockchain platform built on peer-reviewed academic research, focused on scalability, interoperability, and sustainability.",
  },
  dogecoin: {
    name: "Dogecoin",
    ticker: "DOGE",
    about:
      "Dogecoin started as a meme coin in 2013 but has grown into one of the most widely held cryptocurrencies, with a passionate community and high retail trading volume.",
  },
  "avalanche-2": {
    name: "Avalanche",
    ticker: "AVAX",
    about:
      "Avalanche is a fast, low-cost smart-contract blockchain that uses a novel Avalanche consensus protocol and supports custom subnets for enterprise and DeFi use-cases.",
  },
  polkadot: {
    name: "Polkadot",
    ticker: "DOT",
    about:
      "Polkadot is a multi-chain network that allows different blockchains to transfer messages and value in a trust-free fashion via its Relay Chain and parachain architecture.",
  },
  chainlink: {
    name: "Chainlink",
    ticker: "LINK",
    about:
      "Chainlink is the leading decentralised oracle network, providing smart contracts with tamper-proof real-world data including prices, weather, sports results, and more.",
  },
  "matic-network": {
    name: "Polygon",
    ticker: "MATIC",
    about:
      "Polygon (formerly Matic Network) is an Ethereum Layer-2 scaling solution that dramatically reduces transaction fees and confirmation times while maintaining EVM compatibility.",
  },
  "shiba-inu": {
    name: "Shiba Inu",
    ticker: "SHIB",
    about:
      "Shiba Inu is an Ethereum-based meme token that evolved into a broader ecosystem including a DEX (ShibaSwap), Layer-2 chain (Shibarium), and metaverse project.",
  },
  tron: {
    name: "TRON",
    ticker: "TRX",
    about:
      "TRON is a decentralised blockchain platform focused on entertainment and content sharing, processing millions of transactions daily at near-zero fees.",
  },
  uniswap: {
    name: "Uniswap",
    ticker: "UNI",
    about:
      "Uniswap is the largest decentralised exchange (DEX) on Ethereum, using an automated market maker (AMM) model to enable permissionless token swaps.",
  },
  litecoin: {
    name: "Litecoin",
    ticker: "LTC",
    about:
      "Litecoin is one of the oldest altcoins, created in 2011 as a lighter, faster alternative to Bitcoin with a 2.5-minute block time and Scrypt mining algorithm.",
  },
};

// Helper: get full display label e.g. "Bitcoin (BTC)"
const displayName = (coinId) => {
  const c = COINS[coinId];
  if (!c) return coinId.charAt(0).toUpperCase() + coinId.slice(1);
  return `${c.name} (${c.ticker})`;
};

// ─── Static params for ISR pre-render ───────────────────────
export async function generateStaticParams() {
  return Object.keys(COINS).map((coinId) => ({ coinId }));
}

// ─── SSR fetch ───────────────────────────────────────────────
async function getInitialCoinData(coinId = "bitcoin") {
  try {
    const res = await fetch(`${SITE_URL}/api/coin-data?id=${coinId}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ─── hreflang ────────────────────────────────────────────────
const buildHreflang = (locale = "en", coinId = "bitcoin") =>
  Object.fromEntries([
    ...VALID_LOCALES.map((loc) => [
      loc === "zh" ? "zh-Hans" : loc,
      loc === "en"
        ? `${SITE_URL}${PAGE_PATH}/${coinId}`
        : `${SITE_URL}/${loc}${PAGE_PATH}/${coinId}`,
    ]),
    ["x-default", `${SITE_URL}${PAGE_PATH}/${coinId}`],
  ]);

// ─── Dynamic Metadata ────────────────────────────────────────
export async function generateMetadata({ params }) {
  const resolvedParams = (await params) ?? {};
  const locale   = resolvedParams.locale ?? "en";
  const coinId   = resolvedParams.coinId ?? "bitcoin";
  const coin     = COINS[coinId];
  const name     = coin?.name    ?? (coinId.charAt(0).toUpperCase() + coinId.slice(1));
  const ticker   = coin?.ticker  ?? "";
  const now      = new Date().toISOString();

  const canonical =
    locale === "en"
      ? `${SITE_URL}${PAGE_PATH}/${coinId}`
      : `${SITE_URL}/${locale}${PAGE_PATH}/${coinId}`;

  // ✅ FIX: "Name Price Prediction YEAR (TICKER) – …" captures both keyword variants
  const title =
    ticker
      ? `${name} Price Prediction ${YEAR} (${ticker}) – RSI, MACD & AI Analysis`
      : `${name} Price Prediction ${YEAR} – RSI, MACD & AI Analysis`;

  const description = `Get AI-powered ${displayName(coinId)} price prediction for ${YEAR}. Real-time RSI, MACD, Bollinger Bands, support & resistance levels, buy/sell signals and technical analysis updated live.`;

  const twitterMeta = TWITTER_HANDLE
    ? { card: "summary_large_image", site: `@${TWITTER_HANDLE}`, title, description, images: [`${SITE_URL}/og-coin-analysis.png`] }
    : { card: "summary_large_image", title, description, images: [`${SITE_URL}/og-analysis.png`] };

  return {
    title,
    description,
    keywords: [
      `${name} price prediction ${YEAR}`,
      ticker ? `${ticker} price prediction ${YEAR}` : "",
      `${name} technical analysis`,
      `${name} RSI MACD`,
      `${name} buy sell signal`,
      `${name} AI analysis`,
      `crypto coin analysis ${YEAR}`,
      "crypto buy sell signals",
      "crypto market sentiment",
      `best crypto to buy ${YEAR}`,
    ].filter(Boolean),

    alternates: {
      canonical,
      languages: buildHreflang(locale, coinId),
    },

    robots: {
      index:  true,
      follow: true,
      googleBot: {
        index:               true,
        follow:              true,
        "max-image-preview": "large",
        "max-snippet":       -1,
      },
    },

    // ✅ FIX: og:type → "website" (this is a tool page, not an article)
    openGraph: {
      type:        "website",
      url:         canonical,
      siteName:    SITE_NAME,
      title,
      description,
      locale:      locale === "en" ? "en_US" : locale,
      images: [
        {
          url:    `${SITE_URL}/og-analysis.png`,
          width:  1200,
          height: 630,
          alt:    `${displayName(coinId)} Price Prediction ${YEAR} — AI Signals & Technical Analysis`,
        },
      ],
    },

    twitter: twitterMeta,

    // ✅ NEW: article:modified_time signals freshness to Google
    other: {
      "article:modified_time": now,
    },

    authors:   [{ name: SITE_NAME, url: SITE_URL }],
    creator:   SITE_NAME,
    publisher: SITE_NAME,
    category:  "finance",
  };
}

// ─── SSR Content Block ───────────────────────────────────────
// ~700 words of keyword-rich content rendered server-side.
// Hidden visually below the fold but fully crawlable.
// Swap the placeholder paragraphs for real editorial copy.
function CoinSsrContent({ coinId, year }) {
  const coin   = COINS[coinId] ?? { name: coinId, ticker: "", about: "" };
  const name   = coin.name;
  const ticker = coin.ticker;
  const label  = ticker ? `${name} (${ticker})` : name;

  return (
    <section className="coin-seo-content" aria-label={`${label} analysis guide`}>
      <h2>{label} Price Prediction {year} — Complete Technical Analysis</h2>

      <h3>What is {label}?</h3>
      <p>{coin.about}</p>
      <p>
        Understanding {name}'s fundamentals is the first step before reading any technical
        chart. On-chain activity, developer commits, exchange inflows, and macro sentiment
        all combine with price action to give traders the full picture.
      </p>

      <h3>{label} Technical Analysis {year}</h3>
      <p>
        Technical analysis uses historical price data and statistical indicators to forecast
        future price movements. For {name}, the most watched indicators are RSI (Relative
        Strength Index), MACD (Moving Average Convergence Divergence), Bollinger Bands, and
        EMA (Exponential Moving Average) crosses.
      </p>
      <p>
        {SITE_NAME}'s live dashboard refreshes all of these indicators every 60 seconds,
        so traders always have the most up-to-date {ticker || name} signals without manually
        calculating them.
      </p>

      <h3>{label} RSI Analysis</h3>
      <p>
        RSI measures the speed and magnitude of price changes on a scale of 0–100. An RSI
        above 70 indicates {name} may be overbought — a potential sell signal. An RSI below
        30 suggests oversold conditions — a potential buy opportunity. The live RSI widget
        above shows the current reading across multiple timeframes (15m, 1h, 4h, 1D).
      </p>

      <h3>{label} MACD Analysis</h3>
      <p>
        MACD (12, 26, 9) is a trend-following momentum indicator. A bullish signal fires
        when the MACD line crosses above the signal line; a bearish signal fires on a
        cross below. Histogram bars growing in the positive zone confirm bullish momentum
        for {name}, while growing negative bars confirm bearish pressure.
      </p>

      <h3>{label} Support &amp; Resistance Levels</h3>
      <p>
        Support and resistance levels are price zones where buying or selling pressure has
        historically been strong. {SITE_NAME} auto-calculates {name} support and resistance
        using pivot points, Fibonacci retracements, and volume profile — updated with every
        new candle close.
      </p>

      <h3>Should I Buy or Sell {label} Right Now?</h3>
      <p>
        {SITE_NAME}'s AI model aggregates RSI, MACD crossovers, Bollinger Band breakouts,
        order book depth, and on-chain metrics into a single buy / neutral / sell signal
        with a confidence score. See the <strong>Prediction tab</strong> above for the
        current signal. No tool can guarantee profits — always apply your own risk
        management.
      </p>

      <h3>{label} Price Prediction {year}</h3>
      <p>
        Our {year} price prediction for {name} is calculated by combining short-term
        technical signals with longer-term macro cycle analysis (halving cycles for BTC,
        network growth metrics for smart-contract platforms, and liquidity conditions).
        The target range and confidence score update in real time — check the
        <strong> Prediction tab</strong> for the latest figures.
      </p>

      <h3>How Often Is {label} Analysis Updated?</h3>
      <p>
        Price signals and order book data refresh every 60 seconds. Technical indicators
        (RSI, MACD, Bollinger Bands) update on each new candle close for your chosen
        timeframe. AI sentiment is recalculated continuously as new market data arrives.
      </p>
    </section>
  );
}

// ─── Page Component ──────────────────────────────────────────
export default async function CoinSlugPage({ params }) {
  const resolvedParams = (await params) ?? {};
  const locale   = resolvedParams.locale ?? "en";
  const coinId   = resolvedParams.coinId ?? "bitcoin";
  const coin     = COINS[coinId];
  const name     = coin?.name   ?? (coinId.charAt(0).toUpperCase() + coinId.slice(1));
  const ticker   = coin?.ticker ?? "";

  const pageUrl =
    locale === "en"
      ? `${SITE_URL}${PAGE_PATH}/${coinId}`
      : `${SITE_URL}/${locale}${PAGE_PATH}/${coinId}`;

  const collectionUrl =
    locale === "en"
      ? `${SITE_URL}${PAGE_PATH}`
      : `${SITE_URL}/${locale}${PAGE_PATH}`;

  const initialData = await getInitialCoinData(coinId);
  const now         = new Date().toISOString();

  // ── JSON-LD 1: WebSite + SearchAction ──────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type":    "WebSite",
    "@id":      `${SITE_URL}#website`,
    name:       SITE_NAME,
    url:        SITE_URL,
    potentialAction: {
      "@type":       "SearchAction",
      target:        `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // ── JSON-LD 2: Organization ─────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type":    "Organization",
    "@id":      `${SITE_URL}#organization`,
    name:       SITE_NAME,
    url:        SITE_URL,
    logo: {
      "@type": "ImageObject",
      url:     `${SITE_URL}/logo.png`,
      width:   "200",
      height:  "60",
    },
  };

  // ── JSON-LD 3: WebPage ──────────────────────────────────────
  const webPageSchema = {
    "@context":    "https://schema.org",
    "@type":       "WebPage",
    "@id":         pageUrl,
    url:           pageUrl,
    name:          `${displayName(coinId)} Price Prediction ${YEAR} — AI Signals & Technical Analysis | ${SITE_NAME}`,
    description:   `AI-powered ${displayName(coinId)} analysis. Real-time RSI, MACD, Bollinger Bands, support & resistance, and price prediction updated live ${YEAR}.`,
    inLanguage:    locale,
    datePublished: "2024-01-01T00:00:00Z",
    dateModified:  now,
    // ✅ FIX: linked to WebSite AND CollectionPage for topical cluster
    isPartOf: [
      {
        "@type": "WebSite",
        "@id":   `${SITE_URL}#website`,
      },
      {
        "@type": "CollectionPage",
        "@id":   collectionUrl,
        name:    `Top Crypto Coin Analysis ${YEAR}`,
        url:     collectionUrl,
      },
    ],
    about: {
      "@type": "Thing",
      name:    `${displayName(coinId)} Cryptocurrency`,
    },
    publisher: {
      "@type": "Organization",
      "@id":   `${SITE_URL}#organization`,
    },
  };

  // ── JSON-LD 4: BreadcrumbList ───────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Coin Analysis", item: collectionUrl },
      { "@type": "ListItem", position: 3, name: `${displayName(coinId)} Analysis`, item: pageUrl },
    ],
  };

  // ── JSON-LD 5: FAQPage ──────────────────────────────────────
  const faqSchema = {
    "@context":  "https://schema.org",
    "@type":     "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:    `What is ${displayName(coinId)} technical analysis?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:    `${displayName(coinId)} technical analysis uses indicators like RSI, MACD, EMA, and Bollinger Bands to identify price trends and generate buy/sell signals. ${SITE_NAME} provides AI-powered ${name} technical analysis updated in real time for ${YEAR}.`,
        },
      },
      {
        "@type": "Question",
        name:    `What is the ${displayName(coinId)} price prediction for ${YEAR}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:    `${SITE_NAME}'s AI model combines RSI, MACD, volume, and on-chain data to generate ${name} price predictions with a confidence score. Check the live analysis above for the current ${YEAR} target. No prediction is 100% guaranteed — always manage your risk.`,
        },
      },
      {
        "@type": "Question",
        name:    `Should I buy or sell ${displayName(coinId)} right now?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:    `${SITE_NAME} generates live buy/sell signals for ${name} based on RSI, MACD crossovers, Bollinger Band breakouts, and order book pressure — updated every 60 seconds. See the Prediction tab above for the current signal.`,
        },
      },
      {
        "@type": "Question",
        name:    `How often is the ${displayName(coinId)} analysis updated?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:    `${SITE_NAME} updates ${name} analysis in real time — price signals refresh every 60 seconds, technical indicators update on each new candle close, and AI sentiment is recalculated continuously.`,
        },
      },
    ],
  };

  // ── JSON-LD 6: FinancialService ─────────────────────────────
  const financialServiceSchema = {
    "@context":  "https://schema.org",
    "@type":     "FinancialService",
    "@id":       `${SITE_URL}#financialservice`,
    name:        SITE_NAME,
    url:         SITE_URL,
    description: `AI-powered cryptocurrency price analysis, technical indicators, and market signals for Bitcoin, Ethereum, and top altcoins — ${YEAR}.`,
    areaServed:  "Worldwide",
    serviceType: "Cryptocurrency Analysis",
    provider: {
      "@type": "Organization",
      "@id":   `${SITE_URL}#organization`,
    },
  };

  // ── JSON-LD 7: FinancialProduct (coin-specific) ─────────────
  // ✅ NEW: tells Google this page is about a specific financial asset
  const financialProductSchema = ticker
    ? {
        "@context":     "https://schema.org",
        "@type":        "FinancialProduct",
        name:           name,
        alternateName:  ticker,
        tickerSymbol:   ticker,
        url:            pageUrl,
        description:    coin?.about ?? `${name} cryptocurrency live price analysis and prediction.`,
        provider: {
          "@type": "Organization",
          "@id":   `${SITE_URL}#organization`,
        },
      }
    : null;

  return (
    <>
      <Script id="schema-website"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-org"       type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="schema-webpage"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-faq"       type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-financial" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }} />
      {financialProductSchema && (
        <Script id="schema-financial-product" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      )}

      {/*
        CoinAnalysisPage is the SAME component used on the index page.
        UI is 100% unchanged — coinId passed as initialCoinId so the
        component starts on the correct coin without an extra client fetch.
      */}
      <CoinAnalysisPage
        initialData={initialData}
        locale={locale}
        initialCoinId={coinId}
      />

      {/* ✅ NEW: SSR keyword-rich content block — crawlable, below the fold */}
      <CoinSsrContent coinId={coinId} year={YEAR} />
    </>
  );
}