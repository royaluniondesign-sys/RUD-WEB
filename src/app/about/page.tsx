import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Sobre nosotros — RUD Studio · Agencia 360 Barcelona',
  description: 'RUD es una agencia 360 en Barcelona. Desde rótulos luminosos y señalética hasta branding, diseño web, e-commerce y automatización IA. Todo bajo un mismo techo.',
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
              Agencia 360 en Barcelona.<br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A8A0A0' }}>De la valla al píxel.</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.05rem)', color: '#6B7280', maxWidth: 560, lineHeight: 1.7 }}>
              RUD es una agencia creativa full-stack basada en Barcelona. Fabricamos rótulos luminosos, creamos identidades de marca, desarrollamos webs y automatizamos negocios con IA — todo bajo un mismo techo, con la misma obsesión por el detalle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Qué somos — 360 */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>Lo que somos</p>
                <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 24, lineHeight: 1.15 }}>
                  Publicidad completa.<br />Desde el material POP<br />hasta la IA.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>Somos una agencia 360: diseñamos y fabricamos rótulos luminosos, letras corpóreas, vinilos y señalética — y también creamos la identidad de marca, la web, el e-commerce y los automatismos que hacen crecer el negocio.</p>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>No somos solo "una agencia digital" ni solo "un taller de rótulos". Somos los dos. Eso nos da una visión completa de tu marca: coherencia desde la fachada hasta el checkout online.</p>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>Trabajamos con estrategia antes que con diseño. No abrimos Figma ni encendemos la fresadora hasta entender tu mercado, tu competencia y tu cliente. El resultado es trabajo que posiciona, no solo decora.</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {[
                  { num: '360°', label: 'Cobertura de servicio' },
                  { num: '50+', label: 'Proyectos entregados' },
                  { num: '€0', label: 'Coste IA con AURA' },
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

      {/* Lo que hacemos — de físico a digital */}
      <section style={{ background: '#0A0908', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#3D3D3D', marginBottom: 14 }}>Nuestro espectro</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 40, lineHeight: 1.15 }}>
              Del espacio físico al mundo digital.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { num: '01', cat: 'Físico', title: 'Rótulos & Señalética', items: ['Rótulos luminosos LED', 'Letras corpóreas', 'Neón y neón LED', 'Vinilos escaparate', 'Señalética interior', 'Banderolas & POP'], color: '#D97706' },
              { num: '02', cat: 'Identidad', title: 'Branding & Marca', items: ['Brand strategy', 'Identidad visual', 'Logo system', 'Packaging', 'Brand guidelines', 'Naming'], color: '#7B68EE' },
              { num: '03', cat: 'Digital', title: 'Web & E-commerce', items: ['Diseño web Next.js', 'E-commerce Shopify', 'SEO técnico', 'UX/UI', 'CRO y conversión', 'Integraciones API'], color: '#06B6D4' },
              { num: '04', cat: 'Automatización', title: 'IA & Contenido', items: ['Agentes AURA & Hermes', 'Automatización n8n', 'Copywriting', 'Motion branding', 'Marketing digital', 'Workflows IA'], color: '#22C55E' },
            ].map((col, i) => (
              <ScrollReveal key={col.num} delay={i * 80}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 'clamp(1.25rem,3vw,1.75rem)', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <span style={{ fontSize: 9, fontFamily: 'monospace', color: 'rgba(255,255,255,0.2)' }}>{col.num}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: col.color }}>{col.cat}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: 16, lineHeight: 1.3 }}>{col.title}</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#6B7280' }}>
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: col.color, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AURA — nuestro motor interno */}
      <section style={{ background: '#06040E', paddingBlock: 'clamp(3rem,8vw,5rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '33%', width: 600, height: 300, filter: 'blur(100px)', opacity: 0.12, background: 'radial-gradient(ellipse,#7B68EE,transparent)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative' }}>
          <ScrollReveal>
            <div style={{ maxWidth: 640 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20, padding: '6px 12px', borderRadius: 9999, border: '1px solid rgba(123,104,238,0.25)', background: 'rgba(123,104,238,0.1)' }}>
                <span style={{ width: 6, height: 6, background: '#7B68EE', borderRadius: '50%' }} className="animate-pulse" />
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7B68EE' }}>AURA & HERMES — nuestro motor interno</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15 }}>
                Nuestro Jarvis para la agencia.
              </h2>
              <p style={{ color: '#6B7280', lineHeight: 1.75, marginBottom: 20, fontSize: 14 }}>
                AURA y Hermes son nuestros agentes de IA internos — no son un producto externo, son nuestra ventaja competitiva. Analizan briefings, generan contenido, automatizan workflows y nos permiten entregar proyectos de mayor calidad en menos tiempo, sin coste operativo adicional.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: 14 }}>
                Corren 100% en infraestructura local con Ollama. Sin subir datos de clientes a servicios de terceros. Sin facturas mensuales de API. IA soberana, segura y eficiente — y la ofrecemos a nuestros clientes Enterprise sin coste extra.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filosofía */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>Nuestra filosofía</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 40, lineHeight: 1.15 }}>
              Estrategia primero.<br />Diseño después.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Coherencia total', desc: 'Tu rótulo de fachada, tu web y tu packaging hablan el mismo idioma visual. No tendrás que coordinar tres proveedores distintos para que todo cuadre.' },
              { title: 'Sin intermediarios', desc: 'Hablas con quien diseña, fabrica y desarrolla. Sin gestores en medio, sin teléfonos rotos, sin "lo tengo que consultar con el equipo".' },
              { title: 'Resultados medibles', desc: 'Lighthouse 95+, rótulos instalados en plazo, e-commerces con conversión optimizada. No vendemos promesas — entregamos métricas.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div style={{ background: 'white', borderRadius: 16, padding: 'clamp(1.5rem,3vw,2rem)', border: '1px solid #E2DDD7', height: '100%' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: 10, letterSpacing: '-0.01em' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              { num: '01', title: 'Descubrimiento', desc: 'Sesión inicial donde entendemos tu negocio, objetivos, audiencia y competencia. AURA analiza el mercado.' },
              { num: '02', title: 'Estrategia', desc: 'Definimos posicionamiento, mensajes clave y la dirección creativa antes de diseñar una sola pieza.' },
              { num: '03', title: 'Diseño & Build', desc: 'Creamos la identidad visual, diseñamos en Figma, fabricamos señalética y desarrollamos la web. Revisiones iterativas.' },
              { num: '04', title: 'Entrega & Soporte', desc: 'Entregamos todos los assets, instalamos señalética, formamos a tu equipo y ofrecemos soporte post-entrega.' },
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
