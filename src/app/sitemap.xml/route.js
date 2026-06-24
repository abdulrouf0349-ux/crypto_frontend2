// app/sitemap.xml/route.js
import { NextResponse } from "next/server";
import { 
  VALID_LOCALES, 
  REVALIDATE_INDEX, 
  REVALIDATE_NEWS, 
  REVALIDATE_ICO, 
  REVALIDATE_EVENTS, 
  REVALIDATE_COIN_ANALYSIS, 
  REVALIDATE_WHALES, 
  SITE_URL, 
  chunkCount 
} from "@/lib/sitemap/configer";

const BASE_API = process.env.NEXT_PUBLIC_API_BASE || "https://crytponews.fun";

async function safeJson(url, options) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(`Sitemap master index failed fetching target count node: ${url}`, error);
    return null;
  }
}

function readTotal(data, fallbackPerPage = 20) {
  if (!data) return 0;
  const meta = data.metadata || data;
  if (typeof meta.total_items === "number") return meta.total_items;
  if (typeof meta.count === "number") return meta.count;
  if (typeof meta.total_pages === "number") return meta.total_pages * fallbackPerPage;
  return 0;
}

async function countFor(type, locale) {
  const apiLocale = locale === "zh" ? "zh-cn" : locale;

  switch (type) {
    case "news": {
      const url =
        locale === "en"
          ? `${BASE_API}/api/getdata/?page=1`
          : `${BASE_API}/api/getdata/${apiLocale}/?page=1`;
      const data = await safeJson(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ news: "all" }),
        next: { revalidate: REVALIDATE_NEWS, tags: [`news-${locale}`] },
      });
      return readTotal(data);
    }
    case "whales": {
      const data = await safeJson(
        `${BASE_API}/api/whales_alert/${locale}/?page=1`,
        { next: { revalidate: REVALIDATE_WHALES, tags: [`whales-${locale}`] } }
      );
      return readTotal(data);
    }
    case "ico": {
      const data = await safeJson(
        `${BASE_API}/api/ico_data/${locale}/?status=Active&page=1`,
        { next: { revalidate: REVALIDATE_ICO, tags: [`ico-${locale}`] } }
      );
      return readTotal(data);
    }
    case "events": {
      const data = await safeJson(
        `${BASE_API}/api/get-events/${locale}/?page=1`,
        { next: { revalidate: REVALIDATE_EVENTS, tags: ["events", `${locale}-events`] } }
      );
      return readTotal(data);
    }
    case "coin-analysis": {
      const data = await safeJson(
        `${BASE_API}/api/coins?page=1&search=&type=all&locale=${locale}`,
        { next: { revalidate: REVALIDATE_COIN_ANALYSIS, tags: ["glossary", `${locale}-glossary-all`] } }
      );
      return readTotal(data);
    }
    default:
      return 0;
  }
}

const CONTENT_TYPES = ["news", "whales", "ico", "events", "coin-analysis"];

export async function GET() {
  const now = new Date().toISOString();
  
  // 1. Array with static sitemap declaration
  const sitemapUrls = [
    `${SITE_URL}/sitemaps/static.xml`
  ];

  // 2. Map out data operations concurrently 
  const jobs = [];
  for (const type of CONTENT_TYPES) {
    for (const locale of VALID_LOCALES) {
      jobs.push(
        countFor(type, locale).then((total) => ({
          type,
          locale,
          chunks: chunkCount(total),
        }))
      );
    }
  }

  const results = await Promise.all(jobs);

  // 3. Populate dynamic nested chunk structures
  for (const { type, locale, chunks } of results) {
    for (let i = 1; i <= chunks; i++) {
      sitemapUrls.push(`${SITE_URL}/sitemaps/${type}/${locale}/${i}.xml`);
    }
  }

  // 4. Construct high-compliance standard sitemapindex XML string natively
  const sitemapIndexItems = sitemapUrls
    .map((url) => `  <sitemap>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`)
    .join("\n");

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapIndexItems}
</sitemapindex>`;

  // 5. Direct strict response output with secure custom header blocks
  return new NextResponse(sitemapIndexXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": `public, s-maxage=${REVALIDATE_INDEX}, stale-while-revalidate=600`,
    },
  });
}