import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import { SV_EN_PATH, SV_GUIDE_COMPARISON_PATH, SV_GUIDE_DOCUMENT_SITE_PATH } from '../../lib/siteview360'
import styles from './Guide.module.css'

type Source = { label: string; url: string; quote?: string }

type Tool = {
  name: string
  price: string
  runs: string
  capture: string
  placement: string
  compare: string
  offline: string
  account: string
  suits: string
  sources: Source[]
}

const READ = '24 November 2026'

const tools: Tool[] = [
  {
    name: 'SiteView360',
    price: 'Free edition: one tour, up to 60 images. Pro €89 / $99 / £79 one-time, tax included',
    runs: 'Desktop app for Mac and Windows. Data stays on your computer',
    capture: 'Stitched 360 video (MP4, 2:1) exported from the 360 camera’s app',
    placement: 'On a map from a GPS track (GPX). No floor plans',
    compare: 'Two tours side by side (Pro). No BIM, no AI',
    offline: 'Yes. Only map tiles need the internet',
    account: 'No account. Shared tours open in a browser',
    suits:
      'You want a record of a site you can click through, made on your own computer, without an account, a subscription or uploading anything. Images are placed on a map from a GPS track; there are no floor plans, no BIM, no AI and no shared workspace.',
    sources: [{ label: 'SiteView360', url: SV_EN_PATH }],
  },
  {
    name: 'OpenSpace',
    price: 'Not published. Based on annual construction volume and tier (Core or Enterprise). A pilot of Core on request',
    runs: 'Web platform (phone and desktop), app for iOS and Android',
    capture: '360 camera video walk (two frames per second), photo stills, iPhone/iPad LiDAR, drones and laser scanners',
    placement: 'Automatic: AI maps images to your floor plans',
    compare: 'BIM compare and overlay, Split View of two dates, several AI features',
    offline: 'Mobile app works offline. Offline deliverable (zip) viewable without cloud storage or a login',
    account: 'Subscription. Share links for project members; public view-only links if the organisation turns them on',
    suits:
      'You run construction projects and want 360 captures placed on floor plans automatically, compared with the BIM model and with earlier dates, and connected to tools such as Procore and Autodesk.',
    sources: [
      {
        label: 'Pricing',
        url: 'https://www.openspace.ai/pricing/',
        quote: 'OpenSpace pricing is based on your annual construction volume (ACV) and the subscription tier you choose—Core or Enterprise.',
      },
      {
        label: 'Capture',
        url: 'https://www.openspace.ai/products/capture/',
        quote: 'Our Spatial AI engine timestamps and maps images to your floor plans.',
      },
      { label: 'BIM+', url: 'https://www.openspace.ai/products/bimplus/' },
      { label: 'Mobile app', url: 'https://www.openspace.ai/products/mobile-app/' },
      {
        label: 'Public links to shared folders',
        url: 'https://support.openspace.ai/hc/en-us/articles/41950401174547-Public-Links-to-Shared-Folders',
      },
    ],
  },
  {
    name: 'Matterport',
    price: 'Free Plan: 1 active space, 2 users. Professional from €83/month billed yearly (10 spaces), €98 paid monthly. Enterprise: contact sales',
    runs: 'Matterport Cloud, viewed in the browser; app for iOS and Android',
    capture: 'Matterport Pro2 and Pro3 cameras, phones, Leica BLK360 and listed 360 cameras (Ricoh Theta, Insta360)',
    placement: 'Builds a 3D model (“digital twin”) from the capture. Floor plans are a paid export',
    compare: 'CAD and BIM files from the digital twin (extra charge). AI tools such as Defurnish and guided tours. Side-by-side comparison not stated',
    offline: 'Field Tags can be added offline. Otherwise not stated',
    account: 'Subscription plan to capture (a free plan exists). Spaces can be shared with anyone',
    suits:
      'You want a measurable 3D model of a building or a room, with floor plans and CAD or BIM files ordered from it, and you are happy to pay per active space. The plans page we read showed prices in euro to a visitor from Norway.',
    sources: [
      {
        label: 'Plans',
        url: 'https://matterport.com/plans',
        quote: 'The Free Plan gives you 1 Active Space, 2 users, and access to tools for editing and content creation.',
      },
      {
        label: 'Design and construction',
        url: 'https://matterport.com/solutions/design-construction',
        quote: 'CAD and BIM files generated directly from a digital twin.',
      },
      {
        label: 'Supported 360 cameras',
        url: 'https://support.matterport.com/s/article/Supported-360-Spherical-Cameras?language=en_US',
      },
      { label: 'Architects, engineering and construction (Field Tags)', url: 'https://matterport.com/industries/architects-engineering-construction' },
    ],
  },
  {
    name: 'Kuula',
    price: 'Basic free. Pro $20/month billed yearly or $24 monthly. Business $36/month billed yearly or $48 monthly. Enterprise: contact',
    runs: 'Web platform. Viewers need no app',
    capture: '360 photos from a 360 camera, a DSLR or 3D software. Video walk not stated',
    placement: 'Hotspots on a floor plan are added by hand (Pro)',
    compare: 'Not stated',
    offline: 'Not stated',
    account: 'Account to create tours. Public and unlisted tours open from a link',
    suits:
      'You want to build and publish 360 photo tours on the web, with your own hotspots, floor plans and branding, for a monthly fee. On the free plan, hotspots and the menu are visible only to you.',
    sources: [
      { label: 'Pricing', url: 'https://kuula.co/page/pricing', quote: 'All prices are in US Dollars (USD).' },
      {
        label: 'Free plan',
        url: 'https://kuula.co/help/free',
        quote: 'hotspots and the menu will not be visible to anyone except yourself.',
      },
      { label: 'Floor plans', url: 'https://kuula.co/help/floor-plan' },
      { label: 'Kuula', url: 'https://kuula.co/' },
      { label: 'Uploading', url: 'https://kuula.co/help/upload-post' },
      { label: 'Privacy settings', url: 'https://kuula.co/help/privacy' },
    ],
  },
  {
    name: 'CloudPano',
    price: 'Pro $22.50/month, Pro Plus $33/month, Commercial $199+/month, all billed annually. Start free. Enterprise: talk to an expert',
    runs: 'Web platform that hosts the tours, and a mobile app',
    capture: 'Any 360 camera, video or the CloudPano mobile app. 360 photos must be 2:1',
    placement: 'Rooms linked by hand. Automatic placement not stated',
    compare: 'Not stated',
    offline: 'Not stated',
    account: 'Not stated. Tours are shared with a single URL',
    suits:
      'You want hosted 360 tours for marketing, with integrations for property listing sites, Google Street View uploads and live video chat. Its construction page presents tours as a way to impress clients and win contracts.',
    sources: [
      {
        label: 'CloudPano (pricing and FAQ on the home page)',
        url: 'https://www.cloudpano.com/',
        quote: 'Start for free, no credit card required.',
      },
      { label: 'Plans', url: 'https://www.cloudpano.com/add-to-cart' },
      { label: 'Construction', url: 'https://www.cloudpano.com/industries/best-virtual-tour-software-for-construction' },
    ],
  },
  {
    name: 'HoloBuilder (now FARO Sphere XG)',
    price: 'Not published. Customizable packages (Project, Enterprise). 21-day free trial',
    runs: 'Cloud platform in the browser, JobWalk app for iOS and Android',
    capture: '360 camera with the JobWalk app (including VideoMode), FARO laser scanners, drones and iPhone LiDAR',
    placement: '360 photos mapped to your floor plan. In JobWalk you set your position on the plan',
    compare: 'Compare with BIM models from Navisworks or Revit, and point clouds over time. AI not stated',
    offline: 'Not stated. Access “from any device with an internet connection”',
    account: 'Sphere XG account. Snapshots can be shared with anyone who has the link',
    suits:
      'You combine 360 photos with laser scans and BIM in one cloud platform, especially if you already use FARO scanners and SCENE. HoloBuilder is now called FARO Sphere XG; the capture app is still called JobWalk.',
    sources: [
      {
        label: 'Data capture',
        url: 'https://www.holobuilder.com/data-capture/',
        quote: 'Connect your 360° camera to the JobWalk app, determine your position on the floor plan and start capturing.',
      },
      {
        label: 'Pricing',
        url: 'https://www.holobuilder.com/pricing/',
        quote: 'Our subscription packages are customizable based on your needs',
      },
      { label: 'Free trial', url: 'https://www.holobuilder.com/free-trial/' },
      { label: 'Integrations', url: 'https://www.holobuilder.com/integrations/' },
      { label: 'Sphere XG', url: 'https://www.holobuilder.com/' },
      {
        label: 'Share a project snapshot',
        url: 'https://help.holobuilder.com/en/articles/14816793-create-and-share-a-project-snapshot',
      },
    ],
  },
  {
    name: 'Cupix (CupixWorks)',
    price: 'Not published. Contact sales',
    runs: 'Cloud AI processing, SiteView in the browser, apps for iOS and Android. Optional private AWS S3 storage',
    capture: '360 video with a camera on a hard hat or selfie stick. Laser scans and drone orthophotos can be imported',
    placement: 'Automatic: AI reconstructs the walking path in 3D and places each 360° frame',
    compare: 'BIM and 2D drawings over the 360 images, point cloud against BIM, AI progress tracking (SiteInsights)',
    offline: 'SiteView Offline Viewer for archived SiteViews. CupixField works offline',
    account: 'Access by team membership. With Public Access, anyone with the link can view',
    suits:
      'You want a measurable 3D map built from a 360 video walk, with BIM overlays and automatic progress tracking, and integrations with BIM 360, Autodesk Forma, Procore and others.',
    sources: [
      {
        label: '360 video to 3D map',
        url: 'https://www.cupix.com/product/360-video-to-3d-map',
        quote: 'Our vision AI engine processes 360° video, reconstructs the walking path in 3D, places each 360° frame',
      },
      { label: 'Contact (pricing redirects here)', url: 'https://www.cupix.com/company/contact' },
      { label: 'Off-site BIM verification', url: 'https://www.cupix.com/product/off-site-bim-verification' },
      { label: 'Progress tracking', url: 'https://www.cupix.com/product/construction-progress-tracking' },
      { label: 'Cupix (integrations)', url: 'https://www.cupix.com/' },
      { label: 'Enterprise-grade security', url: 'https://www.cupix.com/product/enterprise-grade-security' },
      {
        label: 'SiteView Offline Viewer',
        url: 'https://support.cupix.works/hc/en-us/articles/34897703756699-SiteView-Offline-Viewer',
      },
      { label: 'Manage access', url: 'https://support.cupix.works/hc/en-us/articles/34897596181147-Manage-Access' },
    ],
  },
]

