import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Blog — Branding, Diseño Web e IA · RUD Studio Barcelona',
  description: 'Perspectivas reales sobre estrategia de marca, diseño web, e-commerce y automatización IA para empresas en Barcelona y España. Sin relleno.',
  keywords: 'blog branding Barcelona, diseño web agencia, estrategia de marca, automatización IA, e-commerce Shopify, identidad visual, tendencias branding 2026',
}

const posts = [
  {
    slug: 'rotulos-luminosos-barcelona-precio-tipos-instalacion',
    title: 'Rótulos luminosos en Barcelona: tipos, precios y cómo elegir el correcto para tu negocio',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '7 min',
    image: '/services/neon-shop.jpg',
    excerpt: 'Neón LED, cajas de luz, letras corpóreas, vinilos. Todo lo que necesitas saber antes de pedir presupuesto para tu rótulo en Barcelona.',
    featured: true,
  },
  {
    slug: 'aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st',
    title: 'AURA: El Agente IA Autónomo que Lidera la Operación de RUD Studio desde Telegram',
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
  const [featured, ...rest] = posts
  return (
    <main style={{ minHeight: '100vh', background: '#F7F5F1' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 340, background: '#0A0908' }}>
        <img src="/hero-blog.jpg" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.40 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.6) 0%,rgba(10,9,8,0.38) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(3.5rem,8vw,6rem)', paddingBottom: 'clamp(2.5rem,5vw,4rem)' }}>
          <ScrollReveal>
            <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: 'rgba(255,255,255,0.45)', marginBottom: 14 }}>Blog · Perspectivas RUD</p>
            <h1 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: 16, maxWidth: '22ch', color: 'white' }}>
              Branding, diseño y tecnología.{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>Sin filtros.</span>
            </h1>
            <p style={{ fontSize: 'clamp(.875rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.62)', maxWidth: '42ch', lineHeight: 1.7 }}>
              Lo que aprendemos construyendo marcas, webs y sistemas de IA en Barcelona. Artículos prácticos, sin relleno.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts */}
      <section style={{ background: '#F7F5F1', paddingBlock: 'clamp(2rem,6vw,4rem)' }}>
        <div className="container-custom">

          {/* Featured */}
          <ScrollReveal>
            <Link href={`/blog/${featured.slug}`}
              className="card-lift"
              style={{ display: 'block', borderRadius: 16, overflow: 'hidden', background: '#fff', border: '1px solid #E2DDD7', marginBottom: '1.5rem' }}>
              <div className="grid md:grid-cols-2">
                  <div style={{ position: 'relative', minHeight: 220, overflow: 'hidden' }}>
                    <img src={featured.image} alt={featured.title}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', background: '#0A0908', color: '#fff', fontSize: 10, fontWeight: 700, borderRadius: 9999, textTransform: 'uppercase', letterSpacing: '.08em' }}>Destacado</span>
                  </div>
                  <div style={{ padding: 'clamp(1.25rem,3vw,2rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', color: '#7B68EE' }}>{featured.category}</span>
                        <span style={{ fontSize: 10, color: '#C4BFB8' }}>{featured.readTime} lectura</span>
                        <span style={{ fontSize: 10, color: '#C4BFB8' }}>{featured.date}</span>
                      </div>
                      <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontWeight: 700, lineHeight: 1.35, marginBottom: 12 }}>{featured.title}</h2>
                      <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7 }}>{featured.excerpt}</p>
                    </div>
                    <div style={{ marginTop: 16, fontSize: 14, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Leer artículo →
                    </div>
                  </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 55}>
                  <Link href={`/blog/${post.slug}`} className="card-lift"
                    style={{ display: 'flex', flexDirection: 'column', borderRadius: 16, overflow: 'hidden', background: '#fff', border: '1px solid #E2DDD7', height: '100%' }}>
                    <div style={{ position: 'relative', height: 170, overflow: 'hidden', flexShrink: 0 }}>
                      <img src={post.image} alt={post.title}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: 'clamp(1rem,2.5vw,1.25rem)', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', color: '#7B68EE' }}>{post.category}</span>
                        <span style={{ fontSize: 10, color: '#C4BFB8' }}>{post.readTime}</span>
                      </div>
                      <h2 style={{ fontSize: 'clamp(.95rem,1.8vw,1.05rem)', fontWeight: 700, lineHeight: 1.4, marginBottom: 8, flex: 1 }}>{post.title}</h2>
                      <p style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.65, marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid #F0EDE6', marginTop: 'auto' }}>
                        <span style={{ fontSize: 10, color: '#C4BFB8' }}>{post.date}</span>
                        <span style={{ fontSize: 12, fontWeight: 600 }}>Leer →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
          </div>

          {/* Newsletter */}
          <ScrollReveal delay={300}>
            <div style={{ marginTop: '3rem', borderRadius: 16, background: '#0A0908', padding: 'clamp(1.5rem,4vw,2.5rem)', textAlign: 'center' }}>
              <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.18em', color: '#444', marginBottom: 10 }}>Newsletter</p>
              <h3 style={{ fontSize: 'clamp(1.25rem,3vw,1.75rem)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>Sin spam. Solo lo que funciona.</h3>
              <p style={{ fontSize: 13, color: '#6B7280', marginBottom: 24 }}>Branding, diseño y IA. Un email al mes.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 380, margin: '0 auto' }}>
                <input type="email" placeholder="tu@email.com"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 9999, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 14, outline: 'none' }} />
                <button style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 9999, background: 'white', color: '#0A0908', fontSize: 14, fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                  Suscribirme
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
