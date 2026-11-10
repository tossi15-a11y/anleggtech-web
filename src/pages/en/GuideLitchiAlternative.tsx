import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import {
  EN_PATH,
  GUIDE_GRID_MISSION_PATH,
  GUIDE_LITCHI_ALTERNATIVE_PATH,
  GUIDE_PLANNER_COMPARISON_PATH,
  GUIDE_SKIPPED_PHOTOS_PATH,
} from '../../lib/mini5planner'
import styles from './Guide.module.css'

const LITCHI_PILOT_URL = 'https://forum.flylitchi.com/t/10621'
const LITCHI_HUB_URL = 'https://forum.flylitchi.com/t/23994'
const LITCHI_HUB_DJI_FLY_URL = 'https://forum.flylitchi.com/t/24332'
const LITCHI_HUB_SPLIT_URL = 'https://forum.flylitchi.com/t/28561'
const LITCHI_UTILITIES_URL = 'https://www.litchiutilities.com/docs/waypoint.php'
const DRONEDJ_MINI_4_PRO_URL = 'https://dronedj.com/2025/03/21/dji-mini-4-pro-msdk/'
const DRONELINK_KMZ_URL =
  'https://support.dronelink.com/hc/en-us/articles/4410621290387-Onboard-DJI-Waypoint-Missions-Convert-and-Export-to-KMZ'
const DRONELINK_PRICING_URL = 'https://app.dronelink.com/pricing'
const DJI_WAYPOINT_URL =
  'https://support.dji.com/help/content?customId=en-us03400007343&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper'

const drones = [
  { name: 'DJI Mini 5 Pro', sdk: 'No', fly: 'DJI Fly waypoints from a KMZ file' },
  { name: 'DJI Air 3 and Air 3S', sdk: 'No', fly: 'DJI Fly waypoints from a KMZ file' },
  { name: 'DJI Mavic 3, 3 Classic and 3 Pro', sdk: 'No', fly: 'DJI Fly waypoints from a KMZ file' },
  { name: 'DJI Mavic 4 Pro', sdk: 'No', fly: 'DJI Fly waypoints from a KMZ file' },
  {
    name: 'DJI Mini 4 Pro',
    sdk: 'Yes, Android with the RC-N2 and a phone',
    fly: 'Litchi Pilot and other SDK apps, or DJI Fly waypoints from a KMZ file',
  },
]

