import Link from "next/link";
import { Flame, Users, Globe, Shield, TrendingUp, Zap, Eye, Award } from "lucide-react";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// ── Per-locale SEO ──────────────────────────────────────
const META = {
  en: {
    title: "About Us - CryptoNewsTrend | Crypto News & Market Intelligence",
    desc:  "CryptoNewsTrend delivers real-time Bitcoin news, Ethereum updates, whale tracking, ICO analysis, and blockchain events to a global audience in 8 languages.",
  },
  ur: {
    title: "ہمارے بارے میں - CryptoNewsTrend | کرپٹو خبریں",
    desc:  "CryptoNewsTrend دنیا بھر کے قارئین کے لیے کرپٹو کی تازہ ترین خبریں، وہیل ٹریکنگ اور ICO تجزیہ فراہم کرتا ہے۔",
  },
  ar: {
    title: "من نحن - CryptoNewsTrend | أخبار العملات الرقمية",
    desc:  "يقدم CryptoNewsTrend أخبار البيتكوين والعملات الرقمية في الوقت الفعلي وتتبع الحيتان وتحليل ICO لجمهور عالمي بـ 8 لغات.",
  },
  es: {
    title: "Sobre Nosotros - CryptoNewsTrend | Noticias Crypto",
    desc:  "CryptoNewsTrend ofrece noticias de Bitcoin en tiempo real, seguimiento de ballenas, análisis de ICO y eventos blockchain para audiencia global.",
  },
  fr: {
    title: "À Propos - CryptoNewsTrend | Actualités Crypto",
    desc:  "CryptoNewsTrend fournit des actualités Bitcoin en temps réel, le suivi des baleines, l'analyse ICO et les événements blockchain pour un public mondial.",
  },
  de: {
    title: "Über Uns - CryptoNewsTrend | Krypto-Nachrichten",
    desc:  "CryptoNewsTrend liefert Bitcoin-Nachrichten in Echtzeit, Whale-Tracking, ICO-Analysen und Blockchain-Events für ein globales Publikum.",
  },
  ru: {
    title: "О Нас - CryptoNewsTrend | Крипто Новости",
    desc:  "CryptoNewsTrend предоставляет новости Bitcoin в реальном времени, отслеживание китов, анализ ICO и события блокчейна для глобальной аудитории.",
  },
  zh: {
    title: "关于我们 - CryptoNewsTrend | 加密货币新闻",
    desc:  "CryptoNewsTrend 为全球受众提供实时比特币新闻、以太坊更新、巨鲸追踪、ICO 分析和区块链活动。",
  },
};

