import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="2" y="5" width="24" height="18" rx="3" stroke="#4a9eff" strokeWidth="1.8"/>
        <path d="M2 10h24" stroke="#4a9eff" strokeWidth="1.8"/>
        <circle cx="6.5" cy="7.5" r="1" fill="#4a9eff"/>
        <circle cx="10" cy="7.5" r="1" fill="#4a9eff"/>
        <path d="M8 15h12M8 19h8" stroke="#4a9eff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Skreddersydde nettsider',
    subtitle: 'for anleggsbransjen',
    description:
      'Profesjonelle nettsider bygget for å konvertere besøkende til kunder — tilpasset din bedrift, din bransje og dine kunder. Vi vet hva som fungerer i anleggsbransjen.',
    href: '/nettsider',
    examples: [
      { name: 'Åsane Hageservice', url: 'https://asanehageservice.no' },
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="#4a9eff" strokeWidth="1.8"/>
        <path d="M7 23c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#4a9eff" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20 4l1.5 1.5L23 4" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.5 2v5" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="21.5" cy="8" r="1.5" fill="#f5a623"/>
      </svg>
    ),
    title: 'AI-assistenter',
    subtitle: 'tilpasset din bedrift',
    description:
      'Gi bedriften din en AI-assistent som kjenner din virksomhet, håndterer kundehenvendelser og jobber for deg — helt uten at du trenger å løfte en finger.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="3" y="14" width="8" height="11" rx="2" stroke="#4a9eff" strokeWidth="1.8"/>
        <rect x="13" y="8" width="8" height="17" rx="2" stroke="#4a9eff" strokeWidth="1.8"/>
        <rect x="7" y="3" width="4" height="4" rx="1" fill="#f5a623"/>
        <path d="M9 7v7" stroke="#4a9eff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Digitale verktøy',
    subtitle: 'for entreprenører og lastebileiere',
    description:
      'Praktiske digitale løsninger som gjør hverdagen enklere for folk i felten. Fra enkle apper til komplette systemer — bygget med bransjen i tankene.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="7" cy="14" r="3.5" stroke="#4a9eff" strokeWidth="1.8"/>
        <circle cx="21" cy="7" r="3.5" stroke="#4a9eff" strokeWidth="1.8"/>
        <circle cx="21" cy="21" r="3.5" stroke="#4a9eff" strokeWidth="1.8"/>
        <path d="M10.3 12.7L17.8 8.8M10.3 15.3L17.8 19.2" stroke="#4a9eff" strokeWidth="1.5"/>
        <circle cx="7" cy="14" r="1.5" fill="#f5a623"/>
      </svg>
    ),
    title: 'Integrasjoner og systemutvikling',
    subtitle: 'skreddersydde løsninger',
    description:
      'Vi kobler systemene dine sammen og bygger skreddersydde løsninger som passer din arbeidsflyt — slik at data flyter der den skal, uten manuelt arbeid.',
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="tjenester" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div
          ref={ref}
          className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9l-3 1.5.5-3.5L1 4.5 4.5 4z" fill="currentColor"/>
            </svg>
            Tjenester
          </span>
          <h2 className="section-heading">
            Alt du trenger for å lykkes digitalt
          </h2>
          <p className="section-subtext">
            Fra første nettside til avansert AI-integrasjon — vi leverer løsninger
            som faktisk gjør en forskjell for bedrifter i anleggsbransjen.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ svc, delay }: { svc: typeof services[number]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const examples = 'examples' in svc ? svc.examples : undefined
  const href = 'href' in svc ? svc.href : undefined

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      <div className={styles.cardIcon}>{svc.icon}</div>
      <div>
        <h3 className={styles.cardTitle}>{svc.title}</h3>
        <span className={styles.cardSubtitle}>{svc.subtitle}</span>
      </div>
      <p className={styles.cardDesc}>{svc.description}</p>
      {examples && examples.length > 0 && (
        <div className={styles.examples}>
          <span className={styles.examplesLabel}>Levert prosjekt</span>
          <div className={styles.examplesList}>
            {examples.map((ex) => (
              <a
                key={ex.url}
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.exampleLink}
              >
                {ex.name}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4 3h5v5M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
      {href && (
        <Link to={href} className={styles.cardLink}>
          Les mer om nettsider
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
      <div className={styles.cardArrow}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M3.75 9h10.5M10.5 5.25L14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
