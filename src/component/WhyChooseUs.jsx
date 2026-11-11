import { whyChooseUs } from '../siteData'

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row gap-12">

        {/* Heading */}
        <div className="reveal lg:w-1/3">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight">
            Why customers choose us
          </h2>
          <p className="text-white/80 text-lg mt-5 leading-relaxed">
            We keep things simple: good products, fair prices and a team that picks up the phone.
          </p>
          <a href="/#contact" className="inline-block mt-8 bg-brand-yellow text-brand-brown font-bold rounded-full py-3 px-8 hover:bg-white transition-colors">
            Talk to Us
          </a>
        </div>

        {/* Reasons */}
        <div className="lg:w-2/3 flex flex-wrap gap-6">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="reveal w-full sm:w-[calc(50%-12px)] flex gap-4 bg-white/10 rounded-2xl p-6">
              <i className={'bi text-3xl text-brand-yellow ' + item.icon}></i>
              <div>
                <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                <p className="text-white/75 mt-2 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
