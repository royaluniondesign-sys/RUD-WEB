import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Servicios · Rótulos, Branding y Diseño Web Barcelona | RUD Studio',
  description: 'Rótulos luminosos, neón LED, letras corpóreas, branding, diseño web Next.js y automatización IA en Barcelona. Fabricación propia. Presupuesto en 24h.',
  keywords: 'rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, branding Barcelona, agencia diseño web Barcelona, e-commerce Shopify Barcelona, señalética corporativa Barcelona, automatización IA Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/services' },
}

const ROTULOS_TYPES = [
  { img: '/services/neon-interior.avif', label: 'Neón LED', sub: 'Interior & exterior' },
  { img: '/services/letras-corporeas.avif', label: 'Letras Corpóreas', sub: 'Aluminio · Metacrilato' },
  { img: '/services/rotulos-luminosos.avif', label: 'Rótulos Luminosos', sub: 'Caja de luz · Bandeja' },
  { img: '/services/vinilo-escaparate.avif', label: 'Vinilos', sub: 'Escaparate · Decorativo' },
  { img: '/services/senaletica-interior.avif', label: 'Señalética', sub: 'Interior · Corporativa' },
  { img: '/services/publicidad-exterior.avif', label: 'Publicidad Exterior', sub: 'Fachadas · Banderolas' },
]

const DIGITAL_SERVICES = [
  {
    num: '02', id: 'branding', title: 'Brand Strategy & Identidad Visual',
    tagline: 'Antes del diseño, la estrategia.',
    desc: 'No diseñamos logos — construimos sistemas de marca. Auditoría de mercado, análisis competitivo, workshops de posicionamiento y brand architecture completa. Logo system, paleta, tipografía, motion principles y Brand Guidelines extenso.',
    deliverables: [
      'Auditoría de marca y análisis competitivo',
      'Workshops de posicionamiento y propuesta de valor',
      'Logo system completo con variantes',
      'Paleta de color y sistema tipográfico',
      'Brand Guidelines (PDF + Figma editable)',
    ],
    accent: '#0A0908',
  },
  {
    num: '03', id: 'web', title: 'Diseño Web & Desarrollo de Alto Rendimiento',
    tagline: '95+ Lighthouse. Core Web Vitals verde. Siempre.',
    desc: 'UX research, wireframes, diseño UI pixel-perfect en Figma y desarrollo Next.js / Shopify. Sin compromisos de performance: 95+ Lighthouse y Core Web Vitals en verde desde el día uno.',
    deliverables: [
      'UX Research y arquitectura de información',
      'Diseño UI en Figma (pixel-perfect, responsive)',
      'Desarrollo Next.js / React / Shopify Plus',
      'SEO técnico: schema.org, sitemap, meta tags',
      'Core Web Vitals optimizado (LCP <2.5s)',
    ],
    accent: '#0A0908',
  },
  {
    num: '04', id: 'ecommerce', title: 'E-commerce & Arquitectura de Conversión',
    tagline: 'Tiendas que convierten, no solo se ven bien.',
    desc: 'E-commerce completo: arquitectura de producto, UX de checkout sin fricción, integraciones ERP/PIM, email automation y estrategia post-venta. El sistema completo, no solo el escaparate.',
    deliverables: [
      'Shopify Plus / WooCommerce avanzado',
      'Checkout optimizado para conversión (CRO)',
      'Integraciones ERP, PIM y pasarelas de pago',
      'Email automation y fidelización',
      'Analytics e-commerce y dashboard de KPIs',
    ],
    accent: '#0A0908',
  },
  {
    num: '05', id: 'content', title: 'Contenido, Motion & Producción Creativa',
    tagline: 'Tu marca tiene que sonar tan bien como se ve.',
    desc: 'Copywriting estratégico, dirección de arte para sesiones de foto y video, animaciones de marca y producción de contenido para todos los canales. El proceso creativo completo coordinado.',
    deliverables: [
      'Copywriting web y landing pages',
      'Dirección de arte para fotografía y video',
      'Animaciones de logo (Lottie/MP4)',
      'Motion graphics para redes y campañas',
      'Guía de contenido para equipo interno',
    ],
    accent: '#0A0908',
  },
]

