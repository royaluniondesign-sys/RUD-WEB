import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RUD — Agencia de Branding y Diseño Web en Barcelona',
  description: 'Agencia creativa full-stack en Barcelona. Branding estratégico, identidad visual, diseño web Next.js, e-commerce Shopify, motion y automatización IA. Hablemos.',
  keywords: 'agencia branding Barcelona,diseño web Barcelona,identidad visual Barcelona,e-commerce Shopify Barcelona,agencia creativa Barcelona,branding startup Barcelona,diseño web Next.js,automatización IA Barcelona,Royal Union Design,RUD Studio,CHARIOT AI',
  authors: [{ name: 'RUD Studio', url: 'https://rud-web.vercel.app' }],
  creator: 'RUD Studio',
  publisher: 'RUD Studio',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://rud-web.vercel.app' },
  openGraph: {
    title: 'RUD — Agencia de Branding y Diseño Web en Barcelona',
    description: 'Agencia creativa full-stack en Barcelona. Branding, diseño web, e-commerce, motion y automatización IA.',
    url: 'https://rud-web.vercel.app',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://rud-web.vercel.app/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUD — Agencia creativa Barcelona',
    description: 'Branding, diseño web, e-commerce y automatización IA en Barcelona.',
    images: ['https://rud-web.vercel.app/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#F7F5F1" />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona" />
        <meta name="geo.position" content="41.3851;2.1734" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RUD Studio",
            "alternateName": "Royal Union Design",
            "description": "Agencia creativa de branding, diseño web y automatización IA en Barcelona.",
            "url": "https://rud-web.vercel.app",
            "logo": "https://rud-web.vercel.app/logo-rud.svg",
            "email": "hello@rud.studio",
            "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressRegion": "Cataluña", "addressCountry": "ES" },
            "areaServed": ["Barcelona", "España", "Europa"],
            "serviceType": ["Branding", "Identidad Visual", "Diseño Web", "E-commerce", "AI Automation", "Motion Design"],
            "sameAs": ["https://instagram.com/royaluniondesign","https://linkedin.com/company/royaluniondesign","https://behance.net/royaluniondesign"]
          })}}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
