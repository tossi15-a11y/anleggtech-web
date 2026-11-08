import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './CookieBanner.module.css'

const STORAGE_KEY = 'anleggtech_cookie_consent'

export function analyseAvslatt() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'necessary'
  } catch {
    return false
  }
}

export default function CookieBanner() {
  const english = useLocation().pathname.startsWith('/en/')
  const [visible, setVisible] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Slight delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = (type: 'all' | 'necessary') => {
    localStorage.setItem(STORAGE_KEY, type)
    setHiding(true)
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div className={`${styles.banner} ${hiding ? styles.hiding : styles.visible}`} role="dialog" aria-label={english ? 'Cookies' : 'Informasjonskapsler'}>
      <div className={styles.inner}>
        {english ? (
          <p className={styles.text}>
            We use cookies to improve your experience. By using anleggtech.no you accept our{' '}
            <Link to="/personvern" className={styles.link} hrefLang="nb">privacy policy</Link> (in Norwegian).
          </p>
        ) : (
          <p className={styles.text}>
            Vi bruker informasjonskapsler for å forbedre brukeropplevelsen. Ved å bruke anleggtech.no godtar du vår{' '}
            <Link to="/personvern" className={styles.link}>personvernerklæring</Link>.
          </p>
        )}
        <div className={styles.actions}>
          <button
            className={styles.btnSecondary}
            onClick={() => dismiss('necessary')}
          >
            {english ? 'Necessary only' : 'Kun nødvendige'}
          </button>
          <button
            className={styles.btnPrimary}
            onClick={() => dismiss('all')}
          >
            {english ? 'Accept all' : 'Godta alle'}
          </button>
        </div>
      </div>
    </div>
  )
}
