import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Blog — Brand Strategy & Design Insights',
  description: 'Insights, case studies and expert thinking on brand strategy, visual identity, web design and digital marketing from the RUD Studio team.',
  keywords: ['brand strategy blog', 'branding insights', 'design agency blog', 'visual identity tips', 'web design trends', 'brand building advice'],
  openGraph: {
    title: 'RUD Blog — Brand Strategy & Design Insights',
    description: 'Expert thinking on brand strategy, visual identity, web design and digital marketing.',
  },
}

const posts = [
  {
    title: 'The Future of Branding with AI',
    date: 'February 10, 2026',
    category: 'Insights',
    author: 'Alex Ruiz',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    excerpt: 'AI tools can produce a logo in seconds. So can we stop pretending that\'s what branding is? We look at what artificial intelligence is genuinely changing in creative workflows — and why strategy, empathy, and judgment remain irreplaceable.',
    featured: true,
  },
  {
    title: 'Why Most Rebrands Fail (And How to Avoid It)',
    date: 'January 28, 2026',
    category: 'Strategy',
    author: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    excerpt: 'The majority of rebrands fail not because of bad design — but because of bad strategy. We\'ve studied over 40 rebrand projects to identify the patterns that predict failure, and the questions you must answer before briefing anyone.',
  },
  {
    title: 'How to Create a Memorable Brand Identity',
    date: 'January 20, 2026',
    category: 'Branding',
    author: 'Alex Ruiz',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    excerpt: 'Memorable brands are built on a foundation of clarity — not complexity. We break down the seven elements that consistently produce brand identities that people remember, trust, and choose over their competitors.',
  },
  {
    title: 'Web Design Trends 2026',
    date: 'January 8, 2026',
    category: 'Design',
    author: 'Sofia Torres',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169217?w=800&q=80',
    excerpt: 'Variable fonts, immersive scroll experiences, editorial typography, and the quiet death of the hero carousel. We round up the design patterns defining exceptional digital experiences this year — with examples from the work we admire.',
  },
  {
    title: 'The Case for Monochrome: Why Less Colour Wins',
    date: 'January 3, 2026',
    category: 'Design',
    author: 'Alex Ruiz',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    excerpt: 'Some of the world\'s most powerful brand identities use a single colour — or none at all. We explore the strategic and aesthetic case for restrained colour palettes, and why the constraint often produces better work.',
  },
  {
    title: 'Why Brand Matters More Than Ever',
    date: 'December 20, 2025',
    category: 'Strategy',
    author: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
    excerpt: 'In a market saturated with options and accelerating AI-generated content, a strong brand identity is the one advantage that cannot be commoditised. We make the business case for investing in brand — with data.',
  },
  {
    title: 'Building a Brand That Works in Two Languages',
    date: 'December 5, 2025',
    category: 'Branding',
    author: 'Maria Santos',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&q=80',
    excerpt: 'Working across Spanish and English-speaking markets taught us that translation is not enough. We share the strategic and design principles behind building brand identities that work with equal force across languages and cultures.',
  },
  {
    title: 'What We Learned From Designing 100+ Logos',
    date: 'November 18, 2025',
    category: 'Insights',
    author: 'Alex Ruiz',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    excerpt: 'After more than a hundred logo projects, patterns emerge. We share the lessons — about process, about client collaboration, about what works and what fails — that have shaped how we approach every new mark we design.',
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
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Journal</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">Blog</h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              Insights on branding, design, and digital strategy from the RUD team.
            </p>
          </div>

          {/* Featured post */}
          <article className="group cursor-pointer mb-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-[var(--surface)]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-4">
                  <span className="px-2 py-1 bg-[var(--surface)] rounded-full font-medium">{featured.category}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4 mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed text-lg mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] group-hover:gap-4 transition-all duration-200">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map((post, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-5 bg-[var(--surface)]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
                  <span className="px-2 py-1 bg-[var(--surface)] rounded-full font-medium">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4 mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{post.excerpt}</p>
                <span className="text-xs font-medium text-[var(--muted)]">By {post.author}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
