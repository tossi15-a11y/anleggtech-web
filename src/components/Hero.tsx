import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const VIDEOS = ['/video/hero-city.mp4', '/video/hero-matrix.mp4']

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  // Video nr. 2 monteres først etter at siden har roet seg — sparer ~1 MB på initial load
  const [secondaryReady, setSecondaryReady] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return
    const bootId = setTimeout(() => setSecondaryReady(true), 4000)
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % VIDEOS.length)
    }, 10000)
    return () => {
      clearTimeout(bootId)
      clearInterval(id)
    }
  }, [])

  return (
    <section className={styles.hero} id="hero">
      {/* Sci-fi video-bakgrunn — crossfader mellom to klipp */}
      <div className={styles.videoStage} aria-hidden="true">
        {VIDEOS.map((src, i) => {
          if (i > 0 && !secondaryReady) return null
          return (
            <video
              key={src}
              className={`${styles.videoLayer} ${i === activeIndex ? styles.videoActive : ''}`}
              autoPlay
              muted
              loop
              playsInline
              preload={i === 0 ? 'auto' : 'metadata'}
            >
              <source src={src} type="video/mp4" />
            </video>
          )
        })}
        <div className={styles.videoOverlay} />
        <div className={styles.scanlines} />
        <div className={styles.scanBar} />
      </div>

      {/* HUD-koordinater i bunn-hjørner (topp-rad fjernet pga navbar-kollisjon) */}
      <div className={`${styles.hudCorner} ${styles.hudBL}`} aria-hidden="true">
        <div><span className={styles.hudKey}>AI</span> <span className={styles.hudVal}>5 SYSTEMER</span></div>
        <div className={styles.hudDim}>Helix · Notert · Mini5 · SiteView · Aktsom</div>
      </div>
      <div className={`${styles.hudCorner} ${styles.hudBR}`} aria-hidden="true">
        <div><span className={styles.hudKey}>UPTIME</span> <span className={styles.hudVal}>99.97%</span></div>
        <div className={styles.hudDim}>prosessering &lt; 8 ms · 60.18° N · 5.47° E</div>
      </div>

      {/* Holografisk side-panel (skjules på mobil for plassens skyld) */}
      <div className={styles.holoPanel} aria-hidden="true">
        <div className={styles.holoHeader}>
          <span>// AI-SYSTEMER</span>
          <span className={styles.holoLive}>● LIVE</span>
        </div>
        <div className={styles.holoRow}><span className={styles.holoKey}>notert</span><span className={styles.holoVal}>live</span></div>
        <div className={styles.holoRow}><span className={styles.holoKey}>mini5p</span><span className={styles.holoVal}>v1.2.1</span></div>
        <div className={styles.holoRow}><span className={styles.holoKey}>helix</span><span className={styles.holoVal}>14 cron</span></div>
        <div className={styles.holoRow}><span className={styles.holoKey}>siteview</span><span className={styles.holoVal}>2.0 beta</span></div>
        <div className={styles.holoRow}><span className={styles.holoKey}>aktsom</span><span className={styles.holoVal}>v1.0</span></div>
        <div className={styles.holoBar} />
      </div>

      {/* Original innhold beholdt */}
      <div className={`${styles.content} container`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI-drevet teknologi for anleggsbransjen
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Teknologi som jobber</span>
          <span className={`${styles.headlineLine} ${styles.headlineAccent}`}>like hardt som deg</span>
        </h1>

        <p className={styles.subtext}>
          AnleggTech AS utvikler digitale løsninger og AI-verktøy spesielt tilpasset
          anleggsbransjen. Vi hjelper entreprenører og bedrifter å jobbe smartere —
          slik at du kan fokusere på det du er best på.
        </p>

        <div className={styles.actions}>
          <button
            className="btn-primary"
            onClick={() => scrollTo('#kontakt')}
          >
            Kom i gang
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#tjenester')}
          >
            Se tjenester
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>24/7</span>
            <span className={styles.statLabel}>AI tilgjengelig</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Skreddersydd din bedrift</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.stat}>
            <span className={styles.statNum}>6</span>
            <span className={styles.statLabel}>Egne produkter for bransjen</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
