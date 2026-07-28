import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: "Rótulos L'Hospitalet de Llobregat · Neón LED e Instalación | RUD Studio",
  description: "Empresa de rótulos en L'Hospitalet de Llobregat: neón LED, letras corpóreas, cajas de luz y vinilos de escaparate. Fabricación propia, instalación en 15 min desde el taller. Presupuesto gratis.",
  keywords: "rótulos Hospitalet de Llobregat, neón LED Hospitalet, letras corpóreas Hospitalet, rótulo luminoso L'Hospitalet, señalética Hospitalet Barcelona",
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/hospitalet-de-llobregat' },
  openGraph: {
    title: "Rótulos L'Hospitalet de Llobregat · Neón LED e Instalación | RUD Studio",
    description: "Empresa de rótulos en L'Hospitalet de Llobregat: neón LED, letras corpóreas, cajas de luz y vinilos. Fabricación propia, instalación en 15 min.",
    url: 'https://www.royaluniondesign.com/rotulos/hospitalet-de-llobregat',
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
      areaServed: { '@type': 'City', name: "L'Hospitalet de Llobregat" },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.royaluniondesign.com/rotulos/hospitalet-de-llobregat#service',
      name: "Rótulos L'Hospitalet de Llobregat",
      description: "Fabricación e instalación de rótulos a medida en L'Hospitalet de Llobregat. Neón LED, letras corpóreas, cajas de luz, vinilos. Taller propio en Cerdanyola del Vallès, a 15 minutos.",
      url: 'https://www.royaluniondesign.com/rotulos/hospitalet-de-llobregat',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: "L'Hospitalet de Llobregat" },
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
      name: "¿Cuánto tardáis en llegar a L'Hospitalet para una visita técnica?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Desde nuestro taller en Cerdanyola del Vallès a L'Hospitalet hay aproximadamente 15 minutos en coche. Ofrecemos visita técnica gratuita para presupuestar cualquier proyecto de rótulo en la ciudad.",
      },
    },
    {
      '@type': 'Question',
      name: "¿Qué tipos de rótulos son más populares en L'Hospitalet?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En L'Hospitalet predominan las cajas de luz para el comercio de barrio (alta visibilidad nocturna, bajo mantenimiento) y el neón LED para hostelería. En la zona de Gran Via, cerca de la feria, se instalan muchas letras corpóreas de acero para showrooms y oficinas corporativas.",
      },
    },
    {
      '@type': 'Question',
      name: "¿Trabajan en toda L'Hospitalet o solo en algunas zonas?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Trabajamos en toda L'Hospitalet: Collblanc, La Torrassa, Bellvitge, Can Serra, Les Planes, Santa Eulàlia, el centro y la zona aeropuerto. Sin costes adicionales de desplazamiento.",
      },
    },
    {
      '@type': 'Question',
      name: "¿Cuánto cuesta instalar un rótulo en L'Hospitalet?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios son los mismos para toda el área metropolitana de Barcelona. Neón LED desde 800€, letras corpóreas desde 2.500€, cajas de luz desde 800€. El presupuesto incluye diseño, fabricación e instalación — sin sorpresas.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Gran Via · Mercat Municipal',
    desc: "La Gran Via de L'Hospitalet concentra el comercio de la ciudad: supermercados, moda, restaurantes y servicios. Alta competencia visual — el rótulo marca la diferencia.",
  },
  {
    sector: 'Zona universitaria',
    desc: "Las universidades y escuelas de negocios de L'Hospitalet generan demanda de señalética corporativa, cafeterías universitarias y espacios de coworking con identidad de marca.",
  },
  {
    sector: 'Sector hotelero',
    desc: 'Los hoteles de la zona aeropuerto y Gran Via usan rótulos de alta visibilidad y señalética multilingüe. Letras corpóreas de gran formato y señalización de dirección.',
  },
  {
    sector: 'Comercio de barrio',
    desc: 'Barrios como Collblanc, La Torrassa y Bellvitge tienen una red comercial activa que renueva imagen con vinilos de escaparate, cajas de luz y rótulos de madera.',
  },
  {
    sector: 'Restauración y hostelería',
    desc: "Restaurantes, bares y pastelerías de L'Hospitalet que quieren diferenciarse con neón LED en barra, letras en fachada y señalética de terraza.",
  },
  {
    sector: 'Oficinas y despachos',
    desc: 'La proximidad a la feria de Barcelona (Gran Via) concentra oficinas, showrooms y centros de negocios que necesitan señalética corporativa profesional.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'Aluminio, acero o latón. Con o sin retroiluminación. Muy demandadas en la zona de Gran Via y showrooms cercanos a la feria de Barcelona.' },
  { tipo: 'Neón LED', desc: 'Perfecto para hostelería y retail. Bajo consumo, larga vida útil, visible de día y de noche.' },
  { tipo: 'Cajas de luz', desc: "Iluminación uniforme, imagen limpia. La opción más popular en el comercio de barrio de L'Hospitalet por su visibilidad nocturna y bajo mantenimiento." },
  { tipo: 'Vinilos de escaparate', desc: 'Desde corte a medida hasta impresión fotográfica. Cambia el escaparate por temporada sin obra ni inversión elevada.' },
]

export default function RotulosHospitalet() {
  const zonas = [
    { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
    { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
    { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
    { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
    { href: '/rotulos/sants-barcelona', label: 'Sants' },
    { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
    { href: '/rotulos/badalona-barcelona', label: 'Badalona' },
    { href: '/rotulos/born-barcelona', label: 'El Born' },
    { href: '/rotulos/sant-cugat-del-valles', label: 'Sant Cugat' },
    { href: '/rotulos/terrassa-barcelona', label: 'Terrassa' },
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>{"L'HOSPITALET"}</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=hospitalet-de-llobregat"
              label="Presupuesto rótulos Hospitalet"
              location="hero-hospitalet"
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
              QUÉ FABRICAMOS<br /><em>{"EN L'HOSPITALET"}</em>
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
                href="/contact?servicio=rotulos&barrio=hospitalet-de-llobregat"
                label="Presupuesto rótulos Hospitalet bottom"
                location="bottom-hospitalet"
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
