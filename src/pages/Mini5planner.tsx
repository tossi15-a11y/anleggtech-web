import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import styles from './Programvare.module.css'

const RELEASES_URL = 'https://github.com/tossi15-a11y/mini5planner-releases/releases/latest'
const DOWNLOAD_MAC_URL = '/api/mini5planner-last-ned?plattform=mac'
const DOWNLOAD_WINDOWS_URL = '/api/mini5planner-last-ned?plattform=windows'
const BUY_PRO_URL = 'https://mini5planner-lisens.vercel.app/api/kjop'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mini5Planner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'macOS, Windows',
  downloadUrl: RELEASES_URL,
  offers: [
    {
      '@type': 'Offer',
      name: 'Mini5Planner',
      price: '0',
      priceCurrency: 'NOK',
    },
    {
      '@type': 'Offer',
      name: 'Mini5Planner Pro',
      description: 'Livstidslisens som engangskjøp: terrengfølging og batterideling. Mva inkludert.',
      price: '199',
      priceCurrency: 'NOK',
      url: 'https://www.anleggtech.no/mini5planner#pro',
    },
  ],
  description:
    'Gratis flyveplan-app som lager KMZ-flyveruter for DJI-droner med presets for anleggsbransjen. Pro med terrengfølging og batterideling er et engangskjøp.',
  publisher: { '@type': 'Organization', name: 'AnleggTech AS', url: 'https://www.anleggtech.no' },
}

const audiences = [
  {
    title: 'Tomte-oppmålere',
    description:
      'Planlegg flygingen over tomta. Bildene kan bearbeides til punktsky for masseberegning.',
  },
  {
    title: 'Anleggsentreprenører',
    description:
      'Dokumenter byggegroper, fyllinger og masseuttak før, under og etter. Drone gjør jobben mens du driver maskinen.',
  },
  {
    title: 'Drone-piloter',
    description:
      'Slipp fiklingen med DJI Fly Waypoint-modus. Tegn et område, juster overlapp, eksporter KMZ til DJI RC 2 — ferdig.',
  },
]

const useCases = [
  {
    title: 'Lawnmower-grid for fotogrammetri',
    tagline: 'Riktig overlapp uten å regne selv',
    description:
      'Mini5Planner regner ut linjeavstand og fotointervall basert på dronens sensor-specs og din valgte høyde. 80 % front-overlapp og 70 % side-overlapp er bare ett klikk unna.',
    points: [
      'Live GSD- og footprint-beregning per drone',
      'Enkelt rutenett eller kryssrutenett',
      'Justerbar gimbal-vinkel (-90° / -75° / -45°) for fasader',
    ],
  },
  {
    title: 'Anleggsbransje-presets',
    tagline: 'Tomt, byggegrop, grustak, fasade, veitrasé',
    description:
      'Fem ferdige misjonsmaler tilpasset typiske anleggsoppdrag. Velg presetten, juster om du vil — eller stol på at vi har gjort matten for deg.',
    points: [
      'Optimaliserte parametere for hver oppdragstype',
      'Skiller seg fra generiske drone-verktøy',
      'Norsk UI med Geonorge-adressesøk',
    ],
  },
  {
    title: 'KMZ rett til DJI RC 2',
    tagline: 'Innebygd overføringsveiviser',
    description:
      'WPML 1.0.2-eksport som DJI Fly forstår. Innebygd veiviser viser deg steg-for-steg hvordan du flytter KMZ-en til DJI RC 2 via USB-C — også på Mac.',
    points: [
      'WPML 1.0.2 — samme format som DJI Pilot 2 bruker',
      'Støtter 7 DJI-modeller (Mini 5 Pro, Mini 4 Pro, Air 3/3S, Mavic 3/3 Pro/4 Pro)',
      'Du får oppdateringer automatisk',
    ],
  },
]

const newFeatures = [
  {
    title: 'Kalibrer / kontroller flyging',
    description:
      'Velg bildemappa etter flygingen. Appen leser EXIF-dataene i bildene og viser hvordan flygingen faktisk ble.',
    points: [
      'Faktisk bildeintervall',
      'Kameraprofil fra bildene',
      'Frontoverlapp for hvert bildepar',
      'Svake steder vises på kartet',
    ],
  },
  {
    title: 'Flyttbart lettepunkt (H)',
    description:
      'Dra H-markøren dit dronen faktisk står. Terrengfølgingen regner høydene ut fra dette punktet.',
    points: [
      'Bekreft punktet, så låses det',
      'Med terrengfølging venter eksporten til punktet er bekreftet',
    ],
  },
]

const proFeatures = [
  'Terrengfølging med Kartverkets høydedata (DTM1) i Norge. Dronen holder samme høyde over bakken, også i kupert terreng.',
  'Batterideling. Store oppdrag deles i etapper som passer til ett batteri hver.',
  'Oppdateringer i v1.x er inkludert.',
  'Livstidslisens. Ingen abonnement.',
]

