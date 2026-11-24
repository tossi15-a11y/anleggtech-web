import { Link } from 'react-router-dom'
import GuideLayout from './GuideLayout'
import Ext from './ExternalLink'
import { SV_EN_PATH, SV_GUIDE_COMPARISON_PATH, SV_GUIDE_DOCUMENT_SITE_PATH } from '../../lib/siteview360'
import styles from './Guide.module.css'

const INSTA360_GPS = 'https://onlinemanual.insta360.com/onex2/en-us/operating_tutorials/clips/gps'

export default function GuideDocumentSite360() {
  return (
    <GuideLayout
      product="siteview360"
      path={SV_GUIDE_DOCUMENT_SITE_PATH}
      title="How to document a construction site with a 360 camera"
      description="Step by step: plan the walk, record with a 360 camera, export a stitched 2:1 MP4 and a GPX track from the camera’s app, import into SiteView360, add notes and share."
      datePublished="2026-11-24"
      related={[
        { path: SV_GUIDE_COMPARISON_PATH, title: 'Street View-style site documentation tools compared (November 2026)' },
      ]}
      lead={
        <>
          <p>
            Photos from a site visit show what you pointed the camera at. A 360 camera records
            everything around you, so one walk across the site gives you a record of the
            whole place as it looked that day.
          </p>
          <p>
            This guide shows how we do it: record the walk, export the video and the GPS
            track from the camera’s app, and turn it into a Street View-style tour in{' '}
            <Link to={SV_EN_PATH}>SiteView360</Link>, a desktop app for Mac and Windows. The
            tour stays on your computer until you share it.
          </p>
        </>
      }
    >
      <h2>What you need</h2>
      <ul>
        <li>
          A 360 camera whose app can export a stitched 360 video. We use an Insta360 camera
          and Insta360 Studio. From version 1.3.0 SiteView360 also takes ordinary video
          from a phone, but then you cannot look around at each stop, so this guide uses a
          360 camera.
        </li>
        <li>
          The camera’s phone app, if you control the camera from your phone. With an
          Insta360 camera it can also give you the GPS track (step 2).
        </li>
        <li>
          A Mac with macOS 13 or later, or a 64-bit Windows 10 or 11 PC, with{' '}
          <Link to={SV_EN_PATH}>SiteView360</Link>. The free edition makes one tour with up to
          60 images.
        </li>
        <li>Optional: a GPS track of the walk as a GPX file.</li>
      </ul>

      <h2>Step 1: Plan the walk</h2>
      <p>
        Decide where to start and stop, and walk a route that passes what you need to
        document: existing buildings and walls, the neighbouring property, roads, drains and
        manholes, slopes and the edges of the site.
      </p>
      <p>
        Think about the length. SiteView360 takes out one image every 5 seconds unless you
        choose otherwise, so the free edition’s 60 images are about five minutes of walking.
        Pro has no limit.
      </p>
      <p>
        If you will come back to show progress or compare before and after, start in the
        same place and walk the same route each time. That makes the tours easier to compare.
      </p>

      <h2>Step 2: Record the walk</h2>
      <p>
        If you want the images on a map, make sure GPS is recorded before you start.
        Insta360’s{' '}
        <Ext href={INSTA360_GPS}>manual for the X series</Ext> says to “Enable the GPS switch
        on the Shooting page in the app before shooting”. When you control the camera through
        the app, the camera records the location of the phone. Other cameras do this
        differently, so check the manual for yours.
      </p>
      <ul>
        <li>
          Hold the camera above head height, for example on a pole. It then sees over cars
          and fences, and you take up less of the image.
        </li>
        <li>
          Walk at a steady pace. At about one metre per second, 5 seconds between images
          gives an image roughly every 5 metres. Walk more slowly where you want the images
          closer together.
        </li>
        <li>
          Check that the camera clock is right. SiteView360 warns you if the clock does not
          match the GPS track, and you can adjust the offset, but it is easier to get it
          right from the start.
        </li>
        <li>
          Tell the people on site that you are recording. SiteView360 does not blur faces.
        </li>
      </ul>

      <h2>Step 3: Export a stitched 2:1 MP4 and the GPX track</h2>
      <p>
        SiteView360 does not read the camera’s raw files. It needs the finished 360 video,
        exported from the camera’s own app:
      </p>
      <ul>
        <li>an MP4 file</li>
        <li>
          stitched and equirectangular, with the width twice the height (2:1), for example
          7680 × 3840 for 8K
        </li>
        <li>
          a full 360 video, not a reframed flat video. Raw Insta360 files (.insv) are not
          accepted either
        </li>
      </ul>
      <p>
        With an Insta360 camera, export the clip from Insta360 Studio as a 360 video in MP4,
        and check the size of the exported file before you import it.
      </p>
      <p>
        For the GPS track, Insta360’s{' '}
        <Ext href={INSTA360_GPS}>manual</Ext> describes an “Export GPX File” option in
        Insta360 Studio: “The exported video itself contains no GPS data, but a separate GPX
        file containing all the GPS data is generated.” That GPX file is the one SiteView360
        uses. With other cameras, look in the manual for how to export the track as GPX.
      </p>

      <h2>Step 4: Import into SiteView360</h2>
      <ol>
        <li>Open SiteView360, create a project for the site and open it.</li>
        <li>Click <strong>New tour</strong>.</li>
        <li>
          Drag the MP4 into the window, together with the GPX file if you have one, or use
          the file pickers.
        </li>
        <li>Give the tour a name, for example the date or “Before groundworks”.</li>
        <li>
          Set <strong>Seconds between images</strong>. The default is 5, and you can choose
          from 0.5 to 60. Fewer seconds give more images, closer together.
        </li>
        <li>Click <strong>Create tour</strong>.</li>
      </ol>
      <figure className={styles.figure}>
        <img
          src="/images/siteview360/upload.png"
          alt="SiteView360 new tour form with fields for tour name, 360 video, GPX track, seconds between images and image quality"
          width={1400}
          height={868}
          loading="lazy"
        />
        <figcaption>
          The New tour form: the 360 video, an optional GPX track and the seconds between
          images.
        </figcaption>
      </figure>
      <p>
        SiteView360 takes out one image every N seconds and saves it as WebP, up to 8192
        pixels wide, plus a 4096-pixel copy for phones. As one example, a 62-second 8K
        recording from an Insta360 camera became 13 images in 100 seconds on a Mac Studio.
        The time depends on the video and the computer.
      </p>
      <p>
        With a GPX track, each image is placed on the map. If the camera clock and the track
        do not match, SiteView360 warns you, and you can adjust the offset. Without a track,
        the tour has no position on the map, but you can still walk through it, add notes
        and share it.
      </p>

      <h2>Step 5: Walk through the tour and add notes</h2>
      <p>
        Open the tour and drag to look around. Click the arrow in the image to go to the next
        or previous place. The view keeps pointing the same way from one image to the next,
        so you can follow a wall or a ditch along the route. The timeline at the bottom jumps
        to any point in the walk, and with a GPS track the minimap shows the route and where
        you are.
      </p>
      <p>
        Use <strong>Note</strong> to pin a note to a point in the image, for example an
        existing crack in a wall, a manhole or a property marker.
      </p>
      <figure className={styles.figure}>
        <img
          src="/images/siteview360/viewer.webp"
          alt="SiteView360 tour viewer with an arrow to the next image, a minimap with the route, a Note button, a compass and a timeline"
          width={1400}
          height={868}
          loading="lazy"
        />
        <figcaption>
          Image 3 of 13: the arrow to the next image, the minimap with the route, the Note
          button, the compass and the timeline.
        </figcaption>
      </figure>

      <h2>Step 6: Share the tour</h2>
      <p>The app uploads nothing by itself. You choose how the tour leaves your computer:</p>
      <ul>
        <li>
          <strong>QR code.</strong> <strong>Share by QR</strong> shows a code that opens the
          tour in the browser on a phone that is on the same Wi‑Fi as your computer.
        </li>
        <li>
          <strong>HTML export.</strong> <strong>Export</strong> saves the tour as a folder you
          can upload to any static web host, for example your own website, and then send the
          link. The exported tour loads nothing from the internet except the map tiles from
          OpenStreetMap. The demo on the{' '}
          <Link to={`${SV_EN_PATH}#demo`}>SiteView360 page</Link> is such an export.
        </li>
        <li>
          <strong>PDF report.</strong> To keep with the other project documents.
        </li>
      </ul>
      <p>
        In the free edition, shared tours, exports and reports are marked “Made with
        SiteView360”. With Pro, they carry your company name and logo instead.
      </p>

      <h2>Step 7: Come back and compare</h2>
      <p>
        On the next visit, record a new tour and add it to the same project, so one project
        holds the site before, during and after the work. The free edition has room for one
        tour; Pro has no limit and shows two tours side by side for a before/after
        comparison. The map page shows all your projects.
      </p>

      <h2>Good to know</h2>
      <ul>
        <li>
          Tours are stored only on your computer. There is no account and no cloud copy, so
          make sure the computer is backed up.
        </li>
        <li>
          SiteView360 places images on a map from the GPS track. It has no floor plans or
          indoor positioning. Without a GPS track, the tour is a sequence of images you step
          through.
        </li>
        <li>
          Before you put a tour on a public website, look through it for faces, number
          plates and anything else that should not be published.
        </li>
      </ul>
      <p className={styles.sourceNote}>
        Insta360 instructions quoted from Insta360’s online manual,{' '}
        <Ext href={INSTA360_GPS}>X Series: GPS Data</Ext>, read 24 November 2026. Menu names
        can change between versions of Insta360 Studio.
      </p>
    </GuideLayout>
  )
}
