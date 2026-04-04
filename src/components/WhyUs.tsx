import styles from './WhyUs.module.css'

const reasons = [
  {
    title: 'Innovation First',
    desc: "We don't follow trends — we study problems deeply and engineer solutions that push what's possible for the industries we serve.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Reliability You Trust',
    desc: "99.9% uptime. Tested. Monitored. Our systems are engineered to be there when you need them — no surprises, no downtime.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Built to Scale',
    desc: "From 10 users to 10,000 — our architecture is designed to grow with your business without requiring expensive rewrites.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="why" className={`section ${styles.section}`}>
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Why Choose Us
          </span>
          <h2 className="section-title">Principles We Build By</h2>
          <p className="section-sub">Every decision we make is guided by three core values that define how we work.</p>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={r.title} className={`${styles.card} fade-in fade-in-delay-${i + 1}`}>
              <div className={styles.icon}>{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
