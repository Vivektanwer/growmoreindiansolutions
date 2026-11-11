import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getSeo } from '../seo'

// The server already adds SEO tags for the first page load.
// This component updates them when the visitor moves to another page (no reload).

// Finds a tag in <head> (or creates it) and sets its value
function setTag(selector, tagName, attributes, valueName, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement(tagName)
    Object.keys(attributes).forEach((key) => tag.setAttribute(key, attributes[key]))
    document.head.appendChild(tag)
  }
  tag.setAttribute(valueName, value)
}

const Seo = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeo(pathname)
    document.title = seo.title
    setTag('meta[name="description"]', 'meta', { name: 'description' }, 'content', seo.description)
    setTag('meta[name="robots"]', 'meta', { name: 'robots' }, 'content', seo.robots)
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical' }, 'href', seo.canonical)
    setTag('meta[property="og:title"]', 'meta', { property: 'og:title' }, 'content', seo.title)
    setTag('meta[property="og:description"]', 'meta', { property: 'og:description' }, 'content', seo.description)
    setTag('meta[property="og:url"]', 'meta', { property: 'og:url' }, 'content', seo.canonical)
  }, [pathname])

  return null // this component shows nothing on the screen
}

export default Seo
