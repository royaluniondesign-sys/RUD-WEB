import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Portfolio Branding, Rótulos y Diseño Web Barcelona — Proyectos Reales | RUD Studio',
  description: 'Trabajos reales de RUD Studio: rótulos luminosos, branding, identidad visual, e-commerce Shopify y diseño web para empresas en Barcelona. Proyectos con resultados medibles.',
  keywords: 'portfolio branding Barcelona, rótulos barcelona proyectos, agencia diseño web Barcelona, proyectos identidad visual, e-commerce Shopify Barcelona, casos de éxito agencia Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/work' },
}

const ROTULOS_PROJECTS = [
  {
    img: '/services/gal-1.avif', tipo: 'Neón LED · Fachada',
    nombre: 'Trattoria di Marco', barrio: 'Gràcia, Barcelona',
    desc: 'Neón LED rojo «MARCO» en fachada + letras corpóreas en aluminio cepillado. Visibilidad nocturna duplicada en Carrer de Verdi.',
    tag: 'Hostelería',
  },
  {
    img: '/services/gal-3.avif', tipo: 'Neón LED · Interior',
    nombre: 'Coffee Bloom', barrio: 'Poblenou, Barcelona',
    desc: 'Neón «BLOOM» warm white sobre ladrillo visto. Referencia fotográfica del barrio 22@ — presencia orgánica en redes sin inversión publicitaria.',
    tag: 'Cafetería',
  },
  {
    img: '/services/gal-5.avif', tipo: 'Caja de Luz · Exterior',
    nombre: 'Bar Atlántico', barrio: 'Barceloneta, Barcelona',
    desc: 'Caja de luz gran formato con LED perimetral. Visible desde 200m en el paseo marítimo, día y noche.',
    tag: 'Bar',
  },
  {
    img: '/services/gal-2.avif', tipo: 'Letras Corpóreas · Fachada',
    nombre: 'Moda Plural', barrio: 'Eixample, Barcelona',
    desc: 'Letras corpóreas en aluminio negro mate + retroiluminación halo blanca. Identidad visual aplicada a fachada con coherencia total.',
    tag: 'Moda',
  },
  {
    img: '/services/gal-6.avif', tipo: 'Señalética · Hotelera',
    nombre: 'Hotel Trafalgar BCN', barrio: 'Sarrià-Sant Gervasi, Barcelona',
    desc: 'Proyecto completo de señalética para 64 habitaciones: directorios, identificación de suites y señalética de emergencia en aluminio anodizado.',
    tag: 'Hotel',
  },
  {
    img: '/services/gal-4.avif', tipo: 'Vinilos · Escaparate',
    nombre: 'Clínica Llorens', barrio: 'Sant Gervasi, Barcelona',
    desc: 'Vinilos esmerilados con logotipo recortado + franja de privacidad. Estética clínica que transmite profesionalidad desde la calle.',
    tag: 'Salud',
  },
]

const DIGITAL_PROJECTS = [
  {
    slug: 'idnt', client: 'IDNT®', type: 'Moda sostenible · Barcelona',
    desc: 'Marca de ropa orgánica sostenible hecha en Barcelona. Identidad visual completa, e-commerce Shopify, packaging y automatizaciones de marketing.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'],
    img: '/client-idnt-hero.gif', url: 'https://www.idnt.es', featured: true,
  },
  {
    slug: 'aurum', client: 'Aurum Studio', type: 'Joyería artesanal · Barcelona',
    desc: 'Identidad de lujo accesible para joyería artesanal. Branding, sistema visual, web y fotografía de producto.',
    tags: ['Branding Lujo','Identidad Visual','Fotografía','Web Design'],
    img: '/client-jewelry-hero.jpg', featured: false,
  },
  {
    slug: 'brandforce', client: 'BrandForce Agency', type: 'Agencia de marketing · Madrid',
    desc: 'Partner creativo white-label. Diseño, desarrollo y automatización IA como extensión del equipo interno.',
    tags: ['White-label','Diseño Web','Desarrollo','AI Automation'],
    img: '/client-agency-team.jpg', featured: false,
  },
]

