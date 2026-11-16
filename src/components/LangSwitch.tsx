import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MINI5PLANNER_LANGUAGES, type Mini5plannerLanguage } from '../lib/mini5planner'
import styles from './LangSwitch.module.css'

const STORAGE_KEY = 'mini5planner-language'

function browserLanguage(): Mini5plannerLanguage | null {
  if (typeof navigator === 'undefined') return null
  const supported = new Set(MINI5PLANNER_LANGUAGES.map(({ code }) => code))
  for (const value of navigator.languages ?? [navigator.language]) {
    const base = value.toLowerCase().split('-')[0]
    const code = base === 'no' ? 'nb' : base
    if (supported.has(code as Mini5plannerLanguage)) return code as Mini5plannerLanguage
  }
  return null
}

export default function LangSwitch({ current }: { current: Mini5plannerLanguage }) {
  const location = useLocation()
  const [suggested, setSuggested] = useState<Mini5plannerLanguage | null>(null)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Mini5plannerLanguage | null
    const detected = saved ?? browserLanguage()
    if (detected && detected !== current) setSuggested(detected)
  }, [current])

  const remember = (language: Mini5plannerLanguage) => {
    window.localStorage.setItem(STORAGE_KEY, language)
    setSuggested(null)
  }

  const selected = MINI5PLANNER_LANGUAGES.find(({ code }) => code === current)!
  const suggestion = MINI5PLANNER_LANGUAGES.find(({ code }) => code === suggested)

  return (
    <div className={styles.wrapper}>
      <label className={styles.switch}>
        <span className={styles.srOnly}>Language</span>
        <span className={styles.current} aria-hidden="true">{selected.short}</span>
        <select
          aria-label="Language"
          value={current}
          onChange={(event) => {
            const option = MINI5PLANNER_LANGUAGES.find(({ code }) => code === event.target.value)!
            remember(option.code)
            window.location.assign(option.path + location.hash)
          }}
        >
          {MINI5PLANNER_LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code} lang={code}>{label}</option>
          ))}
        </select>
      </label>
      {suggestion && (
        <Link
          className={styles.suggestion}
          to={suggestion.path + location.hash}
          lang={suggestion.code}
          onClick={() => remember(suggestion.code)}
        >
          {suggestion.label}?
        </Link>
      )}
    </div>
  )
}
