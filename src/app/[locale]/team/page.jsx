// app/[locale]/team/page.jsx

import Link from "next/link";
import { Code2, Shield, Globe, Sparkles, Newspaper, Cpu, Award, Users } from "lucide-react";
import Script from "next/script";

const SITE_URL = "https://cryptonewstrend.com";
const VALID_LOCALES = ["en", "ur", "es", "ru", "fr", "de", "ar", "zh"];

// ── Per-locale SEO ──────────────────────────────────────
const META = {
  en: {
    title: "Our Team - CryptoNewsTrend | Meet the People Behind the Platform",
    desc:  "Meet the developers, editors, and analysts behind CryptoNewsTrend — the team delivering real-time Bitcoin news, whale tracking, and blockchain coverage in 8 languages.",
  },
  ur: {
    title: "ہماری ٹیم - CryptoNewsTrend | پلیٹ فارم کے پیچھے لوگ",
    desc:  "CryptoNewsTrend کے ڈیولپرز، ایڈیٹرز اور تجزیہ کاروں سے ملیں جو دنیا بھر کے قارئین کے لیے کرپٹو خبریں اور بلاکچین کوریج فراہم کرتے ہیں۔",
  },
  ar: {
    title: "فريقنا - CryptoNewsTrend | تعرف على فريق العمل",
    desc:  "تعرف على المطورين والمحررين والمحللين في CryptoNewsTrend الذين يقدمون أخبار البيتكوين وتتبع الحيتان وتغطية البلوكتشين بـ 8 لغات.",
  },
  es: {
    title: "Nuestro Equipo - CryptoNewsTrend | Conoce a las Personas Detrás",
    desc:  "Conoce a los desarrolladores, editores y analistas de CryptoNewsTrend que ofrecen noticias de Bitcoin, seguimiento de ballenas y cobertura blockchain.",
  },
  fr: {
    title: "Notre Équipe - CryptoNewsTrend | Découvrez l'Équipe",
    desc:  "Découvrez les développeurs, éditeurs et analystes de CryptoNewsTrend qui fournissent des actualités Bitcoin, le suivi des baleines et la couverture blockchain.",
  },
  de: {
    title: "Unser Team - CryptoNewsTrend | Die Menschen Hinter der Plattform",
    desc:  "Lernen Sie die Entwickler, Redakteure und Analysten von CryptoNewsTrend kennen, die Bitcoin-Nachrichten, Whale-Tracking und Blockchain-Berichte liefern.",
  },
  ru: {
    title: "Наша Команда - CryptoNewsTrend | Люди за Платформой",
    desc:  "Познакомьтесь с разработчиками, редакторами и аналитиками CryptoNewsTrend, которые предоставляют новости Bitcoin, отслеживание китов и обзор блокчейна.",
  },
  zh: {
    title: "我们的团队 - CryptoNewsTrend | 认识平台背后的人",
    desc:  "认识 CryptoNewsTrend 的开发者、编辑和分析师团队，他们为全球用户提供实时比特币新闻、巨鲸追踪和区块链报道。",
  },
};

