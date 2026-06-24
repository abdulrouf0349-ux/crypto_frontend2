import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// Expanded High-Volume Multilingual Content Matrix
const LOCALIZED_DISCLAIMER = {
  en: {
    title: "Financial Disclaimer",
    lastUpdated: "Last updated: June 2026",
    intro: `${SITE_NAME} operates as an entirely independent digital journalism network, algorithmic data analytics platform, and educational resource aggregator focusing on decentralized finance (DeFi), smart contracts, Web3 technologies, and cryptocurrency spot or derivative markets. All data models, indices, and insights shared here are generated autonomously for a global audience.`,
    noticeTitle: "Absolute Financial & Investment Exclusion Notice",
    noticeDesc: "The editorial team, programmatic data feeds, and administrators of CryptoNewsTrend are not registered brokers, certified financial advisors (IFA), legal tax consultants, or custodial asset managers. Absolutely zero content published, compiled, or syndicated on this platform constitutes custom-tailored investment, legal, trading, or financial advice.",
    sec1Title: "1. Extreme Volatility & Digital Asset Investment Risks",
    sec1Desc: "Cryptocurrency networks, algorithmic stablecoins, tokenized assets, and digital ledger protocols are inherently subject to extreme structural volatility, smart contract vulnerability exploits, liquidity pool drains, and sudden systemic failure. By interacting with these markets, you explicitly acknowledge that market parameters fluctuate violently, and you may instantly experience an irrevocable and total loss of all deployed economic capital. Past performance is never indicative of future results.",
    sec2Title: "2. Non-Warranty of Information & Real-Time Telemetry Data",
    sec2Desc: "All charts, market data feeds, whale tracking metrics, on-chain logs, and historical price matrices are delivered strictly on an 'as-is' and 'as-available' operational framework. We supply zero explicit or implied warranties regarding the completeness, real-time synchronization precision, mathematical accuracy, or future predictive reliability of any automated data pipeline or breaking editorial transmission.",
    sec3Title: "3. Singular Autonomy & Personal Accountability (DYOR)",
    sec3Desc: "Every user retains exclusive, unshared accountability for their independent capital allocations, blockchain wallet signatures, smart contract interactions, and decentralized token trades. We explicitly dictate that you must conduct your own extensive technical and fundamental research (Do Your Own Research - DYOR) and acquire qualified advice from licensed legal custodians before committing assets to any volatile liquidity network.",
    sec4Title: "4. Third-Party Protocols & Decentralized dApp Linking Infrastructure",
    sec4Desc: "Our news nodes frequently map paths and hyper-links pointing to independent third-party ecosystems, centralized exchanges (CEXs), decentralized platforms (DEXs), specialized launchpads, or external projects. We possess zero administrative jurisdiction, governance rights, smart contract validation authority, or data safety control over these external entities. Interacting with third-party networks is performed exclusively at your own peril.",
    sec5Title: "5. Transparent Commercial Affiliate & Sponsorship Disclosure",
    sec5Desc: "In compliance with international trade regulatory standards, some structural hyperlinks nested within our technical reviews or market updates may function as paid affiliate gateways. This implies that we may capture a micro-commission payload from specific protocol platforms at completely zero incremental cost to you. This commercial monetization pipeline enables us to continuously power our global cluster nodes and free access.",
    sec6Title: "6. Comprehensive Limitation of Liability & General Indemnity",
    sec6Desc: "Under no legal configurations or theories of global commercial law shall CryptoNewsTrend, its developers, data miners, parent corporations, or editorial representatives be held liable to any user or entity for direct portfolio liquidations, algorithmic trading errors, data packet transmission delays, server downtime, or system exploits resulting from information consumed across our web assets.",
    compTitle: "Regulatory Compliance & Legal Directives"
  },
  ur: {
    title: "مالیاتی دستبرداری (Disclaimer)",
    lastUpdated: "آخری اپڈیٹ: جون 2026",
    intro: `${SITE_NAME} ایک مکمل طور پر آزاد ڈیجیٹل صحافتی نیٹ ورک، خودکار ڈیٹا اینالیٹکس سسٹم، اور تعلیمی وسائل کا ایگریگیٹر ہے جو ڈی سینٹرلائزڈ فنانس (DeFi)، اسمارٹ کنٹریکٹس، Web3 ٹیکنالوجیز، اور کرپٹو مارکیٹس پر توجہ مرکوز کرتا ہے۔ ہماری ویب سائٹ پر موجود تمام ڈیٹا اور تجزیے خودکار نظام کے تحت عالمی صارفین کے لیے اکٹھے کیے جاتے ہیں۔`,
    noticeTitle: "مالیاتی اور سرمایہ کاری مشورے کی حتمی نفی کا نوٹس",
    noticeDesc: "ہماری ادارتی ٹیم، خودکار ڈیٹا فیڈز، اور سسٹمز کے ایڈمنسٹریٹرز کوئی رجسٹرڈ بروکرز، تصدیق شدہ مالیاتی مشیر، قانونی ٹیکس کنسلٹنٹس، یا فنڈ مینیجرز نہیں ہیں۔ اس پلیٹ فارم پر شائع یا مرتب کیا گیا کوئی بھی مواد کسی بھی قسم کی مالیاتی، قانونی، یا تجارتی سرمایہ کاری کی ترغیب یا مشورہ ہرگز نہیں ہے۔",
    sec1Title: "1. شدید اتار چڑھاؤ اور ڈیجیٹل اثاثوں میں سرمایہ کاری کے خطرات",
    sec1Desc: "کرپٹو کرنسی نیٹ ورکس، اسٹیبل کوائنز، ٹوکنائزڈ اثاثے، اور ڈیجیٹل لیجر پروٹوکولز فطرتی طور پر انتہائی شدید اتار چڑھاؤ، اسمارٹ کنٹریکٹ کی سیکیورٹی خامیوں، اور اچانک مکمل نظام کی ناکامی کے تابع ہیں۔ ان مارکیٹس کے ساتھ لین دین کرتے وقت آپ تسلیم کرتے ہیں کہ قیمتیں سیکنڈوں میں تبدیل ہو سکتی ہیں، اور آپ اپنے لگائے گئے تمام سرمائے سے فوری اور مستقل طور پر ہاتھ دھو سکتے ہیں۔ ماضی کے نتائج مستقبل کی ضمانت نہیں ہیں۔",
    sec2Title: "2. معلومات اور سسٹمز ڈیٹا کی عدم ضمانت",
    sec2Desc: "تمام چارٹس، مارکیٹ ڈیٹا فیڈز، وہیل ٹریکنگ میٹرکس، آن چین لاگز، اور قیمتوں کے سلسلے صرف معلوماتی مقاصد کے لیے 'جیسے ہیں' کی بنیاد پر فراہم کیے جاتے ہیں۔ ہم کسی بھی خودکار ڈیٹا پائپ لائن یا بریکنگ نیوز کی مکملیت، درستگی، لائیو اپڈیٹس کی مطابقت، یا مستقبل کی پیش گوئیوں کی کوئی واضح یا ضمنی ضمانت نہیں دیتے۔",
    sec3Title: "3. انفرادی خودمختاری اور ذاتی ذمہ داری (DYOR)",
    sec3Desc: "ہر صارف اپنے سرمائے کی تقسیم، بلاک چین والیٹ کے دستخطوں، اسمارٹ کنٹریکٹ کے استعمال، اور ٹوکن کی خرید و فروخت کے فیصلوں کا اکیلا اور خود مکمل ذمہ دار ہے۔ ہم واضح طور پر ہدایت کرتے ہیں کہ آپ کسی بھی مارکیٹ میں فنڈز لگانے سے پہلے اپنی وسیع تکنیکی اور بنیادی تحقیق (DYOR) لازمی کریں اور لائسنس یافتہ مالیاتی ماہرین سے مشورہ کریں۔",
    sec4Title: "4. تھرڈ پارٹی پروٹوکولز اور بیرونی لنکس کا بنیادی ڈھانچہ",
    sec4Desc: "ہمارے پورٹل میں اکثر بیرونی آزاد نیٹ ورکس، سینٹرلائزڈ یا ڈی سینٹرلائزڈ ایکسچینجز (DEXs)، یا دیگر پروجیکٹس کے ہائپر لنکس شامل ہوتے ہیں۔ ان بیرونی سسٹمز، ان کے اسمارٹ کنٹریکٹس کی سیکیورٹی، یا ان کے ڈیٹا پر ہمارا کوئی کنٹرول یا انتظامی اختیار نہیں ہے۔ ان بیرونی نیٹ ورکس کا استعمال مکمل طور پر آپ کے اپنے خطرے پر ہے۔",
    sec5Title: "5. کاروباری الحاق (Affiliate) اور اسپانسرشپ کا شفاف اظہار",
    sec5Desc: "عالمی تجارتی قوانین کے مطابق، ہماری خبروں یا تجزیوں میں شامل کچھ لنکس ادا شدہ الحاق شدہ (Affiliate) راستے ہو سکتے ہیں۔ اس کا مطلب ہے کہ اگر آپ ان لنکس کے ذریعے رجسٹر کرتے ہیں تو ہم ان پلیٹ فارمز سے ایک چھوٹا سا کمیشن حاصل کر سکتے ہیں، جس سے آپ کی لاگت پر کوئی فرق نہیں پڑتا۔ یہ آمدنی ہمارے سرورز کے اخراجات چلانے میں مدد کرتی ہے۔",
    sec6Title: "6. ذمہ داری کی حتمی اور جامع حد بندی",
    sec6Desc: "عالمی تجارتی اور کارپوریٹ قوانین کے تحت، کرپٹو نیوز ٹرینڈ، اس کے ڈویلپرز، یا ادارتی نمائندے کسی بھی صارف کے پورٹ فولیو کے نقصانات، ٹریڈنگ کی غلطیوں، سرور ڈاؤن ٹائم، ڈیٹا کی تاخیر، یا اسمارٹ کنٹریکٹ ہیکس کے نتیجے میں ہونے والے کسی بھی براہ راست یا بالواسطہ نقصان کے قانونی طور پر ذمہ دار نہیں ہوں گے۔",
    compTitle: "ریگولیٹری اور قانونی ہدایات"
  },
  es: {
    title: "Descargo de Responsabilidad Financiera",
    lastUpdated: "Última actualización: Junio 2026",
    intro: `${SITE_NAME} opera como una red de periodismo digital, plataforma de análisis de datos y agregador de recursos educativos centrado en finanzas descentralizadas (DeFi), contratos inteligentes, tecnologías Web3 y mercados de criptomonedas. Todos los modelos de datos se generan de forma autónoma.`,
    noticeTitle: "Aviso de Exclusión Absoluta de Asesoría Financiera",
    noticeDesc: "El equipo editorial y los administradores de CryptoNewsTrend no son corredores registrados, asesores financieros certificados (IFA) ni administradores de activos. Ningún contenido publicado constituye asesoramiento financiero personalizado.",
    sec1Title: "1. Extrema Volatilidad y Riesgos de Inversión en Activos Digitales",
    sec1Desc: "Los mercados de criptomonedas están sujetos a una volatilidad estructural extrema y fallas sistémicas. Al interactuar con estos mercados, usted reconoce que puede experimentar una pérdida total e irrevocable de todo el capital económico desplegado. El rendimiento pasado no garantiza resultados futuros.",
    sec2Title: "2. No Garantía de Información y Datos del Sistema",
    sec2Desc: "Todos los gráficos, matrices de telemetría y flujos de precios de mercado se entregan estrictamente 'tal cual'. No ofrecemos garantías explícitas sobre la precisión matemática o la confiabilidad predictiva de los datos automatizados.",
    sec3Title: "3. Autonomía Singular y Responsabilidad Personal (DYOR)",
    sec3Desc: "Cada usuario conserva la responsabilidad exclusiva de sus asignaciones de capital y transacciones de tokens. Debe realizar su propia investigación exhaustiva (DYOR) antes de comprometer activos en cualquier red de liquidez.",
    sec4Title: "4. Protocolos de Terceros e Infraestructura de Enlaces dApp",
    sec4Desc: "Nuestros nodos de noticias frecuentemente contienen enlaces a ecosistemas independientes de terceros o intercambios descentralizados (DEX). No poseemos jurisdicción administrativa ni control de seguridad sobre estos nodos externos.",
    sec5Title: "5. Divulgación Transparente de Afiliados Comerciales",
    sec5Desc: "En cumplimiento con los estándares regulatorios comerciales, algunos hipervínculos pueden funcionar como puertas de enlace de afiliados pagos. Esto significa que podemos recibir una microcomisión sin costo adicional para usted, lo que financia nuestros servidores.",
    sec6Title: "6. Limitación Integral de Responsabilidad",
    sec6Desc: "Bajo ninguna configuración legal CryptoNewsTrend o sus desarrolladores serán responsables ante ningún usuario por liquidaciones de cartera, errores de trading o exploits que resulten del uso de nuestro contenido.",
    compTitle: "Directivas Legales y Regulatorias"
  },
  ru: {
    title: "Отказ от Финансовой Ответственности",
    lastUpdated: "Последнее обновление: Июнь 2026",
    intro: `${SITE_NAME} функционирует как полностью независимая сеть цифровой журналистики, автоматическая аналитическая платформа и агрегатор образовательных индексов, ориентированный на DeFi, смарт-контракты и рынки криптовалют.`,
    noticeTitle: "Уведомление об Абсолютном Исключении Финансовых Консультаций",
    noticeDesc: "Редакционная коллегия и администраторы CryptoNewsTrend не являются зарегистрированными брокерами, сертифицированными финансовыми консультантами или налоговыми экспертами. Никакой контент не является инвестиционной рекомендацией.",
    sec1Title: "1. Риски Инвестиций в Условиях Экстремальной Волатильности",
    sec1Desc: "Криптовалютные сети и цифровые активы по своей природе подвержены экстремальной структурной волатильности, уязвимостям протоколов и системным сбоям. Вы признаете, что можете понести безвозвратную и полную потерю всего капитала.",
    sec2Title: "2. Абсолютное Отсутствие Гарантий Точности Данных",
    sec2Desc: "Все графики, данные телеметрии, логи перемещения китов и потоки рыночных цен предоставляются исключительно на условиях 'как есть'. Мы не даем никаких гарантий относительно полноты автоматических потоков данных.",
    sec3Title: "3. Личная Ответственность Пользователя (DYOR)",
    sec3Desc: "Каждый пользователь несет единоличную ответственность за распределение своего капитала и подписание транзакций в блокчейне. Вы обязаны проводить собственное тщательное исследование (DYOR) перед инвестированием.",
    sec4Title: "4. Сторонние Протоколы и Ссылки на Децентрализованные dApps",
    sec4Desc: "Наши новостные узлы часто содержат ссылки на сторонние экосистемы или децентрализованные биржи (DEX). Мы не имеем административной юрисдикции или контроля безопасности над этими внешними сайтами.",
    sec5Title: "5. Прозрачное Раскрытие Коммерческой Аффилированности",
    sec5Desc: "В соответствии с международными стандартами торговли, некоторые гиперссылки могут функционировать как оплачиваемые реферальные переходы. Мы можем получать микрокомиссию без каких-либо дополнительных затрат с вашей стороны.",
    sec6Title: "6. Комплексное Ограничение Ответственности",
    sec6Desc: "Ни при каких юридических конфигурациях CryptoNewsTrend или его разработчики не несут ответственности за ликвидацию портфелей, торговые ошибки пользователей или задержки передачи пакетов данных.",
    compTitle: "Правовые и Нормативные Директивы"
  },
  fr: {
    title: "Avis de Non-Responsabilité Financière",
    lastUpdated: "Dernière mise à jour : Juin 2026",
    intro: `${SITE_NAME} opère en tant que réseau de journalisme numérique indépendant et agrégateur d'indices éducatifs axé sur la finance décentralisée (DeFi) et les marchés de crypto-monnaies. Les données de nos nœuds sont compilées de manière autonome.`,
    noticeTitle: "Avis d'Exclusion Absolue de Conseil en Investissement",
    noticeDesc: "L'équipe éditoriale et les administrateurs de CryptoNewsTrend ne sont pas des courtiers enregistrés ou des conseillers financiers certifiés. Aucun contenu publié sur cette plateforme ne constitue un conseil en investissement personnalisé.",
    sec1Title: "1. Risques d'Investissement liés à une Volatilité Extrême",
    sec1Desc: "Les marchés de crypto-monnaies sont intrinsèquement soumis à une volatilité structurelle extrême, à des failles de protocoles et à des pannes systémiques. Vous reconnaissez que vous pouvez subir une perte totale et irrévocable de votre capital.",
    sec2Title: "2. Absence Absolue de Garantie des Informations",
    sec2Desc: "Tous les graphiques, matrices de télémétrie et flux de prix du marché sont fournis strictement 'tels quels'. Nous ne fournissons aucune garantie explicite ou implicite quant à la précision mathématique ou à la fiabilité prédictive des données.",
    sec3Title: "3. Autonomie Singulière et Responsabilité Personnelle (DYOR)",
    sec3Desc: "Chaque utilisateur conserve la responsabilité exclusive de ses allocations de capital et de ses transactions de jetons. Vous devez effectuer vos propres recherches approfondies (DYOR) avant d'engager des actifs.",
    sec4Title: "4. Protocoles Tiers et Liens dApp Décentralisés",
    sec4Desc: "Nos nœuds d'actualités contiennent fréquemment des liens vers des écosystèmes tiers indépendants ou des bourses décentralisées (DEX). Nous ne possédons aucune juridiction administrative sur ces nœuds externes.",
    sec5Title: "5. Divulgation Transparente d'Affiliation Commerciale",
    sec5Desc: "Conformément aux normes réglementaires commerciales, certains liens peuvent fonctionner comme des passerelles d'affiliation payantes. Nous pouvons capturer une micro-commission sans aucun coût supplémentaire pour vous afin de financer nos serveurs.",
    sec6Title: "6. Limitation Globale de Responsabilité",
    sec6Desc: "En aucun cas CryptoNewsTrend ou ses développeurs ne seront tenus responsables des liquidations de portefeuille, des erreurs de trading ou des temps d'arrêt des serveurs résultant des informations consommées sur nos actifs.",
    compTitle: "Directives Légales et Réglementaires"
  },
  de: {
    title: "Finanzieller Haftungsausschluss",
    lastUpdated: "Zuletzt aktualisiert: Juni 2026",
    intro: `${SITE_NAME} fungiert als völlig unabhängiges digitales Journalismus-Netzwerk und Bildungsindex-Aggregator mit Fokus auf dezentrale Finanzen (DeFi) und Krypto-Märkte. Die Daten unserer Knoten werden autonom kompiliert.`,
    noticeTitle: "Ausschlusserklärung für Finanz- und Anlageberatung",
    noticeDesc: "Das Redaktionsteam und die Administratoren von CryptoNewsTrend sind keine registrierten Broker oder zertifizierten Finanzberater. Absolut kein Inhalt auf dieser Plattform stellt eine maßgeschneiderte Anlageberatung dar.",
    sec1Title: "1. Extreme Investitionsrisiken durch Volatilität",
    sec1Desc: "Krypto-Netzwerke und digitale Vermögenswerte unterliegen einer extremen strukturellen Volatilität, Protokoll-Exploits und Systemausfällen. Sie akzeptieren, dass Sie einen unwiderruflichen Totalverlust Ihres Kapitals erleiden können.",
    sec2Title: "2. Keine Gewährleistung für Informationen und Systemprotokolle",
    sec2Desc: "Alle Charts, Telemetriematrizen und Marktpreis-Streams werden ausschließlich auf einer 'as-is'-Basis bereitgestellt. Wir übernehmen keine ausdrückliche Gewähr für die mathematische Genauigkeit oder Zuverlässigkeit der Daten.",
    sec3Title: "3. Eigenverantwortung und persönliche Rechenschaft (DYOR)",
    sec3Desc: "Jeder Nutzer trägt die alleinige Verantwortung für seine Kapitalallokationen und Blockchain-Transaktionen. Sie müssen Ihre eigenen umfassenden Recherchen (DYOR) durchführen, bevor Sie Vermögenswerte investieren.",
    sec4Title: "4. Drittanbieter-Protokolle und dezentrale dApp-Verlinkung",
    sec4Desc: "Unsere News-Knoten enthalten häufig Links zu unabhängigen Ökosystemen von Drittanbietern oder dezentralen Börsen (DEX). Wir haben keine administrative Gerichtsbarkeit oder Sicherheitskontrolle über diese externen Knoten.",
    sec5Title: "5. Transparente Offenlegung von kommerziellen Affiliates",
    sec5Desc: "In Übereinstimmung mit Handelsstandards können einige Hyperlinks als bezahlte Affiliate-Gateways fungieren. Das bedeutet, dass wir eine Mikrocourtage erhalten können, ohne dass für Sie zusätzliche Kosten entstehen.",
    sec6Title: "6. Umfassende Haftungsbeschränkung und Freistellung",
    sec6Desc: "Unter keinen rechtlichen Konfigurationen haftet CryptoNewsTrend oder seine Entwickler für Portfolio-Liquidationen, Handelsfehler oder Server-Ausfallzeiten, die aus der Nutzung unserer Inhalte resultieren.",
    compTitle: "Rechtliche und Regulatorische Richtlinien"
  },
  ar: {
    title: "إخلاء المسؤولية المالي",
    lastUpdated: "آخر تحديث: يونيو 2026",
    intro: `تعمل ${SITE_NAME} كشبكة صحافة رقمية مستقلة تمامًا ومجمع مؤشرات تعليمي يركز على التمويل اللامركزي (DeFi) وأسواق العملات المشفرة الفورية. يتم تجميع البيانات عبر عقدنا بشكل برمجى مستقل.`,
    noticeTitle: "إشعار الاستبعاد المطلق للاستشارات المالية والاستثمارية",
    noticeDesc: "إن الفريق التحريري ومديري CryptoNewsTrend ليسوا وسطاء مسجلين أو مستشارين ماليين معتمدين أو مديري أصول. لا يوجد أي محتوى منشور على هذه المنصة يشكل نصيحة استثمارية أو تجارية مخصصة.",
    sec1Title: "1. مخاطر الاستثمار عالية التقلب الشديد",
    sec1Desc: "تخضع شبكات العملات المشفرة والأصول الرقمية بطبيعتها لتقلبات هيكلية شديدة، وثغرات في البروتوكولات، وفشل نظامي مفاجئ. من خلال التفاعل مع هذه الأسواق، فإنك تقر بأنك قد تواجه خسارة فورية ودائمة لكل رأس المال المستثمر.",
    sec2Title: "2. عدم وجود ضمانات مطلقة للمعلومات وسجلات النظام",
    sec2Desc: "يتم تقديم جميع المخططات ومصفوفات القياس وسجلات حركة الحيتان وتدفقات أسعار السوق بشكل صارم على أساس 'كما هي'. نحن لا نقدم أي ضمانات صريحة أو ضمنية بشأن الدقة الرياضية أو الموثوقية التنبؤية للبيانات.",
    sec3Title: "3. الاستقلالية الفردية والمسؤولية الشخصية (DYOR)",
    sec3Desc: "يحتفظ كل مستخدم بالمسؤولية الحصرية والكاملة عن تخصيصات رأس المال الخاصة به وصفقاته الرقمية. نحن نملي عليك بوضوح إجراء بحثك المكثف الخاص (DYOR) قبل التزام الأصول بأي شبكة سيولة متقلبة.",
    sec4Title: "4. بروتوكولات الطرف الثالث وروابط التطبيقات اللامركزية dApp",
    sec4Desc: "غالبًا ما تحتوي عقدنا الإخبارية على روابط تشير إلى أنظمة مستقلة تابعة لجهات خارجية أو بورصات لامركزية (DEX). نحن لا نملك أي سلطة إدارية أو رقابة أمنية على هذه العقد الخارجية.",
    sec5Title: "5. الإفصاح الشفاف عن التسويق بالعمولة والرعاية التجارية",
    sec5Desc: "امتثالاً للمعايير التنظيمية التجارية الدولية، قد تعمل بعض الروابط التشعبية كبوابات تابعة مدفوعة الأجر. هذا يعني أننا قد نحصل على عمولة دقيقة من منصات معينة دون أي تكلفة إضافية عليك لتمويل خوادمنا.",
    sec6Title: "6. تحديد المسؤولية الشامل والتعويض القانوني",
    sec6Desc: "تحت أي تكوين قانوني، لن يتم تحميل CryptoNewsTrend أو مطوريها أو شركاتها التابعة المسؤولية تجاه أي مستخدم عن تصفية المحفظة المالية، أو أخطاء التداول الآلي، أو توقف الخادم عن العمل الناتجة عن محتوانا.",
    compTitle: "التوجيهات القانونية والتنظيمية"
  },
  zh: {
    title: "免责声明",
    lastUpdated: "最后更新：2026年6月",
    intro: `${SITE_NAME} 作为一个完全独立的数字新闻网络、程序化分析矩阵和教育指数聚合平台运营，专注于去中心化金融 (DeFi) 和加密货币现货市场。我们节点提供的数据均由系统自主编译。`,
    noticeTitle: "绝对金融与投资建议排除声明",
    noticeDesc: "CryptoNewsTrend 的社论团队、数据流和系统管理员均不是注册经纪商、认证财务顾问或资产管理人。本平台上发布、编译或转发的任何内容均不构成量身定制的投资、法律或交易建议。",
    sec1Title: "1. 极端高波动性投资风险声明",
    sec1Desc: "加密货币网络、代币化衍生品和数字账本资产本质上受到极端结构性波动、协议漏洞和突然的系统性崩溃的影响。参与这些市场即代表您承认：您可能会立即面临所部署的全部经济资本的不可撤销的彻底损失。",
    sec2Title: "2. 信息和系统日志的绝对非保证",
    sec2Desc: "所有图表、遥测矩阵、巨鲸资金流向日志和市场价格流均严格按“原样”和“可用性”基础交付。我们不对任何自动化数据管道的完整性、实时精确度或未来预测可靠性提供任何明示或暗示的保证。",
    sec3Title: "3. 独立自主与个人问责 (DYOR)",
    sec3Desc: "每位用户对自己的独立资本配置、区块链钱包签名和去中心化代币交易承担绝对、排他的责任。我们明确规定：在将资产投入任何高风险的流动性网络之前，您必须进行广泛的自我研究 (DYOR) 并咨询持牌顾问。",
    sec4Title: "4. 第三方协议与去中心化 dApp 外部链接",
    sec4Desc: "我们的新闻节点经常包含指向独立第三方生态系统或去中心化交易所 (DEX) 的路径。我们对这些外部节点不拥有 any 行政管辖权、治理权或数据安全控制权。您与第三方网络的交互风险完全由您自行承担。",
    sec5Title: "5. 商业广告联盟与赞助信息披露",
    sec5Desc: "根据国际贸易监管标准，一些超链接可能会作为付费联盟网关运行。这意味着我们可能会从特定的协议平台获得微薄的佣金，而您无需承担任何增量成本。这笔资金能维持我们全球服务器运行。",
    sec6Title: "6. 责任的全面限制与免责补偿",
    sec6Desc: "在任何法律配置下，CryptoNewsTrend、其开发团队、数据分析师或社论代表均不对任何用户或实体的任何投资组合爆仓、算法交易错误、数据传输延迟或系统漏洞承担任何法律责任。",
    compTitle: "合规与法律指令"
  }
};

