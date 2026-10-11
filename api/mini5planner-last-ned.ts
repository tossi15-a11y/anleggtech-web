import type { VercelRequest, VercelResponse } from '@vercel/node'

const REPO = 'tossi15-a11y/mini5planner-releases'
const FALLBACK_URL = `https://github.com/${REPO}/releases/latest`
const CACHE_MS = 10 * 60 * 1000

type Plattform = 'mac' | 'windows'
type Release = { tag_name?: string, prerelease?: boolean, draft?: boolean, assets?: { name?: string, browser_download_url?: string }[] }
type Nedlasting = { versjon: string, url: string }

const finnFil: Record<Plattform, (navn: string) => boolean> = {
  mac: (navn) => navn === 'Mini5Planner.dmg',
  windows: (navn) => navn.endsWith('Setup.exe'),
}

// GitHub-oppslaget caches i minnet, ikke svaret i CDN-et: da når hvert klikk funksjonen og havner i loggen.
let cache: { hentet: number, nedlastinger: Partial<Record<Plattform, Nedlasting>> } | undefined

export function nullstillCache() {
  cache = undefined
}

async function hentNedlastinger() {
  if (cache && Date.now() - cache.hentet < CACHE_MS) return cache.nedlastinger

  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=20`, {
      headers: { 'Accept': 'application/vnd.github+json', 'User-Agent': 'anleggtech-web' },
    })
    if (!response.ok) throw new Error(`GitHub svarte ${response.status}`)
    const releases = await response.json() as Release[]
    const release = Array.isArray(releases) ? releases.find((r) => !r.prerelease && !r.draft) : undefined
    if (!release?.tag_name) throw new Error('Fant ingen ferdig release')

    const nedlastinger: Partial<Record<Plattform, Nedlasting>> = {}
    for (const plattform of Object.keys(finnFil) as Plattform[]) {
      const fil = release.assets?.find((a) => typeof a.name === 'string' && finnFil[plattform](a.name))
      if (fil?.browser_download_url) nedlastinger[plattform] = { versjon: release.tag_name, url: fil.browser_download_url }
    }
    cache = { hentet: Date.now(), nedlastinger }
    return nedlastinger
  } catch (error) {
    console.error('mini5planner-last-ned: GitHub-oppslag feilet:', error instanceof Error ? error.message : error)
    return cache?.nedlastinger ?? {}
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const query = req.query?.plattform
  const plattform = query === 'mac' || query === 'windows' ? query : undefined
  const nedlasting = plattform ? (await hentNedlastinger())[plattform] : undefined

  console.log(`mini5planner-last-ned plattform=${plattform ?? 'ukjent'} versjon=${nedlasting?.versjon ?? 'ukjent'}`)

  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Location', nedlasting?.url ?? FALLBACK_URL)
  return res.status(302).end()
}
