import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const projects: Record<string, { name: string; subtitle: string; img: string; desc: string; tags: string[]; next: string }> = {
  'idnt': {
    name: 'IDNT',
    subtitle: 'Sistema de Identidad Visual',
    img: '/project-idnt.jpg',
    desc: 'IDNT es la subsidiaria de branding de Royal Union Design, especializada en la creación de sistemas de identidad visual completos. Desde la estrategia de marca hasta los brand guidelines que aseguran coherencia en todos los puntos de contacto.',
    tags: ['Branding', 'Identidad visual', 'Brand Guidelines'],
    next: 'chariot',
  },
  'chariot': {
    name: 'CHARIOT',
    subtitle: 'Suite de Automatización IA',
    img: '/project-chariot.jpg',
    desc: 'CHARIOT es el producto de IA autónomo de RUD, construido sobre infraestructura 100% local. Flujos de trabajo inteligentes, asistentes conversacionales y sistemas de automatización a escala de agencia con coste operativo $0.',
    tags: ['AI Automation', 'n8n', 'Ollama', 'Local AI'],
    next: 'rud-web',
  },
  'rud-web': {
    name: 'RUD Web',
    subtitle: 'Plataforma Digital',
    img: '/project-web.jpg',
    desc: 'La presencia digital de Royal Union Design. Diseñada y desarrollada internamente como demostración de las capacidades de RUD — estrategia, diseño Figma, desarrollo Next.js y SEO técnico en un solo proyecto.',
    tags: ['Web Design', 'Next.js', 'React', 'Vercel'],
    next: 'idnt',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = projects[slug]
  if (!p) return { title: 'Proyecto no encontrado' }
  return {
    title: `${p.name} — ${p.subtitle}`,
    description: p.desc,
  }
}

export default async function WorkSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects[slug]

  if (!p) {
    return (
      <main className="min-h-screen bg-[var(--bg)]">
        <Navbar />
        <section className="pt-36 pb-20">
          <div className="container-custom">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] mb-12 transition-colors">← Volver al trabajo</Link>
            <h1 className="text-4xl font-bold text-[var(--fg)] mb-4">Proyecto no encontrado</h1>
            <Link href="/work" className="btn-primary">Ver todos los proyectos</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="container-custom">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] mb-12 transition-colors">← Volver al trabajo</Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--fg)] mb-4 tracking-tight">{p.name}</h1>
            <p className="text-xl text-[#9CA3AF] mb-8">{p.subtitle}</p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-16">
            <img src={p.img} alt={`${p.name} — ${p.subtitle}`} className="w-full h-full object-cover" />
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-[#6B7280] leading-relaxed mb-12">{p.desc}</p>
            <Link href="/contact" className="btn-primary">
              Trabajar con nosotros
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {/* Next project */}
          <div className="mt-24 pt-12 border-t border-[#E5E2DC]">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Siguiente proyecto</p>
            <Link href={`/work/${p.next}`} className="group inline-flex items-center gap-3 text-3xl font-bold text-[#0A0A0A] hover:gap-5 transition-all duration-200">
              {projects[p.next]?.name}
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(projects).map(slug => ({ slug }))
}
