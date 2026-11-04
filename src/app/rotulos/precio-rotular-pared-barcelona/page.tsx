import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

const URL = 'https://www.royaluniondesign.com/rotulos/precio-rotular-pared-barcelona'

export const metadata = {
  title: 'Cuánto Cuesta Rotular una Pared en Barcelona · Precios Reales | RUD Studio',
  description: 'Rotular una pared en Barcelona: vinilo desde 150€, neón LED de pared entre 1.400€ y 2.200€, letras corpóreas desde 2.500€. Qué incluye cada precio y qué lo cambia.',
  keywords: 'cuánto cuesta rotular una pared, rotular pared Barcelona, precio rótulo pared Barcelona, rótulo pared interior precio, letras pared negocio Barcelona',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Cuánto Cuesta Rotular una Pared en Barcelona | RUD Studio',
    description: 'Precios reales de vinilo, neón LED y letras corpóreas para paredes de negocio en Barcelona.',
    url: URL,
  },
}

const OPCIONES = [
  { t: 'Vinilo de corte', p: 'desde 150€', d: 'Logotipo y texto en vinilo adhesivo. Es la opción más económica y se instala en 48-72 horas.' },
  { t: 'Vinilo impreso', p: 'desde 300€', d: 'Para imágenes, degradados o varios colores. Mismo plazo de instalación que el vinilo de corte.' },
  { t: 'Neón LED de pared', p: '1.400€ - 2.200€', d: 'Tamaño mediano (80-150 cm). Cualquier forma o tipografía, con garantía de 2 años.' },
  { t: 'Letras corpóreas sin luz', p: 'desde 2.500€', d: 'Letras en relieve de aluminio o metacrilato, fijadas a la pared.' },
  { t: 'Letras corpóreas con halo', p: 'desde 3.500€', d: 'Mismas letras con LED trasero que dibuja un halo de luz sobre la pared.' },
]

const FACTORES = [
  'Tamaño total y número de letras o elementos.',
  'Material: vinilo, metacrilato, aluminio o madera.',
  'Si lleva iluminación y de qué tipo.',
  'Altura y estado de la pared. Una pared interior es más sencilla que una fachada.',
  'En fachadas de ciertos barrios (Eixample, Gràcia, Born, Gòtic) el Ayuntamiento puede exigir licencia.',
]

const FAQS = [
  { q: '¿Cuánto cuesta rotular una pared interior en Barcelona?', a: 'Depende del material. Un vinilo de corte con logotipo y texto parte de 150€, un vinilo impreso de 300€, un neón LED de pared mediano cuesta entre 1.400€ y 2.200€ y unas letras corpóreas parten de 2.500€.' },
  { q: '¿El precio incluye la instalación?', a: 'Los precios de neón LED y letras corpóreas incluyen diseño, fabricación e instalación. El presupuesto final se cierra tras ver fotos y medidas de tu pared.' },
  { q: '¿Cuánto tarda en estar instalado?', a: 'El vinilo se instala en 48-72 horas. Las letras corpóreas tardan entre 5 y 10 días hábiles y el neón LED hasta 15 días por su fabricación a medida.' },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${URL}#service`,
    name: 'Rotulación de paredes en Barcelona',
    url: URL,
    provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
    areaServed: { '@type': 'City', name: 'Barcelona' },
    isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
    offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '150', highPrice: '3500' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
]

const ENLACES = [
  { href: '/rotulos/neon-led-barcelona', label: 'Neón LED Barcelona' },
  { href: '/rotulos/letras-corporeas-barcelona', label: 'Letras Corpóreas Barcelona' },
  { href: '/rotulos/vinilos-escaparate-barcelona', label: 'Vinilos Barcelona' },
  { href: '/pricing', label: 'Todos los precios' },
]

export default function PrecioRotularParedBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← RÓTULOS BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>CUÁNTO CUESTA</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>ROTULAR UNA PARED</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>EN BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>DESDE 150€ · VINILO, NEÓN LED Y LETRAS CORPÓREAS · TALLER PROPIO</p>
            <TrackedLink href="/contact?servicio=rotulos" label="Presupuesto rotular pared" location="hero-precio-pared" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PRECIOS ORIENTATIVOS</p></ScrollReveal>
          <div>
            {OPCIONES.map((o, i) => (
              <ScrollReveal key={o.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{o.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{o.d}</p>
                  <p style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{o.p}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <ScrollReveal><p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '1.5rem' }}>Precios orientativos. IVA no incluido. El presupuesto exacto se cierra con fotos y medidas de tu pared.</p></ScrollReveal>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>QUÉ CAMBIA EL PRECIO</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {FACTORES.map(f => (
                <li key={f} style={{ fontSize: '0.95rem', color: 'var(--fg)', lineHeight: 1.6 }}>— {f}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PREGUNTAS FRECUENTES</p></ScrollReveal>
          <div>
            {FAQS.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 40}>
                <div style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border)' }}>
                  <h2 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>{f.q}</h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal><p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>VER TAMBIÉN</p></ScrollReveal>
          <div>
            {ENLACES.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 30}>
                <Link href={item.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', gap: '2rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.label}</span>
                  <span className="mono-label" style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>PIDE TU<br /><em>PRESUPUESTO</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=rotulos" label="Presupuesto rotular pared bottom" location="bottom-precio-pared" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://wa.me/34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>WHATSAPP · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
