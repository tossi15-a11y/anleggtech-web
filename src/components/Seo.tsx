import { useEffect } from 'react'

const BASE_URL = 'https://www.anleggtech.no'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`

type SeoProps = {
  title: string
  description: string
  path: string
  jsonLd?: Record<string, unknown>
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ title, description, path, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${BASE_URL}${path}`

    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
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

    let ldScript: HTMLScriptElement | null = null
    if (jsonLd) {
      ldScript = document.createElement('script')
      ldScript.type = 'application/ld+json'
      ldScript.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(ldScript)
    }
    return () => {
      if (ldScript) ldScript.remove()
    }
  }, [title, description, path, jsonLd])

  return null
}
