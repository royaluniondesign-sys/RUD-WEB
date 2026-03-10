import Link from 'next/link'
import Navbar from '@/components/Navbar'

export async function generateStaticParams() {
  return [
    { slug: 'future-fur' }, { slug: 'bresicwhitney' }, { slug: 'edlyn-1929' },
    { slug: 'shadey' }, { slug: 'associated-concepts' }, { slug: 'woods' },
    { slug: 'location' }, { slug: 'marshall-white' },
  ]
}

const projectsData: any = {
  'future-fur': { name: 'Future Fur', category: 'Branding', year: '2025', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80', desc: 'Brand identity for lifestyle brand', content: 'We created a distinctive brand identity for Future Fur, focusing on modern aesthetics and sustainability messaging. The project encompassed logo design, color palette, typography, and brand guidelines.' },
  'bresicwhitney': { name: 'BresicWhitney', category: 'Web Design', year: '2025', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80', desc: 'Website for real estate agency', content: 'A modern website design for one of Sydney leading real estate agencies, featuring intuitive navigation, property showcases, and a seamless user experience.' },
  'edlyn-1929': { name: 'Edlyn 1929', category: 'Branding', year: '2025', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1600&q=80', desc: 'Rebranding for heritage food company', content: 'Celebrating 95 years of excellence with a refined brand identity that honors heritage while embracing modernity.' },
  'shadey': { name: 'Shadey', category: 'Design', year: '2025', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', desc: 'Identity for interiors brand', content: 'Clean, modern identity for a window furnishings brand focused on seamless style.' },
  'associated-concepts': { name: 'Associated Concepts', category: 'Finance', year: '2025', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80', desc: 'Identity for financial services', content: 'Professional identity for a family business with 30 years of experience in financial services.' },
  'woods': { name: "Wood's", category: 'Branding', year: '2025', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80', desc: 'Australian gourmet brand', content: 'Premium brand identity for 100% Australian-owned gourmet products.' },
  'location': { name: 'Location', category: 'Real Estate', year: '2025', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80', desc: 'Luxury real estate platform', content: 'Elevating real estate presence in Southern Sydney luxury market.' },
  'marshall-white': { name: 'Marshall White', category: 'Web', year: '2025', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', desc: 'Luxury real estate website', content: 'Redefining digital presence for Melbourne renowned property experts.' },
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug] || projectsData['future-fur']
  
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <article className="pt-24">
        <div className="h-[70vh] relative overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-0 right-0">
            <div className="container-custom">
              <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2">
                {project.category} · {project.year}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">{project.name}</h1>
            </div>
          </div>
        </div>

        <div className="container-custom py-16 max-w-4xl">
          <p className="text-xl text-[var(--muted)] mb-10 leading-relaxed">{project.desc}</p>
          <p className="text-lg text-[var(--fg)] leading-relaxed">{project.content}</p>

          <div className="mt-16 pt-8 border-t border-[var(--border)]">
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] hover:gap-4 transition-all duration-200">
              ← Back to Work
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
