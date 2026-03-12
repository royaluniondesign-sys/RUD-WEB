'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import NewsletterForm from '@/components/NewsletterForm'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const clients = ['BresicWhitney', 'Future Fur', 'Edlyn 1929', 'Marshall White', 'Location', "Wood's", 'Associated Concepts', 'Shadey']

  return (
    <section className="hero-gradient min-h-screen flex flex-col pt-[72px] relative overflow-hidden">
      <div className="container-custom flex-1 flex flex-col justify-center py-16 md:py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-[#E5E2DC] rounded-full text-xs font-medium text-[#6B7280] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Available for new projects
          </span>
        </div>

        <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[1.03] tracking-[-0.035em] text-[#0A0A0A] mb-6 animate-fade-in-up animation-delay-100 max-w-5xl">
          Building bold brands
          <br />
          <span className="italic font-light text-[#6B7280]">with thoughtful design</span>
        </h1>

        <p className="text-base md:text-lg text-[#6B7280] max-w-xl mb-10 animate-fade-in-up animation-delay-200 leading-relaxed">
          Crafting exceptional brand identities and digital experiences that connect with people and drive real business results.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
          <Link href="/contact" className="btn-primary">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/work" className="btn-secondary">
            View Our Work
          </Link>
        </div>
      </div>

      {/* Client ticker */}
      <div className="border-t border-[#E5E2DC] bg-white/50 backdrop-blur-sm py-4 overflow-hidden">
        <p className="container-custom text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">
          Trusted by leading brands
        </p>
        <div className="flex">
          <div className="flex items-center gap-16 animate-marquee marquee-track whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <span key={i} className="text-sm font-medium text-[#C4BFB8] uppercase tracking-widest flex-shrink-0">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { num: '+12', label: 'Years of\nExperience' },
    { num: '+100', label: 'Brands\nBuilt' },
    { num: '98%', label: 'Client\nRetention' },
    { num: '+8', label: 'Countries\nServed' },
  ]

  return (
    <section className="bg-[#FAFAFA] py-16 border-y border-[#E5E2DC]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E2DC]">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="px-6 md:px-10 py-4 first:pl-0 last:pr-0">
                <p className="stat-number text-[#0A0A0A]">
                  <span className="text-[0.45em] align-super font-bold text-[#C4BFB8] mr-0.5">
                    {stat.num.startsWith('+') ? '+' : ''}
                  </span>
                  {stat.num.replace('+', '')}
                </p>
                <p className="text-xs text-[#9CA3AF] font-medium mt-1 uppercase tracking-wider whitespace-pre-line leading-tight">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const services = [
    { num: '01', title: 'Brand Strategy',    desc: 'We dig into your market, audience, and competition before touching a single pixel. The result is a positioning platform that makes every future decision easier — and your business harder to ignore.' },
    { num: '02', title: 'Visual Identity',   desc: 'Logo systems, colour palettes, and typography built to last — not trend. We design identities that work across every touchpoint: from your business card to a 40-metre billboard.' },
    { num: '03', title: 'Web Design',        desc: 'Sites that look remarkable and perform measurably. We design in Figma with conversion in mind, then hand off pixel-perfect specs so nothing is lost in translation.' },
    { num: '04', title: 'Development',       desc: 'Next.js, React, and clean TypeScript. We build sites that score 90+ on Lighthouse, load in under 2 seconds, and scale as your business grows.' },
    { num: '05', title: 'Content Creation',  desc: 'Art direction, copywriting, and photography briefs that tell your story consistently. We make sure your brand sounds as good as it looks.' },
    { num: '06', title: 'Digital Marketing', desc: 'SEO foundations built into every site we deliver. Plus social strategy, email campaigns, and paid media frameworks to put your new brand in front of the right people.' },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]" id="services">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Services</h2>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              All services
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="border-t border-[#E5E2DC]">
          {services.map((service, i) => (
            <ScrollReveal key={service.num} delay={i * 40}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="service-row w-full flex items-center justify-between py-6 group text-left"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-xs font-mono text-[#C4BFB8] w-6 flex-shrink-0">{service.num}</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0A0A0A] group-hover:text-[#6B7280] transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden md:block text-sm text-[#9CA3AF]">
                    {openIndex === i ? 'Close' : 'Learn more'}
                  </span>
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full border border-[#E5E2DC] transition-all duration-300 text-[#6B7280] ${openIndex === i ? 'rotate-45 border-[#0A0A0A] text-[#0A0A0A]' : 'group-hover:border-[#0A0A0A]'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </div>
              </button>
              {openIndex === i && (
                <div className="pb-6 pl-12 md:pl-16 pr-16 animate-fade-in-up">
                  <p className="text-[#6B7280] leading-relaxed max-w-2xl">{service.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] mt-4 hover:gap-4 transition-all duration-200">
                    Start a project
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

function Portfolio() {
  const projects = [
    {
      name: 'BresicWhitney',
      tags: ['Web Design', '2025'],
      desc: '+40% qualified leads — complete digital overhaul',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=90',
      slug: 'bresicwhitney',
      accent: '#1A2F45',
    },
    {
      name: 'Edlyn 1929',
      tags: ['Brand Identity', '2025'],
      desc: '200+ new retail locations after rebrand',
      image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?w=900&q=90',
      slug: 'edlyn-1929',
      accent: '#3D2B1F',
    },
    {
      name: 'Future Fur',
      tags: ['Branding', '2025'],
      desc: '80+ boutiques in 6 months — Series A raised',
      image: 'https://images.unsplash.com/photo-1623039405147-547794f92e9e?w=900&q=90',
      slug: 'future-fur',
      accent: '#1F2F1F',
    },
    {
      name: 'Marshall White',
      tags: ['Web Design', '2025'],
      desc: 'Shortlisted for Australian Web Award',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=90',
      slug: 'marshall-white',
      accent: '#222222',
    },
  ]

  return (
    <section className="section-padding bg-[#F0EDE6]" id="work">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Selected Projects</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Our Work</h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              All projects
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 80}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4"
                  style={{ background: project.accent }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400 rounded-2xl" />

                  {/* Arrow overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-md">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:underline underline-offset-4 decoration-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-1">{project.desc}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why RUD ──────────────────────────────────────────────────────────────────

function WhyRUD() {
  const reasons = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Strategy before design',
      desc: 'Every project starts with a deep dive into your market, your competitors, and your audience. We don\'t design logos — we build positioning platforms that happen to look exceptional.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: 'Direct, no account managers',
      desc: 'You work directly with the designer, developer, or strategist doing your project. No games of telephone. No agency bloat. Faster decisions and better results.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
      title: 'Measurable outcomes',
      desc: 'We design for results — not awards. +40% leads for BresicWhitney. 200+ new stockists for Edlyn 1929. Series A for Future Fur. Our work compounds over time.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Built to last, not to trend',
      desc: 'We\'ve been designing brands since 2013. We\'ve seen every visual trend come and go. What we build is timeless — identities and sites that still look right in five years.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Code that performs',
      desc: 'Every site we build scores 90+ on Google Lighthouse. Sub-2-second load times, WCAG accessibility, and SEO foundations — not as extras, but as baseline requirements.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: '98% client retention',
      desc: 'Most of our clients stay with us for years. Not because we lock them in, but because we build genuine partnerships — being the team they trust to evolve their brand as they grow.',
    },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Why RUD</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
                What makes us
                <br />
                <span className="italic font-light text-[#9CA3AF]">different</span>
              </h2>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#0A0A0A] hover:gap-4 transition-all duration-200">
              Our story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DC]">
            {reasons.map((r) => (
              <div key={r.title} className="bg-[#FAFAFA] p-8 hover:bg-white transition-colors duration-200">
                <div className="text-[#6B7280] mb-5">{r.icon}</div>
                <h3 className="font-bold text-[#0A0A0A] text-lg mb-3">{r.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      text: 'After our rebrand with RUD, digital enquiries increased 40% in the first quarter. They understood the Sydney real estate market deeply and translated that into design that genuinely converts.',
      name: 'Tim Grace',
      role: 'Principal, BresicWhitney',
      metric: '+40%',
      metricLabel: 'Digital Enquiries',
    },
    {
      text: 'Modernising a 95-year-old brand without losing its soul is not easy. RUD handled every detail with care — from the logo system to the packaging guidelines. The press response has been exceptional.',
      name: 'Sophie Edlyn',
      role: 'Brand Director, Edlyn 1929',
      metric: '200+',
      metricLabel: 'New Stockists',
    },
    {
      text: 'We were a seed-funded startup with zero brand equity. RUD gave us an identity that punches well above our weight. We\'ve since been stocked in over 80 boutiques and raised Series A funding.',
      name: 'James Harwood',
      role: 'CEO, Future Fur',
      metric: '80+',
      metricLabel: 'Boutique Stockists',
    },
  ]

  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">
              91% of clients recommend
              <br />
              <span className="italic font-light text-[#9CA3AF]">our services</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 flex flex-col gap-6 border border-[#E5E2DC] hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                <p className="text-[#374151] leading-relaxed flex-1 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#F0EDE6]">
                  <div>
                    <p className="font-semibold text-[#0A0A0A] text-sm">{t.name}</p>
                    <p className="text-[#9CA3AF] text-xs mt-0.5">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#0A0A0A] leading-tight">{t.metric}</p>
                    <p className="text-[10px] text-[#9CA3AF] uppercase tracking-wide">{t.metricLabel}</p>
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

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '€2,500',
      desc: 'Perfect for early-stage startups',
      features: ['Brand Strategy Session', 'Logo Design (3 concepts)', 'Colour & Type System', 'Basic Brand Guidelines', 'Email Support'],
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
    <section className="section-padding bg-[#FAFAFA]" id="pricing">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">Investment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-4">Pricing</h2>
            <p className="text-[#6B7280] max-w-sm mx-auto text-sm">Transparent, fixed-scope packages. No surprises.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="stagger">
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 flex flex-col border ${
                  plan.featured
                    ? 'bg-[#0A0A0A] text-[#FAFAFA] border-[#0A0A0A] shadow-2xl md:scale-[1.03]'
                    : 'bg-white border-[#E5E2DC]'
                }`}
              >
                {plan.featured && (
                  <span className="inline-block mb-4 px-3 py-1 bg-white/15 text-xs font-medium rounded-full w-fit text-white/80">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs mb-4 ${plan.featured ? 'text-white/50' : 'text-[#9CA3AF]'}`}>{plan.desc}</p>
                <p className="text-4xl font-bold mb-8 tracking-tight">{plan.price}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured ? 'rgba(255,255,255,0.12)' : '#F0EDE6'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured ? 'white' : '#0A0A0A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={plan.featured ? 'text-white/70' : 'text-[#6B7280]'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 text-center rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-80 ${
                    plan.featured
                      ? 'bg-white text-[#0A0A0A]'
                      : 'bg-[#0A0A0A] text-white'
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

// ─── Awards ───────────────────────────────────────────────────────────────────

function Awards() {
  const awards = [
    { year: '2024', name: 'Framer Awards', desc: 'Celebrated for cutting-edge interaction design' },
    { year: '2023', name: 'Dribbble Awards', desc: 'Recognised for creative excellence in branding' },
    { year: '2022', name: 'awwwards', desc: 'Honoured with Site of the Day — Best Design' },
  ]

  return (
    <section className="bg-[#0A0A0A] py-16">
      <div className="container-custom">
        <ScrollReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-8">Recognition</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1F2937]">
          {awards.map((award, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="py-8 md:py-0 md:px-10 first:pl-0 last:pr-0">
                <p className="text-xs font-mono text-[#4B5563] mb-3">{award.year}</p>
                <h3 className="text-xl font-bold text-white mb-2">{award.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{award.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const homeFaqs = [
  { question: 'How long does a typical project take?', answer: 'Brand identity projects typically take 4–6 weeks. Website design and development projects range from 6–12 weeks depending on complexity and scope.' },
  { question: 'Do you offer revisions?', answer: 'Yes — all packages include 3 rounds of revisions. Additional rounds can be arranged at an hourly rate. We find 3 rounds is more than enough to arrive at the perfect result.' },
  { question: 'What is your payment process?', answer: 'We invoice 50% upfront to confirm your project date, with the remaining 50% due on final delivery. For larger engagements we can arrange milestone-based payments.' },
  { question: 'Can you work with existing brand assets?', answer: "Absolutely. We can build on, refine, or evolve your existing brand assets rather than starting from scratch. We'll assess what you have and recommend the best approach." },
  { question: 'Do you offer ongoing support after delivery?', answer: 'Yes — we offer monthly retainer packages for ongoing brand management, website updates, and marketing support. Many clients stay with us long-term.' },
]

function FAQ() {
  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">
                Got questions?
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion faqs={homeFaqs} />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-[#6B7280] text-sm mt-10">
              Still have questions?{' '}
              <Link href="/contact" className="text-[#0A0A0A] font-medium underline underline-offset-2 hover:no-underline">
                Get in touch
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTA() {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Ready to start?</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Let&apos;s build something
              <br />
              <span className="italic font-light text-[#6B7280]">great together.</span>
            </h2>
            <p className="text-[#6B7280] text-base mb-10 max-w-lg leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0A0A0A] font-semibold rounded-full hover:bg-[#F0EDE6] transition-colors text-sm"
              >
                Start a Conversation
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:border-white/50 transition-colors text-sm"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1A1A1A] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <img src="/logo-rud-white.svg" alt="RÜD — Royal Union Design" className="h-10 mb-5 opacity-85" />
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Building bold brands with thoughtful design. Based in Spain, working globally.
            </p>
            <div className="mt-6">
              <p className="text-xs font-medium text-[#9CA3AF] mb-2">Stay in the loop</p>
              <NewsletterForm />
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[['Work', '/work'], ['Services', '/services'], ['About', '/about'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Services</h4>
            <ul className="space-y-3">
              {[['Branding', '/services#service-02'], ['Web Design', '/services#service-03'], ['Development', '/services#service-04'], ['Marketing', '/services#service-06'], ['Content', '/services#service-05']].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#4B5563] mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-[#6B7280]">
              <li>
                <a href="mailto:hello@rud.studio" className="hover:text-white transition-colors duration-200">
                  hello@rud.studio
                </a>
              </li>
              <li>Spain</li>
              <li className="text-[#4B5563]">Available worldwide</li>
            </ul>
            <div className="flex gap-2.5 mt-6">
              {[
                { label: 'Instagram', href: 'https://instagram.com/royaluniondesign' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Behance', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#2A2A2A] text-[#4B5563] hover:text-white hover:border-[#4B5563] transition-colors duration-200 text-xs font-medium"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#4B5563]">© 2026 RUD Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#4B5563] hover:text-[#6B7280] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#4B5563] hover:text-[#6B7280] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyRUD />
      <Testimonials />
      <Pricing />
      <Awards />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
