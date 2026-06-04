import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Sant Cugat del Vallès · Neón LED y Señalética Corporativa | RUD Studio',
  description: 'Empresa de rótulos en Sant Cugat del Vallès: neón LED, letras corpóreas, señalética corporativa y vinilos. A 10 minutos de nuestro taller en Cerdanyola. Presupuesto gratis en 2h.',
  keywords: 'rótulos Sant Cugat del Vallès, neón LED Sant Cugat, letras corpóreas Sant Cugat, señalética corporativa Sant Cugat, rótulo comercio Sant Cugat',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles' },
  openGraph: {
    title: 'Rótulos Sant Cugat del Vallès · Neón LED y Señalética Corporativa | RUD Studio',
    description: 'Empresa de rótulos en Sant Cugat del Vallès: neón LED, letras corpóreas, señalética corporativa y vinilos. A 10 minutos de nuestro taller en Cerdanyola. Presupuesto gratis en 2h.',
    url: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles',
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
      '@id': 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles#service',
      name: 'Rótulos Sant Cugat del Vallès',
      description: 'Fabricación e instalación de rótulos a medida en Sant Cugat del Vallès. Neón LED, letras corpóreas, señalética corporativa y vinilos. Taller a 10 minutos en Cerdanyola del Vallès.',
      url: 'https://royaluniondesign.com/rotulos/sant-cugat-del-valles',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Sant Cugat del Vallès' },
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
      name: '¿Cuánto tardáis en llegar a Sant Cugat para una visita técnica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestro taller en el Carrer Sant Salvador 11 de Cerdanyola del Vallès está a 10 minutos de Sant Cugat. Podemos hacer la visita técnica el mismo día en que contactes, y en urgencias instalamos el mismo día para proyectos simples.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más popular entre las empresas de Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las empresas de Sant Cugat suelen optar por señalética corporativa integral: rótulo de fachada en letras corpóreas de aluminio o acero, señalización interior de dirección y placa de recepción. El acabado más solicitado es el aluminio anodizado con tipografía en relieve.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis placas de identificación para casas y fincas en Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Sant Cugat tiene mucha demanda de elementos de identificación premium para residencias: números de finca en acero corten, placas en latón o bronce, rótulos para puertas y buzones. Cada pieza se fabrica a medida en nuestro taller.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo para una empresa en Sant Cugat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del tipo de proyecto. Un rótulo de fachada en letras corpóreas estándar para una oficina empieza en 2.500€. La señalética corporativa completa (fachada + recepción + señalización interior) puede estar entre 4.000€ y 8.000€. Presupuesto detallado en menos de 48h, sin compromiso.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Empresas tecnológicas y startups',
    desc: 'Sant Cugat atrae a empresas tecnológicas, startups y consultoras internacionales que necesitan señalética corporativa de alta calidad: rótulos de recepción, señalización de oficinas y branding en espacio físico.',
  },
  {
    sector: 'Comercio del centro histórico',
    desc: 'El centro de Sant Cugat tiene una red de comercio premium: moda, joyería, gastronomía y decoración. Rótulos que transmiten calidad y coherencia de marca.',
  },
  {
    sector: 'Restaurantes y hostelería',
    desc: 'Los restaurantes y bares de la plaça de Barcelona y el centro histórico de Sant Cugat invierten en rótulos que se integren en el carácter de la ciudad: madera, forja, neón cálido.',
  },
  {
    sector: 'Colegios y centros educativos',
    desc: 'Sant Cugat tiene una concentración inusual de colegios y centros educativos internacionales. Señalética clara, accesible y duradera para espacios educativos.',
  },
  {
    sector: 'Clínicas y centros de salud',
    desc: 'Clínicas privadas, centros de psicología y consultas médicas que necesitan señalética profesional, discreta y conforme a normativa sanitaria.',
  },
  {
    sector: 'Villas privadas y residencial premium',
    desc: 'Propietarios de villas y casas de lujo en Sant Cugat que buscan rótulos de números de casa, placas de identificación y señalética de finca en materiales nobles: latón, acero o piedra.',
  },
]

const TIPOS = [
  { tipo: 'Señalética corporativa', desc: 'El producto más demandado en Sant Cugat por la concentración de empresas y oficinas. Sistemas completos de señalización interior y exterior.' },
  { tipo: 'Letras corpóreas premium', desc: 'Aluminio anodizado, acero cepillado, latón. Para empresas y comercios que quieren proyectar solidez y permanencia.' },
  { tipo: 'Neón LED', desc: 'Para hostelería, retail lifestyle y espacios de trabajo creativos. Producción local a 10 minutos — plazos mínimos.' },
  { tipo: 'Placas y elementos de identificación', desc: 'Números de casa, chapas de empresa, rótulos de buzón. Materiales nobles: latón, acero inoxidable, bronce.' },
]

export default function RotulosSantCugat() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Rótulos en Sant Cugat del Vallès — señalética corporativa y neón LED a medida"
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
            Sant Cugat del Vallès · A 10 min de Cerdanyola
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Rótulos en Sant Cugat del Vallès.{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>A 10 minutos de nuestro taller.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Sant Cugat es nuestro vecino más cercano. Nuestro taller en Cerdanyola del Vallès está a 10 minutos — lo que se traduce en plazos más cortos, visitas técnicas el mismo día y precios sin gastos de desplazamiento.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=sant-cugat-del-valles"
              label="Presupuesto rótulos Sant Cugat"
              location="hero-sant-cugat"
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Negocios de Sant Cugat</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué negocios hay en Sant Cugat y qué rótulo necesitan?
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Los más populares en Sant Cugat</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Tipos de rótulo más demandados en Sant Cugat
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
              Del presupuesto a la instalación en Sant Cugat
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos de la fachada o local y medidas por Telegram o formulario. Te respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del rótulo en tu espacio en 48h. Sin compromiso ni coste.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles. Control de calidad total.' },
              { n: '04', t: 'Instalación en Sant Cugat', d: '10 min desde Cerdanyola — el mismo día para urgencias. Instalación en el horario que mejor te venga, con mínimas molestias.' },
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
              Preguntas frecuentes · Rótulos Sant Cugat del Vallès
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
              { href: '/rotulos/eixample-barcelona', label: 'Rótulos Eixample' },
              { href: '/rotulos/gracia-barcelona', label: 'Rótulos Gràcia' },
              { href: '/rotulos/cerdanyola-del-valles', label: 'Rótulos Cerdanyola' },
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
              { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior' },
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
              Pide tu presupuesto<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>en Sant Cugat hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos qué necesitas. Fotos del local y medidas aproximadas son suficientes para recibir un presupuesto con render en 48h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=sant-cugat-del-valles"
                label="Presupuesto rótulos Sant Cugat bottom"
                location="bottom-sant-cugat"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
              >
                Pedir presupuesto →
              </TrackedLink>
              <Link
                href="/rotulos/letras-corporeas-barcelona"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 1.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
              >
                Ver letras corpóreas →
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
