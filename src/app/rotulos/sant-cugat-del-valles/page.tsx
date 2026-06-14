import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Sant Cugat del Vallès · Neón LED y Señalética Corporativa | RUD Studio',
  description: 'Empresa de rótulos en Sant Cugat del Vallès: neón LED, letras corpóreas, señalética corporativa y vinilos. A 10 minutos de nuestro taller en Cerdanyola. Presupuesto gratis en 2h.',
  keywords: 'rótulos Sant Cugat del Vallès, neón LED Sant Cugat, letras corpóreas Sant Cugat, señalética corporativa Sant Cugat, rótulo comercio Sant Cugat',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles' },
  openGraph: {
    title: 'Rótulos Sant Cugat del Vallès · Neón LED y Señalética Corporativa | RUD Studio',
    description: 'Empresa de rótulos en Sant Cugat del Vallès: neón LED, letras corpóreas, señalética corporativa y vinilos. A 10 minutos de nuestro taller en Cerdanyola. Presupuesto gratis en 2h.',
    url: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles',
    images: [{ url: 'https://royaluniondesign.com/services/neon-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://royaluniondesign.com/#organization',
      name: 'RUD Studio',
      url: 'https://royaluniondesign.com',
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
      '@id': 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles#service',
      name: 'Rótulos Sant Cugat del Vallès',
      description: 'Fabricación e instalación de rótulos a medida en Sant Cugat del Vallès. Neón LED, letras corpóreas, señalética corporativa y vinilos. Taller a 10 minutos en Cerdanyola del Vallès.',
      url: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Sant Cugat del Vallès' },
      serviceType: 'Fabricación e instalación de rótulos',
      isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tardáis en llegar a Sant Cugat para una visita técnica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro taller en el Carrer Sant Salvador 11 de Cerdanyola del Vallès está a 10 minutos de Sant Cugat. Podemos hacer la visita técnica el mismo día en que contactes, y en urgencias instalamos el mismo día para proyectos simples.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más popular entre las empresas de Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las empresas de Sant Cugat suelen optar por señalética corporativa integral: rótulo de fachada en letras corpóreas de aluminio o acero, señalización interior de dirección y placa de recepción. El acabado más solicitado es el aluminio anodizado con tipografía en relieve.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis placas de identificación para casas y fincas en Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Sant Cugat tiene mucha demanda de elementos de identificación premium para residencias: números de finca en acero corten, placas en latón o bronce, rótulos para puertas y buzones. Cada pieza se fabrica a medida en nuestro taller.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo para una empresa en Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del tipo de proyecto. Un rótulo de fachada en letras corpóreas estándar para una oficina empieza en 2.500€. La señalética corporativa completa (fachada + recepción + señalización interior) puede estar entre 4.000€ y 8.000€. Presupuesto detallado en menos de 48h, sin compromiso.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Empresas tecnológicas y startups',
    desc: 'Sant Cugat atrae a empresas tecnológicas, startups y consultoras internacionales que necesitan señalética corporativa de alta calidad: rótulos de recepción, señalización de oficinas y branding en espacio físico.',
  },
  {
    sector: 'Comercio del centro histórico',
    desc: 'El centro de Sant Cugat tiene una red de comercio premium: moda, joyería, gastronomía y decoración. Rótulos que transmiten calidad y coherencia de marca.',
  },
  {
    sector: 'Restaurantes y hostelería',
    desc: 'Los restaurantes y bares de la plaça de Barcelona y el centro histórico de Sant Cugat invierten en rótulos que se integren en el carácter de la ciudad: madera, forja, neón cálido.',
  },
  {
    sector: 'Colegios y centros educativos',
    desc: 'Sant Cugat tiene una concentración inusual de colegios y centros educativos internacionales. Señalética clara, accesible y duradera para espacios educativos.',
  },
  {
    sector: 'Clínicas y centros de salud',
    desc: 'Clínicas privadas, centros de psicología y consultas médicas que necesitan señalética profesional, discreta y conforme a normativa sanitaria.',
  },
  {
    sector: 'Villas privadas y residencial premium',
    desc: 'Propietarios de villas y casas de lujo en Sant Cugat que buscan rótulos de números de casa, placas de identificación y señalética de finca en materiales nobles: latón, acero o piedra.',
  },
]

const TIPOS = [
  { tipo: 'Señalética corporativa', desc: 'El producto más demandado en Sant Cugat por la concentración de empresas y oficinas. Sistemas completos de señalización interior y exterior.' },
  { tipo: 'Letras corpóreas premium', desc: 'Aluminio anodizado, acero cepillado, latón. Para empresas y comercios que quieren proyectar solidez y permanencia.' },
  { tipo: 'Neón LED', desc: 'Para hostelería, retail lifestyle y espacios de trabajo creativos. Producción local a 10 minutos — plazos mínimos.' },
  { tipo: 'Placas y elementos de identificación', desc: 'Números de casa, chapas de empresa, rótulos de buzón. Materiales nobles: latón, acero inoxidable, bronce.' },
]

export default function RotulosSantCugat() {
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>SANT CUGAT</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=sant-cugat-del-valles"
              label="Presupuesto rótulos Sant Cugat"
              location="hero-sant-cugat"
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
              QUÉ FABRICAMOS<br /><em>EN SANT CUGAT</em>
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
                href="/contact?servicio=rotulos&barrio=sant-cugat-del-valles"
                label="Presupuesto rótulos Sant Cugat bottom"
                location="bottom-sant-cugat"
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
