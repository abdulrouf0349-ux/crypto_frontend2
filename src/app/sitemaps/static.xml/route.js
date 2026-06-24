// app/sitemaps/static.xml/route.js
//
// Serves: /sitemaps/static.xml
// Covers all fixed, non-API routes:
// homepage, about-us, contact, privacy-policy, editorial-policy,
// terms, disclaimer, coin-analysis, crypto-whales, events, glossary, ico
//
// FIXES:
//  1. English URLs have no /en/ prefix  (buildUrl already handles this ✅)
//  2. Daily pages get current timestamp; static pages get stable build time
//  3. Added /ico to STATIC_PATHS
//  4. Added export const revalidate for ISR
//  5. buildAlternates uses zh-Hans + zh for Chinese (self-ref fix)

import {
  VALID_LOCALES,
  buildUrl,
  SITE_URL,
  
} from "@/lib/sitemap/configer";
import { buildUrlsetXml, xmlResponse } from "@/lib/sitemap/xml";

// ── ISR: regenerate every 24h ──────────────────────────────
export const revalidate = 86400;

// ── Static paths config ────────────────────────────────────
// path: "" = homepage
// isDynamic: true = use current timestamp (content changes daily)
// isDynamic: false = use stable build timestamp (content rarely changes)
const STATIC_PATHS = [
  { path: "",                   priority: 1.0, changeFrequency: "daily",   isDynamic: true  },
  { path: "/about-us",          priority: 0.5, changeFrequency: "monthly", isDynamic: false },
  { path: "/contact",           priority: 0.4, changeFrequency: "yearly",  isDynamic: false },
  { path: "/privacy-policy",    priority: 0.3, changeFrequency: "yearly",  isDynamic: false },
  { path: "/editorial-policy",  priority: 0.3, changeFrequency: "yearly",  isDynamic: false },
  { path: "/terms",             priority: 0.3, changeFrequency: "yearly",  isDynamic: false },
  { path: "/disclaimer",        priority: 0.3, changeFrequency: "yearly",  isDynamic: false },
  { path: "/coin-analysis",     priority: 0.7, changeFrequency: "daily",   isDynamic: true  },
  { path: "/crypto-whales",     priority: 0.7, changeFrequency: "daily",   isDynamic: true  },
  { path: "/events",            priority: 0.6, changeFrequency: "daily",   isDynamic: true  },
  { path: "/glossary",          priority: 0.6, changeFrequency: "weekly",  isDynamic: true  },
  { path: "/ico",               priority: 0.7, changeFrequency: "daily",   isDynamic: true  }, // FIX #3
];

// ── hreflang builder ───────────────────────────────────────
// FIX #5: adds both "zh" (self-ref) and "zh-Hans" (script subtag alias)
function buildAlternatesFixed(path) {
  const languages = {};
  for (const locale of VALID_LOCALES) {
    languages[locale] = buildUrl(locale, path);
  }
  // zh-Hans as extra alias for Simplified Chinese (does not replace zh)
  languages["zh-Hans"] = buildUrl("zh", path);
  languages["x-default"] = buildUrl("en", path);
  return languages;
}

export async function GET() {
  const now       = new Date();                      // dynamic pages
  const buildTime = new Date("2026-06-24T00:00:00Z"); // stable pages

  const entries = [];

  for (const { path, priority, changeFrequency, isDynamic } of STATIC_PATHS) {
    for (const locale of VALID_LOCALES) {
      entries.push({
        url:             buildUrl(locale, path),
        lastModified:    isDynamic ? now : buildTime,  // FIX #2
        changeFrequency,
        priority,
        alternates: {
          languages: buildAlternatesFixed(path),       // FIX #5
        },
      });
    }
  }

  return xmlResponse(buildUrlsetXml(entries));
}