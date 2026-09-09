import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Uniformes Corporativos Barcelona · Ropa de Trabajo con Logo para Empresas | RUD Studio',
  description: 'Uniformes corporativos para empresas en Barcelona. Polos, camisas, chaquetas y delantales con logo bordado o serigrafiado. Para hostelería, oficina y sectores técnicos.',
  keywords: 'uniformes corporativos Barcelona, uniformes empresa Barcelona, ropa de trabajo con logo Barcelona, uniformes hostelería Barcelona, uniformes personal Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/uniformes-corporativos-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/textil-corporativo-barcelona/uniformes-corporativos-barcelona#service',
  name: 'Uniformes Corporativos Barcelona',
  description: 'Diseño y producción de uniformes corporativos para empresas en Barcelona. Bordado y serigrafía de logos en polos, camisas, chaquetas y delantales.',
  url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/uniformes-corporativos-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Textil Corporativo Barcelona', url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona' },
}

const SECTORES = [
  { s: 'Hostelería y restauración', p: 'Delantales, chaquetillas, camisas de sala, gorros de cocina. Tejidos resistentes a lavados frecuentes a 60°.' },
  { s: 'Oficina y atención al cliente', p: 'Polos y camisas con logo bordado en pecho. Chaquetas corporativas. Para recepcionistas, comerciales y equipo de tienda.' },
  { s: 'Sectores técnicos', p: 'Ropa de trabajo para técnicos, instaladores y personal de obra. Tejidos funcionales con bolsillos y refuerzos.' },
  { s: 'Salud y estética', p: 'Batas, pijamas sanitarios y uniformes para clínicas, centros estéticos y farmacias. Con nombre y logo bordados.' },
  { s: 'Eventos y ferias', p: 'Camisetas y polos para equipo de evento. Identificación clara del personal. Tiradas desde 10 unidades.' },
]

export default function UniformesCorporativosBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/textil-corporativo-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← TEXTIL CORPORATIVO BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>UNIFORMES</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>CORPORATIVOS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>HOSTELERÍA · OFICINA · TÉCNICO · SALUD · BORDADO Y SERIGRAFÍA</p>
            <TrackedLink href="/contact?servicio=uniformes" label="Presupuesto uniformes" location="hero-uniformes" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>POR SECTOR</p></ScrollReveal>
          <div>
            {SECTORES.map((s, i) => (
              <ScrollReveal key={s.s} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.s}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.p}</p>
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
              <TrackedLink href="/contact?servicio=uniformes" label="Presupuesto uniformes bottom" location="bottom-uniformes" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
