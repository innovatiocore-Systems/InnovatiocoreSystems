import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import SiteChrome from '../components/SiteChrome'
import '../index.css'
import '../App.css'

export const metadata: Metadata = {
  title: 'InnovatioCore Systems — Core Solutions, Endless Possibilities',
  description:
    'Core Solutions, Endless Possibilities — building intelligent software for healthcare, recruitment, events, shared workspaces and project management.',
  // Google Search Console ownership check — keep in place, removing it un-verifies the site
  verification: {
    google: 'i2sZSd9YU1Kg5cnH5w8gUTm1IPVOitZk5BpDgy33VdA',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'InnovatioCore Systems',
              url: 'https://www.innovatiocoresystems.com',
              logo: 'https://www.innovatiocoresystems.com/InnovatioCoreLogo.png',
            }),
          }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
