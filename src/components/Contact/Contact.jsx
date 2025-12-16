import styles from './Contact.module.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="32" height="32" fill="none">
          <rect width="32" height="32" rx="8" fill="#eef3fb"/>
          <path d="M8 10l8 6 8-6M8 22h16a1 1 0 001-1V11a1 1 0 00-1-1H8a1 1 0 00-1 1v10a1 1 0 001 1z" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email',
      detail: 'envisagesystemsinc@gmail.com',
      subtext: 'Response within 2 business hours'
    },
    {
      icon: (
        <svg width="32" height="32" fill="none">
          <rect width="32" height="32" rx="8" fill="#eef3fb"/>
          <path d="M22 16.5c0 3-2.5 5.5-5.5 5.5S11 19.5 11 16.5 13.5 11 16.5 11 22 13.5 22 16.5z" stroke="#0b63c6" strokeWidth="2"/>
          <path d="M16.5 14v2.5l2 1.5" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Business Hours',
      detail: 'Mon - Fri: 9AM - 6PM IST',
      subtext: '24/7 Emergency Support Available'
    },
    {
      icon: (
        <svg width="32" height="32" fill="none">
          <rect width="32" height="32" rx="8" fill="#eef3fb"/>
          <path d="M16 8v16M8 16h16" stroke="#0b63c6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Consultation',
      detail: 'Free 30-min consultation',
      subtext: 'Discuss your project needs'
    }
  ]

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="center-text">
          <h2>Let's Build Something Great Together</h2>
          <p className="ks">Our team is ready to discuss your project. Get in touch today.</p>
        </div>

        <div className={styles.contactGridEnhanced}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.contactBoxEnhanced}>
              <div className={styles.contactIcon}>
                {info.icon}
              </div>
              <h4>{info.title}</h4>
              <p className={styles.contactDetail}>{info.detail}</p>
              <p className={styles.contactSubtext}>{info.subtext}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaCenter}>
          <a href="mailto:envisagesystemsinc@gmail.com" className="btn btn-primary btn-large">Schedule a Consultation</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
