'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import NewsletterForm from '@/components/NewsletterForm'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-[72px] relative overflow-hidden">
      <div className="container-custom py-16 md:py-24">
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
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { num: '$0', label: 'AI Operational\nCost' },
    { num: '100%', label: 'Local\nInfrastructure' },
    { num: '2', label: 'Specialized\nSubsidiaries' },
    { num: '6', label: 'Core\nServices' },
  ]

  return (
    <section className="bg-[#FAFAFA] py-16 border-y border-[#E5E2DC]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5E2DC]">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="px-6 md:px-10 py-4 first:pl-0 last:pr-0">
                <p className="stat-number text-[#0A0A0A]">
                  {stat.num}
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
    { num: '06', title: 'AI Automation',     desc: 'Intelligent workflows, autonomous assistants, and AI-powered systems built on local infrastructure via CHARIOT.' },
  ]

  return (
    <section className="section-padding bg-[#FAFAFA]" id="services">
      <div className="container-custom">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-3">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight">Services</h2>
              <p className="text-xs text-[#9CA3AF] mt-3 leading-relaxed">
                RUD operates through two specialized subsidiaries:<br />
                <span className="text-[#6B7280] font-medium">IDNT</span> — Brand &amp; Visual Identity &nbsp;·&nbsp; <span className="text-[#6B7280] font-medium">CHARIOT</span> — AI Automation &amp; Intelligent Assistants
              </p>
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
      name: 'IDNT',
      subtitle: 'Brand Identity System',
      tags: ['Branding', '2025'],
      desc: 'Full visual identity system developed under RUD\'s IDNT subsidiary.',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      slug: 'idnt',
    },
    {
      name: 'CHARIOT',
      subtitle: 'AI Automation Suite',
      tags: ['AI', '2025'],
      desc: 'Autonomous AI assistant product built for agency-scale automation.',
      gradient: 'linear-gradient(135deg, #0f3460 0%, #533483 100%)',
      slug: 'chariot',
    },
    {
      name: 'RUD Web Platform',
      subtitle: null,
      tags: ['Web Design', '2025'],
      desc: 'Digital presence for Royal Union Design — strategy, design and development.',
      gradient: 'linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)',
      slug: 'rud-web',
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
              <div className="group block">
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 group-hover:opacity-90 transition-opacity duration-300"
                  style={{ background: project.gradient }}
                >
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-white/20 text-6xl font-bold tracking-tight leading-none">{project.name}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">
                      {project.name}{project.subtitle ? ` — ${project.subtitle}` : ''}
                    </h3>
                    <p className="text-sm text-[#6B7280] mt-1">{project.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Coming Soon slot */}
          <ScrollReveal delay={3 * 80}>
            <div className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4 border border-dashed border-[#D1CDC6] bg-[#F8F5F0] flex items-center justify-center">
                <p className="text-sm font-medium text-[#C4BFB8] uppercase tracking-widest">Coming Soon</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="tag-pill">2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#C4BFB8]">Next Project</h3>
                <p className="text-sm text-[#C4BFB8] mt-1">In progress.</p>
              </div>
            </div>
          </ScrollReveal>
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

// ─── Work Speaks ──────────────────────────────────────────────────────────────

function WorkSpeaks() {
  return (
    <section className="section-padding bg-[#F0EDE6]">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-6">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] tracking-tight leading-tight">
              We let our work
              <br />
              <span className="italic font-light text-[#9CA3AF]">speak for itself.</span>
            </h2>
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
            <img src="/logo-rud-white.svg" alt="RÜD — Royal Union Design" className="h-10 mb-5" style={{ opacity: 0.9 }} />
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Building bold brands with thoughtful design. Based in Barcelona, Spain, working globally.
            </p>
            <p className="text-[#4B5563] text-xs mt-3 tracking-wide">IDNT · CHARIOT</p>
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
              <li>Barcelona, Spain</li>
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
      <WorkSpeaks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
