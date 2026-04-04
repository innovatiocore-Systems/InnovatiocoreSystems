import styles from './Services.module.css'

const services = [
  {
    title: 'Software Development',
    desc: 'Custom web and mobile applications built with modern stacks, clean architecture, and a focus on performance and maintainability.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'System Architecture',
    desc: 'Robust, scalable system designs that grow with your business — microservices, APIs, databases, and infrastructure planning.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><path d="M17.5 17.5l3 3M14 17.5h7" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    desc: 'Strategic technology guidance to help you make the right decisions — from tool selection to team structuring and process optimization.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Digital Transformation',
    desc: 'We help traditional businesses transition to digital-first operations — automating workflows, eliminating paperwork, and improving efficiency.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Solutions',
    desc: 'Deploy, manage, and scale applications on modern cloud infrastructure with high availability, security, and cost efficiency in mind.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Core Infrastructure',
    desc: 'Networking, server setup, security hardening, and monitoring — we build and maintain the foundation that keeps your systems running.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="#1246F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h5" />
      </svg>
    ),
  },
]

const delays = [1, 2, 3, 1, 2, 3]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Our Services
          </span>
          <h2 className="section-title">End-to-End Technology<br />Services</h2>
          <p className="section-sub">
            From concept to deployment — we handle every layer of your digital transformation journey.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.card} fade-in fade-in-delay-${delays[i]}`}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
