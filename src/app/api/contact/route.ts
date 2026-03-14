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
    const { name, email, company, projectType, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email no válido.' }, { status: 400 })
    }

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeCompany = company ? escapeHtml(String(company)) : ''
    const safeProjectType = projectType ? escapeHtml(String(projectType)) : ''
    const safeBudget = budget ? escapeHtml(String(budget)) : ''
    const safeMessage = escapeHtml(String(message))

    const fromDomain = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'hello@rud.studio'

    const { error } = await resend.emails.send({
      from: `RUD Studio Contact <${fromDomain}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeCompany ? ` — ${safeCompany}` : ''} · ${safeProjectType || 'General'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #FAFAFA; color: #0A0A0A;">
          <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #E5E2DC;">
            <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #9CA3AF;">New Project Enquiry</span>
            <h2 style="margin: 8px 0 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em;">RUD Studio</h2>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 13px; color: #6B7280; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 14px; font-weight: 500;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 13px; color: #6B7280; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #0A0A0A;">${safeEmail}</a></td>
            </tr>
            ${safeCompany ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 13px; color: #6B7280; vertical-align: top;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 14px; font-weight: 500;">${safeCompany}</td>
            </tr>` : ''}
            ${safeProjectType ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 13px; color: #6B7280; vertical-align: top;">Project type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 14px;">${safeProjectType}</td>
            </tr>` : ''}
            ${safeBudget ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 13px; color: #6B7280; vertical-align: top;">Budget</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E5E2DC; font-size: 14px;">${safeBudget}</td>
            </tr>` : ''}
          </table>

          <div style="background: #fff; border: 1px solid #E5E2DC; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
            <p style="margin: 0 0 8px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #9CA3AF;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="font-size: 12px; color: #9CA3AF; margin: 0;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar el email. Inténtalo de nuevo.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Error del servidor. Escríbenos directamente a hello@rud.studio' }, { status: 500 })
  }
}
