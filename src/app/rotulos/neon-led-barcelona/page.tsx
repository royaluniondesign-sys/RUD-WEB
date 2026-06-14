import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Neón LED Barcelona · Fabricación e Instalación a Medida | RUD Studio',
  description: 'Neón LED personalizado en Barcelona: cualquier forma, tipografía o logotipo. Fabricación en taller propio, instalación incluida. Presupuesto gratis en 24h.',
  keywords: 'neón LED Barcelona, rótulo neón LED Barcelona, neón personalizado Barcelona, neón LED precio Barcelona, neón LED escaparate Barcelona, neón LED hostelería Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/neon-led-barcelona' },
  openGraph: {
    title: 'Neón LED Barcelona · Fabricación e Instalación | RUD Studio',
    description: 'Neón LED personalizado en Barcelona: cualquier forma o tipografía, instalación incluida, garantía 2 años.',
    url: 'https://royaluniondesign.com/rotulos/neon-led-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/neon-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/neon-led-barcelona#service',
  name: 'Neón LED personalizado Barcelona',
  description: 'Fabricación e instalación de neón LED a medida en Barcelona. Cualquier forma, tipografía o logotipo. Taller propio, garantía 2 años.',
  url: 'https://royaluniondesign.com/rotulos/neon-led-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de neón LED',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '800',
    highPrice: '4000',
    description: 'Neón LED desde 800€ (mostrador) hasta 4.000€+ (fachada gran formato). Instalación incluida.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un neón LED en Barcelona?',
      acceptedAnswer: { '@type': 'Answer', text: 'El neón LED de mostrador (40-80 cm) parte de 800€. El neón de pared mediano (80-150 cm) entre 1.400€ y 2.200€. Instalaciones de fachada de gran formato desde 2.200€. Todos los precios incluyen diseño, fabricación e instalación.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en fabricarse un neón LED?',
      acceptedAnswer: { '@type': 'Answer', text: 'La fabricación de un neón LED a medida tarda entre 10 y 15 días hábiles desde la aprobación del presupuesto. La instalación posterior lleva entre 2 y 4 horas según el soporte.' },
    },
    {
      '@type': 'Question',
      name: '¿El neón LED funciona en exterior?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. Fabricamos neón LED con protección IP65 apto para instalación exterior. Resiste lluvia, humedad y variaciones de temperatura. Ideal para fachadas de locales, hostelería y retail.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura un neón LED?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los LEDs que utilizamos tienen una vida útil de entre 50.000 y 100.000 horas, equivalente a más de 11 años en funcionamiento continuo. Ofrecemos 2 años de garantía en todos los componentes.' },
    },
  ],
}

const PRECIOS = [
  { tipo: 'Neón de mostrador', medida: '40–80 cm', precio: 'desde 800€', nota: 'Perfecto para barras, recepción, estudio' },
  { tipo: 'Neón de pared mediano', medida: '80–150 cm', precio: 'desde 1.400€', nota: 'El más pedido para hostelería y retail' },
  { tipo: 'Neón de fachada', medida: '150 cm+', precio: 'desde 2.200€', nota: 'Gran impacto visual, visible desde calle' },
  { tipo: 'Neón de vidrio artesanal', medida: 'a medida', precio: 'consultar', nota: 'El clásico de gas, para proyectos exclusivos' },
]

const USOS = [
  { sector: 'Hostelería & restauración', desc: 'El neón en barra o pared genera contenido orgánico en redes — clientes fotografiando sin que les pidas. ROI inmediato.' },
  { sector: 'Retail & moda', desc: 'Diferencia tu escaparate del resto de la calle. El neón nocturno convierte la fachada en publicidad 24/7.' },
  { sector: 'Hoteles & spas', desc: 'Identidad de marca en recepción, bar o sala de tratamientos. Combina con materiales nobles.' },
  { sector: 'Estudios & oficinas', desc: 'Cultura de empresa visible. El neón en sala de reuniones o recepción comunica creatividad y carácter.' },
  { sector: 'Eventos & bodas', desc: 'Neones para photocalls, mesas de novios y spaces de eventos. Alquiler o venta.' },
  { sector: 'Gimnasios & fitness', desc: 'Motivación visual y fotografiabilidad del espacio. Muy demandado en boxes de crossfit y estudios de yoga.' },
]

export default function NeonLedBarcelona() {
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
            RUD STUDIO — BARCELONA · TALLER PROPIO · INSTALACIÓN INCLUIDA · GARANTÍA 2 AÑOS
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>NEÓN LED</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>PERSONALIZADO</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>CUALQUIER FORMA · BAJO CONSUMO LED · IP65 EXTERIOR</p>
            <TrackedLink href="/contact?servicio=neon" label="Presupuesto neón LED" location="hero-neon" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* PRECIOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — PRECIOS ORIENTATIVOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿CUÁNTO CUESTA<br /><em>UN NEÓN LED?</em>
            </h2>
          </ScrollReveal>
          <div>
            {PRECIOS.map((p, i) => (
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
              Todos los precios incluyen diseño, render 3D previo, fabricación e instalación. IVA no incluido.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* USOS / SECTORES */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — APLICACIONES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              SECTORES<br /><em>& USOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {USOS.map((u, i) => (
              <ScrollReveal key={u.sector} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{u.sector}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{u.desc}</p>
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
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos del espacio y medidas aproximadas por Telegram o formulario. Respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del neón en tu espacio en menos de 48h. Sin compromiso.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles con control de calidad total.' },
              { n: '04', t: 'Instalación incluida', d: 'Nuestro equipo instala en el horario que mejor te vaya. La instalación tarda entre 2 y 4 horas.' },
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
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
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
              <TrackedLink href="/contact?servicio=neon" label="Presupuesto neón LED bottom" location="bottom-neon" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
