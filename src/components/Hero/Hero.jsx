import styles from './Hero.module.css'

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = (e) => {
    e.preventDefault()
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={`container ${styles.hero}`} aria-label="Hero">
      <div className={styles.heroLeft}>
        <span className={styles.eyebrow}>ENTERPRISE SOFTWARE & CLOUD</span>

        <h1>Enterprise Software<br />Solutions That Drive
          <span className={styles.accent}> Real Results</span>
        </h1>

        <p className={styles.lead}>
          Partner with a trusted technology leader. We deliver secure, scalable, and maintainable software solutions that empower businesses to achieve their strategic objectives.
        </p>

        <div className={styles.ctaRow}>
          <a className="btn btn-primary" href="#contact" onClick={scrollToContact}>Get in Touch</a>
          <a className="btn btn-ghost" href="#services" onClick={scrollToServices}>Our Services</a>
        </div>
      </div>

      <aside className={styles.heroRight}>
        <div className={styles.infoCard}>
          <h3>Envisage Systems Inc.</h3>
          <div className={styles.tagline}>"Foresee is to see"</div>

          <div className={styles.checklist}>
            <div className={styles.check}>
              <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#0b63c6" strokeWidth="2"/><path d="M6 10l3 3 5-6" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>Enterprise-grade solutions</div>
            </div>

            <div className={styles.check}>
              <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#0b63c6" strokeWidth="2"/><path d="M6 10l3 3 5-6" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>99.9% uptime guarantee</div>
            </div>

            <div className={styles.check}>
              <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="9" stroke="#0b63c6" strokeWidth="2"/><path d="M6 10l3 3 5-6" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>24/7 technical support</div>
            </div>
          </div>

          <div className={styles.infoFoot}>
            <div><strong>Est. 2010</strong></div>
            <div><strong>Global Reach</strong></div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Hero
