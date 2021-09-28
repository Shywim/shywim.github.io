import React from 'react'
import Helmet from 'react-helmet'
import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-domain="matthieuharle.com"
            src="https://p.matthieuharle.com/js/script.js"
          ></script>
        )}
        <script>{`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}</script>
      </Helmet>
      {children}
    </div>
  )
}
