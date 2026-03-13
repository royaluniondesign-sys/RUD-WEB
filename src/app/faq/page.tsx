import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Brand identity projects typically take 4–6 weeks. Website design and development projects range from 6–12 weeks depending on complexity. We will give you a clear timeline in our proposal before any work begins.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes — all packages include 3 rounds of revisions. Additional rounds can be arranged at an hourly rate. In our experience, 3 rounds is more than enough to reach the perfect result.',
  },
  {
    question: 'What is your payment process?',
    answer: 'We invoice 50% upfront to confirm your project date, with the remaining 50% due on final delivery. For larger engagements (€10k+) we can arrange milestone-based payments across the project.',
  },
  {
    question: 'Can you work with existing brand assets?',
    answer: 'Absolutely. We can build on, refine, or evolve your existing brand assets rather than starting from scratch. We will assess what you have during the discovery phase and recommend the best path forward.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes — we work with clients across Europe, Australia, and the Americas. All communication happens via video call and our project management tools, so location is never a barrier.',
  },
  {
    question: 'What is your working process?',
    answer: 'We start with a discovery call to understand your goals and context. We then create a detailed proposal with scope, timeline, and pricing. Once approved, we move through strategy, design, feedback, and final delivery in clearly defined phases.',
  },
  {
    question: 'Do you offer ongoing support after delivery?',
    answer: 'Yes — we offer monthly retainer packages for ongoing brand management, website maintenance, and marketing support. Many clients stay with us as long-term partners well beyond the initial project.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'You will receive all source files (Figma, AI, EPS), plus ready-to-use export packages for print and digital — PNG, SVG, PDF. You own everything we create for you.',
  },
]

export default function FAQ() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">FAQ</p>
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--fg)] mb-6">
              Got questions?
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-xl leading-relaxed">
              Everything you need to know about working with us. Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" className="text-[var(--fg)] underline underline-offset-2 hover:no-underline">
                Get in touch.
              </Link>
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mt-16">
            <ScrollReveal delay={100}>
              <FAQAccordion faqs={faqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
