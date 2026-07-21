'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import {
  trackFormStart, trackFormStep, trackFormSubmitAttempt,
  trackFormError, trackLead, trackWhatsAppClick,
} from '@/lib/analytics'

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { id: 'rotulos',   label: 'Rótulos & Señalética',  sub: 'Neón LED, letras, vinilos, cajas de luz' },
  { id: 'branding',  label: 'Branding & Identidad',   sub: 'Logo, sistema visual, guidelines' },
  { id: 'web',       label: 'Diseño Web & Dev',        sub: 'Next.js, WordPress, SEO técnico' },
  { id: 'ecommerce', label: 'E-commerce Shopify',      sub: 'Tienda online, integración, marketing' },
  { id: 'ia',        label: 'Automatización IA',       sub: 'Agentes IA, flujos n8n, CRM' },
  { id: 'varios',    label: 'Varios / Asesoría',       sub: 'Proyecto integral o me orientéis' },
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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
  border: '1px solid var(--border)',
  borderRadius: 0,
  fontFamily: 'inherit', fontSize: 14,
  color: 'var(--fg)', background: 'var(--bg)',
  outline: 'none',
  transition: 'border-color 0.18s',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 11, fontWeight: 500,
  textTransform: 'uppercase', letterSpacing: '0.06em',
  color: 'var(--muted)', marginBottom: 6, fontFamily: 'var(--font-mono, "Space Mono", monospace)',
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
    if (s === 'ia')        return 'Automatización IA'
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
      <main id="main-content" style={{ minHeight: '100dvh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
        <Navbar light />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(2rem,8vw,5rem) 1.5rem' }}>
          <div style={{ maxWidth: 520, width: '100%' }}>
            <div style={{ paddingBottom: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
              <CheckIcon />
            </div>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>MENSAJE RECIBIDO</p>
            <h1 className="display" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--fg)', marginBottom: '1.5rem' }}>
              EN MENOS<br /><em> DE 24H</em>
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              Te respondemos en <strong style={{ color: 'var(--fg)' }}>menos de 24h</strong>. Si tienes alguna duda urgente escríbenos por WhatsApp.
            </p>
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <a href={WA_LINK}
                onClick={() => trackWhatsAppClick('success-state')}
                className="mono-label"
                style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
                WHATSAPP +34 645 593 227 →
              </a>
              <Link href="/" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ── MAIN ────────────────────────────────────────────────────────────────────
  return (
    <main style={{ minHeight: '100dvh', background: 'var(--bg)' }}>
      <Navbar light />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)', minHeight: '50svh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            RUD STUDIO — CONTACTO · BARCELONA
          </p>
          <h1 style={{ margin: 0 }}>
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}>CUÉNTANOS</span>
<span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap' }}> TU PROYECTO</span
            <span className="display" style={{ fontSize: 'clamp(3.5rem, 11vw, 13rem)', lineHeight: 0.85, display: 'block', whiteSpace: 'nowrap', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem',
            paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--border)',
          }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>
              Presupuesto en 24h · Visita técnica gratis · Sin compromiso
            </p>
            <a href={WA_LINK}
              onClick={() => trackWhatsAppClick('hero')}
              className="mono-label"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>
              WHATSAPP →
            </a>
          </div>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3rem,6vw,5rem)', paddingBottom: 'clamp(4rem,8vw,7rem)' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 340px) minmax(0, 1fr)', gap: 'clamp(3rem,6vw,7rem)', alignItems: 'start' }}>

            {/* ── LEFT PANEL ─────────────────────────────────────────────────── */}
            <aside className="contact-aside" style={{ position: 'sticky', top: 96 }}>
              <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>HABLA CON QUIEN DISEÑA</p>
              <h2 className="display" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 4rem)', color: 'var(--fg)', marginBottom: '1.5rem' }}>
                SIN<br /><em> INTERMEDIARIOS</em>
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                El equipo que lleva tu proyecto responde directamente. Sin comerciales, sin teléfonos rotos.
              </p>

              <div style={{ borderTop: '1px solid var(--border)' }}>
                <div style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.4rem' }}>WHATSAPP</p>
                  <a href={WA_LINK}
                    onClick={() => trackWhatsAppClick('contact-sidebar')}
                    style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--fg)', textDecoration: 'none' }}>
                    +34 645 593 227 →
                  </a>
                </div>
                <div style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.4rem' }}>EMAIL</p>
                  <a href="mailto:hello@royaluniondesign.com"
                    style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--fg)', textDecoration: 'none' }}>
                    hello@royaluniondesign.com
                  </a>
                </div>
                <div style={{ padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
                  <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.4rem' }}>TALLER</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--fg)', lineHeight: 1.6, margin: 0 }}>
                    Carrer Sant Salvador 11, L6<br />
                    <span style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>Cerdanyola del Vallès · Barcelona</span>
                  </p>
                </div>
              </div>
            </aside>

            {/* ── FORM ───────────────────────────────────────────────────────── */}
            <div>
              {/* Progress */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  {STEP_LABELS.map((label, i) => (
                    <span key={label} className="mono-label" style={{
                      color: step >= i + 1 ? 'var(--fg)' : 'var(--border)',
                      transition: 'color 0.3s',
                    }}>
                      {i + 1}. {label}
                    </span>
                  ))}
                </div>
                <div style={{ height: 1, background: 'var(--border)' }}>
                  <div style={{
                    height: '100%', background: 'var(--fg)',
                    width: `${barWidth}%`,
                    transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>

                {/* ── STEP 1 ────────────────────────────────────────────────── */}
                {step === 1 && (
                  <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                    <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      ¿QUÉ NECESITAS?
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.65 }}>
                      Selecciona el servicio principal — puedes detallar más en el siguiente paso.
                    </p>

                    <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2rem' }}>
                      {SERVICES.map((s) => {
                        const selected = service === s.label
                        return (
                          <button
                            key={s.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => { if (!service) trackFormStart(); setService(s.label) }}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              width: '100%', padding: '1rem 0',
                              borderBottom: '1px solid var(--border)',
                              background: 'transparent', border: 'none',
                              borderTop: 'none',
                              borderLeft: 'none', borderRight: 'none',
                              cursor: 'pointer', textAlign: 'left',
                              outline: 'none',
                            }}
                          >
                            <div>
                              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', fontWeight: 400, color: selected ? 'var(--fg)' : 'var(--muted)', fontFamily: 'var(--font-display, "Bebas Neue", Anton, sans-serif)', textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, lineHeight: 1, transition: 'color 0.18s' }}>
                                {s.label}
                              </p>
                              <p className="mono-label" style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>{s.sub}</p>
                            </div>
                            {selected && (
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                                <polyline points="2 8 6 12 14 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </button>
                        )
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={() => { if (canGoStep2) { trackFormStep(1, service); setStep(2) } }}
                      disabled={!canGoStep2}
                      className="mono-label"
                      style={{
                        color: canGoStep2 ? 'var(--fg)' : 'var(--border)',
                        background: 'none', border: 'none',
                        borderBottom: `1px solid ${canGoStep2 ? 'var(--fg)' : 'var(--border)'}`,
                        paddingBottom: 2, cursor: canGoStep2 ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s',
                      }}>
                      CONTINUAR →
                    </button>
                  </div>
                )}

                {/* ── STEP 2 ────────────────────────────────────────────────── */}
                {step === 2 && (
                  <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                    <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      CUÉNTANOS MÁS
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.65 }}>
                      Cuanta más info nos das, mejor propuesta podemos prepararte.
                    </p>

                    {/* Budget */}
                    <div style={{ marginBottom: '1.75rem' }}>
                      <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>
                        PRESUPUESTO ESTIMADO <span style={{ opacity: 0.5 }}>(OPCIONAL)</span>
                      </p>
                      <div style={{ borderTop: '1px solid var(--border)' }}>
                        {BUDGETS.map((b) => {
                          const sel = budget === b.label
                          return (
                            <button
                              key={b.id}
                              type="button"
                              aria-pressed={sel}
                              onClick={() => setBudget(sel ? '' : b.label)}
                              style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                width: '100%', padding: '0.875rem 0',
                                borderBottom: '1px solid var(--border)',
                                background: 'transparent', border: 'none',
                                borderTop: 'none', borderLeft: 'none', borderRight: 'none',
                                cursor: 'pointer', outline: 'none',
                              }}>
                              <div>
                                <p style={{ fontSize: '0.9375rem', fontWeight: 500, color: sel ? 'var(--fg)' : 'var(--muted)', margin: 0, transition: 'color 0.15s' }}>{b.label}</p>
                                <p className="mono-label" style={{ color: 'var(--muted)', marginTop: 2 }}>{b.sub}</p>
                              </div>
                              {sel && (
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                                  <polyline points="2 8 6 12 14 4" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="message" style={labelStyle}>
                        DESCRIPCIÓN DEL PROYECTO <span style={{ color: '#EF4444' }}>*</span>
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
                      <p className="mono-label" style={{ marginTop: 6, color: message.length > 10 ? 'var(--fg)' : 'var(--muted)', transition: 'color 0.2s' }}>
                        {message.length > 10 ? '✓ LISTO PARA CONTINUAR' : `MÍNIMO UNAS LÍNEAS · ${message.length}/10`}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                      <button type="button" onClick={() => setStep(1)}
                        className="mono-label"
                        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0 }}>
                        ← ATRÁS
                      </button>
                      <button
                        type="button"
                        onClick={() => { if (canGoStep3) { trackFormStep(2, message.slice(0, 30)); setStep(3) } }}
                        disabled={!canGoStep3}
                        className="mono-label"
                        style={{
                          color: canGoStep3 ? 'var(--fg)' : 'var(--border)',
                          background: 'none', border: 'none',
                          borderBottom: `1px solid ${canGoStep3 ? 'var(--fg)' : 'var(--border)'}`,
                          paddingBottom: 2, cursor: canGoStep3 ? 'pointer' : 'not-allowed',
                          transition: 'all 0.2s',
                        }}>
                        CONTINUAR →
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3 ────────────────────────────────────────────────── */}
                {step === 3 && (
                  <div style={{ animation: 'fadeUp 0.28s ease-out' }}>
                    <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 5rem)', color: 'var(--fg)', marginBottom: '0.5rem' }}>
                      ¿CÓMO TE<br /><em> CONTACTAMOS?</em>
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.65 }}>
                      Último paso. Prometemos no spamear.
                    </p>

                    {/* Summary */}
                    {(service || budget) && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.5rem' }}>
                        {service && (
                          <span className="mono-label" style={{ padding: '4px 10px', border: '1px solid var(--fg)', color: 'var(--fg)' }}>
                            {service}
                          </span>
                        )}
                        {budget && (
                          <span className="mono-label" style={{ padding: '4px 10px', border: '1px solid var(--border)', color: 'var(--muted)' }}>
                            {budget}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Name + Email */}
                    <div className="fields-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                      <div>
                        <label htmlFor="name" style={labelStyle}>
                          NOMBRE <span style={{ color: '#EF4444' }}>*</span>
                        </label>
                        <input
                          id="name" type="text" aria-describedby="name-error"
                          value={name} onChange={e => setName(e.target.value)}
                          onBlur={() => setTouched(t => ({ ...t, name: true }))}
                          required autoComplete="name" placeholder="Tu nombre"
                          style={{ ...inputBase, borderColor: touched.name && !name.trim() ? '#EF4444' : 'var(--border)' }}
                        />
                        {touched.name && !name.trim() && (
                          <p id="name-error" className="mono-label" style={{ color: '#EF4444', marginTop: 4 }} role="alert">CAMPO REQUERIDO</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" style={labelStyle}>
                          EMAIL <span style={{ color: '#EF4444' }}>*</span>
                        </label>
                        <input
                          id="email" type="email" aria-describedby="email-error"
                          value={email} onChange={e => setEmail(e.target.value)}
                          onBlur={() => setTouched(t => ({ ...t, email: true }))}
                          required autoComplete="email" placeholder="tu@email.com"
                          style={{ ...inputBase, borderColor: touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '#EF4444' : 'var(--border)' }}
                        />
                        {touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                          <p id="email-error" className="mono-label" style={{ color: '#EF4444', marginTop: 4 }} role="alert">EMAIL VÁLIDO REQUERIDO</p>
                        )}
                      </div>
                    </div>

                    {/* Phone */}
                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="phone" style={labelStyle}>
                        TELÉFONO / WHATSAPP <span style={{ opacity: 0.5 }}>(OPCIONAL)</span>
                      </label>
                      <input
                        id="phone" type="tel"
                        value={phone} onChange={e => setPhone(e.target.value)}
                        autoComplete="tel" placeholder="+34 600 000 000"
                        style={inputBase}
                      />
                    </div>

                    {status === 'error' && (
                      <div role="alert" style={{ padding: '0.875rem 1rem', background: 'var(--warm)', border: '1px solid var(--border)', fontSize: '0.8125rem', color: 'var(--fg)', marginBottom: 16, lineHeight: 1.5 }}>
                        <strong>Error:</strong> {errorMsg}. Inténtalo de nuevo o escríbenos a{' '}
                        <a href="mailto:hello@royaluniondesign.com" style={{ color: 'var(--fg)', fontWeight: 600 }}>hello@royaluniondesign.com</a>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <button type="button" onClick={() => setStep(2)}
                        className="mono-label"
                        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: 0 }}>
                        ← ATRÁS
                      </button>
                      <button
                        type="submit"
                        disabled={!canSubmit || status === 'sending'}
                        className="mono-label"
                        style={{
                          color: canSubmit && status !== 'sending' ? 'var(--fg)' : 'var(--border)',
                          background: 'none', border: 'none',
                          borderBottom: `1px solid ${canSubmit && status !== 'sending' ? 'var(--fg)' : 'var(--border)'}`,
                          paddingBottom: 2,
                          cursor: canSubmit && status !== 'sending' ? 'pointer' : 'not-allowed',
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          transition: 'all 0.2s',
                        }}>
                        {status === 'sending' ? <><Spinner /> ENVIANDO…</> : <>ENVIAR MENSAJE →</>}
                      </button>
                    </div>
                    <p className="mono-label" style={{ color: 'var(--muted)' }}>
                      O ESCRÍBENOS A{' '}
                      <a href="mailto:hello@royaluniondesign.com" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)' }}>
                        HELLO@ROYALUNIONDESIGN.COM
                      </a>
                    </p>
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        textarea:focus, input:focus {
          border-color: var(--fg) !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-aside {
            position: static !important;
            order: 2;
            padding-top: 2.5rem;
            border-top: 1px solid var(--border);
            margin-top: 1rem;
          }
          .fields-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
