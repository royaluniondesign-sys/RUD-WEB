'use client'
import Link from 'next/link'
import { trackSocialClick, trackEmailClick } from '@/lib/analytics'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--fg)', borderTop: '1px solid #2A2A2A', paddingBottom: '2rem' }}>
      {/* Logo mark — before nav links */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'clamp(3rem,7vw,5rem) 0', borderBottom: '1px solid #222' }}>
        <img
          src="/logo-rud-white.png"
          alt="RUD Studio"
          loading="lazy"
          style={{ width: 'clamp(80px, 12vw, 160px)', mixBlendMode: 'screen', opacity: 0.9 }}
        />
      </div>

      <div className="container-custom" style={{ paddingTop: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <img src="/logo-rud-web-blanco.svg" alt="RUD Studio" style={{ height: '26px', marginBottom: '1.25rem', opacity: 0.85 }} loading="lazy" />
            <p style={{ color: '#6B7280', fontSize: '0.8125rem', lineHeight: 1.7, maxWidth: '220px' }}>
              Agencia creativa de branding, diseño web y automatización IA en Barcelona.
            </p>
            <a href="mailto:hello@royaluniondesign.com" className="footer-link"
              style={{ display: 'inline-block', marginTop: '1rem', color: '#3D3D3D', fontSize: '0.75rem', textDecoration: 'none' }}>
              hello@royaluniondesign.com
            </a>
          </div>

          {([
            { title: 'Navegar',   links: [['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']] as [string,string][] },
            { title: 'Rótulos',   links: [['Neón LED Barcelona','/rotulos/neon-led-barcelona'],['Letras Corpóreas','/rotulos/letras-corporeas-barcelona'],['Vinilos Escaparate','/rotulos/vinilos-escaparate-barcelona'],['Cajas de Luz','/rotulos/cajas-de-luz-barcelona'],['Señalética Interior','/rotulos/senaletica-interior-barcelona'],['Publicidad Exterior','/rotulos/publicidad-exterior-barcelona']] as [string,string][] },
            { title: 'Servicios', links: [['Branding','/services#branding'],['Identidad Visual','/services#identity'],['Diseño Web','/services#web'],['E-commerce','/services#ecommerce'],['Automatización IA · Aura','/services#aura']] as [string,string][] },
            { title: 'Contacto',  links: [['hello@royaluniondesign.com','mailto:hello@royaluniondesign.com'],['Barcelona, España','#'],['Instagram','https://instagram.com/royaluniondesign'],['LinkedIn','https://linkedin.com/company/royaluniondesign']] as [string,string][] },
          ]).map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#3D3D3D', marginBottom: '1.25rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link href={href} className="footer-link" style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}>{label}</Link>
                    ) : (
                      <a href={href} className="footer-link"
                        style={{ fontSize: '0.8125rem', color: '#6B7280', textDecoration: 'none' }}
                        onClick={() => { if (href.startsWith('http')) trackSocialClick(label.toLowerCase()); else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:',''), 'footer') }}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid #1A1A1A', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '11px', color: '#2D2D2D' }}>© 2026 RUD Studio · Royal Union Design · Barcelona, España</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {([['Privacidad','/privacy'],['Términos','/terms']] as [string,string][]).map(([l,h]) => (
              <Link key={l} href={h} style={{ fontSize: '11px', color: '#2D2D2D', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
