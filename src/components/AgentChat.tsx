'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import {
  WELCOME_MESSAGE, FUNNEL_MESSAGE,
  matchIntent, getFallback,
  type ChatMessage,
} from '@/lib/chatKnowledge'

const HERMES_URL = 'https://t.me/rudserverbot'
const AURA_URL   = 'https://t.me/rudagency_bot'
const FUNNEL_TRIGGER = 4   // messages before showing funnel CTA

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
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#7B68EE' }}>Agentes disponibles</span>
      </div>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: 14 }}>
        Parece que tienes un proyecto claro. Continúa con un agente real para obtener una propuesta personalizada.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        <a href={HERMES_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(123,104,238,0.15)', border: '1px solid rgba(123,104,238,0.25)', textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7B68EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1 }}>Hermes · Ventas & proyectos</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Telegram · Respuesta inmediata</p>
          </div>
        </a>
        <a href={AURA_URL} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1 }}>Aura · Estrategia & contenido</p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>Telegram · Respuesta inmediata</p>
          </div>
        </a>
        <Link href="/contact" onClick={onClose}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 14px', borderRadius: 10, background: 'white', textDecoration: 'none' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#0A0908' }}>Pedir presupuesto por email →</span>
        </Link>
      </div>
    </div>
  )
}

// ── Main widget ────────────────────────────────────────────────────────────────
export default function AgentChat() {
  const [open, setOpen]         = useState(false)
  const [mounted, setMounted]   = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE])
  const [input, setInput]       = useState('')
  const [typing, setTyping]     = useState(false)
  const [userCount, setUserCount] = useState(0)
  const [showFunnel, setShowFunnel] = useState(false)
  const [pulsed, setPulsed]     = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setMounted(true)
    // Pulse the button after 4s to draw attention
    const t = setTimeout(() => setPulsed(true), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 80)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, messages])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return
    const userMsg: ChatMessage = { id: uid(), role: 'user', text: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    const newCount = userCount + 1
    setUserCount(newCount)

    // Simulate typing delay
    await new Promise(r => setTimeout(r, 700 + Math.random() * 600))
    setTyping(false)

    // Special chip handlers
    const lower = text.toLowerCase()
    if (lower.includes('chat con hermes') || lower === 'chat con hermes en telegram') {
      window.open(HERMES_URL, '_blank')
      return
    }
    if (lower.includes('chat con aura') || lower === 'chat con aura en telegram') {
      window.open(AURA_URL, '_blank')
      return
    }
    if (lower.includes('pedir presupuesto')) {
      setOpen(false)
      window.location.href = '/contact'
      return
    }
    if (lower.includes('ver trabajos')) {
      setOpen(false)
      window.location.href = '/work'
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

    // Show funnel after threshold
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
      {/* Backdrop */}
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

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '14px 14px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {messages.map(msg => (
            <Bubble key={msg.id} msg={msg} onChip={sendMessage} />
          ))}
          {typing && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
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
