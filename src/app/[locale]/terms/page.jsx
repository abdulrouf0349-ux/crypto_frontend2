import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// Localized Content Matrix for Terms & Conditions
const LOCALIZED_TERMS = {
  en: {
    title: "Terms & Conditions",
    lastUpdated: "Last updated: June 2026",
    welcome: `Welcome to ${SITE_NAME}. By accessing, browsing, or using our website and all subdomains, you explicitly agree to comply with and be legally bound by the following comprehensive Terms and Conditions. If you do not agree to these terms, please immediately discontinue using our services, APIs, token indices, and digital content matrices.`,
    noticeTitle: "Risk Warning & Absolute Disclaimer",
    noticeDesc: "All content, data, analytical charts, and historical reporting provided across this platform are for strictly informational and educational purposes only. Nothing contained here constitutes financial, legal, tax, or professional investment advice.",
    sec1Title: "1. Acceptance and Use of Website",
    sec1Desc: "By using this platform, you represent that you are at least 13 years of age. You agree to utilize our cryptocurrency reporting and aggregate indexes solely for lawful purposes. You are strictly prohibited from utilizing automated data scrapers, bots, or custom crawl scripts to extract proprietary text panels, price telemetry feeds, or structural HTML models without express written authorization.",
    sec2Title: "2. Intellectual Property Rights",
    sec2Desc: "All structural layouts, custom graphic banners, source articles, proprietary token research, logos, and system designs are the exclusive intellectual property of CryptoNewsTrend unless explicitly stated otherwise. Unauthorized duplication, modification, syndication, or redistribution of these assets across external media protocols or decentralized channels is strictly illegal.",
    sec3Title: "3. Market Volatility & Content Accuracy",
    sec3Desc: "The digital asset and cryptocurrency markets are exceptionally volatile and prone to sudden structural fluctuations. While our editorial team strives to verify source data, we provide no warranties or guarantees regarding the completeness, accuracy, real-time validity, or absolute reliability of any index prices, breaking dispatches, or smart contract analysis.",
    sec4Title: "4. No Financial Advisor Relationship",
    sec4Desc: "CryptoNewsTrend does not operate as a registered broker-dealer, asset management custodian, or financial advisor. Cryptocurrency investments carry inherent capital risks. You maintain full, singular accountability for your own trading setups, market entry parameters, and deployment choices.",
    sec5Title: "5. External Third-Party Protocol Links",
    sec5Desc: "Our news streams frequently embed external pathways pointing to decentralized protocols (DeFi), automated smart contracts, centralized trading desks, and external dApps. We possess zero administrative control, governance oversight, or asset execution liability over these external platforms. Interacting with third-party networks is done completely at your own risk.",
    sec6Title: "6. Absolute Limitation of Liability",
    sec6Desc: "To the maximum extent permitted under global commercial law, CryptoNewsTrend, its corporate entities, founders, and editorial desk shall not be held liable for any direct capital losses, portfolio liquidations, indirect data breaches, system downtime, or unexpected software bugs encountered while utilizing our market metrics.",
    sec7Title: "7. Administrative Modifications to Terms",
    sec7Desc: "We reserve full administrative rights to adjust, prune, or completely modify these Terms & Conditions at any point without prior notice. Your continued iteration with our localized pages following modifications implies absolute, irrevocable acceptance of the newly deployed legal framework.",
    sec8Title: "8. Enforcement and Service Termination",
    sec8Desc: "We reserve the right to block specific IP nodes, restrict system access paths, or completely terminate service delivery to any visitor found violating our API guidelines, engaging in script manipulation, or attempting server-side DDoS exploits.",
  },
  ur: {
    title: "شرائط و ضوابط",
    lastUpdated: "آخری اپڈیٹ: جون 2026",
    welcome: `آپ کو ${SITE_NAME} پر خوش آمدید کہتے ہیں۔ ہماری ویب سائٹ، ذیلی ڈومینز اور ڈیجیٹل مواد تک رسائی حاصل کرکے یا انہیں استعمال کرکے، آپ واضح طور پر درج ذیل جامع شرائط و ضوابط کی تعمیل کرنے اور ان کے قانونی طور پر پابند ہونے کا اقرار کرتے ہیں۔ اگر آپ ان شرائط سے متفق نہیں ہیں، تو براہ کرم فوری طور پر ہماری خدمات، API نیٹ ورکس اور مارکیٹ ڈیٹا کا استعمال بند کر دیں۔`,
    noticeTitle: "رسک وارننگ اور حتمی دستبرداری",
    noticeDesc: "اس پلیٹ فارم پر فراہم کردہ تمام مواد، ڈیٹا پینلز، تجزیاتی چارٹس اور رپورٹس صرف اور صرف معلوماتی اور تعلیمی مقاصد کے لیے ہیں۔ یہاں موجود کسی بھی معلومات کو مالیاتی، قانونی، ٹیکس یا سرمایہ کاری کی پیشہ ورانہ ترغیب نہ سمجھا جائے۔",
    sec1Title: "1. ویب سائٹ کا استعمال اور قبولیت",
    sec1Desc: "اس پلیٹ فارم کو استعمال کرنے کے لیے آپ کی عمر کم از کم 13 سال ہونی چاہیے۔ آپ ہماری کرپٹو رپورٹنگ کو صرف قانونی مقاصد کے لیے استعمال کرنے کے پابند ہیں۔ ہماری تحریری اجازت کے بغیر خودکار ڈیٹا سکریپرز، بوٹس، یا کرال اسکرپٹس کے ذریعے مواد، پرائس فیڈز، یا ایچ ٹی ایم ایل ماڈلز کو چرانا سخت ممنوع ہے۔",
    sec2Title: "2. دانشورانہ ملکیت کے حقوق (Intellectual Property)",
    sec2Desc: "تمام ساختی لے آؤٹس، گرافک بینرز، آرٹیکلز، ٹوکن ریسرچ، لوگوز اور سسٹم ڈیزائنز CryptoNewsTrend کی خصوصی دانشورانہ ملکیت ہیں، جب تک کہ کسی دوسرے ماخذ کا ذکر نہ ہو۔ ہماری اجازت کے بغیر ان اثاثوں کو کسی دوسرے میڈیا پروٹوکول یا ڈی سینٹرلائزڈ چینلز پر کاپی، تبدیل یا دوبارہ تقسیم کرنا سخت غیر قانونی ہے۔",
    sec3Title: "3. مارکیٹ کے اتار چڑھاؤ اور مواد کی درستگی",
    sec3Desc: "ڈیجیٹل اثاثوں اور کرپٹو کرنسی کی مارکیٹس انتہائی غیر مستحکم ہیں اور ان میں اچانک بڑی تبدیلیاں آتی رہتی ہیں۔ اگرچہ ہماری ٹیم ڈیٹا کی تصدیق کی ہر ممکن کوشش کرتی ہے، لیکن ہم انڈیکس کی قیمتوں، خبروں، یا اسمارٹ کنٹریکٹ کے تجزیوں کی مکملیت، درستگی اور بروقت ہونے کی کوئی ضمانت نہیں دیتے۔",
    sec4Title: "4. مالیاتی مشورے کی نفی",
    sec4Desc: "CryptoNewsTrend کوئی رجسٹرڈ بروکر، اثاثہ مینیجر، یا مالیاتی مشیر نہیں ہے۔ کرپٹو کرنسی کی سرمایہ کاری میں سرمایہ ڈوبنے کے شدید خطرات شامل ہیں۔ آپ اپنے تجارتی فیصلوں، مارکیٹ انٹری پیرامیٹرز، اور فنڈز کی تعیناتی کے خود مکمل طور پر ذمہ دار ہیں۔",
    sec5Title: "5. تھرڈ پارٹی پروٹوکولز اور بیرونی لنکس",
    sec5Desc: "ہماری نیوز اسٹریمز میں اکثر بیرونی لنکس شامل ہوتے ہیں جو ڈی فائی (DeFi) پروٹوکولز، سمارٹ کنٹریکٹس، اور بیرونی ایپلی کیشنز (dApps) کی طرف اشارہ کرتے ہیں۔ ان بیرونی پلیٹ فارمز کے آپریشنز، سیکیورٹی پالیسیوں یا فنڈز کے لین دین پر ہمارا کوئی کنٹرول یا ذمہ داری نہیں ہے۔ ان کا استعمال مکمل طور پر آپ کے اپنے رسک پر ہے۔",
    sec6Title: "6. ذمہ داری کی حتمی حد بندی",
    sec6Desc: "عالمی تجارتی قوانین کے تحت، نیوز پورٹل، اس کے بانیان، اور ایڈیٹوریل ڈیسک کسی بھی قسم کے براہ راست مالی نقصان، پورٹ فولیو لیکویڈیشن، ڈیٹا کی چوری، سسٹم ڈاؤن ٹائم، یا غیر متوقع سافٹ ویئر بگز کے نتیجے میں ہونے والے نقصانات کے ذمہ دار نہیں ہوں گے۔",
    sec7Title: "7. شرائط و ضوابط میں ترمیم کا حق",
    sec7Desc: "ہم بغیر کسی پیشگی اطلاع کے کسی بھی وقت ان شرائط و ضوابط کو تبدیل کرنے، بڑھانے یا ترمیم کرنے کا مکمل انتظامی حق محفوظ رکھتے ہیں۔ ترمیم کے بعد ہماری ویب سائٹ کا مسلسل استعمال اس بات کا ثبوت ہوگا کہ آپ کو نیا قانونی فریم ورک بلا شرط قبول ہے۔",
    sec8Title: "8. خدمات کی معطلی اور نفاذ",
    sec8Desc: "اگر کوئی صارف ہمارے API رہنما خطوط کی خلاف ورزی، اسکرپٹ ہیرا پھیری، یا سرور پر DDoS حملوں کی کوششوں میں ملوث پایا گیا، تو ہم مخصوص آئی پی (IP) نوڈس کو بلاک کرنے اور ان کی رسائی کو مستقل طور پر معطل کرنے کا حق محفوظ رکھتے ہیں۔",
  }
};

