import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import { EN_PATH, GUIDE_GRID_MISSION_PATH, GUIDE_SKIPPED_PHOTOS_PATH } from '../../lib/mini5planner'
import styles from './Guide.module.css'

export default function GuideSkippedPhotos() {
  return (
    <GuideLayout
      path={GUIDE_SKIPPED_PHOTOS_PATH}
      title="Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)"
      description="A 50 MP photo takes the Mini 5 Pro about 5 s to save. Fly faster than that allows and photos are skipped silently: 154 planned became 89, overlap fell to 57%."
      datePublished="2026-11-08"
      related={[{
        path: GUIDE_GRID_MISSION_PATH,
        title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly',
      }]}
      lead={
        <>
          <p>
            On our first mapping flight with a DJI Mini 5 Pro, the route planned 154 photos.
            We got 89. Front overlap fell from the planned 85% to 57%, and nothing warned us:
            not DJI Fly, not the remote controller, not the flight log.
          </p>
          <p>
            Here is what happened, how to check whether it has happened to you, and the
            simple rule that fixes it, whichever planning tool you use.
          </p>
        </>
      }
    >
      <div className={styles.callout}>
        <p>
          <strong>Short answer:</strong> with 50 MP photos, the Mini 5 Pro needs about
          5 seconds to save each one (we measured 5.2 s). If your route asks for photos
          faster than that, the drone skips the ones it has no time for. Keep the speed at
          or below <strong>distance between photos ÷ 5 s</strong>. With 8 m between
          photos, that is 1.6 m/s.
        </p>
      </div>

      <h2>What happened on our first mapping flight</h2>
      <p>
        We planned a grid over a building plot in Norway: 154 photos, 7.3 m apart, with 85%
        front overlap, flown at 4 m/s. That works out to one photo every 1.8 seconds.
      </p>
      <p>
        The drone flew the whole route and the mission looked normal. But the memory card
        held 89 photos, about 21 m apart, and the front overlap was 57%. We only found out
        when the photos were processed.
      </p>

      <h2>Why it happens: about 5 seconds per 50 MP photo</h2>
      <p>
        A full-resolution Mini 5 Pro photo is 8192 × 6144 pixels, about 32 MB as a JPG.
        Saving it takes about 5 seconds. Measured over the whole series, the interval was
        5.17 s. (EXIF timestamps only have whole seconds, so a single pair of photos shows
        5 or 6 s.)
      </p>
      <p>
        DJI Fly does not slow the drone down to wait for the camera. The camera takes the
        next photo when it is ready, and the photos it has no time for are skipped without
        a warning. Our route asked for a photo every 1.8 s, so the drone got roughly every
        third one.
      </p>
      <p>
        A later test with denser routes showed the same thing: the photos came every 5
        seconds regardless of the waypoints, and only 45 of 108 waypoints got a photo. The
        camera’s rhythm decides where your photos end up, not the waypoint list.
      </p>

      <h2>How to tell if it happened to you</h2>
      <p>Look at the photos, not the flight log. There are three signs:</p>
      <ol>
        <li>
          <strong>Fewer photos than planned.</strong> Count the files and compare with the
          number of photos in your plan.
        </li>
        <li>
          <strong>A perfectly even rhythm.</strong> Read the capture time
          (DateTimeOriginal) of each photo. Photos taken at the waypoints have uneven
          intervals, because the distance changes at turns and transits. A steady 5-second
          rhythm, whether the drone covered 21 m or hovered, means the camera set the pace.
        </li>
        <li>
          <strong>Gaps that are whole multiples of the planned spacing.</strong> Our photos
          were about 21 m apart against a planned 7.3 m, roughly three times the spacing.
        </li>
      </ol>
      <p>Any EXIF tool will show this. With ExifTool, for example:</p>
      <code className={styles.codeBlock}>
        exiftool -T -FileName -DateTimeOriginal -GPSLatitude -GPSLongitude -n /path/to/photos
      </code>
      <p>
        Mini5Planner’s free <strong>Calibrate / check flight</strong> tool does the same
        from the photo folder. It shows the actual photo interval and the front overlap for
        every pair of photos, and marks the weak spots on the map.
      </p>

      <h2>The fix: let the camera set the speed</h2>
      <p>The rule is simple:</p>
      <p className={styles.formula}>max speed = distance between photos ÷ time to save one photo</p>
      <p>
        For the Mini 5 Pro with 50 MP photos, use 5 seconds. With 8 m between photos,
        {' 8\u00a0÷\u00a05\u00a0=\u00a01.6\u00a0m/s'}. The distance between photos follows from altitude and front
        overlap: the higher you fly, the larger each photo’s footprint, and the further
        apart the photos can be at the same overlap.
      </p>
      <p>
        With the speed capped like this, we flew the same site again, once east–west and
        once north–south. Both flights delivered 105 of 105 photos, 8.2 m apart, with 84%
        measured front overlap against the 85% we planned.
      </p>
      <div className={styles.tableWrap}>
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">First flight</th>
              <th scope="col">Speed set by the camera</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Photos</th>
              <td>89 of 154 planned</td>
              <td>105 of 105 (both flights)</td>
            </tr>
            <tr>
              <th scope="row">Distance between photos</th>
              <td>about 21 m (7.3 m planned)</td>
              <td>8.2 m</td>
            </tr>
            <tr>
              <th scope="row">Front overlap</th>
              <td>57% (85% planned)</td>
              <td>84% (85% planned)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Fly higher, not slower</h2>
      <p>
        Slowing down works, but it makes a long route even longer. Often the better fix is
        to fly higher. A larger footprint gives more distance between photos, which raises
        the speed limit and shortens the route. The trade-off is a coarser ground sampling
        distance (GSD), so check that it is still fine enough for the job.
      </p>

      <h2>What about other drones and photo modes?</h2>
      <p>
        Every camera has its own save time. We have only measured the Mini 5 Pro with
        50 MP photos, not its other photo modes and not other drones. If you fly a Mini 4
        Pro, an Air 3 or 3S or a Mavic, check the timestamps from your first mapping
        flight the same way. Mini5Planner uses an estimated 2 seconds for those drones until
        you calibrate them from your own photos.
      </p>

      <h2>How Mini5Planner handles it</h2>
      <ul>
        <li>
          It works out the distance between photos from the camera, altitude and overlap,
          and caps the mission speed at that distance divided by the camera’s save time
          (5.2 s for the Mini 5 Pro), rounded down to the nearest 0.1 m/s.
        </li>
        <li>
          The speed written to the KMZ is the speed the drone can actually fly, and the
          flight time and battery estimates use it.
        </li>
        <li>
          When it lowers the speed you asked for, the statistics panel says so and explains
          why.
        </li>
        <li>
          After the flight, Calibrate / check flight reads the photo metadata and shows the
          real photo interval and overlap. If the camera was the bottleneck, you can save
          the measured interval as that drone’s camera limit.
        </li>
      </ul>
      <p>
        The step-by-step process, from drawing the area to loading the route in DJI Fly, is
        in our guide to{' '}
        <Link to={GUIDE_GRID_MISSION_PATH}>flying a grid mapping mission with the Mini 5 Pro</Link>.
        More about the app is on the <Link to={EN_PATH}>Mini5Planner page</Link>.
      </p>
    </GuideLayout>
  )
}
