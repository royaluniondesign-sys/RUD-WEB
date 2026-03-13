import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes — Agencia de Branding y Diseño Web Barcelona | RUD',
  description: 'Resolvemos tus dudas sobre branding, diseño web, precios, plazos y proceso de trabajo. Agencia creativa en Barcelona.',
}

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
    question: '¿Qué es exactamente CHARIOT?',
    answer: 'CHARIOT es nuestro super-agente de IA interno — no es un producto que vendemos, sino la herramienta que usamos para trabajar mejor. Analiza briefings, genera variantes, automatiza tareas y nos permite entregar más calidad en menos tiempo. Si quieres algo similar en tu empresa, hablemos.',
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

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">FAQ</p>
            <h1 className="font-bold text-[var(--fg)] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', letterSpacing: '-0.03em' }}>
              Preguntas frecuentes
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
              Todo lo que necesitas saber sobre trabajar con nosotros. ¿No encuentras tu respuesta?{' '}
              <Link href="/contact" className="text-[var(--fg)] font-medium underline underline-offset-2 hover:no-underline">
                Escríbenos.
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding" style={{ background: '#FAFAFA' }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={100}>
              <FAQAccordion faqs={faqsGeneral} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: '#F0EDE6' }}>
        <div className="container-custom">
          <ScrollReveal>
            <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">¿Más dudas?</p>
              <h2 className="font-bold tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', letterSpacing: '-0.03em' }}>
                Pregúntanos directamente
              </h2>
              <p className="text-[#6B7280] text-sm mb-8 leading-relaxed">
                Respondemos en menos de 24 horas. Sin compromiso, sin formularios eternos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="btn-primary">
                  Iniciar conversación
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <a href="mailto:hello@rud.studio" className="btn-secondary">
                  hello@rud.studio
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
