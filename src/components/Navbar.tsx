import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Produkter', href: '#produkter' },
  { label: 'AI', href: '#ai' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onHome) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.inner} container`}>
          <a href="#" className={styles.logo} onClick={scrollToTop}>
            <span className={styles.logoMark}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="14,2 26,8.5 26,19.5 14,26 2,19.5 2,8.5" stroke="#4a9eff" strokeWidth="1.8" fill="rgba(74,158,255,0.08)"/>
                <circle cx="14" cy="14" r="4.5" fill="#f5a623"/>
                <circle cx="14" cy="14" r="2" fill="#0d0f14"/>
              </svg>
            </span>
            <span className={styles.logoText}>
              AnleggTech <span className={styles.logoAs}>AS</span>
            </span>
          </a>

          <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className={styles.ctaBtn}
                onClick={(e) => scrollTo(e, '#kontakt')}
              >
                Kom i gang
              </a>
            </li>
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
