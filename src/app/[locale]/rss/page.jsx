import Link from "next/link";
import Script from "next/script";
import CopyFeedButton from "@/components/CopyFeedButton";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// Extensive Multilingual Text Content Matrix for the Feeds Directory Page
const LOCALIZED_FEEDS_TEXT = {
  en: {
    title: "RSS Syndication Directory",
    subtitle: "Incorporate live decentralized market telemetry, real-time analytics, and blockchain intelligence directly into your custom endpoints or news aggregators.",
    lastUpdated: "Last synchronized: June 2026",
    opmlTitle: "Master OPML Package",
    opmlDesc: "Download our global OPML layout tree to instantly inject all multi-lingual crypto and event syndication pipelines into professional platforms like Feedly, Inoreader, or RSS Owl.",
    opmlBtn: "Download All Feeds (OPML)",
    newsSection: "Cryptocurrency News Pipelines",
    eventsSection: "Global Blockchain Events Matrix",
    copyBtn: "Copy RSS Link",
    copiedText: "Copied!",
    visitBtn: "View Page",
    metaDesc: "Access the complete RSS and OPML automation directory of CryptoNewsTrend. Real-time multi-lingual crypto analytics streams for terminal clients and aggregators."
  },
  ur: {
    title: "آر ایس ایس (RSS) فیڈز ڈائریکٹری",
    subtitle: "لائیو ڈی سینٹرلائزڈ مارکیٹ ڈیٹا، ریئل ٹائم اینالیٹکس، اور بلاک چین انٹیلیجنس کو براہ راست اپنے کسٹم سسٹمز یا نیوز ایگریگیٹرز میں شامل کریں۔",
    lastUpdated: "آخری ہم آہنگی: جون 2026",
    opmlTitle: "ماسٹر OPML پیکیج",
    opmlDesc: "ہماری عالمی OPML فائل ڈاؤن لوڈ کریں تاکہ تمام زبانوں کی کرپٹو اور ایونٹ فیڈز کو Feedly، Inoreader، یا دیگر پروفیشنل پلیٹ فارمز میں ایک ہی کلک میں امپورٹ کیا جا سکے۔",
    opmlBtn: "تمام فیڈز ڈاؤن لوڈ کریں (OPML)",
    newsSection: "کرپٹو کرنسی نیوز پائپ لائنز",
    eventsSection: "عالمی بلاک چین ایونٹس میٹرکس",
    copyBtn: "لنک کاپی کریں",
    copiedText: "کاپی ہو گیا!",
    visitBtn: "صفحہ دیکھیں",
    metaDesc: "CryptoNewsTrend کی مکمل RSS اور OPML آٹومیشن ڈائریکٹری تک رسائی حاصل کریں۔ ریئل ٹائم ملٹی لنگول کرپٹو ڈیٹا اسٹریمز۔"
  },
  es: {
    title: "Directorio de Sindicación RSS",
    subtitle: "Incorpore telemetría de mercado descentralizada, análisis en tiempo real e inteligencia de blockchain directamente en sus agregadores de noticias.",
    lastUpdated: "Última sincronización: Junio 2026",
    opmlTitle: "Paquete Maestro OPML",
    opmlDesc: "Descargue nuestro árbol OPML global para inyectar instantáneamente todas las fuentes de criptomonedas y eventos en plataformas profesionales.",
    opmlBtn: "Descargar Todas las Fuentes (OPML)",
    newsSection: "Canales de Noticias de Criptomonedas",
    eventsSection: "Matriz de Eventos Globales de Blockchain",
    copyBtn: "Copiar Enlace RSS",
    copiedText: "¡Copiado!",
    visitBtn: "Ver Página",
    metaDesc: "Acceda al directorio completo de automatización RSS y OPML de CryptoNewsTrend."
  },
  ru: {
    title: "Каталог Синдикации RSS",
    subtitle: "Интегрируйте децентрализованную рыночную телеметрию и аналитику блокчейна в реальном времени непосредственно в свои агрегаторы новостей.",
    lastUpdated: "Последняя синхронизация: Июнь 2026",
    opmlTitle: "Мастер-пакет OPML",
    opmlDesc: "Загрузите наш глобальный файл OPML, чтобы мгновенно импортировать все мультиязычные криптовалютные потоки в такие платформы, как Feedly.",
    opmlBtn: "Скачать Все Фиды (OPML)",
    newsSection: "Ленты Новостей Криптовалют",
    eventsSection: "Матрица Мировых Блокчейн-Событий",
    copyBtn: "Копировать RSS",
    copiedText: "Скопировано!",
    visitBtn: "Открыть",
    metaDesc: "Полный каталог автоматизации RSS и OPML от CryptoNewsTrend."
  },
  fr: {
    title: "Répertoire de Syndication RSS",
    subtitle: "Incorporez la télémétrie du marché décentralisé et l'intelligence de la blockchain directement dans vos agrégateurs de nouvelles.",
    lastUpdated: "Dernière synchronisation : Juin 2026",
    opmlTitle: "Package Maître OPML",
    opmlDesc: "Téléchargez notre arbre OPML global pour injecter instantanément tous les flux de crypto et d'événements dans des plateformes professionnelles.",
    opmlBtn: "Télécharger les Flux (OPML)",
    newsSection: "Flux d'Actualités Crypto",
    eventsSection: "Matrice des Événements Blockchain",
    copyBtn: "Copier le Lien RSS",
    copiedText: "Copié !",
    visitBtn: "Voir la Page",
    metaDesc: "Accédez au répertoire complet d'automatisation RSS et OPML de CryptoNewsTrend."
  },
  de: {
    title: "RSS-Syndikationsverzeichnis",
    subtitle: "Integrieren Sie dezentrale Marktelemetrie und Blockchain-Analysen in Echtzeit direkt in Ihre News-Aggregatoren.",
    lastUpdated: "Zuletzt synchronisiert: Juni 2026",
    opmlTitle: "Master-OPML-Paket",
    opmlDesc: "Laden Sie unseren globalen OPML-Baum herunter, um alle mehrsprachigen Krypto- und Event-Feeds in professionelle Plattformen zu importieren.",
    opmlBtn: "Alle Feeds herunterladen (OPML)",
    newsSection: "Kryptowährungs-News-Feeds",
    eventsSection: "Globale Blockchain-Events-Matrix",
    copyBtn: "RSS-Link kopieren",
    copiedText: "Kopiert!",
    visitBtn: "Seite anzeigen",
    metaDesc: "Greifen Sie auf das vollständige RSS- und OPML-Automatisierungsverzeichnis von CryptoNewsTrend zu."
  },
  ar: {
    title: "دليل خلاصة RSS الموحد",
    subtitle: "قم بدمج قياس السوق اللامركزي المباشر والتحليلات في الوقت الفعلي واستخبارات البلوكشين مباشرة في مجمعات الأخبار الخاصة بك.",
    lastUpdated: "آخر مزامنة: يونيو 2026",
    opmlTitle: "حزمة OPML الرئيسية",
    opmlDesc: "قم بتنزيل ملف OPML العالمي الخاص بنا لحقن جميع خلاصات العملات المشفرة والفعاليات متعددة اللغات على الفور في المنصات الاحترافية.",
    opmlBtn: "تحميل جميع الخلاصات (OPML)",
    newsSection: "قنوات أخبار العملات المشفرة",
    eventsSection: "مصفوفة فعاليات البلوكشين العالمية",
    copyBtn: "نسخ رابط RSS",
    copiedText: "تم النسخ!",
    visitBtn: "عرض الصفحة",
    metaDesc: "الوصول إلى دليل أتمتة RSS و OPML الكامل من CryptoNewsTrend."
  },
  zh: {
    title: "RSS 聚合分发联合目录",
    subtitle: "将去中心化市场的即时遥测、实时数据分析和区块链情报直接整合到您的自定义终端或新闻聚合器中。",
    lastUpdated: "最后同步时间：2026年6月",
    opmlTitle: "主 OPML 配置文件包",
    opmlDesc: "下载我们的全球 OPML 配置树，瞬间将所有多语言加密与活动聚合分发管道注入 Feedly 或 Inoreader 等专业平台。",
    opmlBtn: "下载所有订阅源 (OPML)",
    newsSection: "加密货币新闻数据流管道",
    eventsSection: "全球区块链活动矩阵",
    copyBtn: "复制 RSS 链接",
    copiedText: "已复制！",
    visitBtn: "访问页面",
    metaDesc: "访问完整的 CryptoNewsTrend RSS 和 OPML 自动化索引分发目录。"
  }
};

