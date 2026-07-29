import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Empresa de Rótulos y Branding en Barcelona — Quiénes Somos | RUD Studio',
  description: 'RUD Studio: empresa de rótulos luminosos, señalética, branding y diseño web en Barcelona con taller propio. Fabricación, identidad visual y desarrollo web bajo un mismo techo desde Barcelona.',
  keywords: 'empresa rótulos Barcelona, agencia branding Barcelona, fabricación rótulos luminosos Barcelona, quiénes somos, agencia creativa Barcelona, diseño y fabricación rótulos',
  alternates: { canonical: 'https://www.royaluniondesign.com/about' },
  openGraph: {
    title: 'Empresa de Rótulos y Branding en Barcelona — Quiénes Somos | RUD Studio',
    description: 'RUD Studio: fabricamos rótulos luminosos, creamos marcas y desarrollamos webs en Barcelona. Todo bajo un mismo techo.',
    url: 'https://www.royaluniondesign.com/about',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quiénes somos | RUD Studio Barcelona',
    description: 'Agencia creativa en Barcelona: rótulos luminosos, branding y diseño web bajo un mismo techo.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const ESPECTRO = [
  { num: '01', cat: 'FÍSICO', title: 'RÓTULOS & SEÑALÉTICA', items: ['Rótulos luminosos LED', 'Letras corpóreas', 'Neón LED personalizado', 'Vinilos escaparate', 'Señalética interior', 'Banderolas & POP'] },
  { num: '02', cat: 'IDENTIDAD', title: 'BRANDING & MARCA', items: ['Estrategia de marca', 'Identidad visual', 'Sistema de logo', 'Packaging', 'Manual de marca', 'Naming'] },
  { num: '03', cat: 'DIGITAL', title: 'WEB & E-COMMERCE', items: ['Diseño web Next.js', 'E-commerce Shopify', 'SEO técnico', 'UX/UI', 'CRO y conversión', 'Integraciones API'] },
  { num: '04', cat: 'AUTOMATIZACIÓN', title: 'IA & CONTENIDO', items: ['Agentes AURA & Hermes', 'Automatización n8n', 'Copywriting', 'Motion branding', 'Marketing digital', 'Workflows IA'] },
]

const PROCESO = [
  { num: '01', title: 'DESCUBRIMIENTO', desc: 'Sesión inicial donde entendemos tu negocio, objetivos, audiencia y competencia.' },
  { num: '02', title: 'ESTRATEGIA', desc: 'Definimos posicionamiento, mensajes clave y dirección creativa antes de diseñar una sola pieza.' },
  { num: '03', title: 'DISEÑO & BUILD', desc: 'Creamos identidad visual, diseñamos en Figma, fabricamos señalética y desarrollamos la web.' },
  { num: '04', title: 'ENTREGA & SOPORTE', desc: 'Entregamos todos los recursos, instalamos señalética, formamos al equipo y ofrecemos soporte post-entrega.' },
]

const FILOSOFIA = [
  { title: 'COHERENCIA TOTAL', desc: 'Tu rótulo de fachada, tu web y tu packaging hablan el mismo idioma visual. Sin coordinar tres proveedores distintos.' },
  { title: 'SIN INTERMEDIARIOS', desc: 'Hablas con quien diseña, fabrica y desarrolla. Sin gestores en medio, sin teléfonos rotos.' },
  { title: 'RESULTADOS MEDIBLES', desc: 'Lighthouse 95+, rótulos instalados en plazo, e-commerces con conversión optimizada. No vendemos promesas.' },
]

export default function About() {
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
            SOBRE RUD STUDIO · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>AGENCIA</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>CREATIVA</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Rótulos · Branding · Diseño Web · Automatización IA
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              TRABAJAR CON NOSOTROS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUÉ SOMOS ────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
              <div>
                <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>LO QUE SOMOS</p>
                <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '2rem' }}>
                  PUBLICIDAD <br />COMPLETA. <br /><em>360°</em>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>Somos una agencia 360: diseñamos y fabricamos rótulos luminosos, letras corpóreas, vinilos y señalética — y también creamos la identidad de marca, la web, el e-commerce y los automatismos que hacen crecer el negocio.</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>No somos solo &ldquo;una agencia digital&rdquo; ni solo &ldquo;un taller de rótulos&rdquo;. Somos los dos. Coherencia desde la fachada hasta el checkout online.</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>Trabajamos con estrategia antes que con diseño. El resultado es trabajo que posiciona, no solo decora.</p>
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '3rem' }}>
                {[
                  { num: '360°', label: 'COBERTURA DE SERVICIO' },
                  { num: '50+', label: 'PROYECTOS ENTREGADOS' },
                  { num: '€0', label: 'COSTE IA CON AURA' },
                  { num: '24H', label: 'TIEMPO DE RESPUESTA' },
                ].map((s, i) => (
                  <div key={s.label} style={{ padding: '2rem 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                    <p className="display" style={{ fontSize: 'clamp(3rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '0.25rem' }}>{s.num}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ESPECTRO — lista tipográfica ─────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>NUESTRO ESPECTRO</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              DEL ESPACIO FÍSICO <br /><em>AL MUNDO DIGITAL</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ESPECTRO.map((col, i) => (
              <ScrollReveal key={col.num} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '3rem',
                  padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <div>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{col.num}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>{col.cat}</p>
                  </div>
                  <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{col.title}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {col.items.map(item => (
                      <li key={item} className="mono-label" style={{ color: 'var(--muted)' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILOSOFÍA ────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>NUESTRA FILOSOFÍA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ESTRATEGIA <br /><em>PRIMERO</em>
            </h2>
          </ScrollReveal>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {FILOSOFIA.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 40%', gap: '3rem',
                  padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4rem)', color: 'var(--fg)', margin: 0 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>CÓMO TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              EL PROCESO <br /><em>RUD</em>
            </h2>
          </ScrollReveal>
          <div style={{ borderTop: '1px solid var(--border)' }}>
            {PROCESO.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 40%', gap: '3rem',
                  padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{step.num}</p>
                  <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{step.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto en 24h · Sin compromiso
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿TRABAJAMOS <br /><em>JUNTOS?</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <a href="https://wa.me/34645593227" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                +34 645 593 227 →
              </a>
              <Link href="/contact" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Pedir presupuesto
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
