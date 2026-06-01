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
    client: 'IDNT®',
    type: 'Moda orgánica sostenible · Cerdanyola del Vallès, Barcelona',
    desc: 'Marca de ropa orgánica y sostenible hecha en Barcelona. Identidad visual completa, e-commerce Shopify, fotografía editorial, diseño de prendas, packaging y automatizaciones de marketing.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Fotografía','Diseño de Prendas','Packaging','Vídeo','Automatizaciones'],
    hero: '/client-idnt-hero.gif',
    images: ['/client-idnt-crew.jpg','/client-idnt-hoodie.jpg','/client-idnt-pant.jpg','/client-idnt-tee.jpg'],
    url: 'https://www.idnt.es',
    challenge: 'IDNT® arrancaba desde cero con una visión clara: ropa orgánica hecha en Barcelona con personalidad propia, sin caer en los clichés del slow fashion. El reto era construir un sistema de marca completo y escalable que funcionara igual de bien en una camiseta que en una campaña de Instagram — con coherencia total entre lo físico y lo digital.',
    work: [
      'Identidad visual completa: naming, logo, paleta cromática, tipografía, guidelines de marca y manual de aplicaciones físicas y digitales.',
      'Diseño de prendas y estampados: gráficos originales por colección, diseño de parches bordados y motivos textiles de temporada.',
      'E-commerce Shopify: arquitectura de tienda, UX optimizada para conversión, integración de inventario y pasarela de pago europea.',
      'Fotografía editorial y de producto: dirección de arte, lookbooks de colección y fotografía de prendas en plano y en modelo.',
      'Producción de vídeo: reels de colección, contenido para campañas de Instagram y TikTok, vídeos de producto.',
      'Packaging completo: bolsas, cajas, etiquetas tejidas, pegatinas y material de envío con identidad de marca.',
      'Automatizaciones de marketing: flows de recuperación de carrito, secuencias de email, publicaciones automáticas en redes.',
    ],
    details: {
      'Cliente': 'IDNT®',
      'Sector': 'Moda orgánica sostenible',
      'Ubicación': 'Cerdanyola del Vallès, Barcelona',
      'Servicios': 'Branding · Shopify · Fotografía · Vídeo · Packaging',
      'Web': 'idnt.es',
    },
    next: 'Kopess 23', nextSlug: 'kopess',
  },
  kopess: {
    client: 'Kopess 23',
    type: 'Moda urban · Barcelona',
    desc: 'Marca de moda urbana barcelonesa. Identidad visual, web de alto rendimiento en Next.js, fotografía editorial y estrategia SEO para posicionamiento en Google.',
    tags: ['Diseño Web','SEO','Branding','Identidad Visual','Fotografía Editorial','Next.js'],
    hero: '/client-kopess-hero.jpg',
    images: ['/client-kopess-web.jpg','/client-kopess-brand.jpg'],
    url: 'https://kopess23.com',
    challenge: 'Kopess 23 necesitaba una presencia digital que reflejara su identidad urbana sin parecer un catálogo genérico. El posicionamiento en Google para sus términos clave era inexistente, y la web anterior no convertía visitas en ventas.',
    work: [
      'Identidad visual: logo, paleta cromática, tipografía y sistema de aplicaciones para físico y digital.',
      'Diseño y desarrollo web en Next.js: rendimiento 95+ Lighthouse, UX optimizada para conversión y carga instantánea.',
      'Estrategia SEO: keyword research, arquitectura de contenido, optimización on-page y schema markup.',
      'Fotografía editorial: shooting de colección con dirección de arte de RUD, para web y campañas.',
    ],
    details: {
      'Cliente': 'Kopess 23',
      'Sector': 'Moda urban streetwear',
      'Ubicación': 'Barcelona',
      'Servicios': 'Web · SEO · Branding · Fotografía',
      'Web': 'kopess23.com',
    },
    next: 'Oxyzen', nextSlug: 'oxyzen',
  },
  oxyzen: {
    client: 'Oxyzen',
    type: 'Wellness & entrenamiento · Barcelona',
    desc: 'Estudio de bienestar y entrenamiento en Barcelona. Web de captación de leads, identidad visual y SEO local para atraer clientes en un mercado altamente competitivo.',
    tags: ['Diseño Web','SEO Local','Identidad Visual','Next.js','Captación de Leads'],
    hero: '/client-oxyzen-hero.jpg',
    images: ['/client-oxyzen-web.jpg','/client-oxyzen-brand.jpg'],
    url: 'https://oxyzen.es',
    challenge: 'Oxyzen entraba en un mercado saturado de estudios de bienestar en Barcelona. Necesitaban una identidad clara, diferenciada de la competencia, y una web que capturara leads locales de forma orgánica — sin depender de publicidad de pago.',
    work: [
      'Identidad visual: logo, paleta cromática fresca y energética, tipografía y sistema de aplicaciones digitales.',
      'Diseño y desarrollo web en Next.js: landing page de alto impacto con formulario de captación de leads integrado.',
      'SEO local: optimización para búsquedas locales en Barcelona, ficha de Google Business Profile y schema de negocio local.',
      'Textos y copywriting: mensajes estratégicos orientados a conversión, con tono de marca propio.',
    ],
    details: {
      'Cliente': 'Oxyzen',
      'Sector': 'Wellness & entrenamiento',
      'Ubicación': 'Barcelona',
      'Servicios': 'Web · SEO Local · Identidad Visual',
      'Web': 'oxyzen.es',
    },
    next: 'Aurum Studio', nextSlug: 'aurum',
  },
  aurum: {
    client: 'Aurum Studio',
    type: 'Joyería artesanal · Barcelona',
    desc: 'Proyecto fotográfico de joyería artesanal. Dirección de arte, fotografía de producto y ambientación para colección de piezas únicas hechas a mano en Barcelona.',
    tags: ['Fotografía de Producto','Dirección de Arte','Retoque','Campaña Visual'],
    hero: '/client-jewelry-hero.jpg',
    images: ['/client-jewelry-ring.jpg','/client-jewelry-2.jpg'],
    challenge: 'Aurum necesitaba fotografía que transmitiera la artesanía y exclusividad de sus piezas sin el presupuesto de una producción de lujo. El reto era crear imágenes aspiracionales, con luz y composición cuidadas, que funcionaran tanto en la web como en redes sociales.',
    work: [
      'Dirección de arte: concepto visual de la sesión, selección de materiales, fondos y props para cada pieza.',
      'Fotografía de producto: tomas en plano con iluminación controlada, enfoque selectivo y detalle de texturas.',
      'Fotografía de ambiente: piezas en contexto, sobre manos y superficies naturales para humanizar la colección.',
      'Retoque y edición: procesado raw, corrección de color y retoque avanzado para cada imagen entregada.',
    ],
    details: {
      'Cliente': 'Aurum Studio',
      'Sector': 'Joyería artesanal',
      'Ubicación': 'Barcelona',
      'Servicios': 'Fotografía · Dirección de Arte · Retoque',
    },
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
