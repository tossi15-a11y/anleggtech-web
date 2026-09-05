import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import Pricing, { type PricingTier } from '../components/Pricing'
import styles from './Programvare.module.css'

const audiences = [
  {
    title: 'Anleggsledere',
    description:
      'Slipp å skrive referat etter byggemøtet. Notert lytter, transkriberer og lager profesjonelt referat med automatisk flagging av endringer og fristforlengelser.',
  },
  {
    title: 'Prosjektledere',
    description:
      'Du holder mange møter parallelt. Notert fanger NS 8405–8417-forhold du ellers ville glemt — og varsler om frister så du ikke bommer på 21-dagersregelen.',
  },
  {
    title: 'Byggherrekontakter',
    description:
      'Få strukturerte møtereferater rett etter møtet, med tydelig flagging av kontraktsmessige forhold som krever oppfølging.',
  },
  {
    title: 'HMS-ansvarlige',
    description:
      'Aktiver HMS-flagging og fang nesten-ulykker, SHA-avvik, SJA-krav og forskriftsforhold automatisk i alle vernerunder og byggemøter.',
  },
]

const useCases = [
  {
    title: 'Live byggemøter',
    tagline: 'Transkriberer mens dere snakker',
    description:
      'Sett mobilen på bordet og trykk start. Lyden strømmer via Noterts relé i RAM til Deepgram for live transkripsjon. Notert lagrer ingen avspillbar lydfil.',
    points: [
      'Sanntids-transkripsjon med diarization',
      'Fungerer på 2-timers byggemøter med flere talere',
      'Ingen avspillbar lydfil lagres hos Notert',
    ],
  },
  {
    title: 'NS-kontrakt-flagging',
    tagline: 'Aldri miss en 21-dagersfrist',
    description:
      'Notert lytter etter mulige endringer, fristforlengelser, vederlagsjusteringer og avvik fra spesifikasjon. Hvert flagg viser hva som ble sagt, av hvem, og hvilken paragraf det treffer i din valgte kontrakt.',
    points: [
      'Støtter NS 8405, 8406, 8407, 8408, 8415, 8416, 8417',
      'Paragraph-referanser per flagg (f.eks. "NS 8407 pkt. 31")',
      'Resolve-flyt med fritekst-notat for sporbarhet',
    ],
  },
  {
    title: 'HMS, NS 3420 og forskriftsflagg',
    tagline: 'Ett verktøy, alle kategorier',
    description:
      'Velg per møte hvilke flagg-kategorier som skal aktiveres. Et byggemøte slår på HMS automatisk. Vernerunde kan kombinere kontrakt + HMS + TEK17 + plan- og bygningsloven.',
    points: [
      'HMS: nesten-ulykker, SHA-avvik, sprengningsvarsel, SJA-krav',
      'NS 3420: mengde-, enhetspris-, beskrivelses-avvik',
      'Forskrift: TEK17, Plan- og bygningsloven',
    ],
  },
]

const notertTiers: PricingTier[] = [
  {
    name: 'Pilot',
    price: '0',
    unit: 'kr i 90 dager',
    priceNote: 'Dette er den eneste planen som er åpen akkurat nå',
    description: 'For de 5 første firmaene som vil bli referansekunder.',
    features: [
      '90 dagers gratis bruk',
      'Full tilgang til alt i Standard',
      'Tett oppfølging fra AnleggTech',
      'Påvirker produktveikartet direkte',
      'Krav: jevnlig bruk + ærlig feedback',
      'Lov til å lage anonymisert case study',
    ],
    highlighted: true,
    badge: 'Pilotprogram',
    cta: {
      label: 'Søk om pilot',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Pilot%20%E2%80%94%20s%C3%B8knad',
    },
  },
  {
    name: 'Standard',
    price: '499',
    unit: 'kr / bruker / mnd',
    priceNote: 'Under 50 kr per møte ved 10 byggemøter i måneden',
    description: 'For anleggs- og prosjektledere som vil ha automatisk referat fra alle møter.',
    features: [
      'Ubegrenset møter',
      'Alle NS-standarder (8405–8417)',
      'HMS- og forskriftsflagging',
      'Live transkripsjon på norsk',
      'Discord-varsel ved nytt referat',
      'PDF- og Markdown-eksport',
    ],
    cta: {
      label: 'Bestill 15-min demo',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Standard%20%E2%80%94%20demo',
    },
  },
  {
    name: 'Bedrift',
    price: '1 990',
    unit: 'kr / firma / mnd',
    priceNote: 'Tilsvarer 398 kr per bruker ved fem brukere',
    description: 'For entreprenører med flere prosjektledere, felles maler og egen profil på referatene.',
    features: [
      'Alt i Standard for inntil 5 brukere',
      'Felles fagvokabular for hele firmaet',
      'Egendefinerte mal-prompts',
      'Branding på PDF (logo, signatur)',
      'CRM-eksport (på forespørsel)',
      'Prioritert support og Teams-brukerstøtte',
    ],
    cta: {
      label: 'Ta kontakt',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Bedrift%20%E2%80%94%20info',
    },
  },
]

