import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Servicios — Agencia creativa full-stack · RUD Studio Barcelona',
  description: 'Branding estratégico, identidad visual de sistema, diseño web Next.js, e-commerce, motion branding, marketing digital y automatización IA en Barcelona. Más allá del diseño estándar.',
}

const SERVICES = [
  {
    id: 'branding', num: '01', title: 'Brand Strategy & Posicionamiento',
    tagline: 'Antes del diseño, la estrategia.',
    desc: 'No diseñamos logos — construimos sistemas de marca. Empezamos con auditoría de mercado, análisis competitivo profundo y workshops de posicionamiento. El resultado: una propuesta de valor diferenciada y una arquitectura de marca que guía cada decisión visual posterior.',
    deliverables: [
      'Auditoría de marca y análisis competitivo',
      'Workshops de posicionamiento y propuesta de valor',
      'Brand Architecture (casa de marcas, endorsed, standalone)',
      'Messaging framework y tono de voz',
      'Naming estratégico con análisis de disponibilidad',
      'Tagline y narrativa de marca',
    ],
    dark: false,
  },
  {
    id: 'identity', num: '02', title: 'Identidad Visual de Sistema',
    tagline: 'Sistemas visuales que escalan décadas.',
    desc: 'Una identidad de sistema no es solo un logo — es un lenguaje visual completo. Logo con variantes para todos los contextos, paleta de color con semántica definida, tipografía con jerarquía funcional, motion principles, iconografía propia y elementos gráficos. Todo documentado para que tu equipo interno lo use bien.',
    deliverables: [
      'Logo system completo (primario, secundario, favicon, monograma)',
      'Paleta de color primaria, secundaria y semántica',
      'Sistema tipográfico con jerarquía funcional',
      'Motion identity principles y micro-animaciones',
      'Iconografía y elementos gráficos propios',
      'Brand Guidelines extenso (PDF + Figma editable)',
      'Todas las aplicaciones: tarjetas, papelería, packaging, señalética',
    ],
    dark: false,
  },
  {
    id: 'web', num: '03', title: 'Diseño Web & Desarrollo de Alto Rendimiento',
    tagline: '95+ Lighthouse. Core Web Vitals verde. Siempre.',
    desc: 'Diseñamos con intención estratégica y desarrollamos con obsesión técnica. UX research, arquitectura de información, wireframes, diseño UI pixel-perfect en Figma y desarrollo con Next.js o Shopify. Sin compromisos de performance: cada proyecto sale con 95+ en Lighthouse y Core Web Vitals en verde desde el día uno.',
    deliverables: [
      'UX Research y arquitectura de información',
      'Wireframes y prototipos interactivos',
      'Diseño UI en Figma (pixel-perfect, responsive completo)',
      'Desarrollo Next.js / React / Shopify Plus',
      'SEO técnico: sitemap, schema.org, meta tags, robots',
      'Core Web Vitals optimizado (LCP <2.5s, CLS 0)',
      'Google Analytics 4, Hotjar y tracking completo',
    ],
    dark: false,
  },
  {
    id: 'ecommerce', num: '04', title: 'E-commerce & Arquitectura de Conversión',
    tagline: 'Tiendas que convierten, no solo se ven bien.',
    desc: 'E-commerce no es solo poner productos en línea. Es arquitectura de producto, UX de checkout sin fricción, integraciones ERP/PIM, logística inversa, email automation y estrategia post-venta. Construimos el sistema completo, no solo el escaparate.',
    deliverables: [
      'Shopify Plus / WooCommerce avanzado',
      'Arquitectura de producto y UX de catálogo',
      'Checkout optimizado para conversión (CRO)',
      'Integraciones ERP, PIM y pasarelas de pago',
      'Email automation: carrito abandonado, post-compra, fidelización',
      'Sistema de reseñas y prueba social',
      'Analytics e-commerce y dashboard de KPIs',
    ],
    dark: false,
  },
  {
    id: 'content', num: '05', title: 'Contenido, Motion & Producción Creativa',
    tagline: 'Tu marca tiene que sonar tan bien como se ve.',
    desc: 'Copywriting estratégico que convierte, dirección de arte para sesiones de foto y video, animaciones de marca que refuerzan la identidad, y producción de contenido para todos los canales. Coordinamos el proceso creativo completo para que todo sea coherente.',
    deliverables: [
      'Copywriting web: home, servicios, about, landing pages',
      'Estrategia de contenido y calendario editorial',
      'Dirección de arte para sesiones de fotografía y video',
      'Animaciones de logo y elementos de identidad (Lottie/MP4)',
      'Motion graphics para redes y campañas',
      'Guía de contenido para equipo interno (tono, visual, formato)',
    ],
    dark: false,
  },
  {
    id: 'chariot', num: '06', title: 'AI Automation & Stack CHARIOT',
    tagline: 'IA que trabaja mientras tú duermes. Sin facturas mensuales.',
    desc: 'Implementamos nuestro stack de IA autónoma adaptado a tu negocio. El mismo sistema que usamos en RUD internamente: agentes de análisis, generación de contenido automatizada, flujos n8n, voz clonada y dashboards inteligentes. 100% local, sin subir datos a la nube, sin coste de API recurrente.',
    deliverables: [
      'Diagnóstico de procesos automatizables en tu empresa',
      'Implementación de agentes de IA locales (Ollama)',
      'Flujos de automatización con n8n (reporting, leads, CRM)',
      'Asistente de atención al cliente 24/7 entrenado con tu base de datos',
      'Generación automática de contenido y assets',
      'Voz clonada y avatar video para comunicación de marca',
      'Dashboard de BI con alertas proactivas',
      'Formación del equipo y documentación del sistema',
    ],
    dark: true,
  },
]

