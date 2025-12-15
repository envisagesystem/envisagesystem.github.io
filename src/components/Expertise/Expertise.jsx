import styles from './Expertise.module.css'

const Expertise = () => {
  const techCategories = [
    {
      title: 'Languages & Frameworks',
      techs: ['Node.js', 'Python', 'Java', 'React', 'Vue.js', 'Angular', '.NET']
    },
    {
      title: 'Cloud & Infrastructure',
      techs: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker']
    },
    {
      title: 'Data & DevOps',
      techs: ['PostgreSQL', 'MongoDB', 'Redis', 'CI/CD', 'Jenkins', 'GitLab', 'Monitoring']
    }
  ]

  return (
    <section id="expertise" className={`${styles.expertise} container`}>
      <div className="center-text">
        <h2>Our Technical Expertise</h2>
        <p className="ks">Leveraging cutting-edge technologies to build robust, scalable solutions</p>
      </div>
      <div className={styles.techCategories}>
        {techCategories.map((category, index) => (
          <div key={index} className={styles.techCategory}>
            <h4>{category.title}</h4>
            <div className="chips">
              {category.techs.map((tech, techIndex) => (
                <span key={techIndex} className="chip">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
