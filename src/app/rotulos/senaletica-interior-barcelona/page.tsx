import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Señalética Interior Barcelona · Corporativa y Hotelera | RUD Studio',
  description: 'Señalética interior en Barcelona para oficinas, hoteles, clínicas y empresas. Directorios, wayfinding, señalización de accesos. Presupuesto en 24h.',
  keywords: 'señalética interior Barcelona, señalética corporativa Barcelona, señalética hotelera Barcelona, wayfinding Barcelona, señalización oficinas Barcelona, señalética clínicas Barcelona, directorios corporativos Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/senaletica-interior-barcelona' },
  openGraph: {
    title: 'Señalética Interior Barcelona · Corporativa y Hotelera | RUD Studio',
    description: 'Señalética interior para oficinas, hoteles y clínicas en Barcelona. Directorios, wayfinding y señalización de accesos. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com/rotulos/senaletica-interior-barcelona',
    images: [{ url: 'https://royaluniondesign.com/services/senaletica-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos/senaletica-interior-barcelona#service',
  name: 'Señalética interior Barcelona',
  description: 'Diseño y fabricación de señalética interior corporativa y hotelera en Barcelona. Directorios, wayfinding, señalización de accesos y emergencias.',
  url: 'https://royaluniondesign.com/rotulos/senaletica-interior-barcelona',
  provider: { '@id': 'https://royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Fabricación de señalética interior',
  isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
}

const TIPOS = [
  { tipo: 'Directorios corporativos', desc: 'Panels de recepción con nombre de empresa en aluminio, acero inoxidable o madera. El elemento de identidad más visible de cualquier sede.' },
  { tipo: 'Señalética hotelera', desc: 'Numeración de habitaciones, directorios de planta, señalética de servicios. Aluminio anodizado o latón para hoteles de nivel.' },
  { tipo: 'Wayfinding', desc: 'Sistema de orientación para edificios complejos, hospitales, centros comerciales y campus. Claridad visual, consistencia de marca.' },
  { tipo: 'Señalética de accesos', desc: 'Placas de despacho, sala de reuniones, servicios, dirección. Material y acabado adaptados al nivel de representación de cada espacio.' },
  { tipo: 'Señalética normativa', desc: 'Evacuación, emergencias, accesibilidad. Cumplimiento de normativa UNE y CTE. Certificación de conformidad incluida.' },
  { tipo: 'Branding de interior', desc: 'Valores de empresa, murales tipográficos, letras corpóreas en recepción. Identidad visual aplicada al espacio de trabajo.' },
]

export default function SenaleticaInteriorBarcelona() {
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
            RUD STUDIO — BARCELONA · CORPORATIVA · HOTELERA · WAYFINDING · NORMATIVA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>SEÑALÉTICA</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>INTERIOR</span>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>ALUMINIO · ACERO · MADERA · METACRILATO</p>
            <TrackedLink href="/contact?servicio=senaletica" label="Presupuesto señalética" location="hero-senaletica" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — TIPOS DE SEÑALÉTICA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ¿QUÉ TIPO<br /><em>NECESITAS?</em>
            </h2>
          </ScrollReveal>
          <div>
            {TIPOS.map((t, i) => (
              <ScrollReveal key={t.tipo} delay={i * 40}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{t.tipo}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — SECTORES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              SEÑALÉTICA<br /><em>POR SECTOR</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { sector: 'Hoteles & alojamientos', desc: 'Numeración de habitaciones (latón, aluminio anodizado), directorios de planta, señalética de servicios y emergencias. Proyectos desde 10 hasta 300+ habitaciones.' },
              { sector: 'Oficinas & corporativo', desc: 'Directorios de recepción, placas de despacho, señalética de sala de reuniones. Material y acabado adaptados al nivel de representación de la empresa.' },
              { sector: 'Clínicas & salud', desc: 'Señalética de salas, identificación de especialidades, wayfinding de urgencias, señalética de accesibilidad. Cumplimiento normativa sanitaria.' },
              { sector: 'Centros comerciales', desc: 'Directorios de planta, señalética de emergencia, identificación de locales. Materiales resistentes al uso intensivo.' },
              { sector: 'Educación & campus', desc: 'Numeración de aulas, directorios de departamentos, señalética de campus. Diseño que integra la identidad institucional.' },
              { sector: 'Restauración & hostelería', desc: 'Menú boards, señalética de terraza, directorios en hoteles boutique. Materiales que acompañan la estética del espacio.' },
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
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — CÓMO TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              DEL BOCETO<br /><em>A LA PARED</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: 'Auditoría del espacio', d: 'Visita técnica para mapear el espacio, identificar necesidades de señalización y recabar medidas.' },
              { n: '02', t: 'Propuesta de sistema', d: 'Diseño del sistema de señalética: tipologías, materiales, acabados, coherencia con el branding.' },
              { n: '03', t: 'Fabricación en taller', d: 'Cada pieza fabricada en nuestro taller con control de calidad. Plazos garantizados por escrito.' },
              { n: '04', t: 'Instalación completa', d: 'Instalación de todo el sistema en un único proceso para minimizar el impacto en la actividad.' },
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
              <TrackedLink href="/contact?servicio=senaletica" label="Presupuesto señalética bottom" location="bottom-senaletica" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
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
