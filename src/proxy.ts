import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
  const host = req.headers.get('host') ?? ''

  // Redirect Vercel preview URLs to the canonical domain
  if (host.endsWith('.vercel.app')) {
    const url = req.nextUrl.clone()
    url.protocol = 'https:'
    url.host = 'royaluniondesign.com'
    url.port = ''
    return NextResponse.redirect(url, { status: 301 })
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|webp|svg|ico|woff2?|css|js)).*)'],
}
