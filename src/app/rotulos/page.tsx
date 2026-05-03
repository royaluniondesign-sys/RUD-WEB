import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const HERMES_URL = 'https://t.me/RudHermesBot'

export const metadata = {
  title: 'Rótulos Luminosos Barcelona · Neón LED, Letras Corpóreas, Vinilos | RUD Studio',
  description: 'Fabricación e instalación de rótulos luminosos, neón LED, letras corpóreas, vinilos de escaparate y señalética en Barcelona. Presupuesto en 24h sin compromiso.',
  keywords: 'rótulos luminosos Barcelona, neón LED Barcelona, letras corpóreas Barcelona, vinilos escaparate Barcelona, señalética corporativa Barcelona, publicidad exterior Barcelona',
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

export default function Rotulos() {
  return (
    <main style={{ background: '#0A0908' }}>
      <Navbar light />

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <img
          src="/services/neon-shop.jpg"
          alt="Rótulos luminosos neón LED Barcelona — RUD Studio"
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
            Diseñamos, fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas, vinilos y señalética corporativa en Barcelona y área metropolitana.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            <Link href="/contact?servicio=rotulos"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: '#f8f8f8', color: '#171717', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
              Pedir presupuesto gratis →
            </Link>
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
              ['LED', 'Tecnología premium'],
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
                <img src="/services/neon-interior.jpg" alt="Neón LED personalizado a medida Barcelona"
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
                img: '/services/neon-open.jpg',
                alt: 'Rótulo luminoso neón OPEN — señal iluminada para comercio',
                tag: 'Más solicitado',
                title: 'Rótulos Luminosos',
                desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna, consumo mínimo.',
              },
              {
                href: '/contact?servicio=letras',
                img: '/services/building-sign.jpg',
                alt: 'Letras corpóreas y rótulo sobre fachada de edificio Barcelona',
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
                img: '/services/storefront.jpg',
                alt: 'Vinilos escaparate y gráfica en luna de comercio Barcelona',
                title: 'Vinilos Escaparate',
                desc: 'Impresos, esmerilados, recortados en plotter. Cambio estacional sin obra.',
              },
              {
                href: '/contact?servicio=senaletica',
                img: '/services/wayfinding.jpg',
                alt: 'Señalética wayfinding interior — dirección y orientación corporativa',
                title: 'Señalética Interior',
                desc: 'Directorios, identificación de espacios, señales de acceso y evacuación.',
              },
              {
                href: '/contact?servicio=exterior',
                img: '/services/facade.jpg',
                alt: 'Publicidad exterior en fachada de edificio — gran formato Barcelona',
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
              { src: '/services/neon-led.jpg',            alt: 'Neón LED personalizado — letras luminosas a medida' },
              { src: '/services/store-signage.jpg',       alt: 'Rótulo de tienda con iluminación — señal comercial' },
              { src: '/services/retail-interior.jpg',     alt: 'Interior de local con señalética y gráfica' },
              { src: '/services/vinilo-escaparate.jpg',   alt: 'Vinilo recortado en escaparate de comercio' },
              { src: '/services/rotulos-luminosos.jpg',   alt: 'Caja de luz backlit LED — rótulo luminoso' },
              { src: '/services/publicidad-exterior.jpg', alt: 'Publicidad exterior — lona gran formato edificio' },
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
              <Link href="/contact?servicio=rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: '#f8f8f8', color: '#171717', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Pedir presupuesto →
              </Link>
              <a href={HERMES_URL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', border: '1px solid rgba(123,104,238,0.35)', background: 'rgba(123,104,238,0.08)', color: 'rgba(255,255,255,0.8)', borderRadius: 9999, fontSize: 14, textDecoration: 'none' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7B68EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                Chat con Hermes
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
