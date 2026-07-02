import styles from './Products.module.css'
import diagnosLogo from '../assets/products/diagnos-logo.png'
import workovaLogo from '../assets/products/workova-logo.png'

interface Product {
  id: string
  badges: { label: string; color: string }[]
  logo: string
  logoAlt: string
  title: string
  description: string
  features: string[]
}

const products: Product[] = [
  {
    id: 'pms',
    badges: [
      { label: 'Healthcare', color: 'blue' },
      { label: 'Software',   color: 'cyan' },
    ],
    logo: diagnosLogo,
    logoAlt: 'Diagn.OS — Diagnostic Optimized System',
    title: 'Pathology Management System',
    description:
      'A complete lab management solution designed for pathology labs and diagnostic centres. Manage patient registrations, test orders, results, and reports — all in one place.',
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
    badges: [
      { label: 'Enterprise', color: 'green' },
      { label: 'Overseas Recruitment', color: 'cyan' },
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
]

interface ProductsProps {
  onPreselect?: (product: string) => void
}

export default function Products({ onPreselect }: ProductsProps) {
  return (
    <section id="products" className={`section ${styles.section}`}>
      <div className="container">
        <div className="center fade-in">
          <span className="section-label">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Our Products
          </span>
          <h2 className="section-title">Software That Solves<br />Industry Challenges</h2>
          <p className="section-sub">
            Purpose-built platforms for healthcare and enterprise workforce management — designed with the end user in mind.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <div key={p.id} className={`${styles.card} fade-in fade-in-delay-${i + 1}`}>
              <div className={styles.cardHeader}>
                <div className={styles.badges}>
                  {p.badges.map((b) => (
                    <span key={b.label} className={`${styles.badge} ${styles[`badge-${b.color}`]}`}>
                      {b.label}
                    </span>
                  ))}
                </div>
                <div className={styles.logo}>
                  <img src={p.logo} alt={p.logoAlt} />
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
                        <span className={styles.check}>✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cta}>
                  <a
                    href="#demo"
                    className="btn btn-primary"
                    onClick={() => onPreselect?.(p.title)}
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
