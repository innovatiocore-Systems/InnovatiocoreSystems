import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#demo' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#hero" className={styles.logo}>
            <img src="/logo.png" alt="InnovatioCore Systems" className={styles.logoImg} />
          </a>

          {/* Links */}
          <ul className={`${styles.links} ${open ? styles.open : ''}`}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className={styles.right}>
            <a href="#demo" className="btn btn-primary">Request a Demo</a>
            <button
              className={`${styles.hamburger} ${open ? styles.hOpen : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
