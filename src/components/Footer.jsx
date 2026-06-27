'use client';

import { Flame, Twitter, Send } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-[#0d1117] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          
          {/* Logo & Tagline */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                <title>call</title>
                <g fill="none">
                  <circle cx="16" cy="16" r="16" fill="#f97316"/>
                  <g fill="#FFF">
                    <path d="M16.017 21.804a4.6 4.6 0 0 0 1.941-.336q.367-.131.695-.342a.18.18 0 0 1 .27.034l1.579 1.625c.113.118.109.156-.026.249a7.5 7.5 0 0 1-1.772.897a8.4 8.4 0 0 1-2.409.446a8.4 8.4 0 0 1-3.082-.421a7.6 7.6 0 0 1-2.345-1.318a8.7 8.7 0 0 1-1.642-1.802a7 7 0 0 1-.67-1.17a12 12 0 0 1-.379-.99a8.8 8.8 0 0 1-.353-1.89a5.7 5.7 0 0 1 .02-1.415q.075-.697.245-1.377a8.6 8.6 0 0 1 .817-1.983a8.1 8.1 0 0 1 3.217-3.1a8 8 0 0 1 1.604-.656a7 7 0 0 1 1.385-.27a5.4 5.4 0 0 1 1.09-.025q.098.006.194 0a6.8 6.8 0 0 1 1.756.278c.487.13.958.314 1.402.552q.705.349 1.318.842c.08.071.143.038.206-.03l.973-1.027l1.402-1.49c.164-.177.206-.182.383-.022c.54.487 1.04 1.018 1.49 1.588a11.8 11.8 0 0 1 1.453 2.307q.473 1.022.775 2.105c.169.594.223 1.2.354 1.794a.1.1 0 0 1 0 .034c0 .551.122 1.103.063 1.654c-.067.628-.101 1.264-.232 1.883q-.167.78-.42 1.536a11.8 11.8 0 0 1-1.832 3.47c-.122.16-.16.164-.3 0c-.462-.468-.925-.943-1.393-1.406c-.097-.097-.084-.173 0-.278a9.6 9.6 0 0 0 1.188-2.24c.265-.747.447-1.521.543-2.308q.086-.906.038-1.814a6.6 6.6 0 0 0-.123-1.024a9.5 9.5 0 0 0-1.642-3.84c-.088-.126-.198-.24-.278-.374c-.08-.135-.088-.097-.164-.021c-.446.45-.905.888-1.339 1.347c-.151.16-.324.286-.467.45s-.316.32-.476.48l-.488.489c-.076.076-.135.046-.186-.025a5.4 5.4 0 0 0-1.562-1.516a5.2 5.2 0 0 0-1.966-.758a6 6 0 0 0-1.65-.021a5.1 5.1 0 0 0-1.92.606a5.4 5.4 0 0 0-1.643 1.398a5.4 5.4 0 0 0-.888 1.646a6.5 6.5 0 0 0-.299 2.186a5.27 5.27 0 0 0 1.381 3.591a5.6 5.6 0 0 0 1.937 1.386c.7.308 1.463.451 2.227.416"/>
                    <path d="m25.037 23.711l-4.26-4.337c-.093-.097-.17-.1-.245 0a5.4 5.4 0 0 1-1.082 1.162c-.101.08-.101.143 0 .236c.383.383.762.775 1.141 1.158q.738.752 1.482 1.503c.088.088.084.13 0 .206c-.198.148-.392.3-.598.421a9.3 9.3 0 0 1-3.596 1.491a7 7 0 0 1-1.528.177h-.206q-.548.038-1.09-.034c-.422-.063-.818-.114-1.218-.202a9 9 0 0 1-1.482-.476a9.6 9.6 0 0 1-2.27-1.335a10 10 0 0 1-1.814-1.86a9.2 9.2 0 0 1-1.297-2.396a7.9 7.9 0 0 1-.573-2.64a2 2 0 0 1 0-.287v-.993a.8.8 0 0 1 0-.325c0-.08.034-.155.047-.235q.063-.56.198-1.108q.173-.736.459-1.436a9.7 9.7 0 0 1 4.362-4.859a9.3 9.3 0 0 1 3.79-1.14h.243a9.4 9.4 0 0 1 4.064.64l.362.151a10 10 0 0 1 1.579.88a.173.173 0 0 0 .256-.025c.447-.51.918-.994 1.386-1.482c.088-.093.092-.177 0-.253a12 12 0 0 0-5.217-2.156a13 13 0 0 0-1.634-.156a11.7 11.7 0 0 0-2.526.236a12 12 0 0 0-1.566.421c-.912.305-1.782.723-2.59 1.242c-.97.62-1.847 1.372-2.606 2.236a11.9 11.9 0 0 0-2.303 3.933q-.319.919-.501 1.874q-.14.837-.19 1.684a9 9 0 0 0 .084 1.814q.1.897.341 1.765c.114.391.228.783.375 1.162c.294.76.663 1.49 1.103 2.177a12.7 12.7 0 0 0 1.924 2.315q.71.655 1.516 1.188c.718.491 1.49.9 2.3 1.217c.806.32 1.647.548 2.504.682q.966.144 1.942.168c.42 0 .842-.067 1.237-.076q.45-.033.889-.134c.324-.055.644-.14.964-.224a11.4 11.4 0 0 0 3.368-1.499c.937-.6 1.787-1.325 2.527-2.155c.122-.14.118-.164-.05-.316z"/>
                  </g>
                </g>
              </svg>
              <span className="font-display font-bold text-xl tracking-tight">
                <span className="text-white">Crypto</span>
                <span className="text-orange-500">NewsTrend</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">{t("footer.tagline")}</p>
          </div>

          {/* Section 1: News */}
          <div>
            <h4 className="font-bold mb-4 font-display text-white">{t("footer.news")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">{t("footer.latestNews")}</Link></li>
              <li><Link href="/events" className="hover:text-purple-400 transition-colors">{t("footer.events")}</Link></li>
              <li><Link href="/crypto-whales" className="hover:text-purple-400 transition-colors">{t("footer.whaleTracking")}</Link></li>
              <li><Link href="/coin-analysis" className="hover:text-purple-400 transition-colors">{t("footer.coinAnalysis")}</Link></li>
              <li><Link href="/ico" className="hover:text-purple-400 transition-colors">{t("footer.icoNews")}</Link></li>
            </ul>
          </div>

          {/* Section 2: Company */}
          <div>
            <h4 className="font-bold mb-4 font-display text-white">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about-us" className="hover:text-purple-400 transition-colors">{t("footer.aboutUs")}</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">{t("footer.contactUs")}</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-purple-400 transition-colors">{t("footer.editorialPolicy")}</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-purple-400 transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition-colors">{t("footer.termsConditions")}</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Resources */}
          <div>
            <h4 className="font-bold mb-4 font-display text-white">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/sitemaps-directory" className="hover:text-purple-400 transition-colors">{t("footer.sitemap")}</Link></li>
              <li><Link href="/rss" className="hover:text-purple-400 transition-colors">{t("footer.rssFeed")}</Link></li>
              <li><Link href="/advertise" className="hover:text-purple-400 transition-colors">{t("footer.advertise")}</Link></li>
              <li><Link href="/disclaimer" className="hover:text-purple-400 transition-colors">{t("footer.disclaimer")}</Link></li>
              <li><Link href="/team" className="hover:text-purple-400 transition-colors">{t("footer.teams")}</Link></li>
            </ul>
          </div>

          {/* Section 4: Community */}
          <div>
            <h4 className="font-bold mb-4 font-display text-white">{t("footer.community")}</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <Twitter className="w-4 h-4" />
                </span>
                {t("footer.twitter")}
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <Send className="w-4 h-4" />
                </span>
                {t("footer.telegram")}
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </span>
                {t("footer.facebook")}
              </a>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/glossary" className="hover:text-white transition-colors">{t("footer.glossary")}</Link>
            <Link href="/terms" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}