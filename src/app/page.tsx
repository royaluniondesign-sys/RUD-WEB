'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'

// ═══════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-[68px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(10,9,8,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(10,9,8,.035) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />

      <div className="container-custom relative z-10" style={{paddingTop:'5rem',paddingBottom:'5rem'}}>
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 border border-[#E2DDD7] rounded-full text-xs font-medium text-[#6B7280]">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Aceptando proyectos · Barcelona
          </span>
        </div>

        <h1 className="animate-fade-in-up anim-d1 font-bold leading-[1.02] tracking-tight mb-6"
          style={{fontSize:'clamp(2.4rem,5.5vw,5.2rem)',letterSpacing:'-0.03em',maxWidth:'820px'}}>
          Creamos marcas que<br />
          <span className="italic font-light" style={{color:'#A8A0A0'}}>posicionan de verdad.</span>
        </h1>

        <p className="animate-fade-in-up anim-d2 text-[#6B7280] leading-relaxed mb-8"
          style={{fontSize:'clamp(0.95rem,2vw,1.15rem)',maxWidth:'480px'}}>
          Agencia creativa full-stack en Barcelona. Branding estratégico, diseño web, e-commerce, motion y automatización con IA — todo bajo un mismo techo.
        </p>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-4 mb-12">
          <Link href="/contact" className="btn-primary arrow-link">
            Hablemos de tu proyecto
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/work" className="btn-secondary">Ver trabajo real</Link>
        </div>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-3">
          {['Branding','Diseño Web','E-commerce Shopify','Motion Design','AI Automation','Identidad Visual'].map(t => (
            <span key={t} className="keyword-pill">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// MARQUEE
// ═══════════════════════════════════════════════════════════
function Marquee() {
  const items = ['Brand Strategy','Identidad Visual','Diseño Web','Next.js','E-commerce Shopify','Motion Branding','Copywriting','SEO Técnico','AI Automation','Packaging','Fotografía','Marketing Digital']
  const doubled = [...items,...items]
  return (
    <div style={{background:'#0A0908',padding:'14px 0',overflow:'hidden',borderTop:'1px solid #181614',borderBottom:'1px solid #181614'}}>
      <div className="marquee-track" style={{display:'flex',whiteSpace:'nowrap'}}>
        {doubled.map((item, i) => (
          <span key={`marquee-${item}-${i}`} style={{display:'inline-flex',alignItems:'center',gap:'2rem',fontSize:'0.8125rem',fontWeight:500,color:'rgba(255,255,255,0.35)',flexShrink:0,marginRight:'2rem'}}>
            {item} <span style={{color:'rgba(255,255,255,0.12)',fontSize:'0.6rem'}}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// SERVICES — featured 2 + compact 2
// ═══════════════════════════════════════════════════════════
function Services() {
  const featured = [
    {
      title:'Branding & Estrategia de Marca',
      desc:'Posicionamiento competitivo, naming, arquitectura de marca y sistemas de identidad visual construidos para escalar.',
      tags:['Brand Strategy','Naming','Visual Identity','Packaging','Brand Guidelines'],
      href:'/services#branding',
    },
    {
      title:'Diseño Web & Desarrollo Next.js',
      desc:'UX/UI research, diseño en Figma y desarrollo en Next.js 15. Sitios que puntúan 95+ en Lighthouse y se posicionan en Google desde el día uno.',
      tags:['UX Research','UI en Figma','Next.js 15','E-commerce Shopify','SEO técnico'],
      href:'/services#web',
    },
  ]
  const secondary = [
    {title:'Contenido, Motion & Producción',desc:'Copywriting estratégico, dirección de arte, animaciones de marca y producción multiplataforma.',href:'/services#content'},
    {title:'Marketing Digital & Growth',desc:'SEO orgánico, Google Ads, Meta Ads, email marketing y estrategia de contenido.',href:'/services#marketing'},
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
            <div>
              <p className="section-label">Lo que hacemos · Barcelona</p>
              <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'0.5rem'}}>Servicios</h2>
              <p style={{fontSize:'0.875rem',color:'var(--muted)',maxWidth:'340px',lineHeight:1.6}}>Estrategia, diseño, tecnología y automatización para marcas con ambición.</p>
            </div>
            <Link href="/services" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',fontSize:'0.875rem',fontWeight:500,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver los 6 servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Featured services — larger */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 55}>
              <Link href={s.href} style={{display:'flex',flexDirection:'column',background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'2rem',textDecoration:'none',height:'100%'}} className="card-lift">
                <h3 style={{fontSize:'1.25rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.25,color:'var(--fg)'}}>{s.title}</h3>
                <p style={{fontSize:'0.875rem',color:'var(--muted)',lineHeight:1.65,marginBottom:'1.25rem',flex:1}}>{s.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                  {s.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Secondary services — compact */}
        <div className="grid md:grid-cols-2 gap-4">
          {secondary.map((s, i) => (
            <ScrollReveal key={s.title} delay={(i+2) * 55}>
              <Link href={s.href} className="arrow-link card-lift" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'1.25rem 1.5rem',textDecoration:'none'}}>
                <div>
                  <h3 style={{fontSize:'1rem',fontWeight:700,color:'var(--fg)',marginBottom:'4px'}}>{s.title}</h3>
                  <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.5}}>{s.desc}</p>
                </div>
                <svg style={{flexShrink:0}} width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CHARIOT — compact callout
// ═══════════════════════════════════════════════════════════
function Chariot() {
  return (
    <section style={{background:'#06040E',position:'relative',overflow:'hidden',padding:'clamp(3rem,6vw,5rem) 0'}}>
      <div className="container-custom" style={{position:'relative',zIndex:1}}>
        <ScrollReveal>
          <div style={{borderRadius:'16px',border:'1px solid rgba(123,104,238,0.15)',background:'rgba(123,104,238,0.04)',padding:'clamp(1.5rem,4vw,2.5rem)'}}>
            <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',alignItems:'center',justifyContent:'space-between'}}>
              <div style={{flex:'1 1 400px',maxWidth:'600px'}}>
                <div style={{display:'inline-flex',alignItems:'center',gap:'8px',marginBottom:'1rem',padding:'5px 12px',borderRadius:'9999px',border:'1px solid rgba(123,104,238,0.25)',background:'rgba(123,104,238,0.1)'}}>
                  <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7B68EE'}} className="animate-pulse" />
                  <span style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:'#7B68EE'}}>CHARIOT · Motor IA interno</span>
                </div>
                <h2 style={{fontSize:'clamp(1.25rem,3vw,1.75rem)',fontWeight:700,color:'white',letterSpacing:'-0.02em',lineHeight:1.2,marginBottom:'0.75rem'}}>
                  IA local que amplifica nuestra creatividad
                </h2>
                <p style={{color:'#6B7280',lineHeight:1.7,fontSize:'0.875rem'}}>
                  Análisis de briefings, generación de contenido, automatización de workflows — 100% local con Ollama, €0 de coste operativo. Entregamos más calidad en menos tiempo.
                </p>
              </div>
              <Link href="/services#chariot" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'0.75rem 1.5rem',background:'#7B68EE',color:'white',borderRadius:'9999px',fontWeight:600,fontSize:'0.875rem',textDecoration:'none',flexShrink:0,transition:'opacity 0.2s'}}>
                Saber más
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK — 3 clientes reales + testimonial
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{background:'#F0EDE6'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
            <div>
              <p className="section-label">Clientes & proyectos reales</p>
              <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em'}}>Trabajo que habla.</h2>
            </div>
            <Link href="/work" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:500,color:'var(--muted)',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todo el portfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* IDNT featured */}
        <ScrollReveal>
          <Link href="/work/idnt" style={{display:'block',textDecoration:'none',marginBottom:'1rem'}} className="group">
            <div style={{borderRadius:'16px',overflow:'hidden',background:'white',border:'1px solid var(--border)'}} className="card-lift">
              <div className="grid md:grid-cols-2">
                <div style={{position:'relative',minHeight:'260px',overflow:'hidden'}}>
                  <img src="/client-idnt-hero.gif" alt="IDNT® — Moda sostenible Barcelona, identidad visual y e-commerce Shopify"
                    loading="eager"
                    style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent,rgba(0,0,0,0.12))'}} />
                  <span style={{position:'absolute',top:'1rem',left:'1rem',padding:'6px 12px',background:'rgba(0,0,0,0.4)',backdropFilter:'blur(8px)',borderRadius:'9999px',fontSize:'10px',fontFamily:'monospace',color:'rgba(255,255,255,0.9)'}}>↗ idnt.es</span>
                </div>
                <div style={{padding:'clamp(1.5rem,4vw,2.5rem)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'1.25rem'}}>
                      {['E-commerce Shopify','Branding','Identidad Visual','Packaging'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                    <h3 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:700,marginBottom:'0.5rem',color:'var(--fg)'}}>IDNT®</h3>
                    <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'1rem'}}>Moda orgánica sostenible · Barcelona</p>
                    <p style={{fontSize:'0.9rem',color:'var(--muted)',lineHeight:1.7}}>
                      Ropa orgánica y sostenible hecha en Barcelona. Desarrollamos toda la identidad visual, e-commerce Shopify, packaging y automatizaciones de marketing.
                    </p>
                  </div>
                  <div className="arrow-link" style={{marginTop:'1.5rem',display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:600,color:'var(--fg)'}}>
                    Ver proyecto completo
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Aurum + BrandForce */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            {slug:'aurum',name:'Aurum Studio',type:'Joyería artesanal · Barcelona',img:'/client-jewelry-hero.jpg',tags:['Branding Lujo','Identidad Visual','Web','Fotografía'],desc:'Identidad de lujo accesible para joyería artesanal barcelonesa.'},
            {slug:'brandforce',name:'BrandForce Agency',type:'Agencia marketing · Madrid',img:'/client-agency-team.jpg',tags:['White-label','Desarrollo','AI Automation'],desc:'Partner creativo white-label para agencia de marketing.'},
          ].map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i+1)*80}>
              <Link href={`/work/${p.slug}`} style={{display:'flex',flexDirection:'column',background:'white',borderRadius:'16px',overflow:'hidden',border:'1px solid var(--border)',textDecoration:'none',height:'100%'}} className="card-lift group">
                <div style={{height:'200px',overflow:'hidden',position:'relative'}}>
                  <img src={p.img} alt={`${p.name} — ${p.type}`}
                    loading="lazy"
                    style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.35),transparent)'}} />
                </div>
                <div style={{padding:'1.25rem',flex:1,display:'flex',flexDirection:'column'}}>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginBottom:'0.75rem'}}>
                    {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 style={{fontSize:'1.1rem',fontWeight:700,marginBottom:'0.25rem',color:'var(--fg)'}}>{p.name}</h3>
                  <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'0.5rem'}}>{p.type}</p>
                  <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.6,flex:1}}>{p.desc}</p>
                  <div className="arrow-link" style={{marginTop:'1rem',fontSize:'0.8125rem',fontWeight:600,color:'var(--fg)',display:'inline-flex',alignItems:'center',gap:'8px'}}>
                    Ver proyecto <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonial */}
        <ScrollReveal delay={200}>
          <div style={{borderRadius:'16px',background:'white',border:'1px solid var(--border)',padding:'clamp(1.5rem,4vw,2rem)',marginBottom:'1rem'}}>
            <div style={{display:'flex',gap:'1rem',alignItems:'flex-start'}}>
              <span style={{fontSize:'2rem',lineHeight:1,color:'var(--border)',fontFamily:'Georgia, serif',flexShrink:0}}>"</span>
              <div>
                <p style={{fontSize:'0.9375rem',color:'var(--fg)',lineHeight:1.7,fontStyle:'italic',marginBottom:'1rem'}}>
                  RUD entendió nuestra visión desde la primera llamada. La identidad que crearon para IDNT no es solo bonita — posiciona la marca exactamente donde queríamos estar.
                </p>
                <p style={{fontSize:'0.8125rem',fontWeight:600,color:'var(--fg)'}}>Fundadora, IDNT®</p>
                <p style={{fontSize:'0.75rem',color:'#9CA3AF'}}>Moda sostenible · Barcelona</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Próximo */}
        <ScrollReveal delay={240}>
          <div style={{border:'2px dashed #D1CDC6',borderRadius:'16px',padding:'2.5rem',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1.5rem',background:'#F8F5F0'}}>
            <div>
              <p style={{fontSize:'10px',fontWeight:500,color:'#C4BFB8',textTransform:'uppercase',letterSpacing:'0.12em',marginBottom:'0.5rem'}}>Próximo proyecto</p>
              <h3 style={{fontSize:'1.25rem',fontWeight:700,color:'#A09898',marginBottom:'0.25rem'}}>Tu marca aquí</h3>
              <p style={{fontSize:'0.8125rem',color:'#C4BFB8'}}>Abiertos a nuevos proyectos · Barcelona y remoto</p>
            </div>
            <Link href="/contact" className="btn-primary">Empezar conversación</Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WHY RUD — 3 items instead of 6
// ═══════════════════════════════════════════════════════════
function WhyRUD() {
  const items = [
    {title:'Estrategia antes de abrir Figma',desc:'Analizamos mercado, competidores y audiencia antes de proponer nada visual. Cada decisión de diseño tiene un porqué estratégico.'},
    {title:'Sin intermediarios — trato directo',desc:'Hablas con quien hace tu proyecto. Sin capas de gestión, sin teléfonos rotos, sin overhead de agencia grande.'},
    {title:'IA que amplifica, no que sustituye',desc:'CHARIOT, nuestro motor de IA interno, acelera procesos sin coste adicional para el cliente. Más calidad, menos tiempo.'},
  ]
  return (
    <section className="section-padding" style={{background:'#FAFAFA'}}>
      <div className="container-custom">
        <ScrollReveal>
          <p className="section-label">Por qué elegirnos</p>
          <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'3rem',maxWidth:'600px'}}>
            Lo que nos diferencia<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#9CA3AF'}}>de otras agencias.</span>
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3" style={{gap:'1px',background:'var(--border)'}}>
          {items.map(item => (
            <div key={item.title} className="why-card" style={{background:'#FAFAFA',padding:'2rem'}}>
              <h3 style={{fontWeight:700,fontSize:'1rem',marginBottom:'0.75rem'}}>{item.title}</h3>
              <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.65}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════
function CTA() {
  return (
    <section style={{background:'#0A0908',padding:'clamp(4rem,8vw,6rem) 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative'}}>
        <ScrollReveal>
          <div style={{maxWidth:'700px'}}>
            <p className="section-label" style={{color:'#333'}}>¿Listo?</p>
            <h2 style={{fontSize:'clamp(2rem,5vw,4rem)',fontWeight:700,color:'white',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'1.5rem'}}>
              Construyamos algo<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#404040'}}>extraordinario juntos.</span>
            </h2>
            <p style={{color:'#6B7280',fontSize:'clamp(0.9rem,2vw,1.1rem)',marginBottom:'2.5rem',maxWidth:'480px',lineHeight:1.7}}>
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas. Basados en Barcelona, trabajamos globalmente.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginBottom:'1.5rem'}}>
              <Link href="/contact" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',background:'white',color:'#0A0908',borderRadius:'9999px',fontWeight:600,textDecoration:'none',fontSize:'0.9375rem',transition:'opacity 0.2s'}}>
                Iniciar conversación
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/work" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',border:'1px solid rgba(255,255,255,0.15)',color:'white',borderRadius:'9999px',fontWeight:500,textDecoration:'none',fontSize:'0.9375rem',transition:'border-color 0.2s'}}>
                Ver trabajo
              </Link>
            </div>
            <p style={{fontSize:'0.875rem',color:'#333'}}>
              O escríbenos a <a href="mailto:hello@rud.studio" style={{color:'white',textDecoration:'none'}}>hello@rud.studio</a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════
function Footer() {
  return (
    <footer style={{background:'#0D0D0D',borderTop:'1px solid #1A1A1A',paddingTop:'4rem',paddingBottom:'2rem'}}>
      <div className="container-custom">
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:'2.5rem',marginBottom:'3rem'}}>
          <div>
            <img src="/logo-rud.svg" alt="RUD Studio — Agencia creativa Barcelona" style={{height:'26px',marginBottom:'1.25rem',filter:'invert(1)',opacity:0.85}} loading="lazy" />
            <p style={{color:'#6B7280',fontSize:'0.8125rem',lineHeight:1.7,maxWidth:'220px'}}>
              Agencia creativa de branding, diseño web y automatización IA en Barcelona.
            </p>
            <a href="mailto:hello@rud.studio" className="footer-link" style={{display:'inline-block',marginTop:'1rem',color:'#3D3D3D',fontSize:'0.75rem',textDecoration:'none'}}>hello@rud.studio</a>
          </div>

          {[
            {title:'Navegar',links:[['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']]},
            {title:'Servicios',links:[['Branding','/services#branding'],['Identidad Visual','/services#identity'],['Diseño Web','/services#web'],['E-commerce','/services#ecommerce'],['AI Automation','/services#chariot']]},
            {title:'Contacto',links:[['hello@rud.studio','mailto:hello@rud.studio'],['Barcelona, España','#'],['Instagram','https://instagram.com/royaluniondesign'],['LinkedIn','https://linkedin.com/company/royaluniondesign']]},
          ].map(col => (
            <div key={col.title}>
              <h4 style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#3D3D3D',marginBottom:'1.25rem'}}>{col.title}</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link href={href} className="footer-link" style={{fontSize:'0.8125rem',color:'#6B7280',textDecoration:'none',transition:'color 0.2s'}}>{label}</Link>
                    ) : (
                      <a href={href} className="footer-link" style={{fontSize:'0.8125rem',color:'#6B7280',textDecoration:'none',transition:'color 0.2s'}} {...(href.startsWith('http') ? {target:'_blank',rel:'noopener noreferrer'} : {})}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{paddingTop:'2rem',borderTop:'1px solid #1A1A1A',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
          <p style={{fontSize:'11px',color:'#2D2D2D'}}>© 2026 RUD Studio · Royal Union Design · Barcelona, España</p>
          <div style={{display:'flex',gap:'1.5rem'}}>
            {[['Privacidad','/privacy'],['Términos','/terms']].map(([l,h])=>(
              <Link key={l} href={h} style={{fontSize:'11px',color:'#2D2D2D',textDecoration:'none'}}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ═══════════════════════════════════════════════════════════
// PAGE — distilled: Hero → Services → CHARIOT → Work → WhyRUD → CTA
// ═══════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Chariot />
      <Work />
      <WhyRUD />
      <CTA />
      <Footer />
    </main>
  )
}
