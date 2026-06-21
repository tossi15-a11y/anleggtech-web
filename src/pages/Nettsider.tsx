import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import styles from './Programvare.module.css'
import local from './Nettsider.module.css'

const MAILTO =
  'mailto:torstein@anleggtech.no?subject=Nettside%20til%20min%20bedrift%20%E2%80%94%20gratis%20demo&body=Hei%2C%20jeg%20vil%20gjerne%20ha%20en%20gratis%20demo%20av%20en%20nettside%20til%20bedriften%20min.%0A%0ABedrift%3A%20%0ABransje%3A%20%0ANettside%20i%20dag%20(hvis%20noen)%3A%20'

const features = [
  {
    title: 'Design som henter kunder',
    description:
      'Ikke bare pent — bygget for å gjøre besøkende til kunder. Tydelig hva du tilbyr, og hvordan de tar kontakt.',
  },
  {
    title: 'Synlig på Google',
    description:
      'SEO og Google Bedriftsprofil på plass fra dag én, så kundene finner deg når de søker etter tjenesten din lokalt.',
  },
  {
    title: 'Henvendelser rett i innboksen',
    description:
      'Kontaktskjema og «ring nå»-knapp sender henvendelsen direkte til din e-post og telefon. Ingen leads går tapt.',
  },
  {
    title: 'Perfekt på mobil',
    description:
      'De fleste kundene dine sitter på telefonen. Siden er rask og knivskarp på alle skjermstørrelser.',
  },
  {
    title: 'Levert på dager, ikke uker',
    description:
      'Vi har en gjennomprøvd arbeidsflyt. Du får en ferdig nettside raskt — uten endeløse runder fram og tilbake.',
  },
  {
    title: 'Drift og oppdateringer inkludert',
    description:
      'Hosting, sikkerhet, sikkerhetskopier og småendringer tar vi oss av. Du slipper å tenke på det tekniske.',
  },
]

const steps = [
  {
    title: 'Vi bygger en gratis demo med din bedrift',
    body:
      'Du forteller oss kort hva du driver med. Vi lager en ferdig nettside med ditt navn, dine bilder og dine farger — helt gratis og uforpliktende.',
  },
  {
    title: 'Du ser den live og bestemmer',
    body:
      'Du får en lenke til den faktiske nettsiden i nettleseren. Liker du den, går vi videre. Hvis ikke, koster det deg ingenting.',
  },
  {
    title: 'Vi lanserer og kobler domenet',
    body:
      'Vi kjøper og setter opp domenet på ditt firmanavn, kobler e-postvarsler og registrerer deg på Google. Siden er live for kundene dine.',
  },
  {
    title: 'Vi drifter videre — du jobber',
    body:
      'Du eier domenet og innholdet. Vi holder siden i gang og oppdaterer ved behov, så du kan fokusere på det du er god på.',
  },
]

const audiences = [
  {
    title: 'Håndverkere og entreprenører',
    description:
      'Snekkere, murere, gravefirma, anleggsgartnere, blikkenslagere. Vi kjenner bransjen og vet hva som får telefonen til å ringe.',
  },
  {
    title: 'Nystartede bedrifter',
    description:
      'Fersk i markedet uten nettside? En profesjonell side gir deg troverdighet fra dag én, slik at kundene tør å velge deg.',
  },
  {
    title: 'Tjenesteytere og helse',
    description:
      'Legekontor, frisør, regnskap, konsulenter. Trenger du at folk lett finner åpningstider, tjenester og kontaktinfo — fikser vi det.',
  },
  {
    title: 'Bedrifter med utdatert side',
    description:
      'Har du en gammel side som ser dårlig ut på mobil og ikke dukker opp på Google? Vi bygger den om til noe du er stolt av.',
  },
]

