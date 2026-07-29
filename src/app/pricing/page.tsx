import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios Rótulos Barcelona, Branding y Diseño Web — Tarifas | RUD Studio',
  description: 'Precios orientativos de rótulos luminosos (desde 300€), neón LED (desde 1.800€), letras corpóreas (desde 2.500€), branding y diseño web en Barcelona. Presupuesto personalizado gratis en 24h.',
  keywords: 'precio rótulos Barcelona, cuánto cuesta neón LED Barcelona, precio letras corpóreas Barcelona, tarifa branding Barcelona, precio diseño web Barcelona, presupuesto rótulos luminosos',
  alternates: { canonical: 'https://www.royaluniondesign.com/pricing' },
  openGraph: {
    title: 'Precios Rótulos, Branding y Diseño Web Barcelona | RUD Studio',
    description: 'Neón LED desde 1.800€, letras corpóreas desde 2.500€, rótulo luminoso desde 3.200€. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/pricing',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios Rótulos Barcelona | RUD Studio',
    description: 'Neón LED desde 1.800€, letras corpóreas desde 2.500€. Presupuesto gratis en 24h.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const ROTULOS = [
  { name: 'VINILO ESCAPARATE', desc: 'Impreso, esmerilado o recortado en plotter. Sin obra.', from: 'desde 300 €' },
  { name: 'NEÓN LED PERSONALIZADO', desc: 'Cualquier tipografía o forma. Interior y exterior.', from: 'desde 1.800 €' },
  { name: 'LETRAS CORPÓREAS', desc: 'Aluminio, metacrilato o madera. Con o sin retroiluminación halo.', from: 'desde 2.500 €' },
  { name: 'RÓTULO LUMINOSO', desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna.', from: 'desde 3.200 €' },
  { name: 'SEÑALÉTICA CORPORATIVA', desc: 'Wayfinding, directorios, accesos. Proyecto completo a medida.', from: 'Consultar' },
  { name: 'PUBLICIDAD EXTERIOR', desc: 'Lonas, banderolas, vallas, wrapping de vehículos.', from: 'Consultar' },
]

const TIERS = [
  {
    name: 'STARTER',
    tagline: 'Marca lista para lanzar',
    from: '3.500 €',
    includes: [
      'Sesión de Estrategia de Marca (90 min)',
      'Diseño de logo · 3 conceptos',
      'Sistema de color y tipografía',
      'Manual de Marca básico (PDF)',
      'Formatos editables AI / SVG / PNG',
      'Soporte email · 30 días',
    ],
    delivery: '4–6 semanas',
  },
  {
    name: 'PROFESSIONAL',
    tagline: 'Identidad + web completa',
    from: '7.500 €',
    includes: [
      'Todo en Starter',
      'Identidad visual completa con motion',
      'Diseño web · hasta 5 páginas (Figma)',
      'Desarrollo Next.js / React',
      'SEO técnico · Lighthouse 95+',
      'GA4, Hotjar y tracking completo',
      '3 rondas de revisiones',
      'Soporte prioritario · 60 días',
    ],
    delivery: '8–12 semanas',
  },
  {
    name: 'ENTERPRISE',
    tagline: 'Proyecto end-to-end',
    from: '18.000 €',
    includes: [
      'Todo en Professional',
      'Señalética & Rótulos corporativos',
      'E-commerce Shopify Plus',
      'Copywriting estratégico completo',
      'Motion branding & video',
      'Agentes IA · Aura & Hermes',
      'Panel BI y automatizaciones',
      'Contrato de mantenimiento mensual opcional',
    ],
    delivery: '10–16 semanas',
  },
]

const ADDONS = [
  { name: 'E-COMMERCE SHOPIFY', from: 'desde 4.500 €' },
  { name: 'BLOG & CMS INTEGRADO', from: 'desde 1.200 €' },
  { name: 'AGENTE IA (AURA O HERMES)', from: 'desde 3.500 €' },
  { name: 'MOTION BRANDING PACKAGE', from: 'desde 2.000 €' },
  { name: 'COPYWRITING WEB COMPLETO', from: 'desde 1.800 €' },
  { name: 'MANTENIMIENTO MENSUAL', from: 'desde 400 €/mes' },
]

const FAQS = [
  { question: '¿Por qué no publicáis precios exactos?', answer: 'Cada proyecto tiene alcance, complejidad y objetivos distintos. Los precios que ves son orientativos — el presupuesto real puede variar según el tamaño del proyecto, el número de páginas, los materiales o las integraciones necesarias. Siempre preparamos una propuesta honesta ajustada a lo que realmente necesitas.' },
  { question: '¿Cuánto tarda en llegar el presupuesto?', answer: 'Respondemos en menos de 24 horas con una llamada de 30 min sin compromiso para entender bien tu proyecto. La propuesta detallada llega en 3–5 días laborables.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha en nuestra agenda, 50% en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos (30/30/40).' },
  { question: '¿Puedo contratar solo un servicio?', answer: 'Sí. Puedes contratar únicamente branding, solo web, solo rótulos o solo automatización IA. No es obligatorio el paquete completo. También podemos empezar con un Starter e ir escalando.' },
  { question: '¿Los rótulos incluyen instalación?', answer: 'Sí. El precio de los rótulos incluye diseño, fabricación en nuestro taller de Barcelona e instalación profesional en Barcelona y área metropolitana. Los permisos necesarios también están incluidos en proyectos de exterior.' },
  { question: '¿Qué pasa después de la entrega?', answer: 'Todos los proyectos incluyen soporte post-entrega. Ofrecemos contratos de mantenimiento mensual desde 400 €/mes para mantenimiento, actualizaciones de contenido y crecimiento continuo.' },
]

export default function Pricing() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar light />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '70svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — PRECIOS · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>PRECIOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>TRANSPARENTES</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Orientativos · Propuesta personalizada en 24h · Sin compromiso
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RÓTULOS — lista tipográfica ───────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — FABRICACIÓN PROPIA · BARCELONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              RÓTULOS <br /><em>& SEÑALÉTICA</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ROTULOS.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 40}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem',
                  padding: '1.75rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{item.name}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{item.desc}</p>
                  </div>
                  <p className="display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', color: 'var(--fg)', whiteSpace: 'nowrap', textAlign: 'right', paddingTop: '0.25rem' }}>{item.from}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <p className="mono-label" style={{ color: 'var(--muted)' }}>Visita técnica gratuita · Presupuesto en 24h · Instalación incluida</p>
              <Link href="/rotulos" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                VER RÓTULOS →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PAQUETES DIGITALES — lista tipográfica ────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — BRANDING · WEB · IA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PAQUETES <br /><em>DIGITALES</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '3rem',
                  padding: '2.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: 'var(--fg)', margin: 0 }}>{tier.name}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{tier.tagline} · {tier.delivery}</p>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.5rem' }}>
                    {tier.includes.map((inc, j) => (
                      <li key={j} className="mono-label" style={{ color: 'var(--muted)' }}>— {inc}</li>
                    ))}
                  </ul>
                  <div style={{ textAlign: 'right' }}>
                    <p className="display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', color: 'var(--fg)', whiteSpace: 'nowrap' }}>desde<br />{tier.from}</p>
                    <Link href="/contact" className="mono-label"
                      style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                      SOLICITAR →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — EXTRAS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ADD-ONS
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ADDONS.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 40}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem 0', borderBottom: '1px solid var(--border)', gap: '2rem',
                }}>
                  <h3 className="display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 3rem)', color: 'var(--fg)', margin: 0 }}>{a.name}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>{a.from}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              LO QUE <br /><em>MÁS PREGUNTAN</em>
            </h2>
          </ScrollReveal>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto personalizado · Menos de 24h
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              CUÉNTANOS <br /><em>TU PROYECTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <Link href="/contact" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                PEDIR PRESUPUESTO →
              </Link>
              <Link href="/work" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Ver trabajos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
