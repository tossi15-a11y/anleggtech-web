import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import Navbar from '../../components/Navbar'
import Seo, { BASE_URL } from '../../components/Seo'
import Footer from '../../components/Footer'
import LangSwitch from '../../components/LangSwitch'
import { Arrow, Check } from '../../components/Icons'
import {
  BUY_PRO_URL,
  DOWNLOAD_MAC_URL,
  DOWNLOAD_WINDOWS_URL,
  EN_PATH,
  GUIDE_AIR_3S_PATH,
  GUIDE_GRID_MISSION_PATH,
  GUIDE_LITCHI_ALTERNATIVE_PATH,
  GUIDE_PLANNER_COMPARISON_PATH,
  GUIDE_SKIPPED_PHOTOS_PATH,
  LANDING_ALTERNATES,
  RELEASES_URL,
} from '../../lib/mini5planner'
import styles from '../Programvare.module.css'
import own from './Mini5plannerEn.module.css'
import media from '../Mini5plannerMedia.module.css'

const PRO_DESCRIPTION =
  'One-time lifetime license: terrain following and battery split. Tax included.'

const faq = [
  {
    q: 'Does Mini5Planner make the map or the 3D model?',
    a: 'No. Mini5Planner plans the flight and exports the route as a KMZ file. Stitching the photos into an orthophoto, point cloud or 3D model is done afterwards in photogrammetry software such as WebODM/ODM, or by us if you send us the photos.',
  },
  {
    q: 'Do I need a DJI RC 2?',
    a: 'The transfer guide in the app is made for the DJI RC 2 and walks you through copying the KMZ over USB-C. We have not tested other remote controllers.',
  },
  {
    q: 'Which drones does it support?',
    a: 'Seven DJI drones: Mini 5 Pro, Mini 4 Pro, Air 3, Air 3S, Mavic 3, Mavic 3 Pro and Mavic 4 Pro, all in the free version. Only the Mini 5 Pro profile has been measured in the field. The others use published camera specs and an estimated photo interval, and you can calibrate them from your own photos with Calibrate / check flight.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. The app is free to download and use, also commercially, and all seven drones are included. Terrain following and battery split require Pro, which is a one-time purchase.',
  },
  {
    q: 'Mac or Windows?',
    a: 'Both. The buttons at the top of the page download the right file for Mac or Windows. The Mac version is a universal app for Apple silicon and Intel and needs macOS 11 or later.',
  },
  {
    q: 'Does it work outside Norway?',
    a: 'Yes. The map (OpenStreetMap and satellite) and route planning work anywhere, and terrain following uses the global Copernicus GLO-30 elevation model (30 m) outside Norway. Address search and the power line layer only cover Norway, so elsewhere you find your site by moving the map.',
  },
  {
    q: 'Does the app send my data anywhere?',
    a: 'No. Your plans and photos stay on your computer. The app downloads maps, addresses, elevation data and power lines, and checks for updates. The license key is checked locally.',
  },
  {
    q: 'Who makes it?',
    a: 'AnleggTech AS in Bjørnafjorden, Norway. We build software for the construction industry, fly drones ourselves and process the photos in our own software, Kubatur.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Mini5Planner',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS, Windows',
      inLanguage: 'en',
      url: `${BASE_URL}${EN_PATH}`,
      downloadUrl: RELEASES_URL,
      description:
        'Free Mac and Windows app that creates KMZ grid mapping missions for DJI Fly, built around the DJI Mini 5 Pro. Pro adds terrain following and battery split as a one-time purchase.',
      offers: [
        { '@type': 'Offer', name: 'Mini5Planner', price: '0', priceCurrency: 'USD' },
        ...[
          ['19', 'USD'],
          ['19', 'EUR'],
          ['17', 'GBP'],
          ['199', 'NOK'],
        ].map(([price, priceCurrency]) => ({
          '@type': 'Offer',
          name: 'Mini5Planner Pro',
          description: PRO_DESCRIPTION,
          price,
          priceCurrency,
          url: `${BASE_URL}${EN_PATH}#pro`,
        })),
      ],
      publisher: { '@type': 'Organization', name: 'AnleggTech AS', url: BASE_URL },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const useCases = [
  {
    title: 'Grid missions for photogrammetry',
    tagline: 'The right overlap without doing the math',
    description:
      'Mini5Planner works out line spacing and photo interval from your drone’s camera and the altitude you choose. You set front and side overlap yourself, for example 80% and 70%.',
    points: [
      'GSD and footprint update as you adjust',
      'Single grid or double grid (crosshatch)',
      'Gimbal straight down (−90°) or oblique (−70° or −45°), for example for facades',
    ],
  },
  {
    title: 'Mission templates',
    tagline: 'Small site, excavation, gravel pit, facade, road corridor',
    description:
      'Five ready-made templates for typical construction and survey jobs. Pick one and adjust it if you like.',
    points: [
      'Altitude, overlap, speed and gimbal angle are set for each job type',
      'Excavation sites are flown as a double grid with an oblique gimbal',
      'English or Norwegian interface, following your computer’s language',
    ],
  },
  {
    title: 'KMZ straight to the DJI RC 2',
    tagline: 'Built-in transfer guide',
    description:
      'Exports WPML 1.0.2 KMZ files that DJI Fly can run. A step-by-step guide in the app shows how to copy the KMZ to the DJI RC 2 over USB-C, on Windows and on Mac.',
    points: [
      'WPML 1.0.2, the same format DJI Pilot 2 uses',
      '7 DJI drones (Mini 5 Pro, Mini 4 Pro, Air 3/3S, Mavic 3/3 Pro/4 Pro)',
      'Updates install automatically',
    ],
  },
]

const freeTools = [
  {
    title: 'Calibrate / check flight',
    description:
      'Choose the photo folder after the flight. The app reads the EXIF metadata in the photos and shows how the flight actually went. Photos are not changed or sent anywhere.',
    points: [
      'Actual photo interval',
      'Camera profile from the photos',
      'Front overlap for every photo pair',
      'Weak spots shown on the map',
    ],
  },
  {
    title: 'Movable takeoff point (H)',
    description:
      'Drag the H marker to where the drone actually takes off. Battery estimates and terrain following (Pro) are calculated from that point.',
    points: [
      'A takeoff point you have moved yourself stays put',
      'With terrain following, the point must be confirmed before export',
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

const audiences = [
  {
    title: 'Site surveys',
    description:
      'Plan the flight over a plot. The photos can be processed into a point cloud for volume calculations.',
  },
  {
    title: 'Contractors',
    description:
      'Document excavations, fills and material pits before, during and after the work. The drone flies the route on its own while you watch from the ground.',
  },
  {
    title: 'Drone pilots',
    description:
      'Skip placing waypoints one by one in DJI Fly. Draw an area, adjust the overlap, export the KMZ to the DJI RC 2 and fly.',
  },
]

const proFeatures = [
  'Terrain following with Kartverket’s 1 m elevation model in Norway and the Copernicus GLO-30 model (30 m) everywhere else. The drone keeps the same height above the ground, also in hilly terrain. In steep terrain, keep a good margin: 30 m data can be off by 10–30 m.',
  'Battery split. Large missions are divided into legs that fit one battery each.',
  'Updates in v1.x are included.',
  'Lifetime license. No subscription.',
]

const processingDeliveries = [
  {
    title: 'Stockpile and heap volumes',
    description: 'PDF report with the volume measured against a base surface that follows the toe of the pile.',
  },
  {
    title: 'Orthophoto with property boundaries',
    description: 'GeoTIFF and JPG with boundaries from the Norwegian cadastre (Kartverket) on top. Norway only.',
  },
  {
    title: 'Point cloud (LAZ) and 3D model',
    description: 'For viewing, volumes and relative measurements.',
  },
]

const PROCESSING_MAILTO =
  'mailto:post@anleggtech.no?subject=' +
  encodeURIComponent('[Mini5Planner] Processing') +
  '&body=' +
  encodeURIComponent(
    'Hi,\n\nI have flown a mission with Mini5Planner and would like a quote for processing in Kubatur.\n\n' +
      'What do you need (volumes, orthophoto with property boundaries, point cloud/3D model): ___\n' +
      'Location/address: ___\n' +
      'Number of photos: ___\n\n' +
      'Best regards,\n___',
  )

const guides = [
  {
    path: GUIDE_SKIPPED_PHOTOS_PATH,
    title: 'Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)',
    description:
      'A 50 MP photo takes about 5 seconds to save. We planned 154 photos and got 89. Here is how to spot it and how to set the speed.',
  },
  {
    path: GUIDE_GRID_MISSION_PATH,
    title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly',
    description:
      'From drawing the area to checking the overlap afterwards: export a KMZ, load it on the DJI RC 2 and fly it in DJI Fly.',
  },
  {
    path: GUIDE_LITCHI_ALTERNATIVE_PATH,
    title: 'Litchi alternative for DJI Mini 5 Pro and the DJI RC 2',
    description:
      'Third-party flight apps need a DJI SDK, and the Mini 5 Pro has none. What Litchi Hub and Dronelink can do with it, and how KMZ files for DJI Fly fill the gap.',
  },
  {
    path: GUIDE_AIR_3S_PATH,
    title: 'How to plan a mapping mission for the DJI Air 3S',
    description:
      'DJI’s camera specs, GSD and photo spacing per altitude, and how to measure the real photo interval after your first flight.',
  },
  {
    path: GUIDE_PLANNER_COMPARISON_PATH,
    title: 'DJI grid mapping planners compared (November 2026)',
    description:
      'Seven planners that make KMZ files for DJI Fly, side by side: price, platform, grids, terrain following and the DJI RC 2.',
  },
]

const SCREENSHOTS = [
  { file: '1-single-grid.jpg', caption: 'Single grid with live statistics. Speed drops automatically because the Mini 5 Pro camera needs 5.2 s per 50 MP photo.', alt: 'Mini5Planner single grid mission over a building plot with GSD, photo count and flight time' },
  { file: '2-double-grid-excavation.jpg', caption: 'Double grid (crosshatch) with the Excavation site template: 50 m, 85/75 % overlap, oblique gimbal for 3D.', alt: 'Mini5Planner double grid crosshatch mission with the Excavation site template' },
  { file: '3-gravel-pit-battery-split.jpg', caption: 'Gravel pit template over a large area. The app shows the mission needs about two batteries and can split it (Pro).', alt: 'Mini5Planner gravel pit template over a large area with a battery split warning' },
  { file: '4-building-facade.jpg', caption: 'Building facade template: low altitude and a 45° gimbal around a house.', alt: 'Mini5Planner building facade template around a house' },
  { file: '5-road-corridor.jpg', caption: 'Road corridor template: a narrow strip along a road, flown as a single line.', alt: 'Mini5Planner road corridor template along a road' },
]

export default function Mini5plannerEn() {
  return (
    <>
      <Seo
        title="Mini5Planner – DJI Mini 5 Pro mapping and grid missions for DJI Fly"
        description="Free drone mapping planner for Mac and Windows. Draw an area and get a KMZ grid mission for DJI Fly. Built for the DJI Mini 5 Pro, works with 7 DJI drones."
        path={EN_PATH}
        lang="en"
        alternates={LANDING_ALTERNATES}
        jsonLd={jsonLd}
      />
      <Navbar lang="en" />
      <main className={styles.main}>

        <section id="download" className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={`${styles.backRow} ${styles.backRowSplit}`}>
              <span className={own.maker}>By AnleggTech AS, Norway</span>
              <LangSwitch current="en" />
            </div>
            <span className={styles.tag}>DJI Mini 5 Pro mapping</span>
            <h1 className={styles.title}>
              Draw the area. <span className={styles.accent}>Fly the grid in DJI Fly.</span>
            </h1>
            <p className={styles.subtitle}>
              Mini5Planner is a free drone mapping planner for Mac and Windows, built
              around the DJI Mini 5 Pro. Draw an area on the map and pick a template, and it
              creates a KMZ grid mission that you load on your remote controller and fly as a
              waypoint mission in DJI Fly.
            </p>
            <div className={`${styles.heroCtas} ${styles.downloadCtas}`}>
              <div className={styles.downloadOption}>
                <a href={DOWNLOAD_MAC_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'mac' })}>
                  Download free for Mac
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>Apple-notarized DMG.</p>
              </div>
              <div className={styles.downloadOption}>
                <a href={DOWNLOAD_WINDOWS_URL} className={styles.ctaPrimary} onClick={() => track('Nedlasting', { plattform: 'windows' })}>
                  Download free for Windows
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>
                  Windows shows a SmartScreen warning the first time. Click “More info”
                  and then “Run anyway”.
                </p>
              </div>
              <a href="#pro" className={styles.ctaSecondary}>
                See Mini5Planner Pro
              </a>
            </div>
            <p className={styles.heroSubnote}>
              Free to download and use. The installers are also on{' '}
              <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            <figure className={media.demo}>
              <video
                src="/videos/mini5planner-demo.mp4"
                poster="/images/mini5planner/1-single-grid.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Mini5Planner demo: drawing an area, switching to a double grid, picking the Excavation site template and opening the transfer guide"
              />
              <figcaption>Draw the area, pick a mission type or template, then copy the KMZ to the DJI RC 2.</figcaption>
            </figure>
          </div>
        </section>

        <section id="features" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>How it works</span>
              <h2 className={styles.productHeading}>
                Draw area → export KMZ → fly
              </h2>
              <p className={styles.productLead}>
                DJI Fly has waypoints, but no grid generator and no overlap calculator, so
                every point has to be placed by hand. Mini5Planner builds the grid for you.
                It makes the flight route only: the photos are stitched into an orthophoto,
                point cloud or 3D model afterwards in software such as WebODM, or you can
                send them to us.
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
              <h2 className={styles.audienceHeading}>Speed set by the camera, not just the map</h2>
              <p className={styles.audienceLead}>
                On the Mini 5 Pro, a 50 MP photo takes about 5 seconds to save. If a route
                asks for photos faster than that, the drone skips shots without any warning
                and the overlap collapses. On our first mapping flight, 154 planned photos
                became 89. Mini5Planner caps the mission speed so the camera keeps up, and
                tells you when it has lowered the speed.
              </p>
              <ul className={`${styles.useCasePoints} ${own.blockList}`}>
                <li>
                  <Check />
                  Measured on the Mini 5 Pro (5.2 s per 50 MP photo). The other drone
                  profiles use an estimated 2 s.
                </li>
                <li>
                  <Check />
                  After the change, two flights over the same site delivered 105 of 105
                  photos each, with 84% measured front overlap.
                </li>
              </ul>
              <Link to={GUIDE_SKIPPED_PHOTOS_PATH} className={own.textLink}>
                Read why the Mini 5 Pro skips photos <Arrow />
              </Link>
            </div>

            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Included free: check the flight afterwards</h2>
              <p className={styles.audienceLead}>
                Two tools that come with the free version.
              </p>
              <div className={styles.audienceGrid}>
                {freeTools.map((f) => (
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

            <div id="drones" className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>Supported DJI drones</h2>
              <p className={styles.audienceLead}>
                Seven models, all free. The app knows each drone’s camera and maximum speed
                and calculates GSD and footprint. Speed is set by how fast the camera saves
                photos. So far that has only been measured on the Mini 5 Pro; the other
                profiles are estimates until you calibrate them from your own photos.
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
              <h2 className={styles.audienceHeading}>Who is it for?</h2>
              <p className={styles.audienceLead}>
                For anyone who wants to plan photogrammetry flights without learning heavy
                tools like UgCS or paying for a subscription.
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
              <h2 className={styles.howHeading}>Getting started</h2>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Download the app</strong>
                    <p>Choose Mac or Windows at the top of the page. The app is free.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Draw an area and export</strong>
                    <p>Pick a template (Small site, Excavation site, Gravel pit, Building facade, Road corridor) or set the values yourself. Save the KMZ.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Transfer to the DJI RC 2</strong>
                    <p>The built-in guide shows how to copy the KMZ over USB-C. Then fly the mission in DJI Fly.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>4</span>
                  <div>
                    <strong>Process the photos</strong>
                    <p>Stitch them in photogrammetry software such as WebODM, or send them to us for <a href="#processing" className={own.inline}>processing</a>. The full walkthrough is in the <Link to={GUIDE_GRID_MISSION_PATH} className={own.inline}>grid mission guide</Link>.</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </section>

        <section id="screenshots" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Screenshots</span>
              <h2 className={styles.productHeading}>One app, five kinds of missions</h2>
            </div>
            <div className={media.gallery}>
              {SCREENSHOTS.map((shot) => (
                <figure key={shot.file} className={media.shot}>
                  <a href={`/images/mini5planner/${shot.file}`} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/mini5planner/${shot.file}`} alt={shot.alt} width={1400} height={872} loading="lazy" />
                  </a>
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pro" className={`${styles.product} ${styles.proSection}`}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Mini5Planner Pro</span>
              <h2 className={styles.productHeading}>Pro: terrain following and battery split</h2>
              <p className={styles.productLead}>
                The free version covers most jobs. Pro is for flying hilly terrain or large
                areas. You pay once.
              </p>
            </div>

            <div className={styles.proGrid}>
              <article className={styles.useCase}>
                <h3 className={styles.useCaseTitle}>What you get with Pro</h3>
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
                  <span className={styles.proAmount}>$19 / €19 / £17</span> – one-time purchase, tax included
                </p>
                <p className={styles.proPriceSmall}>In Norway: 199 NOK. Checkout picks the currency for your country.</p>
                <a href={BUY_PRO_URL} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer" onClick={() => track('Kjøp Pro')}>
                  Buy Pro
                  <Arrow />
                </a>
                <p className={styles.proNote}>
                  Payment is handled by Stripe (Link), which also takes care of VAT and
                  sales tax.
                </p>
              </div>
            </div>

            <div className={styles.howBlock}>
              <h2 className={styles.howHeading}>How to activate</h2>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Buy Pro</strong>
                    <p>Click “Buy Pro” and pay. Your license key is shown on screen afterwards and sent to you by email.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Open Settings</strong>
                    <p>Start Mini5Planner and click Settings (the gear at the top of the side panel) → Pro license.</p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Paste the key</strong>
                    <p>Copy the key (or the whole email) and click “Paste”. The app finds the key and activates Pro right away. The “Activate in Mini5Planner” button on the receipt page does the same.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section id="processing" className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaHeading}>Need volumes or a map afterwards?</h2>
            <p className={styles.ctaLead}>
              Send us the photos from your flight and we process them in Kubatur, our own
              software for volume calculations. You don’t need your own server or a
              photogrammetry license.
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
              Without ground control points, the volume is normally within about ±2%
              when you fly a double grid plus oblique passes. Property boundaries are
              indicative and do not replace a land survey. The point cloud is not suitable
              for setting out.
            </p>
            <p className={styles.ctaLead}>Priced by scope. You get a quote by email.</p>
            <a href={PROCESSING_MAILTO} className={styles.ctaButton}>
              Get a quote
              <Arrow />
            </a>
          </div>
        </section>

        <section id="guides" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Guides</span>
              <h2 className={styles.productHeading}>Mapping with the Mini 5 Pro and other DJI Fly drones</h2>
              <p className={styles.productLead}>
                What we learned flying mapping missions with the Mini 5 Pro, and how the tools
                compare. Useful whichever planner you use.
              </p>
            </div>
            <div className={styles.audienceGrid}>
              {guides.map((g) => (
                <Link key={g.path} to={g.path} className={`${styles.audienceCard} ${own.guideCard}`}>
                  <h3 className={styles.audienceCardTitle}>{g.title}</h3>
                  <p className={styles.audienceCardDesc}>{g.description}</p>
                  <span className={own.textLink}>
                    Read the guide <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.product} ${own.faqSection}`}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>FAQ</span>
              <h2 className={styles.productHeading}>Questions before you download</h2>
            </div>

            <div className={styles.howBlock}>
              <ol className={styles.howList}>
                {faq.map((f) => (
                  <li key={f.q}>
                    <span className={styles.howStep}>?</span>
                    <div>
                      <h3 className={own.faqQuestion}>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <p className={styles.trademark}>Mini5Planner is an independent product by AnleggTech AS. It is not affiliated with, endorsed by or sponsored by DJI. DJI, DJI Fly, DJI Mini and Mavic are trademarks of SZ DJI Technology Co., Ltd.</p>
      </main>
      <Footer lang="en" />
    </>
  )
}
