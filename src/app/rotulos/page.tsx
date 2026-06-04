import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos | RUD Studio',
  description: 'Empresa de rótulos en Barcelona con taller propio. Neón LED, letras corpóreas, rótulos luminosos y vinilos escaparate. Fabricación e instalación. Presupuesto gratis en 24h.',
  keywords: 'rótulos barcelona, rótulos personalizados barcelona, neón LED barcelona, letras corpóreas barcelona, vinilos escaparate barcelona, rótulos luminosos barcelona, señalética corporativa barcelona, empresa rótulos barcelona, fabricación rótulos barcelona',
  alternates: { canonical: 'https://royaluniondesign.com/rotulos' },
  openGraph: {
    title: 'Rótulos Barcelona · Neón LED, Letras Corpóreas, Vinilos | RUD Studio',
    description: 'Empresa de rótulos en Barcelona con taller propio. Neón LED, letras corpóreas, rótulos luminosos y vinilos. Presupuesto gratis en 24h.',
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
  'provider': { '@id': 'https://royaluniondesign.com/#organization' },
  'areaServed': { '@type': 'City', 'name': 'Barcelona' },
  'serviceType': 'Fabricación e instalación de rótulos',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Tipos de rótulo',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Neón LED Barcelona', 'url': 'https://royaluniondesign.com/rotulos/neon-led-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cajas de Luz y Rótulos Luminosos Barcelona', 'url': 'https://royaluniondesign.com/rotulos/cajas-de-luz-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Letras Corpóreas Barcelona', 'url': 'https://royaluniondesign.com/rotulos/letras-corporeas-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Vinilos Escaparate Barcelona', 'url': 'https://royaluniondesign.com/rotulos/vinilos-escaparate-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Señalética Interior Barcelona', 'url': 'https://royaluniondesign.com/rotulos/senaletica-interior-barcelona' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Publicidad Exterior Barcelona', 'url': 'https://royaluniondesign.com/rotulos/publicidad-exterior-barcelona' } },
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

const TRABAJOS = [
  {
    img: '/services/gal-1.avif',
    tipo: 'Neón LED · Fachada',
    nombre: 'Trattoria di Marco',
    barrio: 'Gràcia, Barcelona',
    desc: 'Neón LED rojo «MARCO» en fachada + letras corpóreas aluminio cepillado. El restaurante duplicó su visibilidad nocturna en Carrer de Verdi.',
    tag: 'Hostelería',
    href: '/contact?servicio=neon',
  },
  {
    img: '/services/gal-3.avif',
    tipo: 'Neón LED · Interior',
    nombre: 'Coffee Bloom',
    barrio: 'Poblenou, Barcelona',
    desc: 'Neón «BLOOM» en warm white sobre pared de ladrillo visto. Convertido en punto de referencia fotográfico para clientes del barrio 22@.',
    tag: 'Cafetería',
    href: '/contact?servicio=neon',
  },
  {
    img: '/services/gal-5.avif',
    tipo: 'Rótulo Luminoso · Exterior',
    nombre: 'Bar Atlántico',
    barrio: 'Barceloneta, Barcelona',
    desc: 'Caja de luz de gran formato con iluminación LED perimetral. Visible desde 200m en el paseo marítimo, incluso con luz de día.',
    tag: 'Bar',
    href: '/contact?servicio=luminosos',
  },
  {
    img: '/services/gal-2.avif',
    tipo: 'Letras Corpóreas · Fachada',
    nombre: 'Moda Plural',
    barrio: 'Eixample, Barcelona',
    desc: 'Letras corpóreas en aluminio negro mate + retroiluminación halo blanca. Identidad visual aplicada a fachada con coherencia total.',
    tag: 'Moda',
    href: '/contact?servicio=letras',
  },
  {
    img: '/services/gal-6.avif',
    tipo: 'Señalética · Hotelera',
    nombre: 'Hotel Trafalgar BCN',
    barrio: 'Sarrià-Sant Gervasi, Barcelona',
    desc: 'Proyecto completo de señalética para 64 habitaciones: directorios de planta, identificación de suites y señalética de emergencia en aluminio anodizado.',
    tag: 'Hotel',
    href: '/contact?servicio=senaletica',
  },
  {
    img: '/services/gal-4.avif',
    tipo: 'Vinilos · Escaparate',
    nombre: 'Clínica Llorens',
    barrio: 'Sant Gervasi, Barcelona',
    desc: 'Vinilos esmerilados con logotipo recortado + franja de privacidad. Estética clínica que transmite profesionalidad desde la calle.',
    tag: 'Salud',
    href: '/contact?servicio=vinilos',
  },
]

const TIPOS = [
  {
    href: '/rotulos/neon-led-barcelona',
    img: '/services/neon-interior.avif',
    alt: 'Rótulo neón LED personalizado Barcelona',
    tags: ['Neón LED', 'Cualquier forma', 'Interior y exterior'],
    title: 'Neón LED',
    desc: 'Cualquier tipografía, logo o forma. Neón flexible LED para escaparates, hostelería y retail. Bajo consumo, alta durabilidad.',
    featured: true,
  },
  {
    href: '/rotulos/cajas-de-luz-barcelona',
    img: '/services/rotulos-luminosos.avif',
    alt: 'Rótulos luminosos caja de luz Barcelona',
    tags: ['Más solicitado'],
    title: 'Rótulos Luminosos',
    desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna, consumo mínimo.',
    featured: false,
  },
  {
    href: '/rotulos/letras-corporeas-barcelona',
    img: '/services/letras-corporeas.avif',
    alt: 'Letras corpóreas Barcelona aluminio metacrilato',
    tags: [],
    title: 'Letras Corpóreas',
    desc: 'Aluminio, metacrilato, madera, acero. Con o sin retroiluminación halo.',
    featured: false,
  },
  {
    href: '/rotulos/vinilos-escaparate-barcelona',
    img: '/services/vinilo-escaparate.avif',
    alt: 'Vinilos escaparate Barcelona',
    tags: [],
    title: 'Vinilos Escaparate',
    desc: 'Impresos, esmerilados, recortados. Cambio estacional sin obra.',
    featured: false,
  },
  {
    href: '/rotulos/senaletica-interior-barcelona',
    img: '/services/senaletica-interior.avif',
    alt: 'Señalética interior corporativa Barcelona',
    tags: [],
    title: 'Señalética Interior',
    desc: 'Directorios, wayfinding, accesos y evacuación.',
    featured: false,
  },
  {
    href: '/rotulos/publicidad-exterior-barcelona',
    img: '/services/publicidad-exterior.avif',
    alt: 'Publicidad exterior Barcelona lonas banderolas',
    tags: [],
    title: 'Publicidad Exterior',
    desc: 'Lonas, banderolas, vallas, fachadas, wrapping.',
    featured: false,
  },
]

const FAQ_ITEMS = [
  { q: '¿Cuánto cuesta un rótulo neón LED en Barcelona?', a: 'El neón LED personalizado parte de 1.800€ para una instalación comercial completa — diseño, fabricación e instalación incluidos. El precio varía según el tamaño, la complejidad de la forma y el tipo de soporte. Pídenos medidas y te enviamos presupuesto en 24h.' },
  { q: '¿Cuánto cuesta un rótulo luminoso (caja de luz)?', a: 'Los rótulos luminosos tipo caja de luz parten de 3.200€ para una instalación comercial estándar con iluminación LED interior. El precio depende de las dimensiones, el acabado y la complejidad de la instalación.' },
  { q: '¿Cuánto cuestan las letras corpóreas?', a: 'Las letras corpóreas en aluminio, metacrilato o madera parten de 2.500€ para un proyecto estándar con instalación incluida. El retroiluminado tipo halo o las letras de gran formato pueden superar ese precio según el proyecto.' },
  { q: '¿Cuánto tiempo tardáis en fabricar e instalar?', a: 'Los vinilos de escaparate los entregamos en 48–72h. Rótulos luminosos y letras corpóreas entre 5 y 10 días hábiles. El neón LED a medida puede tardar hasta 15 días. Instalamos en el horario que mejor te venga.' },
  { q: '¿Hacéis visita técnica previa y es gratuita?', a: 'Sí. La visita técnica en Barcelona y área metropolitana es completamente gratuita y sin compromiso. También podemos hacer presupuesto orientativo con fotos y medidas que nos mandes por Telegram.' },
  { q: '¿Trabajáis fuera de Barcelona?', a: 'Nuestra zona habitual es Barcelona ciudad y el área metropolitana. Para proyectos en el resto de Cataluña o España, consúltanos — los hacemos según presupuesto de desplazamiento.' },
]

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.01 9.47c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 14.6l-2.95-.924c-.64-.203-.654-.64.136-.948l11.527-4.447c.533-.194 1-.116.761.967z"/>
  </svg>
)

