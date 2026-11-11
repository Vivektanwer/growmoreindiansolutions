import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './Header'
import Footer from './Footer'
import Seo from './component/Seo'
import Home from './component/Home'
import ThankYou from './component/ThankYou'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const { pathname } = useLocation()

  // Smooth scrolling (Lenis) + connect it to GSAP. Runs once in the browser.
  useEffect(() => {
    // If the visitor prefers less motion, we skip smooth scrolling
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis()
    window.lenis = lenis // saved here so the menu can use lenis.scrollTo()

    lenis.on('scroll', ScrollTrigger.update)
    const update = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Clean up when the app closes
    return () => {
      gsap.ticker.remove(update)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  // Go to the top of the page when we open a new page
  useEffect(() => {
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="font-body text-ink bg-white">
      <Seo />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
