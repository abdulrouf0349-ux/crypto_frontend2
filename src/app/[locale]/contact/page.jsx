import { Mail, MessageSquare, Send } from "lucide-react";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// ── Per-locale SEO Metadata ─────────────────────────────
const META = {
  en: {
    title: "Contact Us - CryptoNewsTrend | News Tips & Support",
    desc:  "Contact the CryptoNewsTrend editorial team for news tips, corrections, partnerships, Telegram support, and media inquiries.",
  },
  ur: {
    title: "ہم سے رابطہ کریں - CryptoNewsTrend",
    desc:  "خبروں کے ٹپس، شراکت داری، ٹیلی گرام سپورٹ، اور میڈیا انکوائری کے لیے CryptoNewsTrend کی ادارتی ٹیم سے رابطہ کریں۔",
  },
  ar: {
    title: "اتصل بنا - CryptoNewsTrend | الدعم والاستفسارات",
    desc:  "اتصل بفريق تحرير CryptoNewsTrend للحصول على نصائح الأخبار، الشراكات، دعم تيليجرام، والاستفسارات الإعلامية.",
  },
  es: {
    title: "Contáctenos - CryptoNewsTrend | Soporte y Noticias",
    desc:  "Póngase en contacto con el equipo editorial de CryptoNewsTrend para sugerencias de noticias, asociaciones, soporte de Telegram.",
  },
  fr: {
    title: "Contactez-nous - CryptoNewsTrend | Support et Publicité",
    desc:  "Contactez l'équipe éditoriale de CryptoNewsTrend pour des conseils d'actualité, des partenariats ou le support Telegram.",
  },
  de: {
    title: "Kontaktieren Sie uns - CryptoNewsTrend",
    desc:  "Kontaktieren Sie die CryptoNewsTrend-Redaktion für Nachrichtentipps, Partnerschaften, Telegram-Support und Medienanfragen.",
  },
  ru: {
    title: "Контакты - CryptoNewsTrend | Поддержка и Реклама",
    desc:  "Свяжитесь с редакцией CryptoNewsTrend для передачи новостей, партнерства, поддержки в Telegram и запросов СМИ.",
  },
  zh: {
    title: "联系我们 - CryptoNewsTrend | 新闻线索与支持",
    desc:  "联系 CryptoNewsTrend 编辑团队以获取新闻线索、商业合作、Telegram 支持或媒体咨询。",
  }
};

