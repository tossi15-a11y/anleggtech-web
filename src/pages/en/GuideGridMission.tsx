import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import { EN_PATH, GUIDE_GRID_MISSION_PATH, GUIDE_SKIPPED_PHOTOS_PATH } from '../../lib/mini5planner'
import styles from './Guide.module.css'

const templates = [
  { name: 'Small site (0.1–0.5 ha)', altitude: '60 m', overlap: '80% / 70%', gimbal: '−90°', grid: 'Single grid' },
  { name: 'Excavation site', altitude: '50 m', overlap: '85% / 75%', gimbal: '−75°', grid: 'Double grid (crosshatch)' },
  { name: 'Gravel pit', altitude: '100 m', overlap: '75% / 65%', gimbal: '−90°', grid: 'Single grid' },
  { name: 'Building facade', altitude: '30 m', overlap: '80% / 70%', gimbal: '−45°', grid: 'Single grid' },
  { name: 'Road corridor', altitude: '80 m', overlap: '80% / 60%', gimbal: '−90°', grid: 'Single grid' },
]

const RC_PATH = 'Internal Shared Storage > Android > data > dji.go.v5 > files > waypoint'

export default function GuideGridMission() {
  return (
    <GuideLayout
      path={GUIDE_GRID_MISSION_PATH}
      title="How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly"
      description="DJI Fly has waypoints but no grid tool. Step by step: draw the area, pick a template, export a KMZ, load it on the DJI RC 2, fly, and check the overlap afterwards."
      datePublished="2026-11-08"
      related={{
        path: GUIDE_SKIPPED_PHOTOS_PATH,
        title: 'Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)',
      }}
      lead={
        <>
          <p>
            DJI Fly on the Mini 5 Pro has waypoint missions, but no grid generator and no
            overlap calculator. Placing every waypoint of a mapping grid by hand isn’t
            realistic, and at the time of writing DJI has not released a Mobile SDK for the
            Mini 5 Pro that other flight apps could use.
          </p>
          <p>
            The workaround is to build the grid as a KMZ file on a computer and load it into
            DJI Fly’s waypoint list on the remote controller. This guide walks through the
            whole process with Mini5Planner, a free planner for Mac and Windows, from
            drawing the area to checking the overlap after the flight.
          </p>
        </>
      }
    >
      <h2>What you need</h2>
      <ul>
        <li>
          A DJI Mini 5 Pro. The steps are the same for the other drones Mini5Planner
          supports, but only the Mini 5 Pro profile has been measured in the field.
        </li>
        <li>A DJI RC 2 remote controller. The transfer steps below are written for it.</li>
        <li>A USB-C data cable.</li>
        <li>
          A Mac or Windows PC with{' '}
          <Link to={EN_PATH}>Mini5Planner</Link> (free). On a Mac you also need OpenMTP
          (free), because Finder can’t read the controller.
        </li>
        <li>Photogrammetry software for the photos afterwards, such as WebODM.</li>
      </ul>

      <h2>Step 1: Draw the area</h2>
      <p>
        Open Mini5Planner and find your site on the map. Address search covers Norway;
        elsewhere you pan and zoom on the map or satellite layer. Draw the area with the
        polygon tool and click the first point to close it. The area must be between 100 m²
        and 5 km². Split bigger sites into several missions.
      </p>
      <p>
        Then drag the H marker to where the drone will actually take off. Battery use and
        terrain following are calculated from that point.
      </p>

      <h2>Step 2: Pick a template and adjust it</h2>
      <p>
        The templates set altitude, overlap, speed, gimbal angle and grid type for typical
        jobs:
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Template</th>
              <th scope="col">Altitude</th>
              <th scope="col">Front / side overlap</th>
              <th scope="col">Gimbal</th>
              <th scope="col">Grid</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((t) => (
              <tr key={t.name}>
                <th scope="row">{t.name}</th>
                <td data-label="Altitude">{t.altitude}</td>
                <td data-label="Front / side overlap">{t.overlap}</td>
                <td data-label="Gimbal">{t.gimbal}</td>
                <td data-label="Grid">{t.grid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Adjust altitude, front and side overlap, flight direction and gimbal angle in the
        side panel. The statistics update as you go: GSD, footprint, number of photos,
        flight time, distance and battery use.
      </p>
      <p>
        Keep an eye on the speed. If the camera can’t keep up at the speed you asked for,
        Mini5Planner lowers it and tells you why. On the Mini 5 Pro a 50 MP photo takes about
        5 seconds to save, and a route that ignores this{' '}
        <Link to={GUIDE_SKIPPED_PHOTOS_PATH}>loses photos without any warning</Link>.
      </p>
      <div className={styles.callout}>
        <p>
          <strong>For volumes and 3D models, fly a crosshatch and an oblique pass.</strong>{' '}
          In our own volume test without ground control points, straight-down photos alone
          gave volumes 3.4–5.5% too high, because the model came out stretched in height.
          Adding a crosshatch and photos at −45° brought the volume within ±1%.
        </p>
      </div>

      <h2>Step 3: Export the KMZ</h2>
      <p>
        Click <strong>Save KMZ</strong> and save the file on your computer. It uses DJI’s
        WPML 1.0.2 format, which DJI Fly reads.
      </p>
      <p>
        With Pro, two more options come into play here. Terrain following needs a confirmed
        takeoff point and finished elevation data before you can export. Battery split saves
        one KMZ per battery when the mission is too long for one.
      </p>

      <h2>Step 4: Copy the KMZ to the DJI RC 2</h2>
      <p>
        DJI Fly only lists waypoint missions it has created itself. So you first create a
        placeholder mission on the controller, then swap its file for yours. Mini5Planner’s
        transfer guide (<strong>Transfer to DJI RC 2</strong>, next to the export buttons)
        has the same steps as a checklist:
      </p>
      <ol>
        <li>
          Power on the DJI RC 2 and the drone, and wait until the drone has GPS. Waypoint
          mode in DJI Fly needs a GPS fix.
        </li>
        <li>
          Open DJI Fly on the controller, create a placeholder waypoint mission with 2–3
          waypoints and save it. Create one placeholder per route (for a split mission: one
          per part).
        </li>
        <li>Connect the controller to your computer with a USB-C data cable.</li>
        <li>Swipe down on the controller and select “File Transfer”.</li>
        <li>
          On Windows, open File Explorer. On a Mac, open OpenMTP (free, from
          openmtp.ganeshrvel.com). The DJI RC 2 shows up as a device.
        </li>
        <li>
          Go to the waypoint folder: <code>{RC_PATH}</code>
        </li>
        <li>
          Open the folder with the most recent modified date. That is your placeholder
          mission. Inside is one .kmz file with the same name as the folder, a long code.
        </li>
        <li>
          Copy that file name and paste it into the name field in Mini5Planner’s transfer
          guide. The app then saves your route with exactly that name. If you rename the
          file yourself, make sure Windows doesn’t turn it into “.kmz.kmz”.
        </li>
        <li>Delete the original .kmz file in the folder and copy yours in.</li>
        <li>
          Disconnect the cable, open the mission in DJI Fly and fly it. Don’t edit the
          mission or create new missions before you have flown, or DJI Fly overwrites the
          files.
        </li>
      </ol>
      <h3>Good to know</h3>
      <ul>
        <li>
          Missions are stored on the remote controller, not on the drone’s memory card.
        </li>
        <li>
          DJI Fly rewrites imported missions into its own compact format, so the file gets
          much smaller once DJI Fly has opened it. In our tests the waypoints were intact.
        </li>
        <li>
          After a firmware update our waypoint list looked empty and DJI Fly was logged
          out. The files were still there, and the missions came back when we logged in to
          the DJI account again. Log in and check before you create new placeholder
          missions.
        </li>
      </ul>

      <h2>Step 5: Fly the mission</h2>
      <p>
        Open the mission in DJI Fly, check the route on the map and take off from the spot
        you marked with H in Mini5Planner. Keep the drone in sight and follow the drone
        rules where you fly.
      </p>
      <ul>
        <li>
          <strong>Set the end-of-mission action in DJI Fly.</strong> DJI Fly uses its own
          setting and ignores the one in the file. On one of our flights the drone hovered
          over the last waypoint and kept taking photos until we took over.
        </li>
        <li>
          <strong>Fix the shutter speed in low light.</strong> In Pro mode with ISO and
          shutter on Auto, our Mini 5 Pro chose 1/8–1/10 s at ISO 100 at dusk. A fixed
          1/400 s with ISO on Auto gave about seven times sharper photos.
        </li>
        <li>
          <strong>Plan for the battery.</strong> For large areas, use battery split (Pro) or
          draw several smaller areas so each flight fits on one battery.
        </li>
      </ul>

      <h2>Step 6: Check the overlap before you leave</h2>
      <p>
        If you have a laptop with you, copy the photos over and open{' '}
        <strong>Calibrate / check flight</strong> in Mini5Planner. Choose the photo folder.
        The app only reads the metadata, and the photos are not changed or sent anywhere.
        It shows:
      </p>
      <ul>
        <li>the number of photos against the planned route, and the distance between photos</li>
        <li>the actual photo interval</li>
        <li>
          front overlap for every pair of photos (median and lowest), and how many pairs
          are more than 5 percentage points below your target
        </li>
        <li>the weakest spots, marked on the map</li>
      </ul>
      <p>
        Overlap is calculated from the height above the takeoff point. Where the ground
        rises above the takeoff point, the real overlap is slightly lower. If you see weak
        spots, fly that part again while you are still on site.
      </p>
      <p>
        If there are fewer photos than planned and they came at a steady interval of a few
        seconds, the camera was the bottleneck. You can save the measured interval as the
        camera limit for that drone, so the next route is planned at a speed the camera can
        keep up with.
      </p>

      <h2>Step 7: Process the photos</h2>
      <p>
        Mini5Planner plans the flight; it doesn’t stitch photos. Load them into
        photogrammetry software such as WebODM (ODM) to make an orthophoto, point cloud or
        3D model. If you would rather not run that yourself, we can{' '}
        <Link to={`${EN_PATH}#processing`}>process them in Kubatur</Link> for you.
      </p>
    </GuideLayout>
  )
}
