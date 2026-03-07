import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_PREFIX = 'https://halomora.com/booking/';

function isAllowedUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.href.startsWith(ALLOWED_PREFIX) && u.origin === 'https://halomora.com';
  } catch {
    return false;
  }
}

/**
 * Verifica se un URL di booking halomora è raggiungibile (HEAD).
 * Usato per fallback: se il link diretto non è ok, si usa la landing.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = typeof body?.url === 'string' ? body.url.trim() : '';

    if (!url || !isAllowedUrl(url)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      headers: { 'User-Agent': 'JService-Site-Check/1.0' },
    });

    return NextResponse.json({ ok: res.ok });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
