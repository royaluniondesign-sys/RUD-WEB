import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Sobre RUD — Agencia de Branding en Barcelona',
  description: 'Royal Union Design es una agencia creativa en Barcelona especializada en branding, diseño web y automatización con IA. Conoce IDNT y CHARIOT.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Sobre nosotros</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] tracking-tight mb-8 leading-tight">
              Royal Union Design<br />
              <span className="italic font-light text-[#9CA3AF]">Barcelona</span>
            </h1>
            <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed">
              RUD es una agencia creativa basada en Barcelona que combina estrategia de marca, diseño de alto nivel y tecnología de IA de vanguardia. Operamos a través de dos subsidiarias especializadas: <strong className="text-[#0A0A0A]">IDNT</strong> e <strong className="text-[#0A0A0A]">CHARIOT</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Nuestra misión</p>
              <h2 className="text-4xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
                Las mejores herramientas, <span className="italic font-light text-[#9CA3AF]">sin coste recurrente</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Creemos que la excelencia creativa y la tecnología de última generación no deberían estar reservadas para las grandes corporaciones. RUD demuestra que se puede operar con infraestructura de nivel enterprise a coste operativo cero.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Nuestra filosofía es simple: usar las mejores herramientas del mercado, constantemente comparando e integrando lo que sirve al propósito. El resultado es un servicio de calidad superior sin los márgenes inflados de las grandes agencias.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '$0', label: 'Coste operativo de IA' },
                { num: '100%', label: 'Infraestructura local' },
                { num: '2', label: 'Subsidiarias especializadas' },
                { num: '6', label: 'Servicios core' },
              ].map(s => (
                <div key={s.label} className="bg-white border border-[#E5E2DC] rounded-2xl p-6">
                  <p className="text-4xl font-bold text-[#0A0A0A] mb-2">{s.num}</p>
                  <p className="text-sm text-[#9CA3AF] leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="py-20 bg-[#F0EDE6]">
        <div className="container-custom">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Subsidiarias</p>
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-12 tracking-tight">Dos especialidades, <span className="italic font-light text-[#9CA3AF]">un equipo</span></h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* IDNT */}
            <div className="bg-[#0A0A0A] rounded-2xl p-10 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <p className="text-xs font-mono text-white/40 mb-2">Subsidiaria 01</p>
              <h3 className="text-3xl font-bold mb-3">IDNT</h3>
              <p className="text-white/60 text-sm font-medium mb-5">Brand & Visual Identity</p>
              <p className="text-white/70 leading-relaxed mb-8">
                IDNT se enfoca en la creación de sistemas de identidad visual completos. Desde la estrategia de marca hasta los guidelines que aseguran coherencia en todos los puntos de contacto.
              </p>
              <ul className="space-y-2 mb-8">
                {['Brand Strategy', 'Identidad Visual', 'Diseño de Logo', 'Brand Guidelines', 'Packaging'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/services#brand-strategy" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                Ver servicios IDNT
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            {/* CHARIOT */}
            <div className="bg-[#0f3460] rounded-2xl p-10 text-white">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
              </div>
              <p className="text-xs font-mono text-white/40 mb-2">Subsidiaria 02</p>
              <h3 className="text-3xl font-bold mb-3">CHARIOT</h3>
              <p className="text-white/60 text-sm font-medium mb-5">AI Automation & Intelligent Assistants</p>
              <p className="text-white/70 leading-relaxed mb-8">
                CHARIOT construye sistemas de IA autónomos y flujos de trabajo inteligentes sobre infraestructura local. Coste operativo $0 con rendimiento de nivel enterprise. La alternativa sin facturas recurrentes.
              </p>
              <ul className="space-y-2 mb-8">
                {['Flujos n8n', 'Agentes IA autónomos', 'Voice cloning', 'Avatar videos', 'AI Customer Support'].map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/services#ai-automation" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                Ver servicios CHARIOT
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Cómo trabajamos</p>
          <h2 className="text-4xl font-bold text-[#0A0A0A] mb-12 tracking-tight">Nuestro proceso</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Descubrimiento', desc: 'Entendemos tu negocio, objetivos y competencia a fondo antes de proponer nada.' },
              { step: '02', title: 'Estrategia', desc: 'Definimos el posicionamiento, mensajería y hoja de ruta del proyecto.' },
              { step: '03', title: 'Diseño', desc: 'Creamos con criterio. Cada decisión visual tiene un porqué estratégico.' },
              { step: '04', title: 'Entrega', desc: 'Entregamos con documentación completa y soporte post-lanzamiento.' },
            ].map(v => (
              <div key={v.step} className="bg-white border border-[#E5E2DC] rounded-2xl p-6">
                <span className="text-3xl font-bold text-[#E5E2DC] block mb-4">{v.step}</span>
                <h3 className="font-bold text-[#0A0A0A] mb-2">{v.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para trabajar <span className="italic font-light text-[#6B7280]">juntos?</span></h2>
            <p className="text-[#6B7280] mb-10">Cuéntanos tu proyecto. Respondemos en menos de 24 horas.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors text-sm">
                Iniciar proyecto
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/50 transition-colors text-sm">
                Ver precios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