// ── Per-locale UI Translations ──────────────────────────
const ABOUT_DICT = {
  en: {
    platform: "Crypto Intelligence Platform",
    tagline: "Fast, accurate, and unbiased crypto intelligence — delivered to a global audience across 8 languages, 24 hours a day.",
    missionTitle: "Our Mission",
    missionDesc: "CryptoNewsTrend was built with one goal: give every investor, trader, and crypto enthusiast — regardless of language or geography — access to the same high-quality market intelligence previously reserved for institutional players. In a market where a 10-minute information delay can cost thousands, speed and accuracy are not optional.",
    coverTitle: "What We Cover",
    features: [
      { title: "Market News", desc: "Breaking BTC price moves, ETF flows, institutional activity and macro crypto events — covered first." },
      { title: "Whale Tracker", desc: "Real-time alerts on large on-chain transfers across Ethereum, Solana, Bitcoin and 20+ blockchains." },
      { title: "ICO Launchpad", desc: "Curated ICO and token sale projects with funding rounds, tokenomics, valuation and investor summaries." },
      { title: "Crypto Events", desc: "Global blockchain conferences, developer summits, meetups and hackathons — all in one calendar." },
      { title: "Coin Analysis", desc: "In-depth technical and fundamental analysis of Bitcoin, Ethereum, Solana and emerging altcoins." },
      { title: "Editorial Trust", desc: "Independent reporting. No paid placements. No undisclosed conflicts. Every article is clearly attributed." }
    ],
    editorialTitle: "Editorial Independence",
    editorialP1: "Our editorial team operates independently of all commercial relationships. No cryptocurrency project, exchange, or investor can pay to appear in our news feed. Whale alerts and market data are sourced exclusively from verified on-chain providers and major exchanges.",
    editorialP2_1: "When we make mistakes, we correct them with a visible notice — we never silently delete or alter published articles. Our corrections policy and editorial standards are published on our ",
    editorialP2_2: " page.",
    editorialLinkText: "Editorial Policy",
    globalTitle: "Global & Multilingual",
    globalDesc: "Crypto is a global phenomenon. CryptoNewsTrend publishes in 8 languages so that every reader — from Karachi to São Paulo, from Cairo to Shanghai — can follow the market in their native language.",
    stats: ["Languages", "News Coverage", "Blockchains Tracked", "Editorially Free"],
    ctaTitle: "Have a News Tip or Question?",
    ctaDesc: "Reach our editorial team at any time. We read every message.",
    ctaBtn: "Contact Us"
  },
  ur: {
    platform: "کرپٹو انٹیلیجنس پلیٹ فارم",
    tagline: "تیز، درست اور غیر جانبدارانہ کرپٹو انٹیلیجنس — جو چوبیس گھنٹے 8 زبانوں میں عالمی قارئین تک پہنچائی جاتی ہے۔",
    missionTitle: "ہمارا مشن",
    missionDesc: "CryptoNewsTrend ایک مقصد کے تحت بنایا گیا تھا: ہر سرمایہ کار، تاجر، اور کرپٹو کے شوقین کو — زبان یا جغرافیہ سے قطع نظر — اسی اعلیٰ معیار کی مارکیٹ انٹیلیجنس تک رسائی دینا جو پہلے صرف ادارہ جاتی کھلاڑیوں کے لیے مخصوص تھی۔ ایسی مارکیٹ میں جہاں 10 منٹ کی تاخیر ہزاروں کا نقصان کر سکتی ہے، رفتار اور درستگی اختیاری نہیں ہیں۔",
    coverTitle: "ہم کیا کور کرتے ہیں",
    features: [
      { title: "مارکیٹ کی خبریں", desc: "بی ٹی سی کی قیمتوں میں اچانک تبدیلی، ای ٹی ایف کی آمد و رفت اور میکرو کرپٹو واقعات — سب سے پہلے کور کیے جاتے ہیں۔" },
      { title: "وھیل ٹریکر", desc: "ایتھریم، سولانا، بٹ کوائن اور 20 سے زائد بلاک چینز پر بڑے آن چین ٹرانسفرز کے حقیقی وقت میں الرٹس۔" },
      { title: "آئی سی او لانچ پیڈ", desc: "فنڈنگ راؤنڈز، ٹوکنومکس، ویلیوایشن اور سرمایہ کاروں کے خلاصے کے ساتھ منتخب کردہ آئی سی او اور ٹوکن سیل پروجیکٹس۔" },
      { title: "کرپٹو تقریبات", desc: "عالمی بلاک چین کانفرنسیں، ڈویلپر سمٹ، ملاقاتیں اور ہیکاتھون — سب ایک ہی کیلنڈر میں۔" },
      { title: "کوائن کا تجزیہ", desc: "بٹ کوائن، ایتھریم، سولانا اور ابھرتے ہوئے آلٹ کوائنز کا گہرا تکنیکی اور بنیادی تجزیہ۔" },
      { title: "ادارتی اعتماد", desc: "آزادانہ رپورٹنگ۔ کوئی بامعاوضہ پلیسمنٹ نہیں۔ کوئی چھپے ہوئے تنازعات نہیں۔ ہر مضمون واضح طور پر منسوب ہے۔" }
    ],
    editorialTitle: "ادارتی خودمختاری",
    editorialP1: "ہماری ادارتی ٹیم تمام تجارتی تعلقات سے آزاد ہو کر کام کرتی ہے۔ کوئی بھی کرپٹو کرنسی پروجیکٹ، ایکسچینج، یا سرمایہ کار ہمارے نیوز فیڈ میں آنے کے لیے ادائیگی نہیں کر سکتا۔ وھیل الرٹس اور مارکیٹ کا ڈیٹا خصوصی طور پر تصدیق شدہ آن چین فراہم کنندگان اور بڑی ایکسچینجز سے حاصل کیا جاتا ہے۔",
    editorialP2_1: "جب ہم سے غلطیاں ہوتی ہیں، تو ہم انہیں ایک واضح نوٹس کے ساتھ درست کرتے ہیں — ہم شائع شدہ مضامین کو کبھی خاموشی سے حذف یا تبدیل نہیں کرتے۔ ہماری تصحیح کی پالیسی اور ادارتی معیار ہمارے ",
    editorialP2_2: " صفحے پر شائع کیے گئے ہیں۔",
    editorialLinkText: "ادارتی پالیسی",
    globalTitle: "عالمی اور کثیر لسانی",
    globalDesc: "کرپٹو ایک عالمی رجحان ہے۔ CryptoNewsTrend 8 زبانوں میں شائع ہوتا ہے تاکہ کراچی سے ساؤ پالو تک، قاہرہ سے شنگھائی تک کا ہر قاری اپنی مادری زبان میں مارکیٹ کی پیروی کر سکے۔",
    stats: ["زبانیں", "خبروں کی کوریج", "ٹریک شدہ بلاک چینز", "ادارتی طور پر آزاد"],
    ctaTitle: "کوئی خبر یا سوال ہے؟",
    ctaDesc: "کسی بھی وقت ہماری ادارتی ٹیم سے رابطہ کریں۔ ہم ہر پیغام کو پڑھتے ہیں۔",
    ctaBtn: "ہم سے رابطہ کریں"
  },
  es: {
    platform: "Plataforma de Inteligencia Crypto",
    tagline: "Inteligencia criptográfica rápida, precisa e imparcial, entregada a una audiencia global en 8 idiomas, las 24 horas del día.",
    missionTitle: "Nuestra Misión",
    missionDesc: "CryptoNewsTrend se creó con un objetivo: brindar a cada inversor, comerciante y entusiasta de las criptomonedas, independientemente del idioma o la geografía, acceso a la misma inteligencia de mercado de alta calidad que antes estaba reservada para los actores institucionales. En un mercado donde un retraso de información de 10 minutos puede costar miles, la velocidad y la precisión no son opcionales.",
    coverTitle: "Qué Cubrimos",
    features: [
      { title: "Noticias del Mercado", desc: "Movimientos repentinos de precios de BTC, flujos de ETF, actividad institucional y macroeventos criptográficos, cubiertos primero." },
      { title: "Rastreador de Ballenas", desc: "Alertas en tiempo real sobre grandes transferencias en cadena en Ethereum, Solana, Bitcoin y más de 20 blockchains." },
      { title: "Lanzamiento de ICO", desc: "Proyectos de ICO y venta de tokens seleccionados con rondas de financiación, tokenomics, valoración y resúmenes de inversores." },
      { title: "Eventos Crypto", desc: "Conferencias globales de blockchain, cumbres de desarrolladores, reuniones y hackatones, todo en un solo calendario." },
      { title: "Análisis de Monedas", desc: "Análisis técnico y fundamental en profundidad de Bitcoin, Ethereum, Solana y altcoins emergentes." },
      { title: "Confianza Editorial", desc: "Información independiente. Sin ubicaciones pagadas. Sin conflictos no revelados. Cada artículo está claramente atribuido." }
    ],
    editorialTitle: "Independencia Editorial",
    editorialP1: "Nuestro equipo editorial opera independientemente de todas las relaciones comerciales. Ningún proyecto de criptomonedas, intercambio o inversor puede pagar para aparecer en nuestro feed de noticias. Las alertas de ballenas y los datos de mercado se obtienen exclusivamente de proveedores verificados en cadena y de los principales intercambios.",
    editorialP2_1: "Cuando cometemos errores, los corregimos con un aviso visible; nunca eliminamos ni alteramos silenciosamente los artículos publicados. Nuestra política de correcciones y estándares editoriales se publican en nuestra página de ",
    editorialP2_2: ".",
    editorialLinkText: "Política Editorial",
    globalTitle: "Global y Multilingüe",
    globalDesc: "Las criptomonedas son un fenómeno global. CryptoNewsTrend publica en 8 idiomas para que cada lector, desde Karachi hasta São Paulo, desde El Cairo hasta Shanghái, pueda seguir el mercado en su idioma nativo.",
    stats: ["Idiomas", "Cobertura de Noticias", "Blockchains Rastreadas", "Editorialmente Libre"],
    ctaTitle: "¿Tiene alguna pista de noticias o pregunta?",
    ctaDesc: "Póngase en contacto con nuestro equipo editorial en cualquier momento. Leemos cada mensaje.",
    ctaBtn: "Contáctenos"
  },
  ru: {
    platform: "Платформа Крипто Аналитики",
    tagline: "Быстрая, точная и непредвзятая аналитика рынка криптовалют — доставляется глобальной аудитории на 8 языках 24 часа в сутки.",
    missionTitle: "Наша Миссия",
    missionDesc: "CryptoNewsTrend был создан с одной целью: дать каждому инвестору, трейдеру и криптоэнтузиасту — независимо от языка и географии — доступ к той же высококачественной рыночной информации, которая ранее была доступна только институциональным игрокам. На рынке, где 10-минутная задержка информации может стоить тысяч, скорость и точность не являются обязательными.",
    coverTitle: "Что Мы Освещаем",
    features: [
      { title: "Новости Рынка", desc: "Экстренные изменения цен BTC, потоки ETF, институциональная активность и макрособытия в сфере крипты — освещаются первыми." },
      { title: "Отслеживание Китов", desc: "Оповещения в реальном времени о крупных ончейн-переводах в сетях Ethereum, Solana, Bitcoin и более чем 20 блокчейнах." },
      { title: "ICO Лаунчпад", desc: "Курируемые проекты ICO и токенсейлов с раундами финансирования, токеномикой, оценкой и сводками инвесторов." },
      { title: "Крипто События", desc: "Глобальные блокчейн-конференции, саммиты разработчиков, митапы и хакатоны — все в одном календаре." },
      { title: "Анализ Монет", desc: "Глубокий технический и фундаментальный анализ Bitcoin, Ethereum, Solana и перспективных альткоинов." },
      { title: "Редакционное Доверие", desc: "Независимая отчетность. Никаких платных размещений. Никаких скрытых конфликтов. Каждая статья имеет четкое авторство." }
    ],
    editorialTitle: "Редакционная Независимость",
    editorialP1: "Наша редакционная коллегия действует независимо от коммерческих отношений. Ни один криптовалютный проект, биржа или инвестор не может заплатить за появление в нашей ленте новостей. Оповещения о китах и рыночные данные поступают исключительно от проверенных ончейн-провайдеров и крупных бирж.",
    editorialP2_1: "Если мы допускаем ошибки, мы исправляем их с публикацией видимого уведомления — мы никогда тайно не удаляем и не изменяем опубликованные статьи. Наша политика исправлений и редакционные стандарты опубликованы на странице ",
    editorialP2_2: ".",
    editorialLinkText: "Редакционная Политика",
    globalTitle: "Глобальность и Многоязычность",
    globalDesc: "Крипта — это глобальное явление. CryptoNewsTrend публикуется на 8 языках, чтобы каждый читатель — от Карачи до Сан-Паулу, от Каира до Шанхая — мог следить за рынком на своем родном языке.",
    stats: ["Языки", "Освещение Новостей", "Отслеживаемые Блокчейны", "Редакционная Свобода"],
    ctaTitle: "Есть новость или вопрос?",
    ctaDesc: "Свяжитесь с нашей редакцией в любое время. Мы читаем каждое сообщение.",
    ctaBtn: "Контакты"
  },
  fr: {
    platform: "Plateforme d'Intelligence Crypto",
    tagline: "Une intelligence crypto rapide, précise et impartiale — livrée à un public mondial en 8 langues, 24 heures sur 24.",
    missionTitle: "Notre Mission",
    missionDesc: "CryptoNewsTrend a été conçu avec un seul objectif : donner à chaque investisseur, trader et passionné de crypto — indépendamment de sa langue ou de sa situation géographique — l'accès aux mêmes informations de marché de haute qualité, auparavant réservées aux acteurs institutionnels. Dans un marché où un retard de 10 minutes peut coûter des milliers, la vitesse et la précision ne sont pas optionnelles.",
    coverTitle: "Ce Que Nous Couvrons",
    features: [
      { title: "Actualités du Marché", desc: "Mouvements soudains des prix du BTC, flux des ETF, activité institutionnelle et macro-événements crypto — couverts en premier." },
      { title: "Suivi des Baleines", desc: "Alertes en temps réel sur les transferts on-chain importants sur Ethereum, Solana, Bitcoin et plus de 20 blockchains." },
      { title: "ICO Launchpad", desc: "Projets ICO et ventes de tokens sélectionnés avec tours de table, tokenomics, valorisation et résumés des investisseurs." },
      { title: "Événements Crypto", desc: "Conférences mondiales sur la blockchain, sommets des développeurs, meetups et hackathons — le tout dans un seul calendrier." },
      { title: "Analyse des Pièces", desc: "Analyse technique et fondamentale approfondie du Bitcoin, de l'Ethereum, de la Solana et des altcoins émergents." },
      { title: "Confiance Éditoriale", desc: "Reportages indépendants. Aucun placement payant. Aucun conflit d'intérêts caché. Chaque article est clairement attribué." }
    ],
    editorialTitle: "Indépendance Éditoriale",
    editorialP1: "Notre équipe éditoriale opère indépendamment de toute relation commerciale. Aucun projet de crypto-monnaie, plateforme d'échange ou investisseur ne peut payer pour figurer dans notre fil d'actualité. Les alertes de baleines et les données de marché proviennent exclusivement de fournisseurs on-chain vérifiés et des principales plateformes d'échange.",
    editorialP2_1: "Lorsque nous commettons des erreurs, nous les corrigeons de manière transparente — nous ne supprimons ni ne modifions jamais discrètement les articles publiés. Notre politique de correction et nos normes éditoriales sont publiées sur notre page de ",
    editorialP2_2: ".",
    editorialLinkText: "Politique Éditoriale",
    globalTitle: "Global & Multilingue",
    globalDesc: "La crypto est un phénomène mondial. CryptoNewsTrend publie en 8 langues afin que chaque lecteur — de Karachi à São Paulo, du Caire à Shanghai — puisse suivre le marché dans sa langue maternelle.",
    stats: ["Langues", "Couverture de l'actualité", "Blockchains Suivies", "Éditorialement Libre"],
    ctaTitle: "Une info ou une question ?",
    ctaDesc: "Contactez notre équipe éditoriale à tout moment. Nous lisons chaque message.",
    ctaBtn: "Contactez-nous"
  },
  de: {
    platform: "Krypto-Intelligence-Plattform",
    tagline: "Schnelle, präzise und unvoreingenommene Krypto-Analysen — geliefert für ein globales Publikum in 8 Sprachen, 24 Stunden am Tag.",
    missionTitle: "Unsere Mission",
    missionDesc: "CryptoNewsTrend wurde mit einem Ziel entwickelt: Jedem Investor, Trader und Krypto-Enthusiasten — unabhängig von Sprache oder Herkunft — Zugang zu denselben hochwertigen Marktanalysen zu bieten, die bisher institutionellen Akteuren vorbehalten waren. In einem Markt, in dem eine Informationsverzögerung von 10 Minuten Tausende kosten kann, sind Geschwindigkeit und Genauigkeit unerlässlich.",
    coverTitle: "Was Wir Abdecken",
    features: [
      { title: "Marktnachrichten", desc: "Eilmeldungen zu BTC-Kursbewegungen, ETF-Zuflüssen, institutionellen Aktivitäten und Makro-Krypto-Events — zuerst bei uns." },
      { title: "Whale-Tracker", desc: "Echtzeit-Warnungen bei großen On-Chain-Transfers auf Ethereum, Solana, Bitcoin und über 20 Blockchains." },
      { title: "ICO-Launchpad", desc: "Kuratierte ICO- und Token-Verkaufsprojekte mit Finanzierungsrunden, Tokenomics, Bewertung und Investoren-Zusammenfassungen." },
      { title: "Krypto-Events", desc: "Globale Blockchain-Konferenzen, Entwickler-Gipfel, Meetups und Hackathons — alles in einem Kalender." },
      { title: "Coin-Analyse", desc: "Detaillierte technische und fundamentale Analyse von Bitcoin, Ethereum, Solana und aufstrebenden Altcoins." },
      { title: "Redaktionelles Vertrauen", desc: "Unabhängige Berichterstattung. Keine bezahlten Platzierungen. Keine verdeckten Konflikte. Jeder Artikel wird klar zugeordnet." }
    ],
    editorialTitle: "Redaktionelle Unabhängigkeit",
    editorialP1: "Unsere Redaktion arbeitet unabhängig von allen kommerziellen Beziehungen. Kein Kryptowährungsprojekt, keine Börse und kein Investor kann dafür bezahlen, in unserem Newsfeed zu erscheinen. Whale-Alerts und Marktdaten stammen ausschließlich von verifizierten On-Chain-Anbietern und großen Krypto-Börsen.",
    editorialP2_1: "Wenn wir Fehler machen, korrigieren wir sie mit einem sichtbaren Hinweis — wir löschen oder ändern veröffentlichte Artikel niemals stillschweigend. Unsere Korrekturrichtlinien und redaktionellen Standards finden Sie auf unserer Seite für ",
    editorialP2_2: ".",
    editorialLinkText: "Redaktionelle Richtlinien",
    globalTitle: "Global & Mehrsprachig",
    globalDesc: "Krypto ist ein globales Phänomen. CryptoNewsTrend veröffentlicht in 8 Sprachen, damit jeder Leser — von Karatschi bis São Paulo, von Kairo bis Shanghai — dem Markt in seiner Muttersprache folgen kann.",
    stats: ["Sprachen", "Nachrichten-Abdeckung", "Verfolgte Blockchains", "Redaktionell Unabhängig"],
    ctaTitle: "Haben Sie einen Nachrichtentipp oder eine Frage?",
    ctaDesc: "Kontaktieren Sie unser Redaktionsteam jederzeit. Wir lesen jede Nachricht.",
    ctaBtn: "Kontaktieren Sie uns"
  },
  ar: {
    platform: "منصة استخبارات العملات الرقمية",
    tagline: "معلومات سريعة ودقيقة وغير منحازة عن العملات الرقمية — يتم تقديمها لجمهور عالمي بـ 8 لغات، على مدار 24 ساعة في اليوم.",
    missionTitle: "مهمتنا",
    missionDesc: "تم بناء CryptoNewsTrend بهدف واحد: منح كل مستثمر ومتداول ومهتم بالعملات الرقمية — بغض النظر عن اللغة أو الموقع الجغرافي — إمكانية الوصول إلى نفس معلومات السوق عالية الجودة التي كانت محجوزة سابقًا للمؤسسات الكبرى. في سوق يمكن أن تكلف فيه تأخيرات المعلومات لمدة 10 دقائق آلاف الدولارات، فإن السرعة والدقة ليست خيارًا إضافيًا.",
    coverTitle: "ما نقوم بتغطيته",
    features: [
      { title: "أخبار السوق", desc: "تحركات أسعار بيتكوين العاجلة، تدفقات صناديق الاستثمار المتداولة، نشاط المؤسسات والأحداث الاقتصادية الكبرى للعملات الرقمية — نغطيها أولاً." },
      { title: "تتبع الحيتان", desc: "تنبيهات فورية في الوقت الفعلي حول التحويلات الكبيرة على السلسلة عبر إيثريوم، سولانا، بيتكوين وأكثر من 20 شبكة بلوكشين." },
      { title: "منصة إطلاق ICO", desc: "مشاريع ICO ومبيعات توكن مختارة بعناية مع جولات التمويل، واقتصاديات التوكن (Tokenomics)، والتقييم، وملخصات المستثمرين." },
      { title: "فعاليات العملات الرقمية", desc: "مؤتمرات البلوكشين العالمية، قمم المطورين، اللقاءات والهاكاثونات — كلها في تقويم واحد." },
      { title: "تحليل العملات", desc: "تحليل فني وأساسي متعمق لعملات بيتكوين، إيثريوم، سولانا، والعملات البديلة الناشئة." },
      { title: "الأمانة التحريرية", desc: "تقارير مستقلة. لا توجد إعلانات مدفوعة الأجر غير معلنة. لا توجد تضارب مصالح مخفي. كل مقال منسوب بوضوح لكاتبه." }
    ],
    editorialTitle: "الاستقلالية التحريرية",
    editorialP1: "يعمل فريق التحرير لدينا بشكل مستقل عن جميع العلاقات التجارية. لا يمكن لأي مشروع عملة رقمية أو منصة تداول أو مستثمر الدفع للظهور في الأخبار لدينا. يتم الحصول على تنبيهات الحيتان وبيانات السوق حصريًا من مزودي البيانات الموثوقين على السلسلة ومنصات التداول الكبرى.",
    editorialP2_1: "عندما نرتكب أخطاء، نقوم بتصحيحها بنص واضح — ولا نقوم مطلقًا بحذف المقالات المنشورة أو تعديلها سرًا. تم نشر سياسة التصحيح والمعايير التحريرية الخاصة بنا على صفحة ",
    editorialP2_2: ".",
    editorialLinkText: "السياسة التحريرية",
    globalTitle: "عالمي ومتعدد اللغات",
    globalDesc: "العملات الرقمية ظاهرة عالمية. تنشر CryptoNewsTrend بـ 8 لغات حتى يتمكن كل قارئ — من كراتشي إلى ساو باولو، ومن القاهرة إلى شنغهاي — من متابعة السوق بلغته الأم.",
    stats: ["لغات", "تغطية إخبارية", "سلاسل بلوكشين متتبعة", "مستقل تحريرياً بنسبة 100%"],
    ctaTitle: "هل لديك خبر عاجل أو سؤال؟",
    ctaDesc: "تواصل مع فريق التحرير لدينا في أي وقت. نحن نقرأ كل رسالة.",
    ctaBtn: "اتصل بنا"
  },
  zh: {
    platform: "加密货币情报平台",
    tagline: "快速、准确、客观的加密货币情报 — 全天候 24 小时以 8 种语言向全球受众提供。",
    missionTitle: "我们的使命",
    missionDesc: "CryptoNewsTrend 的建立基于一个目标：让每位投资者、交易员和加密货币爱好者 — 无论语言或地域如何 — 都能获得以前只有机构投资者专属的高质量市场情报。在一个信息延迟 10 分钟就可能损失数千美元的市场中，速度和准确性是必不可少的。",
    coverTitle: "我们的报道范围",
    features: [
      { title: "市场新闻", desc: "比特币价格突发走势、ETF 资金流向、机构活动和宏观加密事件 — 第一时间报道。" },
      { title: "巨鲸追踪", desc: "实时警报以太坊、Solana、比特币和 20 多个区块链上的大型链上转账。" },
      { title: "ICO 发射台", desc: "精选的 ICO 和代币代售项目，包含融资轮次、代币经济学、估值和投资者摘要。" },
      { title: "加密活动", desc: "全球区块链会议、开发者峰会、聚会和黑客马拉松 — 尽在一个日历中。" },
      { title: "代币分析", desc: "对比特币、以太坊、Solana 和新兴山寨币进行深入的技术和基本面分析。" },
      { title: "编辑信任", desc: "独立报道。没有付费投放。没有未披露的的利益冲突。每篇文章均字迹清晰、署名明确。" }
    ],
    editorialTitle: "编辑独立性",
    editorialP1: "我们的编辑团队独立于所有商业关系。任何加密货币项目、交易所或投资者都不能通过付费出现在我们的新闻流中。巨鲸警报和市场数据完全来自经过验证的链上供应商和各大交易所。",
    editorialP2_1: "当我们犯错时，我们会发布明显的更正通知 — 绝不会悄悄删除或更改已发表的文章。我们的更正政策和编辑标准公布在我们的",
    editorialP2_2: "页面上。",
    editorialLinkText: "编辑政策",
    globalTitle: "全球化与多语言",
    globalDesc: "加密货币是一个全球现象。CryptoNewsTrend 以 8 种语言进行发布，以便从卡拉奇到圣保罗，从开罗到上海的每位读者都能用自己的母语关注市场动态。",
    stats: ["语言", "新闻报道", "追踪的区块链", "100% 编辑独立"],
    ctaTitle: "有新闻线索或疑问？",
    ctaDesc: "随时联系我们的编辑团队。我们阅读每一条信息。",
    ctaBtn: "联系我们"
  }
};

