'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const projects = [
  { name: 'Future Fur',          category: 'Branding',    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', slug: 'future-fur',          desc: 'Brand identity for lifestyle brand',         year: '2025' },
  { name: 'BresicWhitney',       category: 'Web Design',  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', slug: 'bresicwhitney',       desc: 'Website for a leading real estate agency',   year: '2025' },
  { name: 'Edlyn 1929',          category: 'Branding',    image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80', slug: 'edlyn-1929',          desc: 'Rebranding for heritage food company',       year: '2025' },
  { name: 'Shadey',              category: 'Design',      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', slug: 'shadey',              desc: 'Identity for interiors brand',               year: '2025' },
  { name: 'Associated Concepts', category: 'Branding',    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', slug: 'associated-concepts', desc: 'Identity for financial services firm',        year: '2025' },
  { name: "Wood's",              category: 'Branding',    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', slug: 'woods',               desc: '100% Australian gourmet brand identity',     year: '2025' },
  { name: 'Location',            category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', slug: 'location',            desc: 'Luxury real estate platform',                year: '2025' },
  { name: 'Marshall White',      category: 'Web Design',  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', slug: 'marshall-white',      desc: "Melbourne's premier property experts",       year: '2025' },
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
