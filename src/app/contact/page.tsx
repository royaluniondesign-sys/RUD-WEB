import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Contacto — RUD Studio · Agencia creativa Barcelona',
  description: 'Contacta con RUD Studio en Barcelona. Branding, diseño web, e-commerce, motion y automatización IA. Respondemos en menos de 24 horas.',
}

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1rem',
  border: '1.5px solid #E2DDD7',
  borderRadius: '12px',
  fontFamily: 'inherit',
  fontSize: '0.9375rem',
  color: '#0A0908',
  background: '#FAFAFA',
  outline: 'none',
  WebkitAppearance: 'none' as const,
}

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: '#9CA3AF',
  marginBottom: '0.5rem',
}

export default function Contact() {
  return (
    <main style={{minHeight: '100vh', background: '#F7F5F1'}}>
      <Navbar />
      <section className="hero-gradient" style={{paddingTop: 68}}>
        <div className="container-custom" style={{paddingTop: 'clamp(3rem,7vw,5rem)', paddingBottom: 'clamp(3rem,7vw,5rem)'}}>
          {/* Grid 2 cols en desktop, 1 en mobile */}
          <div style={{display: 'grid', gap: 'clamp(2rem,5vw,4rem)', gridTemplateColumns: '1fr'}}>
            <style>{`@media(min-width:768px){#contact-grid{grid-template-columns:1fr 1fr!important}}`}</style>
            <div id="contact-grid" style={{display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(2rem,5vw,4rem)', alignItems: 'start'}}>

              {/* Info lado izquierdo */}
              <ScrollReveal>
                <p style={{fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#9CA3AF', marginBottom: 14}}>Hablemos</p>
                <h1 style={{fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16}}>
                  Cuéntanos tu proyecto.
                </h1>
                <p style={{color: '#6B7280', lineHeight: 1.7, marginBottom: '2rem', fontSize: 15}}>
                  Respondemos en menos de 24 horas. Si tienes una idea, un reto de marca o un proyecto web, queremos escucharlo.
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  {[
                    {label: 'Email', val: 'hello@rud.studio', href: 'mailto:hello@rud.studio'},
                    {label: 'Ubicación', val: 'Barcelona, España', href: null},
                    {label: 'Alcance', val: 'Barcelona · España · Global', href: null},
                  ].map(({label, val, href}) => (
                    <div key={label}>
                      <p style={{fontSize: 10, color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4}}>{label}</p>
                      {href
                        ? <a href={href} style={{fontWeight: 600, fontSize: 15, color: '#0A0908', textDecoration: 'none'}}>{val}</a>
                        : <p style={{fontWeight: 600, fontSize: 15}}>{val}</p>}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Formulario */}
              <ScrollReveal delay={100}>
                <div style={{background: 'white', borderRadius: 20, border: '1px solid #E2DDD7', padding: 'clamp(1.5rem,4vw,2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  <h2 style={{fontSize: '1.25rem', fontWeight: 700, marginBottom: 4}}>Envíanos un mensaje</h2>

                  {/* Nombre + Email */}
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                      <label style={labelStyle}>Nombre</label>
                      <input type="text" placeholder="Tu nombre" style={inputStyle} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                      <label style={labelStyle}>Email</label>
                      <input type="email" placeholder="tu@email.com" style={inputStyle} />
                    </div>
                  </div>

                  {/* Qué necesitas */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label style={labelStyle}>¿Qué necesitas?</label>
                    <select style={{...inputStyle, color: '#6B7280'}}>
                      <option>Branding & Estrategia</option>
                      <option>Identidad Visual</option>
                      <option>Diseño Web & Desarrollo</option>
                      <option>E-commerce Shopify</option>
                      <option>Contenido & Motion</option>
                      <option>Marketing Digital</option>
                      <option>AI Automation con CHARIOT</option>
                      <option>Varios servicios</option>
                    </select>
                  </div>

                  {/* Presupuesto */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label style={labelStyle}>Presupuesto estimado</label>
                    <select style={{...inputStyle, color: '#6B7280'}}>
                      <option>Starter — hasta €5.000</option>
                      <option>Professional — €5.000–€15.000</option>
                      <option>Enterprise — +€15.000</option>
                      <option>Por definir</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
                    <label style={labelStyle}>Mensaje</label>
                    <textarea rows={4} placeholder="Cuéntanos brevemente tu proyecto, tu empresa y qué quieres conseguir..."
                      style={{...inputStyle, resize: 'none', lineHeight: 1.6}} />
                  </div>

                  {/* CTA */}
                  <a href="mailto:hello@rud.studio"
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '1rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 600, fontSize: 15, textDecoration: 'none', marginTop: 4}}>
                    Enviar mensaje
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <p style={{fontSize: 12, textAlign: 'center', color: '#9CA3AF'}}>
                    O escríbenos a <a href="mailto:hello@rud.studio" style={{color: '#0A0908', textDecoration: 'underline', textUnderlineOffset: 3}}>hello@rud.studio</a>
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
