import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import {
  GUIDE_AIR_3S_PATH,
  GUIDE_GRID_MISSION_PATH,
  GUIDE_LITCHI_ALTERNATIVE_PATH,
  GUIDE_PLANNER_COMPARISON_PATH,
  GUIDE_SKIPPED_PHOTOS_PATH,
} from '../../lib/mini5planner'
import styles from './Guide.module.css'

const DJI_SPECS_URL = 'https://www.dji.com/air-3s/specs'
const DJI_WAYPOINT_URL =
  'https://support.dji.com/help/content?customId=en-us03400007343&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper'
const FEEDBACK_MAILTO = 'mailto:torstein@anleggtech.no?subject=Air%203S%20photo%20interval'

const specs = [
  { label: 'Image sensor', value: '1-inch CMOS, 50 MP effective pixels' },
  { label: 'Field of view', value: '84°' },
  { label: 'Format equivalent', value: '24 mm' },
  { label: 'Aperture', value: 'f/1.8' },
  { label: 'Max image size', value: '8192 × 6144' },
  { label: 'Single shot', value: '12 MP and 50 MP' },
  { label: 'Shortest timed-shot interval', value: '2 s at 12 MP, 5 s at 50 MP' },
  { label: 'Max horizontal speed', value: '21 m/s (19 m/s in the EU)' },
  { label: 'Max flight time', value: '45 minutes' },
  { label: 'Takeoff weight and class', value: '724 g, C1 (EU)' },
]

// Som Air 3S-profilen i appen fra 1.3.8: Mini 5 Pro-geometrien (12,913 × 9,685 mm, f 8,67 mm),
// 8192 px på tvers, 80/70 % overlapp og 5,2 s per bilde
const altitudes = [
  { alt: 50, gsd: '0.91', footprint: '74 × 56 m', line: '22.3 m', photo: '11.2 m', v2: '5.6 m/s', v5: '2.1 m/s' },
  { alt: 60, gsd: '1.09', footprint: '89 × 67 m', line: '26.8 m', photo: '13.4 m', v2: '6.7 m/s', v5: '2.6 m/s' },
  { alt: 80, gsd: '1.45', footprint: '119 × 89 m', line: '35.7 m', photo: '17.9 m', v2: '8.9 m/s', v5: '3.4 m/s' },
  { alt: 100, gsd: '1.82', footprint: '149 × 112 m', line: '44.7 m', photo: '22.3 m', v2: '11.2 m/s', v5: '4.3 m/s' },
  { alt: 120, gsd: '2.18', footprint: '179 × 134 m', line: '53.6 m', photo: '26.8 m', v2: '13.4 m/s', v5: '5.2 m/s' },
]

