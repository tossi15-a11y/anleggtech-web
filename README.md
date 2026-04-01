# AnleggTech AS – Nettside

Profesjonell nettside for AnleggTech AS, bygget med React 18, Vite og TypeScript.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** – rask bygge- og dev-server
- **CSS Modules** – scoped styling uten ekstra avhengigheter
- Ingen UI-rammeverk – alt CSS er skreddersydd

## Kom i gang (utvikling)

### Forutsetninger

- Node.js 18+
- npm eller pnpm

### Installer avhengigheter

```bash
npm install
```

### Start dev-server

```bash
npm run dev
```

Åpne [http://localhost:5173](http://localhost:5173) i nettleseren.

### Bygg for produksjon

```bash
npm run build
```

Produksjonsfiler havner i `dist/`-mappen.

### Forhåndsvis produksjonsbuild

```bash
npm run preview
```

---

## Deploy til Vercel

### Alternativ 1: Via Vercel CLI

```bash
# Installer Vercel CLI globalt
npm install -g vercel

# Deploy (første gang – følg instruksjonene)
vercel

# Deploy til produksjon
vercel --prod
```

### Alternativ 2: Via Vercel Dashboard

1. Gå til [vercel.com](https://vercel.com) og logg inn
2. Klikk **"Add New → Project"**
3. Importer dette repo fra GitHub/GitLab/Bitbucket
4. Vercel oppdager automatisk at det er et Vite-prosjekt
5. Behold standardinnstillinger og klikk **"Deploy"**

### Vercel-innstillinger (automatisk)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

`vercel.json` i roten håndterer SPA-routing slik at alle ruter peker til `index.html`.

---

## Prosjektstruktur

```
anleggtech-web/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx + Navbar.module.css
│   │   ├── Hero.tsx + Hero.module.css
│   │   ├── Services.tsx + Services.module.css
│   │   ├── Products.tsx + Products.module.css
│   │   ├── AISection.tsx + AISection.module.css
│   │   ├── Contact.tsx + Contact.module.css
│   │   └── Footer.tsx + Footer.module.css
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── vercel.json
```

## Seksjoner

| ID | Seksjon | Beskrivelse |
|---|---|---|
| `#hero` | Hero | Full-height landing med tagline og CTA |
| `#tjenester` | Tjenester | 4 tjenestekort med fade-in |
| `#produkter` | Produkter | Showcase av lediglass.no og massemarkedet.no |
| `#ai` | AI-assistent | Forklaring av AI-tilbudet med demo-chat |
| `#kontakt` | Kontakt | Skjema med validering og suksessmelding |

## Tilpasning

### Bytt farger

Alle farger er definert som CSS-variabler i `src/index.css`:

```css
:root {
  --blue: #4a9eff;       /* Primæraksent */
  --amber: #f5a623;      /* CTA-farge */
  --bg-primary: #0d0f14; /* Bakgrunn */
}
```

### Bytt kontaktinfo

Oppdater e-postadresser i `src/components/Contact.tsx` og `src/components/Footer.tsx`.

### Aktiver backend-integrasjon for kontaktskjema

I `Contact.tsx`, erstatt `setTimeout`-logikken med et faktisk API-kall:

```typescript
// Erstatt dette:
setTimeout(() => {
  setSubmitting(false)
  setSubmitted(true)
}, 800)

// Med for eksempel:
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (res.ok) setSubmitted(true)
setSubmitting(false)
```

---

*Bygget av AnleggTech AS – teknologi for anleggsbransjen*
