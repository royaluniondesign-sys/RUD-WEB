import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Rótulos El Born Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos a medida en El Born y Sant Pere Barcelona: neón LED, letras corpóreas y vinilos para restaurantes, boutiques y galerías. Presupuesto gratis en 24h con render 3D incluido.',
  keywords: 'rótulos El Born Barcelona, neón LED Born Barcelona, letras corpóreas Born, rótulo Sant Pere Barcelona, señalética Born Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/born-barcelona' },
  openGraph: {
    title: 'Rótulos El Born Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en El Born y Sant Pere Barcelona: neón LED, letras corpóreas y vinilos para restaurantes, boutiques y galerías. Presupuesto gratis en 24h con render 3D incluido.',
    url: 'https://www.royaluniondesign.com/rotulos/born-barcelona',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/born-barcelona#service',
      name: 'Rótulos El Born Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en El Born y Sant Pere de Barcelona. Neón LED, letras corpóreas en madera y latón, vinilos esmerilados para restaurantes, boutiques y galerías.',
      url: 'https://www.royaluniondesign.com/rotulos/born-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'El Born, Sant Pere, Barcelona' },
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
      name: '¿Qué tipo de rótulo funciona mejor en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En El Born el neón LED en hostelería y el material natural (madera, latón) en boutiques son los acabados más demandados. El Born tiene una identidad muy definida entre lo artesanal, lo vintage y lo contemporáneo — un rótulo bien elegido refuerza exactamente esa percepción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para instalar un rótulo en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Born forma parte del Districte de Ciutat Vella, que tiene una normativa de rótulos en fachada especialmente estricta por su valor patrimonial. Se requiere comunicación previa o licencia de obra menor en la mayoría de casos. Te orientamos sobre los trámites a seguir ante el Ajuntament de Barcelona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis hacer rótulos en formatos pequeños para locales del Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Muchos locales del Born tienen fachadas pequeñas o interiores compactos. Fabricamos neón LED desde 40 cm y letras corpóreas desde 5 cm de altura. El formato pequeño bien ejecutado tiene más impacto que un rótulo grande mal proporcional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios son los mismos para toda Barcelona: neón LED desde 800€, letras corpóreas desde 2.500€, vinilos desde 150€. En El Born muchos clientes optan por presupuestos de 1.500€-3.000€ combinando neón + vinilo esmerilado en escaparate.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Restaurantes de autor',
    desc: 'El Born concentra algunos de los restaurantes más fotografiados de Barcelona. Un neón de diseño o letras en madera vintage se convierte en el elemento de branding más compartido en Instagram.',
  },
  {
    sector: 'Boutiques de moda y diseño',
    desc: 'Las tiendas de moda independiente, joyería y diseño del Born necesitan rótulos que transmitan artesanía y exclusividad. Letras corpóreas en madera o latón, vinilos esmerilados y rotulación a mano.',
  },
  {
    sector: 'Galerías y espacios de arte',
    desc: 'Las galerías de arte contemporáneo y los espacios culturales del Born usan rótulos discretos pero de alta calidad: vinilo tipográfico, letras de madera natural, señalética minimalista en acero.',
  },
  {
    sector: 'Cafeterías de especialidad',
    desc: 'Los cafés de tercera ola del Born invierten en ambiente: neón con frase motivacional, letras vintage en pared de ladrillo visto, pizarras de madera para el menú del día.',
  },
  {
    sector: 'Hoteles boutique',
    desc: 'El Born tiene una concentración de hoteles boutique con identidad de diseño propia. Rótulos de recepción en latón, señalética de habitaciones en madera, iluminación de ambiente con neón.',
  },
  {
    sector: 'Ocio nocturno y cocktail bars',
    desc: 'Los cocktail bars y locales de ocio nocturno del Born usan el neón LED como elemento central de decoración. Visibilidad nocturna máxima y presencia en redes sociales asegurada.',
  },
]

const TIPOS = [
  { tipo: 'Neón LED', desc: 'El rey del Born. Hostelería, bares y boutiques que quieren ser fotografiados. Fabricación artesanal en cualquier forma o tipografía.' },
  { tipo: 'Letras corpóreas en madera', desc: 'El material más pedido en El Born: madera natural o lacada para tiendas de diseño, cafeterías lifestyle y galerías con identidad propia.' },
  { tipo: 'Vinilos esmerilados y tipográficos', desc: 'Para escaparates y ventanales: vinilo esmerilado con logo recortado, tipografía de alta calidad, efecto premium y discreción.' },
  { tipo: 'Letras en latón y acero', desc: 'Para boutiques premium y hoteles: latón natural o acero cepillado que patina con el tiempo y gana carácter. El acabado más demandado en el sector lujo del Born.' },
]

export default function RotulosBorn() {
  const zonas = [
    { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
    { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
    { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
    { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
    { href: '/rotulos/sants-barcelona', label: 'Sants' },
    { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
    { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
    { href: '/rotulos/badalona-barcelona', label: 'Badalona' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosGeo('born-barcelona', 'El Born'))) }} />
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EL BORN</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=born-barcelona"
              label="Presupuesto rótulos Born"
              location="hero-born"
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
              QUÉ FABRICAMOS<br /><em>EN EL BORN</em>
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
                href="/contact?servicio=rotulos&barrio=born-barcelona"
                label="Presupuesto rótulos Born bottom"
                location="bottom-born"
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
