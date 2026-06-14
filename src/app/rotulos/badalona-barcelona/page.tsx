import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Badalona · Neón LED, Letras Corpóreas e Instalación | RUD Studio',
  description: 'Empresa de rótulos en Badalona: neón LED, letras corpóreas, cajas de luz y vinilos para comercios, restaurantes y empresas. Fabricación propia en Cerdanyola del Vallès. Presupuesto gratis en 24h.',
  keywords: 'rótulos Badalona, neón LED Badalona, letras corpóreas Badalona, rótulo luminoso Badalona, señalética Badalona Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/badalona-barcelona' },
  openGraph: {
    title: 'Rótulos Badalona · Neón LED, Letras Corpóreas e Instalación | RUD Studio',
    description: 'Empresa de rótulos en Badalona: neón LED, letras corpóreas, cajas de luz y vinilos. Fabricación propia en Cerdanyola del Vallès. Presupuesto gratis en 24h.',
    url: 'https://royaluniondesign.com/rotulos/badalona-barcelona',
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
      areaServed: { '@type': 'City', name: 'Badalona' },
    },
    {
      '@type': 'Service',
      '@id': 'https://royaluniondesign.com/rotulos/badalona-barcelona#service',
      name: 'Rótulos Badalona',
      description: 'Fabricación e instalación de rótulos a medida en Badalona. Neón LED, letras corpóreas, cajas de luz, vinilos de escaparate. Taller propio en Cerdanyola del Vallès, a 25 minutos.',
      url: 'https://royaluniondesign.com/rotulos/badalona-barcelona',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Badalona' },
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
      name: '¿Hacéis visita técnica gratuita en Badalona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La visita técnica es gratuita en toda Badalona: Pep Ventura, Sant Roc, Bufalà, Llefià, el casco antiguo y la zona marítima. Concertamos la visita en el plazo que necesites.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en fabricarse un rótulo para Badalona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El plazo estándar es de 10 a 15 días hábiles desde la aprobación del presupuesto. Para vinilos de escaparate y señalética básica podemos entregar en 48-72 horas. La instalación en Badalona dura entre 2 y 5 horas según el tipo de rótulo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más popular en Badalona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En Badalona el neón LED es muy popular en hostelería de la zona marítima y el centro. Para el comercio textil y de moda predominan los vinilos de escaparate de temporada y las letras corpóreas de madera. En los polígonos industriales y clínicas, la señalética corporativa en aluminio es la opción más demandada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para instalar un rótulo en Badalona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para rótulos en el interior de un local no se requiere licencia. Para rótulos en fachada, el Ajuntament de Badalona exige comunicación previa o licencia de obra menor según las dimensiones y el tipo de instalación. Nosotros gestionamos todos los trámites para nuestros clientes en Badalona.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Eje comercial Pep Ventura',
    desc: 'El paseo de Pep Ventura y sus alrededores concentran el comercio principal de Badalona: rótulos de moda, hostelería y servicios en planta baja con alta visibilidad peatonal.',
  },
  {
    sector: 'Zona del puerto y playa',
    desc: 'La zona marítima de Badalona tiene restaurantes, bares y comercios orientados al turismo local. Neón LED y rótulos de madera para locales con identidad de barrio.',
  },
  {
    sector: 'Polígono Can Ruti',
    desc: 'El clúster hospitalario y empresarial de Can Ruti concentra clínicas, laboratorios y empresas de salud que necesitan señalética corporativa y rótulos de identificación profesional.',
  },
  {
    sector: 'Retail y moda',
    desc: 'Las tiendas de ropa, complementos y hogar del centro de Badalona que compiten con los centros comerciales mediante una imagen de marca cuidada y rótulos originales.',
  },
  {
    sector: 'Hostelería y restauración',
    desc: 'Restaurantes, cervecerías y bares de tapas de Badalona que usan el neón LED y las letras en madera para crear ambientes fotogénicos y diferenciados.',
  },
  {
    sector: 'Gimnasios y fitness',
    desc: 'El sector fitness crece en Badalona. Boxes de crossfit, estudios de yoga y centros de entrenamiento personal que invierten en identidad visual y señalética de impacto.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'Aluminio, acero o madera. Con o sin retroiluminación. Muy demandadas en el comercio de moda y las clínicas del polígono Can Ruti.' },
  { tipo: 'Neón LED', desc: 'Perfecto para hostelería y retail de la zona marítima y el centro. Bajo consumo, larga vida útil, visible de día y de noche.' },
  { tipo: 'Cajas de luz', desc: 'Iluminación uniforme, imagen limpia. Ideal para comercios de barrio con alta visibilidad nocturna y bajo mantenimiento.' },
  { tipo: 'Vinilos de escaparate', desc: 'Desde corte a medida hasta impresión fotográfica. Cambia el escaparate por temporada. Muy popular en el comercio textil de Badalona.' },
]

export default function RotulosBadalona() {
  const zonas = [
    { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
    { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
    { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
    { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
    { href: '/rotulos/sants-barcelona', label: 'Sants' },
    { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
    { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>BADALONA</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=badalona-barcelona"
              label="Presupuesto rótulos Badalona"
              location="hero-badalona"
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
              QUÉ FABRICAMOS<br /><em>EN BADALONA</em>
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
                href="/contact?servicio=rotulos&barrio=badalona-barcelona"
                label="Presupuesto rótulos Badalona bottom"
                location="bottom-badalona"
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
