// app/[locale]/coin-analysis/page.jsx
// ============================================================
// SERVER COMPONENT — Full SEO metadata + 7 JSON-LD schemas
// Client UI imported from ./index-client.jsx
// ============================================================

import Script from "next/script";
import CoinAnalysisIndexClient from "./pageClient";

const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const PAGE_PATH = "/coin-analysis";
const YEAR      = new Date().getFullYear();

const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

const COIN_NAMES = {
  bitcoin:         { name: "Bitcoin",   symbol: "BTC",  emoji: "₿"  },
  ethereum:        { name: "Ethereum",  symbol: "ETH",  emoji: "Ξ"  },
  binancecoin:     { name: "BNB",       symbol: "BNB",  emoji: "⬡"  },
  solana:          { name: "Solana",    symbol: "SOL",  emoji: "◎"  },
  ripple:          { name: "XRP",       symbol: "XRP",  emoji: "✕"  },
  cardano:         { name: "Cardano",   symbol: "ADA",  emoji: "₳"  },
  dogecoin:        { name: "Dogecoin",  symbol: "DOGE", emoji: "Ð"  },
  "avalanche-2":   { name: "Avalanche", symbol: "AVAX", emoji: "🔺" },
  polkadot:        { name: "Polkadot",  symbol: "DOT",  emoji: "●"  },
  chainlink:       { name: "Chainlink", symbol: "LINK", emoji: "⬡"  },
  "matic-network": { name: "Polygon",   symbol: "MATIC",emoji: "⬟"  },
  "shiba-inu":     { name: "Shiba Inu", symbol: "SHIB", emoji: "🐕" },
  tron:            { name: "TRON",      symbol: "TRX",  emoji: "◈"  },
  uniswap:         { name: "Uniswap",   symbol: "UNI",  emoji: "🦄" },
  litecoin:        { name: "Litecoin",  symbol: "LTC",  emoji: "Ł"  },
};

