import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];
const CONTENT_TYPES = ["news", "whales", "ico", "events", "coin-analysis"];

// Extensive Multilingual Text Content Matrix
const LOCALIZED_SITEMAPS_TEXT = {
  en: {
    title: "Search Engine Sitemap Directory",
    subtitle: "Comprehensive structural index maps containing real-time decentralized content layers for core crawlers and system architectures.",
    lastUpdated: "Last structured: June 2026",
    masterTitle: "Master Index Gateway",
    masterDesc: "This is the primary automated blueprint URL you submit to Google Search Console or Bing Webmaster Tools to synchronize all data layers instantly.",
    masterBtn: "Copy Master Sitemap URL",
    news: "News Pipeline",
    whales: "Whale Alerts Track",
    ico: "Active ICO Data",
    events: "Blockchain Events",
    "coin-analysis": "Coin Analysis & Glossary",
    copyBtn: "Copy URL",
    copiedText: "Copied!",
    visitBtn: "Open XML",
    staticTitle: "Core Infrastructure Layout",
    staticDesc: "Contains fixed operational targets, static directory nodes, and localized core landing assets.",
    metaDesc: "Access the complete XML Sitemap and engine crawler directory of CryptoNewsTrend. Optimized multi-lingual index arrays for search engines."
  },
  ur: {
    title: "سرچ انجن سائٹ میپ ڈائریکٹری",
    subtitle: "بنیادی کرالرز اور سسٹم آرکیٹیکچرز کے لیے ریئل ٹائم ڈی سینٹرلائزڈ مواد پر مشتمل جامع ساختی انڈیکس نقشے ۔",
    lastUpdated: "آخری ترتیب: جون 2026",
    masterTitle: "ماسٹر انڈیکس گیٹ وے",
    masterDesc: "یہ وہ بنیادی آٹومیٹڈ یو آر ایل (URL) ہے جسے آپ تمام ڈیٹا لیئرز کو فوری طور پر ہم آہنگ کرنے کے لیے گوگل سرچ کنسول یا بنگ ویب ماسٹر ٹولز میں سبمٹ کرتے ہیں۔",
    masterBtn: "ماسٹر سائٹ میپ کاپی کریں",
    news: "کرپٹو نیوز پائپ لائن",
    whales: "وھیل الرٹس ٹریک",
    ico: "ایکٹو ICO ڈیٹا",
    events: "بلاک چین ایونٹس",
    "coin-analysis": "کوائن اینالیسس اور لغت",
    copyBtn: "لنک کاپی کریں",
    copiedText: "کاپی ہو گیا!",
    visitBtn: "XML کھولیں",
    staticTitle: "بنیادی انفراسٹرکچر لے آؤٹ",
    staticDesc: "اس میں فکسڈ آپریشنل ٹارگٹس، اسٹیٹک ڈائریکٹری نوڈس، اور مقامی بنیادی لینڈنگ اثاثے شامل ہیں۔",
    metaDesc: "CryptoNewsTrend کی مکمل XML سائٹ میپ اور انجن کرالر ڈائریکٹری تک رسائی حاصل کریں۔"
  },
  es: {
    title: "Directorio de Sitemaps para Motores de Búsqueda",
    subtitle: "Mapas de índices estructurales completos que contienen capas de contenido descentralizado en tiempo real para rastreadores centrales.",
    lastUpdated: "Última estructuración: Junio 2026",
    masterTitle: "Pasarela del Índice Maestro",
    masterDesc: "Esta es la URL del plano automatizado principal que envía a Google Search Console para sincronizar todas las capas de datos al instante.",
    masterBtn: "Copiar URL del Sitemap Maestro",
    news: "Canal de Noticias",
    whales: "Alertas de Ballenas",
    ico: "Datos de ICO Activos",
    events: "Eventos Blockchain",
    "coin-analysis": "Análisis de Monedas",
    copyBtn: "Copiar URL",
    copiedText: "¡Copiado!",
    visitBtn: "Abrir XML",
    staticTitle: "Diseño de Infraestructura Principal",
    staticDesc: "Contiene objetivos operativos fijos, nodos de directorio estáticos y activos de aterrizaje principales localizados.",
    metaDesc: "Acceda al directorio completo de mapas de sitio XML de CryptoNewsTrend."
  },
  ru: {
    title: "Каталог Карт Сайта для Поисковых Систем",
    subtitle: "Комплексные структурные индексные карты, содержащие децентрализованные уровни контента в реальном времени для основных поисковых роботов.",
    lastUpdated: "Последнее структурирование: Июнь 2026",
    masterTitle: "Главный Шлюз Индекса",
    masterDesc: "Это основной автоматизированный URL-адрес схемы, который вы отправляете в Google Search Console для мгновенной синхронизации всех уровней данных.",
    masterBtn: "Копировать Главный Sitemap",
    news: "Лента Новостей",
    whales: "Отслеживание Китов",
    ico: "Активные Данные ICO",
    events: "Блокчейн События",
    "coin-analysis": "Анализ Монет и Словарь",
    copyBtn: "Копировать URL",
    copiedText: "Скопировано!",
    visitBtn: "Открыть XML",
    staticTitle: "Основной Макет Инфраструктуры",
    staticDesc: "Содержит фиксированные операционные цели, статические узлы каталогов и локализованные целевые ресурсы.",
    metaDesc: "Полный каталог XML-карт сайтов от CryptoNewsTrend для поисковых систем."
  },
  fr: {
    title: "Répertoire des Sitemaps pour Moteurs de Recherche",
    subtitle: "Cartes d'index structurelles complètes contenant des couches de contenu décentralisé en temps real pour les robots d'indexation.",
    lastUpdated: "Dernière structuration : Juin 2026",
    masterTitle: "Passerelle de l'Index Maître",
    masterDesc: "Il s'agit de l'URL du plan automatisé principal que vous soumettez à Google Search Console pour synchroniser instantanément toutes les couches de données.",
    masterBtn: "Copier l'URL du Sitemap Maître",
    news: "Flux d'Actualités",
    whales: "Suivi des Baleines",
    ico: "Données ICO Actives",
    events: "Événements Blockchain",
    "coin-analysis": "Analyse des Pièces",
    copyBtn: "Copier l'URL",
    copiedText: "Copié !",
    visitBtn: "Ouvrir XML",
    staticTitle: "Disposition de l'Infrastructure de Base",
    staticDesc: "Contiene des cibles opérationnelles fixes, des nœuds de répertoire statiques et des actifs de destination localisés.",
    metaDesc: "Accédez au répertoire complet des sitemaps XML de CryptoNewsTrend."
  },
  de: {
    title: "Suchmaschinen-Sitemap-Verzeichnis",
    subtitle: "Umfassende strukturelle Indexkarten mit dezentralen Echtzeit-Inhaltsebenen für Core-Crawler.",
    lastUpdated: "Zuletzt strukturiert: Juni 2026",
    masterTitle: "Master-Index-Gateway",
    masterDesc: "Dies ist die primäre automatisierte Blueprint-URL, die Sie an die Google Search Console übermitteln, um alle Datenebenen sofort zu synchronisieren.",
    masterBtn: "Master-Sitemap-URL kopieren",
    news: "Nachrichten-Pipeline",
    whales: "Wal-Alarme-Tracker",
    ico: "Aktive ICO-Daten",
    events: "Blockchain-Events",
    "coin-analysis": "Münzanalyse & Glossar",
    copyBtn: "URL kopieren",
    copiedText: "Kopiert!",
    visitBtn: "XML öffnen",
    staticTitle: "Kerninfrastruktur-Layout",
    staticDesc: "Enthält feste operative Ziele, statische Verzeichnisknoten und lokalisierte Core-Landing-Assets.",
    metaDesc: "Greifen Sie auf das vollständige XML-Sitemap-Verzeichnis von CryptoNewsTrend."
  },
  ar: {
    title: "دليل خرائط الموقع لمحركات البحث",
    subtitle: "خرائط فهرس هيكلية شاملة تحتوي على طبقات محتوى لامركزية في الوقت الفعلي لبرامج الزحف الأساسية.",
    lastUpdated: "آخر تنسيق: يونيو 2026",
    masterTitle: "بوابة الفهرس الرئيسي",
    masterDesc: "هذا هو عنوان URL المخطط الآلي الأساسي الذي ترسله إلى Google Search Console لمزامنة جميع طبقات البيانات على الفور.",
    masterBtn: "نسخ رابط خريطة الموقع الرئيسية",
    news: "قناة الأخبار",
    whales: "تتبع تنبيهات الحيتان",
    ico: "بيانات ICO النشطة",
    events: "فعاليات البلوكشين",
    "coin-analysis": "تحلیل العملات والمصطلحات",
    copyBtn: "نسخ الرابط",
    copiedText: "تم النسخ!",
    visitBtn: "فتح XML",
    staticTitle: "تخطيط البنية التحتية الأساسية",
    staticDesc: "يحتوي على أهداف تشغيلية ثابتة، وعقد دليل ثابتة، وأصول هبوط أساسية مخصصة.",
    metaDesc: "الوصول إلى دليل خرائط مواقع XML الكامل لمحركات البحث من CryptoNewsTrend."
  },
  zh: {
    title: "搜索引擎站点地图联合目录",
    subtitle: "包含用于核心爬虫系统和架构的实时去中心化内容层的综合结构索引映射图生态。",
    lastUpdated: "最后结构化时间：2026年6月",
    masterTitle: "主索引网关入口",
    masterDesc: "这是您提交给 Google Search Console 的主要自动化蓝图 URL，用于瞬间同步所有底层核心数据网络。",
    masterBtn: "复制主站点地图 URL",
    news: "新闻数据流",
    whales: "巨鲸交易追踪",
    ico: "活跃 ICO 数据集",
    events: "区块链重大活动",
    "coin-analysis": "代币深度分析与词典",
    copyBtn: "复制链接",
    copiedText: "已复制！",
    visitBtn: "打开 XML",
    staticTitle: "核心基础架构配置布局",
    staticDesc: "包含固定的运营静态节点、基础目录索引以及本地化核心落地资产链接。",
    metaDesc: "访问完整的 CryptoNewsTrend 搜索引擎 XML 站点地图分发索引目录。"
  }
};

