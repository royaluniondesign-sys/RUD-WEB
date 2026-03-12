'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E5E2DC]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo-rud.png"
              alt="RÜD — Royal Union Design"
              className="h-10 transition-opacity duration-200 group-hover:opacity-60"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#0A0A0A] after:transition-all after:duration-300 ${
                    active
                      ? 'text-[#0A0A0A] after:w-full'
                      : 'text-[#6B7280] hover:text-[#0A0A0A] after:w-0 hover:after:w-full'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn-primary py-2.5 px-5 text-sm"
            >
              Let&apos;s Talk
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-full border border-[#E5E2DC] hover:border-[#0A0A0A] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <span className={`block w-4 h-0.5 bg-[#0A0A0A] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-[#0A0A0A] rounded transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'}`} />
              <span className={`block w-4 h-0.5 bg-[#0A0A0A] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-b border-[#E5E2DC] shadow-sm">
          <div className="container-custom py-5 flex flex-col gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + '/')
              return (
                <Link
                  key={href}
                  href={href}
                  className={`py-3 text-sm font-medium border-b border-[#F0EDE6] last:border-0 ${
                    active ? 'text-[#0A0A0A]' : 'text-[#6B7280]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <Link href="/contact" className="btn-primary mt-4 justify-center text-sm">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
