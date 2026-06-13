import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Servicios · Rótulos, Branding y Diseño Web Barcelona | RUD Studio',
  description: 'Rótulos luminosos, neón LED, letras corpóreas, branding, diseño web Next.js y automatización IA en Barcelona. Fabricación propia. Presupuesto en 24h.',
  keywords: 'rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, branding Barcelona, agencia diseño web Barcelona, e-commerce Shopify Barcelona, señalética corporativa Barcelona, automatización IA Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/services' },
  openGraph: {
    title: 'Servicios · Rótulos, Branding y Diseño Web Barcelona | RUD Studio',
    description: 'Rótulos luminosos, neón LED, letras corpóreas, branding y diseño web en Barcelona. Fabricación propia. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com/services',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios | RUD Studio Barcelona',
    description: 'Rótulos luminosos, branding y diseño web en Barcelona. Fabricación propia. Presupuesto en 24h.',
    images: ['https://royaluniondesign.com/og-image.png'],
  },
}

const ROTULOS_ROWS = [
  { titulo: 'NEÓN LED',            sub: 'Escaparates · Hostelería · Retail · Bajo consumo',    href: '/rotulos/neon-led-barcelona' },
  { titulo: 'LETRAS CORPÓREAS',    sub: 'Fachadas · Acero inox · Aluminio · Retroiluminado',   href: '/rotulos/letras-corporeas-barcelona' },
  { titulo: 'CAJAS DE LUZ',        sub: 'LED · Metacrilato · Tela tensada · Visibilidad 24h',  href: '/rotulos/cajas-de-luz-barcelona' },
  { titulo: 'VINILOS ESCAPARATE',  sub: 'Corte · Impreso · Microperforado · Instalación',      href: '/rotulos/vinilos-escaparate-barcelona' },
  { titulo: 'SEÑALÉTICA',          sub: 'Oficinas · Hoteles · Comercios · Corporativa',        href: '/rotulos/senaletica-interior-barcelona' },
  { titulo: 'PUBLICIDAD EXTERIOR', sub: 'Banderolas · Tótems · Fachadas · Intemperie',         href: '/rotulos/publicidad-exterior-barcelona' },
]

const DIGITAL_ROWS = [
  { titulo: 'ESTRATEGIA DE MARCA & IDENTIDAD VISUAL', sub: 'Naming · Sistema de logo · Manual de marca · Motion', href: '/services#branding',
    desc: 'Auditoría de mercado, análisis competitivo, workshops de posicionamiento y arquitectura de marca completa. Sistema de logo, paleta, tipografía y Manual de Marca extenso.' },
  { titulo: 'DISEÑO WEB & DESARROLLO',                sub: 'Next.js · Shopify · SEO · Core Web Vitals 95+',     href: '/services#web',
    desc: 'Investigación UX, wireframes, diseño UI pixel-perfect en Figma y desarrollo Next.js / Shopify. Sin compromisos de performance: 95+ Lighthouse y Core Web Vitals en verde desde el día uno.' },
  { titulo: 'E-COMMERCE & CONVERSIÓN',               sub: 'Shopify Plus · WooCommerce · CRO · Email automation', href: '/services#ecommerce',
    desc: 'Arquitectura de producto, checkout sin fricción, integraciones ERP/PIM, email automation y estrategia post-venta. El sistema completo, no solo el escaparate.' },
  { titulo: 'CONTENIDO, MOTION & PRODUCCIÓN',        sub: 'Copywriting · Dirección de arte · Animaciones',     href: '/services#content',
    desc: 'Copywriting estratégico, dirección de arte para foto y video, animaciones de marca y producción de contenido para todos los canales.' },
  { titulo: 'AUTOMATIZACIÓN IA · AURA & HERMES',    sub: 'Agentes IA · n8n · CRM · Panel BI',                 href: '/services#aura',
    desc: 'Agentes de IA autónomos: Aura gestiona comunicación, análisis y contenido. Hermes automatiza flujos operativos y CRM. 100% infraestructura local.' },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://royaluniondesign.com/services#services',
  'name': 'RUD Studio — Servicios',
  'url': 'https://royaluniondesign.com/services',
  'description': 'Rótulos luminosos, neón LED, letras corpóreas, branding, diseño web y automatización IA en Barcelona.',
  'provider': { '@id': 'https://royaluniondesign.com/#organization' },
  'areaServed': { '@type': 'City', 'name': 'Barcelona' },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Servicios RUD Studio',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Rótulos Luminosos', 'url': 'https://royaluniondesign.com/rotulos' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Neón LED Barcelona', 'url': 'https://royaluniondesign.com/rotulos/neon-led-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Letras Corpóreas Barcelona', 'url': 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Branding e Identidad Visual', 'url': 'https://royaluniondesign.com/services#branding' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Diseño Web Barcelona', 'url': 'https://royaluniondesign.com/services#web' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'E-commerce Shopify Barcelona', 'url': 'https://royaluniondesign.com/services#ecommerce' } },
    ],
  },
}

export default function Services() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <Navbar light />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '70svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — SERVICIOS · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>RÓTULOS</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>BRANDING</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Fabricación propia · Branding · Diseño Web · Automatización IA
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RÓTULOS — lista tipográfica ───────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — FABRICACIÓN PROPIA · BARCELONA</p>
                <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)' }}>
                  RÓTULOS<br /><em>LUMINOSOS</em>
                </h2>
              </div>
              <Link href="/rotulos" className="mono-label"
                style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
                Ver todos →
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ROTULOS_ROWS.map((r, i) => (
              <ScrollReveal key={r.titulo} delay={i * 50}>
                <Link href={r.href} className="service-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.75rem 0', borderBottom: '1px solid var(--border)',
                  textDecoration: 'none', gap: '2rem',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 6.5rem)', color: 'var(--fg)', margin: 0, lineHeight: 1 }}>{r.titulo}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{r.sub}</p>
                  </div>
                  <svg className="svc-arrow" style={{ opacity: 0.2, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería strip ─────────────────────────────────── */}
      <section style={{ overflow: 'hidden', display: 'flex', height: 200, borderTop: '1px solid var(--border)' }}>
        {['/services/gal-1.avif', '/services/gal-3.avif', '/services/gal-5.avif', '/services/gal-7.avif', '/services/gal-2.avif', '/services/gal-4.avif'].map((src, i) => (
          <div key={i} style={{ flex: 1, position: 'relative', overflow: 'hidden', minWidth: 0 }}>
            <img src={src} alt="" aria-hidden="true" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </section>

      {/* ── SERVICIOS DIGITALES ───────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — DEL RÓTULO AL PIXEL</p>
                <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)' }}>
                  SERVICIOS<br /><em>DIGITALES</em>
                </h2>
              </div>
              <Link href="/contact" className="mono-label"
                style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
                Pedir presupuesto →
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {DIGITAL_ROWS.map((r, i) => (
              <ScrollReveal key={r.titulo} delay={i * 50}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 40%', gap: '3rem',
                  padding: '2.5rem 0', borderBottom: '1px solid var(--border)',
                  alignItems: 'start',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)', color: 'var(--fg)', margin: 0 }}>{r.titulo}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{r.sub}</p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, paddingTop: '0.25rem' }}>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
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
              <a href="https://wa.me/34645593227" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                +34 645 593 227 →
              </a>
              <Link href="/contact" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Pedir presupuesto
              </Link>
              <a href="mailto:hello@royaluniondesign.com" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                hello@royaluniondesign.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
