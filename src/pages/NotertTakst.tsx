import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import Pricing, { type PricingTier } from '../components/Pricing'
import styles from './Programvare.module.css'

const audiences = [
  {
    title: 'Takstmenn (boligsalg)',
    description:
      'Slipp å skrive notatene på nytt om kvelden. Notert Takst lytter mens du går gjennom boligen, og leverer strukturert befaringsnotat med undersøkelsespunktene i den rekkefølgen du tok dem.',
  },
  {
    title: 'Skadetakstmenn',
    description:
      'Fuktmålinger med verdi, instrument og målepunkt fanges ordrett. Bygning og innbo holdes fra hverandre, og alt som ble sagt om skadetidspunkt følger med begrunnelsen.',
  },
  {
    title: 'Våtromskontrollører',
    description:
      'Fall mot sluk, membran, gjennomføringer og ventilasjon flagges mot våtromsnormen. Måleverdier for fall gjengis slik de ble lest opp.',
  },
  {
    title: 'Bygningsingeniører',
    description:
      'Tilstandsanalyse etter NS 3424 med observasjoner strukturert per bygningsdel, og analysenivået registrert hvis det ble oppgitt.',
  },
]

const useCases = [
  {
    title: 'Live befaring',
    tagline: 'Transkriberer mens du går gjennom boligen',
    description:
      'Mobilen i lomma, trykk start. Notert Takst tar opp, transkriberer live med norsk fagspråk fra NS 3600 og våtromsnormen, og produserer ferdig befaringsnotat når du er ute igjen. Fungerer med hansker på i kjelleren.',
    points: [
      'Sanntids-transkripsjon med gjenkjenning av flere talere',
      'Mobile-first — bygget for å brukes stående, ikke ved skrivebordet',
      'Lydopptaket lagres ikke — lyden strømmes via Noterts relé og skrives aldri til disk',
    ],
  },
  {
    title: 'TG-kandidater, ikke tilstandsgrader',
    tagline: 'Du signerer — derfor setter du graden',
    description:
      'Notert Takst flagger forhold som bør vurderes for TG2 eller TG3, med det ordrette utsagnet som utløste flagget. Den setter aldri graden selv. Tilstandsgrader har rettsvirkning etter avhendingsloven, og ansvaret ligger hos takstmannen som signerer rapporten.',
    points: [
      'Kandidat til TG2 og TG3 — alltid merket som forslag som må verifiseres',
      'Hvert flagg viser sitatet fra befaringen og hvor sikkert det er forankret',
      'Henvisning til undersøkelsespunkt der det er entydig, f.eks. «NS 3600 pkt. 5.3»',
    ],
  },
  {
    title: 'Fukt, dokumentasjon og BVN-avvik',
    tagline: 'Seks befaringstyper, egne flagg for hver',
    description:
      'Velg befaringstype når du starter, så tilpasser Notert Takst hva den ser etter. En boligsalgsbefaring følger NS 3600 og fanger fravikelsesgrunn hvis hulltaking ikke ble gjort. En skadebefaring skiller brann-, røyk- og slukkevannsone.',
    points: [
      'Fuktavvik med måleverdi, instrument og referansepunkt',
      'Dokumentasjonsmangler og «hulltaking bør vurderes»',
      'Avvik fra våtromsnormen med BVN-referanse',
    ],
  },
]

const takstTiers: PricingTier[] = [
  {
    name: 'Beta',
    price: '0',
    unit: 'kr i 90 dager',
    priceNote: 'Dette er den eneste planen som er åpen akkurat nå',
    description: 'Notert Takst er i lukket beta. Vi tar inn et lite antall takstmenn av gangen.',
    features: [
      '90 dagers gratis bruk',
      'Full tilgang til alt i Standard',
      'Tett oppfølging fra AnleggTech',
      'Påvirker produktveikartet direkte',
      'Krav: jevnlig bruk + ærlig feedback',
      'Lov til å lage anonymisert case study',
    ],
    highlighted: true,
    badge: 'Lukket beta',
    cta: {
      label: 'Søk om betatilgang',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Takst%20Beta%20%E2%80%94%20s%C3%B8knad',
    },
  },
  {
    name: 'Standard',
    price: '499',
    unit: 'kr / bruker / mnd',
    priceNote: 'Under 25 kr per befaring ved 20 befaringer i måneden',
    description: 'For takstmenn som vil ha strukturert befaringsnotat fra hver eneste befaring.',
    features: [
      'Ubegrenset befaringer',
      'Alle seks befaringstyper',
      'Flagging mot NS 3600, NS 3424 og BVN',
      'Live transkripsjon på norsk',
      'Fuktavvik og dokumentasjonsmangler',
      'PDF- og Markdown-eksport',
    ],
    cta: {
      label: 'Bestill 15-min demo',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Takst%20Standard%20%E2%80%94%20demo',
    },
  },
  {
    name: 'Kontor',
    price: '1 990',
    unit: 'kr / kontor / mnd',
    priceNote: 'Tilsvarer 398 kr per bruker ved fem takstmenn',
    description: 'For takstkontor med flere takstmenn, felles fagspråk og egne rapportmaler.',
    features: [
      'Alt i Standard for inntil 5 brukere',
      'Felles fagvokabular for hele kontoret',
      'Egendefinerte mal-prompts',
      'Branding på PDF (logo, signatur)',
      'Eksport til takstsystem (på forespørsel)',
      'Prioritert support',
    ],
    cta: {
      label: 'Ta kontakt',
      href: 'mailto:torstein@anleggtech.no?subject=Notert%20Takst%20Kontor%20%E2%80%94%20info',
    },
  },
]

