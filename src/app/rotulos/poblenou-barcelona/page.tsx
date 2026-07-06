import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Rótulos Poblenou Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos a medida en Poblenou y el distrito 22@ de Barcelona: neón LED, letras industriales, cajas de luz y señalética para startups, coworkings y restaurantes modernos. Presupuesto en 24h.',
  keywords: 'rótulos Poblenou Barcelona, rótulos 22@ Barcelona, neón LED Poblenou, letras industriales Poblenou, señalética startups Barcelona, rótulos Rambla del Poblenou',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/poblenou-barcelona' },
  openGraph: {
    title: 'Rótulos Poblenou Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en Poblenou y el 22@: neón LED, letras industriales, señalética para startups y restaurantes modernos. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/poblenou-barcelona',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/poblenou-barcelona#service',
      name: 'Rótulos Poblenou Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en Poblenou y el distrito 22@ de Barcelona. Neón LED, letras industriales, cajas de luz y señalética para startups, coworkings y hostelería moderna.',
      url: 'https://www.royaluniondesign.com/rotulos/poblenou-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Poblenou, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en Poblenou?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al Poblenou hay aproximadamente 20-25 minutos. La instalación de un rótulo estándar tarda entre 2 y 5 horas. Para espacios en el 22@ con requisitos técnicos específicos, coordinamos previamente con el propietario del local para garantizar una instalación sin incidencias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más habitual en el distrito 22@ de Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el 22@ predominan tres tipos: neón LED para hostelería y retail (muy demandado en bares y restaurantes de moda), letras corpóreas metálicas con acabado industrial para oficinas y startups, y señalética interior modular para coworkings y espacios de trabajo. El estilo industrial con materiales nobles —acero corten, aluminio negro— es muy característico de la zona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis señalética para startups y oficinas en el Poblenou?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es uno de nuestros servicios más demandados en el 22@. Diseñamos e instalamos señalética corporativa completa: rótulo de entrada, dirección de espacios, numeración de salas, señales de emergencia homologadas y branding de paredes. Trabajamos con el Manual de Identidad de la empresa para garantizar coherencia de marca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El neón LED es adecuado para un bar o restaurante en la Rambla del Poblenou?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalmente. El neón LED es uno de los elementos más demandados en la hostelería de la Rambla del Poblenou y alrededores. Genera visibilidad nocturna, atrae clientes y crea contenido fotográfico orgánico en redes sociales. Fabricamos con protección IP65 para exterior y ofrecemos 2 años de garantía.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Startups & empresas tecnológicas',
    desc: 'El 22@ concentra cientos de startups y scaleups. Señalética corporativa, rótulo de recepción y branding de oficina que reflejan cultura de empresa y valores de marca.',
  },
  {
    sector: 'Coworkings & espacios de trabajo',
    desc: 'Los coworkings del Poblenou necesitan señalética modular, dirección de espacios y rótulos de entrada que transmitan profesionalidad y dinamismo.',
  },
  {
    sector: 'Restaurantes & bares modernos',
    desc: 'La Rambla del Poblenou y las calles adyacentes tienen una oferta gastronómica joven y vibrante. El neón LED y las letras industriales son los rótulos más demandados.',
  },
  {
    sector: 'Estudios de diseño & agencias creativas',
    desc: 'Los estudios creativos del Poblenou buscan rótulos que sean parte de su portafolio. Instalaciones artísticas de neón, letras en acero y vinilos de impacto visual.',
  },
  {
    sector: 'Pop-ups & espacios efímeros',
    desc: 'El Poblenou es un hub de pop-ups y eventos temporales. Rótulos desmontables, vinilos de corta duración y neones de alquiler para activaciones de marca.',
  },
  {
    sector: 'Tiendas & retail moderno',
    desc: 'Tiendas de diseño, concept stores y flagships en el Poblenou apuestan por rótulos de carácter industrial: metal negro, neón en tubo, letras corpóreas de gran formato.',
  },
]

const TIPOS = [
  { tipo: 'Neón LED industrial', desc: 'El favorito del Poblenou. Tubo de silicona flexible sobre soporte metálico. Perfecto para bares, restaurantes y estudios con estética raw y urbana.' },
  { tipo: 'Letras corpóreas metálicas', desc: 'Acero corten, aluminio negro o acero inoxidable. El lenguaje visual del 22@: materiales nobles con acabado industrial.' },
  { tipo: 'Señalética modular', desc: 'Sistemas de señalización para coworkings y oficinas. Placas intercambiables, dirección de espacios, numeración. Instalación rápida y actualizable.' },
  { tipo: 'Cajas de luz', desc: 'Iluminación uniforme y limpia. Perfectas para fachadas de locales en la Rambla del Poblenou y escaparates de retail moderno.' },
]

export default function RotulosPoblenou() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosGeo('poblenou-barcelona', 'Poblenou'))) }} />
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EN POBLENOU</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=poblenou-barcelona"
              label="Presupuesto rótulos Poblenou"
              location="hero-poblenou"
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
              QUÉ FABRICAMOS<br /><em>EN POBLENOU</em>
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
              { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
              { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
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
                href="/contact?servicio=rotulos&barrio=poblenou-barcelona"
                label="Presupuesto rótulos Poblenou bottom"
                location="bottom-poblenou"
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
