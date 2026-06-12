'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import { useEffect, useRef } from 'react'
import { trackCTA, trackEmailClick, trackSocialClick } from '@/lib/analytics'

// ═══════════════════════════════════════════════════════════
// HERO — video background, Space Grotesk (web font system)
// ═══════════════════════════════════════════════════════════
const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4'

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = () => {
      const v = videoRef.current
      if (!v || v.src) return
      v.src = VIDEO_SRC
      v.load()
      v.play().catch(() => {})
      v.addEventListener('canplay', () => {
        v.style.opacity = '1'
        if (overlayRef.current) overlayRef.current.style.opacity = '0'
      }, { once: true })
    }
    if (document.readyState === 'complete') {
      load()
    } else {
      window.addEventListener('load', load, { once: true })
    }
  }, [])

  return (
    <section style={{ position: 'relative', height: '100svh', minHeight: 640, display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#0A0908' }}>

      {/* Poster — LCP, se ve inmediatamente */}
      <img
        src="/hero-bg.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />

      {/* Video — fade in cuando está listo */}
      <video
        ref={videoRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0, transition: 'opacity 1.2s ease' }}
        autoPlay loop muted playsInline preload="none"
      />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to top, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.45) 50%, rgba(10,9,8,0.2) 100%)' }} />

      {/* Poster fade-out overlay (se oculta cuando el vídeo carga) */}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'transparent', transition: 'opacity 0.8s ease', pointerEvents: 'none' }} />

      {/* Content */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 10, paddingBottom: 'clamp(3rem,10vw,7rem)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

        {/* H1 — Barlow Condensed, duties-scale */}
        <h1 className="animate-fade-in-up display" style={{ fontSize: 'clamp(5rem,12vw,14rem)', color: 'white', maxWidth: '12ch', marginBottom: '2rem' }}>
          <span className="text-neon">Rótulos</span><br />
          y branding<br />
          <em style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Barlow Condensed, sans-serif' }}>en Barcelona.</em>
        </h1>

        {/* Duties-style meta block — mono, small, dashes */}
        <div className="animate-fade-in-up anim-d2 mono-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '2.5rem' }}>
          RUD STUDIO — (TALLER DE RÓTULOS Y ESTUDIO CREATIVO)<br/>
          FABRICAMOS:<br/>
          — Neón LED · Letras corpóreas · Cajas de luz<br/>
          — Vinilos · Señalética · Publicidad exterior<br/>
          taller: CERDANYOLA DEL VALLÈS · BCN
        </div>

        {/* CTAs — minimal, flat */}
        <div className="animate-fade-in-up anim-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Link href="/contact"
            onClick={() => trackCTA('Pedir presupuesto', '/contact', 'hero')}
            className="hero-cta-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', background: 'white', color: '#0A0908', borderRadius: 4, fontWeight: 700, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Pedir presupuesto
          </Link>
          <Link href="/rotulos"
            onClick={() => trackCTA('Ver rótulos', '/rotulos', 'hero')}
            className="hero-cta-secondary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', border: '1px solid rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.75)', borderRadius: 4, fontWeight: 500, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Ver rótulos
          </Link>
        </div>

      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════
function Marquee() {
  const items = ['Neón LED','Acero inoxidable','Aluminio','Vinilo de corte','Metacrilato','Policarbonato','Retroiluminación LED','Termoformado','Impresión UV','Corte láser','Letras corpóreas','Cajas de luz','Señalética de marca','Vinilos escaparate','Publicidad exterior']
  const doubled = [...items,...items]
  return (
    <div className="dark-grain" style={{background:'#0A0908',padding:'14px 0',overflow:'hidden',borderTop:'1px solid #181614',borderBottom:'1px solid #181614'}}>
      <div className="marquee-track" style={{display:'flex',whiteSpace:'nowrap'}}>
        {doubled.map((item, i) => (
          <span key={`marquee-${item}-${i}`} style={{display:'inline-flex',alignItems:'center',gap:'2.5rem',fontSize:'0.8125rem',fontWeight:500,color:'rgba(255,255,255,0.32)',flexShrink:0,marginRight:'2.5rem'}}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// STATS — 4 bold stats
// ═══════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { number: '+8', label: 'Años fabricando en BCN' },
    { number: '24h', label: 'Presupuesto sin compromiso' },
    { number: '0€', label: 'Visita técnica gratuita' },
    { number: 'BCN', label: 'Taller propio en Barcelona' },
  ]
  return (
    <section style={{background:'#FFFFFF', borderTop:'1px solid var(--border)', padding:'clamp(3rem,6vw,5rem) 0'}}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div style={{padding:'clamp(1.5rem,4vw,2.5rem)', borderRight: i < 3 ? '1px solid var(--border)' : 'none'}}>
                <p className="stat-number" style={{color:'var(--fg)',marginBottom:'0.5rem'}}>{stat.number}</p>
                <p style={{fontSize:'0.8125rem',color:'var(--muted)',fontWeight:500,lineHeight:1.4}}>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// RÓTULOS STRIP — tipos + keywords semánticas + CTA
// ═══════════════════════════════════════════════════════════
function RotulosStrip() {
  const tipos = [
    {
      titulo: 'Neón LED',
      kw: 'Rótulos neón LED Barcelona',
      desc: 'Neón flexible LED personalizado. Perfecto para escaparates, hostelería y locales comerciales. Bajo consumo, alta durabilidad.',
      img: '/services/neon-interior.avif',
      href: '/rotulos/neon-led-barcelona',
    },
    {
      titulo: 'Letras Corpóreas',
      kw: 'Letras corpóreas Barcelona',
      desc: 'Letras en volumen de acero, aluminio o poliestireno con o sin iluminación interior. Presencia máxima en fachada.',
      img: '/services/letras-corporeas.avif',
      href: '/rotulos/letras-corporeas-barcelona',
    },
    {
      titulo: 'Cajas de Luz',
      kw: 'Rótulos luminosos Barcelona',
      desc: 'Cajas de luz LED con frente en vinilo, metacrilato o tela tensada. Visibilidad 24h con consumo mínimo.',
      img: '/services/rotulos-luminosos.avif',
      href: '/rotulos/cajas-de-luz-barcelona',
    },
    {
      titulo: 'Vinilos Escaparate',
      kw: 'Vinilos escaparate Barcelona',
      desc: 'Vinilos de corte, impresos y microperforados para escaparates y cristaleras. Instalación el mismo día.',
      img: '/services/vinilo-escaparate.avif',
      href: '/rotulos/vinilos-escaparate-barcelona',
    },
    {
      titulo: 'Señalética Interior',
      kw: 'Señalética corporativa Barcelona',
      desc: 'Directorios, balizas, señales de evacuación y señalética de marca para oficinas, hoteles y comercios.',
      img: '/services/senaletica-interior.avif',
      href: '/rotulos/senaletica-interior-barcelona',
    },
    {
      titulo: 'Publicidad Exterior',
      kw: 'Publicidad exterior Barcelona',
      desc: 'Banderolas, lamas, tótems y fachadas completas. Materiales adaptados a la intemperie y normativa local.',
      img: '/services/publicidad-exterior.avif',
      href: '/rotulos/publicidad-exterior-barcelona',
    },
  ]

  return (
    <section className="dark-grain" style={{ background: '#0A0908', padding: 'clamp(4rem,7vw,6rem) 0' }}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', color: 'rgba(255,255,255,0.38)', marginBottom: '0.75rem' }}>
                Empresa de rótulos · Barcelona
              </p>
              <h2 className="display" style={{ fontSize: 'clamp(3.5rem,8vw,9rem)', color: 'white' }}>
                <span className="text-neon">Rótulos</span><br />
                <em style={{ color: 'rgba(255,255,255,0.42)', fontFamily: 'Barlow Condensed, sans-serif' }}>luminosos.</em>
              </h2>
            </div>
            <Link href="/rotulos"
              onClick={() => trackCTA('Ver todos los rótulos', '/rotulos', 'rotulos-strip')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', borderRadius: 9999, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Ver todos los rótulos →
            </Link>
          </div>
        </ScrollReveal>

        {/* Photo cluster — bento grid, Neón LED as hero */}
        <div style={{ gap: 8 }} className="rotulos-bento">
          {tipos.map((t, i) => (
            <ScrollReveal key={t.titulo} delay={i * 45}>
              <Link href={t.href} style={{ borderRadius: 12, overflow: 'hidden', position: 'relative', textDecoration: 'none' }}>
                <img src={t.img} alt={t.kw} loading={i < 3 ? 'eager' : 'lazy'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  className="rotulo-img" />
                <div className="rotulo-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.2) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.125rem' }}>
                  <p style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{t.kw}</p>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'white', letterSpacing: '-0.01em', lineHeight: 1.2 }}>{t.titulo}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', padding: 'clamp(1.25rem,3vw,1.75rem)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', maxWidth: '420px', lineHeight: 1.6 }}>
              Visita técnica gratuita en Barcelona. Mándanos las medidas y el espacio — presupuesto en menos de 24h.
            </p>
            <Link href="/contact"
              onClick={() => trackCTA('Pedir presupuesto rótulo', '/contact', 'rotulos-strip-bottom')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Pedir presupuesto de rótulo →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// SERVICES — typographic list, no cards
// ═══════════════════════════════════════════════════════════
function Services() {
  const items = [
    {
      num: '01',
      title: 'Rótulos Luminosos & Señalética',
      tags: ['Neón LED', 'Letras Corpóreas', 'Vinilos', 'Cajas de Luz'],
      href: '/services#rotulos',
    },
    {
      num: '02',
      title: 'Branding & Identidad Visual',
      tags: ['Brand Strategy', 'Naming', 'Logo System', 'Guidelines'],
      href: '/services#branding',
    },
    {
      num: '03',
      title: 'Diseño Web & E-commerce',
      tags: ['Next.js', 'Shopify', 'SEO', 'Core Web Vitals'],
      href: '/services#web',
    },
    {
      num: '04',
      title: 'Contenido, Motion & AI',
      tags: ['Copywriting', 'Motion', 'Automatización IA'],
      href: '/services#content',
    },
  ]
  return (
    <section className="section-padding dark-grain" style={{background:'#0A0908'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'2.5rem',flexWrap:'wrap',gap:'1rem'}}>
            <h2 className="display" style={{fontSize:'clamp(3.5rem,8vw,9rem)',color:'white'}}>Servicios</h2>
            <Link href="/services" style={{fontSize:'0.8125rem',fontWeight:500,color:'rgba(255,255,255,0.38)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todos →
            </Link>
          </div>
        </ScrollReveal>

        <div style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
          {items.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 55}>
              <Link href={s.href} className="service-row" style={{
                display:'flex',alignItems:'center',justifyContent:'space-between',
                padding:'1.75rem 0',
                borderBottom:'1px solid rgba(255,255,255,0.08)',
                textDecoration:'none',gap:'2rem',
              }}>
                <h3 style={{fontSize:'clamp(1.35rem,3.2vw,2.5rem)',fontWeight:700,letterSpacing:'-0.03em',color:'white',lineHeight:1.1,margin:0}}>{s.title}</h3>
                <svg className="svc-arrow" style={{opacity:0.3,flexShrink:0}} width="20" height="20" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


// ═══════════════════════════════════════════════════════════
// WORK — 3 clientes reales + testimonial + tu marca aquí
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{background:'var(--bg)', borderTop:'1px solid var(--border)'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'2.5rem'}}>
            <h2 className="display" style={{fontSize:'clamp(3.5rem,8vw,9rem)',color:'var(--fg)'}}>Trabajo</h2>
            <Link href="/work" className="mono-label arrow-link" style={{color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todo →
            </Link>
          </div>
        </ScrollReveal>

        <div style={{borderTop:'1px solid var(--border)'}}>
          {[
            {num:'01',name:'IDNT®',type:'Moda sostenible · Barcelona',tags:['E-commerce Shopify','Branding','Identidad Visual'],img:'/client-idnt-hero.gif',href:'/work/idnt'},
            {num:'02',name:'Kopess 23',type:'Eventos & Catering · Barcelona',tags:['Diseño Web','WordPress','SEO'],img:'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg',href:'/work/kopess'},
            {num:'03',name:'Oxyzen Club',type:'Club Privado Premium · Eixample',tags:['WordPress/Avada','Branding','SEO'],img:'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg',href:'/work/oxyzen'},
          ].map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 60}>
              <Link href={p.href} className="work-row" style={{
                display:'grid',gridTemplateColumns:'1fr auto',alignItems:'center',
                gap:'clamp(1rem,3vw,2.5rem)',padding:'1.75rem 0',
                borderBottom:'1px solid var(--border)',textDecoration:'none',
              }}>
                <div>
                  <h3 className="work-row-name" style={{fontSize:'clamp(1.35rem,3.2vw,2.5rem)',fontWeight:700,letterSpacing:'-0.03em',color:'var(--fg)',lineHeight:1.1,margin:0}}>{p.name}</h3>
                  <p style={{fontSize:'0.75rem',color:'var(--muted)',marginTop:'0.375rem'}}>{p.type}</p>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'1rem',flexShrink:0}}>
                  <img src={p.img} alt="" aria-hidden="true" loading="lazy" className="work-row-img"
                    style={{width:52,height:52,objectFit:'cover',borderRadius:8,opacity:0.55,flexShrink:0}} />
                  <svg className="work-row-arrow" style={{opacity:0.25,flexShrink:0}} width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#0A0908" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WHY RUD — 6 cards con iconos
// ═══════════════════════════════════════════════════════════
function WhyRUD() {
  const items = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      title:'Estrategia antes de diseño',
      desc:'Investigamos mercado, competidores y audiencia antes de abrir Figma. Cada decisión visual tiene un porqué estratégico.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      title:'Trato directo, sin capas',
      desc:'Hablas con quien diseña y desarrolla tu proyecto. Sin intermediarios, sin gestores, sin teléfonos rotos.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title:'IA integrada en cada proyecto',
      desc:'AURA analiza, genera y automatiza sin coste extra para ti. Entregas más rápidas y con más calidad.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title:'Full-stack bajo un techo',
      desc:'Branding, web, e-commerce, contenido y automatización. Un equipo, una visión, cero fricción entre proveedores.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      title:'SEO y rendimiento de serie',
      desc:'Lighthouse 95+, Core Web Vitals en verde, schema.org, meta tags — cada web sale optimizada para Google desde el día uno.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
      title:'Partners a largo plazo',
      desc:'No desaparecemos tras la entrega. Iteramos, optimizamos y escalamos tu marca contigo. Retainers flexibles.',
    },
  ]
  return (
    <section className="section-padding dark-grain" style={{background:'#0A0908'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{marginBottom:'3rem'}}>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.5rem',color:'white'}}>
              Lo que nos diferencia
            </h2>
            <p style={{fontSize:'0.9375rem',color:'rgba(255,255,255,0.35)',maxWidth:'480px',lineHeight:1.65}}>
              No somos otra agencia generalista.
            </p>
          </div>
        </ScrollReveal>
        <div>
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 50}>
              <div style={{borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', padding:'1.75rem 0'}}>
                <p style={{fontWeight:700,fontSize:'1.0625rem',marginBottom:'0.5rem',letterSpacing:'-0.01em',color:'white'}}>{item.title}</p>
                <p style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.38)',lineHeight:1.65}}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// INVESTMENT — sutil, sin precios públicos (como agencia premium)
// ═══════════════════════════════════════════════════════════
function Investment() {
  const tiers = [
    {name:'Identidad',desc:'Branding base: estrategia, logo, identidad y guidelines.',ideal:'Proyectos nuevos',delivery:'4–6 semanas'},
    {name:'Identidad + Web',desc:'Identidad completa + diseño web Next.js con SEO técnico.',ideal:'Marcas en crecimiento',delivery:'8–12 semanas',featured:true},
    {name:'Proyecto completo',desc:'Identidad, web, e-commerce, contenido y automatización. Todo bajo un techo.',ideal:'Transformación completa',delivery:'10–16 semanas'},
  ]
  return (
    <section className="section-padding" style={{background:'#FFFFFF', borderTop:'1px solid var(--border)'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{marginBottom:'3.5rem'}}>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.75rem'}}>Cada proyecto es único</h2>
            <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'500px',lineHeight:1.65}}>Presupuestos a medida según lo que necesites. Alcance claro, timeline definido, sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div style={{borderTop:'1px solid var(--border)'}}>
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 80}>
              <div className="investment-row" style={{borderBottom:'1px solid var(--border)'}}>
                <div>
                  <p style={{fontSize:'1.25rem',fontWeight:700,letterSpacing:'-0.02em',color:'var(--fg)',marginBottom: tier.featured ? '0.375rem' : 0}}>{tier.name}</p>
                  {tier.featured && (
                    <span style={{fontSize:'9px',fontWeight:700,textTransform:'uppercase',letterSpacing:'.14em',color:'#BF4E30'}}>Más solicitado</span>
                  )}
                </div>
                <div>
                  <p style={{fontSize:'0.9375rem',color:'var(--muted)',lineHeight:1.65,marginBottom:'0.375rem'}}>{tier.desc}</p>
                  <p style={{fontSize:'0.75rem',color:'#C4BFB8'}}>Entrega: {tier.delivery} · Para: {tier.ideal}</p>
                </div>
                <Link href="/contact" onClick={() => trackCTA(`Solicitar ${tier.name}`, '/contact', 'investment')}
                  style={{display:'inline-flex',alignItems:'center',gap:6,padding:'0.625rem 1.375rem',border:'1px solid var(--border)',borderRadius:9999,fontSize:'0.8125rem',fontWeight:600,color:'var(--fg)',textDecoration:'none',whiteSpace:'nowrap',flexShrink:0,transition:'border-color 0.2s'}}>
                  Solicitar →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <div style={{marginTop:'2.5rem'}}>
            <p style={{fontSize:'0.8125rem',color:'#9CA3AF'}}>
              Respondemos en menos de 24h · <Link href="/pricing" style={{color:'var(--fg)',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>Ver precios orientativos</Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════
function FAQ() {
  const faqs = [
    { question: '¿Cuánto tarda un proyecto típico?', answer: 'Depende del alcance: un Starter son 4-6 semanas, un Professional 8-12 semanas, y un Enterprise 10-16 semanas. Siempre definimos timeline antes de empezar.' },
    { question: '¿Trabajáis solo en Barcelona?', answer: 'Estamos basados en Barcelona pero trabajamos con clientes de toda España y Europa. Las reuniones pueden ser presenciales o remotas.' },
    { question: '¿Los precios incluyen IVA?', answer: 'Los precios indicados no incluyen IVA (21%). El importe final con IVA se detalla claramente en el presupuesto antes de cualquier compromiso.' },
    { question: '¿Puedo personalizar un paquete?', answer: 'Sí. Todos los paquetes son puntos de partida. Adaptamos el alcance, los entregables y el precio a tus necesidades y objetivos específicos.' },
    { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha, 50% restante en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos a lo largo del proyecto.' },
    { question: '¿Qué pasa después de la entrega?', answer: 'Todos los paquetes incluyen soporte post-entrega. Además ofrecemos retainers mensuales para mantenimiento, optimización y crecimiento continuo.' },
  ]

  return (
    <section className="section-padding" style={{background:'#F5F5F5'}}>
      <div className="container-custom">
        <div style={{maxWidth:'720px'}}>
          <ScrollReveal>
            <h2 style={{fontSize:'clamp(1.6rem,4vw,2.5rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'2.5rem'}}>Preguntas frecuentes</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════
function BlogHighlights() {
  const posts = [
    { href: '/blog/rotulos-luminosos-barcelona-precio-tipos-instalacion', category: 'Rótulos', title: 'Rótulos luminosos en Barcelona: tipos, precios y cómo elegir', date: 'Mayo 2026' },
    { href: '/blog/neon-led-barcelona-precio-instalacion', category: 'Rótulos', title: 'Neón LED en Barcelona: precio, instalación y cómo elegir el tuyo', date: 'Mayo 2026' },
    { href: '/blog/nextjs-vs-wordpress-2026', category: 'Web', title: 'Next.js vs. WordPress en 2026: cuándo usar cada uno', date: 'Enero 2026' },
  ]
  return (
    <section style={{background:'#FFFFFF',padding:'clamp(3.5rem,7vw,5.5rem) 0',borderTop:'1px solid var(--border)'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:'clamp(1.5rem,3vw,2rem)'}}>
            <h2 style={{fontSize:'clamp(1.2rem,2.5vw,1.6rem)',fontWeight:700,letterSpacing:'-0.03em',margin:0}}>Del blog</h2>
            <Link href="/blog" style={{fontSize:13,fontWeight:600,color:'var(--muted)',textDecoration:'none'}}>Ver todos →</Link>
          </div>
        </ScrollReveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'1rem'}}>
          {posts.map((p, i) => (
            <ScrollReveal key={p.href} delay={i * 60}>
              <Link href={p.href} style={{display:'flex',flexDirection:'column',gap:8,padding:'1.25rem',background:'#fff',borderRadius:12,border:'1px solid var(--border)',textDecoration:'none',transition:'border-color 0.2s'}} className="card-lift">
                <span style={{fontSize:10,fontWeight:700,textTransform:'uppercase',letterSpacing:'.12em',color:'#BF4E30'}}>{p.category}</span>
                <p style={{fontSize:14,fontWeight:600,color:'#0A0908',lineHeight:1.4,flex:1,margin:0}}>{p.title}</p>
                <span style={{fontSize:11,color:'#C4BFB8'}}>{p.date}</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="dark-grain" style={{background:'#0A0908',padding:'clamp(5rem,10vw,8rem) 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative'}}>
        <ScrollReveal>
          <div style={{maxWidth:'750px'}}>
            <h2 className="display" style={{fontSize:'clamp(4rem,10vw,11rem)',color:'white',marginBottom:'2rem'}}>
              ¿Necesitas<br />un rótulo<br /><em style={{color:'rgba(255,255,255,0.4)',fontFamily:'Barlow Condensed,sans-serif'}}>en Barcelona?</em>
            </h2>
            <p style={{color:'rgba(255,255,255,0.5)',fontSize:'clamp(0.95rem,2vw,1.15rem)',marginBottom:'2.5rem',maxWidth:'460px',lineHeight:1.7}}>
              Taller propio en Cerdanyola del Vallès. Visita técnica gratuita. Presupuesto en 24h.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginBottom:'1.5rem'}}>
              <a href="https://wa.me/34645593227" onClick={() => trackCTA('WhatsApp CTA', 'whatsapp', 'bottom-cta')} style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',background:'white',color:'#0A0908',borderRadius:'9999px',fontWeight:700,textDecoration:'none',fontSize:'0.9375rem'}}>
                +34 645 593 227
              </a>
              <Link href="/contact" onClick={() => trackCTA('Pedir presupuesto', '/contact', 'bottom-cta')} style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',border:'1px solid rgba(255,255,255,0.15)',color:'white',borderRadius:'9999px',fontWeight:500,textDecoration:'none',fontSize:'0.9375rem'}}>
                Pedir presupuesto
              </Link>
            </div>
            <p style={{fontSize:'0.875rem',color:'rgba(255,255,255,0.4)'}}>
              <a href="mailto:hello@royaluniondesign.com" onClick={() => trackEmailClick('hello@royaluniondesign.com', 'bottom-cta')} style={{color:'rgba(255,255,255,0.75)',textDecoration:'none'}}>hello@royaluniondesign.com</a>
              {' '}· Carrer Sant Salvador 11, Local 6 · Cerdanyola del Vallès
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{background:'#0D0D0D',borderTop:'1px solid #1A1A1A',paddingTop:'4rem',paddingBottom:'2rem'}}>
      <div className="container-custom">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'2.5rem',marginBottom:'3rem'}}>
          <div>
            <img src="/logo-rud-web-blanco.svg" alt="RUD Studio — Agencia creativa Barcelona" style={{height:'26px',marginBottom:'1.25rem',opacity:0.85}} loading="lazy" />
            <p style={{color:'#6B7280',fontSize:'0.8125rem',lineHeight:1.7,maxWidth:'220px'}}>
              Agencia creativa de branding, diseño web y automatización IA en Barcelona.
            </p>
            <a href="mailto:hello@royaluniondesign.com" className="footer-link" style={{display:'inline-block',marginTop:'1rem',color:'#3D3D3D',fontSize:'0.75rem',textDecoration:'none'}}>hello@royaluniondesign.com</a>
          </div>

          {[
            {title:'Navegar',links:[['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']]},
            {title:'Rótulos',links:[['Neón LED Barcelona','/rotulos/neon-led-barcelona'],['Letras Corpóreas','/rotulos/letras-corporeas-barcelona'],['Vinilos Escaparate','/rotulos/vinilos-escaparate-barcelona'],['Cajas de Luz','/rotulos/cajas-de-luz-barcelona'],['Señalética Interior','/rotulos/senaletica-interior-barcelona'],['Publicidad Exterior','/rotulos/publicidad-exterior-barcelona']]},
            {title:'Servicios',links:[['Branding','/services#branding'],['Identidad Visual','/services#identity'],['Diseño Web','/services#web'],['E-commerce','/services#ecommerce'],['AI Automation · Aura','/services#aura']]},
            {title:'Contacto',links:[['hello@royaluniondesign.com','mailto:hello@royaluniondesign.com'],['Barcelona, España','#'],['Instagram','https://instagram.com/royaluniondesign'],['LinkedIn','https://linkedin.com/company/royaluniondesign']]},
          ].map(col => (
            <div key={col.title}>
              <h4 style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#3D3D3D',marginBottom:'1.25rem'}}>{col.title}</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link href={href} className="footer-link" style={{fontSize:'0.8125rem',color:'#6B7280',textDecoration:'none',transition:'color 0.2s'}}>{label}</Link>
                    ) : (
                      <a href={href} className="footer-link" style={{fontSize:'0.8125rem',color:'#6B7280',textDecoration:'none',transition:'color 0.2s'}} onClick={() => { if (href.startsWith('http')) trackSocialClick(label.toLowerCase()); else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:',''), 'footer') }} {...(href.startsWith('http') ? {target:'_blank',rel:'noopener noreferrer'} : {})}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{paddingTop:'2rem',borderTop:'1px solid #1A1A1A',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
          <p style={{fontSize:'11px',color:'#2D2D2D'}}>© 2026 RUD Studio · Royal Union Design · Barcelona, España</p>
          <div style={{display:'flex',gap:'1.5rem'}}>
            {[['Privacidad','/privacy'],['Términos','/terms']].map(([l,h])=>(
              <Link key={l} href={h} style={{fontSize:'11px',color:'#2D2D2D',textDecoration:'none'}}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════
// ROOT EXPORT
// ═══════════════════════════════════════════════════════════
export default function HomeContent() {
  return (
    <main id="main-content">
      <Navbar light />
      <Hero />
      <Marquee />
      <RotulosStrip />
      <Services />
      <Work />
      <CTA />
      <Footer />
    </main>
  )
}
