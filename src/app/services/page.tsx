import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Servicios Barcelona — Rótulos Luminosos, Branding, Diseño Web y IA | RUD Studio',
  description: 'RUD Studio: empresa de rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Branding estratégico, diseño web Next.js, e-commerce Shopify y automatización IA. Todo bajo un techo.',
  keywords: 'rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, branding Barcelona, agencia diseño web Barcelona, e-commerce Shopify Barcelona, señalética corporativa Barcelona, automatización IA Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/services' },
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
    id: 'rotulos', num: '03', title: 'Rótulos Luminosos & Señalética Corporativa',
    tagline: 'Tu marca en la calle. Fabricación propia en Barcelona.',
    desc: 'Un negocio que no se ve desde la calle, no existe. Diseñamos, fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas y vinilos de escaparate que hacen que tu local sea imposible de ignorar. Mismo nivel de exigencia visual que el branding digital — pero en aluminio, metacrilato y luz.',
    deliverables: [
      'Rótulos de caja de luz y bandeja calada con iluminación LED',
      'Letras corpóreas: aluminio, metacrilato, 3D retroiluminado',
      'Neón LED y neón de vidrio: interior y exterior, cualquier forma',
      'Vinilos para escaparates: decorativos, publicitarios, antireflejos',
      'Rótulos de fachada y banderolas corporativas',
      'Señalética interior: directorios, accesos, identificación de espacios',
      'Diseño coherente con tu identidad visual existente',
      'Instalación profesional en Barcelona y área metropolitana',
    ],
    dark: false,
    highlight: true,
  },
  {
    id: 'web', num: '04', title: 'Diseño Web & Desarrollo de Alto Rendimiento',
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
    id: 'ecommerce', num: '05', title: 'E-commerce & Arquitectura de Conversión',
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
    id: 'content', num: '06', title: 'Contenido, Motion & Producción Creativa',
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
    id: 'aura', num: '07', title: 'AI Automation · Aura & Hermes',
    tagline: 'Agentes de IA que trabajan mientras tú duermes.',
    desc: 'Implementamos agentes de IA autónomos adaptados a tu negocio — los mismos que usamos en RUD. Aura gestiona comunicación, análisis y contenido. Hermes automatiza flujos operativos, CRM y reporting. 100% en infraestructura local: sin coste de API recurrente, sin subir tus datos a la nube.',
    deliverables: [
      'Diagnóstico de procesos automatizables en tu empresa',
      'Agente Aura: análisis, generación de contenido y atención al cliente 24/7',
      'Agente Hermes: automatización de flujos, leads y CRM',
      'Infraestructura local privada — datos soberanos, sin coste recurrente',
      'Voz clonada y avatar video para comunicación de marca',
      'Dashboard de BI con alertas proactivas',
      'Integración con tus herramientas existentes',
      'Formación del equipo y documentación del sistema',
    ],
    dark: true,
  },
]

export default function Services() {
  return (
    <main>
      <Navbar light />

      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 380, background: '#0A0908' }}>
        <img src="/hero-services.jpg" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.38 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.6) 0%,rgba(10,9,8,0.35) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>Servicios · Barcelona</p>
            <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: '1rem', maxWidth: '28ch', color: 'white' }}>
              Rótulos luminosos, branding y diseño web en Barcelona.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>De la calle al pixel.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.875rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.62)', maxWidth: '46ch', lineHeight: 1.7 }}>
              Branding estratégico, señalética y rótulos, diseño web, e-commerce, motion y automatización IA. De la estrategia al rótulo luminoso, todo bajo un mismo techo en Barcelona.
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
                border: s.dark ? '1px solid rgba(123,104,238,.2)' : (s.highlight ? '2px solid #D97706' : '1px solid #E2DDD7'),
                background: s.dark ? '#06040E' : '#fff',
                boxShadow: s.highlight ? '0 8px 40px rgba(217,119,6,.1)' : 'none',
              }}>
                <div className="grid md:grid-cols-2">
                    {/* Number + title col */}
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', borderRight: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                          <span style={{ fontSize: 10, fontFamily: 'monospace', color: s.dark ? '#3D3556' : '#C4BFB8' }}>{s.num}</span>
                          {s.dark && (
                            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#7B68EE', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(123,104,238,.3)', background: 'rgba(123,104,238,.1)' }}>
                              AURA & HERMES
                            </span>
                          )}
                          {s.highlight && (
                            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#D97706', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(217,119,6,.3)', background: 'rgba(217,119,6,.08)' }}>
                              FABRICACIÓN PROPIA
                            </span>
                          )}
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, color: s.dark ? '#fff' : '#0A0908', lineHeight: 1.25, marginBottom: 8 }}>{s.title}</h2>
                        <p style={{ fontSize: 12, color: s.dark ? '#7B68EE' : (s.highlight ? '#D97706' : '#9CA3AF'), fontStyle: 'italic', marginBottom: '1.25rem' }}>{s.tagline}</p>
                        <p style={{ fontSize: 14, color: s.dark ? '#6B7280' : '#6B7280', lineHeight: 1.75 }}>{s.desc}</p>
                      </div>
                      <div style={{ marginTop: '1.5rem' }}>
                        <Link href="/contact"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.7rem 1.4rem', borderRadius: 9999, fontWeight: 600, fontSize: 13, background: s.dark ? '#7B68EE' : (s.highlight ? '#D97706' : '#0A0908'), color: '#fff' }}>
                          {s.highlight ? 'Pedir presupuesto de rótulo →' : 'Solicitar presupuesto →'}
                        </Link>
                      </div>
                    </div>

                    {/* Deliverables col */}
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', background: s.dark ? 'rgba(255,255,255,.02)' : (s.highlight ? '#FFFBF2' : '#FAFAFA'), borderTop: s.highlight ? '2px solid #D97706' : '1px solid #E2DDD7' }}>
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