const processingDeliveries = [
  {
    title: 'Volum av masselager og hauger',
    description: 'PDF-rapport med volum mot en grunnflate som følger foten av haugen.',
  },
  {
    title: 'Ortofoto med eiendomsgrenser',
    description: 'GeoTIFF og JPG med grensene fra Kartverkets matrikkel lagt oppå.',
  },
  {
    title: 'Punktsky (LAZ) og 3D-modell',
    description: 'Til visning, volum og relative mål.',
  },
]

const PROCESSING_MAILTO =
  'mailto:post@anleggtech.no?subject=' +
  encodeURIComponent('[Mini5Planner] Bearbeiding') +
  '&body=' +
  encodeURIComponent(
    'Hei,\n\nJeg har fløyet med Mini5Planner og ønsker tilbud på bearbeiding i Kubatur.\n\n' +
      'Hva trenger du (volum, ortofoto med eiendomsgrenser, punktsky/3D-modell): ___\n' +
      'Sted/adresse: ___\n' +
      'Antall bilder: ___\n\n' +
      'Hilsen,\n___',
  )

const drones = [
  { name: 'DJI Mini 5 Pro', sensor: '1" CMOS', class: 'C0 — 249 g' },
  { name: 'DJI Mini 4 Pro', sensor: '1/1.3" CMOS', class: 'C0 — 249 g' },
  { name: 'DJI Air 3', sensor: '1/1.3" CMOS', class: 'C1' },
  { name: 'DJI Air 3S', sensor: '1" CMOS', class: 'C1' },
  { name: 'DJI Mavic 3', sensor: '4/3" CMOS', class: 'C2' },
  { name: 'DJI Mavic 3 Pro', sensor: '4/3" Hasselblad', class: 'C2' },
  { name: 'DJI Mavic 4 Pro', sensor: '4/3" 100 MP', class: 'C2' },
]

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Mini5planner() {
  return (
    <>
      <Seo
        title="Mini5Planner – Gratis flyveplan-app for DJI-droner | AnleggTech AS"
        description="Gratis Mac- og Windows-app som lager KMZ-flyveruter for 7 DJI-droner. Pro gir terrengfølging med Kartverkets høydedata og batterideling, som engangskjøp."
        path="/mini5planner"
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className={styles.main}>

        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.backRow}>
              <Link to="/programvare" className={styles.backLink}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M11 4L7 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Tilbake til Programvare
              </Link>
            </div>
            <span className={styles.tag}>Drone-fotogrammetri</span>
            <h1 className={styles.title}>
              Tegn området. <span className={styles.accent}>Fly ruta i DJI Fly.</span>
            </h1>
            <p className={styles.subtitle}>
              Mini5Planner er en gratis Mac- og Windows-app som lager KMZ-flyveruter
              for DJI-droner. Tegn et område på kartet, velg en preset, eksporter til
              fjernkontrollen — og fly. Laget av AnleggTech AS i Bjørnafjorden.
            </p>
            <div className={`${styles.heroCtas} ${styles.downloadCtas}`}>
              <div className={styles.downloadOption}>
                <a href={DOWNLOAD_MAC_URL} className={styles.ctaPrimary}>
                  Last ned for Mac
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>Apple-notarisert DMG.</p>
              </div>
              <div className={styles.downloadOption}>
                <a href={DOWNLOAD_WINDOWS_URL} className={styles.ctaPrimary}>
                  Last ned for Windows
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>
                  Windows viser en SmartScreen-advarsel første gang. Klikk «Mer info» og
                  deretter «Kjør likevel».
                </p>
              </div>
              <a href="#pro" className={styles.ctaSecondary}>
                Se Mini5Planner Pro
              </a>
            </div>
            <p className={styles.heroSubnote}>
              Gratis å laste ned og bruke. Alle versjoner ligger på{' '}
              <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
        </section>

        <section id="mini5planner" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Slik bruker du det</span>
              <h2 className={styles.productHeading}>
                Tegn område → eksporter KMZ → fly
              </h2>
              <p className={styles.productLead}>
                Mini5Planner lager flyruta. Trenger du volum, ortofoto eller punktsky
                etterpå, kan du sende oss bildene, så bearbeider vi dem i Kubatur.
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
                        <Check />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Nytt i appen – gratis for alle</h2>
              <p className={styles.audienceLead}>
                To nye verktøy som følger med gratisversjonen.
              </p>
              <div className={styles.audienceGrid}>
                {newFeatures.map((f) => (
                  <div key={f.title} className={styles.audienceCard}>
                    <h3 className={styles.audienceCardTitle}>{f.title}</h3>
                    <p className={styles.audienceCardDesc}>{f.description}</p>
                    <ul className={`${styles.useCasePoints} ${styles.cardPoints}`}>
                      {f.points.map((p) => (
                        <li key={p}>
                          <Check />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div id="droner" className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Støttede DJI-droner</h2>
              <p className={styles.audienceLead}>
                7 modeller, alle gratis. Riktige kamera-specs og maks-fart per drone —
                appen regner GSD og footprint automatisk basert på det du har.
              </p>
              <div className={styles.audienceGrid}>
                {drones.map((d) => (
                  <div key={d.name} className={styles.audienceCard}>
                    <h3 className={styles.audienceCardTitle}>{d.name}</h3>
                    <p className={styles.audienceCardDesc}>
                      {d.sensor} · {d.class}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Hvem er dette for?</h2>
              <p className={styles.audienceLead}>
                Folk som trenger pålitelig fotogrammetri uten å lære enterprise-verktøy
                som UgCS eller binde seg til subscriptions.
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
              <h2 className={styles.howHeading}>Slik kommer du i gang</h2>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Last ned appen</strong>
                    <p>Velg Mac eller Windows øverst på siden. Appen er gratis.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Tegn område + eksporter</strong>
                    <p>Velg en preset (Tomt, Byggegrop, Grustak, Fasade, Veitrasé) eller juster selv. Lagre KMZ.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Overfør til DJI RC 2</strong>
                    <p>Innebygd veiviser viser deg hvordan du flytter KMZ-en via USB-C. Fly oppdraget.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>4</span>
                  <div>
                    <strong>(Valgfritt) Få bildene bearbeidet</strong>
                    <p>Send oss bildene, så bearbeider vi dem i Kubatur. Se <a href="#prosessering">bearbeiding</a> under.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <section id="pro" className={`${styles.product} ${styles.proSection}`}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Mini5Planner Pro</span>
              <h2 className={styles.productHeading}>Pro: terrengfølging og batterideling</h2>
              <p className={styles.productLead}>
                Gratisversjonen dekker det meste. Pro er for deg som flyr i kupert terreng
                eller over store områder. Du betaler én gang.
              </p>
            </div>

            <div className={styles.proGrid}>
              <article className={styles.useCase}>
                <h3 className={styles.useCaseTitle}>Dette får du med Pro</h3>
                <ul className={styles.useCasePoints}>
                  {proFeatures.map((p) => (
                    <li key={p}>
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>

              <div className={styles.proCard}>
                <p className={styles.proPrice}>
                  <span className={styles.proAmount}>199 kr</span> – engangskjøp, mva inkludert
                </p>
                <p className={styles.proPriceSmall}>Andre valutaer: €19 / $19 / £17</p>
                <a href={BUY_PRO_URL} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer">
                  Kjøp Pro
                  <Arrow />
                </a>
                <p className={styles.proNote}>
                  Betalingen håndteres av Stripe/Link, som også tar seg av mva.
                </p>
              </div>
            </div>

            <div className={styles.howBlock}>
              <h2 className={styles.howHeading}>Slik aktiverer du</h2>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Kjøp Pro</strong>
                    <p>Trykk «Kjøp Pro» og betal. Etterpå ser du lisensnøkkelen på skjermen, og du får den på e-post.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Åpne innstillingene</strong>
                    <p>Start Mini5Planner og gå til Innstillinger → Pro-lisens.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Lim inn nøkkelen</strong>
                    <p>Lim inn lisensnøkkelen og trykk «Aktiver». Pro-funksjonene er klare med en gang.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="prosessering" className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Trenger du volum eller kart etterpå?</h2>
            <p className={styles.ctaLead}>
              Send oss bildene fra flygingen, så bearbeider vi dem i Kubatur, vårt eget
              program for masseberegning. Du trenger ikke egen server eller lisens på
              fotogrammetriprogram.
            </p>
            <ul className={`${styles.useCasePoints} ${styles.ctaList}`}>
              {processingDeliveries.map((d) => (
                <li key={d.title}>
                  <Check />
                  <span>
                    <strong>{d.title}.</strong> {d.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className={styles.ctaNote}>
              Uten fastmerker er volumet normalt innenfor ca. ±2 % når du flyr kryss og
              skråpass. Eiendomsgrensene er veiledende og erstatter ikke oppmåling.
              Punktskyen er ikke grunnlag for stikning.
            </p>
            <p className={styles.ctaLead}>Pris etter omfang. Du får tilbud på e-post.</p>
            <a href={PROCESSING_MAILTO} className={styles.ctaButton}>
              Få tilbud
              <Arrow />
            </a>
          </div>
        </section>

        <section className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Ofte stilte spørsmål</span>
              <h2 className={styles.productHeading}>Spørsmål før du laster ned</h2>
            </div>

            <div className={styles.howBlock}>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Krever det DJI RC 2?</strong>
                    <p>Overføringsveiviseren er laget for DJI RC 2 og viser stegene via USB-C. Andre fjernkontroller har vi ikke testet.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Er det virkelig gratis?</strong>
                    <p>Ja. Appen er gratis å laste ned og bruke, også kommersielt, og alle 7 droner er med. Terrengfølging og batterideling krever Pro, som er et engangskjøp.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Mac eller Windows?</strong>
                    <p>Begge støttes. Knappene øverst på siden laster ned riktig fil for Mac eller Windows.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Sender appen data noe sted?</strong>
                    <p>Nei. Planene og bildene dine blir på maskinen din. Appen henter kart, adresser, høydedata og kraftledninger, og sjekker om det finnes oppdateringer. Lisensnøkkelen sjekkes lokalt.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Hvem står bak?</strong>
                    <p>AnleggTech AS i Bjørnafjorden. Vi lager programvare for anleggsbransjen, flyr drone selv og bearbeider bildene i Kubatur.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
