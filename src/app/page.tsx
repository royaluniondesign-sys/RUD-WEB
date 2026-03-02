'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Custom cursor
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <div 
      className={`fixed pointer-events-none] transition-transform duration z-[9999-200`}
      style={{ 
        left: position.x, 
        top: position.y,
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`
      }}
    >
      <div className="w-4 h-4 bg-black rounded-full"></div>
    </div>
  )
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center text-2xl font-bold tracking-tight">
            RUD<span className="text-gray-400">®</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="hover:text-gray-600 transition-colors">Work</Link>
            <Link href="/#services" className="hover:text-gray-600 transition-colors">Services</Link>
            <Link href="/#about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/#pricing" className="hover:text-gray-600 transition-colors">Pricing</Link>
            <Link href="/contact" className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Let&apos;s Talk
            </Link>
          </div>
          <button className="md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

// Hero Section
function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Creative Digital Agency</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Building bold<br />
            <span className="font-instrument-serif italic">brands that</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">stand out</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            At RUD, we help small startups tackle the world&apos;s biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-flex items-center gap-2">
              Get Started
              <span>→</span>
            </Link>
            <Link href="/#work" className="px-8 py-4 border border-gray-300 rounded-full hover:border-black transition-all hover:scale-105">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '8+', label: 'Years Experience' },
            { number: '25+', label: 'Design Awards' }
          ].map((stat, i) => (
            <div key={i} className={`text-center transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-4xl md:text-5xl font-bold">{stat.number}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"></path>
        </svg>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    { title: 'Brand Strategy', desc: 'Building strong brand foundations that resonate with your audience and drive growth.', icon: '🎯' },
    { title: 'Visual Identity', desc: 'Creating memorable logos and visual systems that capture your brand essence.', icon: '✨' },
    { title: 'Web Design', desc: 'Modern, responsive websites that engage users and convert visitors.', icon: '💻' },
    { title: 'Development', desc: 'Clean, efficient code that brings your vision to life with precision.', icon: '⚡' }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting exceptional<br />
            <span className="font-instrument-serif italic">digital experiences</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine creativity with technology to deliver impactful results for ambitious brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-black rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to transform your brand?</h3>
          <p className="text-gray-400 mb-8">Let&apos;s create something amazing together.</p>
          <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all inline-block">
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  )
}

// Work Section
function Work() {
  const projects = [
    { name: 'Future Fur', category: 'Branding', image: '/work1.jpg' },
    { name: 'BresicWhitney', category: 'Web Design', image: '/work2.jpg' },
    { name: 'Edlyn 1929', category: 'Branding', image: '/work3.jpg' },
    { name: 'Shadey', category: 'UI/UX Design', image: '/work4.jpg' }
  ]

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured<br /><span className="font-instrument-serif italic">Projects</span>
            </h2>
          </div>
          <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mt-4 md:mt-0">
            View All Projects <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Link href={project.href || '#'} key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-white/80 text-sm">{project.category}</p>
                <h3 className="text-white text-2xl font-bold">{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Facts & Numbers</p>
            <p className="text-7xl md:text-8xl font-bold mb-4">91%</p>
            <p className="text-xl text-gray-400 mb-8">of clients recommend our design services.</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-gray-800 p-6 rounded-xl">
                <p className="text-3xl font-bold mb-2">50+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="border border-gray-800 p-6 rounded-xl">
                <p className="text-3xl font-bold mb-2">100%</p>
                <p className="text-gray-400 text-sm">Project Delivery</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="space-y-8">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
              &ldquo;RUD&apos;s expertise transformed my vision into reality! Their creativity and attention to detail exceeded all expectations.&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-lg">Ananya Shah</p>
              <p className="text-gray-400">Founder, Chipsland</p>
            </div>

            <blockquote className="text-xl leading-relaxed text-gray-300">
              &ldquo;Their team delivered a stunning brand identity that perfectly captured our essence. Highly recommended!&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-lg">Sarah Mitchell</p>
              <p className="text-gray-400">Marketing Head, TalentConnect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing
function Pricing() {
  const plans = [
    { 
      name: 'Starter', 
      price: '$2,500', 
      desc: 'Perfect for small businesses',
      features: ['Brand Strategy', 'Logo Design', 'Basic Guidelines', 'Email Support']
    },
    { 
      name: 'Professional', 
      price: '$7,500', 
      desc: 'Most popular choice',
      features: ['Everything in Starter', 'Visual Identity', 'Website Design', 'Priority Support', '3 Revisions'],
      featured: true
    },
    { 
      name: 'Enterprise', 
      price: '$15,000+', 
      desc: 'For large organizations',
      features: ['Everything in Professional', 'Full Website', 'Content Strategy', 'Marketing Assets', 'Dedicated Manager']
    }
  ]

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the plan that<br />
            <span className="font-instrument-serif italic">fits your needs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl ${plan.featured ? 'bg-black text-white' : 'bg-white border border-gray-200'} relative`}>
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-4xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-black'}`}>{plan.price}</p>
              <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
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
  )
}

// FAQ
function FAQ() {
  const faqs = [
    { q: 'How long does a project take?', a: 'Typical projects take 4-12 weeks depending on scope and complexity.' },
    { q: 'Do you offer revisions?', a: 'Yes, we offer 3 rounds of revisions on all our work to ensure your satisfaction.' },
    { q: 'What is your payment process?', a: 'We work with 50% upfront and 50% on completion for most projects.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we offer monthly retainer packages for ongoing design and development needs.' }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Got questions?<br />
            <span className="font-instrument-serif italic">We&apos;ve got answers</span>
          </h2>
          
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl overflow-hidden group">
                <summary className="p-6 cursor-pointer flex justify-between items-center font-bold">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s create something<br />
            <span className="font-instrument-serif italic">amazing together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to elevate your brand? We&apos;d love to hear about your project and explore how we can help.
          </p>
          <Link href="/contact" className="px-10 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 inline-block text-lg">
            Start Your Project →
          </Link>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">RUD<span className="text-gray-500">®</span></h3>
            <p className="text-gray-400">Building bold brands with thoughtful design.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Development</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Marketing</Link></li>
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
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
