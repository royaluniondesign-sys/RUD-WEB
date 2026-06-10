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

        {/* Badge */}
        <div className="animate-fade-in-up" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 9999, padding: '6px 16px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Aceptando proyectos · Barcelona
            </span>
          </div>
        </div>

        {/* H1 — Space Grotesk, peso y tamaño consistentes con el resto de la web */}
        <h1 className="animate-fade-in-up anim-d1" style={{ fontSize: 'clamp(2.6rem,6.5vw,5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'white', maxWidth: '16ch', marginBottom: '1.5rem' }}>
          Rótulos, branding<br />
          <span style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>y diseño web</span><br />
          en Barcelona.
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up anim-d2" style={{ fontSize: 'clamp(0.95rem,1.6vw,1.1rem)', color: 'rgba(255,255,255,0.65)', maxWidth: '48ch', lineHeight: 1.7, marginBottom: '2.25rem' }}>
          Fabricamos rótulos luminosos e instalamos señalética corporativa en Barcelona. Branding, identidad visual y diseño web de alto rendimiento — todo bajo un mismo techo.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up anim-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Link href="/contact"
            onClick={() => trackCTA('Pedir presupuesto', '/contact', 'hero')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Pedir presupuesto gratis →
          </Link>
          <Link href="/rotulos"
            onClick={() => trackCTA('Ver rótulos', '/rotulos', 'hero')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none', whiteSpace: 'nowrap', backdropFilter: 'blur(8px)' }}>
            Ver rótulos
          </Link>
        </div>

        {/* SEO anchors */}
        <nav aria-label="Tipos de rótulos" className="animate-fade-in-up anim-d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem' }}>
          {[
            ['Neón LED', '/rotulos/neon-led-barcelona'],
            ['Letras Corpóreas', '/rotulos/letras-corporeas-barcelona'],
            ['Vinilos Escaparate', '/rotulos/vinilos-escaparate-barcelona'],
            ['Cajas de Luz', '/rotulos/cajas-de-luz-barcelona'],
            ['Señalética Interior', '/rotulos/senaletica-interior-barcelona'],
          ].map(([label, href]) => (
            <Link key={label} href={href}
              style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', textDecoration: 'none', fontWeight: 500, letterSpacing: '0.04em', transition: 'color 0.2s' }}
              className="hero-service-link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════
function Marquee() {
  const items = ['Brand Strategy','Identidad Visual','Señalética & Rótulos','Diseño Web','Next.js','E-commerce Shopify','Motion Branding','Rótulos Luminosos','Copywriting','SEO Técnico','AI Automation','Vinilos Escaparates','Packaging','Fotografía','Marketing Digital']
  const doubled = [...items,...items]
  return (
    <div style={{background:'#0A0908',padding:'14px 0',overflow:'hidden',borderTop:'1px solid #181614',borderBottom:'1px solid #181614'}}>
      <div className="marquee-track" style={{display:'flex',whiteSpace:'nowrap'}}>
        {doubled.map((item, i) => (
          <span key={`marquee-${item}-${i}`} style={{display:'inline-flex',alignItems:'center',gap:'2rem',fontSize:'0.8125rem',fontWeight:500,color:'rgba(255,255,255,0.35)',flexShrink:0,marginRight:'2rem'}}>
            {item} <span style={{color:'rgba(255,255,255,0.12)',fontSize:'0.6rem'}}>◆</span>
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
    <section style={{background:'#FAFAFA',padding:'clamp(3rem,6vw,5rem) 0'}}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{gap:'1px',background:'var(--border)',borderRadius:'20px',overflow:'hidden'}}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div style={{background:'#FAFAFA',padding:'clamp(1.5rem,4vw,2.5rem)'}}>
                <p className="stat-number" style={{color:'var(--fg)',marginBottom:'0.5rem'}}>{stat.number}</p>
                <p style={{fontSize:'0.8125rem',color:'var(--muted)',fontWeight:500}}>{stat.label}</p>
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
    <section style={{ background: '#0A0908', padding: 'clamp(4rem,7vw,6rem) 0' }}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.16em', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem' }}>
                Empresa de rótulos · Barcelona
              </p>
              <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '480px' }}>
                Fabricamos e instalamos<br />
                <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>todo tipo de rótulos en BCN.</span>
              </h2>
            </div>
            <Link href="/rotulos"
              onClick={() => trackCTA('Ver todos los rótulos', '/rotulos', 'rotulos-strip')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1.5rem', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.75)', borderRadius: 9999, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Ver todos los rótulos →
            </Link>
          </div>
        </ScrollReveal>

        {/* Photo cluster — 3×2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }} className="rotulos-grid">
          {tipos.map((t, i) => (
            <ScrollReveal key={t.titulo} delay={i * 45}>
              <Link href={t.href} style={{ display: 'block', borderRadius: 12, overflow: 'hidden', position: 'relative', aspectRatio: '4/3', textDecoration: 'none' }}>
                <img src={t.img} alt={t.kw} loading={i < 3 ? 'eager' : 'lazy'}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  className="rotulo-img" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.88) 0%, rgba(10,9,8,0.2) 55%, transparent 100%)' }} />
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
// SERVICES — featured 2 + compact 2
// ═══════════════════════════════════════════════════════════
function Services() {
  const featured = [
    {
      title:'Rótulos Luminosos & Señalética',
      desc:'Fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas y vinilos de escaparate en Barcelona. Tu identidad visual en el espacio físico — con el mismo nivel de acabado que tu web.',
      tags:['Rótulos Luminosos','Neón LED','Letras Corpóreas','Vinilos Escaparate','Señalética Interior'],
      href:'/services#rotulos',
      accent: true,
    },
    {
      title:'Branding & Identidad Visual',
      desc:'Posicionamiento competitivo, naming, arquitectura de marca y sistemas de identidad visual construidos para escalar. Base para todo lo demás.',
      tags:['Brand Strategy','Naming','Logo System','Packaging','Brand Guidelines'],
      href:'/services#branding',
      accent: false,
    },
  ]
  const secondary = [
    {title:'Diseño Web & Desarrollo Next.js',desc:'UX/UI research, diseño en Figma y desarrollo en Next.js. 95+ Lighthouse, SEO técnico y Core Web Vitals en verde desde el día uno.',href:'/services#web'},
    {title:'Contenido, Motion & AI Automation',desc:'Copywriting estratégico, animaciones de marca y agentes de IA (Aura & Hermes) que automatizan tu negocio.',href:'/services#content'},
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3.5rem'}}>
            <div>
              <p className="section-label">Lo que hacemos · Barcelona</p>
              <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.5rem'}}>Servicios</h2>
              <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'380px',lineHeight:1.6}}>Estrategia, diseño, tecnología y automatización para marcas con ambición.</p>
            </div>
            <Link href="/services" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',fontSize:'0.875rem',fontWeight:500,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver los 7 servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Featured services — larger */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 55}>
              <Link href={s.href} style={{
                display:'flex',flexDirection:'column',
                background: s.accent ? '#0A0908' : 'white',
                border: s.accent ? '1px solid #1A1816' : '1px solid var(--border)',
                borderRadius:'16px',padding:'2.5rem',textDecoration:'none',height:'100%',
                position:'relative',overflow:'hidden',
              }} className="card-lift">
                {s.accent && (
                  <span style={{position:'absolute',top:'1.25rem',right:'1.25rem',fontSize:'9px',fontWeight:700,textTransform:'uppercase',letterSpacing:'.15em',color:'rgba(255,255,255,0.5)',padding:'4px 10px',borderRadius:9999,border:'1px solid rgba(255,255,255,0.12)',background:'rgba(255,255,255,0.06)'}}>
                    FABRICACIÓN PROPIA
                  </span>
                )}
                <h3 style={{fontSize:'1.375rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.25,color: s.accent ? 'white' : 'var(--fg)'}}>{s.title}</h3>
                <p style={{fontSize:'0.9375rem',color: s.accent ? 'rgba(255,255,255,0.55)' : 'var(--muted)',lineHeight:1.65,marginBottom:'1.5rem',flex:1}}>{s.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      padding:'4px 12px',borderRadius:9999,fontSize:'11px',fontWeight:500,
                      background: s.accent ? 'rgba(255,255,255,0.08)' : '#F0EDE6',
                      color: s.accent ? 'rgba(255,255,255,0.6)' : '#6B7280',
                      border: s.accent ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}>{tag}</span>
                  ))}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary services — compact */}
        <div className="grid md:grid-cols-2 gap-4">
          {secondary.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i+2) * 55}>
              <Link href={s.href} className="arrow-link card-lift" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'1.25rem 1.5rem',textDecoration:'none'}}>
                <div>
                  <h3 style={{fontSize:'1rem',fontWeight:700,color:'var(--fg)',marginBottom:'4px'}}>{s.title}</h3>
                  <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.5}}>{s.desc}</p>
                </div>
                <svg style={{flexShrink:0}} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// AURA — full section with terminal + capabilities + CTA
// ═══════════════════════════════════════════════════════════
function AuraSection() {
  return (
    <section style={{ background: '#F7F5F1', borderTop: '1px solid #E5E2DC', padding: 'clamp(2.5rem,5vw,4rem) 0' }}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <div style={{ maxWidth: '560px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', padding: '4px 12px', borderRadius: 9999, border: '1px solid rgba(191,78,48,0.2)', background: 'rgba(191,78,48,0.06)' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--chariot)', display: 'inline-block' }} className="animate-pulse" />
                <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', color: 'var(--chariot)' }}>Aura & Hermes · IA propia</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.25rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '0.75rem', color: 'var(--fg)' }}>
                Agentes de IA que trabajan mientras tú duermes.
              </h2>
              <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '460px' }}>
                Aura gestiona contenido y comunicación. Hermes, operaciones y CRM. Incluidos en todos nuestros proyectos — sin coste extra, sin que tus datos salgan de tu servidor.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', minWidth: '240px' }}>
              {['Análisis de briefings con IA', 'Generación de contenido SEO', 'Automatización de workflows', 'CRM y seguimiento de clientes'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--chariot)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{item}</span>
                </div>
              ))}
              <Link href="/services#aura" style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--chariot)', textDecoration: 'none' }}>
                Saber más sobre Aura →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK — 3 clientes reales + testimonial + tu marca aquí
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{background:'#F0EDE6'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3.5rem'}}>
            <div>
              <p className="section-label">Clientes & proyectos reales</p>
              <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em'}}>Trabajo que habla.</h2>
            </div>
            <Link href="/work" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:500,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todo el portfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* IDNT featured */}
        <ScrollReveal>
          <Link href="/work/idnt" style={{display:'block',textDecoration:'none',marginBottom:'1rem'}} className="group">
            <div style={{borderRadius:'16px',overflow:'hidden',background:'white',border:'1px solid var(--border)'}} className="card-lift">
              <div className="grid md:grid-cols-2">
                <div style={{position:'relative',minHeight:'280px',overflow:'hidden'}}>
                  <img src="/client-idnt-hero.gif" alt="IDNT® — Moda sostenible Barcelona, identidad visual y e-commerce Shopify"
                    loading="eager"
                    style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent,rgba(0,0,0,0.12))'}} />
                  <span style={{position:'absolute',top:'1rem',left:'1rem',padding:'6px 12px',background:'rgba(0,0,0,0.4)',backdropFilter:'blur(8px)',borderRadius:'9999px',fontSize:'10px',fontFamily:'monospace',color:'rgba(255,255,255,0.9)'}}>idnt.es</span>
                </div>
                <div style={{padding:'clamp(1.5rem,4vw,2.5rem)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'1.25rem'}}>
                      {['E-commerce Shopify','Branding','Identidad Visual','Packaging'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                    <h3 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:700,marginBottom:'0.5rem',color:'var(--fg)'}}>IDNT®</h3>
                    <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'1rem'}}>Moda orgánica sostenible · Barcelona</p>
                    <p style={{fontSize:'0.9rem',color:'var(--muted)',lineHeight:1.7}}>
                      Ropa orgánica y sostenible hecha en Barcelona. Desarrollamos toda la identidad visual, e-commerce Shopify, packaging y automatizaciones de marketing.
                    </p>
                  </div>
                  <div className="arrow-link" style={{marginTop:'1.5rem',display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:600,color:'var(--fg)'}}>
                    Ver caso IDNT®
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Aurum + BrandForce */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            {slug:'kopess',name:'Kopess 23',type:'Eventos & Catering · Barcelona',img:'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg',tags:['Diseño Web','WordPress','SEO','Branding'],desc:'Web, branding e identidad visual para empresa de eventos corporativos y catering premium en Barcelona.'},
            {slug:'oxyzen',name:'Oxyzen Club',type:'Club Privado Premium · Eixample, Barcelona',img:'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg',tags:['Diseño Web','WordPress/Avada','SEO','Branding'],desc:'Web premium, branding gold-dark, SEO técnico y analytics GA4 para club privado en el Eixample de Barcelona.'},
          ].map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i+1)*80}>
              <Link href={`/work/${p.slug}`} style={{display:'flex',flexDirection:'column',background:'white',borderRadius:'16px',overflow:'hidden',border:'1px solid var(--border)',textDecoration:'none',height:'100%'}} className="card-lift group">
                <div style={{height:'200px',overflow:'hidden',position:'relative'}}>
                  <img src={p.img} alt={`${p.name} — ${p.type}`}
                    loading="lazy"
                    style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.35),transparent)'}} />
                </div>
                <div style={{padding:'1.25rem',flex:1,display:'flex',flexDirection:'column'}}>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'0.75rem'}}>
                    {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 style={{fontSize:'1.1rem',fontWeight:700,marginBottom:'0.25rem',color:'var(--fg)'}}>{p.name}</h3>
                  <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'0.5rem'}}>{p.type}</p>
                  <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.6,flex:1}}>{p.desc}</p>
                  <div className="arrow-link" style={{marginTop:'1rem',fontSize:'0.8125rem',fontWeight:600,color:'var(--fg)',display:'inline-flex',alignItems:'center',gap:'8px'}}>
                    Ver caso {p.name} <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>


        {/* Tu marca aquí */}
        <ScrollReveal delay={240}>
          <div style={{border:'2px dashed #D1CDC6',borderRadius:'16px',padding:'2.5rem',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1.5rem',background:'#F8F5F0'}}>
            <div>
              <p style={{fontSize:'10px',fontWeight:500,color:'#C4BFB8',textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:'0.5rem'}}>Próximo proyecto</p>
              <h3 style={{fontSize:'1.25rem',fontWeight:700,color:'#A09898',marginBottom:'0.25rem'}}>Tu marca aquí</h3>
              <p style={{fontSize:'0.8125rem',color:'#C4BFB8'}}>Abiertos a nuevos proyectos · Barcelona y remoto</p>
            </div>
            <Link href="/contact" onClick={() => trackCTA('Empezar conversación', '/contact', 'portfolio-cta')} className="btn-primary">Empezar conversación</Link>
          </div>
        </ScrollReveal>
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
    <section className="section-padding" style={{background:'#FAFAFA'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{marginBottom:'3.5rem'}}>
            <p className="section-label">Por qué elegirnos</p>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.75rem'}}>
              Lo que nos diferencia
            </h2>
            <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'480px',lineHeight:1.65}}>
              No somos otra agencia generalista. Esto es lo que hacemos diferente.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 60}>
              <div className="card-lift" style={{background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'2rem',height:'100%',display:'flex',flexDirection:'column'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'var(--warm)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--fg)',marginBottom:'1.25rem',flexShrink:0}}>
                  {item.icon}
                </div>
                <p style={{fontWeight:700,fontSize:'1.0625rem',marginBottom:'0.625rem',letterSpacing:'-0.01em',color:'var(--fg)'}}>{item.title}</p>
                <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.65,flex:1}}>{item.desc}</p>
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
    {name:'Starter',desc:'Branding base: estrategia, logo, identidad y guidelines.',ideal:'Startups y proyectos nuevos',delivery:'4–6 semanas'},
    {name:'Professional',desc:'Identidad completa + diseño web Next.js con SEO técnico.',ideal:'Marcas en crecimiento',delivery:'8–12 semanas',featured:true},
    {name:'Enterprise',desc:'Proyecto end-to-end: identidad, web, e-commerce, contenido y automatización IA.',ideal:'Transformación completa',delivery:'10–16 semanas'},
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{marginBottom:'3.5rem'}}>
            <p className="section-label">Inversión</p>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.75rem'}}>Cada proyecto es único</h2>
            <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'500px',lineHeight:1.65}}>Presupuestos a medida según lo que necesites. Alcance claro, timeline definido, sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1.25rem',maxWidth:'1040px'}}>
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 80}>
              <div style={{
                borderRadius:'16px',
                padding:'2.25rem',
                display:'flex',
                flexDirection:'column',
                height:'100%',
                background: tier.featured ? '#0A0908' : 'white',
                border: tier.featured ? '1px solid #0A0908' : '1px solid var(--border)',
                boxShadow: tier.featured ? '0 24px 64px rgba(0,0,0,0.12)' : 'none',
              }}>
                {tier.featured && (
                  <span style={{display:'inline-block',marginBottom:'1rem',padding:'5px 14px',background:'rgba(255,255,255,0.1)',borderRadius:'9999px',fontSize:'10px',fontWeight:600,color:'rgba(255,255,255,0.6)',width:'fit-content'}}>
                    Más solicitado
                  </span>
                )}
                <p style={{fontSize:'1.375rem',fontWeight:700,marginBottom:'0.75rem',color: tier.featured ? 'white' : 'var(--fg)'}}>{tier.name}</p>
                <p style={{fontSize:'0.875rem',color: tier.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)',lineHeight:1.65,marginBottom:'1.5rem',flex:1}}>{tier.desc}</p>
                <div style={{paddingTop:'1.25rem',borderTop: tier.featured ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border)'}}>
                  <p style={{fontSize:'0.75rem',color: tier.featured ? 'rgba(255,255,255,0.35)' : '#C4BFB8',marginBottom:'0.25rem'}}>Ideal para: {tier.ideal}</p>
                  <p style={{fontSize:'0.75rem',color: tier.featured ? 'rgba(255,255,255,0.35)' : '#C4BFB8'}}>Entrega: {tier.delivery}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <div style={{marginTop:'3rem'}}>
            <Link href="/contact" onClick={() => trackCTA('Solicitar presupuesto personalizado', '/contact', 'services-section')} className="btn-primary arrow-link">
              Solicitar presupuesto personalizado
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <p style={{fontSize:'0.8125rem',color:'#9CA3AF',marginTop:'1rem'}}>
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
    <section className="section-padding" style={{background:'var(--warm)'}}>
      <div className="container-custom">
        <div style={{maxWidth:'720px'}}>
          <ScrollReveal>
            <p className="section-label">FAQ</p>
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
    <section style={{background:'#F7F5F1',padding:'clamp(3.5rem,7vw,5.5rem) 0',borderTop:'1px solid #E5E0D8'}}>
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
              <Link href={p.href} style={{display:'flex',flexDirection:'column',gap:8,padding:'1.25rem',background:'#fff',borderRadius:12,border:'1px solid #E5E0D8',textDecoration:'none',transition:'border-color 0.2s'}} className="card-lift">
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
    <section style={{background:'#0A0908',padding:'clamp(5rem,10vw,8rem) 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative'}}>
        <ScrollReveal>
          <div style={{maxWidth:'750px'}}>
            <p className="section-label" style={{color:'#333'}}>¿Listo?</p>
            <h2 style={{fontSize:'clamp(2.2rem,5.5vw,4.5rem)',fontWeight:700,color:'white',letterSpacing:'-0.035em',lineHeight:1.05,marginBottom:'1.5rem'}}>
              Construyamos algo<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#404040'}}>extraordinario juntos.</span>
            </h2>
            <p style={{color:'#6B7280',fontSize:'clamp(0.95rem,2vw,1.15rem)',marginBottom:'2.5rem',maxWidth:'500px',lineHeight:1.7}}>
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas. Basados en Barcelona, trabajamos globalmente.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginBottom:'1.5rem'}}>
              <Link href="/contact" onClick={() => trackCTA('Iniciar conversación', '/contact', 'bottom-cta')} className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',background:'white',color:'#0A0908',borderRadius:'9999px',fontWeight:600,textDecoration:'none',fontSize:'0.9375rem',transition:'opacity 0.2s'}}>
                Iniciar conversación
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/work" onClick={() => trackCTA('Ver trabajo', '/work', 'bottom-cta')} style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',border:'1px solid rgba(255,255,255,0.15)',color:'white',borderRadius:'9999px',fontWeight:500,textDecoration:'none',fontSize:'0.9375rem',transition:'border-color 0.2s'}}>
                Ver trabajo
              </Link>
            </div>
            <p style={{fontSize:'0.875rem',color:'#333'}}>
              O escríbenos a <a href="mailto:hello@royaluniondesign.com" onClick={() => trackEmailClick('hello@royaluniondesign.com', 'bottom-cta')} style={{color:'white',textDecoration:'none'}}>hello@royaluniondesign.com</a>
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
      <Stats />
      <Services />
      <AuraSection />
      <Work />
      <WhyRUD />
      <Investment />
      <FAQ />
      <BlogHighlights />
      <CTA />
      <Footer />
    </main>
  )
}
