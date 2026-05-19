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
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Neón LED personalizado Barcelona — fabricación e instalación"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,7,6,0.97) 0%, rgba(8,7,6,0.55) 50%, rgba(8,7,6,0.15) 100%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(2.5rem,6vw,5rem)', paddingTop: 120 }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>
              ← Rótulos Barcelona
            </Link>
          </nav>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
            Taller propio · Instalación incluida · Garantía 2 años
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '20ch', marginBottom: '1.5rem' }}>
            Neón LED personalizado{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>en Barcelona.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Cualquier tipografía, logotipo o forma. Fabricación propia, bajo consumo LED, protección IP65 para exterior. Render previo incluido en el presupuesto.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=neon" label="Presupuesto neón LED" location="hero-neon"
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

      {/* PRECIOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Precios orientativos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Cuánto cuesta un neón LED en Barcelona?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden', marginBottom: '1.5rem' }}>
            {PRECIOS.map((p, i) => (
              <ScrollReveal key={p.tipo} delay={i * 50}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <p style={{ fontSize: 11, color: '#6B7280', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>{p.tipo}</p>
                  <p style={{ fontSize: 13, color: '#4B5563', marginBottom: '1rem' }}>{p.medida}</p>
                  <p style={{ fontSize: 'clamp(1.4rem,2.5vw,1.8rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>{p.precio}</p>
                  <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.5 }}>{p.nota}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>
              Todos los precios incluyen diseño, render 3D previo, fabricación e instalación. IVA no incluido.{' '}
              <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'underline' }}>Ver precios completos →</Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* USOS / SECTORES */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Aplicaciones</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿En qué negocios funciona mejor el neón LED?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem' }}>
            {USOS.map((u, i) => (
              <ScrollReveal key={u.sector} delay={i * 50}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0908', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{u.sector}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{u.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: 'white', padding: 'clamp(3.5rem,7vw,5rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 800 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Cómo funciona</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Del boceto al neón en tu pared
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos del espacio y medidas aproximadas por Telegram o formulario. Respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del neón en tu espacio en menos de 48h. Sin compromiso.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles con control de calidad total.' },
              { n: '04', t: 'Instalación', d: 'Nuestro equipo instala en el horario que mejor te vaya. La instalación tarda entre 2 y 4 horas.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8', marginBottom: '1rem', letterSpacing: '.1em' }}>{s.n}</p>
                  <h3 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0A0908', marginBottom: '0.5rem' }}>{s.t}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(3.5rem,7vw,5rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 780 }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Preguntas frecuentes · Neón LED Barcelona
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
            <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: '1.5rem', lineHeight: 1.7 }}>
              Más preguntas: <a href="https://t.me/+34645593227" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>Telegram</a> o <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>email</a>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* OTROS TIPOS — SILO internal links */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Más tipos de rótulo</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>También fabricamos</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
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
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '16ch', marginBottom: '1.5rem' }}>
              Pide tu presupuesto<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>de neón hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '40ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Fotos del espacio + medidas aproximadas. Devolvemos presupuesto con render en menos de 48h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=neon" label="Presupuesto neón LED bottom" location="bottom-neon"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Pedir presupuesto →
              </TrackedLink>
              <Link href="/blog/neon-led-barcelona-precio-instalacion"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 1.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Guía completa · Neón LED Barcelona
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
