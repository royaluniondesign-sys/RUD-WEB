import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Vinilos Escaparate Barcelona · Corte, Impreso, Esmerilado | RUD Studio',
  description: 'Vinilos para escaparates en Barcelona: de corte, impresos, esmerilados y microperforados. Instalación en 48-72h. Presupuesto el mismo día.',
  keywords: 'vinilos escaparate Barcelona, vinilos para cristales Barcelona, vinilos tienda Barcelona, vinilo esmerilado Barcelona, vinilo impreso escaparate Barcelona, vinilos decorativos Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/vinilos-escaparate-barcelona' },
  openGraph: {
    title: 'Vinilos Escaparate Barcelona · Instalación 48-72h | RUD Studio',
    description: 'Vinilos de corte, impresos y esmerilados para escaparates en Barcelona. Instalación rápida, sin obra, presupuesto el mismo día.',
    url: 'https://royaluniondesign.com/rotulos/vinilos-escaparate-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/vinilo-escaparate.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/vinilos-escaparate-barcelona#service',
  name: 'Vinilos de escaparate Barcelona',
  description: 'Instalación de vinilos para escaparates en Barcelona: de corte, impresos en alta resolución, esmerilados y microperforados. Sin obra, entrega en 48-72h.',
  url: 'https://royaluniondesign.com/rotulos/vinilos-escaparate-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Instalación de vinilos para escaparates',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '150',
    highPrice: '800',
    description: 'Vinilos de escaparate desde 150€ (corte básico) hasta 800€+ (gran formato impreso). Diseño e instalación incluidos.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un vinilo de escaparate en Barcelona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Los precios orientativos son: vinilo de corte básico (logotipo + texto) desde 150€ hasta 400€ con diseño e instalación. Vinilo impreso para escaparate de 2 metros desde 300€ hasta 800€. Vinilo esmerilado con logotipo recortado desde 250€.' },
    },
    {
      '@type': 'Question',
      name: '¿En cuánto tiempo se instala un vinilo de escaparate?',
      acceptedAnswer: { '@type': 'Answer', text: 'El plazo desde la aprobación del arte final hasta el vinilo instalado es de 48-72 horas. La instalación en sí del vinilo en el cristal suele llevar entre 1 y 3 horas dependiendo del tamaño y complejidad.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto dura un vinilo de escaparate?',
      acceptedAnswer: { '@type': 'Answer', text: 'Utilizamos vinilos de grado exterior con vida útil de 5 a 7 años en condiciones normales. Los vinilos interiores pueden durar más de 10 años sin deterioro significativo. La laminación UV prolonga la durabilidad de los vinilos impresos.' },
    },
    {
      '@type': 'Question',
      name: '¿Se puede quitar el vinilo sin dañar el cristal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí. Los vinilos de escaparate se pueden retirar sin dañar el cristal aplicando calor y herramientas adecuadas. Es la solución ideal para campañas estacionales o locales en alquiler donde se quiere señalética sin instalaciones permanentes.' },
    },
  ],
}

const TIPOS_VINILO = [
  { tipo: 'Vinilo de corte', uso: 'Logos, textos, siluetas', desc: 'Se corta en plotter. El color del vinilo es el diseño, sin fondo. La opción más económica y la más rápida.', desde: 'desde 150€' },
  { tipo: 'Vinilo impreso', uso: 'Fotografías, degradados, full-color', desc: 'Impresión digital en alta resolución. Reproduce cualquier imagen con fidelidad. Con laminado UV incluido.', desde: 'desde 300€' },
  { tipo: 'Vinilo esmerilado', uso: 'Privacidad y decoración', desc: 'Imita el cristal esmerilado. Con logotipo recortado o franja de privacidad. Elegante y discreto.', desde: 'desde 250€' },
  { tipo: 'Microperforado', uso: 'Imagen + visibilidad interior', desc: 'Desde fuera se ve la imagen, desde dentro se ve la calle con normalidad. Ideal sin reducir luz natural.', desde: 'desde 500€' },
]

export default function VinilosEscaparateBarcelona() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/vinilo-escaparate.avif"
          alt="Vinilos de escaparate Barcelona — instalación en 48h"
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
            Instalación en 48-72h · Sin obra · Removible
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Vinilos para escaparates en Barcelona{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>listos en 48h.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Corte, impreso, esmerilado o microperforado. Diseño, impresión e instalación en un solo servicio. La solución más ágil para dar imagen a tu local en Barcelona.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=vinilos" label="Presupuesto vinilos" location="hero-vinilos"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Pedir presupuesto gratis →
            </TrackedLink>
            <a href="https://t.me/+34645593227" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Telegram · respuesta el mismo día
            </a>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Tipos de vinilo</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué tipo de vinilo necesitas?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {TIPOS_VINILO.map((t, i) => (
              <ScrollReveal key={t.tipo} delay={i * 60}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>{t.tipo}</h3>
                  <p style={{ fontSize: 11, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1rem' }}>{t.uso}</p>
                  <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7, marginBottom: '1rem' }}>{t.desc}</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{t.desde}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 860 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>¿Para quién?</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Sectores que más nos piden vinilos
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem' }}>
            {[
              { sector: 'Comercios & retail', desc: 'Cambia el escaparate por temporadas, comunica promociones y colecciones sin obra. ROI inmediato.' },
              { sector: 'Clínicas & salud', desc: 'Vinilos esmerilados para privacidad en ventanas de sala de espera + logotipo recortado en puerta.' },
              { sector: 'Despachos & oficinas', desc: 'Vinilos de privacidad en salas de reuniones, señalética en puertas, branding en recepción.' },
              { sector: 'Hostelería', desc: 'Horarios y menús especiales en cristales. Cambio de campaña en menos de 48h sin reformas.' },
              { sector: 'Apertura de local', desc: 'El primer rótulo que se instala en una apertura. Imagen desde el primer día, entrega urgente.' },
              { sector: 'Franquicias', desc: 'Aplicación de manual de identidad en escaparates de toda la red. Precios especiales por volumen.' },
            ].map((s, i) => (
              <ScrollReveal key={s.sector} delay={i * 50}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0908', marginBottom: '0.6rem' }}>{s.sector}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{s.desc}</p>
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
              Preguntas frecuentes · Vinilos escaparate Barcelona
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
              Más info en:{' '}
              <Link href="/blog/vinilos-escaparate-barcelona-precio-instalacion" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>
                Guía completa de vinilos para escaparate en Barcelona →
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
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto el mismo día</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Instalado en 48h.<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>Mándanos las fotos.</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=vinilos" label="Presupuesto vinilos bottom" location="bottom-vinilos"
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
