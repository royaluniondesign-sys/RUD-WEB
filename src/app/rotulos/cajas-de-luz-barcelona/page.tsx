import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Cajas de Luz Barcelona · Rótulos Luminosos LED | RUD Studio',
  description: 'Cajas de luz y rótulos luminosos en Barcelona: máxima visibilidad diurna y nocturna. Aluminio, metacrilato, LED interior. Fabricación propia, instalación incluida.',
  keywords: 'cajas de luz Barcelona, rótulos luminosos Barcelona, caja de luz LED Barcelona, rótulo luminoso precio Barcelona, caja de luz retroiluminada Barcelona, rótulos bandeja LED Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/cajas-de-luz-barcelona' },
  openGraph: {
    title: 'Cajas de Luz y Rótulos Luminosos Barcelona | RUD Studio',
    description: 'Cajas de luz con LED interior: máxima visibilidad nocturna. Fabricación propia en Barcelona. Presupuesto en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/cajas-de-luz-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/services/rotulos-luminosos.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/rotulos/cajas-de-luz-barcelona#service',
  name: 'Cajas de luz y rótulos luminosos Barcelona',
  description: 'Fabricación e instalación de cajas de luz y rótulos luminosos LED en Barcelona. Estructura de aluminio con frente de metacrilato iluminado. Taller propio.',
  url: 'https://www.royaluniondesign.com/rotulos/cajas-de-luz-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de cajas de luz y rótulos luminosos',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '800',
    highPrice: '5000',
    description: 'Cajas de luz desde 800€ (formato pequeño) hasta 5.000€+ (gran formato con estructura). Instalación incluida.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una caja de luz en Barcelona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las cajas de luz parten de 800€ para un formato pequeño (hasta 1m²) e iluminación LED interior básica. Un formato estándar de escaparate de 2-3m² con aluminio y metacrilato está entre 1.500€ y 3.000€. Las de gran formato o con estructura vista pueden superar los 5.000€.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre caja de luz y bandeja de letras?',
      acceptedAnswer: { '@type': 'Answer', text: 'La caja de luz tiene un frente sólido (metacrilato o policarbonato) con la imagen impresa e iluminada por dentro. La bandeja de letras cala las letras o el logo en el frente metálico y la luz sale por los huecos, creando un efecto más dramático y de mayor contraste, ideal para identidades de marca fuertes.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en fabricarse una caja de luz?',
      acceptedAnswer: { '@type': 'Answer', text: 'La fabricación de una caja de luz estándar tarda entre 7 y 12 días hábiles. Proyectos de gran formato o con estructura especial pueden tardar hasta 15-20 días. La instalación posterior lleva entre 3 y 6 horas según dimensiones y acceso.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué consume una caja de luz LED?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las cajas de luz con LED interior consumen entre 15W y 40W por metro cuadrado, según la intensidad requerida. Es hasta un 70% menos que las antiguas cajas con tubos fluorescentes. Con un timer programado para encendido nocturno, el coste eléctrico es mínimo.' },
    },
  ],
}

export default function CajasLuzBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosService('cajas-de-luz-barcelona', 'Cajas de Luz'))) }} />
      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← RÓTULOS BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BARCELONA · CAJA DE LUZ · BANDEJA CALADA · RETROILUMINADO
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>CAJAS</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>DE LUZ</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>VISIBILIDAD 24/7 · LED IP65 · ACTUALIZABLE</p>
            <TrackedLink href="/contact?servicio=cajas" label="Presupuesto caja de luz" location="hero-cajas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — TIPOS DE RÓTULO LUMINOSO</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿CAJA DE LUZ<br /><em>O BANDEJA?</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { t: 'Caja de luz estándar', d: 'Frente de metacrilato con imagen impresa e iluminación LED uniforme. La opción más usada por franquicias y retail de alta rotación. Fácil de actualizar la gráfica sin cambiar la estructura.', desde: 'desde 800€' },
              { t: 'Bandeja de letras caladas', d: 'Letras o logo calados en frente metálico. La luz sale por los huecos creando un efecto de alto contraste y mayor impacto visual, especialmente de noche.', desde: 'desde 1.800€' },
              { t: 'Doble cara', d: 'Caja de luz visible desde ambos lados, ideal para fachadas de esquina o rótulos perpendiculares a la fachada. Doble impacto visual sin instalación adicional.', desde: 'desde 1.400€' },
              { t: 'Gran formato', d: 'Cajas de luz de más de 3m² para grandes superficies comerciales, medianeras o fachadas de edificio. Estructura reforzada con iluminación LED uniforme sin puntos.', desde: 'desde 3.500€' },
            ].map((item, i) => (
              <ScrollReveal key={item.t} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{item.t}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.d}</p>
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{item.desde}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <ScrollReveal>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', lineHeight: 1.7 }}>
              Todos los precios incluyen diseño, fabricación e instalación. IVA no incluido.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VENTAJAS */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — POR QUÉ ELEGIRLA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              VENTAJAS<br /><em>DEL LED</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { sector: 'Visibilidad 24/7', desc: 'La iluminación interior garantiza impacto visual durante el día y de noche. Tu local se ve desde distancia incluso con lluvia o niebla.' },
              { sector: 'Bajo consumo LED', desc: 'Hasta un 70% menos de consumo que los tubos fluorescentes. Con un timer de encendido nocturno, el coste mensual es mínimo.' },
              { sector: 'Actualizable', desc: 'La gráfica del frente se puede cambiar sin modificar la estructura. Ideal para campañas estacionales o rebranding sin inversión en obra nueva.' },
              { sector: 'Larga vida útil', desc: 'La estructura de aluminio y los LEDs interiores tienen una vida útil de más de 10 años con mantenimiento mínimo. Garantía de 2 años en toda la instalación.' },
              { sector: 'Apto para exterior', desc: 'Estanqueidad IP65. Resiste lluvia, humedad, sal marina y cambios de temperatura. Sin oxidación gracias al aluminio lacado.' },
              { sector: 'Sin puntos de luz', desc: 'Utilizamos paneles LED de iluminación uniforme que eliminan los puntos calientes. La gráfica se ve homogénea sin manchas de luz.' },
            ].map((v, i) => (
              <ScrollReveal key={v.sector} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{v.sector}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — CÓMO FUNCIONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              DEL BOCETO<br /><em>A LA PARED</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos del espacio y medidas aproximadas. Respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D en menos de 48h. Sin compromiso.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès con control de calidad total.' },
              { n: '04', t: 'Instalación incluida', d: 'Nuestro equipo instala en el horario que mejor te vaya. Limpiamos y entregamos.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.n}</p>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
                </div>
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
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>04 — PREGUNTAS FRECUENTES</p>
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

      {/* OTROS TIPOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMBIÉN FABRICAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              MÁS TIPOS<br /><em>DE RÓTULO</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
              { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior' },
              { href: '/rotulos/publicidad-exterior-barcelona', label: 'Publicidad Exterior' },
              { href: '/rotulos', label: 'Ver todos los rótulos' },
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
              <TrackedLink href="/contact?servicio=cajas" label="Presupuesto caja luz bottom" location="bottom-cajas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
