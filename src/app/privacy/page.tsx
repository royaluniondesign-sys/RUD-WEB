import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Política de Privacidad — RUD Studio',
  description: 'Política de privacidad de RUD Studio. Cómo tratamos tus datos personales.',
  alternates: { canonical: 'https://www.royaluniondesign.com/privacy' },
  robots: { index: false, follow: false },
}

export default function Privacy() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar light />
      <section style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3rem,8vw,5rem)', paddingBottom: 'clamp(3rem,8vw,5rem)' }}>
          <div style={{ maxWidth: 720 }}>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>RUD STUDIO — LEGAL</p>
            <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--fg)', marginBottom: '2rem' }}>
              POLÍTICA DE PRIVACIDAD
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.75 }}>
              <p><strong style={{ color: '#0A0908' }}>Última actualización:</strong> Marzo 2026</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>1. Responsable del tratamiento</h2>
              <p>Royal Union Design (RUD Studio), con domicilio en Barcelona, España. Contacto: <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3 }}>hello@royaluniondesign.com</a></p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>2. Datos que recopilamos</h2>
              <p>Recopilamos únicamente los datos que nos proporcionas voluntariamente a través del formulario de contacto: nombre, email, tipo de proyecto, presupuesto estimado y mensaje. También utilizamos Vercel Analytics para métricas anónimas de uso del sitio.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>3. Finalidad del tratamiento</h2>
              <p>Usamos tus datos exclusivamente para responder a tu consulta y, si lo solicitas, enviarte una propuesta de proyecto. No enviamos newsletters ni comunicaciones comerciales sin tu consentimiento explícito.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>4. Base legal</h2>
              <p>El tratamiento se basa en tu consentimiento al enviar el formulario y en nuestro interés legítimo de responder a consultas comerciales.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>5. Conservación de datos</h2>
              <p>Conservamos tus datos durante el tiempo necesario para gestionar tu consulta y, en caso de iniciar una relación comercial, durante la duración del proyecto más el plazo legal de conservación fiscal.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>6. Derechos</h2>
              <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad escribiendo a <a href="mailto:hello@royaluniondesign.com" style={{ color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3 }}>hello@royaluniondesign.com</a>. Responderemos en un plazo máximo de 30 días.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>7. Cookies y analítica</h2>
              <p>Este sitio utiliza Vercel Analytics y Vercel Speed Insights, que recopilan datos anónimos de rendimiento sin cookies de seguimiento. No utilizamos cookies de terceros ni herramientas de tracking publicitario.</p>

              <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E2DDD7' }}>
                <Link href="/contact" style={{ color: '#0A0908', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  ¿Preguntas sobre privacidad? Escríbenos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
