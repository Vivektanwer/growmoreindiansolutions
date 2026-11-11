import Placeholder from './Placeholder'

const About = () => {
  // Small highlights shown under the paragraph
  const points = [
    { icon: "bi-hospital", text: "Hospitals, clinics and labs" },
    { icon: "bi-building", text: "Schools, offices and shops" },
    { icon: "bi-geo-alt", text: "Based in Bharat Vihar, Delhi" },
  ]

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Video / image area */}
        <div className="reveal flex-1 w-full relative">
          <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-brand-yellow rounded-3xl"></div>
          {/* Replace with your company video or photo (see Placeholder.jsx) */}
          <Placeholder
            icon="bi-play-circle"
            label="Company video or photo (800 x 600)"
            className="relative h-80 sm:h-[26rem] rounded-3xl"
          />
        </div>

        {/* Text */}
        <div className="reveal flex-1">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-green leading-tight">
            Helping Delhi stay clean, safe and organised
          </h2>
          <p className="text-muted text-lg mt-5 leading-relaxed">
            Grow More Indian Solutions supplies the everyday products that keep healthcare and public spaces clean. Our range covers bio medical waste polybags, sharps containers, dustbins and housekeeping items.
          </p>
          <p className="text-muted text-lg mt-4 leading-relaxed">
            We focus on strong products, honest prices and delivery you can count on, so you can focus on your own work.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((item) => (
              <li key={item.text} className="flex items-center gap-3 font-medium">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green-soft text-brand-green">
                  <i className={'bi ' + item.icon}></i>
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default About