export default function NotertTakstPage() {
  return (
    <>
      <Seo
        title="Notert Takst – AI-befaringsassistent for takstmenn | AnleggTech AS"
        description="Notert Takst transkriberer befaringen live og flagger fuktavvik, dokumentasjonsmangler og kandidater til TG2/TG3 mot NS 3600, NS 3424 og våtromsnormen. Lydopptaket lagres ikke."
        path="/notert-takst"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Notert Takst',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Android',
          description:
            'AI-befaringsassistent for takstmenn: live transkripsjon av befaringer med automatisk flagging av fuktavvik, dokumentasjonsmangler og kandidater til TG2/TG3.',
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
            <span className={styles.tag}>AI-befaringsassistent</span>
            <h1 className={styles.title}>
              Befaringsnotat <span className={styles.accent}>som forstår boligen</span>
            </h1>
            <p className={styles.subtitle}>
              Notert Takst er en AI-assistent bygget for takstmenn. Live transkripsjon
              av boligsalgsbefaringer, skadetakst, våtromskontroll og tilstandsanalyse,
              med automatisk flagging av fuktavvik, dokumentasjonsmangler og kandidater
              til TG2/TG3. Lydopptaket lagres ikke.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://notert-takst.vercel.app"
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

        <section id="notert-takst" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Slik fungerer det</span>
              <h2 className={styles.productHeading}>
                Live transkripsjon → avviksflagging → ferdig befaringsnotat
              </h2>
              <p className={styles.productLead}>
                Notert Takst lytter mens du går befaringen, kjenner igjen norsk
                takstfaglig språk fra NS 3600 og våtromsnormen, og produserer
                strukturert notat med flagging av hva som må følges opp — før du
                setter deg i bilen.
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
                Alle som går befaring og må levere sporbar dokumentasjon etterpå —
                der det du observerte på stedet skal kunne gjenfinnes i rapporten.
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
                    <strong>Velg befaringstype</strong>
                    <p>Boligsalgsbefaring, skadebefaring vann eller brann, våtromskontroll, tilstandsanalyse eller reklamasjonsbefaring.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Trykk start og gå befaringen</strong>
                    <p>Snakk som du pleier. Lyden strømmes til tale-til-tekst via Noterts relé og lagres ikke som opptak.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Få notat med flagg</strong>
                    <p>Strukturert befaringsnotat, flagg gruppert per kategori med sitat og kilde, og en liste over det som gjenstår.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <Pricing
          heading="Enkel pris, ingen overraskelser"
          lead="Ubegrenset befaringer i alle planer. Beta er inngangen i dag — de betalte planene gjelder fra lansering."
          tiers={takstTiers}
          pilotNote="Notert Takst er i lukket beta — AnleggTech følger personlig opp alle betabrukere de første 90 dagene."
          accentColor="#3b82f6"
        />

        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Klar for å prøve Notert Takst?</h2>
            <p className={styles.ctaLead}>
              15-minutters demo via Microsoft Teams. Vi viser deg flyten på en ekte
              befaring og diskuterer hvordan den passer inn i rapportskrivingen din.
            </p>
            <a
              href="mailto:torstein@anleggtech.no?subject=Notert%20Takst%20%E2%80%94%20demo%2Finfo&body=Hei%2C%0A%0AJeg%20vil%20gjerne%20se%20en%20demo%20av%20Notert%20Takst.%20Mitt%20firma%20er%20___%2C%20og%20jeg%20g%C3%A5r%20typisk%20___%20befaringer%20i%20uka.%0A%0A"
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
