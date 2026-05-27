import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Privacy.module.css'

export default function PortalTerms() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>

          <div className={styles.backRow}>
            <Link to="/" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Tilbake til forsiden
            </Link>
          </div>

          <header className={styles.header}>
            <span className={styles.tag}>Juridisk · Anleggtech Portal</span>
            <h1 className={styles.title}>Brukervilkår — Anleggtech Portal</h1>
            <p className={styles.subtitle}>Sist oppdatert: mai 2026</p>
          </header>

          <div className={styles.content}>

            <section className={styles.section}>
              <h2>1. Om tjenesten</h2>
              <p>
                Anleggtech Portal er en SaaS-løsning levert av Anleggtech AS (org.nr 936 032 265,
                Skipavika 36, Bergen) som lar abonnentene oppdatere sin egen nettside og publisere
                innhold til sine egne sosiale medier-kontoer (Google Business Profile, Facebook,
                Instagram).
              </p>
              <p>
                Tjenesten er rettet mot næringsdrivende kunder (B2B). Forbrukerkjøp er ikke
                støttet.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Konto og innlogging</h2>
              <ul>
                <li>For å bruke portalen må du være registrert som bruker av en betalende kundekonto (en bedrift)</li>
                <li>Innlogging skjer passordløst via Magic Link sendt til din e-postadresse</li>
                <li>Du er ansvarlig for å holde din e-postkonto sikker</li>
                <li>Mistanke om uautorisert tilgang skal varsles umiddelbart til torstein@anleggtech.no</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Bruk av tjenesten</h2>
              <p>Du forplikter deg til å:</p>
              <ul>
                <li>Kun publisere innhold du har rett til å publisere (eier opphavsrett, eller har samtykke fra rettighetshaverne)</li>
                <li>Ikke publisere ulovlig, krenkende, diskriminerende eller villedende innhold</li>
                <li>Overholde retningslinjene til de tredjeparts-tjenestene du kobler til (Google, Meta) — vilkårsbrudd kan føre til at deres kontoer sperres</li>
                <li>Ikke forsøke å omgå sikkerhetsmekanismer eller tilgangskontroller i portalen</li>
                <li>Ikke videreselge eller dele tilgang til portalen med andre bedrifter uten skriftlig tillatelse</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Tredjeparts-koblinger (OAuth)</h2>
              <p>
                Når du kobler en Google Business Profile, Facebook Page eller Instagram-konto til
                portalen via OAuth:
              </p>
              <ul>
                <li>Du gir Anleggtech AS rett til å publisere innhold du selv har godkjent</li>
                <li>Anleggtech AS leser eller endrer ikke annet enn det som er nødvendig for publisering</li>
                <li>Du kan når som helst koble fra en konto via portalens innstillinger eller direkte hos tredjepartstjenesten</li>
                <li>Endringer på kundens GBP-profil varsles innen 48 timer i tråd med Googles vilkår</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Pris og betaling</h2>
              <p>
                Prisen for Anleggtech Portal avtales individuelt med hver kunde. Eventuell pris
                fremgår av tilbudsdokumentet og bekreftes ved kontraktsinngåelse.
              </p>
              <ul>
                <li>Fakturering skjer månedlig eller årlig som avtalt</li>
                <li>Forfallstid: 14 dager fra fakturadato</li>
                <li>Ved manglende betaling kan tilgang til portalen midlertidig suspenderes etter 30 dagers purrekortid</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>6. Tilgjengelighet og driftsforstyrrelser</h2>
              <p>
                Anleggtech AS gjør sitt beste for å levere en stabil tjeneste, men gir ikke
                garanti om 100 % oppetid. Vi bruker etablerte underleverandører (Supabase, Vercel)
                med høy oppetidsgaranti. Planlagt vedlikehold varsles minst 24 timer i forveien.
              </p>
              <p>
                Ved utilgjengelighet utover 24 sammenhengende timer kan du kreve forholdsmessig
                prisavslag.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Eierskap og rettigheter</h2>
              <ul>
                <li>Du eier alt innhold du laster opp (bilder, tekst, prosjektdata)</li>
                <li>Anleggtech AS eier portalens programvare, infrastruktur og kildekode</li>
                <li>Vi har en begrenset, ikke-eksklusiv lisens til å behandle ditt innhold for å levere tjenesten</li>
                <li>Du kan eksportere alt innhold som JSON ved oppsigelse</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>8. Oppsigelse</h2>
              <ul>
                <li>Du kan si opp abonnementet når som helst med 30 dagers varsel</li>
                <li>Anleggtech AS kan si opp avtalen ved vesentlig mislighold med 14 dagers skriftlig varsel</li>
                <li>Ved oppsigelse beholder du tilgang ut betalt periode og kan eksportere alt innhold</li>
                <li>Innholdet på din nettside (referanseprosjekter, åpningstider osv.) blir værende på din nettside, men kan ikke lenger endres via portalen</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>9. Ansvarsbegrensning</h2>
              <p>
                Anleggtech AS sitt samlede erstatningsansvar er begrenset til siste 12 måneders
                vederlag for tjenesten. Vi er ikke ansvarlige for:
              </p>
              <ul>
                <li>Indirekte tap, tapt fortjeneste eller omdømmetap</li>
                <li>Tap som følge av at tredjeparts-tjenester (Google, Meta) endrer eller stenger sine API-er</li>
                <li>Tap som følge av at du publiserer innhold som bryter andres rettigheter eller plattform-vilkår</li>
              </ul>
              <p>
                Ansvarsbegrensningen gjelder ikke ved forsett eller grov uaktsomhet.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Endringer i vilkårene</h2>
              <p>
                Anleggtech AS kan endre vilkårene ved å varsle deg med minst 30 dagers
                forhåndsvarsel via e-post. Hvis du ikke aksepterer endringene, kan du si opp
                abonnementet uten kostnad.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Lovvalg og verneting</h2>
              <p>
                Avtalen reguleres av norsk rett. Tvister skal forsøkes løst i minnelighet.
                Verneting er Hordaland tingrett.
              </p>
            </section>

            <section className={styles.section}>
              <h2>12. Kontakt</h2>
              <ul className={styles.infoList}>
                <li><strong>E-post:</strong>{' '}
                  <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                    torstein@anleggtech.no
                  </a>
                </li>
                <li><strong>Selskap:</strong> Anleggtech AS, org.nr 936 032 265</li>
                <li><strong>Personvernerklæring:</strong>{' '}
                  <Link to="/portal/personvern" className={styles.link}>portal.anleggtech.no/personvern</Link>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
