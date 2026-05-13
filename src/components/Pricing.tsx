import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Pricing.module.css'

export type PricingTier = {
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: { label: string; href: string }
  badge?: string
}

type Props = {
  heading: string
  lead?: string
  tiers: PricingTier[]
  pilotNote?: string
  accentColor?: string
}

export default function Pricing({
  heading,
  lead,
  tiers,
  pilotNote,
  accentColor = '#22c55e',
}: Props) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="priser" className={styles.section} style={{ '--pricing-accent': accentColor } as React.CSSProperties}>
      <div className={`container ${styles.inner}`}>
        <div ref={ref} className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className="section-tag">Priser</span>
          <h2 className="section-heading">{heading}</h2>
          {lead && <p className="section-subtext">{lead}</p>}
        </div>

        <div className={styles.tiers}>
          {tiers.map((tier, i) => (
            <article
              key={tier.name}
              className={`${styles.tier} ${tier.highlighted ? styles.tierHighlighted : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tier.badge && <span className={styles.tierBadge}>{tier.badge}</span>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.tierPrice}>
                <span className={styles.tierPriceNumber}>{tier.price}</span>
                <span className={styles.tierPriceUnit}>{tier.unit}</span>
              </div>
              <p className={styles.tierDescription}>{tier.description}</p>
              <ul className={styles.tierFeatures}>
                {tier.features.map((f) => (
                  <li key={f}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={tier.cta.href} className={styles.tierCta}>
                {tier.cta.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {pilotNote && (
          <p className={styles.pilotNote}>
            <span className={styles.pilotDot} aria-hidden />
            {pilotNote}
          </p>
        )}

        <p className={styles.footnote}>
          Alle priser er eks. mva · faktureres månedlig · oppsigelsestid 1 måned
        </p>
      </div>
    </section>
  )
}
