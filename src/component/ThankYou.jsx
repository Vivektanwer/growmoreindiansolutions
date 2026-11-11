import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { site } from '../siteData'

const ThankYou = () => {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(20) // countdown from 20

  useEffect(() => {
    // Every 1 second, reduce the countdown by 1
    const timer = setInterval(() => {
      setSeconds((old) => old - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // When the countdown reaches 0, go to the Home page
  useEffect(() => {
    if (seconds <= 0) navigate('/')
  }, [seconds, navigate])

  return (
    <section className="py-24 lg:py-32 bg-brand-green-soft">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-green text-brand-yellow text-5xl">
          <i className="bi bi-check-lg"></i>
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-green mt-8">Thank you!</h1>
        <p className="text-muted text-lg mt-5 leading-relaxed">
          We have received your request and sent a confirmation to your email. Our team will contact you very soon.
        </p>
        <p className="text-muted mt-3">
          For urgent needs, call us on <a href={'tel:+91' + site.phones[0]} className="font-bold text-brand-green">{site.phones[0]}</a>.
        </p>
        <p className="mt-8 font-medium">Taking you back to the Home page in {seconds} seconds...</p>
        <Link to="/" className="inline-block mt-6 bg-brand-green text-white font-bold rounded-full py-3 px-8 hover:bg-brand-green-dark transition-colors">
          Go to Home now
        </Link>
      </div>
    </section>
  )
}

export default ThankYou
