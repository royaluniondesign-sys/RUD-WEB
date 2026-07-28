import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Eixample Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos a medida en el Eixample Barcelona: neón LED, letras corpóreas, cajas de luz y vinilos. Cumplimos la normativa de fachadas del Ayuntamiento. Presupuesto en 24h.',
  keywords: 'rótulos Eixample Barcelona, rótulos Passeig de Gràcia, rótulo Eixample normativa fachada, neón LED Eixample, letras corpóreas Eixample, señalética Eixample Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/eixample-barcelona' },
  openGraph: {
    title: 'Rótulos Eixample Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en el Eixample: neón LED, letras corpóreas, cajas de luz. Normativa municipal incluida. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/eixample-barcelona',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/eixample-barcelona#service',
      name: 'Rótulos Eixample Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en el Eixample de Barcelona. Neón LED, letras corpóreas, cajas de luz, vinilos. Cumplimos normativa municipal de fachadas.',
      url: 'https://www.royaluniondesign.com/rotulos/eixample-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Eixample, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en el Eixample de Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al Eixample hay menos de 20 minutos. La instalación de un rótulo de fachada estándar tarda entre 2 y 5 horas. Para fachadas catalogadas del Eixample coordinamos también los permisos con el Ayuntamiento de Barcelona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué normativa de rótulos existe en el Eixample?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Eixample tiene una normativa estricta de rótulos en fachadas: no se permiten rótulos que sobresalgan más de 15 cm de la línea de fachada en planta baja, y los rótulos luminosos deben apagarse a las 23h en locales sin actividad nocturna. Nosotros gestionamos la documentación y licencias necesarias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo encaja mejor en el Passeig de Gràcia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el Passeig de Gràcia y la Rambla Catalunya predominan las letras corpóreas de latón o acero cepillado retroiluminadas, y los rótulos de caja de luz con vinilo impreso de alta calidad. El neón LED también es muy demandado en restaurantes boutique y hoteles de la zona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia municipal para un rótulo en el Eixample?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. En Barcelona cualquier rótulo en fachada o interior visible desde la calle requiere comunicación previa o licencia al Ayuntamiento. Nosotros gestionamos la tramitación completa: proyecto técnico, licencia de obras menor y alta de instalación eléctrica si procede.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Moda & retail de lujo',
    desc: 'Boutiques y concept stores del Passeig de Gràcia y Rambla Catalunya necesitan rótulos de alta calidad que reflejen su marca: letras en latón, retroiluminación cálida, acabados premium.',
  },
  {
    sector: 'Restaurantes & hoteles boutique',
    desc: 'La hostelería del Eixample compite en imagen. Un rótulo de neón LED o caja de luz bien diseñado convierte la fachada de la Gran Via o el Consell de Cent en el mejor elemento de marketing.',
  },
  {
    sector: 'Oficinas & despachos profesionales',
    desc: 'Firmas de abogados, consultoras, agencias creativas. Señalética corporativa interior y rótulo de identificación exterior. Discreción y calidad de acabados.',
  },
  {
    sector: 'Clínicas & centros de estética',
    desc: 'Muchos centros médicos y estéticos se concentran en el Eixample. Rótulos con normativa sanitaria, señalética interior de dirección y chapas de identificación.',
  },
  {
    sector: 'Gastronomía & cafeterías',
    desc: 'Los cafés y bistrós del Eixample usan el neón LED como elemento de decoración y marketing. Un letrero de neón genera contenido orgánico en redes sociales desde el primer día.',
  },
  {
    sector: 'Tiendas de barrio premium',
    desc: 'Desde librerías de diseño hasta florerías artesanales: el Eixample tiene una red de pequeño comercio que cuida mucho su imagen. Vinilos de escaparate, rótulos de madera y letras volumétricas.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'Aluminio, acero o latón. Con o sin retroiluminación. El más solicitado en fachadas catalogadas del Eixample.' },
  { tipo: 'Neón LED', desc: 'Perfecto para hostelería y retail. Bajo consumo, larga vida útil, visible de día y de noche.' },
  { tipo: 'Cajas de luz', desc: 'Iluminación uniforme, imagen limpia. Ideal para locales en planta baja de la Gran Via o Aragó.' },
  { tipo: 'Vinilos de escaparate', desc: 'Desde corte a medida hasta impresión fotográfica. Cambia el escaparate por temporada.' },
]

export default function RotulosEixample() {
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EN EL EIXAMPLE</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=eixample-barcelona"
              label="Presupuesto rótulos Eixample"
              location="hero-eixample"
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
              QUÉ FABRICAMOS<br /><em>EN EL EIXAMPLE</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/rotulos/neon-led-barcelona', titulo: 'NEÓN LED', desc: 'Cualquier tipografía, logotipo o forma. Bajo consumo. IP65 para exterior.' },
              { href: '/rotulos/letras-corporeas-barcelona', titulo: 'LETRAS CORPÓREAS', desc: 'Aluminio, acero inox, metacrilato. Con o sin retroiluminación halo.' },
              { href: '/rotulos/cajas-de-luz-barcelona', titulo: 'CAJAS DE LUZ', desc: 'LED interior, frente de metacrilato o tela. Visibilidad 24h.' },
              { href: '/rotulos/vinilos-escaparate-barcelona', titulo: 'VINILOS ESCAPARATE', desc: 'Corte, impresión, esmerilado, microperforado. Desde 48h.' },
              { href: '/rotulos/senaletica-interior-barcelona', titulo: 'SEÑALÉTICA INTERIOR', desc: 'Directorios, numeración, flechas, identificación de espacios.' },
              { href: '/rotulos/publicidad-exterior-barcelona', titulo: 'PUBLICIDAD EXTERIOR', desc: 'Banderolas, lonas, vallas y paneles de gran formato.' },
            ].map((s, i) => (
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
            {[
              { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
              { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
              { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
              { href: '/rotulos/sants-barcelona', label: 'Sants' },
              { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
              { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
              { href: '/rotulos/badalona-barcelona', label: 'Badalona' },
              { href: '/rotulos/born-barcelona', label: 'El Born' },
              { href: '/rotulos/sant-cugat-del-valles', label: 'Sant Cugat' },
              { href: '/rotulos/terrassa-barcelona', label: 'Terrassa' },
            ].slice(0, 6).map((z, i) => (
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
                href="/contact?servicio=rotulos&barrio=eixample-barcelona"
                label="Presupuesto rótulos Eixample bottom"
                location="bottom-eixample"
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
