import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Journal — Brand Strategy & Design Thinking',
  description: 'Perspectives on brand strategy, visual identity, web design and building businesses that people care about. Written by the RUD Studio team.',
  keywords: ['brand strategy', 'design thinking', 'brand identity agency', 'branding process', 'visual identity design', 'brand positioning Spain'],
  openGraph: {
    title: 'RÜD Journal — Brand Strategy & Design Thinking',
    description: 'Perspectives on brand strategy, identity and building businesses people care about.',
  },
}

const posts = [
  {
    title: 'Working With Luxury Real Estate Brands: What Most Agencies Get Wrong',
    date: 'February 2026',
    category: 'Case Study',
    author: 'Álvaro Ruiz',
    readTime: '7 min',
    // Editorial architectural photo, moody evening shot
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    excerpt: 'Over three years of working with agencies like BresicWhitney and Marshall White, we noticed the same mistake repeated: luxury real estate brands were designed to impress other agents, not buyers. Here\'s the insight that changed how we approach every brief in the sector — and why restraint, not extravagance, is the defining quality of the world\'s best property brands.',
    featured: true,
  },
  {
    title: 'The First Question We Ask Every Client (And Why Most Hate It)',
    date: 'January 2026',
    category: 'Strategy',
    author: 'Álvaro Ruiz',
    readTime: '5 min',
    // Hands working, deliberate, focused
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85',
    excerpt: 'Before moodboards, before colour palettes, before any conversation about logos — we ask: "What would your best customer lose if you disappeared?" Most clients pause for a long time. The ones who can\'t answer it are the ones who need us most. This question has shaped every strategy we\'ve delivered since 2013.',
  },
  {
    title: 'Naming a Brand When Your Market Speaks Two Languages',
    date: 'December 2025',
    category: 'Branding',
    author: 'María Santos',
    readTime: '6 min',
    // Typography/lettering detail
    image: 'https://images.unsplash.com/photo-1524666041070-9d87656c35b7?w=800&q=85',
    excerpt: 'Most naming frameworks were built for monolingual markets. When your brand needs to operate in both Spanish and English — or any two languages — the rules change. After building bilingual brands across Europe and Australia, we\'ve developed a process that goes far beyond translation. The name is the easy part. The positioning is where most projects break.',
  },
  {
    title: 'We Killed the Moodboard. Here\'s What We Do Instead.',
    date: 'November 2025',
    category: 'Process',
    author: 'Álvaro Ruiz',
    readTime: '4 min',
    // Materials/craft/design process - texture, editorial
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85',
    excerpt: 'Moodboards are designed to create agreement, not insight. After years of watching clients point to the most generic image on the board and call it "perfect", we stopped making them. Instead, we developed the RÜD Brand Pressure Test — a 12-question session we run before any visual work begins. Harder for clients. Better for everyone.',
  },
]

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">

          {/* Header */}
          <div className="mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Journal</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] tracking-tight mb-6">Thinking Out Loud</h1>
            <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed">
              We write about brand strategy, design process, and the uncomfortable questions that lead to better work.
              No trend roundups. No AI-generated filler. Just things we actually believe.
            </p>
          </div>

          {/* Featured post */}
          <article className="group cursor-pointer mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--surface)]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#0A0A0A] text-white text-[11px] font-semibold uppercase tracking-wider rounded-full">
                    {featured.category}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mb-5">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} read</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <h2 className="text-3xl md:text-[2.1rem] font-bold text-[#0A0A0A] leading-tight mb-5 group-hover:underline decoration-2 underline-offset-4">
                  {featured.title}
                </h2>
                <p className="text-[#6B7280] leading-relaxed text-base mb-7">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] group-hover:gap-4 transition-all duration-200">
                  Read article
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>

          {/* Divider */}
          <div className="border-t border-[var(--border)] mb-16" />

          {/* Posts grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {rest.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-[var(--surface)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 text-[10px] font-semibold uppercase tracking-wider rounded-full text-[#0A0A0A]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#9CA3AF] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                </div>
                <h2 className="text-lg font-bold text-[#0A0A0A] group-hover:underline decoration-2 underline-offset-4 mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="text-xs font-semibold text-[#9CA3AF]">By {post.author}</span>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 bg-[#0A0A0A] rounded-2xl p-12 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">Stay sharp</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              New thinking, direct to your inbox.
            </h3>
            <p className="text-[#9CA3AF] mb-8 max-w-md mx-auto text-sm leading-relaxed">
              We publish 2–3 times a month. No newsletters about newsletters. Just strategy and craft.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0A0A0A] text-sm font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>

        </div>
      </section>
    </main>
  )
}
