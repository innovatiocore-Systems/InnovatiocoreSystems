import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from './jwt'

export const ADMIN_COOKIE = 'admin_token'

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies()
  return verifyToken(store.get(ADMIN_COOKIE)?.value)
}

// For admin pages: bounce to the login screen when there's no valid session.
export async function requireAdminPage(): Promise<void> {
  if (!(await isAuthenticated())) redirect('/admin/login')
}
