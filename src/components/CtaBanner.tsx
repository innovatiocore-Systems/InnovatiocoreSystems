import styles from './CtaBanner.module.css'

export default function CtaBanner() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={`${styles.banner} fade-in`}>
          <div className={styles.tile}>
            <img src="/logo.png" alt="" aria-hidden="true" />
          </div>

          <div className={styles.copy}>
            <h3>Have a project in mind?</h3>
            <p>Let&apos;s build something amazing together.</p>
          </div>

          <a href="#demo" className="btn btn-brand">
            Start Your Project
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
