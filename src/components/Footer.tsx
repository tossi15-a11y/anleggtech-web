import { Link, useLocation, useNavigate } from 'react-router-dom'
import { EN_PATH } from '../lib/mini5planner'
import styles from './Footer.module.css'

const navLinks = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Produkter', href: '#produkter' },
  { label: 'AI-assistent', href: '#ai' },
  { label: 'Kontakt', href: '#kontakt' },
]

const products = [
  { label: 'lediglass.no', href: 'https://lediglass.no', external: true },
  { label: 'massemarkedet.no', href: 'https://massemarkedet.no', external: true },
  { label: 'aktsomhetsportalen.no', href: 'https://aktsomhetsportalen.no', external: true },
  { label: 'SiteView360', href: '/programvare', external: false },
  { label: 'Notert', href: '/notert', external: false },
  { label: 'Notert Takst', href: '/notert-takst', external: false },
  { label: 'Mini5Planner', href: '/mini5planner', external: false },
]

const TEXT = {
  nb: {
    tagline: 'Teknologi som jobber like hardt som deg',
    orgNr: 'Org.nr: 936 032 265',
    navigation: 'Navigasjon',
    products: 'Produkter',
    legal: 'Juridisk',
    contact: 'Kontakt',
    rights: 'Alle rettigheter forbeholdt',
    madeWith: 'Bygget med ❤ for anleggsbransjen',
  },
  en: {
    tagline: 'Technology that works as hard as you do',
    orgNr: 'Org. no. 936 032 265 (Norway)',
    navigation: 'Mini5Planner',
    products: 'Products',
    legal: 'Legal',
    contact: 'Contact',
    rights: 'All rights reserved',
    madeWith: 'Built with ❤ in Norway',
  },
}

const enLinks = [
  { label: 'Download', href: `${EN_PATH}#download` },
  { label: 'Pro', href: `${EN_PATH}#pro` },
  { label: 'Guides', href: `${EN_PATH}#guides` },
  { label: 'FAQ', href: `${EN_PATH}#faq` },
]

export default function Footer({ lang = 'nb' }: { lang?: 'nb' | 'en' }) {
  const text = TEXT[lang]
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  // Anker-lenker fungerer kun på forsiden — naviger dit først fra undersider
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

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
              {text.tagline}
            </p>
            <p className={styles.orgNr}>{text.orgNr}</p>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>{text.navigation}</h4>
            <ul className={styles.linkList}>
              {lang === 'en'
                ? enLinks.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))
                : navLinks.map((link) => (
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
            <h4 className={styles.groupTitle}>{text.products}</h4>
            <ul className={styles.linkList}>
              {products.map((p) => (
                <li key={p.href}>
                  {p.external ? (
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
                  ) : (
                    <Link to={lang === 'en' && p.href === '/mini5planner' ? EN_PATH : p.href} className={styles.link}>
                      {p.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>{text.legal}</h4>
            <ul className={styles.linkList}>
              {lang === 'en' ? (
                <li>
                  <Link to="/personvern" className={styles.link} hrefLang="nb">
                    Privacy and cookies (in Norwegian)
                  </Link>
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>

          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>{text.contact}</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="tel:+4741155515" className={styles.link}>
                  {lang === 'en' ? '+47 41 15 55 15' : '41 15 55 15'}
                </a>
                <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                  torstein@anleggtech.no
                </a>
              </li>
              <li>
                <a
                  href={lang === 'en' ? 'mailto:torstein@anleggtech.no?subject=Mini5Planner' : '#kontakt'}
                  className={styles.ctaLink}
                  onClick={lang === 'en' ? undefined : (e) => scrollTo(e, '#kontakt')}
                >
                  {lang === 'en' ? 'Send us an email' : 'Send oss en melding'}
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
            &copy; {year} AnleggTech AS — {text.rights}
          </p>
          <p className={styles.madeWith}>
            {text.madeWith}
          </p>
        </div>
      </div>
    </footer>
  )
}
