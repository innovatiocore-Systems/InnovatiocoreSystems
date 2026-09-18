import { NextResponse } from 'next/server'
import { ADMIN_COOKIE } from '../../../../lib/requireAdmin'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
    expires: new Date(0),
  })
  res.headers.set('Cache-Control', 'no-store')
  return res
}
