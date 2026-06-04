'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackNavCTA } from '@/lib/analytics'

const ROTULOS_SUBMENU = [
  { href: '/rotulos/neon-led-barcelona',           label: 'Neón LED',           desc: 'Cualquier forma o tipografía' },
  { href: '/rotulos/cajas-de-luz-barcelona',        label: 'Cajas de Luz',       desc: 'Máxima visibilidad nocturna' },
  { href: '/rotulos/letras-corporeas-barcelona',    label: 'Letras Corpóreas',   desc: 'Aluminio, metacrilato, madera' },
  { href: '/rotulos/vinilos-escaparate-barcelona',  label: 'Vinilos Escaparate', desc: 'Instalación en 48-72h' },
  { href: '/rotulos/senaletica-interior-barcelona', label: 'Señalética Interior','desc': 'Corporativa y hotelera' },
  { href: '/rotulos/publicidad-exterior-barcelona', label: 'Publicidad Exterior', desc: 'Lonas, banderolas, vallas' },
]

const NAV = [
  { href: '/rotulos',  label: 'Rótulos', hasDropdown: true },
  { href: '/work',     label: 'Trabajo' },
  { href: '/services', label: 'Servicios' },
  { href: '/about',    label: 'Nosotros' },
  { href: '/pricing',  label: 'Precios' },
  { href: '/blog',     label: 'Blog' },
]

export default function Navbar({ light = false }: { light?: boolean }) {
  const [scrolled, setScrolled]                   = useState(false)
  const [open, setOpen]                           = useState(false)
  const [rotulosHover, setRotulosHover]           = useState(false)
  const [mobileRotulosOpen, setMobileRotulosOpen] = useState(false)
  const path           = usePathname()
  const hoverTimeout   = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (open) setOpen(false)
    if (mobileRotulosOpen) setMobileRotulosOpen(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isLight = light && !scrolled && !open
  const navBg   = scrolled || open ? 'bg-[#F7F5F1] border-b border-[#E2DDD7]' : 'bg-transparent'

  const handleRotulosEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setRotulosHover(true)
  }
  const handleRotulosLeave = () => {
    hoverTimeout.current = setTimeout(() => setRotulosHover(false), 120)
  }

  return (
    <>
      <a href="#main-content"
        style={{ position:'absolute', left:'-9999px', top:'auto', width:1, height:1, overflow:'hidden', zIndex:9999 }}
        onFocus={e => Object.assign(e.currentTarget.style, { position:'fixed', left:'1rem', top:'1rem', width:'auto', height:'auto', overflow:'visible', padding:'0.5rem 1rem', background:'#0A0908', color:'#fff', borderRadius:8, fontWeight:600, fontSize:14 })}
        onBlur={e => Object.assign(e.currentTarget.style, { position:'absolute', left:'-9999px', width:1, height:1, overflow:'hidden' })}>
        Ir al contenido principal
      </a>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}
           style={{ height: 68 }}>
        <div className="container-custom h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="RUD Studio — Inicio">
            <img
              src={isLight ? '/logo-rud-web-blanco.svg' : '/logo-rud-web.svg'}
              alt="RUD"
              style={{ height: 26, width: 'auto', transition: 'opacity .2s' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV.map(({ href, label, hasDropdown }) => {
              const active = path === href || path.startsWith(href + '/')
              if (hasDropdown) {
                return (
                  <div key={href}
                    style={{ position: 'relative' }}
                    onMouseEnter={handleRotulosEnter}
                    onMouseLeave={handleRotulosLeave}
                    onKeyDown={e => {
                      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setRotulosHover(true) }
                      if (e.key === 'Escape') setRotulosHover(false)
                    }}>
                    <Link href={href}
                      data-active={active}
                      aria-haspopup="true"
                      aria-expanded={rotulosHover}
                      onFocus={handleRotulosEnter}
                      onBlur={handleRotulosLeave}
                      className={`nav-link text-sm font-medium transition-colors px-2 py-1 rounded-md inline-flex items-center gap-1 ${
                        isLight
                          ? `text-white/80 hover:text-white hover:bg-white/10 ${active ? 'text-white' : ''}`
                          : `${active ? 'text-[#0A0908]' : 'text-[#6B7280] hover:text-[#0A0908]'}`
                      }`}>
                      {label}
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                        style={{ opacity: 0.5, transition: 'transform 0.2s', transform: rotulosHover ? 'rotate(180deg)' : 'rotate(0)' }}>
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>

                    {/* Dropdown */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#0A0908',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 14,
                        padding: '1rem',
                        width: 380,
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        opacity: rotulosHover ? 1 : 0,
                        visibility: rotulosHover ? 'visible' : 'hidden',
                        transition: 'opacity 0.18s ease, visibility 0.18s ease',
                        pointerEvents: rotulosHover ? 'auto' : 'none',
                        zIndex: 100,
                      }}>
                      {/* Arrow */}
                      <div style={{
                        position: 'absolute',
                        top: -6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 12, height: 6,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          width: 10, height: 10,
                          background: '#0A0908',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transform: 'rotate(45deg)',
                          margin: '4px auto 0',
                        }} />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                        {ROTULOS_SUBMENU.map(item => (
                          <Link key={item.href} href={item.href}
                            style={{
                              display: 'block',
                              padding: '0.75rem 0.875rem',
                              borderRadius: 10,
                              textDecoration: 'none',
                              background: path === item.href ? 'rgba(255,255,255,0.08)' : 'transparent',
                              transition: 'background 0.15s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                            onMouseLeave={e => (e.currentTarget.style.background = path === item.href ? 'rgba(255,255,255,0.08)' : 'transparent')}>
                            <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{item.label}</p>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{item.desc}</p>
                          </Link>
                        ))}
                      </div>
                      <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                        <Link href="/rotulos"
                          style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontWeight: 500 }}>
                          Ver todos los rótulos →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }
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
              onClick={() => trackNavCTA('Hablemos')}
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
              {/* Rótulos with expandable sub-menu */}
              <div>
                <button
                  onClick={() => setMobileRotulosOpen(o => !o)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    borderBottom: mobileRotulosOpen ? 'none' : '1px solid #E2DDD7',
                    color: '#0A0908',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}>
                  Rótulos
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                    style={{ transform: mobileRotulosOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {mobileRotulosOpen && (
                  <div style={{ background: '#F0EDE8', borderRadius: 12, padding: '0.5rem', marginBottom: '0.25rem' }}>
                    <Link href="/rotulos"
                      style={{ display: 'block', padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 700, color: '#0A0908', textDecoration: 'none', borderBottom: '1px solid #E2DDD7', marginBottom: '0.25rem' }}>
                      Ver todos los rótulos →
                    </Link>
                    {ROTULOS_SUBMENU.map(item => (
                      <Link key={item.href} href={item.href}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', fontSize: '0.875rem', fontWeight: 600, color: '#0A0908', textDecoration: 'none' }}>
                        <span>{item.label}</span>
                        <span style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 400 }}>{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {mobileRotulosOpen && <div style={{ borderBottom: '1px solid #E2DDD7' }} />}
              </div>

              {NAV.filter(n => !n.hasDropdown).map(({ href, label }) => (
                <Link key={href} href={href}
                  className="py-4 text-lg font-semibold border-b border-[#E2DDD7] text-[#0A0908]">
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full"
                onClick={() => trackNavCTA('Hablemos de tu proyecto — mobile')}
                style={{ padding: '1rem', fontSize: '1rem' }}>
                Hablemos de tu proyecto
              </Link>
              <p className="text-center text-xs text-[#9CA3AF] mt-5">
                hello@royaluniondesign.com · Barcelona
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
