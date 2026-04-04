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

const MilkIcon = () => (
  <svg fill="none" viewBox="0 0 36 36" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
    <path d="M18 5 C18 5, 8 16, 8 22 a10 10 0 0 0 20 0 C28 16 18 5 18 5Z" />
    <path d="M13 24 a5 5 0 0 0 7 3" strokeWidth="1.5" />
    <path d="M10 10 Q7 8 6 6" />
    <path d="M26 10 Q29 8 30 6" />
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
    id: 'dairy',
    badges: [
      { label: 'Agriculture', color: 'green' },
      { label: 'Dairy',       color: 'cyan' },
    ],
    icon: <MilkIcon />,
    title: 'Mero Dairy',
    description:
      'An all-in-one dairy management platform for farms, cooperatives, and distributors. Track milk collection, manage distribution, handle billing, and run your dairy business smarter.',
    features: [
      'Milk collection & fat/SNF tracking',
      'Member & farmer management',
      'Distribution & delivery tracking',
      'Billing, payments & accounting',
      'Daily, weekly & monthly reports',
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
            Purpose-built platforms for healthcare and agriculture — designed with the end user in mind.
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
