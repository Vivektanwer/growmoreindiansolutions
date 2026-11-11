
import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import Seo from './component/Seo'
import Home from './component/Home'
import ThankYou from './component/ThankYou'

const App = () => {
  const { pathname } = useLocation()

  // Lenis smooth scrolling + GSAP integration
  useEffect(() => {
    let cancelled = false
    let lenis
    let gsap
    let update

    const initSmoothScroll = async () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      // Load animation libraries only in the browser
      const [gsapModule, scrollModule, lenisModule] =
        await Promise.all([
          import('gsap'),
          import('gsap/ScrollTrigger'),
          import('lenis'),
        ])

      if (cancelled) return

      gsap = gsapModule.gsap || gsapModule.default

      const ScrollTrigger =
        scrollModule.ScrollTrigger || scrollModule.default

      const Lenis = lenisModule.default

      gsap.registerPlugin(ScrollTrigger)

      lenis = new Lenis()

      window.lenis = lenis

      lenis.on('scroll', ScrollTrigger.update)

      update = (time) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(update)
      gsap.ticker.lagSmoothing(0)
    }

    initSmoothScroll().catch((error) => {
      console.error('Smooth scroll initialization error:', error)
    })

    return () => {
      cancelled = true

      if (gsap && update) {
        gsap.ticker.remove(update)
      }

      if (lenis) {
        lenis.destroy()
      }

      if (window.lenis === lenis) {
        window.lenis = null
      }
    }
  }, [])

  // Scroll to top when route changes
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
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
