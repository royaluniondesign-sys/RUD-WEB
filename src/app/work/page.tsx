import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Trabajo & Proyectos — RUD Studio · Agencia creativa Barcelona',
  description: 'Portfolio de proyectos reales de RUD. Branding, identidad visual, diseño web, e-commerce Shopify y automatización IA para clientes en Barcelona y España.',
}

const PROJECTS = [
  {
    slug: 'idnt', client: 'IDNT®', type: 'Moda sostenible · Barcelona',
    desc: 'Marca de ropa orgánica sostenible hecha en Barcelona. Identidad visual completa, e-commerce Shopify, packaging y automatizaciones de marketing.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'],
    img: '/client-idnt-hero.gif', url: 'https://www.idnt.es', featured: true,
  },
  {
    slug: 'aurum', client: 'Aurum Studio', type: 'Joyería artesanal · Barcelona',
    desc: 'Identidad de lujo accesible para joyería artesanal. Branding, sistema visual, web y fotografía de producto.',
    tags: ['Branding Lujo','Identidad Visual','Fotografía','Web Design'],
    img: '/client-jewelry-hero.jpg', featured: false,
  },
  {
    slug: 'brandforce', client: 'BrandForce Agency', type: 'Agencia de marketing · Madrid',
    desc: 'Partner creativo white-label. Diseño, desarrollo y automatización IA como extensión del equipo interno.',
    tags: ['White-label','Diseño Web','Desarrollo','AI Automation'],
    img: '/client-agency-team.jpg', featured: false,
  },
]

export default function Work() {
  return (
    <main>
      <Navbar />
      <section className="hero-gradient" style={{paddingTop: 68}}>
        <div className="container-custom" style={{paddingTop: 'clamp(2.5rem,6vw,5rem)', paddingBottom: 'clamp(2.5rem,6vw,4rem)'}}>
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-4">Portfolio · Proyectos reales</p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-tight tracking-tight mb-6 max-w-3xl">
              Trabajo que habla por sí solo.
            </h1>
            <p className="text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed">
              Branding, diseño web, e-commerce y automatización IA para marcas con ambición. Cada proyecto empieza con una pregunta: ¿qué necesitas conseguir?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-[#F7F5F1]">
        <div className="container-custom space-y-5">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 80}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden bg-white border border-[#E2DDD7] card-lift">
                  {p.featured ? (
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden">
                        <img src={p.img} alt={`${p.client} — ${p.type}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        {p.url && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-white/25 rounded-full text-[10px] font-mono text-white/80">↗ {p.url.replace('https://www.','')}</span>
                          </div>
                        )}
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                          </div>
                          <h2 className="text-3xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{p.client}</h2>
                          <p className="text-xs text-[#9CA3AF] font-medium mb-4">{p.type}</p>
                          <p className="text-base text-[#6B7280] leading-relaxed">{p.desc}</p>
                        </div>
                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                          Ver proyecto completo
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row">
                      <div className="relative h-60 md:w-80 md:h-auto shrink-0 overflow-hidden">
                        <img src={p.img} alt={`${p.client} — ${p.type}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                        </div>
                        <h2 className="text-2xl font-bold mb-1 group-hover:underline decoration-2 underline-offset-4">{p.client}</h2>
                        <p className="text-xs text-[#9CA3AF] font-medium mb-3">{p.type}</p>
                        <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">{p.desc}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                          Ver proyecto
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}

          {/* CTA card */}
          <ScrollReveal delay={260}>
            <div className="rounded-2xl border-2 border-dashed border-[#D1CDC6] bg-[#F8F5F0] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-medium text-[#C4BFB8] uppercase tracking-widest mb-2">Próximo proyecto</p>
                <h3 className="text-2xl font-bold text-[#A09898] mb-1">Tu marca aquí</h3>
                <p className="text-sm text-[#C4BFB8]">Abiertos a nuevos proyectos · Barcelona y remoto</p>
              </div>
              <Link href="/contact" className="shrink-0 btn-primary">Empezar conversación</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
