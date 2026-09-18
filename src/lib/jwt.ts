import { createHmac, timingSafeEqual } from 'node:crypto'

const SECRET = process.env.ADMIN_JWT_SECRET || 'dev-only-insecure-secret-change-me'
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ChangeMe123!'
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000 // 7 days

function base64UrlEncode(str: string): string {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '')
}

function base64UrlDecode(str: string): string {
  const padded = str + '='.repeat((4 - (str.length % 4)) % 4)
  return Buffer.from(padded.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()
}

function sign(payload: string): string {
  return createHmac('sha256', SECRET).update(payload).digest('hex')
}

export function checkCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}

export function createToken(): string {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = base64UrlEncode(
    JSON.stringify({
      sub: 'admin',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor((Date.now() + TOKEN_MAX_AGE_MS) / 1000),
    })
  )

  const message = `${header}.${payload}`
  const signature = sign(message)

  return `${message}.${signature}`
}

export function verifyToken(token: string | undefined | null): boolean {
  if (!token) return false

  const parts = token.split('.')
  if (parts.length !== 3) return false

  const [header, payload, sig] = parts

  try {
    const message = `${header}.${payload}`
    const expected = sign(message)

    const sigBuf = Buffer.from(sig)
    const expectedBuf = Buffer.from(expected)
    if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
      return false
    }

    const decoded = JSON.parse(base64UrlDecode(payload))
    const now = Math.floor(Date.now() / 1000)
    if (decoded.exp < now) return false

    return true
  } catch {
    return false
  }
}
