import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#0A0908',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 24,
            right: 24,
            height: 10,
            background: '#F5F0E8',
            borderRadius: '0 0 4px 4px',
            opacity: 0.9,
            display: 'flex',
          }}
        />
        {/* R mark */}
        <span
          style={{
            fontSize: 128,
            fontWeight: 900,
            color: '#F5F0E8',
            fontFamily: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            marginTop: 10,
            display: 'flex',
          }}
        >
          R
        </span>
        {/* Bottom label */}
        <span
          style={{
            position: 'absolute',
            bottom: 18,
            fontSize: 18,
            fontWeight: 700,
            color: 'rgba(245, 240, 232, 0.35)',
            fontFamily: '"Arial", sans-serif',
            letterSpacing: '0.25em',
            display: 'flex',
          }}
        >
          UD
        </span>
      </div>
    ),
    { ...size }
  )
}
