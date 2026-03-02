import Link from 'next/link'
import Image from 'next/image'

// Navigation Component
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

          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-50" />
      
      <div className="container-custom relative">
        <div className="max-w-4xl">
          <p className="text-sm font-medium text-gray-500 mb-6 animate-fade-in-up">
            Loved by 1000+ big and small brands around the world
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-fade-in-up animation-delay-100">
            Building bold brands with thoughtful design
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-12 animate-fade-in-up animation-delay-200">
            Crafting exceptional, well experienced & technology driven strategies to drive impactful results
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Collaborate
            </Link>
            <Link href="/#work" className="btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Section
function Services() {
  const services = [
    { title: 'Brand Strategy', desc: 'We define your brand positioning and voice', icon: '✦' },
    { title: 'Visual Identity', desc: 'Logo, colors, typography, and guidelines', icon: '✦' },
    { title: 'Web Design', desc: 'Modern, responsive, and user-friendly', icon: '✦' },
    { title: 'Development', desc: 'Clean code with cutting-edge tech', icon: '✦' },
    { title: 'Content Creation', desc: 'Photos, videos, and copywriting', icon: '✦' },
    { title: 'Digital Marketing', desc: 'SEO, social media, and paid ads', icon: '✦' },
  ]

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help brands stand out in a crowded marketplace with strategic design and creative solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-100 hover:border-black transition-all duration-300 card-hover"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:underline decoration-2 underline-offset-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Work/Projects Section
function Work() {
  const projects = [
    { 
      name: 'TechFlow App', 
      category: 'UI/UX Design', 
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      slug: 'techflow-app'
    },
    { 
      name: 'Nova Fashion', 
      category: 'Brand Identity', 
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      slug: 'nova-fashion'
    },
    { 
      name: 'GreenLife Eco', 
      category: 'UI/UX Design', 
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      slug: 'greenlife-eco'
    },
    { 
      name: 'Artisan Coffee', 
      category: 'Packaging Design', 
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      slug: 'artisan-coffee'
    },
  ]

  return (
    <section className="section-padding bg-gray-50" id="work">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 max-w-xl">
              A selection of projects we have worked on for our amazing clients.
            </p>
          </div>
          <Link href="/work" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all">
            View All Work <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={`/work/${project.slug}`} 
              key={index}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4 img-hover-zoom">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                    {project.name}
                  </h3>
                </div>
                <span className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="btn-secondary">
            View All Work
          </Link>
        </div>
      </div>
    </section>
  )
}

// About Section
function About() {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We are a creative agency building bold brands
            </h2>
            <p className="text-gray-600 mb-6">
              RUD is a creative agency specializing in brand strategy, visual identity, and digital experiences. We help brands communicate their unique story and connect with their audience.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of designers, developers, and strategists work together to create impactful solutions that drive results.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8">
              <p className="text-4xl font-bold">12+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Testimonials
function Testimonials() {
  const testimonials = [
    { name: 'Sarah Johnson', role: 'CEO, Future Fur', text: 'RUD transformed our brand completely. The results exceeded our expectations!' },
    { name: 'Michael Chen', role: 'Director, BresicWhitney', text: 'Professional, creative, and delivered on time. Highly recommend!' },
    { name: 'Emma Wilson', role: 'Founder, Edlyn 1929', text: 'Our new brand identity has received incredible feedback from customers.' },
  ]

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          What our clients say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 border border-white/20">
              <p className="text-lg mb-6">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing Section
function Pricing() {
  const plans = [
    { name: 'Starter', price: '€2,500', desc: 'Perfect for small businesses', features: ['Brand Strategy', 'Logo Design', 'Basic Guidelines', 'Email Support'] },
    { name: 'Professional', price: '€7,500', desc: 'Most popular choice', features: ['Everything in Starter', 'Visual Identity', 'Website Design', 'Priority Support', '3 Revisions'], featured: true },
    { name: 'Enterprise', price: '€15,000+', desc: 'For large organizations', features: ['Everything in Professional', 'Full Website Development', 'Content Strategy', 'Marketing Assets', 'Dedicated Manager'] },
  ]

  return (
    <section className="section-padding bg-gray-50" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pick the plan that fits your start-up
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 ${plan.featured ? 'bg-black text-white' : 'bg-white border border-gray-200'} relative`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-4xl font-bold mb-4 ${plan.featured ? 'text-white' : 'text-black'}`}>
                {plan.price}
              </p>
              <p className={`mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                {plan.desc}
              </p>
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
  )
}

// FAQ Section
function FAQ() {
  const faqs = [
    { q: 'How long does a project take?', a: 'Typical projects take 4-12 weeks depending on scope.' },
    { q: 'Do you offer revisions?', a: 'Yes, we offer 3 rounds of revisions on all our work.' },
    { q: 'What is your payment process?', a: 'We work with 50% upfront and 50% on completion.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we offer monthly retainer packages for ongoing work.' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Got questions? We&apos;ve got answers
        </h2>

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
  )
}

// CTA Section
function CTA() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Let&apos;s create something amazing together
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Start your creative journey with us today
        </p>
        <Link href="/contact" className="btn-primary">
          Start Your Project
        </Link>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/logo-rud.png" alt="RUD" className="h-10 mb-4" />
            <p className="text-gray-600">
              Building bold brands with thoughtful design
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/work" className="hover:text-black">Work</Link></li>
              <li><Link href="/about" className="hover:text-black">About</Link></li>
              <li><Link href="/pricing" className="hover:text-black">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/contact" className="hover:text-black">Branding</Link></li>
              <li><Link href="/contact" className="hover:text-black">Web Design</Link></li>
              <li><Link href="/contact" className="hover:text-black">Development</Link></li>
              <li><Link href="/contact" className="hover:text-black">Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>hello@rud.studio</li>
              <li>Spain</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2026 RUD. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-black">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-black">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
