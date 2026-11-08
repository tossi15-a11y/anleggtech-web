import { Link } from 'react-router-dom'
import { EN_PATH, NB_PATH } from '../lib/mini5planner'
import styles from './LangSwitch.module.css'

const OPTIONS = [
  { lang: 'nb', label: 'Norsk', short: 'NO', path: NB_PATH },
  { lang: 'en', label: 'English', short: 'EN', path: EN_PATH },
] as const

export default function LangSwitch({ current }: { current: 'nb' | 'en' }) {
  return (
    <nav className={styles.switch} aria-label={current === 'en' ? 'Language' : 'Språk'}>
      {OPTIONS.map((o) =>
        o.lang === current ? (
          <span key={o.lang} className={`${styles.option} ${styles.active}`} aria-current="page" lang={o.lang}>
            <span aria-hidden="true">{o.short}</span>
            <span className={styles.srOnly}>{o.label}</span>
          </span>
        ) : (
          <Link key={o.lang} to={o.path} className={styles.option} hrefLang={o.lang} lang={o.lang}>
            <span aria-hidden="true">{o.short}</span>
            <span className={styles.srOnly}>{o.label}</span>
          </Link>
        ),
      )}
    </nav>
  )
}
