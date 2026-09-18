import type { ReactNode } from 'react'
import { requireAdminPage } from '../../../lib/requireAdmin'
import AdminShell from '../../../components/admin/AdminShell'

export const dynamic = 'force-dynamic'

export default async function AdminPanelLayout({ children }: { children: ReactNode }) {
  await requireAdminPage()
  return <AdminShell>{children}</AdminShell>
}
