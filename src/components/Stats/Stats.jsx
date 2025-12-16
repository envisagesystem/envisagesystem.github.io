import { useState, useEffect } from 'react'
import styles from './Stats.module.css'

const StatItem = ({ number, label }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true)

    if (number.includes('+') || number.includes('%')) {
      const targetNumber = parseInt(number.replace(/[^0-9]/g, ''), 10)
      let start = 0
      const duration = 2000 // 2 seconds
      const increment = targetNumber / (duration / 16) // ~60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= targetNumber) {
          setCount(targetNumber)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    } else {
      setCount(parseInt(number, 10))
    }
  }, [number])

  const displayNumber = number.includes('+') ? `${count}+` :
                       number.includes('%') ? `${count}%` :
                       count.toLocaleString()

  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>{displayNumber}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

const Stats = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime SLA' }
  ]

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
