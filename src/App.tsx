import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import AISection from './components/AISection'
import Referanser from './components/Referanser'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner, { analyseAvslatt } from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import Seo from './components/Seo'
import Privacy from './pages/Privacy'
import Programvare from './pages/Programvare'
import Nettsider from './pages/Nettsider'
import Notert from './pages/Notert'
import NotertTakst from './pages/NotertTakst'
import Mini5planner from './pages/Mini5planner'
import Mini5plannerEn from './pages/en/Mini5plannerEn'
import GuideSkippedPhotos from './pages/en/GuideSkippedPhotos'
import GuideGridMission from './pages/en/GuideGridMission'
import { EN_PATH, GUIDE_GRID_MISSION_PATH, GUIDE_SKIPPED_PHOTOS_PATH } from './lib/mini5planner'

function Home() {
  return (
    <>
      <Seo
        title="AnleggTech AS – Teknologi som jobber like hardt som deg"
        description="AnleggTech AS – AI og digital innovasjon for anleggsbransjen. Skreddersydde nettsider, AI-assistenter, markedsplasser og digitale verktøy for entreprenører i hele Norge."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <AISection />
        <Referanser />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

// Appen lenker til /programvare/mini5planner#pro og #prosessering
function Mini5plannerRedirect() {
  const { search, hash } = useLocation()
  return <Navigate to={{ pathname: '/mini5planner', search, hash }} replace />
}

// Felles for nettleseren (BrowserRouter) og forhåndsrenderingen (StaticRouter i entry-server.tsx)
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personvern" element={<Privacy />} />
        <Route path="/programvare" element={<Programvare />} />
        <Route path="/nettsider" element={<Nettsider />} />
        <Route path="/notert" element={<Notert />} />
        <Route path="/notert-takst" element={<NotertTakst />} />
        <Route path="/mini5planner" element={<Mini5planner />} />
        <Route path="/programvare/mini5planner" element={<Mini5plannerRedirect />} />
        <Route path={EN_PATH} element={<Mini5plannerEn />} />
        <Route path={GUIDE_SKIPPED_PHOTOS_PATH} element={<GuideSkippedPhotos />} />
        <Route path={GUIDE_GRID_MISSION_PATH} element={<GuideGridMission />} />
        <Route path={`${EN_PATH}/guides`} element={<Navigate to={`${EN_PATH}#guides`} replace />} />
        <Route path="/en" element={<Navigate to={EN_PATH} replace />} />
      </Routes>
      <CookieBanner />
      <Analytics beforeSend={(event) => (analyseAvslatt() ? null : event)} />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
