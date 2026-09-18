'use client'

import { useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutConfirmation from './LogoutConfirmation'
import styles from './Admin.module.css'

const navLinks = [
  { label: 'Demo Requests', href: '/admin/submissions' },
  { label: 'Blog Posts', href: '/admin/posts' },
]

export default function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [showLogout, setShowLogout] = useState(false)

  return (
    <div className={styles.adminContainer}>
      <header className={styles.adminHeader}>
        <Link href="/admin" className={styles.adminBrand}>
          <img src="/logo.png" alt="" className={styles.adminLogo} />
          <span className={styles.adminBrandText}>Admin Dashboard</span>
        </Link>

        <nav className={styles.adminNav} aria-label="Admin">
          {navLinks.map((l) => {
            const active = pathname === l.href || pathname.startsWith(`${l.href}/`)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.adminNavLink} ${active ? styles.adminNavActive : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <button type="button" className="btn btn-outline" onClick={() => setShowLogout(true)}>
          Sign Out
        </button>
      </header>

      <main className={styles.adminContent}>{children}</main>

      {showLogout && <LogoutConfirmation onClose={() => setShowLogout(false)} />}
    </div>
  )
}