export default function Work() {
  return (
    <main>
      <Navbar light />

      {/* ── Hero ──────────────────────────── */}
      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 520, background: '#0A0908' }}>
        <img src="/services/gal-2.avif" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.7) 0%,rgba(10,9,8,0.38) 100%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
              Portfolio · Proyectos reales · Barcelona
            </p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: '1.25rem', maxWidth: '22ch', color: 'white' }}>
              Rótulos, branding y diseño web en Barcelona.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>Proyectos reales.</em>
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '44ch', lineHeight: 1.7 }}>
              Señalética, rótulos luminosos, identidad visual, e-commerce y automatización IA para empresas en Barcelona. Resultados medibles, no solo diseño bonito.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RÓTULOS portfolio ────────────────── */}
      <section style={{ background: '#fff', paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.2em', color: '#C4BFB8', marginBottom: 10 }}>
                  Fabricación propia · Barcelona
                </p>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, color: '#0A0908' }}>
                  Rótulos que transforman negocios.
                </h2>
              </div>
              <Link href="/rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.75rem 1.5rem', borderRadius: 9999, background: '#0A0908', color: '#fff', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                Ver todos los rótulos →
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured first project — full width */}
          <ScrollReveal>
            <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 10, position: 'relative', aspectRatio: '16/7' }}>
              <img src={ROTULOS_PROJECTS[0].img} alt={ROTULOS_PROJECTS[0].nombre}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.85) 0%, rgba(10,9,8,0.3) 50%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem,4vw,2.5rem)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                  <div>
                    <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,0.85)', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.12)', marginBottom: 10, display: 'inline-block' }}>
                      {ROTULOS_PROJECTS[0].tag}
                    </span>
                    <h3 style={{ fontSize: 'clamp(1.2rem,2.5vw,1.75rem)', fontWeight: 800, color: '#fff', letterSpacing: '-.03em', lineHeight: 1.2 }}>
                      {ROTULOS_PROJECTS[0].nombre}
                    </h3>
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4, marginBottom: 8 }}>
                      {ROTULOS_PROJECTS[0].tipo} · {ROTULOS_PROJECTS[0].barrio}
                    </p>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', maxWidth: '52ch', lineHeight: 1.6 }}>
                      {ROTULOS_PROJECTS[0].desc}
                    </p>
                  </div>
                  <Link href="/contact?servicio=neon"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.7rem 1.4rem', borderRadius: 9999, background: '#fff', color: '#0A0908', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>
                    Pedir presupuesto →
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 2+3 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 10 }}>
            {ROTULOS_PROJECTS.slice(1, 3).map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
                  <img src={p.img} alt={p.nombre} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.8) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem' }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em' }}>{p.tag}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginTop: 4 }}>{p.nombre}</h3>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{p.tipo} · {p.barrio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
            {ROTULOS_PROJECTS.slice(3, 6).map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '4/3' }}>
                  <img src={p.img} alt={p.nombre} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.82) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em' }}>{p.tag}</span>
                    <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginTop: 3 }}>{p.nombre}</h3>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{p.barrio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital projects ─────────────────── */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(3.5rem,8vw,6rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.2em', color: '#9CA3AF', marginBottom: 10 }}>
              Branding & digital
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-.04em', lineHeight: 1.1, color: '#0A0908', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Identidad visual, web y e-commerce.
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* IDNT — Featured */}
            <ScrollReveal>
              <Link href="/work/idnt" style={{ display: 'block', textDecoration: 'none' }}>
                <div className="card-lift" style={{ borderRadius: 16, overflow: 'hidden', background: 'white', border: '1px solid #E2DDD7' }}>
                  <div className="grid md:grid-cols-2">
                    <div style={{ position: 'relative', minHeight: 300, overflow: 'hidden' }}>
                      <img src="/client-idnt-hero.gif" alt="IDNT® — Moda sostenible Barcelona"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,transparent,rgba(0,0,0,0.1))' }} />
                      <span style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', padding: '6px 14px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', borderRadius: 9999, fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.9)' }}>
                        ↗ idnt.es
                      </span>
                    </div>
                    <div style={{ padding: 'clamp(2rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.25rem' }}>
                          {['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'].map(t => (
                            <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 500, background: '#F0EDE6', color: '#6B7280' }}>{t}</span>
                          ))}
                        </div>
                        <h3 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 700, marginBottom: 6, color: '#0A0908' }}>IDNT®</h3>
                        <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500, marginBottom: '1rem' }}>Moda orgánica sostenible · Barcelona</p>
                        <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7 }}>
                          Ropa orgánica y sostenible hecha en Barcelona. Identidad visual completa, e-commerce Shopify, packaging y automatizaciones de marketing.
                        </p>
                      </div>
                      <div className="arrow-link" style={{ marginTop: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: '#0A0908' }}>
                        Ver proyecto completo
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Aurum + BrandForce */}
            <div className="grid md:grid-cols-2" style={{ gap: '1.25rem' }}>
              {DIGITAL_PROJECTS.filter(p => !p.featured).map((p, i) => (
                <ScrollReveal key={p.slug} delay={(i + 1) * 80}>
                  <Link href={`/work/${p.slug}`} style={{ display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2DDD7', textDecoration: 'none', height: '100%' }} className="card-lift">
                    <div style={{ height: 220, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                      <img src={p.img} alt={`${p.client} — ${p.type}`} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.32),transparent)' }} />
                    </div>
                    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '0.875rem' }}>
                        {p.tags.map(t => (
                          <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 500, background: '#F0EDE6', color: '#6B7280' }}>{t}</span>
                        ))}
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 4, color: '#0A0908' }}>{p.client}</h3>
                      <p style={{ fontSize: 12, color: '#9CA3AF', fontWeight: 500, marginBottom: '0.625rem' }}>{p.type}</p>
                      <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.65, flex: 1 }}>{p.desc}</p>
                      <div className="arrow-link" style={{ marginTop: '1.25rem', fontSize: 13, fontWeight: 600, color: '#0A0908', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        Ver proyecto
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,8vw,5.5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', marginBottom: 8 }}>
                  Tu marca, aquí.
                </h2>
                <p style={{ fontSize: 14, color: '#6B7280' }}>
                  Abiertos a nuevos proyectos. Presupuesto sin compromiso en 24h.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link href="/rotulos"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.875rem 1.75rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 700, fontSize: 15 }}>
                  Presupuesto rótulo →
                </Link>
                <Link href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.875rem 1.75rem', background: '#fff', color: '#0A0908', borderRadius: 9999, fontWeight: 600, fontSize: 15 }}>
                  Contactar →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
