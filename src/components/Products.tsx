import styles from './Products.module.css'
import diagnosLogo from '../assets/products/diagnos-logo.png'
import workovaLogo from '../assets/products/workova-logo.png'

interface Product {
  id: string
  badges: { label: string; color: string }[]
  /** Real logo file, when the product has one */
  logo?: string
  logoAlt?: string
  /** Fallback wordmark for products without a logo yet */
  mark?: { initials: string; name: string; tagline: string }
  title: string
  description: string
  features: string[]
  /** Renders the blue-filled highlight treatment */
  featured?: boolean
}

const products: Product[] = [
  {
    id: 'pms',
    badges: [
      { label: 'Healthcare', color: 'brand' },
      { label: 'Diagnostics', color: 'teal' },
    ],
    logo: diagnosLogo,
    logoAlt: 'Diagn.OS — Diagnostic Optimized System',
    title: 'Pathology Management System',
    description:
      'A complete lab management solution designed for pathology labs and diagnostic centres. Manage patient registrations, test orders, results and reports — all in one place.',
    features: [
      'Patient registration & test ordering',
      'Automated report generation',
      'Lab billing & invoicing',
      'Doctor & technician portal',
      'Digital report delivery',
    ],
  },
  {
    id: 'workovaerp',
    featured: true,
    badges: [
      { label: 'Enterprise', color: 'orange' },
      { label: 'Overseas Recruitment', color: 'teal' },
    ],
    logo: workovaLogo,
    logoAlt: 'Workova ERP — From Application to Abroad',
    title: 'Workova ERP',
    description:
      'An end-to-end platform for manpower and overseas recruitment agencies — from application to abroad.',
    features: [
      'Branded, secure portal for each agency',
      'Candidate registration & eligibility checks',
      'Job & vacancy management with hiring limits',
      'Deployment tracking — application to abroad',
      'Document management & proof-backed verification',
      'Approval workflows, audit logs & reporting',
    ],
  },
  {
    id: 'events',
    badges: [
      { label: 'Events', color: 'violet' },
      { label: 'Ticketing', color: 'brand' },
    ],
    mark: { initials: 'IE', name: 'InnoEvent', tagline: 'Management System' },
    title: 'Event Management System',
    description:
      'Plan, promote and run events of any size — from a single workshop to a multi-day conference — with registrations, ticketing and on-ground check-in handled end to end.',
    features: [
      'Event creation with multi-session scheduling',
      'Online registration & ticket sales',
      'QR-based attendee check-in',
      'Venue, vendor & resource allocation',
      'Sponsor, speaker & guest management',
      'Live attendance dashboards & post-event reports',
    ],
  },
  {
    id: 'coworking',
    badges: [
      { label: 'Workspace', color: 'orange' },
      { label: 'Bookings', color: 'teal' },
    ],
    mark: { initials: 'CS', name: 'CoreSpace', tagline: 'Co-Working System' },
    title: 'Co-Working Space System',
    description:
      'Everything a co-working operator needs to run their space — desks, cabins and meeting rooms booked, billed and monitored from one dashboard.',
    features: [
      'Desk, cabin & meeting-room booking',
      'Member plans, contracts & renewals',
      'Automated invoicing & payment tracking',
      'Access control & visitor check-in',
      'Occupancy & utilisation analytics',
      'Community announcements & support desk',
    ],
  },
]

interface ProductsProps {
  onPreselect?: (product: string) => void
}

export default function Products({ onPreselect }: ProductsProps) {
  return (
    <section id="products" className={`section ${styles.section}`}>
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">
            Software That Solves<br />Industry Challenges
          </h2>
          <p className="section-sub">
            Purpose-built platforms for healthcare, recruitment, events and shared workspaces —
            designed with the end user in mind.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <article
              key={p.id}
              className={`${styles.card} ${p.featured ? styles.featured : ''} fade-in fade-in-delay-${(i % 2) + 1}`}
            >
              <div className={styles.cardHeader}>
                {p.featured && (
                  <span className={styles.flag}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Flagship
                  </span>
                )}
                <div className={styles.badges}>
                  {p.badges.map((b) => (
                    <span key={b.label} className={`${styles.badge} ${styles[`badge-${b.color}`]}`}>
                      {b.label}
                    </span>
                  ))}
                </div>

                <div className={styles.logo}>
                  {p.logo ? (
                    <img src={p.logo} alt={p.logoAlt} />
                  ) : (
                    <div className={styles.wordmark}>
                      <span className={styles.monogram}>{p.mark!.initials}</span>
                      <span className={styles.wordmarkText}>
                        {p.mark!.name}
                        <small>{p.mark!.tagline}</small>
                      </span>
                    </div>
                  )}
                </div>

                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.features}>
                  <h4>Key Features</h4>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className={styles.check}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cta}>
                  <a
                    href="#demo"
                    className={`btn ${p.featured ? "btn-brand" : "btn-primary"}`}
                    onClick={() => onPreselect?.(p.title)}
                  >
                    Request a Demo
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
