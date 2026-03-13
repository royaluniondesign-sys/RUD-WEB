'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

// ═══════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-[68px] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(10,9,8,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(10,9,8,.04) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />

      <div className="container-custom py-24 md:py-36 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#E2DDD7] rounded-full text-xs font-medium text-[#6B7280] backdrop-blur-sm shadow-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Disponibles · Barcelona
          </span>
        </div>

        <h1 className="animate-fade-in-up anim-d1 text-[clamp(2.8rem,5.8vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.04em] mb-7 max-w-4xl">
          Creamos marcas que<br />
          <span className="italic font-light text-[#A8A0A0]">posicionan de verdad.</span>
        </h1>

        <p className="animate-fade-in-up anim-d2 text-base md:text-xl text-[#6B7280] max-w-xl mb-10 leading-relaxed">
          Agencia creativa full-stack en Barcelona. Branding estratégico, diseño web de alto rendimiento, e-commerce, motion y automatización con IA — todo bajo un mismo techo.
        </p>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-3 mb-12">
          <Link href="/contact" className="btn-primary">
            Hablemos de tu proyecto
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/work" className="btn-secondary">Ver trabajo real</Link>
        </div>

        {/* Keyword pills */}
        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-1.5">
          {['Branding · Barcelona','Diseño Web','E-commerce Shopify','Motion Design','AI Automation','Packaging','Brand Strategy','Identidad Visual'].map(t => (
            <span key={t} className="px-3 py-1 bg-white/60 border border-[#E2DDD7] rounded-full text-[11px] text-[#9CA3AF] font-medium backdrop-blur-sm">{t}</span>
          ))}
        </div>
      </div>

      {/* Ambient orbs */}
      <div className="absolute top-1/4 right-12 w-72 h-72 rounded-full blur-[80px] opacity-25 float-anim pointer-events-none"
        style={{background:'radial-gradient(circle,#D4EDFB,transparent)'}} />
      <div className="absolute bottom-1/3 right-1/4 w-52 h-52 rounded-full blur-[80px] opacity-20 float-anim-slow pointer-events-none"
        style={{background:'radial-gradient(circle,#FEF0D6,transparent)'}} />
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════════════
function Marquee() {
  const items = ['Brand Strategy','Identidad Visual','Diseño Web','Next.js','E-commerce Shopify','Motion Branding','Copywriting','SEO Técnico','AI Automation','Packaging','Fotografía Creativa','Marketing Digital','Web Apps','Brand Guidelines']
  const doubled = [...items,...items]
  return (
    <div className="bg-[#0A0908] py-4 overflow-hidden border-y border-[#181614]">
      <div className="flex marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="shrink-0 flex items-center gap-8 text-sm font-medium text-white/35 mx-6">
            {item} <span className="text-white/12 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { num: '8+', label: 'Servicios\ncreativose' },
    { num: '3', label: 'Clientes activos\nen cartera' },
    { num: '€0', label: 'Coste mensual\nIA con CHARIOT' },
    { num: '24h', label: 'Tiempo máximo\nde respuesta' },
  ]
  return (
    <section className="bg-[#FAFAFA] py-14 border-b border-[#E2DDD7]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E2DDD7]">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <div className="px-6 md:px-10 py-2 first:pl-0">
                <p className="stat-number">{s.num}</p>
                <p className="text-[10px] text-[#9CA3AF] font-medium mt-1 uppercase tracking-wider whitespace-pre-line leading-tight">{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════════════
function Services() {
  const services = [
    {
      num: '01', icon: '◈', title: 'Branding &\nEstrategia',
      desc: 'Posicionamiento, naming y sistemas de identidad visual que duran décadas. Construimos marcas desde la raíz estratégica.',
      tags: ['Brand Strategy','Naming','Logo','Brand Guidelines','Packaging'],
      href: '/services#branding',
    },
    {
      num: '02', icon: '◎', title: 'Diseño Web &\nDesarrollo',
      desc: 'UX/UI, Next.js y e-commerce con Shopify. Sitios que puntúan 95+ en Lighthouse, cargan rápido y se posicionan en Google.',
      tags: ['UX/UI Figma','Next.js · React','E-commerce','SEO Técnico','Web Apps'],
      href: '/services#web',
    },
    {
      num: '03', icon: '◉', title: 'Contenido &\nMotion',
      desc: 'Copywriting estratégico, dirección de arte, animaciones de marca y video. Tu marca debe sonar tan bien como se ve.',
      tags: ['Copywriting','Dirección de Arte','Motion Branding','Video','Social Content'],
      href: '/services#content',
    },
    {
      num: '04', icon: '◆', title: 'Marketing\nDigital',
      desc: 'SEO orgánico, SEM, Meta y Google Ads. Visibilidad medible que trae tráfico cualificado y clientes reales.',
      tags: ['SEO Orgánico','Google Ads','Meta Ads','Email Marketing','Analytics'],
      href: '/services#marketing',
    },
  ]
  return (
    <section className="section-padding bg-[#F7F5F1]" id="services">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Lo que hacemos · Barcelona</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Servicios</h2>
              <p className="text-sm text-[#6B7280] max-w-sm">Estrategia, diseño, tecnología y automatización para marcas con ambición. Full-stack creativo en Barcelona.</p>
            </div>
            <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0908] transition-colors shrink-0">
              Ver todos los servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 60}>
              <Link href={s.href} className="group flex flex-col bg-white border border-[#E2DDD7] rounded-2xl p-7 card-lift h-full">
                <div className="flex items-start justify-between mb-7">
                  <span className="text-[10px] font-mono text-[#C4BFB8]">{s.num}</span>
                  <span className="text-xl text-[#D4D0CA] group-hover:text-[#0A0908] transition-colors">{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3 whitespace-pre-line leading-tight">{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.tags.map(tag => (
                    <li key={tag} className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                      <span className="w-1 h-1 rounded-full bg-[#D4D0CA]" />{tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={280}>
          <div className="mt-8 text-center">
            <Link href="/contact" className="btn-primary">
              Solicitar presupuesto · Respondemos en 24h
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// CHARIOT — Super-agente interno de RUD
// ═══════════════════════════════════════════════════════════════════
function Chariot() {
  const caps = [
    { emoji: '🧠', label: 'Análisis creativo profundo', desc: 'Estudia briefings, audita competidores, detecta tendencias de mercado y llega con contexto total antes de abrir Figma.' },
    { emoji: '⚡', label: 'Generación de contenido', desc: 'Copy, imágenes, presentaciones y assets de marca generados en minutos. Con la voz y estética exacta de cada cliente.' },
    { emoji: '🔄', label: 'Automatización de workflows', desc: 'Flujos que corren solos: informes automáticos, publicaciones programadas, actualizaciones de cliente, emails.' },
    { emoji: '🎙️', label: 'Voz & avatar clonados', desc: 'Voz sintética personalizada y avatar de video para demos, presentaciones y contenido sin cámara ni estudio.' },
    { emoji: '📊', label: 'Inteligencia de negocio', desc: 'Dashboards en tiempo real, análisis de rendimiento de campañas y alertas proactivas por proyecto.' },
    { emoji: '🔒', label: 'Local · privado · €0 de API', desc: 'Todo corre en nuestra infraestructura local con Ollama. Sin subir datos a la nube. Sin facturas mensuales de API.' },
  ]

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{background:'#06040E'}}>
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] blur-[120px] opacity-15 pointer-events-none"
        style={{background:'radial-gradient(ellipse,#7B68EE,transparent)'}} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] blur-[80px] opacity-8 pointer-events-none"
        style={{background:'radial-gradient(circle,#7B68EE44,transparent)'}} />

      <div className="container-custom relative z-10">

        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-16 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#7B68EE]/25 bg-[#7B68EE]/10">
                <span className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7B68EE]">CHARIOT — Motor interno de RUD</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.02] mb-5">
                Nuestro Jarvis.<br />
                <span className="gradient-text">IA full-stack</span><br />
                <span className="text-white/25 font-light italic text-3xl md:text-4xl">para agencia creativa.</span>
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed max-w-lg">
                CHARIOT es el super-agente de IA que impulsa todo lo que hacemos en RUD. Análisis, creación, optimización y automatización integrados en un solo sistema — 100% local, €0 de coste operativo. Así es como hacemos más en menos tiempo sin sacrificar calidad.
              </p>
            </div>

            {/* Terminal card */}
            <div className="shrink-0 w-full md:w-80 rounded-2xl overflow-hidden border border-[#7B68EE]/20 chariot-glow">
              <div className="bg-[#0D0B16] px-4 py-3 flex items-center gap-2 border-b border-[#7B68EE]/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/60" />
                </div>
                <span className="text-[10px] text-[#3D3556] ml-2 font-mono">chariot · sistema activo</span>
              </div>
              <div className="bg-[#080612] p-5 space-y-2.5 font-mono text-xs">
                {[
                  { label: 'modelo', val: 'qwen3:14b', color: '#7B68EE' },
                  { label: 'estado', val: '● activo', color: '#4ADE80' },
                  { label: 'infraestructura', val: 'local · ollama', color: '#60A5FA' },
                  { label: 'coste API', val: '€0 / mes', color: '#F59E0B' },
                  { label: 'uptime', val: '24 / 7', color: '#7B68EE' },
                  { label: 'agentes', val: '6 core + 5 spec', color: '#A78BFA' },
                ].map(row => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-[#3D3556]">{row.label}</span>
                    <span style={{color: row.color}}>{row.val}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-[#1A1525]">
                  <span className="text-[#3D3556]">{'>'} </span>
                  <span className="text-[#7B68EE]">analyzing brief.pdf</span>
                  <span className="cursor-blink text-[#7B68EE]">_</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {caps.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 55}>
              <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#7B68EE]/25 transition-all duration-300">
                <div className="text-2xl mb-4">{c.emoji}</div>
                <h3 className="font-bold text-white mb-2">{c.label}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA banner */}
        <ScrollReveal delay={360}>
          <div className="rounded-2xl border border-[#7B68EE]/15 bg-[#7B68EE]/5 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">¿Quieres CHARIOT en tu empresa?</h3>
                <p className="text-sm text-[#6B7280]">Implementamos nuestro stack de IA autónoma adaptado a tu negocio. Sin subscripciones, sin nube, sin límites.</p>
              </div>
              <Link href="/services#chariot" className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#7B68EE] text-white font-semibold rounded-full hover:bg-[#6856D4] transition-colors text-sm">
                Saber más
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// WORK / CLIENTS
// ═══════════════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding bg-[#F0EDE6]" id="work">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Clientes & proyectos reales</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trabajo que habla.</h2>
            </div>
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0908] transition-colors shrink-0">
              Ver todo el portfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* ── IDNT featured ── */}
        <ScrollReveal delay={0}>
          <Link href="/work/idnt" className="group block mb-5">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD7] card-lift">
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative overflow-hidden h-72 md:h-auto min-h-[300px]">
                  <img src="/client-idnt-hero.gif" alt="IDNT® — Moda orgánica sostenible Barcelona"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/25 rounded-full text-[10px] font-mono text-white/80">↗ idnt.es</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {['E-commerce Shopify','Branding completo','Identidad Visual','Packaging','Automatizaciones'].map(t => (
                        <span key={t} className="tag-pill">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">IDNT®</h3>
                    <p className="text-sm text-[#9CA3AF] font-medium mb-4">Moda orgánica sostenible · Barcelona</p>
                    <p className="text-base text-[#6B7280] leading-relaxed">
                      Marca de ropa orgánica y sostenible hecha en Barcelona. Desarrollamos toda su identidad visual desde cero — logo, sistema de color, tipografía, packaging, e-commerce Shopify completo y automatizaciones de marketing. Una marca con alma y coherencia en todos los touchpoints.
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0908] group-hover:gap-3 transition-all">
                    Ver proyecto completo
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* ── 2 cols: Joyería + Agencias ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <ScrollReveal delay={80}>
            <Link href="/work/aurum" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD7] card-lift h-full flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <img src="/client-jewelry-hero.jpg" alt="Aurum — Joyería artesanal Barcelona"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono text-white/60 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">Nuevo · 2025</span>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Branding Lujo','Identidad Visual','Fotografía','Web Design'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">Aurum Studio</h3>
                  <p className="text-xs text-[#9CA3AF] font-medium mb-3">Joyería artesanal · Barcelona</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-1">Identidad de lujo accesible para joyería artesanal barcelonesa. Branding, sistema visual, web y fotografía de producto que comunica artesanía premium.</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0908] group-hover:gap-3 transition-all">
                    Ver proyecto
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <Link href="/work/brandforce" className="group block h-full">
              <div className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD7] card-lift h-full flex flex-col">
                <div className="relative overflow-hidden h-64">
                  <img src="/client-agency-team.jpg" alt="BrandForce Agency — Partner creativo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 bg-[#0A0908]/60 backdrop-blur-sm rounded-full text-[10px] font-medium text-white/70 border border-white/10">White-label</span>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['White-label','Diseño Web','Desarrollo','AI Automation'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">BrandForce Agency</h3>
                  <p className="text-xs text-[#9CA3AF] font-medium mb-3">Agencia de marketing · Madrid</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-1">Partner creativo white-label para agencias de marketing que necesitan capacidad extra de diseño, desarrollo y automatización IA sin ampliar equipo fijo.</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A0908] group-hover:gap-3 transition-all">
                    Ver proyecto
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        {/* CTA "tu proyecto aquí" */}
        <ScrollReveal delay={220}>
          <div className="rounded-2xl border-2 border-dashed border-[#D1CDC6] bg-[#F8F5F0] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-[#C4BFB8] uppercase tracking-widest mb-2">Próximo en cartera</p>
              <h3 className="text-2xl font-bold text-[#A09898] mb-1">Tu marca aquí</h3>
              <p className="text-sm text-[#C4BFB8]">Abiertos a nuevos proyectos · Barcelona y remoto</p>
            </div>
            <Link href="/contact" className="shrink-0 btn-primary">Empezar conversación</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// WHY RUD
// ═══════════════════════════════════════════════════════════════════
function WhyRUD() {
  const items = [
    { icon: '◈', title: 'Estrategia antes de abrir Figma', desc: 'Analizamos mercado, competidores y audiencia antes de proponer una línea. Cada decisión visual tiene un porqué.' },
    { icon: '◎', title: 'Sin intermediarios — trato directo', desc: 'Hablas directamente con quien hace tu proyecto. Cero burocracia, cero teléfonos rotos, cero overhead de agencia grande.' },
    { icon: '◉', title: 'CHARIOT amplifica nuestra creatividad', desc: 'Nuestro agente de IA interno acelera procesos, genera variantes y optimiza resultados — sin extra de coste para el cliente.' },
    { icon: '◆', title: 'Next.js · 95+ Lighthouse', desc: 'Todo lo que construimos puntúa en performance, accesibilidad y SEO. Sin compromisos técnicos, nunca.' },
    { icon: '◇', title: 'Marcas que duran décadas', desc: 'Construimos sistemas visuales atemporales. No diseñamos para la tendencia del momento — diseñamos para los próximos 10 años.' },
    { icon: '◐', title: 'Barcelona + trabajo global', desc: 'Equipo en Barcelona, clientes en España, Europa y América. Online y presencial, según prefieras.' },
  ]
  return (
    <section className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Por qué elegirnos</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl">
            Lo que nos diferencia<br />
            <span className="italic font-light text-[#9CA3AF]">de otras agencias</span>
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2DDD7]">
          {items.map(item => (
            <div key={item.title} className="bg-[#FAFAFA] hover:bg-white p-8 transition-colors duration-200 group">
              <div className="text-2xl text-[#C4BFB8] group-hover:text-[#0A0908] mb-5 transition-colors">{item.icon}</div>
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// PRICING
// ═══════════════════════════════════════════════════════════════════
function Pricing() {
  const plans = [
    {
      name: 'Starter', price: '€2.500', desc: 'Marca básica lista para lanzar',
      features: ['Brand Strategy · 1 sesión','Logo · 3 conceptos','Sistema color & tipografía','Brand Guidelines básico','Formatos editables AI/EPS/PDF','Soporte 30 días'],
    },
    {
      name: 'Professional', price: '€7.500', desc: 'Identidad completa + web', featured: true,
      features: ['Todo en Starter','Identidad visual completa','Web diseño · 5 páginas Figma','Desarrollo Next.js incluido','SEO técnico básico','3 rondas de revisiones'],
    },
    {
      name: 'Enterprise', price: '€15.000+', desc: 'Proyecto end-to-end',
      features: ['Todo en Professional','E-commerce si aplica','Contenido & copywriting','Motion branding','AI Automation con CHARIOT','Retainer mensual opcional'],
    },
  ]
  return (
    <section className="section-padding bg-[#F7F5F1]" id="pricing">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Inversión</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Precios transparentes</h2>
            <p className="text-[#6B7280] text-sm">Precio fijo, alcance claro. Sin sorpresas ni costes ocultos.</p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`rounded-2xl p-8 flex flex-col border h-full transition-all ${plan.featured ? 'bg-[#0A0908] text-white border-[#0A0908] shadow-2xl md:-translate-y-2' : 'bg-white border-[#E2DDD7]'}`}>
                {plan.featured && <span className="inline-block mb-5 px-3 py-1 bg-white/10 text-xs font-medium rounded-full w-fit text-white/55">★ Más popular</span>}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-6 ${plan.featured ? 'text-white/40' : 'text-[#9CA3AF]'}`}>{plan.desc}</p>
                <p className="text-5xl font-bold mb-8 tracking-tight">{plan.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,.1)' : '#F0EDE6'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? 'text-white/60' : 'text-[#6B7280]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full py-3.5 text-center rounded-full text-sm font-semibold transition-opacity hover:opacity-80 block ${plan.featured ? 'bg-white text-[#0A0908]' : 'bg-[#0A0908] text-white'}`}>
                  Empezar con {plan.name}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={260}>
          <p className="text-center text-sm text-[#9CA3AF] mt-8">
            ¿Proyecto específico? <Link href="/contact" className="text-[#0A0908] font-medium underline underline-offset-2 hover:no-underline">Cuéntanos y hacemos presupuesto a medida →</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════════════
const FAQS = [
  { question: '¿Cuánto tarda un proyecto de branding completo?', answer: 'Entre 4 y 6 semanas para identidad completa. Un proyecto branding + web va de 8 a 12 semanas según complejidad. Siempre acordamos plazos concretos antes de empezar.' },
  { question: '¿Trabajáis solo con clientes en Barcelona?', answer: 'Para nada — tenemos clientes en toda España, Europa y América Latina. Todo se gestiona perfectamente en remoto. Ofrecemos reuniones presenciales en Barcelona cuando el cliente lo prefiere.' },
  { question: '¿Qué es exactamente CHARIOT?', answer: 'CHARIOT es nuestro super-agente de IA interno — no es un producto que vendemos, es la herramienta que usamos para trabajar mejor. Analiza briefings, genera variantes, automatiza tareas repetitivas y nos permite entregar más calidad en menos tiempo. Si quieres algo similar para tu empresa, hablemos.' },
  { question: '¿Cómo estructuráis los pagos?', answer: '50% al inicio para reservar el proyecto, 50% en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos. Facturamos con IVA español.' },
  { question: '¿Trabajáis con otras agencias como partners?', answer: 'Sí — trabajamos en modo white-label para agencias de marketing y publicidad que necesitan capacidad extra de diseño, desarrollo o automatización IA sin ampliar su equipo fijo. Contactadnos y hablamos términos.' },
  { question: '¿Ofrecéis mantenimiento después de la entrega?', answer: 'Sí. Ofrecemos retainers mensuales para gestión de marca, actualizaciones de web, producción de contenido y soporte. Muchos clientes prefieren trabajar con nosotros de forma continua.' },
]

function FAQ() {
  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom max-w-3xl">
        <ScrollReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Preguntas frecuentes</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}><FAQAccordion faqs={FAQS} /></ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-sm text-[#6B7280] mt-10">
            ¿Más preguntas? <Link href="/contact" className="text-[#0A0908] font-medium underline underline-offset-2 hover:no-underline">Escríbenos directamente →</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════════════
function CTA() {
  return (
    <section className="bg-[#0A0908] py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)',backgroundSize:'80px 80px'}} />
      <div className="container-custom relative">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#333] mb-5">¿Listo para empezar?</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Construyamos algo<br />
              <span className="italic font-light text-[#404040]">extraordinario juntos.</span>
            </h2>
            <p className="text-[#6B7280] text-lg mb-10 max-w-lg leading-relaxed">
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas. Basados en Barcelona, trabajamos globalmente.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0908] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors">
                Iniciar conversación
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white font-medium rounded-full hover:border-white/40 transition-colors">
                Ver trabajo
              </Link>
            </div>
            <p className="text-sm text-[#333]">
              O escríbenos a{' '}
              <a href="mailto:hello@rud.studio" className="text-white hover:underline">hello@rud.studio</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <img src="/logo-rud.svg" alt="RUD Barcelona" className="h-7 mb-5" style={{filter:'invert(1)',opacity:.85}} />
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Agencia creativa de branding, diseño web y automatización IA en Barcelona. Estrategia y tecnología para marcas con ambición.
            </p>
            <a href="mailto:hello@rud.studio" className="inline-block mt-4 text-[#3D3D3D] text-xs hover:text-white transition-colors">hello@rud.studio</a>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D] mb-5">Navegar</h4>
            <ul className="space-y-3">
              {[['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']].map(([l,h]) => (
                <li key={h}><Link href={h} className="text-sm text-[#6B7280] hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D] mb-5">Servicios</h4>
            <ul className="space-y-3">
              {[['Branding','/services#branding'],['Identidad Visual','/services#branding'],['Diseño Web','/services#web'],['E-commerce','/services#web'],['AI Automation','/services#chariot'],['Packaging','/services#branding']].map(([l,h]) => (
                <li key={l}><Link href={h} className="text-sm text-[#6B7280] hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D] mb-5">Conectar</h4>
            <ul className="space-y-3 text-sm text-[#6B7280] mb-6">
              <li><a href="mailto:hello@rud.studio" className="hover:text-white transition-colors">hello@rud.studio</a></li>
              <li>Barcelona, España</li>
              <li className="text-[#2D2D2D]">Trabajamos globalmente</li>
            </ul>
            <div className="flex gap-2">
              {[['Ig','https://instagram.com/royaluniondesign'],['Li','https://linkedin.com/company/royaluniondesign'],['Be','https://behance.net/royaluniondesign']].map(([s,h]) => (
                <a key={s} href={h} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#242424] text-[#3D3D3D] hover:text-white hover:border-[#555] transition-colors text-xs font-medium">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#2D2D2D]">© 2026 RUD Studio · Royal Union Design · Barcelona, España</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#2D2D2D] hover:text-[#6B7280] transition-colors">Privacidad</Link>
            <Link href="/terms" className="text-xs text-[#2D2D2D] hover:text-[#6B7280] transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Chariot />
      <Work />
      <WhyRUD />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
