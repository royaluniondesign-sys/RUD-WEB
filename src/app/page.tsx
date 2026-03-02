'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Tipografía: Instrument Serif + Inter Tight (como Awake)
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            RUD<span className="text-gray-400">®</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link href="/#work" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">WORK</Link>
            <Link href="/#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">SERVICES</Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">ABOUT</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">BLOG</Link>
            <Link href="/#pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">PRICING</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105">
              Let&apos;s Talk
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero - ESTILO AWAKE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6 animate-fade-in">Creative Digital Agency</p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] animate-slide-up" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
            Building bold<br />
            <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>brands that</span><br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">stand out</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            At RUD, we help small startups tackle the world&apos;s biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-2">
              Get Started <span>→</span>
            </Link>
            <Link href="/#work" className="px-8 py-4 border border-gray-200 rounded-full hover:border-black transition-all hover:scale-105">
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <p className="text-5xl font-bold">150+</p>
              <p className="text-gray-500 text-sm mt-2">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">8+</p>
              <p className="text-gray-500 text-sm mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">25+</p>
              <p className="text-gray-500 text-sm mt-2">Design Awards</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"></path>
          </svg>
        </div>
      </section>

      {/* Services - ESTILO AWAKE */}
      <section id="services" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">What We Do</p>
            <h2 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
              Crafting exceptional<br />
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>digital experiences</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Brand Strategy', desc: 'Building strong brand foundations that resonate with your audience.', icon: '✦' },
              { title: 'Visual Identity', desc: 'Creating memorable logos and visual systems that capture your essence.', icon: '✦' },
              { title: 'Web Design', desc: 'Modern, responsive websites that engage users and convert.', icon: '✦' },
              { title: 'Development', desc: 'Clean, efficient code that brings your vision to life.', icon: '✦' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                <span className="text-gray-300 text-xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work - FOTOS REALES */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Our Work</p>
              <h2 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
                Featured<br />
                <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>Projects</span>
              </h2>
            </div>
            <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mt-8 md:mt-0">
              View All Projects <span>→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Future Fur', category: 'Branding', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
              { name: 'BresicWhitney', category: 'Web Design', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
              { name: 'Edlyn 1929', category: 'Branding', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80' },
              { name: 'Shadey', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80' }
            ].map((project, i) => (
              <Link href="/work" key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-white/80 text-sm">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - ESTILO AWAKE */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Facts & Numbers</p>
              <p className="text-8xl md:text-9xl font-bold">91%</p>
              <p className="text-xl text-gray-400 mt-4 mb-12">of clients recommend our design services.</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-800 p-6 rounded-xl">
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
                </div>
                <div className="border border-gray-800 p-6 rounded-xl">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-gray-400 text-sm mt-1">Project Delivery</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <blockquote>
                <p className="text-2xl md:text-3xl font-light leading-relaxed mb-6">&ldquo;RUD&apos;s expertise transformed my vision into reality! Their creativity and attention to detail exceeded all expectations.&rdquo;</p>
                <div>
                  <p className="font-bold text-lg">Ananya Shah</p>
                  <p className="text-gray-400">Founder, Chipsland</p>
                </div>
              </blockquote>
              <blockquote>
                <p className="text-xl leading-relaxed text-gray-300 mb-4">&ldquo;Their team delivered a stunning brand identity that perfectly captured our essence. Highly recommended!&rdquo;</p>
                <div>
                  <p className="font-bold text-lg">Sarah Mitchell</p>
                  <p className="text-gray-400">Marketing Head, TalentConnect</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Pricing</p>
            <h2 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
              Choose the plan that<br />
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>fits your needs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: '€2,500', desc: 'Perfect for small businesses', features: ['Brand Strategy', 'Logo Design', 'Basic Guidelines', 'Email Support'], featured: false },
              { name: 'Professional', price: '€7,500', desc: 'Most popular choice', features: ['Everything in Starter', 'Visual Identity', 'Website Design', 'Priority Support', '3 Revisions'], featured: true },
              { name: 'Enterprise', price: '€15,000+', desc: 'For large organizations', features: ['Everything in Professional', 'Full Website', 'Content Strategy', 'Marketing Assets', 'Dedicated Manager'], featured: false }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl ${plan.featured ? 'bg-black text-white' : 'bg-white border border-gray-200'} relative`}>
                {plan.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-4xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-black'}`}>{plan.price}</p>
                <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className={plan.featured ? 'text-green-400' : 'text-black'}>✓</span>
                      <span className={plan.featured ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`w-full py-3 text-center block rounded-full transition-colors ${plan.featured ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-800'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-16 md:p-24 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Inter Tight, sans-serif' }}>
              Let&apos;s create something<br />
              <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>amazing together</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
              Ready to elevate your brand? We&apos;d love to hear about your project.
            </p>
            <Link href="/contact" className="px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-block text-lg">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">RUD<span className="text-gray-500">®</span></h3>
              <p className="text-gray-400">Building bold brands with thoughtful design.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Branding</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Web Design</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@rud.studio</li>
                <li>Spain</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 RUD. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
