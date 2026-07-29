import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos | RUD Studio',
  description: 'Empresa de rótulos en Barcelona con taller propio. Neón LED, letras corpóreas, rótulos luminosos y vinilos escaparate. Fabricación e instalación. Presupuesto gratis en 24h.',
  keywords: 'rótulos barcelona, rótulos personalizados barcelona, neón LED barcelona, letras corpóreas barcelona, vinilos escaparate barcelona, rótulos luminosos barcelona, señalética corporativa barcelona, empresa rótulos barcelona, fabricación rótulos barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos' },
  openGraph: {
    title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos | RUD Studio',
    description: 'Empresa de rótulos en Barcelona con taller propio. Neón LED, letras corpóreas, rótulos luminosos y vinilos. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos',
    images: [{ url: 'https://www.royaluniondesign.com/services/hero-rotulos.jpg', width: 1400, height: 1051 }],
  },
}

const rotulosSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/rotulos#service',
  'name': 'Rótulos y Señalética Barcelona',
  'description': 'Fabricación e instalación de rótulos personalizados en Barcelona: neón LED, letras corpóreas, rótulos luminosos, vinilos de escaparate y señalética corporativa. Taller propio en Cerdanyola del Vallès.',
  'url': 'https://www.royaluniondesign.com/rotulos',
  'provider': { '@id': 'https://www.royaluniondesign.com/#organization' },
  'areaServed': { '@type': 'City', 'name': 'Barcelona' },
  'serviceType': 'Fabricación e instalación de rótulos',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Tipos de rótulo',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Neón LED Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/neon-led-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cajas de Luz y Rótulos Luminosos Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/cajas-de-luz-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Letras Corpóreas Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/letras-corporeas-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Vinilos Escaparate Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/vinilos-escaparate-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Señalética Interior Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/senaletica-interior-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Publicidad Exterior Barcelona', 'url': 'https://www.royaluniondesign.com/rotulos/publicidad-exterior-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    { '@type': 'Question', 'name': '¿Cuánto cuesta un rótulo neón LED en Barcelona?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El neón LED personalizado parte de 1.800€ para una instalación comercial completa — diseño, fabricación e instalación incluidos. El precio varía según el tamaño y la complejidad de la forma.' } },
    { '@type': 'Question', 'name': '¿Cuánto cuesta un rótulo luminoso?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Los rótulos luminosos tipo caja de luz parten de 3.200€ para una instalación comercial estándar con iluminación LED interior.' } },
    { '@type': 'Question', 'name': '¿Cuánto cuestan las letras corpóreas?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Las letras corpóreas en aluminio, metacrilato o madera parten de 2.500€ para un proyecto estándar con instalación incluida.' } },
    { '@type': 'Question', 'name': '¿Cuánto tiempo tardáis en fabricar un rótulo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Los vinilos en 48-72h. Rótulos luminosos y letras corpóreas entre 5-10 días hábiles. Neón LED hasta 15 días.' } },
    { '@type': 'Question', 'name': '¿Hacéis visita técnica gratuita?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, visita técnica completamente gratuita en Barcelona y área metropolitana.' } },
    { '@type': 'Question', 'name': '¿Trabajáis fuera de Barcelona?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Principalmente Barcelona y área metropolitana. Para proyectos en Cataluña o España, consúltanos.' } },
  ],
}

const TIPOS = [
  { href: '/rotulos/neon-led-barcelona',           title: 'NEÓN LED',            sub: 'Cualquier forma · Interior y exterior · Bajo consumo' },
  { href: '/rotulos/cajas-de-luz-barcelona',       title: 'RÓTULOS LUMINOSOS',   sub: 'Caja de luz · Backlit LED · Visibilidad 24h' },
  { href: '/rotulos/letras-corporeas-barcelona',   title: 'LETRAS CORPÓREAS',    sub: 'Aluminio · Metacrilato · Madera · Halo LED' },
  { href: '/rotulos/vinilos-escaparate-barcelona', title: 'VINILOS ESCAPARATE',  sub: 'Impresos · Esmerilados · Corte · Instalación' },
  { href: '/rotulos/senaletica-interior-barcelona',title: 'SEÑALÉTICA INTERIOR', sub: 'Oficinas · Hoteles · Comercios · Wayfinding' },
  { href: '/rotulos/publicidad-exterior-barcelona',title: 'PUBLICIDAD EXTERIOR', sub: 'Lonas · Banderolas · Vallas · Fachadas' },
]

