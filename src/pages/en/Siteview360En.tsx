import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { track } from '@vercel/analytics'
import Navbar from '../../components/Navbar'
import Seo, { BASE_URL } from '../../components/Seo'
import Footer from '../../components/Footer'
import { Arrow, Check } from '../../components/Icons'
import {
  SV_ALTERNATES,
  SV_BUY_PRO_URL,
  SV_DEMO_URL,
  SV_EN_PATH,
  SV_GUIDE_COMPARISON_PATH,
  SV_GUIDE_DOCUMENT_SITE_PATH,
  SV_NB_PATH,
  SV_RELEASES_URL,
  SV_TRADEMARK,
} from '../../lib/siteview360'
import styles from '../Programvare.module.css'
import shared from './Mini5plannerEn.module.css'
import media from '../Mini5plannerMedia.module.css'
import own from './Siteview360En.module.css'

const PRO_DESCRIPTION =
  'One-time purchase: unlimited tours and images, before/after comparison, your company name and logo on shared tours, exports and reports, and all 1.x updates. Tax included.'

const downloadEvent = (plattform: string) => () => track('SiteView360 nedlasting', { plattform })

// a er ren tekst til FAQPage i strukturert data; body vises på siden når svaret trenger lenker
const faq: { q: string; a: string; body?: ReactNode }[] = [
  {
    q: 'Do I need a 360 camera?',
    a: 'No. From version 1.3.0 you can also use ordinary video from a phone. A 360 camera gives a tour where you can look in every direction at each stop. Phone video gives a tour of ordinary images you step through, without looking around. Notes, sharing and export work the same way for both.',
  },
  {
    q: 'Which 360 cameras work?',
    a: 'SiteView360 reads the exported video file, not the camera. If the camera’s own app can export a stitched 360 video as MP4 in 2:1 (equirectangular), SiteView360 can use it. Raw .insv files from Insta360 cameras must be exported in Insta360 Studio first. Our own recordings are from an Insta360 camera, exported with Insta360 Studio.',
  },
  {
    q: 'Do I need GPS?',
    a: 'No, a GPS track (GPX) is optional. With it, the images are placed on the map and the tour gets a minimap. Without it, the tour is a sequence of images you step through. If the camera clock does not match the track, SiteView360 warns you and you can adjust the offset.',
  },
  {
    q: 'Does anything leave my computer?',
    a: 'No. Projects, tours and images are stored on your own computer. There is no account and no cloud, and nothing is uploaded. Shared tours and exports load nothing from the internet except the map tiles from OpenStreetMap.',
  },
  {
    q: 'How do other people see a tour?',
    a: 'Three ways. A QR code opens the tour on a phone that is on the same Wi‑Fi as your computer. The HTML export is a folder with the whole tour that you can upload to any static web host; the demo on this page is one. Or make a PDF report.',
  },
  {
    q: 'Does SiteView360 place images on a floor plan?',
    a: 'No. It places images on a map from the GPS track. There are no floor plans, no BIM and no automatic indoor positioning. Several cloud services do this; our comparison of six of them is linked below.',
    body: (
      <p>
        No. It places images on a map from the GPS track. There are no floor plans, no BIM
        and no automatic indoor positioning. Several cloud services do this. See{' '}
        <Link to={SV_GUIDE_COMPARISON_PATH} className={shared.inline}>
          Street View-style site documentation tools compared
        </Link>
        .
      </p>
    ),
  },
  {
    q: 'Can several people work on the same project?',
    a: 'Not inside the app. SiteView360 runs on one computer and has no shared workspace. You share the result as a QR code, an HTML folder or a PDF report.',
  },
  {
    q: 'Does it blur faces?',
    a: 'No. Think about who is in the images before you share a tour. In our demo, faces were blurred before we published it.',
  },
  {
    q: 'Is Pro a subscription?',
    a: 'No. Pro is a one-time purchase: €89, $99, £79 or 990 NOK, tax included, with all 1.x updates. The license key comes by email and is checked on your computer, without going online.',
  },
  {
    q: 'Who makes it?',
    a: 'AnleggTech AS in Bjørnafjorden, Norway. We build software for the construction industry. SiteView360 is in English and Norwegian.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'SiteView360',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'macOS 13 or later, Windows 10 and 11 (64-bit)',
      softwareVersion: '1.3.0',
      inLanguage: 'en',
      url: `${BASE_URL}${SV_EN_PATH}`,
      downloadUrl: SV_RELEASES_URL,
      screenshot: `${BASE_URL}/images/siteview360/viewer.webp`,
      description:
        'Desktop app for Mac and Windows that turns a 360 video of a site walk into a Street View-style tour for construction site documentation. Runs locally, with no account and no cloud. Pro is a one-time purchase.',
      offers: [
        { '@type': 'Offer', name: 'SiteView360 free edition', price: '0', priceCurrency: 'USD' },
        ...[
          ['99', 'USD'],
          ['89', 'EUR'],
          ['79', 'GBP'],
          ['990', 'NOK'],
        ].map(([price, priceCurrency]) => ({
          '@type': 'Offer',
          name: 'SiteView360 Pro',
          description: PRO_DESCRIPTION,
          price,
          priceCurrency,
          url: `${BASE_URL}${SV_EN_PATH}#pro`,
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

const features = [
  {
    title: 'A tour you click through',
    tagline: 'Street View-style, for your own site',
    description:
      'Every image is a full 360° view. Arrows in the image take you to the next or previous place, and the view keeps pointing the same way as you move.',
    points: [
      'A minimap with the track when you add a GPS track',
      'A compass, and a timeline to jump anywhere in the walk',
      'Notes pinned to a point in the image',
    ],
  },
  {
    title: 'Projects, tours and a map',
    tagline: 'Before, during and after',
    description:
      'A project can hold several tours of the same site, for example before, during and after the work. The map page shows all your projects.',
    points: [
      'Several tours in each project',
      'A map page with every project',
      'Before/after: two tours side by side (Pro)',
    ],
  },
  {
    title: 'Share without a cloud',
    tagline: 'QR code, HTML folder or PDF',
    description:
      'The app uploads nothing. You decide how a tour leaves your computer.',
    points: [
      'QR code for phones on the same Wi‑Fi',
      'HTML export: a folder you can put on any static web host',
      'PDF report',
    ],
  },
]

const useCases = [
  {
    title: 'Condition before work starts',
    description:
      'Walk the site and its surroundings before digging, blasting or demolition, so you have a record of how it looked.',
  },
  {
    title: 'Progress for the client',
    description:
      'Record a new tour every week or month. The client follows the work without travelling to the site.',
  },
  {
    title: 'Final documentation',
    description:
      'A walk through the finished site to keep with the other project documentation.',
  },
  {
    title: 'Disputes and insurance claims',
    description:
      'When there is disagreement about damage or about what was there before, the tour shows how the site looked when you walked it.',
  },
  {
    title: 'Health and safety',
    description:
      'Show how the site is set up: fencing, access routes and storage areas, for example as part of a safety round.',
  },
  {
    title: 'Handover',
    description:
      'Give the owner or the next contractor a walk through the site as you leave it.',
  },
]

const requirements = [
  {
    title: 'Mac',
    description: 'macOS 13 or later, Apple silicon or Intel. Signed and notarized by Apple.',
  },
  {
    title: 'Windows',
    description:
      'Windows 10 or 11, 64-bit. The installer is not code-signed yet, so Windows may show “Windows protected your PC”. Click “More info” and then “Run anyway”.',
  },
  {
    title: '360 video',
    description:
      'A stitched 360 video in MP4, 2:1 (equirectangular), exported from the camera’s own app, for example Insta360 Studio. Raw .insv files and ordinary flat video are not accepted.',
  },
  {
    title: 'GPS track (optional)',
    description:
      'A GPX file. With it, the images are placed on the map and the tour gets a minimap.',
  },
  {
    title: 'Languages',
    description: 'English and Norwegian.',
  },
  {
    title: 'Viewing shared tours',
    description: 'A web browser, on a computer or a phone. No app and no account needed.',
  },
]

const freePoints = [
  'One tour with up to 60 images: about five minutes of walking with 5 seconds between images',
  'Every feature except the Pro ones, including the map, notes, QR code, HTML export and PDF report',
  'Shared tours, exports and reports are marked “Made with SiteView360”',
]

const proPoints = [
  'Unlimited tours and images',
  'Before/after comparison of two tours side by side',
  'Your company name and logo on shared tours, exports and reports',
  'All 1.x updates',
]

const guides = [
  {
    path: SV_GUIDE_DOCUMENT_SITE_PATH,
    title: 'How to document a construction site with a 360 camera',
    description:
      'Step by step: plan the walk, record, export a stitched 2:1 MP4 and a GPX track from the camera’s app, import, add notes and share.',
  },
  {
    path: SV_GUIDE_COMPARISON_PATH,
    title: 'Street View-style site documentation tools compared (November 2026)',
    description:
      'SiteView360, OpenSpace, Matterport, Kuula, CloudPano, HoloBuilder and Cupix side by side, from each maker’s own pages.',
  },
]

const SCREENSHOTS = [
  {
    file: 'detail.png',
    caption: 'A project with its tours, and buttons for export, comparison, QR sharing and a new tour.',
    alt: 'SiteView360 project page for a garden and plot survey with one tour of 13 images',
  },
  {
    file: 'map.png',
    caption: 'The map page with the route of a tour that has a GPS track.',
    alt: 'SiteView360 map page with a short route drawn on an OpenStreetMap map',
  },
  {
    file: 'upload.png',
    caption: 'New tour: drop in the exported 360 video and a GPX track if you have one, and choose the seconds between images.',
    alt: 'SiteView360 new tour form with fields for tour name, 360 video, GPX track and seconds between images',
  },
]

function Demo() {
  const [open, setOpen] = useState(false)
  return (
    <figure className={own.demo}>
      <div className={`${own.demoFrame} ${open ? own.demoFrameOpen : ''}`}>
        {open ? (
          <iframe src={SV_DEMO_URL} title="SiteView360 demo tour" allow="fullscreen" allowFullScreen />
        ) : (
          <a
            href={SV_DEMO_URL}
            className={own.demoPoster}
            onClick={(e) => {
              e.preventDefault()
              setOpen(true)
              track('SiteView360 demo', { visning: 'innebygd' })
            }}
          >
            <img
              src="/images/siteview360/viewer.webp"
              alt="The tour viewer in SiteView360 with an arrow to the next image, a minimap with the track and a compass"
              width={1400}
              height={868}
              loading="lazy"
            />
            <span className={own.demoPlay}>
              Walk through the demo
              <Arrow />
            </span>
          </a>
        )}
      </div>
      <div className={own.demoBar}>
        <figcaption>
          {open
            ? 'Drag to look around. Click the arrow in the image, or use Previous and Next. Each image is about 1 MB and loads when you get to it.'
            : 'The viewer in SiteView360: an arrow to the next image, a minimap with the track, a compass and a timeline. Click to load the exported demo tour here.'}
        </figcaption>
        <a
          href={SV_DEMO_URL}
          target="_blank"
          rel="noopener"
          className={own.demoLink}
          onClick={() => track('SiteView360 demo', { visning: 'ny fane' })}
        >
          Open the demo in a new tab <Arrow />
        </a>
      </div>
    </figure>
  )
}

export default function Siteview360En() {
  return (
    <>
      <Seo
        title="SiteView360 – Street View-style 360 site documentation for Mac and Windows"
        description="Walk the site with a 360 camera or your phone and get a tour you can click through. Desktop app for Mac and Windows: local, no account, Pro is a one-time purchase."
        path={SV_EN_PATH}
        lang="en"
        alternates={SV_ALTERNATES}
        jsonLd={jsonLd}
      />
      <Navbar lang="en" basePath={SV_EN_PATH} />
      <main className={styles.main}>

        <section id="download" className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={`${styles.backRow} ${styles.backRowSplit}`}>
              <span className={shared.maker}>By AnleggTech AS, Norway</span>
              <Link to={SV_NB_PATH} className={styles.backLink} hrefLang="nb" lang="nb">
                På norsk
              </Link>
            </div>
            <span className={styles.tag}>360° site documentation</span>
            <h1 className={styles.title}>
              Film the site with a 360 camera or your phone. <span className={styles.accent}>Get a tour you can click through.</span>
            </h1>
            <p className={styles.subtitle}>
              SiteView360 turns a video of a site walk into a Street View-style tour. You
              step from place to place, with a 360 camera you can look in every direction, and
              with a GPS track you see on a map where each image was taken. Use it to record the condition before work starts, show
              progress to the client and keep a record at handover. It is a desktop app for
              Mac and Windows, and everything stays on your own computer.
            </p>
            <div className={`${styles.heroCtas} ${styles.downloadCtas}`}>
              <div className={styles.downloadOption}>
                <a href={SV_RELEASES_URL} className={styles.ctaPrimary} onClick={downloadEvent('mac')}>
                  Download for Mac
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>
                  macOS 13 or later, Apple silicon and Intel. Signed and notarized by Apple.
                  Pick the file that ends in universal.dmg.
                </p>
              </div>
              <div className={styles.downloadOption}>
                <a href={SV_RELEASES_URL} className={styles.ctaPrimary} onClick={downloadEvent('windows')}>
                  Download for Windows
                  <Arrow />
                </a>
                <p className={styles.downloadNote}>
                  Windows 10 or 11, 64-bit. Pick the file that ends in .exe. The installer is
                  not code-signed yet: if Windows says “Windows protected your PC”, click “More
                  info” and then “Run anyway”.
                </p>
              </div>
              <a href="#demo" className={styles.ctaSecondary}>
                Walk through the demo
              </a>
            </div>
            <p className={styles.heroSubnote}>
              Both buttons open the latest release on{' '}
              <a href={SV_RELEASES_URL} target="_blank" rel="noopener noreferrer">GitHub</a>. The
              free edition makes one tour with up to 60 images. <a href="#pro">Pro</a> is a
              one-time purchase.
            </p>
          </div>
        </section>

        <section id="demo" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Demo</span>
              <h2 className={styles.productHeading}>Walk through a real tour</h2>
              <p className={styles.productLead}>
                This tour was made in SiteView360 and exported with its HTML export. It has 13
                images from a short walk through a garden, recorded with an Insta360 camera
                and a GPS track on 13 November 2026. Faces were blurred before we published
                it; SiteView360 does not blur faces.
              </p>
            </div>
            <Demo />
          </div>
        </section>

        <section id="features" className={styles.product}>
          <div className={`container ${styles.productInner}`}>

            <div className={styles.productHeader}>
              <span className={styles.productLabel}>How it works</span>
              <h2 className={styles.productHeading}>Record → import → share</h2>
              <p className={styles.productLead}>
                You need a 360 camera whose app can export a stitched 360 video, or a phone
                that records ordinary video. The rest happens on your computer, without an account or a cloud service.
              </p>
            </div>

            <div className={styles.howBlock}>
              <ol className={styles.howList}>
                <li>
                  <span className={styles.howStep}>1</span>
                  <div>
                    <strong>Walk the site with a 360 camera or your phone</strong>
                    <p>
                      Record while you walk at a steady pace. If the camera or its app records
                      GPS, the images can be placed on the map afterwards.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>2</span>
                  <div>
                    <strong>Export and import</strong>
                    <p>
                      Export the recording from the camera’s own app, for example Insta360
                      Studio, as a stitched 360 video in MP4, 2:1. Drop it into SiteView360,
                      with a GPX track if you have one. The app takes out one image every 5
                      seconds (you can choose from 0.5 to 60) and saves it as WebP, up to
                      8192 pixels wide, plus a 4096-pixel copy for phones.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.howStep}>3</span>
                  <div>
                    <strong>Walk through and share</strong>
                    <p>
                      Click through the tour and pin notes to things in the images. Share it
                      with a QR code on the local Wi‑Fi, as an HTML folder for any web host,
                      or as a PDF report.
                    </p>
                  </div>
                </li>
              </ol>
              <p className={own.note}>
                One example: a 62-second 8K recording from an Insta360 camera became 13 images
                in 100 seconds on a Mac Studio. The time depends on the video and the
                computer. The full walkthrough is in the{' '}
                <Link to={SV_GUIDE_DOCUMENT_SITE_PATH} className={shared.inline}>step-by-step guide</Link>.
              </p>
            </div>

            <div className={styles.useCases}>
              {features.map((f) => (
                <article key={f.title} className={styles.useCase}>
                  <h3 className={styles.useCaseTitle}>{f.title}</h3>
                  <p className={styles.useCaseTagline}>{f.tagline}</p>
                  <p className={styles.useCaseDesc}>{f.description}</p>
                  <ul className={styles.useCasePoints}>
                    {f.points.map((p) => (
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
              <h2 className={styles.audienceHeading}>Local: no account, no cloud</h2>
              <p className={styles.audienceLead}>
                Projects, tours and images are stored on your own computer. There is no
                account and no cloud, and the app uploads nothing. You choose what to share
                and with whom.
              </p>
              <ul className={`${styles.useCasePoints} ${shared.blockList}`}>
                <li>
                  <Check />
                  Works without an internet connection. Shared tours and exports load
                  nothing from the internet except the map tiles from OpenStreetMap.
                </li>
                <li>
                  <Check />
                  The Pro license key is checked on your computer, without going online.
                </li>
                <li>
                  <Check />
                  Pro is paid once. No subscription.
                </li>
              </ul>
              <Link to={SV_GUIDE_COMPARISON_PATH} className={shared.textLink}>
                How this compares with cloud tools <Arrow />
              </Link>
            </div>

            <div className={styles.audienceBlock}>
              <h2 className={styles.audienceHeading}>What it is used for</h2>
              <p className={styles.audienceLead}>
                For contractors, builders and project managers who change a site and need to
                show how it looked before, during or after.
              </p>
              <div className={styles.audienceGrid}>
                {useCases.map((u) => (
                  <div key={u.title} className={styles.audienceCard}>
                    <h3 className={styles.audienceCardTitle}>{u.title}</h3>
                    <p className={styles.audienceCardDesc}>{u.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section id="screenshots" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Screenshots</span>
              <h2 className={styles.productHeading}>Projects, map and a new tour</h2>
            </div>
            <div className={media.gallery}>
              {SCREENSHOTS.map((shot) => (
                <figure key={shot.file} className={media.shot}>
                  <a href={`/images/siteview360/${shot.file}`} target="_blank" rel="noopener noreferrer">
                    <img src={`/images/siteview360/${shot.file}`} alt={shot.alt} width={1400} height={868} loading="lazy" />
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
              <span className={styles.productLabel}>Free and Pro</span>
              <h2 className={styles.productHeading}>Start free. Pay once if you need more.</h2>
              <p className={styles.productLead}>
                The free edition has every feature except the Pro ones, so you can try the
                whole workflow on a real site before you buy.
              </p>
            </div>

            <div className={styles.proGrid}>
              <article className={styles.useCase}>
                <h3 className={styles.useCaseTitle}>Free edition</h3>
                <ul className={`${styles.useCasePoints} ${own.proList}`}>
                  {freePoints.map((p) => (
                    <li key={p}>
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
                <h3 className={`${styles.useCaseTitle} ${own.proHeading}`}>Pro adds</h3>
                <ul className={styles.useCasePoints}>
                  {proPoints.map((p) => (
                    <li key={p}>
                      <Check />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>

              <div className={styles.proCard}>
                <p className={styles.proPrice}>
                  <span className={styles.proAmount}>€89 / $99 / £79</span> – one-time purchase, tax included
                </p>
                <p className={styles.proPriceSmall}>In Norway: 990 NOK. Checkout picks the currency for your country.</p>
                <a href={SV_BUY_PRO_URL} className={styles.ctaPrimary} target="_blank" rel="noopener noreferrer" onClick={() => track('SiteView360 kjøp Pro')}>
                  Buy Pro
                  <Arrow />
                </a>
                <p className={styles.proNote}>
                  Payment is handled by Stripe. The license key is sent by email and checked
                  on your computer, without going online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="requirements" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>System requirements</span>
              <h2 className={styles.productHeading}>What you need</h2>
              <p className={styles.productLead}>
                SiteView360 1.3.0, released November 2026. It works from the exported 360
                video from a 360 camera, or from ordinary video from a phone.
              </p>
            </div>
            <div className={styles.audienceGrid}>
              {requirements.map((r) => (
                <div key={r.title} className={styles.audienceCard}>
                  <h3 className={styles.audienceCardTitle}>{r.title}</h3>
                  <p className={styles.audienceCardDesc}>{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className={styles.product}>
          <div className={`container ${styles.productInner}`}>
            <div className={styles.productHeader}>
              <span className={styles.productLabel}>Guides</span>
              <h2 className={styles.productHeading}>360 site documentation</h2>
              <p className={styles.productLead}>
                How we record and share a site walk, and how SiteView360 compares with the
                cloud tools.
              </p>
            </div>
            <div className={styles.audienceGrid}>
              {guides.map((g) => (
                <Link key={g.path} to={g.path} className={`${styles.audienceCard} ${shared.guideCard}`}>
                  <h3 className={styles.audienceCardTitle}>{g.title}</h3>
                  <p className={styles.audienceCardDesc}>{g.description}</p>
                  <span className={shared.textLink}>
                    Read the guide <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.product} ${shared.faqSection}`}>
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
                      <h3 className={shared.faqQuestion}>{f.q}</h3>
                      {f.body ?? <p>{f.a}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <p className={styles.trademark}>{SV_TRADEMARK}</p>
      </main>
      <Footer lang="en" product="siteview360" />
    </>
  )
}
