import styles from './About.module.css'

const steps = [
  {
    title: 'Discovery & Architecture',
    desc: 'We study your workflow before writing a line of code, then design a system that fits how you actually operate.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: 'Build & Integrate',
    desc: 'Modern stacks, clean architecture and APIs that connect to the tools, devices and services you already use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Deploy & Support',
    desc: 'We handle rollout, training and monitoring — then stay on call so the system keeps earning its place.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '4',     label: 'Products built' },
  { value: '5+',    label: 'Industries served' },
  { value: '99.9%', label: 'Uptime target' },
  { value: '24/7',  label: 'Support' },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.split}>
          {/* ---------- Visual ---------- */}
          <div className={`${styles.visual} fade-in`}>
            <span className={styles.outline} aria-hidden="true" />

            <div className={styles.panel}>
              <div className={styles.panelHead}>
                <img src="/logo.png" alt="" aria-hidden="true" />
              </div>

              <div className={styles.statCard}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.stat}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress badge, mirroring the reference's floating ring */}
            <div className={styles.ring}>
              <svg viewBox="0 0 44 44" aria-hidden="true">
                <circle className={styles.ringTrack} cx="22" cy="22" r="18" />
                <circle className={styles.ringFill} cx="22" cy="22" r="18" />
              </svg>
              <div className={styles.ringText}>
                <strong>100%</strong>
                <span>In-house</span>
              </div>
            </div>
          </div>

          {/* ---------- Copy ---------- */}
          <div className={`${styles.text} fade-in fade-in-delay-1`}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">
              Built to solve<br />
              <span className="accent">real problems</span>
            </h2>
            <p className={styles.lead}>
              InnovatioCore Systems is a software company dedicated to building powerful, reliable
              and scalable digital solutions — from healthcare to recruitment, events to workspaces.
            </p>

            <ul className={styles.steps}>
              {steps.map((s) => (
                <li key={s.title}>
                  <span className={styles.stepIcon}>{s.icon}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.cta}>
              <a href="#products" className="btn btn-primary">
                View Our Products
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
