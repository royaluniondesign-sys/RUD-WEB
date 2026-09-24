import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios Diseño Web, Tiendas Online y Rótulos Barcelona — Tarifas | RUD Studio',
  description: 'Diseño web desde 890€, web profesional desde 3.490€, tienda online desde 2.490€, neón LED desde 1.800€ y letras corpóreas desde 2.500€ en Barcelona. Presupuesto cerrado gratis y sin compromiso.',
  keywords: 'precio diseño web Barcelona, cuánto cuesta una página web, precio tienda online Barcelona, precio rótulos Barcelona, cuánto cuesta neón LED Barcelona, precio letras corpóreas Barcelona, tarifa branding Barcelona, presupuesto rótulos luminosos',
  alternates: { canonical: 'https://www.royaluniondesign.com/pricing' },
  openGraph: {
    title: 'Precios Diseño Web, Tiendas Online y Rótulos Barcelona | RUD Studio',
    description: 'Webs desde 890€, tiendas online desde 2.490€, neón LED desde 1.800€. Presupuesto cerrado gratis y sin compromiso.',
    url: 'https://www.royaluniondesign.com/pricing',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios Diseño Web y Rótulos Barcelona | RUD Studio',
    description: 'Webs desde 890€, tiendas online desde 2.490€, neón LED desde 1.800€. Presupuesto gratis y sin compromiso.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const ROTULOS = [
  { name: 'VINILO ESCAPARATE', desc: 'Impreso, esmerilado o recortado en plotter. Sin obra.', from: 'desde 300 €' },
  { name: 'NEÓN LED PERSONALIZADO', desc: 'Cualquier tipografía o forma. Interior y exterior.', from: 'desde 1.800 €' },
  { name: 'LETRAS CORPÓREAS', desc: 'Aluminio, metacrilato o madera. Con o sin retroiluminación halo.', from: 'desde 2.500 €' },
  { name: 'RÓTULO LUMINOSO', desc: 'Caja de luz, bandeja calada, backlit LED. Máxima visibilidad nocturna.', from: 'desde 3.200 €' },
  { name: 'SEÑALÉTICA CORPORATIVA', desc: 'Wayfinding, directorios, accesos. Proyecto completo a medida.', from: 'Consultar' },
  { name: 'PUBLICIDAD EXTERIOR', desc: 'Lonas, banderolas, vallas, wrapping de vehículos.', from: 'Consultar' },
]

type Plan = {
  name: string
  tagline: string
  from: string
  per?: string
  includes: string[]
  delivery?: string
  featured?: boolean
}

const WEB_PLANS: Plan[] = [
  {
    name: 'LANDING',
    tagline: 'Una página para lanzar tu negocio o campaña',
    from: '890 €',
    includes: [
      '1 página con secciones',
      'Diseño adaptado a tu marca',
      'Formulario y botón de WhatsApp',
      'SEO básico y Google Analytics',
      '1 ronda de cambios',
    ],
    delivery: '7–10 días',
  },
  {
    name: 'WEB ESENCIAL',
    tagline: 'Presencia seria en Google para comercios y profesionales',
    from: '1.790 €',
    includes: [
      'Hasta 5 páginas',
      'Ficha de Google Business conectada',
      'Formulario, WhatsApp y mapa',
      'SEO on-page por página',
      'Textos legales (RGPD y cookies)',
      '2 rondas de cambios',
    ],
    delivery: '2–3 semanas',
  },
  {
    name: 'WEB PROFESIONAL',
    tagline: 'Una web que trae clientes cada mes',
    from: '3.490 €',
    includes: [
      'Hasta 10 páginas con diseño a medida',
      'Blog autogestionable',
      'SEO técnico y velocidad 90+ en Google',
      'Medición de cada contacto, llamada y WhatsApp',
      'Formación de 1 hora para editar tu web',
      '3 rondas de cambios',
    ],
    delivery: '4–6 semanas',
    featured: true,
  },
  {
    name: 'WEB + SEO LOCAL',
    tagline: 'Aparece en Google en cada barrio y ciudad donde trabajas',
    from: '6.900 €',
    includes: [
      '20 páginas o más',
      'Páginas por servicio y por zona',
      'Casos de éxito y portfolio',
      'Datos estructurados para Google',
      '3 meses de seguimiento SEO incluidos',
      'Informe mensual de resultados',
    ],
    delivery: '6–10 semanas',
  },
]

