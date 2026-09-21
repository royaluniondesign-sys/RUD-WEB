import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Agencia de Branding en Barcelona · Identidad Visual y Diseño de Marca | RUD Studio',
  description: 'Agencia de branding en Barcelona para pymes y negocios locales. Identidad visual completa, diseño de logo y manual de marca. Presupuesto gratuito.',
  keywords: 'agencia branding Barcelona, identidad visual Barcelona, diseño logo Barcelona, manual de marca Barcelona, branding pymes Barcelona, agencia diseño marca Barcelona, identidad corporativa Barcelona, branding negocios Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/branding-barcelona' },
  openGraph: {
    title: 'Agencia de Branding en Barcelona | RUD Studio',
    description: 'Identidad visual completa para negocios en Barcelona. Logo, sistema de marca y manual. Presupuesto gratuito.',
    url: 'https://www.royaluniondesign.com/branding-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/branding-barcelona#service',
  name: 'Agencia de Branding Barcelona',
  description: 'Diseño de identidad visual completa para pymes y negocios en Barcelona: logo, paleta de color, tipografía, sistema de marca y manual de marca.',
  url: 'https://www.royaluniondesign.com/branding-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  serviceType: 'Branding e Identidad Visual',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '1200',
    highPrice: '6000',
    description: 'Branding desde 1.200€ (logo + básicos) hasta 6.000€ (identidad completa + manual de marca extenso).',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Branding Barcelona',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño de Logotipo Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona/diseno-logo-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Identidad Visual Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona/identidad-visual-barcelona' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Manual de Marca Barcelona', url: 'https://www.royaluniondesign.com/branding-barcelona/manual-de-marca-barcelona' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el branding de una empresa en Barcelona?',
      acceptedAnswer: { '@type': 'Answer', text: 'El branding básico (logotipo + colores + tipografía) parte de 1.200€. Una identidad visual completa con manual de marca cuesta entre 2.500€ y 6.000€ según la complejidad. En RUD Studio trabajamos principalmente con pymes y negocios locales en Barcelona con presupuestos realistas y sin agencias intermediarias.' },
    },
    {
      '@type': 'Question',
      name: '¿Qué incluye un proyecto de branding completo?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un proyecto de branding completo incluye: auditoría de marca, diseño de logotipo en todas sus variantes, paleta de color, sistema tipográfico, patrones y elementos de marca, aplicaciones (tarjetas, papelería, plantillas digitales) y manual de marca en PDF. Opcionalmente incluimos diseño de rótulo o señalética para el local físico.' },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo lleva un proyecto de branding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Un proyecto de branding básico (logo + sistema) lleva entre 3 y 5 semanas. Una identidad visual completa con manual de marca, entre 6 y 10 semanas. Trabajamos con rondas de revisión claras para que el proceso sea ágil y el resultado refleje exactamente tu negocio.' },
    },
    {
      '@type': 'Question',
      name: '¿Trabajáis solo con empresas grandes o también con autónomos y pymes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Trabajamos principalmente con pymes, autónomos, hostelería, retail y negocios locales en Barcelona y área metropolitana. Son exactamente el tipo de cliente para el que tiene más impacto una identidad visual bien hecha: diferenciarse de la competencia sin presupuestos de gran corporación.' },
    },
    {
      '@type': 'Question',
      name: '¿Podéis hacer también el rótulo del local una vez tengamos el branding?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sí, y es una de nuestras ventajas como estudio. Una vez tienes la identidad visual, fabricamos e instalamos el rótulo del local — neón LED, letras corpóreas, vinilo escaparate — todo coherente con la marca. No tienes que coordinar dos proveedores distintos.' },
    },
  ],
}

const SERVICIOS = [
  {
    num: '01',
    slug: '/branding-barcelona/diseno-logo-barcelona',
    titulo: 'Diseño de Logotipo',
    desc: 'Creación del símbolo visual que identifica tu negocio. Todas las variantes: principal, reducida, negativo, monocromo. Archivos vectoriales listos para cualquier uso.',
    desde: 'desde 1.200€',
  },
  {
    num: '02',
    slug: '/branding-barcelona/identidad-visual-barcelona',
    titulo: 'Identidad Visual Completa',
    desc: 'Sistema de marca completo: logo, paleta de color, tipografías, patrones, iconografía y todas las piezas de aplicación. La base para comunicar con coherencia en todos los canales.',
    desde: 'desde 2.500€',
  },
  {
    num: '03',
    slug: '/branding-barcelona/manual-de-marca-barcelona',
    titulo: 'Manual de Marca',
    desc: 'Documento de referencia con todas las reglas de uso de tu identidad visual. Indispensable si tienes equipo, trabajas con proveedores o quieres escalar la marca.',
    desde: 'desde 800€ (add-on)',
  },
  {
    num: '04',
    slug: '/rotulos',
    titulo: 'Rótulo coherente con tu marca',
    desc: 'Lo que nos diferencia: fabricamos e instalamos el rótulo de tu local usando el branding que hemos creado juntos. Neón LED, letras corpóreas o vinilo. La marca en la calle.',
    desde: 'según tipo de rótulo',
  },
]

