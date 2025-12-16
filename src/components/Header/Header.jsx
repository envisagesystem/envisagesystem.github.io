import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <Link to="/" className={styles.brand} onClick={(e) => scrollToSection(e, 'top')}>
          <div className={styles.logoPlaceholder}>
            <img src={logo} alt="Envisage Systems Logo" />
          </div>
          <div>
            <h1>Envisage Systems Inc.</h1>
            <p>Foresee is to see</p>
          </div>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`} role="navigation" aria-label="Primary navigation">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a href="#expertise" onClick={(e) => scrollToSection(e, 'expertise')}>Expertise</a>
          <a href="#success" onClick={(e) => scrollToSection(e, 'success')}>Success</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={styles.cta}>Contact Us</a>
        </nav>
      </div>

      {/* Hamburger Menu Button - Positioned absolutely on the right */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header