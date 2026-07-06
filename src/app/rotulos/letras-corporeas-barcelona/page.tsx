import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Letras Corpóreas Barcelona · Aluminio, Metacrilato, Retroiluminadas | RUD Studio',
  description: 'Letras corpóreas en Barcelona fabricadas en aluminio, metacrilato o madera. Con o sin retroiluminación halo. Taller propio, instalación incluida, presupuesto en 24h.',
  keywords: 'letras corpóreas Barcelona, letras corpóreas aluminio Barcelona, letras corpóreas metacrilato Barcelona, letras corpóreas retroiluminadas Barcelona, letras volumétricas Barcelona, letras 3D fachada Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/letras-corporeas-barcelona' },
  openGraph: {
    title: 'Letras Corpóreas Barcelona · Aluminio y Metacrilato | RUD Studio',
    description: 'Letras corpóreas en Barcelona: aluminio, metacrilato, madera. Con o sin retroiluminación. Taller propio, instalación incluida.',
    url: 'https://www.royaluniondesign.com/rotulos/letras-corporeas-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/services/letras-corporeas.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/rotulos/letras-corporeas-barcelona#service',
  name: 'Letras Corpóreas Barcelona',
  description: 'Fabricación e instalación de letras corpóreas en Barcelona. Aluminio, metacrilato, madera. Con retroiluminación halo o iluminación frontal LED.',
  url: 'https://www.royaluniondesign.com/rotulos/letras-corporeas-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de letras corpóreas',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
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
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosService('letras-corporeas-barcelona', 'Letras Corpóreas'))) }} />
      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← RÓTULOS BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BARCELONA · ALUMINIO · METACRILATO · MADERA · RETROILUMINACIÓN HALO
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>LETRAS</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>CORPÓREAS</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>VOLUMEN REAL · CNC DE PRECISIÓN · INSTALACIÓN INCLUIDA</p>
            <TrackedLink href="/contact?servicio=letras" label="Presupuesto letras corpóreas" location="hero-letras" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* MATERIALES */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — MATERIALES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿QUÉ MATERIAL<br /><em>NECESITAS?</em>
            </h2>
          </ScrollReveal>
          <div>
            {MATERIALES.map((m, i) => (
              <ScrollReveal key={m.mat} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{m.mat}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{m.ventaja}</p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — PRECIOS ORIENTATIVOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿CUÁNTO CUESTAN<br /><em>LAS LETRAS?</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { tipo: 'Sin iluminación', precio: 'desde 2.500€', nota: 'Aluminio o metacrilato lacado. Instalación incluida.' },
              { tipo: 'Retroiluminación halo', precio: 'desde 3.500€', nota: 'LED en la parte posterior, halo de luz en la pared.' },
              { tipo: 'Iluminación frontal', precio: 'desde 3.000€', nota: 'LEDs en la cara frontal de la letra, máxima legibilidad.' },
              { tipo: 'Gran formato fachada', precio: 'desde 5.500€', nota: 'Proyectos de más de 3 metros lineales con estructura.' },
            ].map((p, i) => (
              <ScrollReveal key={p.tipo} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{p.tipo}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{p.nota}</p>
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{p.precio}</p>
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
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès con CNC de precisión y control de calidad total.' },
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
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
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
              <TrackedLink href="/contact?servicio=letras" label="Presupuesto letras bottom" location="bottom-letras" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
