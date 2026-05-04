import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Trabajo & Proyectos — RUD Studio · Agencia creativa Barcelona',
  description: 'Portfolio de proyectos reales de RUD. Branding, identidad visual, diseño web, e-commerce Shopify y automatización IA para clientes en Barcelona y España.',
}

const PROJECTS = [
  {
    slug: 'idnt', client: 'IDNT®', type: 'Moda sostenible · Barcelona',
    desc: 'Marca de ropa orgánica sostenible hecha en Barcelona. Identidad visual completa, e-commerce Shopify, packaging y automatizaciones de marketing.',
    tags: ['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'],
    img: '/client-idnt-hero.gif', url: 'https://www.idnt.es', featured: true,
  },
  {
    slug: 'aurum', client: 'Aurum Studio', type: 'Joyería artesanal · Barcelona',
    desc: 'Identidad de lujo accesible para joyería artesanal. Branding, sistema visual, web y fotografía de producto.',
    tags: ['Branding Lujo','Identidad Visual','Fotografía','Web Design'],
    img: '/client-jewelry-hero.jpg', featured: false,
  },
  {
    slug: 'brandforce', client: 'BrandForce Agency', type: 'Agencia de marketing · Madrid',
    desc: 'Partner creativo white-label. Diseño, desarrollo y automatización IA como extensión del equipo interno.',
    tags: ['White-label','Diseño Web','Desarrollo','AI Automation'],
    img: '/client-agency-team.jpg', featured: false,
  },
]

export default function Work() {
  return (
    <main>
      <Navbar />
      <section style={{paddingTop: 68, position:'relative', overflow:'hidden', minHeight: 380, background:'#0A0908'}}>
        <img src="/hero-work.jpg" alt="" aria-hidden="true" loading="eager"
          style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:0.42}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,9,8,0.6) 0%,rgba(10,9,8,0.38) 100%)',pointerEvents:'none'}} />
        <div className="container-custom" style={{position:'relative',zIndex:1,paddingTop:'clamp(3rem,7vw,5rem)',paddingBottom:'clamp(2.5rem,5vw,4rem)'}}>
          <ScrollReveal>
            <p style={{fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'rgba(255,255,255,0.45)',marginBottom:12}}>Portfolio · Proyectos reales</p>
            <h1 style={{fontSize:'clamp(2rem,5vw,5rem)',fontWeight:700,lineHeight:1.05,letterSpacing:'-0.035em',marginBottom:'1.25rem',maxWidth:'800px',color:'white'}}>
              Trabajo que habla por sí solo.
            </h1>
            <p style={{fontSize:'clamp(0.9rem,1.5vw,1.0625rem)',color:'rgba(255,255,255,0.62)',maxWidth:'540px',lineHeight:1.7}}>
              Branding, diseño web, e-commerce y automatización IA para marcas con ambición. Cada proyecto empieza con una pregunta: ¿qué necesitas conseguir?
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" style={{background:'var(--bg)'}}>
        <div className="container-custom" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>

          {/* IDNT — Featured full-width */}
          <ScrollReveal>
            <Link href="/work/idnt" className="group block" style={{textDecoration:'none'}}>
              <div className="card-lift" style={{borderRadius:'16px',overflow:'hidden',background:'white',border:'1px solid var(--border)'}}>
                <div className="grid md:grid-cols-2">
                  <div style={{position:'relative',minHeight:'320px',overflow:'hidden'}}>
                    <img src="/client-idnt-hero.gif" alt="IDNT® — Moda sostenible Barcelona"
                      style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'transform 0.7s'}} />
                    <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent,rgba(0,0,0,0.1))'}} />
                    <span style={{position:'absolute',top:'1.25rem',left:'1.25rem',padding:'6px 14px',background:'rgba(0,0,0,0.4)',backdropFilter:'blur(8px)',borderRadius:'9999px',fontSize:'10px',fontFamily:'monospace',color:'rgba(255,255,255,0.9)'}}>↗ idnt.es</span>
                  </div>
                  <div style={{padding:'clamp(2rem,4vw,3rem)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <div>
                      <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'1.5rem'}}>
                        {['E-commerce Shopify','Branding','Identidad Visual','Packaging','Automatizaciones'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                      </div>
                      <h2 style={{fontSize:'clamp(1.75rem,3vw,2.25rem)',fontWeight:700,marginBottom:'0.5rem',color:'var(--fg)'}}>IDNT®</h2>
                      <p style={{fontSize:'0.8125rem',color:'#9CA3AF',fontWeight:500,marginBottom:'1.25rem'}}>Moda orgánica sostenible · Barcelona</p>
                      <p style={{fontSize:'0.9375rem',color:'var(--muted)',lineHeight:1.7}}>
                        Ropa orgánica y sostenible hecha en Barcelona. Desarrollamos toda la identidad visual, e-commerce Shopify, packaging y automatizaciones de marketing.
                      </p>
                    </div>
                    <div className="arrow-link" style={{marginTop:'2rem',display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:600,color:'var(--fg)'}}>
                      Ver proyecto completo
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Aurum + BrandForce — same height grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.filter(p => !p.featured).map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i+1)*80}>
                <Link href={`/work/${p.slug}`} className="group block" style={{textDecoration:'none',height:'100%',display:'flex'}}>
                  <div className="card-lift" style={{borderRadius:'16px',overflow:'hidden',background:'white',border:'1px solid var(--border)',display:'flex',flexDirection:'column',width:'100%'}}>
                    <div style={{height:'220px',overflow:'hidden',position:'relative',flexShrink:0}}>
                      <img src={p.img} alt={`${p.client} — ${p.type}`}
                        loading="lazy"
                        style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.7s'}} />
                      <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.3),transparent)'}} />
                    </div>
                    <div style={{padding:'1.75rem',flex:1,display:'flex',flexDirection:'column'}}>
                      <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'1rem'}}>
                        {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                      </div>
                      <h2 style={{fontSize:'1.25rem',fontWeight:700,marginBottom:'0.375rem',color:'var(--fg)'}}>{p.client}</h2>
                      <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'0.75rem'}}>{p.type}</p>
                      <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.65,flex:1}}>{p.desc}</p>
                      <div className="arrow-link" style={{marginTop:'1.5rem',fontSize:'0.875rem',fontWeight:600,color:'var(--fg)',display:'inline-flex',alignItems:'center',gap:'8px'}}>
                        Ver proyecto
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA card */}
          <ScrollReveal delay={260}>
            <div style={{border:'2px dashed #D1CDC6',borderRadius:'16px',padding:'clamp(2rem,4vw,3rem)',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1.5rem',background:'#F8F5F0'}}>
              <div>
                <p style={{fontSize:'10px',fontWeight:500,color:'#C4BFB8',textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:'0.5rem'}}>Próximo proyecto</p>
                <h3 style={{fontSize:'1.375rem',fontWeight:700,color:'#A09898',marginBottom:'0.375rem'}}>Tu marca aquí</h3>
                <p style={{fontSize:'0.8125rem',color:'#C4BFB8'}}>Abiertos a nuevos proyectos · Barcelona y remoto</p>
              </div>
              <Link href="/contact" className="btn-primary">Empezar conversación</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
