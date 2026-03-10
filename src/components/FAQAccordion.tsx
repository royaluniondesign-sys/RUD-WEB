'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQItem[]
  dark?: boolean
}

export default function FAQAccordion({ faqs, dark = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-[var(--border)]">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left"
            >
              <span className={`text-base md:text-lg font-medium ${dark ? 'text-white' : 'text-[var(--fg)]'}`}>
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                } ${dark ? 'border-white/30 text-white' : 'border-[var(--border)] text-[var(--fg)]'}`}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className={`pt-3 text-sm md:text-base leading-relaxed ${dark ? 'text-white/70' : 'text-[var(--muted)]'}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
