import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import { TrackedLink } from '@/components/TrackedLink'

export const metadata = {
  title: 'Camisetas Personalizadas Empresa Barcelona · Serigrafía y DTF | RUD Studio',
  description: 'Camisetas personalizadas para empresas y eventos en Barcelona. Serigrafía, DTF y bordado. Diseño + producción desde 10 unidades. Para equipos, eventos y merchandise.',
  keywords: 'camisetas personalizadas empresa Barcelona, camisetas serigrafía Barcelona, camisetas bordado Barcelona, camisetas evento Barcelona, camisetas DTF Barcelona, camisetas equipo Barcelona',
  alternates: { canonical: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/camisetas-personalizadas-barcelona' },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.royaluniondesign.com/textil-corporativo-barcelona/camisetas-personalizadas-barcelona#service',
  name: 'Camisetas Personalizadas Empresa Barcelona',
  description: 'Diseño y producción de camisetas personalizadas para empresas y eventos en Barcelona. Serigrafía, DTF y bordado. Desde 10 unidades.',
  url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona/camisetas-personalizadas-barcelona',
  provider: { '@id': 'https://www.royaluniondesign.com/#organization' },
  areaServed: { '@type': 'City', name: 'Barcelona' },
  isPartOf: { '@type': 'Service', name: 'Textil Corporativo Barcelona', url: 'https://www.royaluniondesign.com/textil-corporativo-barcelona' },
}

const TECNICAS = [
  { t: 'Serigrafía', d: 'Para tiradas de 30+ unidades con 1-4 colores. El acabado más duradero y económico en volumen. Hasta 6 colores.', min: 'mínimo 30 ud' },
  { t: 'DTF (transfer digital)', d: 'Sin mínimo de tirada. Ideal para diseños con muchos colores, degradados o fotografías. Para 1-29 unidades.', min: 'desde 1 ud' },
  { t: 'Bordado', d: 'Acabado premium para logos en pecho. Resistente a lavados. Especialmente recomendado para uniformes de hostelería y sanitario.', min: 'mínimo 5 ud' },
  { t: 'Transfer vinilo', d: 'Para texto y formas simples. Económico en tiradas pequeñas. Reflectante disponible para seguridad.', min: 'desde 1 ud' },
]

export default function CamisetasPersonalizadasBarcelona() {
  return (
    <main style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />

      <section style={{ background: 'var(--bg)', minHeight: '50svh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '8rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-custom">
          <nav style={{ marginBottom: '1.5rem' }}>
            <Link href="/textil-corporativo-barcelona" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>← TEXTIL CORPORATIVO BARCELONA</Link>
          </nav>
          <h1>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>CAMISETAS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block' }}>PERSONALIZADAS</span>
            <span className="display" style={{ fontSize: 'clamp(2rem, 7vw, 9rem)', lineHeight: 0.85, display: 'block', opacity: 0.28 }}>BARCELONA</span>
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '1.5rem', marginTop: 'clamp(2rem, 4vw, 3rem)', borderTop: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="mono-label" style={{ color: 'var(--muted)' }}>SERIGRAFÍA · DTF · BORDADO · DESDE 10 UNIDADES · DISEÑO INCLUIDO +30ud</p>
            <TrackedLink href="/contact?servicio=camisetas" label="Presupuesto camisetas" location="hero-camisetas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>PEDIR PRESUPUESTO →</TrackedLink>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--warm)', borderTop: '1px solid var(--border)', padding: 'clamp(4rem,7vw,6rem) 0' }}>
        <div className="container-custom">
          <ScrollReveal>
            <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '0.75rem' }}>TÉCNICAS DE PERSONALIZACIÓN</p>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', color: 'var(--fg)', marginBottom: '3rem' }}>CÓMO<br /><em>LO HACEMOS</em></h2>
          </ScrollReveal>
          <div>
            {TECNICAS.map((t, i) => (
              <ScrollReveal key={t.t} delay={i * 50}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid var(--border)', alignItems: 'start' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--fg)' }}>{t.t}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{t.d}</p>
                  <p className="mono-label" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>{t.min}</p>
                </div>
              </ScrollReveal>
            ))}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)', padding: 'clamp(5rem,10vw,8rem) 0', borderTop: '1px solid var(--border)' }}>
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="display" style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', color: 'var(--fg)', marginBottom: '3rem' }}>PIDE TU<br /><em>PRESUPUESTO</em></h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <TrackedLink href="/contact?servicio=camisetas" label="Presupuesto camisetas bottom" location="bottom-camisetas" className="mono-label" style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--fg)', paddingBottom: 2 }}>SOLICITAR PRESUPUESTO →</TrackedLink>
              <a href="https://t.me/+34645593227" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>TELEGRAM · RESPUESTA INMEDIATA</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
