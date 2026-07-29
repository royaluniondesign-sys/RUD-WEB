import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Vinilos Escaparate Barcelona · Corte, Impreso, Esmerilado | RUD Studio',
  description: 'Vinilos para escaparates en Barcelona: de corte, impresos, esmerilados y microperforados. Instalación en 48-72h. Presupuesto el mismo día.',
  keywords: 'vinilos escaparate Barcelona, vinilos para cristales Barcelona, vinilos tienda Barcelona, vinilo esmerilado Barcelona, vinilo impreso escaparate Barcelona, vinilos decorativos Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/vinilos-escaparate-barcelona' },
  openGraph: {
    title: 'Vinilos Escaparate Barcelona · Instalación 48-72h | RUD Studio',
    description: 'Vinilos de corte, impresos y esmerilados para escaparates en Barcelona. Instalación rápida, sin obra, presupuesto el mismo día.',
    url: 'https://www.royaluniondesign.com/rotulos/vinilos-escaparate-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/services/vinilo-escaparate.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/rotulos/vinilos-escaparate-barcelona#service',
  name: 'Vinilos de escaparate Barcelona',
  description: 'Instalación de vinilos para escaparates en Barcelona: de corte, impresos en alta resolución, esmerilados y microperforados. Sin obra, entrega en 48-72h.',
  url: 'https://www.royaluniondesign.com/rotulos/vinilos-escaparate-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Instalación de vinilos para escaparates',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
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
            RUD STUDIO — BARCELONA · INSTALACIÓN EN 48-72H · SIN OBRA · REMOVIBLE
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>VINILOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>ESCAPARATE</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>CORTE · IMPRESO · ESMERILADO · MICROPERFORADO</p>
            <TrackedLink href="/contact?servicio=vinilos" label="Presupuesto vinilos" location="hero-vinilos" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — TIPOS DE VINILO</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿QUÉ TIPO<br /><em>NECESITAS?</em>
            </h2>
          </ScrollReveal>
          <div>
            {TIPOS_VINILO.map((t, i) => (
              <ScrollReveal key={t.tipo} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{t.tipo}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>{t.uso}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{t.desde}</p>
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

      {/* SECTORES */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — APLICACIONES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              SECTORES<br /><em>& USOS</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { sector: 'Comercios & retail', desc: 'Cambia el escaparate por temporadas, comunica promociones y colecciones sin obra. ROI inmediato.' },
              { sector: 'Clínicas & salud', desc: 'Vinilos esmerilados para privacidad en ventanas de sala de espera + logotipo recortado en puerta.' },
              { sector: 'Despachos & oficinas', desc: 'Vinilos de privacidad en salas de reuniones, señalética en puertas, branding en recepción.' },
              { sector: 'Hostelería', desc: 'Horarios y menús especiales en cristales. Cambio de campaña en menos de 48h sin reformas.' },
              { sector: 'Apertura de local', desc: 'El primer rótulo que se instala en una apertura. Imagen desde el primer día, entrega urgente.' },
              { sector: 'Franquicias', desc: 'Aplicación de manual de identidad en escaparates de toda la red. Precios especiales por volumen.' },
            ].map((s, i) => (
              <ScrollReveal key={s.sector} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.sector}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.desc}</p>
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
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos del escaparate y medidas aproximadas. Respondemos el mismo día con presupuesto.' },
              { n: '02', t: 'Arte final aprobado', d: 'Recibes el diseño en 24h para aprobación. Sin coste adicional, revisiones incluidas.' },
              { n: '03', t: 'Impresión en taller', d: 'Imprimimos en alta resolución en nuestro taller. Laminación UV incluida en todos los vinilos impresos.' },
              { n: '04', t: 'Instalación en 48-72h', d: 'Nuestro equipo instala en el cristal en el horario que mejor te vaya. Sin obra, sin polvo.' },
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
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
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
              <TrackedLink href="/contact?servicio=vinilos" label="Presupuesto vinilos bottom" location="bottom-vinilos" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
