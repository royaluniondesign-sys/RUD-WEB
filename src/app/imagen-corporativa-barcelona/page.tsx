import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Imagen Corporativa Barcelona · Rediseño de Marca para Empresas | RUD Studio',
  description: 'Agencia de imagen corporativa en Barcelona. Renovamos o creamos la identidad visual de tu empresa: logo, colores, tipografía, aplicaciones y manual de marca. Presupuesto en 24h.',
  keywords: 'imagen corporativa Barcelona, identidad corporativa Barcelona, rediseño imagen corporativa Barcelona, branding corporativo Barcelona, renovar imagen empresa Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona' },
  openGraph: {
    title: 'Imagen Corporativa Barcelona | RUD Studio',
    description: 'Renovamos la imagen corporativa de tu empresa en Barcelona. Desde el logo hasta el rótulo del local, todo con coherencia visual.',
    url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/imagen-corporativa-barcelona#service',
  name: 'Imagen Corporativa Barcelona',
  description: 'Diseño y rediseño de imagen corporativa para empresas en Barcelona. Identidad visual completa, manual de marca y aplicación en todos los soportes.',
  url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://www.royaluniondesign.com/#organization',
    name: 'RUD Studio',
    address: { '@type': 'PostalAddress', streetAddress: 'Carrer Sant Salvador 11, Local 6', addressLocality: 'Cerdanyola del Vallès', postalCode: '08290', addressCountry: 'ES' },
  },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de imagen corporativa',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditoría de marca', url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rediseño de imagen corporativa', url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manual de identidad corporativa', url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Cuánto cuesta renovar la imagen corporativa de mi empresa?', acceptedAnswer: { '@type': 'Answer', text: 'Un proyecto de imagen corporativa en RUD Studio parte desde 1.800€ para una actualización y desde 3.000€ para un rediseño completo. El presupuesto depende del alcance: número de soportes, si hay manual de marca, si incluye aplicaciones físicas (rótulos, material POP). Enviamos propuesta en 24h.' } },
    { '@type': 'Question', name: '¿Qué diferencia hay entre imagen corporativa e identidad visual?', acceptedAnswer: { '@type': 'Answer', text: 'La identidad visual es el sistema gráfico (logo, colores, tipografías). La imagen corporativa es todo lo que transmite tu empresa: identidad visual + tono de comunicación + aplicaciones en todos los soportes (digital, impresión, señalética, uniformes). Trabajamos los dos niveles.' } },
    { '@type': 'Question', name: '¿Cuánto tiempo tarda un proyecto de imagen corporativa?', acceptedAnswer: { '@type': 'Answer', text: 'Entre 4 y 8 semanas según el alcance. Una actualización de logo con manual básico puede estar en 3 semanas. Un rediseño completo con todas las aplicaciones (rótulo incluido) lleva entre 6 y 10 semanas.' } },
    { '@type': 'Question', name: '¿Trabajáis también el rótulo y la señalética del local?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, y es uno de nuestros puntos fuertes en Barcelona. Diseñamos la identidad visual y la aplicamos en el rótulo del local, la señalética interior, el material POP y los escaparates. Todo sale del mismo sistema visual: coherencia total.' } },
  ],
}

const SERVICIOS = [
  { t: 'Auditoría de marca', d: 'Analizamos tu imagen actual: logo, soportes, coherencia, percepción. Entregamos un informe con puntos de mejora y prioridades.', precio: 'desde 400€' },
  { t: 'Actualización de imagen', d: 'Modernizamos tu logo y sistema visual manteniendo el reconocimiento de marca. Para empresas consolidadas que necesitan una puesta a punto.', precio: 'desde 1.800€' },
  { t: 'Rediseño completo', d: 'Nuevo posicionamiento, nueva identidad visual, nuevo manual de marca. Para empresas que cambian de dirección o salen a mercados nuevos.', precio: 'desde 3.000€' },
  { t: 'Aplicaciones físicas', d: 'Rótulo del local, señalética, roll-up, material POP, uniformes. Producción e instalación en Barcelona y área metropolitana.', precio: 'presupuesto a medida' },
]

export default function ImagenCorporativaBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      <section style={{ background: 'var(--bg)', minHeight: '55svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — IMAGEN CORPORATIVA PARA PYMES EN BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>IMAGEN</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>CORPORATIVA</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>AUDITORÍA · ACTUALIZACIÓN · REDISEÑO COMPLETO · DESDE 1.800€</p>
            <TrackedLink href="/contact?servicio=imagen-corporativa" label="Presupuesto imagen corporativa" location="hero-ic" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem,5vw,6rem)', alignItems: 'start', marginBottom: '4rem' }}>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--fg)', lineHeight: 1 }}>
                TU EMPRESA<br /><em>COMUNICA</em><br />ANTES DE<br />HABLAR
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--fg)', lineHeight: 1.75 }}>Un logo desactualizado, colores que no coinciden entre la web y el local, o una señalética sin coherencia con el resto de la marca: todo eso hace que tu empresa parezca más pequeña de lo que es.</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>En RUD Studio diseñamos imagen corporativa para pymes en Barcelona que quieren parecer profesionales en todos los touchpoints, desde el escaparate hasta la firma de email.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>SERVICIOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ<br /><em>HACEMOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <ScrollReveal key={s.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.t}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
                  <p className="mono-label" style={{ color: 'var(--fg)', whiteSpace: 'nowrap' }}>{s.precio}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>FAQ</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS<br /><em>FRECUENTES</em>
            </h2>
          </ScrollReveal>
          <div>
            {faqSchema.mainEntity.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details style={{ borderTop: '1px solid var(--border)', padding: '1.5rem 0' }}>
                  <summary style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                    {faq['@type'] === 'Question' ? faq.name : ''}
                    <span style={{ color: 'var(--muted)', flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginTop: '0.75rem' }}>{faq.acceptedAnswer?.text}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>SERVICIOS RELACIONADOS</p>
          </ScrollReveal>
          <div>
            {[
              { href: '/branding-barcelona', label: 'Branding Barcelona' },
              { href: '/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona', label: 'Rediseño de Imagen Corporativa' },
              { href: '/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona', label: 'Manual de Identidad Corporativa' },
              { href: '/rotulos', label: 'Rótulos · Aplicación física de tu imagen' },
              { href: '/material-pop-barcelona', label: 'Material POP Barcelona' },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 30}>
                <Link href={item.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', gap: '2rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.label}</span>
                  <span className="mono-label" style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PIDE TU<br /><em>PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=imagen-corporativa" label="Presupuesto imagen corporativa bottom" location="bottom-ic" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