export async function generateMetadata({ params }) {
  // Direct default-fall through fallback initialization
    const {locale}=await params
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en"; 
  const t = LOCALIZED_SITEMAPS_TEXT[currentLocale];

  return {
    title: `${t.title} - ${SITE_NAME}`,
    description: t.metaDesc,
    robots: { index: true, follow: true },
    alternates: { 
      canonical: `${SITE_URL}${currentLocale === "en" ? "" : `/${currentLocale}`}/sitemaps-directory` 
    }
  };
}

export default function SitemapsDirectoryPage({ params }) {
  // Guaranteed static structural fallback initialization logic for layout safety
    const {locale}=await params
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en"; 
  
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const t = LOCALIZED_SITEMAPS_TEXT[currentLocale];

  const masterSitemapUrl = `${SITE_URL}/sitemap.xml`;
  const staticSitemapUrl = `${SITE_URL}/sitemaps/static.xml`;

  // Encapsulated pure vanilla client execution script bundle
  const inlineScript = `
    function copyUrl(btn, url) {
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

  return (
    <>
      <Script id="sitemap-copy-engine" dangerouslySetInnerHTML={{ __html: inlineScript }} />
      
      <main 
        className="min-h-screen bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 py-16 md:py-24 transition-colors duration-200"
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
      >
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header Section */}
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

          {/* Core Master Module Callout Row */}
          <div className="bg-gradient-to-br from-blue-600/5 to-transparent border border-blue-500/20 dark:border-blue-500/10 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                {t.masterTitle}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.masterDesc}
              </p>
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 p-2 rounded border border-blue-500/10 select-all truncate">
                {masterSitemapUrl}
              </p>
            </div>
            <button 
              data-orig={t.masterBtn}
              data-copied={t.copiedText}
              onclick={`copyUrl(this, '${masterSitemapUrl}')`}
              className="w-full md:w-auto shrink-0 text-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl tracking-wide shadow-lg shadow-blue-500/10 transition-all active:scale-95"
            >
              {t.masterBtn}
            </button>
          </div>

          {/* Static Infrastructure Registry Record */}
          <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800/60 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 font-sans">{t.staticTitle}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{t.staticDesc}</p>
              <span className="text-xs font-mono text-gray-400 dark:text-gray-500 block truncate">{staticSitemapUrl}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
              <a href={staticSitemapUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                {t.visitBtn}
              </a>
              <button 
                data-orig={t.copyBtn} data-copied={t.copiedText}
                onclick={`copyUrl(this, '${staticSitemapUrl}')`}
                className="px-3 py-1.5 text-xs font-bold bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all"
              >
                {t.copyBtn}
              </button>
            </div>
          </div>

          {/* Nested Array Content Structural Maps */}
          <div className="space-y-12">
            {CONTENT_TYPES.map((type) => (
              <div key={type} className="border-t border-gray-100 dark:border-gray-800/80 pt-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 capitalize flex items-center gap-2">
                  <span className="w-1.5 h-3 bg-blue-500 rounded-full"></span>
                  {t[type] || type}
                </h2>
                
                <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800/60">
                  <table className="w-full text-left border-collapse" dir="ltr">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider font-mono border-b border-gray-100 dark:border-gray-800">
                        <th className="px-4 py-3 text-center w-20">Locale</th>
                        <th className="px-4 py-3">Chunk Sitemaps Targets (Chunk 1)</th>
                        <th className="px-4 py-3 text-right w-44">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800/50 text-sm font-mono">
                      {VALID_LOCALES.map((loc) => {
                        const targetChunkUrl = `${SITE_URL}/sitemaps/${type}/${loc}/1.xml`;
                        
                        return (
                          <tr key={`${type}-${loc}`} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                            <td className="px-4 py-3 text-center">
                              <span className="px-2 py-0.5 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded">
                                {loc.toUpperCase()}
                              </span>
                            </td>
                            <td className="px-4 py-3 truncate max-w-md text-xs text-gray-600 dark:text-gray-400 select-all">
                              {targetChunkUrl}
                            </td>
                            <td className="px-4 py-3 text-right whitespace-nowrap">
                              <div className="inline-flex items-center gap-3">
                                <a 
                                  href={targetChunkUrl} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="text-xs font-medium font-sans text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                                >
                                  {t.visitBtn}
                                </a>
                                <button 
                                  data-orig={t.copyBtn} 
                                  data-copied={t.copiedText}
                                  onclick={`copyUrl(this, '${targetChunkUrl}')`}
                                  className="px-2.5 py-1 text-xs font-bold font-sans bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all"
                                >
                                  {t.copyBtn}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}