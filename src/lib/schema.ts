/**
 * Genera JSON-LD BreadcrumbList structured data.
 * Compatible con Google Rich Results — breadcrumbs en SERP.
 *
 * Uso en metadata `other` o directamente en JSX via `<script>` tag.
 */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Genera JSON-LD Article schema para blog posts.
 */
export function articleSchema(
  headline: string,
  description: string,
  imageUrl: string,
  datePublished: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: imageUrl,
    datePublished,
    author: { '@type': 'Organization', name: 'RUD Studio', url: 'https://www.royaluniondesign.com' },
    publisher: {
      '@type': 'Organization',
      name: 'RUD Studio',
      logo: { '@type': 'ImageObject', url: 'https://www.royaluniondesign.com/logo-rud-web.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

/**
 * Genera JSON-LD LocalBusiness schema mínimo para una página local.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.royaluniondesign.com/#organization',
    name: 'RUD Studio',
    alternateName: 'Royal Union Design',
    url: 'https://www.royaluniondesign.com',
    telephone: '+34645593227',
    email: 'hello@royaluniondesign.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Sant Salvador, 11, Local 6',
      addressLocality: 'Cerdanyola del Vallès',
      addressRegion: 'CT',
      postalCode: '08290',
      addressCountry: 'ES',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 41.491, longitude: 2.1427 },
    areaServed: [
      { '@type': 'City', name: 'Barcelona' },
      { '@type': 'City', name: 'Cerdanyola del Vallès' },
      { '@type': 'AdministrativeArea', name: 'Vallès Occidental' },
      { '@type': 'Country', name: 'España' },
    ],
  }
}

const BASE = 'https://www.royaluniondesign.com'

/**
 * Breadcrumb definitions for each main section.
 */
export const BREADCRUMBS = {
  home: () => [{ name: 'Inicio', url: BASE }],
  rotulos: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Rótulos Barcelona', url: `${BASE}/rotulos` },
  ],
  services: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Servicios', url: `${BASE}/services` },
  ],
  work: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Trabajo', url: `${BASE}/work` },
  ],
  blog: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Blog', url: `${BASE}/blog` },
  ],
  about: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Nosotros', url: `${BASE}/about` },
  ],
  pricing: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Precios', url: `${BASE}/pricing` },
  ],
  faq: () => [
    { name: 'Inicio', url: BASE },
    { name: 'FAQ', url: `${BASE}/faq` },
  ],
  contact: () => [
    { name: 'Inicio', url: BASE },
    { name: 'Contacto', url: `${BASE}/contact` },
  ],
  rotulosService: (service: string, label: string) => [
    { name: 'Inicio', url: BASE },
    { name: 'Rótulos Barcelona', url: `${BASE}/rotulos` },
    { name: label, url: `${BASE}/rotulos/${service}` },
  ],
  rotulosGeo: (zone: string, label: string) => [
    { name: 'Inicio', url: BASE },
    { name: 'Rótulos Barcelona', url: `${BASE}/rotulos` },
    { name: label, url: `${BASE}/rotulos/${zone}` },
  ],
  blogPost: (slug: string, title: string) => [
    { name: 'Inicio', url: BASE },
    { name: 'Blog', url: `${BASE}/blog` },
    { name: title, url: `${BASE}/blog/${slug}` },
  ],
  workCase: (slug: string, client: string) => [
    { name: 'Inicio', url: BASE },
    { name: 'Trabajo', url: `${BASE}/work` },
    { name: client, url: `${BASE}/work/${slug}` },
  ],
}
