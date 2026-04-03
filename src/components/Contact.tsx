import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'

interface FormData {
  navn: string
  bedrift: string
  epost: string
  telefon: string
  melding: string
}

interface FormErrors {
  navn?: string
  epost?: string
  melding?: string
  telefon?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^(\+47|0047)?[\s-]?[2-9]\d{7}$/

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.navn.trim() || data.navn.trim().length < 2) {
    errors.navn = 'Navn må være minst 2 tegn'
  }

  if (!data.epost.trim()) {
    errors.epost = 'E-post er påkrevd'
  } else if (!emailRegex.test(data.epost)) {
    errors.epost = 'Ugyldig e-postadresse'
  }

  if (data.telefon.trim() && !phoneRegex.test(data.telefon.replace(/\s/g, ''))) {
    errors.telefon = 'Ugyldig telefonnummer'
  }

  if (!data.melding.trim() || data.melding.trim().length < 10) {
    errors.melding = 'Meldingen må være minst 10 tegn'
  }

  return errors
}

const initialForm: FormData = {
  navn: '',
  bedrift: '',
  epost: '',
  telefon: '',
  melding: '',
}

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updated = { ...form, [name]: value }
    setForm(updated)
    if (touched[name as keyof FormData]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(form))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = { navn: true, bedrift: true, epost: true, telefon: true, melding: true }
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setSubmitting(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Feil ved sending')
        setSubmitted(true)
      })
      .catch(() => {
        alert('Noe gikk galt. Prøv igjen eller send e-post direkte til torstein@anleggtech.no')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm(initialForm)
    setErrors({})
    setTouched({})
  }

  return (
    <section id="kontakt" className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>

        <div
          ref={ref}
          className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 3h10v7H1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
              <path d="M1 3l5 4 5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            Kontakt
          </span>
          <h2 className="section-heading">La oss snakke om<br />din digitale fremtid</h2>
          <p className="section-subtext">
            Fyll ut skjemaet så tar vi kontakt innen én arbeidsdag.
            Jo mer du forteller oss, jo bedre kan vi hjelpe deg.
          </p>

          <div className={styles.contactInfo}>
            <a href="mailto:torstein@anleggtech.no" className={styles.contactLink}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              torstein@anleggtech.no
            </a>
          </div>
        </div>

        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" stroke="#22c55e" strokeWidth="2"/>
                  <path d="M9 16l5 5 9-9" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>Takk for henvendelsen!</h3>
              <p className={styles.successText}>
                Vi har mottatt meldingen din og tar kontakt innen én arbeidsdag.
                Vi gleder oss til å høre mer om prosjektet ditt.
              </p>
              <button className="btn-secondary" onClick={handleReset}>
                Send ny henvendelse
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <Field
                  label="Navn"
                  name="navn"
                  type="text"
                  required
                  placeholder="Ola Nordmann"
                  value={form.navn}
                  error={touched.navn ? errors.navn : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Bedrift"
                  name="bedrift"
                  type="text"
                  placeholder="Bedriften din AS"
                  value={form.bedrift}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className={styles.formRow}>
                <Field
                  label="E-post"
                  name="epost"
                  type="email"
                  required
                  placeholder="ola@bedriften.no"
                  value={form.epost}
                  error={touched.epost ? errors.epost : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  label="Telefon"
                  name="telefon"
                  type="tel"
                  placeholder="900 00 000"
                  value={form.telefon}
                  error={touched.telefon ? errors.telefon : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="melding">
                  Hva ønsker du? <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  className={`${styles.textarea} ${touched.melding && errors.melding ? styles.inputError : ''}`}
                  rows={6}
                  placeholder="Beskriv hva du ønsker hjelp med - jo mer detaljer, jo bedre kan vi hjelpe deg"
                  value={form.melding}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  aria-describedby={touched.melding && errors.melding ? 'melding-error' : undefined}
                />
                {touched.melding && errors.melding && (
                  <span className={styles.errorMsg} id="melding-error" role="alert">
                    {errors.melding}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} ${submitting ? styles.submitting : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sender...
                  </>
                ) : (
                  <>
                    Send henvendelse
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
}

function Field({ label, name, type = 'text', placeholder, required, value, error, onChange, onBlur }: FieldProps) {
  const id = `field-${name}`
  const errorId = `${id}-error`

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? 'true' : undefined}
        required={required}
        autoComplete={
          name === 'epost' ? 'email' :
          name === 'telefon' ? 'tel' :
          name === 'navn' ? 'name' :
          name === 'bedrift' ? 'organization' : 'off'
        }
      />
      {error && (
        <span className={styles.errorMsg} id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
