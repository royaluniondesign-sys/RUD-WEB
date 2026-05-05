import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'


export const metadata = {
  title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos Escaparate | RUD Studio',
  description: 'Empresa de rótulos en Barcelona. Fabricamos e instalamos rótulos personalizados: neón LED, letras corpóreas, rótulos luminosos, vinilos escaparate y señalética corporativa. Presupuesto en 24h.',
  keywords: 'rótulos barcelona, rótulos personalizados barcelona, neón LED barcelona, letras corpóreas barcelona, vinilos escaparate barcelona, rótulos luminosos barcelona, señalética corporativa barcelona, empresa rótulos barcelona, fabricación rótulos barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos' },
  openGraph: {
    title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos Escaparate | RUD Studio',
    description: 'Empresa de rótulos en Barcelona. Neón LED, letras corpóreas, rótulos luminosos, vinilos escaparate y señalética. Presupuesto en 24h.',
    url: 'https://royaluniondesign.com/rotulos',
    images: [{ url: 'https://royaluniondesign.com/services/hero-rotulos.jpg', width: 1400, height: 1051 }],
  },
}

const rotulosSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://royaluniondesign.com/rotulos#service',
  'name': 'Rótulos y Señalética Barcelona',
  'description': 'Fabricación e instalación de rótulos personalizados en Barcelona: neón LED, letras corpóreas, rótulos luminosos, vinilos de escaparate y señalética corporativa. Taller propio en Cerdanyola del Vallès.',
  'url': 'https://royaluniondesign.com/rotulos',
  'provider': {
    '@id': 'https://royaluniondesign.com/#organization',
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Barcelona',
  },
  'serviceType': 'Fabricación e instalación de rótulos',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Tipos de rótulo',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Rótulos Neón LED Barcelona',
          'description': 'Neón LED flexible y neón de vidrio artesanal. Cualquier tipografía, logo o forma. Para escaparates, hostelería, retail y eventos.',
          'url': 'https://royaluniondesign.com/contact?servicio=neon',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Rótulos Luminosos Barcelona',
          'description': 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna con consumo mínimo.',
          'url': 'https://royaluniondesign.com/contact?servicio=luminosos',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Letras Corpóreas y 3D Barcelona',
          'description': 'Letras corpóreas en aluminio, metacrilato, madera y acero. Con o sin retroiluminación tipo halo.',
          'url': 'https://royaluniondesign.com/contact?servicio=letras',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Vinilos Escaparate Barcelona',
          'description': 'Vinilos impresos, esmerilados y recortados en plotter para escaparates. Cambio estacional sin obra.',
          'url': 'https://royaluniondesign.com/contact?servicio=vinilos',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Señalética Interior Barcelona',
          'description': 'Directorios, identificación de espacios, wayfinding y señales de acceso corporativas.',
          'url': 'https://royaluniondesign.com/contact?servicio=senaletica',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Publicidad Exterior Barcelona',
          'description': 'Lonas de gran formato, banderolas, vallas, fachadas y wrapping de vehículos.',
          'url': 'https://royaluniondesign.com/contact?servicio=exterior',
        },
      },
    ],
  },
}

const PROCESO = [
  {
    n: '01',
    title: 'Medición y briefing',
    desc: 'Fotos y medidas por WhatsApp. Visita técnica gratuita en BCN para proyectos grandes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4"/>
        <line x1="12" y1="5" x2="12" y2="19"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Diseño y propuesta',
    desc: 'Propuesta visual y presupuesto detallado en menos de 24h.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Fabricación en taller',
    desc: 'Todo fabricado en Barcelona. Materiales premium, control de calidad.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Instalación profesional',
    desc: 'Equipo propio. Sin afectar tu horario comercial. Permisos incluidos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

const FAQ = [
  {
    q: '¿Cuánto cuesta un rótulo neón LED en Barcelona?',
    a: 'El neón LED personalizado parte de 1.800€ para una instalación comercial completa — diseño, fabricación e instalación incluidos. El precio varía según el tamaño, la complejidad de la forma y el tipo de soporte. Pídenos medidas y te enviamos presupuesto en 24h.',
  },
  {
    q: '¿Cuánto cuesta un rótulo luminoso (caja de luz)?',
    a: 'Los rótulos luminosos tipo caja de luz parten de 3.200€ para una instalación comercial estándar con iluminación LED interior. El precio depende de las dimensiones, el acabado y la complejidad de la instalación. Solicita presupuesto sin compromiso.',
  },
  {
    q: '¿Cuánto cuestan las letras corpóreas?',
    a: 'Las letras corpóreas en aluminio, metacrilato o madera parten de 2.500€ para un proyecto estándar con instalación incluida. El retroiluminado tipo halo o las letras de gran formato pueden superar ese precio según el proyecto. Te damos precio exacto con medidas.',
  },
  {
    q: '¿Cuánto tiempo tardáis en fabricar e instalar un rótulo?',
    a: 'Los vinilos de escaparate los entregamos en 48–72h. Rótulos luminosos y letras corpóreas entre 5 y 10 días hábiles. El neón LED a medida puede tardar hasta 15 días. Instalamos en el horario que mejor te venga, sin afectar tu actividad comercial.',
  },
  {
    q: '¿Hacéis visita técnica previa y es gratuita?',
    a: 'Sí. La visita técnica en Barcelona y área metropolitana es completamente gratuita y sin compromiso. También podemos hacer presupuesto orientativo con fotos y medidas que nos mandes por WhatsApp.',
  },
  {
    q: '¿Trabajáis fuera de Barcelona?',
    a: 'Nuestra zona habitual de instalación es Barcelona ciudad y el área metropolitana (Cerdanyola, Badalona, Hospitalet, Terrassa, Sabadell…). Para proyectos en el resto de Cataluña o España, consúltanos — los hacemos según presupuesto de desplazamiento.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    'name': q,
    'acceptedAnswer': { '@type': 'Answer', 'text': a },
  })),
}

