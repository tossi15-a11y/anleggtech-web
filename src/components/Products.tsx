import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Products.module.css'

type Product = {
  name: string
  label: string
  tagline: string
  description: string
  url: string
  internal?: boolean
  features: string[]
  color: string
  iconSrc: string
}

const products: Product[] = [
  {
    name: 'lediglass.no',
    label: 'B2B-plattform',
    tagline: 'Norges B2B-marked for transportkapasitet',
    description:
      'Kobler transportører med ledig lastekapasitet sammen med entreprenører og firma som har transportbehov. Reduserer tomkjøring, øker lønnsomheten og kutter CO₂-utslippene for hele bransjen.',
    url: 'https://lediglass.no',
    features: ['Last-formidling', 'Reduserer tomkjøring', 'Hele Norge'],
    color: '#22C55E',
    iconSrc: '/logos/lediglass.svg',
  },
  {
    name: 'massemarkedet.no',
    label: 'B2B Plattform',
    tagline: 'Norges markedsplass for masse og stein',
    description:
      'Kobler leverandører og kjøpere av masse, stein og grus direkte. Effektiviserer logistikk og innkjøp for hele verdikjeden i grunnanlegg.',
    url: 'https://massemarkedet.no',
    features: ['Masse og stein', 'Leverandørnettverk', 'Hele Norge'],
    color: '#22c55e',
    iconSrc: '/logos/massemarkedet.svg',
  },
  {
    name: 'aktsomhetsportalen.no',
    label: 'SaaS Compliance',
    tagline: 'Komplett verktøy for åpenhetsloven',
    description:
      'Hjelper norske bedrifter med å oppfylle kravene i åpenhetsloven. Automatisert aktsomhetsvurdering, risikoanalyse, leverandørkartlegging og ferdig rapport — klart for Forbrukertilsynet.',
    url: 'https://aktsomhetsportalen.no',
    features: ['Aktsomhetsvurdering', 'Risikoanalyse', 'Automatisert rapport'],
    color: '#5eead4',
    iconSrc: '/logos/aktsomhetsportalen.svg',
  },
  {
    name: 'SiteView360',
    label: 'Dokumentasjon',
    tagline: '360°-dokumentasjon av anleggsprosjekter',
    description:
      'Konverterer 360°-video til en navigerbar Street View-opplevelse av byggeplassen. Dokumenter «før»-tilstanden, vis fremdrift til kunden og lever profesjonell sluttdokumentasjon — uten at kunden trenger å reise ut.',
    url: '/programvare',
    internal: true,
    features: ['Før-dokumentasjon', '360° video', 'Fjern-rapportering'],
    color: '#22d3ee',
    iconSrc: '/logos/siteview360.svg',
  },
  {
    name: 'Notert',
    label: 'AI-referent',
    tagline: 'Møtereferater med automatisk NS- og HMS-flagging',
    description:
      'Live transkripsjon av byggherre-, bygge- og oppstartsmøter. Genererer profesjonelle referater og flagger automatisk kontrakts­messige forhold (NS 8405–8417), HMS-avvik og forskriftspunkter. Lyd berører aldri serveren.',
    url: 'https://notert-web.vercel.app',
    features: ['Live transkripsjon', 'NS-kontraktflagging', 'HMS- og forskriftflagg'],
    color: '#f59e0b',
    iconSrc: '/logos/notert.svg',
  },
]

const comingSoon = {
  tagline: 'Flere prosjekter under bygging',
  description:
    'Vi utvikler flere digitale verktøy for anleggsbransjen — fra masseberegning og terrenganalyse til prosjektstyring. Følg med.',
}

export default function Products() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="produkter" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div
          ref={ref}
          className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor"/>
              <rect x="7" y="1" width="4" height="4" rx="1" fill="currentColor"/>
              <rect x="1" y="7" width="4" height="4" rx="1" fill="currentColor"/>
              <rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor"/>
            </svg>
            Produkter
          </span>
          <h2 className="section-heading">Løsninger vi har bygget for bransjen</h2>
          <p className="section-subtext">
            Vi utvikler ikke bare for andre — vi har selv bygget digitale produkter
            som er i daglig bruk i anleggsbransjen.
          </p>
        </div>

        <div className={styles.cards}>
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} delay={i * 0.15} />
          ))}
        </div>

        <div
          className={`${styles.comingSoon} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.comingSoonIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className={styles.comingSoonTitle}>{comingSoon.tagline}</p>
            <p className={styles.comingSoonDesc}>{comingSoon.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({
  product,
  delay,
}: {
  product: Product
  delay: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        '--product-color': product.color,
      } as React.CSSProperties}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardIconWrap}>
          <img
            src={product.iconSrc}
            alt={`${product.name} logo`}
            className={styles.cardIconImg}
            loading="lazy"
          />
        </div>
        <span className={styles.cardLabel}>{product.label}</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardTagline}>{product.tagline}</p>
        <p className={styles.cardDesc}>{product.description}</p>

        <div className={styles.features}>
          {product.features.map((f) => (
            <span key={f} className={styles.feature}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {f}
            </span>
          ))}
        </div>
      </div>

      {product.internal ? (
        <Link to={product.url} className={styles.cardLink}>
          Les mer om {product.name}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      ) : (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          Besøk {product.name}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  )
}
