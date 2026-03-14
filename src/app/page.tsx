'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

// ═══════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════
function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-[68px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(10,9,8,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(10,9,8,.035) 1px,transparent 1px)',backgroundSize:'64px 64px'}} />

      <div className="container-custom relative z-10" style={{paddingTop:'6rem',paddingBottom:'6rem'}}>
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 border border-[#E2DDD7] rounded-full text-xs font-medium text-[#6B7280]">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Aceptando proyectos · Barcelona
          </span>
        </div>

        <h1 className="animate-fade-in-up anim-d1 font-bold leading-[1.02] tracking-tight mb-8"
          style={{fontSize:'clamp(2.6rem,6vw,5.8rem)',letterSpacing:'-0.035em',maxWidth:'900px'}}>
          Creamos marcas que<br />
          <span className="italic font-light" style={{color:'#A8A0A0'}}>posicionan de verdad.</span>
        </h1>

        <p className="animate-fade-in-up anim-d2 text-[#6B7280] leading-relaxed"
          style={{fontSize:'clamp(1rem,2vw,1.25rem)',maxWidth:'520px',marginBottom:'3rem'}}>
          Agencia creativa full-stack en Barcelona. Branding estratégico, diseño web, e-commerce, motion y automatización con IA — todo bajo un mismo techo.
        </p>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-4" style={{marginBottom:'3.5rem'}}>
          <Link href="/contact" className="btn-primary arrow-link">
            Hablemos de tu proyecto
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/work" className="btn-secondary">Ver trabajo real</Link>
        </div>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-3" style={{marginTop:'0'}}>
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
// STATS — 4 bold stats
// ═══════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { number: '50+', label: 'Proyectos entregados' },
    { number: '95+', label: 'Lighthouse score medio' },
    { number: '24h', label: 'Tiempo de respuesta' },
    { number: '100%', label: 'Clientes satisfechos' },
  ]
  return (
    <section style={{background:'#FAFAFA',padding:'clamp(3rem,6vw,5rem) 0'}}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{gap:'1px',background:'var(--border)',borderRadius:'20px',overflow:'hidden'}}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80}>
              <div style={{background:'#FAFAFA',padding:'clamp(1.5rem,4vw,2.5rem)',textAlign:'center'}}>
                <p className="stat-number" style={{color:'var(--fg)',marginBottom:'0.5rem'}}>{stat.number}</p>
                <p style={{fontSize:'0.8125rem',color:'var(--muted)',fontWeight:500}}>{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
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
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3.5rem'}}>
            <div>
              <p className="section-label">Lo que hacemos · Barcelona</p>
              <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.5rem'}}>Servicios</h2>
              <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'380px',lineHeight:1.6}}>Estrategia, diseño, tecnología y automatización para marcas con ambición.</p>
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
              <Link href={s.href} style={{display:'flex',flexDirection:'column',background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'2.5rem',textDecoration:'none',height:'100%'}} className="card-lift">
                <h3 style={{fontSize:'1.375rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'0.75rem',lineHeight:1.25,color:'var(--fg)'}}>{s.title}</h3>
                <p style={{fontSize:'0.9375rem',color:'var(--muted)',lineHeight:1.65,marginBottom:'1.5rem',flex:1}}>{s.desc}</p>
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
// CHARIOT — full section with terminal + capabilities + CTA
// ═══════════════════════════════════════════════════════════
function Chariot() {
  const capabilities = [
    { label: 'ANALISIS', title: 'Análisis de briefings', desc: 'Procesamos tu brief con IA para extraer insights clave y oportunidades estratégicas.' },
    { label: 'CONTENIDO', title: 'Generación de contenido', desc: 'Copy, posts, emails y guiones optimizados para tu marca y audiencia.' },
    { label: 'WORKFLOW', title: 'Automatización de workflows', desc: 'Conectamos herramientas y automatizamos procesos repetitivos de tu negocio.' },
    { label: 'SEO', title: 'SEO técnico e investigación', desc: 'Auditorías, keyword research y optimización técnica impulsados por IA.' },
    { label: 'DATOS', title: 'Análisis de datos', desc: 'Métricas, reportes y visualizaciones para decisiones basadas en datos reales.' },
    { label: 'CODIGO', title: 'Asistencia en desarrollo', desc: 'Generación y revisión de código, testing automatizado y deployment.' },
  ]

  return (
    <section style={{background:'#06040E',position:'relative',overflow:'hidden',padding:'clamp(4rem,8vw,7rem) 0'}}>
      {/* Subtle grid background */}
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(123,104,238,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(123,104,238,0.03) 1px,transparent 1px)',backgroundSize:'64px 64px',pointerEvents:'none'}} />

      <div className="container-custom" style={{position:'relative',zIndex:1}}>
        {/* Header */}
        <ScrollReveal>
          <div style={{textAlign:'center',marginBottom:'4rem'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'8px',marginBottom:'1.5rem',padding:'6px 14px',borderRadius:'9999px',border:'1px solid rgba(123,104,238,0.25)',background:'rgba(123,104,238,0.1)'}}>
              <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--chariot)'}} className="animate-pulse" />
              <span style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',color:'var(--chariot)'}}>CHARIOT · Motor IA interno</span>
            </div>
            <h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:700,color:'white',letterSpacing:'-0.035em',lineHeight:1.1,marginBottom:'1rem',maxWidth:'700px',margin:'0 auto 1rem'}}>
              IA local que amplifica nuestra creatividad
            </h2>
            <p style={{color:'#6B7280',lineHeight:1.7,fontSize:'clamp(0.9rem,1.5vw,1.05rem)',maxWidth:'560px',margin:'0 auto'}}>
              100% local con Ollama, sin coste operativo. Entregamos más calidad en menos tiempo sin que tus datos salgan de nuestros servidores.
            </p>
          </div>
        </ScrollReveal>

        {/* Terminal mockup */}
        <ScrollReveal delay={100}>
          <div className="chariot-glow" style={{maxWidth:'680px',margin:'0 auto 4rem',borderRadius:'12px',border:'1px solid rgba(123,104,238,0.2)',background:'#0D0B18',overflow:'hidden'}}>
            {/* Terminal header */}
            <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'12px 16px',borderBottom:'1px solid rgba(123,104,238,0.1)',background:'rgba(123,104,238,0.04)'}}>
              <span style={{width:'10px',height:'10px',borderRadius:'50%',background:'#FF5F57'}} />
              <span style={{width:'10px',height:'10px',borderRadius:'50%',background:'#FEBC2E'}} />
              <span style={{width:'10px',height:'10px',borderRadius:'50%',background:'#28C840'}} />
              <span style={{flex:1,textAlign:'center',fontSize:'11px',color:'rgba(255,255,255,0.25)',fontFamily:'monospace'}}>chariot@rud-studio</span>
            </div>
            {/* Terminal body */}
            <div style={{padding:'1.25rem 1.5rem',fontFamily:'monospace',fontSize:'13px',lineHeight:1.8}}>
              <p style={{color:'rgba(123,104,238,0.7)'}}>
                <span style={{color:'var(--chariot)'}}>$</span> chariot analyze --brief client-brief.pdf
              </p>
              <p style={{color:'rgba(255,255,255,0.35)'}}>
                Analizando brief... extrayendo insights clave...
              </p>
              <p style={{color:'rgba(255,255,255,0.35)'}}>
                Competidores identificados: 12 | Oportunidades: 8
              </p>
              <p style={{color:'#28C840'}}>
                Informe estratégico generado en 4.2s
              </p>
              <p style={{color:'rgba(123,104,238,0.7)',marginTop:'0.5rem'}}>
                <span style={{color:'var(--chariot)'}}>$</span> chariot generate --content seo-blog
              </p>
              <p style={{color:'rgba(255,255,255,0.35)'}}>
                Generando contenido SEO optimizado...
              </p>
              <p style={{color:'#28C840'}}>
                3 artículos listos para revisión
              </p>
              <p style={{color:'rgba(123,104,238,0.7)',marginTop:'0.5rem'}}>
                <span style={{color:'var(--chariot)'}}>$</span> <span className="cursor-blink" style={{display:'inline-block',width:'8px',height:'14px',background:'var(--chariot)',verticalAlign:'middle'}} />
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 6 capability cards */}
        <div className="grid md:grid-cols-3 gap-4" style={{marginBottom:'4rem'}}>
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 60}>
              <div style={{background:'rgba(123,104,238,0.04)',border:'1px solid rgba(123,104,238,0.12)',borderRadius:'14px',padding:'1.75rem'}}>
                <span style={{display:'inline-block',marginBottom:'0.75rem',padding:'4px 10px',borderRadius:'6px',background:'rgba(123,104,238,0.12)',fontSize:'9px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.12em',color:'var(--chariot)'}}>{cap.label}</span>
                <h3 style={{fontSize:'1rem',fontWeight:700,color:'white',marginBottom:'0.5rem'}}>{cap.title}</h3>
                <p style={{fontSize:'0.8125rem',color:'#6B7280',lineHeight:1.65}}>{cap.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA banner */}
        <ScrollReveal delay={300}>
          <div style={{borderRadius:'16px',border:'1px solid rgba(123,104,238,0.2)',background:'rgba(123,104,238,0.06)',padding:'clamp(1.5rem,4vw,2.5rem)',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:'1.5rem'}}>
            <div style={{maxWidth:'500px'}}>
              <h3 style={{fontSize:'1.25rem',fontWeight:700,color:'white',marginBottom:'0.5rem'}}>Sin coste extra para el cliente</h3>
              <p style={{fontSize:'0.875rem',color:'#6B7280',lineHeight:1.65}}>CHARIOT viene incluido en todos nuestros proyectos. Tú recibes mejor resultado, más rápido, al mismo precio.</p>
            </div>
            <Link href="/services#chariot" className="arrow-link" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'0.75rem 1.5rem',background:'var(--chariot)',color:'white',borderRadius:'9999px',fontWeight:600,fontSize:'0.875rem',textDecoration:'none',flexShrink:0,transition:'opacity 0.2s'}}>
              Saber más
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK — 3 clientes reales + testimonial + tu marca aquí
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{background:'#F0EDE6'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3.5rem'}}>
            <div>
              <p className="section-label">Clientes & proyectos reales</p>
              <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em'}}>Trabajo que habla.</h2>
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
                <div style={{position:'relative',minHeight:'280px',overflow:'hidden'}}>
                  <img src="/client-idnt-hero.gif" alt="IDNT® — Moda sostenible Barcelona, identidad visual y e-commerce Shopify"
                    loading="eager"
                    style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent,rgba(0,0,0,0.12))'}} />
                  <span style={{position:'absolute',top:'1rem',left:'1rem',padding:'6px 12px',background:'rgba(0,0,0,0.4)',backdropFilter:'blur(8px)',borderRadius:'9999px',fontSize:'10px',fontFamily:'monospace',color:'rgba(255,255,255,0.9)'}}>idnt.es</span>
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
          <div style={{borderRadius:'16px',background:'white',border:'1px solid var(--border)',padding:'clamp(1.5rem,4vw,2.5rem)',marginBottom:'1rem'}}>
            <div style={{display:'flex',gap:'1rem',alignItems:'flex-start'}}>
              <span style={{fontSize:'2.5rem',lineHeight:1,color:'var(--border)',fontFamily:'Georgia, serif',flexShrink:0}}>&ldquo;</span>
              <div>
                <p style={{fontSize:'1rem',color:'var(--fg)',lineHeight:1.7,fontStyle:'italic',marginBottom:'1rem'}}>
                  RUD entendió nuestra visión desde la primera llamada. La identidad que crearon para IDNT no es solo bonita — posiciona la marca exactamente donde queríamos estar.
                </p>
                <p style={{fontSize:'0.8125rem',fontWeight:600,color:'var(--fg)'}}>Fundadora, IDNT®</p>
                <p style={{fontSize:'0.75rem',color:'#9CA3AF'}}>Moda sostenible · Barcelona</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tu marca aquí */}
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
// WHY RUD — 6 cards con iconos
// ═══════════════════════════════════════════════════════════
function WhyRUD() {
  const items = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      title:'Estrategia antes de diseño',
      desc:'Investigamos mercado, competidores y audiencia antes de abrir Figma. Cada decisión visual tiene un porqué estratégico.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
      title:'Trato directo, sin capas',
      desc:'Hablas con quien diseña y desarrolla tu proyecto. Sin intermediarios, sin gestores, sin teléfonos rotos.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title:'IA integrada en cada proyecto',
      desc:'CHARIOT analiza, genera y automatiza sin coste extra para ti. Entregas más rápidas y con más calidad.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title:'Full-stack bajo un techo',
      desc:'Branding, web, e-commerce, contenido y automatización. Un equipo, una visión, cero fricción entre proveedores.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
      title:'SEO y rendimiento de serie',
      desc:'Lighthouse 95+, Core Web Vitals en verde, schema.org, meta tags — cada web sale optimizada para Google desde el día uno.',
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
      title:'Partners a largo plazo',
      desc:'No desaparecemos tras la entrega. Iteramos, optimizamos y escalamos tu marca contigo. Retainers flexibles.',
    },
  ]
  return (
    <section className="section-padding" style={{background:'#FAFAFA'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <p className="section-label">Por qué elegirnos</p>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.75rem'}}>
              Lo que nos diferencia
            </h2>
            <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'480px',margin:'0 auto',lineHeight:1.65}}>
              No somos otra agencia generalista. Esto es lo que hacemos diferente.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 60}>
              <div className="card-lift" style={{background:'white',border:'1px solid var(--border)',borderRadius:'16px',padding:'2rem',height:'100%',display:'flex',flexDirection:'column'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'var(--warm)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--fg)',marginBottom:'1.25rem',flexShrink:0}}>
                  {item.icon}
                </div>
                <h3 style={{fontWeight:700,fontSize:'1.0625rem',marginBottom:'0.625rem',letterSpacing:'-0.01em',color:'var(--fg)'}}>{item.title}</h3>
                <p style={{fontSize:'0.8125rem',color:'var(--muted)',lineHeight:1.65,flex:1}}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// INVESTMENT — sutil, sin precios públicos (como agencia premium)