export async function generateMetadata({ params }) {
  const { locale: raw } = await params || {};
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";

  const currentMeta = META[locale] || META.en;

  const canonical =
    locale === "en"
      ? `${SITE_URL}/about-us`
      : `${SITE_URL}/${locale}/about-us`;

  const languages = {};

  VALID_LOCALES.forEach((loc) => {
    languages[loc] =
      loc === "en"
        ? `${SITE_URL}/about-us`
        : `${SITE_URL}/${loc}/about-us`;
  });

  languages["x-default"] = `${SITE_URL}/about-us`;

  return {
    metadataBase: new URL(SITE_URL),

    title: currentMeta.title,
    description: currentMeta.desc,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical,
      languages,
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: "CryptoNewsTrend",
      title: currentMeta.title,
      description: currentMeta.desc,
      locale,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "CryptoNewsTrend",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: currentMeta.title,
      description: currentMeta.desc,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

const FEATURES = [
  { icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Zap,        color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Globe,      color: "text-blue-400",   bg: "bg-blue-500/10"   },
  { icon: Award,      color: "text-green-400",  bg: "bg-green-500/10"  },
  { icon: Eye,        color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Shield,     color: "text-red-400",    bg: "bg-red-500/10"    },
];

const LANGS = [
  { code: "EN", name: "English"  },
  { code: "UR", name: "اردو"     },
  { code: "AR", name: "العربية"  },
  { code: "ES", name: "Español"  },
  { code: "FR", name: "Français" },
  { code: "DE", name: "Deutsch"  },
  { code: "RU", name: "Русский"  },
  { code: "ZH", name: "中文"     },
];
export default async function AboutPage({ params }) {
  const { locale: raw } = await params || {};
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const isRtl  = ["ur", "ar"].includes(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  
  // Get local dictionary translations
  const t = ABOUT_DICT[locale] || ABOUT_DICT.en;

  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",

  "@id": `${SITE_URL}/#organization`,

  name: "CryptoNewsTrend",
founder: {
  "@type": "Person",
  name: "CryptoNewsTrend Editorial Team"
},

foundingLocation: {
  "@type": "Place",
  name: "Global"
},

knowsAbout: [
  "Bitcoin",
  "Ethereum",
  "Cryptocurrency News",
  "Blockchain",
  "ICO Analysis",
  "Crypto Whale Tracking"
],
  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 600,
    height: 60,
  },

  description: META[locale]?.desc || META.en.desc,

  sameAs: [
    "https://twitter.com/cryptonewstrend",
    "https://t.me/cryptonewstrend",
  ],

  foundingDate: "2024",

  areaServed: "Worldwide",

  inLanguage: [
    "en",
    "ur",
    "ar",
    "es",
    "fr",
    "de",
    "ru",
    "zh",
  ],

  publishingPrinciples: `${SITE_URL}/editorial-policy`,
  ethicsPolicy: `${SITE_URL}/editorial-policy`,
  correctionsPolicy: `${SITE_URL}/editorial-policy`,

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${SITE_URL}/contact`,
  },
};
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item:
        locale === "en"
          ? SITE_URL
          : `${SITE_URL}/${locale}`,
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item:
        locale === "en"
          ? `${SITE_URL}/about-us`
          : `${SITE_URL}/${locale}/about-us`,
    },
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CryptoNewsTrend?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CryptoNewsTrend is a multilingual cryptocurrency news and market intelligence platform."
      }
    },
    {
      "@type": "Question",
      name: "Does CryptoNewsTrend accept paid news placements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. CryptoNewsTrend follows an independent editorial policy."
      }
    }
  ]
};

  // Raw original static arrays mapped with local translated text values
  const STAT_VALUES = ["8", "24/7", "20+", "100%"];
  const translatedStats = t.stats.map((label, index) => ({
    value: STAT_VALUES[index],
    label: label
  }));

  return (
    <>

      <Script
        type="application/ld+json"
        id="organization-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
  id="aboutpage-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url: `${SITE_URL}${prefix}/about-us`,
      name: META[locale]?.title,
      description: META[locale]?.desc,
      isPartOf: {
        "@type": "WebSite",
        name: "CryptoNewsTrend",
        url: SITE_URL
      }
    })
  }}
/>
      <Script
  id="breadcrumb-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbJsonLd),
  }}
/>
    <Script
  id="faqSchema-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
      <Script
        type="application/ld+json"
        id="webpage-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.missionTitle,
            mainEntity: {
  "@id": `${SITE_URL}/#organization`,
},

breadcrumb: {
  "@type": "BreadcrumbList",
},

lastReviewed: "2026-06-26",

inLanguage: locale,
            url: `${SITE_URL}${prefix}/about-us`,
            description: META[locale]?.desc || META.en.desc,
            publisher: {
              "@type": "Organization",
              name: "CryptoNewsTrend",
              url: SITE_URL
            }
          })
        }}
      />

      <main
        className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-200"
        dir={isRtl ? "rtl" : "ltr"}
        lang={locale}
      >
        {/* ── Hero ── */}
        <section className="border-b border-gray-200 dark:border-gray-800/80 py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400">
                {t.platform}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-none tracking-tight">
              <span className="text-gray-700 dark:text-white">Crypto</span>
              <span className="text-orange-500">NewsTrend</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t.tagline}
            </p>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800/80">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 bg-purple-500 rounded-full" />
              <h2 className="text-2xl font-bold">{t.missionTitle}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl">
              {t.missionDesc}
            </p>
          </div>
        </section>

