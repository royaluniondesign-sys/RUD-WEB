'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import {
  WELCOME_MESSAGE,
  matchIntent, getFallback,
  type ChatMessage,
} from '@/lib/chatKnowledge'

const FUNNEL_TRIGGER = 3

function uid() { return Math.random().toString(36).slice(2) }

// ── Typing bubble ──────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, padding: '10px 14px', alignItems: 'center' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: '#6B7280',
          display: 'block',
          animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
        }} />
      ))}
    </div>
  )
}

// ── Single message bubble ──────────────────────────────────────────────────────
function Bubble({ msg, onChip }: { msg: ChatMessage; onChip: (chip: string) => void }) {
  const isBot = msg.role === 'bot'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: isBot ? 'flex-start' : 'flex-end', gap: 6, marginBottom: 4 }}>
      <div style={{
        maxWidth: '88%',
        padding: '10px 14px',
        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
        background: isBot ? '#F0EDE6' : '#0A0908',
        color: isBot ? '#0A0908' : 'white',
        fontSize: 13,
        lineHeight: 1.6,
        whiteSpace: 'pre-wrap',
      }}>
        {msg.text.split('**').map((part, i) =>
          i % 2 === 1
            ? <strong key={i}>{part}</strong>
            : part
        )}
      </div>
      {isBot && msg.chips && msg.chips.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, maxWidth: '92%' }}>
          {msg.chips.map(chip => (
            <button
              key={chip}
              onClick={() => onChip(chip)}
              style={{
                padding: '5px 12px',
                borderRadius: 9999,
                border: '1.5px solid #E2DDD7',
                background: 'white',
                fontSize: 12,
                fontWeight: 500,
                color: '#0A0908',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F0EDE6'; e.currentTarget.style.borderColor = '#0A0908' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = '#E2DDD7' }}
            >
              {chip}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Funnel card ────────────────────────────────────────────────────────────────
function FunnelCard({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ margin: '8px 0', background: '#0A0908', borderRadius: 16, padding: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.7)' }} />
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#7B68EE' }}>Próximo paso</span>
      </div>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: 14 }}>
        Parece que tienes un proyecto claro. Cuéntanoslo y te preparamos una propuesta personalizada.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link href="/contact" onClick={onClose}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(123,104,238,0.15)', border: '1px solid rgba(123,104,238,0.25)', textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B68EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1 }}>Pedir presupuesto</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Respuesta en menos de 24h</p>
          </div>
        </Link>
        <Link href="/contact?tipo=llamada" onClick={onClose}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1 }}>Solicitar llamada</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>30 min sin compromiso</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

// ── Email gate form ────────────────────────────────────────────────────────────
function GateForm({ onSubmit }: { onSubmit: (name: string, email: string) => Promise<void> }) {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setTimeout(() => nameRef.current?.focus(), 150) }, [])

  const valid = name.trim().length > 0 && email.includes('@') && email.includes('.')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid || loading) return
    setLoading(true)
    await onSubmit(name.trim(), email.trim())
  }

  const inputStyle: React.CSSProperties = {
    padding: '10px 14px',
    borderRadius: 9999,
    border: '1.5px solid #E2DDD7',
    fontFamily: 'inherit',
    fontSize: 13,
    color: '#0A0908',
    background: '#FAFAFA',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
  }

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px 20px' }}>
      <div style={{ marginBottom: 22 }}>
        <p style={{ fontSize: 22, marginBottom: 8 }}>👋</p>
        <p style={{ fontSize: 15, fontWeight: 700, color: '#0A0908', marginBottom: 6, lineHeight: 1.3 }}>Antes de empezar</p>
        <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.55 }}>
          Déjame tu email para poder hacerte seguimiento si tienes un proyecto en mente.
        </p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          ref={nameRef}
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Tu nombre"
          required
          style={inputStyle}
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={!valid || loading}
          style={{
            padding: '11px',
            borderRadius: 9999,
            border: 'none',
            background: valid && !loading ? '#0A0908' : '#E2DDD7',
            color: 'white',
            fontSize: 14,
            fontWeight: 600,
            cursor: valid && !loading ? 'pointer' : 'default',
            fontFamily: 'inherit',
            transition: 'background 0.2s',
          }}
        >
          {loading ? 'Un momento...' : 'Empezar →'}
        </button>
      </form>
      <p style={{ fontSize: 11, color: '#C4BFB8', textAlign: 'center', marginTop: 14 }}>
        Sin spam. Solo para darte seguimiento.
      </p>
    </div>
  )
}

