import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Servicios — RUD Studio · Agencia creativa Barcelona',
  description: 'Servicios de branding, diseño web, e-commerce, motion, marketing digital y automatización IA en Barcelona. Estrategia y tecnología bajo un mismo techo.',
}

const SERVICES = [
  {
    id: 'branding', num: '01', title: 'Branding & Estrategia', icon: '◈',
    desc: 'Construimos marcas desde la raíz estratégica. Posicionamiento, naming, sistemas de identidad visual que duran décadas y se adaptan a todos los formatos.',
    deliverables: ['Auditoría de marca y competencia','Brand Strategy & Positioning','Naming y Tagline','Diseño de logo — 3 conceptos','Sistema visual completo (color, tipografía, layout)','Brand Guidelines (PDF entregable)','Formatos AI/EPS/SVG/PNG/PDF'],
    img: '/svc-strategy.jpg',
  },
  {
    id: 'visual-identity', num: '02', title: 'Identidad Visual', icon: '◎',
    desc: 'Sistemas visuales completos que funcionan en tarjeta, pantalla, packaging o valla. Diseñamos para la longevidad, no para la tendencia del mes.',
    deliverables: ['Evolución o creación de logo','Sistema tipográfico completo','Paleta de color primaria y secundaria','Elementos gráficos y patterns','Aplicaciones sobre colateral (tarjetas, papelería)','Diseño de packaging','Manual de marca completo'],
    img: '/svc-identity.jpg',
  },
  {
    id: 'web', num: '03', title: 'Diseño Web & Desarrollo', icon: '◉',
    desc: 'Desde el wireframe hasta el deploy. UX/UI en Figma, desarrollo Next.js o WordPress y e-commerce Shopify. Sitios que puntúan 95+ en Lighthouse.',
    deliverables: ['Arquitectura de información','Wireframes y prototipos','Diseño UI en Figma (pixel-perfect)','Desarrollo Next.js / React / WordPress','E-commerce Shopify o WooCommerce','SEO técnico de base','Google Analytics 4 & tracking'],
    img: '/svc-webdesign.jpg',
  },
  {
    id: 'content', num: '04', title: 'Contenido & Motion', icon: '◆',
    desc: 'Copywriting estratégico, dirección de arte para foto y video, animaciones de marca y producción de contenido para todos los canales.',
    deliverables: ['Copywriting web y landing pages','Estrategia de contenido','Dirección de arte para sesiones foto/video','Animaciones de logo y elementos de marca','Motion graphics para redes','Guías de contenido para equipo interno'],
    img: '/svc-content.jpg',
  },
  {
    id: 'marketing', num: '05', title: 'Marketing Digital', icon: '◇',
    desc: 'SEO orgánico, SEM y campañas de pago que traen tráfico cualificado. Medimos todo, optimizamos constantemente.',
    deliverables: ['Auditoría SEO técnico','Estrategia de palabras clave','Configuración y gestión Google Ads','Campañas Meta (Instagram/Facebook)','Email marketing (Klaviyo/Mailchimp)','Dashboards de analítica mensual'],
    img: '/svc-webdesign.jpg',
  },
  {
    id: 'chariot', num: '06', title: 'AI Automation con CHARIOT', icon: '◐',
    desc: 'Implementamos nuestro stack de IA autónoma en tu empresa. Asistentes inteligentes, flujos automatizados, generación de contenido y análisis — sin coste de API recurrente.',
    deliverables: ['Diagnóstico de procesos automatizables','Implementación de agentes de IA locales','Flujos de trabajo con n8n','Asistente de atención al cliente 24/7','Automatización de reporting y datos','Voz clonada y avatar video (opcional)','Formación del equipo'],
    img: '/svc-chariot.jpg',
    chariot: true,
  },
]

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="hero-gradient pt-[68px]">
        <div className="container-custom py-24 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Servicios · Barcelona</p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight tracking-tight mb-6 max-w-3xl">
              Full-stack creativo.<br />
              <span className="italic font-light text-[#A8A0A0]">De la estrategia al deploy.</span>
            </h1>
            <p className="text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed">
              Branding, diseño web, e-commerce, motion, marketing y automatización IA. Todo bajo un mismo techo en Barcelona para que tu marca avance con coherencia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-[#F7F5F1]">
        <div className="container-custom space-y-6">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 60}>
              <div id={s.id} className={`rounded-2xl overflow-hidden border ${s.chariot ? 'border-[#7B68EE]/20 bg-[#06040E]' : 'border-[#E2DDD7] bg-white'}`}>
                <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    {s.chariot && (
                      <div className="absolute inset-0 bg-[#06040E]/60" />
                    )}
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-mono text-[#9CA3AF]">{s.num}</span>
                      <span className={`text-lg ${s.chariot ? 'text-[#7B68EE]' : 'text-[#C4BFB8]'}`}>{s.icon}</span>
                      {s.chariot && (
                        <span className="px-2.5 py-1 bg-[#7B68EE]/15 border border-[#7B68EE]/25 rounded-full text-[10px] font-bold text-[#7B68EE] uppercase tracking-widest">CHARIOT</span>
                      )}
                    </div>
                    <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${s.chariot ? 'text-white' : ''}`}>{s.title}</h2>
                    <p className={`text-sm leading-relaxed mb-6 ${s.chariot ? 'text-[#6B7280]' : 'text-[#6B7280]'}`}>{s.desc}</p>
                    <div>
                      <p className={`text-[10px] font-semibold uppercase tracking-widest mb-3 ${s.chariot ? 'text-[#3D3556]' : 'text-[#C4BFB8]'}`}>Entregables</p>
                      <ul className="space-y-1.5">
                        {s.deliverables.map(d => (
                          <li key={d} className="flex items-start gap-2 text-xs">
                            <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${s.chariot ? 'bg-[#7B68EE]' : 'bg-[#D4D0CA]'}`} />
                            <span className={s.chariot ? 'text-[#6B7280]' : 'text-[#6B7280]'}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-7">
                      <Link href="/contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                        s.chariot ? 'bg-[#7B68EE] text-white hover:bg-[#6856D4]' : 'bg-[#0A0908] text-white hover:opacity-80'
                      }`}>
                        Solicitar presupuesto
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0A0908]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">¿Necesitas algo específico?</h2>
                <p className="text-[#6B7280]">Hacemos presupuestos a medida. Cuéntanos qué necesitas.</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0908] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors">
                Contactar ahora
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
