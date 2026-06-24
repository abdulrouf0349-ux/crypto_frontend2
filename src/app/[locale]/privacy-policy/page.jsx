import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const SITE_NAME = "CryptoNewsTrend";

const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

const SCHEMA_LANGUAGE = {
  en: "en-US", ur: "ur-PK", es: "es-ES", ru: "ru-RU",
  fr: "fr-FR", de: "de-DE", ar: "ar-SA", zh: "zh-CN"
};

// Pure inline localized content matrices definition object
const LOCALIZED_CONTENT = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "June 16, 2026",
    introBold: `${SITE_NAME} is deeply committed to safeguarding your private data and establishing absolute clarity regarding how we monitor, securely capture, and safely process user analytics. This legal framework addresses records stored while you interact with our real-time cryptocurrency news updates, token indices, deep Web3 analysis, and technical market insights across all localized domains.`,
    sec1Title: "1. Information We Collect",
    sec1Desc: "We prioritize minimalist telemetry architecture. The small datasets we register include:",
    sec1L1: "Automated delivery of visitor browser footprints, device system variants, internet protocol (IP addresses), page paths, and duration tracking.",
    sec1L2: "Communication coordinates such as your public name or email handles provided voluntarily when signing up for market updates or dispatch newsletters.",
    sec2Title: "2. Purpose of Data Processing",
    sec2Desc: "Your data remains completely isolated and is accessed exclusively to optimize edge-delivery speeds and map global content localization accurately. Specifically, we use it to:",
    sec2L1: "Serve real-time data panels synchronized with your specific regional locale parameters.",
    sec2L2: "Filter malicious behavioral scripts, defending our API networks from spam and security attacks.",
    sec2L3: "Analyze aggregate trends to optimize our layouts, reporting speeds, and crawl efficiency.",
    sec3Title: "3. Cookies & Automated Tracking Assets",
    sec3Desc: "Our ecosystem uses tracking cookies and session configurations to map user state preferences. These files help retain layout preferences (e.g., local currency toggles, display settings) and provide safe anonymous traffic attribution through trusted tracking networks like Google Analytics. You can adjust your browser settings to completely reject incoming cookie payloads at any time.",
    sec4Title: "4. Third-Party Links & Network Exchanges",
    sec4Desc: "Our dynamic crypto news reporting embeds redirect paths pointing out to external DeFi protocols, smart contracts, decentralized exchanges (DEXs), and standard trading channels. We hold zero governance or execution oversight over external entities. We highly encourage reading the privacy terms of any third-party asset frameworks you choose to visit.",
    sec5Title: "5. Strategic Data Security Standards",
    sec5Desc: "We implement comprehensive cloud firewall rules, strict SSL transmission protocols, and strict database isolation profiles to securely protect user logs against unexpected leakage, data loss, or unauthorized breach attempts. Please note, however, that no digital asset network transmission or database storage mechanism is ever 100% immune to failure.",
    sec6Title: "6. International Regulations: GDPR & CCPA Compliance",
    sec6Desc: "Depending on your location, you have strong structural data rights under frameworks like the European Union GDPR or California Consumer Privacy Act (CCPA). These rights include:",
    sec6L1: "The absolute right to request the deletion of your personal data records from our systems.",
    sec6L2: "The right to export or review the specific informational logs we hold on your profile.",
    sec6L3: "The right to opt out of third-party behavioral advertising profiles.",
    sec7Title: "7. Protection of Children's Privacy",
    sec7Desc: "Our content matrices do not target and are not intentionally designed for individuals under the age of 13. If you believe a minor has accidentally registered data coordinates within our databases, contact us immediately so we can promptly erase those database logs.",
    sec8Title: "8. Adjustments to This Privacy Framework",
    sec8Desc: "We reserve full administrative rights to adjust or update this policy document as needed to reflect infrastructure adjustments or regulatory changes. Any edits automatically go live as soon as they are pushed to this URL.",
    sec9Title: "9. Direct Contact Operations",
    sec9Desc: "For data access requests, deletion requests, or legal inquiries, reach our compliance team directly via email:",
    compTitle: "Corporate & Compliance Resources",
    linkAbout: "About Our Company",
    linkContact: "Contact Editorial Desk",
    linkTerms: "Terms & Conditions",
    linkEditorial: "Editorial Guidelines",
    linkCorrections: "Corrections Matrix"
  },
  ur: {
    title: "پرائیویسی پالیسی",
    lastUpdated: "16 جون، 2026",
    introBold: `${SITE_NAME} آپ کے ذاتی ڈیٹا کی حفاظت اور اس بات کو واضح کرنے کے لیے مکمل طور پر پرعزم ہے کہ ہم کس طرح صارف کی معلومات اور اینالیٹکس کو محفوظ طریقے سے پروسیس کرتے ہیں۔ یہ قانونی فریم ورک ان تمام ریکارڈز کا احاطہ کرتا ہے جو ہمارے ریئل ٹائم کرپٹو نیوز اپڈیٹس، ٹوکن انڈیکسز، اور ویب3 مارکیٹ تجزیوں کے دوران محفوظ کیے جاتے ہیں۔`,
    sec1Title: "1. معلومات جو ہم جمع کرتے ہیں",
    sec1Desc: "ہم کم سے کم ڈیٹا جمع کرنے کے اصول پر کاربند ہیں۔ جو ڈیٹا ہم محفوظ کرتے ہیں اس میں شامل ہے:",
    sec1L1: "صارف کے براؤزر کی تفصیلات، ڈیوائس کی قسم، انٹرنیٹ پروٹوکول (IP ایڈریس)، اور ویب سائٹ پر گزارا گیا وقت۔",
    sec1L2: "رابطے کی معلومات جیسے کہ آپ کا نام یا ای میل ایڈریس جو آپ مارکیٹ اپڈیٹس یا نیوز لیٹر سائن اپ کے دوران خود فراہم کرتے ہیں۔",
    sec2Title: "2. ڈیٹا پروسیسنگ کے مقاصد",
    sec2Desc: "آپ کا ڈیٹا مکمل طور پر محفوظ رکھا جاتا ہے اور اسے صرف ویب سائٹ کی اسپیڈ اور مواد کو بہتر بنانے کے لیے استعمال کیا جاتا ہے۔ خاص طور پر:",
    sec2L1: "آپ کے علاقائی پیرامیٹرز کے مطابق ریئل ٹائم کرپٹو ڈیٹا پینلز فراہم کرنا۔",
    sec2L2: "نقصان دہ اسکرپٹس اور اسپیم کو روک کر اپنے نیٹ ورک سیکیورٹی کا دفاع کرنا۔",
    sec2L3: "ویب سائٹ کے لے آؤٹس اور لوڈنگ اسپیڈ کو بہتر بنانے کے لیے مجموعی ٹرینڈز کا تجزیہ کرنا۔",
    sec3Title: "3. کوکیز اور خودکار ٹریکنگ اثاثے",
    sec3Desc: "ہمارا پلیٹ فارم صارف کی ترجیحات (جیسے ڈسپلے سیٹنگز یا لوکل کرنسی ٹوگل) کو یاد رکھنے کے لیے کوکیز کا استعمال کرتا ہے۔ یہ فائلیں گوگل اینالیٹکس جیسے قابل اعتماد نیٹ ورکس کے ذریعے گمنام ٹریفک کا ڈیٹا مانیٹر کرنے میں مدد کرتی ہیں۔ آپ کسی بھی وقت اپنے براؤزر کی سیٹنگز سے کوکیز کو مسترد کر سکتے ہیں۔",
    sec4Title: "4. تھرڈ پارٹی لنکس اور بیرونی نیٹ ورکس",
    sec4Desc: "ہماری کرپٹو نیوز رپورٹس میں بیرونی DeFi پروٹوکولز، سمارٹ کنٹریکٹس، اور ڈی سینٹرلائزڈ ایکسچینجز (DEXs) کے لنکس شامل ہو سکتے ہیں۔ ان بیرونی پلیٹ فارمز پر ہمارا کوئی کنٹرول نہیں ہے۔ ہم تجویز کرتے ہیں کہ آپ ان ویب سائٹس کی پرائیویسی شرائط کو لازمی پڑھیں۔",
    sec5Title: "5. ڈیٹا سیکیورٹی کے معیارات",
    sec5Desc: "ہم صارف کے لاگز کو محفوظ رکھنے اور ڈیٹا لیک یا غیر مجاز رسائی کو روکنے کے لیے کلاؤڈ فائر وال رولز اور سیکیور SSL ٹرانسمیشن پروٹوکولز کا استعمال کرتے ہیں۔ تاہم، انٹرنیٹ پر کوئی بھی ڈیجیٹل اسٹوریج 100٪ محفوظ نہیں قرار دیا جا سکتا۔",
    sec6Title: "6. بین الاقوامی قوانین: GDPR اور CCPA کی تعمیل",
    sec6Desc: "آپ کے مقام پر منحصر، آپ کو یورپی یونین کے GDPR یا کیلیفورنیا کے CCPA کے تحت مضبوط قانونی حقوق حاصل ہیں۔ ان حقوق میں شامل ہیں:",
    sec6L1: "ہمارے سسٹم سے اپنے ذاتی ڈیٹا کے ریکارڈ کو مکمل طور پر حذف کرنے کا مطالبہ کرنا۔",
    sec6L2: "اپنے محفوظ کردہ معلوماتی لاگز کی کاپی برآمد کرنے یا جائزہ لینے کا حق۔",
    sec6L3: "تھرڈ پارٹی اشتہارات کی ٹریکنگ کو بند (Opt-out) کرنے کا حق۔",
    sec7Title: "7. بچوں کی پرائیویسی کا تحفظ",
    sec7Desc: "ہمارا مواد 13 سال سے کم عمر کے بچوں کے لیے ڈیزائن نہیں کیا گیا۔ اگر آپ کو لگتا ہے کہ کسی نابالغ کا ڈیٹا غلطی سے ہمارے پاس جمع ہو گیا ہے، تو فوری طور پر ہم سے رابطہ کریں تاکہ ہم اسے حذف کر سکیں۔",
    sec8Title: "8. پرائیویسی فریم ورک میں تبدیلیاں",
    sec8Desc: "ہمیں بنیادی ڈھانچے یا ریگولیٹری تبدیلیوں کے مطابق اس پالیسی دستاویز میں کسی بھی وقت ترمیم کا پورا حق حاصل ہے۔ تبدیلیاں اس یو آر ایل پر اپلوڈ ہوتے ہی لاگو ہو جائیں گی۔",
    sec9Title: "9. براہ راست رابطہ",
    sec9Desc: "ڈیٹا تک رسائی، حذف کرنے کی درخواستوں، یا قانونی سوالات کے لیے، ہماری تعمیل ٹیم سے براہ راست ای میل کے ذریعے رابطہ کریں:",
    compTitle: "کارپوریٹ اور تعمیل کے وسائل",
    linkAbout: "کمپنی کے بارے میں",
    linkContact: "ایڈیٹوریل ڈیسک سے رابطہ کریں",
    linkTerms: "شرائط و ضوابط",
    linkEditorial: "ایڈیٹوریل گائیڈ لائنز",
    linkCorrections: "تصحیح کا میٹرکس"
  }
};