export async function generateMetadata({ params }) {
  const locale =await params || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";

  const canonical =
    currentLocale === "en"
      ? `${SITE_URL}/terms`
      : `${SITE_URL}/${currentLocale}/terms`;

  return {
    title: `Terms & Conditions - ${SITE_NAME}`,
    description: `Read the official Terms and Conditions for using ${SITE_NAME}, including user access rules, intellectual property protection, and automated trading asset disclaimers.`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      title: `Terms & Conditions - ${SITE_NAME}`,
      description: `Terms of use and operational data rules for ${SITE_NAME} cryptocurrency news ecosystem.`,
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

export default async function TermsPage({ params }) {
  const locale =await params || "en";
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const t = LOCALIZED_TERMS[currentLocale] || LOCALIZED_TERMS["en"];

  const pageUrl = currentLocale === "en" ? `${SITE_URL}/terms` : `${SITE_URL}/${currentLocale}/terms`;

  return (
    <>
      <Script
        id="terms-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: t.title,
            url: pageUrl,
            description: `Terms and Conditions for ${SITE_NAME} platform usage, intellectual property parameters, and legal disclaimers.`,
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL
            }
          })
        }}
      />
      
      <main 
        className="min-h-screen bg-transparent text-gray-950 dark:text-gray-100 transition-colors duration-200 py-20"
        dir={isRtl ? "rtl" : "ltr"}
        lang={currentLocale}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-6 mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              {t.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {t.lastUpdated}
            </p>
          </div>

          {/* Legal Document Flow */}
          <div className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              {t.welcome}
            </p>

            {/* IMPORTANT NOTICE */}
            <div className="bg-orange-500/10 border-l-4 border-orange-500 dark:border-orange-500 p-6 my-8 rounded-r-xl rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-xl">
              <p className="m-0 font-extrabold text-orange-600 dark:text-orange-500 text-lg">
                {t.noticeTitle}
              </p>
              <p className="m-0 text-sm mt-2 text-gray-800 dark:text-gray-300 font-medium">
                {t.noticeDesc}
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec1Title}</h2>
              <p>{t.sec1Desc}</p>
            </section>

            {/* Section 2 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec2Title}</h2>
              <p>{t.sec2Desc}</p>
            </section>

            {/* Section 3 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec3Title}</h2>
              <p>{t.sec3Desc}</p>
            </section>

            {/* Section 4 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec4Title}</h2>
              <p>{t.sec4Desc}</p>
            </section>

            {/* Section 5 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec5Title}</h2>
              <p>{t.sec5Desc}</p>
            </section>

            {/* Section 6 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec6Title}</h2>
              <p>{t.sec6Desc}</p>
            </section>

            {/* Section 7 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec7Title}</h2>
              <p>{t.sec7Desc}</p>
            </section>

            {/* Section 8 */}
            <section className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">{t.sec8Title}</h2>
              <p>{t.sec8Desc}</p>
            </section>
          </div>

        </div>
      </main>
    </>
  );
}