const faqs = [
  {
    q: 'Hva koster det?',
    a: 'Prisen avhenger av omfanget — en enkel presentasjonsside koster mindre enn en side med booking, fagsider og mange undersider. Du får et fast tilbud før vi begynner, helt uten overraskelser. Ta kontakt så regner vi på akkurat din bedrift.',
  },
  {
    q: 'Hvem eier nettsiden?',
    a: 'Du. Domenet kjøpes på ditt firmanavn, og innholdet er ditt. Vi drifter den tekniske infrastrukturen, men du sitter aldri fast hos oss.',
  },
  {
    q: 'Hvor lang tid tar det?',
    a: 'Demoen er som regel klar i løpet av få dager. Etter at du har godkjent, er siden vanligvis live innen en uke — avhengig av hvor raskt vi får bilder og tekst fra deg.',
  },
  {
    q: 'Hva om jeg trenger endringer senere?',
    a: 'Småendringer — nytt telefonnummer, nye bilder, oppdaterte priser — tar vi oss av som en del av driften. Du sender oss en melding, så fikser vi det.',
  },
  {
    q: 'Må jeg kunne noe teknisk?',
    a: 'Nei. Du trenger ikke å forholde deg til domener, hosting eller kode i det hele tatt. Vi ordner alt — du trenger bare å fortelle oss om bedriften din.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Webdesign og nettsideutvikling',
  provider: {
    '@type': 'Organization',
    name: 'AnleggTech AS',
    url: 'https://www.anleggtech.no',
  },
  areaServed: { '@type': 'Country', name: 'Norge' },
  description:
    'Profesjonelle nettsider for håndverkere, entreprenører og småbedrifter. Gratis demo før du bestemmer deg. Levert på dager med drift inkludert.',
}

export default function Nettsider() {
  return (
    <>
      <Seo
        title="Nettside til bedriften din – levert på dager | AnleggTech AS"
        description="Profesjonell nettside for håndverkere, entreprenører og småbedrifter. Vi bygger en gratis demo med din bedrift — du ser den live før du bestemmer deg. Drift inkludert."
        path="/nettsider"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className={styles.main}>

        <section className={`${styles.hero} ${local.heroWithBg}`}>
          <div className={local.heroBgOverlay} aria-hidden="true" />
          <div className={`container ${local.heroGrid}`}>
            <div className={local.heroText}>
              <div className={styles.backRow}>
                <Link to="/" className={styles.backLink}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Tilbake til forsiden
                </Link>
              </div>

              <span className={styles.tag}>Nettsider for bedrifter</span>
              <h1 className={styles.title}>
                En nettside som henter inn kunder —<br/>
                <span className={styles.accent}>ikke bare ser fin ut</span>
              </h1>
              <p className={styles.subtitle}>
                Vi lager profesjonelle nettsider for håndverkere, entreprenører og småbedrifter
                i hele Norge. Rask levering, synlig på Google, og drift inkludert — slik at du
                kan bruke tiden på jobben, ikke på nettsiden.
              </p>
              <div className={styles.heroCtas}>
                <a href={MAILTO} className={styles.ctaPrimary}>
                  Få en gratis demo
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://asanehageservice.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondary}
                >
                  Se et eksempel
                </a>
              </div>
              <p className={styles.heroSubnote}>
                Helt uforpliktende — du betaler ingenting før du har sett den ferdige siden din.
              </p>
            </div>

            <div className={local.heroVisual}>
              <div className={local.laptop}>
                <div className={local.laptopScreen}>
                  <img src="/mockups/asane-desktop.jpeg" alt="Eksempel på nettside levert av AnleggTech — Åsane Hageservice på desktop" loading="eager" />
                </div>
                <div className={local.laptopBase} />
              </div>
              <div className={local.phone}>
                <img src="/mockups/asane-mobile.jpeg" alt="Samme nettside på mobil" loading="eager" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            {/* Demo-først — hovedargumentet */}
            <div className={local.demoBox}>
              <span className={styles.productLabel}>Slik gjør vi det annerledes</span>
              <h2 className={local.demoHeading}>
                Du ser nettsiden din <span className={styles.accent}>før</span> du betaler en krone
              </h2>
              <p className={local.demoLead}>
                De fleste byråer ber deg betale først og håpe på det beste. Vi snur det:
                vi bygger en ekte, ferdig nettside med din bedrift, dine bilder og din profil —
                gratis. Du får en lenke, ser nøyaktig hva du får, og bestemmer deg deretter.
                Ingen risiko, ingen abstrakte løfter.
              </p>
            </div>

            {/* Hva du får */}
            <div>
              <div className={styles.productHeader}>
                <span className={styles.productLabel}>Hva du får</span>
                <h2 className={styles.productHeading}>
                  Alt en bedrift trenger på nett — ferdig satt opp
                </h2>
                <p className={styles.productLead}>
                  Vi leverer ikke bare en nettside. Vi leverer et verktøy som faktisk skaffer
                  deg kunder, og som du aldri trenger å bekymre deg for.
                </p>
              </div>
              <div className={local.featGrid}>
                {features.map((f) => (
                  <div key={f.title} className={local.featCard}>
                    <div className={local.featCheck}>
                      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className={local.featTitle}>{f.title}</h3>
                    <p className={local.featDesc}>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Slik fungerer det */}
            <div className={styles.howBlock}>
              <h2 className={styles.howHeading}>Slik fungerer det</h2>
              <ol className={styles.howList}>
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.howStep}>{i + 1}</span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Referanse */}
            <div className={local.refBlock}>
              <div className={local.refMedia}>
                <img src="/mockups/asane-desktop.jpeg" alt="Åsane Hageservice — nettside levert av AnleggTech" loading="lazy" />
              </div>
              <div className={local.refBody}>
                <span className={styles.productLabel}>Levert prosjekt</span>
                <h2 className={local.refHeading}>Åsane Hageservice</h2>
                <p className={local.refDesc}>
                  Anleggsgartner i Bergen som trengte en profesjonell nettside for å skille seg
                  ut og fange opp henvendelser. Resultatet: en rask, mobilvennlig side med
                  bilder av faktiske prosjekter, lokal SEO og kontaktskjema rett til innboksen.
                </p>
                <a
                  href="https://asanehageservice.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondary}
                >
                  Se nettsiden live
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Hvem er det for */}
            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Hvem er det for?</h2>
              <p className={styles.audienceLead}>
                Vår spesialitet er bygg- og anleggsbransjen, men vi bygger nettsider for
                alle typer småbedrifter som vil bli funnet og valgt på nett.
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

            {/* FAQ */}
            <div className={local.faqBlock}>
              <h2 className={styles.howHeading}>Vanlige spørsmål</h2>
              <div className={local.faqList}>
                {faqs.map((f) => (
                  <details key={f.q} className={local.faqItem}>
                    <summary className={local.faqQ}>
                      {f.q}
                      <svg className={local.faqChevron} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </summary>
                    <p className={local.faqA}>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Klar for en nettside som jobber for deg?</h2>
            <p className={styles.ctaLead}>
              Send oss et par ord om bedriften din, så bygger vi en gratis demo du kan se på.
              Du bestemmer deg først når du har sett resultatet.
            </p>
            <a href={MAILTO} className={styles.ctaButton}>
              Få en gratis demo
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
