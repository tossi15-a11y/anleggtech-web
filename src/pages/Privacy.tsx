import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import styles from './Privacy.module.css'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Personvernerklæring – AnleggTech AS"
        description="Personvernerklæring og informasjon om bruk av informasjonskapsler på anleggtech.no."
        path="/personvern"
      />
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
            <span className={styles.tag}>Juridisk</span>
            <h1 className={styles.title}>Personvernerklæring</h1>
            <p className={styles.subtitle}>Sist oppdatert: april 2025</p>
          </header>

          <div className={styles.content}>

            <section className={styles.section}>
              <h2>1. Behandlingsansvarlig</h2>
              <p>
                AnleggTech AS er behandlingsansvarlig for personopplysningene som samles inn via
                dette nettstedet (anleggtech.no).
              </p>
              <ul className={styles.infoList}>
                <li><strong>Selskap:</strong> AnleggTech AS</li>
                <li><strong>Org.nr:</strong> 936 032 265</li>
                <li><strong>E-post:</strong>{' '}
                  <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                    torstein@anleggtech.no
                  </a>
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>2. Hvilke personopplysninger samles inn</h2>
              <p>
                Vi samler kun inn personopplysninger som du frivillig oppgir til oss. Via
                kontaktskjemaet på nettstedet samler vi inn følgende opplysninger:
              </p>
              <ul>
                <li>Navn</li>
                <li>Bedrift / organisasjon</li>
                <li>E-postadresse</li>
                <li>Telefonnummer</li>
                <li>Innholdet i meldingen du sender</li>
              </ul>
              <p>
                Vi samler ikke inn sensitive personopplysninger, og vi ber deg ikke oppgi mer
                informasjon enn det som er nødvendig for å besvare din henvendelse.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. Formål med behandlingen</h2>
              <p>Personopplysningene brukes utelukkende til følgende formål:</p>
              <ul>
                <li>Besvare henvendelser sendt via kontaktskjemaet</li>
                <li>Oppfølging av forespørsler om tjenester og produkter</li>
              </ul>
              <p>
                Vi bruker ikke personopplysningene til automatisert beslutningstaking,
                profilering eller markedsføring uten ditt eksplisitte samtykke.
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
                  <strong>Berettiget interesse</strong> (artikkel 6 nr. 1 bokstav f) — for å
                  kunne besvare henvendelser fra potensielle kunder og samarbeidspartnere.
                </li>
                <li>
                  <strong>Samtykke</strong> (artikkel 6 nr. 1 bokstav a) — dersom du har gitt
                  samtykke til bruk av analysecookies via cookiesamtykkebannerert.
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Lagringstid</h2>
              <p>
                Personopplysninger fra kontaktskjemaet slettes senest <strong>12 måneder</strong> etter
                at henvendelsen er besvart og saken er avsluttet, med mindre annet er påkrevd av
                lovgivningen eller du har samtykket til lengre oppbevaring.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Deling av personopplysninger</h2>
              <p>
                Vi selger eller deler ikke personopplysningene dine med tredjeparter, med
                unntak av tekniske tjenesteleverandører som hjelper oss å drifte nettstedet
                (f.eks. hosting-tjenester). Disse behandler data utelukkende på vegne av
                AnleggTech AS og er bundet av databehandleravtaler.
              </p>
              <p>
                Vi overfører ikke personopplysninger til land utenfor EU/EØS uten at
                tilstrekkelige sikkerhetstiltak er på plass i henhold til GDPR kapittel V.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Informasjonskapsler (cookies)</h2>
              <p>
                Nettstedet benytter informasjonskapsler (cookies). Vi skiller mellom to
                kategorier:
              </p>
              <ul>
                <li>
                  <strong>Teknisk nødvendige cookies:</strong> Disse er nødvendige for at
                  nettstedet skal fungere korrekt. De kan ikke deaktiveres.
                </li>
                <li>
                  <strong>Analysecookies:</strong> Brukes til å forstå hvordan besøkende
                  bruker nettstedet, slik at vi kan forbedre innholdet og brukeropplevelsen.
                  Disse settes kun dersom du godtar det via samtykkebanneret.
                </li>
              </ul>
              <p>
                Du kan trekke tilbake samtykket til analysecookies når som helst ved å
                slette informasjonskapslene i nettleseren din.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Dine rettigheter</h2>
              <p>
                I henhold til GDPR har du følgende rettigheter knyttet til behandlingen av
                dine personopplysninger:
              </p>
              <ul>
                <li>
                  <strong>Innsyn:</strong> Du har rett til å få vite hvilke opplysninger vi
                  har registrert om deg.
                </li>
                <li>
                  <strong>Retting:</strong> Du har rett til å få rettet opplysninger som er
                  feilaktige eller ufullstendige.
                </li>
                <li>
                  <strong>Sletting:</strong> Du kan be om at personopplysningene dine slettes
                  («retten til å bli glemt»), med mindre vi har et lovlig grunnlag for videre
                  behandling.
                </li>
                <li>
                  <strong>Begrensning:</strong> Du kan be om at behandlingen av
                  personopplysningene dine begrenses i visse tilfeller.
                </li>
                <li>
                  <strong>Dataportabilitet:</strong> Du har rett til å motta personopplysninger
                  du har gitt oss i et strukturert, alminnelig brukt og maskinlesbart format.
                </li>
                <li>
                  <strong>Innsigelse:</strong> Du kan protestere mot behandling basert på
                  berettiget interesse.
                </li>
              </ul>
              <p>
                For å utøve dine rettigheter, ta kontakt med oss på{' '}
                <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                  torstein@anleggtech.no
                </a>.
                Vi vil besvare din forespørsel innen 30 dager.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Klagerett</h2>
              <p>
                Dersom du mener at vår behandling av personopplysninger er i strid med
                personvernregelverket, har du rett til å klage til{' '}
                <a
                  href="https://www.datatilsynet.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Datatilsynet
                </a>{' '}
                (datatilsynet.no). Vi oppfordrer deg imidlertid til å kontakte oss først,
                slik at vi kan forsøke å løse eventuelle problemer.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Endringer i personvernerklæringen</h2>
              <p>
                Vi kan oppdatere denne personvernerklæringen dersom det skjer endringer i
                how vi behandler personopplysninger, eller dersom lovgivningen endres.
                Vesentlige endringer vil bli varslet på nettstedet. Datoen øverst på denne
                siden angir når erklæringen sist ble oppdatert.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Kontakt</h2>
              <p>
                Har du spørsmål om vår behandling av personopplysninger, ta gjerne kontakt:
              </p>
              <ul className={styles.infoList}>
                <li><strong>E-post:</strong>{' '}
                  <a href="mailto:torstein@anleggtech.no" className={styles.link}>
                    torstein@anleggtech.no
                  </a>
                </li>
                <li><strong>Selskap:</strong> AnleggTech AS</li>
              </ul>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
