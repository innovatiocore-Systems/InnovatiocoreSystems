import styles from './Faq.module.css'

const faqs = [
  {
    q: 'Can I see the software in action before deciding?',
    a: 'Yes. Every product ships with a guided demo on your own use case — we walk through the actual workflow you run today, not a canned recording. Request one through the form below and we reply within 24 hours.',
  },
  {
    q: 'Can the system be customised for how we work?',
    a: 'That is the point. Each platform is built on a core we own outright, so fields, roles, approval flows, report formats and branding are all adjustable. Larger changes are scoped and quoted up front.',
  },
  {
    q: 'How is our data kept safe?',
    a: 'Role-based access, encrypted transport, audit logs on sensitive actions and regular backups come as standard. We can deploy to your own servers or to managed cloud infrastructure, whichever your compliance requires.',
  },
  {
    q: 'Do you handle migration from our current system?',
    a: 'We do. We import existing records from spreadsheets or your current software, verify the data with your team, and run both systems in parallel until you are confident to switch over.',
  },
  {
    q: 'What support do we get after launch?',
    a: 'Onboarding and staff training are included with every rollout. After that you get an ongoing support channel, monitoring and maintenance releases — with 24/7 escalation for anything business-critical.',
  },
  {
    q: 'Do you build custom software outside these products?',
    a: 'Yes. Alongside our own platforms we take on custom development, system architecture, cloud deployment and IT consulting. Tell us the problem and we will tell you honestly whether we are the right fit.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Questions, answered</h2>
          <p className="section-sub">
            The things most teams ask us before getting started. Anything else — just ask.
          </p>
        </div>

        <div className={styles.grid}>
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className={`${styles.item} fade-in fade-in-delay-${(i % 2) + 1}`}
              open={i < 2}
            >
              <summary>
                {f.q}
                <span className={styles.chevron} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
