import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Identidad Visual Barcelona · Diseño de Marca para Empresas | RUD Studio',
  description: 'Diseño de identidad visual para empresas en Barcelona. Sistema de marca completo: logo, colores, tipografías, aplicaciones y manual. Pymes y negocios locales.',
  keywords: 'identidad visual Barcelona, diseño identidad corporativa Barcelona, imagen corporativa Barcelona, sistema de marca Barcelona, identidad de marca Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/branding-barcelona/identidad-visual-barcelona' },
  openGraph: {
    title: 'Identidad Visual Barcelona | RUD Studio',
    description: 'Sistema de identidad visual completo para empresas en Barcelona. Logo, colores, tipografías y manual de marca.',
    url: 'https://www.royaluniondesign.com/branding-barcelona/identidad-visual-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/branding-barcelona/identidad-visual-barcelona#service',
  name: 'Diseño de Identidad Visual Barcelona',
  description: 'Diseño de identidad visual completa para empresas y pymes en Barcelona: logotipo, paleta de color, tipografías, sistema de marca y aplicaciones.',
  url: 'https://www.royaluniondesign.com/branding-barcelona/identidad-visual-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Branding Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona' },
}

const ENTREGABLES = [
  { item: 'Logotipo principal', detalle: 'Todas las variantes: horizontal, vertical, símbolo solo, negativo, monocromo' },
  { item: 'Paleta de color', detalle: 'Colores primarios, secundarios y neutros con códigos Pantone, CMYK, RGB y HEX' },
  { item: 'Sistema tipográfico', detalle: 'Jerarquía tipográfica: display, cuerpo, funcional. Fuentes con licencias claras' },
  { item: 'Patrones y elementos', detalle: 'Texturas, fondos, iconografía y elementos gráficos propios de la marca' },
  { item: 'Aplicaciones', detalle: 'Tarjeta de visita, firma de email, cabecera documentos, plantillas redes sociales' },
  { item: 'Archivos de entrega', detalle: 'SVG, PNG transparente, PDF vectorial, AI/EPS. Para uso digital e impresión' },
]

export default function IdentidadVisualBarcelona() {
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
            RUD STUDIO — DISEÑO DE MARCA PARA PYMES EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>IDENTIDAD</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>VISUAL</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>SISTEMA COMPLETO · LOGO + COLOR + TIPO + APLICACIONES · DESDE 2.500€</p>
            <TrackedLink href="/contact?servicio=identidad-visual" label="Presupuesto identidad visual" location="hero-id-visual" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>QUÉ INCLUYE</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ENTREGABLES<br /><em>DEL PROYECTO</em>
            </h2>
          </ScrollReveal>
          <div>
            {ENTREGABLES.map((e, i) => (
              <ScrollReveal key={e.item} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{e.item}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{e.detalle}</p>
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
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              SERVICIOS<br /><em>RELACIONADOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/branding-barcelona', label: 'Agencia de Branding Barcelona' },
              { href: '/branding-barcelona/diseno-logo-barcelona', label: 'Diseño de Logotipo Barcelona' },
              { href: '/branding-barcelona/manual-de-marca-barcelona', label: 'Manual de Marca Barcelona' },
              { href: '/rotulos', label: 'Rótulos para tu local' },
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
              <TrackedLink href="/contact?servicio=identidad-visual" label="Presupuesto identidad visual bottom" location="bottom-id-visual" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
