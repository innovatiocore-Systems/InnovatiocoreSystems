import styles from './Hero.module.css'
import { useTypewriter } from '../hooks/useTypewriter'

/* The four domains we build for — each gets a floating chip around the mock */
const chips = [
  {
    tone: 'brand', pos: 'chipTL', label: 'Healthcare',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    tone: 'ink', pos: 'chipBL', label: 'Recruitment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
  {
    tone: 'teal', pos: 'chipTR', label: 'Events',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    tone: 'violet', pos: 'chipBR', label: 'Workspaces',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </svg>
    ),
  },
]

const bars = [42, 58, 46, 74, 63, 92, 78]

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grain} />
      <div className={styles.blobA} />
      <div className={styles.blobB} />

      <div className={`container ${styles.inner}`}>
        {/* ---------------- Centred copy ---------------- */}
        <div className={styles.copy}>
          <h1 className={`${styles.title} fade-in`}>
            Core Solutions, <span className={styles.accent}>Endless Possibilities</span>
          </h1>

          <p className={`${styles.sub} fade-in fade-in-delay-1`}>
            We design and build robust, scalable and future-ready platforms for healthcare,
            recruitment, events and shared workspaces — engineered for the real world.
          </p>

          <div className={`${styles.actions} fade-in fade-in-delay-2`}>
            <a href="#demo" className="btn btn-primary">
              Get Started
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#products" className="btn btn-outline">
              Explore Products
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className={`${styles.typewriter} fade-in fade-in-delay-3`}>
            <span className={styles.typeLabel}>Building</span>
            <span className={styles.typeText}>
              {typed}
              <span className={styles.cursor} />
            </span>
          </div>
        </div>

        {/* ---------------- Showcase ---------------- */}
        <div className={`${styles.showcase} fade-in fade-in-delay-2`}>
          {/* Floating domain chips */}
          {chips.map((c) => (
            <div
              key={c.label}
              className={`${styles.chip} ${styles[c.pos]} ${styles[`tone-${c.tone}`]}`}
              title={c.label}
            >
              {c.icon}
            </div>
          ))}

          {/* Pointer pills */}
          <span className={`${styles.pill} ${styles.pillLeft}`}>Pathology Labs</span>
          <span className={`${styles.pill} ${styles.pillRight}`}>Manpower Agencies</span>

          {/* Blue dome behind the product mock */}
          <div className={styles.arc} aria-hidden="true" />

          {/* Product mock */}
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span className={`${styles.tl} ${styles.tlR}`} />
              <span className={`${styles.tl} ${styles.tlY}`} />
              <span className={`${styles.tl} ${styles.tlG}`} />
              <div className={styles.urlBar}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 018 0v4" />
                </svg>
                innovatiocoresystems.com
              </div>
            </div>

            <div className={styles.app}>
              <aside className={styles.sidebar}>
                <span className={`${styles.navDot} ${styles.navDotActive}`} />
                <span className={styles.navDot} />
                <span className={styles.navDot} />
                <span className={styles.navDot} />
                <span className={styles.sidebarSpacer} />
                <span className={styles.navDot} />
              </aside>

              <div className={styles.panel}>
                <header className={styles.appHeader}>
                  <img src="/logo.png" alt="InnovatioCore Systems" className={styles.appLogo} />
                  <span className={styles.livePill}>
                    <span className={styles.liveDot} />
                    Live
                  </span>
                </header>

                <div className={styles.tiles}>
                  <div className={styles.tile}>
                    <span className={styles.tileLabel}>Records</span>
                    <strong>12.4k</strong>
                    <span className={styles.tileTrend}>+18%</span>
                  </div>
                  <div className={styles.tile}>
                    <span className={styles.tileLabel}>Active</span>
                    <strong>340</strong>
                    <span className={styles.tileTrend}>+6%</span>
                  </div>
                  <div className={`${styles.tile} ${styles.tileBrand}`}>
                    <span className={styles.tileLabel}>Uptime</span>
                    <strong>99.9%</strong>
                    <span className={styles.tileTrend}>stable</span>
                  </div>
                </div>

                <div className={styles.chartCard}>
                  <div className={styles.chartHead}>
                    <span className={styles.chartTitle} />
                    <span className={styles.chartLegend} />
                  </div>
                  <div className={styles.chart}>
                    {bars.map((h, i) => (
                      <span
                        key={i}
                        className={i === 5 ? styles.barPeak : undefined}
                        style={{ height: `${h}%`, animationDelay: `${350 + i * 80}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <ul className={styles.rows}>
                  {[86, 64, 72].map((w, i) => (
                    <li key={i}>
                      <span className={styles.rowAvatar} />
                      <span className={styles.rowBar} style={{ width: `${w}%` }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
