import { site } from './siteData'

// ---------------------------------------------------------------
// SEO SETTINGS FOR EVERY PAGE  (easy to edit)
// When you add a new page, add a new block here with its path.
// ---------------------------------------------------------------
export const seoPages = {
  "/": {
    title: "Bio Medical Polybags, Sharps Containers & Dustbins in Delhi | Grow More Indian Solutions",
    description: "Buy bio medical waste polybags, sharps containers, dustbins and housekeeping items in New Delhi. Quality products, fair prices and fast delivery. Get a free quote today.",
    robots: "index, follow",
    canonical: site.url + "/",
  },
  "/thank-you": {
    title: "Thank You | Grow More Indian Solutions",
    description: "Thank you for contacting Grow More Indian Solutions. We will get back to you very soon.",
    robots: "noindex, nofollow", // thank-you page should not appear in Google
    canonical: site.url + "/thank-you",
  },
}

// Used when someone opens a page that does not exist
const notFoundSeo = {
  title: "Page Not Found | Grow More Indian Solutions",
  description: "This page could not be found.",
  robots: "noindex, nofollow",
  canonical: site.url + "/",
}

// Finds the SEO settings for a path like "/thank-you"
export function getSeo(path) {
  const cleanPath = path.split("?")[0].split("#")[0] || "/"
  return seoPages[cleanPath] || notFoundSeo
}

// Makes text safe to put inside an HTML attribute
function safe(text) {
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

// Builds the <head> tags as plain text. The server uses this so Google sees them.
export function buildHeadTags(path) {
  const seo = getSeo(path)
  return [
    `<title>${safe(seo.title)}</title>`,
    `<meta name="description" content="${safe(seo.description)}" />`,
    `<meta name="robots" content="${safe(seo.robots)}" />`,
    `<link rel="canonical" href="${safe(seo.canonical)}" />`,
    `<meta property="og:title" content="${safe(seo.title)}" />`,
    `<meta property="og:description" content="${safe(seo.description)}" />`,
    `<meta property="og:url" content="${safe(seo.canonical)}" />`,
    `<meta property="og:type" content="website" />`,
  ].join("\n    ")
}
