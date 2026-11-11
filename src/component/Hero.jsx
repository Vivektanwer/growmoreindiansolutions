import { site } from '../siteData'
import Placeholder from './Placeholder'

const Hero = () => {
  return (
    <section id="home" className="bg-brand-green text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

        {/* Left side: text */}
        <div className="flex-1">
          <p className="hero-item inline-block bg-white/10 rounded-full py-1.5 px-4 text-sm font-medium text-brand-yellow">
            <i className="bi bi-geo-alt-fill mr-2"></i>Serving Delhi NCR
          </p>
          <h1 className="hero-item font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-5">
            Safe waste disposal and clean spaces, from one trusted supplier.
          </h1>
          <p className="hero-item text-lg text-white/80 mt-6 max-w-xl leading-relaxed">
            We supply bio medical polybags, sharps containers, dustbins and housekeeping items to hospitals, clinics, labs, schools and offices.
          </p>
          <div className="hero-item flex flex-wrap gap-4 mt-8">
            <a href="/#contact" className="bg-brand-yellow text-brand-brown font-bold rounded-full py-3 px-8 hover:bg-white transition-colors">
              Get a Free Quote
            </a>
            <a href={'tel:+91' + site.phones[0]} className="border-2 border-white/40 rounded-full py-3 px-8 font-bold hover:bg-white hover:text-brand-green transition-colors">
              <i className="bi bi-telephone-fill mr-2"></i>{site.phones[0]}
            </a>
          </div>
        </div>

        {/* Right side: image area. The yellow curve matches your visiting card. */}
        <div className="hero-item flex-1 w-full">
          <div className="bg-brand-yellow rounded-tl-[120px] rounded-br-[40px] rounded-tr-3xl rounded-bl-3xl p-4 sm:p-5">
            {/* Replace this placeholder with your hero image */}
            <Placeholder
              icon="bi-image"
              label="Hero image: bags, bins and housekeeping products (900 x 700)"
              className="h-72 sm:h-96 lg:h-[26rem] rounded-tl-[100px] rounded-br-3xl rounded-tr-2xl rounded-bl-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
