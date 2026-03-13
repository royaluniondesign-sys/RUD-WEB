import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const PROJECTS: Record<string, {
  client: string; type: string; desc: string; tags: string[];
  hero: string; images?: string[]; url?: string;
  challenge: string; work: string[];
  details: Record<string,string>; next: string; nextSlug: string;
}> = {
  idnt: {
    client: 'IDNT®', type: 'Moda orgánica sostenible · Barcelona',
    desc: 'Identidad visual completa, e-commerce Shopify, packaging y automatizaciones para una marca de ropa orgánica barcelonesa.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'],
    hero: '/client-idnt-hero.gif',
    images: ['/client-idnt-crew.jpg','/client-idnt-hoodie.jpg','/client-idnt-pant.jpg','/client-idnt-tee.jpg'],
    url: 'https://www.idnt.es',
    challenge: 'IDNT® necesitaba una identidad que comunicara sostenibilidad y artesanía urbana sin caer en los clichés del "slow fashion". Una marca con personalidad propia y sistema visual escalable para físico y digital.',
    work: [
      'Identidad visual completa desde estrategia hasta producción. Logo, paleta, tipografía, guidelines y aplicaciones en packaging y etiquetas.',
      'E-commerce Shopify con experiencia de compra optimizada para conversión, integrado con gestión de inventario.',
      'Automatizaciones de marketing: recuperación de carrito, email flows de fidelización, publicaciones automáticas en redes.',
    ],
    details: { 'Cliente':'IDNT®','Sector':'Moda sostenible','Ubicación':'Barcelona, España','Servicios':'Branding · Shopify · Packaging · Automatizaciones','Web':'idnt.es' },
    next: 'Aurum Studio', nextSlug: 'aurum',
  },
  aurum: {
    client: 'Aurum Studio', type: 'Joyería artesanal · Barcelona',
    desc: 'Identidad de lujo accesible para una joyería artesanal barcelonesa. Branding, sistema visual, web y fotografía de producto.',
    tags: ['Branding Lujo','Identidad Visual','Web Design','Fotografía'],
    hero: '/client-jewelry-hero.jpg',
    images: ['/client-jewelry-ring.jpg','/client-jewelry-2.jpg'],
    challenge: 'Aurum necesitaba posicionarse como joyería artesanal de calidad sin el precio inalcanzable del lujo tradicional. El reto: crear un sistema visual que transmitiera exclusividad y accesibilidad al mismo tiempo.',
    work: [
      'Estrategia de marca con posicionamiento "lujo accesible". Naming, tagline y propuesta de valor diferenciada.',
      'Identidad visual completa: logo minimalista, paleta dorada sofisticada, tipografía serif/sans y sistema de aplicaciones.',
      'Web diseño con catálogo de producto, páginas de colección y experiencia de compra premium.',
    ],
    details: { 'Cliente':'Aurum Studio','Sector':'Joyería artesanal','Ubicación':'Barcelona, España','Servicios':'Branding · Identidad Visual · Web · Fotografía' },
    next: 'BrandForce Agency', nextSlug: 'brandforce',
  },
  brandforce: {
    client: 'BrandForce Agency', type: 'Agencia de marketing · Madrid',
    desc: 'Partner creativo white-label para una agencia de marketing madrileña. Diseño, desarrollo y automatización IA como extensión del equipo.',
    tags: ['White-label','Diseño Web','Desarrollo','AI Automation'],
    hero: '/client-agency-team.jpg',
    images: ['/client-agency-1.jpg','/client-agency-office.jpg'],
    challenge: 'BrandForce necesitaba escalar su capacidad creativa y técnica sin contratar equipo fijo. Querían un partner de confianza que entendiera los briefings de sus clientes y entregara en sus estándares de calidad.',
    work: [
      'Partnership white-label continuo: diseño web, landing pages y assets creativos bajo los brandbooks de sus clientes.',
      'Desarrollo Next.js y WordPress para proyectos que requerían implementación técnica avanzada.',
      'Implementación de automatizaciones con IA para reducir su tiempo de producción de contenido y reporting.',
    ],
    details: { 'Cliente':'BrandForce Agency','Sector':'Agencia de marketing','Ubicación':'Madrid, España','Servicios':'White-label · Diseño · Desarrollo · AI Automation','Modalidad':'Partnership continuo' },
    next: 'IDNT®', nextSlug: 'idnt',
  },
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PROJECTS[params.slug]
  if (!p) return {}
  return {
    title: `${p.client} — Caso de estudio · RUD Studio`,
    description: p.desc,
  }
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const p = PROJECTS[params.slug]
  if (!p) notFound()

  return (
    <main>
      <Navbar />
      <section className="pt-[68px] bg-[#F7F5F1]">
        <div className="container-custom py-14">
          <ScrollReveal>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0A0908] transition-colors mb-8">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Portfolio
            </Link>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">{p.client}</h1>
            <p className="text-lg text-[#6B7280]">{p.type}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={p.hero} alt={`${p.client} — ${p.type}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
        {p.url && (
          <a href={p.url} target="_blank" rel="noopener noreferrer"
            className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs font-medium hover:bg-white/30 transition-colors">
            Visitar web ↗
          </a>
        )}
      </div>

      <section className="section-padding bg-[#F7F5F1]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-4">El desafío</h2>
                <p className="text-[#6B7280] leading-relaxed">{p.challenge}</p>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="text-2xl font-bold mb-4">Lo que hicimos</h2>
                <div className="space-y-3">
                  {p.work.map((w, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-[#F0EDE6] flex items-center justify-center mt-0.5">
                        <span className="text-[10px] font-mono text-[#9CA3AF]">{i+1}</span>
                      </span>
                      <p className="text-[#6B7280] leading-relaxed text-sm">{w}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              {p.images && (
                <ScrollReveal delay={120}>
                  <div className="grid grid-cols-2 gap-4">
                    {p.images.map((img, i) => (
                      <img key={i} src={img} alt={`${p.client} — imagen ${i+1}`} className="rounded-xl w-full h-52 object-cover" />
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>
            <ScrollReveal delay={60}>
              <div className="space-y-5 sticky top-24">
                <div className="bg-white rounded-2xl p-6 border border-[#E2DDD7]">
                  <h3 className="text-[10px] font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">Detalles</h3>
                  <div className="space-y-4 text-sm">
                    {Object.entries(p.details).map(([k,v]) => (
                      <div key={k}>
                        <p className="text-[10px] text-[#9CA3AF] font-medium uppercase tracking-wider mb-0.5">{k}</p>
                        <p className="text-[#0A0908] font-medium">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#F0EDE6] rounded-2xl p-6">
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">¿Proyecto similar? Hablemos.</p>
                  <Link href="/contact" className="btn-primary w-full justify-center text-sm">Contactar</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F0EDE6] border-t border-[#E2DDD7]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#9CA3AF]">Siguiente proyecto</p>
              <Link href={`/work/${p.nextSlug}`} className="group inline-flex items-center gap-2 text-xl font-bold hover:gap-3 transition-all">
                {p.next}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
