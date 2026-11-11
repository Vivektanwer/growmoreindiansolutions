import { useState } from 'react'
import { useNavigate } from 'react-router'
import { site } from '../siteData'

const inputClass = "w-full rounded-xl border border-gray-300 bg-white py-3 px-4 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"

const Contact = () => {
  const navigate = useNavigate()

  // What the visitor types in the form
  const [form, setForm] = useState({
    name: '', phone: '', email: '', company: '', requirement: 'Bio-Medical Polybags', message: '',
    website: '', // hidden "trap" field to catch spam bots. Real people leave it empty.
  })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Runs every time the visitor types in a field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Runs when the visitor clicks the submit button
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    try {
      // If you have not pasted your Google Apps Script URL yet, we skip sending (good for testing)
      if (site.scriptUrl.startsWith('PASTE_')) {
        console.warn('Add your Google Apps Script URL in src/siteData.js to send real leads.')
      } else {
        // Send the form to Google Apps Script. It saves to Google Sheet and sends both emails.
        await fetch(site.scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(form),
        })
      }
      // Show the Thank You page
      navigate('/thank-you')
    } catch (err) {
      setError('Sorry, something went wrong. Please call us or try again.')
    }

    setSending(false)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-green-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row gap-12">

        {/* Contact details */}
        <div className="reveal lg:w-2/5">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-green leading-tight">
            Get a free quote
          </h2>
          <p className="text-muted text-lg mt-4 leading-relaxed">
            Tell us what you need and our team will reply with product details and rates.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-brand-green text-brand-yellow"><i className="bi bi-telephone-fill"></i></span>
              <div>
                <p className="font-bold text-brand-green">Call us</p>
                {site.phones.map((phone) => (
                  <a key={phone} href={'tel:+91' + phone} className="block text-muted hover:text-brand-green">{phone}</a>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-brand-green text-brand-yellow"><i className="bi bi-envelope-fill"></i></span>
              <div>
                <p className="font-bold text-brand-green">Email</p>
                <a href={'mailto:' + site.email} className="text-muted hover:text-brand-green break-all">{site.email}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-brand-green text-brand-yellow"><i className="bi bi-geo-alt-fill"></i></span>
              <div>
                <p className="font-bold text-brand-green">Visit us</p>
                <p className="text-muted">{site.address}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* The form */}
        <form onSubmit={handleSubmit} className="reveal lg:w-3/5 bg-white rounded-3xl p-6 sm:p-10 shadow-lg flex flex-wrap gap-5">

          <div className="w-full sm:w-[calc(50%-10px)]">
            <label htmlFor="name" className="block font-medium mb-2">Your name *</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Full name" />
          </div>

          <div className="w-full sm:w-[calc(50%-10px)]">
            <label htmlFor="phone" className="block font-medium mb-2">Phone number *</label>
            <input id="phone" name="phone" type="tel" required pattern="[0-9+ ]{10,15}" value={form.phone} onChange={handleChange} className={inputClass} placeholder="10 digit mobile number" />
          </div>

          <div className="w-full sm:w-[calc(50%-10px)]">
            <label htmlFor="email" className="block font-medium mb-2">Email *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
          </div>

          <div className="w-full sm:w-[calc(50%-10px)]">
            <label htmlFor="company" className="block font-medium mb-2">Company / Hospital</label>
            <input id="company" name="company" type="text" value={form.company} onChange={handleChange} className={inputClass} placeholder="Optional" />
          </div>

          <div className="w-full">
            <label htmlFor="requirement" className="block font-medium mb-2">What do you need?</label>
            <select id="requirement" name="requirement" value={form.requirement} onChange={handleChange} className={inputClass}>
              <option>Bio-Medical Polybags</option>
              <option>Sharps Containers</option>
              <option>Dustbins</option>
              <option>Housekeeping Items</option>
              <option>Bulk / Regular Supply</option>
              <option>Something else</option>
            </select>
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputClass} placeholder="Tell us quantity, size or any other detail"></textarea>
          </div>

          {/* Spam trap: hidden from real visitors */}
          <input name="website" type="text" value={form.website} onChange={handleChange} tabIndex="-1" autoComplete="off" className="hidden" />

          {error && <p className="w-full text-red-600 font-medium">{error}</p>}

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-brand-green text-white font-bold rounded-full py-4 hover:bg-brand-green-dark transition-colors disabled:opacity-60"
          >
            {sending ? 'Sending...' : 'Send my request'}
          </button>
        </form>

      </div>
    </section>
  )
}

export default Contact