// ═══════════════════════════════════════════════════════════
function Investment() {
  const tiers = [
    {name:'Starter',desc:'Branding base: estrategia, logo, identidad y guidelines.',ideal:'Startups y proyectos nuevos',delivery:'4–6 semanas'},
    {name:'Professional',desc:'Identidad completa + diseño web Next.js con SEO técnico.',ideal:'Marcas en crecimiento',delivery:'8–12 semanas',featured:true},
    {name:'Enterprise',desc:'Proyecto end-to-end: identidad, web, e-commerce, contenido y automatización IA.',ideal:'Transformación completa',delivery:'10–16 semanas'},
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <p className="section-label">Inversión</p>
            <h2 style={{fontSize:'clamp(2rem,4.5vw,3.5rem)',fontWeight:700,letterSpacing:'-0.035em',marginBottom:'0.75rem'}}>Cada proyecto es único</h2>
            <p style={{fontSize:'0.9375rem',color:'var(--muted)',maxWidth:'500px',margin:'0 auto',lineHeight:1.65}}>Presupuestos a medida según lo que necesites. Alcance claro, timeline definido, sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1.25rem',maxWidth:'1040px',margin:'0 auto'}}>
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 80}>
              <div style={{
                borderRadius:'16px',
                padding:'2.25rem',
                display:'flex',
                flexDirection:'column',
                height:'100%',
                background: tier.featured ? '#0A0908' : 'white',
                border: tier.featured ? '1px solid #0A0908' : '1px solid var(--border)',
                boxShadow: tier.featured ? '0 24px 64px rgba(0,0,0,0.12)' : 'none',
              }}>
                {tier.featured && (
                  <span style={{display:'inline-block',marginBottom:'1rem',padding:'5px 14px',background:'rgba(255,255,255,0.1)',borderRadius:'9999px',fontSize:'10px',fontWeight:600,color:'rgba(255,255,255,0.6)',width:'fit-content'}}>
                    Más solicitado
                  </span>
                )}
                <h3 style={{fontSize:'1.375rem',fontWeight:700,marginBottom:'0.75rem',color: tier.featured ? 'white' : 'var(--fg)'}}>{tier.name}</h3>
                <p style={{fontSize:'0.875rem',color: tier.featured ? 'rgba(255,255,255,0.6)' : 'var(--muted)',lineHeight:1.65,marginBottom:'1.5rem',flex:1}}>{tier.desc}</p>
                <div style={{paddingTop:'1.25rem',borderTop: tier.featured ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--border)'}}>
                  <p style={{fontSize:'0.75rem',color: tier.featured ? 'rgba(255,255,255,0.35)' : '#C4BFB8',marginBottom:'0.25rem'}}>Ideal para: {tier.ideal}</p>
                  <p style={{fontSize:'0.75rem',color: tier.featured ? 'rgba(255,255,255,0.35)' : '#C4BFB8'}}>Entrega: {tier.delivery}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <div style={{textAlign:'center',marginTop:'3rem'}}>
            <Link href="/contact" className="btn-primary arrow-link">
              Solicitar presupuesto personalizado
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <p style={{fontSize:'0.8125rem',color:'#9CA3AF',marginTop:'1rem'}}>
              Respondemos en menos de 24h · <Link href="/pricing" style={{color:'var(--fg)',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>Ver precios orientativos</Link>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════
function FAQ() {
  const faqs = [
    { question: '¿Cuánto tarda un proyecto típico?', answer: 'Depende del alcance: un Starter son 4-6 semanas, un Professional 8-12 semanas, y un Enterprise 10-16 semanas. Siempre definimos timeline antes de empezar.' },
    { question: '¿Trabajáis solo en Barcelona?', answer: 'Estamos basados en Barcelona pero trabajamos con clientes de toda España y Europa. Las reuniones pueden ser presenciales o remotas.' },
    { question: '¿Los precios incluyen IVA?', answer: 'Los precios indicados no incluyen IVA (21%). El importe final con IVA se detalla claramente en el presupuesto antes de cualquier compromiso.' },
    { question: '¿Puedo personalizar un paquete?', answer: 'Sí. Todos los paquetes son puntos de partida. Adaptamos el alcance, los entregables y el precio a tus necesidades y objetivos específicos.' },
    { question: '¿Cómo se estructura el pago?', answer: '50% al inicio para reservar tu fecha, 50% restante en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos a lo largo del proyecto.' },
    { question: '¿Qué pasa después de la entrega?', answer: 'Todos los paquetes incluyen soporte post-entrega. Además ofrecemos retainers mensuales para mantenimiento, optimización y crecimiento continuo.' },
  ]

  return (
    <section className="section-padding" style={{background:'var(--warm)'}}>
      <div className="container-custom">
        <div style={{maxWidth:'720px',margin:'0 auto'}}>
          <ScrollReveal>
            <p className="section-label">FAQ</p>
            <h2 style={{fontSize:'clamp(1.6rem,4vw,2.5rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'2.5rem'}}>Preguntas frecuentes</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <FAQAccordion faqs={faqs} />
          </ScrollReveal>
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
    <section style={{background:'#0A0908',padding:'clamp(5rem,10vw,8rem) 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative'}}>
        <ScrollReveal>
          <div style={{maxWidth:'750px'}}>
            <p className="section-label" style={{color:'#333'}}>¿Listo?</p>
            <h2 style={{fontSize:'clamp(2.2rem,5.5vw,4.5rem)',fontWeight:700,color:'white',letterSpacing:'-0.035em',lineHeight:1.05,marginBottom:'1.5rem'}}>
              Construyamos algo<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#404040'}}>extraordinario juntos.</span>
            </h2>
            <p style={{color:'#6B7280',fontSize:'clamp(0.95rem,2vw,1.15rem)',marginBottom:'2.5rem',maxWidth:'500px',lineHeight:1.7}}>
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
// PAGE — Hero → Stats → Services → CHARIOT → Work → WhyRUD → Pricing → FAQ → CTA
// ═══════════════════════════════════════════════════════════
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Chariot />
      <Work />
      <WhyRUD />
      <Investment />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
