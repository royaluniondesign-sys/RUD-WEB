import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const team = [
  { name: 'Alex Ruiz', role: 'Creative Director', image: '/team1.jpg' },
  { name: 'Maria Santos', role: 'Brand Strategist', image: '/team2.jpg' },
  { name: 'Daniel Park', role: 'Lead Developer', image: '/team3.jpg' },
  { name: 'Sofia Torres', role: 'UX Designer', image: '/team4.jpg' },
]

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6 max-w-4xl leading-tight">
              A studio built on craft, strategy, and results.
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
              We are a creative agency building bold brands with thoughtful design — helping businesses communicate their unique story and connect with their audience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-6">Our Story</h2>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                Founded over 12 years ago, RUD began as a small design studio with a single belief: that great design should be accessible to ambitious businesses at every stage.
              </p>
              <p className="text-[var(--muted)] mb-4 leading-relaxed">
                Today we are a full-service creative agency — a tight-knit team of designers, developers, and strategists working together to build brands that stand out and perform.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                From early-stage startups finding their voice to established businesses ready to evolve — we partner with clients who care about doing things properly.
              </p>
            </ScrollReveal>

            {/* Stats grid */}
            <ScrollReveal delay={150} className="stagger">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['12+', 'Years of Experience', 'Building brands since 2013'],
                  ['100+', 'Brands Launched', 'Across 8 countries worldwide'],
                  ['98%', 'Client Retention', 'Long-term partnerships'],
                  ['∞', 'Possibilities', 'Every project is unique'],
                ].map(([num, title, sub]) => (
                  <div key={title} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                    <p className="text-4xl font-bold text-[var(--fg)] mb-1">{num}</p>
                    <p className="text-sm font-medium text-[var(--fg)]">{title}</p>
                    <p className="text-xs text-[var(--muted)] mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-custom">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-3">The Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)]">Meet the people behind the work</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-4 img-hover-zoom bg-[var(--border)]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-[var(--fg)]">{member.name}</h3>
                  <p className="text-sm text-[var(--muted)]">{member.role}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--bg)]">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-6">Want to work together?</h2>
            <p className="text-[var(--muted)] max-w-md mx-auto mb-8">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