export default function Services() {
  return (
    <main>
      <Navbar />

      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 12 }}>Servicios · Barcelona</p>
            <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: '1rem', maxWidth: '24ch' }}>
              Full-stack creativo.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A8A0A0' }}>De la estrategia al deploy.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.875rem,1.5vw,1rem)', color: '#6B7280', maxWidth: '46ch', lineHeight: 1.7 }}>
              Branding estratégico, diseño web de alto rendimiento, e-commerce, motion y automatización IA. Todo bajo un mismo techo en Barcelona — con más profundidad de lo que encontrarás en agencias generalistas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#F7F5F1' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 40}>
              <div id={s.id} style={{
                borderRadius: 16, overflow: 'hidden',
                border: s.dark ? '1px solid rgba(123,104,238,.2)' : '1px solid #E2DDD7',
                background: s.dark ? '#06040E' : '#fff',
              }}>
                <div className="grid md:grid-cols-2">
                    {/* Number + title col */}
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', borderRight: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                          <span style={{ fontSize: 10, fontFamily: 'monospace', color: s.dark ? '#3D3556' : '#C4BFB8' }}>{s.num}</span>
                          {s.dark && (
                            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#7B68EE', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(123,104,238,.3)', background: 'rgba(123,104,238,.1)' }}>
                              CHARIOT
                            </span>
                          )}
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, color: s.dark ? '#fff' : '#0A0908', lineHeight: 1.25, marginBottom: 8 }}>{s.title}</h2>
                        <p style={{ fontSize: 12, color: s.dark ? '#7B68EE' : '#9CA3AF', fontStyle: 'italic', marginBottom: '1.25rem' }}>{s.tagline}</p>
                        <p style={{ fontSize: 14, color: s.dark ? '#6B7280' : '#6B7280', lineHeight: 1.75 }}>{s.desc}</p>
                      </div>
                      <div style={{ marginTop: '1.5rem' }}>
                        <Link href="/contact"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.7rem 1.4rem', borderRadius: 9999, fontWeight: 600, fontSize: 13, background: s.dark ? '#7B68EE' : '#0A0908', color: '#fff' }}>
                          Solicitar presupuesto →
                        </Link>
                      </div>
                    </div>

                    {/* Deliverables col */}
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', background: s.dark ? 'rgba(255,255,255,.02)' : '#FAFAFA', borderTop: '1px solid #E2DDD7' }}>
                      <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: s.dark ? '#3D3556' : '#C4BFB8', marginBottom: '1rem' }}>Entregables</p>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {s.deliverables.map((d, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                            <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: s.dark ? '#7B68EE' : '#D4D0CA', marginTop: 6 }} />
                            <span style={{ color: s.dark ? '#6B7280' : '#6B7280', lineHeight: 1.6 }}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section style={{ background: '#0A0908', padding: 'clamp(3rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>¿Necesitas algo específico?</h2>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Hacemos presupuestos a medida. Cuéntanos qué necesitas.</p>
              </div>
              <Link href="/contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.875rem 1.75rem', background: '#fff', color: '#0A0908', borderRadius: 9999, fontWeight: 600, fontSize: 15, flexShrink: 0 }}>
                Contactar ahora →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
