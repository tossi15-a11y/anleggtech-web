import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './AISection.module.css'

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#4a9eff" strokeWidth="1.6"/>
        <path d="M10 5v5l3 3" stroke="#4a9eff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tilgjengelig 24/7',
    desc: 'Din AI-assistent svarer kunder klokken 03:00 om natten, i helger og på helligdager — uten overtidsbetaling.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.5l-4.9 2.7.9-5.5L2 7.8l5.5-.8z" stroke="#4a9eff" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Kjenner din bedrift',
    desc: 'Vi trener AI-en på din bedrift, dine produkter og dine rutiner — slik at svarene alltid er presise og relevante.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14v4h14v-4" stroke="#4a9eff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 2v10M7 9l3 3 3-3" stroke="#4a9eff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Håndterer henvendelser',
    desc: 'Fra prisforespørsler og tilbudsforespørsler til FAQ og bookinger — AI-en håndterer det meste automatisk.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#4a9eff" strokeWidth="1.6"/>
        <path d="M7 9h6M7 12h4" stroke="#4a9eff" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Snakker norsk',
    desc: 'AI-assistenten kommuniserer naturlig på norsk og forstår bransje-spesifikt fagspråk fra anlegg og bygg.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M16 8A6 6 0 1 1 4 8" stroke="#4a9eff" strokeWidth="1.6"/>
        <path d="M10 14v4M7 18h6" stroke="#4a9eff" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="10" cy="8" r="2" fill="#4a9eff"/>
      </svg>
    ),
    title: 'Enkel å komme i gang',
    desc: 'Ingen teknisk kompetanse nødvendig. Vi setter opp alt og gir deg en ferdig løsning på noen dager.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10l4 4 10-8" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Skalerer med deg',
    desc: 'Enten du er 3 eller 300 ansatte — løsningen vokser med bedriften din uten at kostnadene eksploderer.',
  },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function AISection() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05)

  return (
    <section id="ai" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>

        <div
          ref={ref}
          className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="6" cy="6" r="2" fill="currentColor"/>
            </svg>
            AI-assistent
          </span>
          <h2 className="section-heading">
            Din egen AI-assistent —<br />
            <span className={styles.headingAccent}>alltid på jobb</span>
          </h2>
          <p className="section-subtext">
            Tenk deg en medarbeider som aldri sover, aldri er syk, alltid kjenner
            bedriften din og kan svare kunder på sekunder. Det er din AnleggTech AI-assistent.
          </p>

          <div className={styles.cta}>
            <button
              className="btn-primary"
              onClick={() => scrollTo('#kontakt')}
            >
              Få din egen AI-assistent
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`${styles.benefitsGrid} ${gridVisible ? styles.gridVisible : ''}`}
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={styles.benefit}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDesc}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.demoBox}>
          <div className={styles.demoHeader}>
            <div className={styles.demoDots}>
              <span /><span /><span />
            </div>
            <span className={styles.demoTitle}>AI-assistent — AnleggTech Demo</span>
          </div>
          <div className={styles.demoBody}>
            <div className={styles.demoMsg + ' ' + styles.demoMsgBot}>
              <span className={styles.demoAvatar}>AI</span>
              <div className={styles.demoBubble}>
                Hei! Jeg er din AI-assistent fra AnleggTech. Hvordan kan jeg hjelpe deg i dag?
              </div>
            </div>
            <div className={styles.demoMsg + ' ' + styles.demoMsgUser}>
              <div className={styles.demoBubble + ' ' + styles.demoBubbleUser}>
                Hva koster det å få en nettside?
              </div>
            </div>
            <div className={styles.demoMsg + ' ' + styles.demoMsgBot}>
              <span className={styles.demoAvatar}>AI</span>
              <div className={styles.demoBubble}>
                Prisen avhenger av hva du trenger, men de fleste av våre nettsider starter fra
                25 000 kr. Vil du at jeg setter deg i kontakt med oss for en uforpliktende prat?
              </div>
            </div>
            <div className={styles.demoTyping}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
