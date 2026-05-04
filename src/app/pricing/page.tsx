import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios Rótulos Barcelona, Branding y Diseño Web — Tarifas | RUD Studio',
  description: 'Precios orientativos de rótulos luminosos (desde 300€), neón LED (desde 1.800€), letras corpóreas (desde 2.500€), branding y diseño web en Barcelona. Presupuesto personalizado gratis en 24h.',
  keywords: 'precio rótulos Barcelona, cuánto cuesta neón LED Barcelona, precio letras corpóreas Barcelona, tarifa branding Barcelona, precio diseño web Barcelona, presupuesto rótulos luminosos',
  alternates: { canonical: 'https://royaluniondesign.com/pricing' },
}

const ROTULOS = [
  { name: 'Vinilo escaparate', desc: 'Impreso, esmerilado o recortado en plotter. Sin obra.', from: 'desde 300 €', detail: 'orientativo' },
  { name: 'Neón LED personalizado', desc: 'Cualquier tipografía o forma. Interior y exterior.', from: 'desde 1.800 €', detail: 'orientativo' },
  { name: 'Letras corpóreas', desc: 'Aluminio, metacrilato o madera. Con o sin retroiluminación halo.', from: 'desde 2.500 €', detail: 'orientativo' },
  { name: 'Rótulo luminoso', desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna.', from: 'desde 3.200 €', detail: 'orientativo' },
  { name: 'Señalética corporativa', desc: 'Wayfinding, directorios, accesos. Proyecto completo a medida.', from: 'Consultar', detail: 'a medida' },
  { name: 'Publicidad exterior', desc: 'Lonas, banderolas, vallas, wrapping de vehículos.', from: 'Consultar', detail: 'a medida' },
]

const TIERS = [
  {
    name: 'Starter',
    tagline: 'Marca lista para lanzar',
    from: '5.500 €',
    ideal: 'Startups, freelancers y proyectos nuevos que necesitan una base sólida.',
    featured: false,
    includes: [
      'Sesión de Brand Strategy (90 min)',
      'Diseño de logo · 3 conceptos',
      'Sistema de color y tipografía',
      'Brand Guidelines básico (PDF)',
      'Formatos editables AI / SVG / PNG',
      'Soporte email · 30 días',
    ],
    delivery: '4–6 semanas',
  },
  {
    name: 'Professional',
    tagline: 'Identidad + web completa',
    from: '12.000 €',
    ideal: 'Empresas en crecimiento que necesitan identidad visual y presencia web profesional.',
    featured: true,
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
    name: 'Enterprise',
    tagline: 'Proyecto end-to-end',
    from: '28.000 €',
    ideal: 'Marcas que buscan transformación completa: identidad, web, señalética y automatización IA.',
    featured: false,
    includes: [
      'Todo en Professional',
      'Señalética & Rótulos corporativos',
      'E-commerce Shopify Plus',
      'Copywriting estratégico completo',
      'Motion branding & video',
      'Agentes IA · Aura & Hermes',
      'Dashboard BI y automatizaciones',
      'Retainer mensual opcional',
    ],
    delivery: '10–16 semanas',
  },
]

const ADDONS = [
  { name: 'E-commerce Shopify', from: 'desde 7.500 €' },
  { name: 'Blog & CMS integrado', from: 'desde 1.500 €' },
  { name: 'Agente IA (Aura o Hermes)', from: 'desde 5.500 €' },
  { name: 'Motion branding package', from: 'desde 2.000 €' },
  { name: 'Copywriting web completo', from: 'desde 1.800 €' },
  { name: 'Mantenimiento mensual', from: 'desde 400 €/mes' },
]

const FAQS = [
  { question: '¿Por qué no publicáis precios exactos?', answer: 'Cada proyecto tiene alcance, complejidad y objetivos distintos. Los precios que ves son orientativos — el presupuesto real puede variar según el tamaño del proyecto, el número de páginas, los materiales o las integraciones necesarias. Siempre preparamos una propuesta honesta ajustada a lo que realmente necesitas.' },
  { question: '¿Cuánto tarda en llegar el presupuesto?', answer: 'Respondemos en menos de 24 horas con una llamada de 30 min sin compromiso para entender bien tu proyecto. La propuesta detallada llega en 3–5 días laborables.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha en nuestra agenda, 50% en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos (30/30/40).' },
  { question: '¿Puedo contratar solo un servicio?', answer: 'Sí. Puedes contratar únicamente branding, solo web, solo rótulos o solo automatización IA. No es obligatorio el paquete completo. También podemos empezar con un Starter e ir escalando.' },
  { question: '¿Los rótulos incluyen instalación?', answer: 'Sí. El precio de los rótulos incluye diseño, fabricación en nuestro taller de Barcelona e instalación profesional en Barcelona y área metropolitana. Los permisos necesarios también están incluidos en proyectos de exterior.' },
  { question: '¿Qué pasa después de la entrega?', answer: 'Todos los proyectos incluyen soporte post-entrega. Ofrecemos retainers mensuales desde 400 €/mes para mantenimiento, actualizaciones de contenido y crecimiento continuo.' },
]

export default function Pricing() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <Navbar light />

      {/* Hero */}
      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 360, background: '#0A0908' }}>
        <img src="/hero-pricing.jpg" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.6) 0%,rgba(10,9,8,0.4) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(3.5rem,8vw,6rem)', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>Inversión</p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.1, color: 'white' }}>
              Precios transparentes.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>Propuestas a medida.</em>
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.62)', maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Los rangos que ves son orientativos. Cada proyecto recibe una propuesta personalizada — honesta, sin inflar presupuesto.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              Pedir presupuesto gratis →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Rótulos & señalética */}
      <section style={{ background: 'white', paddingBlock: 'clamp(3rem,8vw,5.5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 8 }}>Fabricación propia · Barcelona</p>
                <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em' }}>Rótulos & Señalética</h2>
              </div>
              <Link href="/rotulos" style={{ fontSize: 13, fontWeight: 600, color: '#6B7280', textDecoration: 'none' }}>Ver página de rótulos →</Link>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
            {ROTULOS.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 50}>
                <div style={{ padding: '20px 22px', borderRadius: 14, border: '1px solid #E2DDD7', background: '#FAFAFA', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, gap: 12 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0A0908', lineHeight: 1.3 }}>{item.name}</h3>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p style={{ fontSize: 14, fontWeight: 700, color: '#0A0908', lineHeight: 1, whiteSpace: 'nowrap' }}>{item.from}</p>
                      <p style={{ fontSize: 10, color: '#9CA3AF', marginTop: 3 }}>{item.detail}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, flex: 1 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div style={{ marginTop: 20, padding: '16px 22px', borderRadius: 12, background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <p style={{ fontSize: 13, color: '#6B7280' }}>✅ Visita técnica gratuita · Presupuesto en 24h · Instalación incluida</p>
              <Link href="/contact?servicio=rotulos" style={{ fontSize: 13, fontWeight: 600, color: '#0A0908', textDecoration: 'none' }}>Pedir presupuesto →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proyectos digitales — 3 tiers */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5.5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 8 }}>Proyectos digitales</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>Branding · Web · IA</h2>
              <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 480, margin: '0 auto' }}>Alcances orientativos — adaptamos cada propuesta a lo que realmente necesitas.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16, alignItems: 'start' }}>
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 80}>
                <div style={{
                  borderRadius: 20,
                  padding: 'clamp(1.5rem,3vw,2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  background: tier.featured ? '#0A0908' : 'white',
                  border: tier.featured ? 'none' : '1px solid #E2DDD7',
                  boxShadow: tier.featured ? '0 24px 64px rgba(0,0,0,0.15)' : 'none',
                  position: 'relative',
                  marginTop: tier.featured ? 0 : 0,
                }}>
                  {tier.featured && (
                    <span style={{ display: 'inline-block', alignSelf: 'flex-start', marginBottom: 14, padding: '5px 14px', background: 'rgba(255,255,255,0.1)', borderRadius: 9999, fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                      ★ Más solicitado
                    </span>
                  )}

                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: tier.featured ? '#6B7280' : '#9CA3AF', marginBottom: 6 }}>{tier.name}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                    <span style={{ fontSize: 11, color: tier.featured ? '#6B7280' : '#9CA3AF' }}>desde</span>
                    <span style={{ fontSize: 'clamp(1.8rem,3.5vw,2.4rem)', fontWeight: 700, color: tier.featured ? 'white' : '#0A0908', letterSpacing: '-0.03em' }}>{tier.from}</span>
                  </div>
                  <p style={{ fontSize: 13, color: tier.featured ? 'rgba(255,255,255,0.4)' : '#9CA3AF', marginBottom: 20 }}>{tier.tagline}</p>

                  <div style={{ padding: '12px 14px', borderRadius: 12, marginBottom: 20, background: tier.featured ? 'rgba(255,255,255,0.04)' : '#F8F6F2' }}>
                    <p style={{ fontSize: 12, color: tier.featured ? 'rgba(255,255,255,0.4)' : '#9CA3AF', lineHeight: 1.5 }}>{tier.ideal}</p>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                    {tier.includes.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                        <svg style={{ marginTop: 2, flexShrink: 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="7" fill={tier.featured ? 'rgba(255,255,255,0.08)' : '#F0EDE6'} />
                          <path d="M4 7l2 2 4-4" stroke={tier.featured ? 'rgba(255,255,255,0.7)' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: tier.featured ? 'rgba(255,255,255,0.65)' : '#6B7280', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ paddingTop: '1rem', borderTop: tier.featured ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2DDD7', marginBottom: 16 }}>
                    <p style={{ fontSize: 11, color: tier.featured ? 'rgba(255,255,255,0.25)' : '#C4BFB8' }}>Entrega estimada: {tier.delivery}</p>
                  </div>

                  <Link href={`/contact?tier=${tier.name.toLowerCase()}`} style={{
                    display: 'block', textAlign: 'center', padding: '0.875rem',
                    borderRadius: 9999, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    background: tier.featured ? 'white' : '#0A0908',
                    color: tier.featured ? '#0A0908' : 'white',
                  }}>
                    Solicitar {tier.name} →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ background: 'white', paddingBlock: 'clamp(2.5rem,6vw,4rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 8 }}>Extras</p>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 24 }}>Add-ons & servicios adicionales</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 10 }}>
            {ADDONS.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 40}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderRadius: 12, border: '1px solid #E2DDD7', background: '#FAFAFA', gap: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0A0908' }}>{a.name}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#6B7280', flexShrink: 0 }}>{a.from}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA dark */}
      <section style={{ background: '#0A0908', paddingBlock: 'clamp(3.5rem,8vw,6rem)', textAlign: 'center' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 16 }}>Sin compromiso</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '22ch', margin: '0 auto 16px' }}>
              Presupuesto personalizado en menos de 24h.
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Cuéntanos tu proyecto. Sin formularios kilométricos — solo lo esencial para prepararte una propuesta real.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#f8f8f8', color: '#0A0908', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Pedir presupuesto →
              </Link>
              <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontSize: 14, textDecoration: 'none' }}>
                Ver trabajos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom" style={{ maxWidth: 720 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 8 }}>Preguntas frecuentes</p>
            <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 28 }}>Lo que más nos preguntan</h2>
          </ScrollReveal>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>
    </main>
  )
}