const SHOP_PLANS: Plan[] = [
  {
    name: 'TIENDA ESENCIAL',
    tagline: 'Empieza a vender online con un catálogo pequeño',
    from: '2.490 €',
    includes: [
      'Hasta 50 productos cargados',
      'Pago con tarjeta, Bizum y PayPal',
      'Envíos y recogida en tienda',
      'Emails de pedido con tu marca',
      'Textos legales de venta online',
      'Formación para gestionar pedidos',
    ],
    delivery: '3–4 semanas',
    featured: true,
  },
  {
    name: 'TIENDA PROFESIONAL',
    tagline: 'Para marcas con catálogo amplio que quieren vender más',
    from: '5.900 €',
    includes: [
      'Diseño a medida de tu marca',
      'Hasta 300 productos y variantes',
      'Filtros, búsqueda y productos relacionados',
      'Carrito abandonado y email marketing',
      'Medición de ventas en Google Analytics',
      '2 idiomas',
    ],
    delivery: '6–8 semanas',
  },
  {
    name: 'TIENDA A MEDIDA',
    tagline: 'Venta B2B, catálogos grandes o conexión con tu ERP',
    from: '12.000 €',
    includes: [
      'Productos ilimitados',
      'Tarifas por cliente y venta mayorista',
      'Integración con ERP, CRM o almacén',
      'Automatizaciones de pedidos',
      'Soporte prioritario',
    ],
    delivery: 'A definir',
  },
]

const CARE_PLANS: Plan[] = [
  {
    name: 'BÁSICO',
    tagline: 'Tu web segura y al día',
    from: '69 €',
    per: '/mes',
    includes: [
      'Hosting, dominio y certificado SSL',
      'Copias de seguridad semanales',
      'Actualizaciones de seguridad',
      '30 min de cambios al mes',
    ],
  },
  {
    name: 'PLUS',
    tagline: 'Cambios y resultados cada mes',
    from: '149 €',
    per: '/mes',
    includes: [
      'Todo lo del plan Básico',
      '1 hora de cambios al mes',
      'Informe mensual de visitas y contactos',
      'Atención prioritaria',
    ],
    featured: true,
  },
  {
    name: 'CRECIMIENTO',
    tagline: 'SEO y contenido para subir en Google',
    from: '490 €',
    per: '/mes',
    includes: [
      'Todo lo del plan Plus',
      'SEO mensual y seguimiento de posiciones',
      '2 artículos de blog al mes',
      'Publicaciones en Google Business',
    ],
  },
]

const ADDONS = [
  { name: 'PÁGINA ADICIONAL', from: '180 €' },
  { name: 'IDIOMA ADICIONAL', from: '+30% del plan' },
  { name: 'TEXTOS DE LA WEB (COPYWRITING)', from: 'desde 350 €' },
  { name: 'LOGO E IDENTIDAD BÁSICA', from: 'desde 490 €' },
  { name: 'BRANDING · IDENTIDAD COMPLETA', from: 'desde 3.500 €' },
  { name: 'SESIÓN DE FOTOS', from: 'desde 290 €' },
  { name: 'CARGA DE PRODUCTOS EXTRA', from: '3 € / producto' },
  { name: 'SISTEMA DE RESERVAS O CITAS', from: 'desde 390 €' },
]

const FAQS = [
  { question: '¿Los precios son cerrados?', answer: 'Sí. Los precios que ves son de partida y sin IVA (21%). Tras una llamada de 20 minutos te enviamos por escrito un presupuesto cerrado con entregables y fechas. El precio final solo cambia si cambia lo que nos pides.' },
  { question: '¿Cuánto tarda en llegar el presupuesto?', answer: 'Te lo enviamos por escrito después de una llamada de 20 minutos. La llamada es gratuita y sin compromiso.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al aprobar el presupuesto y 50% al publicar. En proyectos desde 3.000 € puedes pagar en 3 plazos sin intereses.' },
  { question: '¿La web es mía?', answer: 'Sí, al 100%. La web, el dominio y los contenidos quedan a tu nombre y te entregamos todos los accesos.' },
  { question: '¿Puedo contratar solo un servicio?', answer: 'Sí. Puedes contratar solo web, solo tienda online, solo branding o solo rótulos. Si abres un local, también podemos hacer la web y el rótulo a juego.' },
  { question: '¿Los rótulos incluyen instalación?', answer: 'Sí. El precio de los rótulos incluye diseño, fabricación en nuestro taller de Barcelona e instalación profesional en Barcelona y área metropolitana. Los permisos necesarios también están incluidos en proyectos de exterior.' },
  { question: '¿Qué pasa después de la entrega?', answer: 'Todas las webs incluyen soporte post-entrega. Si quieres que nos ocupemos de todo, el mantenimiento mensual empieza en 69 €/mes, sin permanencia.' },
]

