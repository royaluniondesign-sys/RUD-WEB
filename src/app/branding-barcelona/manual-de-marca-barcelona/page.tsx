import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Manual de Marca Barcelona · Brand Guidelines para tu Empresa | RUD Studio',
  description: 'Diseño de manual de marca (brand guidelines) en Barcelona. Documenta cómo usar tu identidad visual. Para pymes con equipo o que trabajan con proveedores externos.',
  keywords: 'manual de marca Barcelona, brand guidelines Barcelona, libro de marca Barcelona, guía de estilo marca Barcelona, brandbook Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/branding-barcelona/manual-de-marca-barcelona' },
  openGraph: {
    title: 'Manual de Marca Barcelona | RUD Studio',
    description: 'Brand guidelines profesionales para tu empresa en Barcelona. Documenta tu identidad visual para equipos y proveedores.',
    url: 'https://www.royaluniondesign.com/branding-barcelona/manual-de-marca-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/branding-barcelona/manual-de-marca-barcelona#service',
  name: 'Manual de Marca Barcelona',
  description: 'Diseño de manual de marca (brand guidelines) para empresas en Barcelona. Documenta el uso correcto de la identidad visual para equipos y proveedores.',
  url: 'https://www.royaluniondesign.com/branding-barcelona/manual-de-marca-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Branding Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona' },
}

const SECCIONES = [
  { t: 'Identidad de marca', d: 'Historia, misión, valores y posicionamiento. El ADN escrito de la empresa.' },
  { t: 'Sistema del logotipo', d: 'Todas las variantes, espacios de protección, tamaños mínimos y usos incorrectos.' },
  { t: 'Paleta de color', d: 'Colores primarios y secundarios con códigos exactos (Pantone, CMYK, RGB, HEX).' },
  { t: 'Tipografía', d: 'Jerarquía tipográfica, tamaños, interlineado y combinaciones recomendadas.' },
  { t: 'Tono de voz', d: 'Cómo habla la marca: registro, vocabulario, qué se dice y qué no.' },
  { t: 'Aplicaciones', d: 'Cómo se aplica la identidad en cada soporte: digital, impresión, señalética, rótulos.' },
]

export default function ManualDeMarcaBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/branding-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← BRANDING BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BRAND GUIDELINES PARA EMPRESAS EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>MANUAL</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>DE MARCA</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>BRAND GUIDELINES · PDF PROFESIONAL · PARA EQUIPOS Y PROVEEDORES</p>
            <TrackedLink href="/contact?servicio=manual-marca" label="Presupuesto manual marca" location="hero-manual" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'start', marginBottom: '3rem' }}>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--fg)', lineHeight: 1 }}>
                POR QUÉ<br /><em>NECESITAS</em><br />UN MANUAL<br />DE MARCA
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--fg)', lineHeight: 1.75 }}>Sin un manual de marca, cada persona que usa tu identidad visual la interpreta a su manera. El resultado es inconsistencia: un logo mal escalado aquí, un color incorrecto allá, un tono de voz que no encaja.</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>El manual de marca es el documento de referencia que garantiza que tu empresa comunica de forma coherente en todos los touchpoints, independientemente de quién lo haga.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>QUÉ INCLUYE</p>
          </ScrollReveal>
          <div>
            {SECCIONES.map((s, i) => (
              <ScrollReveal key={s.t} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
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
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>VER TAMBIÉN</p>
          </ScrollReveal>
          <div>
            {[
              { href: '/branding-barcelona', label: 'Agencia de Branding Barcelona' },
              { href: '/branding-barcelona/identidad-visual-barcelona', label: 'Identidad Visual Barcelona' },
              { href: '/branding-barcelona/diseno-logo-barcelona', label: 'Diseño de Logotipo Barcelona' },
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
              <TrackedLink href="/contact?servicio=manual-marca" label="Presupuesto manual bottom" location="bottom-manual" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
