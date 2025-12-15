import { BrowserRouter as Router } from 'react-router-dom'
import PageLoader from './components/PageLoader/PageLoader'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Services from './components/Services/Services'
import Expertise from './components/Expertise/Expertise'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <PageLoader />
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Expertise />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
