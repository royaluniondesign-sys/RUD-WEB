import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RUD — Agencia de Branding, Diseño Web y Señalética en Barcelona',
  description: 'Agencia creativa full-stack en Barcelona. Branding estratégico, identidad visual, señalética y rótulos luminosos, diseño web Next.js, e-commerce Shopify, motion y automatización IA. Hablemos.',
  keywords: 'agencia branding Barcelona,diseño web Barcelona,identidad visual Barcelona,rótulos luminosos Barcelona,señalética corporativa Barcelona,vinilos escaparates Barcelona,letras corpóreas Barcelona,rótulos neón Barcelona,e-commerce Shopify Barcelona,agencia creativa Barcelona,branding startup Barcelona,diseño web Next.js,automatización IA Barcelona,Royal Union Design,RUD Studio,AURA agentes IA,publicidad 360',
  authors: [{ name: 'RUD Studio', url: 'https://royaluniondesign.com' }],
  creator: 'RUD Studio',
  publisher: 'RUD Studio',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://royaluniondesign.com' },
  openGraph: {
    title: 'RUD — Agencia de Branding, Diseño Web y Señalética en Barcelona',
    description: 'Agencia creativa full-stack en Barcelona. Branding, señalética y rótulos, diseño web, e-commerce y automatización IA.',
    url: 'https://royaluniondesign.com',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUD — Agencia creativa Barcelona',
    description: 'Branding, señalética y rótulos, diseño web, e-commerce y automatización IA en Barcelona.',
    images: ['https://royaluniondesign.com/og-image.png'],
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
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FH9353K02R" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FH9353K02R', { page_path: window.location.pathname });
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RUD Studio",
            "alternateName": "Royal Union Design",
            "description": "Agencia creativa de branding, señalética, diseño web y automatización IA en Barcelona.",
            "url": "https://royaluniondesign.com",
            "logo": "https://royaluniondesign.com/logo-rud.svg",
            "email": "hello@rud.studio",
            "address": { "@type": "PostalAddress", "addressLocality": "Barcelona", "addressRegion": "Cataluña", "addressCountry": "ES" },
            "areaServed": ["Barcelona", "Cerdanyola del Vallès", "España", "Europa"],
            "serviceType": ["Branding", "Identidad Visual", "Señalética", "Rótulos Luminosos", "Vinilos Escaparates", "Letras Corpóreas", "Rótulos Neón", "Diseño Web", "E-commerce", "AI Automation", "Motion Design"],
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
