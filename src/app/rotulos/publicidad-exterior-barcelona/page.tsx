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
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/publicidad-exterior.avif"
          alt="Publicidad exterior Barcelona — lonas, banderolas, vallas"
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
            Lonas · Banderolas · Vallas · Wrapping
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '20ch', marginBottom: '1.5rem' }}>
            Publicidad exterior en Barcelona{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>a gran formato.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Lonas de obra, banderolas de calle, wrapping de flotas y vallas publicitarias. Diseño, impresión e instalación en un único servicio. Cualquier tamaño, cualquier soporte.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=exterior" label="Presupuesto publicidad exterior" location="hero-exterior"
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

      {/* FORMATOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Formatos disponibles</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué formato necesitas?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {FORMATOS.map((f, i) => (
              <ScrollReveal key={f.formato} delay={i * 60}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{f.formato}</h3>
                  <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7, marginBottom: '1rem' }}>{f.desc}</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)' }}>{f.desde}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 860 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Por qué RUD</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Publicidad exterior: diseño e instalación en un único proveedor
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem' }}>
            {[
              { t: 'Sin intermediarios', d: 'Diseñamos, imprimimos e instalamos nosotros mismos. Sin subcontratas, sin pérdida de calidad, sin descoordinación entre proveedores.' },
              { t: 'Cualquier tamaño', d: 'Desde banderolas de 60x180 cm hasta lonas de medianera de 200m². Impresión en gran formato con resolución de calidad a cualquier escala.' },
              { t: 'Urgencias posibles', d: 'Para campañas o eventos con plazo ajustado tenemos capacidad de respuesta rápida. Consúltanos si necesitas entrega en menos de 72h.' },
              { t: 'Permisos incluidos', d: 'Gestionamos los permisos municipales para instalaciones en vía pública, fachadas y medianeras cuando son necesarios.' },
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
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
              { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior' },
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
              Tu marca en la calle.<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>Cuéntanos el proyecto.</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=exterior" label="Presupuesto exterior bottom" location="bottom-exterior"
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
    </main>
  )
}
