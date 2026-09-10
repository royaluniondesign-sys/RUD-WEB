import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Manual de Identidad Corporativa Barcelona · Brand Guidelines Completos | RUD Studio',
  description: 'Diseño de manual de identidad corporativa para empresas en Barcelona. Documenta tu imagen corporativa para equipos, franquicias y proveedores. PDF profesional.',
  keywords: 'manual identidad corporativa Barcelona, brand guidelines Barcelona, libro de marca Barcelona, manual de marca corporativo Barcelona, guía de estilo corporativo',
  alternates: { canonical: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona#service',
  name: 'Manual de Identidad Corporativa Barcelona',
  description: 'Diseño de manual de identidad corporativa completo para empresas en Barcelona. Documenta el sistema visual para su aplicación coherente en todos los soportes.',
  url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Imagen Corporativa Barcelona', url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona' },
}

const MODULOS = [
  { t: 'Identidad y valores', d: 'Misión, visión, propuesta de valor, personalidad de marca y posicionamiento.' },
  { t: 'Sistema de logotipo', d: 'Variantes, construcción, zona de protección, tamaños mínimos, usos incorrectos.' },
  { t: 'Color corporativo', d: 'Paleta primaria y secundaria. Códigos Pantone, CMYK, RGB y HEX.' },
  { t: 'Tipografía', d: 'Fuentes principales y de respaldo. Jerarquía, tamaños, interlineado.' },
  { t: 'Fotografía y estilo visual', d: 'Directrices de fotografía, ilustración e iconografía propios de la marca.' },
  { t: 'Tono de comunicación', d: 'Cómo escribe la marca, vocabulario propio, qué decir y qué evitar.' },
  { t: 'Aplicaciones digitales', d: 'Web, redes sociales, newsletter, firma de email, app móvil si aplica.' },
  { t: 'Aplicaciones físicas', d: 'Papelería, señalética, rótulos, uniformes, vehículos y material POP.' },
]

export default function ManualIdentidadCorporativaBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/imagen-corporativa-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← IMAGEN CORPORATIVA BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>MANUAL DE</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>IDENTIDAD</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>CORPORATIVA BCN</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>PDF PROFESIONAL · 30-80 PÁGINAS · DIGITAL + IMPRESIÓN</p>
            <TrackedLink href="/contact?servicio=manual-identidad" label="Presupuesto manual identidad" location="hero-manual-ic" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>CONTENIDO</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '3rem' }}>QUÉ INCLUYE<br /><em>EL MANUAL</em></h2>
          </ScrollReveal>
          <div>
            {MODULOS.map((m, i) => (
              <ScrollReveal key={m.t} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{m.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{m.d}</p>
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
              <TrackedLink href="/contact?servicio=manual-identidad" label="Presupuesto manual identidad bottom" location="bottom-manual-ic" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