// Metadata mapping generator
export async function generateMetadata({ params }) {
  const { locale = "en" } = await params;
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const t = LOCALIZED_FEEDS_TEXT[currentLocale] || LOCALIZED_FEEDS_TEXT["en"];

 const canonical =
  currentLocale === "en"
    ? `${SITE_URL}/rss`
    : `${SITE_URL}/${currentLocale}/rss`;

  return {
    title: `${t.title} - ${SITE_NAME}`,
    description: t.metaDesc,
    robots: { index: true, follow: true },
    alternates: {
  canonical,
  languages: {
    en: `${SITE_URL}/rss`,
    ur: `${SITE_URL}/ur/rss`,
    es: `${SITE_URL}/es/rss`,
    ru: `${SITE_URL}/ru/rss`,
    fr: `${SITE_URL}/fr/rss`,
    de: `${SITE_URL}/de/rss`,
    ar: `${SITE_URL}/ar/rss`,
    zh: `${SITE_URL}/zh/rss`,
    "x-default": `${SITE_URL}/rss`,
  },
},
openGraph: {
  type: "website",
  title: `${t.title} - ${SITE_NAME}`,
  description: t.metaDesc,
  url: canonical,
  siteName: SITE_NAME,
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: `${t.title} - ${SITE_NAME}`,
  description: t.metaDesc,
  images: [`${SITE_URL}/og-image.png`],
},
  };
}

