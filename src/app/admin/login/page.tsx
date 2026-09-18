import { redirect } from 'next/navigation'
import { isAuthenticated } from '../../../lib/requireAdmin'
import AdminLogin from '../../../components/admin/AdminLogin'

export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  if (await isAuthenticated()) redirect('/admin')
  return <AdminLogin />
}
