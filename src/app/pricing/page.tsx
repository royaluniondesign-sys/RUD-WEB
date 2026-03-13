import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios — Agencia de Branding y Diseño Web Barcelona | RUD',
  description: 'Precios transparentes para branding, diseño web y automatización IA en Barcelona. Starter €2.500 · Professional €7.500 · Enterprise €15.000+',
}

const plans = [
  {
    name: 'Starter',
    price: '€2.500',
    desc: 'Marca lista para lanzar',
    ideal: 'Startups, freelancers y proyectos nuevos que necesitan una base de marca sólida.',
    features: [
      'Sesión de Brand Strategy',
      'Diseño de logo · 3 conceptos',
      'Sistema de color y tipografía',
      'Brand Guidelines básico',
      'Formatos editables AI / EPS / SVG',
      'Soporte email · 30 días',
    ],
    delivery: '4–6 semanas',
  },
  {
    name: 'Professional',
    price: '€7.500',
    desc: 'Identidad + web completa',
    ideal: 'Empresas y marcas en crecimiento que necesitan identidad visual y presencia web profesional.',
    featured: true,
    features: [
      'Todo en Starter',
      'Identidad visual completa',
      'Diseño web · hasta 5 páginas',
      'Desarrollo Next.js / React',
      'SEO técnico de base',
      'Responsive + Lighthouse 95+',
      '3 rondas de revisiones',
      'Soporte prioritario · 60 días',
    ],
    delivery: '8–12 semanas',
  },
  {
    name: 'Enterprise',
    price: '€15.000+',
    desc: 'Proyecto end-to-end',
    ideal: 'Marcas establecidas que buscan transformación completa: identidad, web, contenido y automatización.',
    features: [
      'Todo en Professional',
      'E-commerce Shopify',
      'Copywriting estratégico completo',
      'Motion branding & video',
      'Estrategia de contenido',
      'AI Automation con CHARIOT',
      'Colateral de marketing',
      'Retainer mensual opcional',
    ],
    delivery: '10–16 semanas',
  },
]

const extras = [
  { name: 'Página web adicional', price: 'desde €400' },
  { name: 'E-commerce Shopify', price: 'desde €3.000' },
  { name: 'Motion branding', price: 'desde €1.500' },
  { name: 'Sesión de fotografía', price: 'desde €800' },
  { name: 'Retainer mensual', price: 'desde €500/mes' },
  { name: 'AI Automation CHARIOT', price: 'consultar' },
]

const faqs = [
  { question: '¿Los precios incluyen IVA?', answer: 'Los precios indicados no incluyen IVA (21%). El importe final con IVA se detalla claramente en el presupuesto antes de cualquier compromiso.' },
  { question: '¿Puedo personalizar un paquete?', answer: 'Sí. Todos los paquetes son puntos de partida. Adaptamos el alcance, los entregables y el precio a tus necesidades y objetivos específicos.' },
  { question: '¿Hay costes adicionales después de la entrega?', answer: 'No hay costes ocultos. Si necesitas soporte o actualizaciones post-entrega, ofrecemos retainers mensuales con precios transparentes.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha, 50% restante en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos a lo largo del proyecto.' },
  { question: '¿Qué pasa si necesito más revisiones?', answer: 'Todos los paquetes incluyen 3 rondas de revisiones. Rondas adicionales se facturan por hora a tarifa preferente de cliente.' },
]

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="container-custom text-center">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Inversión</p>
            <h1 className="font-bold text-[#0A0A0A] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Precios transparentes
            </h1>
            <p className="text-lg text-[#6B7280] max-w-lg mx-auto leading-relaxed">
              Paquetes de precio fijo y alcance definido. Sin sorpresas, sin costes ocultos, sin letra pequeña.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding" style={{ background: '#FAFAFA' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
            {plans.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%',
                  background: plan.featured ? '#0A0908' : 'white',
                  border: plan.featured ? '1px solid #0A0908' : '1px solid #E2DDD7',
                  boxShadow: plan.featured ? '0 24px 64px rgba(0,0,0,0.15)' : 'none',
                }}>
                  {plan.featured && (
                    <span style={{ display: 'inline-block', marginBottom: '1rem', padding: '4px 12px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.55)', width: 'fit-content' }}>
                      ★ Más popular
                    </span>
                  )}
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '4px', color: plan.featured ? 'white' : '#0A0908' }}>{plan.name}</h2>
                  <p style={{ fontSize: '11px', marginBottom: '0.5rem', color: plan.featured ? 'rgba(255,255,255,0.4)' : '#9CA3AF' }}>{plan.desc}</p>
                  <p style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '0.5rem', color: plan.featured ? 'white' : '#0A0908' }}>{plan.price}</p>
                  <p style={{ fontSize: '11px', color: plan.featured ? 'rgba(255,255,255,0.3)' : '#C4BFB8', marginBottom: '1.5rem' }}>
                    Entrega: {plan.delivery}
                  </p>

                  {/* Ideal para */}
                  <div style={{
                    padding: '0.75rem', borderRadius: '10px', marginBottom: '1.5rem',
                    background: plan.featured ? 'rgba(255,255,255,0.05)' : '#F8F6F2',
                  }}>
                    <p style={{ fontSize: '11px', color: plan.featured ? 'rgba(255,255,255,0.5)' : '#9CA3AF', lineHeight: 1.5 }}>
                      {plan.ideal}
                    </p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, marginBottom: '1.75rem' }}>
                    {plan.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.8125rem' }}>
                        <svg style={{ marginTop: '2px', flexShrink: 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,0.1)' : '#F0EDE6'} />
                          <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: plan.featured ? 'rgba(255,255,255,0.6)' : '#6B7280' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '0.875rem', borderRadius: '9999px',
                    fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
                    background: plan.featured ? 'white' : '#0A0908', color: plan.featured ? '#0A0908' : 'white',
                  }}>
                    Empezar con {plan.name}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={260}>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#9CA3AF', marginTop: '2rem' }}>
              ¿Proyecto específico? <Link href="/contact" style={{ color: '#0A0908', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Cuéntanos y hacemos presupuesto a medida →</Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Extras / Add-ons */}
      <section className="section-padding" style={{ background: '#F7F5F1' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Servicios adicionales</p>
              <h2 className="font-bold tracking-tight mb-2" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}>
                Add-ons y extensiones
              </h2>
              <p className="text-sm text-[#6B7280] mb-8 leading-relaxed">
                Complementa cualquier paquete con servicios adicionales según lo que necesite tu proyecto.
              </p>
              <div style={{ display: 'grid', gap: '1px', background: '#E2DDD7', borderRadius: '16px', overflow: 'hidden' }}>
                {extras.map((extra, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', background: 'white' }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#0A0908' }}>{extra.name}</span>
                    <span style={{ fontSize: '0.8125rem', color: '#9CA3AF', fontWeight: 500 }}>{extra.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="section-padding" style={{ background: '#F0EDE6' }}>
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-bold text-[#0A0A0A] tracking-tight mb-10" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.03em' }}>
              Preguntas sobre precios
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0908', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                ¿Listo para empezar?
              </h2>
              <p style={{ color: '#6B7280', fontSize: '0.9375rem', marginBottom: '2rem', lineHeight: 1.7 }}>
                Cuéntanos tu proyecto. Respondemos en menos de 24 horas con una propuesta clara y sin compromiso.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: '9999px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9375rem' }}>
                  Solicitar presupuesto
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href="mailto:hello@rud.studio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.15)', color: 'white', borderRadius: '9999px', fontWeight: 500, textDecoration: 'none', fontSize: '0.9375rem' }}>
                  hello@rud.studio
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
