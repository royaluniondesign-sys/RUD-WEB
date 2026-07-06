import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'FAQ Rótulos Barcelona — Precios, Plazos y Proceso | Preguntas Frecuentes RUD Studio',
  description: 'Preguntas frecuentes sobre rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Precios orientativos, plazos de fabricación, proceso y presupuesto gratis.',
  alternates: { canonical: 'https://www.royaluniondesign.com/faq' },
  openGraph: {
    title: 'FAQ Rótulos Barcelona — Precios, Plazos y Proceso | RUD Studio',
    description: 'Todo lo que necesitas saber sobre rótulos luminosos en Barcelona: precios, plazos, licencias y proceso. Respuestas reales de la agencia.',
    url: 'https://www.royaluniondesign.com/faq',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Rótulos Barcelona | RUD Studio',
    description: 'Precios, plazos, licencias y proceso de fabricación de rótulos en Barcelona. Respuestas reales.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const faqsRotulos = [
  {
    question: '¿Cuánto cuesta un rótulo luminoso en Barcelona?',
    answer: 'Depende del tipo. Un vinilo de escaparate desde 300 €. Un neón LED personalizado desde 1.800 €. Letras corpóreas desde 2.500 €. Un rótulo luminoso tipo caja de luz desde 3.200 €. Todos los precios incluyen diseño, fabricación e instalación en Barcelona. Pedimos presupuesto personalizado gratis — sin compromiso.',
  },
  {
    question: '¿Cuánto tiempo tardáis en fabricar un rótulo?',
    answer: 'Los vinilos de escaparate los entregamos en 48-72h. Para rótulos luminosos y letras corpóreas el plazo es de 5 a 10 días hábiles desde la aprobación del presupuesto. El neón LED puede llegar a 15 días según la complejidad de la forma. Acordamos fechas concretas antes de empezar.',
  },
  {
    question: '¿Hacéis visita técnica gratuita?',
    answer: 'Sí. La visita técnica es completamente gratuita y sin compromiso en Barcelona y área metropolitana (Cerdanyola del Vallès, Hospitalet, Badalona, Sant Cugat, Sabadell, Terrassa). En la visita medimos el espacio, evaluamos la estructura de sujeción y te asesoramos sobre el tipo de rótulo más adecuado.',
  },
  {
    question: '¿Necesito licencia del ayuntamiento para poner un rótulo?',
    answer: 'En Barcelona, cualquier rótulo en fachada requiere licencia de actividad y en muchos casos permiso de obras. Nosotros te asesoramos sobre los requisitos concretos para tu local y barrio — algunos tipos de señalética interior no requieren tramitación especial.',
  },
  {
    question: '¿Podéis reproducir mi logo exactamente en el rótulo?',
    answer: 'Sí. Partimos de tus archivos de identidad corporativa (AI, SVG, PDF) y los adaptamos al formato físico. Si no tienes los archivos en vectorial, podemos vectorizar el logo. El resultado es coherente 100% con tu marca.',
  },
  {
    question: '¿Los rótulos LED tienen garantía?',
    answer: 'Todos nuestros rótulos LED tienen garantía de fabricación de 2 años. Los componentes LED tienen una vida útil estimada de 50.000 horas (más de 10 años de uso comercial normal). Ofrecemos servicio de mantenimiento y reparación post-garantía.',
  },
  {
    question: '¿Trabajáis fuera de Barcelona?',
    answer: 'Principalmente trabajamos en Barcelona y el área metropolitana. Para proyectos en el resto de Cataluña o España, consúltanos — evaluamos cada proyecto según la complejidad y la logística de instalación.',
  },
  {
    question: '¿Qué diferencia hay entre neón LED y un rótulo luminoso?',
    answer: 'El neón LED es un tubo flexible que emite luz continua y se puede doblar en cualquier forma — ideal para tipografías y logos con curvas. Un rótulo luminoso (caja de luz) es una estructura cerrada con frente iluminado desde dentro — ideal para maximizar la visibilidad de marca con mantenimiento mínimo. Son complementarios y muchos locales usan los dos.',
  },
]

