import { useState, useEffect } from 'react'
import styles from './PageLoader.module.css'
import logo from '../../assets/logo.png'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`${styles.pageLoader} ${!isLoading ? styles.fadeOut : ''}`}>
      <div className={styles.loaderContent}>
        <div className={styles.loaderLogo}>
          <img src={logo} alt="Envisage Systems Logo" />
        </div>
        <div className={styles.loaderSpinner}></div>
        <div className={styles.loaderText}>Loading...</div>
      </div>
    </div>
  )
}

export default PageLoader
