import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Diseño de Envases Barcelona · Cajas, Estuches y Packaging de Producto | RUD Studio',
  description: 'Diseño de envases y packaging de producto en Barcelona. Cajas de cartón, estuches, bolsas y packaging para e-commerce. Troquel incluido. Artes finales para imprenta.',
  keywords: 'diseño envases Barcelona, diseño cajas Barcelona, packaging producto Barcelona, diseño packaging e-commerce Barcelona, caja cartón personalizada Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-envases-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/packaging-barcelona/diseno-envases-barcelona#service',
  name: 'Diseño de Envases Barcelona',
  description: 'Diseño de envases, cajas y packaging de producto para marcas en Barcelona.',
  url: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-envases-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Packaging Barcelona', url: 'https://www.royaluniondesign.com/packaging-barcelona' },
  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '600', description: 'Diseño de caja/envase desde 600€ incluyendo arte final y troquel.' },
}

const FORMATOS = [
  { t: 'Cajas plegables', d: 'Cajas de cartón con troquel. Para producto, regalo y e-commerce. Diseño sobre troquel estándar (más económico) o troquel nuevo.' },
  { t: 'Cajas rígidas', d: 'Packaging premium con tapa. Para joyería, cosmética de lujo, electrónica o regalos corporativos. Acabados especiales disponibles.' },
  { t: 'Bolsas de papel', d: 'Bolsas con asa troquelada, cinta o cordón. Para retail, take-away y packaging de producto final.' },
  { t: 'Packaging e-commerce', d: 'Cajas de envío personalizadas (tipo postal o caja americana). Incluye interior (papel tissue, relleno, tarjeta).' },
  { t: 'Estuches y tubos', d: 'Para cosmética, alimentación, velas y complementos. Formas cilíndricas, hexagonales o personalizadas.' },
]

export default function DisenoEnvasesBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/packaging-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← PACKAGING BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>DISEÑO DE</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>ENVASES</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>CAJAS · ESTUCHES · BOLSAS · E-COMMERCE · TROQUEL INCLUIDO · DESDE 600€</p>
            <TrackedLink href="/contact?servicio=envases" label="Presupuesto envases" location="hero-envases" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>FORMATOS</p></ScrollReveal>
          <div>
            {FORMATOS.map((f, i) => (
              <ScrollReveal key={f.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{f.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{f.d}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>PIDE TU<br /><em>PRESUPUESTO</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=envases" label="Presupuesto envases bottom" location="bottom-envases" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
