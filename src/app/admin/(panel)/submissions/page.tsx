import { requireAdminPage } from '../../../../lib/requireAdmin'
import { getAllSubmissions } from '../../../../lib/submissions'
import SubmissionsTable from '../../../../components/admin/SubmissionsTable'
import styles from '../../../../components/admin/Admin.module.css'

export const dynamic = 'force-dynamic'

export default async function AdminSubmissionsPage() {
  await requireAdminPage()
  const submissions = await getAllSubmissions()

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.adminTitle}>Demo Requests</h1>
          <p className={styles.adminSubtitle}>{submissions.length} total, newest first.</p>
        </div>
      </div>
      <SubmissionsTable submissions={submissions} detailed />
    </>
  )
}
