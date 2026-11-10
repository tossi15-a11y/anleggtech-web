import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import {
  EN_PATH,
  GUIDE_AIR_3S_PATH,
  GUIDE_GRID_MISSION_PATH,
  GUIDE_LITCHI_ALTERNATIVE_PATH,
  GUIDE_PLANNER_COMPARISON_PATH,
} from '../../lib/mini5planner'
import styles from './Guide.module.css'

type Source = { label: string; url: string; note: string }

type Planner = {
  name: string
  price: string
  platform: string
  grid: string
  terrain: string
  mini5: string
  rc2: string
  openSource: string
  suits: string
  sources: Source[]
}

const READ = 'read 10 November 2026'

const planners: Planner[] = [
  {
    name: 'Mini5Planner',
    price: 'Free. Pro $19 one-time',
    platform: 'Mac and Windows app',
    grid: 'Single and double grid (crosshatch)',
    terrain: 'Pro: Kartverket 1 m in Norway, Copernicus GLO-30 elsewhere',
    mini5: 'Yes, field-tested by us',
    rc2: 'Step-by-step guide, you copy the file over USB',
    openSource: 'No',
    suits:
      'You map with a Mini 5 Pro and want a desktop app that sets the speed so the camera keeps up, and checks the overlap after the flight. Address search and the power line layer cover Norway only.',
    sources: [{ label: 'Mini5Planner', url: EN_PATH, note: 'app version 1.3.7' }],
  },
  {
    name: 'Litchi Hub',
    price: 'Not stated (open beta)',
    platform: 'Web browser, Bridge app for Mac and Windows',
    grid: 'Area mapping grid. Crosshatch not stated',
    terrain: 'Not stated',
    mini5: 'Yes, in Litchi’s DJI Fly guide',
    rc2: 'Litchi Hub Bridge, or swap the KMZ by hand',
    openSource: 'Not stated',
    suits:
      'You want a browser planner with a 3D preview and many waypoint tools beyond mapping, and a companion app that moves flights to DJI Fly for you.',
    sources: [
      { label: 'Litchi Hub open beta', url: 'https://forum.flylitchi.com/t/23994', note: 'posted 22 May 2025, edited 11 April 2026' },
      { label: 'How to use Litchi Hub with DJI Fly', url: 'https://forum.flylitchi.com/t/24332', note: 'posted 6 June 2025' },
    ],
  },
  {
    name: 'Dronelink',
    price: 'KMZ export from Elite ($119.99 one-time) or Starter ($24/month)',
    platform: 'Web planner, iOS and Android apps',
    grid: 'Mapping missions. Crosshatch not stated',
    terrain: 'Terrain follow in professional plans. In the KMZ export not stated',
    mini5: 'Yes, basic support via KMZ',
    rc2: 'Swap the KMZ by hand',
    openSource: 'Not stated',
    suits:
      'You already use Dronelink, or also fly drones it supports fully, and want one planner for all of them. KMZ export for the Mini 5 Pro needs Elite or a professional plan.',
    sources: [
      { label: 'Dronelink pricing', url: 'https://app.dronelink.com/pricing', note: READ },
      {
        label: 'Onboard DJI Waypoint Missions: Convert and Export to KMZ',
        url: 'https://support.dronelink.com/hc/en-us/articles/4410621290387-Onboard-DJI-Waypoint-Missions-Convert-and-Export-to-KMZ',
        note: 'updated early November 2026',
      },
    ],
  },
  {
    name: 'FlightDronePlan',
    price: 'Free (3 exports a month). Job Pass $6. Pro $19/month or $190/year',
    platform: 'Web browser, add-on for Windows and Mac',
    grid: 'Mapping grids. Crosshatch in stockpile missions',
    terrain: 'Pro, for ArduPilot, PX4, KML, GeoJSON, GPX and CSV files. DJI KMZ not listed',
    mini5: 'Beta, not yet tested by the maker',
    rc2: 'Send over USB with the add-on',
    openSource: 'Not stated',
    suits:
      'You plan many kinds of jobs, such as property photos, roofs and mapping, for DJI drones and ArduPilot or PX4 aircraft, in the browser with weather and airspace checks. It shows FAA airspace layers and uses imperial units by default, with metres as an option.',
    sources: [
      { label: 'Pricing', url: 'https://flightdroneplan.com/pricing', note: READ },
      { label: 'Help: supported aircraft', url: 'https://flightdroneplan.com/help#aircraft', note: READ },
      { label: 'Drone mapping overlap', url: 'https://flightdroneplan.com/drone-mapping-overlap', note: READ },
    ],
  },
  {
    name: 'Waypoint OS (Pilotbyte)',
    price: '$0 lifetime',
    platform: 'Windows 10/11 and macOS 12+',
    grid: 'Lawnmower grid. Crosshatch not stated',
    terrain: 'Not stated',
    mini5: 'Listed',
    rc2: 'USB file transfer, RC 2 listed',
    openSource: 'Not stated',
    suits:
      'You want a free desktop app for Windows or Mac that makes straight-line mapping grids and can split a large mission into KMZ files sized for one battery each.',
    sources: [{ label: 'Waypoint OS', url: 'https://www.pilotbyte.com/waypoint-os', note: READ }],
  },
  {
    name: 'MavicMapper',
    price: 'Free',
    platform: 'Windows',
    grid: 'Grid, crosshatch and oblique',
    terrain: 'Yes',
    mini5: 'Listed',
    rc2: 'Upload over USB with ADB (USB debugging on the RC)',
    openSource: 'Not stated',
    suits:
      'You use Windows and want a free offline planner with many mission types and settings, including crosshatch, oblique passes and terrain following, and one-click upload to the controller.',
    sources: [{ label: 'MavicMapper', url: 'https://www.mavicmapper.jk4u.net/', note: 'latest update listed 5 October 2026' }],
  },
  {
    name: 'FlyPath',
    price: 'Free',
    platform: 'QGIS plugin',
    grid: 'Grid, with a cross-hatch option',
    terrain: 'Yes, online elevation data or your own DEM',
    mini5: 'Community-verified',
    rc2: 'Send to DJI RC over USB',
    openSource: 'Yes, GPL-3.0',
    suits:
      'You already work in QGIS and want to plan from your own map layers, with terrain follow and cross-hatch, in open-source software. It lists the Air 3S and Mavic 4 Pro as wanting field-test reports.',
    sources: [{ label: 'FlyPath on GitHub', url: 'https://github.com/dronnix-io/FlyPath', note: 'README, last updated 6 November 2026' }],
  },
]

