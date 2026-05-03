import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.royaluniondesign.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/rotulos`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/work/idnt`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/ia-local-vs-nube-agencias-creativas`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/branding-ecommerce-shopify-barcelona`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/identidad-visual-vs-logo-diferencia`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/nextjs-vs-wordpress-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/estrategia-marca-startups-barcelona`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/automatizacion-marketing-agencias-n8n`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
