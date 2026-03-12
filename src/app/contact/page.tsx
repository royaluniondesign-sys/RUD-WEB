'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

const projectTypes = [
  { id: 'branding',    label: 'Brand Identity' },
  { id: 'web',         label: 'Web Design' },
  { id: 'development', label: 'Development' },
  { id: 'strategy',    label: 'Brand Strategy' },
  { id: 'marketing',   label: 'Digital Marketing' },
  { id: 'other',       label: 'Not sure yet' },
]

const budgets = [
  { id: 'starter',    label: '< €5,000' },
  { id: 'mid',        label: '€5,000 – €15,000' },
  { id: 'enterprise', label: '€15,000 – €30,000' },
  { id: 'custom',     label: '€30,000+' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('https://formspree.io/f/xpwzgvry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New project enquiry from ${formData.name} — ${formData.projectType || 'General'}`,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json()
        setError(data?.error || 'Something went wrong. Please email us directly at hello@rud.studio')
      }
    } catch {
      setError('Network error. Please email us directly at hello@rud.studio')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-white border border-[#E5E2DC] rounded-xl text-[#0A0A0A] placeholder:text-[#C4BFB8] focus:border-[#0A0A0A] focus:outline-none transition-colors duration-200 text-sm'
  const labelClass = 'block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B7280] mb-2'

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FAFAFA]">
        <Navbar />
        <section className="pt-36 pb-20 min-h-screen flex items-center">
          <div className="container-custom">
            <div className="max-w-lg">
              <div className="w-14 h-14 bg-[#F0EDE6] rounded-2xl flex items-center justify-center mb-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-4">Message sent</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-4 leading-tight">
                We&apos;ll be in touch within 24 hours.
              </h1>
              <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
                Thanks for reaching out. We&apos;ve received your message and will respond to <strong className="text-[#0A0A0A]">{formData.email}</strong> shortly.
              </p>
              <div className="flex gap-3">
                <Link href="/" className="btn-primary">Back to Home</Link>
                <Link href="/work" className="btn-secondary">See Our Work</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 max-w-6xl">

            {/* Left — info */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-5">Get in Touch</p>
              <h1 className="text-5xl md:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight tracking-tight">
                Let&apos;s build something
                <br />
                <span className="italic font-light text-[#9CA3AF]">great together.</span>
              </h1>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-12 max-w-md">
                Tell us about your project. We respond to every enquiry within 24 hours, and we&apos;re happy to jump on a call first to see if we&apos;re the right fit.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0EDE6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-1">Email</p>
                    <a href="mailto:hello@rud.studio" className="text-[#0A0A0A] font-medium hover:text-[#6B7280] transition-colors">
                      hello@rud.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0EDE6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-1">Location</p>
                    <p className="text-[#0A0A0A] font-medium">Spain — working globally</p>
                    <p className="text-[#9CA3AF] text-sm mt-0.5">Available for projects worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F0EDE6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-1">Response time</p>
                    <p className="text-[#0A0A0A] font-medium">Within 24 hours</p>
                    <p className="text-[#9CA3AF] text-sm mt-0.5">Monday to Friday</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-3">Follow us</p>
                  <a
                    href="https://www.instagram.com/royaluniondesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#0A0A0A] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @royaluniondesign
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E5E2DC] shadow-sm">
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
                    <label className={labelClass}>Email Address *</label>
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
                  <label className={labelClass}>Company / Brand Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className={inputClass}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className={labelClass}>What do you need? *</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type.id })}
                        className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-150 ${
                          formData.projectType === type.id
                            ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                            : 'bg-transparent text-[#6B7280] border-[#E5E2DC] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Approximate budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map(budget => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: budget.id })}
                        className={`px-4 py-2 text-xs font-medium rounded-full border transition-all duration-150 ${
                          formData.budget === budget.id
                            ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                            : 'bg-transparent text-[#6B7280] border-[#E5E2DC] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
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
                    placeholder="Tell us about your goals, your timeline, your audience, and any challenges you're facing. The more context the better."
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#C4BFB8]">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
