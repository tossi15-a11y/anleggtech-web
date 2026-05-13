import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Programvare.module.css'

const audiences = [
  {
    title: 'Byggmestere',
    description:
      'Dokumenter byggeplassen før, under og etter — perfekt grunnlag ved nabo- og kontraktstvister, sluttdokumentasjon og HMS.',
  },
  {
    title: 'Entreprenører',
    description:
      'Bevis tilstanden før graving, sprengning eller riving. Slipp diskusjoner om hva som var der fra før.',
  },
  {
    title: 'Anleggsgartnere',
    description:
      'Dokumenter terreng, vegetasjon og uteanlegg før omforming — gir tydelig før/etter-historie til kunden.',
  },
  {
    title: 'Utbyggere og prosjektledere',
    description:
      'Hold byggherre og kunder oppdatert uten at de må reise til byggeplassen. Send navigerbar 360°-lenke i stedet.',
  },
]

const useCases = [
  {
    title: 'Før-dokumentasjon',
    tagline: 'Beviset på hvordan det var',
    description:
      'Spill inn 360° gjennom hele området før prosjektstart. Du får en navigerbar Street View-opplevelse som viser nøyaktig hvordan det så ut — uangripelig dokumentasjon ved tvister, reklamasjoner eller forsikringssaker.',
    points: [
      'Tilstandsdokumentasjon før graving, sprengning eller riving',
      'Beskytter mot uberettigede krav fra naboer eller byggherre',
      'Lett å arkivere og hente fram år senere',
    ],
  },
  {
    title: 'Progresjonsrapportering til kunde',
    tagline: 'Kunden slipper å reise ut',
    description:
      'Har du kunder med lang reisevei? Send dem en lenke og la dem gå rundt på byggeplassen virtuelt. Spill inn ny runde hver uke eller måned — kunden ser progresjonen uten å bruke en hel arbeidsdag på reise.',
    points: [
      'Periodisk dokumentasjon viser fremdrift over tid',
      'Reduserer behovet for fysiske byggeplassmøter',
      'Kunde og byggherre kan «besøke» plassen når som helst',
    ],
  },
  {
    title: 'Sluttdokumentasjon',
    tagline: 'Et komplett arkiv av hele prosjektet',
    description:
      'Når prosjektet er ferdig har du en fullstendig visuell tidslinje fra start til slutt. Lever en delbar lenke til byggherre eller bruk det selv som referanse i salgsmøter med neste kunde.',
    points: [
      'Profesjonell sluttleveranse som skiller deg fra konkurrentene',
      'Markedsføringsmateriale: vis fram tidligere prosjekter',
      'Internt læringsverktøy for nye ansatte',
    ],
  },
]

export default function Programvare() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.backRow}>
              <Link to="/" className={styles.backLink}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Tilbake til forsiden
              </Link>
            </div>

            <span className={styles.tag}>Programvare vi utvikler</span>
            <h1 className={styles.title}>
              Digital dokumentasjon<br/>av anleggsprosjekter
            </h1>
            <p className={styles.subtitle}>
              Vi utvikler programvare som hjelper byggmestere, entreprenører og utbyggere med
              å dokumentere prosjekter — fra første spadetak til ferdig leveranse.
            </p>
          </div>
        </section>

        <section id="siteview360" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>SiteView360</span>
              <h2 className={styles.productHeading}>
                Street View-lignende dokumentasjon av byggeplasser
              </h2>
              <p className={styles.productLead}>
                SiteView360 konverterer 360°-video fra et Insta360-kamera til en navigerbar
                opplevelse av anleggsplassen — som å gå gjennom Google Street View, men på
                ditt eget prosjekt. Kunden klikker seg fra punkt til punkt og ser akkurat
                hvordan området så ut den dagen videoen ble spilt inn.
              </p>
            </div>

            <div className={styles.useCases}>
              {useCases.map((uc) => (
                <article key={uc.title} className={styles.useCase}>
                  <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                  <p className={styles.useCaseTagline}>{uc.tagline}</p>
                  <p className={styles.useCaseDesc}>{uc.description}</p>
                  <ul className={styles.useCasePoints}>
                    {uc.points.map((p) => (
                      <li key={p}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Hvem er dette for?</h2>
              <p className={styles.audienceLead}>
                Alle som gjør endringer på et område og trenger å vise hvordan det var før,
                under eller etter — og som vil slippe at kunden må reise ut for å se status.
              </p>
              <div className={styles.audienceGrid}>
                {audiences.map((a) => (
                  <div key={a.title} className={styles.audienceCard}>
                    <h3 className={styles.audienceCardTitle}>{a.title}</h3>
                    <p className={styles.audienceCardDesc}>{a.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.howBlock}>
              <h2 className={styles.howHeading}>Slik fungerer det</h2>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Spill inn med 360°-kamera</strong>
                    <p>Gå gjennom prosjektet med et Insta360-kamera. Tar typisk 5–15 minutter for et helt anleggsområde.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Last inn i SiteView360</strong>
                    <p>Programvaren behandler videoen og bygger en navigerbar Street View-lignende opplevelse av området.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Del med kunden</strong>
                    <p>Send en lenke. Kunden navigerer rundt på prosjektet i nettleseren — uansett hvor i landet de er.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Vil du se SiteView360 i bruk?</h2>
            <p className={styles.ctaLead}>
              Ta kontakt for en demo eller for å diskutere hvordan SiteView360 kan passe
              inn i din arbeidsflyt.
            </p>
            <a
              href="mailto:torstein@anleggtech.no?subject=SiteView360%20%E2%80%94%20demo%2Finfo"
              className={styles.ctaButton}
            >
              Ta kontakt for demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