const TRABAJOS = [
  { img: '/services/gal-1.avif', tipo: 'Neón LED · Fachada',       nombre: 'Trattoria di Marco',    barrio: 'Gràcia, Barcelona',            desc: 'Neón LED rojo «MARCO» en fachada + letras corpóreas aluminio cepillado. Duplicó la visibilidad nocturna en Carrer de Verdi.' },
  { img: '/services/gal-3.avif', tipo: 'Neón LED · Interior',      nombre: 'Coffee Bloom',           barrio: 'Poblenou, Barcelona',           desc: 'Neón «BLOOM» en warm white sobre ladrillo visto. Punto de referencia fotográfico en el barrio 22@.' },
  { img: '/services/gal-5.avif', tipo: 'Rótulo Luminoso · Exterior',nombre: 'Bar Atlántico',         barrio: 'Barceloneta, Barcelona',        desc: 'Caja de luz gran formato con LED perimetral. Visible desde 200m en el paseo marítimo.' },
  { img: '/services/gal-2.avif', tipo: 'Letras Corpóreas · Fachada',nombre: 'Moda Plural',           barrio: 'Eixample, Barcelona',           desc: 'Aluminio negro mate + retroiluminación halo blanca. Identidad aplicada a fachada con coherencia total.' },
  { img: '/services/gal-6.avif', tipo: 'Señalética · Hotelera',    nombre: 'Hotel Trafalgar BCN',   barrio: 'Sarrià-Sant Gervasi, Barcelona', desc: 'Señalética para 64 habitaciones: directorios de planta, identificación de suites, emergencia.' },
  { img: '/services/gal-4.avif', tipo: 'Vinilos · Escaparate',     nombre: 'Clínica Llorens',       barrio: 'Sant Gervasi, Barcelona',       desc: 'Vinilos esmerilados con logotipo recortado + franja de privacidad. Estética clínica desde la calle.' },
]

const ZONAS = [
  { label: 'Eixample',              href: '/rotulos/eixample-barcelona',         note: 'Normativa fachadas Ayuntamiento' },
  { label: 'Gràcia',               href: '/rotulos/gracia-barcelona',            note: 'Barrio de diseño y hostelería' },
  { label: 'Poblenou / 22@',       href: '/rotulos/poblenou-barcelona',          note: 'Startups, retail y hostelería' },
  { label: 'Sarrià – Sant Gervasi',href: '/rotulos/sarria-barcelona',            note: 'Comercio premium y restauración' },
  { label: 'Sants – Montjuïc',     href: '/rotulos/sants-barcelona',             note: 'Comercio de barrio y locales' },
  { label: 'Cerdanyola del Vallès',href: '/rotulos/cerdanyola-del-valles',       note: 'Taller propio · instalación inmediata' },
  { label: "L'Hospitalet",         href: '/rotulos/hospitalet-de-llobregat',     note: 'Gran Via, Fira, zona universitaria' },
  { label: 'Badalona',             href: '/rotulos/badalona-barcelona',          note: 'Zona marítima, Pep Ventura, Can Ruti' },
  { label: 'El Born',              href: '/rotulos/born-barcelona',              note: 'Boutiques, restaurantes, galerías' },
  { label: 'Sant Cugat del Vallès',href: '/rotulos/sant-cugat-del-valles',       note: 'Tech, comercio histórico, restauración' },
  { label: 'Terrassa',             href: '/rotulos/terrassa-barcelona',          note: 'Industria, eje comercial, hostelería' },
]

