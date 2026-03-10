'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const projectTypes = [
  { id: 'branding',    label: 'Branding' },
  { id: 'web',         label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'marketing',   label: 'Digital Marketing' },
  { id: 'other',       label: 'Other' },
]

const budgets = [
  { id: 'starter',    label: '< €5,000' },
  { id: 'mid',        label: '€5,000 – €15,000' },
  { id: 'enterprise', label: '€15,000 – €30,000' },
  { id: 'custom',     label: '€30,000+' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/xpwzgvry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = 'w-full px-4 py-3.5 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--fg)] focus:outline-none transition-colors text-sm'
  const labelClass = 'block text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-2'

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--bg)]">
        <Navbar />
        <section className="pt-36 pb-20 min-h-screen flex items-center">
          <div className="container-custom text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-4">Message Received!</h1>
            <p className="text-[var(--muted)] text-lg mb-8 max-w-md mx-auto">
              Thanks for reaching out. We will get back to you within 24 hours.
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
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      <section className="pt-36 pb-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl">
            {/* Left column */}
            <div>
              <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--fg)] mb-6 leading-tight">
                Let&apos;s build something great.
              </h1>
              <p className="text-[var(--muted)] text-lg leading-relaxed mb-10">
                Tell us about your project and we will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-1">Email</p>
                  <a href="mailto:hello@rud.studio" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors text-sm">
                    hello@rud.studio
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-1">Location</p>
                  <p className="text-[var(--muted)] text-sm">Spain — working globally</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--fg)] mb-3">Social</p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/royaluniondesign/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @royaluniondesign
                    </a>
                    <a
                      href="https://www.facebook.com/royaluniondesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Royal Union Design
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>What are you interested in? *</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type.id })}
                        className={`px-4 py-2 text-sm rounded-full border transition-all duration-150 ${
                          formData.projectType === type.id
                            ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]'
                            : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Project budget *</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map(budget => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: budget.id })}
                        className={`px-4 py-2 text-sm rounded-full border transition-all duration-150 ${
                          formData.budget === budget.id
                            ? 'bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]'
                            : 'bg-transparent text-[var(--muted)] border-[var(--border)] hover:border-[var(--fg)] hover:text-[var(--fg)]'
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Tell us about your project *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="Share a bit about your goals, timeline, and any specifics..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
