'use client'
import { useState, useEffect } from 'react'

// ─── Actualiza estos @usernames cuando los bots estén listos ───────────────
const HERMES_URL = 'https://t.me/RudHermesBot'   // Hermes · Ventas & proyectos
const AURA_URL   = 'https://t.me/RudAuraBot'     // Aura   · Contenido & marca
const PHONE_URL  = 'tel:+34645593227'
// ─────────────────────────────────────────────────────────────────────────────

export default function AgentChat() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <>
      {/* Backdrop — closes on click outside */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, zIndex: 49 }}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Chat con agentes RUD"
        style={{
          position: 'fixed',
          bottom: 84,
          right: 'clamp(1rem,3vw,1.5rem)',
          zIndex: 50,
          width: 'min(320px, calc(100vw - 2rem))',
          background: '#0A0908',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20,
          boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.22s cubic-bezier(.22,1,.36,1), transform 0.22s cubic-bezier(.22,1,.36,1)',
        }}
      >
        {/* Header */}
        <div style={{ padding: '18px 20px 14px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 6px rgba(34,197,94,0.6)' }} />
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7B68EE' }}>Agentes activos</span>
          </div>
          <p style={{ fontSize: 15, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
            Habla directamente con nuestros agentes
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4, lineHeight: 1.5 }}>
            Respuesta inmediata · Telegram
          </p>
        </div>

        {/* Agents */}
        <div style={{ padding: '12px 12px 8px' }}>
          {/* Hermes */}
          <a
            href={HERMES_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: 'rgba(123,104,238,0.1)', border: '1px solid rgba(123,104,238,0.2)', textDecoration: 'none', marginBottom: 8, transition: 'background 0.18s', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(123,104,238,0.18)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(123,104,238,0.1)')}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(123,104,238,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B68EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>Hermes</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>Ventas · Presupuestos · Proyectos</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>

          {/* Aura */}
          <a
            href={AURA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', marginBottom: 8, transition: 'background 0.18s', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>Aura</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>Contenido · Marca · Estrategia</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </div>

        {/* Footer */}
        <div style={{ padding: '8px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>via Telegram</span>
          <a
            href={PHONE_URL}
            style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
          >
            ¿Prefieres llamar?
          </a>
        </div>
      </div>

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con agentes'}
        style={{
          position: 'fixed',
          bottom: 'clamp(1rem,3vw,1.5rem)',
          right: 'clamp(1rem,3vw,1.5rem)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '0 20px',
          height: 52,
          borderRadius: 9999,
          background: open ? '#1A1A1A' : '#0A0908',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'white',
          cursor: 'pointer',
          boxShadow: open ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(123,104,238,0.2)',
          transition: 'all 0.2s cubic-bezier(.22,1,.36,1)',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(123,104,238,0.4)' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(123,104,238,0.2)' }}
      >
        {/* Live dot */}
        {!open && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 6px rgba(34,197,94,0.7)' }} />}

        {/* Icon: chat or close */}
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round">
            <path d="M3 3l10 10M13 3L3 13"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}

        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em' }}>
          {open ? 'Cerrar' : 'Hablar con agente'}
        </span>

        {/* Purple accent badge */}
        {!open && (
          <span style={{ padding: '2px 8px', borderRadius: 9999, background: 'rgba(123,104,238,0.2)', border: '1px solid rgba(123,104,238,0.3)', fontSize: 10, fontWeight: 700, color: '#A89BF0', letterSpacing: '0.05em' }}>
            IA
          </span>
        )}
      </button>
    </>
  )
}