const FAQ_ITEMS = [
  { q: '¿Cuánto cuesta un rótulo neón LED en Barcelona?',   a: 'El neón LED personalizado parte de 1.800€ para una instalación comercial completa — diseño, fabricación e instalación incluidos. El precio varía según el tamaño, la complejidad de la forma y el tipo de soporte. Pídenos medidas y te enviamos presupuesto en 24h.' },
  { q: '¿Cuánto cuesta un rótulo luminoso (caja de luz)?',  a: 'Los rótulos luminosos tipo caja de luz parten de 3.200€ para una instalación comercial estándar con iluminación LED interior. El precio depende de las dimensiones, el acabado y la complejidad de la instalación.' },
  { q: '¿Cuánto cuestan las letras corpóreas?',             a: 'Las letras corpóreas en aluminio, metacrilato o madera parten de 2.500€ para un proyecto estándar con instalación incluida. El retroiluminado tipo halo o las letras de gran formato pueden superar ese precio según el proyecto.' },
  { q: '¿Cuánto tiempo tardáis en fabricar e instalar?',    a: 'Los vinilos de escaparate los entregamos en 48–72h. Rótulos luminosos y letras corpóreas entre 5 y 10 días hábiles. El neón LED a medida puede tardar hasta 15 días. Instalamos en el horario que mejor te venga.' },
  { q: '¿Hacéis visita técnica previa y es gratuita?',      a: 'Sí. La visita técnica en Barcelona y área metropolitana es completamente gratuita y sin compromiso. También podemos hacer presupuesto orientativo con fotos y medidas que nos mandes por WhatsApp.' },
  { q: '¿Trabajáis fuera de Barcelona?',                    a: 'Nuestra zona habitual es Barcelona ciudad y el área metropolitana. Para proyectos en el resto de Cataluña o España, consúltanos — los hacemos según presupuesto de desplazamiento.' },
]

