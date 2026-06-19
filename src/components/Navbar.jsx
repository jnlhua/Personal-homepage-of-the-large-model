import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7)

      const sections = ['hero', 'about', 'projects', 'strengths', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'projects', label: '项目' },
    { id: 'strengths', label: '优势' },
    { id: 'contact', label: '联系' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: 0, duration: 1.2 })
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--visible' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('hero')}>
          JNL<span className="navbar__logo-dot">.</span>
        </button>
        <div className="navbar__links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button className="navbar__cta" onClick={() => scrollTo('contact')}>
          联系我
        </button>
      </div>
    </nav>
  )
}
