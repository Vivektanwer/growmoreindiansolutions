import { services } from '../siteData'

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-green-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-green">What We Offer</h2>
          <p className="text-muted text-lg mt-4">
            Everything you need for safe waste handling and a spotless workplace.
          </p>
        </div>

        {/* Cards (Flexbox with wrap) */}
        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {services.map((item) => (
            <div
              key={item.title}
              className="reveal w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-3xl p-7 border-b-4 border-brand-yellow"
            >
              {/* Replace this icon with a product photo if you like */}
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-green text-brand-yellow text-2xl">
                <i className={'bi ' + item.icon}></i>
              </span>
              <h3 className="font-heading font-bold text-xl text-brand-green mt-5">{item.title}</h3>
              <p className="text-muted mt-3 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
