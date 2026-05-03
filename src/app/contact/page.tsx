'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  border: '1.5px solid #E2DDD7',
  borderRadius: '12px',
  fontFamily: 'inherit',
  fontSize: '0.9375rem',
  color: '#0A0908',
  background: '#FAFAFA',
  outline: 'none',
  WebkitAppearance: 'none' as const,
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: '#9CA3AF',
  marginBottom: '0.5rem',
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      projectType: (form.elements.namedItem('projectType') as HTMLSelectElement).value,
      budget: (form.elements.namedItem('budget') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Error al enviar el mensaje.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Error inesperado. Escríbenos a hello@rud.studio')
    }
  }

  return (
    <main style={{minHeight: '100vh', background: '#F7F5F1'}}>
      <Navbar />
      <section className="hero-gradient" style={{paddingTop: 68}}>
        <div className="container-custom" style={{paddingTop: 'clamp(3rem,7vw,5rem)', paddingBottom: 'clamp(3rem,7vw,5rem)'}}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">

              {/* Info lado izquierdo */}
              <ScrollReveal>
                <p style={{fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14}}>Hablemos</p>
                <h1 style={{fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16}}>
                  Cuéntanos tu proyecto.
                </h1>
                <p style={{color: '#6B7280', lineHeight: 1.7, marginBottom: '2rem', fontSize: 15}}>
                  Respondemos en menos de 24 horas. Si tienes una idea, un reto de marca o un proyecto web, queremos escucharlo.
                </p>
                {/* Qué pasa después */}
                <div style={{background: 'white', borderRadius: 16, border: '1px solid #E2DDD7', padding: 'clamp(1.25rem,3vw,1.75rem)', marginBottom: '2rem'}}>
                  <p style={{fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: 16}}>Qué pasa después</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
                    {[
                      {step: '1', text: 'Respondemos en menos de 24h'},
                      {step: '2', text: 'Llamada de 30 min sin compromiso'},
                      {step: '3', text: 'Propuesta detallada en 5 días'},
                    ].map(s => (
                      <div key={s.step} style={{display: 'flex', alignItems: 'center', gap: 12}}>
                        <span style={{width: 28, height: 28, borderRadius: '50%', background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#0A0908', flexShrink: 0}}>{s.step}</span>
                        <span style={{fontSize: 14, color: '#0A0908', fontWeight: 500}}>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  {[
                    {label: 'Email', val: 'hello@royaluniondesign.com', href: 'mailto:hello@royaluniondesign.com'},
                    {label: 'Teléfono', val: '611 67 08 30', href: 'tel:+34611670830'},
                    {label: 'Ubicación', val: 'Barcelona & Cerdanyola del Vallès', href: null},
                    {label: 'Alcance', val: 'Barcelona · España · Global', href: null},
                  ].map(({label, val, href}) => (
                    <div key={label}>
                      <p style={{fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4}}>{label}</p>
                      {href
                        ? <a href={href} style={{fontWeight: 600, fontSize: 15, color: '#0A0908', textDecoration: 'none'}}>{val}</a>
                        : <p style={{fontWeight: 600, fontSize: 15}}>{val}</p>}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Formulario */}
              <ScrollReveal delay={100}>
                <form
                  onSubmit={handleSubmit}
                  style={{background: 'white', borderRadius: 20, border: '1px solid #E2DDD7', padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}
                >
                  <h2 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: 4}}>Envíanos un mensaje</h2>

                  {/* Nombre + Email */}
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                      <label htmlFor="contact-name" style={labelStyle}>Nombre</label>
                      <input id="contact-name" name="name" type="text" required placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                      <label htmlFor="contact-email" style={labelStyle}>Email</label>
                      <input id="contact-email" name="email" type="email" required placeholder="tu@email.com" style={inputStyle} />
                    </div>
                  </div>

                  {/* Qué necesitas */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label htmlFor="contact-type" style={labelStyle}>¿Qué necesitas?</label>
                    <select id="contact-type" name="projectType" style={{...inputStyle, color: '#6B7280'}}>
                      <option value="">Selecciona un servicio</option>
                      <option value="Branding & Estrategia">Branding & Estrategia</option>
                      <option value="Identidad Visual">Identidad Visual</option>
                      <option value="Diseño Web & Desarrollo">Diseño Web & Desarrollo</option>
                      <option value="E-commerce Shopify">E-commerce Shopify</option>
                      <option value="Contenido & Motion">Contenido & Motion</option>
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="Señalética & Rótulos">Señalética & Rótulos</option>
                      <option value="AI Automation (Aura & Hermes)">AI Automation (Aura & Hermes)</option>
                      <option value="Varios servicios">Varios servicios</option>
                    </select>
                  </div>

                  {/* Presupuesto */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label htmlFor="contact-budget" style={labelStyle}>Presupuesto estimado</label>
                    <select id="contact-budget" name="budget" style={{...inputStyle, color: '#6B7280'}}>
                      <option value="">Selecciona un rango</option>
                      <option value="Starter — hasta €5.000">Starter — hasta €5.000</option>
                      <option value="Professional — €5.000–€15.000">Professional — €5.000–€15.000</option>
                      <option value="Enterprise — +€15.000">Enterprise — +€15.000</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label htmlFor="contact-message" style={labelStyle}>Mensaje</label>
                    <textarea id="contact-message" name="message" rows={4} required
                      placeholder="Cuéntanos brevemente tu proyecto, tu empresa y qué quieres conseguir..."
                      style={{...inputStyle, resize: 'none', lineHeight: 1.6}} />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <div style={{padding: '0.875rem 1rem', borderRadius: 12, background: '#F0FDF4', border: '1px solid #BBF7D0', fontSize: 14, color: '#166534'}}>
                      Mensaje enviado correctamente. Te respondemos en menos de 24h.
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{padding: '0.875rem 1rem', borderRadius: 12, background: '#FEF2F2', border: '1px solid #FECACA', fontSize: 14, color: '#991B1B'}}>
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary"
                    style={{width: '100%', padding: '1rem', fontSize: 15, marginTop: 4, opacity: status === 'sending' ? 0.6 : 1}}
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                    {status !== 'sending' && (
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </button>
                  <p style={{fontSize: 12, textAlign: 'center', color: '#9CA3AF'}}>
                    O escríbenos a <a href="mailto:hello@royaluniondesign.com" style={{color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3}}>hello@royaluniondesign.com</a>
                  </p>
                </form>
              </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  )
}
