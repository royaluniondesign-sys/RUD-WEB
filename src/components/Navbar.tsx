'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/work', label: 'Trabajo' },
  { href: '/services', label: 'Servicios' },
  { href: '/about', label: 'Nosotros' },
  { href: '/pricing', label: 'Precios' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => setOpen(false), [path])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#F7F5F1]/96 backdrop-blur-md border-b border-[#E2DDD7] shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-[68px]">
          <Link href="/" className="group shrink-0">
            <img src="/logo-rud.svg" alt="RUD — Agencia creativa Barcelona" className="h-7 w-auto transition-opacity group-hover:opacity-55" />
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {NAV.map(({ href, label }) => {
              const active = path === href || path.startsWith(href + '/')
              return (
                <Link key={href} href={href} className={`text-sm font-medium relative pb-0.5 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#0A0908] after:transition-all after:duration-250 ${
                  active ? 'text-[#0A0908] after:w-full' : 'text-[#6B7280] hover:text-[#0A0908] after:w-0 hover:after:w-full'
                }`}>{label}</Link>
              )
            })}
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden md:inline-flex btn-primary py-2 px-5 text-sm">Hablemos</Link>
            <button onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-full border border-[#E2DDD7] hover:border-[#0A0908] transition-colors"
              aria-label="Menú">
              <span className={`block w-[14px] h-[1.5px] bg-[#0A0908] rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-[1.5px] bg-[#0A0908] rounded transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-[14px]'}`} />
              <span className={`block w-[14px] h-[1.5px] bg-[#0A0908] rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#F7F5F1] border-b border-[#E2DDD7]">
          <div className="container-custom py-4 flex flex-col gap-1">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} className={`py-3 text-sm font-medium border-b border-[#F0EDE6] last:border-0 ${path === href ? 'text-[#0A0908]' : 'text-[#6B7280]'}`}>{label}</Link>
            ))}
            <Link href="/contact" className="btn-primary mt-4 justify-center">Hablemos</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