// ── Per-locale UI Translations ──────────────────────────
const CONTACT_DICT = {
  en: {
    heading: "Get in Touch",
    tagline: "Have a story, tip, or partnership proposal? We’d love to hear from you.",
    emailTitle: "Email Contacts",
    editorial: "Editorial",
    partnerships: "Partnerships",
    fastResponseTitle: "Fast Response",
    fastResponseDesc: "Our team monitors all inboxes 24/7. Expect a response within 12-24 hours.",
    chatTitle: "Instant Chat Support",
    chatDesc: "For urgent inquiries, advertising setups, or breaking tips, message our support agents live.",
    whatsappBtn: "Chat on WhatsApp",
    telegramBtn: "Chat on Telegram"
  },
  ur: {
    heading: "ہم سے رابطہ کریں",
    tagline: "کیا آپ کے پاس کوئی کہانی، ٹپ یا شراکت داری کی تجویز ہے؟ ہمیں آپ سے سن کر خوشی ہوگی۔",
    emailTitle: "ای میل رابطے",
    editorial: "ادارتی ٹیم",
    partnerships: "شراکت داری",
    fastResponseTitle: "فوری جواب",
    fastResponseDesc: "ہماری ٹیم 24/7 تمام ان باکسز کی نگرانی کرتی ہے۔ 12 سے 24 گھنٹوں میں جواب کی توقع کریں۔",
    chatTitle: "فوری چیٹ سپورٹ",
    chatDesc: "فوری انکوائری، اشتہارات کے سیٹ اپ، یا بریکنگ ٹپس کے لیے ہمارے سپورٹ ایجنٹس کو لائیو میسج کریں۔",
    whatsappBtn: "واٹس ایپ پر چیٹ کریں",
    telegramBtn: "ٹیلی گرام پر چیٹ کریں"
  },
  ar: {
    heading: "تواصل معنا",
    tagline: "هل لديك قصة أو نصيحة أو اقتراح شراكة؟ نود أن نسمع منك.",
    emailTitle: "جهات اتصال البريد الإلكتروني",
    editorial: "التحرير",
    partnerships: "الشراكات والعلانات",
    fastResponseTitle: "استجابة سريعة",
    fastResponseDesc: "يراقب فريقنا جميع صناديق الوارد على مدار الساعة طوال أيام الأسبوع. توقع الرد في غضون 12-24 ساعة.",
    chatTitle: "دعم الدردشة الفوري",
    chatDesc: "للاستفسارات العاجلة، وإعدادات الإعلانات، أو النصائح العاجلة، راسل وكلاء الدعم لدينا مباشرة.",
    whatsappBtn: "دردشة عبر واتساب",
    telegramBtn: "دردشة عبر تيليجرام"
  },
  es: {
    heading: "Póngase en Contacto",
    tagline: "¿Tiene una historia, sugerencia o propuesta de asociación? Nos encantaría saber de usted.",
    emailTitle: "Contactos de Correo",
    editorial: "Editorial",
    partnerships: "Asociaciones",
    fastResponseTitle: "Respuesta Rápida",
    fastResponseDesc: "Nuestro equipo supervisa todas las bandejas de entrada las 24 horas, los 7 días de la semana. Espere una respuesta en 12-24 horas.",
    chatTitle: "Soporte de Chat Instantáneo",
    chatDesc: "Para consultas urgentes, configuraciones publicitarias o consejos de última hora, envíe un mensaje a nuestros agentes en vivo.",
    whatsappBtn: "Chatear por WhatsApp",
    telegramBtn: "Chatear por Telegram"
  },
  fr: {
    heading: "Contactez-nous",
    tagline: "Vous avez une histoire, un conseil ou une proposition de partenariat ? Nous aimerions avoir de vos nouvelles.",
    emailTitle: "Contacts E-mail",
    editorial: "Rédaction",
    partnerships: "Partenariats",
    fastResponseTitle: "Réponse Rapide",
    fastResponseDesc: "Notre équipe surveille toutes les boîtes de réception 24/7. Attendez-vous à une réponse sous 12 à 24 heures.",
    chatTitle: "Support Chat Instantané",
    chatDesc: "Pour les demandes urgentes, les configurations publicitaires ou les infos de dernière minute, envoyez un message à nos agents en direct.",
    whatsappBtn: "Discuter sur WhatsApp",
    telegramBtn: "Discuter sur Telegram"
  },
  de: {
    heading: "In Verbindung treten",
    tagline: "Haben Sie eine Geschichte, einen Tipp oder einen Partnerschaftsvorschlag? Wir würden uns freuen, von Ihnen zu hören.",
    emailTitle: "E-Mail-Kontakte",
    editorial: "Redaktion",
    partnerships: "Partnerschaften",
    fastResponseTitle: "Schnelle Antwort",
    fastResponseDesc: "Unser Team überwacht alle Posteingänge rund um die Uhr. Erwarten Sie eine Antwort innerhalb von 12-24 Stunden.",
    chatTitle: "Sofortiger Chat-Support",
    chatDesc: "Für dringende Anfragen, Werbeeinstellungen oder aktuelle Tipps senden Sie eine Nachricht live an unsere Support-Mitarbeiter.",
    whatsappBtn: "Auf WhatsApp chatten",
    telegramBtn: "Auf Telegram chatten"
  },
  ru: {
    heading: "Связаться с нами",
    tagline: "Есть история, инсайд или предложение о партнерстве? Мы будем рады получить от вас весточку.",
    emailTitle: "Контакты E-mail",
    editorial: "Редакция",
    partnerships: "Партнерство",
    fastResponseTitle: "Быстрый ответ",
    fastResponseDesc: "Наша команда круглосуточно следит за всеми почтовыми ящиками. Ответ ожидается в течение 12-24 часов.",
    chatTitle: "Мгновенная поддержка",
    chatDesc: "Для срочных запросов, настройки рекламы или экстренных новостей пишите нашим агентам поддержки в режиме реального времени.",
    whatsappBtn: "Чат в WhatsApp",
    telegramBtn: "Чат в Telegram"
  },
  zh: {
    heading: "取得联系",
    tagline: "有新闻故事、线索或合作提议？我们很乐意听到您的声音。",
    emailTitle: "电子邮件联系",
    editorial: "编辑部",
    partnerships: "商业合作",
    fastResponseTitle: "快速响应",
    fastResponseDesc: "我们的团队 24/7 全天候监控所有收件箱。预计在 12-24 小时内得到答复。",
    chatTitle: "即时聊天支持",
    chatDesc: "如有紧急咨询、广告投放或突发线索，请在线给我们的支持团队发消息。",
    whatsappBtn: "通过 WhatsApp 交流",
    telegramBtn: "通过 Telegram 交流"
  }
};

