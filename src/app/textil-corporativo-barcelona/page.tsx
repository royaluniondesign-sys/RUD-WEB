import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Textil Corporativo Barcelona · Uniformes y Ropa Personalizada para Empresas | RUD Studio',
  description: 'Diseño y producción de textil corporativo en Barcelona. Uniformes de empresa, camisetas personalizadas, ropa de trabajo con logo. Bordado y serigrafía. Desde 10 unidades.',
  keywords: 'textil corporativo Barcelona, uniformes empresa Barcelona, ropa corporativa Barcelona, camisetas personalizadas empresa Barcelona, ropa de trabajo con logo Barcelona, bordado logo Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/textil-corporativo-barcelona' },
  openGraph: {
    title: 'Textil Corporativo Barcelona | RUD Studio',
    description: 'Uniformes y ropa corporativa para tu empresa en Barcelona. Diseño + bordado o serigrafía. Desde 10 unidades.',
    url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/textil-corporativo-barcelona#service',
  name: 'Textil Corporativo Barcelona',
  description: 'Diseño y producción de textil corporativo para empresas en Barcelona: uniformes, camisetas personalizadas, ropa de trabajo con logo mediante bordado o serigrafía.',
  url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Textil corporativo',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Uniformes corporativos Barcelona', url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/uniformes-corporativos-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Camisetas personalizadas empresa Barcelona', url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/camisetas-personalizadas-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuántas unidades es el mínimo para textil corporativo?', acceptedAnswer: { '@type': 'Answer', text: 'Para serigrafía el mínimo es 10 unidades por color y diseño. Para bordado, a partir de 5 prendas. Para pedidos muy pequeños (menos de 5 unidades), trabajamos con DTF (transfer digital) sin mínimo de tirada. Indicanos cantidad y tipo de prenda y te orientamos sobre la mejor técnica.' } },
    { '@type': 'Question', name: '¿Qué diferencia hay entre bordado y serigrafía para uniformes?', acceptedAnswer: { '@type': 'Answer', text: 'El bordado da un acabado premium y es más duradero en lavados intensivos, ideal para uniformes de hostelería, salud y equipos de trabajo. La serigrafía es más económica para tiradas medianas y grandes, da más libertad en el diseño (gradientes, fotografías) y es perfecta para camisetas de evento, equipos deportivos o ropa casual corporativa.' } },
    { '@type': 'Question', name: '¿El diseño del uniforme tiene que ir con mi identidad corporativa?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, y lo aplicamos nosotros. Si tienes logo y colores corporativos, adaptamos el diseño al textil (a veces el logo necesita simplificarse para bordado). Si no tienes identidad visual todavía, podemos diseñarla antes de producir los uniformes: salen más caros pero el resultado es coherente con todo lo demás.' } },
    { '@type': 'Question', name: '¿Podemos elegir el modelo y color de la prenda?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Trabajamos con catálogos de proveedores con cientos de modelos: polos, camisetas, sudaderas, camisas, chaquetas, delantales, gorras. Enviamos muestras de color antes de la producción. Para hostelería y sanitario tenemos proveedores especializados con tejidos funcionales.' } },
  ],
}

const PRODUCTOS = [
  { t: 'Polos y camisas', d: 'Uniformes de recepción, atención al cliente y mandos. Bordado con logo en pecho o manga. Disponibles en múltiples colores y tallas.' },
  { t: 'Camisetas', d: 'Serigrafía o DTF para equipos, eventos y equipos de trabajo. Desde 10 unidades. Diseño incluido en pedidos de 30+ prendas.' },
  { t: 'Sudaderas y jerséis', d: 'Para temporada de frío o como regalo corporativo. Logo bordado o impreso. Opción de cremallera y capucha.' },
  { t: 'Ropa técnica', d: 'Chalecos, chaquetas y anorak para equipos de exterior, obras o logística. Tejidos de alta visibilidad, impermeables o transpirables.' },
  { t: 'Hostelería', d: 'Delantales, chaquetillas de cocinero, pantalones, gorros. Tejidos resistentes a lavados frecuentes. Nombres y logos bordados.' },
  { t: 'Gorras y complementos', d: 'Gorras con logo bordado, bolsas de tela, mascarillas corporativas. Ideal para completar el uniforme o como merchandise.' },
]

export default function TextilCorporativoBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — UNIFORMES Y ROPA CORPORATIVA PARA EMPRESAS EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>TEXTIL</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>CORPORATIVO</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>BORDADO · SERIGRAFÍA · DTF · DESDE 10 UNIDADES · DISEÑO INCLUIDO</p>
            <TrackedLink href="/contact?servicio=textil" label="Presupuesto textil corporativo" location="hero-textil" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
              PRENDAS<br /><em>Y FORMATOS</em>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', borderTop: '1px solid var(--border)' }}>
            {PRODUCTOS.map((p, i) => (
              <ScrollReveal key={p.t} delay={i * 40}>
                <div style={{ padding: '1.75rem', background: 'var(--bg)', border: '1px solid var(--border)', borderTop: 'none', borderLeft: i % 2 === 0 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>{p.t}</p>
                  <p style={{ fontSize: '0.825rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
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
              { href: '/textil-corporativo-barcelona/uniformes-corporativos-barcelona', label: 'Uniformes Corporativos Barcelona' },
              { href: '/textil-corporativo-barcelona/camisetas-personalizadas-barcelona', label: 'Camisetas Personalizadas Empresa Barcelona' },
              { href: '/branding-barcelona', label: 'Branding Barcelona' },
              { href: '/imagen-corporativa-barcelona', label: 'Imagen Corporativa Barcelona' },
              { href: '/material-pop-barcelona', label: 'Material POP Barcelona' },
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
              <TrackedLink href="/contact?servicio=textil" label="Presupuesto textil bottom" location="bottom-textil" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
