import { useState, useRef } from 'react'
import styles from './DemoForm.module.css'

const products = [
  'Pathology Management System',
  'Mero Dairy',
  'Both Products',
]

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      formRef.current?.reset()
      setTimeout(() => setSubmitted(false), 4000)
    }, 1800)
  }

  return (
    <section id="demo" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className="fade-in">
            <span className={`section-label ${styles.label}`}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Free Demo
            </span>
            <h2 className={`section-title ${styles.title}`}>
              See It In Action —<br />Request a Free Demo
            </h2>
            <p className={`section-sub ${styles.sub}`}>
              Fill out the form and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className={`${styles.formWrap} fade-in fade-in-delay-1`}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.grid}>
                <div className={styles.group}>
                  <label htmlFor="fullName">Full Name</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Your full name" required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="company">Company Name</label>
                  <input id="company" name="company" type="text" placeholder="Your company" required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div className={styles.group}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+977-XXXXXXXXXX" />
                </div>
                <div className={`${styles.group} ${styles.full}`}>
                  <label htmlFor="product">Product Interest</label>
                  <select id="product" name="product" required defaultValue="">
                    <option value="" disabled>Select a product</option>
                    {products.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className={`${styles.group} ${styles.full}`}>
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements, current challenges, or anything else..."
                  />
                </div>
              </div>

              <div className={styles.submit}>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? (
                    <>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" style={{ animation: 'spin .8s linear infinite' }}>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                      Request Demo
                    </>
                  )}
                </button>
              </div>

              <p className={styles.trust}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your information is safe with us. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      <div className={`${styles.toast} ${submitted ? styles.toastShow : ''}`}>
        <span>🎉</span>
        <div>
          <p>Demo Request Sent!</p>
          <span>We'll get back to you within 24 hours.</span>
        </div>
      </div>
    </section>
  )
}
