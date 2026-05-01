import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Products.module.css'

const products = [
  {
    name: 'lediglass.no',
    label: 'Markedsplass',
    tagline: 'Finn ledige glass og byggematerialer',
    description:
      'En digital markedsplass for anleggsbransjen som kobler selgere av overskuddsmateriell direkte med kjøpere. Rask, enkel og bransjetilpasset.',
    url: 'https://lediglass.no',
    features: ['Direktekjøp', 'Overskuddsmateriell', 'Bransjetilpasset'],
    color: '#4a9eff',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="10" width="28" height="20" rx="3" stroke="#4a9eff" strokeWidth="2"/>
        <path d="M4 16h28" stroke="#4a9eff" strokeWidth="2"/>
        <rect x="9" y="21" width="18" height="5" rx="1.5" fill="rgba(74,158,255,0.2)" stroke="#4a9eff" strokeWidth="1.5"/>
        <path d="M12 8V6M18 8V5M24 8V6" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'massemarkedet.no',
    label: 'B2B Plattform',
    tagline: 'Norges markedsplass for masse og stein',
    description:
      'Kobler leverandører og kjøpere av masse, stein og grus direkte. Effektiviserer logistikk og innkjøp for hele verdikjeden i grunnanlegg.',
    url: 'https://massemarkedet.no',
    features: ['Masse og stein', 'Leverandørnettverk', 'Hele Norge'],
    color: '#f5a623',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 28L10 14l6 8 6-10 6 6 4-6v16H4z" stroke="#f5a623" strokeWidth="2" strokeLinejoin="round" fill="rgba(245,166,35,0.1)"/>
        <circle cx="10" cy="14" r="2" fill="#f5a623"/>
        <circle cx="16" cy="22" r="2" fill="#f5a623"/>
        <circle cx="22" cy="12" r="2" fill="#f5a623"/>
        <circle cx="28" cy="18" r="2" fill="#f5a623"/>
      </svg>
    ),
  },
  {
    name: 'aktsomhetsportalen.no',
    label: 'SaaS Compliance',
    tagline: 'Komplett verktøy for åpenhetsloven',
    description:
      'Hjelper norske bedrifter med å oppfylle kravene i åpenhetsloven. Automatisert aktsomhetsvurdering, risikoanalyse, leverandørkartlegging og ferdig rapport — klart for Forbrukertilsynet.',
    url: 'https://aktsomhetsportalen.no',
    features: ['Aktsomhetsvurdering', 'Risikoanalyse', 'Automatisert rapport'],
    color: '#2ecc71',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 4L6 10v8c0 7.7 5.1 14.5 12 16 6.9-1.5 12-8.3 12-16v-8L18 4z" stroke="#2ecc71" strokeWidth="2" fill="rgba(46,204,113,0.08)"/>
        <path d="M13 18l3 3 7-7" stroke="#2ecc71" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
  product: typeof products[number]
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
        <div className={styles.cardIconWrap}>{product.icon}</div>
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
    </div>
  )
}
