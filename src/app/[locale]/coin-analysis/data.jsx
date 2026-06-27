"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

// ─── Popular coins list ───────────────────────────────────────────────────────
const POPULAR_COINS = [
  { id: "bitcoin",       symbol: "BTC",  name: "Bitcoin"   },
  { id: "ethereum",      symbol: "ETH",  name: "Ethereum"  },
  { id: "binancecoin",   symbol: "BNB",  name: "BNB"       },
  { id: "solana",        symbol: "SOL",  name: "Solana"    },
  { id: "ripple",        symbol: "XRP",  name: "XRP"       },
  { id: "cardano",       symbol: "ADA",  name: "Cardano"   },
  { id: "dogecoin",      symbol: "DOGE", name: "Dogecoin"  },
  { id: "avalanche-2",   symbol: "AVAX", name: "Avalanche" },
  { id: "polkadot",      symbol: "DOT",  name: "Polkadot"  },
  { id: "chainlink",     symbol: "LINK", name: "Chainlink" },
  { id: "matic-network", symbol: "MATIC",name: "Polygon"   },
  { id: "shiba-inu",     symbol: "SHIB", name: "Shiba Inu" },
  { id: "tron",          symbol: "TRX",  name: "TRON"      },
  { id: "uniswap",       symbol: "UNI",  name: "Uniswap"   },
  { id: "litecoin",      symbol: "LTC",  name: "Litecoin"  },
];

// ─── Localized prediction / indicator text ───────────────────────────────────
const LOCALIZED_PREDICTION = {
  en: {
    directionUp:       "BULLISH — PRICE LIKELY TO RISE",
    directionDown:     "BEARISH — PRICE LIKELY TO FALL",
    directionSideways: "NEUTRAL — SIDEWAYS",
    rsiExplain:   "RSI below 30 = oversold (buy signal) | RSI above 70 = overbought (sell signal)",
    macdExplain:  "A MACD/Signal line crossover marks a trend change. MACD above Signal = bullish momentum.",
    emaExplain:   "Price above the EMA = uptrend. EMA20 above EMA50 = golden cross (bullish).",
    bbExplain:    "Price touching the lower band = potential buy. Touching the upper band = potential sell.",
    stochExplain: "Below 20 = oversold, above 80 = overbought.",
    disclaimer:   "⚠️ This analysis is for educational purposes only. It is not financial advice. Do your own research and manage your risk before investing.",
  },
  ur: {
    directionUp:       "بُل رجحان — قیمت بڑھنے کا امکان",
    directionDown:     "بیئر رجحان — قیمت گرنے کا امکان",
    directionSideways: "غیر جانبدار — سائیڈ ویز رجحان",
    rsiExplain:   "RSI 30 سے کم = اوور سولڈ (خریداری کا اشارہ) | RSI 70 سے زیادہ = اوور بوٹ (فروخت کا اشارہ)",
    macdExplain:  "MACD لائن کا سگنل لائن سے کراس ہونا رجحان میں تبدیلی کی نشاندہی کرتا ہے۔ MACD سگنل سے اوپر ہو تو تیزی کا رجحان ہوتا ہے۔",
    emaExplain:   "قیمت کا EMA سے اوپر ہونا تیزی کے رجحان کی نشاندہی کرتا ہے۔ EMA20 کا EMA50 سے اوپر جانا گولڈن کراس (تیزی کا اشارہ) کہلاتا ہے۔",
    bbExplain:    "قیمت کا لوئر بینڈ کو چھونا ممکنہ خریداری کا اشارہ ہے، جبکہ اپر بینڈ کو چھونا ممکنہ فروخت کا اشارہ ہے۔",
    stochExplain: "20 سے کم اوور سولڈ، اور 80 سے زیادہ اوور بوٹ سمجھا جاتا ہے۔",
    disclaimer:   "⚠️ یہ تجزیہ صرف تعلیمی مقاصد کے لیے ہے۔ یہ مالیاتی مشورہ نہیں ہے۔ سرمایہ کاری سے پہلے اپنی تحقیق کریں اور رسک کا انتظام خود کریں۔",
  },
  es: {
    directionUp:       "ALCISTA — PROBABLE SUBIDA DE PRECIO",
    directionDown:     "BAJISTA — PROBABLE CAÍDA DE PRECIO",
    directionSideways: "NEUTRAL — LATERAL",
    rsiExplain:   "RSI por debajo de 30 = sobreventa (señal de compra) | RSI por encima de 70 = sobrecompra (señal de venta)",
    macdExplain:  "Un cruce entre la línea MACD y la línea de señal indica un cambio de tendencia. MACD por encima de la señal = impulso alcista.",
    emaExplain:   "Precio por encima de la EMA = tendencia alcista. EMA20 por encima de EMA50 = cruce dorado (alcista).",
    bbExplain:    "El precio tocando la banda inferior sugiere una posible compra. Tocando la banda superior sugiere una posible venta.",
    stochExplain: "Por debajo de 20 = sobreventa, por encima de 80 = sobrecompra.",
    disclaimer:   "⚠️ Este análisis es solo para fines educativos. No constituye asesoramiento financiero. Investigue por su cuenta y gestione su riesgo antes de invertir.",
  },
  ru: {
    directionUp:       "БЫЧИЙ ТРЕНД — ВЕРОЯТЕН РОСТ ЦЕНЫ",
    directionDown:     "МЕДВЕЖИЙ ТРЕНД — ВЕРОЯТНО ПАДЕНИЕ ЦЕНЫ",
    directionSideways: "НЕЙТРАЛЬНО — БОКОВОЕ ДВИЖЕНИЕ",
    rsiExplain:   "RSI ниже 30 = перепроданность (сигнал к покупке) | RSI выше 70 = перекупленность (сигнал к продаже)",
    macdExplain:  "Пересечение линии MACD и сигнальной линии означает смену тренда. MACD выше сигнальной линии = бычий импульс.",
    emaExplain:   "Цена выше EMA = восходящий тренд. EMA20 выше EMA50 = золотой крест (бычий сигнал).",
    bbExplain:    "Касание ценой нижней полосы может говорить о возможной покупке. Касание верхней полосы — о возможной продаже.",
    stochExplain: "Ниже 20 — перепроданность, выше 80 — перекупленность.",
    disclaimer:   "⚠️ Этот анализ предназначен только для образовательных целей. Это не является финансовой консультацией. Перед инвестированием проведите собственное исследование и оцените риски.",
  },
  fr: {
    directionUp:       "HAUSSIER — HAUSSE DE PRIX PROBABLE",
    directionDown:     "BAISSIER — BAISSE DE PRIX PROBABLE",
    directionSideways: "NEUTRE — LATÉRAL",
    rsiExplain:   "RSI inférieur à 30 = survente (signal d'achat) | RSI supérieur à 70 = surachat (signal de vente)",
    macdExplain:  "Un croisement entre la ligne MACD et la ligne de signal indique un changement de tendance. MACD au-dessus du signal = momentum haussier.",
    emaExplain:   "Prix au-dessus de l'EMA = tendance haussière. EMA20 au-dessus de l'EMA50 = croisement doré (haussier).",
    bbExplain:    "Le prix touchant la bande inférieure suggère un achat potentiel. Toucher la bande supérieure suggère une vente potentielle.",
    stochExplain: "Inférieur à 20 = survente, supérieur à 80 = surachat.",
    disclaimer:   "⚠️ Cette analyse est fournie à titre éducatif uniquement. Il ne s'agit pas d'un conseil financier. Faites vos propres recherches et gérez votre risque avant d'investir.",
  },
  de: {
    directionUp:       "BULLISCH — PREISANSTIEG WAHRSCHEINLICH",
    directionDown:     "BÄRISCH — PREISRÜCKGANG WAHRSCHEINLICH",
    directionSideways: "NEUTRAL — SEITWÄRTS",
    rsiExplain:   "RSI unter 30 = überverkauft (Kaufsignal) | RSI über 70 = überkauft (Verkaufssignal)",
    macdExplain:  "Eine Überschneidung von MACD- und Signallinie markiert einen Trendwechsel. MACD über der Signallinie = bullisches Momentum.",
    emaExplain:   "Preis über dem EMA = Aufwärtstrend. EMA20 über EMA50 = Golden Cross (bullisch).",
    bbExplain:    "Berührt der Preis das untere Band, deutet das auf eine mögliche Kaufgelegenheit hin. Das obere Band deutet auf eine mögliche Verkaufsgelegenheit hin.",
    stochExplain: "Unter 20 = überverkauft, über 80 = überkauft.",
    disclaimer:   "⚠️ Diese Analyse dient ausschließlich Bildungszwecken. Es handelt sich nicht um eine Finanzberatung. Führen Sie vor einer Investition eigene Recherchen durch und steuern Sie Ihr Risiko.",
  },
  ar: {
    directionUp:       "اتجاه صعودي — احتمال ارتفاع السعر",
    directionDown:     "اتجاه نزولي — احتمال انخفاض السعر",
    directionSideways: "محايد — حركة جانبية",
    rsiExplain:   "مؤشر RSI أقل من 30 = تشبع بيعي (إشارة شراء) | أعلى من 70 = تشبع شرائي (إشارة بيع)",
    macdExplain:  "تقاطع خط MACD مع خط الإشارة يدل على تغيّر الاتجاه. MACD أعلى من خط الإشارة يعني زخمًا صعوديًا.",
    emaExplain:   "السعر أعلى من المتوسط المتحرك EMA يعني اتجاهًا صعوديًا. تجاوز EMA20 لـ EMA50 يُعرف بالتقاطع الذهبي (إشارة صعودية).",
    bbExplain:    "لمس السعر للنطاق السفلي قد يشير إلى فرصة شراء محتملة، بينما لمسه للنطاق العلوي قد يشير إلى فرصة بيع محتملة.",
    stochExplain: "أقل من 20 يعني تشبعًا بيعيًا، وأعلى من 80 يعني تشبعًا شرائيًا.",
    disclaimer:   "⚠️ هذا التحليل لأغراض تعليمية فقط، وليس استشارة مالية. قم بإجراء بحثك الخاص وإدارة المخاطر بعناية قبل الاستثمار.",
  },
  zh: {
    directionUp:       "看涨 — 价格可能上涨",
    directionDown:     "看跌 — 价格可能下跌",
    directionSideways: "中性 — 横盘震荡",
    rsiExplain:   "RSI 低于 30 表示超卖（买入信号）｜RSI 高于 70 表示超买（卖出信号）",
    macdExplain:  "MACD 线与信号线交叉代表趋势转变。MACD 高于信号线表示看涨动能。",
    emaExplain:   "价格高于 EMA 表示上涨趋势。EMA20 上穿 EMA50 称为黄金交叉（看涨信号）。",
    bbExplain:    "价格触及下轨可能是潜在买入信号，触及上轨可能是潜在卖出信号。",
    stochExplain: "低于 20 为超卖，高于 80 为超买。",
    disclaimer:   "⚠️ 本分析仅供教育参考，不构成财务建议。投资前请自行研究并妥善管理风险。",
  },
};