export default function Rotulos() {
  return (
    <main style={{ background: '#0A0908' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rotulosSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/services/hero-rotulos.avif"
          alt="Rótulos personalizados Barcelona — neón LED, letras corpóreas y señalética · RUD Studio"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)' }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(3rem,8vw,6rem)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 9999, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'white', display: 'inline-block', opacity: 0.7 }} />
              <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.75)' }}>Fabricación propia · Barcelona</span>
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '18ch', marginBottom: '1.5rem' }}>
            Rótulos que hacen tu local{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>imposible de ignorar.</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', color: 'rgba(255,255,255,0.65)', maxWidth: '46ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Empresa de rótulos personalizados en Barcelona. Fabricamos e instalamos neón LED, letras corpóreas, rótulos luminosos, vinilos de escaparate y señalética corporativa — con taller propio en BCN.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto gratis" location="hero-rotulos"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: '#f8f8f8', color: '#171717', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Pedir presupuesto gratis →
            </TrackedLink>
            <a href="#tipos"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)', borderRadius: 9999, fontSize: 14, textDecoration: 'none' }}>
              Ver tipos de rótulo ↓
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            {[
              ['24h', 'Presupuesto'],
              ['0€', 'Visita técnica'],
              ['BCN', 'Taller propio'],
              ['2 años', 'Garantía'],
            ].map(([n, l]) => (
              <div key={l}>
                <p style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, color: 'white', lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS */}
      <section id="tipos" style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,7rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 12 }}>Lo que fabricamos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: '0.5rem' }}>6 tipos de rótulo</h2>
            <p style={{ fontSize: 15, color: '#6B7280', marginBottom: '3rem', maxWidth: '50ch' }}>Desde el neón más artesanal hasta la señalética de gran formato.</p>
          </ScrollReveal>

          {/* Neón — featured full width */}
          <ScrollReveal>
            <Link href="/contact?servicio=neon" style={{ display: 'block', textDecoration: 'none', marginBottom: '1rem' }} className="group">
              <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 'clamp(280px,38vw,500px)' }} className="card-lift">
                <img src="/services/neon-interior.avif" alt="Rótulo neón LED personalizado a medida — neón de vidrio y flexible Barcelona"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem,4vw,2.5rem)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
                    {['Neón LED', 'Neón de vidrio', 'Cualquier forma', 'Interior y exterior'].map(t => (
                      <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 500, background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.2)' }}>{t}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 700, color: 'white', marginBottom: '0.5rem' }}>Neón LED & Neón de Vidrio</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: '50ch', lineHeight: 1.6 }}>
                    Cualquier tipografía, logo o forma. Neón LED flexible o neón de vidrio artesanal. Ideal para escaparates, hostelería, retail y eventos.
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: '1.25rem', padding: '0.625rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: 9999, fontSize: 13, fontWeight: 600, color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                    Presupuesto neón →
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* 2 cols */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {[
              {
                href: '/contact?servicio=luminosos',
                img: '/services/rotulos-luminosos.avif',
                alt: 'Rótulos luminosos Barcelona — caja de luz backlit LED para comercio',
                tag: 'Más solicitado',
                title: 'Rótulos Luminosos',
                desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna, consumo mínimo.',
              },
              {
                href: '/contact?servicio=letras',
                img: '/services/letras-corporeas.avif',
                alt: 'Letras corpóreas Barcelona — aluminio, metacrilato y retroiluminación halo',
                tag: null,
                title: 'Letras Corpóreas & 3D',
                desc: 'Aluminio, metacrilato, madera, acero. Con o sin retroiluminación tipo halo.',
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }} className="group">
                  <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 300 }} className="card-lift">
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)' }} />
                    {item.tag && (
                      <div style={{ position: 'absolute', top: 16, left: 16 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)', padding: '4px 12px', borderRadius: 9999, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>{item.tag}</span>
                      </div>
                    )}
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '0.4rem' }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* 3 cols */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem' }}>
            {[
              {
                href: '/contact?servicio=vinilos',
                img: '/services/vinilo-escaparate.avif',
                alt: 'Vinilos escaparate Barcelona — gráfica recortada y esmerilada en luna de comercio',
                title: 'Vinilos Escaparate',
                desc: 'Impresos, esmerilados, recortados en plotter. Cambio estacional sin obra.',
              },
              {
                href: '/contact?servicio=senaletica',
                img: '/services/senaletica-interior.avif',
                alt: 'Señalética interior Barcelona — directorios, wayfinding y señales corporativas',
                title: 'Señalética Interior',
                desc: 'Directorios, identificación de espacios, señales de acceso y evacuación.',
              },
              {
                href: '/contact?servicio=exterior',
                img: '/services/publicidad-exterior.avif',
                alt: 'Publicidad exterior Barcelona — lonas gran formato, banderolas y fachadas',
                title: 'Publicidad Exterior',
                desc: 'Lonas, banderolas, vallas, fachadas y wrapping de vehículos.',
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }} className="group">
                  <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 250 }} className="card-lift">
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '0.3rem' }}>{item.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 12 }}>Sectores de aplicación</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: 'white', letterSpacing: '-.03em', marginBottom: '0.75rem' }}>Rótulos para cada negocio</h2>
            <p style={{ fontSize: 15, color: '#6B7280', marginBottom: '3rem', maxWidth: '52ch', lineHeight: 1.7 }}>Fabricamos rótulos a medida para cualquier sector. Cada tipología de local tiene sus propios requisitos de visibilidad, normativa y estética.</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1px', background: '#1A1A1A', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { sector: 'Restaurantes & Bares', kw: 'rótulo para restaurante Barcelona', desc: 'Neón LED en barra, menús luminosos, rótulos de fachada con materiales resistentes a la humedad y la grasa.' },
              { sector: 'Hoteles & Hostelería', kw: 'señalética hotelera Barcelona', desc: 'Señalética de habitaciones, directorios de planta, rótulos de recepción y branding de espacios comunes.' },
              { sector: 'Retail & Tiendas', kw: 'rótulos para tiendas Barcelona', desc: 'Vinilos de escaparate, letras corpóreas en fachada, rótulos luminosos que incrementan la visibilidad exterior.' },
              { sector: 'Oficinas & Corporativo', kw: 'señalética corporativa Barcelona', desc: 'Letras corpóreas en recepción, directorios de empresa, señalética de accesos y placas de despacho.' },
              { sector: 'Peluquerías & Estética', kw: 'rótulo para peluquería Barcelona', desc: 'Neón decorativo, carteles de fachada, vinilos para escaparate con logotipo y horarios.' },
              { sector: 'Clínicas & Salud', kw: 'rótulos clínicas Barcelona', desc: 'Señalética de salas y consultas, placas de acceso, wayfinding y rotulación de fachada normalizada.' },
              { sector: 'Gimnasios & Fitness', kw: 'rótulos gimnasio Barcelona', desc: 'Letras corpóreas de gran formato, murales de vinilo motivacionales, neón LED en zona de pesas.' },
              { sector: 'Eventos & Ferias', kw: 'rótulos para eventos Barcelona', desc: 'Stands con estructura y rotulación, photo walls, señalética temporal y vinilados de suelo y cristal.' },
            ].map((item, i) => (
              <ScrollReveal key={item.sector} delay={i * 50}>
                <div style={{ background: '#0A0908', padding: '2rem 1.75rem' }}>
                  <p style={{ fontSize: 11, color: '#444', marginBottom: '0.75rem', fontFamily: 'monospace', letterSpacing: '.05em' }}>{item.kw}</p>
                  <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '0.6rem' }}>{item.sector}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,7rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 12 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, color: 'white', letterSpacing: '-.03em', marginBottom: '3rem' }}>Del briefing a la instalación</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 1, background: '#1A1A1A', borderRadius: 16, overflow: 'hidden' }}>
            {PROCESO.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 70}>
                <div style={{ background: '#0A0908', padding: '2.5rem 2rem' }}>
                  <div style={{ color: '#6B7280', marginBottom: '1.25rem' }}>{s.icon}</div>
                  <p style={{ fontSize: 10, fontFamily: 'monospace', color: '#444', marginBottom: '0.75rem', letterSpacing: '.1em' }}>{s.n}</p>
                  <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 6 }}>Trabajos realizados</p>
                <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-.03em' }}>Instalaciones recientes</h2>
              </div>
              <Link href="/contact?servicio=rotulos"
                style={{ fontSize: 13, fontWeight: 600, color: '#0A0908', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Tu local aquí →
              </Link>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 8 }}>
            {[
              { src: '/services/gal-1.avif', alt: 'Trabajo de rótulos RUD Studio Barcelona' },
              { src: '/services/gal-2.avif', alt: 'Rótulo personalizado fabricado en Barcelona — RUD Studio' },
              { src: '/services/gal-3.avif', alt: 'Neón LED a medida instalado en Barcelona — RUD Studio' },
              { src: '/services/gal-4.avif', alt: 'Letras corpóreas en local comercial Barcelona — RUD Studio' },
              { src: '/services/gal-5.avif', alt: 'Rótulo luminoso caja de luz Barcelona — RUD Studio' },
              { src: '/services/gal-6.avif', alt: 'Señalética interior corporativa Barcelona — RUD Studio' },
              { src: '/services/gal-7.avif', alt: 'Rótulo de fachada instalado en Barcelona — RUD Studio' },
              { src: '/services/gal-8.avif', alt: 'Instalación de rótulo exterior Barcelona — RUD Studio' },
            ].map((item, i) => (
              <ScrollReveal key={item.src} delay={i * 40}>
                <div style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '1/1' }} className="card-lift">
                  <img src={item.src} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO text block */}
      <section style={{ background: 'white', paddingBlock: 'clamp(3rem,6vw,4.5rem)' }}>
        <div className="container-custom" style={{ maxWidth: 760 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 12 }}>Empresa de rótulos en Barcelona</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: 20 }}>
              Rótulos personalizados fabricados en Barcelona
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, margin: 0 }}>
                RUD Studio es una empresa de rótulos en Barcelona con taller propio en Cerdanyola del Vallès. Fabricamos rótulos personalizados para comercios, restaurantes, hoteles y empresas: neón LED, letras corpóreas, rótulos luminosos tipo caja de luz, vinilos de escaparate y señalética corporativa.
              </p>
              <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, margin: 0 }}>
                A diferencia de otras empresas de rótulos en Barcelona, controlamos todo el proceso — desde el diseño hasta la instalación — sin intermediarios. Eso nos permite entregar rótulos de mayor calidad, en menos tiempo y con presupuesto competitivo. Visita técnica gratuita y presupuesto en 24h.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 820 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 12 }}>Preguntas frecuentes</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: '3rem' }}>Todo lo que necesitas saber</h2>
          </ScrollReveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {FAQ.map((item, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details style={{ borderTop: '1px solid #E5E0D8', padding: '1.5rem 0' }}>
                  <summary style={{ fontSize: 'clamp(0.95rem,1.8vw,1.05rem)', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, userSelect: 'none' }}>
                    <span>{item.q}</span>
                    <span style={{ flexShrink: 0, width: 20, height: 20, color: '#9CA3AF', marginTop: 2, fontSize: 20, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, marginTop: '1rem', maxWidth: '68ch' }}>{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid #E5E0D8' }} />
          </div>
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: '2rem', lineHeight: 1.7 }}>
              ¿Tienes otra pregunta? Escríbenos por{' '}
              <a href="https://wa.me/34645593227" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>WhatsApp</a>{' '}
              o{' '}
              <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>email</a>{' '}
              y te respondemos en menos de 24h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,7rem) 0', textAlign: 'center' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto gratuito</p>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 700, color: 'white', letterSpacing: '-.03em', lineHeight: 1.1, maxWidth: '20ch', margin: '0 auto 1.25rem' }}>
              Respuesta en 24h. Sin compromiso.
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '44ch', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Mándanos fotos del espacio y las medidas por WhatsApp o email. Presupuesto detallado sin compromiso.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto" location="bottom-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#f8f8f8', color: '#171717', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Pedir presupuesto →
              </TrackedLink>
              <TrackedLink href="https://wa.me/34645593227?text=Hola%2C%20quiero%20presupuesto%20para%20un%20r%C3%B3tulo" label="WhatsApp presupuesto" location="bottom-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#25D366', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </TrackedLink>
              <TrackedLink href="/contact?servicio=rotulos&tipo=llamada" label="Solicitar llamada" location="bottom-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', borderRadius: 9999, fontSize: 14, textDecoration: 'none' }}>
                Solicitar llamada
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
