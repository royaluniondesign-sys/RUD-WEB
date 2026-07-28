import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Gràcia Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos artesanales en el barrio de Gràcia, Barcelona: neón LED, letras corpóreas, vinilos y señalética. Para restaurantes, boutiques y estudios creativos. Presupuesto en 24h.',
  keywords: 'rótulos Gràcia Barcelona, rótulo neón LED Gràcia, letras corpóreas Gràcia, rótulos Carrer Verdi, rótulos Plaça del Sol, señalética barrio Gràcia Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/gracia-barcelona' },
  openGraph: {
    title: 'Rótulos Gràcia Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en el barrio de Gràcia: neón LED, letras corpóreas, vinilos. Estilo artesanal y creativo. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/gracia-barcelona',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/gracia-barcelona#service',
      name: 'Rótulos Gràcia Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en el barrio de Gràcia, Barcelona. Neón LED, letras corpóreas, vinilos y señalética para negocios creativos e independientes.',
      url: 'https://www.royaluniondesign.com/rotulos/gracia-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Gràcia, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en Gràcia, Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al barrio de Gràcia hay menos de 25 minutos. La instalación de un rótulo estándar de fachada tarda entre 2 y 5 horas. Trabajamos en el horario que mejor le convenga al negocio para no interrumpir la actividad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo encaja mejor con el estilo de Gràcia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El barrio de Gràcia tiene una identidad artística y bohemia muy marcada. Los rótulos que mejor funcionan son el neón LED con tipografías personalizadas, las letras corpóreas en madera o metal envejecido, y los vinilos de escaparate con diseños artísticos. El objetivo es que el rótulo refleje la personalidad única del negocio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito permiso del Ayuntamiento para un rótulo en Gràcia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. En Gràcia, como en el resto de Barcelona, cualquier rótulo exterior requiere comunicación previa o licencia al Ayuntamiento. En calles como el Carrer Verdi o el Carrer Gran de Gràcia pueden aplicar restricciones adicionales según la categoría de protección del edificio. Nosotros gestionamos todos los trámites administrativos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis rótulos para pequeños negocios y estudios creativos en Gràcia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. Gran parte de nuestra cartera son pequeños negocios independientes: cafeterías, estudios de tatuaje, boutiques, galerías y estudios de diseño. Adaptamos el presupuesto al tamaño del proyecto y ofrecemos soluciones desde vinilos de escaparate desde 150€ hasta instalaciones de neón LED completas.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Restaurantes & cafeterías independientes',
    desc: 'Gràcia concentra decenas de restaurantes y cafés de autor. Un neón LED con la frase o logotipo del local genera contenido viral en Instagram desde el primer día de apertura.',
  },
  {
    sector: 'Boutiques artesanales & concept stores',
    desc: 'Las tiendas del Carrer Verdi y alrededores buscan rótulos que cuenten una historia. Letras en madera, vinilos artísticos y señalética con carácter propio, no corporativo.',
  },
  {
    sector: 'Estudios creativos & galerías',
    desc: 'Estudios de diseño, fotografía, tatuaje y galerías de arte: necesitan un rótulo que comunique creatividad. El neón personalizado y las letras volumétricas son la elección habitual.',
  },
  {
    sector: 'Bares & locales de ocio nocturno',
    desc: 'El barrio de Gràcia tiene una vida nocturna activa. Los rótulos luminosos —neón LED, cajas de luz— son esenciales para destacar en la Plaça del Sol o el Carrer de Verdi por la noche.',
  },
  {
    sector: 'Herboristerías & tiendas orgánicas',
    desc: 'El perfil de cliente de Gràcia valora lo artesanal y lo sostenible. Rótulos en madera natural, vinilos ecológicos y señalética con materiales reciclados encajan perfectamente.',
  },
  {
    sector: 'Escuelas & academias',
    desc: 'Academias de música, danza, idiomas e yoga se concentran en Gràcia. Señalética interior clara, rótulo exterior identificativo y vinilos de escaparate para comunicar la oferta.',
  },
]

const TIPOS = [
  { tipo: 'Neón LED personalizado', desc: 'Cualquier tipografía o logotipo. Perfecto para cafeterías, bares y estudios creativos que quieren impacto visual y fotografiabilidad.' },
  { tipo: 'Letras corpóreas', desc: 'Madera, metal o resina. Con o sin iluminación. Se integran perfectamente con las fachadas modernistas y los locales de ladrillo visto de Gràcia.' },
  { tipo: 'Vinilos de escaparate', desc: 'Diseño artístico o tipográfico. Cambia la imagen del escaparate por temporada o campaña sin grandes inversiones.' },
  { tipo: 'Señalética interior', desc: 'Dirección de espacios, menús en pared, identificación de zonas. Muy demandado en restaurantes y estudios multifunción.' },
]

export default function RotulosGracia() {
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
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EN GRÀCIA</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=gracia-barcelona"
              label="Presupuesto rótulos Gràcia"
              location="hero-gracia"
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
              QUÉ FABRICAMOS<br /><em>EN GRÀCIA</em>
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
                href="/contact?servicio=rotulos&barrio=gracia-barcelona"
                label="Presupuesto rótulos Gràcia bottom"
                location="bottom-gracia"
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