// ── Per-locale SEO strings ────────────────────────────────────
const SEO_META = {
  en: {
    title:       `Crypto Coin Analysis ${YEAR} — AI Price Predictions, RSI, MACD & Buy/Sell Signals `,
    description: `Get real-time AI-powered crypto coin analysis for Bitcoin, Ethereum, Solana & 100+ altcoins. Live RSI, MACD, Bollinger Bands, support & resistance, and price predictions updated every 60 seconds — ${YEAR}.`,
    keywords:    `crypto coin analysis ${YEAR}, bitcoin price prediction, ethereum analysis, RSI MACD signals, crypto buy sell signal, AI crypto analysis, best crypto to buy ${YEAR}, crypto technical analysis`,
    ogTitle:     `AI Crypto Coin Analysis ${YEAR} — Live RSI, MACD & Price Predictions`,
    ogDesc:      `Real-time AI-powered analysis for Bitcoin, Ethereum, Solana & top altcoins. RSI, MACD, Bollinger Bands, buy/sell signals — updated live ${YEAR}.`,
  },
  ur: {
    title:       `کرپٹو کوائن تجزیہ ${YEAR} — AI قیمت کی پیش گوئی، RSI، MACD اور خرید/فروخت سگنل `,
    description: `بٹ کوائن، ایتھیریم، سولانا اور 100+ آلٹ کوائنز کے لیے ریئل ٹائم AI کرپٹو تجزیہ حاصل کریں۔ لائیو RSI، MACD، بولنجر بینڈز، اور قیمت کی پیش گوئی — ${YEAR} میں ہر 60 سیکنڈ میں اپڈیٹ۔`,
    keywords:    `کرپٹو تجزیہ ${YEAR}، بٹ کوائن قیمت پیش گوئی، ایتھیریم تجزیہ، RSI MACD سگنل`,
    ogTitle:     `AI کرپٹو تجزیہ ${YEAR} — لائیو RSI، MACD اور قیمت کی پیش گوئی `,
    ogDesc:      `بٹ کوائن، ایتھیریم اور ٹاپ آلٹ کوائنز کے لیے ریئل ٹائم AI تجزیہ — ${YEAR} میں لائیو اپڈیٹ۔`,
  },
  es: {
    title:       `Análisis de Criptomonedas ${YEAR} — Predicciones AI, RSI, MACD y Señales`,
    description: `Análisis AI en tiempo real para Bitcoin, Ethereum, Solana y más de 100 altcoins. RSI, MACD, Bandas Bollinger y predicciones de precios actualizadas cada 60 segundos — ${YEAR}.`,
    keywords:    `análisis criptomonedas ${YEAR}, predicción precio bitcoin, análisis ethereum, señales RSI MACD`,
    ogTitle:     `Análisis AI de Criptomonedas ${YEAR} — RSI, MACD y Predicciones en Vivo`,
    ogDesc:      `Análisis AI en tiempo real para Bitcoin, Ethereum y las principales altcoins — ${YEAR}.`,
  },
  ru: {
    title:       `Анализ Криптовалют ${YEAR} — AI Прогнозы Цен, RSI, MACD и Сигналы`,
    description: `AI-анализ в реальном времени для Bitcoin, Ethereum, Solana и более 100 альткоинов. RSI, MACD, Полосы Боллинджера и прогнозы цен — обновляются каждые 60 секунд ${YEAR}.`,
    keywords:    `анализ криптовалют ${YEAR}, прогноз биткоин, анализ эфириум, сигналы RSI MACD`,
    ogTitle:     `AI Анализ Криптовалют ${YEAR} — RSI, MACD и Прогнозы в Реальном Времени`,
    ogDesc:      `Анализ Bitcoin, Ethereum и топ-альткоинов с AI — обновляется каждые 60 секунд ${YEAR}.`,
  },
  fr: {
    title:       `Analyse Crypto ${YEAR} — Prédictions AI, RSI, MACD et Signaux`,
    description: `Analyse AI en temps réel pour Bitcoin, Ethereum, Solana et plus de 100 altcoins. RSI, MACD, Bandes de Bollinger et prédictions de prix mises à jour toutes les 60 secondes — ${YEAR}.`,
    keywords:    `analyse crypto ${YEAR}, prédiction bitcoin, analyse ethereum, signaux RSI MACD`,
    ogTitle:     `Analyse AI Crypto ${YEAR} — RSI, MACD et Prédictions en Direct`,
    ogDesc:      `Analyse AI en temps réel pour Bitcoin, Ethereum et les principales altcoins — ${YEAR}.`,
  },
  de: {
    title:       `Krypto-Analyse ${YEAR} — AI Preisprognosen, RSI, MACD & Signale`,
    description: `KI-gestützte Krypto-Analyse in Echtzeit für Bitcoin, Ethereum, Solana und über 100 Altcoins. RSI, MACD, Bollinger Bänder und Preisprognosen — alle 60 Sekunden aktualisiert ${YEAR}.`,
    keywords:    `Krypto Analyse ${YEAR}, Bitcoin Preisprognose, Ethereum Analyse, RSI MACD Signale`,
    ogTitle:     `AI Krypto-Analyse ${YEAR} — RSI, MACD und Live-Preisprognosen`,
    ogDesc:      `Echtzeit-KI-Analyse für Bitcoin, Ethereum und Top-Altcoins — live aktualisiert ${YEAR}.`,
  },
  ar: {
    title:       `تحليل العملات المشفرة ${YEAR} — توقعات الأسعار بالذكاء الاصطناعي، RSI، MACD`,
    description: `تحليل العملات المشفرة بالذكاء الاصطناعي في الوقت الفعلي لبيتكوين وإيثيريوم وسولانا وأكثر من 100 عملة. RSI وMACD ونطاقات بولينجر وتوقعات الأسعار — تحديث كل 60 ثانية ${YEAR}.`,
    keywords:    `تحليل العملات المشفرة ${YEAR}، توقع بيتكوين، تحليل إيثيريوم، إشارات RSI MACD`,
    ogTitle:     `تحليل كريبتو بالذكاء الاصطناعي ${YEAR} — RSI وMACD وتوقعات مباشرة`,
    ogDesc:      `تحليل بيتكوين وإيثيريوم وأفضل العملات البديلة بالذكاء الاصطناعي — تحديث مباشر ${YEAR}.`,
  },
  zh: {
    title:       `加密货币分析 ${YEAR} — AI价格预测、RSI、MACD和买卖信号`,
    description: `比特币、以太坊、Solana及100+山寨币的实时AI驱动分析。RSI、MACD、布林带和价格预测——每60秒更新${YEAR}。`,
    keywords:    `加密货币分析 ${YEAR}，比特币价格预测，以太坊分析，RSI MACD信号`,
    ogTitle:     `AI加密货币分析 ${YEAR} — 实时RSI、MACD和价格预测`,
    ogDesc:      `比特币、以太坊和顶级山寨币的实时AI分析 — 实时更新${YEAR}。`,
  },
};

