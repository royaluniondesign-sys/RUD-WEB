import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Letras Corpóreas Barcelona · Aluminio, Metacrilato, Retroiluminadas | RUD Studio',
  description: 'Letras corpóreas en Barcelona fabricadas en aluminio, metacrilato o madera. Con o sin retroiluminación halo. Taller propio, instalación incluida, presupuesto en 24h.',
  keywords: 'letras corpóreas Barcelona, letras corpóreas aluminio Barcelona, letras corpóreas metacrilato Barcelona, letras corpóreas retroiluminadas Barcelona, letras volumétricas Barcelona, letras 3D fachada Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona' },
  openGraph: {
    title: 'Letras Corpóreas Barcelona · Aluminio y Metacrilato | RUD Studio',
    description: 'Letras corpóreas en Barcelona: aluminio, metacrilato, madera. Con o sin retroiluminación. Taller propio, instalación incluida.',
    url: 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/letras-corporeas.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona#service',
  name: 'Letras Corpóreas Barcelona',
  description: 'Fabricación e instalación de letras corpóreas en Barcelona. Aluminio, metacrilato, madera. Con retroiluminación halo o iluminación frontal LED.',
  url: 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de letras corpóreas',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '2500',
    highPrice: '8000',
    description: 'Letras corpóreas desde 2.500€ sin iluminación hasta 8.000€+ para fachadas de gran formato con retroiluminación. Instalación incluida.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuestan las letras corpóreas en Barcelona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Las letras corpóreas básicas sin iluminación parten de 2.500€. Con retroiluminación halo desde 3.500€. Con iluminación frontal LED desde 3.000€. El precio final depende del número de letras, tamaño, material y complejidad de instalación.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué materiales existen para letras corpóreas?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los materiales más usados son aluminio (el más duradero, ideal para exterior), metacrilato (ligero, múltiples acabados de color), madera (acabado cálido y natural, muy usado en hostelería y retail lifestyle) y poliestireno de alta densidad (más económico, para interiores de bajo impacto físico).' },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la retroiluminación halo en letras corpóreas?',
      acceptedAnswer: { '@type': 'Answer', text: 'La retroiluminación halo consiste en LEDs instalados en la parte posterior de la letra que proyectan un halo de luz sobre la pared. El efecto es elegante y muy demandado en hostelería y retail premium. La letra se ve de día como corpórea sólida y de noche el halo aporta presencia visual.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda la fabricación de letras corpóreas?',
      acceptedAnswer: { '@type': 'Answer', text: 'La fabricación de letras corpóreas tarda entre 7 y 12 días hábiles desde la aprobación del presupuesto. Para proyectos con iluminación puede alargarse hasta 15 días. La instalación posterior lleva entre 3 y 6 horas según la dimensión del proyecto.' },
    },
  ],
}

const MATERIALES = [
  { mat: 'Aluminio', ventaja: 'El más duradero para exterior', desc: 'Lacado en cualquier color RAL, efecto cepillado, anodizado o espejado. Resistente a la corrosión, ideal para fachadas.' },
  { mat: 'Metacrilato', ventaja: 'Múltiples acabados y colores', desc: 'Transparente, traslúcido, opaco. Infinidad de colores. Ideal para interior y para iluminación frontal o backlit.' },
  { mat: 'Madera', ventaja: 'Cálido y natural', desc: 'Pino, DM pintado, roble o nogal. Muy demandado en restauración, retail lifestyle y despachos.' },
  { mat: 'Poliestireno HD', ventaja: 'Económico para interior', desc: 'Ligero y rígido. Acabado lacado similar al aluminio. Para interiores donde no hay impacto físico directo.' },
]

export default function LetrasCorporeasBarcelona() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/letras-corporeas.avif"
          alt="Letras corpóreas Barcelona — aluminio, metacrilato, retroiluminadas"
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
            Aluminio · Metacrilato · Madera · Retroiluminación halo
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '20ch', marginBottom: '1.5rem' }}>
            Letras corpóreas en Barcelona{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>que duran décadas.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Letras volumétricas en aluminio, metacrilato o madera para fachadas, recepciones y espacios interiores. Con o sin retroiluminación halo. Mecanizado CNC de precisión en nuestro taller.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=letras" label="Presupuesto letras corpóreas" location="hero-letras"
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

      {/* MATERIALES */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Materiales disponibles</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué material necesitas?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {MATERIALES.map((m, i) => (
              <ScrollReveal key={m.mat} delay={i * 60}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{m.mat}</h3>
                  <p style={{ fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1rem' }}>{m.ventaja}</p>
                  <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 800 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Precios orientativos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              ¿Cuánto cuestan las letras corpóreas?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {[
              { tipo: 'Sin iluminación', precio: 'desde 2.500€', desc: 'Aluminio o metacrilato lacado. Instalación incluida.' },
              { tipo: 'Retroiluminación halo', precio: 'desde 3.500€', desc: 'LED en la parte posterior, halo de luz en la pared.' },
              { tipo: 'Iluminación frontal', precio: 'desde 3.000€', desc: 'LEDs en la cara frontal de la letra, máxima legibilidad.' },
              { tipo: 'Gran formato fachada', precio: 'desde 5.500€', desc: 'Proyectos de más de 3 metros lineales con estructura.' },
            ].map((p, i) => (
              <ScrollReveal key={p.tipo} delay={i * 60}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: '#9CA3AF', marginBottom: '0.5rem' }}>{p.tipo}</p>
                  <p style={{ fontSize: 'clamp(1.3rem,2vw,1.6rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0A0908', marginBottom: '0.5rem' }}>{p.precio}</p>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#9CA3AF' }}>
              IVA no incluido. <Link href="/pricing" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>Ver guía de precios completa →</Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'white', padding: 'clamp(3.5rem,7vw,5rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 780 }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Preguntas frecuentes · Letras corpóreas Barcelona
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
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: '1.5rem' }}>
              Lee el artículo completo:{' '}
              <Link href="/blog/letras-corporeas-barcelona-tipos-precios" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>
                Letras corpóreas en Barcelona: tipos, materiales y precios →
              </Link>
            </p>
          </ScrollReveal>
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
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
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
              Manda las medidas.<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>Te respondemos hoy.</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=letras" label="Presupuesto letras bottom" location="bottom-letras"
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
