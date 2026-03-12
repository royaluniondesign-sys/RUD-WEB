import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'About — Brand Agency Founded in 2013',
  description: 'RUD Studio is a brand identity and web design agency based in Spain with 12+ years of experience building brands across Europe and Australia. Meet our team and our process.',
  keywords: ['brand agency Spain', 'branding studio Europe', 'creative agency about', 'brand design team', 'agencia branding España'],
  openGraph: {
    title: 'About RUD Studio — Brand Identity Agency, Spain',
    description: 'Founded in 2013, RUD Studio has launched 100+ brands across 8 countries. Strategy-first. Small team. Long-term partnerships.',
  },
}

export default function About() {
  const stats = [
    { num: '12+', label: 'Years of Experience', sub: 'Building brands since 2013' },
    { num: '100+', label: 'Brands Launched', sub: 'Across 8 countries worldwide' },
    { num: '98%', label: 'Client Retention', sub: 'Long-term partnerships' },
    { num: '8', label: 'Countries', sub: 'Europe, Australia, Americas' },
  ]

  const values = [
    {
      title: 'Craft Over Speed',
      desc: "We never rush work to hit a deadline. If the timeline doesn't allow for quality, we push back and have an honest conversation. Every client deserves our best work — not a version of it.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
    {
      title: 'Radical Honesty',
      desc: "We tell clients what they need to hear, not what they want to hear. If an idea isn't right, we say so and explain why. That directness is what long-term partnerships are built on.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      title: 'Outcomes, Not Outputs',
      desc: "A logo is not a brand. A website is not a digital strategy. We measure our success by what happens after we deliver — leads generated, brands recognised, businesses grown.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
    },
    {
      title: 'Small Team, Full Attention',
      desc: "We don't have account managers who pass messages between you and the people doing the work. You collaborate directly with the designers, strategists, and developers responsible for your project.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
  ]

  const team = [
    {
      name: 'Alex Ruiz',
      role: 'Creative Director',
      bio: '12 years designing for ambitious brands across Europe and Australia. Formerly at Wolff Olins and Moving Brands. Believes the best ideas come from asking uncomfortable questions.',
      image: '/team1.jpg',
    },
    {
      name: 'Maria Santos',
      role: 'Brand Strategist',
      bio: 'Ex-management consultant turned brand builder. Spent 6 years advising FMCG and retail businesses before moving agency-side. Helps clients find the clarity they didn\'t know they were missing.',
      image: '/team2.jpg',
    },
    {
      name: 'Daniel Park',
      role: 'Lead Developer',
      bio: 'Full-stack engineer with a design eye. Builds sites in Next.js and React that score 95+ on Lighthouse and hold up under real traffic. Cares deeply about accessibility and performance.',
      image: '/team3.jpg',
    },
    {
      name: 'Sofia Torres',
      role: 'UX Designer',
      bio: 'Background in cognitive psychology, which makes her unusually good at understanding why people do what they do online — and designing around it. Obsessed with the space between aesthetics and function.',
      image: '/team4.jpg',
    },
  ]

  const process = [
    {
      num: '01',
      phase: 'Discovery',
      desc: 'We start by understanding your business deeply — not just the brief, but the market, the competition, the internal challenges, and the opportunities nobody has named yet. This phase produces the strategic platform that everything else is built on.',
      duration: '1–2 weeks',
    },
    {
      num: '02',
      phase: 'Strategy',
      desc: 'From discovery, we develop a clear strategic direction: positioning, messaging, and a defined creative territory. You approve this before we touch a single design file. This is where most agencies skip — we never do.',
      duration: '1 week',
    },
    {
      num: '03',
      phase: 'Design',
      desc: 'We develop three distinct creative directions and present them in context — not abstract mood boards. You choose the one that resonates, and we develop it to completion through a structured feedback process.',
      duration: '2–6 weeks',
    },
    {
      num: '04',
      phase: 'Delivery',
      desc: 'Final files, handoff documentation, and brand guidelines delivered in a format your team can actually use. For web projects, we include a thorough walkthrough and 30 days of post-launch support.',
      duration: '1 week',
    },
  ]

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="section-padding pt-32 bg-[var(--bg)]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] leading-tight mb-8">
              A studio built on craft, strategy, and results.
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
              We are a creative agency building bold brands with thoughtful design — helping businesses communicate their unique story and connect with their audience in ways that move the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-8">
                How we got here
              </h2>
              <div className="space-y-5 text-[var(--muted)] leading-relaxed">
                <p>
                  RUD was founded in 2013 with a simple belief: that great design should be accessible to ambitious businesses at every stage — not just the ones that could afford top-tier agency retainers. The early years were spent doing exactly that: building brands for startups and small businesses who cared deeply about how they showed up in the world.
                </p>
                <p>
                  Over the next decade, the studio grew — in capability, in client ambition, and in geography. What started as a two-person design practice became a full-service creative team spanning strategy, design, and development. Our client roster expanded from Spanish startups to established businesses across Australia, the UK, and the Americas.
                </p>
                <p>
                  Through all of it, the thing that has stayed constant is the way we work: small, focused teams. Direct relationships. A commitment to craft that means we only take on as much work as we can do properly. We have turned down faster growth to preserve the quality of what we deliver — and the clients who stay with us for years tell us it was the right call.
                </p>
                <p>
                  Today, RUD is a team of eight: four core studio members plus a trusted network of photographers, copywriters, and specialists we bring in when a project demands it. Based in Spain, working globally.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                  <p className="text-4xl font-bold text-[var(--fg)] mb-1">{stat.num}</p>
                  <p className="font-semibold text-[var(--fg)] text-sm mb-1">{stat.label}</p>
                  <p className="text-xs text-[var(--muted)]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)]">
              How we work
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--border)]">
            {values.map((value) => (
              <div key={value.title} className="bg-[var(--bg)] p-10">
                <div className="text-[var(--fg)] mb-5">{value.icon}</div>
                <h3 className="text-xl font-bold text-[var(--fg)] mb-3">{value.title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="section-padding bg-[#F0EDE6]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">The Studio</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6 leading-tight">
                A small studio that punches well above its weight
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  RUD operates as a focused team of four core members — a creative director, a brand strategist, a lead developer, and a UX designer — supported by a trusted network of photographers, copywriters, illustrators, and motion designers we bring in when a project demands it.
                </p>
                <p>
                  This structure means you get the quality and specialisation of a full-service agency without the overhead, the account managers, or the hours billed for internal meetings you were never part of.
                </p>
                <p>
                  We are deliberately selective about the clients we take on. We work best with founders, marketing directors, and brand managers who care deeply about quality — and who understand that good design is an investment, not a cost.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Brand Strategy', detail: 'Market positioning & messaging' },
                { label: 'Visual Identity', detail: 'Logo systems, colour & type' },
                { label: 'Web Design', detail: 'Figma-to-pixel, conversion-led' },
                { label: 'Development', detail: 'Next.js · 90+ Lighthouse' },
                { label: 'Content Creation', detail: 'Art direction & copywriting' },
                { label: 'Digital Marketing', detail: 'SEO, social & paid media' },
              ].map(({ label, detail }) => (
                <div key={label} className="bg-white rounded-xl p-5 border border-[#E5E2DC]">
                  <p className="font-semibold text-[#0A0A0A] text-sm mb-1">{label}</p>
                  <p className="text-xs text-[#9CA3AF]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] max-w-lg">
              A process designed for clarity — not complexity
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.num}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs font-mono text-[var(--muted)] border border-[var(--border)] rounded px-2 py-1">
                    {step.num}
                  </span>
                  <div className="flex-1 h-px bg-[var(--border)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--fg)] mb-3">{step.phase}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{step.desc}</p>
                <p className="text-xs font-medium text-[var(--fg)] border border-[var(--border)] rounded-full px-3 py-1 inline-block">
                  {step.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--fg)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-[var(--bg)] opacity-50 mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--bg)] mb-6 leading-tight">
              Want to work together?
            </h2>
            <p className="text-[var(--bg)] opacity-60 text-lg mb-10 max-w-xl leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--bg)] text-[var(--fg)] font-medium rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