const buildHreflang = (locale = "en") =>
  Object.fromEntries([
    ...VALID_LOCALES.map((loc) => [
      loc === "zh" ? "zh-Hans" : loc,
      loc === "en" ? `${SITE_URL}${PAGE_PATH}` : `${SITE_URL}/${loc}${PAGE_PATH}`,
    ]),
    ["x-default", `${SITE_URL}${PAGE_PATH}`],
  ]);

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale    = VALID_LOCALES.includes(resolvedParams.locale) ? resolvedParams.locale : "en";
  const seo       = SEO_META[locale] ?? SEO_META.en;
  const canonical = locale === "en" ? `${SITE_URL}${PAGE_PATH}` : `${SITE_URL}/${locale}${PAGE_PATH}`;

  return {
    title:       seo.title,
    description: seo.description,
    keywords:    seo.keywords,
    alternates:  { canonical, languages: buildHreflang(locale) },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    openGraph: {
      type: "website", url: canonical, siteName: SITE_NAME,
      title: seo.ogTitle, description: seo.ogDesc,
      locale: locale === "en" ? "en_US" : locale,
      images: [{ url: `${SITE_URL}/og-analysis.png`, width: 1200, height: 630, alt: seo.ogTitle }],
    },
    twitter: {
      card: "summary_large_image", title: seo.ogTitle, description: seo.ogDesc,
      images: [`${SITE_URL}/og-analysis.png`],
      site: `@cryptonews90841`, creator: `@cryptonews90841`,
    },
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME, publisher: SITE_NAME, category: "finance",
  };
}