const faqsGeneral = [
  {
    question: '¿Cuánto tarda un proyecto de branding completo?',
    answer: 'Entre 4 y 6 semanas para identidad visual completa. Un proyecto de branding + diseño web va de 8 a 12 semanas dependiendo de la complejidad. Acordamos plazos concretos antes de empezar y los cumplimos.',
  },
  {
    question: '¿Ofrecéis revisiones?',
    answer: 'Sí — todos los paquetes incluyen 3 rondas de revisiones. Si necesitas rondas adicionales, se pueden gestionar a tarifa horaria. En nuestra experiencia, 3 rondas son más que suficientes para llegar al resultado perfecto.',
  },
  {
    question: '¿Cómo es el proceso de pago?',
    answer: '50% al inicio para confirmar tu fecha de proyecto, 50% restante en la entrega final. Para proyectos grandes (€10k+) podemos acordar pagos por hitos durante el proyecto. Facturamos con IVA español (21%).',
  },
  {
    question: '¿Podéis trabajar con recursos de marca existentes?',
    answer: 'Por supuesto. Podemos construir sobre, refinar o evolucionar tus recursos de marca existentes en lugar de empezar desde cero. Evaluamos lo que tienes durante la fase de descubrimiento y te recomendamos el mejor camino.',
  },
  {
    question: '¿Trabajáis con clientes internacionales?',
    answer: 'Sí — trabajamos con clientes en toda España, Europa y América Latina. Toda la comunicación se hace por videollamada y a través de nuestras herramientas de gestión de proyectos, así que la ubicación nunca es una barrera.',
  },
  {
    question: '¿Cuál es vuestro proceso de trabajo?',
    answer: 'Empezamos con una llamada de descubrimiento para entender tus objetivos y contexto. Luego creamos una propuesta detallada con alcance, plazos y precios. Una vez aprobada, avanzamos por fases definidas: estrategia, diseño, feedback y entrega final.',
  },
  {
    question: '¿Qué son exactamente AURA y Hermes?',
    answer: 'Aura y Hermes son nuestros agentes de IA internos — no son un producto externo, sino la ventaja competitiva que nos permite entregar proyectos de mayor calidad en menos tiempo. Aura analiza briefings, genera contenido y gestiona comunicación. Hermes automatiza flujos operativos y CRM. Corren 100% en infraestructura local propia: privacidad total, sin coste recurrente, sin que tus datos salgan de tu servidor. Si quieres algo similar en tu empresa, hablemos.',
  },
  {
    question: '¿Ofrecéis soporte después de la entrega?',
    answer: 'Sí — ofrecemos contratos de mantenimiento mensual para gestión de marca, mantenimiento web, producción de contenido y soporte técnico. Muchos clientes se quedan con nosotros como partners a largo plazo más allá del proyecto inicial.',
  },
  {
    question: '¿Qué formatos de archivo recibo?',
    answer: 'Recibes todos los archivos fuente (Figma, AI, EPS) más paquetes de exportación listos para imprenta y digital — PNG, SVG, PDF. Todo lo que creamos para ti es tuyo.',
  },
  {
    question: '¿Trabajáis con otras agencias como partners?',
    answer: 'Sí — trabajamos en modo marca blanca para agencias que necesitan capacidad extra de diseño, desarrollo o automatización IA sin ampliar su equipo fijo. Discreción total.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.royaluniondesign.com/faq#faqpage',
  'url': 'https://www.royaluniondesign.com/faq',
  'name': 'FAQ Rótulos Barcelona — Preguntas Frecuentes RUD Studio',
  'mainEntity': [...faqsRotulos, ...faqsGeneral].map(({ question, answer }) => ({
    '@type': 'Question',
    'name': question,
    'acceptedAnswer': { '@type': 'Answer', 'text': answer },
  })),
}

export default function FAQ() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.faq())) }} />
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '60svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — FAQ · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>PREGUNTAS</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>FRECUENTES</span>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Rótulos · Precios · Plazos · Proceso
            </p>
            <Link href="/contact" className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              HACER UNA PREGUNTA →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ — Rótulos ──────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>01 — RÓTULOS & SEÑALÉTICA</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGUNTAS SOBRE<br /><em>RÓTULOS</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FAQAccordion faqs={faqsRotulos} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ — General ──────────────────────────────────────── */}
      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>02 — BRANDING, WEB & GENERAL</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 8rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              CÓMO<br /><em>TRABAJAMOS</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <FAQAccordion faqs={faqsGeneral} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              ¿No encuentras tu respuesta? · Respondemos en 24h
            </p>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>
              PREGÚNTANOS<br /><em>DIRECTAMENTE</em>
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <Link href="/contact" className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                INICIAR CONVERSACIÓN →
              </Link>
              <a href="mailto:hello@royaluniondesign.com" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                hello@royaluniondesign.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
