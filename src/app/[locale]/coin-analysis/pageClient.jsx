













// app/[locale]/coin-analysis/page.jsx
// ============================================================
// INDEX PAGE — search bar + coin grid, both navigate to slug pages
// ============================================================

"use client"; // needed for search interactivity

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ─── Constants ──────────────────────────────────────────────
const YEAR = new Date().getFullYear();

const COIN_NAMES = {
  bitcoin:         { name: "Bitcoin",   symbol: "BTC",  emoji: "₿" },
  ethereum:        { name: "Ethereum",  symbol: "ETH",  emoji: "Ξ" },
  binancecoin:     { name: "BNB",       symbol: "BNB",  emoji: "⬡" },
  solana:          { name: "Solana",    symbol: "SOL",  emoji: "◎" },
  ripple:          { name: "XRP",       symbol: "XRP",  emoji: "✕" },
  cardano:         { name: "Cardano",   symbol: "ADA",  emoji: "₳" },
  dogecoin:        { name: "Dogecoin",  symbol: "DOGE", emoji: "Ð" },
  "avalanche-2":   { name: "Avalanche", symbol: "AVAX", emoji: "🔺" },
  polkadot:        { name: "Polkadot",  symbol: "DOT",  emoji: "●" },
  chainlink:       { name: "Chainlink", symbol: "LINK", emoji: "⬡" },
  "matic-network": { name: "Polygon",   symbol: "MATIC",emoji: "⬟" },
  "shiba-inu":     { name: "Shiba Inu", symbol: "SHIB", emoji: "🐕" },
  tron:            { name: "TRON",      symbol: "TRX",  emoji: "◈" },
  uniswap:         { name: "Uniswap",   symbol: "UNI",  emoji: "🦄" },
  litecoin:        { name: "Litecoin",  symbol: "LTC",  emoji: "Ł" },
};

// Flat list for search matching
const COIN_LIST = Object.entries(COIN_NAMES).map(([id, info]) => ({ id, ...info }));

