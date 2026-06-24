// lib/rss/xml.js
// Tiny, dependency-free RSS 2.0 XML builder. Same philosophy as
// lib/sitemap/xml.js — no npm package needed, RSS XML is simple enough
// that a package just adds weight and another thing that breaks on upgrade.

function escapeXml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Wraps text content in CDATA so HTML inside descriptions (bold, links,
// images from your article body) doesn't need per-character escaping and
// doesn't break the XML parser.
function cdata(str = "") {
  return `<![CDATA[${String(str).replace(/]]>/g, "]]&gt;")}]]>`;
}

/**
 * Builds a single <item> block.
 * item: {
 *   title, link, guid, pubDate (Date|string),
 *   description, content (optional full HTML body for content:encoded),
 *   category (optional), imageUrl (optional, for media:content)
 * }
 */
function buildItemXml(item) {
  const pubDate = new Date(item.pubDate || Date.now()).toUTCString();
  const guid = item.guid || item.link;

  const categoryXml = item.category
    ? `\n    <category>${escapeXml(item.category)}</category>`
    : "";

  const mediaXml = item.imageUrl
    ? `\n    <media:content url="${escapeXml(item.imageUrl)}" medium="image" />\n    <enclosure url="${escapeXml(item.imageUrl)}" type="image/jpeg" />`
    : "";

  const contentEncodedXml = item.content
    ? `\n    <content:encoded>${cdata(item.content)}</content:encoded>`
    : "";

  return `  <item>
    <title>${cdata(item.title)}</title>
    <link>${escapeXml(item.link)}</link>
    <guid isPermaLink="true">${escapeXml(guid)}</guid>
    <pubDate>${pubDate}</pubDate>
    <description>${cdata(item.description || "")}</description>${categoryXml}${mediaXml}${contentEncodedXml}
  </item>`;
}

/**
 * Builds a full RSS 2.0 <channel> document.
 * channel: { title, link, description, language, selfUrl, imageUrl(optional) }
 * items: array of item objects (see buildItemXml)
 */
export function buildRssXml(channel, items) {
  const now = new Date().toUTCString();

  const imageXml = channel.imageUrl
    ? `\n  <image>\n    <url>${escapeXml(channel.imageUrl)}</url>\n    <title>${escapeXml(
        channel.title
      )}</title>\n    <link>${escapeXml(channel.link)}</link>\n  </image>`
    : "";

  const itemsXml = items.map(buildItemXml).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:media="http://search.yahoo.com/mrss/">
<channel>
  <title>${escapeXml(channel.title)}</title>
  <link>${escapeXml(channel.link)}</link>
  <atom:link href="${escapeXml(channel.selfUrl)}" rel="self" type="application/rss+xml" />
  <description>${escapeXml(channel.description)}</description>
  <language>${escapeXml(channel.language || "en-us")}</language>
  <lastBuildDate>${now}</lastBuildDate>
  <generator>cryptonewstrend RSS engine</generator>${imageXml}
${itemsXml}
</channel>
</rss>`;
}

/**
 * Builds an OPML 2.0 document — the real standard for "a list of feeds",
 * used by feed readers to bulk-subscribe. This is the RSS equivalent of
 * a sitemapindex (RSS itself has no native "index of feeds" format).
 * feeds: [{ title, xmlUrl, htmlUrl }]
 */
export function buildOpmlIndex(siteTitle, feeds) {
  const outlines = feeds
    .map(
      (f) =>
        `    <outline type="rss" text="${escapeXml(f.title)}" title="${escapeXml(
          f.title
        )}" xmlUrl="${escapeXml(f.xmlUrl)}" htmlUrl="${escapeXml(f.htmlUrl)}" />`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <title>${escapeXml(siteTitle)}</title>
  </head>
  <body>
${outlines}
  </body>
</opml>`;
}

export function rssResponse(xmlString) {
  return new Response(xmlString, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}

export function opmlResponse(xmlString) {
  return new Response(xmlString, {
    headers: {
      "Content-Type": "text/x-opml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}