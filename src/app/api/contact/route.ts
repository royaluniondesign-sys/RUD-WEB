import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY ?? '')
    const body = await req.json()
    const { name, email, projectType, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email no válido.' }, { status: 400 })
    }

    const safeName    = escapeHtml(String(name))
    const safeEmail   = escapeHtml(String(email))
    const safeType    = projectType ? escapeHtml(String(projectType)) : '—'
    const safeBudget  = budget      ? escapeHtml(String(budget))      : '—'
    const safeMessage = escapeHtml(String(message))

    const from   = process.env.RESEND_FROM_EMAIL  ?? 'onboarding@resend.dev'
    const toRUD  = process.env.CONTACT_TO_EMAIL   ?? 'royaluniondesign@gmail.com'

    // ── 1. Notificación interna a RUD ────────────────────────────────────────
    await resend.emails.send({
      from: `Web RUD Studio <${from}>`,
      to: [toRUD],
      replyTo: email,
      subject: `🔔 Nuevo lead: ${safeName} · ${safeType}`,
      html: `
        <div style="font-family:'Helvetica Neue',sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;background:#FAFAFA;color:#0A0A0A;">
          <div style="margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid #E5E2DC;">
            <span style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9CA3AF;">Nuevo mensaje desde royaluniondesign.com</span>
            <h2 style="margin:8px 0 0;font-size:22px;font-weight:700;letter-spacing:-.02em;">RUD Studio</h2>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
            <tr><td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:12px;color:#9CA3AF;width:130px">Nombre</td>
                <td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:14px;font-weight:600">${safeName}</td></tr>
            <tr><td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:12px;color:#9CA3AF">Email</td>
                <td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:14px"><a href="mailto:${safeEmail}" style="color:#0A0A0A">${safeEmail}</a></td></tr>
            <tr><td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:12px;color:#9CA3AF">Servicio</td>
                <td style="padding:11px 0;border-bottom:1px solid #E5E2DC;font-size:14px">${safeType}</td></tr>
            <tr><td style="padding:11px 0;font-size:12px;color:#9CA3AF">Presupuesto</td>
                <td style="padding:11px 0;font-size:14px">${safeBudget}</td></tr>
          </table>
          <div style="background:#fff;border:1px solid #E5E2DC;border-radius:10px;padding:20px;margin-bottom:28px;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9CA3AF">Mensaje</p>
            <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${safeMessage}</p>
          </div>
          <p style="font-size:12px;color:#9CA3AF;margin:0">Responde directamente a este email para contactar con ${safeName}.</p>
        </div>
      `,
    })

    // ── 2. Auto-respuesta al cliente ─────────────────────────────────────────
    await resend.emails.send({
      from: `RUD Studio <${from}>`,
      to: [email],
      subject: `Hemos recibido tu mensaje, ${safeName.split(' ')[0]} — RUD Studio`,
      html: `
        <div style="font-family:'Helvetica Neue',sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;background:#F7F5F1;color:#0A0A0A;">
          <div style="margin-bottom:32px">
            <img src="https://royaluniondesign.com/logo-rud.svg" alt="RUD Studio" style="height:28px;opacity:.85" />
          </div>
          <h1 style="font-size:24px;font-weight:700;letter-spacing:-.03em;margin:0 0 12px;line-height:1.2">
            Gracias, ${safeName.split(' ')[0]}.
          </h1>
          <p style="font-size:15px;color:#4B5563;line-height:1.7;margin:0 0 24px">
            Hemos recibido tu mensaje y te respondemos en <strong>menos de 24 horas</strong>.
          </p>
          <div style="background:#fff;border-radius:12px;border:1px solid #E2DDD7;padding:20px 24px;margin-bottom:28px;">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:#9CA3AF;margin:0 0 14px">Lo que pasa ahora</p>
            <div style="display:flex;flex-direction:column;gap:12px">
              <div style="display:flex;align-items:flex-start;gap:12px">
                <span style="width:24px;height:24px;border-radius:50%;background:#F0EDE6;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span>
                <span style="font-size:14px;color:#374151;line-height:1.5;padding-top:3px">Revisamos tu brief y lo analizamos en detalle</span>
              </div>
              <div style="display:flex;align-items:flex-start;gap:12px">
                <span style="width:24px;height:24px;border-radius:50%;background:#F0EDE6;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span>
                <span style="font-size:14px;color:#374151;line-height:1.5;padding-top:3px">Te escribimos para acordar una llamada de 30 min sin compromiso</span>
              </div>
              <div style="display:flex;align-items:flex-start;gap:12px">
                <span style="width:24px;height:24px;border-radius:50%;background:#F0EDE6;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span>
                <span style="font-size:14px;color:#374151;line-height:1.5;padding-top:3px">Propuesta detallada y personalizada en 5 días</span>
              </div>
            </div>
          </div>
          <p style="font-size:14px;color:#6B7280;margin:0 0 28px;line-height:1.6">
            Si necesitas algo urgente, escríbenos directamente a
            <a href="mailto:hello@royaluniondesign.com" style="color:#0A0908;font-weight:600">hello@royaluniondesign.com</a>
            o llámanos al <a href="tel:+34645593227" style="color:#0A0908;font-weight:600">645 59 32 27</a>.
          </p>
          <div style="padding-top:24px;border-top:1px solid #E2DDD7">
            <p style="font-size:12px;color:#C4BFB8;margin:0">RUD Studio · Royal Union Design · Barcelona &amp; Cerdanyola del Vallès</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error del servidor. Escríbenos directamente a hello@royaluniondesign.com' }, { status: 500 })
  }
}
