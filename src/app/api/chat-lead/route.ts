import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { name, email, page } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log('[CHAT LEAD — no API key]', JSON.stringify({ name, email, page, ts: new Date().toISOString() }))
      return NextResponse.json({ ok: true })
    }

    const resend = new Resend(apiKey)
    const from   = process.env.RESEND_FROM_EMAIL ?? 'noreply@royaluniondesign.com'
    const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })

    await resend.emails.send({
      from: `RUD Web <${from}>`,
      to:   ['hello@royaluniondesign.com'],
      replyTo: email,
      subject: `🎯 Nuevo lead en chat — ${name}`,
      html: `
        <div style="font-family:'Helvetica Neue',sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#FAFAFA;">
          <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;letter-spacing:-.02em;">Nuevo lead capturado en el chat web</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:10px 0;color:#9CA3AF;font-size:12px;width:100px;border-bottom:1px solid #E5E2DC">Nombre</td><td style="padding:10px 0;font-weight:600;font-size:14px;border-bottom:1px solid #E5E2DC">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#9CA3AF;font-size:12px;border-bottom:1px solid #E5E2DC">Email</td><td style="padding:10px 0;font-size:14px;border-bottom:1px solid #E5E2DC"><a href="mailto:${email}" style="color:#0A0908;font-weight:600">${email}</a></td></tr>
            <tr><td style="padding:10px 0;color:#9CA3AF;font-size:12px;border-bottom:1px solid #E5E2DC">Página</td><td style="padding:10px 0;font-size:14px;border-bottom:1px solid #E5E2DC">${page || '/'}</td></tr>
            <tr><td style="padding:10px 0;color:#9CA3AF;font-size:12px">Hora</td><td style="padding:10px 0;font-size:14px">${timestamp}</td></tr>
          </table>
          <p style="color:#9CA3AF;font-size:12px;margin:20px 0 0;">Responde directamente a este email para contactar con el lead.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('chat-lead error:', e)
    return NextResponse.json({ ok: true })
  }
}
