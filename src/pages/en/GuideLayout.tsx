import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import Navbar from '../../components/Navbar'
import Seo, { BASE_URL } from '../../components/Seo'
import Footer from '../../components/Footer'
import { Arrow } from '../../components/Icons'
import { DOWNLOAD_MAC_URL, DOWNLOAD_WINDOWS_URL, EN_PATH } from '../../lib/mini5planner'
import { SV_EN_PATH, SV_RELEASES_URL, SV_TRADEMARK } from '../../lib/siteview360'
import styles from './Guide.module.css'

export type GuideProduct = 'mini5planner' | 'siteview360'

type GuideLayoutProps = {
  path: string
  title: string
  description: string
  lead: ReactNode
  datePublished: string
  related: { path: string; title: string }[]
  children: ReactNode
  product?: GuideProduct
}

type ProductInfo = {
  name: string
  path: string
  ctaTitle: string
  ctaText: string
  downloads: { label: string; href: string; onClick: () => void }[]
  moreLabel: string
  trademark: string
}

const PRODUCTS: Record<GuideProduct, ProductInfo> = {
  mini5planner: {
    name: 'Mini5Planner',
    path: EN_PATH,
    ctaTitle: 'Plan your next mapping flight with Mini5Planner',
    ctaText:
      'Free for Mac and Windows. Draw the area, pick a template and export a KMZ for DJI Fly. The speed is set so the camera keeps up.',
    downloads: [
      { label: 'Download for Mac', href: DOWNLOAD_MAC_URL, onClick: () => track('Nedlasting', { plattform: 'mac' }) },
      { label: 'Download for Windows', href: DOWNLOAD_WINDOWS_URL, onClick: () => track('Nedlasting', { plattform: 'windows' }) },
    ],
    moreLabel: 'More about Mini5Planner and Pro',
    trademark:
      'Mini5Planner is an independent product by AnleggTech AS. It is not affiliated with, endorsed by or sponsored by DJI. DJI, DJI Fly, DJI Mini and Mavic are trademarks of SZ DJI Technology Co., Ltd.',
  },
  siteview360: {
    name: 'SiteView360',
    path: SV_EN_PATH,
    ctaTitle: 'Turn your next site walk into a tour with SiteView360',
    ctaText:
      'For Mac and Windows. Import the 360 video from your camera and click through the site image by image. Everything stays on your computer. The free edition makes one tour with up to 60 images.',
    downloads: [
      { label: 'Download for Mac or Windows', href: SV_RELEASES_URL, onClick: () => track('SiteView360 nedlasting', { kilde: 'guide' }) },
    ],
    moreLabel: 'More about SiteView360, the demo and Pro',
    trademark: SV_TRADEMARK,
  },
}

const PUBLISHER = {
  '@type': 'Organization',
  name: 'AnleggTech AS',
  url: BASE_URL,
  logo: { '@type': 'ImageObject', url: `${BASE_URL}/anleggtech-logo.svg` },
}

const jsonLdCache = new Map<string, Record<string, unknown>>()

function guideJsonLd(path: string, title: string, description: string, datePublished: string, product: ProductInfo) {
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
        about: { '@type': 'SoftwareApplication', name: product.name, url: `${BASE_URL}${product.path}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: product.name, item: `${BASE_URL}${product.path}` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}${product.path}#guides` },
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

export default function GuideLayout({ path, title, description, lead, datePublished, related, children, product = 'mini5planner' }: GuideLayoutProps) {
  const info = PRODUCTS[product]
  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        lang="en"
        type="article"
        jsonLd={guideJsonLd(path, title, description, datePublished, info)}
      />
      <Navbar lang="en" basePath={info.path} />
      <main className={styles.main}>
        <article className={`container ${styles.article}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to={info.path}>{info.name}</Link>
            <span aria-hidden="true">›</span>
            <Link to={`${info.path}#guides`}>Guides</Link>
          </nav>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.meta}>
              AnleggTech AS · <time dateTime={datePublished}>{formatDate(datePublished)}</time>
            </p>
            <div className={styles.lead}>{lead}</div>
          </header>

          <div className={styles.prose}>{children}</div>

          <aside className={styles.ctaBox} aria-label={`Download ${info.name}`}>
            <h2 className={styles.ctaTitle}>{info.ctaTitle}</h2>
            <p>{info.ctaText}</p>
            <div className={styles.ctaButtons}>
              {info.downloads.map((d) => (
                <a key={d.label} href={d.href} className={styles.ctaPrimary} onClick={d.onClick}>
                  {d.label}
                  <Arrow />
                </a>
              ))}
            </div>
            <Link to={info.path} className={styles.ctaLink}>
              {info.moreLabel} <Arrow />
            </Link>
          </aside>

          <nav className={styles.related} aria-label="Related guides">
            <p className={styles.relatedLabel}>{related.length > 1 ? 'More guides' : 'Next guide'}</p>
            <ul className={styles.relatedList}>
              {related.map((r) => (
                <li key={r.path}>
                  <Link to={r.path} className={styles.relatedLink}>
                    {r.title} <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
        <p className={styles.trademark}>{info.trademark}</p>
      </main>
      <Footer lang="en" product={product} />
    </>
  )
}
