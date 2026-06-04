import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos El Born Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos a medida en El Born y Sant Pere Barcelona: neón LED, letras corpóreas y vinilos para restaurantes, boutiques y galerías. Presupuesto gratis en 24h con render 3D incluido.',
  keywords: 'rótulos El Born Barcelona, neón LED Born Barcelona, letras corpóreas Born, rótulo Sant Pere Barcelona, señalética Born Barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos/born-barcelona' },
  openGraph: {
    title: 'Rótulos El Born Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos a medida en El Born y Sant Pere Barcelona: neón LED, letras corpóreas y vinilos para restaurantes, boutiques y galerías. Presupuesto gratis en 24h con render 3D incluido.',
    url: 'https://royaluniondesign.com/rotulos/born-barcelona',
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
      '@id': 'https://royaluniondesign.com/rotulos/born-barcelona#service',
      name: 'Rótulos El Born Barcelona',
      description: 'Fabricación e instalación de rótulos a medida en El Born y Sant Pere de Barcelona. Neón LED, letras corpóreas en madera y latón, vinilos esmerilados para restaurantes, boutiques y galerías.',
      url: 'https://royaluniondesign.com/rotulos/born-barcelona',
      provider: { '@id': 'https://royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'El Born, Sant Pere, Barcelona' },
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
      name: '¿Qué tipo de rótulo funciona mejor en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En El Born el neón LED en hostelería y el material natural (madera, latón) en boutiques son los acabados más demandados. El Born tiene una identidad muy definida entre lo artesanal, lo vintage y lo contemporáneo — un rótulo bien elegido refuerza exactamente esa percepción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito licencia para instalar un rótulo en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Born forma parte del Districte de Ciutat Vella, que tiene una normativa de rótulos en fachada especialmente estricta por su valor patrimonial. Se requiere comunicación previa o licencia de obra menor en la mayoría de casos. Nosotros gestionamos la tramitación completa con el Ajuntament de Barcelona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis hacer rótulos en formatos pequeños para locales del Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Muchos locales del Born tienen fachadas pequeñas o interiores compactos. Fabricamos neón LED desde 40 cm y letras corpóreas desde 5 cm de altura. El formato pequeño bien ejecutado tiene más impacto que un rótulo grande mal proporcional.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta un rótulo en El Born?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los precios son los mismos para toda Barcelona: neón LED desde 800€, letras corpóreas desde 2.500€, vinilos desde 150€. En El Born muchos clientes optan por presupuestos de 1.500€-3.000€ combinando neón + vinilo esmerilado en escaparate.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Restaurantes de autor',
    desc: 'El Born concentra algunos de los restaurantes más fotografiados de Barcelona. Un neón de diseño o letras en madera vintage se convierte en el elemento de branding más compartido en Instagram.',
  },
  {
    sector: 'Boutiques de moda y diseño',
    desc: 'Las tiendas de moda independiente, joyería y diseño del Born necesitan rótulos que transmitan artesanía y exclusividad. Letras corpóreas en madera o latón, vinilos esmerilados y rotulación a mano.',
  },
  {
    sector: 'Galerías y espacios de arte',
    desc: 'Las galerías de arte contemporáneo y los espacios culturales del Born usan rótulos discretos pero de alta calidad: vinilo tipográfico, letras de madera natural, señalética minimalista en acero.',
  },
  {
    sector: 'Cafeterías de especialidad',
    desc: 'Los cafés de tercera ola del Born invierten en ambiente: neón con frase motivacional, letras vintage en pared de ladrillo visto, pizarras de madera para el menú del día.',
  },
  {
    sector: 'Hoteles boutique',
    desc: 'El Born tiene una concentración de hoteles boutique con identidad de diseño propia. Rótulos de recepción en latón, señalética de habitaciones en madera, iluminación de ambiente con neón.',
  },
  {
    sector: 'Ocio nocturno y cocktail bars',
    desc: 'Los cocktail bars y locales de ocio nocturno del Born usan el neón LED como elemento central de decoración. Visibilidad nocturna máxima y presencia en redes sociales asegurada.',
  },
]

const TIPOS = [
  { tipo: 'Neón LED', desc: 'El rey del Born. Hostelería, bares y boutiques que quieren ser fotografiados. Fabricación artesanal en cualquier forma o tipografía.' },
  { tipo: 'Letras corpóreas en madera', desc: 'El material más pedido en El Born: madera natural o lacada para tiendas de diseño, cafeterías lifestyle y galerías con identidad propia.' },
  { tipo: 'Vinilos esmerilados y tipográficos', desc: 'Para escaparates y ventanales: vinilo esmerilado con logo recortado, tipografía de alta calidad, efecto premium y discreción.' },
  { tipo: 'Letras en latón y acero', desc: 'Para boutiques premium y hoteles: latón natural o acero cepillado que patina con el tiempo y gana carácter. El acabado más demandado en el sector lujo del Born.' },
]

export default function RotulosBorn() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/services/neon-interior.avif"
          alt="Rótulos en El Born Barcelona — neón LED y letras corpóreas a medida"
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
            El Born · Sant Pere · Ciutat Vella · Barcelona
          </p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '22ch', marginBottom: '1.5rem' }}>
            Rótulos en El Born{' '}
            <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Barcelona.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: 'rgba(255,255,255,0.6)', maxWidth: '52ch', lineHeight: 1.7, marginBottom: '2rem' }}>
            El Born y Sant Pere son dos de los barrios con más identidad visual de Barcelona. Restaurantes de autor, boutiques de diseño, galerías de arte — todos necesitan rótulos que hablen su lenguaje.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=born-barcelona"
              label="Presupuesto rótulos Born"
              location="hero-born"
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Negocios de El Born</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              ¿Qué negocios hay en El Born y qué rótulo necesitan?
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
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Los más populares en El Born</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              Tipos de rótulo más demandados en El Born
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
              Del presupuesto a la instalación en tu local de El Born
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', t: 'Contacto y medidas', d: 'Mándanos fotos de la fachada o local y medidas por Telegram o formulario. Te respondemos en menos de 2h.' },
              { n: '02', t: 'Presupuesto con render', d: 'Recibes presupuesto detallado y render 3D del rótulo en tu espacio en 48h. Sin compromiso ni coste.' },
              { n: '03', t: 'Fabricación en taller', d: 'Fabricamos en nuestro taller de Cerdanyola del Vallès en 10–15 días hábiles. Control de calidad total.' },
              { n: '04', t: 'Instalación en El Born', d: 'Llegamos al Born en menos de 30 minutos desde Cerdanyola del Vallès. Instalación en el horario que mejor te venga, con mínimas molestias.' },
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
              Preguntas frecuentes · Rótulos El Born Barcelona
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
              { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
              { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas' },
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
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>en El Born hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', marginBottom: '2rem', lineHeight: 1.7 }}>
              Cuéntanos qué necesitas. Fotos del local y medidas aproximadas son suficientes para recibir un presupuesto con render en 48h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=born-barcelona"
                label="Presupuesto rótulos Born bottom"
                location="bottom-born"
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
