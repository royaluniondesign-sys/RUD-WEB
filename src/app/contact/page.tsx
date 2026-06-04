'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import {
  trackFormStart, trackFormStep, trackFormSubmitAttempt,
  trackFormError, trackLead, trackWhatsAppClick,
} from '@/lib/analytics'

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'rotulos',
    label: 'Rótulos & Señalética',
    sub: 'Neón LED, letras, vinilos, cajas de luz',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 5.196 11.703L15 17H9l-2.196-3.297A7 7 0 0 1 12 2z"/>
      </svg>
    ),
  },
  {
    id: 'branding',
    label: 'Branding & Identidad',
    sub: 'Logo, sistema visual, guidelines',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
        <line x1="2" y1="8.5" x2="22" y2="8.5"/>
      </svg>
    ),
  },
  {
    id: 'web',
    label: 'Diseño Web & Dev',
    sub: 'Next.js, WordPress, SEO técnico',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    label: 'E-commerce Shopify',
    sub: 'Tienda online, integración, marketing',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    id: 'ia',
    label: 'AI Automation',
    sub: 'Agentes IA, flujos n8n, CRM',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    id: 'varios',
    label: 'Varios / Asesoría',
    sub: 'Proyecto integral o me orientáis',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
]

const BUDGETS = [
  { id: 'starter',      label: 'Hasta €5.000',   sub: 'Proyectos de entrada' },
  { id: 'professional', label: '€5.000–€15.000', sub: 'Proyectos medianos' },
  { id: 'enterprise',   label: '+€15.000',        sub: 'Proyectos grandes' },
  { id: 'tbd',          label: 'Por definir',     sub: 'Aún no lo sé' },
]

const STEP_LABELS = ['Servicio', 'Proyecto', 'Contacto']
const WA_LINK = `https://wa.me/34645593227?text=${encodeURIComponent('Hola, me gustaría pedir información sobre RUD Studio.')}`

// ─── Types ─────────────────────────────────────────────────────────────────────
type Step   = 1 | 2 | 3
type Status = 'idle' | 'sending' | 'success' | 'error'

