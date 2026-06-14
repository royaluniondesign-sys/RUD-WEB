import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — RUD Studio',
  description: 'Términos y condiciones de uso del sitio web de RUD Studio.',
  alternates: { canonical: 'https://royaluniondesign.com/terms' },
  robots: { index: false, follow: false },
}

export default function Terms() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar light />
      <section style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3rem,8vw,5rem)', paddingBottom: 'clamp(3rem,8vw,5rem)' }}>
          <div style={{ maxWidth: 720 }}>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1rem' }}>RUD STUDIO — LEGAL</p>
            <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', color: 'var(--fg)', marginBottom: '2rem' }}>
              TÉRMINOS Y CONDICIONES
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9375rem', color: '#6B7280', lineHeight: 1.75 }}>
              <p><strong style={{ color: '#0A0908' }}>Última actualización:</strong> Marzo 2026</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>1. Identificación</h2>
              <p>Este sitio web es propiedad de Royal Union Design (RUD Studio), con domicilio en Barcelona, España.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>2. Uso del sitio</h2>
              <p>Este sitio web tiene carácter informativo y de portfolio profesional. Al acceder y utilizar este sitio, aceptas estos términos de uso.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>3. Propiedad intelectual</h2>
              <p>Todo el contenido de este sitio — incluyendo diseños, textos, imágenes, logotipos y código — es propiedad de RUD Studio o de sus respectivos clientes y está protegido por las leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>4. Servicios y precios</h2>
              <p>Los precios y servicios mostrados en este sitio son orientativos. El precio final y alcance de cada proyecto se define en una propuesta personalizada antes de iniciar cualquier trabajo.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>5. Limitación de responsabilidad</h2>
              <p>RUD Studio no se responsabiliza de posibles errores u omisiones en los contenidos del sitio. La información se proporciona tal cual, sin garantías de ningún tipo.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>6. Enlaces externos</h2>
              <p>Este sitio puede contener enlaces a sitios de terceros. RUD Studio no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.</p>

              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#0A0908', marginTop: '0.5rem' }}>7. Legislación aplicable</h2>
              <p>Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona.</p>

              <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E2DDD7' }}>
                <Link href="/contact" style={{ color: '#0A0908', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  ¿Preguntas? Escríbenos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
