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
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/senaletica-interior.avif"
          alt="Señalética interior Barcelona — corporativa y hotelera"
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
            Corporativa · Hotelera · Wayfinding · Normativa
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Señalética interior en Barcelona{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>para cada espacio.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Directorios corporativos, señalética hotelera, wayfinding y señalización normativa. Diseño coherente con tu identidad visual. Aluminio, acero, madera o metacrilato.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink href="/contact?servicio=senaletica" label="Presupuesto señalética" location="hero-senaletica"
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

      {/* TIPOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Tipos de señalética</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué tipo de señalética necesitas?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {TIPOS.map((t, i) => (
              <ScrollReveal key={t.tipo} delay={i * 60}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>{t.tipo}</h3>
                  <p style={{ fontSize: 13, color: '#4B5563', lineHeight: 1.7 }}>{t.desc}</p>
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Sectores</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Señalética para cada sector
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1.5rem' }}>
            {[
              { sector: 'Hoteles & alojamientos', kw: 'señalética hotelera Barcelona', desc: 'Numeración de habitaciones (latón, aluminio anodizado), directorios de planta, señalética de servicios y emergencias. Proyectos desde 10 hasta 300+ habitaciones.' },
              { sector: 'Oficinas & corporativo', kw: 'señalética corporativa Barcelona', desc: 'Directorios de recepción, placas de despacho, señalética de sala de reuniones. Material y acabado adaptados al nivel de representación de la empresa.' },
              { sector: 'Clínicas & salud', kw: 'señalética clínicas Barcelona', desc: 'Señalética de salas, identificación de especialidades, wayfinding de urgencias, señalética de accesibilidad. Cumplimiento normativa sanitaria.' },
              { sector: 'Centros comerciales', kw: 'wayfinding centros comerciales Barcelona', desc: 'Directorios de planta, señalética de emergencia, identificación de locales. Materiales resistentes al uso intensivo.' },
              { sector: 'Educación & campus', kw: 'señalética universidades Barcelona', desc: 'Numeración de aulas, directorios de departamentos, señalética de campus. Diseño que integra la identidad institucional.' },
              { sector: 'Restauración & hostelería', kw: 'señalética restaurantes Barcelona', desc: 'Menú boards, señalética de terraza, directorios en hoteles boutique. Materiales que acompañan la estética del espacio.' },
            ].map((s, i) => (
              <ScrollReveal key={s.sector} delay={i * 50}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: 10, color: '#C4BFB8', fontFamily: 'monospace', letterSpacing: '.04em', marginBottom: '0.5rem' }}>{s.kw}</p>
                  <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0A0908', marginBottom: '0.6rem' }}>{s.sector}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{s.desc}</p>
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
              Proceso de un proyecto de señalética
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Auditoría del espacio', d: 'Visita técnica para mapear el espacio, identificar necesidades de señalización y recabar medidas.' },
              { n: '02', t: 'Propuesta de sistema', d: 'Diseño del sistema de señalética: tipologías, materiales, acabados, coherencia con el branding.' },
              { n: '03', t: 'Fabricación', d: 'Cada pieza fabricada en nuestro taller con control de calidad. Plazos garantizados por escrito.' },
              { n: '04', t: 'Instalación completa', d: 'Instalación de todo el sistema en un único proceso para minimizar el impacto en la actividad.' },
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
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Señalética coherente<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>con tu marca.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '40ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos el tipo de espacio, número de plantas y qué necesitas señalizar. Respondemos con propuesta en 24h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink href="/contact?servicio=senaletica" label="Presupuesto señalética bottom" location="bottom-senaletica"
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
