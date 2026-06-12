'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { trackCTA, trackEmailClick, trackSocialClick } from '@/lib/analytics'

// ═══════════════════════════════════════════════════════════
// LINE REVEAL — duties.xyz style slide-up text animation
// ═══════════════════════════════════════════════════════════
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

interface LineRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

function LineReveal({ children, delay = 0, className = '', style = {} }: LineRevealProps) {
  const { ref, visible } = useReveal()
  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={className}
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          opacity: visible ? 1 : 0,
          transition: `transform 0.72s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s ease ${delay}ms`,
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  )
}

function BlockReveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal(0.1)
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        opacity: visible ? 1 : 0,
        transition: `transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.55s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// FLOATING MENU — duties-style fixed bottom pill
// ═══════════════════════════════════════════════════════════
function FloatingMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 48,
            background: 'rgba(241,240,238,0.96)',
            backdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.1rem',
          }}
        >
          {[
            ['TRABAJO', '/work'],
            ['SERVICIOS', '/services'],
            ['ROTULOS', '/rotulos'],
            ['NOSOTROS', '/about'],
            ['CONTACTO', '/contact'],
          ].map(([label, href], i) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="display"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                color: 'var(--fg)',
                textDecoration: 'none',
                lineHeight: 1,
                display: 'block',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `menuIn 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms forwards`,
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(v => !v)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 50,
          background: open ? 'transparent' : 'var(--fg)',
          color: open ? 'var(--fg)' : 'var(--bg)',
          border: open ? '1px solid var(--fg)' : 'none',
          borderRadius: '9999px',
          padding: '0.65rem 1.75rem',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          fontFamily: "'PP Neue Montreal Mono', 'Space Mono', monospace",
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        {open ? '✕ CERRAR' : '✺ MENU ✺'}
      </button>
    </>
  )
}

// ═══════════════════════════════════════════════════════════
// HERO — duties-style: cream bg, dark condensed text, no video
// ═══════════════════════════════════════════════════════════
function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>

      {/* Top-left logo */}
      <div style={{ position: 'absolute', top: '1.5rem', left: 'clamp(1rem, 5vw, 2.5rem)', zIndex: 10 }}>
        <img src="/logo-rud-web.svg" alt="RUD Studio" style={{ height: 22, opacity: 0.85 }} />
      </div>

      {/* Top-right status */}
      <div style={{ position: 'absolute', top: '1.5rem', right: 'clamp(1rem, 5vw, 2.5rem)', zIndex: 10 }}>
        <div className="mono-label" style={{ color: 'var(--muted)', textAlign: 'right', lineHeight: 1.9 }}>
          <div>ESTADO</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
            EN TALLER
          </div>
          <div>CERDANYOLA DEL VALLES</div>
        </div>
      </div>

      {/* Main — pushed to bottom */}
      <div className="container-custom" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(5rem, 14vw, 9rem)',
        paddingTop: '6rem',
      }}>

        <div style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
          <p className="mono-label animate-fade-in-up" style={{ color: 'var(--muted)' }}>
            RUD STUDIO — TALLER DE ROTULOS & ESTUDIO CREATIVO, BARCELONA
          </p>
        </div>

        {/* H1 — three lines, each with its own reveal */}
        <h1 className="display animate-fade-in-up anim-d1" style={{
          fontSize: 'clamp(5rem, 21vw, 26rem)',
          color: 'var(--fg)',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          lineHeight: 0.85,
        }}>
          ROTULOS<br />
          Y BRANDING<br />
          <em>BARCELONA</em>
        </h1>

        {/* Bottom row */}
        <div className="animate-fade-in-up anim-d2" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
        }}>
          <div className="mono-label" style={{ color: 'var(--muted)' }}>
            Scope (Rotulos Luminosos, Branding, Web &amp; E-commerce)<br />
            currently: ON-DUTY · BCN
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              onClick={() => trackCTA('Pedir presupuesto', '/contact', 'hero')}
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: '2px' }}
            >
              PEDIR PRESUPUESTO →
            </Link>
            <Link
              href="/rotulos"
              onClick={() => trackCTA('Ver rotulos', '/rotulos', 'hero')}
              className="mono-label"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
            >
              VER ROTULOS
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
  const items = ['NEON LED','ACERO INOX','ALUMINIO','VINILO DE CORTE','METACRILATO','POLICARBONATO','LED','TERMOFORMADO','IMPRESION UV','CORTE LASER','LETRAS CORPOREAS','CAJAS DE LUZ','SENALETICA','VINILOS','PUBLICIDAD EXTERIOR']
  const doubled = [...items, ...items]
  return (
    <div style={{ background: 'var(--warm)', padding: '12px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={`marquee-${item}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', fontSize: '0.75rem', fontWeight: 500, color: 'var(--muted)', flexShrink: 0, marginRight: '2.5rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// ROTULOS — duties-style vertical list
