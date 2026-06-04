import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Cerdanyola del Vallès · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Empresa de rótulos en Cerdanyola del Vallès con taller propio. Neón LED, letras corpóreas, cajas de luz y vinilos. Fabricamos e instalamos en el mismo día. Presupuesto gratis en 2h.',
  keywords: 'rótulos Cerdanyola del Vallès, neón LED Cerdanyola, letras corpóreas Cerdanyola, rótulo luminoso Cerdanyola del Vallès, señalética Cerdanyola',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/cerdanyola-del-valles' },
  openGraph: {
    title: 'Rótulos Cerdanyola del Vallès · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Empresa de rótulos en Cerdanyola del Vallès con taller propio. Neón LED, letras corpóreas, cajas de luz y vinilos. Presupuesto gratis en 2h.',
    url: 'https://royaluniondesign.com/rotulos/cerdanyola-del-valles',
    images: [{ url: 'https://royaluniondesign.com/services/neon-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://royaluniondesign.com/#organization',
      name: 'RUD Studio',
      url: 'https://royaluniondesign.com',
      telephone: '+34645593227',
      email: 'hello@royaluniondesign.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cerdanyola del Vallès',
        addressRegion: 'Barcelona',
        addressCountry: 'ES',
      },
      areaServed: { '@type': 'City', name: 'Cerdanyola del Vallès' },
    },
    {
      '@type': 'Service',
      '@id': 'https://royaluniondesign.com/rotulos/cerdanyola-del-valles#service',
      name: 'Rótulos Cerdanyola del Vallès',
      description: 'Fabricación e instalación de rótulos a medida en Cerdanyola del Vallès. Neón LED, letras corpóreas, cajas de luz, vinilos. Taller propio en el Carrer Sant Salvador 11.',
      url: 'https://royaluniondesign.com/rotulos/cerdanyola-del-valles',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Cerdanyola del Vallès' },
      serviceType: 'Fabricación e instalación de rótulos',
      isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://royaluniondesign.com/rotulos' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Dónde está vuestro taller en Cerdanyola del Vallès?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro taller está en el Carrer Sant Salvador 11, Local 6, Cerdanyola del Vallès (08290). Puedes visitarnos para ver muestras de materiales y acabados en persona, de lunes a viernes de 9h a 18h.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis instalar el mismo día en Cerdanyola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, para pedidos simples (vinilos de corte, chapas, señalética básica) podemos fabricar e instalar el mismo día si confirmas el pedido antes de las 11h. Para neones LED y letras corpóreas el plazo mínimo es de 5-7 días hábiles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo en Cerdanyola del Vallès?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios son los mismos para toda el área metropolitana de Barcelona. Neón LED desde 800€, letras corpóreas desde 2.500€, cajas de luz desde 800€, vinilos de escaparate desde 150€. Presupuesto gratuito con render en menos de 24h.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para un rótulo en Cerdanyola?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para rótulos en interior de locales no se necesita licencia. Para rótulos en fachada se necesita comunicación previa al Ajuntament de Cerdanyola del Vallès. Nosotros gestionamos la tramitación completa para nuestros clientes.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Parque industrial UAB',
    desc: 'Los polígonos industriales de Cerdanyola albergan empresas tech, farma y logística que necesitan señalética corporativa de calidad: rótulos de entrada, señalización de planta, paneles de dirección.',
  },
  {
    sector: 'Comercio local',
    desc: 'El centro comercial de Cerdanyola tiene una red activa de comercios que renuevan su imagen con regularidad. Vinilos de escaparate, rótulos de fachada y señalética interior.',
  },
  {
    sector: 'Restaurantes y hostelería',
    desc: 'Los restaurantes y bares del centro de Cerdanyola usan el neón LED y las letras corpóreas para diferenciarse. Instalación en el mismo día en muchos casos.',
  },
  {
    sector: 'Empresas tecnológicas',
    desc: 'La proximidad de Cerdanyola al campus de la UAB y al Parc de la Recerca concentra empresas de base tecnológica que cuidan su imagen corporativa: señalética de oficinas, rótulos de recepción.',
  },
  {
    sector: 'Clínicas y salud',
    desc: 'Centros médicos, clínicas dentales y centros de fisioterapia que necesitan señalética sanitaria clara, accesible y conforme a normativa.',
  },
  {
    sector: 'Eventos y exposiciones',
    desc: 'Cerdanyola acoge eventos corporativos en el Parc de la Recerca y el campus UAB. Rótulos y señalética temporal para eventos, ferias y congresos.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'El más pedido en polígonos y empresas. Aluminio lacado, acero cepillado, con o sin retroiluminación LED.' },
  { tipo: 'Neón LED', desc: 'Para hostelería y comercio del centro. Fabricamos aquí mismo — plazos de 5-7 días para clientes locales.' },
  { tipo: 'Señalética corporativa', desc: 'Señalización de planta, paneles de dirección, chapas de identificación. Solución integral para oficinas y empresas.' },
  { tipo: 'Vinilos de escaparate', desc: 'Cambio rápido, sin obra. Instalamos el mismo día en Cerdanyola si hay material en stock.' },
]

export default function RotulosCerdanyola() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Rótulos en Cerdanyola del Vallès — neón LED y letras corpóreas a medida"
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
            Cerdanyola del Vallès · Carrer Sant Salvador 11 · Taller propio
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Rótulos en Cerdanyola del Vallès.{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Taller propio, entrega inmediata.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Somos de Cerdanyola. Nuestro taller está aquí — en el Carrer Sant Salvador 11. Sin desplazamiento, sin esperas. Fabricamos e instalamos el mismo día si hay urgencia.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=cerdanyola-del-valles"
              label="Presupuesto rótulos Cerdanyola"
              location="hero-cerdanyola"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
            >
              Visítanos en el taller o pide presupuesto →
            </TrackedLink>
            <a
              href="https://t.me/+34645593227"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
            >
              Telegram · respuesta inmediata
            </a>
          </div>
        </div>
      </section>

      {/* SECTORES DEL BARRIO */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Negocios de Cerdanyola</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué negocios hay en Cerdanyola y qué rótulo necesitan?
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem' }}>
            {SECTORES.map((u, i) => (
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

      {/* TIPOS DE RÓTULO */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Los más populares en Cerdanyola</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Tipos de rótulo más demandados en Cerdanyola del Vallès
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {TIPOS.map((p, i) => (
              <ScrollReveal key={p.tipo} delay={i * 50}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <p style={{ fontSize: 'clamp(1.1rem,2vw,1.35rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>{p.tipo}</p>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{p.desc}</p>
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
              Del presupuesto a la instalación en tu local de Cerdanyola
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos de la fachada o local y medidas por Telegram o formulario. Te respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del rótulo en tu espacio en 48h. Sin compromiso ni coste.' },
              { n: '03', t: 'Fabricación en taller', d: 'Somos locales — llegamos en 5 minutos. Fabricamos en nuestro taller de Cerdanyola del Vallès con control de calidad total.' },
              { n: '04', t: 'Instalación el mismo día', d: 'Instalación el mismo día para clientes en Cerdanyola con pedido antes de las 11h. Para rótulos complejos, coordinamos el horario que mejor te venga.' },
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
              Preguntas frecuentes · Rótulos Cerdanyola del Vallès
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

      {/* LINKS INTERNOS */}
      <section style={{ background: '#0A0908', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Otros barrios y tipos de rótulo</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>También instalamos en</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              { href: '/rotulos/gracia-barcelona', label: 'Rótulos Gràcia' },
              { href: '/rotulos/poblenou-barcelona', label: 'Rótulos Poblenou' },
              { href: '/rotulos/eixample-barcelona', label: 'Rótulos Eixample' },
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
              { href: '/rotulos', label: 'Ver todos los rótulos →' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}
              >
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto gratuito · 2h</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Visítanos en el taller<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>o pide presupuesto.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos qué necesitas. Fotos del local y medidas aproximadas son suficientes para recibir un presupuesto con render en 24h. O pásate directamente por el taller.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=cerdanyola-del-valles"
                label="Presupuesto rótulos Cerdanyola bottom"
                location="bottom-cerdanyola"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
              >
                Pedir presupuesto →
              </TrackedLink>
              <Link
                href="/rotulos/neon-led-barcelona"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 1.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
              >
                Ver neón LED Barcelona →
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
