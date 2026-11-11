import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'lenis/dist/lenis.css'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

// This file runs in the browser. It "wakes up" the page that the server already built.
hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
