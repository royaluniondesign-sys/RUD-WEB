import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Precios — Agencia de Branding y Diseño Web Barcelona',
  description: 'Precios transparentes para branding, diseño web y automatización IA en Barcelona. Starter €2.500 · Professional €7.500 · Enterprise €15.000+',
}

const plans = [
  {
    name: 'Starter',
    price: '€2.500',
    desc: 'Perfecto para startups y proyectos iniciales',
    features: ['Sesión de Brand Strategy', 'Diseño de logo (3 conceptos)', 'Sistema de color y tipografía', 'Brand Guidelines básico', 'Soporte por email'],
  },
  {
    name: 'Professional',
    price: '€7.500',
    desc: 'Nuestro paquete más popular',
    features: ['Todo en Starter', 'Identidad visual completa', 'Diseño web (5 páginas)', 'Entrega en Figma', 'Soporte prioritario', '3 rondas de revisiones'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '€15.000+',
    desc: 'Engagement completo end-to-end',
    features: ['Todo en Professional', 'Desarrollo web incluido', 'Estrategia de contenido', 'Assets de motion branding', 'Colateral de marketing', 'AI Automation con CHARIOT'],
  },
]

const faqs = [
  { question: '¿Los precios incluyen IVA?', answer: 'Los precios indicados no incluyen IVA (21%). El importe final se detalla en el presupuesto.' },
  { question: '¿Puedo personalizar un paquete?', answer: 'Sí. Todos los paquetes son puntos de partida. Adaptamos el alcance a tus necesidades y objetivos específicos.' },
  { question: '¿Hay costes adicionales después de la entrega?', answer: 'No hay costes ocultos. Si necesitas soporte adicional, ofrecemos retainers mensuales transparentes.' },
  { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha, 50% restante en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos.' },
]

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20 hero-gradient">
        <div className="container-custom text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Inversión</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] tracking-tight mb-6">Precios transparentes</h1>
          <p className="text-lg text-[#6B7280] max-w-lg mx-auto">Paquetes de precio fijo y alcance definido. Sin sorpresas, sin costes ocultos.</p>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 flex flex-col border ${plan.featured ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-2xl md:scale-[1.03]' : 'bg-white border-[#E5E2DC]'}`}>
                {plan.featured && <span className="inline-block mb-4 px-3 py-1 bg-white/15 text-xs font-medium rounded-full w-fit text-white/80">Más popular</span>}
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className={`text-xs mb-6 ${plan.featured ? 'text-white/50' : 'text-[#9CA3AF]'}`}>{plan.desc}</p>
                <p className="text-5xl font-bold mb-8 tracking-tight">{plan.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,0.12)' : '#F0EDE6'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : '#0A0A0A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? 'text-white/70' : 'text-[#6B7280]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full py-4 text-center rounded-full text-sm font-semibold transition-all hover:opacity-80 ${plan.featured ? 'bg-white text-[#0A0A0A]' : 'bg-[#0A0A0A] text-white'}`}>
                  Empezar con {plan.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#9CA3AF] mt-10">
            ¿Proyecto específico? <Link href="/contact" className="text-[#0A0A0A] font-medium underline underline-offset-2">Presupuesto a medida →</Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F0EDE6]">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-12 tracking-tight">Preguntas sobre precios</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </main>
  )
}
