import styles from './Hero.module.css'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glowBlue} aria-hidden="true" />
      <div className={styles.glowAmber} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          AI-drevet teknologi for anleggsbransjen
        </div>

        <h1 className={styles.headline}>
          Teknologi som jobber<br />
          <span className={styles.headlineAccent}>like hardt som deg</span>
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
            <span className={styles.statNum}>2+</span>
            <span className={styles.statLabel}>Live produkter i bransjen</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
