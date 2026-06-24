import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// Complete Localized Matrix for Advertisement & Sponsorships
// Complete Multilingual Matrix for Advertisement & Sponsorships
const LOCALIZED_ADVERTISE = {
  en: {
    title: "Advertise With Us",
    lastUpdated: "Media Kit Updated: June 2026",
    intro: `Accelerate your Web3 project, DeFi protocol, or centralized platform growth. Connect directly with thousands of high-intent daily cryptocurrency investors, web3 developers, and active market whales browsing global tech telemetry analytics across ${SITE_NAME}.`,
    statsTitle: "Platform Reach & Core Traffic Metrics",
    stat1Label: "Monthly Pageviews",
    stat1Val: "1.2M+",
    stat2Label: "Unique Active Traders",
    stat2Val: "450K+",
    stat3Label: "Avg Session Timeout",
    stat3Val: "4.2m",
    stat4Label: "Top Regional Audiences",
    stat4Val: "US / EU / UAE",
    optionsTitle: "Premium Sponsorship & Campaign Vectors",
    opt1Title: "Display Banners & Telemetry Takeovers",
    opt1Desc: "High-visibility leaderboard placements (728x90) or sticky sidebar modules strategically nested inside our dynamic coin indices, index analytics, and live breaking feeds.",
    opt2Title: "Sponsored Press Releases & Editorial Spots",
    opt2Desc: "Distribute comprehensive Web3 announcements, token listing metrics, or tokenomic updates directly into our main localized algorithmic news nodes.",
    opt3Title: "Whale Tracker & UI Native Spotlights",
    opt3Desc: "Exclusively pin or spotlight your project native coin right inside our custom analytical whale movement logs or real-time ticker layouts for ultimate conversion.",
    auditTitle: "Strict Compliance & Editorial Vetting Policy",
    auditDesc: "To safeguard our global community, we do not onboard anonymous rug-pull architectures, dynamic honeypot smart contracts, unverified presales, or projects promoting misleading APY parameters. All prospective smart contract deployments must supply valid public auditing logs.",
    ctaTitle: "Initiate Your Advertising Campaign",
    ctaDesc: "Ready to launch your promotional deployment? Contact our institutional sales and media relations desk directly via email with your pitch assets and preferred formats:",
    compTitle: "Corporate & Compliance Resources"
  },
  ur: {
    title: "ہمارے ساتھ اشتہارات چلائیں",
    lastUpdated: "میڈیا کٹ اپڈیٹ: جون 2026",
    intro: `اپنے Web3 پروجیکٹ، DeFi پروٹوکول، یا کرپٹو پلیٹ فارم کی ترقی کو تیز کریں۔ روزانہ ہزاروں ہائی انٹنٹ کرپٹو کرنسی سرمایہ کاروں، ویب3 ڈویلپرز، اور مارکیٹ کے فعال وہیلز (Whales) سے براہ راست جڑیں جو ${SITE_NAME} پر لائیو اینالیٹکس مانیٹر کرتے ہیں۔`,
    statsTitle: "پلیٹ فارم کی پہنچ اور بنیادی ٹریفک میٹرکس",
    stat1Label: "ماہانہ پیج ویوز",
    stat1Val: "1.2M+",
    stat2Label: "منفرد فعال تاجر",
    stat2Val: "450K+",
    stat3Label: "اوسط سیشن کا وقت",
    stat3Val: "4.2m",
    stat4Label: "سرفہرست علاقائی سامعین",
    stat4Val: "US / EU / UAE",
    optionsTitle: "پریمیم سپانسرشپ اور مہم کے طریقے",
    opt1Title: "ڈسپلے بینرز اور لے آؤٹ ٹیک اوور",
    opt1Desc: "ہمارے لائیو کوائن انڈیکسز، تجزیاتی چارٹس اور بریکنگ نیوز فیڈز کے اندر اسٹریٹجک مقامات پر ہائی ویزیبلٹی لیڈر بورڈ بینرز (728x90) یا اسٹیکی سائیڈ بار ماڈیولز۔",
    opt2Title: "اسپانسر شدہ پریس ریلیز اور ایڈیٹوریل آرٹیکلز",
    opt2Desc: "اپنی اہم Web3 اعلانات، ٹوکن لسٹنگ کی معلومات، یا ٹوکنومکس کی تفصیلات براہ راست ہمارے لوکلائزڈ نیوز نوڈس اور مین فیڈز میں شائع کریں۔",
    opt3Title: "وہیل ٹریکر اور یو آئی نیٹو اسپاٹ لائٹس",
    opt3Desc: "بہترین کنورژن حاصل کرنے کے لیے اپنے پروجیکٹ کے آفیشل ٹوکن کو ہمارے کسٹم وہیل موومنٹ لاگز یا ریئل ٹائم ٹکر لے آؤٹس کے اندر نمایاں کریں۔",
    auditTitle: "سخت تعمیل اور ایڈیٹوریل ویٹنگ پالیسی",
    auditDesc: "ہماری عالمی کمیونٹی کو محفوظ رکھنے کے لیے، ہم کسی بھی نامعلوم رگ پل (Rug-pull) پراجیکٹس، ہنی پاٹ اسمارٹ کنٹریکٹس، غیر تصدیق شدہ پری سیلز، یا گمراہ کن منافع (APY) کا دعویٰ کرنے والی اسکیموں کو فروغ نہیں دیتے۔ تمام مہمات کے لیے اسمارٹ کنٹریکٹ آڈٹ فراہم کرنا لازمی ہے۔",
    ctaTitle: "اپنی اشتہاری مہم شروع کریں",
    ctaDesc: "اپنی مہم شروع کرنے کے لیے تیار ہیں؟ اپنے پروجیکٹ کے اثاثوں اور مطلوبہ اشتہاری فارمیٹ کے ساتھ براہ راست ہماری میڈیا سیلز ٹیم سے ایمیل کے ذریعے رابطہ کریں:",
    compTitle: "کارپوریٹ اور تعمیل کے وسائل"
  },
  es: {
    title: "Anúnciate con Nosotros",
    lastUpdated: "Kit de Medios Actualizado: Junio 2026",
    intro: `Acelera el crecimiento de tu proyecto Web3, protocolo DeFi o plataforma centralizada. Conéctate directamente con miles de inversores diarios de criptomonedas con alta intención de compra, desarrolladores web3 y ballenas activas del mercado que navegan por los análisis de telemetría técnica global en ${SITE_NAME}.`,
    statsTitle: "Alcance de la Plataforma y Métricas de Tráfico",
    stat1Label: "Páginas Vistas Mensuales",
    stat1Val: "1.2M+",
    stat2Label: "Comerciantes Activos Únicos",
    stat2Val: "450K+",
    stat3Label: "Tiempo Promedio de Sesión",
    stat3Val: "4.2m",
    stat4Label: "Principales Audiencias Regionales",
    stat4Val: "EE.UU. / UE / EAU",
    optionsTitle: "Patrocinios Premium y Vectores de Campaña",
    opt1Title: "Banners de Visualización y Control de Telemetría",
    opt1Desc: "Ubicaciones de tablas de clasificación de alta visibilidad (728x90) o módulos de barra lateral fijos ubicados estratégicamente dentro de nuestros índices dinámicos de monedas, análisis de índices y feeds de últimas noticias.",
    opt2Title: "Comunicados de Prensa Patrocinados y Espacios Editoriales",
    opt2Desc: "Distribuye anuncios completos de Web3, métricas de listado de tokens o actualizaciones de tokenomics directamente en nuestros nodos de noticias algorítmicos localizados principales.",
    opt3Title: "Rastreador de Ballenas y Destacados Nativos de la Interfaz",
    opt3Desc: "Fija o destaca exclusivamente la moneda nativa de tu proyecto directamente dentro de nuestros registros analíticos personalizados de movimiento de ballenas o diseños de tickers en tiempo real para una conversión óptima.",
    auditTitle: "Política Estricta de Cumplimiento y Revisión Editorial",
    auditDesc: "Para salvaguardar nuestra comunidad global, no aceptamos arquitecturas anónimas de rug-pull, contratos inteligentes de honeypot dinámicos, preventas no verificadas o proyectos que promuevan parámetros de APY engañosos. Todos los despliegues de contratos inteligentes deben proporcionar registros de auditoría públicos válidos.",
    ctaTitle: "Inicia tu Campaña Publicitaria",
    ctaDesc: "¿Listo para lanzar tu campaña promocional? Ponte en contacto con nuestro departamento de ventas institucionales y relaciones con los medios directamente por correo electrónico con tus activos de presentación y formatos preferidos:",
    compTitle: "Recursos Corporativos y de Cumplimiento"
  },
  ru: {
    title: "Реклама у Нас",
    lastUpdated: "Медиа-кит обновлен: Июнь 2026",
    intro: `Ускорьте рост вашего проекта Web3, протокола DeFi или централизованной платформы. Свяжитесь напрямую с тысячами ежедневных инвесторов в криптовалюту с высокими намерениями, разработчиками web3 и активными рыночными китами, просматривающими глобальную техническую телеметрию и аналитику на ${SITE_NAME}.`,
    statsTitle: "Охват Платформы и Ключевые Метрики Трафика",
    stat1Label: "Ежемесячные Просмотры Страниц",
    stat1Val: "1.2M+",
    stat2Label: "Уникальные Активные Трейдеры",
    stat2Val: "450K+",
    stat3Label: "Среднее Время Сессии",
    stat3Val: "4.2м",
    stat4Label: "Лучшие Региональные Аудитории",
    stat4Val: "США / ЕС / ОАЭ",
    optionsTitle: "Премиум-Спонсорство и Векторы Кампаний",
    opt1Title: "Баннерная Реклама и Брендинг Интерфейса",
    opt1Desc: "Высокозаметные рекламные перетяжки (728x90) или закрепленные модули в боковой панели, стратегически встроенные в наши динамические индексы монет, аналитику и ленты новостей.",
    opt2Title: "Спонсируемые Пресс-Релизы и Редакционные Места",
    opt2Desc: "Распространяйте комплексные анонсы Web3, показатели листинга токенов или обновления токеномики непосредственно в наших главных локализованных алгоритмических новостных узлах.",
    opt3Title: "Трекер Китов и Нативная Подсветка в UI",
    opt3Desc: "Эксклюзивно закрепите или подсветите нативный токен вашего проекта прямо внутри наших пользовательских аналитических логов перемещения китов или тикеров в реальном времени для максимальной конверсии.",
    auditTitle: "Строгая Политика Соответствия и Редакционной Проверки",
    auditDesc: "Чтобы защитить наше глобальное сообщество, мы не работаем с анонимными мошенническими схемами (rug-pull), динамическими смарт-контрактами типа 'honeypot', непроверенными предпродажами или проектами, обещающими ложные параметры APY. Все потенциальные смарт-контракты должны предоставить действующие публичные отчеты об аудите.",
    ctaTitle: "Запустить Рекламную Кампанию",
    ctaDesc: "Готовы запустить промо-кампанию? Свяжитесь с нашим отделом корпоративных продаж и связей со СМИ напрямую по электронной почте, указав ваши рекламные материалы и предпочтительные форматы:",
    compTitle: "Корпоративные Ресурсы и Правовое Соответствие"
  },
  fr: {
    title: "Publicité chez Nous",
    lastUpdated: "Kit Média Mis à Jour : Juin 2026",
    intro: `Accélérez la croissance de votre projet Web3, protocole DeFi ou plateforme centralisée. Connectez-vous directement avec des milliers d'investisseurs en crypto-monnaie quotidiens qualifiés, de développeurs web3 et de baleines du marché actives qui parcourent les analyses télémétriques techniques mondiales sur ${SITE_NAME}.`,
    statsTitle: "Audience de la Plateforme & Métriques de Trafic",
    stat1Label: "Pages Vues Mensuelles",
    stat1Val: "1.2M+",
    stat2Label: "Traders Actifs Uniques",
    stat2Val: "450K+",
    stat3Label: "Durée Moyenne de Session",
    stat3Val: "4.2m",
    stat4Label: "Principales Audiences Régionales",
    stat4Val: "US / UE / EAU",
    optionsTitle: "Sponsorings Premium & Vecteurs de Campagne",
    opt1Title: "Bannières d'Affichage & Intégration Visuelle",
    opt1Desc: "Emplacements de bannières publicitaires à haute visibilité (728x90) où modules latéraux collants stratégiquement intégrés dans nos indices de pièces dynamiques, analyses d'indices et flux d'actualités en direct.",
    opt2Title: "Communiqués de Presse Sponsorisés & Articles Éditoriaux",
    opt2Desc: "Diffusez des annonces Web3 complètes, des métriques de cotation de jetons ou des mises à jour de tokenomique directement dans nos principaux nœuds d'actualités algorithmiques localisés.",
    opt3Title: "Suivi des Baleines & Mises en Avant Natives",
    opt3Desc: "Épinglez ou mettez en avant exclusivement le jeton natif de votre projet directement dans nos journaux d'analyse personnalisés des mouvements de baleines ou nos configurations de téléscripteurs en temps réel pour une conversion ultime.",
    auditTitle: "Politique Stricte de Conformité & de Vérification Éditoriale",
    auditDesc: "Pour protéger notre communauté mondiale, nous n'acceptons pas les architectures anonymes de type rug-pull, los contrats intelligents de type honeypot, les préventes non vérifiées ou les projets faisant la promotion de paramètres d'APY trompeurs. Tous les déploiements de contrats intelligents potentiels doivent fournir des rapports d'audit publics valides.",
    ctaTitle: "Lancez Votre Campagne Publicitaire",
    ctaDesc: "Prêt à lancer votre campagne promotionnelle ? Contactez notre bureau des ventes institutionnelles et des relations médias directement par e-mail avec vos éléments de présentation et vos formats préférés :",
    compTitle: "Ressources Entreprise & Conformité"
  },
  de: {
    title: "Werben Sie bei Uns",
    lastUpdated: "Mediadaten Aktualisiert: Juni 2026",
    intro: `Beschleunigen Sie das Wachstum Ihres Web3-Projekts, DeFi-Protokolls oder Ihrer zentralisierten Plattform. Verbinden Sie sich direkt mit Tausenden von täglichen Krypto-Investoren mit hoher Kaufabsicht, Web3-Entwicklern und aktiven Markt-Whales, die die globalen technischen Telemetrie-Analysen auf ${SITE_NAME} durchsuchen.`,
    statsTitle: "Plattform-Reichweite & Kern-Traffic-Metriken",
    stat1Label: "Monatliche Seitenaufrufe",
    stat1Val: "1.2M+",
    stat2Label: "Einzigartige Aktive Trader",
    stat2Val: "450K+",
    stat3Label: "Durchschn. Sitzungsdauer",
    stat3Val: "4.2m",
    stat4Label: "Top Regionale Zielgruppen",
    stat4Val: "US / EU / VAE",
    optionsTitle: "Premium-Sponsoring & Kampagnen-Vektoren",
    opt1Title: "Display-Banner & Telemetrie-Takeovers",
    opt1Desc: "Gut sichtbare Leaderboard-Platzierungen (728x90) oder Sticky-Sidebar-Module, die strategisch in unseren dynamischen Krypto-Indizes, Index-Analysen und Live-News-Feeds integriert sind.",
    opt2Title: "Gesponserte Pressemitteilungen & Redaktionelle Plätze",
    opt2Desc: "Verteilen Sie umfassende Web3-Ankündigungen, Token-Listing-Metriken oder Tokenomics-Updates direkt in unseren wichtigsten lokalisierten algorithmischen News-Knoten.",
    opt3Title: "Whale-Tracker & Native UI-Spotlights",
    opt3Desc: "Heften oder markieren Sie den nativen Token Ihres Projekts exklusiv in unseren benutzerdefinierten analytischen Whale-Bewegungsprotokollen oder Echtzeit-Ticker-Layouts für maximale Konversion.",
    auditTitle: "Strikte Compliance- & Redaktionelle Prüfungsrichtlinien",
    auditDesc: "Zum Schutz unserer globalen Community akzeptieren wir keine anonymen Rug-Pull-Architekturen, dynamischen Honeypot-Smart-Contracts, unverifizierten Vorverkäufe oder Projekte, die irreführende APY-Parameter bewerben. Alle potenziellen Smart-Contract-Bereitstellungen müssen gültige öffentliche Audit-Protokolle vorlegen.",
    ctaTitle: "Starten Sie Ihre Werbekampagne",
    ctaDesc: "Bereit, Ihre Werbekampagne zu starten? Kontaktieren Sie unsere Abteilung für institutionellen Vertrieb und Medienbeziehungen direkt per E-Mail mit Ihren Pitch-Unterlagen und bevorzugten Formaten:",
    compTitle: "Unternehmens- & Compliance-Ressourcen"
  },
  ar: {
    title: "أعلن معنا",
    lastUpdated: "تم تحديث ملف الوسائط: يونيو 2026",
    intro: `سرّع نمو مشروع Web3 الخاص بك، أو بروتوكول DeFi، أو منصتك المركزية. تواصل مباشرة مع الآلاف من مستثمري العملات المشفرة اليوميين، ومطوري web3، وحيتان السوق النشطين الذين يتصفحون تحليلات التناظر عن بُعد التقنية العالمية عبر ${SITE_NAME}.`,
    statsTitle: "وصول المنصة ومقاييس حركة المرور الأساسية",
    stat1Label: "مشاهدات الصفحة الشهرية",
    stat1Val: "+1.2M",
    stat2Label: "المتداولون النشطون الفريدون",
    stat2Val: "+450K",
    stat3Label: "متوسط وقت الجلسة",
    stat3Val: "4.2m",
    stat4Label: "أهم الجمهور الإقليمي",
    stat4Val: "أمريكا / الاتحاد الأوروبي / الإمارات",
    optionsTitle: "الرعايات المميزة ومسارات الحملات",
    opt1Title: "اللافتات الإعلانية والاستحواذ على الواجهة",
    opt1Desc: "مواضع لافتات عالية الرؤية (728x90) أو وحدات شريط جانبي لاصقة مدمجة بشكل استراتيجي داخل مؤشرات العملات الديناميكية، وتحليلات المؤشرات، وموجزات الأخبار العاجلة المباشرة.",
    opt2Title: "البيانات الصحفية الممولة والمساحات التحريرية",
    opt2Desc: "انشر إعلانات Web3 الشاملة، أو مقاييس إدراج العملات، أو تحديثات التوكنات مباشرة داخل عقد الأخبار الخوارزمية المحلية الرئيسية لدينا.",
    opt3Title: "متتبع الحيتان وتسليط الضوء الأصلي على الواجهة",
    opt3Desc: "قم بتثبيت أو تسليط الضوء بشكل حصري على العملة الأصلية لمشروعك مباشرة داخل سجلات حركة الحيتان التحليلية المخصصة أو تخطيطات شريط الأسعار في الوقت الفعلي لتحقيق أقصى قدر من التحويل.",
    auditTitle: "سياسة الامتثال الصارمة والتدقيق التحريري",
    auditDesc: "لحماية مجتمعنا العالمي، نحن لا نقبل هياكل الاحتيال المجهولة (rug-pull)، أو العقود الذكية الخبيثة (honeypot)، أو عمليات البيع المسبق غير المVerifiedة، أو المشاريع التي تروج لعوائد (APY) مضللة. يجب أن تقدم جميع العقود الذكية المحتملة تقارير تدقيق عامة صالحة.",
    ctaTitle: "ابدأ حملتك الإعلانية",
    ctaDesc: "هل أنت مستعد لإطلاق حملتك الترويجية؟ اتصل بمكتب المبيعات المؤسسية والعلاقات الإعلامية لدينا مباشرة عبر البريد الإلكتروني مع أصول العرض التقديمي والتنسيقات المفضلة لديك:",
    compTitle: "موارد الشركات والامتثال"
  },
  zh: {
    title: "与我们合作广告",
    lastUpdated: "媒体资料更新于：2026年6月",
    intro: `加速您的 Web3 项目、DeFi 协议或中心化平台增长。直接与每天浏览 ${SITE_NAME} 全球技术遥测分析 myriads 的数千名高意向加密货币投资者、Web3 开发人员和活跃的市场巨鲸（Whales）建立联系。`,
    statsTitle: "平台覆盖率与核心流量指标",
    stat1Label: "月度页面浏览量",
    stat1Val: "1.2M+",
    stat2Label: "独立活跃交易员",
    stat2Val: "450K+",
    stat3Label: "平均会话时长",
    stat3Val: "4.2m",
    stat4Label: "核心地区受众",
    stat4Val: "美国 / 欧盟 / 阿联酋",
    optionsTitle: "高端赞助与广告投放组合",
    opt1Title: "展示横幅与全站版面买断",
    opt1Desc: "高曝光率的顶部通栏横幅 (728x90) 或侧边栏悬浮模块，精准嵌入到我们的动态代币指数、指数分析和实时滚动新闻流中。",
    opt2Title: "赞助新闻稿与独家社论展位",
    opt2Desc: "将全方位的 Web3 公告、代币上线指标或代币经济学更新直接分发到我们的主要本地化算法新闻节点中。",
    opt3Title: "巨鲸追踪器与 UI 原生聚焦",
    opt3Desc: "在我们的定制化巨鲸资金流向分析日志或实时行情走势图内专属置顶或推荐您的项目原生代币，实现最高转化率。",
    auditTitle: "严格 cessation 的合规与社论审查政策",
    auditDesc: "为保护我们的全球社区，我们不接受匿名的拉地毯（Rug-pull）架构、动态蜜罐（Honeypot）智能合约、未经验证的预售或宣传误导性 APY 参数的项目。所有潜在的智能合约部署必须提供有效的公开审计报告。",
    ctaTitle: "启动您的广告活动",
    ctaDesc: "准备好发布您的推广计划了吗？请直接通过电子邮件联系我们的机构销售和媒体关系部门，并附上您的项目方案和首选广告形式",
    compTitle: "公司与合规资源"
  }
};

