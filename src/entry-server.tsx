// Forhåndsrendering: bygges med `vite build --ssr` og brukes av scripts/forhandsrender.mjs,
// som skriver dist/<rute>/index.html for rutene i scripts/forhandsrender-ruter.json.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'
import { BASE_URL, OG_LOCALE, SeoCollector, type SeoProps } from './components/Seo'

export function render(url: string): { html: string; head: SeoProps | undefined } {
  const collector: { head?: SeoProps } = {}
  const html = renderToString(
    <SeoCollector.Provider value={collector}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </SeoCollector.Provider>,
  )
  return { html, head: collector.head }
}

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeText(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// Feiler hvis index.html har endret seg, i stedet for å skrive en side med feil metadata
function replaceOnce(html: string, pattern: RegExp, replacement: string, what: string) {
  const count = html.match(new RegExp(pattern.source, 'g'))?.length ?? 0
  if (count !== 1) throw new Error(`Forhåndsrendering: ${what} finnes ${count} ganger i index.html, ventet 1`)
  return html.replace(pattern, () => replacement)
}

function metaPattern(attr: 'name' | 'property', key: string) {
  return new RegExp(`<meta ${attr}="${key}" content="[^"]*" />`)
}

export function applyHead(template: string, head: SeoProps, appHtml: string) {
  const lang = head.lang ?? 'nb'
  const url = `${BASE_URL}${head.path}`
  const meta: [attr: 'name' | 'property', key: string, content: string][] = [
    ['name', 'description', head.description],
    ['property', 'og:title', head.title],
    ['property', 'og:description', head.description],
    ['property', 'og:type', head.type ?? 'website'],
    ['property', 'og:url', url],
    ['property', 'og:locale', OG_LOCALE[lang]],
    ['name', 'twitter:title', head.title],
    ['name', 'twitter:description', head.description],
  ]

  let html = replaceOnce(template, /<html lang="[^"]*">/, `<html lang="${lang}">`, '<html lang>')
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${escapeText(head.title)}</title>`, '<title>')
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeAttr(url)}" />`, 'canonical')
  for (const [attr, key, content] of meta) {
    html = replaceOnce(html, metaPattern(attr, key), `<meta ${attr}="${key}" content="${escapeAttr(content)}" />`, key)
  }
  if (lang !== 'nb') {
    // Nøkkelordene i index.html er norske
    html = replaceOnce(html, /\s*<meta name="keywords" content="[^"]*" \/>/, '', 'keywords')
  }

  const extra: string[] = []
  for (const alt of head.alternates ?? []) {
    extra.push(`<link rel="alternate" hreflang="${escapeAttr(alt.hreflang)}" href="${escapeAttr(BASE_URL + alt.path)}" />`)
  }
  if (head.jsonLd) {
    const json = JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')
    extra.push(`<script type="application/ld+json" data-seo>${json}</script>`)
  }
  if (extra.length) {
    html = replaceOnce(html, /<\/head>/, `  ${extra.join('\n    ')}\n  </head>`, '</head>')
  }

  return replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`, '<div id="root">')
}
