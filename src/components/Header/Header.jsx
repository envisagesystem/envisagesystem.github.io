import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`container ${styles.header}`} role="banner">
      <Link to="/" className={styles.brand} onClick={(e) => scrollToSection(e, 'top')}>
        <div className={styles.logoPlaceholder}>
          <img src={logo} alt="Envisage Systems Logo" />
        </div>
        <div>
          <h1>Envisage Systems Inc.</h1>
          <p>Foresee is to see</p>
        </div>
      </Link>

      <nav className={styles.nav} role="navigation" aria-label="Primary navigation">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
        <a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')}>Expertise</a>
        <a href="#success" onClick={(e) => scrollToSection(e, 'success')}>Success</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.cta}>Contact Us</a>
      </nav>
    </header>
  )
}

export default Header