export default function GuideAir3sMapping() {
  return (
    <GuideLayout
      path={GUIDE_AIR_3S_PATH}
      title="How to plan a mapping mission for the DJI Air 3S"
      description="DJI’s camera specs for the Air 3S, GSD and photo spacing per altitude, overlap, DJI Fly waypoints and the DJI RC 2, and how to measure the real photo interval."
      datePublished="2026-11-10"
      related={[
        { path: GUIDE_LITCHI_ALTERNATIVE_PATH, title: 'Litchi alternative for DJI Mini 5 Pro and the DJI RC 2' },
        { path: GUIDE_PLANNER_COMPARISON_PATH, title: 'DJI grid mapping planners compared (November 2026)' },
        {
          path: GUIDE_SKIPPED_PHOTOS_PATH,
          title: 'Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)',
        },
      ]}
      lead={
        <>
          <p>
            The Air 3S has waypoint flight in DJI Fly, but no grid tool, and no SDK that
            third-party flight apps could use to fly it. So a mapping grid is planned on a
            computer, saved as a KMZ file and flown by DJI Fly’s own waypoint mode, the same way
            as on the Mini 5 Pro.
          </p>
          <p>
            This guide goes through the camera numbers that matter for mapping, the GSD and
            photo spacing they give, how to get the route onto the DJI RC 2, and how to measure
            what the camera really manages after your first flight.
          </p>
        </>
      }
    >
      <div className={styles.callout}>
        <p>
          <strong>We have not flown the Air 3S ourselves.</strong> Mini5Planner’s Air 3S profile
          has not been tested in the field. Since version 1.3.8 it uses DJI’s 50 MP image size,
          the field of view we measured on the Mini 5 Pro (DJI lists both drones at 84°) and
          5.2 seconds per photo. None of that has been measured on an Air 3S. If you fly one,
          the check after your first flight corrects the profile for your drone, and we would
          like to hear what you find.
        </p>
      </div>

      <h2>The Air 3S camera for mapping</h2>
      <p>
        Map with the wide-angle camera. The 70 mm medium tele has a 35° field of view, so it
        covers a much smaller patch of ground per photo. These are{' '}
        <Ext href={DJI_SPECS_URL}>DJI’s published specs</Ext> for the wide-angle camera, read on
        10 November 2026:
      </p>
      <div className={styles.tableWrap}>
        <table>
          <tbody>
            {specs.map((s) => (
              <tr key={s.label}>
                <th scope="row">{s.label}</th>
                <td>{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>GSD and footprint per altitude</h2>
      <p>Mini5Planner works out the ground sample distance (GSD) like this:</p>
      <p className={styles.formula}>GSD = altitude × sensor width ÷ (focal length × image width)</p>
      <p>
        Sensor width divided by focal length is the footprint width per metre of altitude.
        DJI gives the field of view instead of the sensor size: 84° across the diagonal, or
        24 mm in 35 mm terms, the same as for the Mini 5 Pro. On our Mini 5 Pro the photos
        covered about 3% more ground than that when we measured them against ground control
        points, and Mini5Planner uses the measured geometry for the Air 3S too. That is a
        footprint of about 1.49 × the altitude across and 1.12 × the altitude along. With 8192
        pixels across at 50 MP:
      </p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th scope="col">Altitude</th>
              <th scope="col">GSD at 50 MP</th>
              <th scope="col">Footprint (across × along)</th>
            </tr>
          </thead>
          <tbody>
            {altitudes.map((a) => (
              <tr key={a.alt}>
                <th scope="row">{a.alt} m</th>
                <td>{a.gsd} cm/px</td>
                <td>{a.footprint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        At 12 MP the photo has about half as many pixels across, so the GSD is roughly twice as
        coarse.
      </p>
      <p>
        With DJI’s nominal 84° the numbers come out about 3% smaller, for example 1.41 cm/px
        at 80 m. Which of the two fits the Air 3S hasn’t been measured.
      </p>

      <h2>Overlap, photo spacing and speed</h2>
      <p>
        For a map, 80% front and 70% side overlap is a good place to start. That is what
        Mini5Planner’s Small site template uses. For 3D models and volumes, fly a double grid
        (crosshatch) with more overlap, like the Excavation site template (85% / 75%).
      </p>
      <p>
        The flight lines are footprint width × (1 − side overlap) apart, and the photos
        footprint length × (1 − front overlap) apart. With 80% / 70%:
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Altitude</th>
              <th scope="col">Line spacing</th>
              <th scope="col">Photo spacing</th>
              <th scope="col">Max speed at 2 s per photo</th>
              <th scope="col">Max speed at 5.2 s per photo</th>
            </tr>
          </thead>
          <tbody>
            {altitudes.map((a) => (
              <tr key={a.alt}>
                <th scope="row">{a.alt} m</th>
                <td data-label="Line spacing">{a.line}</td>
                <td data-label="Photo spacing">{a.photo}</td>
                <td data-label="Max speed at 2 s">{a.v2}</td>
                <td data-label="Max speed at 5.2 s">{a.v5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        The speed is the catch. If the drone flies faster than photo spacing ÷ photo interval,
        the camera can’t keep up and{' '}
        <Link to={GUIDE_SKIPPED_PHOTOS_PATH}>photos are skipped without any warning</Link>.
        Mini5Planner lowers the speed to that limit and tells you why.
      </p>
      <p>
        What we don’t know yet is how long the Air 3S needs per photo in a waypoint mission.
        DJI’s timed mode starts at 2 seconds for 12 MP and 5 seconds for 50 MP, and our Mini 5
        Pro needs about 5.2 seconds per 50 MP photo on a mapping flight. The profile uses 5.2
        seconds, so Mini5Planner keeps the speed within the right-hand column. Waypoint photos
        aren’t timed shots, so none of these numbers proves what the Air 3S does. Until you
        have measured it:
      </p>
      <ul>
        <li>Make your first flight a small area, at the speed Mini5Planner suggests.</li>
        <li>
          If you shoot 12 MP, the camera may keep up at a higher speed. Measure it before you
          raise <strong>Speed</strong> in the side panel.
        </li>
      </ul>

      <h2>Plan the mission in Mini5Planner</h2>
      <ol>
        <li>
          Open <strong>Settings</strong> and choose DJI Air 3S as the active drone. All drones
          are included in the free version.
        </li>
        <li>Draw the area with the polygon tool and drag the H marker to your takeoff spot.</li>
        <li>
          Pick a template, then adjust altitude, overlap and flight direction. Keep an eye on
          the speed note in the statistics.
        </li>
        <li>
          Click <strong>Save KMZ</strong>.
        </li>
      </ol>
      <div className={styles.callout}>
        <p>
          <strong>Use Mini5Planner 1.3.8 or newer.</strong> Older versions had the wrong image
          size and 2 seconds per photo for the Air 3S. The GSD they showed was too coarse for
          50 MP photos, and the speed they allowed was too high. The app updates itself, or use{' '}
          <strong>Help › Check for updates</strong>. Plan any older Air 3S routes again.
        </p>
      </div>

      <h2>Load it on the DJI RC 2 and fly</h2>
      <p>
        DJI’s specs cover both the DJI RC-N3 and the DJI RC 2 for the Air 3S. Mini5Planner’s
        transfer guide (<strong>Transfer to DJI RC 2</strong>, next to the export buttons) is
        written for the RC 2: you create a placeholder waypoint mission in DJI Fly, connect the
        RC 2 to your computer with a USB-C data cable and replace the placeholder’s KMZ file
        with yours. The full steps are in{' '}
        <Link to={GUIDE_GRID_MISSION_PATH}>our grid mission guide</Link>. With the RC-N3, DJI
        Fly runs on your phone, so the mission files are on the phone instead.
      </p>
      <ul>
        <li>
          <strong>Set the end-of-mission action in DJI Fly.</strong> According to{' '}
          <Ext href={DJI_WAYPOINT_URL}>DJI</Ext>, it can be return to home, land, hover or back
          to start, and it defaults to return to home. In our tests with the Mini 5 Pro, DJI Fly
          used its own setting, not the one in the file.
        </li>
        <li>
          <strong>Note whether you shoot 12 MP or 50 MP.</strong> The GSD depends on it, and
          DJI’s timed-shot limits suggest the photo interval might too.
        </li>
      </ul>

      <h2>After the first flight: measure the real photo interval</h2>
      <p>
        Copy the photos to your computer and open <strong>Calibrate / check flight</strong> in
        Mini5Planner. Choose the photo folder. The app only reads the metadata (EXIF), and the
        photos are not changed or sent anywhere.
      </p>
      <ol>
        <li>
          Under <strong>Camera</strong>, check the camera model and resolution. The app
          estimates the sensor size from the 35 mm equivalent focal length, accurate to a couple
          of percent.
        </li>
        <li>
          <strong>Photo interval</strong> shows the seconds per photo on the flight.
        </li>
        <li>
          Under <strong>Coverage check</strong>, compare the number of photos with the planned
          route, and look at the front overlap (median and lowest) and the weakest spots on the
          map.
        </li>
        <li>
          Read the result. <strong>Fewer photos than planned, at a steady interval:</strong> the
          camera was the bottleneck, and the interval is its real limit. Tick{' '}
          <strong>Use measured photo interval as camera limit</strong>.{' '}
          <strong>As many photos as planned:</strong> the camera kept up, and the interval only
          shows how fast you flew. Leave the box unticked.
        </li>
        <li>
          Choose the Air 3S under <strong>Save for</strong> and click{' '}
          <strong>Save calibration</strong>. New routes for the Air 3S then use the image size,
          focal length and sensor size from your photos, and the interval if you ticked it.
        </li>
      </ol>
      <p>
        If the statistics said the speed was reduced for the camera, the flight tests the
        5.2-second setting: if the camera needs longer, you get fewer photos than planned, and
        the check shows the real interval.
      </p>

      <h2>Tell us what you measured</h2>
      <p>
        We want the Air 3S profile to be measured, like the Mini 5 Pro’s. If you fly it, send
        us the photo size (12 or 50 MP), photos planned and taken, the speed, the interval the
        check showed, and your DJI Fly and firmware versions. Email{' '}
        <a href={FEEDBACK_MAILTO}>torstein@anleggtech.no</a>. A single flight helps.
      </p>
    </GuideLayout>
  )
}
