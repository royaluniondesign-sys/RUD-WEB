import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Rótulos Sarrià Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
  description: 'Rótulos de alta calidad en Sarrià-Sant Gervasi, Zona Alta de Barcelona: letras corpóreas premium, neón LED, señalética para tiendas de lujo, clínicas privadas y restaurantes de alto standing. Presupuesto en 24h.',
  keywords: 'rótulos Sarrià Barcelona, rótulos Sant Gervasi Barcelona, rótulos Zona Alta Barcelona, letras corpóreas premium Barcelona, señalética clínicas privadas Barcelona, rótulos tiendas lujo Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/rotulos/sarria-barcelona' },
  openGraph: {
    title: 'Rótulos Sarrià Barcelona · Neón LED y Letras Corpóreas | RUD Studio',
    description: 'Rótulos premium en Sarrià-Sant Gervasi: letras corpóreas de lujo, neón LED, señalética para negocios de alto standing. Presupuesto gratis en 24h.',
    url: 'https://www.royaluniondesign.com/rotulos/sarria-barcelona',
    images: [{ url: 'https://www.royaluniondesign.com/services/neon-interior.avif' }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.royaluniondesign.com/#organization',
      name: 'RUD Studio',
      url: 'https://www.royaluniondesign.com',
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
      '@id': 'https://www.royaluniondesign.com/rotulos/sarria-barcelona#service',
      name: 'Rótulos Sarrià Barcelona',
      description: 'Fabricación e instalación de rótulos premium en Sarrià-Sant Gervasi y la Zona Alta de Barcelona. Letras corpóreas, neón LED y señalética exclusiva para negocios de alto standing.',
      url: 'https://www.royaluniondesign.com/rotulos/sarria-barcelona',
      provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
      areaServed: { '@type': 'Place', name: 'Sarrià-Sant Gervasi, Barcelona' },
      serviceType: 'Fabricación e instalación de rótulos',
      isPartOf: { '@type': 'Service', name: 'Rótulos y Señalética Barcelona', url: 'https://www.royaluniondesign.com/rotulos' },
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tarda instalar un rótulo en Sarrià o Sant Gervasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desde nuestro taller en Cerdanyola del Vallès a Sarrià-Sant Gervasi hay entre 20 y 30 minutos según la zona exacta. La instalación de un rótulo premium de fachada tarda entre 3 y 6 horas. Para los negocios de la Zona Alta, ofrecemos instalación en horario de menor afluencia para no interferir con la clientela.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué materiales premium usáis para rótulos en la Zona Alta de Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la Zona Alta trabajamos con materiales de primera categoría: latón pulido o cepillado, acero inoxidable espejo, bronce fundido, letras de resina con acabado lacado al horno y dorado a la hoja. La retroiluminación es con LED de alta eficiencia y tono cálido (2700–3000K) para un acabado exclusivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis rótulos y señalética para clínicas privadas en Barcelona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Sarrià-Sant Gervasi concentra muchas de las clínicas privadas de mayor prestigio de Barcelona. Fabricamos señalética homologada para uso sanitario: rótulos de dirección, señales de emergencia, identificación de consultas y chapas de médicos. Todos los materiales cumplen la normativa de centros sanitarios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis igualar el rótulo a los materiales del local en una boutique de lujo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por supuesto. En proyectos premium siempre coordinamos con el interiorista o el equipo de diseño de la marca. Realizamos muestras de material y acabados antes de la fabricación definitiva. El objetivo es que el rótulo sea una extensión coherente del espacio y la identidad de marca.',
      },
    },
  ],
}

const SECTORES = [
  {
    sector: 'Boutiques de moda & accesorios de lujo',
    desc: 'Las tiendas de la Zona Alta buscan rótulos que transmitan exclusividad. Letras en latón, dorados a la hoja y retroiluminación cálida. Materiales nobles que elevan la percepción de marca.',
  },
  {
    sector: 'Restaurantes de alto standing',
    desc: 'Los restaurantes de Sarrià y Sant Gervasi cuidan cada detalle. Rótulos discretos pero de gran calidad: letras corpóreas en latón o bronce, cajas de luz con vinilo de impresión fina.',
  },
  {
    sector: 'Clínicas privadas & centros médicos',
    desc: 'La concentración de clínicas privadas en la Zona Alta es muy alta. Señalética homologada, rótulos de identificación corporativa y señales de emergencia que cumplen normativa sanitaria.',
  },
  {
    sector: 'Joyerías & galerías de arte',
    desc: 'Para joyerías y galerías, el rótulo es parte de la experiencia de cliente. Letras en metal pulido, iluminación puntual y señalética interior minimalista de alto diseño.',
  },
  {
    sector: 'Farmacias & parafarmacias premium',
    desc: 'Las farmacias de la Zona Alta apuestan por una imagen cuidada. Cruz de farmacia en LED, rótulo de fachada con letras corpóreas y señalética interior de categoría.',
  },
  {
    sector: 'Despachos profesionales & notarías',
    desc: 'Firmas de abogados, notarías y consultores en Sarrià-Sant Gervasi necesitan una imagen de solidez y confianza. Rótulos discretos, clásicos y de materiales duraderos.',
  },
]

