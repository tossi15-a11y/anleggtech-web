import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import AISection from './components/AISection'
import Referanser from './components/Referanser'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import Privacy from './pages/Privacy'
import Programvare from './pages/Programvare'
import Notert from './pages/Notert'
import Mini5planner from './pages/Mini5planner'

function Home() {
  return (
    <>
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personvern" element={<Privacy />} />
        <Route path="/programvare" element={<Programvare />} />
        <Route path="/notert" element={<Notert />} />
        <Route path="/mini5planner" element={<Mini5planner />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
