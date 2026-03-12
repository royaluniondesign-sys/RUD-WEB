'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const projects = [
  { name: 'Marshall White',      category: 'Branding',    image: '/work4.jpg',   slug: 'marshall-white',      desc: 'Luxury real estate brand built for a digital-first market',        year: '2025' },
  { name: 'BresicWhitney',       category: 'Web Design',  image: '/work2.jpg',   slug: 'bresicwhitney',       desc: 'Full digital platform overhaul — 40% increase in qualified leads',  year: '2025' },
  { name: 'Edlyn 1929',          category: 'Branding',    image: '/work1.jpg',   slug: 'edlyn-1929',          desc: 'Century-old artisan brand repositioned for global retail',          year: '2024' },
  { name: 'Future Fur',          category: 'Branding',    image: '/work3.jpg',   slug: 'future-fur',          desc: 'Bold identity for a category-defining sustainable fashion label',    year: '2024' },
  { name: 'Location',            category: 'Real Estate', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85', slug: 'location',  desc: 'Premium real estate brand — Southern Sydney luxury market',         year: '2024' },
  { name: 'Shadey',              category: 'Design',      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85', slug: 'shadey',    desc: 'Brand identity for a boutique window furnishing studio',            year: '2024' },
  { name: 'Associated Concepts', category: 'Branding',    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85', slug: 'associated-concepts', desc: 'Repositioned identity for a 30-year financial advisory firm', year: '2023' },
  { name: "Wood's",              category: 'Branding',    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85', slug: 'woods',     desc: 'Gourmet food brand — winner Best New Brand, Sydney Design Awards', year: '2023' },
]

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Portfolio</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">Our Work</h1>
            <p className="text-lg text-[var(--muted)] max-w-xl leading-relaxed">
              A curated selection of brand and digital projects across various industries.
            </p>
          </div>

          {/* Filter tabs */}
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

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <Link
                href={`/work/${project.slug}`}
                key={project.slug}
                className="group block"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 img-hover-zoom rounded-xl bg-[var(--surface)]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-[var(--muted)] mb-1">{project.category} · {project.year}</p>
                    <h3 className="text-xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--muted)] mt-1">{project.desc}</p>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 text-[var(--fg)] mt-1 flex-shrink-0">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--muted)] py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </main>
  )
}
