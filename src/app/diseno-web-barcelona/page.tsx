import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink, TrackedA } from '@/components/TrackedLink'

const URL = 'https://www.royaluniondesign.com/diseno-web-barcelona'

export const metadata = {
  title: 'Diseño Web en Barcelona y el Vallès · Desde 890 € | RUD Studio',
  description: 'Diseño de páginas web y tiendas online en Barcelona y el Vallès. Precio cerrado: landing desde 890 €, web profesional desde 3.490 €, tienda online desde 2.490 €. La web es 100% tuya.',
  keywords: 'diseño web Barcelona, diseño páginas web Barcelona, diseño web Cerdanyola, diseño web Sant Cugat, diseño web Vallès, tienda online Barcelona, precio página web Barcelona, diseño web para negocios Barcelona, Shopify Barcelona',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Diseño Web en Barcelona y el Vallès | RUD Studio',
    description: 'Webs y tiendas online con precio cerrado. Landing desde 890 €, web profesional desde 3.490 €, tienda online desde 2.490 €.',
    url: URL,
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
}

const WEB_PLANS = [
  { name: 'Landing', price: 'desde 890 €', delivery: '7–10 días', desc: 'Una página para lanzar un negocio, un servicio o una campaña. Formulario, botón de WhatsApp, SEO básico y Google Analytics.' },
  { name: 'Web Esencial', price: 'desde 1.790 €', delivery: '2–3 semanas', desc: 'Hasta 5 páginas para comercios y profesionales. Ficha de Google Business conectada, mapa, SEO por página y textos legales.' },
  { name: 'Web Profesional', price: 'desde 3.490 €', delivery: '4–6 semanas', desc: 'Hasta 10 páginas con diseño a medida, blog autogestionable, velocidad 90+ en Google y medición de cada contacto.', featured: true },
  { name: 'Web + SEO Local', price: 'desde 6.900 €', delivery: '6–10 semanas', desc: '20 páginas o más, con páginas por servicio y por zona para aparecer en Google en cada ciudad donde trabajas. Incluye 3 meses de seguimiento SEO.' },
]

const SHOP_PLANS = [
  { name: 'Tienda Esencial', price: 'desde 2.490 €', delivery: '3–4 semanas', desc: 'Shopify o WooCommerce con hasta 50 productos cargados, pago con tarjeta, Bizum y PayPal, envíos y recogida en tienda.', featured: true },
  { name: 'Tienda Profesional', price: 'desde 5.900 €', delivery: '6–8 semanas', desc: 'Diseño a medida, hasta 300 productos, filtros, carrito abandonado, email marketing y medición de ventas.' },
  { name: 'Tienda a Medida', price: 'desde 12.000 €', delivery: 'A definir', desc: 'Venta B2B, tarifas por cliente, catálogos grandes e integración con ERP, CRM o almacén.' },
]

const INCLUDED = [
  { t: 'Versión móvil', d: 'La mayoría de la gente busca negocios locales desde el móvil. Diseñamos primero para pantalla pequeña.' },
  { t: 'SEO técnico desde el primer día', d: 'Títulos, descripciones, datos estructurados, sitemap y velocidad. La base para que Google entienda qué haces y dónde.' },
  { t: 'Medición de contactos', d: 'Cada formulario, llamada y clic en WhatsApp queda registrado en Google Analytics. Sabrás cuántos clientes te trae la web.' },
  { t: 'Textos legales', d: 'Aviso legal, política de privacidad y de cookies conforme al RGPD.' },
  { t: 'La web es tuya', d: 'El dominio, el código y los contenidos quedan a tu nombre. Te entregamos todos los accesos.' },
  { t: 'Precio cerrado', d: 'Presupuesto por escrito con entregables y fechas. El precio solo cambia si cambia lo que nos pides.' },
]

const CASES = [
  { name: 'IDNT®', sector: 'Moda orgánica · Tienda Shopify', desc: 'Branding y tienda online Shopify para una marca de moda orgánica de Barcelona.', href: '/work/idnt' },
  { name: 'Kopess 23', sector: 'Eventos y catering · WordPress + SEO', desc: 'Web WordPress con SEO para una empresa de eventos y catering en Barcelona.', href: '/work/kopess' },
  { name: 'Oxyzen Club', sector: 'Club privado premium · WordPress', desc: 'Web, identidad gold-dark y medición con 17 eventos de Google Analytics para un club privado del Eixample.', href: '/work/oxyzen' },
]

const AREAS = ['Barcelona', 'Cerdanyola del Vallès', 'Sant Cugat del Vallès', 'Sabadell', 'Terrassa', 'Ripollet', 'Montcada i Reixac', 'Badalona', "L'Hospitalet"]

