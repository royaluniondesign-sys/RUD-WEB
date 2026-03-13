import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Contacto — RUD Studio · Agencia creativa Barcelona',
  description: 'Contacta con RUD Studio en Barcelona. Branding, diseño web, e-commerce, motion y automatización IA. Respondemos en menos de 24 horas.',
}

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="hero-gradient min-h-screen pt-[68px] flex items-center">
        <div className="container-custom py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Hablemos</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Cuéntanos tu proyecto.
              </h1>
              <p className="text-[#6B7280] leading-relaxed mb-10">
                Respondemos en menos de 24 horas. Si tienes una idea, un reto de marca o un proyecto web, queremos escucharlo.
              </p>
              <div className="space-y-5">
                {[
                  { label: 'Email', val: 'hello@rud.studio', href: 'mailto:hello@rud.studio' },
                  { label: 'Ubicación', val: 'Barcelona, España', href: null },
                  { label: 'Alcance', val: 'Barcelona · España · Global', href: null },
                ].map(({ label, val, href }) => (
                  <div key={label}>
                    <p className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-medium hover:underline underline-offset-2">{val}</a>
                    ) : (
                      <p className="font-medium">{val}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl border border-[#E2DDD7] p-8">
                <h2 className="text-xl font-bold mb-6">Envíanos un mensaje</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Nombre</label>
                      <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] text-sm focus:outline-none focus:border-[#0A0908] transition-colors bg-[#FAFAFA]" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#6B7280] mb-2">Email</label>
                      <input type="email" placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] text-sm focus:outline-none focus:border-[#0A0908] transition-colors bg-[#FAFAFA]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6B7280] mb-2">¿Qué necesitas?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] text-sm focus:outline-none focus:border-[#0A0908] transition-colors bg-[#FAFAFA] text-[#6B7280]">
                      <option>Branding & Estrategia</option>
                      <option>Identidad Visual</option>
                      <option>Diseño Web & Desarrollo</option>
                      <option>E-commerce Shopify</option>
                      <option>Contenido & Motion</option>
                      <option>Marketing Digital</option>
                      <option>AI Automation con CHARIOT</option>
                      <option>Varios servicios</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6B7280] mb-2">Presupuesto estimado</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] text-sm focus:outline-none focus:border-[#0A0908] transition-colors bg-[#FAFAFA] text-[#6B7280]">
                      <option>Starter — hasta €5.000</option>
                      <option>Professional — €5.000–€15.000</option>
                      <option>Enterprise — +€15.000</option>
                      <option>Por definir</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#6B7280] mb-2">Mensaje</label>
                    <textarea rows={4} placeholder="Cuéntanos brevemente tu proyecto, tu empresa y qué quieres conseguir..." className="w-full px-4 py-3 rounded-xl border border-[#E2DDD7] text-sm focus:outline-none focus:border-[#0A0908] transition-colors bg-[#FAFAFA] resize-none" />
                  </div>
                  <a href="mailto:hello@rud.studio" className="btn-primary w-full justify-center">
                    Enviar mensaje
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <p className="text-xs text-center text-[#9CA3AF]">O escríbenos directamente a <a href="mailto:hello@rud.studio" className="text-[#0A0908] underline underline-offset-2">hello@rud.studio</a></p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
