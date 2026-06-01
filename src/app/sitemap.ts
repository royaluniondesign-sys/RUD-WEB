import { MetadataRoute } from 'next'

const BASE = 'https://royaluniondesign.com'

const BLOG_SLUGS = [
  'rotulos-luminosos-barcelona-precio-tipos-instalacion',
  'neon-led-barcelona-precio-instalacion',
  'letras-corporeas-barcelona-tipos-precios',
  'vinilos-escaparate-barcelona-precio-instalacion',
  'aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st',
  'ia-local-vs-nube-agencias-creativas',
  'branding-ecommerce-shopify-barcelona',
  'identidad-visual-vs-logo-diferencia',
  'nextjs-vs-wordpress-2026',
  'estrategia-marca-startups-barcelona',
  'automatizacion-marketing-agencias-n8n',
]

const ROTULOS_SLUGS = [
  'neon-led-barcelona',
  'letras-corporeas-barcelona',
  'vinilos-escaparate-barcelona',
  'cajas-de-luz-barcelona',
  'senaletica-interior-barcelona',
  'publicidad-exterior-barcelona',
]

const WORK_SLUGS = ['idnt', 'kopess', 'oxyzen', 'aurum']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const core: MetadataRoute.Sitemap = [
    { url: BASE,                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/rotulos`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/services`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/pricing`,     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/contact`,     lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/about`,       lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/work`,        lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/blog`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/faq`,         lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
  ]

  const rotelosSubpages: MetadataRoute.Sitemap = ROTULOS_SLUGS.map((slug) => ({
    url: `${BASE}/rotulos/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  }))

  const rotuloBlogSlugs = [
    'rotulos-luminosos-barcelona-precio-tipos-instalacion',
    'neon-led-barcelona-precio-instalacion',
    'letras-corporeas-barcelona-tipos-precios',
    'vinilos-escaparate-barcelona-precio-instalacion',
  ]

  const blog: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: rotuloBlogSlugs.includes(slug) ? 0.75 : 0.65,
  }))

  const work: MetadataRoute.Sitemap = WORK_SLUGS.map((slug) => ({
    url: `${BASE}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...core, ...rotelosSubpages, ...blog, ...work]
}
