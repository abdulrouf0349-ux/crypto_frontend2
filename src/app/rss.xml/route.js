// app/feeds.xml/route.js

import { VALID_LOCALES, FEED_TYPES, SITE_URL, buildFeedUrl, buildUrl } from "@/lib/rss/configer";
import { buildOpmlIndex, opmlResponse } from "@/lib/rss/xml";

export async function GET() {
  const feeds = [];

  for (const type of FEED_TYPES) {
    for (const locale of VALID_LOCALES) {
      
      let htmlUrl = buildUrl(locale, `/${type}`);

      // 100% پرفیکٹ لاجک: اگر "انگریزی" کی "news" لسٹ بن رہی ہے، تو پاتھ کو ڈائریکٹ ہوم پیج (SITE_URL) کر دو
      if (type === "news" && locale === "en") {
        htmlUrl = SITE_URL; // یعنی https://cryptonewstrend.com
      }

      feeds.push({
        title: `Crypto News Trend — ${type} (${locale.toUpperCase()})`,
        xmlUrl: buildFeedUrl(type, locale),
        htmlUrl: htmlUrl,
      });
    }
  }

  const xml = buildOpmlIndex("Crypto News Trend — All Feeds", feeds);
  return opmlResponse(xml);
}

export const revalidate = 86400;