const FAQS = [
  { q: '¿Cuánto cuesta una página web en Barcelona?', a: 'Depende del número de páginas y de las funciones. En RUD Studio una landing de una página empieza en 890 €, una web de hasta 5 páginas en 1.790 € y una web profesional de hasta 10 páginas con diseño a medida y blog en 3.490 €. Todos los precios son de partida y sin IVA, y te damos un presupuesto cerrado por escrito antes de empezar.' },
  { q: '¿Cuánto cuesta una tienda online?', a: 'Una tienda Shopify o WooCommerce con hasta 50 productos cargados, pasarela de pago y envíos empieza en 2.490 €. Una tienda con diseño a medida, hasta 300 productos y email marketing empieza en 5.900 €. Para venta B2B o integración con ERP, desde 12.000 €.' },
  { q: '¿Cuánto tarda en estar lista mi web?', a: 'Una landing está lista en 7 a 10 días. Una web de hasta 5 páginas, en 2 o 3 semanas. Una web profesional, en 4 a 6 semanas. El plazo depende sobre todo de que tengamos los textos y las fotos a tiempo; si no los tienes, podemos hacerlos nosotros.' },
  { q: '¿La web será mía?', a: 'Sí. El dominio, el código y los contenidos quedan a tu nombre y te entregamos todos los accesos. No te atamos a ningún contrato de permanencia.' },
  { q: '¿Qué pasa después de publicar la web?', a: 'Te formamos para que puedas editar los contenidos. Si prefieres que nos ocupemos de todo, el mantenimiento empieza en 69 €/mes e incluye hosting, copias de seguridad, actualizaciones y cambios pequeños, sin permanencia.' },
  { q: '¿Trabajáis fuera de Barcelona?', a: 'Sí. Nuestro estudio está en Cerdanyola del Vallès, así que trabajamos con negocios de Barcelona y de todo el Vallès: Sant Cugat, Sabadell, Terrassa, Ripollet o Montcada. Podemos reunirnos en persona o por videollamada.' },
  { q: '¿Podéis hacer también el logo y el rótulo del local?', a: 'Sí, y es lo que nos diferencia. Diseñamos la marca, la web y fabricamos el rótulo en nuestro taller, así tu negocio tiene la misma imagen en la calle y en Google con un solo proveedor.' },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Diseño web y tiendas online en Barcelona',
  description: 'Diseño y desarrollo de páginas web y tiendas online para negocios de Barcelona y el Vallès, con SEO técnico, medición de contactos y precio cerrado.',
  url: URL,
  serviceType: 'Diseño web',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: AREAS.map(name => ({ '@type': 'City', name })),
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '890',
    highPrice: '12000',
    offerCount: WEB_PLANS.length + SHOP_PLANS.length,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.royaluniondesign.com' },
    { '@type': 'ListItem', position: 2, name: 'Diseño web Barcelona', item: URL },
  ],
}

function PlanList({ plans }: { plans: { name: string; price: string; delivery: string; desc: string; featured?: boolean }[] }) {
  return (
    <div>
      {plans.map((p, i) => (
        <ScrollReveal key={p.name} delay={i * 40}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem 2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
            <div>
              {p.featured && <p className="mono-label" style={{ color: 'var(--chariot)', marginBottom: '0.4rem' }}>● MÁS ELEGIDO</p>}
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--fg)', margin: 0 }}>{p.name}</h3>
              <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.4rem' }}>Entrega {p.delivery}</p>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '55ch' }}>{p.desc}</p>
            <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', whiteSpace: 'nowrap' }}>{p.price}</p>
          </div>
        </ScrollReveal>
      ))}
      <div style={{ borderTop: '1px solid var(--border)' }} />
    </div>
  )
}

