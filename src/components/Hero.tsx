import styles from './Hero.module.css'
import { useTypewriter } from '../hooks/useTypewriter'
import ParticleCanvas from './ParticleCanvas'

export default function Hero() {
  const typed = useTypewriter()

  return (
    <section id="hero" className={styles.hero}>
      {/* Background layers */}
      <ParticleCanvas />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.watermark}>ICS</div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <img src="/logo.png" alt="InnovatioCore Systems" className={styles.heroLogo} />

          <h2 className={styles.heroCompanyName}>
            Innovatio<span>Core</span> Systems
          </h2>
          <p className={styles.heroTagline}>Kathmandu, Nepal · Software Company</p>

          <div className={styles.typewriterWrap}>
            <span className={styles.typewriterLabel}>Building</span>
            <span className={styles.typewriterText}>
              {typed}<span className={styles.cursor} />
            </span>
          </div>

          <div className={styles.heroDivider} />

          <div className={`${styles.badge} fade-in fade-in-delay-1`}>
            <span className={styles.dot} />
            Nepal's Emerging Tech Innovator
          </div>

          <h1 className={`${styles.title} fade-in fade-in-delay-2`}>
            Core Solutions,<br />
            <span className={styles.gradientText}>Endless Possibilities</span>
          </h1>

          <p className={`${styles.sub} fade-in fade-in-delay-3`}>
            Empowering businesses with intelligent software built for the real world.
          </p>

          <div className={`${styles.actions} fade-in fade-in-delay-4`}>
            <a href="#demo" className="btn btn-primary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Request a Demo
            </a>
            <a href="#products" className="btn btn-outline">
              Explore Products
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
