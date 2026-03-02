'use client'

import { useState } from 'react'
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

const projectTypes = [
  { id: 'branding', label: 'Branding' },
  { id: 'web', label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'other', label: 'Other' },
]

const budgets = [
  { id: 'starter', label: '< €5,000' },
  { id: 'professional', label: '€5,000 - €15,000' },
  { id: 'enterprise', label: '€15,000 - €30,000' },
  { id: 'custom', label: '€30,000+' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We have received your message and will get back to you within 24 hours.
            </p>
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Let&apos;s Talk</h1>
            <p className="text-xl text-gray-600 mb-12">
              Love to hear from you, Get in touch
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">What are you interested in? *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({...formData, projectType: type.id})}
                      className={`py-3 px-4 border text-sm transition ${
                        formData.projectType === type.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project budget *</label>
                <div className="grid grid-cols-2 gap-3">
                  {budgets.map((budget) => (
                    <button
                      key={budget.id}
                      type="button"
                      onClick={() => setFormData({...formData, budget: budget.id})}
                      className={`py-3 px-4 border text-sm transition ${
                        formData.budget === budget.id
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {budget.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-black focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="w-full btn-primary justify-center">
                Send Message
              </button>
            </form>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Or reach us directly:</p>
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@rud.studio" className="text-gray-600 hover:text-black">hello@rud.studio</a>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
