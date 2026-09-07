import styles from './Footer.module.css'

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why' },
  { label: 'Contact',  href: '#demo' },
]

const productLinks = [
  'Pathology Management System',
  'Workova ERP',
  'Event Management System',
  'Co-Working Space System',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/logo.png" alt="InnovatioCore Systems" className={styles.logoImg} />
            </div>
            <p>
              Core Solutions, Endless Possibilities.<br />
              Building intelligent software for a smarter world.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="X">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4>Company</h4>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          {/* Products */}
          <div className={styles.col}>
            <h4>Products</h4>
            {productLinks.map((p) => (
              <a key={p} href="#products">{p}</a>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <div className={styles.emails}>
              <a href="mailto:info@innovatiocoresystems.com">
                <span className={styles.emailLabel}>General</span>
                info@innovatiocoresystems.com
              </a>
              <a href="mailto:support@innovatiocoresystems.com">
                <span className={styles.emailLabel}>Support</span>
                support@innovatiocoresystems.com
              </a>
              <a href="mailto:sales@innovatiocoresystems.com">
                <span className={styles.emailLabel}>Sales</span>
                sales@innovatiocoresystems.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +977-XXXXXXXXXX
            </div>
            <div className={styles.contactItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Kathmandu, Nepal
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 InnovatioCore Systems. All Rights Reserved.</p>
          <p className={styles.tagline}>Core Solutions, Endless Possibilities.</p>
        </div>
      </div>
    </footer>
  )
}
