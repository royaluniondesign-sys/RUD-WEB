'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/rotulos',  label: 'Rótulos' },
  { href: '/work',     label: 'Trabajo' },
  { href: '/services', label: 'Servicios' },
  { href: '/about',    label: 'Nosotros' },
  { href: '/pricing',  label: 'Precios' },
  { href: '/blog',     label: 'Blog' },
]

export default function Navbar({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const path = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [path])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // isLight: over the video hero, not yet scrolled
  const isLight = light && !scrolled && !open
  const navBg   = scrolled || open ? 'bg-[#F7F5F1] border-b border-[#E2DDD7]' : 'bg-transparent'

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}
           style={{ height: 68 }}>
        <div className="container-custom h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="RUD Studio — Inicio">
            <img
              src={isLight ? '/logo-rud-white.svg' : '/logo-rud.svg'}
              alt="RUD"
              style={{ height: 26, width: 'auto', transition: 'opacity .2s' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV.map(({ href, label }) => {
              const active = path === href || path.startsWith(href + '/')
              return (
                <Link key={href} href={href}
                  data-active={active}
                  className={`nav-link text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                    isLight
                      ? `text-white/80 hover:text-white hover:bg-white/10 ${active ? 'text-white' : ''}`
                      : `${active ? 'text-[#0A0908]' : 'text-[#6B7280] hover:text-[#0A0908]'}`
                  }`}>
                  {label}
                </Link>
              )
            })}
          </div>

          {/* CTA desktop + hamburger mobile */}
          <div className="flex items-center gap-3">
            <Link href="/contact"
              className={`hidden md:inline-flex items-center transition-all duration-200 ${
                isLight
                  ? 'border border-white/40 text-white hover:bg-white/10 rounded-full font-medium text-sm'
                  : 'btn-primary'
              }`}
              style={{ padding: '.55rem 1.2rem', fontSize: '.85rem' }}>
              Hablemos
            </Link>

            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className={`md:hidden flex flex-col items-center justify-center rounded-full border ${
                isLight ? 'border-white/40 bg-white/10' : 'bg-white border-[#E2DDD7]'
              }`}
              style={{ width: 40, height: 40, gap: 5, flexShrink: 0 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  height: 1.5,
                  background: isLight ? 'white' : '#0A0908',
                  borderRadius: 2,
                  transition: 'all .25s',
                  width: i === 1 ? (open ? 0 : 16) : 16,
                  opacity: i === 1 && open ? 0 : 1,
                  transform: i === 0 && open ? 'rotate(45deg) translate(4.5px, 4.5px)'
                            : i === 2 && open ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                            : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="mobile-nav md:hidden">
          <div className="container-custom py-6 flex flex-col h-full">
            <nav className="flex flex-col">
              {NAV.map(({ href, label }) => (
                <Link key={href} href={href}
                  className="py-4 text-lg font-semibold border-b border-[#E2DDD7] text-[#0A0908]">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full"
                style={{ padding: '1rem', fontSize: '1rem' }}>
                Hablemos de tu proyecto
              </Link>
              <p className="text-center text-xs text-[#9CA3AF] mt-5">
                hello@rud.studio · Barcelona
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
