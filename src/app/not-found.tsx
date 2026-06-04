import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Página no encontrada · RUD Studio',
}

export default function NotFound() {
  return (
    <main id="main-content" style={{ minHeight: '100dvh', background: '#F7F5F1', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(4rem,10vw,8rem) 1.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: 'clamp(5rem,20vw,10rem)', fontWeight: 800, letterSpacing: '-0.06em', lineHeight: 1, color: '#E8E3DB', fontFamily: 'Barlow, sans-serif' }}>404</p>
        <h1 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '0.5rem', marginBottom: '0.75rem', color: '#0A0908' }}>
          Esta página no existe
        </h1>
        <p style={{ fontSize: 15, color: '#6B7280', maxWidth: '36ch', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Puede que hayas seguido un enlace roto o que la URL haya cambiado.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <Link href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
            Volver al inicio
          </Link>
          <Link href="/rotulos"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.875rem 2rem', border: '1.5px solid #E2DDD7', color: '#0A0908', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
            Ver rótulos →
          </Link>
        </div>
      </div>
    </main>
  )
}
