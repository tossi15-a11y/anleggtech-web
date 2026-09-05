import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../api/contact.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
})
const { default: handler } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

function response() {
  return {
    status(code) { this.statusCode = code; return this },
    json(body) { this.body = body; return this },
  }
}

const valid = { navn: 'Test', epost: 'test@example.com', melding: 'Hei' }
for (const [name, body] of [
  ['missing', undefined], ['null', null], ['array', []], ['string', 'null'],
  ['numeric message', { ...valid, melding: 123 }],
  ['blank name', { ...valid, navn: '  ' }],
  ['invalid company', { ...valid, bedrift: {} }],
  ['invalid phone', { ...valid, telefon: 123 }],
]) {
  test(`rejects ${name} before contacting email provider`, async (t) => {
    const fetch = t.mock.method(globalThis, 'fetch', () => { throw new Error('Unexpected network request') })
    const res = response()
    await handler({ method: 'POST', body }, res)
    assert.equal(res.statusCode, 400)
    assert.equal(fetch.mock.callCount(), 0)
  })
}

test('valid contact escapes all HTML while preserving line breaks', async (t) => {
  const oldKey = process.env.RESEND_API_KEY
  process.env.RESEND_API_KEY = 'local-test-only'
  t.after(() => { if (oldKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = oldKey })
  const fetch = t.mock.method(globalThis, 'fetch', async () => ({ ok: true }))
  const res = response()
  await handler({ method: 'POST', body: { ...valid, navn: '<em>Test</em>', bedrift: '<b>Firma</b>', telefon: '"123"', melding: '<img src=x>\nA & B' } }, res)
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.body, { success: true })
  assert.equal(fetch.mock.callCount(), 1)
  const payload = JSON.parse(fetch.mock.calls[0].arguments[1].body)
  assert.ok(payload.html.includes('&lt;em&gt;Test&lt;/em&gt;'))
  assert.ok(payload.html.includes('&lt;b&gt;Firma&lt;/b&gt;'))
  assert.ok(payload.html.includes('&quot;123&quot;'))
  assert.ok(payload.html.includes('&lt;img src=x&gt;<br />A &amp; B'))
  assert.ok(!payload.html.includes('<img'))
  assert.equal(payload.reply_to, valid.epost)
})

test('GET never sends an email', async (t) => {
  const fetch = t.mock.method(globalThis, 'fetch', () => { throw new Error('Unexpected network request') })
  const res = response()
  await handler({ method: 'GET', body: valid }, res)
  assert.equal(res.statusCode, 405)
  assert.equal(fetch.mock.callCount(), 0)
})
