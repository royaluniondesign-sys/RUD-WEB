import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { breadcrumbSchema, BREADCRUMBS } from '@/lib/schema'

export const metadata = {
  title: 'Blog Rótulos, Branding y Diseño Web Barcelona — Guías y Recursos | RUD Studio',
  description: 'Guías prácticas sobre rótulos luminosos en Barcelona, branding estratégico, diseño web, e-commerce Shopify y automatización IA. Consejos reales de una agencia que fabrica y diseña.',
  keywords: 'blog rótulos Barcelona, guía neón LED Barcelona, blog branding Barcelona, cómo elegir rótulo luminoso, blog diseño web Barcelona, tendencias señalética 2026',
  alternates: { canonical: 'https://www.royaluniondesign.com/blog' },
  openGraph: {
    title: 'Blog Rótulos, Branding y Diseño Web Barcelona | RUD Studio',
    description: 'Guías reales sobre rótulos luminosos, branding y diseño web en Barcelona. Precios, procesos y consejos de una agencia que fabrica y diseña.',
    url: 'https://www.royaluniondesign.com/blog',
    siteName: 'RUD Studio',
    locale: 'es_ES',
    type: 'website',
    images: [{ url: 'https://www.royaluniondesign.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog RUD Studio — Rótulos y Branding Barcelona',
    description: 'Guías reales sobre rótulos luminosos, branding y diseño web en Barcelona.',
    images: ['https://www.royaluniondesign.com/og-image.png'],
  },
}

const posts = [
  {
    slug: 'cajas-de-luz-barcelona-precio-tipos',
    title: 'Cajas de luz en Barcelona: tipos, formatos y precios reales en 2026',
    date: 'Junio 2026', category: 'Señalética & Rótulos', readTime: '5 min',
    image: '/RUDTRABAJOSROTULOS/photo-1698500103054-8a00e4c4131c.avif',
    excerpt: 'La caja de luz sigue siendo el rótulo más instalado en comercios de Barcelona. Guía completa de formatos, materiales y precios para 2026.',
  },
  {
    slug: 'rotulos-luminosos-barcelona-precio-tipos-instalacion',
    title: 'Rótulos luminosos en Barcelona: tipos, precios y cómo elegir el correcto para tu negocio',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '7 min',
    image: '/services/neon-shop.jpg',
    excerpt: 'Neón LED, cajas de luz, letras corpóreas, vinilos. Todo lo que necesitas saber antes de pedir presupuesto para tu rótulo en Barcelona.',
    featured: true,
  },
  {
    slug: 'neon-led-barcelona-precio-instalacion',
    title: 'Neón LED en Barcelona: precio, instalación y cómo elegir el tuyo',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '6 min',
    image: '/services/neon-interior.avif',
    excerpt: 'Todo lo que necesitas saber sobre el neón LED en Barcelona: precios reales, plazos de fabricación, tipos de instalación y qué negocios lo usan más.',
    featured: true,
  },
  {
    slug: 'letras-corporeas-barcelona-tipos-precios',
    title: 'Letras corpóreas en Barcelona: tipos, materiales y precios reales',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '6 min',
    image: '/services/letras-corporeas.avif',
    excerpt: 'Aluminio, metacrilato, retroiluminación halo. Todo sobre las letras corpóreas en Barcelona: qué son, qué materiales existen y cuánto cuestan.',
  },
  {
    slug: 'vinilos-escaparate-barcelona-precio-instalacion',
    title: 'Vinilos para escaparate en Barcelona: tipos, precios y cuándo usarlos',
    date: 'Abril 2026', category: 'Señalética & Rótulos', readTime: '5 min',
    image: '/services/vinilo-escaparate.avif',
    excerpt: 'Vinilos de corte, impresos, esmerilados, microperforados. Guía completa de vinilos para escaparates en Barcelona con precios reales y ejemplos.',
  },
  {
    slug: 'aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st',
    title: 'AURA: El Agente IA Autónomo que lidera la Operación de RUD Studio desde Telegram',
    date: 'Abril 2026', category: 'IA & Tecnología', readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85',
    excerpt: 'AURA no es un chatbot; es el cerebro operativo de nuestra agencia creativa en Barcelona. Descubre cómo gestionamos proyectos y tecnología en tiempo real desde una app de mensajería.',
    featured: false,
  },
  {
    slug: 'ia-local-vs-nube-agencias-creativas',
    title: 'IA local en agencias creativas: por qué dejamos de pagar APIs y ganamos en calidad',
    date: 'Marzo 2026', category: 'IA & Tecnología', readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85',
    excerpt: 'Llevamos más de un año corriendo modelos de IA 100% locales con Ollama. El resultado: calidad comparable a GPT-4, coste operativo cero y privacidad total de los datos de clientes.',
    featured: true,
  },
  {
    slug: 'branding-ecommerce-shopify-barcelona',
    title: 'Los 6 errores de branding que destruyen la conversión en tu tienda Shopify',
    date: 'Febrero 2026', category: 'E-commerce', readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=85',
    excerpt: 'Logo que no funciona a 32px, paleta sin contraste accesible, tipografía ilegible en mobile. Hemos auditado decenas de tiendas en España.',
  },
  {
    slug: 'identidad-visual-vs-logo-diferencia',
    title: 'Logo vs. identidad visual: la diferencia que las marcas aprenden tarde y caro',
    date: 'Enero 2026', category: 'Branding', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=85',
    excerpt: 'Un logo es un símbolo. Una identidad es un sistema. La confusión entre los dos le cuesta a las empresas años de rebrandings innecesarios.',
  },
  {
    slug: 'nextjs-vs-wordpress-2026',
    title: 'Next.js vs. WordPress en 2026: cuándo usar cada uno (sin dogmas)',
    date: 'Enero 2026', category: 'Desarrollo Web', readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85',
    excerpt: 'Después de construir proyectos en ambas plataformas nuestra respuesta es: depende. Next.js gana en performance. WordPress en autonomía del cliente.',
  },
  {
    slug: 'estrategia-marca-startups-barcelona',
    title: 'Por qué el 80% de las empresas diseñan antes de tener estrategia de marca',
    date: 'Diciembre 2025', category: 'Estrategia', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=85',
    excerpt: 'Hemos visto empresas gastar €30k en diseño y rebrandear 18 meses después. El error no fue el diseñador — fue no tener estrategia.',
  },
  {
    slug: 'automatizacion-marketing-agencias-n8n',
    title: 'Cómo automatizamos el 60% de nuestros workflows con n8n y €0 de coste',
    date: 'Noviembre 2025', category: 'Automatización', readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85',
    excerpt: 'n8n self-hosted + modelos locales + AURA = automatización sin límites ni facturas. Reportes, publicaciones, leads, briefs automáticos.',
  },
]

export default function Blog() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar light />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(BREADCRUMBS.blog())) }} />
      {/* Hero */}
      <section style={{ background: 'var(--bg)', paddingTop: 68, paddingBottom: 'clamp(3rem,7vw,5rem)' }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(4rem,10vw,7rem)' }}>
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Blog · Perspectivas RUD</p>
            <h1 className="display" style={{ fontSize: 'clamp(4.5rem,14vw,12rem)', lineHeight: 0.85, color: 'var(--fg)', marginBottom: '1rem' }}>
              BLOG
            </h1>
            <h2 className="display" style={{ fontSize: 'clamp(1.5rem,4vw,3.5rem)', lineHeight: 1, color: 'var(--fg)', marginBottom: '2rem' }}>
              RÓTULOS & BRANDING
            </h2>
            <p className="display" style={{ fontSize: 'clamp(2rem,6vw,5rem)', color: 'var(--border)', lineHeight: 0.9 }}>
              BARCELONA
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts list */}
      <section style={{ background: 'var(--bg)', paddingBottom: 'clamp(3rem,8vw,6rem)' }}>
        <div className="container-custom">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 40}>
              <Link href={`/blog/${post.slug}`} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem', padding: '2rem 0', borderTop: '1px solid var(--border)', textDecoration: 'none', color: 'var(--fg)', alignItems: 'start' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--warm)' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>{post.category} · {post.readTime} · {post.date}</p>
                  <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--fg)', lineHeight: 1.35, marginBottom: '0.75rem' }}>{post.title}</h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem' }}>{post.excerpt}</p>
                  <span className="mono-label" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>LEER ARTÍCULO →</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--warm)', paddingBlock: 'clamp(4rem,10vw,8rem)' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>¿Hablamos?</p>
            <h2 className="display" style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.85, color: 'var(--fg)', marginBottom: '0.5rem' }}>
              ¿TIENES UN
            </h2>
            <h2 className="display" style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.85, color: 'var(--border)', marginBottom: '3rem' }}>
              PROYECTO?
            </h2>
            <Link href="/contact" className="mono-label" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: 3, textDecoration: 'none' }}>
              CUÉNTANOSLO →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
