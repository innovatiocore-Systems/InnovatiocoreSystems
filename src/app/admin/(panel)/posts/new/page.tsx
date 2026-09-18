import Link from 'next/link'
import { requireAdminPage } from '../../../../../lib/requireAdmin'
import PostForm from '../../../../../components/admin/PostForm'
import styles from '../../../../../components/admin/Admin.module.css'

export const dynamic = 'force-dynamic'

export default async function NewPostPage() {
  await requireAdminPage()

  return (
    <>
      <Link href="/admin/posts" className={styles.backLink}>← Back to Blog Posts</Link>
      <h1 className={styles.adminTitle}>New Post</h1>
      <PostForm mode="create" />
    </>
  )
}
