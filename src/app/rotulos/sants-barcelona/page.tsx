import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Sants Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos funcionales y resistentes en el barrio de Sants, Barcelona: neón LED, cajas de luz, vinilos y letras corpóreas para el comercio de barrio. Presupuesto en 24h.',
  keywords: 'rótulos Sants Barcelona, rótulo Carrer de Sants, rótulos comercio barrio Barcelona, neón LED Sants, letras corpóreas Sants, señalética tiendas Sants Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/sants-barcelona' },
  openGraph: {
    title: 'Rótulos Sants Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en el barrio de Sants: neón LED, cajas de luz, vinilos y letras corpóreas para el comercio tradicional y los nuevos negocios. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/sants-barcelona',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/sants-barcelona#service',
      name: 'Rótulos Sants Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en el barrio de Sants, Barcelona. Neón LED, cajas de luz, vinilos y letras corpóreas para el comercio de proximidad y los nuevos negocios del barrio.',
      url: 'https://www.royaluniondesign.com/rotulos/sants-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Sants, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en el barrio de Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al barrio de Sants hay entre 15 y 20 minutos. La instalación de un rótulo de comercio estándar tarda entre 2 y 4 horas. Trabajamos en el horario que mejor le convenga al negocio, incluyendo fuera del horario comercial para no interferir con la actividad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más habitual en el Carrer de Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el Carrer de Sants y las calles comerciales del barrio predominan las cajas de luz (por su bajo coste y alta visibilidad), los vinilos de escaparate y los rótulos de letras corpóreas en aluminio o PVC. Para la hostelería, el neón LED está cada vez más demandado. Priorizamos soluciones duraderas y fáciles de mantener.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si necesito renovar el rótulo de un local de toda la vida en Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La renovación de rótulos es uno de nuestros servicios más habituales. Desmontamos el rótulo antiguo, limpiamos la fachada si es necesario y instalamos el nuevo. También tramitamos la baja del rótulo anterior en el Ayuntamiento y el alta del nuevo. El proceso completo suele resolverse en una jornada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo básico para un comercio en Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un vinilo de escaparate puede partir de 150€ para un pequeño comercio. Una caja de luz estándar para fachada está entre 400€ y 900€ según medida. Las letras corpóreas en aluminio parten de 600€. El neón LED de mostrador empieza en 800€. Todos los precios incluyen diseño, fabricación e instalación. IVA no incluido.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Comercio tradicional & tiendas de barrio',
    desc: 'El Carrer de Sants es uno de los ejes comerciales más largos de Barcelona. Tiendas de alimentación, ropa, ferretería y papelería que buscan rótulos funcionales, duraderos y con buena visibilidad.',
  },
  {
    sector: 'Bares & restaurantes de barrio',
    desc: 'La hostelería de Sants apuesta por rótulos con personalidad pero sin excesos. Cajas de luz, vinilos tipográficos y, cada vez más, neón LED para bares con identidad propia.',
  },
  {
    sector: 'Peluquerías & centros de estética',
    desc: 'Un sector muy activo en Sants. Necesitan rótulos llamativos, bien iluminados y resistentes. Cajas de luz con imagen de marca y vinilos de escaparate para comunicar servicios y promociones.',
  },
  {
    sector: 'Supermercados & alimentación',
    desc: 'Grandes rótulos de fachada con alta visibilidad. Cajas de luz de gran formato, letras corpóreas en aluminio y señalética de dirección interior para mercados y colmados.',
  },
  {
    sector: 'Clínicas dentales & centros de salud',
    desc: 'Los centros de salud de Sants necesitan señalética clara y normativa: rótulo exterior identificativo, señales de emergencia homologadas y señalética interior de dirección.',
  },
  {
    sector: 'Nuevos negocios & emprendedores',
    desc: 'Sants atrae emprendedores que apuestan por el comercio de proximidad. Ofrecemos soluciones completas desde el diseño del logotipo hasta la instalación del primer rótulo, con presupuestos adaptados.',
  },
]

const TIPOS = [
  { tipo: 'Cajas de luz', desc: 'Alta visibilidad de día y de noche, bajo mantenimiento. La opción más demandada en el comercio de barrio. Disponibles en cualquier medida.' },
  { tipo: 'Vinilos de escaparate', desc: 'Solución económica y versátil. Desde corte a plotter hasta impresión fotográfica. Perfectos para promociones temporales y renovaciones de imagen sin gran inversión.' },
  { tipo: 'Letras corpóreas', desc: 'Aluminio, PVC o acero. Efecto volumétrico que destaca en la fachada. Duraderas y fáciles de mantener. Con o sin iluminación integrada.' },
  { tipo: 'Neón LED', desc: 'Cada vez más demandado en la hostelería de Sants. Bajo consumo, larga vida útil y gran impacto visual. Perfecto para bares y restaurantes con identidad.' },
]

export default function RotulosSants() {
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>RÓTULOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EN SANTS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=sants-barcelona"
              label="Presupuesto rótulos Sants"
              location="hero-sants"
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
              QUÉ FABRICAMOS <br /><em>EN SANTS</em>
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
            {[
              { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
              { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
              { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
              { href: '/rotulos/sarria-barcelona', label: 'Sarrià' },
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
              PIDE TU <br /><em>PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=sants-barcelona"
                label="Presupuesto rótulos Sants bottom"
                location="bottom-sants"
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