export default function DisenoWebBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema, breadcrumbSchema]) }} />
      <Navbar />

      {/* HERO */}
      <section style={{ background: 'var(--bg)', minHeight: '60svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — CERDANYOLA DEL VALLÈS · BARCELONA
          </p>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>DISEÑO WEB</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block' }}>EN BARCELONA</span>
            <span className="display" style={{ fontSize: 'clamp(2.5rem, 9vw, 11rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>Y EL VALLÈS</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>WEBS DESDE 890 € · TIENDAS ONLINE DESDE 2.490 € · PRECIO CERRADO</p>
            <TrackedLink href="/contact?servicio=web" label="Presupuesto web" location="hero-diseno-web" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'start' }}>
            <ScrollReveal>
              <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', color: 'var(--fg)', lineHeight: 1 }}>
                UNA WEB QUE<br /><em>TRAE CLIENTES,</em><br />NO SOLO VISITAS
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.75 }}>
                  Diseñamos páginas web y tiendas online para comercios, restaurantes, clínicas y profesionales de Barcelona y el Vallès. Cada web sale con SEO técnico, versión móvil y medición de contactos, para que sepas cuántos clientes te trae.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  Trabajamos con precio cerrado. Antes de empezar recibes por escrito qué incluye tu web, cuánto cuesta y cuándo estará lista. Desarrollamos en Next.js, WordPress o Shopify según lo que necesite tu negocio, no según lo que nos resulte más cómodo.
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                  Nuestro estudio y taller están en Cerdanyola del Vallès. Si tu negocio tiene local, también podemos diseñar la marca y fabricar el rótulo, para que tengas la misma imagen en la calle y en Google.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WEBS */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — PÁGINAS WEB · PRECIOS SIN IVA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PÁGINAS WEB<br /><em>PARA NEGOCIOS</em>
            </h2>
          </ScrollReveal>
          <PlanList plans={WEB_PLANS} />
        </div>
      </section>

      {/* TIENDAS */}
      <section id="tiendas-online" style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — SHOPIFY O WOOCOMMERCE · PRECIOS SIN IVA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              TIENDAS<br /><em>ONLINE</em>
            </h2>
          </ScrollReveal>
          <PlanList plans={SHOP_PLANS} />
          <ScrollReveal>
            <div style={{ paddingTop: '2rem' }}>
              <Link href="/pricing" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                VER TODOS LOS PRECIOS Y EL MANTENIMIENTO →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INCLUIDO */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>03 — EN TODOS LOS PLANES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              SIEMPRE<br /><em>INCLUIDO</em>
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0 2.5rem' }}>
            {INCLUDED.map((item, i) => (
              <ScrollReveal key={item.t} delay={i * 30}>
                <div style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border)' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', marginBottom: '0.5rem' }}>{item.t}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{item.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>04 — CÓMO TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              DE LA LLAMADA<br /><em>A LA WEB PUBLICADA</em>
            </h2>
          </ScrollReveal>
          <div>
            {[
              { n: '01', t: 'Llamada de 20 minutos', d: 'Nos cuentas tu negocio, a quién vendes y qué quieres que haga la web. Gratis y sin compromiso.' },
              { n: '02', t: 'Presupuesto cerrado', d: 'Te enviamos por escrito las páginas, funciones, precio y fechas. Pagas el 50% al aprobarlo.' },
              { n: '03', t: 'Diseño y revisión', d: 'Ves el diseño antes de programar y pides los cambios incluidos en tu plan.' },
              { n: '04', t: 'Publicación y medición', d: 'Publicamos, conectamos Google Analytics y Search Console, te formamos y pagas el 50% restante.' },
            ].map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: '64px repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem 2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)' }}>{s.n}</p>
                  <h3 style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--fg)', margin: 0 }}>{s.t}</h3>
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
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>05 — PROYECTOS REALES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              WEBS QUE<br /><em>HEMOS HECHO</em>
            </h2>
          </ScrollReveal>
          <div>
            {CASES.map((c, i) => (
              <ScrollReveal key={c.name} delay={i * 40}>
                <Link href={c.href} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem 2rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'start', textDecoration: 'none', color: 'inherit' }}>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--fg)', margin: '0 0 0.25rem' }}>{c.name}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>{c.sector}</p>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{c.desc} <span style={{ color: 'var(--fg)' }}>Ver caso →</span></p>
                </Link>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* ZONAS */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>06 — DÓNDE TRABAJAMOS</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--fg)', marginBottom: '2rem' }}>
              BARCELONA<br /><em>Y TODO EL VALLÈS</em>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '65ch', marginBottom: '2rem' }}>
              Estamos en Carrer Sant Salvador 11, Cerdanyola del Vallès. Nos reunimos en persona con negocios de estas zonas y por videollamada con el resto de España.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.5rem', padding: 0 }}>
              {AREAS.map(a => (
                <li key={a} className="mono-label" style={{ color: 'var(--fg)' }}>— Diseño web {a}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>07 — PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              LO QUE<br /><em>NOS PREGUNTAN</em>
            </h2>
          </ScrollReveal>
          <div>
            {FAQS.map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 30}>
                <details style={{ borderTop: '1px solid var(--border)' }}>
                  <summary style={{ padding: '1.25rem 0', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, userSelect: 'none', color: 'var(--fg)' }}>
                    <span>{item.q}</span>
                    <span style={{ flexShrink: 0, width: 22, height: 22, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 300, color: 'var(--muted)' }}>+</span>
                  </summary>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.8, paddingBottom: '1.25rem', maxWidth: '65ch' }}>{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TAMBIÉN HACEMOS</p>
          </ScrollReveal>
          <div>
            {[
              { href: '/branding-barcelona', label: 'Branding e identidad visual' },
              { href: '/rotulos', label: 'Rótulos para tu local' },
              { href: '/blog/branding-ecommerce-shopify-barcelona', label: 'Errores de branding en tiendas Shopify' },
              { href: '/pricing', label: 'Todos los precios' },
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
              Presupuesto gratuito · Sin compromiso
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              HABLEMOS<br /><em>DE TU WEB</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=web" label="Presupuesto web bottom" location="bottom-diseno-web" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                SOLICITAR PRESUPUESTO →
              </TrackedLink>
              <TrackedA href="https://wa.me/34645593227?text=Hola%2C%20quiero%20presupuesto%20para%20una%20p%C3%A1gina%20web" label="WhatsApp diseño web" location="bottom-diseno-web" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                WHATSAPP · +34 645 593 227
              </TrackedA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
