import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Privacy.module.css'

export default function PortalPrivacy() {
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
            <h1 className={styles.title}>Personvernerklæring — Anleggtech Portal</h1>
            <p className={styles.subtitle}>Sist oppdatert: mai 2026</p>
          </header>

          <div className={styles.content}>

            <section className={styles.section}>
              <h2>1. Behandlingsansvarlig</h2>
              <p>
                Anleggtech AS er behandlingsansvarlig for personopplysninger som behandles i
                Anleggtech Portal (portal.anleggtech.no). Portalen lar bedriftskunder oppdatere
                sin egen nettside og publisere innhold til sine egne sosiale medier-kontoer.
              </p>
              <ul className={styles.infoList}>
                <li><strong>Selskap:</strong> Anleggtech AS</li>
                <li><strong>Org.nr:</strong> 936 032 265</li>
                <li><strong>E-post:</strong>{' '}
                  <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                    torstein@anleggtech.no
                  </a>
                </li>
                <li><strong>Adresse:</strong> Skipavika 36, Bergen</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>2. Hvilke personopplysninger samles inn</h2>
              <p>
                Vi samler inn følgende kategorier av personopplysninger fra registrerte
                portal-brukere:
              </p>
              <ul>
                <li><strong>Kontaktinformasjon:</strong> navn, e-postadresse, telefonnummer, firmanavn</li>
                <li><strong>Innloggingsdata:</strong> innloggings-tokens (via passordløs Magic Link)</li>
                <li><strong>Bedriftsinnhold:</strong> tekst, bilder og data om referanseprosjekter som du selv laster opp</li>
                <li><strong>OAuth-tokens fra koblede tredjeparts-tjenester:</strong> Google Business Profile, Facebook Pages, Instagram Business. Disse lagres kryptert i database og brukes utelukkende for å publisere innhold du selv har godkjent.</li>
                <li><strong>Aktivitetslogg:</strong> hvilke poster du har publisert, til hvilke kanaler, når</li>
              </ul>
              <p>
                Vi samler ikke inn sensitive personopplysninger (helse, religion, politisk
                tilhørighet o.l.), og vi ber deg ikke oppgi mer informasjon enn det som er
                nødvendig for at portalen skal fungere.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Formål med behandlingen</h2>
              <p>Personopplysningene brukes utelukkende til følgende formål:</p>
              <ul>
                <li>Drift av portal-tjenesten (innlogging, oppdatering av nettsiden din, sosial medier-publisering)</li>
                <li>Synkronisering av innhold til dine egne tredjeparts-kontoer (Google Business Profile, Facebook Pages, Instagram)</li>
                <li>Sikkerhetslogging og feilsøking</li>
                <li>Fakturering og kundeoppfølging</li>
              </ul>
              <p>
                Vi bruker ikke personopplysningene til markedsføring uten ditt eksplisitte
                samtykke, og vi selger aldri data til tredjeparter.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Behandlingsgrunnlag</h2>
              <p>
                Behandling av personopplysninger skjer på følgende grunnlag i henhold til
                personvernforordningen (GDPR):
              </p>
              <ul>
                <li>
                  <strong>Avtale</strong> (artikkel 6 nr. 1 bokstav b) — behandling som er
                  nødvendig for å oppfylle abonnementsavtalen mellom deg og Anleggtech AS.
                </li>
                <li>
                  <strong>Samtykke</strong> (artikkel 6 nr. 1 bokstav a) — når du kobler en
                  tredjeparts-konto (Google, Facebook, Instagram) via OAuth, gir du oss
                  spesifikt samtykke til å lagre access token og publisere på dine vegne.
                </li>
                <li>
                  <strong>Berettiget interesse</strong> (artikkel 6 nr. 1 bokstav f) —
                  sikkerhetslogging og driftsovervåking.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Behandling av tredjeparts API-data</h2>
              <p>
                Når du kobler en Google Business Profile, Facebook Page eller
                Instagram-konto til portalen, skjer følgende:
              </p>
              <ul>
                <li>
                  Vi mottar en <strong>access token</strong> fra den aktuelle tjenesten. Denne
                  lagres kryptert (AES-256) i vår database og kan kun leses av portalens
                  backend-tjenester.
                </li>
                <li>
                  Vi bruker tokenet utelukkende til å publisere innhold du selv har godkjent
                  (referanseprosjekter, åpningstider, tjenester) til den koblede kontoen.
                </li>
                <li>
                  Vi leser ikke private meldinger, kommentarer eller annet brukerinnhold på
                  dine kontoer.
                </li>
                <li>
                  Du kan når som helst koble fra en konto via portalen — alt tilhørende token
                  slettes umiddelbart og automatisk.
                </li>
                <li>
                  All bruk av Google-data overholder{' '}
                  <a href="https://developers.google.com/terms/api-services-user-data-policy"
                     target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Google API Services User Data Policy
                  </a>, inkludert kravene i Limited Use.
                </li>
                <li>
                  All bruk av Meta-data (Facebook/Instagram) overholder Metas{' '}
                  <a href="https://developers.facebook.com/terms/" target="_blank"
                     rel="noopener noreferrer" className={styles.link}>
                    Platform Terms
                  </a>{' '}og Developer Policies.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>6. Lagringstid</h2>
              <p>
                Vi lagrer dine personopplysninger så lenge du har et aktivt abonnement på
                Anleggtech Portal, og inntil <strong>12 måneder</strong> etter at
                abonnementet er avsluttet, med mindre lovgivning krever lengre oppbevaring
                (f.eks. regnskapslovgivning for fakturadata).
              </p>
              <p>
                OAuth-tokens slettes umiddelbart ved frakobling. Bilder og prosjektdata kan
                eksporteres som JSON ved oppsigelse.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Deling av personopplysninger</h2>
              <p>
                Vi deler ikke personopplysninger med tredjeparter, med unntak av tekniske
                tjenesteleverandører som er bundet av databehandleravtaler:
              </p>
              <ul>
                <li>
                  <strong>Supabase</strong> (databaselagring, USA — Standard Contractual Clauses i
                  henhold til GDPR artikkel 46)
                </li>
                <li>
                  <strong>Vercel</strong> (hosting, USA — Standard Contractual Clauses)
                </li>
                <li>
                  <strong>Google</strong> (kun når du har koblet GBP — API-kall sendes til
                  Google på dine vegne)
                </li>
                <li>
                  <strong>Meta</strong> (kun når du har koblet FB/Instagram — API-kall sendes
                  til Meta på dine vegne)
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>8. Dine rettigheter</h2>
              <p>
                I henhold til GDPR har du følgende rettigheter:
              </p>
              <ul>
                <li><strong>Innsyn:</strong> få vite hvilke opplysninger vi har om deg</li>
                <li><strong>Retting:</strong> få korrigert feil eller ufullstendige opplysninger</li>
                <li><strong>Sletting (retten til å bli glemt):</strong> få slettet personopplysninger som ikke lenger er nødvendige</li>
                <li><strong>Dataportabilitet:</strong> motta dine data i et strukturert, maskinlesbart format (JSON-eksport tilgjengelig direkte i portalen)</li>
                <li><strong>Begrensning og innsigelse:</strong> begrense eller protestere mot behandling</li>
                <li><strong>Tilbakekall samtykke:</strong> koble fra en tredjeparts-konto når som helst</li>
              </ul>
              <p>
                For å utøve dine rettigheter, kontakt oss på{' '}
                <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                  torstein@anleggtech.no
                </a>. Vi besvarer innen 30 dager.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Datasletting på forespørsel</h2>
              <p>
                Du kan slette alle dine personopplysninger fra Anleggtech Portal ved å:
              </p>
              <ul>
                <li>Slette kontoen fra portalens innstillinger (når denne funksjonen er aktivert)</li>
                <li>Sende e-post til{' '}
                  <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                    torstein@anleggtech.no
                  </a> med emne «Datasletting»</li>
              </ul>
              <p>
                Sletting skjer innen 30 dager, med unntak av regnskapsdata som må oppbevares i
                henhold til bokføringsloven (5 år).
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Klagerett</h2>
              <p>
                Dersom du mener at vår behandling av personopplysninger er i strid med
                personvernregelverket, kan du klage til{' '}
                <a href="https://www.datatilsynet.no" target="_blank"
                   rel="noopener noreferrer" className={styles.link}>
                  Datatilsynet
                </a>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Endringer</h2>
              <p>
                Denne personvernerklæringen kan oppdateres ved endringer i tjenesten eller
                lovgivningen. Vesentlige endringer varsles via e-post til registrerte brukere.
                Datoen øverst på siden angir siste oppdatering.
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
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
