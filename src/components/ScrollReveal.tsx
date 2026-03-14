'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props { children: ReactNode; delay?: number; className?: string }

export default function ScrollReveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          io.unobserve(el)
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -20px 0px' }
    )
    // Forzar activación inmediata si ya está en viewport al montar
    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) {
      setTimeout(() => el.classList.add('visible'), delay)
    } else {
      io.observe(el)
    }
    return () => io.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
