import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src={logo} alt="Envisage Systems Logo" />
            </div>
            <strong style={{color: '#fff', fontSize: '18px'}}>Envisage Systems Inc.</strong>
            <div className={styles.small}>Foresee is to see</div>
            <p className={styles.footerDesc}>Enterprise software solutions that drive real results since 2010.</p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Services</h4>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Custom Development</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Cloud Architecture</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>DevOps & CI/CD</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>AI/ML Solutions</a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Company</h4>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
            <a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')}>Expertise</a>
            <a href="#success" onClick={(e) => scrollToSection(e, 'success')}>Success Stories</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <a href="mailto:envisagesystemsinc@gmail.com">envisagesystemsinc@gmail.com</a>
            <div className={styles.footerText}>Mon - Fri: 9AM - 6PM EST</div>
            <div className={styles.footerText}>24/7 Emergency Support</div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLegal}>
            <span>&copy; 2024 Envisage Systems Inc. All rights reserved.</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
