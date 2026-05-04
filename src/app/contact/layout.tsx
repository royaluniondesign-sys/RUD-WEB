import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Presupuesto Gratis en 24h · RUD Studio Barcelona',
  description: 'Pide presupuesto sin compromiso para rótulos luminosos, carteles, vinilos, branding o diseño web en Barcelona. Respuesta en menos de 24 horas.',
  keywords: 'presupuesto rótulos Barcelona,contacto agencia branding Barcelona,pedir presupuesto carteles Barcelona,vinilos escaparate presupuesto',
  alternates: { canonical: 'https://royaluniondesign.com/contact' },
  openGraph: {
    title: 'Contacto — Presupuesto Gratis en 24h · RUD Studio Barcelona',
    description: 'Cuéntanos tu proyecto. Rótulos, branding o diseño web. Presupuesto personalizado en 24h.',
    url: 'https://royaluniondesign.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
