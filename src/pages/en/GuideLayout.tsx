import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import Navbar from '../../components/Navbar'
import Seo, { BASE_URL } from '../../components/Seo'
import Footer from '../../components/Footer'
import { Arrow } from '../../components/Icons'
import { DOWNLOAD_MAC_URL, DOWNLOAD_WINDOWS_URL, EN_PATH } from '../../lib/mini5planner'
import styles from './Guide.module.css'

type GuideLayoutProps = {
  path: string
  title: string
  description: string
  lead: ReactNode
  datePublished: string
  related: { path: string; title: string }
  children: ReactNode
}

const PUBLISHER = {
  '@type': 'Organization',
  name: 'AnleggTech AS',
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/anleggtech-logo.svg` },
}

const jsonLdCache = new Map<string, Record<string, unknown>>()

function guideJsonLd(path: string, title: string, description: string, datePublished: string) {
  const cached = jsonLdCache.get(path)
  if (cached) return cached
  const url = `${BASE_URL}${path}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: title,
        description,
        inLanguage: 'en',
        url,
        mainEntityOfPage: url,
        datePublished,
        dateModified: datePublished,
        author: PUBLISHER,
        publisher: PUBLISHER,
        about: { '@type': 'SoftwareApplication', name: 'Mini5Planner', url: `${BASE_URL}${EN_PATH}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Mini5Planner', item: `${BASE_URL}${EN_PATH}` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}${EN_PATH}#guides` },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
    ],
  }
  jsonLdCache.set(path, jsonLd)
  return jsonLd
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return `${d} ${months[m - 1]} ${y}`
}

export default function GuideLayout({ path, title, description, lead, datePublished, related, children }: GuideLayoutProps) {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        lang="en"
        type="article"
        jsonLd={guideJsonLd(path, title, description, datePublished)}
      />
      <Navbar lang="en" />
      <main className={styles.main}>
        <article className={`container ${styles.article}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to={EN_PATH}>Mini5Planner</Link>
            <span aria-hidden="true">›</span>
            <Link to={`${EN_PATH}#guides`}>Guides</Link>
          </nav>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.meta}>
              AnleggTech AS · <time dateTime={datePublished}>{formatDate(datePublished)}</time>
            </p>
            <div className={styles.lead}>{lead}</div>
          </header>

          <div className={styles.prose}>{children}</div>

          <aside className={styles.ctaBox} aria-label="Download Mini5Planner">
            <h2 className={styles.ctaTitle}>Plan your next mapping flight with Mini5Planner</h2>
            <p>
              Free for Mac and Windows. Draw the area, pick a template and export a KMZ for
              DJI Fly. The speed is set so the camera keeps up.
            </p>
            <div className={styles.ctaButtons}>
              <a href={DOWNLOAD_MAC_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'mac' })}>
                Download for Mac
                <Arrow />
              </a>
              <a href={DOWNLOAD_WINDOWS_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'windows' })}>
                Download for Windows
                <Arrow />
              </a>
            </div>
            <Link to={EN_PATH} className={styles.ctaLink}>
              More about Mini5Planner and Pro <Arrow />
            </Link>
          </aside>

          <nav className={styles.related} aria-label="Related guide">
            <p className={styles.relatedLabel}>Next guide</p>
            <Link to={related.path} className={styles.relatedLink}>
              {related.title} <Arrow />
            </Link>
          </nav>
        </article>
      </main>
      <Footer lang="en" />
    </>
  )
}
