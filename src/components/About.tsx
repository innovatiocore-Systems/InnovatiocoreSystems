import styles from './About.module.css'

const stats = [
  { icon: '🏢', num: '2+',   label: 'Products Launched' },
  { icon: '👥', num: '50+',  label: 'Happy Clients' },
  { icon: '⚡', num: '99.9%', label: 'Uptime Guaranteed' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Left text */}
          <div className={`${styles.text} fade-in`}>
            <span className="section-label">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
              About Us
            </span>
            <h2 className="section-title">Built to Solve<br />Real Problems</h2>
            <p>
              InnovatioCore Systems is a software company dedicated to building powerful, reliable, and
              scalable digital solutions. From healthcare to agriculture — we solve real problems with
              smart technology.
            </p>
            <p>
              Our team combines deep domain expertise with modern engineering practices to deliver
              products that don't just work — they make a difference. We partner with businesses
              across Nepal and beyond to digitize, automate, and elevate their operations.
            </p>
            <div className={styles.cta}>
              <a href="#products" className="btn btn-blue-outline">View Our Products</a>
            </div>
          </div>

          {/* Right stat cards */}
          <div className={styles.cards}>
            {stats.map((s, i) => (
              <div key={s.label} className={`${styles.card} fade-in fade-in-delay-${i + 1}`}>
                <div className={styles.icon}>{s.icon}</div>
                <div className={styles.info}>
                  <div className={styles.num}>{s.num}</div>
                  <div className={styles.label}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