const TIPOS = [
  { tipo: 'Letras corpóreas premium', desc: 'Latón, bronce, acero inoxidable espejo o dorado a la hoja. El máximo nivel de acabado para fachadas y recepciones de primer nivel.' },
  { tipo: 'Neón LED de alta gama', desc: 'Tubo de silicona sobre soporte lacado. Tipografías exclusivas, colores personalizados. Perfecto para hostelería y boutiques de la Zona Alta.' },
  { tipo: 'Señalética interior de lujo', desc: 'Placas en latón, acero o piedra natural. Dirección de espacios discreta y elegante para clínicas, hoteles y despachos de alto nivel.' },
  { tipo: 'Cajas de luz premium', desc: 'Caja de luz con marco en aluminio lacado y vinilo de impresión fotográfica UHD. Imagen nítida y uniforme, perfecta para fachadas con alta visibilidad.' },
]

export default function RotulosSarria() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.rotulosGeo('sarria-barcelona', 'Sarrià'))) }} />
      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/rotulos" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← RÓTULOS BARCELONA
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — BARCELONA · TALLER PROPIO · INSTALACIÓN INCLUIDA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}>RÓTULOS</span>
<span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block' }}> EN SARRIÀ</span
            <span className="display" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>NEÓN LED · LETRAS CORPÓREAS · CAJAS DE LUZ · VINILOS</p>
            <TrackedLink
              href="/contact?servicio=rotulos&barrio=sarria-barcelona"
              label="Presupuesto rótulos Sarrià"
              location="hero-sarria"
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}
            >
              PEDIR PRESUPUESTO →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* SERVICIOS EN LA ZONA */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — SERVICIOS EN LA ZONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              QUÉ FABRICAMOS<br /><em> EN SARRIÀ</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/rotulos/neon-led-barcelona', titulo: 'NEÓN LED', desc: 'Cualquier tipografía, logotipo o forma. Bajo consumo. IP65 para exterior.' },
              { href: '/rotulos/letras-corporeas-barcelona', titulo: 'LETRAS CORPÓREAS', desc: 'Aluminio, acero inox, metacrilato. Con o sin retroiluminación halo.' },
              { href: '/rotulos/cajas-de-luz-barcelona', titulo: 'CAJAS DE LUZ', desc: 'LED interior, frente de metacrilato o tela. Visibilidad 24h.' },
              { href: '/rotulos/vinilos-escaparate-barcelona', titulo: 'VINILOS ESCAPARATE', desc: 'Corte, impresión, esmerilado, microperforado. Desde 48h.' },
              { href: '/rotulos/senaletica-interior-barcelona', titulo: 'SEÑALÉTICA INTERIOR', desc: 'Directorios, numeración, flechas, identificación de espacios.' },
              { href: '/rotulos/publicidad-exterior-barcelona', titulo: 'PUBLICIDAD EXTERIOR', desc: 'Banderolas, lonas, vallas y paneles de gran formato.' },
            ].map((s, i) => (
              <ScrollReveal key={s.href} delay={i * 40}>
                <Link href={s.href} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', alignItems: 'center' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>{s.titulo}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</p>
                    <span className="mono-label" style={{ color: 'var(--muted)', flexShrink: 0 }}>→</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS<br /><em> FRECUENTES</em>
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

      {/* ZONAS CERCANAS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMBIÉN SERVIMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              ZONAS<br /><em> CERCANAS</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { href: '/rotulos/eixample-barcelona', label: 'Eixample' },
              { href: '/rotulos/gracia-barcelona', label: 'Gràcia' },
              { href: '/rotulos/poblenou-barcelona', label: 'Poblenou' },
              { href: '/rotulos/sants-barcelona', label: 'Sants' },
              { href: '/rotulos/cerdanyola-del-valles', label: 'Cerdanyola del Vallès' },
              { href: '/rotulos/hospitalet-de-llobregat', label: "L'Hospitalet" },
              { href: '/rotulos/badalona-barcelona', label: 'Badalona' },
              { href: '/rotulos/born-barcelona', label: 'El Born' },
              { href: '/rotulos/sant-cugat-del-valles', label: 'Sant Cugat' },
              { href: '/rotulos/terrassa-barcelona', label: 'Terrassa' },
            ].slice(0, 6).map((z, i) => (
              <ScrollReveal key={z.href} delay={i * 30}>
                <Link href={z.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Rótulos {z.label}</span>
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
              Presupuesto gratuito · Respondemos en 24h
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PIDE TU<br /><em> PRESUPUESTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink
                href="/contact?servicio=rotulos&barrio=sarria-barcelona"
                label="Presupuesto rótulos Sarrià bottom"
                location="bottom-sarria"
                className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}
              >
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
