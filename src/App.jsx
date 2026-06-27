import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          const fill = e.target.querySelector('.skill-fill')
          if (fill) fill.classList.add('animated')
        }
      })
    }, { threshold: 0.1 })
    reveals.forEach(r => io.observe(r))

    const skillsSection = document.getElementById('skills')
    let skillsIO
    if (skillsSection) {
      skillsIO = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            document.querySelectorAll('.skill-fill').forEach(f => f.classList.add('animated'))
          }
        })
      }, { threshold: 0.2 })
      skillsIO.observe(skillsSection)
    }

    return () => {
      io.disconnect()
      skillsIO?.disconnect()
    }
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
