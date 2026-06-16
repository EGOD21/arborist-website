import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Professional Tree Services Springfield MO | TIMBERMEN TREE SERVICES',
  description: 'Expert tree removal, trimming, and care services in Springfield, Missouri. Licensed and insured arborists serving residential and commercial properties since 2021.',
  keywords: ['tree removal Springfield MO', 'tree trimming', 'arborist Springfield', 'tree care', 'stump grinding', 'lot clearing'],
  metadataBase: new URL('https://timbermentrees.com'),
  openGraph: {
    title: 'Professional Tree Services Springfield MO | TIMBERMEN TREE SERVICES',
    description: 'Expert tree removal, trimming, and care services in Springfield, Missouri.',
    url: 'https://timbermentrees.com',
    siteName: 'TIMBERMEN TREE SERVICES',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Tree Services Springfield MO | TIMBERMEN TREE SERVICES',
    description: 'Expert tree removal, trimming, and care services in Springfield, Missouri.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBHX9PQ5');`
        }} />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBHX9PQ5"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://timbermentrees.com",
            "name": "TIMBERMEN TREE SERVICES",
            "description": "Professional tree care and removal services serving Springfield, Missouri since 2021. Expert arborists for residential and commercial properties.",
            "url": "https://timbermentrees.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Springfield",
              "addressRegion": "MO",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "City",
              "name": "Springfield",
              "containedIn": {
                "@type": "State",
                "name": "Missouri"
              }
            },
            "foundingDate": "2021",
            "serviceType": [
              "Tree Removal",
              "Tree Trimming",
              "Tree Pruning",
              "Stump Grinding",
              "Lot Clearing",
              "Tree Health Care"
            ]
          })
        }} />
        {children}
      </body>
    </html>
  )
}
