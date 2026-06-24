import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// ── Per-locale SEO Metadata ─────────────────────────────
const META = {
  en: {
    title: "Editorial Policy - CryptoNewsTrend | Journalism Standards",
    desc: "Learn how CryptoNewsTrend ensures accurate, independent, and transparent crypto journalism through strict verification processes.",
  },
  ur: {
    title: "ادارتی پالیسی - CryptoNewsTrend",
    desc: "جانیں کہ کس طرح CryptoNewsTrend سخت تصدیقی عمل کے ذریعے درست، آزاد اور شفاف کرپٹو صحافت کو یقینی بناتا ہے۔",
  },
  ar: {
    title: "السياسة التحريرية - CryptoNewsTrend | معايير الصحافة",
    desc: "تعرف على كيفية ضمان CryptoNewsTrend لصحافة عملات رقمية دقيقة ومستقلة وشفافة من خلال عمليات تحقق صارمة.",
  },
  es: {
    title: "Política Editorial - CryptoNewsTrend | Estándares de Periodismo",
    desc: "Conozca cómo CryptoNewsTrend garantiza un periodismo de criptomonedas preciso, independiente y transparente.",
  },
  fr: {
    title: "Politique Éditoriale - CryptoNewsTrend | Normes Journalistiques",
    desc: "Découvrez comment CryptoNewsTrend garantit un journalisme crypto précis, indépendant et transparent.",
  },
  de: {
    title: "Redaktionelle Richtlinien - CryptoNewsTrend",
    desc: "Erfahren Sie, wie CryptoNewsTrend durch strenge Verifizierungsprozesse einen präzisen und unabhängigen Krypto-Journalismus gewährleistet.",
  },
  ru: {
    title: "Редакционная Политика - CryptoNewsTrend | Стандарты Журналистики",
    desc: "Узнайте, как CryptoNewsTrend обеспечивает точную, независимую и прозрачную криптожурналистику.",
  },
  zh: {
    title: "编辑政策 - CryptoNewsTrend | 新闻规范",
    desc: "了解 CryptoNewsTrend 如何通过严格的审核流程确保准确、独立和透明的加密货币新闻报道。"
  }
};

