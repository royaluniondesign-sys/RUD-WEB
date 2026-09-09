import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Diseño de Etiquetas Barcelona · Etiquetas para Botes, Botellas y Envases | RUD Studio',
  description: 'Diseño de etiquetas para productos en Barcelona. Etiquetas adhesivas para botes, botellas, frascos y envases. Artes finales listos para imprenta. Desde 350€.',
  keywords: 'diseño etiquetas Barcelona, etiquetas producto Barcelona, etiquetas botes Barcelona, etiquetas botellas Barcelona, diseño etiqueta adhesiva Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-etiquetas-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/packaging-barcelona/diseno-etiquetas-barcelona#service',
  name: 'Diseño de Etiquetas Barcelona',
  description: 'Diseño de etiquetas adhesivas para productos en Barcelona. Botes, botellas, frascos y envases. Arte final listo para imprenta.',
  url: 'https://www.royaluniondesign.com/packaging-barcelona/diseno-etiquetas-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Packaging Barcelona', url: 'https://www.royaluniondesign.com/packaging-barcelona' },
  offers: { '@type': 'Offer', priceCurrency: 'EUR', price: '350', description: 'Diseño de etiqueta desde 350€.' },
}

const TIPOS = [
  { t: 'Etiquetas frontales', d: 'Diseño adaptado a la forma del envase. Frontal + contra-etiqueta si aplica. Incluye normativa legal básica.' },
  { t: 'Etiquetas envolventes', d: 'Para botellas, tarros y tubos. Diseño continuo que rodea el envase. Especialmente para alimentación y cosmética.' },
  { t: 'Etiquetas de tapa', d: 'Para tapaderas, tapones y precintos. Redondas, ovaladas o formato libre. Con acabado mate o brillante.' },
  { t: 'Pack multisabor/variante', d: 'Cuando hay varias referencias con diseño base compartido. Precio reducido para variantes (mismo layout, diferente color/texto).' },
]

export default function DisenoEtiquetasBarcelona() {
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
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>ETIQUETAS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>BOTES · BOTELLAS · FRASCOS · ARTE FINAL LISTO PARA IMPRENTA · DESDE 350€</p>
            <TrackedLink href="/contact?servicio=etiquetas" label="Presupuesto etiquetas" location="hero-etiquetas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TIPOS DE ETIQUETA</p></ScrollReveal>
          <div>
            {TIPOS.map((t, i) => (
              <ScrollReveal key={t.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{t.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.d}</p>
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
              <TrackedLink href="/contact?servicio=etiquetas" label="Presupuesto etiquetas bottom" location="bottom-etiquetas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
