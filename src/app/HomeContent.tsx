'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { trackCTA, trackEmailClick, trackSocialClick } from '@/lib/analytics'

// ═══════════════════════════════════════════════════════════
// HOOK — text-mask reveal para secciones con scroll
// Observa todos los .rg del DOM y añade .in a sus .rl hijos
// ═══════════════════════════════════════════════════════════
function useScrollTextReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          const lines = entry.target.querySelectorAll<HTMLElement>('.rl')
          lines.forEach((line, i) => setTimeout(() => line.classList.add('in'), i * 110))
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rg').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ═══════════════════════════════════════════════════════════
// FLOATING MENU — frosted pill con asteriscos giratorios
// ═══════════════════════════════════════════════════════════
function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const cwRef  = useRef<SVGSVGElement>(null)
  const ccwRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        if (cwRef.current)  cwRef.current.style.transform = `rotate(${y * 0.09}deg)`
        if (ccwRef.current) ccwRef.current.style.transform = `rotate(${-y * 0.09}deg)`
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const STAR_PATH = 'M12 2 L13.6 7.4 L19.2 4.8 L16.6 10.4 L22 12 L16.6 13.6 L19.2 19.2 L13.6 16.6 L12 22 L10.4 16.6 L4.8 19.2 L7.4 13.6 L2 12 L7.4 10.4 L4.8 4.8 L10.4 7.4 Z'

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 48,
            background: 'rgba(241,240,238,0.97)',
            backdropFilter: 'blur(12px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.05rem',
          }}
        >
          {([
            ['TRABAJO',   '/work'],
            ['SERVICIOS', '/services'],
            ['RÓTULOS',   '/rotulos'],
            ['NOSOTROS',  '/about'],
            ['CONTACTO',  '/contact'],
          ] as const).map(([label, href], i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="display"
              style={{
                fontSize: 'clamp(3.2rem, 9.5vw, 7.5rem)',
                color: 'var(--fg)',
                textDecoration: 'none',
                lineHeight: 1,
                display: 'block',
                animation: `menuIn 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms both`,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <nav
        aria-label="Menú principal"
        style={{
          position: 'fixed', bottom: 30, left: '50%',
          transform: 'translateX(-50%)', zIndex: 50,
          width: 280, height: 48, borderRadius: 32,
          overflow: 'hidden', display: 'flex',
          alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(191,191,191,0.45)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderRadius: 32,
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 3, padding: '0 18px' }}>
          <svg ref={cwRef}  viewBox="0 0 24 24" style={{ width: 17, height: 17, fill: 'var(--fg)', display: 'block', willChange: 'transform', transformOrigin: 'center' }} aria-hidden="true"><path d={STAR_PATH}/></svg>
          <svg ref={ccwRef} viewBox="0 0 24 24" style={{ width: 17, height: 17, fill: 'var(--fg)', display: 'block', willChange: 'transform', transformOrigin: 'center' }} aria-hidden="true"><path d={STAR_PATH}/></svg>
        </div>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{
            position: 'relative', zIndex: 1,
            padding: '0 22px', background: 'none', border: 'none',
            fontFamily: "'PP Neue Montreal Mono', 'Space Mono', monospace",
            fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--fg)',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          {open ? '✕ CERRAR' : 'MENU'}
        </button>
      </nav>
    </>
  )
}

// ═══════════════════════════════════════════════════════════
// HERO — text-mask slide-up al cargar
// ═══════════════════════════════════════════════════════════
function Hero() {
  useEffect(() => {
    const lines = document.querySelectorAll<HTMLElement>('.hero-rl')
    lines.forEach((line, i) => setTimeout(() => line.classList.add('in'), 160 + i * 125))
  }, [])

  return (
    <section style={{
      position: 'relative', minHeight: '100svh',
      background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: '1.5rem', left: 'clamp(1rem, 5vw, 2.5rem)', zIndex: 10 }}>
        <img src="/logo-rud-web.svg" alt="RUD Studio" style={{ height: 22, opacity: 0.85 }} />
      </div>

      <div style={{ position: 'absolute', top: '1.5rem', right: 'clamp(1rem, 5vw, 2.5rem)', zIndex: 10 }}>
        <div className="mono-label" style={{ color: 'var(--muted)', textAlign: 'right', lineHeight: 1.9 }}>
          <div>ESTADO</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
            EN TALLER
          </div>
          <div>CERDANYOLA DEL VALLÈS</div>
        </div>
      </div>

      <div className="container-custom" style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(5rem, 14vw, 9rem)',
        paddingTop: '6rem',
      }}>
        <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
          RUD STUDIO — TALLER DE RÓTULOS &amp; ESTUDIO CREATIVO, BARCELONA
        </p>

        <h1 style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="text-mask"><span className="rl hero-rl display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>RÓTULOS</span></div>
          <div className="text-mask"><span className="rl hero-rl display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>Y BRANDING</span></div>
          <div className="text-mask"><span className="rl hero-rl display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span></div>
        </h1>

        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: '1.5rem',
          paddingTop: '1.5rem', borderTop: '1px solid var(--border)',
        }}>
          <div className="mono-label" style={{ color: 'var(--muted)' }}>
            Servicios: Rótulos Luminosos, Branding, Web &amp; E-commerce<br />
            actualmente: EN ACTIVO · BCN
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" onClick={() => trackCTA('Pedir presupuesto', '/contact', 'hero')}
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}>
              PEDIR PRESUPUESTO →
            </Link>
            <Link href="/rotulos" onClick={() => trackCTA('Ver rotulos', '/rotulos', 'hero')}
              className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              VER RÓTULOS
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════
function Marquee() {
  const items = ['NEÓN LED','ACERO INOX','ALUMINIO','VINILO DE CORTE','METACRILATO','LED','TERMOFORMADO','IMPRESIÓN UV','CORTE LÁSER','LETRAS CORPÓREAS','CAJAS DE LUZ','SEÑALÉTICA','VINILOS','PUBLICIDAD EXTERIOR']
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'var(--bg)', padding: '12px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={`m-${item}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)', flexShrink: 0, marginRight: '2.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK PROJECTS — duties.xyz image grid (65/35 y 32/68)
// ═══════════════════════════════════════════════════════════
const PROJECT_ROWS = [
  {
    layout: 'wide',
    left:  { slug: 'sante',  img: '/trabajos/sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg',                               client: 'SANTÉ',      scope: 'Neón LED · Caja de Luz' },
    right: { slug: 'lumina', img: '/trabajos/clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg',  client: 'LUMINA',     scope: 'Letras Corpóreas · Halo LED' },
  },
  {
    layout: 'narrow',
    left:  { slug: 'novae', img: '/trabajos/novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg',             client: 'NOVAE',      scope: 'Vinilos Corporativos' },
    right: { slug: 'idnt',  img: '/client-idnt-hero.gif',                                                                     client: 'IDNT®',      scope: 'E-commerce Shopify · Branding' },
  },
  {
    layout: 'wide',
    left:  { slug: 'kopess', img: 'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg',                client: 'KOPESS 23',  scope: 'WordPress · SEO' },
    right: { slug: 'oxyzen', img: 'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg', client: 'OXYZEN CLUB', scope: 'Web · Branding Gold' },
  },
]

function WorkProjects() {
  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="container-custom" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
        {PROJECT_ROWS.map((row, ri) => (
          <div key={ri} className="project-row">
            <div className={`project-images ${row.layout}`}>
              <Link href={`/work/${row.left.slug}`} className="img-cell" aria-label={`Ver proyecto ${row.left.client}`}>
                <img src={row.left.img} alt={row.left.client} loading={ri === 0 ? 'eager' : 'lazy'} />
                <span className="vp-btn">VER PROYECTO →</span>
              </Link>
              <Link href={`/work/${row.right.slug}`} className="img-cell" aria-label={`Ver proyecto ${row.right.client}`}>
                <img src={row.right.img} alt={row.right.client} loading="lazy" />
                <span className="vp-btn">VER PROYECTO →</span>
              </Link>
            </div>
            <div className="project-label">
              <span className="p-name">{row.left.client} · {row.right.client}</span>
              <span className="p-scope">
                <span className="p-dot" />
                {row.left.scope} · {row.right.scope}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="explore-wrap">
        <Link href="/work" className="explore-link" onClick={() => trackCTA('Ver todo el trabajo', '/work', 'explore-all')}>
          ( VER TODO EL TRABAJO )
        </Link>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// OVERVIEW — 3 columnas: label | texto+heading | imagen
// ═══════════════════════════════════════════════════════════
const OV_ITEMS = [
  {
    tag:  'QUÉ HACEMOS',
    title: ['FABRICAMOS RÓTULOS', 'Y CONSTRUIMOS MARCAS'],
    body: 'Taller propio en Cerdanyola del Vallès. Fabricamos neón LED, letras corpóreas, cajas de luz y señalética. Branding completo y webs que convierten.',
    img:  '/services/hero-rotulos.jpg',
    alt:  'Taller de rótulos RUD Studio Barcelona',
  },
  {
    tag:  'CÓMO AYUDA',
    title: ['TU MARCA VISIBLE', '24H EN LA CALLE'],
    body: 'Un rótulo bien hecho no es un gasto — es el comercial que trabaja mientras duermes. Precisión de fabricación + identidad coherente.',
    img:  '/trabajos/sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg',
    alt:  'Rótulo neón LED Santé Café & Brunch Barcelona',
  },
  {
    tag:  'PARA QUIÉN',
    title: ['COMERCIOS, HOSTELERÍA', 'Y EMPRESAS EN BCN'],
    body: 'Retail, restaurantes, oficinas, clínicas, franquicias. Si tienes local o necesitas hacer visible tu marca en Barcelona, somos tu equipo.',
    img:  '/trabajos/novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg',
    alt:  'Señalética corporativa Novae Consulting Barcelona',
  },
  {
    tag:  'CUÁNDO EMPEZAR',
    title: ['PRESUPUESTO EN 24H,', 'VISITA TÉCNICA GRATIS'],
    body: 'Contacta hoy. Menos de 24h para tener presupuesto detallado. Visita técnica para medir y asesorarte sin coste ni compromiso.',
    img:  '/trabajos/clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg',
    alt:  'Letras corpóreas Clínica Lumina Estética Barcelona',
  },
]

function Overview() {
  return (
    <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom" style={{ paddingTop: 'clamp(3rem,6vw,5rem)', paddingBottom: 'clamp(1rem,2vw,2rem)' }}>
        <ScrollReveal>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Resumen</p>
          <h2 className="rg display" style={{ fontSize: 'clamp(3rem,7vw,8rem)', color: 'var(--fg)', lineHeight: 0.87 }}>
            <div className="text-mask"><span className="rl">POR QUÉ</span></div>
            <div className="text-mask"><span className="rl" style={{ opacity: 0.28 }}>TRABAJAR CON NOSOTROS</span></div>
          </h2>
        </ScrollReveal>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginTop: 'clamp(2rem,4vw,3.5rem)' }}>
        {OV_ITEMS.map((item) => (
          <div key={item.tag} className="ov-item rg">
            <div className="ov-label-col mono-label">
              <span className="rl" style={{ color: 'var(--muted)' }}>{item.tag}</span>
            </div>
            <div className="ov-content-col">
              <div>
                {item.title.map((line, i) => (
                  <div key={i} className="text-mask">
                    <h3 className={`rl ov-heading-text${i > 0 ? ' rl-d' + i : ''}`}>{line}</h3>
                  </div>
                ))}
              </div>
              <p className="ov-body">{item.body}</p>
            </div>
            <div className="ov-img-col">
              <img src={item.img} alt={item.alt} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// ROTULOS STRIP — lista de servicios con links SEO
// ═══════════════════════════════════════════════════════════
function RotulosStrip() {
  const tipos = [
    { titulo: 'NEÓN LED',            scope: 'Escaparates, Hostelería, Retail, Bajo consumo',       href: '/rotulos/neon-led-barcelona' },
    { titulo: 'LETRAS CORPÓREAS',    scope: 'Fachadas, Acero inox, Aluminio, Retroiluminado',      href: '/rotulos/letras-corporeas-barcelona' },
    { titulo: 'CAJAS DE LUZ',        scope: 'LED, Metacrilato, Tela tensada, Visibilidad 24h',     href: '/rotulos/cajas-de-luz-barcelona' },
    { titulo: 'VINILOS ESCAPARATE',  scope: 'Corte, Impreso, Microperforado, Instalación express', href: '/rotulos/vinilos-escaparate-barcelona' },
    { titulo: 'SEÑALÉTICA',          scope: 'Oficinas, Hoteles, Comercios, Marca corporativa',     href: '/rotulos/senaletica-interior-barcelona' },
    { titulo: 'PUBLICIDAD EXTERIOR', scope: 'Banderolas, Tótems, Fachadas, Intemperie',            href: '/rotulos/publicidad-exterior-barcelona' },
  ]

  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(4rem,7vw,6rem) 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>Empresa de rótulos · Barcelona</p>
              <h2 className="display" style={{ fontSize: 'clamp(3.5rem,9vw,10rem)', color: 'var(--fg)' }}>
                RÓTULOS<br /><em>LUMINOSOS</em>
              </h2>
            </div>
            <Link href="/rotulos" onClick={() => trackCTA('Ver todos los rotulos', '/rotulos', 'rotulos-strip')}
              className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
              Ver todos →
            </Link>
          </div>
        </ScrollReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {tipos.map((t, i) => (
            <ScrollReveal key={t.titulo} delay={i * 50}>
              <Link href={t.href} className="service-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.75rem 0', borderBottom: '1px solid var(--border)',
                textDecoration: 'none', gap: '2rem',
              }}>
                <div>
                  <h3 className="display" style={{ fontSize: 'clamp(2rem,5.5vw,6.5rem)', color: 'var(--fg)', margin: 0, lineHeight: 1 }}>{t.titulo}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{t.scope}</p>
                </div>
                <svg className="svc-arrow" style={{ opacity: 0.2, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>Visita técnica gratuita · Presupuesto en 24h · Taller propio BCN</p>
            <Link href="/contact" onClick={() => trackCTA('Pedir presupuesto rotulo', '/contact', 'rotulos-strip-bottom')}
              className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// SERVICES
// ═══════════════════════════════════════════════════════════
function Services() {
  const items = [
    { title: 'RÓTULOS LUMINOSOS & SEÑALÉTICA', scope: 'NEÓN LED · LETRAS CORPÓREAS · VINILOS · CAJAS DE LUZ', href: '/services#rotulos' },
    { title: 'BRANDING & IDENTIDAD VISUAL',    scope: 'Estrategia de Marca · Naming · Sistema de Logo · Manual de Marca', href: '/services#branding' },
    { title: 'WEB & E-COMMERCE',               scope: 'Next.js · Shopify · SEO · Core Web Vitals',           href: '/services#web' },
    { title: 'MOTION, CONTENIDO & IA',         scope: 'Copywriting · Motion · Automatización IA',            href: '/services#content' },
  ]
  return (
    <section className="section-padding" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)' }}>SERVICIOS</h2>
            <Link href="/services" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Ver todos →</Link>
          </div>
        </ScrollReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {items.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 55}>
              <Link href={s.href} className="service-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '2rem 0', borderBottom: '1px solid var(--border)',
                textDecoration: 'none', gap: '2rem',
              }}>
                <div>
                  <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)', color: 'var(--fg)', margin: 0 }}>{s.title}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{s.scope}</p>
                </div>
                <svg className="svc-arrow" style={{ opacity: 0.25, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { number: '+8',  label: 'Años fabricando en BCN' },
    { number: '24h', label: 'Presupuesto sin compromiso' },
    { number: '0€',  label: 'Visita técnica gratuita' },
    { number: 'BCN', label: 'Taller propio en Barcelona' },
  ]
  return (
    <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <p className="stat-number" style={{ color: 'var(--fg)', marginBottom: '0.5rem' }}>{stat.number}</p>
                <p className="mono-label" style={{ color: 'var(--muted)' }}>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════
function CTA() {
  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <ScrollReveal>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Taller propio · Cerdanyola del Vallès · BCN
          </p>
          <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
            FABRICAMOS<br />TU RÓTULO<br /><em>EN BARCELONA</em>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <a href="https://wa.me/34645593227"
              onClick={() => trackCTA('WhatsApp CTA', 'whatsapp', 'bottom-cta')}
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              +34 645 593 227 →
            </a>
            <Link href="/contact" onClick={() => trackCTA('Pedir presupuesto', '/contact', 'bottom-cta')}
              className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              Pedir presupuesto
            </Link>
            <a href="mailto:hello@royaluniondesign.com"
              onClick={() => trackEmailClick('hello@royaluniondesign.com', 'bottom-cta')}
              className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              hello@royaluniondesign.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FOOTER + WORDMARK
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <>
      <footer style={{ background: 'var(--fg)', borderTop: '1px solid #2A2A2A', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div>
              <img src="/logo-rud-web-blanco.svg" alt="RUD Studio" style={{ height: '26px', marginBottom: '1.25rem', opacity: 0.85 }} loading="lazy" />
              <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.7, maxWidth: '220px' }}>
                Agencia creativa de branding, diseño web y automatización IA en Barcelona.
              </p>
              <a href="mailto:hello@royaluniondesign.com" className="footer-link"
                style={{ display: 'inline-block', marginTop: '1rem', color: '#3D3D3D', fontSize: '0.75rem', textDecoration: 'none' }}>
                hello@royaluniondesign.com
              </a>
            </div>

            {([
              { title: 'Navegar',   links: [['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']] as [string,string][] },
              { title: 'Rótulos',   links: [['Neón LED Barcelona','/rotulos/neon-led-barcelona'],['Letras Corpóreas','/rotulos/letras-corporeas-barcelona'],['Vinilos Escaparate','/rotulos/vinilos-escaparate-barcelona'],['Cajas de Luz','/rotulos/cajas-de-luz-barcelona'],['Señalética Interior','/rotulos/senaletica-interior-barcelona'],['Publicidad Exterior','/rotulos/publicidad-exterior-barcelona']] as [string,string][] },
              { title: 'Servicios', links: [['Branding','/services#branding'],['Identidad Visual','/services#identity'],['Diseño Web','/services#web'],['E-commerce','/services#ecommerce'],['Automatización IA · Aura','/services#aura']] as [string,string][] },
              { title: 'Contacto',  links: [['hello@royaluniondesign.com','mailto:hello@royaluniondesign.com'],['Barcelona, España','#'],['Instagram','https://instagram.com/royaluniondesign'],['LinkedIn','https://linkedin.com/company/royaluniondesign']] as [string,string][] },
            ]).map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#3D3D3D', marginBottom: '1.25rem' }}>{col.title}</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      {href.startsWith('/') ? (
                        <Link href={href} className="footer-link" style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}>{label}</Link>
                      ) : (
                        <a href={href} className="footer-link"
                          style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}
                          onClick={() => { if (href.startsWith('http')) trackSocialClick(label.toLowerCase()); else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:',''),'footer') }}
                          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid #1A1A1A', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <p style={{ fontSize: '11px', color: '#2D2D2D' }}>© 2026 RUD Studio · Royal Union Design · Barcelona, España</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {([['Privacidad','/privacy'],['Términos','/terms']] as [string,string][]).map(([l,h]) => (
                <Link key={l} href={h} style={{ fontSize: '11px', color: '#2D2D2D', textDecoration: 'none' }}>{l}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Big wordmark — purely decorative */}
      <div className="footer-wordmark" aria-hidden="true">
        <span className="footer-wordmark-text">RUD STUDIO</span>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════
// ROOT
// ═══════════════════════════════════════════════════════════
export default function HomeContent() {
  useScrollTextReveal()

  return (
    <main id="main-content">
      <Hero />
      <Marquee />
      <WorkProjects />
      <Overview />
      <RotulosStrip />
      <Services />
      <Stats />
      <CTA />
      <Footer />
      <FloatingMenu />
    </main>
  )
}
