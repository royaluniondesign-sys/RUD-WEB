import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Displays y Stands Barcelona · Expositores para Punto de Venta | RUD Studio',
  description: 'Diseño y producción de displays, expositores y stands para punto de venta en Barcelona. Cartón, forex, aluminio. Impresión y montaje incluidos.',
  keywords: 'displays Barcelona, stands Barcelona, expositores punto de venta Barcelona, display carton Barcelona, expositor producto Barcelona, display TPV Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/material-pop-barcelona/displays-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/material-pop-barcelona/displays-barcelona#service',
  name: 'Displays y Stands Barcelona',
  description: 'Diseño y producción de displays, expositores y stands para el punto de venta en Barcelona.',
  url: 'https://www.royaluniondesign.com/material-pop-barcelona/displays-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Material POP Barcelona', url: 'https://www.royaluniondesign.com/material-pop-barcelona' },
}

const TIPOS = [
  { t: 'Display de mostrador', d: 'Para TPV, recepción y caja. A5, A4 o formato personalizado. Cartón, forex o acrílico.', p: 'desde 45€/ud' },
  { t: 'Expositor de suelo', d: 'Autoportante. Para producto, folletos o señalización. Cartón, forex o aluminio.', p: 'desde 120€' },
  { t: 'Totem publicitario', d: 'Formato vertical grande (hasta 2m). Impresión de alta resolución. Con o sin iluminación.', p: 'desde 250€' },
  { t: 'Stand modular', d: 'Sistema de paneles para feria o evento. Configuración flexible. Reutilizable.', p: 'presupuesto a medida' },
]

export default function DisplaysBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/material-pop-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← MATERIAL POP BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>DISPLAYS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>Y STANDS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>MOSTRADOR · SUELO · TOTEMS · STANDS MODULARES · DISEÑO + PRODUCCIÓN</p>
            <TrackedLink href="/contact?servicio=displays" label="Presupuesto displays" location="hero-displays" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TIPOS</p></ScrollReveal>
          <div>
            {TIPOS.map((t, i) => (
              <ScrollReveal key={t.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{t.t}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.d}</p>
                  <p className="mono-label" style={{ color: 'var(--fg)', whiteSpace: 'nowrap' }}>{t.p}</p>
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
              <TrackedLink href="/contact?servicio=displays" label="Presupuesto displays bottom" location="bottom-displays" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
