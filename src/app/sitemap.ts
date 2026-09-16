import { MetadataRoute } from 'next'

const BASE = 'https://www.royaluniondesign.com'

const d = (s: string) => new Date(s)

export default function sitemap(): MetadataRoute.Sitemap {
  const core: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: d('2026-08-07'), changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${BASE}/rotulos`,  lastModified: d('2026-08-07'), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE}/contact`,  lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/pricing`,  lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/services`, lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/blog`,     lastModified: d('2026-08-07'), changeFrequency: 'weekly',  priority: 0.80 },
    { url: `${BASE}/work`,     lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/about`,    lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.70 },
    { url: `${BASE}/faq`,      lastModified: d('2026-08-07'), changeFrequency: 'monthly', priority: 0.68 },
  ]

  // Core service pages — high commercial intent, max priority after home
  const coreServiceSlugs: Array<{ slug: string; lastMod: string }> = [
    { slug: 'neon-led-barcelona',          lastMod: '2026-08-07' },
    { slug: 'letras-corporeas-barcelona',  lastMod: '2026-08-07' },
    { slug: 'cajas-de-luz-barcelona',      lastMod: '2026-08-07' },
    { slug: 'vinilos-escaparate-barcelona',lastMod: '2026-08-07' },
    { slug: 'senaletica-interior-barcelona',lastMod: '2026-08-07' },
    { slug: 'publicidad-exterior-barcelona',lastMod: '2026-08-07' },
  ]

  // Geo-targeted landing pages — slightly lower than core services
  const geoSlugs: Array<{ slug: string; lastMod: string }> = [
    { slug: 'eixample-barcelona',         lastMod: '2026-08-07' },
    { slug: 'gracia-barcelona',           lastMod: '2026-08-07' },
    { slug: 'poblenou-barcelona',         lastMod: '2026-08-07' },
    { slug: 'sarria-barcelona',           lastMod: '2026-08-07' },
    { slug: 'sants-barcelona',            lastMod: '2026-08-07' },
    { slug: 'cerdanyola-del-valles',      lastMod: '2026-08-07' },
    { slug: 'hospitalet-de-llobregat',    lastMod: '2026-08-07' },
    { slug: 'badalona-barcelona',         lastMod: '2026-08-07' },
    { slug: 'born-barcelona',             lastMod: '2026-08-07' },
    { slug: 'sant-cugat-del-valles',      lastMod: '2026-08-07' },
    { slug: 'terrassa-barcelona',         lastMod: '2026-08-07' },
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
    { slug: 'cajas-de-luz-barcelona-precio-tipos',                              lastMod: '2026-08-07', priority: 0.75 },
    { slug: 'rotulos-luminosos-barcelona-precio-tipos-instalacion',             lastMod: '2026-08-07', priority: 0.75 },
    { slug: 'neon-led-barcelona-precio-instalacion',                            lastMod: '2026-08-07', priority: 0.75 },
    { slug: 'letras-corporeas-barcelona-tipos-precios',                         lastMod: '2026-08-07', priority: 0.75 },
    { slug: 'vinilos-escaparate-barcelona-precio-instalacion',                  lastMod: '2026-08-07', priority: 0.75 },
    // Branding & web — medium value, 0.65
    { slug: 'branding-ecommerce-shopify-barcelona',                             lastMod: '2026-08-07', priority: 0.65 },
    { slug: 'identidad-visual-vs-logo-diferencia',                              lastMod: '2026-08-07', priority: 0.65 },
    { slug: 'estrategia-marca-startups-barcelona',                              lastMod: '2026-08-07', priority: 0.65 },
    // nextjs-vs-wordpress excluded — off-topic, noindex applied in metadata
    // IA/tech posts excluded — off-topic, noindex applied in metadata
  ]

  const blog: MetadataRoute.Sitemap = blogEntries.map(({ slug, lastMod, priority }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: d(lastMod),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const workEntries: Array<{ slug: string; lastMod: string }> = [
    { slug: 'sante',   lastMod: '2026-06-10' },
    { slug: 'novae',   lastMod: '2026-06-10' },
    { slug: 'lumina',  lastMod: '2026-06-10' },
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

  // Branding silo
  const branding: MetadataRoute.Sitemap = [
    { url: `${BASE}/branding-barcelona`,                                                lastModified: d('2026-08-20'), changeFrequency: 'monthly', priority: 0.92 },
    { url: `${BASE}/branding-barcelona/identidad-visual-barcelona`,                     lastModified: d('2026-09-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/branding-barcelona/diseno-logo-barcelona`,                          lastModified: d('2026-09-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/branding-barcelona/manual-de-marca-barcelona`,                      lastModified: d('2026-09-10'), changeFrequency: 'monthly', priority: 0.82 },
  ]

  // Imagen corporativa silo
  const imagenCorporativa: MetadataRoute.Sitemap = [
    { url: `${BASE}/imagen-corporativa-barcelona`,                                       lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.90 },
    { url: `${BASE}/imagen-corporativa-barcelona/rediseno-imagen-corporativa-barcelona`, lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.83 },
    { url: `${BASE}/imagen-corporativa-barcelona/manual-identidad-corporativa-barcelona`,lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.83 },
  ]

  // Material POP silo
  const materialPop: MetadataRoute.Sitemap = [
    { url: `${BASE}/material-pop-barcelona`,                                             lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/material-pop-barcelona/roll-up-barcelona`,                           lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE}/material-pop-barcelona/displays-barcelona`,                          lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
  ]

  // Packaging silo
  const packaging: MetadataRoute.Sitemap = [
    { url: `${BASE}/packaging-barcelona`,                                                lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/packaging-barcelona/diseno-etiquetas-barcelona`,                    lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE}/packaging-barcelona/diseno-envases-barcelona`,                      lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
  ]

  // Textil corporativo silo
  const textil: MetadataRoute.Sitemap = [
    { url: `${BASE}/textil-corporativo-barcelona`,                                       lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.88 },
    { url: `${BASE}/textil-corporativo-barcelona/uniformes-corporativos-barcelona`,     lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
    { url: `${BASE}/textil-corporativo-barcelona/camisetas-personalizadas-barcelona`,   lastModified: d('2026-09-17'), changeFrequency: 'monthly', priority: 0.82 },
  ]

  return [...core, ...rotulosServices, ...rotulosGeo, ...branding, ...imagenCorporativa, ...materialPop, ...packaging, ...textil, ...blog, ...work]
}
