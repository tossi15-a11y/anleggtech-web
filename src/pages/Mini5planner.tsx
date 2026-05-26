import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './Programvare.module.css'

const ORDER_MAILTO = 'mailto:torstein@anleggtech.no?subject=Mini5Planner%20%E2%80%94%20bestill%20nedlasting&body=Hei%2C%0A%0AJeg%20vil%20gjerne%20laste%20ned%20Mini5Planner.%0A%0ANavn%3A%20___%0AFirma%3A%20___%0ADrone-modell%3A%20___%0AOperativsystem%3A%20Mac%20%2F%20Windows%0AHva%20vil%20du%20bruke%20det%20til%3A%20___%0A%0AHilsen%2C%0A___'

const audiences = [
  {
    title: 'Tomte-oppmålere',
    description:
      'Få nøyaktig fotogrammetri av tomter på 30 sekunder. Tegn polygon, eksporter KMZ, fly — punktsky klar for masseberegning.',
  },
  {
    title: 'Anleggsentreprenører',
    description:
      'Dokumenter byggegroper, fyllinger og masseuttak før, under og etter. Drone gjør jobben mens du driver maskinen.',
  },
  {
    title: 'Eiendomsutviklere',
    description:
      'Vis fram tomten i 3D for investorer og kjøpere. Profesjonelle punktskyer fra Mini 5 Pro — du trenger ikke leie inn drone-konsulent.',
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
      'Single grid, double grid (crosshatch) eller orbit',
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
      'Auto-update via GitHub Releases — du får bug-fixer og nye droner automatisk',
    ],
  },
]

const drones = [
  { name: 'DJI Mini 5 Pro', sensor: '1" CMOS', class: 'C0 — 249 g' },
  { name: 'DJI Mini 4 Pro', sensor: '1/1.3" CMOS', class: 'C0 — 249 g' },
  { name: 'DJI Air 3', sensor: '1/1.3" CMOS', class: 'C1' },
  { name: 'DJI Air 3S', sensor: '1" CMOS', class: 'C1' },
  { name: 'DJI Mavic 3', sensor: '4/3" CMOS', class: 'C2' },
  { name: 'DJI Mavic 3 Pro', sensor: '4/3" Hasselblad', class: 'C2' },
  { name: 'DJI Mavic 4 Pro', sensor: '4/3" 100 MP', class: 'C2' },
]

export default function Mini5planner() {
  return (
    <>
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
              Planlegg drone-oppdrag <span className={styles.accent}>på 30 sekunder</span>
            </h1>
            <p className={styles.subtitle}>
              Mini5Planner er en gratis Mac- og Windows-app som lager KMZ-flyveruter
              for DJI-droner. Tegn et område på kartet, velg en preset, eksporter til
              fjernkontrollen — og fly. Bygget i Bergen av Anleggtech AS.
            </p>
            <div className={styles.heroCtas}>
              <a
                href={ORDER_MAILTO}
                className={styles.ctaPrimary}
              >
                Bestill nedlasting
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#droner" className={styles.ctaSecondary}>
                Se støttede droner
              </a>
            </div>
            <p className={styles.heroSubnote}>
              Send oss en e-post med drone-modell og bruksområde, så får du tilgang
              til Mac- eller Windows-versjonen. Gratis å bruke.
            </p>
          </div>
        </section>

        <section id="mini5planner" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Slik bruker du det</span>
              <h2 className={styles.productHeading}>
                Tegn område → eksporter KMZ → fly → punktsky
              </h2>
              <p className={styles.productLead}>
                Mini5Planner er front-enden til en komplett drone-til-punktsky-flyt.
                Du planlegger og flyr, vi prosesserer hvis du vil.
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

            <div id="droner" className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Støttede DJI-droner</h2>
              <p className={styles.audienceLead}>
                7 modeller med riktige kamera-specs og maks-fart per drone — appen
                regner GSD og footprint automatisk basert på det du har.
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
                    <strong>Bestill via e-post</strong>
                    <p>Send oss drone-modell og bruksområde. Vi sender deg en lenke til Mac- eller Windows-versjonen.</p>
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
                    <strong>(Valgfritt) Få punktsky</strong>
                    <p>Send oss bildene — vi prosesserer punktsky og leverer LAS/LAZ-fil + 3D-modell.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <section id="prosessering" className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Trenger du punktsky etterpå?</h2>
            <p className={styles.ctaLead}>
              Vi prosesserer drone-bildene dine til ferdig punktsky, 3D-modell eller
              digital terrengmodell. Du trenger ikke å investere i WebODM-server eller
              Pix4D-lisens — du leverer bare bildene, vi tar resten.
            </p>
            <p className={styles.ctaLead}>
              Pris tilpasses prosjektets omfang. Ta kontakt for tilbud.
            </p>
            <a
              href="mailto:post@anleggtech.no?subject=Punktsky-prosessering%20etter%20Mini5Planner&body=Hei%2C%0A%0AJeg%20har%20brukt%20Mini5Planner%20til%20%C3%A5%20planlegge%20et%20oppdrag%20og%20%C3%B8nsker%20pris%20p%C3%A5%20punktsky-prosessering.%0A%0AOmfang%2Fkommentar%3A%20___%0A%0AHilsen%2C%0A___"
              className={styles.ctaButton}
            >
              Be om tilbud
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
                    <p>Anbefalt. KMZ-overføringen via USB-C funker best med RC 2 eller RC Pro. Andre fjernkontroller kan fortsatt bruke KMZ-filen med tredjeparts-verktøy som WaypointMap.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Er det virkelig gratis?</strong>
                    <p>Ja. Mini5Planner er gratis å laste ned og bruke kommersielt. Vi tjener penger på prosesserings-tjenestene rundt — ikke på selve verktøyet.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Mac eller Windows?</strong>
                    <p>Begge støttes. Si i bestillings-mailen hvilket operativsystem du bruker, så sender vi riktig versjon.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Sender appen data noe sted?</strong>
                    <p>Nei — alt arbeid skjer lokalt på din maskin. Eneste nettverkskall: Geonorge-adressesøk og automatisk versjonssjekk mot GitHub Releases.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>?</span>
                  <div>
                    <strong>Hvem står bak?</strong>
                    <p>Anleggtech AS i Bergen. Vi bygger programvare for anleggsbransjen og driver vår egen pipeline med drone, WebODM og terrengbehandling.</p>
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
