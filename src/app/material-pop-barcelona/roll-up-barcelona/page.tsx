import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Roll Up Barcelona · Diseño e Impresión de Roll-Ups para Ferias y Eventos | RUD Studio',
  description: 'Roll-ups para ferias, eventos y punto de venta en Barcelona. Diseño + impresión + estructura. Entrega en 48h. Formatos estándar y personalizados. Desde 180€.',
  keywords: 'roll up Barcelona, roll-up feria Barcelona, diseño roll up Barcelona, impresión roll up Barcelona, roll up evento Barcelona, expositor enrollable Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/material-pop-barcelona/roll-up-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/material-pop-barcelona/roll-up-barcelona#service',
  name: 'Roll Up Barcelona',
  description: 'Diseño e impresión de roll-ups para ferias, eventos y punto de venta en Barcelona. Entrega en 48h.',
  url: 'https://www.royaluniondesign.com/material-pop-barcelona/roll-up-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Material POP Barcelona', url: 'https://www.royaluniondesign.com/material-pop-barcelona' },
  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '180', description: 'Roll-up 85×200cm diseño + impresión + estructura desde 180€.' },
}

const FORMATOS = [
  { f: '85 × 200 cm', u: 'El más común para ferias y eventos. Fácil de transportar.', p: 'desde 180€' },
  { f: '100 × 200 cm', u: 'Más presencia visual en stands y recepciones.', p: 'desde 220€' },
  { f: '120 × 200 cm', u: 'Ideal para fondos de escenario o zona de foto.', p: 'desde 270€' },
  { f: 'Personalizado', u: 'Cualquier medida o formato especial. Presupuesto a medida.', p: 'consultar' },
]

export default function RollUpBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/material-pop-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← MATERIAL POP BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>ROLL-UP</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>DISEÑO + IMPRESIÓN + ESTRUCTURA · ENTREGA 48H · DESDE 180€</p>
            <TrackedLink href="/contact?servicio=roll-up" label="Presupuesto roll-up" location="hero-rollup" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMAÑOS Y PRECIOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '3rem' }}>FORMATOS<br /><em>DISPONIBLES</em></h2>
          </ScrollReveal>
          <div>
            {FORMATOS.map((f, i) => (
              <ScrollReveal key={f.f} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)' }}>{f.f}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{f.u}</p>
                  <p className="mono-label" style={{ color: 'var(--fg)', whiteSpace: 'nowrap' }}>{f.p}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <ScrollReveal><p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1.5rem' }}>Precios con diseño + impresión + estructura enrollable. IVA no incluido.</p></ScrollReveal>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>PIDE TU<br /><em>PRESUPUESTO</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=roll-up" label="Presupuesto roll-up bottom" location="bottom-rollup" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