export default function Rotulos() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rotulosSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 680, overflow: 'hidden' }}>
        <img
          src="/services/hero-rotulos.avif"
          alt="Rótulos personalizados Barcelona — neón LED, letras corpóreas y señalética"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Gradient — lighter overlay so image is visible */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,7,6,0.97) 0%, rgba(8,7,6,0.65) 45%, rgba(8,7,6,0.2) 100%)' }} />

        {/* Pill — below fixed navbar (68px) */}
        <div style={{ position: 'absolute', top: 84, left: 0, right: 0, zIndex: 10 }}>
          <div className="container-custom">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 9999, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.85)' }}>Taller propio · Barcelona · Disponible ahora</span>
            </span>
          </div>
        </div>

        {/* Hero content — pinned to bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5 }}>
          <div className="container-custom" style={{ paddingBottom: 'clamp(2.5rem,6vw,5rem)' }}>
            <h1 style={{
              fontSize: 'clamp(2rem,5vw,4rem)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              maxWidth: '22ch',
              marginBottom: 'clamp(1.5rem,3vw,2.5rem)',
            }}>
              Rótulos que hacen tu local{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.38)' }}>imposible de ignorar.</em>
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
              <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto gratis" location="hero-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.75rem', background: 'white', color: '#0A0908', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none', flexShrink: 0 }}>
                Pedir presupuesto gratis →
              </TrackedLink>
              <a href="https://t.me/+34645593227" target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.9rem 1.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none', backdropFilter: 'blur(8px)' }}>
                <TelegramIcon />
                Telegram · respuesta en minutos
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(1.5rem,4vw,3.5rem)', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem' }}>
              {[['24h', 'Presupuesto'], ['0€', 'Visita técnica'], ['BCN', 'Taller propio'], ['2 años', 'Garantía']].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, color: 'white', lineHeight: 1, letterSpacing: '-0.03em' }}>{n}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TICKER STRIP ──────────────────────────────────────────────────── */}
      <div style={{ background: '#0A0908', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', overflow: 'hidden', padding: '14px 0' }}>
        <div style={{ display: 'flex', gap: '3rem', animation: 'ticker 30s linear infinite', whiteSpace: 'nowrap' }}>
          {Array(3).fill(0).map((_, ri) => (
            <span key={ri} style={{ display: 'inline-flex', gap: '3rem', flexShrink: 0 }}>
              {['Neón LED', 'Letras Corpóreas', 'Rótulos Luminosos', 'Vinilos Escaparate', 'Señalética Hotelera', 'Publicidad Exterior', 'Fabricación Propia', 'Instalación Barcelona'].map((t, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.16em', color: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)' }}>
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ─── INTRO SEO ────────────────────────────────────────────────────── */}
      <section style={{ background: '#0A0908', paddingTop: 'clamp(3rem,6vw,5rem)', paddingBottom: 0 }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: '72ch', borderLeft: '2px solid rgba(255,255,255,0.08)', paddingLeft: 'clamp(1.25rem,3vw,2rem)' }}>
              <p style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '1rem' }}>
                RUD Studio es una empresa de rótulos con taller propio en Barcelona. Fabricamos e instalamos rótulos luminosos, neón LED, letras corpóreas y vinilos de escaparate para locales comerciales, hostelería, hoteles y empresas de toda el área metropolitana.
              </p>
              <p style={{ fontSize: 'clamp(0.9375rem,1.5vw,1.0625rem)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Cada rótulo que fabricamos está diseñado para hacer tu local imposible de ignorar desde la calle. Utilizamos materiales de primera calidad y técnicas de fabricación propias para garantizar que el rótulo de tu negocio sea tan sólido y duradero como memorable — día y noche, llueva o haga sol.
              </p>
              <p style={{ fontSize: 'clamp(0.875rem,1.4vw,1rem)', color: 'rgba(255,255,255,0.25)', lineHeight: 1.8 }}>
                Además de rótulos, ofrecemos <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.15)' }}>branding, diseño web y automatización IA</Link> — todo bajo el mismo techo. <Link href="/pricing" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.15)' }}>Consulta nuestros precios orientativos →</Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── TIPOS ─────────────────────────────────────────────────────────── */}
      <section id="tipos" style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,7rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: 'clamp(2rem,5vw,4rem)' }}>
              <div>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 8 }}>Lo que fabricamos</p>
                <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>6 tipos de rótulo</h2>
              </div>
              <a href="#trabajos" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Ver trabajos realizados ↓</a>
            </div>
          </ScrollReveal>

          {/* Neón featured */}
          <ScrollReveal>
            <Link href="/contact?servicio=neon" style={{ display: 'block', textDecoration: 'none', marginBottom: '0.75rem' }}>
              <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 'clamp(300px,40vw,520px)' }} className="card-lift">
                <img src="/services/neon-interior.avif" alt="Rótulo neón LED personalizado Barcelona"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.0) 55%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem,4vw,2.5rem)' }}>
                  <div style={{ display: 'flex', gap: 6, marginBottom: '1rem', flexWrap: 'wrap' }}>
                    {['Neón LED', 'Cualquier forma', 'Interior y exterior'].map(t => (
                      <span key={t} style={{ padding: '4px 12px', borderRadius: 9999, fontSize: 11, fontWeight: 600, background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.5rem,3.5vw,2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em' }}>Neón LED & Neón de Vidrio</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', maxWidth: '48ch', lineHeight: 1.6, marginTop: 6 }}>Cualquier tipografía, logo o forma. Para escaparates, hostelería, retail y eventos en Barcelona.</p>
                    </div>
                    <div style={{ padding: '0.625rem 1.25rem', background: 'rgba(255,255,255,0.1)', borderRadius: 9999, fontSize: 13, fontWeight: 600, color: 'white', border: '1px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
                      Presupuesto neón →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* 2+3 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {TIPOS.slice(1, 3).map(item => (
              <ScrollReveal key={item.title}>
                <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 300 }} className="card-lift">
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)' }} />
                    {item.tags[0] && (
                      <span style={{ position: 'absolute', top: 14, left: 14, padding: '3px 10px', borderRadius: 9999, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>{item.tags[0]}</span>
                    )}
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 4 }}>{item.title}</h3>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '0.75rem' }}>
            {TIPOS.slice(3).map(item => (
              <ScrollReveal key={item.title}>
                <Link href={item.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 240 }} className="card-lift">
                    <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.25rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 3 }}>{item.title}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRABAJOS / PORTFOLIO ──────────────────────────────────────────── */}
      <section id="trabajos" style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,7rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)' }}>
              <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Instalaciones reales · Barcelona</p>
              <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.75rem' }}>
                Trabajos que hablan<br />
                <em style={{ fontWeight: 300, fontStyle: 'italic', color: '#9CA3AF' }}>por sí solos.</em>
              </h2>
              <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '48ch', lineHeight: 1.7 }}>
                Cada rótulo tiene su historia. Estos son algunos de los locales que ya se ven desde la calle.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured first project — full width */}
          <ScrollReveal>
            <Link href={TRABAJOS[0].href} style={{ display: 'block', textDecoration: 'none', marginBottom: '1rem' }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 'clamp(340px,45vw,560px)' }} className="card-lift">
                <img src={TRABAJOS[0].img} alt={`${TRABAJOS[0].nombre} · ${TRABAJOS[0].tipo}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                  <span style={{ padding: '5px 14px', borderRadius: 9999, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{TRABAJOS[0].tag}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.14em', marginBottom: 6 }}>{TRABAJOS[0].tipo} · {TRABAJOS[0].barrio}</p>
                    <h3 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 8 }}>{TRABAJOS[0].nombre}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', maxWidth: '55ch', lineHeight: 1.65 }}>{TRABAJOS[0].desc}</p>
                  </div>
                  <div style={{ padding: '0.75rem 1.5rem', background: 'white', borderRadius: 9999, fontSize: 13, fontWeight: 700, color: '#0A0908', flexShrink: 0, whiteSpace: 'nowrap' }}>
                    Presupuesto similar →
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* 2-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '1rem', marginBottom: '1rem' }}>
            {TRABAJOS.slice(1, 3).map(t => (
              <ScrollReveal key={t.nombre}>
                <Link href={t.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 320 }} className="card-lift">
                    <img src={t.img} alt={`${t.nombre} · ${t.tipo}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', top: 16, left: 16 }}>
                      <span style={{ padding: '3px 10px', borderRadius: 9999, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.14em', background: 'rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.18)' }}>{t.tag}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.5rem' }}>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 4 }}>{t.tipo} · {t.barrio}</p>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 6 }}>{t.nombre}</h3>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{t.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* 3-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '1rem' }}>
            {TRABAJOS.slice(3).map(t => (
              <ScrollReveal key={t.nombre}>
                <Link href={t.href} style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 260 }} className="card-lift">
                    <img src={t.img} alt={`${t.nombre} · ${t.tipo}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 50%)' }} />
                    <div style={{ position: 'absolute', bottom: 0, padding: '1.25rem' }}>
                      <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 3 }}>{t.tipo}</p>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', letterSpacing: '-0.02em', marginBottom: 4 }}>{t.nombre}</h3>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{t.desc}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: '2.5rem' }}>
              <TrackedLink href="/contact?servicio=rotulos" label="Tu local aquí" location="trabajos-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Tu negocio, el siguiente →
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SECTORES ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#0A0908', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: 10 }}>Sectores de aplicación</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Rótulos para cada negocio</h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '48ch', lineHeight: 1.7, marginBottom: 'clamp(2rem,4vw,3rem)' }}>Cada sector tiene sus propios requisitos de visibilidad, normativa y estética.</p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: '1px', background: '#1C1C1C', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { sector: 'Restaurantes & Bares', kw: 'rótulo para restaurante Barcelona', desc: 'Neón LED en barra, menús luminosos, rótulos de fachada.' },
              { sector: 'Hoteles & Hostelería', kw: 'señalética hotelera Barcelona', desc: 'Señalética de habitaciones, directorios de planta, recepción.' },
              { sector: 'Retail & Tiendas', kw: 'rótulos para tiendas Barcelona', desc: 'Vinilos de escaparate, letras corpóreas, rótulos luminosos.' },
              { sector: 'Oficinas & Corporativo', kw: 'señalética corporativa Barcelona', desc: 'Letras en recepción, directorios, placas de despacho.' },
              { sector: 'Peluquerías & Estética', kw: 'rótulo para peluquería Barcelona', desc: 'Neón decorativo, carteles de fachada, vinilos con logotipo.' },
              { sector: 'Clínicas & Salud', kw: 'rótulos clínicas Barcelona', desc: 'Señalética de salas, placas de acceso, wayfinding normativo.' },
              { sector: 'Gimnasios & Fitness', kw: 'rótulos gimnasio Barcelona', desc: 'Letras corpóreas gran formato, murales de vinilo, neón LED.' },
              { sector: 'Eventos & Ferias', kw: 'rótulos para eventos Barcelona', desc: 'Stands, photo walls, señalética temporal y vinilados.' },
            ].map((item, i) => (
              <ScrollReveal key={item.sector} delay={i * 40}>
                <div style={{ background: '#0A0908', padding: '1.75rem 1.5rem' }}>
                  <p style={{ fontSize: 10, color: '#3A3A3A', marginBottom: '0.6rem', fontFamily: 'monospace', letterSpacing: '.04em' }}>{item.kw}</p>
                  <h3 style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{item.sector}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESO ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>Del briefing a la instalación</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '2rem' }}>
            {[
              { n: '01', title: 'Medición y briefing', desc: 'Mándanos fotos del espacio por Telegram. Visita técnica gratuita para proyectos en Barcelona.' },
              { n: '02', title: 'Diseño y propuesta', desc: 'Propuesta visual y presupuesto detallado en menos de 24h. Sin compromiso.' },
              { n: '03', title: 'Fabricación en taller', desc: 'Todo fabricado en nuestro taller de Barcelona. Materiales premium, control de calidad total.' },
              { n: '04', title: 'Instalación profesional', desc: 'Equipo propio. Sin afectar tu horario comercial. Permisos y licencias incluidos.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div style={{ borderTop: '2px solid #E5E0D8', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8', marginBottom: '1rem', letterSpacing: '.1em' }}>{s.n}</p>
                  <h3 style={{ fontWeight: 700, color: '#0A0908', fontSize: '1rem', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO TEXT ─────────────────────────────────────────────────────── */}
      <section style={{ background: 'white', paddingBlock: 'clamp(3rem,5vw,4rem)' }}>
        <div className="container-custom" style={{ maxWidth: 800 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Empresa de rótulos en Barcelona</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: 20 }}>Rótulos personalizados fabricados en Barcelona</h2>
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

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(4rem,8vw,6rem) 0' }}>
        <div className="container-custom" style={{ maxWidth: 820 }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 10 }}>Preguntas frecuentes</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 'clamp(2rem,4vw,3rem)' }}>Todo lo que necesitas saber</h2>
          </ScrollReveal>
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details style={{ borderTop: '1px solid #E5E0D8' }} className="faq-item">
                  <summary style={{ padding: '1.5rem 0', fontSize: 'clamp(0.9rem,1.8vw,1.05rem)', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, userSelect: 'none' }}>
                    <span>{item.q}</span>
                    <span className="faq-icon" style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#E5E0D8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, color: '#9CA3AF', transition: 'transform 0.3s ease, background 0.2s' }}>+</span>
                  </summary>
                  <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.8, paddingBottom: '1.5rem', maxWidth: '65ch' }}>{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid #E5E0D8' }} />
          </div>
          <ScrollReveal>
            <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: '2rem', lineHeight: 1.7 }}>
              ¿Otra pregunta?{' '}
              <a href="https://t.me/+34645593227" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>Telegram</a>
              {' '}o{' '}
              <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', fontWeight: 600, textDecoration: 'underline' }}>email</a>
              {' '}— respondemos en menos de 24h.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── ZONAS ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: 'clamp(3rem,6vw,5rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: '0.75rem' }}>Donde trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Instalamos en toda Barcelona y área metropolitana</h2>
            <p style={{ fontSize: 14, color: '#6B7280', marginBottom: '2rem', maxWidth: '55ch', lineHeight: 1.7 }}>
              Desde nuestro taller en Cerdanyola del Vallès cubrimos todos los barrios de Barcelona en menos de 30 minutos. Visita técnica gratuita en toda la ciudad.
            </p>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '0.75rem' }}>
            {[
              { label: 'Eixample', href: '/rotulos/eixample-barcelona', note: 'Normativa fachadas Ayuntamiento' },
              { label: 'Gràcia', href: '/rotulos/gracia-barcelona', note: 'Barrio de diseño y hostelería' },
              { label: 'Poblenou / 22@', href: '/rotulos/poblenou-barcelona', note: 'Startups, retail y hostelería' },
              { label: 'Sarrià – Sant Gervasi', href: '/rotulos/sarria-barcelona', note: 'Comercio premium y restauración' },
              { label: 'Sants – Montjuïc', href: '/rotulos/sants-barcelona', note: 'Comercio de barrio y locales' },
              { label: 'Cerdanyola del Vallès', href: '/rotulos/cerdanyola-del-valles', note: 'Taller propio · instalación inmediata' },
              { label: 'L\'Hospitalet', href: '/rotulos/hospitalet-de-llobregat', note: 'Gran Via, Fira, zona universitaria' },
              { label: 'Badalona', href: '/rotulos/badalona-barcelona', note: 'Zona marítima, Pep Ventura, Can Ruti' },
              { label: 'El Born', href: '/rotulos/born-barcelona', note: 'Boutiques, restaurantes de autor, galerías' },
              { label: 'Sant Cugat del Vallès', href: '/rotulos/sant-cugat-del-valles', note: 'Tech, comercio histórico, restauración' },
              { label: 'Terrassa', href: '/rotulos/terrassa-barcelona', note: 'Industria, eje comercial, hostelería' },
            ].map((zone) => (
              <ScrollReveal key={zone.href}>
                <Link href={zone.href}
                  style={{ display: 'block', padding: '1rem 1.25rem', background: '#F7F5F1', borderRadius: 12, border: '1px solid #E5E0D8', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  className="card-lift">
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#0A0908', marginBottom: 4 }}>{zone.label}</p>
                  <p style={{ fontSize: 11, color: '#9CA3AF', lineHeight: 1.5 }}>{zone.note}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────────── */}
      <section style={{ background: '#0A0908', padding: 'clamp(5rem,10vw,8rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#6B7280', marginBottom: '1rem' }}>Presupuesto gratuito · Respuesta en 24h</p>
            <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0, maxWidth: '18ch', marginBottom: '1.5rem' }}>
              Manda las medidas.<br />
              <em style={{ fontWeight: 300, fontStyle: 'italic', color: 'rgba(255,255,255,0.3)' }}>Te respondemos hoy.</em>
            </h2>
            <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '42ch', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Fotos del espacio + medidas aproximadas. Eso es todo lo que necesitamos para darte precio.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-start' }}>
              <a href="https://t.me/+34645593227?text=Hola%2C%20quiero%20presupuesto%20para%20un%20r%C3%B3tulo%20en%20Barcelona"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '1rem 2.25rem', background: '#229ED9', color: 'white', borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                <TelegramIcon />
                Escríbenos por Telegram
              </a>
              <TrackedLink href="/contact?servicio=rotulos" label="Pedir presupuesto" location="bottom-rotulos"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '1rem 2rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Formulario de presupuesto
              </TrackedLink>
            </div>
            <p style={{ fontSize: 12, color: '#444', marginTop: '1.5rem' }}>
              O llámanos directo: <a href="tel:+34645593227" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none', fontWeight: 600 }}>+34 645 593 227</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ticker animation + FAQ open/close styles */}
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .faq-item[open] .faq-icon {
          transform: rotate(45deg);
          background: #0A0908;
          color: white;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        @media (max-width: 640px) {
          .contact-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
