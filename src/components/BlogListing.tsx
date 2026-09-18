'use client'

import Link from 'next/link'
import styles from './BlogListing.module.css'
import type { BlogPost } from '../lib/posts'
import { useFadeIn } from '../hooks/useFadeIn'

export default function BlogListing({ posts }: { posts: BlogPost[] }) {
  useFadeIn()

  return (
    <section id="blog" className={`section ${styles.section}`}>
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">Blog</span>
          <h2 className="section-title">Insights &amp; Updates</h2>
          <p className="section-sub">
            Notes on building software for healthcare, recruitment, events and shared workspaces.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className={`${styles.empty} fade-in`}>No posts published yet. Check back soon.</p>
        ) : (
          <div className={styles.grid}>
            {posts.map((post, i) => (
              <article key={post.slug} className={`${styles.card} fade-in fade-in-delay-${(i % 2) + 1}`}>
                {post.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.image} alt="" className={styles.thumb} />
                )}
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
