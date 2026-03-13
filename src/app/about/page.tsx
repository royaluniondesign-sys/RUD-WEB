import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Sobre nosotros — RUD Studio · Agencia creativa Barcelona',
  description: 'RUD es una agencia creativa full-stack en Barcelona. Branding, diseño web, e-commerce, motion y automatización IA. Conoce nuestra filosofía y cómo trabajamos.',
}

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="hero-gradient pt-[68px] pb-0">
        <div className="container-custom py-24 md:py-32">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Sobre RUD</p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight tracking-tight mb-6 max-w-3xl">
              Hacemos marcas y webs que generan resultados reales.
            </h1>
            <p className="text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed">
              RUD es una agencia creativa full-stack basada en Barcelona. Combinamos estrategia de marca, diseño de alto nivel, tecnología puntera y automatización con IA para construir presencias digitales que destacan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filosofía */}
      <section className="section-padding bg-[#F7F5F1]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Nuestra filosofía</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Estrategia primero.<br />Diseño después.</h2>
              <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed">
                <p>No abrimos Figma hasta entender a fondo el mercado, la competencia y el cliente. El diseño que no tiene estrategia detrás es decoración — y la decoración se olvida.</p>
                <p>Creemos en el trabajo honesto: alcance claro, plazos reales, comunicación directa. Sin promesas infladas, sin sorpresas en la factura final.</p>
                <p>Y creemos que la tecnología debe servir a la creatividad — no al revés. Por eso construimos CHARIOT, nuestro agente de IA interno, para amplificar nuestra capacidad sin sacrificar la calidad.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '8+', label: 'Servicios especializados' },
                  { num: '€0', label: 'Coste IA con CHARIOT' },
                  { num: '100%', label: 'Infraestructura local' },
                  { num: '24h', label: 'Tiempo de respuesta' },
                ].map(s => (
                  <div key={s.label} className="bg-white rounded-2xl p-6 border border-[#E2DDD7]">
                    <p className="text-3xl font-bold tracking-tight mb-1">{s.num}</p>
                    <p className="text-xs text-[#9CA3AF] font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CHARIOT */}
      <section className="py-20 bg-[#06040E] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] blur-[100px] opacity-12 pointer-events-none"
          style={{background:'radial-gradient(ellipse,#7B68EE,transparent)'}} />
        <div className="container-custom relative">
          <ScrollReveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-[#7B68EE]/25 bg-[#7B68EE]/10">
                <span className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7B68EE]">CHARIOT — nuestro motor interno</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
                Nuestro Jarvis para la agencia.
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                CHARIOT es el super-agente de IA que usamos internamente en RUD. No es un producto externo — es nuestra ventaja competitiva. Analiza briefings, genera contenido, automatiza workflows y nos permite entregar proyectos de mayor calidad en menor tiempo, sin coste operativo adicional.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Corre 100% en infraestructura local con Ollama. Sin subir datos de clientes a servicios de terceros. Sin facturas mensuales de API. Es nuestra apuesta por la IA soberana, segura y eficiente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-[#F0EDE6]">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-3">Cómo trabajamos</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">El proceso RUD</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Descubrimiento', desc: 'Sesión inicial donde entendemos tu negocio, objetivos, audiencia y competencia. CHARIOT analiza el mercado.' },
              { num: '02', title: 'Estrategia', desc: 'Definimos posicionamiento, mensajes clave y la dirección creativa antes de diseñar una sola pieza.' },
              { num: '03', title: 'Diseño & Build', desc: 'Creamos la identidad visual, diseñamos en Figma y desarrollamos. Revisiones iterativas contigo.' },
              { num: '04', title: 'Entrega & Soporte', desc: 'Entregamos todos los assets, formamos a tu equipo y ofrecemos soporte post-entrega. Lanzamos juntos.' },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 70}>
                <div className="bg-white rounded-2xl p-7 border border-[#E2DDD7] h-full">
                  <span className="text-[10px] font-mono text-[#C4BFB8] mb-5 block">{step.num}</span>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0908]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">¿Trabajamos juntos?</h2>
                <p className="text-[#6B7280]">Cuéntanos tu proyecto — respondemos en menos de 24h.</p>
              </div>
              <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0908] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors">
                Contactar
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
