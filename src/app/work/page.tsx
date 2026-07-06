import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Portfolio Branding, Rótulos y Diseño Web Barcelona — Proyectos Reales | RUD Studio',
  description: 'Trabajos reales de RUD Studio: rótulos luminosos, branding, identidad visual, e-commerce Shopify y diseño web para empresas en Barcelona. Proyectos con resultados medibles.',
  keywords: 'portfolio branding Barcelona, rótulos barcelona proyectos, agencia diseño web Barcelona, proyectos identidad visual, e-commerce Shopify Barcelona, casos de éxito agencia Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/work' },
  openGraph: {
    title: 'Portfolio — Proyectos Reales de Rótulos y Branding | RUD Studio',
    description: 'Casos reales: rótulos luminosos, branding e-commerce Shopify y diseño web para empresas en Barcelona.',
    url: 'https://www.royaluniondesign.com/work',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | RUD Studio Barcelona',
    description: 'Proyectos reales de rótulos, branding y diseño web en Barcelona.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const ROTULOS_PROJECTS = [
  {
    img: '/RUDTRABAJOSROTULOS/photo-1771517016865-fea1893396e6.avif',
    tipo: 'Neón LED · Fachada',
    nombre: 'Osteria Cendra',
    barrio: 'Gràcia, Barcelona',
    desc: 'Neón LED warm white «CENDRA» en fachada de ladrillo visto + letras corpóreas en aluminio cepillado.',
    tag: 'Hostelería',
  },
  {
    img: '/RUDTRABAJOSROTULOS/photo-1619636217292-a77988becc4c.avif',
    tipo: 'Neón LED · Interior',
    nombre: 'Naima Coffee',
    barrio: 'Poblenou, Barcelona',
    desc: 'Neón «NAIMA» en warm white sobre pared de estuco rugoso. El rincón más fotografiado del local.',
    tag: 'Cafetería',
  },
  {
    img: '/RUDTRABAJOSROTULOS/photo-1698500103054-8a00e4c4131c.avif',
    tipo: 'Caja de Luz · Exterior',
    nombre: 'Mar de Fondo',
    barrio: 'Barceloneta, Barcelona',
    desc: 'Caja de luz gran formato con perfil de aluminio y LED perimetral de alta luminosidad.',
    tag: 'Bar',
  },
  {
    img: '/RUDTRABAJOSROTULOS/photo-1588560107833-167198a53677.avif',
    tipo: 'Letras Corpóreas · Fachada',
    nombre: 'Chapter BCN',
    barrio: 'Eixample, Barcelona',
    desc: 'Letras corpóreas en aluminio negro mate con retroiluminación halo blanca.',
    tag: 'Moda',
  },
  {
    img: '/RUDTRABAJOSROTULOS/photo-1605514449465-afa3f13a0512.avif',
    tipo: 'Señalética · Corporativa',
    nombre: 'Aparthotel Mercat',
    barrio: 'Sant Antoni, Barcelona',
    desc: 'Proyecto completo de señalética para 48 apartamentos en aluminio anodizado + vinilo de corte.',
    tag: 'Alojamiento',
  },
  {
    img: '/RUDTRABAJOSROTULOS/photo-1632605166776-7128669886e7.avif',
    tipo: 'Vinilos · Escaparate',
    nombre: 'Centre Mèdic Gràcia',
    barrio: 'Gràcia, Barcelona',
    desc: 'Vinilos esmerilados con logotipo recortado + franja de privacidad en todo el escaparate.',
    tag: 'Salud',
  },
]

const PROJECT_ROWS = [
  {
    layout: 'wide' as const,
    left:  { slug: 'sante',  img: '/trabajos/sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg',                               client: 'SANTÉ',       type: 'Hostelería · Barcelona',             scope: 'Neón LED · Caja de Luz' },
    right: { slug: 'lumina', img: '/trabajos/clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg',  client: 'LUMINA',      type: 'Clínica Estética · Barcelona',       scope: 'Letras Corpóreas · Halo LED' },
  },
  {
    layout: 'narrow' as const,
    left:  { slug: 'novae', img: '/trabajos/novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg',             client: 'NOVAE',       type: 'Consultoría · Barcelona',            scope: 'Vinilos Corporativos' },
    right: { slug: 'idnt',  img: '/client-idnt-hero.gif',                                                                     client: 'IDNT®',       type: 'Moda orgánica · Cerdanyola',        scope: 'E-commerce Shopify · Branding' },
  },
  {
    layout: 'wide' as const,
    left:  { slug: 'kopess', img: 'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg',                client: 'KOPESS 23',   type: 'Eventos & Catering · Barcelona',     scope: 'WordPress · SEO' },
    right: { slug: 'oxyzen', img: 'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg', client: 'OXYZEN CLUB', type: 'Club Privado · Eixample, Barcelona', scope: 'Web · Branding Gold' },
  },
]

export default function Work() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.work())) }} />
      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '70svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — PORTFOLIO · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>TRABAJO</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>QUE HABLA</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Rótulos · Branding · E-commerce · Diseño Web
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              INICIAR PROYECTO →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS — grid editorial ────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
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

        {/* ── RÓTULOS — lista de proyectos ──────────────── */}
        <div style={{ borderTop: '1px solid var(--border)', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <div className="container-custom" style={{ padding: 'clamp(3rem,6vw,5rem) 0' }}>
            <ScrollReveal>
              <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>RÓTULOS EN BARCELONA</p>
              <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
                INSTALACIONES<br /><em>RECIENTES</em>
              </h2>
            </ScrollReveal>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {ROTULOS_PROJECTS.map((p, i) => (
                <ScrollReveal key={p.nombre} delay={i * 50}>
                  <div style={{
                    display: 'grid', gridTemplateColumns: '180px 1fr 40%', gap: '2rem',
                    padding: '1.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'center',
                  }}>
                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 0, aspectRatio: '4/3' }}>
                      <img src={p.img} alt={p.nombre} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div>
                      <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>{p.tipo} · {p.barrio}</p>
                      <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{p.nombre}</h3>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="explore-wrap" style={{ borderTop: '1px solid var(--border)' }}>
          <Link href="/rotulos" className="explore-link">
            ( VER TODOS LOS RÓTULOS )
          </Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Abiertos a nuevos proyectos · Presupuesto en 24h
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              TU MARCA<br /><em>AQUÍ</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <Link href="/contact" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                INICIAR CONVERSACIÓN →
              </Link>
              <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Ver rótulos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
