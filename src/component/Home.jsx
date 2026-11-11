import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Testimonials from './Testimonials'
import Contact from './Contact'

const Home = () => {
  // GSAP animations. They run only in the browser, after the page loads.
  useEffect(() => {
    // Skip animations if the visitor prefers less motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // gsap.context lets us clean everything up easily
    const ctx = gsap.context(() => {

      // 1) Hero: the text and image slide in one after another
      gsap.from('.hero-item', { y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' })

      // 2) Other sections: items with the class "reveal" fade in as you scroll
      gsap.set('.reveal', { y: 40, opacity: 0 })
      ScrollTrigger.batch('.reveal', {
        start: 'top 90%',
        once: true,
        onEnter: (items) => gsap.to(items, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }),
      })
    })

    return () => ctx.revert()
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
