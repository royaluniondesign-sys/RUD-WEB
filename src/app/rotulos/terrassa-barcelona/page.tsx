import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Rótulos Terrassa · Neón LED, Letras Corpóreas e Instalación | RUD Studio',
  description: 'Empresa de rótulos en Terrassa: neón LED, letras corpóreas, cajas de luz y señalética para comercios, industria y hostelería. Fabricación propia en Cerdanyola del Vallès. Presupuesto gratis.',
  keywords: 'rótulos Terrassa, neón LED Terrassa, letras corpóreas Terrassa, rótulo luminoso Terrassa, señalética Terrassa Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/terrassa-barcelona' },
  openGraph: {
    title: 'Rótulos Terrassa · Neón LED, Letras Corpóreas e Instalación | RUD Studio',
    description: 'Empresa de rótulos en Terrassa: neón LED, letras corpóreas, cajas de luz y señalética para comercios, industria y hostelería. Fabricación propia en Cerdanyola del Vallès. Presupuesto gratis.',
    url: 'https://www.royaluniondesign.com/rotulos/terrassa-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/services/neon-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.royaluniondesign.com/#organization',
      name: 'RUD Studio',
      url: 'https://www.royaluniondesign.com',
      telephone: '+34645593227',
      email: 'hello@royaluniondesign.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cerdanyola del Vallès',
        addressRegion: 'Barcelona',
        addressCountry: 'ES',
      },
      areaServed: { '@type': 'City', name: 'Barcelona' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.royaluniondesign.com/rotulos/terrassa-barcelona#service',
      name: 'Rótulos Terrassa',
      description: 'Fabricación e instalación de rótulos a medida en Terrassa. Neón LED, letras corpóreas, cajas de luz y señalética para comercios, industria y hostelería. Fabricación propia en Cerdanyola del Vallès.',
      url: 'https://www.royaluniondesign.com/rotulos/terrassa-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Terrassa' },
      serviceType: 'Fabricación e instalación de rótulos',
      isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Tenéis experiencia en señalética industrial en Terrassa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Fabricamos señalética para naves industriales, polígonos y empresas de Terrassa: paneles de dirección, señalización de zonas de trabajo, placas de identificación y rótulos de fachada de gran formato. Experiencia en sectores regulados (salud, alimentación, logística) con normativa específica de señalización.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda la instalación de un rótulo en Terrassa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde la aprobación del presupuesto, el plazo total (fabricación + instalación) es de 10 a 15 días hábiles para proyectos estándar. Para proyectos de señalética industrial de mayor volumen, entre 3 y 6 semanas. Llegamos a Terrassa en 30 minutos desde Cerdanyola del Vallès.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más popular en el comercio de Terrassa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el eje comercial de Terrassa predominan las cajas de luz para franquicias y negocios que necesitan visibilidad nocturna constante, y el neón LED para hostelería y tiendas lifestyle. Para el sector industrial, la señalética en aluminio composite y acero es el estándar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para instalar un rótulo en Terrassa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para rótulos en el interior de un local no se necesita licencia. Para rótulos en fachada, el Ajuntament de Terrassa exige comunicación previa o licencia de obra menor según las dimensiones y la zona. Nosotros tramitamos la documentación necesaria para todos nuestros proyectos en Terrassa.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Industria y polígonos',
    desc: 'Terrassa tiene uno de los tejidos industriales más activos de Cataluña. Señalética de planta, rótulos de nave industrial, identificación de zonas de trabajo y señalización de seguridad.',
  },
  {
    sector: 'Eje comercial del centro',
    desc: 'El centro de Terrassa concentra moda, hostelería y servicios en un eje peatonal activo. Rótulos de fachada, vinilos de escaparate y señalética de interior para diferenciarse en la calle comercial.',
  },
  {
    sector: 'Hostelería y restauración',
    desc: 'Bares, restaurantes y cafeterías de Terrassa que invierten en un rótulo de impacto: neón LED en barra, letras en fachada, señalética de terraza.',
  },
  {
    sector: 'Clínicas y salud',
    desc: 'Centros médicos privados, clínicas dentales y centros de especialidades que necesitan señalética profesional, accesible y de imagen cuidada.',
  },
  {
    sector: 'Escuelas de negocios y formación',
    desc: 'Terrassa cuenta con oferta formativa amplia: escuelas de negocio, academias y centros de FP que necesitan señalética institucional de calidad.',
  },
  {
    sector: 'Retail y moda',
    desc: 'Tiendas de moda, complementos y hogar del centro de Terrassa que compiten en imagen con las grandes cadenas mediante rótulos originales y escaparates diferenciados.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'Aluminio, acero o latón. Con o sin retroiluminación. Resistentes a la intemperie y sin mantenimiento.' },
  { tipo: 'Neón LED', desc: 'Perfecto para hostelería y retail. Bajo consumo, larga vida útil, visible de día y de noche.' },
  { tipo: 'Cajas de luz', desc: 'Iluminación uniforme, imagen limpia. Ideal para comercios y franquicias que necesitan visibilidad nocturna constante.' },
  { tipo: 'Vinilos de escaparate', desc: 'Desde corte a medida hasta impresión fotográfica. Cambia el escaparate por temporada sin obra.' },
]

