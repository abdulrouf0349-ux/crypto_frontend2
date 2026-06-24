// app/feeds/events/[locale]/route.js
// Serves: /feeds/events/en.xml (Next.js route segment, real path /feeds/events/en)
//
// Mirrors app/sitemaps/coin-analysis/[locale]/[chunk]/route.js — same
// "factory + fetchPage + mapItem" shape, just feeding an RSS factory
// instead of the sitemap chunk factory.

import { createFeedRoute } from "@/lib/rss/createFeedRoute";
import {  toApiLocale } from "@/lib/rss/configer";

const BASE_API = process.env.NEXT_PUBLIC_API_BASE || "https://crytponews.fun";

// Same idea as the news route's getLocalizedSlug: your API returns a
// separate slug per locale on the SAME event object:
//   item.slug       -> English (default) slug
//   item.slug_fr     -> French slug
//   item.slug_de     -> German slug
//   item.slug_ru, item.slug_zh, etc.
// There is no "slug_en" field — English always uses the plain `slug` key.
function getLocalizedSlug(item, locale) {
  if (locale === "en") return item.slug;
  return item[`slug_${locale}`] || item.slug;
}

async function fetchItems(locale) {
  try {
    const apiLocale = toApiLocale(locale);
    const res = await fetch(`${BASE_API}/api/get-events/${apiLocale}/?page=1`, {
      next: { revalidate: REVALIDATE_EVENTS_FEED, tags: ["events", `${locale}-events`] },
    });
    if (!res.ok) return [];
    const result = await res.json();
    return result?.data || result?.results || [];
  } catch {
    return [];
  }
}

// NOTE: requires createFeedRoute to call mapItem(item, locale) — see note below.
function mapItem(item, locale) {
  return {
    path: `/events/${getLocalizedSlug(item, locale)}`,
    title: item.title || item.name || "Untitled Event",
    description: item.description || item.summary || "",
    content: item.body || item.content || undefined,
    pubDate: item.start_date || item.created_at || item.updated_at,
    category: "Event",
    imageUrl: item.image || item.thumbnail || undefined,
  };
}

function channelMeta(locale) {
  return {
    title: `Crypto News Trend — Upcoming Events (${locale.toUpperCase()})`,
    description: "Upcoming cryptocurrency events, conferences, and meetups.",
  };
}

export const { GET, revalidate } = createFeedRoute({
  fetchItems,
  mapItem,
  feedType: "events",
  channelMeta,
  revalidate: 43200,
});