import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Empresa Rótulos Barcelona · Branding y Web | RUD Studio',
  description: 'Fabricamos rótulos luminosos, neón LED y letras corpóreas en Barcelona. Branding y diseño web de alto rendimiento. Presupuesto gratis en 24h.',
  keywords: 'empresa rótulos Barcelona, rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, branding Barcelona, agencia diseño web Barcelona, señalética corporativa Barcelona, fabricación rótulos Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com' },
  openGraph: {
    title: 'RUD Studio · Rótulos, Branding y Web Barcelona',
    description: 'Fabricamos rótulos luminosos, neón LED y letras corpóreas en Barcelona. Branding y diseño web. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RUD Studio · Rótulos, Branding y Web Barcelona',
    description: 'Rótulos luminosos, neón LED y letras corpóreas en Barcelona. Branding y diseño web. Presupuesto gratis.',
    images: ['https://royaluniondesign.com/og-image.png'],
  },
}

export default function Page() {
  return <HomeContent />
}
