import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-rud.png" alt="RUD" className="h-10" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="text-sm font-medium hover:text-gray-600 transition">WORK</Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition">ABOUT</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-gray-600 transition">PRICING</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-600 transition">BLOG</Link>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function Blog() {
  const posts = [
    { title: 'The Future of Branding with AI', date: 'January 15, 2026', category: 'Insights', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
    { title: 'How to Create a Memorable Brand Identity', date: 'January 8, 2026', category: 'Branding', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' },
    { title: 'Web Design Trends 2026', date: 'January 2, 2026', category: 'Design', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80' },
    { title: 'Why Brand Matters More Than Ever', date: 'December 20, 2025', category: 'Strategy', image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-16">
            Insights on branding, design, and digital strategy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="group">
                <div className="relative aspect-[3/2] overflow-hidden mb-4 img-hover-zoom">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                  {post.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
