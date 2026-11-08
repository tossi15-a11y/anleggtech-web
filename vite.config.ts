import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// `vite preview` kjenner ikke vercel.json. Uten dette får /en/mini5planner SPA-skallet
// lokalt, mens Vercel gir den forhåndsrendrede fila.
function vercelRewritesInPreview(): Plugin {
  const { rewrites } = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8')) as {
    rewrites: { source: string; destination: string }[]
  }
  const exact = new Map(rewrites.filter((r) => !r.source.includes('(')).map((r) => [r.source, r.destination]))
  return {
    name: 'vercel-rewrites-in-preview',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [path, query] = (req.url ?? '').split('?')
        const destination = exact.get(path)
        if (destination) req.url = destination + (query ? `?${query}` : '')
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), vercelRewritesInPreview()],
  build: { target: ['es2020', 'chrome87', 'edge88', 'firefox78', 'safari14'] },
})
