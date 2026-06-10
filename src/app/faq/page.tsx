import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ Rótulos Barcelona — Precios, Plazos y Proceso | Preguntas Frecuentes RUD Studio',
  description: 'Preguntas frecuentes sobre rótulos luminosos, neón LED, letras corpóreas y vinilos en Barcelona. Precios orientativos, plazos de fabricación, proceso y presupuesto gratis.',
  alternates: { canonical: 'https://royaluniondesign.com/faq' },
  openGraph: {
    title: 'FAQ Rótulos Barcelona — Precios, Plazos y Proceso | RUD Studio',
    description: 'Todo lo que necesitas saber sobre rótulos luminosos en Barcelona: precios, plazos, licencias y proceso. Respuestas reales de la agencia.',
    url: 'https://royaluniondesign.com/faq',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Rótulos Barcelona | RUD Studio',
    description: 'Precios, plazos, licencias y proceso de fabricación de rótulos en Barcelona. Respuestas reales.',
    images: ['https://royaluniondesign.com/og-image.png'],
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
    question: '¿Podéis trabajar con assets de marca existentes?',
    answer: 'Por supuesto. Podemos construir sobre, refinar o evolucionar tus assets de marca existentes en lugar de empezar desde cero. Evaluamos lo que tienes durante la fase de descubrimiento y te recomendamos el mejor camino.',
  },
  {
    question: '¿Trabajáis con clientes internacionales?',
    answer: 'Sí — trabajamos con clientes en toda España, Europa y América Latina. Toda la comunicación funciona por videollamada y nuestras herramientas de gestión de proyectos, así que la ubicación nunca es una barrera.',
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
    answer: 'Sí — ofrecemos retainers mensuales para gestión de marca, mantenimiento web, producción de contenido y soporte técnico. Muchos clientes se quedan con nosotros como partners a largo plazo más allá del proyecto inicial.',
  },
  {
    question: '¿Qué formatos de archivo recibo?',
    answer: 'Recibes todos los archivos fuente (Figma, AI, EPS) más paquetes de exportación listos para imprenta y digital — PNG, SVG, PDF. Todo lo que creamos para ti es tuyo.',
  },
  {
    question: '¿Trabajáis con otras agencias como partners?',
    answer: 'Sí — trabajamos en modo white-label para agencias que necesitan capacidad extra de diseño, desarrollo o automatización IA sin ampliar su equipo fijo. Discreción total.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://royaluniondesign.com/faq#faqpage',
  'url': 'https://royaluniondesign.com/faq',
  'name': 'FAQ Rótulos Barcelona — Preguntas Frecuentes RUD Studio',
  'mainEntity': [...faqsRotulos, ...faqsGeneral].map(({ question, answer }) => ({
    '@type': 'Question',
    'name': question,
    'acceptedAnswer': { '@type': 'Answer', 'text': answer },
  })),
}

export default function FAQ() {
  return (
    <main style={{ minHeight: '100vh', background: '#F7F5F1' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <Navbar light />

      {/* Hero */}
      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 520, background: '#0A0908' }}>
        <img src="/services/letras-corporeas.avif" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.65) 0%,rgba(10,9,8,0.42) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>FAQ</p>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', marginBottom: 16, lineHeight: 1.1, maxWidth: 600 }}>
              Preguntas frecuentes
            </h1>
            <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1.05rem)', color: 'rgba(255,255,255,0.62)', maxWidth: 520, lineHeight: 1.7 }}>
              Todo lo que necesitas saber sobre trabajar con nosotros. ¿No encuentras tu respuesta?{' '}
              <Link href="/contact" style={{ color: 'white', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Escríbenos.
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ — Rótulos */}
      <section style={{ background: '#fff', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '2rem' }}>
                <span style={{ width: 36, height: 36, borderRadius: 9999, background: 'rgba(10,9,8,.06)', border: '1px solid rgba(217,119,6,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>◎</span>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#0A0908', marginBottom: 2 }}>Rótulos & Señalética</p>
                  <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, letterSpacing: '-.02em', color: '#0A0908' }}>Preguntas sobre rótulos en Barcelona</h2>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <FAQAccordion faqs={faqsRotulos} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ — General */}
      <section style={{ background: '#FAFAFA', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '2rem' }}>
                <span style={{ width: 36, height: 36, borderRadius: 9999, background: '#F0EDE6', border: '1px solid #E2DDD7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>◈</span>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.18em', color: '#9CA3AF', marginBottom: 2 }}>Branding, Web & General</p>
                  <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 700, letterSpacing: '-.02em', color: '#0A0908' }}>Preguntas generales sobre cómo trabajamos</h2>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <FAQAccordion faqs={faqsGeneral} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F0EDE6', paddingBlock: 'clamp(3rem,8vw,5rem)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: 640 }}>
              <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14 }}>¿Más dudas?</p>
              <h2 style={{ fontSize: 'clamp(1.4rem,4vw,2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 12 }}>
                Pregúntanos directamente
              </h2>
              <p style={{ color: '#6B7280', fontSize: 14, marginBottom: 32, lineHeight: 1.7 }}>
                Respondemos en menos de 24 horas. Sin compromiso, sin formularios eternos.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-start' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1.5rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                  Iniciar conversación
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <a href="mailto:hello@royaluniondesign.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1.5rem', border: '1.5px solid #E2DDD7', color: '#0A0908', borderRadius: 9999, fontWeight: 500, fontSize: 14, textDecoration: 'none' }}>
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
