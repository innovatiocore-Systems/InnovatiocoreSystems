import styles from './Products.module.css'

interface Product {
  id: string
  badges: { label: string; color: string }[]
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const LabIcon = () => (
  <svg fill="none" viewBox="0 0 36 36" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M14 4v14l-6 8h16l-6-8V4" />
    <path d="M11 4h14" />
    <circle cx="18" cy="27" r="1.5" fill="#fff" stroke="none" />
    <path d="M8 32h20" />
    <path d="M22 10l4 5" />
  </svg>
)

const TeamIcon = () => (
  <svg fill="none" viewBox="0 0 36 36" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <circle cx="13" cy="12" r="4.5" />
    <path d="M5 29c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    <circle cx="25" cy="13.5" r="3.5" />
    <path d="M24 21c4 .3 7 3.7 7 8" />
  </svg>
)

const products: Product[] = [
  {
    id: 'pms',
    badges: [
      { label: 'Healthcare', color: 'blue' },
      { label: 'Software',   color: 'cyan' },
    ],
    icon: <LabIcon />,
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
      { label: 'HR & Workforce', color: 'cyan' },
    ],
    icon: <TeamIcon />,
    title: 'workovaERP',
    description:
      'A complete manpower management system that helps organizations manage their entire workforce — from hiring and attendance to payroll and performance — all from one unified platform.',
    features: [
      'Employee records & onboarding',
      'Attendance & shift scheduling',
      'Payroll & salary management',
      'Leave & performance tracking',
      'Workforce reports & analytics',
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
                <div className={styles.iconWrap}>{p.icon}</div>
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
