'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './Admin.module.css'
import type { DemoSubmission } from '../../lib/submissions'

type Status = DemoSubmission['status']

interface Props {
  submissions: DemoSubmission[]
  /** Show phone + message columns (full list page). */
  detailed?: boolean
}

export default function SubmissionsTable({ submissions, detailed = false }: Props) {
  if (submissions.length === 0) return <p className={styles.empty}>No demo requests yet.</p>

  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            {detailed && <th>Phone</th>}
            <th>Product</th>
            {detailed && <th>Message</th>}
            <th>Date</th>
            <th>Status</th>
            <th aria-label="Actions" />
          </tr>
        </thead>
        <tbody>
          {submissions.map((sub) => (
            <SubmissionRow key={sub.id} submission={sub} detailed={detailed} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SubmissionRow({ submission, detailed }: { submission: DemoSubmission; detailed: boolean }) {
  const router = useRouter()
  const [status, setStatus] = useState<Status>(submission.status)
  const [busy, setBusy] = useState(false)

  const handleStatusChange = async (next: Status) => {
    const prev = status
    setStatus(next)
    const res = await fetch(`/api/admin/submissions/${submission.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: next }),
    }).catch(() => null)
    if (!res?.ok) {
      setStatus(prev)
      alert('Could not update status.')
      return
    }
    router.refresh()
  }

  const handleDelete = async () => {
    if (!confirm(`Delete the request from ${submission.fullName}?`)) return
    setBusy(true)
    const res = await fetch(`/api/admin/submissions/${submission.id}`, { method: 'DELETE' }).catch(() => null)
    setBusy(false)
    if (!res?.ok) {
      alert('Could not delete this request.')
      return
    }
    router.refresh()
  }

  return (
    <tr>
      <td>{submission.fullName}</td>
      <td>{submission.company}</td>
      <td>
        <a href={`mailto:${submission.email}`} className={styles.email}>
          {submission.email}
        </a>
      </td>
      {detailed && <td>{submission.phone || '—'}</td>}
      <td>{submission.product}</td>
      {detailed && <td className={styles.messageCell}>{submission.message}</td>}
      <td>{new Date(submission.submittedAt).toLocaleDateString()}</td>
      <td>
        <select
          value={status}
          onChange={(e) => handleStatusChange(e.target.value as Status)}
          className={styles.statusSelect}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="archived">Archived</option>
        </select>
      </td>
      <td className={styles.rowActions}>
        <button type="button" className={styles.deleteLink} onClick={handleDelete} disabled={busy}>
          {busy ? 'Deleting…' : 'Delete'}
        </button>
      </td>
    </tr>
  )
}
