import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Sants Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos funcionales y resistentes en el barrio de Sants, Barcelona: neón LED, cajas de luz, vinilos y letras corpóreas para el comercio de barrio. Presupuesto en 24h.',
  keywords: 'rótulos Sants Barcelona, rótulo Carrer de Sants, rótulos comercio barrio Barcelona, neón LED Sants, letras corpóreas Sants, señalética tiendas Sants Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/sants-barcelona' },
  openGraph: {
    title: 'Rótulos Sants Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en el barrio de Sants: neón LED, cajas de luz, vinilos y letras corpóreas para el comercio tradicional y los nuevos negocios. Presupuesto gratis en 24h.',
    url: 'https://royaluniondesign.com/rotulos/sants-barcelona',
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
      '@id': 'https://royaluniondesign.com/rotulos/sants-barcelona#service',
      name: 'Rótulos Sants Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en el barrio de Sants, Barcelona. Neón LED, cajas de luz, vinilos y letras corpóreas para el comercio de proximidad y los nuevos negocios del barrio.',
      url: 'https://royaluniondesign.com/rotulos/sants-barcelona',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Sants, Barcelona' },
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
      name: '¿Cuánto tarda instalar un rótulo en el barrio de Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès al barrio de Sants hay entre 15 y 20 minutos. La instalación de un rótulo de comercio estándar tarda entre 2 y 4 horas. Trabajamos en el horario que mejor le convenga al negocio, incluyendo fuera del horario comercial para no interferir con la actividad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de rótulo es más habitual en el Carrer de Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el Carrer de Sants y las calles comerciales del barrio predominan las cajas de luz (por su bajo coste y alta visibilidad), los vinilos de escaparate y los rótulos de letras corpóreas en aluminio o PVC. Para la hostelería, el neón LED está cada vez más demandado. Priorizamos soluciones duraderas y fáciles de mantener.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si necesito renovar el rótulo de un local de toda la vida en Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La renovación de rótulos es uno de nuestros servicios más habituales. Desmontamos el rótulo antiguo, limpiamos la fachada si es necesario y instalamos el nuevo. También tramitamos la baja del rótulo anterior en el Ayuntamiento y el alta del nuevo. El proceso completo suele resolverse en una jornada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo básico para un comercio en Sants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un vinilo de escaparate puede partir de 150€ para un pequeño comercio. Una caja de luz estándar para fachada está entre 400€ y 900€ según medida. Las letras corpóreas en aluminio parten de 600€. El neón LED de mostrador empieza en 800€. Todos los precios incluyen diseño, fabricación e instalación. IVA no incluido.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Comercio tradicional & tiendas de barrio',
    desc: 'El Carrer de Sants es uno de los ejes comerciales más largos de Barcelona. Tiendas de alimentación, ropa, ferretería y papelería que buscan rótulos funcionales, duraderos y con buena visibilidad.',
  },
  {
    sector: 'Bares & restaurantes de barrio',
    desc: 'La hostelería de Sants apuesta por rótulos con personalidad pero sin excesos. Cajas de luz, vinilos tipográficos y, cada vez más, neón LED para bares con identidad propia.',
  },
  {
    sector: 'Peluquerías & centros de estética',
    desc: 'Un sector muy activo en Sants. Necesitan rótulos llamativos, bien iluminados y resistentes. Cajas de luz con imagen de marca y vinilos de escaparate para comunicar servicios y promociones.',
  },
  {
    sector: 'Supermercados & alimentación',
    desc: 'Grandes rótulos de fachada con alta visibilidad. Cajas de luz de gran formato, letras corpóreas en aluminio y señalética de dirección interior para mercados y colmados.',
  },
  {
    sector: 'Clínicas dentales & centros de salud',
    desc: 'Los centros de salud de Sants necesitan señalética clara y normativa: rótulo exterior identificativo, señales de emergencia homologadas y señalética interior de dirección.',
  },
  {
    sector: 'Nuevos negocios & emprendedores',
    desc: 'Sants atrae emprendedores que apuestan por el comercio de proximidad. Ofrecemos soluciones completas desde el diseño del logotipo hasta la instalación del primer rótulo, con presupuestos adaptados.',
  },
]

const TIPOS = [
  { tipo: 'Cajas de luz', desc: 'Alta visibilidad de día y de noche, bajo mantenimiento. La opción más demandada en el comercio de barrio. Disponibles en cualquier medida.' },
  { tipo: 'Vinilos de escaparate', desc: 'Solución económica y versátil. Desde corte a plotter hasta impresión fotográfica. Perfectos para promociones temporales y renovaciones de imagen sin gran inversión.' },
  { tipo: 'Letras corpóreas', desc: 'Aluminio, PVC o acero. Efecto volumétrico que destaca en la fachada. Duraderas y fáciles de mantener. Con o sin iluminación integrada.' },
  { tipo: 'Neón LED', desc: 'Cada vez más demandado en la hostelería de Sants. Bajo consumo, larga vida útil y gran impacto visual. Perfecto para bares y restaurantes con identidad.' },
]

export default function RotulosSants() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Rótulos en el barrio de Sants Barcelona — cajas de luz, vinilos y neón LED para comercio de barrio"
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
            Sants · Carrer de Sants · Mercat de Sants · Barcelona
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Rótulos en el barrio de Sants{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Barcelona.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            Cajas de luz, vinilos, letras corpóreas y neón LED para el comercio de proximidad y los nuevos negocios de Sants. Rótulos funcionales, resistentes y con impacto visual. Fabricación propia, instalación en menos de 20 minutos.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=sants-barcelona"
              label="Presupuesto rótulos Sants"
              location="hero-sants"
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Negocios de Sants</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué negocios hay en Sants y qué rótulo necesitan?
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Los más populares en Sants</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Tipos de rótulo más demandados en Sants
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
              Del presupuesto a la instalación en tu local de Sants
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos de la fachada o local y medidas por Telegram o formulario. Te respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del rótulo en tu espacio en 48h. Sin compromiso ni coste.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles. Control de calidad total.' },
              { n: '04', t: 'Instalación en Sants', d: 'Nuestro equipo llega al barrio de Sants en menos de 20 minutos. Instalación limpia y rápida, sin obras ni molestias.' },
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
              Preguntas frecuentes · Rótulos Sants Barcelona
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
              { href: '/rotulos/poblenou-barcelona', label: 'Rótulos Poblenou' },
              { href: '/rotulos/sarria-barcelona', label: 'Rótulos Sarrià' },
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
              { href: '/rotulos/cajas-de-luz-barcelona', label: 'Cajas de Luz' },
              { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Escaparate' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
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
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>en Sants hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos qué necesitas. Fotos del local y medidas aproximadas son suficientes para recibir un presupuesto con render en 48h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=sants-barcelona"
                label="Presupuesto rótulos Sants bottom"
                location="bottom-sants"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
              >
                Pedir presupuesto →
              </TrackedLink>
              <Link
                href="/rotulos/cajas-de-luz-barcelona"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 1.75rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
              >
                Ver cajas de luz →
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
