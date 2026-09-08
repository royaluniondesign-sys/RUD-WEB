import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Diseño de Logotipo Barcelona · Logo Profesional para tu Empresa | RUD Studio',
  description: 'Diseño de logotipo profesional en Barcelona. Logo para pymes, autónomos y negocios locales. Archivos vectoriales en todos los formatos. Desde 1.200€.',
  keywords: 'diseño logo Barcelona, diseño logotipo Barcelona, logo empresa Barcelona, logotipo profesional Barcelona, diseño logo pymes Barcelona, creación logo Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/branding-barcelona/diseno-logo-barcelona' },
  openGraph: {
    title: 'Diseño de Logotipo Barcelona | RUD Studio',
    description: 'Logo profesional para tu empresa en Barcelona. Vectorial, todas las variantes, todos los formatos. Desde 1.200€.',
    url: 'https://www.royaluniondesign.com/branding-barcelona/diseno-logo-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/branding-barcelona/diseno-logo-barcelona#service',
  name: 'Diseño de Logotipo Barcelona',
  description: 'Diseño de logotipo profesional para empresas y autónomos en Barcelona. Incluye todas las variantes, archivos vectoriales y revisiones hasta aprobación.',
  url: 'https://www.royaluniondesign.com/branding-barcelona/diseno-logo-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Branding Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    price: '1200',
    description: 'Diseño de logotipo desde 1.200€. Incluye 2 conceptos iniciales, revisiones y archivos en todos los formatos.',
  },
}

const PAQUETES = [
  {
    nombre: 'Logo Esencial',
    precio: 'desde 1.200€',
    incluye: ['2 propuestas iniciales', 'Logo principal + variante reducida', 'Paleta de color básica', 'SVG + PNG en todos los tamaños', '3 rondas de revisión'],
  },
  {
    nombre: 'Logo + Sistema',
    precio: 'desde 2.000€',
    incluye: ['3 propuestas iniciales', 'Logo en todas las variantes', 'Paleta + tipografía definida', 'Patrones y elementos secundarios', 'Tarjeta de visita incluida', 'SVG + AI + PDF vectorial'],
  },
  {
    nombre: 'Identidad Completa',
    precio: 'desde 2.500€',
    incluye: ['Sistema visual completo', 'Manual de marca básico', 'Plantillas redes sociales', 'Firma de email', 'Todos los formatos', 'Soporte 30 días post-entrega'],
  },
]

export default function DisenoLogoBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/branding-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← BRANDING BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — LOGOTIPOS PROFESIONALES EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>DISEÑO DE</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>LOGOTIPO</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>VECTORIAL · TODAS LAS VARIANTES · REVISIONES INCLUIDAS · DESDE 1.200€</p>
            <TrackedLink href="/contact?servicio=logo" label="Presupuesto logo" location="hero-logo" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PAQUETES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PRECIOS<br /><em>Y QUÉ INCLUYEN</em>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px', borderTop: '1px solid var(--border)' }}>
            {PAQUETES.map((p, i) => (
              <ScrollReveal key={p.nombre} delay={i * 60}>
                <div style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--bg)', borderTop: 'none', borderLeft: i === 0 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>{p.nombre}</p>
                  <p style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--fg)', marginBottom: '1.5rem' }}>{p.precio}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.incluye.map(item => (
                      <li key={item} style={{ fontSize: '0.825rem', color: 'var(--muted)', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--fg)', flexShrink: 0 }}>—</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>Precios orientativos. IVA no incluido. Presupuesto personalizado en 24h.</p>
          </ScrollReveal>
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
              { href: '/branding-barcelona/manual-de-marca-barcelona', label: 'Manual de Marca Barcelona' },
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
              <TrackedLink href="/contact?servicio=logo" label="Presupuesto logo bottom" location="bottom-logo" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
