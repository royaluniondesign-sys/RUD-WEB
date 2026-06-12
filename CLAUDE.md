# RUD Studio — Contexto Permanente

## Proyecto
- **Web**: royaluniondesign.com
- **Stack**: Next.js 16.1.6 / App Router / TypeScript / Tailwind CSS
- **Deploy**: Vercel (auto-deploy desde main)
- **Branch de trabajo**: `claude/eloquent-maxwell-2kn7ug`
- **Email**: hello@royaluniondesign.com (único correo real — NO usar hello@rud.studio)

## Negocio
RUD Studio — agencia creativa en Barcelona. Servicios:
1. **Rótulos** — neón LED, letras corpóreas, cajas de luz, vinilos escaparate, señalética, publicidad exterior
2. **Branding** — identidad visual, logotipos, sistema de diseño
3. **Diseño web** — Next.js, WordPress, Shopify, SEO, analytics

Dirección: Carrer Sant Salvador 11, Local 6 · Cerdanyola del Vallès (08290)
Teléfono: +34 645 593 227

## GA4
- **Property ID**: G-2CK3CM6Y03
- **GA4 Numeric ID**: 421905332725
- Eventos configurados en `/src/lib/analytics.ts`: trackLead, trackCTA, trackFormStep, trackWhatsAppClick, trackScrollDepth, trackEngagement, etc.
- **Audiencias activas**: Alta Intención, Interés en Rótulos, Abrieron el Chat, Leads Formulario
- **Estado (junio 2026)**: 109 usuarios/28 días, tráfico mayormente directo (propio equipo) + bots. Solo ~15 usuarios reales. 3 leads convertidos. SEO en fase inicial.
- **YA ESTÁ HECHO**: Search Console conectado, Google Business Profile activo, eventos GA4 configurados, audiencias creadas. NO volver a sugerir esto.

## Clientes en portfolio
### Rótulos (fotos reales en /public/trabajos/)
- **Santé Café & Brunch** — neón LED caja de luz fachada. Slug: `sante`. Foto real: `sante-cafe-brunch-neon-led-caja-luz-barcelona.jpg`
- **Novae Consulting** — vinilos esmerilados cristal corporativo. Slug: `novae`. Foto real: `novae-consulting-vinilo-esmerilado-cristal-corporativo-barcelona.jpg`
- **Clínica Lumina Estética** — letras corpóreas doradas retroiluminadas. Slug: `lumina`. Foto real: `clinica-lumina-estetica-letras-corporeas-doradas-retroiluminadas-barcelona.jpg`

### Branding & Digital
- **IDNT®** — moda orgánica Barcelona. Slug: `idnt`. E-commerce Shopify + branding. Web: idnt.es
- **Kopess 23** — eventos & catering Barcelona. Slug: `kopess`. WordPress + SEO. Web: kopess23.com
- **Oxyzen Club** — club privado premium Eixample Barcelona. Slug: `oxyzen`. WordPress/Avada + branding gold-dark + GA4 17 eventos. Web: oxyzen.es. **No es wellness — es club privado adultos.**
- **Aurum Studio** — slug: `aurum` (caso de estudio existe en /work/[slug]/page.tsx pero NO está en work/page.tsx todavía)

## Notas sobre portfolio
- `ROTULOS_PROJECTS` en `work/page.tsx` son proyectos de ejemplo/placeholder con fotos de stock (Unsplash). No son clientes reales.
- Los clientes reales de rótulos (Santé, Novae, Lumina) están en `DIGITAL_PROJECTS` y tienen sus case studies en `/work/[slug]`.

## Estructura de archivos clave
- `src/app/HomeContent.tsx` — home page completa ('use client')
- `src/app/work/page.tsx` — portfolio index (ROTULOS_PROJECTS + DIGITAL_PROJECTS arrays)
- `src/app/work/[slug]/page.tsx` — casos de estudio individuales
- `src/app/rotulos/` — páginas de rótulos por tipo y zona
- `src/lib/analytics.ts` — todos los eventos GA4
- `src/app/layout.tsx` — layout global, schema.org, GA4 script
- `src/app/globals.css` — variables CSS, fuentes

## Decisiones ya tomadas (NO revertir)
- Bot/chat de Hermes eliminado — solo WhatsApp
- Testimonial eliminado — no hay suficientes reseñas reales
- Cards de rótulos en home → enlazar a páginas individuales (no a /rotulos)
- Hero: poster WebP (32KB), vídeo lazy-load tras window.load
- Google Fonts vía `<link>` estándar (next/font falla en local sin internet)
- Oxyzen descrito como club privado premium (no wellness)

## Fuentes de imagen externas usadas
- Kopess: kopess23.com/wp-content/uploads/...
- Oxyzen: oxyzen.es/wp-content/uploads/...
- Vídeo hero: d8j0ntlcm91z4.cloudfront.net/...

## Comandos útiles
```bash
npm run dev       # desarrollo local puerto 3000
npm run build     # build producción
git push origin claude/eloquent-maxwell-2kn7ug
```
