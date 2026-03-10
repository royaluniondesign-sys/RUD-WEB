import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import NewsletterForm from '@/components/NewsletterForm'

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const clients = ['BresicWhitney', 'Future Fur', 'Edlyn 1929', 'Marshall White', 'Location', "Wood's", 'Associated Concepts', 'Shadey']

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden bg-[var(--bg)]">
      {/* Animated blob background */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gray-100 dark:bg-gray-900 rounded-full blur-3xl opacity-60 animate-blob animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gray-50 dark:bg-gray-900 rounded-full blur-3xl opacity-50 animate-blob pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="container-custom relative flex-1 flex flex-col justify-center py-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--muted)]">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Available for new projects
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] mb-8 animate-fade-in-up animation-delay-100 max-w-5xl text-[var(--fg)]">
          Building bold brands with{' '}
          <span className="italic font-light">thoughtful</span> design
        </h1>

        <p className="text-base md:text-xl text-[var(--muted)] max-w-2xl mb-8 animate-fade-in-up animation-delay-200 leading-relaxed">
          Crafting exceptional brand identities and digital experiences that connect with people and drive real business results.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
          <Link href="/contact" className="btn-primary">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/work" className="btn-secondary">
            View Our Work
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-12 mt-16 animate-fade-in-up animation-delay-400">
          {[['12+', 'Years Experience'], ['100+', 'Brands Built'], ['98%', 'Client Retention']].map(([num, label]) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[var(--fg)]">{num}</p>
              <p className="text-sm text-[var(--muted)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client marquee */}
      <div className="border-t border-[var(--border)] py-5 overflow-hidden bg-[var(--bg)]">
        <div className="flex">
          <div className="flex items-center gap-16 animate-marquee marquee-track whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <span key={i} className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest flex-shrink-0">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────

const serviceIcons: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  identity: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  webdesign: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  dev: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  content: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  marketing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
    </svg>
  ),
}

