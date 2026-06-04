import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Cajas de Luz Barcelona · Rótulos Luminosos LED | RUD Studio',
  description: 'Cajas de luz y rótulos luminosos en Barcelona: máxima visibilidad diurna y nocturna. Aluminio, metacrilato, LED interior. Fabricación propia, instalación incluida.',
  keywords: 'cajas de luz Barcelona, rótulos luminosos Barcelona, caja de luz LED Barcelona, rótulo luminoso precio Barcelona, caja de luz retroiluminada Barcelona, rótulos bandeja LED Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/cajas-de-luz-barcelona' },
  openGraph: {
    title: 'Cajas de Luz y Rótulos Luminosos Barcelona | RUD Studio',
    description: 'Cajas de luz con LED interior: máxima visibilidad nocturna. Fabricación propia en Barcelona. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com/rotulos/cajas-de-luz-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/rotulos-luminosos.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/cajas-de-luz-barcelona#service',
  name: 'Cajas de luz y rótulos luminosos Barcelona',
  description: 'Fabricación e instalación de cajas de luz y rótulos luminosos LED en Barcelona. Estructura de aluminio con frente de metacrilato iluminado. Taller propio.',
  url: 'https://royaluniondesign.com/rotulos/cajas-de-luz-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de cajas de luz y rótulos luminosos',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
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
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/rotulos-luminosos.avif"
          alt="Cajas de luz y rótulos luminosos Barcelona — fabricación propia"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,7,6,0.97) 0%, rgba(8,7,6,0.55) 50%, rgba(8,7,6,0.15) 100%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(2.5rem,6vw,5rem)', paddingTop: 120 }}>
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>
              ← Rótulos Barcelona
            </Link>
          </nav>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
            Caja de luz · Bandeja calada · Retroiluminado
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Cajas de luz y rótulos luminosos{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>en Barcelona.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Máxima visibilidad diurna y nocturna. Estructura de aluminio con frente de metacrilato o policarbonato iluminado por LED interior. La opción predilecta de franquicias y retail de alta rotación.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=luminosos" label="Presupuesto caja de luz" location="hero-cajas"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Pedir presupuesto gratis →
            </TrackedLink>
            <a href="https://t.me/+34645593227" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Telegram · respuesta inmediata
            </a>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Tipos de rótulo luminoso</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Caja de luz o bandeja calada?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden', marginBottom: '2rem' }}>
            {[
              { t: 'Caja de luz estándar', d: 'Frente de metacrilato con imagen impresa e iluminación LED uniforme. La opción más usada por franquicias y retail de alta rotación. Fácil de actualizar la gráfica sin cambiar la estructura.', desde: 'desde 800€' },
              { t: 'Bandeja de letras caladas', d: 'Letras o logo calados en frente metálico. La luz sale por los huecos creando un efecto de alto contraste y mayor impacto visual, especialmente de noche.', desde: 'desde 1.800€' },
              { t: 'Doble cara', d: 'Caja de luz visible desde ambos lados, ideal para fachadas de esquina o rótulos perpendiculares a la fachada. Doble impacto visual sin instalación adicional.', desde: 'desde 1.400€' },
              { t: 'Gran formato', d: 'Cajas de luz de más de 3m² para grandes superficies comerciales, medianeras o fachadas de edificio. Estructura reforzada con iluminación LED uniforme sin puntos.', desde: 'desde 3.500€' },
            ].map((item, i) => (
              <ScrollReveal key={item.t} delay={i * 60}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '1rem', letterSpacing: '-0.02em' }}>{item.t}</h3>
                  <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7, marginBottom: '1rem' }}>{item.d}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{item.desde}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#4B5563' }}>
              Todos los precios incluyen diseño, fabricación e instalación. IVA no incluido.{' '}
              <Link href="/blog/rotulos-luminosos-barcelona-precio-tipos-instalacion" style={{ color: 'rgba(255,255,255,0.72)', textDecoration: 'underline' }}>
                Guía completa de rótulos luminosos →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VENTAJAS */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 860 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Por qué elegirla</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Las ventajas de la caja de luz LED
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Visibilidad 24/7', d: 'La iluminación interior garantiza impacto visual durante el día y de noche. Tu local se ve desde distancia incluso con lluvia o niebla.' },
              { t: 'Bajo consumo LED', d: 'Hasta un 70% menos de consumo que los tubos fluorescentes. Con un timer de encendido nocturno, el coste mensual es mínimo.' },
              { t: 'Actualizable', d: 'La gráfica del frente se puede cambiar sin modificar la estructura. Ideal para campañas estacionales o rebranding sin inversión en obra nueva.' },
              { t: 'Larga vida útil', d: 'La estructura de aluminio y los LEDs interiores tienen una vida útil de más de 10 años con mantenimiento mínimo. Garantía de 2 años en toda la instalación.' },
              { t: 'Apto para exterior', d: 'Estanqueidad IP65. Resiste lluvia, humedad, sal marina y cambios de temperatura. Sin oxidación gracias al aluminio lacado.' },
              { t: 'Sin puntos de luz', d: 'Utilizamos paneles LED de iluminación uniforme que eliminan los puntos calientes. La gráfica se ve homogénea sin manchas de luz.' },
            ].map((v, i) => (
              <ScrollReveal key={v.t} delay={i * 50}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0908', marginBottom: '0.6rem' }}>{v.t}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{v.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: 'clamp(3.5rem,7vw,5rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 780 }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Preguntas frecuentes · Cajas de luz Barcelona
            </h2>
          </ScrollReveal>
          <div>
            {faqSchema.mainEntity.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details style={{ borderTop: '1px solid #E5E0D8' }} className="faq-item">
                  <summary style={{ padding: '1.25rem 0', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, userSelect: 'none' }}>
                    <span>{item.name}</span>
                    <span className="faq-icon" style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#E5E0D8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 300, color: '#9CA3AF', transition: 'transform 0.3s ease, background 0.2s' }}>+</span>
                  </summary>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, paddingBottom: '1.25rem', maxWidth: '65ch' }}>{item.acceptedAnswer.text}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid #E5E0D8' }} />
          </div>
        </div>
      </section>

      {/* OTROS TIPOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Más tipos de rótulo</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>También fabricamos</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
              { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior' },
              { href: '/rotulos/publicidad-exterior-barcelona', label: 'Publicidad Exterior' },
              { href: '/rotulos', label: 'Ver todos los rótulos →' },
            ].map(item => (
              <Link key={item.href} href={item.href}
                style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,7rem) 0', borderTop: '1px solid #1A1A1A' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto gratuito · 24h</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Máxima visibilidad.<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>Presupuesto hoy.</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=luminosos" label="Presupuesto caja luz bottom" location="bottom-cajas"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Pedir presupuesto →
              </TrackedLink>
              <Link href="/rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 1.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                ← Todos los rótulos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .faq-item[open] .faq-icon { transform: rotate(45deg); background: #0A0908; color: white; }
        .faq-item summary::-webkit-details-marker { display: none; }
      `}</style>
    </main>
  )
}