// ─── SVG helpers ───────────────────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Spinner = () => (
  <svg style={{ animation: 'spin 0.8s linear infinite' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="12" cy="12" r="9" strokeOpacity="0.25"/>
    <path d="M21 12a9 9 0 01-9 9" strokeLinecap="round"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const WAIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.12 1.527 5.855L.057 22.985c-.073.285.19.55.474.474l5.131-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.815 9.815 0 01-5.005-1.372l-.36-.213-3.727 1.069 1.07-3.724-.233-.373A9.814 9.814 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818z"/>
  </svg>
)

// ─── Shared input style ────────────────────────────────────────────────────────
const inputBase: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box',
  padding: '0.875rem 1rem',
  border: '1.5px solid #E2DDD7',
  borderRadius: 12,
  fontFamily: 'inherit', fontSize: 14,
  color: '#0A0908', background: '#FAFAFA',
  outline: 'none',
  transition: 'border-color 0.18s, background 0.18s',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 11, fontWeight: 600,
  textTransform: 'uppercase', letterSpacing: '0.12em',
  color: '#9CA3AF', marginBottom: 6,
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [step,    setStep]    = useState<Step>(1)
  const [service, setService] = useState(() => {
    if (typeof window === 'undefined') return ''
    const p = new URLSearchParams(window.location.search)
    const s = p.get('servicio') ?? ''
    if (['rotulos','neon','luminosos','letras','vinilos','cajas','senaletica','exterior'].includes(s)) return 'Rótulos & Señalética'
    if (s === 'branding')  return 'Branding & Identidad'
    if (s === 'web')       return 'Diseño Web & Dev'
    if (s === 'ecommerce') return 'E-commerce Shopify'
    if (s === 'ia')        return 'AI Automation'
    return ''
  })
  const [budget,  setBudget]  = useState('')
  const [message, setMessage] = useState('')
  const [name,    setName]    = useState('')
  const [email,   setEmail]   = useState('')
  const [phone,   setPhone]   = useState('')
  const [status,  setStatus]  = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [touched,  setTouched]  = useState({ name: false, email: false })

  const canGoStep2 = service !== ''
  const canGoStep3 = message.trim().length > 10
  const canSubmit  = name.trim().length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const barWidth   = step === 1 ? 33 : step === 2 ? 66 : 100

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true })
    if (!canSubmit) return
    setStatus('sending')
    trackFormSubmitAttempt()
    try {
      const gaCookie  = document.cookie.split(';').map(c => c.trim()).find(c => c.startsWith('_ga='))
      const gaClientId = gaCookie ? gaCookie.split('=').slice(1).join('=').split('.').slice(2).join('.') : undefined
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(gaClientId ? { 'x-ga-client-id': gaClientId } : {}),
        },
        body: JSON.stringify({ name, email, phone, projectType: service, budget, message }),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Error al enviar.')
      }
      setStatus('success')
      trackLead(service, budget)
    } catch (err) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : 'Error inesperado.'
      setErrorMsg(msg)
      trackFormError(msg)
    }
  }

  // ── SUCCESS ─────────────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <main id="main-content" style={{ minHeight: '100dvh', background: '#F7F5F1', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(2rem,8vw,5rem) 1.5rem' }}>
          <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#0A0908', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}>
              <CheckIcon />
            </div>
            <h1 style={{ fontSize: 'clamp(2rem,5vw,2.75rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Mensaje recibido.
            </h1>
            <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, maxWidth: '36ch', margin: '0 auto 2rem' }}>
              Te respondemos en <strong style={{ color: '#0A0908' }}>menos de 24h</strong>. Si tienes alguna duda urgente escríbenos por WhatsApp.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
              <a href={WA_LINK}
                onClick={() => trackWhatsAppClick('success-state')}
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderRadius: 14, background: '#25D366', color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
                <span style={{ color: 'white', flexShrink: 0 }}><WAIcon size={20} /></span>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>Confirmar por WhatsApp</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', margin: '2px 0 0', lineHeight: 1 }}>+34 645 593 227 · respuesta inmediata</p>
                </div>
              </a>
              <a href="mailto:hello@royaluniondesign.com"
                style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderRadius: 14, background: 'white', border: '1.5px solid #E2DDD7', color: '#0A0908', textDecoration: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <p style={{ fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>hello@royaluniondesign.com</p>
                  <p style={{ fontSize: 12, color: '#9CA3AF', margin: '2px 0 0', lineHeight: 1 }}>Respuesta garantizada en 24h</p>
                </div>
              </a>
            </div>
            <Link href="/" style={{ fontSize: 13, color: '#9CA3AF', textDecoration: 'none' }}>← Volver al inicio</Link>
          </div>
        </div>
      </main>
    )
  }

  // ── MAIN ────────────────────────────────────────────────────────────────────
  return (
    <main style={{ minHeight: '100dvh', background: '#F7F5F1' }}>
      <Navbar light />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section style={{ paddingTop: 68, position: 'relative', background: '#0A0908', overflow: 'hidden' }}>
        <img src="/services/hero-rotulos.avif" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.28 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,9,8,0.4) 0%, rgba(10,9,8,0.88) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(3rem,7vw,5rem)' }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
            RUD Studio · Barcelona
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem,5.5vw,4rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.05, marginBottom: '0.875rem', maxWidth: '20ch' }}>
            Cuéntanos tu proyecto.{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.3)' }}>Respondemos en 24h.</span>
          </h1>
          <p style={{ fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '40ch', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Visita técnica gratuita en Barcelona. Presupuesto honesto y sin compromiso.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Presupuesto en 24h', 'Visita técnica gratis', '+8 años en Barcelona', 'Sin compromiso'].map(chip => (
              <span key={chip} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 11px', borderRadius: 9999, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.55)' }}>
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="4.5" stroke="rgba(255,255,255,0.35)"/>
                  <polyline points="2.5,5 4,6.5 7.5,3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <div className="container-custom" style={{ paddingTop: 'clamp(2.5rem,6vw,4rem)', paddingBottom: 'clamp(3rem,8vw,6rem)' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 330px) minmax(0, 1fr)', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'start' }}>

          {/* ── LEFT PANEL ─────────────────────────────────────────────────── */}
          <aside className="contact-aside" style={{ position: 'sticky', top: 96 }}>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 10 }}>Hablemos</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12, color: '#0A0908' }}>
              Hablas con quien diseña y fabrica.
            </h2>
            <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 28 }}>
              Sin comerciales, sin intermediarios. El equipo que lleva tu proyecto responde directamente.
            </p>

            {/* WhatsApp quick CTA */}
            <div style={{ background: '#0A0908', borderRadius: 16, padding: 20, marginBottom: 28 }}>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.16em', color: '#22C55E', marginBottom: 10 }}>¿Tienes prisa?</p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 14 }}>
                Escríbenos por WhatsApp. Puedes mandar fotos del espacio directamente — respondemos en minutos.
              </p>
              <a href={WA_LINK}
                onClick={() => trackWhatsAppClick('contact-sidebar')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 10, background: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: 13, cursor: 'pointer', transition: 'opacity 0.18s' }}>
                <WAIcon size={14} />
                Escribir por WhatsApp
              </a>
            </div>

            {/* Contact list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <p style={labelStyle}>Teléfono &amp; WhatsApp</p>
                <a href="tel:+34645593227" style={{ fontWeight: 600, fontSize: 15, color: '#0A0908', textDecoration: 'none', display: 'block' }}>
                  +34 645 593 227
                </a>
              </div>
              <div>
                <p style={labelStyle}>Email</p>
                <a href="mailto:hello@royaluniondesign.com" style={{ fontWeight: 600, fontSize: 15, color: '#0A0908', textDecoration: 'none' }}>
                  hello@royaluniondesign.com
                </a>
              </div>
              <div>
                <p style={labelStyle}>Taller</p>
                <p style={{ fontWeight: 600, fontSize: 14, color: '#0A0908', lineHeight: 1.5, margin: 0 }}>
                  Carrer Sant Salvador 11, L6<br />
                  <span style={{ fontWeight: 400, color: '#6B7280', fontSize: 13 }}>Cerdanyola del Vallès · Barcelona</span>
                </p>
              </div>
            </div>
          </aside>

          {/* ── FORM ───────────────────────────────────────────────────────── */}
          <div>
            {/* Progress bar */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
                {STEP_LABELS.map((label, i) => (
                  <span key={label} style={{
                    fontSize: 11,
                    fontWeight: step === i + 1 ? 700 : step > i + 1 ? 500 : 400,
                    color: step >= i + 1 ? '#0A0908' : '#C4BFB8',
                    transition: 'color 0.3s',
                  }}>
                    {i + 1}. {label}
                  </span>
                ))}
              </div>
              <div style={{ height: 2, background: '#E2DDD7', borderRadius: 9999, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', background: '#0A0908', borderRadius: 9999,
                  width: `${barWidth}%`,
                  transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
                }} />
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>

              {/* ── STEP 1 ────────────────────────────────────────────────── */}
              {step === 1 && (
                <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                  <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 6, color: '#0A0908' }}>
                    ¿Qué necesitas?
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 22, lineHeight: 1.6 }}>
                    Selecciona el servicio principal — puedes detallar más en el siguiente paso.
                  </p>

                  <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 28 }}>
                    {SERVICES.map((s) => {
                      const selected = service === s.label
                      return (
                        <button
                          key={s.id}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => { if (!service) trackFormStart(); setService(s.label) }}
                          style={{
                            padding: '14px 12px',
                            borderRadius: 14,
                            border: selected ? '2px solid #0A0908' : '1.5px solid #E2DDD7',
                            background: selected ? '#F0EDE6' : 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.18s ease',
                            outline: 'none',
                          }}
                        >
                          <span style={{ display: 'block', marginBottom: 10, color: selected ? '#0A0908' : '#C4BFB8', transition: 'color 0.18s' }}>
                            {s.icon}
                          </span>
                          <span style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#0A0908', lineHeight: 1.2, marginBottom: 3 }}>
                            {s.label}
                          </span>
                          <span style={{ display: 'block', fontSize: 10, color: '#9CA3AF', lineHeight: 1.4 }}>
                            {s.sub}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => { if (canGoStep2) { trackFormStep(1, service); setStep(2) } }}
                    disabled={!canGoStep2}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '0.875rem 1.75rem',
                      background: canGoStep2 ? '#0A0908' : '#E2DDD7',
                      color: canGoStep2 ? 'white' : '#C4BFB8',
                      borderRadius: 9999, fontWeight: 600, fontSize: 14,
                      border: 'none', cursor: canGoStep2 ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease',
                    }}>
                    Continuar <ArrowRight />
                  </button>
                </div>
              )}

              {/* ── STEP 2 ────────────────────────────────────────────────── */}
              {step === 2 && (
                <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                  <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 6, color: '#0A0908' }}>
                    Cuéntanos más
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 24, lineHeight: 1.6 }}>
                    Cuanta más info nos das, mejor propuesta podemos prepararte.
                  </p>

                  {/* Budget */}
                  <div style={{ marginBottom: 22 }}>
                    <p style={labelStyle}>
                      Presupuesto estimado{' '}
                      <span style={{ fontSize: 10, textTransform: 'none', letterSpacing: 0, color: '#C4BFB8', fontWeight: 400 }}>
                        (opcional)
                      </span>
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                      {BUDGETS.map((b) => {
                        const sel = budget === b.label
                        return (
                          <button
                            key={b.id}
                            type="button"
                            aria-pressed={sel}
                            onClick={() => setBudget(sel ? '' : b.label)}
                            style={{
                              padding: '12px 14px', borderRadius: 12,
                              border: sel ? '2px solid #0A0908' : '1.5px solid #E2DDD7',
                              background: sel ? '#F0EDE6' : 'white',
                              cursor: 'pointer', textAlign: 'left',
                              transition: 'all 0.15s ease', outline: 'none',
                            }}>
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#0A0908', margin: 0 }}>{b.label}</p>
                            <p style={{ fontSize: 11, color: '#9CA3AF', margin: '3px 0 0' }}>{b.sub}</p>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="message" style={labelStyle}>
                      Descripción del proyecto <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={5}
                      required
                      placeholder="Ej: Tengo una cafetería en Gràcia y necesito un rótulo luminoso + vinilos en el escaparate. Abre en marzo, local nuevo de 30m²..."
                      style={{ ...inputBase, resize: 'vertical', lineHeight: 1.6 }}
                    />
                    <p style={{ fontSize: 11, marginTop: 6, color: message.length > 10 ? '#16A34A' : '#C4BFB8', transition: 'color 0.2s' }}>
                      {message.length > 10 ? '✓ Listo para continuar' : `Mínimo unas líneas · ${message.length}/10 caracteres`}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: 10 }}>
                    <button type="button" onClick={() => setStep(1)}
                      style={{ padding: '0.875rem 1.25rem', borderRadius: 9999, border: '1.5px solid #E2DDD7', background: 'transparent', color: '#6B7280', fontWeight: 500, fontSize: 14, cursor: 'pointer', transition: 'all 0.15s' }}>
                      ← Atrás
                    </button>
                    <button
                      type="button"
                      onClick={() => { if (canGoStep3) { trackFormStep(2, message.slice(0, 30)); setStep(3) } }}
                      disabled={!canGoStep3}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        padding: '0.875rem 1.75rem',
                        background: canGoStep3 ? '#0A0908' : '#E2DDD7',
                        color: canGoStep3 ? 'white' : '#C4BFB8',
                        borderRadius: 9999, fontWeight: 600, fontSize: 14,
                        border: 'none', cursor: canGoStep3 ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s ease',
                      }}>
                      Continuar <ArrowRight />
                    </button>
                  </div>
                </div>
              )}

              {/* ── STEP 3 ────────────────────────────────────────────────── */}
              {step === 3 && (
                <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                  <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 6, color: '#0A0908' }}>
                    ¿Cómo te contactamos?
                  </h2>
                  <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 20, lineHeight: 1.6 }}>
                    Último paso. Prometemos no spamear.
                  </p>

                  {/* Summary chips */}
                  {(service || budget) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
                      {service && (
                        <span style={{ padding: '5px 12px', borderRadius: 9999, background: '#0A0908', color: 'white', fontSize: 12, fontWeight: 500 }}>
                          {service}
                        </span>
                      )}
                      {budget && (
                        <span style={{ padding: '5px 12px', borderRadius: 9999, background: '#F0EDE6', color: '#0A0908', fontSize: 12, fontWeight: 500 }}>
                          {budget}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="fields-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                    <div>
                      <label htmlFor="name" style={labelStyle}>
                        Nombre <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        id="name" type="text" aria-describedby="name-error"
                        value={name} onChange={e => setName(e.target.value)}
                        onBlur={() => setTouched(t => ({ ...t, name: true }))}
                        required autoComplete="name" placeholder="Tu nombre"
                        style={{ ...inputBase, borderColor: touched.name && !name.trim() ? '#EF4444' : '#E2DDD7' }}
                      />
                      {touched.name && !name.trim() && (
                        <p id="name-error" style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }} role="alert">Campo requerido</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email <span style={{ color: '#EF4444' }}>*</span>
                      </label>
                      <input
                        id="email" type="email" aria-describedby="email-error"
                        value={email} onChange={e => setEmail(e.target.value)}
                        onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        required autoComplete="email" placeholder="tu@email.com"
                        style={{ ...inputBase, borderColor: touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '#EF4444' : '#E2DDD7' }}
                      />
                      {touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                        <p id="email-error" style={{ fontSize: 11, color: '#EF4444', marginTop: 4 }} role="alert">Email válido requerido</p>
                      )}
                    </div>
                  </div>

                  {/* Phone optional */}
                  <div style={{ marginBottom: 22 }}>
                    <label htmlFor="phone" style={labelStyle}>
                      Teléfono / WhatsApp{' '}
                      <span style={{ fontSize: 10, textTransform: 'none', letterSpacing: 0, color: '#C4BFB8', fontWeight: 400 }}>
                        (opcional — respuesta más rápida)
                      </span>
                    </label>
                    <input
                      id="phone" type="tel"
                      value={phone} onChange={e => setPhone(e.target.value)}
                      autoComplete="tel" placeholder="+34 600 000 000"
                      style={inputBase}
                    />
                  </div>

                  {status === 'error' && (
                    <div role="alert" style={{ padding: '0.875rem 1rem', borderRadius: 12, background: '#FEF2F2', border: '1px solid #FECACA', fontSize: 13, color: '#991B1B', marginBottom: 16, lineHeight: 1.5 }}>
                      <strong>Error:</strong> {errorMsg}. Inténtalo de nuevo o escríbenos a{' '}
                      <a href="mailto:hello@royaluniondesign.com" style={{ color: '#991B1B', fontWeight: 600 }}>hello@royaluniondesign.com</a>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                    <button type="button" onClick={() => setStep(2)}
                      style={{ padding: '0.875rem 1.25rem', borderRadius: 9999, border: '1.5px solid #E2DDD7', background: 'transparent', color: '#6B7280', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>
                      ← Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={!canSubmit || status === 'sending'}
                      style={{
                        flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        padding: '0.875rem 1.75rem', minWidth: 160,
                        background: canSubmit && status !== 'sending' ? '#0A0908' : '#E2DDD7',
                        color:      canSubmit && status !== 'sending' ? 'white'   : '#C4BFB8',
                        borderRadius: 9999, fontWeight: 600, fontSize: 15,
                        border: 'none', cursor: canSubmit && status !== 'sending' ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s ease',
                      }}>
                      {status === 'sending' ? <><Spinner /> Enviando…</> : <>Enviar mensaje <ArrowRight /></>}
                    </button>
                  </div>
                  <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center' }}>
                    O escríbenos a{' '}
                    <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      hello@royaluniondesign.com
                    </a>
                  </p>
                </div>
              )}

            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        textarea:focus, input:focus {
          border-color: #0A0908 !important;
          background: white !important;
        }
        button[aria-pressed="true"] { outline: none; }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-aside {
            position: static !important;
            order: 2;
            padding-top: 2.5rem;
            border-top: 1px solid #E2DDD7;
            margin-top: 1rem;
          }
          .fields-grid {
            grid-template-columns: 1fr !important;
          }
          .service-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </main>
  )
}
