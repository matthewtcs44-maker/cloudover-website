import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://project1-7k4faigv3-cloud-mosaic.vercel.app'

export const metadata: Metadata = {
  title: 'CloudOver | AI & Digital Transformation Partner',
  description: 'AI-first digital services for SMB and Enterprise clients. We help businesses modernise, automate, and grow with technology.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    siteName: 'CloudOver',
    title: 'CloudOver | AI & Digital Transformation Partner',
    description: 'AI-first digital services for SMB and Enterprise clients.',
    url: siteUrl,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CloudOver' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudOver | AI & Digital Transformation Partner',
    description: 'AI-first digital services for SMB and Enterprise clients.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="cloudover.com"
          src="https://plausible.io/js/script.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CloudOver',
              url: siteUrl,
              description: 'AI-first digital services for SMB and Enterprise clients.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '12 Innovation Drive',
                addressLocality: 'London',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hello@cloudover.com',
                telephone: '+44-1234-567890',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
