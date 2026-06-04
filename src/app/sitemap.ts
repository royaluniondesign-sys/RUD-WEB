import { MetadataRoute } from 'next'

const BASE = 'https://royaluniondesign.com'

const d = (s: string) => new Date(s)

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: d('2026-06-04'), changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${BASE}/rotulos`,  lastModified: d('2026-06-04'), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/contact`,  lastModified: d('2026-06-04'), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/pricing`,  lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/services`, lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog`,     lastModified: d('2026-06-04'), changeFrequency: 'weekly',  priority: 0.80 },
    { url: `${BASE}/work`,     lastModified: d('2026-05-01'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/about`,    lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/faq`,      lastModified: d('2026-04-01'), changeFrequency: 'monthly', priority: 0.68 },
  ]

  // Core service pages — high commercial intent, max priority after home
  const coreServiceSlugs: Array<{ slug: string; lastMod: string }> = [
    { slug: 'neon-led-barcelona',          lastMod: '2026-05-15' },
    { slug: 'letras-corporeas-barcelona',  lastMod: '2026-05-15' },
    { slug: 'cajas-de-luz-barcelona',      lastMod: '2026-05-15' },
    { slug: 'vinilos-escaparate-barcelona',lastMod: '2026-05-15' },
    { slug: 'senaletica-interior-barcelona',lastMod: '2026-05-01' },
    { slug: 'publicidad-exterior-barcelona',lastMod: '2026-05-01' },
  ]

  // Geo-targeted landing pages — slightly lower than core services
  const geoSlugs: Array<{ slug: string; lastMod: string }> = [
    { slug: 'eixample-barcelona',         lastMod: '2026-06-04' },
    { slug: 'gracia-barcelona',           lastMod: '2026-06-04' },
    { slug: 'poblenou-barcelona',         lastMod: '2026-06-04' },
    { slug: 'sarria-barcelona',           lastMod: '2026-06-04' },
    { slug: 'sants-barcelona',            lastMod: '2026-06-04' },
    { slug: 'cerdanyola-del-valles',      lastMod: '2026-06-04' },
    { slug: 'hospitalet-de-llobregat',    lastMod: '2026-06-04' },
    { slug: 'badalona-barcelona',         lastMod: '2026-06-04' },
    { slug: 'born-barcelona',             lastMod: '2026-06-04' },
    { slug: 'sant-cugat-del-valles',      lastMod: '2026-06-04' },
    { slug: 'terrassa-barcelona',         lastMod: '2026-06-04' },
  ]

  const rotulosServices: MetadataRoute.Sitemap = coreServiceSlugs.map(({ slug, lastMod }) => ({
    url: `${BASE}/rotulos/${slug}`,
    lastModified: d(lastMod),
    changeFrequency: 'monthly' as const,
    priority: 0.88,
  }))

  const rotulosGeo: MetadataRoute.Sitemap = geoSlugs.map(({ slug, lastMod }) => ({
    url: `${BASE}/rotulos/${slug}`,
    lastModified: d(lastMod),
    changeFrequency: 'monthly' as const,
    priority: 0.82,
  }))

  // Blog posts — rótulos guides > branding/web > IA/tech
  const blogEntries: Array<{ slug: string; lastMod: string; priority: number }> = [
    // Rótulos guides — high commercial value, 0.75
    { slug: 'cajas-de-luz-barcelona-precio-tipos',                              lastMod: '2026-06-04', priority: 0.75 },
    { slug: 'rotulos-luminosos-barcelona-precio-tipos-instalacion',             lastMod: '2026-05-20', priority: 0.75 },
    { slug: 'neon-led-barcelona-precio-instalacion',                            lastMod: '2026-05-20', priority: 0.75 },
    { slug: 'letras-corporeas-barcelona-tipos-precios',                         lastMod: '2026-05-20', priority: 0.75 },
    { slug: 'vinilos-escaparate-barcelona-precio-instalacion',                  lastMod: '2026-04-15', priority: 0.75 },
    // Branding & web — medium value, 0.65
    { slug: 'branding-ecommerce-shopify-barcelona',                             lastMod: '2026-02-01', priority: 0.65 },
    { slug: 'identidad-visual-vs-logo-diferencia',                              lastMod: '2026-01-15', priority: 0.65 },
    { slug: 'estrategia-marca-startups-barcelona',                              lastMod: '2025-12-01', priority: 0.65 },
    { slug: 'nextjs-vs-wordpress-2026',                                         lastMod: '2026-01-15', priority: 0.65 },
    // IA / automation — lower priority for rótulos business
    { slug: 'ia-local-vs-nube-agencias-creativas',                              lastMod: '2026-03-01', priority: 0.55 },
    { slug: 'aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st',     lastMod: '2026-04-01', priority: 0.55 },
    { slug: 'automatizacion-marketing-agencias-n8n',                            lastMod: '2025-11-01', priority: 0.55 },
  ]

  const blog: MetadataRoute.Sitemap = blogEntries.map(({ slug, lastMod, priority }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: d(lastMod),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const workEntries: Array<{ slug: string; lastMod: string }> = [
    { slug: 'idnt',    lastMod: '2026-03-01' },
    { slug: 'kopess',  lastMod: '2026-04-01' },
    { slug: 'oxyzen',  lastMod: '2026-05-01' },
    { slug: 'aurum',   lastMod: '2026-02-01' },
  ]

  const work: MetadataRoute.Sitemap = workEntries.map(({ slug, lastMod }) => ({
    url: `${BASE}/work/${slug}`,
    lastModified: d(lastMod),
    changeFrequency: 'monthly' as const,
    priority: 0.70,
  }))

  return [...core, ...rotulosServices, ...rotulosGeo, ...blog, ...work]
}
