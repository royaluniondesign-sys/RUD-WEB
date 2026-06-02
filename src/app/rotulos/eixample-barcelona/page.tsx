import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Eixample Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos a medida en el Eixample Barcelona: neón LED, letras corpóreas, cajas de luz y vinilos. Cumplimos la normativa de fachadas del Ayuntamiento. Presupuesto en 24h.',
  keywords: 'rótulos Eixample Barcelona, rótulos Passeig de Gràcia, rótulo Eixample normativa fachada, neón LED Eixample, letras corpóreas Eixample, señalética Eixample Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/eixample-barcelona' },
  openGraph: {
    title: 'Rótulos Eixample Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en el Eixample: neón LED, letras corpóreas, cajas de luz. Normativa municipal incluida. Presupuesto gratis en 24h.',
    url: 'https://royaluniondesign.com/rotulos/eixample-barcelona',
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
      areaServed: { '@type': 'City', name: 'Barcelona' },
    },
    {
      '@type': 'Service',
      '@id': 'https://royaluniondesign.com/rotulos/eixample-barcelona#service',
      name: 'Rótulos Eixample Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en el Eixample de Barcelona. Neón LED, letras corpóreas, cajas de luz, vinilos. Cumplimos normativa municipal de fachadas.',
      url: 'https://royaluniondesign.com/rotulos/eixample-barcelona',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Eixample, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en el Eixample de Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al Eixample hay menos de 20 minutos. La instalación de un rótulo de fachada estándar tarda entre 2 y 5 horas. Para fachadas catalogadas del Eixample coordinamos también los permisos con el Ayuntamiento de Barcelona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué normativa de rótulos existe en el Eixample?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Eixample tiene una normativa estricta de rótulos en fachadas: no se permiten rótulos que sobresalgan más de 15 cm de la línea de fachada en planta baja, y los rótulos luminosos deben apagarse a las 23h en locales sin actividad nocturna. Nosotros gestionamos la documentación y licencias necesarias.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo encaja mejor en el Passeig de Gràcia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el Passeig de Gràcia y la Rambla Catalunya predominan las letras corpóreas de latón o acero cepillado retroiluminadas, y los rótulos de caja de luz con vinilo impreso de alta calidad. El neón LED también es muy demandado en restaurantes boutique y hoteles de la zona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia municipal para un rótulo en el Eixample?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. En Barcelona cualquier rótulo en fachada o interior visible desde la calle requiere comunicación previa o licencia al Ayuntamiento. Nosotros gestionamos la tramitación completa: proyecto técnico, licencia de obras menor y alta de instalación eléctrica si procede.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Moda & retail de lujo',
    desc: 'Boutiques y concept stores del Passeig de Gràcia y Rambla Catalunya necesitan rótulos de alta calidad que reflejen su marca: letras en latón, retroiluminación cálida, acabados premium.',
  },
  {
    sector: 'Restaurantes & hoteles boutique',
    desc: 'La hostelería del Eixample compite en imagen. Un rótulo de neón LED o caja de luz bien diseñado convierte la fachada de la Gran Via o el Consell de Cent en el mejor elemento de marketing.',
  },
  {
    sector: 'Oficinas & despachos profesionales',
    desc: 'Firmas de abogados, consultoras, agencias creativas. Señalética corporativa interior y rótulo de identificación exterior. Discreción y calidad de acabados.',
  },
  {
    sector: 'Clínicas & centros de estética',
    desc: 'Muchos centros médicos y estéticos se concentran en el Eixample. Rótulos con normativa sanitaria, señalética interior de dirección y chapas de identificación.',
  },
  {
    sector: 'Gastronomía & cafeterías',
    desc: 'Los cafés y bistrós del Eixample usan el neón LED como elemento de decoración y marketing. Un letrero de neón genera contenido orgánico en redes sociales desde el primer día.',
  },
  {
    sector: 'Tiendas de barrio premium',
    desc: 'Desde librerías de diseño hasta florerías artesanales: el Eixample tiene una red de pequeño comercio que cuida mucho su imagen. Vinilos de escaparate, rótulos de madera y letras volumétricas.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas', desc: 'Aluminio, acero o latón. Con o sin retroiluminación. El más solicitado en fachadas catalogadas del Eixample.' },
  { tipo: 'Neón LED', desc: 'Perfecto para hostelería y retail. Bajo consumo, larga vida útil, visible de día y de noche.' },
  { tipo: 'Cajas de luz', desc: 'Iluminación uniforme, imagen limpia. Ideal para locales en planta baja de la Gran Via o Aragó.' },
  { tipo: 'Vinilos de escaparate', desc: 'Desde corte a medida hasta impresión fotográfica. Cambia el escaparate por temporada.' },
]

export default function RotulosEixample() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Rótulos en el Eixample Barcelona — neón LED y letras corpóreas a medida"
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
            Eixample · Passeig de Gràcia · Gran Via · Rambla Catalunya
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Rótulos en el Eixample{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Barcelona.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Neón LED, letras corpóreas y cajas de luz para los negocios del Eixample. Conocemos la normativa de fachadas del Ayuntamiento de Barcelona. Fabricación propia en Cerdanyola, instalación en menos de 20 minutos.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=eixample-barcelona"
              label="Presupuesto rótulos Eixample"
              location="hero-eixample"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
            >
              Pedir presupuesto gratis →
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Negocios del Eixample</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué negocios hay en el Eixample y qué rótulo necesitan?
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Los más populares en el Eixample</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Tipos de rótulo más demandados en el Eixample
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
              Del presupuesto a la instalación en tu local del Eixample
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos de la fachada o local y medidas por Telegram o formulario. Te respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del rótulo en tu espacio en 48h. Sin compromiso ni coste.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles. Control de calidad total.' },
              { n: '04', t: 'Instalación en el Eixample', d: 'Nuestro equipo llega al Eixample en menos de 20 minutos. Instalación en el horario que mejor te venga, con mínimas molestias.' },
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
              Preguntas frecuentes · Rótulos Eixample Barcelona
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
              { href: '/rotulos/sarria-barcelona', label: 'Rótulos Sarrià' },
              { href: '/rotulos/sants-barcelona', label: 'Rótulos Sants' },
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto gratuito · 24h</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Pide tu presupuesto<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>en el Eixample hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos qué necesitas. Fotos del local y medidas aproximadas son suficientes para recibir un presupuesto con render en 48h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=eixample-barcelona"
                label="Presupuesto rótulos Eixample bottom"
                location="bottom-eixample"
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
