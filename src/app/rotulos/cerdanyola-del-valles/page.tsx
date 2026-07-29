import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Cerdanyola del Vallès · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Empresa de rótulos en Cerdanyola del Vallès con taller propio. Neón LED, letras corpóreas, cajas de luz y vinilos. Fabricamos e instalamos en el mismo día. Presupuesto gratis en 2h.',
  keywords: 'rótulos Cerdanyola del Vallès, neón LED Cerdanyola, letras corpóreas Cerdanyola, rótulo luminoso Cerdanyola del Vallès, señalética Cerdanyola',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/cerdanyola-del-valles' },
  openGraph: {
    title: 'Rótulos Cerdanyola del Vallès · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Empresa de rótulos en Cerdanyola del Vallès con taller propio. Neón LED, letras corpóreas, cajas de luz y vinilos. Presupuesto gratis en 2h.',
    url: 'https://www.royaluniondesign.com/rotulos/cerdanyola-del-valles',
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
      areaServed: { '@type': 'City', name: 'Cerdanyola del Vallès' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.royaluniondesign.com/rotulos/cerdanyola-del-valles#service',
      name: 'Rótulos Cerdanyola del Vallès',
      description: 'Fabricación e instalación de rótulos a medida en Cerdanyola del Vallès. Neón LED, letras corpóreas, cajas de luz, vinilos. Taller propio en el Carrer Sant Salvador 11.',
      url: 'https://www.royaluniondesign.com/rotulos/cerdanyola-del-valles',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Cerdanyola del Vallès' },
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
      name: '¿Dónde está vuestro taller en Cerdanyola del Vallès?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro taller está en el Carrer Sant Salvador 11, Local 6, Cerdanyola del Vallès (08290). Puedes visitarnos para ver muestras de materiales y acabados en persona, de lunes a viernes de 9h a 18h.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis instalar el mismo día en Cerdanyola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, para pedidos simples (vinilos de corte, chapas, señalética básica) podemos fabricar e instalar el mismo día si confirmas el pedido antes de las 11h. Para neones LED y letras corpóreas el plazo mínimo es de 5-7 días hábiles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo en Cerdanyola del Vallès?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios son los mismos para toda el área metropolitana de Barcelona. Neón LED desde 800€, letras corpóreas desde 2.500€, cajas de luz desde 800€, vinilos de escaparate desde 150€. Presupuesto gratuito con render en menos de 24h.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para un rótulo en Cerdanyola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para rótulos en interior de locales no se necesita licencia. Para rótulos en fachada se necesita comunicación previa al Ajuntament de Cerdanyola del Vallès. Nosotros gestionamos la tramitación completa para nuestros clientes.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Parque industrial UAB',
    desc: 'Los polígonos industriales de Cerdanyola albergan empresas tech, farma y logística que necesitan señalética corporativa de calidad: rótulos de entrada, señalización de planta, paneles de dirección.',
  },
  {
    sector: 'Comercio local',
    desc: 'El centro comercial de Cerdanyola tiene una red activa de comercios que renuevan su imagen con regularidad. Vinilos de escaparate, rótulos de fachada y señalética interior.',
  },
  {
    sector: 'Restaurantes y hostelería',
    desc: 'Los restaurantes y bares del centro de Cerdanyola usan el neón LED y las letras corpóreas para diferenciarse. Instalación en el mismo día en muchos casos.',
  },
  {
    sector: 'Empresas tecnológicas',
    desc: 'La proximidad de Cerdanyola al campus de la UAB y al Parc de la Recerca concentra empresas de base tecnológica que cuidan su imagen corporativa: señalética de oficinas, rótulos de recepción.',
  },
  {
    sector: 'Clínicas y salud',
    desc: 'Centros médicos, clínicas dentales y centros de fisioterapia que necesitan señalética sanitaria clara, accesible y conforme a normativa.',
  },
  {
    sector: 'Eventos y exposiciones',
    desc: 'Cerdanyola acoge eventos corporativos en el Parc de la Recerca y el campus UAB. Rótulos y señalética temporal para eventos, ferias y congresos.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'El más pedido en polígonos y empresas. Aluminio lacado, acero cepillado, con o sin retroiluminación LED.' },
  { tipo: 'Neón LED', desc: 'Para hostelería y comercio del centro. Fabricamos aquí mismo — plazos de 5-7 días para clientes locales.' },
  { tipo: 'Señalética corporativa', desc: 'Señalización de planta, paneles de dirección, chapas de identificación. Solución integral para oficinas y empresas.' },
  { tipo: 'Vinilos de escaparate', desc: 'Cambio rápido, sin obra. Instalamos el mismo día en Cerdanyola si hay material en stock.' },
]

export default function RotulosCerdanyola() {
  const zonas = [
    { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
    { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
    { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
    { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
    { href: '/rotulos/sants-barcelona', label: 'Sants' },
    { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
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
            RUD STUDIO — CERDANYOLA DEL VALLÈS · TALLER PROPIO · CARRER SANT SALVADOR 11
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>RÓTULOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>CERDANYOLA</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>DEL VALLÈS</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=cerdanyola-del-valles"
              label="Presupuesto rótulos Cerdanyola"
              location="hero-cerdanyola"
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
              QUÉ FABRICAMOS <br /><em>EN CERDANYOLA</em>
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
              PREGUNTAS <br /><em>FRECUENTES</em>
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
              ZONAS <br /><em>CERCANAS</em>
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
              PIDE TU <br /><em>PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=cerdanyola-del-valles"
                label="Presupuesto rótulos Cerdanyola bottom"
                location="bottom-cerdanyola"
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
