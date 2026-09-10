import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rediseño de Imagen Corporativa Barcelona · Actualiza tu Marca | RUD Studio',
  description: 'Rediseño de imagen corporativa para empresas en Barcelona. Modernizamos tu logo e identidad visual sin perder el reconocimiento de marca. Proceso claro en 6 semanas.',
  keywords: 'rediseño imagen corporativa Barcelona, renovar imagen empresa Barcelona, actualizar logo empresa Barcelona, rediseño marca Barcelona, modernizar identidad corporativa',
  alternates: { canonical: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona#service',
  name: 'Rediseño de Imagen Corporativa Barcelona',
  description: 'Servicio de rediseño y actualización de imagen corporativa para empresas establecidas en Barcelona que necesitan modernizar su identidad visual.',
  url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Imagen Corporativa Barcelona', url: 'https://www.royaluniondesign.com/imagen-corporativa-barcelona' },
}

const CUANDO = [
  'Tu logo tiene más de 8 años y se ve desfasado',
  'Tu empresa ha cambiado de dirección o de público objetivo',
  'Los competidores parecen más modernos y profesionales',
  'La imagen no funciona en digital (web, redes, apps)',
  'Has cambiado de nombre o has ampliado servicios',
  'Vas a abrir nuevos locales o mercados',
]

const PROCESO = [
  { n: '01', t: 'Auditoría', d: 'Analizamos tu imagen actual, la competencia y cómo te percibe tu público. Identificamos qué conservar y qué cambiar.' },
  { n: '02', t: 'Estrategia', d: 'Definimos el posicionamiento nuevo, los atributos de marca y las directrices visuales antes de empezar a diseñar.' },
  { n: '03', t: 'Diseño', d: 'Presentamos 2-3 direcciones creativas. Desarrollamos la elegida con todas las variantes y aplicaciones.' },
  { n: '04', t: 'Entrega', d: 'Manual de marca actualizado, todos los archivos en formatos digitales e impresión, y soporte para el rollout.' },
]

export default function RedisenoImagenCorporativaBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/imagen-corporativa-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← IMAGEN CORPORATIVA BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>REDISEÑO DE</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>IMAGEN</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>CORPORATIVA BCN</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>PROCESO EN 6 SEMANAS · DESDE 1.800€ · AUDITORÍA INCLUIDA</p>
            <TrackedLink href="/contact?servicio=rediseno-imagen" label="Presupuesto rediseño" location="hero-rediseno" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>SEÑALES</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              CUÁNDO ES<br /><em>EL MOMENTO</em>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
            {CUANDO.map((c, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div style={{ background: 'var(--bg)', padding: '1.5rem' }}>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fg)', lineHeight: 1.6 }}>— {c}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PROCESO</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '3rem' }}>CÓMO<br /><em>TRABAJAMOS</em></h2>
          </ScrollReveal>
          <div>
            {PROCESO.map((p, i) => (
              <ScrollReveal key={p.n} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '2.5rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{p.n}</p>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{p.t}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>PIDE TU<br /><em>PRESUPUESTO</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=rediseno-imagen" label="Presupuesto rediseño bottom" location="bottom-rediseno" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
