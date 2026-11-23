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

// Mini 5 Pro-profilen i appen (12,913 × 9,685 mm, f 8,67 mm, 8192 px), malen Small site:
// 60 m, 80/70 % → linjer 26,8 m og bilder 13,4 m. Overlapp = 1 − (1 − planlagt) × 60 / høyde over bakken.
const groundRows = [
  { ground: 'Ground 30 m higher', agl: '30 m', gsd: '0.55', front: '60%', side: '40%' },
  { ground: 'Ground 20 m higher', agl: '40 m', gsd: '0.73', front: '70%', side: '55%' },
  { ground: 'Ground level with takeoff', agl: '60 m', gsd: '1.09', front: '80%', side: '70%' },
  { ground: 'Ground 20 m lower', agl: '80 m', gsd: '1.45', front: '85%', side: '78%' },
]

export default function GuideTerrainFollow() {
  return (
    <GuideLayout
      path={GUIDE_TERRAIN_FOLLOW_PATH}
      title="DJI Mini 5 Pro terrain follow mapping: constant height above ground"
      description="On a slope, one fixed altitude changes GSD and overlap. How terrain follow keeps a DJI Mini 5 Pro at one height above ground, and how to fly it safely."
      datePublished="2026-11-22"
      related={[
        { path: GUIDE_BATTERY_SPLIT_PATH, title: 'Split a large mapping mission across multiple batteries in DJI Fly' },
        { path: GUIDE_GRID_MISSION_PATH, title: 'How to fly a grid mapping mission with a DJI Mini 5 Pro in DJI Fly' },
        {
          path: GUIDE_SKIPPED_PHOTOS_PATH,
          title: 'Why your DJI Mini 5 Pro skips photos on mapping flights (and how to fix it)',
        },
      ]}
      lead={
        <>
          <p>
            A mapping route flown at one fixed altitude keeps that height above the takeoff
            point, not above the ground under the drone. On flat ground that makes no
            difference. On a hillside it does: where the ground rises, the drone gets closer to
            it and each photo covers less ground, and where the ground falls away, the drone
            ends up higher and the detail gets coarser.
          </p>
          <p>
            Terrain follow gives every waypoint its own height, so the drone stays at the same
            height above the ground across the site. This guide explains why that matters for
            mapping, how Mini5Planner works out the heights for a DJI Mini 5 Pro mission in DJI
            Fly, where the elevation data comes from, and what to check before you fly in steep
            terrain.
          </p>
        </>
      }
    >
      <h2>Why one altitude doesn’t work on a slope</h2>
      <p>
        The ground sample distance (GSD), the footprint of each photo and therefore the
        overlap all depend on the height above the ground. A grid is planned for one height:
        the distance between the flight lines and between the photos is worked out from it and
        then fixed in the route.
      </p>
      <p>
        Take the Small site template on a Mini 5 Pro: 60 m, 80% front and 70% side overlap.
        Mini5Planner then spaces the flight lines 26.8 m apart and the photos 13.4 m apart. Fly
        that route at 60 m above the takeoff point over ground that is higher or lower than the
        takeoff point, and this is what you get:
      </p>
      <div className={styles.tableWrap}>
        <table className={styles.stackTable}>
          <thead>
            <tr>
              <th scope="col">Ground compared with the takeoff point</th>
              <th scope="col">Height above ground</th>
              <th scope="col">GSD (cm/px)</th>
              <th scope="col">Front overlap</th>
              <th scope="col">Side overlap</th>
            </tr>
          </thead>
          <tbody>
            {groundRows.map((r) => (
              <tr key={r.ground}>
                <th scope="row">{r.ground}</th>
                <td data-label="Height above ground">{r.agl}</td>
                <td data-label="GSD (cm/px)">{r.gsd}</td>
                <td data-label="Front overlap">{r.front}</td>
                <td data-label="Side overlap">{r.side}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.sourceNote}>
        Calculated with Mini5Planner’s Mini 5 Pro camera profile at 50 MP. The route is the
        same in every row; only the ground under it changes.
      </p>
      <p>The rule behind the table:</p>
      <p className={styles.formula}>
        real overlap = 1 − (1 − planned overlap) × planned height ÷ real height above ground
      </p>
      <p>
        So the overlap drops where the ground is high, and the detail gets coarser where it is
        low. The bigger problem is clearance. A route planned at 60 m is only 30 m above a
        hilltop that is 30 m higher than the takeoff point, and where the ground rises more than
        the planned height, a fixed-altitude route runs into the hillside.
      </p>

      <h2>Check your site first (free)</h2>
      <p>
        The free version of Mini5Planner has a <strong>Check terrain</strong> button under
        Statistics. It looks up the ground elevation at the takeoff point and at every photo
        position, and shows the ground at the takeoff point, the lowest and highest ground on
        the route, and the variation. Above 30 m of variation it says “Large elevation
        variation — consider terrain follow”.
      </p>
      <p>
        Put your own numbers into the rule above. If the overlap over the highest ground drops
        below what you can accept, or the clearance gets thin, use terrain follow.
      </p>

      <h2>How terrain follow works in Mini5Planner</h2>
      <p>
        Terrain follow is a Pro feature. With it turned on, the altitude you set becomes the
        height above the ground instead of the height above the takeoff point. From version
        1.3.11 you can turn it on without Pro and see the heights, warnings and elevation
        sources for your site; saving the route needs Pro.
      </p>
      <ol>
        <li>Draw the area and pick a template or your own settings, as for any grid.</li>
        <li>
          Turn on <strong>Terrain follow (AGL)</strong> in the side panel.
        </li>
        <li>
          Put the takeoff point in the right place. Drag the H marker to the exact spot you
          will take off from, or click <strong>Confirm takeoff point</strong> if it is already
          there. The app won’t export the route until the takeoff point is confirmed.
        </li>
        <li>
          Wait for the elevation data. Mini5Planner looks up the ground at the takeoff point
          and at every photo position. Export is blocked while it loads.
        </li>
        <li>
          Read the panel. It shows “Terrain follow active”, the lowest and highest waypoint
          height relative to the takeoff point, the ground elevation at the takeoff point, which
          elevation data was used, and any warnings.
        </li>
        <li>
          Save the KMZ. Before it writes the file, the app checks the height above the ground
          along the whole route (see below). Then load it on the controller with a new
          placeholder mission, as described in the{' '}
          <Link to={GUIDE_GRID_MISSION_PATH}>grid mission guide</Link>.
        </li>
      </ol>
      <p>
        Each waypoint gets the height you set plus the difference between the ground there and
        the ground at the takeoff point. At 60 m, a photo position where the ground is 25 m
        higher than the takeoff point gets 85 m, and one where the ground is 10 m lower gets
        50 m. The heights in the KMZ are relative to the takeoff point, which is also how{' '}
        <Ext href={DJI_WAYPOINT_URL}>DJI describes waypoint altitude in DJI Fly</Ext>.
      </p>
      <p>
        Line spacing, photo spacing and the camera-based speed limit are the same as without
        terrain follow. The GSD and overlap in the statistics are for the height you set, and
        with terrain follow that is what you get across the site, as far as the elevation data
        is right.
      </p>

      <h2>Where the elevation data comes from</h2>
      <ul>
        <li>
          <strong>In Norway:</strong> Kartverket’s 1 m terrain model, used when the takeoff
          point and the whole route are in Norway. Points Kartverket has no value for, for
          example across the border, are taken from the global model.
        </li>
        <li>
          <strong>Everywhere else:</strong> Copernicus GLO-30, a global elevation model with
          30 m resolution. The app names the source, shows the credit the license requires,
          and warns: “In steep terrain heights can be off by 10–30 m, so keep a good margin.”
        </li>
        <li>
          <strong>Gaps:</strong> where Copernicus has no data, or the download fails, the app
          uses the ASTER 30 m model from OpenTopoData instead.
        </li>
      </ul>
      <p>
        The data is downloaded while you plan, so you need an internet connection. If it can’t
        be fetched, the app says so and won’t export a terrain-following route. If only some
        points have no value, it says how many “had no elevation data (interpolated)” and uses
        the height of the nearest point along the route that has one. Treat that as a
        warning: over those points the route does not follow the real ground.
      </p>

      <h2>Flying terrain follow safely</h2>
      <ul>
        <li>
          <strong>Take off exactly at H.</strong> All heights are relative to the takeoff
          point. In the app’s words: taking off 10 m lower than the marker makes the drone fly
          10 m lower above the terrain. If you{' '}
          <Link to={GUIDE_BATTERY_SPLIT_PATH}>split the mission into legs</Link>, every leg must
          take off from the same point.
        </li>
        <li>
          <strong>Keep a margin for the data.</strong> With 30 m data in steep terrain, add the
          10–30 m the app warns about to the height you would otherwise choose.
        </li>
        <li>
          <strong>Obstacles are not in the elevation data.</strong> Neither model shows power
          lines, masts or single trees: Kartverket’s model is the bare ground, and a 30 m grid
          is too coarse for them. Set the height above ground so it clears the tallest obstacle
          with room to spare. In Norway the map has a <strong>Power lines and masts</strong>{' '}
          layer (NVE) in the layer menu, which the app notes is not a complete obstacle
          register.
        </li>
        <li>
          <strong>The whole route is checked, not just the photo positions.</strong> Between
          two waypoints the drone flies a straight line, so a hill under a long leg can bring it
          much closer to the ground than the height you set: from the takeoff point to the first
          photo, between the line ends in an irregular area, or in a double grid from the end of
          the first pass to the start of the second. From version 1.3.11, Mini5Planner looks up
          the ground every 10 m along the route when you save. With terrain follow it adds
          waypoints without photos where the route would come lower than 80 % of your height
          above the ground or 20 m, whichever is more. A route that would go into the ground
          can’t be saved. The added waypoints have not been flown in DJI Fly yet, so check the
          route on the map before takeoff. Version 1.3.8 and earlier only checked the photo
          positions: update before you fly terrain follow in hilly terrain.
        </li>
        <li>
          <strong>Set the return-to-home altitude in DJI Fly.</strong> Return to home uses its
          own altitude setting, not the heights in the route. Set it high enough to clear the
          highest ground and obstacles between the area and the takeoff point.
        </li>
        <li>
          <strong>Read the warnings.</strong> Less than 20 m above the ground anywhere along the
          route, more than 120 m above the takeoff point, and missing elevation data all have to
          be confirmed before the route is saved. Above 120 m, raise the max altitude limit in
          DJI Fly, and check the height rules where you fly before you do.
        </li>
        <li>
          <strong>Keep the drone in sight.</strong> A ridge can block your view and the radio
          link. Choose a takeoff point where you can see the whole area.
        </li>
        <li>
          <strong>Check the route in DJI Fly before takeoff.</strong> Use a new placeholder
          mission for every route, and make sure the map shows your route, not the placeholder
          or an old one.
        </li>
      </ul>

      <h2>After the flight</h2>
      <p>
        <strong>Calibrate / check flight</strong> reads the photos’ metadata and shows the
        front overlap between neighbouring photos. It calculates the overlap from the height above the
        takeoff point, not above the ground. On a terrain-following flight, the real overlap is
        therefore lower than the check shows wherever the ground is higher than the takeoff
        point.
      </p>

      <h2>Terrain follow is part of Mini5Planner Pro</h2>
      <p>
        Planning, the templates, the camera-based speed limit, Check terrain and Calibrate /
        check flight are free. Terrain follow and{' '}
        <Link to={GUIDE_BATTERY_SPLIT_PATH}>battery split</Link> come with Pro, a $19 one-time
        purchase with no subscription. Both work the same way for all seven DJI drones in the
        app, though only the Mini 5 Pro camera profile has been measured in the field. See{' '}
        <Link to={`${EN_PATH}#pro`}>Mini5Planner Pro</Link>.
      </p>
    </GuideLayout>
  )
}