// ── Main widget ────────────────────────────────────────────────────────────────
export default function AgentChat() {
  const [open, setOpen]           = useState(false)
  const [mounted, setMounted]     = useState(false)
  const [gated, setGated]         = useState(false)
  const [messages, setMessages]   = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput]         = useState('')
  const [typing, setTyping]       = useState(false)
  const [userCount, setUserCount] = useState(0)
  const [showFunnel, setShowFunnel] = useState(false)
  const [pulsed, setPulsed]       = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof sessionStorage !== 'undefined') {
      setGated(sessionStorage.getItem('rud_lead_gated') === '1')
    }
    const t = setTimeout(() => setPulsed(true), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open && gated) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 80)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, messages, gated])

  const handleGateSubmit = useCallback(async (name: string, email: string) => {
    try {
      await fetch('/api/chat-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, page: window.location.pathname }),
      })
    } catch {}
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('rud_lead_gated', '1')
    }
    setGated(true)
  }, [])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { id: uid(), role: 'user', text: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    const newCount = userCount + 1
    setUserCount(newCount)

    await new Promise(r => setTimeout(r, 700 + Math.random() * 600))
    setTyping(false)

    const lower = text.toLowerCase()

    // Navigation shortcuts — keep clients on the website
    if (
      lower.includes('chat con hermes') || lower.includes('hablar hermes') ||
      lower.includes('chat con aura') || lower.includes('hablar aura') ||
      lower.includes('con hermes') || lower.includes('con aura') ||
      lower === 'hermes' || lower === 'aura' ||
      lower.includes('hablar con un asesor') || lower.includes('solicitar llamada')
    ) {
      setOpen(false)
      window.location.href = '/contact'
      return
    }
    if (lower.includes('pedir presupuesto') || lower.includes('presupuesto por email')) {
      setOpen(false)
      window.location.href = '/contact'
      return
    }
    if (lower.includes('ver trabajos')) {
      setOpen(false)
      window.location.href = '/work'
      return
    }
    if (lower.includes('pedir demo') || lower.includes('ver caso de uso')) {
      setOpen(false)
      window.location.href = '/contact?servicio=ia'
      return
    }
    if (lower.includes('ver servicios')) {
      setOpen(false)
      window.location.href = '/services'
      return
    }

    const intent = matchIntent(text)
    const botMsg: ChatMessage = {
      id: uid(),
      role: 'bot',
      text: intent ? intent.response : getFallback(),
      chips: intent?.chips,
    }
    setMessages(prev => [...prev, botMsg])

    if (newCount >= FUNNEL_TRIGGER && !showFunnel) {
      setShowFunnel(true)
    }
  }, [userCount, showFunnel])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) sendMessage(input)
  }

  if (!mounted) return null

  return (
    <>
      {open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 49 }} aria-hidden />}

      {/* Chat panel */}
      <div
        aria-label="Chat con agentes RUD"
        role="dialog"
        style={{
          position: 'fixed',
          bottom: 80,
          right: 'clamp(1rem,3vw,1.5rem)',
          zIndex: 50,
          width: 'min(360px, calc(100vw - 2rem))',
          height: 'min(520px, calc(100dvh - 120px))',
          background: 'white',
          borderRadius: 20,
          border: '1px solid #E2DDD7',
          boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.22s cubic-bezier(.22,1,.36,1), transform 0.22s cubic-bezier(.22,1,.36,1)',
        }}
      >
        {/* Header */}
        <div style={{ padding: '14px 16px', borderBottom: '1px solid #F0EDE6', background: '#FAFAFA', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: '#0A0908', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0A0908', lineHeight: 1 }}>Hermes · RUD Studio</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: '#6B7280' }}>Agente activo · respuesta inmediata</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Cerrar chat"
            style={{ width: 28, height: 28, borderRadius: '50%', border: 'none', background: '#F0EDE6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round"><path d="M2 2l8 8M10 2l-8 8"/></svg>
          </button>
        </div>

        {/* Gate or chat */}
        {!gated ? (
          <GateForm onSubmit={handleGateSubmit} />
        ) : (
          <>
            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {messages.map(msg => (
                <Bubble key={msg.id} msg={msg} onChip={sendMessage} />
              ))}
              {typing && (
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ background: '#F0EDE6', borderRadius: '4px 16px 16px 16px' }}>
                    <TypingDots />
                  </div>
                </div>
              )}
              {showFunnel && !typing && <FunnelCard onClose={() => setOpen(false)} />}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} style={{ padding: '10px 12px', borderTop: '1px solid #F0EDE6', display: 'flex', gap: 8, flexShrink: 0 }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu pregunta..."
                style={{ flex: 1, padding: '9px 14px', borderRadius: 9999, border: '1.5px solid #E2DDD7', fontFamily: 'inherit', fontSize: 13, color: '#0A0908', background: '#FAFAFA', outline: 'none', minWidth: 0 }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: input.trim() ? '#0A0908' : '#E2DDD7', cursor: input.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
              </button>
            </form>
          </>
        )}
      </div>

      {/* Floating trigger */}
      <button
        onClick={() => { setOpen(v => !v); setPulsed(false) }}
        aria-label={open ? 'Cerrar chat' : 'Abrir chat con agente Hermes'}
        style={{
          position: 'fixed',
          bottom: 'clamp(1rem,3vw,1.5rem)',
          right: 'clamp(1rem,3vw,1.5rem)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '0 18px',
          height: 50,
          borderRadius: 9999,
          background: open ? '#1A1A1A' : '#0A0908',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
          cursor: 'pointer',
          boxShadow: pulsed && !open
            ? '0 0 0 6px rgba(123,104,238,0.18), 0 8px 32px rgba(0,0,0,0.35)'
            : '0 8px 32px rgba(0,0,0,0.3)',
          transition: 'all 0.2s cubic-bezier(.22,1,.36,1)',
          animation: pulsed && !open ? 'chatPulse 2s ease-in-out infinite' : 'none',
        }}
      >
        {!open && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0, boxShadow: '0 0 6px rgba(34,197,94,0.7)' }} />}
        {open
          ? <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
          : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        }
        <span style={{ fontSize: 13, fontWeight: 600 }}>{open ? 'Cerrar' : 'Hablar con Hermes'}</span>
        {!open && (
          <span style={{ padding: '2px 7px', borderRadius: 9999, background: 'rgba(123,104,238,0.25)', border: '1px solid rgba(123,104,238,0.35)', fontSize: 10, fontWeight: 700, color: '#A89BF0' }}>IA</span>
        )}
      </button>

      <style>{`
        @keyframes chatPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(123,104,238,0), 0 8px 32px rgba(0,0,0,0.3); }
          50%      { box-shadow: 0 0 0 8px rgba(123,104,238,0.15), 0 8px 32px rgba(0,0,0,0.3); }
        }
        @keyframes typingDot {
          0%,60%,100% { transform: translateY(0); opacity: 0.4; }
          30%          { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
