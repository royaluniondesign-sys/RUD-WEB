import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Rótulos Luminosos Barcelona · Señalética, Vinilos y Publicidad Exterior | RUD Studio',
  description: 'Fabricación e instalación de rótulos luminosos, neón LED, letras corpóreas, vinilos de escaparate y señalética corporativa en Barcelona. Presupuesto en 24h.',
  keywords: 'rótulos luminosos Barcelona, letrero luminoso tienda Barcelona, neón LED Barcelona, vinilos escaparate Barcelona, letras corpóreas Barcelona, señalética corporativa, publicidad exterior Barcelona, rótulos fachada precio, rotulación comercial Barcelona',
  openGraph: {
    title: 'Rótulos Luminosos & Señalética Barcelona · RUD Studio',
    description: 'Fabricación e instalación de rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Presupuesto en 24h.',
    images: ['/services/rotulos-luminosos.jpg'],
  }
}

const TIPOS = [
  {
    id: 'luminosos',
    num: '01',
    title: 'Rótulos Luminosos',
    subtitle: 'Caja de luz · Bandeja calada · Backlit',
    desc: 'El rótulo luminoso más visible del barrio. Fabricamos cajas de luz con iluminación LED uniforme, bandejas caladas con luz perimetral y sistemas backlit de alta eficiencia. Visibles de día y de noche, consumo mínimo.',
    specs: ['Caja de luz aluminio + vinilo impreso', 'Bandeja calada con letras recortadas', 'Retroiluminado (backlit) con difusor', 'LED de bajo consumo, vida útil +50.000h', 'Apto para exterior IP65', 'Instalación en fachada, interior y toldo'],
    img: '/services/rotulos-luminosos.jpg',
    tag: 'Más solicitado',
    tagColor: '#D97706',
  },
  {
    id: 'neon',
    num: '02',
    title: 'Neón LED & Neón de Vidrio',
    subtitle: 'Cualquier forma · Interior y exterior',
    desc: 'Neón LED flexible en cualquier tipografía, logo o forma personalizada. También fabricamos neón de vidrio artesanal para proyectos premium. Ideales para escaparates, interiores de hostelería, retail y eventos.',
    specs: ['Neón LED flexible personalizado', 'Neón de vidrio artesanal (premium)', 'Cualquier color, tipografía o logotipo', 'Con o sin soporte de metacrilato', 'Apto interior y exterior', 'Con atenuador de intensidad incluido'],
    img: '/services/neon-led.jpg',
    tag: 'Tendencia 2025',
    tagColor: '#7B68EE',
  },
  {
    id: 'letras',
    num: '03',
    title: 'Letras Corpóreas & 3D',
    subtitle: 'Aluminio · Metacrilato · Retroiluminado',
    desc: 'Letras y logotipos en volumen para fachadas, mostradores y señalética de gran impacto. Fabricamos en aluminio cepillado, metacrilato de colores, madera o combinaciones mixtas. Con o sin iluminación interior.',
    specs: ['Letras en aluminio (natural, lacado, cepillado)', 'Metacrilato opaco, transparente o espejado', 'Retroiluminado con halo de luz (halo lighting)', 'Altura desde 5cm hasta varios metros', 'Fijación oculta o con separadores', 'Acabados a medida de tu identidad visual'],
    img: '/services/letras-corporeas.jpg',
    tag: null,
    tagColor: null,
  },
  {
    id: 'vinilos',
    num: '04',
    title: 'Vinilos de Escaparate & Rotulación',
    subtitle: 'Decorativos · Publicitarios · Antireflejos',
    desc: 'Transformamos escaparates y superficies de cristal en herramientas de comunicación. Vinilos impresos de alta resolución, vinilos translúcidos, esmerilados y recortados en plotter para cualquier aplicación comercial.',
    specs: ['Vinilos impresos full-color alta resolución', 'Vinilo esmerilado y microperforado', 'Recortado en plotter: textos, logos, formas', 'Laminado antigraffiti y antiUV', 'Aplicación en escaparates, paredes y vehículos', 'Desmontaje limpio sin residuos'],
    img: '/services/vinilo-escaparate.jpg',
    tag: null,
    tagColor: null,
  },
  {
    id: 'senaletica',
    num: '05',
    title: 'Señalética Corporativa Interior',
    subtitle: 'Directorios · Accesos · Identificación de espacios',
    desc: 'Sistemas de señalética interior coherentes con tu identidad visual. Directorios de planta, placas de despacho, señalización de accesos, salidas de emergencia y orientación en espacios comerciales, hoteleros y corporativos.',
    specs: ['Directorios de planta y edificio', 'Placas de despacho y sala', 'Señalización de accesos y evacuación', 'Totems y displays de pie', 'Materiales: aluminio, metacrilato, PVC foam', 'Sistema modular actualizable'],
    img: '/services/senaletica-interior.jpg',
    tag: null,
    tagColor: null,
  },
  {
    id: 'exterior',
    num: '06',
    title: 'Publicidad Exterior & Lonas',
    subtitle: 'Fachadas · Vallas · Banderolas',
    desc: 'Máxima visibilidad en el espacio urbano. Lonas de gran formato para fachadas de obra y edificios, banderolas doble cara, vallas publicitarias y wrapping de vehículos. Impresión UV de alta durabilidad.',
    specs: ['Lonas de gran formato para fachadas', 'Banderolas doble cara para farolas', 'Vallas publicitarias y tótems', 'Wrapping de vehículos y flotas', 'Impresión UV resistente a intemperie', 'Instalación y retirada incluidas'],
    img: '/services/publicidad-exterior.jpg',
    tag: null,
    tagColor: null,
  },
]