export default function Services() {
  return (
    <main>
      <Navbar light />

      {/* ── Hero ──────────────────────────── */}
      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 520, background: '#0A0908' }}>
        <img src="/services/rotulos-luminosos.avif" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.72) 0%,rgba(10,9,8,0.4) 100%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(3.5rem,9vw,6.5rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.2em', color: 'rgba(255,255,255,0.4)', marginBottom: 14 }}>
              Servicios · Barcelona
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem', maxWidth: '22ch', color: 'white' }}>
              Rótulos luminosos, branding y diseño web.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>De la calle al pixel.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.875rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.58)', maxWidth: '44ch', lineHeight: 1.75, marginBottom: 32 }}>
              Fabricación propia en Barcelona. Branding estratégico, señalética, diseño web, e-commerce y automatización IA — todo bajo un mismo techo.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/rotulos" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.8rem 1.6rem', borderRadius: 9999, background: '#0A0908', color: '#fff', fontWeight: 700, fontSize: 14 }}>
                Ver rótulos →
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.8rem 1.6rem', borderRadius: 9999, border: '1.5px solid rgba(255,255,255,0.22)', color: '#fff', fontWeight: 600, fontSize: 14 }}>
                Pedir presupuesto
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SERVICIO 01: Rótulos — visual showcase ──── */}
      <section style={{ background: '#fff', paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 'clamp(2rem,4vw,3rem)', flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8' }}>01</span>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#0A0908', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(10,9,8,.15)', background: 'rgba(10,9,8,.04)' }}>
                    FABRICACIÓN PROPIA
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', fontWeight: 800, letterSpacing: '-.035em', lineHeight: 1.1, color: '#0A0908', maxWidth: '20ch' }}>
                  Rótulos Luminosos & Señalética Corporativa
                </h2>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginTop: 10, maxWidth: '52ch' }}>
                  Fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas y vinilos de escaparate en Barcelona desde nuestro taller propio. Cada rótulo se diseña y produce a medida para que tu local sea imposible de ignorar desde la calle, tanto de día como de noche.
                </p>
              </div>
              <Link href="/rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.8rem 1.6rem', borderRadius: 9999, background: '#0A0908', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                Ver todos los rótulos →
              </Link>
            </div>
          </ScrollReveal>

          {/* Photo grid */}
          <ScrollReveal delay={60}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 10 }}>
              {ROTULOS_TYPES.map((rt, i) => (
                <Link key={i} href="/rotulos" style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', display: 'block', textDecoration: 'none', aspectRatio: i === 0 ? 'auto' : '4/3', gridRow: i === 0 ? '1 / 3' : 'auto' }}>
                  <img src={rt.img} alt={rt.label} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: i === 0 ? 340 : 180 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.82) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
                    <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{rt.label}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>{rt.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: 14, background: '#FFFBF2', border: '1.5px solid #F0D9A8' }}>
              <div style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3rem)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#C4BFB8', marginBottom: '0.75rem' }}>Entregables</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Rótulos de caja de luz con iluminación LED',
                      'Letras corpóreas: aluminio, metacrilato, 3D retroiluminado',
                      'Neón LED: interior y exterior, cualquier forma',
                      'Vinilos para escaparates: decorativos y publicitarios',
                    ].map((d, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                        <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#0A0908', marginTop: 6 }} />
                        <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#C4BFB8', marginBottom: '0.75rem' }}>&nbsp;</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Rótulos de fachada y banderolas corporativas',
                      'Señalética interior: directorios, accesos, identificación',
                      'Diseño coherente con tu identidad visual existente',
                      'Instalación profesional en Barcelona y área metropolitana',
                    ].map((d, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                        <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#0A0908', marginTop: 6 }} />
                        <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Gallery strip ──────────────────────── */}
      <section style={{ background: '#0A0908', padding: '0', overflow: 'hidden', display: 'flex', height: 200 }}>
        {['/services/gal-1.avif', '/services/gal-3.avif', '/services/gal-5.avif', '/services/gal-7.avif', '/services/gal-2.avif', '/services/gal-4.avif'].map((src, i) => (
          <div key={i} style={{ flex: 1, position: 'relative', overflow: 'hidden', minWidth: 0 }}>
            <img src={src} alt="" aria-hidden="true" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </section>

      {/* ── Digital services ────────────────── */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.2em', color: '#9CA3AF', marginBottom: 12 }}>Servicios digitales</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-.035em', color: '#0A0908', marginBottom: '2.5rem', maxWidth: '24ch' }}>
              Del rótulo al pixel — branding, web y automatización.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {DIGITAL_SERVICES.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 50}>
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #E2DDD7', background: '#fff' }}>
                  <div className="grid md:grid-cols-2">
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                          <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8' }}>{s.num}</span>
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', fontWeight: 700, color: '#0A0908', lineHeight: 1.25, marginBottom: 8 }}>{s.title}</h3>
                        <p style={{ fontSize: 12, color: '#9CA3AF', fontStyle: 'italic', marginBottom: '1.25rem' }}>{s.tagline}</p>
                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>{s.desc}</p>
                      </div>
                      <div style={{ marginTop: '1.5rem' }}>
                        <Link href="/contact"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.65rem 1.3rem', borderRadius: 9999, fontWeight: 600, fontSize: 13, background: '#0A0908', color: '#fff' }}>
                          Solicitar presupuesto →
                        </Link>
                      </div>
                    </div>
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', background: '#FAFAFA', borderTop: '1px solid #E2DDD7' }}>
                      <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#C4BFB8', marginBottom: '1rem' }}>Entregables</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {s.deliverables.map((d, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                            <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#D4D0CA', marginTop: 6 }} />
                            <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI card ─────────────────────────── */}
      <section style={{ background: '#F7F5F1', paddingBottom: 'clamp(3.5rem,8vw,6rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(123,104,238,.2)', background: '#06040E' }}>
              <div className="grid md:grid-cols-2">
                <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#3D3556' }}>06</span>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#7B68EE', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(123,104,238,.3)', background: 'rgba(123,104,238,.1)' }}>
                      AURA & HERMES
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 8 }}>
                    AI Automation · Aura & Hermes
                  </h3>
                  <p style={{ fontSize: 12, color: '#7B68EE', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    Agentes de IA que trabajan mientras tú duermes.
                  </p>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    Implementamos agentes de IA autónomos — los mismos que usamos en RUD. Aura gestiona comunicación, análisis y contenido. Hermes automatiza flujos operativos, CRM y reporting. 100% en infraestructura local: sin coste de API recurrente, sin subir tus datos a la nube.
                  </p>
                  <Link href="/contact?servicio=ia"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.7rem 1.4rem', borderRadius: 9999, fontWeight: 600, fontSize: 13, background: '#7B68EE', color: '#fff' }}>
                    Solicitar presupuesto →
                  </Link>
                </div>
                <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', background: 'rgba(255,255,255,.02)', borderTop: '1px solid rgba(123,104,238,.1)' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#3D3556', marginBottom: '1rem' }}>Entregables</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      'Diagnóstico de procesos automatizables en tu empresa',
                      'Agente Aura: análisis, contenido y atención al cliente 24/7',
                      'Agente Hermes: automatización de flujos, leads y CRM',
                      'Infraestructura local privada — datos soberanos',
                      'Voz clonada y avatar video para comunicación de marca',
                      'Dashboard de BI con alertas proactivas',
                      'Integración con tus herramientas existentes',
                      'Formación del equipo y documentación del sistema',
                    ].map((d, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                        <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#7B68EE', marginTop: 6 }} />
                        <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────── */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', marginBottom: 8 }}>
                  ¿Necesitas algo específico?
                </h2>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Hacemos presupuestos a medida. Cuéntanos qué necesitas.</p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/rotulos"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.875rem 1.75rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
                  Ver rótulos →
                </Link>
                <Link href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.875rem 1.75rem', background: '#fff', color: '#0A0908', borderRadius: 9999, fontWeight: 600, fontSize: 15, flexShrink: 0 }}>
                  Contactar ahora →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
