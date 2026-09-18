'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Admin.module.css'

export default function DeletePostButton({ id, title }: { id: string; title: string }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setBusy(true)
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
      if (res.ok) router.refresh()
    } finally {
      setBusy(false)
    }
  }

  return (
    <button type="button" className={styles.deleteLink} onClick={handleDelete} disabled={busy}>
      {busy ? 'Deleting…' : 'Delete'}
    </button>
  )
}