// ── Per-locale UI Content Dictionary ────────────────────
const POLICY_DICT = {
  en: {
    h1: "Editorial Policy",
    intro: "At CryptoNewsTrend, we are committed to delivering accurate, transparent, and independent crypto journalism. Our editorial standards ensure that readers receive trustworthy information in a fast-moving digital asset market.",
    bannerTitle: "Independence is our foundation",
    bannerDesc: "Editorial decisions are never influenced by advertisers, sponsors, or external stakeholders.",
    s1Title: "1. Accuracy & Fact Checking",
    s1Desc: "Every article published on CryptoNewsTrend goes through a strict verification process. We cross-check information using:",
    s1Points: [
      "Official exchange announcements (Binance, Coinbase, etc.)",
      "On-chain blockchain data providers",
      "Verified project documentation and whitepapers",
      "Multiple independent news sources"
    ],
    s2Title: "2. Editorial Independence",
    s2Desc: "Our newsroom operates independently from commercial influence. We do not accept payments for positive coverage, rankings, or biased reporting. Sponsored content is always clearly labeled.",
    s3Title: "3. Sources of Information",
    s3Desc: "We rely on primary sources such as blockchain explorers, official statements, regulatory filings, and direct announcements from crypto projects and exchanges.",
    s4Title: "4. Corrections Policy",
    s4Desc: "If an error is identified, we correct it promptly and transparently. Updates include a visible correction note describing what was changed and when.",
    s5Title: "5. Content Integrity",
    s5Desc: "We do not publish misleading headlines, manipulated data, or false information. Clickbait or deceptive practices are strictly prohibited in our newsroom.",
    s6Title: "6. Sponsored Content",
    s6Desc: "Any sponsored article, advertisement, or partnership content is clearly labeled as 'Sponsored' or 'Paid Partnership' to maintain full transparency with readers.",
    s7Title: "7. Editorial Updates",
    s7Desc: "Our articles may be updated as new verified information becomes available. All updates are timestamped for transparency.",
    lastUpdated: "Last updated: June 2026"
  },
  ur: {
    h1: "ادارتی پالیسی",
    intro: "CryptoNewsTrend پر، ہم درست، شفاف اور آزاد کرپٹو صحافت کی فراہمی کے لیے پرعزم ہیں۔ ہمارے ادارتی معیارات اس بات کو یقینی بناتے ہیں کہ قارئین کو اس تیزی سے بدلتی ہوئی ڈیجیٹل اثاثوں کی مارکیٹ میں قابل اعتماد معلومات ملیں۔",
    bannerTitle: "آزادی ہماری بنیاد ہے",
    bannerDesc: "ادارتی فیصلے کبھی بھی مشتہرین، سپانسرز، یا بیرونی اسٹیک ہولڈرز سے متاثر نہیں ہوتے۔",
    s1Title: "1۔ درستگی اور حقائق کی جانچ",
    s1Desc: "CryptoNewsTrend پر شائع ہونے والا ہر مضمون ایک سخت تصدیقی عمل سے گزرتا ہے۔ ہم معلومات کی تصدیق ان ذرائع سے کرتے ہیں:",
    s1Points: [
      "آفیشل ایکسچینج اعلانات (بائننس، کوائن بیس، وغیرہ)",
      "آن چین بلاک چین ڈیٹا فراہم کنندگان",
      "تصدیق شدہ پروجیکٹ دستاویزات اور وائٹ پیپرز",
      "متعدد آزاد خبروں کے ذرائع"
    ],
    s2Title: "2۔ ادارتی خودمختاری",
    s2Desc: "ہمارا نیوز روم تجارتی اثر و رسوخ سے آزادانہ طور پر کام کرتا ہے۔ ہم مثبت کوریج، درجہ بندی، یا متعصبانہ رپورٹنگ کے لیے ادائیگیاں قبول نہیں کرتے۔ سپانسر شدہ مواد پر ہمیشہ واضح طور پر لیبل لگایا جاتا ہے۔",
    s3Title: "3۔ معلومات کے ذرائع",
    s3Desc: "ہم بنیادی ذرائع جیسے بلاک چین ایکسپلوررز، سرکاری بیانات، ریگولیٹری فائلنگز، اور کرپٹو پروجیکٹس اور ایکسچینجز کے براہ راست اعلانات پر انحصار کرتے ہیں۔",
    s4Title: "4۔ تصحیح کی پالیسی",
    s4Desc: "اگر کسی غلطی کی نشاندہی ہوتی ہے، تو ہم اس کی فوری اور شفاف طریقے سے تصحیح کرتے ہیں۔ اپڈیٹس میں ایک واضح تصحیح کا نوٹ شامل ہوتا ہے جس میں بتایا جاتا ہے کہ کیا اور کب تبدیل کیا گیا تھا۔",
    s5Title: "5۔ مواد کی سالمیت",
    s5Desc: "ہم گمراہ کن سرخیاں، ہیرا پھیری پر مبنی ڈیٹا، یا جھوٹی معلومات شائع نہیں کرتے۔ ہمارے نیوز روم میں کلک بیٹ یا فریب آمیز ہتھکنڈوں کی سخت ممانعت ہے۔",
    s6Title: "6۔ سپانسر شدہ مواد",
    s6Desc: "قارئین کے ساتھ مکمل شفافیت برقرار رکھنے کے لیے کسی بھی سپانسر شدہ مضمون، اشتہار، یا شراکت داری کے مواد پر واضح طور پر 'Sponsored' یا 'Paid Partnership' کا لیبل لگایا جاتا ہے۔",
    s7Title: "7۔ ادارتی اپڈیٹس",
    s7Desc: "نئی تصدیق شدہ معلومات دستیاب ہونے پر ہمارے مضامین کو اپ ڈیٹ کیا جا سکتا ہے۔ شفافیت کے لیے تمام اپڈیٹس پر وقت اور تاریخ درج کی جاتی ہے۔",
    lastUpdated: "آخری بار اپ ڈیٹ کیا گیا: جون 2026"
  },
  ar: {
    h1: "السياسة التحريرية",
    intro: "في CryptoNewsTrend، نحن ملتزمون بتقديم صحافة عملات رقمية دقيقة وشفافة ومستقلة. تضمن معاييرنا التحريرية حصول القراء على معلومات موثوقة في سوق الأصول الرقمية سريع الحركة.",
    bannerTitle: "الاستقلالية هي أساسنا",
    bannerDesc: "لا تتأثر القرارات التحريرية أبداً بالمعلنين أو الرعاة أو أصحاب المصلحة الخارجيين.",
    s1Title: "1. الدقة والتحقق من الحقائق",
    s1Desc: "تخضع كل مقالة تنشر على CryptoNewsTrend لعملية تحقق صارمة. نحن نقوم بمطابقة المعلومات باستخدام:",
    s1Points: [
      "الإعلانات الرسمية للمنصات (Binance ،Coinbase، إلخ.)",
      "مزوّدي بيانات البلوكشين على الشبكة (On-chain)",
      "وثائق المشاريع والأوراق البيضاء Verified الوثائق",
      "مصادر إخبارية مستقلة متعددة"
    ],
    s2Title: "2. الاستقلال التحريري",
    s2Desc: "تعمل غرفة الأخبار لدينا بشكل مستقل عن أي نفوذ تجاري. نحن لا نقبل أي مبالغ مالية مقابل تغطية إيجابية أو تصنيفات أو تقارير متحيزة. يتم دائماً تمييز المحتوى الإعلاني بوضوح.",
    s3Title: "3. مصادر المعلومات",
    s3Desc: "نحن نعتمد على المصادر الأولية مثل مستكشفي البلوكشين، البيانات الرسمية، الإيداعات التنظيمية، والإعلانات المباشرة من مشاريع العملات الرقمية والمنصات.",
    s4Title: "4. سياسة التصحيح",
    s4Desc: "إذا تم تحديد خطأ ما، نقوم بتصحيحه فوراً وبشفافية. تتضمن التحديثات ملاحظة تصحيح مرئية توضح ما تم تغييره ووقت التغيير.",
    s5Title: "5. سلامة المحتوى",
    s5Desc: "نحن لا ننشر عناوين مضللة أو بيانات متلاعب بها أو معلومات خاطئة. العناوين الخادعة (Clickbait) ممتوعة تماماً في غرفة أخبارنا.",
    s6Title: "6. المحتوى الممول",
    s6Desc: "يتم تمييز أي مقال ممول أو إعلان أو محتوى شراكة بوضوح على أنه 'برعاية' أو 'شراكة مدفوعة' للحفاظ على الشفافية الكاملة مع القراء.",
    s7Title: "7. التحديثات التحريرية",
    s7Desc: "قد يتم تحديث مقالاتنا عند توفر معلومات جديدة تم التحقق منها. يتم وضع طابع زمني على جميع التحديثات لضمان الشفافية.",
    lastUpdated: "آخر تحديث: يونيو 2026"
  },
  es: {
    h1: "Política Editorial",
    intro: "En CryptoNewsTrend, nos comprometemos a brindar un periodismo criptográfico preciso, transparente e independiente. Nuestros estándares editoriales aseguran que los lectores reciban información confiable en un mercado de activos digitales en rápida evolución.",
    bannerTitle: "La independencia es nuestra base",
    bannerDesc: "Las decisiones editoriales nunca están influenciadas por anunciantes, patrocinadores o partes interesadas externas.",
    s1Title: "1. Precisión y verificación de hechos",
    s1Desc: "Cada artículo publicado en CryptoNewsTrend pasa por un estricto proceso de verificación. Cotejamos la información utilizando:",
    s1Points: [
      "Anuncios oficiales de intercambios (Binance, Coinbase, etc.)",
      "Proveedores de datos blockchain en cadena (on-chain)",
      "Documentación oficial y libros blancos (whitepapers) del proyecto",
      "Múltiples fuentes de noticias independientes"
    ],
    s2Title: "2. Independencia Editorial",
    s2Desc: "Nuestra sala de redacción opera independientemente de la influencia comercial. No aceptamos pagos por cobertura positiva, clasificaciones o informes sesgados. El contenido patrocinado siempre está claramente etiquetado.",
    s3Title: "3. Fuentes de Información",
    s3Desc: "Nos basamos en fuentes primarias como exploradores de blockchain, declaraciones oficiales, presentaciones regulatorias y anuncios directos de proyectos criptográficos e intercambios.",
    s4Title: "4. Política de Correcciones",
    s4Desc: "Si se identifica un error, lo corregimos de manera rápida y transparente. Las actualizaciones incluyen una nota de corrección visible que describe qué se cambió y cuándo.",
    s5Title: "5. Integridad del Contenido",
    s5Desc: "No publicamos titulares engañosos, datos manipulados ni información falsa. El clickbait o las prácticas engañosas están estrictamente prohibidas en nuestra sala de redacción.",
    s6Title: "6. Contenido Patrocinado",
    s6Desc: "Cualquier artículo patrocinado, anuncio o contenido de asociación se etiqueta claramente como 'Patrocinado' o 'Asociación pagada' para mantener la transparencia total con los lectores.",
    s7Title: "7. Actualizaciones Editoriales",
    s7Desc: "Nuestros artículos pueden actualizarse a medida que haya nueva información verificada disponible. Todas las actualizaciones incluyen una marca de tiempo para mayor transparencia.",
    lastUpdated: "Última actualización: Junio de 2026"
  },
  fr: {
    h1: "Politique Éditoriale",
    intro: "Chez CryptoNewsTrend, nous nous engageons à fournir un journalisme crypto précis, transparent et indépendant. Nos normes éditoriales garantissent que les lecteurs reçoivent des informations fiables sur un marché des actifs numériques en évolution rapide.",
    bannerTitle: "L'indépendance est notre fondement",
    bannerDesc: "Les décisions éditoriales ne sont jamais influencées par les annonceurs, les sponsors ou les parties prenantes externes.",
    s1Title: "1. Exactitude & Vérification des Faits",
    s1Desc: "Chaque article publié sur CryptoNewsTrend passe par un processus de vérification strict. Nous recoupons les informations en utilisant :",
    s1Points: [
      "Les annonces officielles des plateformes (Binance, Coinbase, etc.)",
      "Les fournisseurs de données blockchain on-chain",
      "La documentation officielle et les livres blancs (whitepapers) des projets",
      "Plusieurs sources d'information indépendantes"
    ],
    s2Title: "2. Indépendance Éditoriale",
    s2Desc: "Notre rédaction fonctionne indépendamment de toute influence commerciale. Nous n'acceptons aucun paiement pour une couverture positive, des classements ou des rapports biaisés. Le contenu sponsorisé est toujours clairement identifié.",
    s3Title: "3. Sources d'Information",
    s3Desc: "Nous nous appuyons sur des sources primaires telles que les explorateurs de blockchain, les communiqués officiels, les documents réglementaires et les annonces directes des projets crypto et des plateformes d'échange.",
    s4Title: "4. Politique de Correction",
    s4Desc: "Si une erreur est identifiée, nous la corrigeons rapidement et de manière transparente. Les mises à jour incluent une note de correction visible décrivant ce qui a été modifié et quand.",
    s5Title: "5. Intégrité du Contenu",
    s5Desc: "Nous ne publions pas de titres trompeurs, de données manipulées ou de fausses informations. Le clickbait ou les pratiques trompeuses sont strictement interdits dans notre rédaction.",
    s6Title: "6. Contenu Sponsorisé",
    s6Desc: "Tout article sponsorisé, publicité ou contenu de partenariat est clairement étiqueté comme 'Sponsorisé' ou 'Partenariat payant' afin de maintenir une pleine transparence avec nos lecteurs.",
    s7Title: "7. Mises à Jour Éditoriales",
    s7Desc: "Nos articles peuvent être mis à jour à mesure que de nouvelles informations vérifiées deviennent disponibles. Toutes les mises à jour sont horodatées par souci de transparence.",
    lastUpdated: "Dernière mise à jour : Juin 2026"
  },
  de: {
    h1: "Redaktionelle Richtlinien",
    intro: "Bei CryptoNewsTrend setzen wir uns für einen präzisen, transparenten und unabhängigen Krypto-Journalismus ein. Unsere redaktionellen Standards stellen sicher, dass die Leser in einem sich schnell bewegenden Markt für digitale Assets vertrauenswürdige Informationen erhalten.",
    bannerTitle: "Unabhängigkeit ist unser Fundament",
    bannerDesc: "Redaktionelle Entscheidungen werden niemals von Werbekunden, Sponsoren oder externen Stakeholdern beeinflusst.",
    s1Title: "1. Genauigkeit & Faktenprüfung",
    s1Desc: "Jeder auf CryptoNewsTrend veröffentlichte Artikel durchläuft ein strenges Prüfungsverfahren. Wir überprüfen Informationen mithilfe von:",
    s1Points: [
      "Offiziellen Ankündigungen von Kryptobörsen (Binance, Coinbase etc.)",
      "On-Chain-Blockchain-Datenanbietern",
      "Verifizierten Projektdokumentationen und Whitepapern",
      "Mehreren unabhängigen Nachrichtenquellen"
    ],
    s2Title: "2. Redaktionelle Unabhängigkeit",
    s2Desc: "Unsere Redaktion arbeitet unabhängig von kommerziellen Einflüssen. Wir akzeptieren keine Zahlungen für positive Berichterstattung, Rankings oder voreingenommene Berichte. Gesponserte Inhalte werden immer klar gekennzeichnet.",
    s3Title: "3. Informationsquellen",
    s3Desc: "Wir verlassen uns auf Primärquellen wie Blockchain-Explorer, offizielle Erklärungen, behördliche Meldungen und direkte Ankündigungen von Krypto-Projekten und -Börsen.",
    s4Title: "4. Korrekturrichtlinie",
    s4Desc: "Wenn ein Fehler festgestellt wird, korrigieren wir ihn umgehend und transparent. Aktualisierungen enthalten einen sichtbaren Korrekturhinweis, der beschreibt, was wann geändert wurde.",
    s5Title: "5. Integrität der Inhalte",
    s5Desc: "Wir veröffentlichen keine irreführenden Schlagzeilen, manipulierten Daten oder falschen Informationen. Clickbait oder betrügerische Praktiken sind in unserer Redaktion strengstens untersagt.",
    s6Title: "6. Gesponserte Inhalte",
    s6Desc: "Jeder gesponserte Artikel, jede Werbung oder jeder Partnerschaftsinhalt wird klar als 'Gesponsert' oder 'Bezahlte Partnerschaft' gekennzeichnet, um absolute Transparenz gegenüber den Lesern zu gewährleisten.",
    s7Title: "7. Redaktionelle Aktualisierungen",
    s7Desc: "Unsere Artikel können aktualisiert werden, sobald neue verifizierte Informationen verfügbar sind. Alle Aktualisierungen werden aus Transparenzgründen mit einem Zeitstempel versehen.",
    lastUpdated: "Zuletzt aktualisiert: Juni 2026"
  },
  ru: {
    h1: "Редакционная Политика",
    intro: "В CryptoNewsTrend мы стремимся предоставлять точную, прозрачную и независимую криптожурналистику. Наши редакционные стандарты гарантируют, что читатели получают достоверную информацию на быстро меняющемся рынке цифровых активов.",
    bannerTitle: "Независимость — наш фундамент",
    bannerDesc: "Редакционные решения никогда не зависят от рекламодателей, спонсоров или внешних заинтересованных сторон.",
    s1Title: "1. Точность и проверка фактов",
    s1Desc: "Каждая статья, опубликованная на CryptoNewsTrend, проходит строгую проверку. Мы перепроверяем информацию, используя:",
    s1Points: [
      "Официальные анонсы бирж (Binance, Coinbase и др.)",
      "Поставщиков ончейн-данных блокчейна",
      "Верифицированную проектную документацию и белые книги (whitepapers)",
      "Несколько независимых новостных источников"
    ],
    s2Title: "2. Редакционная независимость",
    s2Desc: "Наша редакция работает независимо от коммерческого влияния. Мы не принимаем оплату за позитивное освещение, рейтинги или предвзятые отчеты. Спонсируемый контент всегда четко маркируется.",
    s3Title: "3. Источники информации",
    s3Desc: "Мы опираемся на первоисточники, такие как блокчейн-эксплореры, официальные заявления, нормативные документы и прямые объявления от криптопроектов и бирж.",
    s4Title: "4. Политика исправлений",
    s4Desc: "Если обнаруживается ошибка, мы оперативно и прозрачно исправляем ее. Обновления включают видимое примечание об исправлении с описанием того, что было изменено и когда.",
    s5Title: "5. Целостность контента",
    s5Desc: "Мы не публикуем вводящие в заблуждение заголовки, сфальсифицированные данные или ложную информацию. Кликбейт или обманные методы строго запрещены в нашей редакции.",
    s6Title: "6. Спонсорский контент",
    s6Desc: "Любая спонсируемая статья, реклама или партнерский контент четко маркируются как «Спонсорский материал» или «Оплачиваемое партнерство» для поддержания полной прозрачности перед читателями.",
    s7Title: "7. Редакционные обновления",
    s7Desc: "Наши статьи могут обновляться по мере появления новой проверенной информации. Все обновления снабжаются отметкой времени для прозрачности.",
    lastUpdated: "Последнее обновление: Июнь 2026"
  },
  zh: {
    h1: "编辑政策",
    intro: "在 CryptoNewsTrend，我们致力于提供准确、透明和独立的加密新闻报道。我们的编辑标准确保读者在快速变化的数字资产市场中获得值得信赖的信息。",
    bannerTitle: "独立性是我们的基石",
    bannerDesc: "编辑决策绝不受广告商、赞助商或外部利益相关者的影响。",
    s1Title: "1. 准确性与事实核查",
    s1Desc: "在 CryptoNewsTrend 发表 occur 的每篇文章都要经过严格的核查程序。我们通过以下方式交叉核对信息：",
    s1Points: [
      "官方交易所公告（Binance、Coinbase 等）",
      "链上区块链数据提供商",
      "经认证的项目文件和白皮书",
      "多个独立的新闻来源"
    ],
    s2Title: "2. 编辑独立性",
    s2Desc: "我们的编辑部独立于商业利益运作。我们不接受任何旨在获得正面报道、排名或偏向性报道的付费。赞助内容始终会清晰标注。",
    s3Title: "3. 信息来源",
    s3Desc: "我们依赖一手来源，如区块链浏览器、官方声明、监管备案以及加密项目和交易所的直接公告。",
    s4Title: "4. 更正政策",
    s4Desc: "如果发现错误，我们会及时、透明地进行更正。更新内容将包含一个明显的更正说明，详细描述修改的内容及时间。",
    s5Title: "5. 内容完整性",
    s5Desc: "我们不发表误导性的标题、操纵的数据或虚假信息。我们的编辑部严厉禁止点击诱饵（Clickbait）或欺诈性行为。",
    s6Title: "6. 赞助内容",
    s6Desc: "任何赞助文章、广告或合作内容都会清晰标注为“赞助”或“付费合作”，以保持对读者的完全透明。",
    s7Title: "7. 编辑更新",
    s7Desc: "随着新的核实信息的出现，我们的文章可能会进行更新。为了公开透明，所有更新都会标注时间戳。",
    lastUpdated: "最后更新时间：2026年6月"
  }
};