function PlanRow({ plan }: { plan: Plan }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(1.25rem, 3vw, 3rem)',
      padding: '2.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
    }}>
      <div>
        {plan.featured && (
          <p className="mono-label" style={{ color: 'var(--chariot)', marginBottom: '0.5rem' }}>● MÁS ELEGIDO</p>
        )}
        <h3 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: 'var(--fg)', margin: 0 }}>{plan.name}</h3>
        <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>
          {plan.tagline}{plan.delivery ? ` · Entrega ${plan.delivery}` : ''}
        </p>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.5rem' }}>
        {plan.includes.map((inc) => (
          <li key={inc} className="mono-label" style={{ color: 'var(--muted)' }}>— {inc}</li>
        ))}
      </ul>
      <div>
        <p className="display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', color: 'var(--fg)', whiteSpace: 'nowrap' }}>
          {plan.per ? plan.from : <>desde<br />{plan.from}</>}
          {plan.per && <span className="mono-label" style={{ color: 'var(--muted)', marginLeft: '0.4rem' }}>{plan.per}</span>}
        </p>
        <Link href="/contact" className="mono-label"
          style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
          SOLICITAR →
        </Link>
      </div>
    </div>
  )
}

function PlanSection({ index, eyebrow, title, subtitle, plans, background }: {
  index: string
  eyebrow: string
  title: string
  subtitle: string
  plans: Plan[]
  background: string
}) {
  return (
    <section style={{ background, borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
      <div className="container-custom">
        <ScrollReveal>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>{index} — {eyebrow}</p>
          <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
            {title} <br /><em>{subtitle}</em>
          </h2>
        </ScrollReveal>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 60}>
              <PlanRow plan={plan} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Pricing() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '70svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        overflow: 'hidden',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — PRECIOS · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>PRECIOS</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>TRANSPARENTES</span>{' '}
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Precios de partida sin IVA · Presupuesto cerrado · Sin compromiso
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              PEDIR PRESUPUESTO GRATIS →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RÓTULOS — lista tipográfica ───────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — FABRICACIÓN PROPIA · BARCELONA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              RÓTULOS <br /><em>& SEÑALÉTICA</em>
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ROTULOS.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 40}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem',
                  padding: '1.75rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start',
                }}>
                  <div>
                    <h3 className="display" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', color: 'var(--fg)', margin: 0 }}>{item.name}</h3>
                    <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>{item.desc}</p>
                  </div>
                  <p className="display" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 3rem)', color: 'var(--fg)', whiteSpace: 'nowrap', textAlign: 'right', paddingTop: '0.25rem' }}>{item.from}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <p className="mono-label" style={{ color: 'var(--muted)' }}>Visita técnica gratuita · Presupuesto gratuito · Instalación incluida</p>
              <Link href="/rotulos" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                VER RÓTULOS →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PlanSection index="02" eyebrow="DISEÑO WEB · SIN IVA" title="PÁGINAS" subtitle="WEB" plans={WEB_PLANS} background="var(--warm)" />
      <PlanSection index="03" eyebrow="SHOPIFY O WOOCOMMERCE · SIN IVA" title="TIENDAS" subtitle="ONLINE" plans={SHOP_PLANS} background="var(--bg)" />
      <PlanSection index="04" eyebrow="OPCIONAL · SIN PERMANENCIA" title="MANTENIMIENTO" subtitle="MENSUAL" plans={CARE_PLANS} background="var(--warm)" />

      {/* ── ADD-ONS ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>05 — EXTRAS · SIN IVA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              EXTRAS
            </h2>
          </ScrollReveal>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {ADDONS.map((a, i) => (
              <ScrollReveal key={a.name} delay={i * 40}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '1.25rem 0', borderBottom: '1px solid var(--border)', gap: '2rem',
                }}>
                  <h3 className="display" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 3rem)', color: 'var(--fg)', margin: 0 }}>{a.name}</h3>
                  <p className="mono-label" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>{a.from}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>PREGUNTAS FRECUENTES</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              LO QUE <br /><em>MÁS PREGUNTAN</em>
            </h2>
          </ScrollReveal>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Presupuesto personalizado · Sin compromiso
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              CUÉNTANOS <br /><em>TU PROYECTO</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <Link href="/contact" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                PEDIR PRESUPUESTO →
              </Link>
              <Link href="/work" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Ver trabajos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
