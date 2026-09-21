import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Diseño de Packaging Barcelona · Envases, Cajas y Etiquetas | RUD Studio',
  description: 'Diseño de packaging para productos en Barcelona. Cajas, envases, etiquetas, bolsas y estuches con identidad visual coherente. Para pymes, artesanos y marcas locales.',
  keywords: 'diseño packaging Barcelona, packaging personalizado Barcelona, diseño envases Barcelona, diseño etiquetas Barcelona, packaging producto Barcelona, packaging marca Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/packaging-barcelona' },
  openGraph: {
    title: 'Diseño de Packaging Barcelona | RUD Studio',
    description: 'Packaging con identidad para tu producto en Barcelona. Cajas, etiquetas, envases y bolsas diseñados dentro de tu sistema de marca.',
    url: 'https://www.royaluniondesign.com/packaging-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/packaging-barcelona#service',
  name: 'Diseño de Packaging Barcelona',
  description: 'Diseño de packaging para productos y marcas en Barcelona. Cajas, envases, etiquetas y bolsas con sistema visual coherente.',
  url: 'https://www.royaluniondesign.com/packaging-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de packaging',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de etiquetas Barcelona', url: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-etiquetas-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de envases Barcelona', url: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-envases-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Hacéis solo el diseño del packaging o también la producción?', acceptedAnswer: { '@type': 'Answer', text: 'Hacemos el diseño gráfico del packaging (arte final listo para imprenta) y gestionamos la producción con nuestros proveedores en Barcelona si lo necesitas. Para tiradas pequeñas (desde 50 unidades), también orientamos hacia proveedores de impresión digital adecuados a cada tipo de material.' } },
    { '@type': 'Question', name: '¿Cuánto cuesta diseñar el packaging de un producto?', acceptedAnswer: { '@type': 'Answer', text: 'El diseño de packaging parte desde 350€ para una etiqueta sencilla y desde 600€ para una caja con desarrollo de troquel. El precio final depende de la complejidad del formato, si hay desarrollo de estructura nueva o si es adaptación de troquel existente, y si incluye múltiples variantes (sabores, tamaños). Presupuesto personalizado.' } },
    { '@type': 'Question', name: '¿El packaging debe seguir la identidad visual de mi marca?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, y es crítico. El packaging es muchas veces el primer contacto físico del cliente con tu marca. Si los colores, tipografías y estilo gráfico no son coherentes con tu web, redes sociales o local, la marca pierde fuerza. Si aún no tienes identidad visual, te ayudamos a crearla antes del packaging.' } },
    { '@type': 'Question', name: '¿Trabajáis con artesanos y pequeños productores?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, es uno de nuestros perfiles de cliente más habituales: productores de alimentos artesanos, cosmética natural, textil y complementos. Entendemos las necesidades de tiradas cortas y presupuestos ajustados, y diseñamos packaging que compite visualmente con marcas grandes.' } },
  ],
}

const FORMATOS = [
  { t: 'Etiquetas', d: 'Etiquetas adhesivas para botes, botellas, frascos y envases. Diseño adaptado a la forma del envase, material y normativa de etiquetado.' },
  { t: 'Cajas y estuches', d: 'Diseño sobre troquel existente o desarrollo de estructura nueva. Cajas de cartón, kraft, rígidas o microcanal.' },
  { t: 'Bolsas y papel tissue', d: 'Bolsas con asa, bolsas stand-up, papel de envolver y tissue paper. Coherentes con la identidad de la marca.' },
  { t: 'Packaging de producto', d: 'Packaging completo para lanzamientos: definición de formato, materiales, diseño, artes finales y gestión de producción.' },
  { t: 'Packaging para gift sets', d: 'Sets de regalo y ediciones especiales. Caja exterior + packaging interior + tarjeta. Para tiendas y e-commerce.' },
]

export default function PackagingBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — PACKAGING CON IDENTIDAD PARA MARCAS EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>DISEÑO DE</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>PACKAGING</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>ETIQUETAS · CAJAS · BOLSAS · ENVASES · ARTES FINALES LISTOS PARA IMPRENTA</p>
            <TrackedLink href="/contact?servicio=packaging" label="Presupuesto packaging" location="hero-pkg" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>FORMATOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ<br /><em>DISEÑAMOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {FORMATOS.map((f, i) => (
              <ScrollReveal key={f.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{f.t}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{f.d}</p>
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
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>VER TAMBIÉN</p>
          </ScrollReveal>
          <div>
            {[
              { href: '/packaging-barcelona/diseno-etiquetas-barcelona', label: 'Diseño de Etiquetas Barcelona' },
              { href: '/packaging-barcelona/diseno-envases-barcelona', label: 'Diseño de Envases Barcelona' },
              { href: '/branding-barcelona', label: 'Branding Barcelona' },
              { href: '/imagen-corporativa-barcelona', label: 'Imagen Corporativa Barcelona' },
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
              <TrackedLink href="/contact?servicio=packaging" label="Presupuesto packaging bottom" location="bottom-pkg" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
