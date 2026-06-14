import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Publicidad Exterior Barcelona · Lonas, Banderolas, Vallas | RUD Studio',
  description: 'Publicidad exterior en Barcelona: lonas, banderolas, vallas publicitarias, wrapping de vehículos y fachadas. Diseño, impresión e instalación. Presupuesto en 24h.',
  keywords: 'publicidad exterior Barcelona, lonas publicitarias Barcelona, banderolas Barcelona, vallas publicitarias Barcelona, wrapping vehículos Barcelona, rótulos fachada Barcelona, publicidad gran formato Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/publicidad-exterior-barcelona' },
  openGraph: {
    title: 'Publicidad Exterior Barcelona · Lonas y Banderolas | RUD Studio',
    description: 'Publicidad exterior en Barcelona: lonas, banderolas y vallas. Diseño, impresión e instalación. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com/rotulos/publicidad-exterior-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/publicidad-exterior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/publicidad-exterior-barcelona#service',
  name: 'Publicidad exterior Barcelona',
  description: 'Diseño, impresión e instalación de publicidad exterior en Barcelona: lonas, banderolas, vallas, wrapping de vehículos y fachadas.',
  url: 'https://royaluniondesign.com/rotulos/publicidad-exterior-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Publicidad exterior',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
}

const FORMATOS = [
  { formato: 'Lonas publicitarias', desc: 'Impresión en lona PVC o malla de alta resolución para fachadas de obra, andamios y eventos. Cualquier tamaño, sistema de fijación incluido.', desde: 'desde 8€/m²' },
  { formato: 'Banderolas', desc: 'Tejido o PVC rígido para calles peatonales, eventos y campañas de calle. Doble cara, sistema de fijación a farola o estructura.', desde: 'desde 45€/ud' },
  { formato: 'Wrapping de vehículos', desc: 'Vinilado total o parcial de furgonetas, camiones y flotas. Tu marca en movimiento por toda Barcelona.', desde: 'consultar' },
  { formato: 'Vallas y muros', desc: 'Vallas metálicas con lonas intercambiables para obras, eventos y campañas. Alquiler o venta.', desde: 'consultar' },
  { formato: 'Fachadas y medianeras', desc: 'Lonas o vinilos de gran formato para medianeras de edificio y fachadas de gran superficie. Permisos incluidos.', desde: 'consultar' },
  { formato: 'Stands y ferias', desc: 'Señalética y elementos de publicidad exterior para stands de feria, congresos y eventos en Barcelona.', desde: 'consultar' },
]

export default function PublicidadExteriorBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
            RUD STUDIO — BARCELONA · LONAS · BANDEROLAS · VALLAS · WRAPPING
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>PUBLICIDAD</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>EXTERIOR</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>DISEÑO · IMPRESIÓN · INSTALACIÓN · PERMISOS</p>
            <TrackedLink href="/contact?servicio=publicidad" label="Presupuesto publicidad exterior" location="hero-exterior" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* FORMATOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — FORMATOS DISPONIBLES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿QUÉ FORMATO<br /><em>NECESITAS?</em>
            </h2>
          </ScrollReveal>
          <div>
            {FORMATOS.map((f, i) => (
              <ScrollReveal key={f.formato} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{f.formato}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{f.desc}</p>
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{f.desde}</p>
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

      {/* POR QUÉ */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — POR QUÉ RUD</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              UN SOLO<br /><em>PROVEEDOR</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { sector: 'Sin intermediarios', desc: 'Diseñamos, imprimimos e instalamos nosotros mismos. Sin subcontratas, sin pérdida de calidad, sin descoordinación entre proveedores.' },
              { sector: 'Cualquier tamaño', desc: 'Desde banderolas de 60x180 cm hasta lonas de medianera de 200m². Impresión en gran formato con resolución de calidad a cualquier escala.' },
              { sector: 'Urgencias posibles', desc: 'Para campañas o eventos con plazo ajustado tenemos capacidad de respuesta rápida. Consúltanos si necesitas entrega en menos de 72h.' },
              { sector: 'Permisos incluidos', desc: 'Gestionamos los permisos municipales para instalaciones en vía pública, fachadas y medianeras cuando son necesarios.' },
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
              DEL BOCETO<br /><em>A LA CALLE</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos del espacio y medidas aproximadas. Respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render en menos de 48h. Sin compromiso.' },
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

      {/* OTROS TIPOS */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
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
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
              { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior' },
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
              <TrackedLink href="/contact?servicio=publicidad" label="Presupuesto exterior bottom" location="bottom-exterior" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