export  default async function FeedsDirectoryPage({ params }) {
  const { locale = "en" } = await params;
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const t = LOCALIZED_FEEDS_TEXT[currentLocale] || LOCALIZED_FEEDS_TEXT["en"];

  // Mapping out URLs cleanly using architecture specified
const generateFeedDataSet = (type) => {
  return VALID_LOCALES.map((loc) => {
    const prefix = loc === "en" ? "" : `/${loc}`;

    // ✅ FIX — matches actual OPML file URL pattern:
    // en   -> /rss/news.xml or /rss/events.xml
    // other-> /rss/news/{loc}.xml or /rss/events/{loc}.xml
    const xmlUrl = loc === "en"
      ? `${SITE_URL}/feeds/${type}.xml`
      : `${SITE_URL}/feeds/${type}/${loc}.xml`;

    const htmlUrl = type === "news"
      ? `${SITE_URL}/feeds/${type}.xml`
      : `${SITE_URL}/feeds/${type}/${loc}.xml`;

    return {
      localeName: loc.toUpperCase(),
      xmlUrl,
      htmlUrl,
      label: `${SITE_NAME} — ${type} (${loc.toUpperCase()})`
    };
  });
};

  const newsFeeds = generateFeedDataSet("news");
  const eventsFeeds = generateFeedDataSet("events");

  // Pure JavaScript optimization injection for clipboard actions without heavy packages
  const inlineCopyScript = `
    function copyFeedUrl(btn, url) {
      navigator.clipboard.writeText(url).then(() => {
        const origText = btn.getAttribute('data-orig');
        const copiedText = btn.getAttribute('data-copied');
        btn.innerText = copiedText;
        btn.classList.remove('bg-gray-100','dark:bg-gray-800','text-gray-700','dark:text-gray-300');
        btn.classList.add('bg-green-600','text-white');
        setTimeout(() => {
          btn.innerText = origText;
          btn.classList.remove('bg-green-600','text-white');
          btn.classList.add('bg-gray-100','dark:bg-gray-800','text-gray-700','dark:text-gray-300');
        }, 2000);
      });
    }
  `;
const canonical =
  currentLocale === "en"
    ? `${SITE_URL}/rss`
    : `${SITE_URL}/${currentLocale}/rss`;
  return (
    <>
    <Script
  id="feeds-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: t.title,
      url: canonical,
      description: t.metaDesc,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL
      }
    })
  }}
/>
      
      <main 
        className="min-h-screen bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 py-16 md:py-24 transition-colors duration-200"
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header Layout */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>
            <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mt-4">
              {t.lastUpdated}
            </p>
          </div>

          {/* Master OPML Download Box */}
          <div className="bg-gradient-to-br from-orange-500/5 to-transparent border border-orange-500/20 dark:border-orange-500/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                {t.opmlTitle}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.opmlDesc}
              </p>
            </div>
            <a 
              href="/rss.xml" 
              download="cryptonewstrend-all-feeds.opml"
              className="w-full md:w-auto text-center px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl tracking-wide shadow-lg shadow-orange-500/10 transition-all duration-150 active:scale-95"
            >
              {t.opmlBtn}
            </a>
          </div>

          {/* News Feed Stream Segment */}
          <div className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2zm-4 8H7v-2h6v2z"/></svg>
              {t.newsSection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsFeeds.map((feed) => (
                <div key={`news-${feed.localeName}`} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/60 p-4 rounded-xl flex items-center justify-between gap-4 hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-xs font-bold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded font-mono">
                        {feed.localeName}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate font-mono">
                        {feed.label}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate font-mono">{feed.xmlUrl}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link href={feed.htmlUrl} className="p-2 text-xs font-medium text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                      {t.visitBtn}
                    </Link>
                   <CopyFeedButton url={feed.xmlUrl} label={t.copyBtn} copiedLabel={t.copiedText} />

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Feed Stream Segment */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
              {t.eventsSection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventsFeeds.map((feed) => (
                <div key={`events-${feed.localeName}`} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/60 p-4 rounded-xl flex items-center justify-between gap-4 hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 text-xs font-bold bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded font-mono">
                        {feed.localeName}
                      </span>
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate font-mono">
                        {feed.label}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 truncate font-mono">{feed.xmlUrl}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link href={feed.htmlUrl} className="p-2 text-xs font-medium text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">
                      {t.visitBtn}
                    </Link>
                <CopyFeedButton url={feed.xmlUrl} label={t.copyBtn} copiedLabel={t.copiedText} />

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}