export default function GuideLitchiAlternative() {
  return (
    <GuideLayout
      path={GUIDE_LITCHI_ALTERNATIVE_PATH}
      title="Litchi alternative for DJI Mini 5 Pro and the DJI RC 2"
      description="Litchi Pilot needs a DJI SDK, and the Mini 5 Pro has none. What Litchi, Litchi Hub and Dronelink can do with it, and how KMZ files for DJI Fly fill the gap."
      datePublished="2026-11-10"
      related={[
        { path: GUIDE_PLANNER_COMPARISON_PATH, title: 'DJI grid mapping planners compared (November 2026)' },
        { path: GUIDE_GRID_MISSION_PATH, title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly' },
      ]}
      lead={
        <>
          <p>
            If you have flown older DJI drones, you probably know Litchi for automated
            missions. With the Mini 5 Pro and the DJI RC 2 that no longer works the same way.
            Third-party flight apps talk to the drone through DJI’s Mobile SDK, and as of
            November 2026 DJI has not released one for the Mini 5 Pro.
          </p>
          <p>
            What does work is planning the mission somewhere else, saving it as a KMZ file and
            flying it with DJI Fly’s own waypoint mode. This guide sorts out what Litchi, Litchi
            Hub and Dronelink can and can’t do with these drones, and where Mini5Planner fits.
          </p>
        </>
      }
    >
      <h2>Why Litchi Pilot can’t fly the Mini 5 Pro</h2>
      <p>
        Litchi Pilot is Litchi’s app for newer DJI drones. It runs on Android and controls the
        drone through DJI’s Mobile SDK. Litchi’s{' '}
        <Ext href={LITCHI_PILOT_URL}>own beta announcement</Ext> (last edited 28 October 2026)
        lists the Mini 4 Pro among the supported drones, and lists the Mini 5, Air 3, Mavic 3
        and Mavic 4 as unsupported because DJI has no SDK for them yet. It also says apps can’t
        be installed on DJI controllers with a built-in screen, which includes the DJI RC 2, and
        that iPhone and iPad aren’t supported by DJI’s latest SDK.
      </p>
      <p>
        So with a Mini 5 Pro and a DJI RC 2, no third-party app can take control of the drone.
        That applies to Dronelink too:{' '}
        <Ext href={DRONELINK_KMZ_URL}>its KMZ article</Ext> says the Dronelink app will not
        connect to “onboard only” drones such as the Air 3, Mavic 4 Pro and Mini 5 Pro.
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Drone</th>
              <th scope="col">SDK for third-party apps</th>
              <th scope="col">How to fly an automated mission</th>
            </tr>
          </thead>
          <tbody>
            {drones.map((d) => (
              <tr key={d.name}>
                <th scope="row">{d.name}</th>
                <td data-label="SDK for third-party apps">{d.sdk}</td>
                <td data-label="How to fly it">{d.fly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Sources: <Ext href={LITCHI_PILOT_URL}>Litchi Pilot beta announcement</Ext>,{' '}
        <Ext href={LITCHI_UTILITIES_URL}>Litchi Utilities waypoint table</Ext> and{' '}
        <Ext href={DRONEDJ_MINI_4_PRO_URL}>DroneDJ, 21 March 2025</Ext>. When DJI added SDK
        support for the Mini 4 Pro in March 2025, it covered the RC-N2 with a phone, not the
        DJI RC 2.
      </p>

      <h2>The route that works: DJI Fly waypoints from a KMZ file</h2>
      <p>
        On these drones DJI Fly has its own waypoint mode.{' '}
        <Ext href={DJI_WAYPOINT_URL}>DJI’s support article</Ext> lists the Mini 5 Pro, Air 3,
        Air 3S, the Mavic 3 family and the Mavic 4 Pro among the drones that have it. The
        mission is saved in DJI Fly and flown by DJI Fly itself, so no third-party app has to
        connect to the drone.
      </p>
      <p>
        DJI Fly has no grid tool, though, and DJI says it does not support importing KML
        routes. In practice every planner in this guide works the same way: you create a
        placeholder mission in DJI Fly, then replace its KMZ file on the controller with one
        made on a computer. With the DJI RC 2 that means a USB-C cable, either copying the file
        by hand or letting a helper app do it.
      </p>

      <h2>What Litchi Hub can do</h2>
      <p>
        Litchi Hub is Litchi’s mission planner in the web browser, in{' '}
        <Ext href={LITCHI_HUB_URL}>open beta since May 2025</Ext>. It plans waypoint missions
        with a 3D preview, and its Area Mapping tool generates a mapping grid with adjustable
        overlap and gimbal angle.
      </p>
      <ul>
        <li>
          It exports DJI KMZ files for DJI Fly. Litchi’s{' '}
          <Ext href={LITCHI_HUB_DJI_FLY_URL}>DJI Fly guide</Ext> covers the Mini 5 Pro, Air 3
          and 3S, the Mavic 3 series and the Mavic 4 Pro.
        </li>
        <li>
          Litchi Hub Bridge, a companion app for Mac and Windows, moves flights between Hub and
          DJI Fly. You can also replace the KMZ by hand.
        </li>
        <li>
          A large survey can be split into several flights on export, according to an{' '}
          <Ext href={LITCHI_HUB_SPLIT_URL}>answer on Litchi’s forum</Ext> from July 2026.
        </li>
        <li>We found no price for Hub on Litchi’s pages during the beta.</li>
      </ul>

      <h2>What Dronelink can do</h2>
      <p>
        Dronelink is a web planner with iOS and Android apps. For drones like the Mini 5 Pro,
        you convert a plan to DJI waypoints in the web planner, export a KMZ and swap it in
        over a temporary mission in DJI Fly, as described in{' '}
        <Ext href={DRONELINK_KMZ_URL}>Dronelink’s KMZ article</Ext>.
      </p>
      <ul>
        <li>
          Mapping and waypoint missions are among the supported mission types. Linear maps and
          vertical facades are listed as not fully supported, and Dronelink notes that the
          converted path can differ slightly from the original.
        </li>
        <li>
          KMZ export is included in the Elite plan ($119.99 one-time) and the professional
          plans from Starter ($24 a month) upward. Basic and Premium don’t include it (see{' '}
          <Ext href={DRONELINK_PRICING_URL}>Dronelink’s pricing</Ext>).
        </li>
      </ul>

      <h2>Where Mini5Planner fits</h2>
      <p>
        <Link to={EN_PATH}>Mini5Planner</Link> does one job: grid mapping missions for DJI
        Fly, planned on a Mac or Windows computer. We built it around the Mini 5 Pro, and that
        profile is measured in the field. A 50 MP photo takes the Mini 5 Pro about 5 seconds to
        save, and Mini5Planner caps the speed so the camera keeps up. A route that ignores
        this{' '}
        <Link to={GUIDE_SKIPPED_PHOTOS_PATH}>loses photos without any warning</Link>.
      </p>
      <ul>
        <li>Single grid or double grid (crosshatch), with templates for typical jobs.</li>
        <li>GSD, number of photos, flight time and battery use as you adjust the plan.</li>
        <li>
          A KMZ for DJI Fly, and a step-by-step transfer guide for the DJI RC 2. You copy the
          file yourself, with File Explorer on Windows or OpenMTP on a Mac.
        </li>
        <li>
          After the flight, <strong>Calibrate / check flight</strong> reads the photos’
          metadata and shows the front overlap and the weakest spots on the map.
        </li>
        <li>
          Free, also for commercial use. Pro is a one-time purchase that adds terrain following
          (Kartverket’s 1 m model in Norway, Copernicus GLO-30 elsewhere) and battery split.
        </li>
      </ul>
      <p>
        Mini5Planner doesn’t fly the drone and doesn’t process the photos. If you need other
        kinds of missions than mapping grids, Litchi Hub and Dronelink offer many more.
      </p>

      <h2>Which one to pick</h2>
      <ul>
        <li>
          <strong>Litchi Hub</strong> suits you if you want a browser planner with a 3D preview
          and many waypoint tools beyond mapping, and maybe also fly Litchi Pilot on a drone
          with an SDK.
        </li>
        <li>
          <strong>Dronelink</strong> suits you if you already use it, or need its professional
          features on drones with an SDK as well. KMZ export for the Mini 5 Pro needs Elite or a
          professional plan.
        </li>
        <li>
          <strong>Mini5Planner</strong> suits you if you map with a Mini 5 Pro and want a
          desktop app that sets the speed for the camera and checks the overlap afterwards.
        </li>
        <li>
          <strong>A Mini 4 Pro with the RC-N2 and an Android phone</strong> can still use
          Litchi Pilot and other SDK apps directly. With the DJI RC 2 it can’t, because apps
          can’t be installed on it.
        </li>
      </ul>
      <p>
        More tools make KMZ files for DJI Fly. We compare seven planners, our own included, in{' '}
        <Link to={GUIDE_PLANNER_COMPARISON_PATH}>DJI grid mapping planners compared</Link>, and
        the full transfer steps are in{' '}
        <Link to={GUIDE_GRID_MISSION_PATH}>our grid mission guide</Link>.
      </p>
      <p className={styles.sourceNote}>
        All third-party facts were checked on the linked pages on 10 November 2026. Tools
        change quickly. If something here is out of date, email{' '}
        <a href="mailto:torstein@anleggtech.no">torstein@anleggtech.no</a> and we’ll correct it.
      </p>
    </GuideLayout>
  )
}
