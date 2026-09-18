'use client'

import Link from 'next/link'
import styles from './BlogArticle.module.css'
import type { BlogPost } from '../lib/posts'
import { useFadeIn } from '../hooks/useFadeIn'

export default function BlogArticle({ post }: { post: BlogPost }) {
  useFadeIn()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={`${styles.wrap} fade-in`}>
          <Link href="/blog" className={styles.back}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          {post.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image} alt="" className={styles.cover} />
          )}

          <div className={styles.body}>
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
