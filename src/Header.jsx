import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { site, navLinks } from './siteData'

const Header = () => {
  // open = is the mobile menu open?
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // When a menu link is clicked: if we are on the home page, scroll smoothly to the section.
  // If we are on another page (like thank-you), the link "/#id" takes us to home.
  const handleClick = (e, id) => {
    setOpen(false)
    if (pathname === '/') {
      e.preventDefault()
      if (window.lenis) window.lenis.scrollTo('#' + id, { offset: -80 })
      else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-brand-green text-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">

        {/* Logo. Replace the icon circle with your <img> logo later */}
        <Link to="/" className="flex items-center gap-3">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-brand-green text-2xl">
            <i className="bi bi-flower2"></i>
          </span>
          <span className="font-heading font-extrabold text-lg sm:text-xl leading-tight uppercase">
            {site.name}
          </span>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={'/#' + item.id}
              onClick={(e) => handleClick(e, item.id)}
              className="text-sm font-medium hover:text-brand-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href={'tel:+91' + site.phones[0]} className="bg-brand-yellow text-brand-brown font-bold rounded-full py-2 px-5 hover:bg-white transition-colors">
            <i className="bi bi-telephone-fill mr-2"></i>Call Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-3xl p-1"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <i className={open ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden bg-brand-green-dark flex flex-col px-5 pb-5">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={'/#' + item.id}
              onClick={(e) => handleClick(e, item.id)}
              className="py-3 border-b border-white/10 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