export default function NotertPage() {
  return (
    <>
      <Seo
        title="Notert – AI-møtereferat med NS- og HMS-flagging | AnleggTech AS"
        description="Notert transkriberer byggemøter live og flagger NS 8405–8417-forhold og HMS-avvik. Ingen avspillbar lydfil lagres hos Notert."
        path="/notert"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Notert',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description:
            'AI-referent for byggebransjen: live transkripsjon av byggemøter med automatisk flagging av NS-kontraktsforhold og HMS-avvik.',
          publisher: { '@type': 'Organization', name: 'AnleggTech AS', url: 'https://www.anleggtech.no' },
        }}
      />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.backRow}>
              <Link to="/" className={styles.backLink}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M11 4L7 8l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Tilbake til AnleggTech
              </Link>
            </div>
            <span className={styles.tag}>AI-referent</span>
            <h1 className={styles.title}>
              Møtereferater <span className={styles.accent}>som forstår byggeplassen</span>
            </h1>
            <p className={styles.subtitle}>
              Notert er en AI-referent bygget for anleggsbransjen. Live transkripsjon
              av byggemøter, befaringer og vernerunder, med automatisk flagging av
              kontraktsmessige forhold (NS 8405–8417), HMS-avvik og forskriftspunkter.
              Lyden strømmer via Noterts relé til tale-til-tekst; Notert lagrer ingen
              avspillbar lydfil.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://notert-web.vercel.app"
                className={styles.ctaPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Se appen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#priser" className={styles.ctaSecondary}>
                Se priser
              </a>
            </div>
          </div>
        </section>

        <section id="notert" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Slik fungerer det</span>
              <h2 className={styles.productHeading}>
                Live transkripsjon → automatisk flagging → ferdig referat
              </h2>
              <p className={styles.productLead}>
                Notert lytter på møtet via mikrofon eller opplastet transkripsjon,
                kjenner igjen norsk fagspråk, og produserer profesjonelt referat med
                strukturert flagging av hva som krever oppfølging — alt før dere går
                fra møtet.
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
                Alle som holder eller deltar i strukturerte byggeplassmøter, og som
                trenger sporbar dokumentasjon med kontrakts­messige og HMS-relaterte
                flagg.
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
                    <strong>Opprett møte</strong>
                    <p>Velg møtetype, kontraktsstandard (NS 8405–8417) og hvilke flagg-kategorier som er aktive.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Trykk start</strong>
                    <p>Mobil på bordet. Lyden strømmer via Noterts relé til Deepgram for live transkripsjon; Notert lagrer ingen avspillbar lydfil.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Få ferdig referat</strong>
                    <p>Etter møtet får du strukturert referat med flagg gruppert per kategori. Discord-varsel og PDF-eksport.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <Pricing
          heading="Enkel pris, ingen overraskelser"
          lead="Ubegrenset møter i alle planer. Pilot er inngangen i dag — de betalte planene gjelder fra lansering."
          tiers={notertTiers}
          pilotNote="Fortsatt 5 piloter tilgjengelig — AnleggTech følger personlig opp alle piloter de første 90 dagene."
          accentColor="#f59e0b"
        />

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Klar for å prøve Notert?</h2>
            <p className={styles.ctaLead}>
              15-minutters demo via Microsoft Teams. Vi viser deg flyten på et ekte
              byggemøte og diskuterer hvordan det passer i din arbeidshverdag.
            </p>
            <a
              href="mailto:torstein@anleggtech.no?subject=Notert%20%E2%80%94%20demo%2Finfo&body=Hei%2C%0A%0AJeg%20vil%20gjerne%20se%20en%20demo%20av%20Notert.%20Mitt%20firma%20er%20___%2C%20og%20vi%20har%20typisk%20___%20byggem%C3%B8ter%20i%20uka.%0A%0A"
              className={styles.ctaButton}
            >
              Bestill demo via e-post
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