const columns: { key: keyof Omit<Tool, 'name' | 'suits' | 'sources'>; label: string }[] = [
  { key: 'price', label: 'Price' },
  { key: 'runs', label: 'How it runs' },
  { key: 'capture', label: 'Capture' },
  { key: 'placement', label: 'Where images are placed' },
  { key: 'compare', label: 'Comparison, BIM and AI' },
  { key: 'offline', label: 'Offline' },
  { key: 'account', label: 'Account and sharing' },
]

export default function GuideSiteDocumentationComparison() {
  return (
    <GuideLayout
      product="siteview360"
      path={SV_GUIDE_COMPARISON_PATH}
      title="Street View-style site documentation tools compared (November 2026)"
      description="SiteView360, OpenSpace, Matterport, Kuula, CloudPano, HoloBuilder (FARO Sphere XG) and Cupix: price, how they run, capture, floor plans, BIM, offline use and accounts."
      datePublished="2026-11-24"
      related={[{ path: SV_GUIDE_DOCUMENT_SITE_PATH, title: 'How to document a construction site with a 360 camera' }]}
      lead={
        <>
          <p>
            Several tools turn 360 images of a site into a tour you can walk through. They
            differ a lot in price, in where your data lives and in what they do with the
            images. Here are seven of them side by side, as of November 2026.
          </p>
          <p>
            We make SiteView360, so read our row with that in mind. Every other row is based
            on the maker’s own pages, linked below, which we read on {READ}. Where a page
            doesn’t say, we write “not stated”. That doesn’t mean the feature is missing.
          </p>
        </>
      }
    >
      <h2>The comparison</h2>
      <div className={`${styles.tableWrap} ${styles.wideTable}`}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Tool</th>
              {columns.map((c) => (
                <th key={c.key} scope="col">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.name}>
                <th scope="row">{t.name}</th>
                {columns.map((c) => (
                  <td key={c.key} data-label={c.label}>
                    {t[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.sourceNote}>
        As of {READ}. Prices are as shown on each maker’s own page, in the currency it showed
        us. Matterport showed euro to our visitor from Norway; Kuula and CloudPano show US
        dollars.
      </p>

      <h2>Two kinds of tools</h2>
      <p>
        Four of the six have tools made for construction: OpenSpace, Matterport, HoloBuilder
        (now FARO Sphere XG) and Cupix. They are cloud platforms with features SiteView360
        does not have. OpenSpace places images on your floor plans automatically, Cupix
        places each frame in a 3D map, and Sphere XG maps 360 photos to your floor plan. Most
        of them compare the site with the BIM model, all of them list integrations with tools
        such as Procore or Autodesk, and several use AI. If you need those, one of them is the
        better choice.
      </p>
      <p>
        Kuula and CloudPano are general 360 tour platforms. You upload 360 images, link them
        into a tour and publish it on the web. Both have a free start and paid plans.
      </p>
      <p>
        SiteView360 does a smaller job. It is a desktop app that turns a 360 video into a tour
        on your own computer, with no account, no cloud and a one-time price, and it works
        without an internet connection. It suits a contractor who wants a record of a site to
        keep, send to a client or attach to a claim, and who does not need a
        platform for the whole project team.
      </p>

      <h2>Who each tool suits</h2>
      {tools.map((t) => (
        <section key={t.name}>
          <h3>{t.name}</h3>
          <p>{t.suits}</p>
          <p className={styles.sourceNote}>
            Source{t.sources.length > 1 ? 's' : ''}:{' '}
            {t.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ', '}
                {s.url.startsWith('/') ? <Link to={s.url}>{s.label}</Link> : <Ext href={s.url}>{s.label}</Ext>}
                {s.quote && <> (“{s.quote}”)</>}
              </span>
            ))}
            {t.sources[0].url.startsWith('/') ? '' : `. Read ${READ}.`}
          </p>
        </section>
      ))}

      <h2>What SiteView360 does not do</h2>
      <p>So you can rule it out quickly if it doesn’t fit:</p>
      <ul>
        <li>No floor plans and no indoor positioning. Images are placed on a map from a GPS track, or shown as a sequence without one.</li>
        <li>No BIM comparison, no AI and no automatic progress tracking.</li>
        <li>No cloud, no shared workspace and no mobile app. You share a tour with a QR code on the local Wi‑Fi, as an HTML folder for any web host, or as a PDF report.</li>
        <li>No face blurring.</li>
        <li>
          It needs a 360 camera. The input is a stitched 360 video in MP4, 2:1, exported from
          the camera’s own app. How we record and import a site walk is in{' '}
          <Link to={SV_GUIDE_DOCUMENT_SITE_PATH}>How to document a construction site with a 360 camera</Link>.
        </li>
      </ul>
      <p className={styles.sourceNote}>
        Tools change quickly. If a row is wrong or out of date, email{' '}
        <a href="mailto:torstein@anleggtech.no?subject=Site%20documentation%20comparison">torstein@anleggtech.no</a>{' '}
        and we’ll correct it.
      </p>
    </GuideLayout>
  )
}