export async function generateMetadata({ params }) {
  const { locale: raw } = await params || "en";
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const currentMeta = META[locale] || META.en;

  const canonical =
    locale === "en"
      ? `${SITE_URL}/editorial-policy`
      : `${SITE_URL}/${locale}/editorial-policy`;

  return {
    title: currentMeta.title,
    description: currentMeta.desc,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title: currentMeta.title,
      description: currentMeta.desc,
      url: canonical,
      siteName: "CryptoNewsTrend",
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
      title: currentMeta.title,
      description: currentMeta.desc,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export default async function EditorialPolicyPage({ params }) {
  const { locale: raw } = await params || "en";
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const isRtl = ["ur", "ar"].includes(locale);
  
  const t = POLICY_DICT[locale] || POLICY_DICT.en;

  return (
    <>
      <Script
        type="application/ld+json"
        id="editorial-policy-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.h1,
            url: locale === "en" ? `${SITE_URL}/editorial-policy` : `${SITE_URL}/${locale}/editorial-policy`,
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
        className="min-h-screen py-20 bg-transparent text-current transition-colors duration-200" 
        dir={isRtl ? "rtl" : "ltr"}
        lang={locale}
      >
        <div className="container mx-auto px-4 max-w-4xl prose dark:prose-invert prose-orange dynamic-content-flow">
          
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">{t.h1}</h1>
          
          <p className="text-lg leading-relaxed mb-8 opacity-90">
            {t.intro}
          </p>

          {/* CORE PRINCIPLE NOTIFICATION BANNER */}
          <div className="bg-purple-500/10 border-s-4 border-purple-500 p-6 my-8 rounded-e-lg shadow-sm">
            <p className="m-0 font-bold text-purple-500 dark:text-purple-400 text-base">
              {t.bannerTitle}
            </p>
            <p className="m-0 text-sm mt-2 opacity-85">
              {t.bannerDesc}
            </p>
          </div>

          <div className="space-y-8 mt-10">
            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s1Title}</h2>
              <p className="opacity-85 mb-4">{t.s1Desc}</p>
              <ul className="list-disc ps-5 space-y-2 opacity-85">
                {t.s1Points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s2Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s2Desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s3Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s3Desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s4Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s4Desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s5Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s5Desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s6Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s6Desc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">{t.s7Title}</h2>
              <p className="opacity-85 leading-relaxed">{t.s7Desc}</p>
            </section>
          </div>

          <p className="text-xs opacity-50 mt-14 pt-6 border-t border-gray-500/20 font-mono">
            {t.lastUpdated}
          </p>

        </div>
      </main>
    </>
  );
}