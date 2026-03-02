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
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xpwzgvry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setSubmitting(false)
    }
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

              <button type="submit" disabled={submitting} className="w-full btn-primary justify-center disabled:opacity-50">
                {submitting ? 'Sending...' : 'Send Message'}
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
              
              {/* Social Media */}
              <div className="mt-8 flex gap-4">
                <a 
                  href="https://www.instagram.com/royaluniondesign/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @royaluniondesign
                </a>
                <a 
                  href="https://www.facebook.com/royaluniondesign" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Royal Union Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
