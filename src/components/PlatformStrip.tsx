import styles from './PlatformStrip.module.css'
import diagnosLogo from '../assets/products/diagnos-logo.png'
import workovaLogo from '../assets/products/workova-logo.png'

export default function PlatformStrip() {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.label}>
          Platforms built by
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-8-4.6-8-10a4.6 4.6 0 018-3.1A4.6 4.6 0 0120 11c0 5.4-8 10-8 10z" />
          </svg>
          InnovatioCore Systems
        </span>

        <div className={styles.marks}>
          <a href="#products" className={styles.mark}>
            <img src={diagnosLogo} alt="Diagn.OS — Pathology Management System" />
          </a>

          <a href="#products" className={styles.mark}>
            <img src={workovaLogo} alt="Workova ERP" />
          </a>

          <a href="#products" className={`${styles.mark} ${styles.textMark}`}>
            <span className={styles.monogram}>IE</span>
            <span className={styles.word}>
              InnoEvent
              <small>Management System</small>
            </span>
          </a>

          <a href="#products" className={`${styles.mark} ${styles.textMark}`}>
            <span className={styles.monogram}>CS</span>
            <span className={styles.word}>
              CoreSpace
              <small>Co-Working System</small>
            </span>
          </a>

          <span className={`${styles.mark} ${styles.more}`}>&amp; More</span>
        </div>
      </div>
    </div>
  )
}
