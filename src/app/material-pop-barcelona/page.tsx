import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Material POP Barcelona · Displays, Roll-Ups y Señalética Comercial | RUD Studio',
  description: 'Diseño y producción de material POP en Barcelona. Roll-ups, displays, banners, carteles y señalética para punto de venta. Diseño + producción en un solo proveedor.',
  keywords: 'material POP Barcelona, material punto de venta Barcelona, roll up Barcelona, display Barcelona, señalética comercial Barcelona, banners Barcelona, publicidad en el punto de venta',
  alternates: { canonical: 'https://www.royaluniondesign.com/material-pop-barcelona' },
  openGraph: {
    title: 'Material POP Barcelona | RUD Studio',
    description: 'Diseño y producción de material POP para tu punto de venta en Barcelona. Roll-ups, displays, banners y señalética comercial.',
    url: 'https://www.royaluniondesign.com/material-pop-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/material-pop-barcelona#service',
  name: 'Material POP Barcelona',
  description: 'Diseño y producción de material POP para el punto de venta en Barcelona: roll-ups, displays, banners, carteles y señalética comercial.',
  url: 'https://www.royaluniondesign.com/material-pop-barcelona',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.royaluniondesign.com/#organization',
    name: 'RUD Studio',
  },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Material POP',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roll-up Barcelona', url: 'https://www.royaluniondesign.com/material-pop-barcelona/roll-up-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Displays y stands Barcelona', url: 'https://www.royaluniondesign.com/material-pop-barcelona/displays-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué es el material POP?', acceptedAnswer: { '@type': 'Answer', text: 'POP significa "Point of Purchase" (punto de venta). Son todos los elementos visuales que se colocan en el lugar donde el cliente toma la decisión de compra: roll-ups, displays, carteles de precio, señalética interior, banners de suelo o de techo, expositores de producto, etc.' } },
    { '@type': 'Question', name: '¿Hacéis diseño y producción, o solo diseño?', acceptedAnswer: { '@type': 'Answer', text: 'Hacemos las dos cosas. Diseñamos el material adaptado a tu imagen corporativa y lo producimos (impresión + estructura si aplica). También adaptamos diseños existentes para imprimir. Para grandes tiradas o formatos especiales, gestionamos la producción con nuestros proveedores de impresión en Barcelona.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta un roll-up en Barcelona?', acceptedAnswer: { '@type': 'Answer', text: 'Un roll-up básico (diseño + impresión + estructura enrollable, 85×200cm) parte desde 180€. Un roll-up premium con estructura de mayor calidad y diseño elaborado desde 280€. Para pedidos de varios roll-ups, el precio por unidad baja. Presupuesto detallado en 24h.' } },
    { '@type': 'Question', name: '¿El material POP debe ir coordinado con mi identidad corporativa?', acceptedAnswer: { '@type': 'Answer', text: 'Idealmente sí. El material POP es uno de los momentos de mayor impacto visual con el cliente. Si el roll-up de un evento no guarda relación con tu web o tu tarjeta de visita, se pierde coherencia de marca. Si no tienes un sistema de identidad visual definido, te ayudamos a crear uno antes de producir el material.' } },
  ],
}

const PRODUCTOS = [
  { t: 'Roll-up', d: 'Expositor enrollable para ferias, eventos y puntos de venta. 85×200cm, 100×200cm o tamaño personalizado. Diseño + impresión + estructura.', precio: 'desde 180€' },
  { t: 'Display de suelo', d: 'Expositores autoportantes en cartón, forex o aluminio. Formatos A4, A3, o personalizados. Ideales para TPV, recepción, entrada.', precio: 'desde 120€' },
  { t: 'Banners y lonas', d: 'Impresión gran formato para escaparates, fachadas, vallas y stands. Lona, vinilo o tela. Con o sin estructura.', precio: 'desde 90€/m²' },
  { t: 'Señalética interior', d: 'Carteles de sección, indicadores de precios, carteles de producto, señalética de seguridad. Vinilo, PVC, aluminio o foam.', precio: 'presupuesto a medida' },
  { t: 'Material para eventos', d: 'Pack completo para ferias y eventos: roll-up + mesa + backdrop + acreditaciones + carpetas. Entrega 5 días hábiles.', precio: 'pack desde 650€' },
]

export default function MaterialPopBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — DISEÑO Y PRODUCCIÓN DE MATERIAL PARA EL PUNTO DE VENTA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>MATERIAL</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>POP</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>ROLL-UPS · DISPLAYS · BANNERS · SEÑALÉTICA · DISEÑO + PRODUCCIÓN</p>
            <TrackedLink href="/contact?servicio=material-pop" label="Presupuesto material POP" location="hero-pop" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PRODUCTOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ<br /><em>PRODUCIMOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {PRODUCTOS.map((p, i) => (
              <ScrollReveal key={p.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{p.t}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.d}</p>
                  <p className="mono-label" style={{ color: 'var(--fg)', whiteSpace: 'nowrap' }}>{p.precio}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>FAQ</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS<br /><em>FRECUENTES</em>
            </h2>
          </ScrollReveal>
          <div>
            {faqSchema.mainEntity.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0' }}>
                  <summary style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    {faq.name}
                    <span style={{ color: 'var(--muted)', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginTop: '0.75rem' }}>{faq.acceptedAnswer.text}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>SERVICIOS RELACIONADOS</p>
          </ScrollReveal>
          <div>
            {[
              { href: '/material-pop-barcelona/roll-up-barcelona', label: 'Roll-Up Barcelona' },
              { href: '/material-pop-barcelona/displays-barcelona', label: 'Displays y Stands Barcelona' },
              { href: '/rotulos', label: 'Rótulos y señalética exterior' },
              { href: '/imagen-corporativa-barcelona', label: 'Imagen Corporativa Barcelona' },
              { href: '/packaging-barcelona', label: 'Packaging Barcelona' },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 30}>
                <Link href={item.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', gap: '2rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.label}</span>
                  <span className="mono-label" style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PIDE TU<br /><em>PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=material-pop" label="Presupuesto POP bottom" location="bottom-pop" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                SOLICITAR PRESUPUESTO →
              </TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                TELEGRAM · RESPUESTA INMEDIATA
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