export async function generateMetadata({ params }) {
  const { locale: raw } = await params;
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const currentMeta = META[locale] || META.en;

  const canonical =
    locale === "en"
      ? `${SITE_URL}/contact`
      : `${SITE_URL}/${locale}/contact`;

  const languages = {};
  VALID_LOCALES.forEach((l) => {
    languages[l] =
      l === "en"
        ? `${SITE_URL}/contact`
        : `${SITE_URL}/${l}/contact`;
  });

  languages["x-default"] = `${SITE_URL}/contact`;

  return {
    title: currentMeta.title,
    description: currentMeta.desc,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      title: currentMeta.title,
      description: currentMeta.desc,
      url: canonical,
      siteName: "CryptoNewsTrend",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
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

export default async function ContactPage({ params }) {
  const { locale: raw } = await params;
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const isRtl = ["ur", "ar"].includes(locale);
  
  const t = CONTACT_DICT[locale] || CONTACT_DICT.en;

  return (
    <>
      <Script
        type="application/ld+json"
        id="contact-page-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: t.heading,
            url:
              locale === "en"
                ? `${SITE_URL}/contact`
                : `${SITE_URL}/${locale}/contact`,
            mainEntity: {
              "@type": "Organization",
              name: "CryptoNewsTrend",
              url: SITE_URL,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "editorial",
                  email: "editor@cryptonewstrend.com"
                },
                {
                  "@type": "ContactPoint",
                  contactType: "advertising",
                  email: "ads@cryptonewstrend.com"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors duration-200 py-20" dir={isRtl ? "rtl" : "ltr"}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight">{t.heading}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto text-base md:text-lg">{t.tagline}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details Card */}
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" /> {t.emailTitle}
                </h3>
                <div className="space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-1">{t.editorial}</span>
                    <span className="text-gray-900 dark:text-white font-mono text-base md:text-lg break-all selection:bg-orange-500/30">
                      editor@cryptonewstrend.com
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 block mb-1">{t.partnerships} & Ads</span>
                    <span className="text-gray-900 dark:text-white font-mono text-base md:text-lg break-all selection:bg-orange-500/30">
                      ads@cryptonewstrend.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800/80 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-800 dark:text-gray-200 block mb-0.5">{t.fastResponseTitle}</span>
                  {t.fastResponseDesc}
                </div>
              </div>
            </div>

            {/* Live Chat Support Buttons Card */}
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-sm rounded-xl p-8 flex flex-col justify-between shadow-sm text-center md:text-start">
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center justify-center md:justify-start gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-500 shrink-0" /> {t.chatTitle}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {t.chatDesc}
                </p>
              </div>

              <div className="space-y-4 w-full mt-auto">
                {/* WhatsApp Chat Trigger Button */}
                <a
                  href="https://wa.me/33756756653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-emerald-600/10"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.whatsappBtn}</span>
                </a>

                {/* Telegram Hub Trigger Button */}
                <a
                  href="https://t.me/cryptonewstrendhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-sky-600 hover:bg-sky-700 active:scale-[0.99] text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-sky-600/10"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.telegramBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}