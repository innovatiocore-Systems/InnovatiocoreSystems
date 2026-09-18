'use client'

import { useState } from 'react'
import styles from './Admin.module.css'

interface Props {
  onClose: () => void
}

export default function LogoutConfirmation({ onClose }: Props) {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleLogout = async () => {
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST', cache: 'no-store' })
      if (!res.ok) throw new Error()
      // Full page load so no cached admin pages survive the sign-out.
      window.location.replace('/admin/login')
    } catch {
      setError('Could not sign out. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className={styles.modalOverlay} onClick={submitting ? undefined : onClose}>
      <div className={styles.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <h3>Sign Out?</h3>
        <p>Are you sure you want to sign out? You&apos;ll need to log back in to access the admin panel.</p>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.modalActions}>
          <button type="button" className="btn btn-outline" onClick={onClose} disabled={submitting}>
            Cancel
          </button>
          <button type="button" className="btn btn-primary" onClick={handleLogout} disabled={submitting}>
            {submitting ? 'Signing out…' : 'Sign Out'}
          </button>
        </div>
      </div>
    </div>
  )
}
