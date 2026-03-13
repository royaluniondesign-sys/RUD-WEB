'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-[72px] relative overflow-hidden">
      <div className="container-custom py-20 md:py-32">
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-[#E5E2DC] rounded-full text-xs font-medium text-[#6B7280] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Disponibles para nuevos proyectos · Barcelona
          </span>
        </div>

        <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-[#0A0A0A] mb-6 animate-fade-in-up animation-delay-100 max-w-5xl">
          Agencia de diseño
          <br />
          <span className="italic font-light text-[#6B7280]">y branding en Barcelona</span>
        </h1>

        <p className="text-base md:text-lg text-[#6B7280] max-w-xl mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
          Creamos identidades de marca, webs y sistemas de automatización con IA para empresas que quieren destacar. Estrategia, diseño y tecnología bajo un mismo techo.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
          <Link href="/contact" className="btn-primary">
            Hablemos de tu proyecto
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/work" className="btn-secondary">
            Ver nuestro trabajo
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap gap-6 text-xs text-[#9CA3AF] animate-fade-in-up animation-delay-300">
          <span>✦ Branding · Barcelona</span>
          <span>✦ Diseño web · Spain</span>
          <span>✦ AI Automation</span>
          <span>✦ Identidad visual</span>
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { num: '$0', label: 'Coste operativo\nde IA' },
    { num: '100%', label: 'Infraestructura\nlocal' },
    { num: '2', label: 'Subsidiarias\nespecializadas' },
    { num: '6', label: 'Servicios\ncore' },
  ]
  return (
    <section className="bg-[#FAFAFA] py-16 border-y border-[#E5E2DC]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E2DC]">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="px-6 md:px-10 py-4 first:pl-0 last:pr-0">
                <p className="stat-number text-[#0A0A0A]">{s.num}</p>
                <p className="text-xs text-[#9CA3AF] font-medium mt-1 uppercase tracking-wider whitespace-pre-line leading-tight">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services Cards ───────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      num: '01',
      title: 'Brand Strategy',
      subtitle: 'Estrategia de marca en Barcelona',
      desc: 'Analizamos tu mercado, competencia y audiencia antes de diseñar una sola pieza. El resultado es un posicionamiento claro que hace cada decisión futura más fácil.',
      img: '/svc-strategy.jpg',
      href: '/services#brand-strategy',
      tag: 'IDNT',
    },
    {
      num: '02',
      title: 'Identidad Visual',
      subtitle: 'Diseño de logotipos y sistemas visuales',
      desc: 'Logos, paletas de color y tipografía construidos para durar. Sistemas de identidad que funcionan en todos los puntos de contacto, desde una tarjeta hasta una valla publicitaria.',
      img: '/svc-identity.jpg',
      href: '/services#visual-identity',
      tag: 'IDNT',
    },
    {
      num: '03',
      title: 'Diseño Web',
      subtitle: 'Web design para empresas en Barcelona',
      desc: 'Sitios que se ven excepcionales y rinden de forma medible. Diseñamos en Figma con conversión en mente, optimizados para posicionarse en Google.',
      img: '/svc-webdesign.jpg',
      href: '/services#web-design',
      tag: 'RUD',
    },
    {
      num: '04',
      title: 'Desarrollo',
      subtitle: 'Desarrollo web Next.js · React',
      desc: 'Next.js, React y TypeScript limpio. Sitios que puntúan 90+ en Lighthouse, cargan en menos de 2 segundos y escalan con tu negocio.',
      img: '/svc-dev.jpg',
      href: '/services#development',
      tag: 'RUD',
    },
    {
      num: '05',
      title: 'Contenido',
      subtitle: 'Creación de contenido y copywriting',
      desc: 'Dirección de arte, copywriting y briefs fotográficos que cuentan tu historia con consistencia. Tu marca debe sonar tan bien como se ve.',
      img: '/svc-content.jpg',
      href: '/services#content',
      tag: 'RUD',
    },
    {
      num: '06',
      title: 'AI Automation',
      subtitle: 'Automatización con IA · CHARIOT',
      desc: 'Flujos de trabajo inteligentes, asistentes autónomos y sistemas de IA construidos sobre infraestructura local a través de CHARIOT. Sin costes de API recurrentes.',
      img: '/svc-ai.jpg',
      href: '/services#ai-automation',
      tag: 'CHARIOT',
    },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]" id="services">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Qué hacemos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Servicios</h2>
              <p className="text-sm text-[#6B7280] mt-3 max-w-md">
                Agencia de branding y diseño web en Barcelona. <span className="font-medium text-[#0A0A0A]">IDNT</span> · identidad visual. <span className="font-medium text-[#0A0A0A]">CHARIOT</span> · automatización con IA.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              Todos los servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 60}>
              <Link href={s.href} className="group block bg-white border border-[#E5E2DC] rounded-2xl overflow-hidden hover:border-[#0A0A0A] hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={s.img} alt={s.subtitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <span className={`absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold rounded-full ${s.tag === 'CHARIOT' ? 'bg-[#0f3460] text-white' : s.tag === 'IDNT' ? 'bg-[#0A0A0A] text-white' : 'bg-white/90 text-[#0A0A0A]'}`}>
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-mono text-[#C4BFB8]">{s.num}</span>
                    <svg className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">{s.title}</h3>
                  <p className="text-xs text-[#9CA3AF] mb-3 font-medium">{s.subtitle}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Solicitar presupuesto gratuito
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
  const projects = [
    {
      name: 'IDNT',
      subtitle: 'Sistema de Identidad Visual',
      tags: ['Branding', 'Identidad visual'],
      desc: 'Subsidiaria de branding de RUD. Estrategia de marca, sistemas de logo y guidelines visuales completos.',
      img: '/project-idnt.jpg',
      slug: 'idnt',
    },
    {
      name: 'CHARIOT',
      subtitle: 'Suite de Automatización IA',
      tags: ['AI', 'Automatización'],
      desc: 'Producto de IA autónomo construido sobre infraestructura local para automatización a escala de agencia.',
      img: '/project-chariot.jpg',
      slug: 'chariot',
    },
    {
      name: 'RUD Web',
      subtitle: 'Plataforma Digital',
      tags: ['Web Design', 'Desarrollo'],
      desc: 'Presencia digital de Royal Union Design — estrategia, diseño y desarrollo en un solo proyecto.',
      img: '/project-web.jpg',
      slug: 'rud-web',
    },
  ]

  return (
    <section className="section-padding bg-[#F0EDE6]" id="work">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Proyectos seleccionados</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Nuestro trabajo</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              Ver todos los proyectos
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 80}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img src={p.img} alt={`${p.name} — ${p.subtitle}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white font-bold text-2xl tracking-tight drop-shadow-lg">{p.name}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:underline decoration-2 underline-offset-4">{p.name} — {p.subtitle}</h3>
                <p className="text-sm text-[#6B7280] mt-1">{p.desc}</p>
              </Link>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={240}>
            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 border border-dashed border-[#D1CDC6] bg-[#F8F5F0] flex flex-col items-center justify-center gap-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4BFB8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p className="text-sm font-medium text-[#C4BFB8] uppercase tracking-widest">En producción</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="tag-pill">2025</span>
              </div>
              <h3 className="text-xl font-bold text-[#C4BFB8]">Próximo proyecto</h3>
              <p className="text-sm text-[#C4BFB8] mt-1">Actualmente en producción.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Why RUD ──────────────────────────────────────────────────────────────────
function WhyRUD() {
  const reasons = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: 'Estrategia antes que diseño',
      desc: 'Cada proyecto empieza con un análisis profundo de tu mercado, competidores y audiencia. No diseñamos logos — construimos plataformas de posicionamiento.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      title: 'Trato directo, sin intermediarios',
      desc: 'Trabajas directamente con el diseñador, desarrollador o estratega que hace tu proyecto. Sin teléfonos rotos. Sin overhead de agencia.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
      title: 'Resultados medibles',
      desc: 'Diseñamos para resultados, no para premios. Cada proyecto se define con un objetivo de negocio claro y medimos el rendimiento tras el lanzamiento.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Construido para durar, no para estar de moda',
      desc: 'Construimos para la longevidad. Identidades y sitios que siguen siendo relevantes en cinco años, no solo hasta el próximo ciclo de tendencias.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Código que rinde',
      desc: 'Cada sitio que construimos puntúa 90+ en Google Lighthouse. Tiempos de carga sub-2-segundos, accesibilidad WCAG y SEO técnico como requisitos base.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
      title: 'IA local, coste cero',
      desc: 'A través de CHARIOT, ofrecemos automatización con IA a coste operativo $0. Infraestructura 100% local que elimina facturas de API recurrentes.',
    },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Por qué RUD</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
                Qué nos hace
                <br /><span className="italic font-light text-[#9CA3AF]">diferentes</span>
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              Nuestra historia
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
          {reasons.map((r) => (
            <div key={r.title} className="bg-[#FAFAFA] p-8 hover:bg-white transition-colors duration-200">
              <div className="text-[#6B7280] mb-5">{r.icon}</div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-3">{r.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '€2.500',
      desc: 'Perfecto para startups y proyectos iniciales',
      features: ['Sesión de Brand Strategy', 'Diseño de logo (3 conceptos)', 'Sistema de color y tipografía', 'Brand Guidelines básico', 'Soporte por email'],
    },
    {
      name: 'Professional',
      price: '€7.500',
      desc: 'Nuestro paquete más popular',
      features: ['Todo en Starter', 'Identidad visual completa', 'Diseño web (5 páginas)', 'Entrega en Figma', 'Soporte prioritario', '3 rondas de revisiones'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '€15.000+',
      desc: 'Engagement completo end-to-end',
      features: ['Todo en Professional', 'Desarrollo web incluido', 'Estrategia de contenido y copy', 'Assets de motion branding', 'Colateral de marketing', 'AI Automation con CHARIOT'],
    },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]" id="pricing">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Inversión</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-4">Precios</h2>
            <p className="text-[#6B7280] max-w-sm mx-auto text-sm">Paquetes de precio fijo y alcance definido. Sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`rounded-2xl p-8 flex flex-col border h-full ${plan.featured ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A] shadow-2xl md:scale-[1.03]' : 'bg-white border-[#E5E2DC]'}`}>
                {plan.featured && <span className="inline-block mb-4 px-3 py-1 bg-white/15 text-xs font-medium rounded-full w-fit text-white/80">Más popular</span>}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-4 ${plan.featured ? 'text-white/50' : 'text-[#9CA3AF]'}`}>{plan.desc}</p>
                <p className="text-4xl font-bold mb-8 tracking-tight">{plan.price}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,0.12)' : '#F0EDE6'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : '#0A0A0A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? 'text-white/70' : 'text-[#6B7280]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full py-3.5 text-center rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80 ${plan.featured ? 'bg-white text-[#0A0A0A]' : 'bg-[#0A0A0A] text-white'}`}>
                  Empezar proyecto
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-sm text-[#9CA3AF] mt-8">
            ¿Tienes un proyecto específico? <Link href="/contact" className="text-[#0A0A0A] font-medium underline underline-offset-2 hover:no-underline">Hablemos y hacemos un presupuesto a medida.</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  { question: '¿Cuánto tiempo tarda un proyecto típico?', answer: 'Los proyectos de identidad de marca suelen tomar 4–6 semanas. Los proyectos de diseño y desarrollo web van de 6–12 semanas según la complejidad.' },
  { question: '¿Incluís revisiones?', answer: 'Sí — todos los paquetes incluyen 3 rondas de revisiones. Rondas adicionales pueden acordarse a tarifa por hora. Con 3 rondas siempre llegamos al resultado perfecto.' },
  { question: '¿Cómo es el proceso de pago?', answer: 'Facturamos el 50% al inicio para reservar tu fecha de proyecto, y el 50% restante al entregar el trabajo final. Para proyectos grandes podemos acordar pagos por hitos.' },
  { question: '¿Podéis trabajar con activos de marca existentes?', answer: 'Absolutamente. Podemos construir sobre, refinar o evolucionar tus activos de marca existentes. Evaluamos lo que tienes y recomendamos el mejor enfoque.' },
  { question: '¿Ofrecéis soporte después de la entrega?', answer: 'Sí — ofrecemos paquetes de retainer mensual para gestión de marca, actualizaciones de web y soporte de marketing. Muchos clientes trabajan con nosotros a largo plazo.' },
]

function FAQ() {
  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Preguntas frecuentes</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}><FAQAccordion faqs={faqs} /></ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-[#6B7280] text-sm mt-10">
              ¿Más preguntas?{' '}
              <Link href="/contact" className="text-[#0A0A0A] font-medium underline underline-offset-2 hover:no-underline">Contáctanos directamente</Link>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">¿Listo para empezar?</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Construyamos algo
              <br /><span className="italic font-light text-[#6B7280]">grande juntos.</span>
            </h2>
            <p className="text-[#6B7280] text-base mb-10 max-w-lg leading-relaxed">
              Cuéntanos tu proyecto y te respondemos en menos de 24 horas. Basados en Barcelona, trabajamos globalmente.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors text-sm">
                Iniciar conversación
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:border-white/50 transition-colors text-sm">
                Ver nuestro trabajo
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <img src="/logo-rud-white.png" alt="RÜD — Royal Union Design Barcelona" className="h-10 mb-5" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Agencia de branding y diseño web en Barcelona. Identidades de marca, webs de alto rendimiento y automatización con IA.
            </p>
            <p className="text-[#4B5563] text-xs mt-3 tracking-wide">IDNT · CHARIOT</p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Navegar</h4>
            <ul className="space-y-3">
              {[['Trabajo', '/work'], ['Servicios', '/services'], ['Nosotros', '/about'], ['Precios', '/pricing'], ['Blog', '/blog'], ['Contacto', '/contact']].map(([l, h]) => (
                <li key={h}><Link href={h} className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Servicios</h4>
            <ul className="space-y-3">
              {[['Branding', '/services#brand-strategy'], ['Identidad visual', '/services#visual-identity'], ['Diseño web', '/services#web-design'], ['Desarrollo', '/services#development'], ['AI Automation', '/services#ai-automation']].map(([l, h]) => (
                <li key={l}><Link href={h} className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li><a href="mailto:hello@rud.studio" className="hover:text-white transition-colors duration-200">hello@rud.studio</a></li>
              <li>Barcelona, España</li>
              <li className="text-[#4B5563]">Trabajamos globalmente</li>
            </ul>
            <div className="flex gap-2.5 mt-6">
              {[
                { label: 'Instagram', short: 'Ig', href: 'https://instagram.com/royaluniondesign' },
                { label: 'LinkedIn', short: 'Li', href: 'https://linkedin.com/company/royaluniondesign' },
                { label: 'Behance', short: 'Be', href: 'https://behance.net/royaluniondesign' },
              ].map(({ label, short, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#4B5563] hover:text-white hover:border-[#4B5563] transition-colors duration-200 text-xs font-medium">
                  {short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4B5563]">© 2026 RUD Studio. Todos los derechos reservados. Barcelona, España.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#4B5563] hover:text-[#6B7280] transition-colors">Política de privacidad</Link>
            <Link href="/terms" className="text-xs text-[#4B5563] hover:text-[#6B7280] transition-colors">Términos de servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyRUD />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
