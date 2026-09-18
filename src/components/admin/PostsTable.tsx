import Link from 'next/link'
import DeletePostButton from './DeletePostButton'
import styles from './Admin.module.css'
import type { BlogPost } from '../../lib/posts'

export default function PostsTable({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return <p className={styles.empty}>No blog posts yet.</p>

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.category}</td>
              <td>
                <span className={`${styles.badge} ${post.status === 'published' ? styles.badgePublished : styles.badgeDraft}`}>
                  {post.status}
                </span>
              </td>
              <td>{post.date}</td>
              <td className={styles.rowActions}>
                {post.status === 'published' && (
                  <Link href={`/blog/${post.slug}`} target="_blank">View</Link>
                )}
                <Link href={`/admin/posts/${post.id}/edit`}>Edit</Link>
                <DeletePostButton id={post.id} title={post.title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
