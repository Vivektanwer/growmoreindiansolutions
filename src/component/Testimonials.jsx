import { testimonials } from '../siteData'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <div className="reveal max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-green">What our customers say</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {testimonials.map((item) => (
            <div key={item.name} className="reveal w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-brand-green-soft rounded-3xl p-8 flex flex-col">
              <div className="text-brand-yellow text-xl flex gap-1">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p className="mt-4 text-lg leading-relaxed flex-1">{item.text}</p>
              <div className="flex items-center gap-3 mt-6">
                {/* Replace this circle with the customer photo if you have one */}
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold">
                  {item.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-brand-green">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
