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
  sante: {
    client: 'Santé Café & Brunch',
    type: 'Hostelería · Barcelona',
    desc: 'Rótulo neón LED warm amber sobre caja de luz negra mate para café y brunch en Barcelona. Diseño, fabricación e instalación completa en fachada.',
    tags: ['Neón LED','Caja de Luz','Señalética Fachada','Hostelería'],
    hero: '/trabajos/sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg',
    images: ['/trabajos/sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg'],
    challenge: 'Santé necesitaba un elemento de identidad visual que destacara en la calle desde el primer momento, sin perder la elegancia y calidez que define su concepto de café y brunch. El reto era conseguir un rótulo que funcionara tanto de día como de noche, que fuera reconocible al instante y que se convirtiera en icono del local.',
    work: [
      'Diseño del conjunto: caja de luz de acero negro mate con bordes en ángulo recto y perfil de bajo perfil. Tipografía personalizada en neón LED.',
      'Fabricación del neón LED en warm amber: tubo flexible de alta densidad con temperatura de color 2200K. Cualquier forma, cualquier tipografía.',
      'Instalación en fachada con sistema de anclaje oculto. Sin perforaciones visibles, acabado limpio y profesional.',
      'El conjunto caja negra + neón cálido se convirtió en el elemento más fotografiado del local y en referencia visual del barrio.',
    ],
    details: {
      'Cliente': 'Santé Café & Brunch',
      'Sector': 'Hostelería',
      'Ubicación': 'Barcelona',
      'Servicios': 'Diseño · Fabricación · Instalación',
      'Tipo': 'Neón LED + Caja de Luz',
    },
    next: 'Novae Consulting', nextSlug: 'novae',
  },
  novae: {
    client: 'Novae Consulting',
    type: 'Consultoría · Barcelona',
    desc: 'Señalética corporativa completa para oficina de consultoría en Barcelona: vinilos esmerilados de privacidad con identidad corporativa en cristal y tabiques de vidrio.',
    tags: ['Vinilos Corporativos','Señalética Interior','Vinilo Cristal','Oficina'],
    hero: '/trabajos/novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg',
    images: ['/trabajos/novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg'],
    challenge: 'Novae Consulting ocupó una nueva oficina de planta diáfana con grandes cristaleras. Necesitaban privacidad para las salas de reunión sin perder luminosidad, y proyectar una imagen corporativa de máxima profesionalidad desde el primer día.',
    work: [
      'Auditoría del espacio: medición de todas las superficies acristaladas y diseño del sistema de señalética para toda la planta.',
      'Diseño de vinilos esmerilados con franjas geométricas y diagonal decorativa: privacidad al 60% manteniendo la sensación de espacio abierto.',
      'Vinilo corporativo con logo recortado en precisión plotter: aplicado directamente sobre el cristal de la sala principal.',
      'Instalación sin burbujas ni arrugas, con herramientas profesionales y rasqueta de goma. Resultado limpio y duradero.',
    ],
    details: {
      'Cliente': 'Novae Consulting',
      'Sector': 'Consultoría corporativa',
      'Ubicación': 'Barcelona',
      'Servicios': 'Diseño · Fabricación · Instalación',
      'Tipo': 'Vinilos esmerilados + Logo corporativo',
    },
    next: 'Clínica Lumina', nextSlug: 'lumina',
  },
  lumina: {
    client: 'Clínica Lumina Estética',
    type: 'Clínica Estética · Barcelona',
    desc: 'Letras corpóreas en acero inoxidable con acabado dorado espejo y retroiluminación halo LED cálido para clínica estética premium en Barcelona.',
    tags: ['Letras Corpóreas','Retroiluminación Halo','Acero Dorado','Señalética Clínica'],
    hero: '/trabajos/clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg',
    images: ['/trabajos/clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg'],
    challenge: 'Clínica Lumina Estética necesitaba una identidad visual física que comunicara lujo, precisión y confianza desde la recepción. El rótulo debía ser el elemento principal del espacio de bienvenida: impactante de día y aún más llamativo de noche con la retroiluminación.',
    work: [
      'Fabricación de letras corpóreas en acero inoxidable con acabado espejo dorado (PVD Gold): 3 alturas de letra distintas para jerarquía visual.',
      'Sistema de retroiluminación halo LED cálido (2700K): luz proyectada hacia la pared blanca, efecto corona continuo y uniforme.',
      'Montaje con separadores de acero ocultos para crear el espacio de halo necesario. Instalación sin daños en la pared.',
      'El conjunto letras doradas + halo cálido sobre pared blanca transmite la esencia premium de la clínica al primer vistazo.',
    ],
    details: {
      'Cliente': 'Clínica Lumina Estética',
      'Sector': 'Clínica estética premium',
      'Ubicación': 'Barcelona',
      'Servicios': 'Diseño · Fabricación · Instalación',
      'Tipo': 'Letras corpóreas acero dorado + halo LED',
    },
    next: 'IDNT®', nextSlug: 'idnt',
  },
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
    type: 'Eventos & Catering · Caldes de Montbui, Barcelona',
    desc: 'Empresa de eventos corporativos y catering premium en Barcelona. Web profesional en WordPress/Kubio, branding, identidad visual y estrategia SEO para posicionarse en el mercado de eventos de empresa.',
    tags: ['Diseño Web','WordPress','SEO','Branding','Identidad Visual'],
    hero: 'https://kopess23.com/wp-content/uploads/2025/09/unsplash-rrYF1RfotSM.jpg',
    images: [
      'https://kopess23.com/wp-content/uploads/2025/09/unsplash-F2KRf_QfCqw.jpg',
      'https://kopess23.com/wp-content/uploads/2025/09/pexels-27215765.jpeg',
    ],
    url: 'https://kopess23.com',
    challenge: 'Kopess 23 necesitaba una presencia digital que transmitiera la exclusividad y profesionalidad de sus servicios de eventos y catering en el mercado empresarial barcelonés. Sin web, sin posicionamiento en Google y con una competencia consolidada, el reto era crear desde cero una identidad sólida y una estrategia de captación orgánica.',
    work: [
      'Identidad visual: naming, logo, paleta cromática naranja-navy, tipografía Poppins y sistema de aplicaciones para web y materiales impresos.',
      'Diseño y desarrollo web en WordPress/Kubio: arquitectura orientada a la captación de leads B2B, páginas de servicio diferenciadas por tipo de evento y formulario de solicitud de presupuesto.',
      'Copywriting estratégico: textos orientados a la conversión con mensajes para empresa, con foco en confianza y experiencia premium.',
      'Estrategia SEO: keyword research para "eventos corporativos Barcelona", "catering premium Barcelona" y términos locales, optimización on-page y schema de negocio local.',
    ],
    details: {
      'Cliente': 'Kopess 23',
      'Sector': 'Eventos & Catering premium',
      'Ubicación': 'Caldes de Montbui, Barcelona',
      'Servicios': 'Web · Branding · SEO · Copywriting',
      'Web': 'kopess23.com',
    },
    next: 'Oxyzen', nextSlug: 'oxyzen',
  },
  oxyzen: {
    client: 'Oxyzen Club',
    type: 'Club Privado Premium · Eixample, Barcelona',
    desc: 'Club privado de entretenimiento premium en el Eixample de Barcelona. Web completa en WordPress/Avada con branding de lujo, identidad visual gold-dark, SEO posicionado y analítica avanzada GA4.',
    tags: ['Diseño Web','WordPress/Avada','SEO','Branding','Identidad Visual','Analytics GA4'],
    hero: 'https://www.oxyzen.es/wp-content/uploads/2026/05/escorts-barcelona-pasillo-acuario-hero.jpg',
    images: [
      'https://www.oxyzen.es/wp-content/uploads/2026/05/piscina-suite-azul-oxyzen-barcelona-1.webp',
      'https://www.oxyzen.es/wp-content/uploads/2026/05/bar-nightclub-oxyzen-barcelona.jpg',
      'https://www.oxyzen.es/wp-content/uploads/2026/05/sala-neon-verde-oxyzen-barcelona-1.webp',
      'https://www.oxyzen.es/wp-content/uploads/2026/05/suite-acceso-azul-oxyzen-barcelona-1.webp',
    ],
    url: 'https://www.oxyzen.es',
    challenge: 'Oxyzen Club necesitaba una presencia digital que transmitiera exclusividad y discreción desde el primer pixel. El reto era construir una web premium que posicionara en Google para términos altamente competitivos en Barcelona, con una identidad visual de lujo coherente y un sistema de captación de reservas discreto y efectivo.',
    work: [
      'Diseño y desarrollo web en WordPress/Avada: arquitectura completa con 6+ páginas de servicio, navegación responsive con menú dark personalizado y header con scroll inteligente.',
      'Identidad visual de lujo: paleta gold (#b79b68) sobre negro profundo, tipografía Cormorant Garamond + Inter, sistema de botones y modales de reserva con estética premium.',
      'SEO técnico avanzado: schema markup LocalBusiness, BreadcrumbList y Service, optimización on-page, estructura de URLs semántica y velocidad de carga optimizada con LiteSpeed/QUIC.cloud.',
      'Analítica GA4 completa: 17 eventos de tracking personalizados — scroll depth, clics CTA, engagement de formularios, WhatsApp/Telegram, teléfono, funnel de conversión y calidad de visitas.',
      'Integración de leads: formulario de reserva modal con 8 campos segmentados, validación AJAX, envío a CRM y tracking de conversiones con GA4 purchase events.',
      'Optimización de rendimiento: LiteSpeed Cache, Critical CSS, lazy loading nativo, webP/AVIF, Google Maps con facade de carga diferida.',
    ],
    details: {
      'Cliente': 'Oxyzen Club Barcelona',
      'Sector': 'Club privado premium',
      'Ubicación': 'Gran Vía, 532 · Eixample, Barcelona',
      'Servicios': 'Web · Branding · SEO · Analytics',
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
    alternates: { canonical: `https://www.royaluniondesign.com/work/${slug}` },
    openGraph: {
      title: `${p.client} — Caso de estudio · RUD Studio`,
      description: p.desc,
      url: `https://www.royaluniondesign.com/work/${slug}`,
      siteName: 'RUD Studio',
      locale: 'es_ES',
      type: 'article',
      images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${p.client} | RUD Studio`,
      description: p.desc.slice(0, 150),
      images: ['https://www.royaluniondesign.com/og-image.png'],
    },
  }
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = PROJECTS[slug]
  if (!p) notFound()

  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar light />

      {/* Hero */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <nav style={{ marginBottom: '1.5rem' }}>
              <Link href="/work" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                ← PORTFOLIO
              </Link>
            </nav>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              {p.type}
            </p>
            <h1 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 14rem)', lineHeight: 0.85, color: 'var(--fg)', marginBottom: '2rem' }}>
              {p.client.toUpperCase()}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {p.tags.map((t: string) => (
                <span key={t} className="mono-label" style={{ color: 'var(--muted)', padding: '0.4rem 0.875rem', border: '1px solid var(--border)' }}>{t}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ position: 'relative', height: 'clamp(260px,48vw,560px)', overflow: 'hidden' }}>
        <img src={p.hero} alt={`${p.client} — RUD Studio`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener noreferrer"
            style={{ position: 'absolute', bottom: 20, right: 20, padding: '8px 20px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--fg)', fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none' }}>
            Visitar web ↗
          </a>
        )}
      </div>

      {/* Challenge */}
      <section style={{ background: 'var(--bg)', paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'grid', gap: '2rem' }}>
              <style>{`@media(min-width:768px){#challenge-grid{grid-template-columns:200px 1fr!important}}`}</style>
              <div id="challenge-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
                <p className="mono-label" style={{ color: 'var(--muted)' }}>EL DESAFÍO</p>
                <p style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.8, maxWidth: '70ch' }}>{p.challenge}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Work done */}
      <section style={{ background: 'var(--warm)', paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '2.5rem' }}>LO QUE HICIMOS</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {p.work.map((w: string, i: number) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.5rem', paddingBlock: '1.5rem', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <span className="mono-label" style={{ color: 'var(--border)' }}>0{i + 1}</span>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--fg)', lineHeight: 1.75 }}>{w}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      {p.images.length > 0 && (
        <section style={{ background: 'var(--bg)', paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
          <div className="container-custom">
            <ScrollReveal>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'var(--border)' }}>
                {p.images.map((img: string, i: number) => (
                  <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--warm)' }}>
                    <img src={img} alt={`${p.client} ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Details */}
      <section style={{ background: 'var(--bg)', paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {Object.entries(p.details).map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '1.5rem', paddingBlock: '1.25rem', borderTop: '1px solid var(--border)', alignItems: 'baseline' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{k.toUpperCase()}</p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--fg)', fontWeight: 500 }}>{v as string}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Next project */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', paddingBlock: 'clamp(4rem,8vw,7rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>SIGUIENTE PROYECTO</p>
            <Link href={`/work/${p.nextSlug}`} style={{ textDecoration: 'none', display: 'block' }}>
              <span className="display" style={{ fontSize: 'clamp(3rem,10vw,10rem)', lineHeight: 0.85, color: 'var(--fg)', display: 'block' }}>
                {p.next.toUpperCase()}
              </span>
              <span className="mono-label" style={{ color: 'var(--muted)', marginTop: '1.5rem', display: 'inline-block' }}>VER CASO →</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
