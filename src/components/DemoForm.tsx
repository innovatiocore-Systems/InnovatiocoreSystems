import { useState, useRef } from 'react'
import styles from './DemoForm.module.css'

const products = [
  'Pathology Management System',
  'Workova ERP',
  'Event Management System',
  'Co-Working Space System',
  'Multiple Products',
  'Custom Software / Other',
]

const points = [
  'A walkthrough tailored to your workflow — not a canned video.',
  'Straight answers on pricing, timelines and what we can customise.',
  'No obligation. We reply within 24 hours.',
]

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '6e04ddb1-b66e-47ff-a619-042bcdb2277f'

export default function DemoForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errored, setErrored] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setSubmitting(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(formRef.current),
      })
      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        formRef.current.reset()
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        setErrored(true)
        setTimeout(() => setErrored(false), 5000)
      }
    } catch {
      setErrored(true)
      setTimeout(() => setErrored(false), 5000)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="demo" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* ---------- Left: pitch + contact ---------- */}
          <div className={`${styles.aside} fade-in`}>
            <span className="section-label">Free Demo</span>
            <h2 className="section-title">
              See It In Action —<br />Request a <span className="accent">Free Demo</span>
            </h2>
            <p className={`section-sub ${styles.sub}`}>
              Tell us what you need and our team will get back to you within 24 hours.
            </p>

            <div className={styles.points}>
              {points.map((p) => (
                <div key={p} className={styles.point}>
                  <span className={styles.pointIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  {p}
                </div>
              ))}
            </div>

            <div className={styles.contactBox}>
              <a href="mailto:sales@innovatiocoresystems.com">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" />
                </svg>
                sales@innovatiocoresystems.com
              </a>
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Kathmandu, Nepal
              </span>
            </div>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className={`${styles.formWrap} fade-in fade-in-delay-1`}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Demo Request — InnovatioCore Systems" />
              <input type="hidden" name="from_name" value="InnovatioCore Website" />
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

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
                      Request Demo
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className={styles.trust}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Your information is safe with us. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Toasts */}
      <div className={`${styles.toast} ${submitted ? styles.toastShow : ''}`}>
        <span>🎉</span>
        <div>
          <p>Demo Request Sent!</p>
          <span>We&apos;ll get back to you within 24 hours.</span>
        </div>
      </div>

      <div className={`${styles.toast} ${styles.toastError} ${errored ? styles.toastShow : ''}`}>
        <span>⚠️</span>
        <div>
          <p>Something went wrong</p>
          <span>Please try again or email us directly.</span>
        </div>
      </div>
    </section>
  )
}
