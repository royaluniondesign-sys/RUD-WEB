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

export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '€2,500', desc: 'Perfect for small businesses', features: ['Brand Strategy', 'Logo Design', 'Basic Guidelines', 'Email Support'] },
    { name: 'Professional', price: '€7,500', desc: 'Most popular choice', features: ['Everything in Starter', 'Visual Identity', 'Website Design', 'Priority Support', '3 Revisions'], featured: true },
    { name: 'Enterprise', price: '€15,000+', desc: 'For large organizations', features: ['Everything in Professional', 'Full Website Development', 'Content Strategy', 'Marketing Assets', 'Dedicated Manager'] },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 text-center">
            Pick the plan that fits your start-up
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`p-8 ${plan.featured ? 'bg-black text-white' : 'bg-white border border-gray-200'} relative`}>
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1">Most Popular</span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-4xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-black'}`}>{plan.price}</p>
                <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={plan.featured ? 'text-green-400' : 'text-black'}>✓</span>
                      <span className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full py-3 text-center block ${plan.featured ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'} transition`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
