import { StrictMode } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import App from './App'
import { StaticRouter } from 'react-router'
import { buildHeadTags } from './seo'

// This file runs on the server. It turns our React app into HTML.
export function render(_url, options) {
  return renderToPipeableStream(
    <StaticRouter location={_url}>
      <StrictMode>
        <App />
      </StrictMode>
    </StaticRouter>,
    options,
  )
}

// Gives the server the SEO tags (title, description...) for a page.
export function getHead(url) {
  return buildHeadTags(url)
}
