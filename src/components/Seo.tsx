import { createContext, useContext, useEffect } from 'react'

export const BASE_URL = 'https://www.anleggtech.no'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`

export type SeoLang = 'nb' | 'en'

export type SeoAlternate = { hreflang: string; path: string }

export type SeoProps = {
  title: string
  description: string
  path: string
  jsonLd?: Record<string, unknown>
  lang?: SeoLang
  alternates?: SeoAlternate[]
  type?: 'website' | 'article'
}

export const OG_LOCALE: Record<SeoLang, string> = { nb: 'nb_NO', en: 'en_US' }

// Forhåndsrenderingen (src/entry-server.tsx) samler Seo-verdiene her i stedet for å vente på useEffect
export const SeoCollector = createContext<{ head?: SeoProps } | null>(null)

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo(props: SeoProps) {
  const { title, description, path, jsonLd, lang = 'nb', alternates, type = 'website' } = props
  const collector = useContext(SeoCollector)
  if (collector) collector.head = props

  useEffect(() => {
    const url = `${BASE_URL}${path}`

    document.title = title
    document.documentElement.lang = lang
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:locale', OG_LOCALE[lang])
    setMeta('property', 'og:image', DEFAULT_OG_IMAGE)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
    for (const alt of alternates ?? []) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = alt.hreflang
      link.href = `${BASE_URL}${alt.path}`
      document.head.appendChild(link)
    }

    // Fjerner også JSON-LD som forhåndsrenderingen la i <head>, så den ikke dobles
    document.head.querySelectorAll('script[data-seo]').forEach((el) => el.remove())
    let ldScript: HTMLScriptElement | null = null
    if (jsonLd) {
      ldScript = document.createElement('script')
      ldScript.type = 'application/ld+json'
      ldScript.dataset.seo = ''
      ldScript.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(ldScript)
    }
    return () => {
      if (ldScript) ldScript.remove()
    }
  }, [title, description, path, jsonLd, lang, alternates, type])

  return null
}