// ─── Utility ──────────────────────────────────────────────────────────────────
const fmt = (n, d = 2) =>
  n?.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }) ?? "—";
const fmtUSD = (n) =>
  n >= 1_000_000_000
    ? `$${(n / 1_000_000_000).toFixed(2)}B`
    : n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${fmt(n)}`;

// ─── Main Component ───────────────────────────────────────────────────────────
// NEW PROP: initialCoinId — slug page passes the coinId from the URL segment
// so the component starts on the correct coin without waiting for a client fetch.
// Falls back to "bitcoin" for backward-compatibility with the index page.
export default function CoinAnalysisPage({
  initialData    = null,
  locale         = "en",
  initialCoinId  = "bitcoin",
}) {
  const router   = useRouter();
  const pathname = usePathname();

  const [query,     setQuery]     = useState("");
  const [coinId,    setCoinId]    = useState(initialCoinId);
  const [data,      setData]      = useState(initialData);
  const [loading,   setLoading]   = useState(!initialData);
  const [error,     setError]     = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // Track whether we've consumed the server-provided initialData.
  // Same logic as before — prevents redundant fetch on first render.
  const usedInitialData = useRef(false);

  // ── Derive the locale prefix so coin-button clicks navigate to slug URLs ──
  // pathname looks like "/coin-analysis/bitcoin" or "/ur/coin-analysis/bitcoin"
  // We need to know the locale segment to build correct hrefs.
  const localePrefix = locale === "en" ? "" : `/${locale}`;

  const analyze = useCallback(async (id) => {
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await fetch(`/api/coin-data?id=${id}`);
      if (!res.ok) throw new Error((await res.json()).error || "Failed");
      setData(await res.json());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Analysis failed");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!usedInitialData.current && initialData) {
      usedInitialData.current = true;
      return;
    }
    analyze(coinId);
  }, [coinId, analyze, initialData]);

  // ── When user picks a coin, navigate to its slug URL ─────────────────────
  // This updates the browser URL (good for SEO / shareability) AND keeps the
  // UI reactive — Next.js will push to the new route, which SSR-renders the
  // slug page with fresh initialData, so the component remounts cleanly.
  const handleCoinSelect = (id) => {
    router.push(`${localePrefix}/coin-analysis/${id}`);
    // Also update local state immediately for a snappy feel while navigating.
    setCoinId(id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const found = POPULAR_COINS.find(
      (c) =>
        c.symbol.toLowerCase() === query.toLowerCase() ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.id.toLowerCase() === query.toLowerCase()
    );
    const targetId = found ? found.id : query.trim().toLowerCase();
    if (targetId) {
      setQuery("");
      handleCoinSelect(targetId);
    }
  };

  return (
    <div className="coin-app-app">
      {/* Header */}
      <header className="coin-app-header">
        <div className="coin-app-header-inner">
          <div className="coin-app-logo">
            <span className="coin-app-logo-icon">◈</span>
            <span className="coin-app-logo-text">CryptoOracle</span>
            <span className="coin-app-logo-badge">AI Analysis</span>
          </div>
          <form onSubmit={handleSearch} className="coin-app-search-form">
            <input
              className="coin-app-search-input"
              placeholder="Search coin (BTC, ETH, SOL…)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="coin-app-search-btn" type="submit">Analyze →</button>
          </form>
        </div>
      </header>

      {/* Quick select — now navigates to slug URLs */}
      <nav className="coin-app-quick-coins" aria-label="Popular coins">
        {POPULAR_COINS.slice(0, 8).map((c) => (
          <button
            key={c.id}
            className={`coin-app-quick-btn ${coinId === c.id ? "active" : ""}`}
            onClick={() => handleCoinSelect(c.id)}
            aria-label={`Analyze ${c.name}`}
          >
            {c.symbol}
          </button>
        ))}
      </nav>

      {/* SEO Intro paragraph — visible, crawlable */}
      <div className="coin-app-seo-intro">
        <p>
          Get real-time AI-powered crypto coin analysis including RSI, MACD, Bollinger Bands,
          support &amp; resistance levels, and price predictions for Bitcoin, Ethereum, Solana,
          and 100+ altcoins — updated live in {new Date().getFullYear()}.
        </p>
      </div>

      {/* Main */}
      <main className="coin-app-main" id="main-content">
        {loading && <LoadingScreen />}
        {error   && <ErrorBox msg={error} onRetry={() => analyze(coinId)} />}
        {data && !loading && (
          <>
            <CoinHero data={data} />
            {/* Tabs */}
            <div className="coin-app-tabs" role="tablist" aria-label="Analysis sections">
              {["overview", "technical", "prediction", "history"].map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={activeTab === t}
                  className={`coin-app-tab-btn ${activeTab === t ? "active" : ""}`}
                  onClick={() => setActiveTab(t)}
                >
                  {t === "overview"   ? "📊 Overview"
                 : t === "technical"  ? "📈 Technical"
                 : t === "prediction" ? "🔮 Prediction"
                 :                      "📅 7-Day History"}
                </button>
              ))}
            </div>

            {activeTab === "overview"   && <OverviewTab   data={data} />}
            {activeTab === "technical"  && <TechnicalTab  data={data} locale={locale} />}
            {activeTab === "prediction" && <PredictionTab data={data} locale={locale} />}
            {activeTab === "history"    && <HistoryTab    data={data} />}
          </>
        )}
      </main>

      <style>{STYLES}</style>
    </div>
  );
}

// ─── Sub-components (100% unchanged from original) ───────────────────────────

function LoadingScreen() {
  const msgs = ["Fetching live prices…", "Calculating RSI & MACD…", "Running AI prediction…", "Building analysis…"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % msgs.length), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="coin-app-loading" role="status" aria-live="polite">
      <div className="coin-app-spinner" aria-hidden="true" />
      <p className="coin-app-loading-msg">{msgs[idx]}</p>
    </div>
  );
}

function ErrorBox({ msg, onRetry }) {
  return (
    <div className="coin-app-error-box" role="alert">
      <span>⚠️ {msg}</span>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

function CoinHero({ data }) {
  const { coin, prediction } = data;
  const dir = prediction.direction;
  return (
    <section className="coin-app-hero" aria-label={`${coin.name} price analysis`}>
      <div className="coin-app-hero-left">
        <Image
          src={coin.image}
          alt={`${coin.name} price prediction analysis chart`}
          width={56}
          height={56}
          className="coin-app-coin-img"
          priority
        />
        <div>
          <h1 className="coin-app-coin-name">
            {coin.name} Price Prediction &amp; Analysis
          </h1>
          <span className="coin-app-coin-symbol">{coin.symbol.toUpperCase()} / USD</span>
        </div>
      </div>
      <div className="coin-app-hero-center">
        <div className="coin-app-price-big">${fmt(coin.current_price, coin.current_price < 1 ? 6 : 2)}</div>
        <div className={`coin-app-change-badge ${coin.price_change_percentage_24h >= 0 ? "pos" : "neg"}`}>
          {coin.price_change_percentage_24h >= 0 ? "▲" : "▼"} {Math.abs(coin.price_change_percentage_24h).toFixed(2)}% (24h)
        </div>
      </div>
      <div className="coin-app-hero-right">
        <div className={`coin-app-signal-box ${dir === "UP" ? "bull" : dir === "DOWN" ? "bear" : "neutral"}`}>
          <div className="coin-app-signal-icon" aria-hidden="true">{dir === "UP" ? "🚀" : dir === "DOWN" ? "📉" : "➡️"}</div>
          <div className="coin-app-signal-label">{dir === "UP" ? "BULLISH" : dir === "DOWN" ? "BEARISH" : "NEUTRAL"}</div>
          <div className="coin-app-signal-conf">{prediction.confidence}% Confidence</div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, sub, color }) {
  return (
    <div className="coin-app-stat-card" style={color ? { borderTop: `3px solid ${color}` } : {}}>
      <div className="coin-app-stat-label">{label}</div>
      <div className="coin-app-stat-value">{value}</div>
      {sub && <div className="coin-app-stat-sub">{sub}</div>}
    </div>
  );
}

function OverviewTab({ data }) {
  const { coin, orderBook, support, resistance, yesterdayPrice, weekAgoPrice } = data;
  const priceVsYesterday = ((coin.current_price - yesterdayPrice) / yesterdayPrice) * 100;
  const priceVsWeek      = ((coin.current_price - weekAgoPrice)   / weekAgoPrice)   * 100;

  return (
    <div className="coin-app-tab-content">
      <section className="coin-app-section" aria-labelledby="price-context-heading">
        <h2 className="coin-app-section-title" id="price-context-heading">💰 Price Context</h2>
        <div className="coin-app-grid-4">
          <StatCard label="Current Price"     value={`$${fmt(coin.current_price, coin.current_price < 1 ? 6 : 2)}`} color="#00d4ff" />
          <StatCard label="Yesterday's Price" value={`$${fmt(yesterdayPrice, yesterdayPrice < 1 ? 6 : 2)}`} sub={`${priceVsYesterday >= 0 ? "▲" : "▼"} ${Math.abs(priceVsYesterday).toFixed(2)}% change`} color={priceVsYesterday >= 0 ? "#00ff88" : "#ff4466"} />
          <StatCard label="7 Days Ago"        value={`$${fmt(weekAgoPrice, weekAgoPrice < 1 ? 6 : 2)}`}     sub={`${priceVsWeek >= 0 ? "▲" : "▼"} ${Math.abs(priceVsWeek).toFixed(2)}% change`}         color={priceVsWeek >= 0 ? "#00ff88" : "#ff4466"} />
          <StatCard label="24h Range"         value={`$${fmt(coin.low_24h)} – $${fmt(coin.high_24h)}`}     color="#ffaa00" />
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="market-data-heading">
        <h2 className="coin-app-section-title" id="market-data-heading">📊 Market Data</h2>
        <div className="coin-app-grid-4">
          <StatCard label="Market Cap"         value={fmtUSD(coin.market_cap)} />
          <StatCard label="24h Volume"         value={fmtUSD(coin.total_volume)} />
          <StatCard label="Circulating Supply" value={`${(coin.circulating_supply / 1e6).toFixed(2)}M`} />
          <StatCard label="7d Change"          value={`${coin.price_change_percentage_7d_in_currency >= 0 ? "+" : ""}${coin.price_change_percentage_7d_in_currency?.toFixed(2) ?? "—"}%`} color={coin.price_change_percentage_7d_in_currency >= 0 ? "#00ff88" : "#ff4466"} />
          <StatCard label="All-Time High"      value={`$${fmt(coin.ath)}`}                                 sub={`${(((coin.current_price - coin.ath) / coin.ath) * 100).toFixed(1)}% from ATH`} />
          <StatCard label="All-Time Low"       value={`$${fmt(coin.atl, coin.atl < 1 ? 6 : 2)}`}          sub={`${(((coin.current_price - coin.atl) / coin.atl) * 100).toFixed(0)}% from ATL`} />
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="sentiment-heading">
        <h2 className="coin-app-section-title" id="sentiment-heading">⚖️ Market Sentiment (Buy vs Sell Pressure)</h2>
        <div className="coin-app-pressure-bar-wrap">
          <div className="coin-app-pressure-labels">
            <span className="coin-app-buy-label">🟢 Buyers {orderBook.buyPressure}%</span>
            <span className="coin-app-sell-label">Sellers {orderBook.sellPressure}% 🔴</span>
          </div>
          <div className="coin-app-pressure-bar" role="meter" aria-valuenow={orderBook.buyPressure} aria-valuemin={0} aria-valuemax={100} aria-label="Buy pressure">
            <div className="coin-app-buy-fill" style={{ width: `${orderBook.buyPressure}%` }} />
          </div>
          <p className="coin-app-pressure-verdict">{orderBook.trend}</p>
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="sr-heading">
        <h2 className="coin-app-section-title" id="sr-heading">🎯 Support &amp; Resistance Levels</h2>
        <div className="coin-app-sr-grid">
          <div className="coin-app-sr-col">
            <h3 className="coin-app-sr-head coin-app-support-head">🟢 Support Levels</h3>
            {support.map((s, i) => (
              <div key={i} className="coin-app-sr-level coin-app-support">
                <span>S{i + 1}</span>
                <span>${fmt(s, s < 1 ? 6 : 2)}</span>
                <span className="coin-app-sr-pct">{(((s - data.coin.current_price) / data.coin.current_price) * 100).toFixed(2)}%</span>
              </div>
            ))}
          </div>
          <div className="coin-app-sr-col">
            <h3 className="coin-app-sr-head coin-app-resist-head">🔴 Resistance Levels</h3>
            {resistance.map((r, i) => (
              <div key={i} className="coin-app-sr-level coin-app-resist">
                <span>R{i + 1}</span>
                <span>${fmt(r, r < 1 ? 6 : 2)}</span>
                <span className="coin-app-sr-pct">+{(((r - data.coin.current_price) / data.coin.current_price) * 100).toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function GaugeBar({ label, value, min = 0, max = 100, low = 30, high = 70 }) {
  if (value === null) return (
    <div className="coin-app-gauge-wrap">
      <div className="coin-app-gauge-label">{label}</div>
      <div className="coin-app-gauge-na">N/A</div>
    </div>
  );
  const pct   = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const color = value < low ? "#ff4466" : value > high ? "#00ff88" : "#ffaa00";
  return (
    <div className="coin-app-gauge-wrap">
      <div className="coin-app-gauge-header">
        <span className="coin-app-gauge-label">{label}</span>
        <span className="coin-app-gauge-value" style={{ color }}>{value.toFixed(2)}</span>
      </div>
      <div className="coin-app-gauge-track" role="meter" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} aria-label={label}>
        <div className="coin-app-gauge-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="coin-app-gauge-tags">
        <span>{min}</span>
        <span style={{ color: "#ff4466" }}>Oversold {low}</span>
        <span style={{ color: "#00ff88" }}>Overbought {high}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function TechnicalTab({ data, locale = "en" }) {
  const t = LOCALIZED_PREDICTION[locale] || LOCALIZED_PREDICTION.en;
  const { technical, coin } = data;
  const rsiStatus  = technical.rsi === null ? "N/A" : technical.rsi < 30 ? "Oversold 🟢" : technical.rsi > 70 ? "Overbought 🔴" : "Neutral ⚪";
  const macdStatus = technical.macd !== null && technical.macdSignal !== null ? (technical.macd > technical.macdSignal ? "Bullish Crossover 🟢" : "Bearish Crossover 🔴") : "N/A";
  const emaStatus  = technical.ema20 !== null && technical.ema50 !== null ? (technical.ema20 > technical.ema50 ? "Bullish (EMA20 > EMA50) 🟢" : "Bearish (EMA20 < EMA50) 🔴") : "N/A";
  const bbStatus   = technical.bbUpper !== null && technical.bbLower !== null ? (coin.current_price > technical.bbUpper ? "Above Upper Band 🔴" : coin.current_price < technical.bbLower ? "Below Lower Band 🟢" : "Inside Bands ⚪") : "N/A";

  return (
    <div className="coin-app-tab-content">
      <section className="coin-app-section" aria-labelledby="rsi-heading">
        <h2 className="coin-app-section-title" id="rsi-heading">📉 RSI — Relative Strength Index</h2>
        <GaugeBar label="RSI (14)" value={technical.rsi} min={0} max={100} low={30} high={70} />
        <div className="coin-app-indicator-verdict">Status: <strong>{rsiStatus}</strong></div>
        <p className="coin-app-indicator-explain">{t.rsiExplain}</p>
      </section>

      <section className="coin-app-section" aria-labelledby="macd-heading">
        <h2 className="coin-app-section-title" id="macd-heading">📊 MACD</h2>
        <div className="coin-app-grid-3">
          <StatCard label="MACD Line"  value={technical.macd       !== null ? technical.macd.toFixed(4)       : "N/A"} color="#00d4ff" />
          <StatCard label="Signal Line" value={technical.macdSignal !== null ? technical.macdSignal.toFixed(4) : "N/A"} color="#ffaa00" />
          <StatCard label="Histogram"  value={technical.macd !== null && technical.macdSignal !== null ? (technical.macd - technical.macdSignal).toFixed(4) : "N/A"} color={technical.macd !== null && technical.macdSignal !== null && technical.macd > technical.macdSignal ? "#00ff88" : "#ff4466"} />
        </div>
        <div className="coin-app-indicator-verdict">Status: <strong>{macdStatus}</strong></div>
        <p className="coin-app-indicator-explain">{t.macdExplain}</p>
      </section>

      <section className="coin-app-section" aria-labelledby="ema-heading">
        <h2 className="coin-app-section-title" id="ema-heading">📈 Moving Averages (EMA)</h2>
        <div className="coin-app-grid-3">
          <StatCard label="EMA 20"            value={technical.ema20 !== null ? `$${fmt(technical.ema20, technical.ema20 < 1 ? 6 : 2)}` : "N/A"} color="#00ff88" />
          <StatCard label="EMA 50"            value={technical.ema50 !== null ? `$${fmt(technical.ema50, technical.ema50 < 1 ? 6 : 2)}` : "N/A"} color="#ffaa00" />
          <StatCard label="Current vs EMA20"  value={technical.ema20 !== null ? `${(((data.coin.current_price - technical.ema20) / technical.ema20) * 100).toFixed(2)}%` : "N/A"} color={technical.ema20 !== null && data.coin.current_price > technical.ema20 ? "#00ff88" : "#ff4466"} />
        </div>
        <div className="coin-app-indicator-verdict">EMA Status: <strong>{emaStatus}</strong></div>
        <p className="coin-app-indicator-explain">{t.emaExplain}</p>
      </section>

      <section className="coin-app-section" aria-labelledby="bb-heading">
        <h2 className="coin-app-section-title" id="bb-heading">📏 Bollinger Bands</h2>
        <div className="coin-app-grid-3">
          <StatCard label="Upper Band"    value={technical.bbUpper !== null ? `$${fmt(technical.bbUpper, technical.bbUpper < 1 ? 6 : 2)}` : "N/A"} color="#ff4466" />
          <StatCard label="Current Price" value={`$${fmt(data.coin.current_price, data.coin.current_price < 1 ? 6 : 2)}`}                           color="#ffffff" />
          <StatCard label="Lower Band"    value={technical.bbLower !== null ? `$${fmt(technical.bbLower, technical.bbLower < 1 ? 6 : 2)}` : "N/A"} color="#00ff88" />
        </div>
        <div className="coin-app-indicator-verdict">BB Status: <strong>{bbStatus}</strong></div>
        <p className="coin-app-indicator-explain">{t.bbExplain}</p>
      </section>

      {technical.stoch !== null && (
        <section className="coin-app-section" aria-labelledby="stoch-heading">
          <h2 className="coin-app-section-title" id="stoch-heading">⚡ Stochastic Oscillator</h2>
          <GaugeBar label="Stoch %K" value={technical.stoch} min={0} max={100} low={20} high={80} />
          <p className="coin-app-indicator-explain">{t.stochExplain}</p>
        </section>
      )}
    </div>
  );
}

function PredictionTab({ data, locale = "en" }) {
  const t = LOCALIZED_PREDICTION[locale] || LOCALIZED_PREDICTION.en;
  const { prediction, coin } = data;
  const totalScore = prediction.bullScore + prediction.bearScore;
  const bullPct    = totalScore > 0 ? (prediction.bullScore / totalScore) * 100 : 50;
  const bearPct    = 100 - bullPct;
  const directionLabel =
    prediction.direction === "UP"   ? t.directionUp   :
    prediction.direction === "DOWN" ? t.directionDown  :
                                      t.directionSideways;

  return (
    <div className="coin-app-tab-content">
      <section className="coin-app-section" aria-labelledby="prediction-heading">
        <h2 className="coin-app-section-title" id="prediction-heading">🔮 AI Prediction</h2>
        <div className={`coin-app-big-signal ${prediction.direction === "UP" ? "bull" : prediction.direction === "DOWN" ? "bear" : "neutral"}`}>
          <div className="coin-app-big-signal-icon" aria-hidden="true">{prediction.direction === "UP" ? "🚀" : prediction.direction === "DOWN" ? "📉" : "➡️"}</div>
          <div className="coin-app-big-signal-dir">{directionLabel}</div>
          <div className="coin-app-big-signal-conf">Confidence: {prediction.confidence}%</div>
          <div className="coin-app-conf-bar-wrap">
            <div className="coin-app-conf-bar" style={{ width: `${prediction.confidence}%` }} />
          </div>
          <div className="coin-app-big-signal-sentiment">{prediction.sentiment}</div>
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="targets-heading">
        <h2 className="coin-app-section-title" id="targets-heading">🎯 Price Targets</h2>
        <div className="coin-app-grid-3">
          <StatCard label="Current Price" value={`$${fmt(coin.current_price, coin.current_price < 1 ? 6 : 2)}`} color="#00d4ff" />
          <StatCard label="Target Price"  value={`$${fmt(prediction.targetPrice, prediction.targetPrice < 1 ? 6 : 2)}`} sub={`${prediction.direction === "UP" ? "+" : ""}${(((prediction.targetPrice - coin.current_price) / coin.current_price) * 100).toFixed(2)}%`} color={prediction.direction === "UP" ? "#00ff88" : "#ff4466"} />
          <StatCard label="Stop Loss"     value={`$${fmt(prediction.stopLoss, prediction.stopLoss < 1 ? 6 : 2)}`}         sub={`${(((prediction.stopLoss - coin.current_price) / coin.current_price) * 100).toFixed(2)}%`}                                                      color="#ff4466" />
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="bullbear-heading">
        <h2 className="coin-app-section-title" id="bullbear-heading">🐂 vs 🐻 Score</h2>
        <div className="coin-app-bull-bear-bar" role="meter" aria-label="Bull vs Bear score">
          <div className="coin-app-bull-fill" style={{ width: `${bullPct}%` }}>
            {bullPct > 20 && <span>🐂 {bullPct.toFixed(0)}%</span>}
          </div>
          <div className="coin-app-bear-fill" style={{ width: `${bearPct}%` }}>
            {bearPct > 20 && <span>{bearPct.toFixed(0)}% 🐻</span>}
          </div>
        </div>
        <div className="coin-app-score-nums">
          <span>Bull Score: {prediction.bullScore}</span>
          <span>Bear Score: {prediction.bearScore}</span>
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="reasons-heading">
        <h2 className="coin-app-section-title" id="reasons-heading">📋 Analysis Reasons</h2>
        <div className="coin-app-reasons-list">
          {prediction.reasons.map((r, i) => (
            <div key={i} className={`coin-app-reason-item ${r.startsWith("🟢") ? "reason-bull" : r.startsWith("🔴") ? "reason-bear" : "reason-neutral"}`}>
              {r}
            </div>
          ))}
        </div>
      </section>

      <div className="coin-app-disclaimer" role="note">
        {t.disclaimer}
      </div>
    </div>
  );
}

function HistoryTab({ data }) {
  const { ohlc7d, coin } = data;
  if (!ohlc7d || ohlc7d.length === 0) return (
    <div className="coin-app-tab-content">
      <p className="coin-app-no-data">Historical data not available</p>
    </div>
  );

  const maxHigh = Math.max(...ohlc7d.map((d) => d.high));
  const minLow  = Math.min(...ohlc7d.map((d) => d.low));
  const range   = maxHigh - minLow;

  return (
    <div className="coin-app-tab-content">
      <section className="coin-app-section" aria-labelledby="history-heading">
        <h2 className="coin-app-section-title" id="history-heading">📅 7-Day OHLC History</h2>
        <div className="coin-app-ohlc-table-wrap">
          <table className="coin-app-ohlc-table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Open</th>
                <th scope="col">High</th>
                <th scope="col">Low</th>
                <th scope="col">Close</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              {ohlc7d.slice().reverse().map((d, i) => {
                const change  = ((d.close - d.open) / d.open) * 100;
                const dateStr = new Date(d.time).toLocaleDateString("en-PK", { weekday: "short", month: "short", day: "numeric" });
                return (
                  <tr key={i} className={change >= 0 ? "coin-app-row-bull" : "coin-app-row-bear"}>
                    <td>{dateStr}</td>
                    <td>${fmt(d.open,  d.open  < 1 ? 5 : 2)}</td>
                    <td className="coin-app-high-cell">${fmt(d.high, d.high < 1 ? 5 : 2)}</td>
                    <td className="coin-app-low-cell">${fmt(d.low,   d.low  < 1 ? 5 : 2)}</td>
                    <td><strong>${fmt(d.close, d.close < 1 ? 5 : 2)}</strong></td>
                    <td className={change >= 0 ? "coin-app-pos" : "coin-app-neg"}>{change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="chart-heading">
        <h2 className="coin-app-section-title" id="chart-heading">📊 Price Range Visual</h2>
        <div className="coin-app-chart-wrap" role="img" aria-label={`${coin.name} 7-day candlestick price chart`}>
          {ohlc7d.map((d, i) => {
            const highPct  = ((d.high  - minLow) / range) * 100;
            const lowPct   = ((d.low   - minLow) / range) * 100;
            const openPct  = ((d.open  - minLow) / range) * 100;
            const closePct = ((d.close - minLow) / range) * 100;
            const isBull   = d.close >= d.open;
            const dateStr  = new Date(d.time).toLocaleDateString("en-US", { weekday: "short" });
            return (
              <div key={i} className="coin-app-candle-col">
                <div className="coin-app-candle-wrap" title={`O:${d.open} H:${d.high} L:${d.low} C:${d.close}`}>
                  <div className="coin-app-wick"        style={{ bottom: `${lowPct}%`, height: `${highPct - lowPct}%`, background: isBull ? "#00ff88" : "#ff4466" }} />
                  <div className="coin-app-candle-body" style={{ bottom: `${Math.min(openPct, closePct)}%`, height: `${Math.max(0.5, Math.abs(closePct - openPct))}%`, background: isBull ? "#00ff88" : "#ff4466", opacity: 0.9 }} />
                </div>
                <div className="coin-app-candle-label">{dateStr}</div>
              </div>
            );
          })}
        </div>
        <div className="coin-app-chart-legend" aria-hidden="true">
          <span style={{ color: "#00ff88" }}>▮ Bullish (Close &gt; Open)</span>
          <span style={{ color: "#ff4466" }}>▮ Bearish (Close &lt; Open)</span>
        </div>
      </section>

      <section className="coin-app-section" aria-labelledby="summary-heading">
        <h2 className="coin-app-section-title" id="summary-heading">📌 7-Day Summary</h2>
        <div className="coin-app-grid-4">
          <StatCard label="7-Day High"           value={`$${fmt(maxHigh, maxHigh < 1 ? 5 : 2)}`}  color="#00ff88" />
          <StatCard label="7-Day Low"            value={`$${fmt(minLow,  minLow  < 1 ? 5 : 2)}`}  color="#ff4466" />
          <StatCard label="Avg Close"            value={`$${fmt(ohlc7d.reduce((a, d) => a + d.close, 0) / ohlc7d.length, coin.current_price < 1 ? 5 : 2)}`} color="#00d4ff" />
          <StatCard label="Current vs Week High" value={`${(((coin.current_price - maxHigh) / maxHigh) * 100).toFixed(2)}%`} color="#ffaa00" />
        </div>
      </section>
    </div>
  );
}

// ─── CSS (100% unchanged from original) ──────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .coin-app-app {
    --bg: #f5f7fa;
    --text: #14202e;
    --text-soft: #5b6b7c;
    --text-mid: #2a3b4d;
    --surface: #ffffff;
    --surface-soft: #f7f9fb;
    --surface-alt: #eef2f6;
    --border: #e2e8f0;
    --border-soft: #d7dee6;
    --shadow: rgba(20,32,46,0.06);
    --shadow-soft: rgba(20,32,46,0.04);
    --accent: #0088cc;
    --accent-strong: #0077b3;
    --accent-grad-1: #0088cc;
    --accent-grad-2: #0066cc;
    --green: #00945a;
    --green-strong: #00bb66;
    --green-grad-1: #00cc77;
    --green-grad-2: #00aa55;
    --red: #d6244a;
    --red-strong: #ff4466;
    --red-grad-1: #cc3355;
    --orange: #a36a00;
    --orange-strong: #ff9f00;
    --on-accent: #ffffff;
    --on-fill: #ffffff;
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
  }

  .dark .coin-app-app {
    --bg: #050a14;
    --text: #e8f0fe;
    --text-soft: #8899aa;
    --text-mid: #c0d0e8;
    --surface: #0d1829;
    --surface-soft: #07101e;
    --surface-alt: #07101e;
    --border: #1a2640;
    --border-soft: #1a2640;
    --shadow: rgba(0,0,0,0.3);
    --shadow-soft: rgba(0,0,0,0.2);
    --accent: #00d4ff;
    --accent-strong: #00d4ff;
    --accent-grad-1: #00d4ff;
    --accent-grad-2: #0099ff;
    --green: #00ff88;
    --green-strong: #00ff88;
    --green-grad-1: #00ff88;
    --green-grad-2: #00d4ff;
    --red: #ff4466;
    --red-strong: #ff4466;
    --red-grad-1: #cc3355;
    --orange: #ffaa00;
    --orange-strong: #ffaa00;
    --on-accent: #000000;
    --on-fill: #ffffff;
  }

  .coin-app-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

  .coin-app-header { background: var(--surface); opacity: 0.97; border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; backdrop-filter: blur(20px); }
  .coin-app-header-inner { max-width: 1400px; margin: 0 auto; padding: 0.75rem 1.5rem; display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
  .coin-app-logo { display: flex; align-items: center; gap: 0.5rem; }
  .coin-app-logo-icon { font-size: 1.4rem; color: var(--accent); }
  .coin-app-logo-text { font-size: 1.2rem; font-weight: 700; letter-spacing: -0.03em; color: var(--text); }
  .coin-app-logo-badge { background: linear-gradient(135deg, color-mix(in srgb, var(--accent-grad-1) 12%, transparent), color-mix(in srgb, #7c3aed 12%, transparent)); border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent); color: var(--accent-strong); font-size: 0.65rem; padding: 0.15rem 0.5rem; border-radius: 999px; font-weight: 600; letter-spacing: 0.05em; }
  .coin-app-search-form { display: flex; gap: 0.5rem; flex: 1; max-width: 420px; }
  .coin-app-search-input { flex: 1; background: var(--surface-soft); border: 1px solid var(--border-soft); color: var(--text); border-radius: 8px; padding: 0.5rem 0.9rem; font-size: 0.9rem; font-family: inherit; outline: none; transition: border-color 0.2s; }
  .coin-app-search-input:focus { border-color: var(--accent); }
  .coin-app-search-btn { background: linear-gradient(135deg, var(--accent-grad-1), var(--accent-grad-2)); color: var(--on-accent); border: none; border-radius: 8px; padding: 0.5rem 1rem; font-weight: 700; cursor: pointer; font-size: 0.85rem; white-space: nowrap; transition: opacity 0.2s; }
  .coin-app-search-btn:hover { opacity: 0.85; }

  .coin-app-quick-coins { display: flex; gap: 0.4rem; padding: 0.75rem 1.5rem; overflow-x: auto; max-width: 1400px; margin: 0 auto; }
  .coin-app-quick-btn { background: var(--surface-soft); border: 1px solid var(--border-soft); color: var(--text-soft); border-radius: 6px; padding: 0.3rem 0.75rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; font-family: 'Space Mono', monospace; white-space: nowrap; transition: all 0.2s; }
  .coin-app-quick-btn:hover { border-color: var(--accent); color: var(--text); }
  .coin-app-quick-btn.active { background: color-mix(in srgb, var(--accent) 12%, transparent); border-color: var(--accent); color: var(--accent-strong); }

  .coin-app-seo-intro { max-width: 1400px; margin: 0 auto; padding: 0.75rem 1.5rem; }
  .coin-app-seo-intro p { font-size: 0.9rem; color: var(--text-soft); line-height: 1.6; margin-bottom: 0.5rem; }

  .coin-app-main { max-width: 1400px; margin: 0 auto; padding: 1.5rem; }

  .coin-app-loading { text-align: center; padding: 5rem 2rem; }
  .coin-app-spinner { width: 48px; height: 48px; border: 3px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 1.5rem; }
  @keyframes spin { to { transform: rotate(360deg); } }
  .coin-app-loading-msg { color: var(--text-soft); font-size: 0.9rem; }

  .coin-app-error-box { background: color-mix(in srgb, var(--red-strong) 8%, transparent); border: 1px solid var(--red-strong); border-radius: 12px; padding: 1.5rem; display: flex; align-items: center; gap: 1rem; justify-content: space-between; }
  .coin-app-error-box button { background: var(--red-strong); color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 600; }

  .coin-app-hero { background: linear-gradient(135deg, var(--surface), var(--surface-soft)); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem 2rem; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1.5rem; box-shadow: 0 1px 3px var(--shadow); }
  .coin-app-hero-left { display: flex; align-items: center; gap: 1rem; }
  .coin-app-coin-img { border-radius: 50%; border: 2px solid var(--border); }
  .coin-app-coin-name { font-size: 1.4rem; font-weight: 700; line-height: 1.2; color: var(--text); }
  .coin-app-coin-symbol { font-size: 0.85rem; color: var(--text-soft); font-family: 'Space Mono', monospace; margin-top: 0.25rem; display: block; }
  .coin-app-hero-center { flex: 1; text-align: center; }
  .coin-app-price-big { font-size: 2.5rem; font-weight: 700; font-family: 'Space Mono', monospace; letter-spacing: -0.02em; color: var(--text); }
  .coin-app-change-badge { display: inline-block; margin-top: 0.5rem; padding: 0.25rem 0.75rem; border-radius: 999px; font-weight: 600; font-size: 0.9rem; }
  .coin-app-change-badge.pos { background: color-mix(in srgb, var(--green-strong) 15%, transparent); color: var(--green); border: 1px solid color-mix(in srgb, var(--green-strong) 40%, transparent); }
  .coin-app-change-badge.neg { background: color-mix(in srgb, var(--red-strong) 15%, transparent); color: var(--red); border: 1px solid color-mix(in srgb, var(--red-strong) 40%, transparent); }
  .coin-app-hero-right { min-width: 160px; }
  .coin-app-signal-box { text-align: center; padding: 1rem 1.5rem; border-radius: 12px; }
  .coin-app-signal-box.bull { background: color-mix(in srgb, var(--green-strong) 12%, transparent); border: 1px solid color-mix(in srgb, var(--green-strong) 40%, transparent); }
  .coin-app-signal-box.bear { background: color-mix(in srgb, var(--red-strong) 12%, transparent); border: 1px solid color-mix(in srgb, var(--red-strong) 40%, transparent); }
  .coin-app-signal-box.neutral { background: color-mix(in srgb, var(--orange-strong) 12%, transparent); border: 1px solid color-mix(in srgb, var(--orange-strong) 40%, transparent); }
  .coin-app-signal-icon { font-size: 1.8rem; }
  .coin-app-signal-label { font-size: 1rem; font-weight: 700; margin: 0.25rem 0 0.15rem; color: var(--text); }
  .coin-app-signal-conf { font-size: 0.8rem; color: var(--text-soft); }

  .coin-app-tabs { display: flex; gap: 0.4rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .coin-app-tab-btn { background: var(--surface-soft); border: 1px solid var(--border-soft); color: var(--text-soft); border-radius: 8px; padding: 0.55rem 1rem; font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: inherit; }
  .coin-app-tab-btn:hover { border-color: color-mix(in srgb, var(--accent) 44%, transparent); color: var(--text); }
  .coin-app-tab-btn.active { background: color-mix(in srgb, var(--accent) 12%, transparent); border-color: var(--accent); color: var(--accent-strong); font-weight: 600; }

  .coin-app-section { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 1px 2px var(--shadow-soft); }
  .coin-app-section-title { font-size: 1rem; font-weight: 600; margin-bottom: 1rem; color: var(--text-mid); letter-spacing: -0.01em; }

  .coin-app-grid-4 { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem; }
  .coin-app-grid-3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 0.75rem; }
  .coin-app-stat-card { background: var(--surface-soft); border: 1px solid var(--border); border-radius: 10px; padding: 1rem; }
  .coin-app-stat-label { font-size: 0.75rem; color: var(--text-soft); font-weight: 500; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .coin-app-stat-value { font-size: 1.1rem; font-weight: 700; font-family: 'Space Mono', monospace; color: var(--text); }
  .coin-app-stat-sub { font-size: 0.75rem; color: var(--text-soft); margin-top: 0.25rem; }

  .coin-app-pressure-bar-wrap { }
  .coin-app-pressure-labels { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; }
  .coin-app-buy-label { color: var(--green); }
  .coin-app-sell-label { color: var(--red); }
  .coin-app-pressure-bar { height: 24px; background: color-mix(in srgb, var(--red-strong) 20%, transparent); border-radius: 999px; overflow: hidden; }
  .coin-app-buy-fill { height: 100%; background: linear-gradient(90deg, var(--green-grad-1), var(--accent)); border-radius: 999px; transition: width 0.5s; }
  .coin-app-pressure-verdict { margin-top: 0.75rem; color: var(--text-soft); font-size: 0.9rem; }

  .coin-app-sr-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .coin-app-sr-head { font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem; }
  .coin-app-support-head { color: var(--green); }
  .coin-app-resist-head { color: var(--red); }
  .coin-app-sr-level { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0.75rem; border-radius: 8px; margin-bottom: 0.4rem; font-size: 0.85rem; font-family: 'Space Mono', monospace; }
  .coin-app-sr-level.coin-app-support { background: color-mix(in srgb, var(--green-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--green-strong) 30%, transparent); }
  .coin-app-sr-level.coin-app-resist { background: color-mix(in srgb, var(--red-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--red-strong) 30%, transparent); }
  .coin-app-sr-pct { color: var(--text-soft); }

  .coin-app-gauge-wrap { margin-bottom: 1rem; }
  .coin-app-gauge-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem; }
  .coin-app-gauge-label { font-size: 0.85rem; color: var(--text-mid); font-weight: 500; }
  .coin-app-gauge-value { font-size: 1rem; font-weight: 700; font-family: 'Space Mono', monospace; }
  .coin-app-gauge-track { height: 12px; background: var(--surface-alt); border-radius: 999px; border: 1px solid var(--border); overflow: hidden; }
  .coin-app-gauge-fill { height: 100%; border-radius: 999px; transition: width 0.5s; }
  .coin-app-gauge-tags { display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--text-soft); margin-top: 0.25rem; }
  .coin-app-gauge-na { color: var(--text-soft); font-size: 0.85rem; padding: 0.5rem 0; }

  .coin-app-indicator-verdict { margin-top: 0.75rem; font-size: 0.9rem; color: var(--text-mid); }
  .coin-app-indicator-explain { margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-soft); line-height: 1.5; }

  .coin-app-big-signal { padding: 2rem; border-radius: 16px; text-align: center; margin-bottom: 0; }
  .coin-app-big-signal.bull { background: radial-gradient(circle at center, color-mix(in srgb, var(--green-strong) 14%, transparent), var(--surface-soft)); border: 1px solid color-mix(in srgb, var(--green-strong) 44%, transparent); }
  .coin-app-big-signal.bear { background: radial-gradient(circle at center, color-mix(in srgb, var(--red-strong) 14%, transparent), var(--surface-soft)); border: 1px solid color-mix(in srgb, var(--red-strong) 44%, transparent); }
  .coin-app-big-signal.neutral { background: radial-gradient(circle at center, color-mix(in srgb, var(--orange-strong) 14%, transparent), var(--surface-soft)); border: 1px solid color-mix(in srgb, var(--orange-strong) 44%, transparent); }
  .coin-app-big-signal-icon { font-size: 3rem; }
  .coin-app-big-signal-dir { font-size: 1.3rem; font-weight: 700; margin: 0.5rem 0 0.25rem; color: var(--text); }
  .coin-app-big-signal-conf { font-size: 0.9rem; color: var(--text-soft); margin-bottom: 0.75rem; }
  .coin-app-conf-bar-wrap { height: 8px; background: var(--surface-alt); border-radius: 999px; overflow: hidden; max-width: 300px; margin: 0 auto 1rem; border: 1px solid var(--border); }
  .coin-app-conf-bar { height: 100%; background: linear-gradient(90deg, var(--accent), var(--green-grad-1)); border-radius: 999px; transition: width 0.8s; }
  .coin-app-big-signal-sentiment { font-size: 0.9rem; color: var(--text-mid); font-style: italic; }

  .coin-app-bull-bear-bar { height: 40px; border-radius: 10px; overflow: hidden; display: flex; margin-bottom: 0.5rem; }
  .coin-app-bull-fill { background: linear-gradient(90deg, var(--green-grad-1), var(--green-grad-2)); display: flex; align-items: center; justify-content: flex-start; padding-left: 0.75rem; font-weight: 700; font-size: 0.85rem; color: var(--on-fill); transition: width 0.5s; }
  .coin-app-bear-fill { background: linear-gradient(90deg, var(--red-grad-1), var(--red-strong)); display: flex; align-items: center; justify-content: flex-end; padding-right: 0.75rem; font-weight: 700; font-size: 0.85rem; color: var(--on-fill); transition: width 0.5s; }
  .coin-app-score-nums { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-soft); margin-top: 0.25rem; }

  .coin-app-reasons-list { display: flex; flex-direction: column; gap: 0.5rem; }
  .coin-app-reason-item { padding: 0.6rem 1rem; border-radius: 8px; font-size: 0.85rem; line-height: 1.4; color: var(--text); }
  .coin-app-reason-bull { background: color-mix(in srgb, var(--green-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--green-strong) 30%, transparent); }
  .coin-app-reason-bear { background: color-mix(in srgb, var(--red-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--red-strong) 30%, transparent); }
  .coin-app-reason-neutral { background: color-mix(in srgb, var(--orange-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--orange-strong) 40%, transparent); }

  .coin-app-disclaimer { margin-top: 1rem; background: color-mix(in srgb, var(--orange-strong) 10%, transparent); border: 1px solid color-mix(in srgb, var(--orange-strong) 30%, transparent); border-radius: 10px; padding: 0.75rem 1rem; font-size: 0.8rem; color: var(--orange); line-height: 1.5; }

  .coin-app-ohlc-table-wrap { overflow-x: auto; }
  .coin-app-ohlc-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; font-family: 'Space Mono', monospace; }
  .coin-app-ohlc-table th { background: var(--surface-soft); color: var(--text-soft); padding: 0.6rem 0.75rem; text-align: right; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
  .coin-app-ohlc-table th:first-child { text-align: left; }
  .coin-app-ohlc-table td { padding: 0.55rem 0.75rem; text-align: right; border-bottom: 1px solid var(--border); }
  .coin-app-ohlc-table td:first-child { text-align: left; color: var(--text-mid); font-family: 'Space Grotesk', sans-serif; }
  .coin-app-high-cell { color: var(--green); }
  .coin-app-low-cell { color: var(--red); }
  .coin-app-row-bull { background: color-mix(in srgb, var(--green-strong) 6%, transparent); }
  .coin-app-row-bear { background: color-mix(in srgb, var(--red-strong) 6%, transparent); }
  .coin-app-pos { color: var(--green); }
  .coin-app-neg { color: var(--red); }

  .coin-app-chart-wrap { display: flex; align-items: flex-end; gap: 8px; height: 200px; padding: 0 0.5rem 2rem; border-bottom: 1px solid var(--border); position: relative; }
  .coin-app-candle-col { flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; position: relative; }
  .coin-app-candle-wrap { flex: 1; width: 100%; position: relative; }
  .coin-app-wick { position: absolute; left: 50%; transform: translateX(-50%); width: 2px; }
  .coin-app-candle-body { position: absolute; left: 15%; right: 15%; min-height: 2px; }
  .coin-app-candle-label { font-size: 0.65rem; color: var(--text-soft); margin-top: 0.25rem; font-family: 'Space Grotesk', sans-serif; text-align: center; }
  .coin-app-chart-legend { display: flex; gap: 1.5rem; margin-top: 1rem; font-size: 0.8rem; }
  .coin-app-no-data { color: var(--text-soft); padding: 2rem; text-align: center; }

  @media (max-width: 768px) {
    .coin-app-hero { flex-direction: column; align-items: flex-start; }
    .coin-app-hero-center { width: 100%; }
    .coin-app-hero-right { width: 100%; }
    .coin-app-sr-grid { grid-template-columns: 1fr; }
    .coin-app-price-big { font-size: 1.8rem; }
    .coin-app-header-inner { flex-direction: column; align-items: flex-start; }
    .coin-app-search-form { width: 100%; max-width: 100%; }
  }
`;