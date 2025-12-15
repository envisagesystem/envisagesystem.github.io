import styles from './Services.module.css'

const Services = () => {
  const services = [
    { icon: <path d="M3 12h18" stroke="#0b63c6" strokeWidth="2"/>, title: 'Custom Software Development', desc: 'Tailored business-centric solutions.' },
    { icon: <rect x="6" y="3" width="12" height="18" rx="2" stroke="#0b63c6" strokeWidth="2"/>, title: 'Mobile App Development', desc: 'iOS & Android apps built for performance.' },
    { icon: <path d="M3 7h18M3 12h18M3 17h18" stroke="#0b63c6" strokeWidth="2"/>, title: 'Web App Development', desc: 'Modern responsive web applications.' },
    { icon: <path d="M20 17.5A4.5 4.5 0 0 0 15.5 13H7a4 4 0 1 0 .5 8h12z" stroke="#0b63c6" strokeWidth="2"/>, title: 'Cloud Architecture', desc: 'AWS, Azure & GCP Cloud solutions.' },
    { icon: <path d="M5 12h14M9 8v8" stroke="#0b63c6" strokeWidth="2"/>, title: 'DevOps & CI/CD', desc: 'Faster releases with automation.' },
    { icon: <path d="M12 2l3 6 6 .5-4.5 4 1 6L12 16l-5.5 2.5 1-6L3 8.5 9 8z" stroke="#0b63c6" strokeWidth="1.6"/>, title: 'Consulting', desc: 'Architectural and strategic tech guidance.' },
    { icon: <path d="M12 3v18M3 12h18" stroke="#0b63c6" strokeWidth="2"/>, title: 'AI/ML Solutions', desc: 'Predictive & intelligent systems.' },
    { icon: <rect x="4" y="4" width="16" height="16" rx="3" stroke="#0b63c6" strokeWidth="2"/>, title: 'API Development', desc: 'REST & GraphQL secure APIs.' },
    { icon: <path d="M3 12h18M12 3v18" stroke="#0b63c6" strokeWidth="2"/>, title: 'UI/UX Design', desc: 'Human-centric design systems.' }
  ]

  return (
    <section id="services" className="container section">
      <div className="center-text">
        <h2>Our Services</h2>
        <p className="ks">Comprehensive technology solutions to drive your business forward.</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <article key={index} className={styles.serviceCard}>
            <div className={styles.ico}>
              <svg width="20" height="20">{service.icon}</svg>
            </div>
            <div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
