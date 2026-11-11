
import { useEffect } from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  useEffect(() => {
    let cancelled = false
    let ctx

    const initAnimations = async () => {
      // Respect reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      // Load GSAP only in the browser
      const [gsapModule, scrollModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      if (cancelled) return

      const gsap = gsapModule.gsap || gsapModule.default
      const ScrollTrigger =
        scrollModule.ScrollTrigger || scrollModule.default

      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Hero animations
        gsap.from('.hero-item', {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        })

        // Scroll reveal animations
        gsap.set('.reveal', {
          y: 40,
          opacity: 0,
        })

        ScrollTrigger.batch('.reveal', {
          start: 'top 90%',
          once: true,
          onEnter: (items) => {
            gsap.to(items, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
            })
          },
        })
      })
    }

    initAnimations().catch((error) => {
      console.error('GSAP initialization error:', error)
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
