'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us',   href: '/why-us' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Contact',  href: '/contact' },
  { label: 'Blog',     href: '/blog' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className={`${styles.shell} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.bar}>
          {/* Logo lockup */}
          <Link href="/" className={styles.logo} aria-label="InnovatioCore Systems — home">
            <img src="/logo.png" alt="" className={styles.logoImg} />
            <span className={styles.brandName}>InnovatioCore Systems</span>
          </Link>

          {/* Links */}
          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? styles.active : ''}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </Link>
            </li>
          </ul>

          {/* Right side */}
          <div className={styles.right}>
            <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
              Let&apos;s Talk
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </Link>

            <button
              className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
