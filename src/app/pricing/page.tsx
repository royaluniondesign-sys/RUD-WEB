import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

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

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Investment</p>
              <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">Pricing</h1>
              <p className="text-xl text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
                Transparent, fixed-scope packages. No surprises, no hourly billing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger" delay={100}>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 flex flex-col ${
                    plan.featured
                      ? 'bg-[var(--fg)] text-[var(--bg)] shadow-2xl md:scale-105'
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

          {/* FAQ teaser */}
          <ScrollReveal delay={200}>
            <p className="text-center text-[var(--muted)] text-sm mt-16">
              Have questions about our packages?{' '}
              <Link href="/faq" className="text-[var(--fg)] font-medium underline underline-offset-2 hover:no-underline">
                Read the FAQ
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-[var(--fg)] font-medium underline underline-offset-2 hover:no-underline">
                get in touch
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
