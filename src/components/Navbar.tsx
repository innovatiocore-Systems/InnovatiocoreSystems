import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why' },
  { label: 'FAQ',      href: '#faq' },
  { label: 'Contact',  href: '#demo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently under the header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-120px 0px -55% 0px', threshold: [0.05, 0.25, 0.5] }
    )
    links.forEach((l) => {
      const el = document.querySelector(l.href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`${styles.shell} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.bar}>
          {/* Logo lockup */}
          <a href="#hero" className={styles.logo} aria-label="InnovatioCore Systems — home">
            <img src="/logo.png" alt="" className={styles.logoImg} />
            <span className={styles.brandName}>InnovatioCore Systems</span>
          </a>

          {/* Links */}
          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={active === l.href ? styles.active : ''}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <a href="#demo" className="btn btn-primary" onClick={() => setOpen(false)}>
                Let&apos;s Talk
              </a>
            </li>
          </ul>

          {/* Right side */}
          <div className={styles.right}>
            <a href="#demo" className={`btn btn-primary ${styles.cta}`}>
              Let&apos;s Talk
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>

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
