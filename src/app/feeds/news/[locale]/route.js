// app/feeds/news/[locale]/route.js
// Serves: /feeds/news/en.xml (real path /feeds/news/en)
//
// News gets its own route (not the createFeedRoute factory) for the same
// reason your news SITEMAP route is separate from createChunkRoute: the
// /api/getdata endpoint has its own fetch shape (POST + locale-in-path
// quirk + zh->zh-cn mapping). Unlike the sitemap version, this route only
// ever needs backend page=1 — a feed shows the latest ~30 items, never
// the full archive, so no multi-page merging is needed here.

import { notFound } from "next/navigation";
import {
  VALID_LOCALES,
  FEED_ITEM_LIMIT,
  
  buildUrl,
  buildFeedUrl,
  toApiLocale,
} from "@/lib/rss/configer";
import { buildRssXml, rssResponse } from "@/lib/rss/xml";

const BASE_API = process.env.NEXT_PUBLIC_API_BASE || "https://crytponews.fun";

// Your API returns a separate slug per locale on the SAME article object:
//   article.slug        -> English (default) slug
//   article.slug_fr      -> French slug
//   article.slug_de      -> German slug
//   article.slug_ru, article.slug_zh, etc.
// There is no "slug_en" field — English always uses the plain `slug` key.
// This picks the right one so /fr/news/... links to the real French page
// instead of falling back to the English slug.
function getLocalizedSlug(article, locale) {
  if (locale === "en") return article.slug;
  return article[`slug_${locale}`] || article.slug;
}

async function fetchLatestNews(locale) {
  const apiLocale = toApiLocale(locale);
  const url =
    locale === "en"
      ? `${BASE_API}/api/getdata/?page=1`
      : `${BASE_API}/api/getdata/${apiLocale}/?page=1`;
        console.log("[RSS DEBUG] locale:", locale, "apiLocale:", apiLocale, "url:", url); // ✅ debug line


  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ news: "all" }),
      next: { revalidate: 420, tags: [`news-${locale}`] },
    });
    if (!res.ok) return [];
    const data = await res.json();
    // Same shape your news sitemap route reads: data.data, fallback data.results
    return data?.data || data?.results || [];
  } catch {
    return [];
  }
}

export async function GET(request, { params }) {
  const { locale: rawLocale } = await params;

  // ✅ FIX — strip ".xml" from the route param, since Next.js treats
  // "en.xml" as a literal [locale] value, not as a file extension.
  const locale = rawLocale.replace(/\.xml$/, "");

  if (!VALID_LOCALES.includes(locale)) return notFound();

  const articles = await fetchLatestNews(locale);
  if (articles.length === 0) return notFound();

  const items = articles.slice(0, FEED_ITEM_LIMIT).map((article) => ({
    title: article.title,
    link: buildUrl(locale, `/news/${getLocalizedSlug(article, locale)}`),
    description: article.summary || article.excerpt || article.description || "",
    content: article.body || article.content || undefined,
    pubDate: article.published_at || article.created_at || article.updated_at,
    category: article.category || "News",
    imageUrl: article.image || article.thumbnail || undefined,
  }));

  const xml = buildRssXml(
    {
      title: `Crypto News Trend — Latest News (${locale.toUpperCase()})`,
      link: buildUrl(locale, "/news"),
      description: "Latest cryptocurrency news and market updates.",
      language: locale,
      selfUrl: buildFeedUrl("news", locale),
    },
    items
  );

  return rssResponse(xml);
}


export const revalidate = 300;