export default async function CoinAnalysisIndexPage({ params }) {
  const resolvedParams = await params;
  const locale    = VALID_LOCALES.includes(resolvedParams.locale) ? resolvedParams.locale : "en";
  const seo       = SEO_META[locale] ?? SEO_META.en;
  const pageUrl   = locale === "en" ? `${SITE_URL}${PAGE_PATH}` : `${SITE_URL}/${locale}${PAGE_PATH}`;
  const now       = new Date().toISOString();
const localizedBase =
  locale === "en"
    ? `${SITE_URL}/coin-analysis`
    : `${SITE_URL}/${locale}/coin-analysis`;
  // JSON-LD 1: WebSite
  const websiteSchema = {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE_URL}#website`,
    name: SITE_NAME, url: SITE_URL, inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  // JSON-LD 2: Organization
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization", "@id": `${SITE_URL}#organization`,
    name: SITE_NAME, url: SITE_URL,
    logo: { "@type": "ImageObject", "@id": `${SITE_URL}#logo`, url: `${SITE_URL}/logo.png`, width: "200", height: "60", caption: SITE_NAME },
    sameAs: [`https://twitter.com/${SITE_NAME.toLowerCase()}`, `https://t.me/${SITE_NAME.toLowerCase()}`],
  };

  // JSON-LD 3: CollectionPage
  const collectionPageSchema = {
    "@context": "https://schema.org", "@type": "CollectionPage", "@id": pageUrl,
    url: pageUrl, name: seo.ogTitle, description: seo.ogDesc,
    inLanguage: locale, datePublished: "2024-01-01T00:00:00Z", dateModified: now,
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}#website` },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}#organization` },
    about: { "@type": "Thing", name: "Cryptocurrency Price Analysis" },
    keywords: seo.keywords,
  };

  // JSON-LD 4: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Coin Analysis", item: pageUrl },
    ],
  };

  // JSON-LD 5: ItemList
  const itemListSchema = {
    "@context": "https://schema.org", "@type": "ItemList", "@id": `${pageUrl}#itemlist`,
    name: `Top Crypto Coin Analysis ${YEAR}`,
    description: `AI-powered analysis for ${Object.keys(COIN_NAMES).length} cryptocurrencies`,
    url: pageUrl,
    numberOfItems: Object.keys(COIN_NAMES).length,
    itemListElement: Object.entries(COIN_NAMES).map(([id, { name, symbol }], idx) => ({
      "@type": "ListItem", position: idx + 1,
      name: `${name} (${symbol}) Price Prediction & Analysis ${YEAR}`,
      url: `${localizedBase}/${id}`,
      item: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}/${id}`, url: `${localizedBase}/${id}` },
    })),
  };

  // JSON-LD 6: FAQPage
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question", name: `What is the best crypto coin analysis tool in ${YEAR}?`,
        acceptedAnswer: { "@type": "Answer", text: `${SITE_NAME} provides AI-powered crypto coin analysis for Bitcoin, Ethereum, Solana, and 100+ altcoins. It includes real-time RSI, MACD, Bollinger Bands, EMA, support & resistance levels, and buy/sell signals updated every 60 seconds.` },
      },
      {
        "@type": "Question", name: "What is Bitcoin technical analysis?",
        acceptedAnswer: { "@type": "Answer", text: `Bitcoin technical analysis uses RSI, MACD, EMA, and Bollinger Bands to identify BTC price trends and generate buy/sell signals. ${SITE_NAME} provides AI-powered Bitcoin analysis updated in real time for ${YEAR}.` },
      },
      {
        "@type": "Question", name: "How accurate is Ethereum price prediction?",
        acceptedAnswer: { "@type": "Answer", text: `${SITE_NAME}'s AI model combines RSI, MACD, volume, and on-chain data to generate ETH predictions with a confidence score. No prediction is 100% guaranteed — always manage your risk.` },
      },
      {
        "@type": "Question", name: "What are the best crypto buy/sell signals today?",
        acceptedAnswer: { "@type": "Answer", text: `${SITE_NAME} tracks AI buy/sell signals for Bitcoin, Ethereum, Solana, BNB, XRP, and 100+ altcoins from RSI, MACD crossovers, Bollinger Band breakouts, and order book pressure — updated every 60 seconds.` },
      },
      {
        "@type": "Question", name: "How often is the crypto coin analysis updated?",
        acceptedAnswer: { "@type": "Answer", text: `${SITE_NAME} updates coin analysis in real time — price signals refresh every 60 seconds, technical indicators update on each candle close, and AI sentiment is recalculated continuously.` },
      },
      {
        "@type": "Question", name: "Which cryptocurrencies can I analyze?",
        acceptedAnswer: { "@type": "Answer", text: `${SITE_NAME} supports Bitcoin (BTC), Ethereum (ETH), Solana (SOL), BNB, XRP, Cardano (ADA), Dogecoin (DOGE), Avalanche (AVAX), Polkadot (DOT), Chainlink (LINK), Polygon (MATIC), Shiba Inu (SHIB), TRON (TRX), Uniswap (UNI), Litecoin (LTC), and more.` },
      },
    ],
  };
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": pageUrl + "#webpage",
  url: pageUrl,
  name: seo.title,
  description: seo.description,
  inLanguage: locale,
  isPartOf: {
    "@id": `${SITE_URL}#website`
  }
};
  // JSON-LD 7: FinancialService
  const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CryptoNewsTrend Coin Analysis",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web"
};

  return (
    <>
      <Script id="schema-website"    type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema)          }} />
      <Script id="schema-org"        type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema)     }} />
      <Script id="schema-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema)   }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema)       }} />
      <Script id="schema-itemlist"   type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema)         }} />
      <Script id="schema-faq"        type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema)              }} />
      <Script id="schema-softwareSchema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <Script id="schema-webpageSchema"  type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />

      <CoinAnalysisIndexClient locale={locale} />
    </>
  );
}