export default function RotulosTerrassa() {
  const zonas = [
    { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
    { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
    { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
    { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
    { href: '/rotulos/sants-barcelona', label: 'Sants' },
    { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
    { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
    { href: '/rotulos/badalona-barcelona', label: 'Badalona' },
    { href: '/rotulos/born-barcelona', label: 'El Born' },
    { href: '/rotulos/sant-cugat-del-valles', label: 'Sant Cugat' },
  ]

  const servicios = [
    { href: '/rotulos/neon-led-barcelona', titulo: 'NEÓN LED', desc: 'Cualquier tipografía, logotipo o forma. Bajo consumo. IP65 para exterior.' },
    { href: '/rotulos/letras-corporeas-barcelona', titulo: 'LETRAS CORPÓREAS', desc: 'Aluminio, acero inox, metacrilato. Con o sin retroiluminación halo.' },
    { href: '/rotulos/cajas-de-luz-barcelona', titulo: 'CAJAS DE LUZ', desc: 'LED interior, frente de metacrilato o tela. Visibilidad 24h.' },
    { href: '/rotulos/vinilos-escaparate-barcelona', titulo: 'VINILOS ESCAPARATE', desc: 'Corte, impresión, esmerilado, microperforado. Desde 48h.' },
    { href: '/rotulos/senaletica-interior-barcelona', titulo: 'SEÑALÉTICA INTERIOR', desc: 'Directorios, numeración, flechas, identificación de espacios.' },
    { href: '/rotulos/publicidad-exterior-barcelona', titulo: 'PUBLICIDAD EXTERIOR', desc: 'Banderolas, lonas, vallas y paneles de gran formato.' },
  ]

  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosGeo('terrassa-barcelona', 'Terrassa'))) }} />
      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← RÓTULOS BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BARCELONA · TALLER PROPIO · INSTALACIÓN INCLUIDA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>RÓTULOS</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>TERRASSA</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=terrassa-barcelona"
              label="Presupuesto rótulos Terrassa"
              location="hero-terrassa"
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}
            >
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* SERVICIOS EN LA ZONA */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — SERVICIOS EN LA ZONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ FABRICAMOS<br /><em>EN TERRASSA</em>
            </h2>
          </ScrollReveal>
          <div>
            {servicios.map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 40}>
                <Link href={s.href} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{s.titulo}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                    <span className="mono-label" style={{ color: 'var(--muted)', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS<br /><em>FRECUENTES</em>
            </h2>
          </ScrollReveal>
          <div>
            {faqSchema.mainEntity.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details style={{ borderTop: '1px solid var(--border)' }}>
                  <summary style={{ padding: '1.25rem 0', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, userSelect: 'none', color: 'var(--fg)' }}>
                    <span>{item.name}</span>
                    <span style={{ flexShrink: 0, width: 22, height: 22, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, color: 'var(--muted)' }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, paddingBottom: '1.25rem', maxWidth: '65ch' }}>{item.acceptedAnswer.text}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* ZONAS CERCANAS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMBIÉN SERVIMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ZONAS<br /><em>CERCANAS</em>
            </h2>
          </ScrollReveal>
          <div>
            {zonas.slice(0, 6).map((z, i) => (
              <ScrollReveal key={z.href} delay={i * 30}>
                <Link href={z.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Rótulos {z.label}</span>
                  <span className="mono-label" style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto gratuito · Respondemos en 24h
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PIDE TU<br /><em>PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=terrassa-barcelona"
                label="Presupuesto rótulos Terrassa bottom"
                location="bottom-terrassa"
                className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}
              >
                SOLICITAR PRESUPUESTO →
              </TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                TELEGRAM · RESPUESTA INMEDIATA
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
