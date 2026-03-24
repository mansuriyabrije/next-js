import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'en'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Ignore internal paths, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // 2. Detect locale cookie
  const locale = request.cookies.get('locale')?.value
  console.log(`[Proxy] Path: ${pathname}, Detected Locale: ${locale}`);

  // 3. Set default locale if missing
  if (!locale) {
    console.log(`[Proxy] No locale found, setting default: ${defaultLocale}`);
    const response = NextResponse.next()
    response.cookies.set('locale', defaultLocale, {
      path: '/',
      maxAge: 31536000, // 1 year
      sameSite: 'lax',
    })
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