const columns: { key: keyof Omit<Planner, 'name' | 'suits' | 'sources'>; label: string }[] = [
  { key: 'price', label: 'Price' },
  { key: 'platform', label: 'Platform' },
  { key: 'grid', label: 'Grid / crosshatch' },
  { key: 'terrain', label: 'Terrain following' },
  { key: 'mini5', label: 'Mini 5 Pro via DJI Fly KMZ' },
  { key: 'rc2', label: 'Transfer to DJI RC 2' },
  { key: 'openSource', label: 'Open source' },
]

export default function GuidePlannerComparison() {
  return (
    <GuideLayout
      path={GUIDE_PLANNER_COMPARISON_PATH}
      title="DJI grid mapping planners compared (November 2026)"
      description="Mini5Planner, Litchi Hub, Dronelink, FlightDronePlan, Waypoint OS, MavicMapper and FlyPath: price, platform, grids, terrain following, Mini 5 Pro and DJI RC 2."
      datePublished="2026-11-10"
      related={[
        { path: GUIDE_LITCHI_ALTERNATIVE_PATH, title: 'Litchi alternative for DJI Mini 5 Pro and the DJI RC 2' },
        { path: GUIDE_AIR_3S_PATH, title: 'How to plan a mapping mission for the DJI Air 3S' },
        { path: GUIDE_GRID_MISSION_PATH, title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly' },
      ]}
      lead={
        <>
          <p>
            On DJI drones without an SDK for third-party apps, such as the Mini 5 Pro, Air 3S
            and Mavic 4 Pro, a mapping grid is flown as a DJI Fly waypoint mission from a KMZ
            file. Several planners make those files. Here are seven of them side by side, as of
            November 2026.
          </p>
          <p>
            We make Mini5Planner, so read our row with that in mind. Every other row is based on
            the product’s own pages, linked below, which we read on 10 November 2026. Where a
            page doesn’t say, we write “not stated”. That doesn’t mean the feature is missing.
          </p>
        </>
      }
    >
      <h2>The comparison</h2>
      <div className={`${styles.tableWrap} ${styles.wideTable}`}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Planner</th>
              {columns.map((c) => (
                <th key={c.key} scope="col">
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planners.map((p) => (
              <tr key={p.name}>
                <th scope="row">{p.name}</th>
                {columns.map((c) => (
                  <td key={c.key} data-label={c.label}>
                    {p[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.sourceNote}>
        As of November 2026. Prices are in US dollars as shown on each product’s own page.
        Dronelink shows the same amounts in euro to visitors from Europe. “Listed” means the
        drone is on the product’s list of supported drones.
      </p>

      <h2>Who each planner suits</h2>
      {planners.map((p) => (
        <section key={p.name}>
          <h3>{p.name}</h3>
          <p>{p.suits}</p>
          <p className={styles.sourceNote}>
            Source{p.sources.length > 1 ? 's' : ''}:{' '}
            {p.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 && ', '}
                {s.url.startsWith('/') ? <Link to={s.url}>{s.label}</Link> : <Ext href={s.url}>{s.label}</Ext>}{' '}
                ({s.note})
              </span>
            ))}
          </p>
        </section>
      ))}

      <h2>What they have in common</h2>
      <p>
        All of them work around the same limit: DJI Fly has waypoint missions on these drones
        but no grid tool, and{' '}
        <Ext href="https://support.dji.com/help/content?customId=en-us03400007343&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper">
          DJI says
        </Ext>{' '}
        it does not support importing KML routes. The planner makes the KMZ, and the file ends
        up in DJI Fly’s waypoint folder on the controller or phone, by hand or with a helper
        app. Whatever
        you use, open the mission in DJI Fly and check the route before you take off.
      </p>
      <p>
        Why third-party flight apps can’t fly these drones directly, and what that means for
        Litchi, is in{' '}
        <Link to={GUIDE_LITCHI_ALTERNATIVE_PATH}>Litchi alternative for DJI Mini 5 Pro and the DJI RC 2</Link>.
      </p>
      <p className={styles.sourceNote}>
        Tools change quickly. If a row is wrong or out of date, email{' '}
        <a href="mailto:torstein@anleggtech.no?subject=Planner%20comparison">torstein@anleggtech.no</a>{' '}
        and we’ll correct it.
      </p>
    </GuideLayout>
  )
}
