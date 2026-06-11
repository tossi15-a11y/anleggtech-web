import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Referanser.module.css'

// Leses anonymt fra Anleggtech Portal (Supabase). RLS tillater kun
// SELECT på publiserte prosjekter; anon-nøkkelen er offentlig per design.
const SUPABASE_URL = 'https://rmbkwesjboumicckfwgs.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtYmt3ZXNqYm91bWljY2tmd2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4MjA3MjMsImV4cCI6MjA5NTM5NjcyM30.c93jVUakqPb2YHk4o6zK6cGQnPYgjMYgVBxdbzzQF_o'
const TENANT_UUID = '6cfdde25-05cd-476d-bdfe-2d29bda25d1e'

type Project = {
  id: string
  title: string
  description: string
  tag: string | null
  image_url: string | null
}

// Statisk berikelse for kjente leveranser: live-lenke + skjermbilde-fallback
// når portal-prosjektet mangler bilde. Nøkkel matches mot tittel.
const PROJECT_EXTRAS: { match: string; url: string; fallbackImage: string }[] = [
  {
    match: 'Åsane Hageservice',
    url: 'https://asanehageservice.no',
    fallbackImage: '/referanser/asane-hageservice.jpg',
  },
]

const extrasFor = (title: string) =>
  PROJECT_EXTRAS.find((e) => title.toLowerCase().includes(e.match.toLowerCase()))

export default function Referanser() {
  const { ref, isVisible } = useScrollAnimation()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const params = new URLSearchParams({
      select: 'id,title,description,tag,image_url',
      tenant_uuid: `eq.${TENANT_UUID}`,
      status: 'eq.published',
      order: 'order_index.asc',
    })
    fetch(`${SUPABASE_URL}/rest/v1/projects?${params}`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    })
      .then((res) => (res.ok ? res.json() : []))
      .then((data: Project[]) => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
  }, [])

  if (projects.length === 0) return null

  return (
    <section id="referanser" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div
          ref={ref}
          className={`${styles.header} ${isVisible ? styles.visible : ''}`}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6.5L5 9.5L10 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Referanser
          </span>
          <h2 className="section-heading">Nylige leveranser</h2>
          <p className="section-subtext">
            Prosjekter vi har levert — publisert direkte fra AnleggTech Portal,
            samme verktøy kundene våre bruker til å holde sine egne nettsider
            levende.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => {
            const extras = extrasFor(p.title)
            const image = p.image_url || extras?.fallbackImage
            return (
              <article key={p.id} className={styles.card}>
                {image && (
                  <div className={styles.imageWrap}>
                    <img src={image} alt={p.title} loading="lazy" />
                  </div>
                )}
                <div className={styles.cardBody}>
                  {p.tag && <span className={styles.tag}>{p.tag}</span>}
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.description}>{p.description}</p>
                  {extras && (
                    <a
                      className={styles.visitLink}
                      href={extras.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Se nettsiden
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 12L12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className={styles.ctaRow}>
          <p className={styles.ctaText}>Vil du ha en lignende nettside for din bedrift?</p>
          <a
            href="#kontakt"
            className={styles.ctaLink}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Ta kontakt
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
