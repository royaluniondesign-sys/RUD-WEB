import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Servicios de Branding y Diseño Web en Barcelona',
  description: 'Servicios de branding, identidad visual, diseño web, desarrollo y automatización con IA en Barcelona. IDNT para marca, CHARIOT para IA.',
}

const services = [
  {
    id: 'brand-strategy',
    num: '01',
    tag: 'IDNT',
    title: 'Brand Strategy',
    headline: 'Estrategia de marca en Barcelona',
    img: '/svc-strategy.jpg',
    desc: 'Antes de diseñar una sola pieza, analizamos en profundidad tu mercado, competidores y audiencia. El resultado es un posicionamiento claro que hace cada decisión futura más fácil — y tu negocio más difícil de ignorar.',
    deliverables: ['Análisis de mercado y competencia', 'Definición de audiencia objetivo', 'Propuesta de valor y posicionamiento', 'Arquitectura de marca', 'Naming y tagline', 'Plataforma de mensajería'],
    cta: 'Empezar con estrategia',
  },
  {
    id: 'visual-identity',
    num: '02',
    tag: 'IDNT',
    title: 'Identidad Visual',
    headline: 'Diseño de identidad visual y logotipos',
    img: '/svc-identity.jpg',
    desc: 'Sistemas de logo, paletas de color y tipografía construidos para durar — no para estar de moda. Identidades que funcionan en todos los puntos de contacto: desde tu tarjeta de visita hasta una valla publicitaria de 40 metros.',
    deliverables: ['Logo principal y variantes', 'Paleta de color primaria y secundaria', 'Sistema tipográfico', 'Iconografía personalizada', 'Brand guidelines completo', 'Aplicaciones y mockups'],
    cta: 'Diseñar mi identidad',
  },
  {
    id: 'web-design',
    num: '03',
    tag: 'RUD',
    title: 'Diseño Web',
    headline: 'Diseño web para empresas en Barcelona',
    img: '/svc-webdesign.jpg',
    desc: 'Sitios que se ven excepcionales y rinden de forma medible. Diseñamos en Figma con conversión en mente, luego entregamos especificaciones pixel-perfect para que nada se pierda en la traducción al desarrollo.',
    deliverables: ['Auditoría UX del sitio actual', 'Arquitectura de información', 'Wireframes y prototipos', 'Diseño UI en Figma', 'Sistema de componentes', 'Handoff de desarrollo'],
    cta: 'Diseñar mi web',
  },
  {
    id: 'development',
    num: '04',
    tag: 'RUD',
    title: 'Desarrollo Web',
    headline: 'Desarrollo Next.js y React en Barcelona',
    img: '/svc-dev.jpg',
    desc: 'Next.js, React y TypeScript limpio. Construimos sitios que puntúan 90+ en Lighthouse, cargan en menos de 2 segundos y escalan con tu negocio. SEO técnico y accesibilidad WCAG como requisitos base.',
    deliverables: ['Desarrollo Next.js / React', 'Optimización Core Web Vitals', 'SEO técnico on-page', 'Integración CMS (Sanity, Contentful)', 'Formularios y backend', 'Despliegue en Vercel'],
    cta: 'Desarrollar mi proyecto',
  },
  {
    id: 'content',
    num: '05',
    tag: 'RUD',
    title: 'Contenido',
    headline: 'Creación de contenido y copywriting',
    img: '/svc-content.jpg',
    desc: 'Dirección de arte, copywriting y briefs fotográficos que cuentan tu historia con consistencia. Hacemos que tu marca suene tan bien como se ve.',
    deliverables: ['Estrategia de contenido', 'Copywriting web y landing pages', 'Dirección de arte fotográfica', 'Contenido para redes sociales', 'Presentaciones corporativas', 'Materiales de marketing'],
    cta: 'Crear mi contenido',
  },
  {
    id: 'ai-automation',
    num: '06',
    tag: 'CHARIOT',
    title: 'AI Automation',
    headline: 'Automatización con IA · CHARIOT Barcelona',
    img: '/svc-ai.jpg',
    desc: 'Flujos de trabajo inteligentes, asistentes autónomos y sistemas de IA construidos sobre infraestructura 100% local a través de CHARIOT. Coste operativo $0 — sin facturas de API recurrentes.',
    deliverables: ['Auditoría de procesos automatizables', 'Flujos n8n y agentes IA', 'Asistentes conversacionales', 'Integración con herramientas existentes', 'Infraestructura local Ollama', 'Formación y documentación'],
    cta: 'Automatizar con CHARIOT',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 hero-gradient">
        <div className="container-custom">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Qué hacemos</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] tracking-tight mb-6 max-w-3xl">
            Servicios de diseño <span className="italic font-light text-[#9CA3AF]">y tecnología</span>
          </h1>
          <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed mb-8">
            Agencia creativa en Barcelona con dos subsidiarias especializadas. <strong className="text-[#0A0A0A]">IDNT</strong> para branding e identidad visual. <strong className="text-[#0A0A0A]">CHARIOT</strong> para automatización con IA.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">Solicitar presupuesto</Link>
            <Link href="/pricing" className="btn-secondary">Ver precios</Link>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20">
        <div className="container-custom space-y-6">
          {services.map((s, i) => (
            <div key={s.id} id={s.id} className="group bg-white border border-[#E5E2DC] rounded-2xl overflow-hidden hover:border-[#0A0A0A] hover:shadow-lg transition-all duration-300">
              <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? 'md:flex md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={s.img} alt={s.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${s.tag === 'CHARIOT' ? 'bg-[#0f3460] text-white' : s.tag === 'IDNT' ? 'bg-[#0A0A0A] text-white' : 'bg-white text-[#0A0A0A]'}`}>
                    {s.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-mono text-[#C4BFB8] mb-3">{s.num}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-2">{s.title}</h2>
                  <p className="text-sm text-[#9CA3AF] font-medium mb-5">{s.headline}</p>
                  <p className="text-[#6B7280] leading-relaxed mb-8">{s.desc}</p>

                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Entregables</p>
                    <div className="grid grid-cols-2 gap-2">
                      {s.deliverables.map(d => (
                        <div key={d} className="flex items-start gap-2 text-sm text-[#6B7280]">
                          <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="6" fill="#F0EDE6"/>
                            <path d="M3 6l2 2 4-4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded-full text-sm font-semibold hover:opacity-80 transition-opacity w-fit">
                    {s.cta}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-custom text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">¿Listo para empezar?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿No sabes qué necesitas?<br /><span className="italic font-light text-[#6B7280]">Hablemos y lo descubrimos juntos.</span></h2>
          <p className="text-[#6B7280] mb-10 max-w-md mx-auto">Respondemos en menos de 24 horas. Sin compromiso.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors">
            Contactar ahora
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
