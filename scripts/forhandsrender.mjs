// Skriver ferdig HTML for rutene i forhandsrender-ruter.json til dist/<rute>/index.html,
// så søkemotorer og KI-crawlere som ikke kjører JavaScript ser innholdet.
// dist/index.html (SPA-skallet for alle andre ruter) endres ikke.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rot = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(rot, 'dist')
const ruter = JSON.parse(await readFile(join(rot, 'scripts/forhandsrender-ruter.json'), 'utf8'))
const { render, applyHead } = await import(join(rot, 'dist-ssr/entry-server.js'))
const mal = await readFile(join(dist, 'index.html'), 'utf8')

for (const rute of ruter) {
  const { html, head } = render(rute)
  if (!head) throw new Error(`Forhåndsrendering: ${rute} rendret ingen <Seo>, finnes ruten?`)
  if (head.path !== rute) throw new Error(`Forhåndsrendering: ${rute} har canonical ${head.path}`)
  if (!/<h1[\s>]/.test(html)) throw new Error(`Forhåndsrendering: ${rute} mangler <h1>`)

  const side = applyHead(mal, head, html)
  const fil = join(dist, rute, 'index.html')
  await mkdir(dirname(fil), { recursive: true })
  await writeFile(fil, side)
  console.log(`forhåndsrendret ${rute} → ${fil.slice(rot.length + 1)} (${(side.length / 1024).toFixed(1)} kB)`)
}