export async function generateMetadata({ params }) {
  const {locale} =await params || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";

  const canonical =
    currentLocale === "en"
      ? `${SITE_URL}/disclaimer`
      : `${SITE_URL}/${currentLocale}/disclaimer`;

  return {
    title: `Financial Disclaimer - ${SITE_NAME}`,
    description: `Official corporate, legal, and risk exclusion disclaimer for ${SITE_NAME}. Read about cryptocurrency data telemetry warranties, compliance parameters, and absolute limitation of liability structures.`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: `Financial Disclaimer - ${SITE_NAME}`,
      description: `Corporate investment risk exclusion parameters and systemic non-warranty legal limits for ${SITE_NAME}.`,
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

export default function DisclaimerPage({ params }) {
  const locale = params?.locale || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;
  const t = LOCALIZED_DISCLAIMER[currentLocale] || LOCALIZED_DISCLAIMER["en"];

  const pageUrl = currentLocale === "en" ? `${SITE_URL}/disclaimer` : `${SITE_URL}/${currentLocale}/disclaimer`;

  return (
    <>
      <Script
        id="disclaimer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.title,
            url: pageUrl,
            description: `Official systemic risk disclaimer and legal notice document issued by ${SITE_NAME} network.`,
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL
            }
          })
        }}
      />
      
      {/* Light / Dark Mode Friendly Clean Professional Layout */}
      <main 
        className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 py-16 md:py-24"
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Main Title Header */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              {t.title}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono">
              {t.lastUpdated}
            </p>
          </div>

          {/* Legal Text Stream with high typography control */}
          <div className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300 font-normal">
            <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">
              {t.intro}
            </p>

            {/* CRITICAL WARNING BOX - RTL Safe borders */}
            <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 my-8 rounded-r-xl rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-xl">
              <p className="m-0 font-extrabold text-orange-600 dark:text-orange-500 text-lg">
                {t.noticeTitle}
              </p>
              <p className="m-0 text-sm mt-2 text-gray-800 dark:text-gray-300 font-medium leading-normal">
                {t.noticeDesc}
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec1Title}</h2>
              <p>{t.sec1Desc}</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec2Title}</h2>
              <p>{t.sec2Desc}</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec3Title}</h2>
              <p>{t.sec3Desc}</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec4Title}</h2>
              <p>{t.sec4Desc}</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec5Title}</h2>
              <p>{t.sec5Desc}</p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec6Title}</h2>
              <p>{t.sec6Desc}</p>
            </section>
          </div>

          {/* Internal Footer Navigation Hub for SEO and Compliance indexing */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">{t.compTitle}</h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Link href={`${prefix}/terms-and-conditions`} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href={`${prefix}/privacy-policy`} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href={`${prefix}/about`} className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                About Platform
              </Link>
            </nav>
          </div>

        </div>
      </main>
    </>
  );
}