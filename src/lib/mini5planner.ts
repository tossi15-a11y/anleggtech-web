export const RELEASES_URL = 'https://github.com/tossi15-a11y/mini5planner-releases/releases/latest'
export const DOWNLOAD_MAC_URL = '/api/mini5planner-last-ned?plattform=mac'
export const DOWNLOAD_WINDOWS_URL = '/api/mini5planner-last-ned?plattform=windows'
export const BUY_PRO_URL = 'https://mini5planner-lisens.vercel.app/api/kjop'

export const NB_PATH = '/mini5planner'
export const EN_PATH = '/en/mini5planner'

export const MINI5PLANNER_LANGUAGES = [
  { code: 'nb', label: 'Norsk', short: 'NO', path: NB_PATH },
  { code: 'en', label: 'English', short: 'EN', path: EN_PATH },
  { code: 'de', label: 'Deutsch', short: 'DE', path: '/de/mini5planner' },
  { code: 'fr', label: 'Français', short: 'FR', path: '/fr/mini5planner' },
  { code: 'es', label: 'Español', short: 'ES', path: '/es/mini5planner' },
  { code: 'pt', label: 'Português', short: 'PT', path: '/pt/mini5planner' },
  { code: 'it', label: 'Italiano', short: 'IT', path: '/it/mini5planner' },
  { code: 'nl', label: 'Nederlands', short: 'NL', path: '/nl/mini5planner' },
  { code: 'pl', label: 'Polski', short: 'PL', path: '/pl/mini5planner' },
  { code: 'ja', label: '日本語', short: 'JA', path: '/ja/mini5planner' },
] as const

export type Mini5plannerLanguage = (typeof MINI5PLANNER_LANGUAGES)[number]['code']

export const MINI5PLANNER_PATHS = Object.fromEntries(
  MINI5PLANNER_LANGUAGES.map(({ code, path }) => [code, path]),
) as Record<Mini5plannerLanguage, string>
export const GUIDE_SKIPPED_PHOTOS_PATH = '/en/mini5planner/guides/mini-5-pro-skipped-photos'
export const GUIDE_GRID_MISSION_PATH = '/en/mini5planner/guides/mini-5-pro-grid-mapping-dji-fly'
export const GUIDE_LITCHI_ALTERNATIVE_PATH = '/en/mini5planner/guides/litchi-alternative-mini-5-pro-rc-2'
export const GUIDE_AIR_3S_PATH = '/en/mini5planner/guides/air-3s-mapping-mission'
export const GUIDE_PLANNER_COMPARISON_PATH = '/en/mini5planner/guides/dji-mapping-planner-comparison'

export const LANDING_ALTERNATES = [
  ...MINI5PLANNER_LANGUAGES.map(({ code, path }) => ({ hreflang: code, path })),
  { hreflang: 'x-default', path: EN_PATH },
]