// ─── Client Page Component ───────────────────────────────────
// NOTE: Since we need "use client" for search, metadata must be
// exported from a separate metadata.js file in the same folder,
// OR you can keep the server page.jsx for metadata + import this
// component. See note at bottom.
export default function CoinAnalysisIndexClient() {
  const router  = useRouter();
  const [query, setQuery]   = useState("");
  const [focused, setFocused] = useState(false);

  // Filtered suggestions while typing
  const suggestions = query.trim().length > 0
    ? COIN_LIST.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.symbol.toLowerCase().includes(query.toLowerCase()) ||
          c.id.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = COIN_LIST.find(
      (c) =>
        c.symbol.toLowerCase() === q ||
        c.name.toLowerCase() === q ||
        c.id === q
    );
    const targetId = found ? found.id : q;
    router.push(`/coin-analysis/${targetId}`);
  };

  const handleSuggestionClick = (id) => {
    setQuery("");
    router.push(`/coin-analysis/${id}`);
  };

  return (
    <main className="idx-main">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="idx-hero">
        <div className="idx-hero-badge">AI-Powered • Live {YEAR}</div>
        <h1 className="idx-hero-h1">
          Crypto Coin Analysis &amp; Price Predictions
        </h1>
        <p className="idx-hero-sub">
          Real-time RSI, MACD, Bollinger Bands, buy/sell signals and AI price
          predictions for Bitcoin, Ethereum, Solana &amp; 100+ altcoins.
        </p>

        {/* ── Search Bar ─────────────────────────────────── */}
        <div className="idx-search-wrap">
          <form onSubmit={handleSearch} className="idx-search-form" autoComplete="off">
            <span className="idx-search-icon" aria-hidden="true">🔍</span>
            <input
              className="idx-search-input"
              type="text"
              placeholder="Search coin — BTC, Ethereum, Solana…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              aria-label="Search cryptocurrency"
              aria-autocomplete="list"
            />
            <button className="idx-search-btn" type="submit">
              Analyze →
            </button>
          </form>

          {/* Suggestions dropdown */}
          {focused && suggestions.length > 0 && (
            <ul className="idx-suggestions" role="listbox" aria-label="Coin suggestions">
              {suggestions.map((c) => (
                <li
                  key={c.id}
                  className="idx-suggestion-item"
                  role="option"
                  onMouseDown={() => handleSuggestionClick(c.id)}
                >
                  <span className="idx-sug-emoji" aria-hidden="true">{c.emoji}</span>
                  <span className="idx-sug-name">{c.name}</span>
                  <span className="idx-sug-symbol">{c.symbol}</span>
                  <span className="idx-sug-arrow">→</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Quick chips */}
        <div className="idx-quick-chips" aria-label="Popular coins">
          {COIN_LIST.slice(0, 8).map((c) => (
            <button
              key={c.id}
              className="idx-chip"
              onClick={() => router.push(`/coin-analysis/${c.id}`)}
            >
              {c.symbol}
            </button>
          ))}
        </div>
      </section>

      {/* ── Coin Grid ────────────────────────────────────── */}
      <section className="idx-grid-section">
        <h2 className="idx-grid-title">Browse All Coins</h2>
        <div className="idx-coin-grid">
          {COIN_LIST.map(({ id, name, symbol, emoji }) => (
            <Link
              key={id}
              href={`/coin-analysis/${id}`}
              className="idx-coin-card"
              prefetch={false}
            >
              <span className="idx-coin-emoji" aria-hidden="true">{emoji}</span>
              <span className="idx-coin-symbol">{symbol}</span>
              <span className="idx-coin-name">{name}</span>
              <span className="idx-coin-cta">Analyze →</span>
            </Link>
          ))}
        </div>
      </section>

      <style>{STYLES}</style>
    </main>
  );
}

// ─── Styles ──────────────────────────────────────────────────
const STYLES = `
  .idx-main {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  /* ── Hero ─────────────────────────── */
  .idx-hero {
    text-align: center;
    padding: 3.5rem 1rem 2.5rem;
  }
  .idx-hero-badge {
    display: inline-block;
    background: color-mix(in srgb, var(--accent, #0088cc) 12%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent, #0088cc) 40%, transparent);
    color: var(--accent, #0088cc);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.25rem 0.9rem;
    border-radius: 999px;
    margin-bottom: 1rem;
  }
  .idx-hero-h1 {
    font-size: clamp(1.6rem, 4vw, 2.6rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--text, #14202e);
    line-height: 1.15;
    margin-bottom: 0.75rem;
  }
  .idx-hero-sub {
    font-size: 0.95rem;
    color: var(--text-soft, #5b6b7c);
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto 2rem;
  }

  /* ── Search ───────────────────────── */
  .idx-search-wrap {
    position: relative;
    max-width: 580px;
    margin: 0 auto 1.5rem;
  }
  .idx-search-form {
    display: flex;
    align-items: center;
    background: var(--surface, #fff);
    border: 1.5px solid var(--border, #e2e8f0);
    border-radius: 14px;
    padding: 0.2rem 0.2rem 0.2rem 1rem;
    gap: 0.5rem;
    box-shadow: 0 4px 24px var(--shadow, rgba(0,136,204,0.08));
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .idx-search-form:focus-within {
    border-color: var(--accent, #0088cc);
    box-shadow: 0 4px 24px color-mix(in srgb, var(--accent, #0088cc) 15%, transparent);
  }
  .idx-search-icon {
    font-size: 1rem;
    flex-shrink: 0;
  }
  .idx-search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 0.95rem;
    font-family: inherit;
    color: var(--text, #14202e);
    padding: 0.55rem 0;
  }
  .idx-search-input::placeholder {
    color: var(--text-soft, #5b6b7c);
  }
  .idx-search-btn {
    background: linear-gradient(135deg, var(--accent, #0088cc), #0066cc);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s;
    flex-shrink: 0;
  }
  .idx-search-btn:hover { opacity: 0.85; }

  /* Suggestions */
  .idx-suggestions {
    position: absolute;
    top: calc(100% + 6px);
    left: 0; right: 0;
    background: var(--surface, #fff);
    border: 1px solid var(--border, #e2e8f0);
    border-radius: 12px;
    box-shadow: 0 8px 32px var(--shadow, rgba(0,0,0,0.1));
    list-style: none;
    padding: 0.4rem 0;
    z-index: 200;
    overflow: hidden;
  }
  .idx-suggestion-item {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: background 0.15s;
    font-size: 0.88rem;
  }
  .idx-suggestion-item:hover {
    background: color-mix(in srgb, var(--accent, #0088cc) 8%, transparent);
  }
  .idx-sug-emoji { font-size: 1.1rem; flex-shrink: 0; }
  .idx-sug-name { color: var(--text, #14202e); font-weight: 500; flex: 1; text-align: left; }
  .idx-sug-symbol {
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: var(--accent, #0088cc);
    font-weight: 700;
  }
  .idx-sug-arrow { color: var(--text-soft, #5b6b7c); font-size: 0.8rem; }

  /* Quick chips */
  .idx-quick-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }
  .idx-chip {
    background: var(--surface, #fff);
    border: 1px solid var(--border, #e2e8f0);
    color: var(--text-soft, #5b6b7c);
    border-radius: 8px;
    padding: 0.3rem 0.85rem;
    font-size: 0.78rem;
    font-weight: 600;
    font-family: 'Space Mono', monospace;
    cursor: pointer;
    transition: all 0.18s;
  }
  .idx-chip:hover {
    border-color: var(--accent, #0088cc);
    color: var(--accent, #0088cc);
    background: color-mix(in srgb, var(--accent, #0088cc) 6%, transparent);
  }

  /* ── Grid ─────────────────────────── */
  .idx-grid-section {
    margin-top: 1rem;
  }
  .idx-grid-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-soft, #5b6b7c);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.78rem;
    margin-bottom: 1rem;
  }
  .idx-coin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
    gap: 0.85rem;
  }
  .idx-coin-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    background: var(--surface, #fff);
    border: 1px solid var(--border, #e2e8f0);
    border-radius: 14px;
    padding: 1.25rem 1rem 1rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
    cursor: pointer;
  }
  .idx-coin-card:hover {
    border-color: var(--accent, #0088cc);
    box-shadow: 0 4px 20px color-mix(in srgb, var(--accent, #0088cc) 12%, transparent);
    transform: translateY(-2px);
  }
  .idx-coin-emoji { font-size: 1.75rem; line-height: 1; }
  .idx-coin-symbol {
    font-family: 'Space Mono', monospace;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--accent, #0088cc);
  }
  .idx-coin-name {
    font-size: 0.75rem;
    color: var(--text-soft, #5b6b7c);
    text-align: center;
  }
  .idx-coin-cta {
    margin-top: 0.35rem;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--accent, #0088cc);
    opacity: 0.6;
    transition: opacity 0.18s;
  }
  .idx-coin-card:hover .idx-coin-cta { opacity: 1; }

  /* ── Dark mode ────────────────────── */
  .dark .idx-hero-h1 { color: #e8f0fe; }
  .dark .idx-search-form { background: #0d1829; border-color: #1a2640; }
  .dark .idx-search-input { color: #e8f0fe; }
  .dark .idx-suggestions { background: #0d1829; border-color: #1a2640; }
  .dark .idx-sug-name { color: #e8f0fe; }
  .dark .idx-chip { background: #0d1829; border-color: #1a2640; color: #8899aa; }
  .dark .idx-coin-card { background: #0d1829; border-color: #1a2640; }

  /* ── Mobile ───────────────────────── */
  @media (max-width: 480px) {
    .idx-hero { padding: 2rem 0.5rem 1.5rem; }
    .idx-coin-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.65rem; }
    .idx-search-btn { padding: 0.55rem 0.85rem; font-size: 0.8rem; }
  }
`;

// ─── NOTE on Metadata ─────────────────────────────────────────
// Because this file now uses "use client", you cannot export
// generateMetadata() from here directly (Next.js restriction).
//
// Two options:
//
// OPTION A (Recommended) — keep metadata in a separate file:
//   app/[locale]/coin-analysis/metadata.js  ← export generateMetadata
//   app/[locale]/coin-analysis/page.jsx     ← this file ("use client")
//
// OPTION B — split into server wrapper + client component:
//   page.jsx (server, no "use client") exports generateMetadata
//   and renders <CoinIndexClient /> imported from index-client.jsx
//
// Your existing metadata export block from the original page.jsx
// goes into whichever file you choose above — no changes needed
// to the metadata logic itself