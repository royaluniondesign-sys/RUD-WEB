import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const PROJECTS: Record<string, {
  client: string; type: string; desc: string; tags: string[];
  hero: string; images: string[]; url?: string;
  challenge: string; work: string[]; details: Record<string,string>;
  next: string; nextSlug: string;
}> = {
  idnt: {
    client: 'IDNT®', type: 'Moda orgánica sostenible · Barcelona',
    desc: 'Identidad visual completa, e-commerce Shopify, packaging y automatizaciones para marca de ropa orgánica barcelonesa.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'],
    hero: '/client-idnt-hero.gif',
    images: ['/client-idnt-crew.jpg','/client-idnt-hoodie.jpg','/client-idnt-pant.jpg','/client-idnt-tee.jpg'],
    url: 'https://www.idnt.es',
    challenge: 'IDNT® necesitaba una identidad que comunicara sostenibilidad y artesanía urbana sin caer en los clichés del slow fashion. Una marca con personalidad propia y sistema visual escalable para físico y digital.',
    work: [
      'Identidad visual completa: logo, paleta, tipografía, guidelines y todas las aplicaciones físicas.',
      'E-commerce Shopify con experiencia de compra optimizada para conversión, integrado con gestión de inventario.',
      'Automatizaciones de marketing: recuperación de carrito, email flows, publicaciones automáticas.',
    ],
    details: { 'Cliente':'IDNT®', 'Sector':'Moda sostenible', 'Ubicación':'Barcelona', 'Servicios':'Branding · Shopify · Packaging', 'Web':'idnt.es' },
    next: 'Aurum Studio', nextSlug: 'aurum',
  },
  aurum: {
    client: 'Aurum Studio', type: 'Joyería artesanal · Barcelona',
    desc: 'Identidad de lujo accesible para joyería artesanal. Branding, sistema visual, web y fotografía de producto.',
    tags: ['Branding Lujo','Identidad Visual','Web Design','Fotografía'],
    hero: '/client-jewelry-hero.jpg',
    images: ['/client-jewelry-ring.jpg','/client-jewelry-2.jpg'],
    challenge: 'Posicionarse como joyería artesanal de calidad sin el precio inalcanzable del lujo tradicional. Crear un sistema visual que transmitiera exclusividad y accesibilidad al mismo tiempo.',
    work: [
      'Estrategia de marca con posicionamiento "lujo accesible". Naming, tagline y propuesta de valor diferenciada.',
      'Identidad visual: logo minimalista, paleta dorada sofisticada, tipografía editorial y sistema de aplicaciones.',
      'Diseño web con catálogo de producto y experiencia de compra premium.',
    ],
    details: { 'Cliente':'Aurum Studio', 'Sector':'Joyería artesanal', 'Ubicación':'Barcelona', 'Servicios':'Branding · Web · Fotografía' },
    next: 'BrandForce', nextSlug: 'brandforce',
  },
  brandforce: {
    client: 'BrandForce Agency', type: 'Agencia de marketing · Madrid',
    desc: 'Partner creativo white-label para agencia de marketing. Diseño, desarrollo y automatización IA como extensión del equipo.',
    tags: ['White-label','Diseño Web','Desarrollo','AI Automation'],
    hero: '/client-agency-team.jpg',
    images: ['/client-agency-1.jpg','/client-agency-office.jpg'],
    challenge: 'Escalar capacidad creativa y técnica sin contratar equipo fijo. Un partner de confianza que entendiera los briefings de sus clientes y entregara en sus estándares de calidad.',
    work: [
      'Partnership white-label continuo: diseño web, landing pages y assets creativos bajo los brandbooks de sus clientes.',
      'Desarrollo Next.js para proyectos que requerían implementación técnica avanzada.',
      'Automatizaciones con IA para reducir tiempo de producción de contenido y reporting.',
    ],
    details: { 'Cliente':'BrandForce Agency', 'Sector':'Agencia de marketing', 'Ubicación':'Madrid', 'Modalidad':'Partnership continuo', 'Servicios':'White-label · Dev · AI' },
    next: 'IDNT®', nextSlug: 'idnt',
  },
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = PROJECTS[slug]
  if (!p) return { title: 'Proyecto no encontrado' }
  return {
    title: `${p.client} — Caso de estudio · RUD Studio Barcelona`,
    description: p.desc,
  }
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = PROJECTS[slug]
  if (!p) notFound()

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
          <ScrollReveal>
            <Link href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', marginBottom: '1.5rem' }}
              className="hover:text-[#0A0908] transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Portfolio
            </Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
              {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-.04em', marginBottom: 8 }}>{p.client}</h1>
            <p style={{ fontSize: 'clamp(.875rem,1.5vw,1.1rem)', color: '#6B7280' }}>{p.type}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ position: 'relative', height: 'clamp(220px,45vw,520px)', overflow: 'hidden' }}>
        <img src={p.hero} alt={`${p.client} — RUD Studio`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,.25))' }} />
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener noreferrer"
            style={{ position: 'absolute', bottom: 20, right: 20, padding: '8px 16px', background: 'rgba(255,255,255,.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.3)', borderRadius: 9999, color: '#fff', fontSize: 12, fontWeight: 500 }}>
            Visitar web ↗
          </a>
        )}
      </div>

      {/* Content */}
      <section className="section-padding" style={{ background: '#F7F5F1' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '3rem' }}>
            <style>{`@media(min-width:768px){#case-grid{grid-template-columns:1fr 300px!important}}`}</style>
            <div id="case-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'start' }}>

              {/* Main content */}
              <div>
                <ScrollReveal>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.875rem' }}>El desafío</h2>
                  <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.75, marginBottom: '2rem' }}>{p.challenge}</p>
                </ScrollReveal>
                <ScrollReveal delay={80}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.875rem' }}>Lo que hicimos</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                    {p.work.map((w, i) => (
                      <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontFamily: 'monospace', color: '#9CA3AF', marginTop: 2 }}>{i+1}</span>
                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{w}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Images grid */}
                {p.images.length > 0 && (
                  <ScrollReveal delay={140}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {p.images.map((img, i) => (
                        <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '4/3' }}>
                          <img src={img} alt={`${p.client} ${i+1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                )}
              </div>

              {/* Sidebar */}
              <ScrollReveal delay={60}>
                <div style={{ position: 'sticky', top: 88, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: '#fff', borderRadius: 16, padding: '1.5rem', border: '1px solid #E2DDD7' }}>
                    <h3 style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: '1.25rem' }}>Detalles</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {Object.entries(p.details).map(([k, v]) => (
                        <div key={k}>
                          <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 3 }}>{k}</p>
                          <p style={{ fontSize: 14, fontWeight: 600 }}>{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ background: '#F0EDE6', borderRadius: 16, padding: '1.5rem' }}>
                    <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, marginBottom: '1rem' }}>¿Proyecto similar? Hablemos.</p>
                    <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>Contactar</Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section style={{ background: '#F0EDE6', borderTop: '1px solid #E2DDD7', padding: '3rem 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <p style={{ fontSize: 12, color: '#9CA3AF' }}>Siguiente proyecto</p>
              <Link href={`/work/${p.nextSlug}`}
                style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {p.next}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
