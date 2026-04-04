import styles from './Footer.module.css'

const navLinks = ['Home', 'About', 'Products', 'Services', 'Contact']
const navHrefs = ['#hero', '#about', '#products', '#services', '#demo']

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
            <p>Core Solutions, Endless Possibilities.<br />Building intelligent software for a smarter world.</p>
            <div className={styles.social}>
              {/* LinkedIn */}
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <svg fill="rgba(255,255,255,.7)" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg fill="rgba(255,255,255,.7)" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg fill="rgba(255,255,255,.7)" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            {navLinks.map((l, i) => (
              <a key={l} href={navHrefs[i]}>{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <div className={styles.contactItem}>
              <span>📧</span>
              <span>hello@innovatiocore.com</span>
            </div>
            <div className={styles.contactItem}>
              <span>📞</span>
              <span>+977-XXXXXXXXXX</span>
            </div>
            <div className={styles.contactItem}>
              <span>📍</span>
              <span>Kathmandu, Nepal</span>
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