// Clean parameter routing handling for dynamic localized alternate paths
function buildUrl(locale, path = "privacy-policy") {
  const base = locale === "en" ? SITE_URL : `${SITE_URL}/${locale}`;
  return `${base}/${path}`;
}

export async function generateMetadata({ params }) {
  const {locale}=await params
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const canonicalUrl = buildUrl(currentLocale);

  const languages = {};
  VALID_LOCALES.forEach((l) => {
    languages[l] = buildUrl(l);
  });
  languages["x-default"] = `${SITE_URL}/privacy-policy`;

  return {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Read the ${SITE_NAME} Privacy Policy. Learn how we securely collect, manage, and process user data under GDPR and CCPA frameworks while serving global crypto market insights.`,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }) {
  const {locale}=await params
  const currentLocale = VALID_LOCALES.includes(locale) ? locale : "en";
  const currentLangCode = SCHEMA_LANGUAGE[currentLocale];
  const pageUrl = buildUrl(currentLocale);
  const isRtl = ["ur", "ar"].includes(currentLocale);
  const prefix = currentLocale === "en" ? "" : `/${currentLocale}`;

  // Safe direct internal fallbacks assignment context lookup 
  const t = LOCALIZED_CONTENT[currentLocale] || LOCALIZED_CONTENT["en"];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: `Privacy Policy - ${SITE_NAME}`,
        description: `Privacy policy guidelines, compliance data protocols, and legal rights explanations for visitors of ${SITE_NAME}.`,
        inLanguage: currentLangCode,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        datePublished: "2025-01-01T00:00:00Z",
        dateModified: "2026-06-16T00:00:00Z",
        breadcrumb: {
          "@id": `${pageUrl}/#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Privacy Policy",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main 
      className="min-h-screen bg-transparent text-gray-950 dark:text-gray-100 transition-colors duration-200 py-16 md:py-24"
      dir={isRtl ? "rtl" : "ltr"}
      lang={currentLocale}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Core Header Elements */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last Updated: <span className="text-gray-800 dark:text-gray-200 font-semibold">{t.lastUpdated}</span>
          </p>
        </div>

        {/* Informational Intro Container */}
        <div className="max-w-none text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
          <p className="text-lg text-gray-800 dark:text-gray-200">
            <strong>{t.introBold}</strong>
          </p>

          <hr className="border-gray-200 dark:border-gray-800 my-8" />

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec1Title}</h2>
            <p className="mb-3">{t.sec1Desc}</p>
            <ul className={`${isRtl ? "list-disc pr-6 pl-0" : "list-disc pl-6 pr-0"} space-y-2 my-2`}>
              <li><strong>Log Metrics:</strong> {t.sec1L1}</li>
              <li><strong>Voluntary Form Elements:</strong> {t.sec1L2}</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec2Title}</h2>
            <p className="mb-3">{t.sec2Desc}</p>
            <ul className={`${isRtl ? "list-disc pr-6 pl-0" : "list-disc pl-6 pr-0"} space-y-2 my-2`}>
              <li>{t.sec2L1}</li>
              <li>{t.sec2L2}</li>
              <li>{t.sec2L3}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec3Title}</h2>
            <p>{t.sec3Desc}</p>
          </section>

          {/* Section 4 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec4Title}</h2>
            <p>{t.sec4Desc}</p>
          </section>

          {/* Section 5 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec5Title}</h2>
            <p>{t.sec5Desc}</p>
          </section>

          {/* Section 6 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec6Title}</h2>
            <p className="mb-3">{t.sec6Desc}</p>
            <ul className={`${isRtl ? "list-disc pr-6 pl-0" : "list-disc pl-6 pr-0"} space-y-2 my-2`}>
              <li>{t.sec6L1}</li>
              <li>{t.sec6L2}</li>
              <li>{t.sec6L3}</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec7Title}</h2>
            <p>{t.sec7Desc}</p>
          </section>

          {/* Section 8 */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec8Title}</h2>
            <p>{t.sec8Desc}</p>
          </section>

          {/* Section 9 */}
          <section className="pt-4 pb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t.sec9Title}</h2>
            <p>{t.sec9Desc}</p>
            <div className="mt-4 p-5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-xl inline-block">
              <span className="text-gray-900 dark:text-gray-200 font-medium">Email: </span>
              <a
                href="mailto:privacy@cryptonewstrend.com"
                className="text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-500 transition-colors"
              >
                privacy@cryptonewstrend.com
              </a>
            </div>
          </section>
        </div>

        {/* Absolute Mandatory Trust Link Infrastructure Area */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.compTitle}</h3>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-600 dark:text-gray-400">
            <Link href={`${prefix}/about-us`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              {t.linkAbout}
            </Link>
            <Link href={`${prefix}/contact`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              {t.linkContact}
            </Link>
            <Link href={`${prefix}/terms`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              {t.linkTerms}
            </Link>
            <Link href={`${prefix}/editorial-policy`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              {t.linkEditorial}
            </Link>
            <Link href={`${prefix}/privacy-policy`} className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              {t.linkCorrections}
            </Link>
          </nav>
        </div>

      </div>

      {/* Structured SEO Injection Output Node */}
      <Script
        type="application/ld+json"
        id="privacy-policy-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </main>
  );
}