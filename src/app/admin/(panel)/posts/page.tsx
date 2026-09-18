import Link from 'next/link'
import { requireAdminPage } from '../../../../lib/requireAdmin'
import { getAllPosts } from '../../../../lib/posts'
import PostsTable from '../../../../components/admin/PostsTable'
import styles from '../../../../components/admin/Admin.module.css'

export const dynamic = 'force-dynamic'

export default async function AdminPostsPage() {
  await requireAdminPage()
  const posts = await getAllPosts()

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={styles.adminTitle}>Blog Posts</h1>
          <p className={styles.adminSubtitle}>{posts.length} total, drafts and published.</p>
        </div>
        <Link href="/admin/posts/new" className="btn btn-primary">New Post</Link>
      </div>
      <PostsTable posts={posts} />
    </>
  )
}
