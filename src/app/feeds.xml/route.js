// app/feeds.xml/route.js

import { VALID_LOCALES, FEED_TYPES, SITE_URL, DEFAULT_LOCALE, buildFeedUrl, buildUrl } from "@/lib/rss/configer";
import { buildOpmlIndex, opmlResponse } from "@/lib/rss/xml";

export async function GET() {
  const feeds = [];

  for (const type of FEED_TYPES) {
    for (const locale of VALID_LOCALES) {

      // News has no real listing page — there is no "/news" or "/{locale}/news"
      // route on the site. Individual articles still live at "/news/slug"
      // (or "/{locale}/news/slug"), but the *index* page we link the feed to
      // from a reader is just the homepage for that locale (en: SITE_URL,
      // others: SITE_URL/{locale}). Events, on the other hand, really does
      // have a listing page at "/events" / "/{locale}/events", so it keeps
      // using buildUrl as-is.
      const htmlUrl =
        type === "news"
          ? locale === DEFAULT_LOCALE
            ? SITE_URL
            : `${SITE_URL}/${locale}`
          : buildUrl(locale, `/${type}`);

      feeds.push({
        title: `Crypto News Trend — ${type} (${locale.toUpperCase()})`,
        xmlUrl: buildFeedUrl(type, locale),
        htmlUrl,
      });
    }
  }

  const xml = buildOpmlIndex("Crypto News Trend — All Feeds", feeds);
  return opmlResponse(xml);
}

export const revalidate = 86400;