import Link from 'next/link'
import { notFound } from 'next/navigation'
import { requireAdminPage } from '../../../../../../lib/requireAdmin'
import { getPostById } from '../../../../../../lib/posts'
import PostForm from '../../../../../../components/admin/PostForm'
import styles from '../../../../../../components/admin/Admin.module.css'

export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdminPage()
  const { id } = await params
  const post = await getPostById(id)
  if (!post) notFound()

  return (
    <>
      <Link href="/admin/posts" className={styles.backLink}>← Back to Blog Posts</Link>
      <h1 className={styles.adminTitle}>Edit Post</h1>
      <PostForm mode="edit" post={post} />
    </>
  )
}
