import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Produkter', href: '#produkter' },
  { label: 'AI-assistent', href: '#ai' },
  { label: 'Kontakt', href: '#kontakt' },
]

const products = [
  { label: 'lediglass.no', href: 'https://lediglass.no' },
  { label: 'massemarkedet.no', href: 'https://massemarkedet.no' },
]

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>

          <div className={styles.brand}>
            <a
              href="#"
              className={styles.logo}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              <span className={styles.logoMark}>
                <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="14,2 26,8.5 26,19.5 14,26 2,19.5 2,8.5" stroke="#4a9eff" strokeWidth="1.8" fill="rgba(74,158,255,0.08)"/>
                  <circle cx="14" cy="14" r="4.5" fill="#f5a623"/>
                  <circle cx="14" cy="14" r="2" fill="#0d0f14"/>
                </svg>
              </span>
              <span className={styles.logoText}>
                AnleggTech <span className={styles.logoAs}>AS</span>
              </span>
            </a>
            <p className={styles.tagline}>
              Teknologi som jobber like hardt som deg
            </p>
            <p className={styles.orgNr}>Org.nr: 936 032 265</p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Navigasjon</h4>
            <ul className={styles.linkList}>
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
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Produkter</h4>
            <ul className={styles.linkList}>
              {products.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {p.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Juridisk</h4>
            <ul className={styles.linkList}>
              <li>
                <Link to="/personvern" className={styles.link}>
                  Personvernerklæring
                </Link>
              </li>
              <li>
                <Link to="/personvern" className={styles.link}>
                  Informasjonskapsler
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Kontakt</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                  torstein@anleggtech.no
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className={styles.ctaLink}
                  onClick={(e) => scrollTo(e, '#kontakt')}
                >
                  Send oss en melding
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} AnleggTech AS — Alle rettigheter forbeholdt
          </p>
          <p className={styles.madeWith}>
            Bygget med ❤ for anleggsbransjen
          </p>
        </div>
      </div>
    </footer>
  )
}