export default function Rotulos() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rotulosSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '70svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — TALLER PROPIO · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>RÓTULOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>BARCELONA</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>FABRICACIÓN</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Neón LED · Letras Corpóreas · Vinilos · Señalética · Fabricación propia
            </p>
            <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto" location="hero-rotulos"
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(3rem,5vw,4rem) 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {[
              { num: '24H', label: 'PRESUPUESTO' },
              { num: '0€',  label: 'VISITA TÉCNICA' },
              { num: 'BCN', label: 'TALLER PROPIO' },
              { num: '2Y',  label: 'GARANTÍA LED' },
            ].map((s, i) => (
              <div key={s.label} style={{ padding: 'clamp(1.5rem,3vw,2rem)', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <p className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)', color: 'var(--fg)', marginBottom: '0.25rem' }}>{s.num}</p>
                <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIPOS — lista tipográfica ─────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — FABRICACIÓN PROPIA · BARCELONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3.5rem, 9vw, 10rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              6 TIPOS<br /><em>DE RÓTULO</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {TIPOS.map((r, i) => (
              <ScrollReveal key={r.href} delay={i * 50}>
                <Link href={r.href} className="service-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.75rem 0', borderBottom: '1px solid var(--border)',
                  textDecoration: 'none', gap: '2rem',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(2rem, 5.5vw, 6.5rem)', color: 'var(--fg)', margin: 0, lineHeight: 1 }}>{r.title}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{r.sub}</p>
                  </div>
                  <svg className="svc-arrow" style={{ opacity: 0.2, flexShrink: 0 }} width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA STRIP ────────────────────────────────────── */}
      <section style={{ overflow: 'hidden', display: 'flex', height: 200, borderTop: '1px solid var(--border)' }}>
        {['/services/gal-1.avif', '/services/gal-3.avif', '/services/gal-5.avif', '/services/gal-2.avif', '/services/gal-6.avif', '/services/gal-4.avif'].map((src, i) => (
          <div key={i} style={{ flex: 1, position: 'relative', overflow: 'hidden', minWidth: 0 }}>
            <img src={src} alt="" aria-hidden="true" loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        ))}
      </section>

      {/* ── TRABAJOS — lista tipográfica ─────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — INSTALACIONES REALES · BARCELONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              TRABAJOS<br /><em>REALIZADOS</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {TRABAJOS.map((t, i) => (
              <ScrollReveal key={t.nombre} delay={i * 50}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '180px 1fr 40%', gap: '2rem',
                  padding: '1.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'center',
                }}>
                  <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                    <img src={t.img} alt={t.nombre} loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>{t.tipo} · {t.barrio}</p>
                    <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{t.nombre}</h3>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ paddingTop: '2rem' }}>
              <TrackedLink href="/contact?servicio=rotulos" label="Tu local aquí" location="trabajos-rotulos"
                className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                TU NEGOCIO, EL SIGUIENTE →
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROCESO ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — DEL BRIEFING A LA INSTALACIÓN</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              EL PROCESO<br /><em>RUD</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {[
              { n: '01', title: 'MEDICIÓN Y BRIEFING',    desc: 'Mándanos fotos del espacio por WhatsApp. Visita técnica gratuita para proyectos en Barcelona y área metropolitana.' },
              { n: '02', title: 'DISEÑO Y PROPUESTA',     desc: 'Propuesta visual y presupuesto detallado en menos de 24h. Sin compromiso.' },
              { n: '03', title: 'FABRICACIÓN EN TALLER',  desc: 'Todo fabricado en nuestro taller de Cerdanyola del Vallès. Materiales premium, control de calidad total.' },
              { n: '04', title: 'INSTALACIÓN PROFESIONAL',desc: 'Equipo propio. Sin afectar tu horario comercial. Permisos y licencias incluidos.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr 40%', gap: '3rem',
                  padding: '2rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.n}</p>
                  <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{s.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              TODO LO<br /><em>QUE NECESITAS</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details style={{ borderBottom: '1px solid var(--border)' }}>
                  <summary style={{ padding: '1.5rem 0', fontSize: '0.9375rem', fontWeight: 500, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, color: 'var(--fg)', userSelect: 'none' }}>
                    <span>{item.q}</span>
                    <span className="faq-plus" style={{ flexShrink: 0, width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'var(--muted)', transition: 'transform 0.2s' }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, paddingBottom: '1.5rem', maxWidth: '65ch' }}>{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem', lineHeight: 1.7 }}>
              ¿Otra pregunta?{' '}
              <a href="https://wa.me/34645593227" style={{ color: 'var(--fg)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--fg)' }}>WhatsApp</a>
              {' '}o{' '}
              <a href="mailto:hello@royaluniondesign.com" style={{ color: 'var(--fg)', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid var(--fg)' }}>email</a>
              {' '}— respondemos en menos de 24h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ZONAS ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>DÓNDE TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              BARCELONA<br /><em>Y ÁREA METROPOLITANA</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ZONAS.map((z, i) => (
              <ScrollReveal key={z.href} delay={i * 30}>
                <Link href={z.href} className="service-row" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem 0', borderBottom: '1px solid var(--border)',
                  textDecoration: 'none', gap: '2rem',
                }}>
                  <div>
                    <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', fontFamily: 'var(--font-display, "Bebas Neue", Anton, sans-serif)', textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--fg)', lineHeight: 1 }}>{z.label}</span>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>{z.note}</p>
                  </div>
                  <svg className="svc-arrow" style={{ opacity: 0.2, flexShrink: 0 }} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO TEXT ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(3rem,5vw,4rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
              <div>
                <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>EMPRESA DE RÓTULOS EN BARCELONA</p>
                <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--fg)' }}>
                  FABRICACIÓN<br /><em>SIN INTERMEDIARIOS</em>
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  RUD Studio es una empresa de rótulos en Barcelona con taller propio en Cerdanyola del Vallès. Fabricamos rótulos personalizados para comercios, restaurantes, hoteles y empresas: neón LED, letras corpóreas, rótulos luminosos tipo caja de luz, vinilos de escaparate y señalética corporativa.
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  A diferencia de otras empresas de rótulos en Barcelona, controlamos todo el proceso — desde el diseño hasta la instalación — sin intermediarios. Mayor calidad, en menos tiempo y con presupuesto competitivo. Visita técnica gratuita y presupuesto en 24h.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto en 24h · Visita técnica gratis · Taller propio
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              MANDA LAS<br />MEDIDAS.<br /><em>HOY.</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <a href="https://wa.me/34645593227?text=Hola%2C%20quiero%20presupuesto%20para%20un%20r%C3%B3tulo%20en%20Barcelona"
                className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                +34 645 593 227 (WHATSAPP) →
              </a>
              <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto" location="bottom-rotulos"
                className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Formulario de presupuesto
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        details[open] .faq-plus { transform: rotate(45deg); }
        details summary::-webkit-details-marker { display: none; }
        @media (max-width: 768px) {
          .rotulos-trabajos-grid { grid-template-columns: 80px 1fr !important; }
          .rotulos-seo-grid { grid-template-columns: 1fr !important; }
          .rotulos-stats { grid-template-columns: repeat(2,1fr) !important; }
          .rotulos-proceso { grid-template-columns: 60px 1fr !important; }
        }
      `}</style>
    </main>
  )
}
