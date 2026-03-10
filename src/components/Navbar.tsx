'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkModeToggle from './DarkModeToggle'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/logo-rud.png"
              alt="RUD"
              className="h-10 transition-transform duration-200 group-hover:scale-105 dark:invert"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-200 hover:after:w-full ${
                  pathname === href
                    ? 'text-[var(--fg)] after:w-full'
                    : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <Link
              href="/contact"
              className="hidden md:inline-flex px-5 py-2.5 bg-[var(--fg)] text-[var(--bg)] text-sm font-medium rounded-full hover:opacity-80 transition-opacity duration-200"
            >
              Let&apos;s Talk
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`block w-5 h-px bg-[var(--fg)] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`block h-px bg-[var(--fg)] transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'}`} />
              <span className={`block w-5 h-px bg-[var(--fg)] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 border-t border-[var(--border)]' : 'max-h-0'
        } bg-[var(--bg)]`}
      >
        <div className="container-custom py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium py-1 ${
                pathname === href ? 'text-[var(--fg)]' : 'text-[var(--muted)]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex w-fit px-5 py-2.5 bg-[var(--fg)] text-[var(--bg)] text-sm font-medium rounded-full"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}
