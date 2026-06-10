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
            Prosjekter vi har levert — publisert direkte fra Anleggtech Portal,
            samme verktøy kundene våre bruker til å holde sine egne nettsider
            levende.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.id} className={styles.card}>
              {p.image_url && (
                <div className={styles.imageWrap}>
                  <img src={p.image_url} alt={p.title} loading="lazy" />
                </div>
              )}
              <div className={styles.cardBody}>
                {p.tag && <span className={styles.tag}>{p.tag}</span>}
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.description}>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
