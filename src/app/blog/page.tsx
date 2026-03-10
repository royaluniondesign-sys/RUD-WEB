import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const posts = [
  {
    title: 'The Future of Branding with AI',
    date: 'January 15, 2026',
    category: 'Insights',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    excerpt: 'How artificial intelligence is reshaping creative workflows — and why the human element matters more than ever.',
  },
  {
    title: 'How to Create a Memorable Brand Identity',
    date: 'January 8, 2026',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    excerpt: 'The fundamentals of building a brand that people remember, trust, and choose — again and again.',
  },
  {
    title: 'Web Design Trends 2026',
    date: 'January 2, 2026',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    excerpt: 'From variable fonts to spatial design — the trends defining digital experiences this year.',
  },
  {
    title: 'Why Brand Matters More Than Ever',
    date: 'December 20, 2025',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80',
    excerpt: 'In a world saturated with options, a strong brand is no longer a nice-to-have — it is your most important asset.',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Journal</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">Blog</h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              Insights on branding, design, and digital strategy from the RUD team.
            </p>
          </ScrollReveal>

          <ScrollReveal className="stagger" delay={100}>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {posts.map((post, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl mb-4 img-hover-zoom bg-[var(--surface)]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
                    <span className="px-2 py-1 bg-[var(--surface)] rounded-full">{post.category}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{post.excerpt}</p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
