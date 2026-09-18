'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Admin.module.css'
import type { BlogPost } from '../../lib/posts'

interface Props {
  mode: 'create' | 'edit'
  post?: BlogPost
}

export default function PostForm({ mode, post }: Props) {
  const router = useRouter()
  const [title, setTitle] = useState(post?.title ?? '')
  const [category, setCategory] = useState(post?.category ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [content, setContent] = useState(post?.content.join('\n\n') ?? '')
  const [status, setStatus] = useState<'draft' | 'published'>(post?.status ?? 'draft')
  const [imageUrl, setImageUrl] = useState(post?.image ?? '')
  const [imagePreview, setImagePreview] = useState<string | null>(post?.image ?? null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setImageFile(file)
    if (file) {
      setImagePreview(URL.createObjectURL(file))
      setImageUrl('')
    }
  }

  const handleUrlChange = (url: string) => {
    setImageUrl(url)
    setImageFile(null)
    if (url) setImagePreview(url)
    else setImagePreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      let image: string | null = null

      if (imageFile) {
        const formData = new FormData()
        formData.append('file', imageFile)
        const uploadRes = await fetch('/api/admin/upload', { method: 'POST', body: formData })
        const uploadData = await uploadRes.json().catch(() => ({}))
        if (!uploadRes.ok) throw new Error(uploadData.error || 'Image upload failed')
        image = uploadData.url
      } else if (imageUrl.trim()) {
        image = imageUrl.trim()
      }

      const payload = {
        title,
        category,
        excerpt,
        content: content.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean),
        status,
        image,
      }

      const res = await fetch(
        mode === 'create' ? '/api/admin/posts' : `/api/admin/posts/${post!.id}`,
        {
          method: mode === 'create' ? 'POST' : 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      )

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Failed to save post')

      router.push('/admin/posts')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className={styles.group}>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Healthcare, Recruitment, Events"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={2}
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="content">Content (separate paragraphs with a blank line)</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          required
        />
      </div>

      <div className={styles.group}>
        <label>Cover Image</label>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="imageUrl" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gray700)' }}>
              Or paste URL:
            </label>
            <input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={(e) => handleUrlChange(e.target.value)}
              placeholder="https://example.com/image.jpg"
              style={{ marginTop: '5px' }}
            />
          </div>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--gray700)', marginBottom: '8px' }}>Or upload file:</div>
        <input id="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif" onChange={handleFileChange} />
        {imagePreview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imagePreview} alt="preview" className={styles.imagePreview} />
        )}
      </div>

      <div className={styles.group}>
        <label htmlFor="status">Status</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.formActions}>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Saving…' : mode === 'create' ? 'Create Post' : 'Save Changes'}
        </button>
      </div>
    </form>
  )
}