const CASOS = [
  {
    nombre: 'IDNT®',
    sector: 'Moda orgánica · E-commerce Shopify',
    desc: 'Identidad visual completa para marca de moda orgánica en Barcelona. Logo, sistema de color, tipografía editorial y tienda online Shopify.',
    slug: '/work/idnt',
  },
  {
    nombre: 'Oxyzen Club',
    sector: 'Club privado premium · Eixample',
    desc: 'Branding gold-dark para club privado premium en el Eixample de Barcelona. Identidad, web WordPress y sistema de comunicación visual.',
    slug: '/work/oxyzen',
  },
  {
    nombre: 'Kopess 23',
    sector: 'Eventos & catering · Barcelona',
    desc: 'Marca e identidad visual para empresa de eventos y catering. Web WordPress + SEO y toda la comunicación gráfica de la empresa.',
    slug: '/work/kopess',
  },
]

export default function BrandingBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BARCELONA · BRANDING PARA PYMES Y NEGOCIOS LOCALES
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>AGENCIA DE</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>BRANDING</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>IDENTIDAD VISUAL · LOGO · MANUAL DE MARCA · PRESUPUESTO GRATUITO</p>
            <TrackedLink href="/contact?servicio=branding" label="Presupuesto branding" location="hero-branding" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'start' }}>
            <ScrollReveal>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--fg)', lineHeight: 1 }}>
                TU MARCA,<br /><em>RECONOCIBLE</em><br />DESDE EL PRIMER<br />VISTAZO
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.75 }}>
                  En RUD Studio somos un estudio creativo en Barcelona especializado en branding para pymes, autónomos y negocios locales. Diseñamos identidades visuales que funcionan: en tu escaparate, en tus redes, en tu packaging y en tu web.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  Trabajamos directamente contigo — sin cuentas, sin capas de gestión — para construir una marca que refleje exactamente quién eres y por qué te tienen que elegir a ti y no a tu competencia.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  Y si tu negocio también tiene local físico, fabricamos e instalamos el rótulo con la identidad que hemos creado juntos. Un proveedor, una coherencia total.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — SERVICIOS DE BRANDING</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ <br /><em>INCLUYE</em>
            </h2>
          </ScrollReveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 40}>
                <Link href={s.slug} style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.num}</p>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.4rem' }}>{s.titulo}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '55ch' }}>{s.desc}</p>
                  </div>
                  <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{s.desde}</p>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — CÓMO TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              EL PROCESO<br /><em>DE MARCA</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: 'Briefing y análisis', d: 'Empezamos con una sesión de trabajo donde entendemos tu negocio, tu competencia y tu cliente ideal. Sin formularios genéricos.' },
              { n: '02', t: 'Concepto visual', d: 'Desarrollamos 2–3 direcciones visuales distintas. Tú eliges la que más te representa y la refinamos juntos hasta que sea exactamente lo que buscas.' },
              { n: '03', t: 'Sistema completo', d: 'A partir del logotipo aprobado construimos el sistema: paleta de color, tipografías, patrones, iconografía y todas las piezas de aplicación.' },
              { n: '04', t: 'Entrega y manual', d: 'Recibes todos los archivos en todos los formatos (SVG, PNG, PDF, AI) y el manual de marca en PDF. Listos para usar desde el primer día.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.n}</p>
                  <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)' }}>{s.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — PORTFOLIO</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              MARCAS QUE<br /><em>HEMOS CONSTRUIDO</em>
            </h2>
          </ScrollReveal>
          <div>
            {CASOS.map((c, i) => (
              <ScrollReveal key={c.nombre} delay={i * 40}>
                <Link href={c.slug} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit' }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.25rem' }}>{c.nombre}</p>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{c.sector}</p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{c.desc}</p>
                  <span className="mono-label" style={{ color: 'var(--muted)' }}>→</span>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
          <ScrollReveal>
            <div style={{ paddingTop: '2rem' }}>
              <Link href="/work" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)', paddingBottom: 2 }}>
                VER TODO EL PORTFOLIO →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>04 — PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS<br /><em>FRECUENTES</em>
            </h2>
          </ScrollReveal>
          <div>
            {faqSchema.mainEntity.map((item, i) => (
              <ScrollReveal key={i} delay={i * 30}>
                <details style={{ borderTop: '1px solid var(--border)' }}>
                  <summary style={{ padding: '1.25rem 0', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, userSelect: 'none', color: 'var(--fg)' }}>
                    <span>{item.name}</span>
                    <span style={{ flexShrink: 0, width: 22, height: 22, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, color: 'var(--muted)' }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, paddingBottom: '1.25rem', maxWidth: '65ch' }}>{item.acceptedAnswer.text}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMBIÉN HACEMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              MÁS SERVICIOS<br /><em>DE DISEÑO</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/branding-barcelona/identidad-visual-barcelona', label: 'Identidad Visual Barcelona' },
              { href: '/branding-barcelona/diseno-logo-barcelona', label: 'Diseño de Logotipo Barcelona' },
              { href: '/branding-barcelona/manual-de-marca-barcelona', label: 'Manual de Marca Barcelona' },
              { href: '/rotulos', label: 'Rótulos para tu local' },
              { href: '/services', label: 'Todos los servicios' },
            ].map((item, i) => (
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

      {/* CTA */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto gratuito · Respuesta rápida
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              HABLEMOS<br /><em>DE TU MARCA</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=branding" label="Presupuesto branding bottom" location="bottom-branding" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                SOLICITAR PRESUPUESTO →
              </TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                TELEGRAM · RESPUESTA INMEDIATA
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
