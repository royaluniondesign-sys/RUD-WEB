'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  if (submitted) {
    return (
      <p className="text-sm text-[var(--muted)]">
        Thanks! We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-full outline-none focus:border-[var(--fg)] transition-colors text-[var(--fg)] placeholder:text-[var(--muted)]"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-[var(--fg)] text-[var(--bg)] text-sm font-medium rounded-full hover:opacity-80 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  )
}
