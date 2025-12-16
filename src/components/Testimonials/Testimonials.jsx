import styles from './Testimonials.module.css'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Envisage Systems transformed our legacy infrastructure into a modern, cloud-native solution. Their expertise and professionalism exceeded our expectations.",
      author: "— Rajesh Kumar, CTO of Mumbai-based FinTech"
    },
    {
      quote: "The team's ability to deliver complex AI/ML solutions on time and within budget has made them our go-to technology partner.",
      author: "— Priya Sharma, Head of Digital at Delhi Healthcare"
    },
    {
      quote: "Outstanding technical expertise combined with excellent communication. They understand both technology and business needs.",
      author: "— Arjun Patel, Founder of Bangalore E-commerce Startup"
    }
  ]

  return (
    <section id="success" className="container section">
      <div className="center-text">
        <h2>Client Success Stories</h2>
        <p className="ks">Trusted by industry leaders worldwide</p>
      </div>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              <strong>{testimonial.author}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
