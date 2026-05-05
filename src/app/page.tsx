import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Empresa de Rótulos en Barcelona — Branding y Diseño Web | RUD Studio',
  description: 'RUD Studio: fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Branding estratégico y diseño web de alto rendimiento. Visita técnica gratis y presupuesto en 24h.',
  keywords: 'empresa rótulos Barcelona, rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, branding Barcelona, agencia diseño web Barcelona, señalética corporativa Barcelona, fabricación rótulos Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com' },
  openGraph: {
    title: 'RUD Studio — Empresa de Rótulos en Barcelona | Branding & Diseño Web',
    description: 'Fabricamos e instalamos rótulos luminosos, neón LED y letras corpóreas en Barcelona. Branding estratégico y diseño web de alto rendimiento. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUD Studio — Empresa de Rótulos en Barcelona',
    description: 'Rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Branding y diseño web. Presupuesto gratis.',
    images: ['https://royaluniondesign.com/og-image.png'],
  },
}

export default function Page() {
  return <HomeContent />
}
