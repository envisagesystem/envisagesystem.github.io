import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className="container section">
      <div className={styles.twoCol}>
        <div>
          <h2>About Envisage Systems Inc.</h2>
          <p className="ks">
            Since 2010, we've been partnering with forward-thinking organizations to deliver enterprise-grade software solutions. Our engineering-first approach combines technical excellence with business acumen to solve complex challenges.
          </p>

          <div className="chips">
            <span className="chip">ISO 27001 Certified</span>
            <span className="chip">SOC 2 Compliant</span>
            <span className="chip">GDPR Ready</span>
            <span className="chip">Enterprise SLA</span>
          </div>
        </div>

        <div className={styles.aboutCards}>
          <div className={styles.cardLight}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" fill="none"><rect width="32" height="32" rx="8" fill="#eef3fb"/><path d="M16 9v14M9 16h14" stroke="#0b63c6" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
            <h3>Our Mission</h3>
            <p className="ks">Empower businesses with secure, scalable technology solutions that drive measurable growth and operational excellence.</p>
          </div>

          <div className={styles.cardMuted}>
            <div className={styles.cardIcon}>
              <svg width="32" height="32" fill="none"><rect width="32" height="32" rx="8" fill="#d4e3f7"/><path d="M10 16l4 4 8-8" stroke="#0b63c6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Our Vision</h3>
            <p className="ks">To be the most trusted technology partner for enterprises seeking digital transformation and innovation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
