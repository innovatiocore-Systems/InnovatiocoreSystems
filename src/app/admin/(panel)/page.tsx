import Link from 'next/link'
import { requireAdminPage } from '../../../lib/requireAdmin'
import { getAllPosts } from '../../../lib/posts'
import { getAllSubmissions } from '../../../lib/submissions'
import SubmissionsTable from '../../../components/admin/SubmissionsTable'
import PostsTable from '../../../components/admin/PostsTable'
import styles from '../../../components/admin/Admin.module.css'

export const dynamic = 'force-dynamic'

const PREVIEW_COUNT = 5

export default async function AdminOverviewPage() {
  await requireAdminPage()

  const posts = await getAllPosts()
  const submissions = await getAllSubmissions()
  const newCount = submissions.filter((s) => s.status === 'new').length
  const publishedCount = posts.filter((p) => p.status === 'published').length

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.adminTitle}>Dashboard</h1>
          <p className={styles.adminSubtitle}>Latest demo requests and blog posts at a glance.</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{newCount}</div>
          <div className={styles.statLabel}>New Requests</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{submissions.length}</div>
          <div className={styles.statLabel}>Total Requests</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{publishedCount}</div>
          <div className={styles.statLabel}>Published Posts</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{posts.length}</div>
          <div className={styles.statLabel}>Total Posts</div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Recent Demo Requests</h2>
          <Link href="/admin/submissions" className={styles.viewAll}>View all ({submissions.length}) →</Link>
        </div>
        <SubmissionsTable submissions={submissions.slice(0, PREVIEW_COUNT)} />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Recent Blog Posts</h2>
          <Link href="/admin/posts" className={styles.viewAll}>View all ({posts.length}) →</Link>
        </div>
        <PostsTable posts={posts.slice(0, PREVIEW_COUNT)} />
      </section>
    </>
  )
}