export async function generateMetadata({ params }) {
  const {locale} =await params || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";

  const canonical =
    currentLocale === "en"
      ? `${SITE_URL}/advertise`
      : `${SITE_URL}/${currentLocale}/advertise`;

  return {
    title: `Advertise & Sponsorships | ${SITE_NAME}`,
    description: `Promote your Web3 startup, DeFi protocol, or token presale on ${SITE_NAME}. Reach millions of active crypto investors, traders, and high-net-worth market whales globally.`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: `Advertise & Media Kit - ${SITE_NAME}`,
      description: `Premium target media solutions, banner takeovers, and sponsored crypto press releases on ${SITE_NAME}.`,
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
  };
}

export default async function AdvertisePage({ params }) {
  const {locale} =await params || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;
  const t = LOCALIZED_ADVERTISE[currentLocale] || LOCALIZED_ADVERTISE["en"];

  const pageUrl = currentLocale === "en" ? `${SITE_URL}/advertise` : `${SITE_URL}/${currentLocale}/advertise`;

  return (
    <>
      <Script
        id="advertise-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.title,
            url: pageUrl,
            description: `Official media kit, advertising spaces, traffic analytics, and compliance onboarding protocols for ${SITE_NAME}.`,
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL
            }
          })
        }}
      />
      
      <main 
        className="min-h-screen bg-transparent text-gray-950 dark:text-gray-100 transition-colors duration-200 py-16 md:py-24"
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Main Title Block */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              {t.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {t.lastUpdated}
            </p>
          </div>

          {/* Core Content Layout */}
          <div className="space-y-10 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {t.intro}
            </p>

            <hr className="border-gray-200 dark:border-gray-800 my-8" />

            {/* Traffic Data Grid Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                {t.statsTitle}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-orange-400">{t.stat1Val}</p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400 font-medium">{t.stat1Label}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-orange-400">{t.stat2Val}</p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400 font-medium">{t.stat2Label}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-orange-400">{t.stat3Val}</p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400 font-medium">{t.stat3Label}</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-orange-600 dark:text-orange-400">{t.stat4Val}</p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400 font-medium">{t.stat4Label}</p>
                </div>
              </div>
            </section>

            {/* Campaign Placements Options */}
            <section className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-6 bg-orange-500 rounded-full inline-block"></span>
                {t.optionsTitle}
              </h2>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.opt1Title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.opt1Desc}</p>
                </div>
                <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.opt2Title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.opt2Desc}</p>
                </div>
                <div className="p-5 rounded-xl border border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{t.opt3Title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t.opt3Desc}</p>
                </div>
              </div>
            </section>

            {/* Compliance Block Notice */}
            <div className="bg-orange-500/10 border-l-4 border-orange-500 dark:border-orange-500 p-6 my-8 rounded-r-xl rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-xl">
              <p className="m-0 font-extrabold text-orange-600 dark:text-orange-500 text-lg">
                {t.auditTitle}
              </p>
              <p className="m-0 text-sm mt-2 text-gray-800 dark:text-gray-300 font-medium">
                {t.auditDesc}
              </p>
            </div>

            {/* Call to Action Sales Endpoint */}
            <section className="space-y-3 pt-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.ctaTitle}</h2>
              <p>{t.ctaDesc}</p>
              
              <div className="mt-4 p-5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-xl inline-block">
                <span className="text-gray-900 dark:text-gray-200 font-medium">Media Desk Email: </span>
                <a
                  href="mailto:sales@cryptonewstrend.com"
                  className="text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-500 transition-colors"
                >
                  sales@cryptonewstrend.com
                </a>
              </div>
            </section>
          </div>

          {/* Absolute Mandatory Trust Link Infrastructure Area */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.compTitle}</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Link href={`${prefix}/about-us`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                About Our Company
              </Link>
              <Link href={`${prefix}/contact`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Contact Editorial Desk
              </Link>
              <Link href={`${prefix}/terms`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href={`${prefix}/privacy-policy`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href={`${prefix}/editorial-policy`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                Editorial Guidelines
              </Link>
            </nav>
          </div>

        </div>
      </main>
    </>
  );
}