<section className="py-16 border-b">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2 className="text-2xl font-bold mb-6">
      Editorial Team
    </h2>

    <p className="text-gray-600 dark:text-gray-400">
      CryptoNewsTrend is operated by editors,
      researchers, blockchain analysts and
      contributors focused on cryptocurrency,
      blockchain technology and digital assets.
    </p>
  </div>
</section>
        {/* ── What we cover ── */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800/80">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-2xl font-bold">{t.coverTitle}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                const translatedFeature = t.features[i] || f;
                return (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:border-purple-500/40 dark:hover:border-purple-500/40 transition-colors group"
                  >
                    <div className={`w-10 h-10 ${f.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{translatedFeature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{translatedFeature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Editorial Independence ── */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800/80">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-bold">{t.editorialTitle}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t.editorialP1}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.editorialP2_1}{" "}
                <Link href={`${prefix}/editorial-policy`} className="text-purple-600 dark:text-purple-400 hover:underline underline-offset-2 font-medium">
                  {t.editorialLinkText}
                </Link>{" "}
                {t.editorialP2_2}
              </p>
            </div>
          </div>
        </section>

        {/* ── Multilingual ── */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800/80">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 bg-blue-500 rounded-full" />
              <h2 className="text-2xl font-bold">{t.globalTitle}</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {t.globalDesc}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {LANGS.map(({ code, name }) => (
                <div key={code} className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 rounded-lg px-4 py-3 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 shrink-0">{code}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800/80">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {translatedStats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-extrabold text-orange-500 mb-2">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-mono font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
<section className="py-16 border-b">
  <div className="container mx-auto px-4 max-w-4xl">
    <h2 className="text-2xl font-bold mb-4">
      Contact Information
    </h2>

    <p>Email: contact@cryptonewstrend.com</p>

    <p>
      Website:
      https://cryptonewstrend.com
    </p>
  </div>
</section>

        {/* ── CTA ── */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">{t.ctaTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              {t.ctaDesc}
            </p>
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-md shadow-purple-600/10"
            >
              {t.ctaBtn}
            </Link>
          </div>

          <section className="flex flex-wrap gap-3 mt-8  justify-center">
  <Link href={`${prefix}/editorial-policy`}>
    Editorial Policy
  </Link>

  <Link href={`${prefix}/contact`}>
    Contact
  </Link>

  <Link href={`${prefix}/privacy-policy`}>
    Privacy Policy
  </Link>

  <Link href={`${prefix}/terms`}>
    Terms & Conditions
  </Link>
</section>
        </section>
        
      </main>
    </>
  );
}