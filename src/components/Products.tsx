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
]

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
