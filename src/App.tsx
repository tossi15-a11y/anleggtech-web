import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import AISection from './components/AISection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import Privacy from './pages/Privacy'
import Programvare from './pages/Programvare'
import Notert from './pages/Notert'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <AISection />
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
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}
