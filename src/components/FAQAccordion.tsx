'use client'
import { useState } from 'react'

interface FAQ { question: string; answer: string }
export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-[#E2DDD7]">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left group"
          >
            <span className="text-base md:text-lg font-medium text-[#0A0908] group-hover:text-black transition-colors">
              {faq.question}
            </span>
            <span className={`shrink-0 w-7 h-7 rounded-full border border-[#E2DDD7] flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-[#0A0908] border-[#0A0908] rotate-45' : ''}`}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <line x1="6" y1="1" x2="6" y2="11" stroke={open === i ? 'white' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="1" y1="6" x2="11" y2="6" stroke={open === i ? 'white' : '#0A0908'} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </button>
          <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <p className="pt-4 pb-1 text-sm md:text-base leading-relaxed text-[#6B7280]">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