export async function generateMetadata({ params }) {
  const { locale: raw } = await params;
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const meta = META[locale] || META.en;

  const canonical =
    locale === "en"
      ? `${SITE_URL}/team`
      : `${SITE_URL}/${locale}/team`;

  const languages = {};
  VALID_LOCALES.forEach((l) => {
    languages[l] = l === "en" ? `${SITE_URL}/team` : `${SITE_URL}/${l}/team`;
  });

  return {
    title: meta.title,
    description: meta.desc,
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
      title: meta.title,
      description: meta.desc,
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
      title: meta.title,
      description: meta.desc,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

const TEAM = [
  {
    name: "Roy",
    role: "Founder & Software Owner",
    bio: "Architected and built the CryptoNewsTrend platform from the ground up — leading product, engineering, and infrastructure across all 8 language editions.",
    icon: Cpu,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    name: "Ayesha Khan",
    role: "Editor-in-Chief",
    bio: "Oversees editorial standards and breaking news coverage, ensuring every story published meets our independence and accuracy policy.",
    icon: Newspaper,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    name: "Daniyal Ahmed",
    role: "Lead Blockchain Analyst",
    bio: "Tracks on-chain data across 20+ blockchains to power our whale alerts, coin analysis, and market intelligence reports.",
    icon: Sparkles,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    name: "Maria Fernandez",
    role: "Localization Lead",
    bio: "Manages translation quality across Spanish, French, German, and Russian editions, keeping every reader's experience native and accurate.",
    icon: Globe,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    name: "Omar Siddiqui",
    role: "Full-Stack Developer",
    bio: "Builds and maintains the platform's real-time data pipelines, whale-tracking systems, and front-end experience.",
    icon: Code2,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    name: "Wei Chen",
    role: "Compliance & Trust Officer",
    bio: "Safeguards editorial independence, reviews disclosure policies, and ensures no commercial relationship influences our news feed.",
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

const VALUES = [
  { icon: Shield, title: "Independence",  desc: "No project, exchange, or investor can pay for placement in our news feed." },
  { icon: Award,  title: "Accuracy",      desc: "Every figure, quote, and on-chain claim is verified before publishing." },
  { icon: Users,  title: "Accessibility", desc: "High-quality crypto intelligence in 8 languages, for every kind of reader." },
];

export default async function TeamPage({ params }) {
  const { locale: raw } = await params;
  const locale = VALID_LOCALES.includes(raw) ? raw : "en";
  const isRtl  = ["ur", "ar"].includes(locale);
  const prefix = locale === "en" ? "" : `/${locale}`;
  const meta   = META[locale] || META.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: meta.title,
    url: locale === "en" ? `${SITE_URL}/team` : `${SITE_URL}/${locale}/team`,
    description: meta.desc,
    mainEntity: {
      "@type": "Organization",
      name: "CryptoNewsTrend",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Roy",
        jobTitle: "Founder & Software Owner",
      },
      employee: TEAM.slice(1).map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
      })),
    },
  };

  return (
    <>
      <Script
        id="team-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className="min-h-screen "
        dir={isRtl ? "rtl" : "ltr"}
        lang={locale}
      >
        {/* ── Hero ── */}
        <section className="border-b border-[#21262d] py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-8">
              <Users className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-orange-400">
                The People Behind The Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none tracking-tight">
              <span className="text-gray-500 dark:text-white">Our</span>
              <span className="text-orange-500"> Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A small, independent team of developers, editors, and analysts building the most trusted multilingual crypto news platform.
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 border-b border-[#21262d]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1 h-7 bg-purple-500 rounded-full" />
              <h2 className="text-2xl font-bold">Who We Are</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              CryptoNewsTrend is built and run by a focused team spanning engineering, journalism, and blockchain research. Founded by Roy, the platform brings together editors who verify every story and developers who keep our whale-tracking and market data running 24/7 — across 8 languages, for a truly global audience.
            </p>
          </div>
        </section>

        {/* ── Team Grid ── */}
        <section className="py-16 border-b border-[#21262d]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-1 h-7 bg-orange-500 rounded-full" />
              <h2 className="text-2xl font-bold">Meet The Team</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TEAM.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.name}
                    className="bg-[#161b22] border border-[#21262d] rounded-xl p-6 hover:border-purple-500/40 transition-colors group"
                  >
                    <div className={`w-10 h-10 ${m.bg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${m.color}`} />
                    </div>
                    <h3 className="font-semibold mb-1 text-white">{m.name}</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-3">{m.role}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{m.bio}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-16 border-b border-[#21262d]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-xl font-bold">What Drives Us</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                {VALUES.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title}>
                      <Icon className="w-5 h-5 text-purple-400 mb-2" />
                      <h3 className="font-semibold text-white mb-1">{v.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-400 leading-relaxed mt-6">
                Read more about how we operate on our{" "}
                <Link href={`${prefix}/editorial-policy`} className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
                  Editorial Policy
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 border-b border-[#21262d]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "6+",   label: "Team Members"       },
                { value: "8",    label: "Languages"          },
                { value: "24/7", label: "Coverage"           },
                { value: "100%", label: "Editorially Free"   },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">Want To Join Us?</h2>
            <p className="text-gray-400 mb-8">
              We're always open to hearing from sharp developers, editors, and analysts.
            </p>
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}