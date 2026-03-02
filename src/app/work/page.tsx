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

export default function Work() {
  const projects = [
    { name: 'Future Fur', category: 'Branding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', slug: 'future-fur', desc: 'Brand identity for lifestyle brand' },
    { name: 'BresicWhitney', category: 'Web Design', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', slug: 'bresicwhitney', desc: 'Website for real estate agency' },
    { name: 'Edlyn 1929', category: 'Branding', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80', slug: 'edlyn-1929', desc: 'Rebranding for heritage food company' },
    { name: 'Shadey', category: 'Design', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', slug: 'shadey', desc: 'Identity for interiors brand' },
    { name: 'Associated Concepts', category: 'Finance', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', slug: 'associated-concepts', desc: 'Identity for financial services' },
    { name: "Wood's", category: 'Branding', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', slug: 'woods', desc: 'Australian gourmet brand' },
    { name: 'Location', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', slug: 'location', desc: 'Luxury real estate platform' },
    { name: 'Marshall White', category: 'Web', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', slug: 'marshall-white', desc: 'Luxury real estate website' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-16">
            A selection of projects we have worked on for our amazing clients.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link href={`/work/${project.slug}`} key={index} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-4 img-hover-zoom">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{project.category}</p>
                    <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">{project.name}</h3>
                    <p className="text-gray-600">{project.desc}</p>
                  </div>
                  <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
