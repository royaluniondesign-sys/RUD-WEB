import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, page } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)
      const timestamp = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.CONTACT_TO_EMAIL || 'hello@royaluniondesign.com',
        subject: `🎯 Nuevo lead en chat — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
            <h2 style="margin:0 0 16px;font-size:20px">Nuevo lead capturado en el chat web</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:100px">Nombre</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Página</td><td style="padding:8px 0">${page || '/'}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Hora</td><td style="padding:8px 0">${timestamp}</td></tr>
            </table>
            <hr style="margin:20px 0;border:none;border-top:1px solid #eee">
            <p style="color:#666;font-size:14px">Responde directamente en Telegram (<strong>@rudserverbot</strong>) o por email a <a href="mailto:${email}">${email}</a>.</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('chat-lead error:', e)
    return NextResponse.json({ ok: true })
  }
}
