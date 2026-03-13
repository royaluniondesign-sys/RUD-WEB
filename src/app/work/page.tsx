'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const projects = [
  {
    name: 'IDNT',
    subtitle: 'Sistema de Identidad Visual',
    category: 'Branding',
    year: '2025',
    img: '/project-idnt.jpg',
    slug: 'idnt',
    tags: ['Branding', 'Identidad visual', 'IDNT'],
    desc: 'Subsidiaria de branding de RUD. Estrategia de marca, sistemas de logo y guidelines visuales completos.',
  },
  {
    name: 'CHARIOT',
    subtitle: 'Suite de Automatización IA',
    category: 'AI Automation',
    year: '2025',
    img: '/project-chariot.jpg',
    slug: 'chariot',
    tags: ['AI', 'Automatización', 'CHARIOT'],
    desc: 'Producto de IA autónomo construido sobre infraestructura local para automatización a escala de agencia.',
  },
  {
    name: 'RUD Web',
    subtitle: 'Plataforma Digital',
    category: 'Web Design',
    year: '2025',
    img: '/project-web.jpg',
    slug: 'rud-web',
    tags: ['Web Design', 'Desarrollo Next.js'],
    desc: 'Presencia digital de Royal Union Design — estrategia, diseño y desarrollo en un solo proyecto.',
  },
]

const cats = ['Todos', 'Branding', 'AI Automation', 'Web Design']

export default function Work() {
  const [active, setActive] = useState('Todos')
  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6 tracking-tight">Nuestro trabajo</h1>
            <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
              Proyectos desarrollados a través de RUD y sus subsidiarias IDNT y CHARIOT. Basados en Barcelona, trabajamos globalmente.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${active === c ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]' : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-[var(--fg)] hover:text-[var(--fg)]'}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((p, i) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <img src={p.img} alt={`${p.name} — ${p.subtitle}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white font-bold text-2xl tracking-tight drop-shadow-lg">{p.name}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                </div>
                <h3 className="text-xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">{p.name} — {p.subtitle}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{p.desc}</p>
              </Link>
            ))}

            {/* Coming soon */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 border border-dashed border-[#D1CDC6] bg-[#F8F5F0] flex flex-col items-center justify-center gap-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4BFB8" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                <p className="text-sm font-medium text-[#C4BFB8] uppercase tracking-widest">En producción</p>
              </div>
              <h3 className="text-xl font-bold text-[#C4BFB8]">Próximo proyecto</h3>
              <p className="text-sm text-[#C4BFB8] mt-1">Actualmente en producción. Próximamente.</p>
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--muted)] mb-6">No hay proyectos en esta categoría aún.</p>
              <Link href="/contact" className="btn-primary">Iniciar un proyecto</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
