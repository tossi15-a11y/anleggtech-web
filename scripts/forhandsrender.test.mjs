import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const les = async (fil) => readFile(new URL(`../${fil}`, import.meta.url), 'utf8')
const ruter = JSON.parse(await les('scripts/forhandsrender-ruter.json'))
const { rewrites } = JSON.parse(await les('vercel.json'))
const sitemap = await les('public/sitemap.xml')

test('hver forhåndsrendret rute skrives om til sin egen index.html før SPA-reserven', () => {
  const reserve = rewrites.findIndex((r) => r.source === '/(.*)')
  assert.equal(reserve, rewrites.length - 1, 'SPA-reserven må stå sist')
  for (const rute of ruter) {
    const i = rewrites.findIndex((r) => r.source === rute)
    assert.ok(i >= 0, `${rute} mangler i vercel.json`)
    assert.equal(rewrites[i].destination, `${rute}/index.html`)
  }
})

test('hver forhåndsrendret rute står i sitemap.xml', () => {
  for (const rute of ruter) {
    assert.ok(sitemap.includes(`<loc>https://www.anleggtech.no${rute}</loc>`), `${rute} mangler i sitemap.xml`)
  }
})

test('sitemap lenker norsk og engelsk Mini5Planner-side til hverandre', () => {
  for (const [hreflang, sti] of [['nb', '/mini5planner'], ['en', '/en/mini5planner'], ['x-default', '/en/mini5planner']]) {
    const lenke = `<xhtml:link rel="alternate" hreflang="${hreflang}" href="https://www.anleggtech.no${sti}" />`
    assert.equal(sitemap.split(lenke).length - 1, 2, `${hreflang} skal stå under begge språkversjonene`)
  }
})