const PROCESS = [
  { num: '01', title: 'Visita o medición remota', desc: 'Nos enviás fotos y medidas del espacio. En proyectos grandes hacemos visita técnica en Barcelona y área metropolitana sin compromiso.' },
  { num: '02', title: 'Propuesta + presupuesto', desc: 'En menos de 24h recibes propuesta de diseño adaptada a tu identidad visual y presupuesto detallado por partidas.' },
  { num: '03', title: 'Fabricación en taller propio', desc: 'Todo se fabrica en nuestro taller en Barcelona. Materiales premium, control de calidad en cada pieza antes de salir.' },
  { num: '04', title: 'Instalación profesional', desc: 'Equipo de instalación propio. Trabajamos fuera de horario comercial si el local sigue abierto. Gestión de permisos incluida.' },
]

export default function Rotulos() {
  return (
    <main style={{ background: '#F7F5F1' }}>
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3rem,7vw,5rem)', paddingBottom: 'clamp(2rem,5vw,4rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#D97706', marginBottom: 12 }}>
              Rótulos & Señalética · Barcelona
            </p>
            <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: '1rem', maxWidth: '22ch' }}>
              Rótulos luminosos, señalética y publicidad exterior en Barcelona.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: '#A8A0A0' }}>Tu marca en la calle.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.875rem,1.5vw,1rem)', color: '#6B7280', maxWidth: '50ch', lineHeight: 1.7, marginBottom: '2rem' }}>
              Fabricación e instalación propia en Barcelona. Rótulos luminosos, neón LED, letras corpóreas, vinilos de escaparate, señalética corporativa y publicidad exterior. Presupuesto en 24h.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/contact?servicio=rotulos" className="btn-primary">
                Pedir presupuesto gratis →
              </Link>
              <a href="#tipos" className="btn-secondary">Ver tipos de rótulo</a>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={150}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '1px', background: '#E2DDD7', borderRadius: 12, overflow: 'hidden', marginTop: '3rem' }}>
              {[
                { num: '24h', label: 'Presupuesto' },
                { num: '100%', label: 'Fabricación propia' },
                { num: 'BCN', label: 'Instalación local' },
                { num: '+500', label: 'Proyectos instalados' },
              ].map(s => (
                <div key={s.num} style={{ background: 'white', padding: '1.5rem', textAlign: 'center' }}>
                  <p style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', marginTop: 6 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ height: 'clamp(220px,35vw,480px)', overflow: 'hidden', position: 'relative' }}>
        <img src="/services/rotulos-luminosos.jpg" alt="Rótulos luminosos fabricados e instalados en Barcelona por RUD Studio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(247,245,241,1))' }} />
      </div>

      {/* Tipos */}
      <section id="tipos" className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 12 }}>Qué fabricamos</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: '3rem' }}>
              6 tipos de rótulo y señalética
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {TIPOS.map((tipo, i) => (
              <ScrollReveal key={tipo.id} delay={i * 50}>
                <div id={tipo.id} style={{ background: 'white', borderRadius: 16, border: '1px solid #E2DDD7', overflow: 'hidden' }} className="card-lift">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}
                    className="md:grid-cols-[1fr_380px]">

                    {/* Info */}
                    <div style={{ padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#C4BFB8' }}>{tipo.num}</span>
                        {tipo.tag && (
                          <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', color: tipo.tagColor!, padding: '3px 10px', borderRadius: 9999, border: `1px solid ${tipo.tagColor}33`, background: `${tipo.tagColor}11` }}>
                            {tipo.tag}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 4 }}>{tipo.title}</h3>
                        <p style={{ fontSize: 12, color: '#9CA3AF', fontStyle: 'italic' }}>{tipo.subtitle}</p>
                      </div>
                      <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>{tipo.desc}</p>
                      <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 8 }}>
                        {tipo.specs.map((spec, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13 }}>
                            <span style={{ flexShrink: 0, width: 5, height: 5, borderRadius: '50%', background: '#D4D0CA', marginTop: 6 }} />
                            <span style={{ color: '#6B7280', lineHeight: 1.5 }}>{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Link href={`/contact?servicio=${tipo.id}`}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '.65rem 1.25rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                          Presupuesto {tipo.title} →
                        </Link>
                      </div>
                    </div>

                    {/* Imagen */}
                    <div style={{ height: 'clamp(200px,25vw,320px)', overflow: 'hidden', position: 'relative' }}
                      className="md:h-auto">
                      <img src={tipo.img} alt={`${tipo.title} en Barcelona — RUD Studio`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding" style={{ background: '#0A0908' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#333', marginBottom: 12 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 700, color: 'white', letterSpacing: '-.03em', marginBottom: '3rem' }}>
              Del presupuesto a la instalación
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {PROCESS.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 60}>
                <div style={{ padding: '2rem', background: '#0A0908' }}>
                  <p style={{ fontSize: 10, fontFamily: 'monospace', color: '#333', marginBottom: '1rem' }}>{p.num}</p>
                  <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: '#F7F5F1', padding: 'clamp(3rem,8vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ background: 'white', borderRadius: 20, border: '1px solid #E2DDD7', padding: 'clamp(2rem,5vw,3.5rem)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div style={{ maxWidth: '480px' }}>
                <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#D97706', marginBottom: 10 }}>Presupuesto gratuito</p>
                <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 700, letterSpacing: '-.03em', marginBottom: 10 }}>
                  ¿Cuánto cuesta un rótulo en Barcelona?
                </h2>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
                  Depende del tipo, medidas y materiales. Envíanos fotos del espacio y las medidas y te respondemos con presupuesto detallado en menos de 24 horas. Sin compromiso.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: '200px' }}>
                <Link href="/contact?servicio=rotulos" className="btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Pedir presupuesto →
                </Link>
                <a href="mailto:hello@royaluniondesign.com"
                  style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#6B7280', textDecoration: 'none' }}>
                  hello@royaluniondesign.com
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
