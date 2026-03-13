'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

const projects = [
  {
    name: 'IDNT — Brand Identity System',
    category: 'Branding',
    slug: 'idnt',
    desc: 'Visual identity subsidiary of RUD — brand strategy, logo systems, and design guidelines.',
    year: '2025',
    bgStyle: { backgroundImage: 'url(/work3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' },
    labelColor: 'text-white',
  },
  {
    name: 'CHARIOT — AI Automation Suite',
    category: 'AI Automation',
    slug: 'chariot',
    desc: 'Autonomous AI assistant product built on local infrastructure for agency-scale automation.',
    year: '2025',
    bgStyle: { background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #0f3460 100%)' },
    labelColor: 'text-white',
  },
  {
    name: 'RUD Web Platform',
    category: 'Web Design',
    slug: 'rud-web',
    desc: 'Digital presence for Royal Union Design — strategy, design and development in one.',
    year: '2025',
    bgStyle: { background: 'linear-gradient(160deg, #E8F4FD 0%, #FAFAFA 60%, #FEF0D6 100%)' },
    labelColor: 'text-[#0A0A0A]',
  },
]

const categories = ['All', 'Branding', 'AI Automation', 'Web Design']

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">Our Work</h1>
            <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
              Projects developed through RUD and its subsidiaries IDNT and CHARIOT.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                  active === cat
                    ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]'
                    : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, index) => (
              <div key={project.slug} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                <div
                  className="relative aspect-[4/3] overflow-hidden mb-4 rounded-2xl"
                  style={project.bgStyle}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-5 left-5">
                    <span className={`font-bold text-2xl tracking-tight drop-shadow-lg ${project.labelColor}`}>
                      {project.name.split(' — ')[0]}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[var(--muted)] mb-1">{project.category} · {project.year}</p>
                <h3 className="text-xl font-bold text-[var(--fg)]">{project.name}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{project.desc}</p>
              </div>
            ))}

            <div className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-2xl border border-dashed border-[#D1CDC6] bg-[#F8F5F0] flex items-center justify-center">
                <p className="text-sm font-medium text-[#C4BFB8] uppercase tracking-widest">In Progress</p>
              </div>
              <p className="text-xs text-[#C4BFB8] mb-1">2025</p>
              <h3 className="text-xl font-bold text-[#C4BFB8]">Next Project</h3>
              <p className="text-sm text-[#C4BFB8] mt-1">Currently in production.</p>
            </div>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--muted)] py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </main>
  )
}
