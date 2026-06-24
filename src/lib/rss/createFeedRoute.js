// lib/rss/createFeedRoute.js
//
// Factory for "simple" RSS feed routes (events, and any future type that's
// just one page worth of latest items — no backend-page-merging needed).
// News has its own route because it needs the same backend-page-merging
// logic your news sitemap chunk route already has. This factory mirrors
// lib/sitemap/createChunkRoute.js so both systems stay structurally twins.

import { notFound } from "next/navigation";
import { VALID_LOCALES, FEED_ITEM_LIMIT, buildUrl, buildFeedUrl } from "@/lib/rss/configer";
import { buildRssXml, rssResponse } from "@/lib/rss/xml";

/**
 * @param {Object} opts
 * @param {(locale: string) => Promise<any[]>} opts.fetchItems
 *   Given a locale, return the latest raw items (already page=1, already
 *   sorted newest-first by your API).
 * @param {(item: any, locale: string) => Object} opts.mapItem
 *   Given one raw item, return:
 *   { path, title, description, pubDate, category, imageUrl, content }
 * @param {string} opts.feedType   e.g. "events" — used to build the self URL
 * @param {(locale: string) => { title, description }} opts.channelMeta
 * @param {number} opts.revalidate
 */
export function createFeedRoute({ fetchItems, mapItem, feedType, channelMeta, revalidate }) {
  async function GET(request, { params }) {
    const { locale } = await params;

    if (!VALID_LOCALES.includes(locale)) return notFound();

    const rawItems = await fetchItems(locale);
    if (!rawItems || rawItems.length === 0) return notFound();

    const limited = rawItems.slice(0, FEED_ITEM_LIMIT);

    const items = limited.map((raw) => {
      const mapped = mapItem(raw, locale);
      return {
        title: mapped.title,
        link: buildUrl(locale, mapped.path),
        description: mapped.description,
        pubDate: mapped.pubDate,
        category: mapped.category,
        imageUrl: mapped.imageUrl,
        content: mapped.content,
      };
    });

    const meta = channelMeta(locale);

    const xml = buildRssXml(
      {
        title: meta.title,
        link: buildUrl(locale, `/${feedType}`),
        description: meta.description,
        language: locale,
        selfUrl: buildFeedUrl(feedType, locale),
      },
      items
    );

    return rssResponse(xml);
  }

  return { GET, revalidate };
}