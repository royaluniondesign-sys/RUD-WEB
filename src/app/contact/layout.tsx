import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Presupuesto Rótulos Barcelona Gratis en 24h — Contacto | RUD Studio',
  description: 'Pide presupuesto gratis para rótulos luminosos, neón LED, letras corpóreas, vinilos escaparate, branding o diseño web en Barcelona. Sin compromiso, respuesta en menos de 24h.',
  keywords: 'presupuesto rótulos Barcelona, pedir presupuesto neón LED Barcelona, precio letras corpóreas Barcelona, contacto empresa rótulos Barcelona, presupuesto branding Barcelona, presupuesto diseño web Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/contact' },
  openGraph: {
    title: 'Contacto — Presupuesto Gratis en 24h · RUD Studio Barcelona',
    description: 'Cuéntanos tu proyecto. Rótulos, branding o diseño web. Presupuesto personalizado en 24h.',
    url: 'https://www.royaluniondesign.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
