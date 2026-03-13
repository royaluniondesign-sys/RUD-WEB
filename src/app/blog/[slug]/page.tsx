import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'

const POSTS: Record<string, {
  title: string; date: string; category: string; readTime: string;
  image: string; content: string; excerpt: string;
}> = {
  'ia-local-vs-nube-agencias-creativas': {
    title: 'IA local vs. nube: por qué las agencias creativas deberían reconsiderar dónde corre su IA',
    date: 'Marzo 2026', category: 'IA & Tecnología', readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85',
    excerpt: 'Llevamos un año corriendo modelos 100% locales en RUD con Ollama y aquí está lo que aprendimos.',
    content: `Las grandes plataformas de IA cobran por token, almacenan tus datos y pueden cambiar sus condiciones mañana. En RUD llevamos más de un año operando con modelos 100% locales — Qwen3:14b, Llama4, DeepSeek — a través de Ollama, y el resultado ha sido mejor de lo esperado en tres frentes: calidad comparable a GPT-4 en la mayoría de tareas creativas, coste operativo €0 al mes, y privacidad total de los datos de nuestros clientes.

El razonamiento es simple: si eres una agencia creativa, tus activos más valiosos son los briefings, estrategias y contenido de tus clientes. Subirlos a una API de terceros, aunque sea con las mejores políticas de privacidad, introduce un riesgo innecesario cuando la alternativa local funciona igual de bien.

La infraestructura que usamos en RUD corre sobre un MacBook Air M4 con Ollama, n8n self-hosted para los workflows de automatización, y Qdrant como base de datos vectorial. El coste de setup fue el tiempo de configuración — el coste operativo mensual es €0.

¿Cuándo sigue teniendo sentido la nube? Para tareas que requieren context windows masivos (100k+ tokens), para razonamiento matemático complejo, o para clientes que necesitan las últimas capacidades de GPT-4o o Claude Opus. Pero para el 80% del trabajo de una agencia creativa — copy, análisis de marca, generación de assets, automatizaciones — un modelo local bien configurado lo resuelve perfectamente.`,
  },
  'branding-ecommerce-shopify-barcelona': {
    title: 'E-commerce en Shopify: los 6 errores de branding que destruyen la conversión',
    date: 'Febrero 2026', category: 'E-commerce', readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=85',
    excerpt: 'Los patrones de error que más cuestan ventas en tiendas Shopify españolas.',
    content: `Hemos auditado decenas de tiendas Shopify en España y el patrón se repite con una regularidad que ya no sorprende. Los seis errores más comunes que destruyen conversión son todos problemas de branding mal aplicado al e-commerce.

Primero: logos que no funcionan a 32px. La mayoría de logos se diseñan para impresión o presentaciones, no para el favicon y el header mobile. Un logo que es hermoso en A4 puede ser ilegible en la barra de navegación del móvil — que es donde el 70% de tus clientes lo ven primero.

Segundo: paletas de color sin contraste accesible. El WCAG 2.1 exige un ratio de contraste mínimo de 4.5:1 para texto normal. La mayoría de tiendas Shopify fallan esto — y Google lo penaliza en SEO además de excluir usuarios con deficiencias visuales.

Tercero: tipografía que destroza la legibilidad en mobile. Fuentes decorativas que se ven bien en desktop se vuelven ilegibles a 14px en un iPhone. La regla: nunca fuentes decorativas para texto de más de 20 palabras en mobile.

Cuarto: inconsistencia entre el packaging y la web. El cliente compra online, recibe el paquete físico — y si no hay coherencia visual, la percepción de marca se fragmenta.

Quinto: CTAs con el mismo peso visual que el resto del contenido. El botón de compra debe ser lo más visible de la página. Si compite visualmente con el header, el footer y los banners promocionales, pierde.

Sexto: brand voice inconsistente. El copy del producto, los emails automáticos, las notificaciones de Shopify — todo debe sonar como la misma persona hablando. La mayoría de tiendas mezclan tonos porque distintas personas escribieron distintas partes sin guidelines.`,
  },
  'identidad-visual-vs-logo-diferencia': {
    title: 'No compraste un logo. Compraste un activo estratégico (o no)',
    date: 'Enero 2026', category: 'Branding', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=85',
    excerpt: 'La diferencia funcional entre un logo y una identidad visual completa.',
    content: `La confusión más cara del ecosistema empresarial español: creer que un logo es una identidad visual. Un logo es un símbolo. Una identidad es un sistema. La diferencia no es estética — es funcional y estratégica.

Una identidad visual funciona en todos los puntos de contacto: el logo en el header web, el mismo logo bordado en una camiseta, el mismo sistema de color en un roll-up de feria, la misma tipografía en el packaging, el mismo tono visual en los Stories de Instagram. Esto no pasa por accidente — pasa porque hay un sistema diseñado para funcionar en todos esos contextos.

El coste real de no tener un sistema: cada vez que necesitas aplicar tu marca a un nuevo contexto, alguien tiene que tomar decisiones ad-hoc. ¿Qué color de fondo uso aquí? ¿Esta tipografía funciona en este tamaño? ¿El logo cabe en este espacio cuadrado? Sin sistema, cada una de estas preguntas se resuelve de forma inconsistente, y la marca se fragmenta visualmente hasta que se vuelve irreconocible.

Lo que incluye una identidad visual completa: el símbolo y sus variantes (positivo, negativo, favicon, monocromático), el sistema de color con especificaciones para pantalla e impresión, el sistema tipográfico con jerarquías definidas, los patterns y elementos de apoyo, las guidelines de uso y las aplicaciones principales (papelería, web, social, packaging).

Una identidad bien construida debería durar entre 8 y 15 años antes de necesitar una revisión mayor. Un logo sin sistema suele necesitar rebrand en 2-3 años cuando la empresa crece y las inconsistencias se vuelven insostenibles.`,
  },
  'nextjs-vs-wordpress-2026': {
    title: 'Next.js vs. WordPress en 2026: cuándo usar cada uno (y cuándo no)',
    date: 'Enero 2026', category: 'Desarrollo Web', readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85',
    excerpt: 'Nuestra respuesta honesta después de construir proyectos en ambas plataformas.',
    content: `Después de años construyendo proyectos en Next.js y WordPress, nuestra respuesta honesta es: depende del cliente y del proyecto, no de la moda tecnológica del momento.

Next.js gana claramente en: performance (Core Web Vitals consistentemente más altos), SEO técnico (Server-Side Rendering nativo, metadatos dinámicos sin plugins), escalabilidad (de una landing a una aplicación web sin cambiar stack), y seguridad (superficie de ataque mínima comparada con WordPress).

WordPress gana en: autonomía del cliente para gestionar contenido sin desarrollador, ecosistema maduro de plugins para funcionalidades específicas, curva de aprendizaje mínima para el equipo del cliente, y coste de mantenimiento más predecible a largo plazo si el cliente tiene un webmaster.

El error que vemos repetidamente: elegir por preferencia tecnológica del desarrollador en lugar de por las necesidades reales del proyecto.

Para una landing page de una startup que no va a cambiar contenido frecuentemente → Next.js. Para una empresa con un equipo de marketing que publica 20 artículos al mes y gestiona eventos → WordPress o headless CMS con Next.js como frontend. Para un e-commerce → Shopify directamente, ninguno de los dos.

Lo que nunca hacemos: recomendar WordPress cuando el cliente no va a tener a nadie que lo mantenga. Un WordPress desactualizado es uno de los vectores de ataque más comunes en la web. Si nadie va a actualizar los plugins y el core regularmente, Next.js + contenido estático es siempre la opción más segura.`,
  },
  'estrategia-marca-startups-barcelona': {
    title: 'Por qué las startups de Barcelona gastan en diseño antes de tener estrategia de marca',
    date: 'Diciembre 2025', category: 'Estrategia', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85',
    excerpt: 'El error más caro del ecosistema startup y cómo evitarlo.',
    content: `Es el error más caro del ecosistema startup barcelonés: invertir en una web bonita antes de saber exactamente a quién le hablas, qué problema resuelves, y por qué deberían elegirte a ti en lugar de a la alternativa obvia.

Hemos visto startups gastar €15.000 en identidad y web, y rebrandear 18 meses después porque el mercado objetivo cambió, el posicionamiento no funcionó, o simplemente porque nadie en el equipo había pensado en serio quién era el cliente ideal.

La estrategia de marca no es un documento aburrido que se archiva. Es la respuesta a cuatro preguntas: ¿A quién le hablas exactamente (no "pymes", sino "fundadores de pymes de entre 5 y 15 empleados en el sector servicios que no tienen equipo de marketing")? ¿Qué problema específico resuelves? ¿Por qué eres la mejor opción para ese problema? ¿Cómo quieres que se sientan cuando interactúan con tu marca?

Sin respuestas sólidas a estas cuatro preguntas, cualquier decisión de diseño es arbitraria. El color que eliges, el tono de voz que usas, las imágenes que muestras — todo esto debería derivar de la estrategia, no de lo que le gusta al fundador o de lo que está de moda en Behance.

El proceso que seguimos en RUD: primero una sesión de brand strategy de 3-4 horas donde trabajamos estas preguntas con el cliente, luego definimos el posicionamiento y los mensajes clave, y solo después abrimos Figma. El tiempo invertido en estrategia siempre se recupera en menos iteraciones de diseño y en una identidad que funciona porque está construida sobre una base real.`,
  },
  'automatizacion-marketing-agencias-n8n': {
    title: 'Cómo automatizamos el 60% de nuestros workflows de marketing con n8n (y €0 de coste)',
    date: 'Noviembre 2025', category: 'Automatización', readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=85',
    excerpt: 'Nuestro stack actual de automatización y los workflows que más tiempo ahorran.',
    content: `n8n self-hosted más modelos locales de IA es la combinación que más ha cambiado cómo trabajamos en RUD. El resultado: aproximadamente el 60% de los workflows de marketing que antes hacíamos manualmente ahora corren solos, a cualquier hora, sin coste adicional.

Los workflows que más tiempo ahorran, en orden de impacto:

Reportes automáticos de cliente: cada semana, n8n recoge datos de Google Analytics, Meta Ads y Shopify, los procesa con un modelo local, y genera un informe resumido que se envía automáticamente al cliente. Lo que antes tomaba 2 horas por cliente ahora toma 0 horas.

Gestión de leads: cuando llega un formulario de contacto, CHARIOT analiza el brief, clasifica el tipo de proyecto, estima el presupuesto aproximado, y prepara un borrador de respuesta personalizada. Respondemos en menos de una hora a cualquier consulta, incluso fuera de horario.

Publicaciones en redes: el calendario editorial se planifica una vez al mes, y n8n se encarga de publicar en el momento óptimo, adaptar el copy para cada plataforma y trackear el rendimiento.

Seguimiento de proyectos: notificaciones automáticas cuando un proyecto lleva más de 48 horas sin actividad, recordatorios de revisiones pendientes, y alertas cuando se aproxima una fecha de entrega.

La inversión para montar este stack: unas 40 horas de configuración inicial repartidas en dos semanas. El ahorro estimado: entre 15 y 20 horas semanales de trabajo manual. La amortización fue en el primer mes.`,
  },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = POSTS[slug]
  if (!p) return { title: 'Artículo no encontrado · RUD Blog' }
  return {
    title: `${p.title} · RUD Studio Barcelona`,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt, images: [p.image] },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = POSTS[slug]
  if (!p) notFound()

  const paragraphs = p.content.split('\n\n').filter(Boolean)

  return (
    <main>
      <Navbar />

      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: '3rem', paddingBottom: '2rem', maxWidth: 760 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', marginBottom: '1.5rem', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Blog
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7B68EE' }}>{p.category}</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>·</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>{p.readTime} lectura</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>·</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>{p.date}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>{p.title}</h1>
          <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.7 }}>{p.excerpt}</p>
        </div>
      </section>

      <div style={{ height: 'clamp(200px,40vw,420px)', overflow: 'hidden', position: 'relative' }}>
        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))' }} />
      </div>

      <section style={{ background: '#F7F5F1', paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="container-custom" style={{ maxWidth: 720 }}>
          <article style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {paragraphs.map((para, i) => (
              <p key={i} style={{ fontSize: '1rem', color: '#3D3D3D', lineHeight: 1.8 }}>{para}</p>
            ))}
          </article>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2DDD7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 6 }}>¿Quieres hablar de esto con nosotros?</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Contactar → 
              </Link>
            </div>
            <Link href="/blog" style={{ fontSize: 13, color: '#6B7280', textDecoration: 'none' }}>
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
