import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'about',      label: 'Sobre' },
  { id: 'skills',     label: 'Habilidades' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects',   label: 'Projetos' },
  { id: 'contact',    label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : ''
      return !prev
    })
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="36" height="36" viewBox="0 0 120 120" fill="none">
            <circle cx="21.6" cy="60" r="10.08" fill="#D4A83255" stroke="#D4A832" strokeWidth="1.92"/>
            <circle cx="60" cy="30" r="10.08" fill="#D4A83255" stroke="#D4A832" strokeWidth="1.92"/>
            <circle cx="60" cy="90" r="10.08" fill="#D4A83255" stroke="#D4A832" strokeWidth="1.92"/>
            <circle cx="98.4" cy="60" r="10.08" fill="#D4A832" stroke="#D4A832" strokeWidth="1.92"/>
            <circle cx="98.4" cy="60" r="4.5" fill="#0c0c0c"/>
            <line x1="31.3" y1="54.6" x2="50.5" y2="36.2" stroke="#D4A83299" strokeWidth="2.16"/>
            <polygon points="50.5,36.2 43.8,40.1 47.2,33.4" fill="#D4A832"/>
            <line x1="31.3" y1="65.4" x2="50.5" y2="83.8" stroke="#D4A83299" strokeWidth="2.16"/>
            <polygon points="50.5,83.8 43.8,79.9 47.2,86.6" fill="#D4A832"/>
            <line x1="69.5" y1="36.2" x2="88.7" y2="54.6" stroke="#D4A83299" strokeWidth="2.16"/>
            <polygon points="88.7,54.6 82.0,50.7 88.7,47.9" fill="#D4A832"/>
            <line x1="69.5" y1="83.8" x2="88.7" y2="65.4" stroke="#D4A83299" strokeWidth="2.16"/>
            <polygon points="88.7,65.4 82.0,69.3 88.7,72.1" fill="#D4A832"/>
          </svg>
          <span style={{ color: 'var(--text)', fontSize: '15px', fontWeight: 700, letterSpacing: '0.08em' }}>
            RODRIGO<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>

        <button className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
        ))}
      </div>
    </>
  )
}
