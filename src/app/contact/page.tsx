'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import {
  trackFormStart, trackFormStep, trackFormSubmitAttempt,
  trackFormError, trackLead,
} from '@/lib/analytics'


const SERVICES = [
  { id: 'branding',   label: 'Branding & Identidad',   icon: '◈', color: '#0A0908' },
  { id: 'web',        label: 'Diseño Web & Dev',        icon: '⬡', color: '#0A0908' },
  { id: 'rotulos',    label: 'Rótulos & Señalética',    icon: '◎', color: '#0A0908' },
  { id: 'ecommerce',  label: 'E-commerce Shopify',      icon: '⊞', color: '#0A0908' },
  { id: 'ia',         label: 'AI Automation',           icon: '✦', color: '#7B68EE' },
  { id: 'varios',     label: 'Varios servicios',        icon: '⋯', color: '#0A0908' },
]

const BUDGETS = [
  { id: 'starter',      label: 'Hasta €5.000',     sub: 'Starter' },
  { id: 'professional', label: '€5.000–€15.000',   sub: 'Professional' },
  { id: 'enterprise',   label: '+€15.000',          sub: 'Enterprise' },
  { id: 'tbd',          label: 'Por definir',       sub: 'Aún no lo sé' },
]

type Step = 1 | 2 | 3
type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [step, setStep] = useState<Step>(1)
  const [service, setService] = useState(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search)
      const s = p.get('servicio')
      if (s === 'rotulos') return 'Rótulos & Señalética'
      if (s === 'branding') return 'Branding & Identidad'
      if (s === 'web') return 'Diseño Web & Dev'
    }
    return ''
  })
  const [budget, setBudget] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    trackFormSubmitAttempt()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType: service, budget, message }),
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

  const canGoStep2 = service !== ''
  const canGoStep3 = message.trim().length > 10
  const canSubmit  = name.trim() && email.includes('@')

  if (status === 'success') {
    return (
      <main style={{ minHeight: '100vh', background: '#F7F5F1', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(2rem,8vw,5rem) 1rem' }}>
          <div style={{ maxWidth: 500, textAlign: 'center' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#F0FDF4', border: '1px solid #BBF7D0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 12 }}>
              Mensaje recibido.
            </h1>
            <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, marginBottom: 32 }}>
              Te respondemos en <strong style={{ color: '#0A0908' }}>menos de 24h</strong>. Si tienes alguna duda urgente escríbenos directamente.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320, margin: '0 auto 2rem' }}>
              <a href="https://wa.me/34645593227?text=Hola%2C%20acabo%20de%20enviar%20un%20formulario%20en%20vuestra%20web%20y%20quer%C3%ADa%20confirmar%20que%20lo%20hab%C3%A9is%20recibido"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderRadius: 12, background: '#25D366', color: 'white', textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 1 }}>Confirmar por WhatsApp</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>+34 645 593 227 · respuesta inmediata</p>
                </div>
              </a>
              <a href="mailto:hello@royaluniondesign.com"
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderRadius: 12, background: '#0A0908', color: 'white', textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 1 }}>hello@royaluniondesign.com</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>Respuesta garantizada en 24h</p>
                </div>
              </a>
            </div>
            <Link href="/" style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none' }}>← Volver al inicio</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: '#F7F5F1' }}>
      <Navbar light />

      <section style={{ paddingTop: 68, position: 'relative', overflow: 'hidden', minHeight: 260, background: '#0A0908' }}>
        <img src="/hero-contact.jpg" alt="" aria-hidden="true" loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,9,8,0.6) 0%,rgba(10,9,8,0.4) 100%)', pointerEvents: 'none' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(2.5rem,6vw,4rem)', paddingBottom: 'clamp(2rem,4vw,3rem)' }}>
          <p style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>Presupuesto gratis · Barcelona</p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 700, letterSpacing: '-0.03em', color: 'white', lineHeight: 1.1 }}>
            Pide presupuesto de rótulos, branding o web.{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}>Respondemos en 24h.</span>
          </h1>
        </div>
      </section>

      <div>
        <div className="container-custom" style={{ paddingTop: 'clamp(2.5rem,6vw,4rem)', paddingBottom: 'clamp(3rem,8vw,6rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 'clamp(2rem,6vw,5rem)', alignItems: 'start' }}>

            {/* ── LEFT: info ──────────────────────────────── */}
            <div style={{ position: 'sticky', top: 96 }}>
              <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 12 }}>Hablemos</p>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>
                Cuéntanos tu proyecto.
              </h2>
              <p style={{ fontSize: 15, color: '#6B7280', lineHeight: 1.7, marginBottom: 32 }}>
                Respondemos en menos de 24h. Sin compromiso.
              </p>

              {/* Quick chat */}
              <div style={{ background: '#0A0908', borderRadius: 16, padding: '20px', marginBottom: 28 }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7B68EE', marginBottom: 12 }}>¿Tienes prisa?</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginBottom: 14 }}>
                  Usa el chat en la esquina inferior derecha — respuesta inmediata con Hermes, nuestro agente de ventas.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 5px rgba(34,197,94,0.6)' }} />
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>Hermes · Agente activo ahora</span>
                </div>
              </div>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>WhatsApp · respuesta rápida</p>
                  <a href="https://wa.me/34645593227?text=Hola%2C%20quiero%20pedir%20presupuesto%20para%20un%20r%C3%B3tulo%20en%20Barcelona"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderRadius: 10, background: '#25D366', color: 'white', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    +34 645 593 227
                  </a>
                  <p style={{ fontSize: 11, color: '#9CA3AF', marginTop: 6 }}>Manda fotos del espacio directamente</p>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Email</p>
                  <a href="mailto:hello@royaluniondesign.com" style={{ fontWeight: 600, fontSize: 14, color: '#0A0908', textDecoration: 'none' }}>hello@royaluniondesign.com</a>
                </div>
                <div>
                  <p style={{ fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Ubicación</p>
                  <p style={{ fontWeight: 600, fontSize: 14 }}>Barcelona & Cerdanyola del Vallès</p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: multi-step form ───────────────── */}
            <div>
              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
                {([1, 2, 3] as Step[]).map((s) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700,
                      background: step >= s ? '#0A0908' : '#E2DDD7',
                      color: step >= s ? 'white' : '#9CA3AF',
                      transition: 'all 0.3s',
                    }}>{s}</div>
                    {s < 3 && <div style={{ width: 32, height: 1, background: step > s ? '#0A0908' : '#E2DDD7', transition: 'background 0.3s' }} />}
                  </div>
                ))}
                <span style={{ marginLeft: 8, fontSize: 12, color: '#9CA3AF' }}>
                  {step === 1 ? 'Servicio' : step === 2 ? 'Proyecto' : 'Contacto'}
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                {/* ── STEP 1: Service ─────────────────────── */}
                {step === 1 && (
                  <div style={{ animation: 'fadeSlideIn 0.3s ease' }}>
                    <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>
                      ¿Qué necesitas?
                    </h2>
                    <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 24 }}>Selecciona el servicio principal de tu proyecto.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 10, marginBottom: 28 }}>
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => { if (!service) trackFormStart(); setService(s.label) }}
                          style={{
                            padding: '16px 14px',
                            borderRadius: 14,
                            border: service === s.label ? `2px solid ${s.id === 'ia' ? '#7B68EE' : '#0A0908'}` : '1.5px solid #E2DDD7',
                            background: service === s.label ? (s.id === 'ia' ? 'rgba(123,104,238,0.06)' : '#F0EDE6') : 'white',
                            cursor: 'pointer',
                            textAlign: 'left' as const,
                            transition: 'all 0.18s',
                          }}
                        >
                          <span style={{ display: 'block', fontSize: 20, marginBottom: 8, color: service === s.label ? s.color : '#C4BFB8' }}>{s.icon}</span>
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#0A0908', lineHeight: 1.3 }}>{s.label}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => { if (canGoStep2) { trackFormStep(1, service); setStep(2) } }}
                      disabled={!canGoStep2}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, border: 'none', cursor: canGoStep2 ? 'pointer' : 'not-allowed', opacity: canGoStep2 ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                      Continuar
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                )}

                {/* ── STEP 2: Project details ─────────────── */}
                {step === 2 && (
                  <div style={{ animation: 'fadeSlideIn 0.3s ease' }}>
                    <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>
                      Cuéntanos el proyecto
                    </h2>
                    <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 24 }}>Brevemente: qué tienes, qué quieres conseguir.</p>

                    {/* Budget */}
                    <div style={{ marginBottom: 20 }}>
                      <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: 10 }}>Presupuesto estimado</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 8 }}>
                        {BUDGETS.map((b) => (
                          <button
                            key={b.id}
                            type="button"
                            onClick={() => setBudget(b.label)}
                            style={{
                              padding: '12px 14px',
                              borderRadius: 12,
                              border: budget === b.label ? '2px solid #0A0908' : '1.5px solid #E2DDD7',
                              background: budget === b.label ? '#F0EDE6' : 'white',
                              cursor: 'pointer',
                              textAlign: 'left' as const,
                              transition: 'all 0.15s',
                            }}
                          >
                            <p style={{ fontSize: 13, fontWeight: 700, color: '#0A0908', marginBottom: 2 }}>{b.label}</p>
                            <p style={{ fontSize: 11, color: '#9CA3AF' }}>{b.sub}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 24 }}>
                      <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: 10 }}>Descripción del proyecto</p>
                      <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={5}
                        required
                        placeholder="Ej: Tengo una cafetería en Barcelona y necesito un rótulo luminoso + vinilo en el escaparate. El local abre en 2 meses..."
                        style={{ width: '100%', padding: '0.875rem 1rem', border: '1.5px solid #E2DDD7', borderRadius: 12, fontFamily: 'inherit', fontSize: 14, color: '#0A0908', background: '#FAFAFA', outline: 'none', resize: 'none', lineHeight: 1.6 }}
                      />
                      <p style={{ fontSize: 11, color: message.length > 10 ? '#22C55E' : '#C4BFB8', marginTop: 6, transition: 'color 0.2s' }}>
                        {message.length > 10 ? '✓ Suficiente para continuar' : 'Mínimo unas líneas'}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: 10 }}>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        style={{ padding: '0.875rem 1.25rem', borderRadius: 9999, border: '1.5px solid #E2DDD7', background: 'transparent', color: '#6B7280', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>
                        ← Atrás
                      </button>
                      <button
                        type="button"
                        onClick={() => { if (canGoStep3) { trackFormStep(2, message.slice(0, 30)); setStep(3) } }}
                        disabled={!canGoStep3}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 1.75rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 14, border: 'none', cursor: canGoStep3 ? 'pointer' : 'not-allowed', opacity: canGoStep3 ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                        Continuar
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: Contact info ─────────────────── */}
                {step === 3 && (
                  <div style={{ animation: 'fadeSlideIn 0.3s ease' }}>
                    <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.75rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>
                      ¿Cómo te contactamos?
                    </h2>
                    <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 24 }}>Último paso. Te respondemos en menos de 24h.</p>

                    {/* Summary chip */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                      {service && <span style={{ padding: '4px 12px', borderRadius: 9999, background: '#F0EDE6', fontSize: 12, fontWeight: 500, color: '#0A0908' }}>{service}</span>}
                      {budget  && <span style={{ padding: '4px 12px', borderRadius: 9999, background: '#F0EDE6', fontSize: 12, fontWeight: 500, color: '#0A0908' }}>{budget}</span>}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: 6 }}>Nombre</label>
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          required
                          placeholder="Tu nombre"
                          style={{ width: '100%', padding: '0.875rem 1rem', border: '1.5px solid #E2DDD7', borderRadius: 12, fontFamily: 'inherit', fontSize: 14, color: '#0A0908', background: '#FAFAFA', outline: 'none' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#9CA3AF', marginBottom: 6 }}>Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                          placeholder="tu@email.com"
                          style={{ width: '100%', padding: '0.875rem 1rem', border: '1.5px solid #E2DDD7', borderRadius: 12, fontFamily: 'inherit', fontSize: 14, color: '#0A0908', background: '#FAFAFA', outline: 'none' }}
                        />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div style={{ padding: '0.875rem 1rem', borderRadius: 12, background: '#FEF2F2', border: '1px solid #FECACA', fontSize: 14, color: '#991B1B', marginBottom: 16 }}>
                        {errorMsg}
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        style={{ padding: '0.875rem 1.25rem', borderRadius: 9999, border: '1.5px solid #E2DDD7', background: 'transparent', color: '#6B7280', fontWeight: 500, fontSize: 14, cursor: 'pointer' }}>
                        ← Atrás
                      </button>
                      <button
                        type="submit"
                        disabled={!canSubmit || status === 'sending'}
                        style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '0.875rem 1.75rem', background: '#0A0908', color: 'white', borderRadius: 9999, fontWeight: 600, fontSize: 15, border: 'none', cursor: (canSubmit && status !== 'sending') ? 'pointer' : 'not-allowed', opacity: (canSubmit && status !== 'sending') ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                        {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                        {status !== 'sending' && <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </button>
                    </div>
                    <p style={{ fontSize: 12, color: '#9CA3AF', textAlign: 'center' }}>
                      O escríbenos a <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3 }}>hello@royaluniondesign.com</a>
                    </p>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
