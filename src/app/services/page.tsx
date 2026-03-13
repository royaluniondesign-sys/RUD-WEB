import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Services — Brand Strategy, Visual Identity & Web Design',
  description: 'RUD Studio offers brand strategy, visual identity design, web design, web development, content creation and digital marketing for startups and established businesses in Spain and globally.',
  keywords: ['brand strategy agency', 'visual identity design', 'web design agency Spain', 'logo design studio', 'brand identity package', 'web development Next.js', 'digital marketing agency Europe'],
  openGraph: {
    title: 'Brand & Web Design Services — RUD Studio',
    description: 'End-to-end brand and digital solutions. From strategy to launch and beyond. Fixed-scope, transparent pricing.',
  },
}

const services = [
  {
    num: '01',
    title: 'Brand Strategy',
    tagline: 'Clarity before creativity.',
    description: [
      'Most brand problems are strategy problems in disguise. The logo that feels off, the website that doesn\'t convert, the marketing that doesn\'t land — these are symptoms of an unclear strategic foundation, not design failures.',
      'Our brand strategy process starts with deep discovery: your market, your audience, your competitors, and the genuine white space where your brand can own a meaningful position. We then build a strategic platform — positioning statement, messaging architecture, brand personality — that every future creative decision is tested against.',
      'Clients who invest in strategy before design consistently produce better work, spend less on revisions, and build brands that remain coherent as they scale.',
    ],
    deliverables: [
      'Market & competitive audit',
      'Target audience definition',
      'Positioning statement',
      'Brand messaging architecture',
      'Brand personality & tone of voice guide',
      'Creative brief for visual identity',
    ],
    price: 'From €2,500',
    project: { name: 'IDNT', slug: 'idnt' },
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
  },
  {
    num: '02',
    title: 'Visual Identity',
    tagline: 'Built to last. Designed to work everywhere.',
    description: [
      'A visual identity is not a logo. It\'s a complete system — a logo family, colour palette, typographic system, iconography, photography direction, and the rules that govern how all of these elements work together across every touchpoint.',
      'We design identities that are built to last rather than to trend. Every element is tested against real-world applications — from a phone screen to the side of a delivery van — before it\'s finalised. The result is a system that your team can execute confidently and consistently, without needing to come back to us for every small application.',
      'Every visual identity project includes a comprehensive brand guidelines document that covers every use case your team will encounter.',
    ],
    deliverables: [
      'Logo system (primary, secondary, icon variants)',
      'Colour palette (digital + print specifications)',
      'Typography system & usage rules',
      'Brand pattern & texture assets',
      'Photography & art direction guidelines',
      'Comprehensive brand guidelines (PDF + Figma)',
      'Production-ready files in all formats',
    ],
    price: 'From €5,000',
    project: { name: 'CHARIOT', slug: 'chariot' },
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    num: '03',
    title: 'Web Design',
    tagline: 'Sites that look remarkable and perform measurably.',
    description: [
      'We design websites in Figma from the ground up — starting with information architecture and user flows, moving through wireframes, and arriving at pixel-perfect visual design that has been tested across every screen size before a single line of code is written.',
      'Our design process is deeply informed by conversion: every layout decision is made with a clear goal in mind. We\'re not designing pages — we\'re designing journeys, and every step of that journey should move the user closer to taking the action you need them to take.',
      'Every web design project includes a full handoff package in Figma with organised components, design tokens, and developer notes — so nothing is lost when the file moves from us to the development team.',
    ],
    deliverables: [
      'Information architecture & site mapping',
      'Responsive wireframes (mobile-first)',
      'Full visual design (all breakpoints)',
      'Interactive prototype',
      'Figma handoff with components & tokens',
      'Developer specification documentation',
    ],
    price: 'From €4,000',
    project: { name: 'RUD Web Platform', slug: 'rud-web' },
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169217?w=1200&q=80',
  },
  {
    num: '04',
    title: 'Web Development',
    tagline: 'Fast, accessible, and built to scale.',
    description: [
      'We build in Next.js and React — the same stack that powers some of the world\'s highest-performing marketing sites and applications. Every site we build scores 90+ on Google Lighthouse for performance, accessibility, best practices, and SEO. That\'s not a target — it\'s our baseline.',
      'We write clean, well-documented TypeScript that your internal team or any future developer can pick up and work with. We don\'t lock clients in with proprietary systems or obscure builds. Every project includes thorough handoff documentation.',
      'For content-heavy sites, we implement headless CMS solutions — typically Sanity or Contentful — that give your marketing team the ability to update content without touching code.',
    ],
    deliverables: [
      'Full Next.js / React development',
      'Mobile-first, cross-browser QA',
      'CMS integration (Sanity / Contentful)',
      'Core Web Vitals optimisation',
      'Accessibility audit (WCAG 2.1 AA)',
      'Deployment & hosting setup',
      '30 days post-launch support',
    ],
    price: 'From €6,000',
    project: { name: 'IDNT', slug: 'idnt' },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
  },
  {
    num: '05',
    title: 'Content Creation',
    tagline: 'Your brand should sound as good as it looks.',
    description: [
      'Design can only do so much if the words are wrong. We offer copywriting and content strategy services that work in conjunction with our design work — ensuring that your brand voice is as considered and consistent as your visual identity.',
      'For photography and video, we work with a trusted network of photographers and directors who understand brand aesthetics. We brief them, art direct the shoots, and ensure that every asset produced fits within your brand system.',
      'Content services are most powerful when started at the same time as visual identity work — when the tone of voice and the visual language are developed together, the result is a brand that feels genuinely coherent.',
    ],
    deliverables: [
      'Brand tone of voice guide',
      'Website copywriting',
      'Social media copy templates',
      'Photography brief & art direction',
      'Shoot production & direction',
      'Asset editing & delivery',
    ],
    price: 'From €2,000',
    project: { name: "Wood's", slug: 'woods' },
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=1200&q=80',
  },
  {
    num: '06',
    title: 'Digital Marketing',
    tagline: 'Put your new brand in front of the right people.',
    description: [
      'A strong brand is the foundation — but it needs to be seen to create value. We offer digital marketing services that build on the brand work we\'ve done together, ensuring the strategy, messaging, and visual identity are executed consistently across every channel.',
      'We don\'t offer generic digital marketing. Our work is always grounded in the brand strategy: the positioning and messaging we developed together inform every campaign brief, ad creative, and piece of organic content we produce.',
      'For most clients, we recommend starting with the foundations: a properly structured website with SEO built in, a content calendar, and a simple paid media framework. From there, we expand based on what the data shows is working.',
    ],
    deliverables: [
      'SEO audit & on-page optimisation',
      'Content strategy & editorial calendar',
      'Social media strategy & templates',
      'Paid search & social setup',
      'Monthly reporting & optimisation',
      'Email marketing setup & templates',
    ],
    price: 'From €1,500/month',
    project: { name: 'Location', slug: 'location' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[var(--bg)]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] leading-tight mb-8">
              Services
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
              End-to-end brand and digital solutions — from strategy through to launch and beyond. We work best as a long-term partner, but every engagement starts with a clear scope and a fixed price.
            </p>
          </div>

          {/* Service quick nav */}
          <div className="flex flex-wrap gap-3 mt-12">
            {services.map((s) => (
              <a
                key={s.num}
                href={`#service-${s.num}`}
                className="px-4 py-2 border border-[var(--border)] rounded-full text-sm text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors duration-200"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.num}
          id={`service-${service.num}`}
          className={`section-padding ${index % 2 === 0 ? 'bg-[var(--bg)]' : 'bg-[var(--surface)]'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] rounded px-2 py-1">
                    {service.num}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-2">{service.title}</h2>
                <p className="text-lg text-[var(--muted)] italic mb-8">{service.tagline}</p>

                <div className="space-y-4 mb-10">
                  {service.description.map((para, i) => (
                    <p key={i} className="text-[var(--muted)] leading-relaxed">{para}</p>
                  ))}
                </div>

                <div className="mb-8">
                  <p className="text-xs font-medium text-[var(--fg)] uppercase tracking-widest mb-4">Deliverables</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[var(--muted)]">
                        <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="7" fill="var(--border)"/>
                          <path d="M4 7l2 2 4-4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-2xl font-bold text-[var(--fg)]">{service.price}</span>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm"
                  >
                    Start a Project
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href={`/work/${service.project.slug}`}
                    className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors underline underline-offset-2"
                  >
                    See {service.project.name} case study →
                  </Link>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-[var(--fg)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--bg)] opacity-50 mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--bg)] mb-6 leading-tight">
              Not sure which service you need?
            </h2>
            <p className="text-[var(--bg)] opacity-60 text-lg mb-10 max-w-xl leading-relaxed">
              Tell us about your business and your goals. We&apos;ll recommend the right starting point — and be honest if we&apos;re not the right fit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--bg)] text-[var(--fg)] font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
              >
                Get in Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-[var(--bg)] border border-white/30 font-medium rounded-full hover:border-white/60 transition-colors text-sm"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
