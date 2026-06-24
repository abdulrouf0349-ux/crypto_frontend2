// app/sitemaps/events/[locale]/[chunk]/route.js

import { createChunkRoute } from "@/lib/sitemap/createChunkRoute";
import { REVALIDATE_EVENTS, toApiLocale } from "@/lib/sitemap/configer";

const BASE_API = process.env.NEXT_PUBLIC_API_BASE || "https://crytponews.fun";

async function fetchPage(locale, page) {
  try {
    const res = await fetch(
      `${BASE_API}/api/get-events/${locale}/?page=${page}`,
      { next: { revalidate: REVALIDATE_EVENTS, tags: ["events", `${locale}-events`] } }
    );
    if (!res.ok) return [];
    const result = await res.json();
    return result?.data || [];
  } catch {
    return [];
  }
}

// اب یہ فنکشن اپنے اندر locale اور item دونوں کو ہینڈل کرے گا
function mapItemWithLocale(locale) {
  return function(item) {
    const currentSlug = locale === "en" ? item.slug : (item[`slug_${locale}`] || item.slug);   

    return {
      path: `/events/${currentSlug}`,
      lastModified: item.updated_at || item.created_at,
      changeFrequency: "weekly",
      priority: 0.6,
    };
  };
}

export const { GET, revalidate } = createChunkRoute({
  fetchPage,
  // یہاں ہم کرنٹ لوکیل کے ساتھ فنکشن پاس کر رہے ہیں
  mapItem: (item, locale) => mapItemWithLocale(locale)(item),
  revalidate: REVALIDATE_EVENTS,
});