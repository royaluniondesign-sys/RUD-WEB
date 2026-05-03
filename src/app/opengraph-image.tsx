import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RUD Studio — Branding, Diseño Web y Señalética en Barcelona'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#0A0908',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Logo wordmark */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}>
            <div style={{
              width: 44,
              height: 44,
              background: 'white',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 800,
              color: '#0A0908',
              letterSpacing: '-0.04em',
            }}>R</div>
            <span style={{ fontSize: 20, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
              RUD Studio
            </span>
          </div>
          {/* Location tag */}
          <div style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 9999,
            padding: '8px 18px',
            fontSize: 13,
            color: 'rgba(255,255,255,0.55)',
            fontWeight: 500,
          }}>
            Barcelona, España
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
          }}>
            {['Branding', 'Diseño Web', 'Rótulos', 'E-commerce', 'IA'].map(tag => (
              <div key={tag} style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 9999,
                padding: '6px 14px',
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}>
                {tag}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            Agencia creativa
          </div>
          <div style={{ fontSize: 72, fontWeight: 300, color: 'rgba(255,255,255,0.35)', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            full-stack
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', fontWeight: 400, maxWidth: 500, lineHeight: 1.5 }}>
            Branding estratégico, identidad visual, rótulos luminosos y señalética, diseño web Next.js, e-commerce Shopify y automatización IA.
          </div>
          <div style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.25)',
            fontWeight: 500,
            letterSpacing: '0.06em',
          }}>
            royaluniondesign.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
