import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Presupuesto a medida — Agencia de Branding y Diseño Web Barcelona | RUD',
  description: 'Cada proyecto es único. Cuéntanos lo que necesitas y te preparamos una propuesta personalizada sin compromiso en menos de 24h.',
}

const tiers = [
  {
    name: 'Starter',
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
    desc: 'Proyecto end-to-end',
    ideal: 'Marcas establecidas que buscan transformación completa: identidad, web, contenido y automatización.',
    features: [
      'Todo en Professional',
      'Señalética & Rótulos corporativos',
      'E-commerce Shopify',
      'Copywriting estratégico completo',
      'Motion branding & video',
      'AI Automation · Aura & Hermes',
      'Colateral de marketing',
      'Retainer mensual opcional',
    ],
    delivery: '10–16 semanas',
  },
]

const faqs = [
  { question: '¿Por qué no publicáis precios?', answer: 'Cada proyecto tiene un alcance, una complejidad y unos objetivos distintos. Un precio fijo público no tiene sentido cuando el trabajo real puede variar enormemente. Te preparamos una propuesta honesta ajustada a lo que realmente necesitas — sin inflar presupuesto.' },
  { question: '¿Cuánto tarda en llegar el presupuesto?', answer: 'Respondemos en menos de 24 horas con una llamada para entender bien tu proyecto. La propuesta detallada llega en 3–5 días.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha, 50% restante en la entrega final. Para proyectos grandes podemos acordar pagos por hitos.' },
  { question: '¿Puedo empezar por un servicio concreto?', answer: 'Sí. Puedes contratar solo branding, solo web, solo señalética o solo automatización IA. No es obligatorio contratar el paquete completo.' },
  { question: '¿Qué pasa después de la entrega?', answer: 'Todos los proyectos incluyen soporte post-entrega. Ofrecemos retainers mensuales para mantenimiento, optimización y crecimiento continuo.' },
]

export default function Pricing() {
  return (
    <main style={{ minHeight: '100vh', background: '#F7F5F1' }}>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>Inversión</p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: '#0A0A0A', marginBottom: 16, lineHeight: 1.1 }}>
              Cada proyecto es único.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A8A0A0' }}>Cada presupuesto, también.</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.05rem)', color: '#6B7280', maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              No publicamos precios fijos porque no trabajamos con plantillas. Cuéntanos tu proyecto y te preparamos una propuesta personalizada en menos de 24h.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              Solicitar presupuesto gratuito
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Tiers — sin precios, solo scope */}
      <section style={{ background: '#FAFAFA', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 8 }}>Alcance orientativo</p>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 8 }}>¿Qué tipo de proyecto tienes?</h2>
              <p style={{ fontSize: 14, color: '#6B7280', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>Esto es orientativo — adaptamos el alcance exacto a lo que necesitas.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: 1000, margin: '0 auto' }}>
            {tiers.map((tier, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{
                  borderRadius: 16,
                  padding: 'clamp(1.5rem,3vw,2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: tier.featured ? '#0A0908' : 'white',
                  border: tier.featured ? '1px solid #0A0908' : '1px solid #E2DDD7',
                  boxShadow: tier.featured ? '0 24px 64px rgba(0,0,0,0.15)' : 'none',
                }}>
                  {tier.featured && (
                    <span style={{ display: 'inline-block', marginBottom: 14, padding: '5px 14px', background: 'rgba(255,255,255,0.1)', borderRadius: 9999, fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.6)', width: 'fit-content' }}>
                      ★ Más solicitado
                    </span>
                  )}
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4, color: tier.featured ? 'white' : '#0A0908' }}>{tier.name}</h2>
                  <p style={{ fontSize: 12, marginBottom: 16, color: tier.featured ? 'rgba(255,255,255,0.4)' : '#9CA3AF' }}>{tier.desc}</p>

                  <div style={{ padding: '0.75rem 1rem', borderRadius: 10, marginBottom: 20, background: tier.featured ? 'rgba(255,255,255,0.05)' : '#F8F6F2' }}>
                    <p style={{ fontSize: 11, color: tier.featured ? 'rgba(255,255,255,0.5)' : '#9CA3AF', lineHeight: 1.5 }}>{tier.ideal}</p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1, marginBottom: 24 }}>
                    {tier.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                        <svg style={{ marginTop: 2, flexShrink: 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="7" fill={tier.featured ? 'rgba(255,255,255,0.1)' : '#F0EDE6'} />
                          <path d="M4 7l2 2 4-4" stroke={tier.featured ? 'white' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ color: tier.featured ? 'rgba(255,255,255,0.65)' : '#6B7280', lineHeight: 1.5 }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ paddingTop: '1rem', borderTop: tier.featured ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E2DDD7', marginBottom: 20 }}>
                    <p style={{ fontSize: 11, color: tier.featured ? 'rgba(255,255,255,0.35)' : '#C4BFB8' }}>Entrega estimada: {tier.delivery}</p>
                  </div>

                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', padding: '0.875rem 1rem',
                    borderRadius: 9999, fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    background: tier.featured ? 'white' : '#0A0908',
                    color: tier.featured ? '#0A0908' : 'white',
                  }}>
                    Pedir presupuesto {tier.name} →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={260}>
            <p style={{ textAlign: 'center', fontSize: 14, color: '#9CA3AF', marginTop: '2.5rem' }}>
              ¿Necesitas algo concreto fuera de estos alcances?{' '}
              <Link href="/contact" style={{ color: '#0A0908', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Cuéntanos y lo valoramos →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Por qué sin precios públicos */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: 720, margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {[
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    title: 'Respuesta en menos de 24h', desc: 'Respondemos el mismo día. Sin formularios eternos.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
                    title: 'Propuesta a medida', desc: 'Sin plantillas. El alcance se ajusta a tu objetivo real.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
                    title: 'Sin compromiso', desc: 'La propuesta es gratuita. Decides tú si seguimos.',
                  },
                  {
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0908" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
                    title: '50 / 50', desc: 'Mitad al inicio, mitad al entregar. Sin sorpresas.',
                  },
                ].map(c => (
                  <div key={c.title} style={{ background: 'white', border: '1px solid #E2DDD7', borderRadius: 14, padding: '1.5rem' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                      {c.icon}
                    </div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: 6 }}>{c.title}</h3>
                    <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F0EDE6', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: 'clamp(1.4rem,3.5vw,2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 40 }}>
                Preguntas frecuentes
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <FAQAccordion faqs={faqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,8vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.75rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 14, lineHeight: 1.1 }}>
                ¿Hablamos?
              </h2>
              <p style={{ color: '#6B7280', fontSize: 15, marginBottom: 32, lineHeight: 1.7 }}>
                Cuéntanos tu proyecto. Respondemos en menos de 24 horas con una propuesta clara y sin compromiso.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
                  Solicitar presupuesto
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
                <a href="tel:+34645593227" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', border: '1px solid rgba(255,255,255,0.15)', color: 'white', borderRadius: 9999, fontWeight: 500, textDecoration: 'none', fontSize: 15 }}>
                  645 59 32 27
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
