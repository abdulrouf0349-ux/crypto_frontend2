import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['en', 'ur', 'es', 'ru', 'fr', 'de', 'ar', 'zh'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // sitemap/robots skip
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.startsWith('/sitemap/') ||
    pathname.endsWith('.xml')
  ) {
    return NextResponse.next();
  }

  // ✅ FIX: agar koi /en ya /en/... ko DIRECTLY request kare,
  // usko root pe rewrite karo — taake /en apne naam se kabhi 200 na de.
  // Yeh duplicate-URL (canonical/hreflang conflict) ka asli fix hai.
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === '/en' ? '/' : pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(url, 308); // permanent — Google ko clear signal: yeh URL exist nahi karta
  }

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.rewrite(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
        '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|llms\\.txt|manifest\\.json|manifest\\.webmanifest|feeds|feeds/.*|.*\\.xml$|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ]
};

