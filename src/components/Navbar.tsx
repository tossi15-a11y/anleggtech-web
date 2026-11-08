import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { EN_PATH } from '../lib/mini5planner'
import styles from './Navbar.module.css'

const NAV = {
  nb: {
    base: '/',
    links: [
      { label: 'Tjenester', href: '#tjenester' },
      { label: 'Produkter', href: '#produkter' },
      { label: 'AI', href: '#ai' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
    cta: { label: 'Kom i gang', href: '#kontakt' },
    openMenu: 'Åpne meny',
    closeMenu: 'Lukk meny',
  },
  en: {
    base: EN_PATH,
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pro', href: '#pro' },
      { label: 'Guides', href: '#guides' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Download', href: '#download' },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
}

export default function Navbar({ lang = 'nb' }: { lang?: 'nb' | 'en' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const nav = NAV[lang]
  const onHome = location.pathname === nav.base
  // Engelske lenker får full sti, så de virker uten JavaScript og fra artiklene
  const hrefFor = (hash: string) => (lang === 'en' ? nav.base + hash : hash)

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

  // Lås bakgrunns-scroll mens mobilmenyen er åpen
  useEffect(() => {
    const value = menuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = value
    document.body.style.overflow = value
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onHome) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(nav.base + href)
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate(nav.base)
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.inner} container`}>
          <a href={lang === 'en' ? nav.base : '#'} className={styles.logo} onClick={scrollToTop}>
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
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={hrefFor(link.href)}
                  className={styles.link}
                  onClick={(e) => scrollTo(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={hrefFor(nav.cta.href)}
                className={styles.ctaBtn}
                onClick={(e) => scrollTo(e, nav.cta.href)}
              >
                {nav.cta.label}
              </a>
            </li>
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
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
