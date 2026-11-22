import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import {
  EN_PATH,
  GUIDE_BATTERY_SPLIT_PATH,
  GUIDE_GRID_MISSION_PATH,
  GUIDE_SKIPPED_PHOTOS_PATH,
  GUIDE_TERRAIN_FOLLOW_PATH,
} from '../../lib/mini5planner'
import styles from './Guide.module.css'

const DJI_WAYPOINT_URL =
  'https://support.dji.com/help/content?customId=en-us03400007343&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper'

export default function GuideBatterySplit() {
  return (
    <GuideLayout
      path={GUIDE_BATTERY_SPLIT_PATH}
      title="Split a large mapping mission across multiple batteries in DJI Fly"
      description="Too big for one battery? Split a DJI Fly mapping mission into legs, one KMZ per battery: how Mini5Planner sizes the legs, and how to load and fly them in turn."
      datePublished="2026-11-22"
      related={[
        { path: GUIDE_TERRAIN_FOLLOW_PATH, title: 'DJI Mini 5 Pro terrain follow mapping: constant height above ground' },
        { path: GUIDE_GRID_MISSION_PATH, title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly' },
        {
          path: GUIDE_SKIPPED_PHOTOS_PATH,
          title: 'Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)',
        },
      ]}
      lead={
        <>
          <p>
            A mapping grid over a large site can take longer than one battery lasts. On the DJI
            Mini 5 Pro this comes sooner than you might expect, because the camera needs about
            5 seconds per 50 MP photo and that keeps the speed down.
          </p>
          <p>
            The simple way to handle it is to plan the mission as several legs from the start,
            each short enough for one battery and saved as its own KMZ file. This guide shows
            how Mini5Planner works out the legs, how to get them onto the DJI RC 2, how to fly
            them one after another from the same takeoff point, and how to check the photos
            afterwards.
          </p>
        </>
      }
    >
      <h2>How long is your mission?</h2>
      <p>
        Draw the area and choose your settings. Under Statistics, Mini5Planner shows the flight
        time and the battery use. Above 75% of one battery the figure turns red and the app
        warns “Mission may exceed battery capacity”. When the mission needs more than one
        battery, it shows the estimated number of batteries instead. All of this is in the free
        version.
      </p>
      <p>If the number is higher than you’d like, shorten the route:</p>
      <ul>
        <li>
          <strong>Fly higher.</strong> Each photo covers more ground, so the lines and the
          photos are further apart, and the drone can fly faster while the camera still keeps
          up (<Link to={GUIDE_SKIPPED_PHOTOS_PATH}>why the camera sets the speed</Link>). The
          price is a coarser GSD.
        </li>
        <li>
          <strong>Lower the overlap</strong>, if your processing can live with it.
        </li>
        <li>
          <strong>Fly a single grid</strong> instead of a double grid, unless you need the
          crosshatch for a 3D model or volumes.
        </li>
      </ul>
      <p>
        One mission can cover up to 5 km². Above that, the app asks you to split the area into
        several missions.
      </p>

      <h2>How Mini5Planner splits the mission</h2>
      <p>
        Mini5Planner walks along the route photo by photo and starts a new leg when the next
        photo would no longer fit on the battery. For each leg it counts:
      </p>
      <ul>
        <li>the flight along the route at the mission speed, plus 2 seconds per photo</li>
        <li>
          the flight from the takeoff point (the H marker) to the first photo of the leg, and
          back from the last one, at transit speed (up to 10 m/s, and never slower than the
          mission speed)
        </li>
        <li>
          a reserve: a leg may use at most 75% of the flight time in the drone profile. For the
          Mini 5 Pro the profile has 36 minutes, so each leg is planned to take at most 27
          minutes, including the flight out and back.
        </li>
      </ul>
      <p>
        The legs follow the route in order, so a leg can end in the middle of a flight line.
        The next leg starts at the next photo, so nothing is skipped or flown twice. In a double
        grid, the first pass comes before the second. The battery estimate in Statistics uses
        the same calculation, so the number of legs matches it.
      </p>
      <p>
        Where you take off matters. Every leg includes the flight out from H and back, so a
        takeoff point in the middle of the area costs less battery than one at the edge. If H is
        more than 1 km from the route, the app tells you. If even a single leg can’t make the
        round trip on one battery, splitting is blocked until you move H closer.
      </p>
      <p>
        These are planning figures. Wind, cold and older batteries give less flight time, so
        keep an eye on the battery level in DJI Fly.
      </p>
      <figure className={styles.figure}>
        <a href="/images/mini5planner/3-gravel-pit-battery-split.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/mini5planner/3-gravel-pit-battery-split.jpg"
            alt="Mini5Planner with the Gravel pit template over a large area. The export panel says the mission requires about two batteries and offers to split it into two KMZ files."
            width={1400}
            height={872}
            loading="lazy"
          />
        </a>
        <figcaption>
          The Gravel pit template over a large area. The export panel says “Mission requires ~2
          batteries” and offers to split it into two KMZ files. The lock means it needs Pro.
        </figcaption>
      </figure>

      <h2>Step by step</h2>
      <ol>
        <li>Draw the area and choose a template or your own settings.</li>
        <li>
          Drag the H marker to where you will take off: a spot you can get back to between
          flights, with a view of the whole area.
        </li>
        <li>
          In the export panel the app says “Mission requires ~N batteries”. Tick{' '}
          <strong>Split into N KMZ files (one per battery)</strong>. This needs Pro; without
          it, the box opens the upgrade window.
        </li>
        <li>
          Click <strong>Save KMZ</strong> and choose a name. The app saves one file per leg,
          with the leg number added to the name, for example{' '}
          <code className={styles.fileName}>2026-11-22_mission_part1of3.kmz</code>,{' '}
          <code className={styles.fileName}>…_part2of3.kmz</code> and{' '}
          <code className={styles.fileName}>…_part3of3.kmz</code>.
        </li>
        <li>
          In DJI Fly, create one new placeholder waypoint mission for each leg. Never use a
          mission you have flown or saved before as a placeholder: DJI Fly then flies the route
          it has stored for that mission, not your file.
        </li>
        <li>
          Connect the controller to your computer and open the waypoint folder, as in the{' '}
          <Link to={GUIDE_GRID_MISSION_PATH}>grid mission guide</Link>. Copy each leg into its
          own placeholder folder and give it that folder’s name (the long code), in place of
          the placeholder’s file. For a split route the app’s transfer guide doesn’t save the
          file under the folder name for you, so rename each file yourself, and make sure
          Windows doesn’t turn it into “.kmz.kmz”.
        </li>
        <li>
          Open the first leg in DJI Fly, check that the map shows that part of the grid, and
          take off from H.
        </li>
        <li>
          When it is done, land, swap the battery, open the next leg and check the map again.
          Take off from the same spot. Repeat until all the legs are flown.
        </li>
      </ol>
      <p>
        Don’t edit the missions or create new ones in DJI Fly until all the legs are flown, or
        DJI Fly may overwrite the files.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          <strong>Set the end-of-mission action in DJI Fly.</strong> The estimate for each leg
          includes the flight back to the takeoff point. According to{' '}
          <Ext href={DJI_WAYPOINT_URL}>DJI</Ext>, the end action can be return to home, land,
          hover or back to start, and it defaults to return to home. In our tests with the Mini
          5 Pro, DJI Fly used its own setting, not the one in the file.
        </li>
        <li>
          <strong>With terrain follow, every leg takes off from the same point.</strong> The
          heights in every leg are relative to it, and the app reminds you of this when both
          are on. See the <Link to={GUIDE_TERRAIN_FOLLOW_PATH}>terrain follow guide</Link>.
        </li>
        <li>
          <strong>DJI Fly and 200 waypoints.</strong> DJI’s support article says you can pin up
          to 200 waypoints in a DJI Fly route. Mini5Planner puts a waypoint at every photo
          position, so a long leg can have more than that. We haven’t tested how DJI Fly
          handles an imported route with more than 200 waypoints. If a leg doesn’t show in full
          on the map in DJI Fly, don’t fly it; plan the area as several smaller missions
          instead.
        </li>
        <li>
          <strong>Other drones.</strong> The split works the same way for all seven DJI drones
          in the app, each with the flight time in its own profile.
        </li>
      </ul>

      <h2>Check the photos after the last leg</h2>
      <p>
        Copy the photos from all the legs into one folder and open{' '}
        <strong>Calibrate / check flight</strong> in Mini5Planner. It only reads the metadata.
        Battery swaps show up as pauses: the app counts gaps of more than 30 seconds between
        photos (“pauses over 30 s (battery swap?)”) and leaves the photo pairs across a pause out
        of the overlap figures. Weak spots are marked on the map, so you can fly that part again
        before you leave the site.
      </p>

      <h2>Battery split is part of Mini5Planner Pro</h2>
      <p>
        Planning, the battery estimate and the flight check are free. Splitting the mission
        into one KMZ per battery comes with Pro, together with terrain follow: a $19 one-time
        purchase with no subscription. See <Link to={`${EN_PATH}#pro`}>Mini5Planner Pro</Link>.
      </p>
    </GuideLayout>
  )
}