// ═══════════════════════════════════════════════════════════
function RotulosStrip() {
  const tipos = [
    { titulo: 'NEON LED',            scope: 'Escaparates, Hosteleria, Retail, Bajo consumo',       href: '/rotulos/neon-led-barcelona' },
    { titulo: 'LETRAS CORPOREAS',    scope: 'Fachadas, Acero inox, Aluminio, Retroiluminado',      href: '/rotulos/letras-corporeas-barcelona' },
    { titulo: 'CAJAS DE LUZ',        scope: 'LED, Metacrilato, Tela tensada, Visibilidad 24h',     href: '/rotulos/cajas-de-luz-barcelona' },
    { titulo: 'VINILOS ESCAPARATE',  scope: 'Corte, Impreso, Microperforado, Instalacion express', href: '/rotulos/vinilos-escaparate-barcelona' },
    { titulo: 'SENALETICA',          scope: 'Oficinas, Hoteles, Comercios, Marca corporativa',     href: '/rotulos/senaletica-interior-barcelona' },
    { titulo: 'PUBLICIDAD EXTERIOR', scope: 'Banderolas, Totems, Fachadas, Intemperie',            href: '/rotulos/publicidad-exterior-barcelona' },
  ]

  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(4rem,7vw,6rem) 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">

        <BlockReveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <LineReveal delay={0}>
              <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>Empresa de rotulos · Barcelona</p>
            </LineReveal>
            <div style={{ overflow: 'hidden' }}>
              <h2 className="display" style={{ fontSize: 'clamp(3.5rem,9vw,10rem)', color: 'var(--fg)' }}>
                ROTULOS<br /><em>LUMINOSOS</em>
              </h2>
            </div>
          </div>
          <Link href="/rotulos" onClick={() => trackCTA('Ver todos los rotulos', '/rotulos', 'rotulos-strip')}
            className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
            Ver todos →
          </Link>
        </BlockReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {tipos.map((t, i) => (
            <BlockReveal key={t.titulo} delay={i * 55}>
              <Link href={t.href} className="service-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.75rem 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none', gap: '2rem',
              }}>
                <div>
                  <h3 className="display" style={{ fontSize: 'clamp(2rem,5.5vw,6.5rem)', color: 'var(--fg)', margin: 0, lineHeight: 1 }}>{t.titulo}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>SCOPE ({t.scope})</p>
                </div>
                <svg className="svc-arrow" style={{ opacity: 0.2, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </BlockReveal>
          ))}
        </div>

        <BlockReveal delay={200}>
          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>Visita tecnica gratuita · Presupuesto en 24h · Taller propio BCN</p>
            <Link href="/contact" onClick={() => trackCTA('Pedir presupuesto rotulo', '/contact', 'rotulos-strip-bottom')}
              className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </Link>
          </div>
        </BlockReveal>

      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// SERVICES — typographic rows, duties-style
// ═══════════════════════════════════════════════════════════
function Services() {
  const items = [
    { title: 'ROTULOS LUMINOSOS & SENALETICA', scope: 'NEON LED · LETRAS CORPOREAS · VINILOS · CAJAS DE LUZ', href: '/services#rotulos' },
    { title: 'BRANDING & IDENTIDAD VISUAL',    scope: 'Brand Strategy · Naming · Logo System · Guidelines',  href: '/services#branding' },
    { title: 'WEB & E-COMMERCE',               scope: 'Next.js · Shopify · SEO · Core Web Vitals',           href: '/services#web' },
    { title: 'MOTION, CONTENIDO & AI',         scope: 'Copywriting · Motion · Automatizacion IA',            href: '/services#content' },
  ]
  return (
    <section className="section-padding" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <BlockReveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)' }}>SERVICIOS</h2>
          </div>
          <Link href="/services" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Ver todos →
          </Link>
        </BlockReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {items.map((s, i) => (
            <BlockReveal key={s.title} delay={i * 55}>
              <Link href={s.href} className="service-row" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '2rem 0',
                borderBottom: '1px solid var(--border)',
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
            </BlockReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// OVERVIEW — duties.xyz style: WHAT WE DO / HOW IT HELPS etc
// ═══════════════════════════════════════════════════════════
function Overview() {
  const items = [
    {
      tag: 'QUE HACEMOS',
      title: 'FABRICAMOS ROTULOS Y CONSTRUIMOS MARCAS',
      body: 'Taller propio de rotulacion en Cerdanyola del Valles. Fabricamos neon LED, letras corporeas, cajas de luz y senaletica. Tambien hacemos branding completo y webs que convierten.',
    },
    {
      tag: 'COMO AYUDA',
      title: 'TU MARCA VISIBLE 24H EN LA CALLE',
      body: 'Un rotulo bien hecho no es un gasto — es el comercial que trabaja mientras duermes. Combinamos fabricacion de precision con identidad de marca para que tu negocio destaque.',
    },
    {
      tag: 'PARA QUIEN',
      title: 'COMERCIOS, HOSTELERICA Y EMPRESAS EN BCN',
      body: 'Hosteleria, retail, oficinas corporativas, franquicias. Si tienes un local o necesitas hacer visible tu marca en Barcelona, somos tu equipo.',
    },
    {
      tag: 'CUANDO EMPEZAR',
      title: 'PRESUPUESTO EN 24H, VISITA TECNICA GRATIS',
      body: 'Contacta hoy. En menos de 24h tienes presupuesto detallado. Si necesitas visita tecnica para medir y asesorarte, la hacemos sin coste ni compromiso.',
    },
  ]

  return (
    <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
      <div className="container-custom">

        <BlockReveal style={{ marginBottom: '3.5rem' }}>
          <LineReveal delay={0}>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>Overview</p>
          </LineReveal>
          <div style={{ overflow: 'hidden' }}>
            <h2 className="display" style={{ fontSize: 'clamp(3rem,7vw,8rem)', color: 'var(--fg)' }}>
              POR QUE<br /><em>TRABAJAR CON NOSOTROS</em>
            </h2>
          </div>
        </BlockReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {items.map((item, i) => (
            <BlockReveal key={item.tag} delay={i * 70}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px, 22%, 200px) 1fr',
                gap: 'clamp(1rem,3vw,3rem)',
                padding: '2.25rem 0',
                borderBottom: '1px solid var(--border)',
                alignItems: 'start',
              }}>
                <p className="mono-label" style={{ color: 'var(--muted)', paddingTop: '0.25rem' }}>{item.tag}</p>
                <div>
                  <h3 className="display" style={{ fontSize: 'clamp(1.25rem,2.8vw,3.5rem)', color: 'var(--fg)', marginBottom: '0.85rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '52ch', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            </BlockReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK — duties-style horizontal rows with image
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <BlockReveal style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div style={{ overflow: 'hidden' }}>
            <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)' }}>TRABAJO</h2>
          </div>
          <Link href="/work" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Ver todo →
          </Link>
        </BlockReveal>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { name: 'IDNT®',       type: 'Moda sostenible · Barcelona',      scope: 'E-commerce Shopify · Branding · Identidad Visual', img: '/client-idnt-hero.gif', href: '/work/idnt' },
            { name: 'KOPESS 23',   type: 'Eventos & Catering · Barcelona',   scope: 'Diseno Web · WordPress · SEO', img: 'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg', href: '/work/kopess' },
            { name: 'OXYZEN CLUB', type: 'Club Privado Premium · Eixample',  scope: 'WordPress/Avada · Branding · SEO', img: 'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg', href: '/work/oxyzen' },
          ].map((p, i) => (
            <BlockReveal key={p.name} delay={i * 60}>
              <Link href={p.href} className="work-row" style={{
                display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center',
                gap: 'clamp(1rem,3vw,2.5rem)', padding: '2rem 0',
                borderBottom: '1px solid var(--border)', textDecoration: 'none',
              }}>
                <div>
                  <h3 className="display work-row-name" style={{ fontSize: 'clamp(1.5rem,3.5vw,4.5rem)', color: 'var(--fg)', margin: 0 }}>{p.name}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{p.scope}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                  <img src={p.img} alt="" aria-hidden="true" loading="lazy" className="work-row-img"
                    style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 8, opacity: 0.55, flexShrink: 0 }} />
                  <svg className="work-row-arrow" style={{ opacity: 0.25, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </BlockReveal>
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
    { number: '+8',  label: 'Anos fabricando en BCN' },
    { number: '24h', label: 'Presupuesto sin compromiso' },
    { number: '0€',  label: 'Visita tecnica gratuita' },
    { number: 'BCN', label: 'Taller propio en Barcelona' },
  ]
  return (
    <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <BlockReveal key={stat.label} delay={i * 80}>
              <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <p className="stat-number" style={{ color: 'var(--fg)', marginBottom: '0.5rem' }}>{stat.number}</p>
                <p className="mono-label" style={{ color: 'var(--muted)' }}>{stat.label}</p>
              </div>
            </BlockReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CTA — duties-style light
// ═══════════════════════════════════════════════════════════
function CTA() {
  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
      <div className="container-custom">
        <BlockReveal>
          <LineReveal delay={0}>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Taller propio · Cerdanyola del Valles · BCN
            </p>
          </LineReveal>
          <div style={{ overflow: 'hidden', marginBottom: '3rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)' }}>
              FABRICAMOS<br />
              TU ROTULO<br />
              <em>EN BARCELONA</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
            <a
              href="https://wa.me/34645593227"
              onClick={() => trackCTA('WhatsApp CTA', 'whatsapp', 'bottom-cta')}
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}
            >
              +34 645 593 227 →
            </a>
            <Link
              href="/contact"
              onClick={() => trackCTA('Pedir presupuesto', '/contact', 'bottom-cta')}
              className="mono-label"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
            >
              Pedir presupuesto
            </Link>
            <a
              href="mailto:hello@royaluniondesign.com"
              onClick={() => trackEmailClick('hello@royaluniondesign.com', 'bottom-cta')}
              className="mono-label"
              style={{ color: 'var(--muted)', textDecoration: 'none' }}
            >
              hello@royaluniondesign.com
            </a>
          </div>
        </BlockReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{ background: 'var(--fg)', borderTop: '1px solid #2A2A2A', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <img src="/logo-rud-web-blanco.svg" alt="RUD Studio" style={{ height: '26px', marginBottom: '1.25rem', opacity: 0.85 }} loading="lazy" />
            <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.7, maxWidth: '220px' }}>
              Agencia creativa de branding, diseno web y automatizacion IA en Barcelona.
            </p>
            <a href="mailto:hello@royaluniondesign.com" className="footer-link" style={{ display: 'inline-block', marginTop: '1rem', color: '#3D3D3D', fontSize: '0.75rem', textDecoration: 'none' }}>hello@royaluniondesign.com</a>
          </div>

          {[
            { title: 'Navegar', links: [['Trabajo', '/work'], ['Servicios', '/services'], ['Nosotros', '/about'], ['Precios', '/pricing'], ['Blog', '/blog'], ['Contacto', '/contact']] },
            { title: 'Rotulos', links: [['Neon LED Barcelona', '/rotulos/neon-led-barcelona'], ['Letras Corporeas', '/rotulos/letras-corporeas-barcelona'], ['Vinilos Escaparate', '/rotulos/vinilos-escaparate-barcelona'], ['Cajas de Luz', '/rotulos/cajas-de-luz-barcelona'], ['Senaletica Interior', '/rotulos/senaletica-interior-barcelona'], ['Publicidad Exterior', '/rotulos/publicidad-exterior-barcelona']] },
            { title: 'Servicios', links: [['Branding', '/services#branding'], ['Identidad Visual', '/services#identity'], ['Diseno Web', '/services#web'], ['E-commerce', '/services#ecommerce'], ['AI Automation · Aura', '/services#aura']] },
            { title: 'Contacto', links: [['hello@royaluniondesign.com', 'mailto:hello@royaluniondesign.com'], ['Barcelona, Espana', '#'], ['Instagram', 'https://instagram.com/royaluniondesign'], ['LinkedIn', 'https://linkedin.com/company/royaluniondesign']] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#3D3D3D', marginBottom: '1.25rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link href={href} className="footer-link" style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}>{label}</Link>
                    ) : (
                      <a href={href} className="footer-link" style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}
                        onClick={() => { if (href.startsWith('http')) trackSocialClick(label.toLowerCase()); else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:', ''), 'footer') }}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid #1A1A1A', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '11px', color: '#2D2D2D' }}>© 2026 RUD Studio · Royal Union Design · Barcelona, Espana</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['Privacidad', '/privacy'], ['Terminos', '/terms']].map(([l, h]) => (
              <Link key={l} href={h} style={{ fontSize: '11px', color: '#2D2D2D', textDecoration: 'none' }}>{l}</Link>
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
      <Hero />
      <Marquee />
      <RotulosStrip />
      <Services />
      <Overview />
      <Work />
      <Stats />
      <CTA />
      <Footer />
      <FloatingMenu />
    </main>
  )
}
