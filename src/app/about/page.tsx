import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Sobre nosotros — RUD Studio · Agencia creativa Barcelona',
  description: 'RUD es una agencia creativa full-stack en Barcelona. Branding, diseño web, e-commerce, motion y automatización IA. Conoce nuestra filosofía y cómo trabajamos.',
}

export default function About() {
  return (
    <main style={{ minHeight: '100vh', background: '#F7F5F1' }}>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>Sobre RUD</p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20, maxWidth: 720 }}>
              Hacemos marcas y webs que generan resultados reales.
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.05rem)', color: '#6B7280', maxWidth: 520, lineHeight: 1.7 }}>
              RUD es una agencia creativa full-stack basada en Barcelona. Combinamos estrategia de marca, diseño de alto nivel, tecnología puntera y automatización con IA para construir presencias digitales que destacan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filosofía */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <div className="grid gap-12 items-center md:grid-cols-2">
              <ScrollReveal>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>Nuestra filosofía</p>
                  <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24, lineHeight: 1.15 }}>
                    Estrategia primero.<br />Diseño después.
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>No abrimos Figma hasta entender a fondo el mercado, la competencia y el cliente. El diseño que no tiene estrategia detrás es decoración — y la decoración se olvida.</p>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>Creemos en el trabajo honesto: alcance claro, plazos reales, comunicación directa. Sin promesas infladas, sin sorpresas en la factura final.</p>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>Y creemos que la tecnología debe servir a la creatividad — no al revés. Por eso construimos CHARIOT, nuestro agente de IA interno, para amplificar nuestra capacidad sin sacrificar la calidad.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={120}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                  {[
                    { num: '8+', label: 'Servicios especializados' },
                    { num: '€0', label: 'Coste IA con CHARIOT' },
                    { num: '100%', label: 'Infraestructura local' },
                    { num: '24h', label: 'Tiempo de respuesta' },
                  ].map(s => (
                    <div key={s.label} style={{ background: 'white', borderRadius: 16, padding: 'clamp(1rem,3vw,1.5rem)', border: '1px solid #E2DDD7' }}>
                      <p style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 4 }}>{s.num}</p>
                      <p style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 500 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CHARIOT */}
      <section style={{ background: '#06040E', paddingBlock: 'clamp(3rem,8vw,5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '33%', width: 600, height: 300, filter: 'blur(100px)', opacity: 0.12, background: 'radial-gradient(ellipse,#7B68EE,transparent)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 640 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '6px 12px', borderRadius: 9999, border: '1px solid rgba(123,104,238,0.25)', background: 'rgba(123,104,238,0.1)' }}>
                <span style={{ width: 6, height: 6, background: '#7B68EE', borderRadius: '50%' }} className="animate-pulse" />
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7B68EE' }}>CHARIOT — nuestro motor interno</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15 }}>
                Nuestro Jarvis para la agencia.
              </h2>
              <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: 20, fontSize: 14 }}>
                CHARIOT es el super-agente de IA que usamos internamente en RUD. No es un producto externo — es nuestra ventaja competitiva. Analiza briefings, genera contenido, automatiza workflows y nos permite entregar proyectos de mayor calidad en menor tiempo, sin coste operativo adicional.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: 14 }}>
                Corre 100% en infraestructura local con Ollama. Sin subir datos de clientes a servicios de terceros. Sin facturas mensuales de API. Es nuestra apuesta por la IA soberana, segura y eficiente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso */}
      <section style={{ background: '#F0EDE6', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 10 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 48 }}>El proceso RUD</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Descubrimiento', desc: 'Sesión inicial donde entendemos tu negocio, objetivos, audiencia y competencia. CHARIOT analiza el mercado.' },
                { num: '02', title: 'Estrategia', desc: 'Definimos posicionamiento, mensajes clave y la dirección creativa antes de diseñar una sola pieza.' },
                { num: '03', title: 'Diseño & Build', desc: 'Creamos la identidad visual, diseñamos en Figma y desarrollamos. Revisiones iterativas contigo.' },
                { num: '04', title: 'Entrega & Soporte', desc: 'Entregamos todos los assets, formamos a tu equipo y ofrecemos soporte post-entrega. Lanzamos juntos.' },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 70}>
                  <div style={{ background: 'white', borderRadius: 16, padding: 'clamp(1.25rem,3vw,1.75rem)', border: '1px solid #E2DDD7', height: '100%' }}>
                    <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8', marginBottom: 16, display: 'block' }}>{step.num}</span>
                    <h3 style={{ fontWeight: 700, fontSize: 'clamp(1rem,2vw,1.125rem)', marginBottom: 10 }}>{step.title}</h3>
                    <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0908', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 700, color: 'white', marginBottom: 10, letterSpacing: '-0.03em' }}>¿Trabajamos juntos?</h2>
                <p style={{ color: '#6B7280', fontSize: 14 }}>Cuéntanos tu proyecto — respondemos en menos de 24h.</p>
              </div>
              <Link href="/contact" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'white', color: '#0A0908', fontWeight: 600, borderRadius: 9999, textDecoration: 'none', fontSize: 15 }}>
                Contactar
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
