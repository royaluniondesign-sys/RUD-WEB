import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-rud.png" alt="RUD" className="h-10" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="text-sm font-medium hover:text-gray-600 transition">WORK</Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition">ABOUT</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-gray-600 transition">PRICING</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-600 transition">BLOG</Link>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function FAQ() {
  const faqs = [
    { q: 'How long does a project take?', a: 'Typical projects take 4-12 weeks depending on scope.' },
    { q: 'Do you offer revisions?', a: 'Yes, we offer 3 rounds of revisions on all our work.' },
    { q: 'What is your payment process?', a: 'We work with 50% upfront and 50% on completion.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we offer monthly retainer packages for ongoing work.' },
    { q: 'Do you work with international clients?', a: 'Yes, we work with clients all over the world.' },
    { q: 'What is your process?', a: 'We start with a discovery call, then create a proposal, and once approved, we begin the design process.' },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">FAQ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 text-center">
            Got questions? We&apos;ve got answers
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
