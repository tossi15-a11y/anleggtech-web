import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../api/mini5planner-last-ned.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
})
const { default: handler, nullstillCache } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

const FALLBACK = 'https://github.com/tossi15-a11y/mini5planner-releases/releases/latest'
const base = 'https://github.com/tossi15-a11y/mini5planner-releases/releases/download'

function release(tag, prerelease = false) {
  const versjon = tag.slice(1)
  return {
    tag_name: tag,
    prerelease,
    draft: false,
    assets: [`Mini5Planner-${versjon}-full.nupkg`, `Mini5Planner-${versjon}.Setup.exe`, 'Mini5Planner.dmg', 'RELEASES']
      .map((name) => ({ name, browser_download_url: `${base}/${tag}/${name}` })),
  }
}

const releases = [release('v1.4.0-beta.1', true), release('v1.3.2'), release('v1.3.1')]

function response() {
  return {
    headers: {},
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; return this },
    status(code) { this.statusCode = code; return this },
    end() { this.ended = true; return this },
  }
}

async function kall(t, plattform, fetchImpl) {
  nullstillCache()
  const fetch = t.mock.method(globalThis, 'fetch', fetchImpl)
  const log = t.mock.method(console, 'log', () => {})
  t.mock.method(console, 'error', () => {})
  const res = response()
  await handler({ method: 'GET', query: plattform === undefined ? {} : { plattform } }, res)
  assert.equal(res.statusCode, 302)
  assert.ok(res.ended)
  return { res, fetch, log }
}

const ok = async () => ({ ok: true, status: 200, json: async () => releases })

test('mac går til Mini5Planner.dmg i siste ferdige release', async (t) => {
  const { res, fetch, log } = await kall(t, 'mac', ok)
  assert.equal(res.headers.location, `${base}/v1.3.2/Mini5Planner.dmg`)
  assert.equal(fetch.mock.callCount(), 1)
  assert.match(fetch.mock.calls[0].arguments[0], /api\.github\.com\/repos\/tossi15-a11y\/mini5planner-releases\/releases/)
  assert.equal(log.mock.callCount(), 1)
  assert.equal(log.mock.calls[0].arguments[0], 'mini5planner-last-ned plattform=mac versjon=v1.3.2')
})

test('windows går til Setup.exe i siste ferdige release', async (t) => {
  const { res, log } = await kall(t, 'windows', ok)
  assert.equal(res.headers.location, `${base}/v1.3.2/Mini5Planner-1.3.2.Setup.exe`)
  assert.equal(log.mock.calls[0].arguments[0], 'mini5planner-last-ned plattform=windows versjon=v1.3.2')
})

test('forhåndsutgaven hoppes over', async (t) => {
  const { res } = await kall(t, 'windows', ok)
  assert.ok(!res.headers.location.includes('beta'))
})

test('feil fra GitHub faller tilbake til releases/latest', async (t) => {
  const { res, log } = await kall(t, 'mac', async () => ({ ok: false, status: 403, json: async () => ({}) }))
  assert.equal(res.headers.location, FALLBACK)
  assert.equal(log.mock.calls[0].arguments[0], 'mini5planner-last-ned plattform=mac versjon=ukjent')
})

test('nettverksfeil faller tilbake til releases/latest', async (t) => {
  const { res } = await kall(t, 'windows', async () => { throw new Error('nede') })
  assert.equal(res.headers.location, FALLBACK)
})

test('ingen ferdig release faller tilbake', async (t) => {
  const { res } = await kall(t, 'mac', async () => ({ ok: true, status: 200, json: async () => [release('v1.4.0-beta.1', true)] }))
  assert.equal(res.headers.location, FALLBACK)
})

for (const plattform of [undefined, 'linux', '__proto__', 'MAC']) {
  test(`ukjent plattform (${plattform}) faller tilbake uten GitHub-kall`, async (t) => {
    const { res, fetch, log } = await kall(t, plattform, ok)
    assert.equal(res.headers.location, FALLBACK)
    assert.equal(fetch.mock.callCount(), 0)
    assert.equal(log.mock.calls[0].arguments[0], 'mini5planner-last-ned plattform=ukjent versjon=ukjent')
  })
}

test('GitHub-oppslaget gjenbrukes, men hvert kall logges', async (t) => {
  nullstillCache()
  const fetch = t.mock.method(globalThis, 'fetch', ok)
  const log = t.mock.method(console, 'log', () => {})
  for (const plattform of ['mac', 'windows', 'mac']) await handler({ method: 'GET', query: { plattform } }, response())
  assert.equal(fetch.mock.callCount(), 1)
  assert.equal(log.mock.callCount(), 3)
})

test('svaret caches ikke i CDN-et, så klikkene kan telles', async (t) => {
  const { res } = await kall(t, 'mac', ok)
  assert.equal(res.headers['cache-control'], 'no-store')
})
