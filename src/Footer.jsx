import { site, navLinks, socialLinks, services } from './siteData'

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 flex flex-wrap gap-12 justify-between">

        {/* About */}
        <div className="w-full lg:w-1/3">
          <h3 className="font-heading font-extrabold text-2xl uppercase">{site.name}</h3>
          <p className="mt-4 text-white/75 leading-relaxed">
            Your trusted supplier of bio medical polybags, sharps containers, dustbins and housekeeping items in Delhi.
          </p>
          {/* Social media icons */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-brown transition-colors"
              >
                <i className={'bi ' + item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-bold text-lg text-brand-yellow">Quick Links</h4>
          <ul className="mt-4 flex flex-col gap-2 text-white/75">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={'/#' + item.id} className="hover:text-brand-yellow">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-lg text-brand-yellow">What We Offer</h4>
          <ul className="mt-4 flex flex-col gap-2 text-white/75">
            {services.slice(0, 4).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="max-w-xs">
          <h4 className="font-heading font-bold text-lg text-brand-yellow">Contact</h4>
          <ul className="mt-4 flex flex-col gap-3 text-white/75">
            <li className="flex gap-3"><i className="bi bi-geo-alt-fill text-brand-yellow"></i><span>{site.address}</span></li>
            <li className="flex gap-3"><i className="bi bi-telephone-fill text-brand-yellow"></i><span>{site.phones.join(', ')}</span></li>
            <li className="flex gap-3"><i className="bi bi-envelope-fill text-brand-yellow"></i><span className="break-all">{site.email}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60 px-5">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
