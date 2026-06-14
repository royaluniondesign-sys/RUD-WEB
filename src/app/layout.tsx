import type { Metadata } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import PageTracking from '@/components/PageTracking'
import WhatsAppButton from '@/components/WhatsAppButton'
import './globals.css'

export const metadata: Metadata = {
  title: 'RUD Studio | Rótulos, Carteles, Branding y Diseño Web en Barcelona',
  description: 'Empresa de rótulos luminosos, carteles y vinilos para escaparates en Barcelona. También branding, identidad visual y diseño web profesional. Presupuesto en 24h sin compromiso.',
  keywords: 'rótulos Barcelona,carteles luminosos Barcelona,vinilos escaparate Barcelona,letras corpóreas Barcelona,rótulos neón Barcelona,rótulos LED Barcelona,señalética corporativa Barcelona,empresa rótulos Barcelona,branding Barcelona,agencia diseño web Barcelona,identidad visual Barcelona,e-commerce Shopify Barcelona,Royal Union Design,RUD Studio',
  authors: [{ name: 'RUD Studio', url: 'https://royaluniondesign.com' }],
  creator: 'RUD Studio',
  publisher: 'RUD Studio',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://royaluniondesign.com/' },
  icons: {
    apple: [{ url: '/logo-rud.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'RUD Studio | Rótulos, Carteles, Branding y Diseño Web en Barcelona',
    description: 'Empresa de rótulos luminosos, carteles y vinilos en Barcelona. Branding, diseño web y e-commerce. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUD Studio | Rótulos y Branding Barcelona',
    description: 'Rótulos luminosos, carteles, vinilos y branding en Barcelona. Diseño web y e-commerce.',
    images: ['https://royaluniondesign.com/og-image.png'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://royaluniondesign.com/#organization',
  'name': 'RUD Studio',
  'alternateName': 'Royal Union Design',
  'description': 'Agencia creativa en Barcelona especializada en rótulos luminosos, señalética, branding, identidad visual, diseño web y automatización IA.',
  'url': 'https://royaluniondesign.com',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://royaluniondesign.com/logo-rud-web.svg',
    'width': 200,
    'height': 60,
  },
  'image': 'https://royaluniondesign.com/og-image.png',
  'email': 'hello@royaluniondesign.com',
  'priceRange': '€€',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Carrer Sant Salvador, 11, Local 6',
    'addressLocality': 'Cerdanyola del Vallès',
    'addressRegion': 'CT',
    'postalCode': '08290',
    'addressCountry': 'ES',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 41.4910,
    'longitude': 2.1427,
  },
  'areaServed': [
    { '@type': 'City', 'name': 'Barcelona' },
    { '@type': 'City', 'name': 'Cerdanyola del Vallès' },
    { '@type': 'AdministrativeArea', 'name': 'Vallès Occidental' },
    { '@type': 'Country', 'name': 'España' },
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Servicios RUD Studio',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Rótulos Luminosos Barcelona',
          'description': 'Fabricación e instalación de rótulos luminosos, neón LED, letras corpóreas y vinilos de escaparate en Barcelona.',
          'url': 'https://royaluniondesign.com/rotulos',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Branding e Identidad Visual',
          'description': 'Diseño de marca, identidad visual corporativa y sistema de diseño para empresas.',
          'url': 'https://royaluniondesign.com/services',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Diseño Web y E-commerce',
          'description': 'Diseño y desarrollo de sitios web profesionales, tiendas online Shopify y e-commerce en Barcelona.',
          'url': 'https://royaluniondesign.com/services',
        },
      },
    ],
  },
  'sameAs': [
    'https://instagram.com/royaluniondesign',
    'https://linkedin.com/company/royaluniondesign',
    'https://behance.net/royaluniondesign',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://royaluniondesign.com/#website',
  'name': 'RUD Studio',
  'url': 'https://royaluniondesign.com',
  'inLanguage': 'es-ES',
  'publisher': {
    '@id': 'https://royaluniondesign.com/#organization',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona" />
        <meta name="geo.position" content="41.3851;2.1734" />
        {/* Preload hero poster — LCP element */}
        <link rel="preload" href="/hero-bg.webp" as="image" fetchPriority="high" />
        {/* Preconnect for fonts and video CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <PageTracking />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics 4 — next/script garantiza carga correcta en App Router */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CK3CM6Y03"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2CK3CM6Y03', { cookie_flags: 'SameSite=None;Secure' });
          gtag('set', 'user_properties', { site_language: 'es', site_region: 'barcelona' });
        `}</Script>
      </body>
    </html>
  )
}