function Services() {
  const services = [
    { num: '01', icon: 'strategy',   title: 'Brand Strategy',    desc: 'We dig into your market, audience, and competition before touching a single pixel. The result is a positioning platform that makes every future decision easier — and your business harder to ignore.' },
    { num: '02', icon: 'identity',   title: 'Visual Identity',   desc: 'Logo systems, colour palettes, and typography built to last — not trend. We design identities that work across every touchpoint: from your business card to a 40-metre billboard.' },
    { num: '03', icon: 'webdesign',  title: 'Web Design',        desc: 'Sites that look remarkable and perform measurably. We design in Figma with conversion in mind, then hand off pixel-perfect specs so nothing is lost in translation.' },
    { num: '04', icon: 'dev',        title: 'Development',       desc: 'Next.js, React, and clean TypeScript. We build sites that score 90+ on Lighthouse, load in under 2 seconds, and scale as your business grows.' },
    { num: '05', icon: 'content',    title: 'Content Creation',  desc: 'Art direction, copywriting, and photography briefs that tell your story consistently. We make sure your brand sounds as good as it looks.' },
    { num: '06', icon: 'marketing',  title: 'Digital Marketing', desc: 'SEO foundations built into every site we deliver. Plus social strategy, email campaigns, and paid media frameworks to put your new brand in front of the right people.' },
  ]

  return (
    <section className="section-padding bg-[var(--surface)]" id="services">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg)]">Services</h2>
            </div>
            <p className="text-[var(--muted)] max-w-sm leading-relaxed">
              End-to-end brand and digital solutions — from strategy through to launch and beyond.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
            {services.map((service) => (
              <div
                key={service.num}
                className="service-card bg-[var(--bg)] p-8 group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[var(--fg)]">{serviceIcons[service.icon]}</span>
                  <span className="text-xs font-mono text-[var(--border)] group-hover:text-[var(--muted)] transition-colors">
                    {service.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--fg)]">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Work ─────────────────────────────────────────────────────────────────────

function Work() {
  const projects = [
    {
      name: 'BresicWhitney',
      category: 'Web Design',
      year: '2025',
      desc: 'Complete digital overhaul for Sydney\'s leading real estate agency — 40% increase in qualified leads',
      image: '/work1.jpg',
      slug: 'bresicwhitney',
    },
    {
      name: 'Edlyn 1929',
      category: 'Branding',
      year: '2025',
      desc: 'Heritage rebranding for a 95-year-old food company — stocked in 200+ new retail locations post-launch',
      image: '/work2.jpg',
      slug: 'edlyn-1929',
    },
    {
      name: 'Future Fur',
      category: 'Branding',
      year: '2025',
      desc: 'Brand identity for a pet lifestyle startup — launched in 80+ boutiques within 6 months',
      image: '/work3.jpg',
      slug: 'future-fur',
    },
    {
      name: 'Marshall White',
      category: 'Web Design',
      year: '2025',
      desc: 'Premium digital presence for Melbourne\'s top luxury property agency — shortlisted for Australian Web Award',
      image: '/work4.jpg',
      slug: 'marshall-white',
    },
  ]

  return (
    <section className="section-padding bg-[var(--bg)]" id="work">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Selected Projects</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg)]">Our Work</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] transition-colors hover:gap-4 duration-200">
              View All Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1 — wide */}
          <ScrollReveal className="md:col-span-7">
            <Link href={`/work/${projects[0].slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom bg-gray-100 dark:bg-gray-900">
                <img src={projects[0].image} alt={projects[0].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between mt-4 gap-4">
                <div>
                  <p className="text-xs text-[var(--muted)] mb-1">{projects[0].category} · {projects[0].year}</p>
                  <h3 className="text-2xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">{projects[0].name}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{projects[0].desc}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2 text-[var(--fg)] mt-1 flex-shrink-0">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Project 2 — narrow */}
          <ScrollReveal className="md:col-span-5" delay={120}>
            <Link href={`/work/${projects[1].slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden img-hover-zoom bg-gray-100 dark:bg-gray-900">
                <img src={projects[1].image} alt={projects[1].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between mt-4 gap-4">
                <div>
                  <p className="text-xs text-[var(--muted)] mb-1">{projects[1].category} · {projects[1].year}</p>
                  <h3 className="text-2xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">{projects[1].name}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{projects[1].desc}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2 text-[var(--fg)] mt-1 flex-shrink-0">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Project 3 — narrow */}
          <ScrollReveal className="md:col-span-5" delay={80}>
            <Link href={`/work/${projects[2].slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom bg-gray-100 dark:bg-gray-900">
                <img src={projects[2].image} alt={projects[2].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between mt-4 gap-4">
                <div>
                  <p className="text-xs text-[var(--muted)] mb-1">{projects[2].category} · {projects[2].year}</p>
                  <h3 className="text-2xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">{projects[2].name}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{projects[2].desc}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2 text-[var(--fg)] mt-1 flex-shrink-0">→</span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Project 4 — wide */}
          <ScrollReveal className="md:col-span-7" delay={160}>
            <Link href={`/work/${projects[3].slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom bg-gray-100 dark:bg-gray-900">
                <img src={projects[3].image} alt={projects[3].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between mt-4 gap-4">
                <div>
                  <p className="text-xs text-[var(--muted)] mb-1">{projects[3].category} · {projects[3].year}</p>
                  <h3 className="text-2xl font-bold text-[var(--fg)] group-hover:underline decoration-2 underline-offset-4">{projects[3].name}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{projects[3].desc}</p>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2 text-[var(--fg)] mt-1 flex-shrink-0">→</span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section className="section-padding bg-[var(--surface)]" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--fg)]">
              A studio obsessed with craft and outcomes
            </h2>
            <p className="text-[var(--muted)] mb-5 leading-relaxed">
              RUD is a creative studio specialising in brand strategy, visual identity, and digital experiences. We partner with startups and established businesses to craft brands that don&apos;t just look great — they perform.
            </p>
            <p className="text-[var(--muted)] mb-8 leading-relaxed">
              Our team of designers, developers, and strategists work as one to deliver cohesive, impactful solutions — from brand foundations through to live digital products.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8 py-8 border-y border-[var(--border)]">
              {[['12+', 'Years Active'], ['100+', 'Brands Launched'], ['8', 'Countries']].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-[var(--fg)]">{num}</p>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-secondary">
              Meet the Team
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl img-hover-zoom">
                <img
                  src="/team1.jpg"
                  alt="RUD Studio Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--fg)] text-[var(--bg)] p-6 rounded-xl shadow-2xl">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-xs mt-1 opacity-70">Client Retention Rate</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      name: 'Tim Grace',
      role: 'Principal',
      company: 'BresicWhitney',
      initials: 'TG',
      color: 'bg-blue-600',
      text: 'After our rebrand with RUD, digital enquiries increased 40% in the first quarter. They understood the Sydney real estate market deeply and translated that into design that genuinely converts. The site loads faster than anything we\'ve had before.',
    },
    {
      name: 'Sophie Edlyn',
      role: 'Brand Director',
      company: 'Edlyn 1929',
      initials: 'SE',
      color: 'bg-amber-600',
      text: 'Modernising a 95-year-old brand without losing its soul is not easy. RUD handled every detail with care — from the logo system to the packaging guidelines. The response from our distributors and press has been exceptional.',
    },
    {
      name: 'James Harwood',
      role: 'CEO',
      company: 'Future Fur',
      initials: 'JH',
      color: 'bg-emerald-600',
      text: 'We were a seed-funded startup with zero brand equity trying to compete against established players. RUD gave us an identity that punches well above our weight. We\'ve since been stocked in over 80 boutiques and raised Series A.',
    },
  ]

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What our clients say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-2xl bg-white/5 flex flex-col gap-6 hover:border-white/25 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-white/80 text-base leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '€2,500',
      desc: 'Perfect for early-stage startups',
      features: ['Brand Strategy Session', 'Logo Design (3 concepts)', 'Color & Type System', 'Basic Brand Guidelines', 'Email Support'],
    },
    {
      name: 'Professional',
      price: '€7,500',
      desc: 'Our most popular package',
      features: ['Everything in Starter', 'Full Visual Identity', 'Website Design (5 pages)', 'Figma Handoff', 'Priority Support', '3 Rounds of Revisions'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '€15,000+',
      desc: 'Full end-to-end engagement',
      features: ['Everything in Professional', 'Website Development', 'Content Strategy & Copy', 'Brand Motion Assets', 'Marketing Collateral', 'Dedicated Account Manager'],
    },
  ]

  return (
    <section className="section-padding bg-[var(--bg)]" id="pricing">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Investment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg)]">Pricing</h2>
            <p className="text-[var(--muted)] mt-4 max-w-lg mx-auto">
              Transparent, fixed-scope packages. No surprises.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.featured
                    ? 'bg-[var(--fg)] text-[var(--bg)] shadow-2xl scale-105'
                    : 'bg-[var(--surface)] border border-[var(--border)]'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block mb-4 px-3 py-1 bg-white/20 text-xs font-medium rounded-full w-fit">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'opacity-60' : 'text-[var(--muted)]'}`}>
                  {plan.desc}
                </p>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,0.2)' : 'var(--border)'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : 'var(--fg)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? 'opacity-80' : 'text-[var(--muted)]'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3 text-center rounded-full text-sm font-medium transition-opacity hover:opacity-80 ${
                    plan.featured
                      ? 'bg-[var(--bg)] text-[var(--fg)]'
                      : 'bg-[var(--fg)] text-[var(--bg)]'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const homeFaqs = [
  { question: 'How long does a typical project take?', answer: 'Brand identity projects typically take 4–6 weeks. Website design and development projects range from 6–12 weeks depending on complexity and scope.' },
  { question: 'Do you offer revisions?', answer: 'Yes — all packages include 3 rounds of revisions. Additional rounds can be arranged at an hourly rate. We find 3 rounds is more than enough to get to the perfect result.' },
  { question: 'What is your payment process?', answer: 'We invoice 50% upfront to confirm your project date, with the remaining 50% due on final delivery. For larger engagements we can arrange milestone-based payments.' },
  { question: 'Can you work with existing brand assets?', answer: 'Absolutely. We can build on, refine, or evolve your existing brand assets rather than starting from scratch. We&apos;ll assess what you have and recommend the best approach.' },
  { question: 'Do you offer ongoing support after delivery?', answer: 'Yes — we offer monthly retainer packages for ongoing brand management, website updates, and marketing support. Many clients stay with us long-term.' },
]

function FAQ() {
  return (
    <section className="section-padding bg-[var(--surface)]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg)]">
                Got questions?
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion faqs={homeFaqs} />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-center text-[var(--muted)] text-sm mt-10">
              Still have questions?{' '}
              <Link href="/contact" className="text-[var(--fg)] font-medium underline underline-offset-2 hover:no-underline">
                Get in touch
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="section-padding bg-[var(--fg)]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--bg)] opacity-50 mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--bg)] mb-6 leading-tight">
              Let&apos;s build something great together.
            </h2>
            <p className="text-[var(--bg)] opacity-60 text-lg mb-10 max-w-xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--bg)] text-[var(--fg)] font-medium rounded-full hover:opacity-90 transition-opacity text-sm">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-[var(--bg)] border border-white/30 font-medium rounded-full hover:border-white/60 transition-colors text-sm">
                See Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <img src="/logo-rud.png" alt="RUD" className="h-10 mb-4 dark:invert" />
            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xs">
              Building bold brands with thoughtful design. Based in Spain, working globally.
            </p>
            <div className="mt-6">
              <p className="text-xs font-medium text-[var(--fg)] mb-2">Stay in the loop</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[['Work', '/work'], ['Services', '/services'], ['About', '/about'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-4">Services</h4>
            <ul className="space-y-3">
              {['Branding', 'Web Design', 'Development', 'Marketing', 'Content'].map(service => (
                <li key={service}>
                  <Link href="/services" className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>hello@rud.studio</li>
              <li>Spain</li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Instagram', href: 'https://instagram.com/royaluniondesign', icon: <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>, extra: <><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/></> },
                { label: 'LinkedIn', href: '#', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
                { label: 'Behance', href: '#', icon: <><path d="M3 9h8a4 4 0 0 1 0 8H3z"/><path d="M3 3h7a3.5 3.5 0 0 1 0 7H3z"/><line x1="14" y1="6" x2="20" y2="6"/></> },
              ].map(({ label, href, icon, extra }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {icon}{extra}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--muted)]">© 2026 RUD Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
