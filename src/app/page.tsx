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

      <div className="container-custom relative z-10" style={{paddingTop:'5rem',paddingBottom:'5rem'}}>
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#E2DDD7] rounded-full text-xs font-medium text-[#6B7280] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Disponibles · Barcelona
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

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-3 mb-10">
          <Link href="/contact" className="btn-primary">
            Hablemos de tu proyecto
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
          <Link href="/work" className="btn-secondary">Ver trabajo real</Link>
        </div>

        <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-2">
          {['Branding Barcelona','Diseño Web','E-commerce Shopify','Motion Design','AI Automation','Packaging','Brand Strategy','Identidad Visual'].map(t => (
            <span key={t} className="px-3 py-1 bg-white/60 border border-[#E2DDD7] rounded-full text-[#9CA3AF] font-medium backdrop-blur-sm" style={{fontSize:'11px'}}>{t}</span>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 right-8 w-64 h-64 rounded-full blur-3xl opacity-20 float-anim pointer-events-none"
        style={{background:'radial-gradient(circle,#D4EDFB,transparent)'}} />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-15 float-anim-slow pointer-events-none"
        style={{background:'radial-gradient(circle,#FEF0D6,transparent)'}} />
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
          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:'2rem',fontSize:'0.8125rem',fontWeight:500,color:'rgba(255,255,255,0.35)',flexShrink:0,marginRight:'2rem'}}>
            {item} <span style={{color:'rgba(255,255,255,0.12)',fontSize:'0.6rem'}}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════════════════
function Stats() {
  const stats = [
    { num:'8+', label:'Servicios\nespecializados' },
    { num:'3',  label:'Clientes activos\nen cartera' },
    { num:'€0', label:'Coste IA\ncon CHARIOT' },
    { num:'24h',label:'Tiempo máximo\nde respuesta' },
  ]
  return (
    <section style={{background:'#FAFAFA',borderBottom:'1px solid #E2DDD7'}}>
      <div className="container-custom" style={{paddingTop:'3rem',paddingBottom:'3rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'0'}} className="md:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 70}>
              <div style={{padding:'0.5rem 1.5rem',borderRight: i < 3 ? '1px solid #E2DDD7' : 'none'}}
                className={i === 1 || i === 3 ? 'border-r-0 md:border-r' : ''}>
                <p className="stat-number">{s.num}</p>
                <p style={{fontSize:'10px',color:'#9CA3AF',fontWeight:500,marginTop:'4px',textTransform:'uppercase',letterSpacing:'0.08em',whiteSpace:'pre-line',lineHeight:1.4}}>{s.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// SERVICES — actualizados y diferenciados
// ═══════════════════════════════════════════════════════════
function Services() {
  const services = [
    {
      num:'01', icon:'◈', title:'Branding &\nEstrategia de Marca',
      desc:'Posicionamiento competitivo, naming, arquitectura de marca y sistemas de identidad visual construidos para escalar. No hacemos logos bonitos sin estrategia detrás.',
      tags:['Brand Strategy','Naming','Arquitectura de marca','Visual Identity System','Packaging','Brand Guidelines'],
      href:'/services#branding',
    },
    {
      num:'02', icon:'◎', title:'Diseño Web &\nDesarrollo Next.js',
      desc:'UX/UI research, diseño en Figma y desarrollo en Next.js 15 o React. Sitios que puntúan 95+ en Lighthouse, cumplen WCAG y se posicionan en Google desde el día uno.',
      tags:['UX Research','UI en Figma','Next.js 15','React','E-commerce Shopify','SEO técnico','Web Apps'],
      href:'/services#web',
    },
    {
      num:'03', icon:'◉', title:'Contenido, Motion\n& Producción',
      desc:'Copywriting estratégico, dirección de arte, animaciones de marca, video y producción de contenido multiplataforma. Tu marca debe sonar tan bien como se ve.',
      tags:['Copywriting web','Dirección de arte','Motion branding','Video producción','Reels & Social','Brand voice'],
      href:'/services#content',
    },
    {
      num:'04', icon:'◆', title:'Marketing Digital\n& Growth',
      desc:'SEO orgánico técnico, Google Ads, Meta Ads, email marketing y estrategia de contenido. Visibilidad que trae tráfico cualificado, no solo impresiones.',
      tags:['SEO técnico & contenido','Google Ads','Meta Ads','Email marketing','Analytics GA4','CRO'],
      href:'/services#marketing',
    },
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
            <div>
              <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#9CA3AF',marginBottom:'0.75rem'}}>Lo que hacemos · Barcelona</p>
              <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'0.5rem'}}>Servicios</h2>
              <p style={{fontSize:'0.875rem',color:'#6B7280',maxWidth:'340px',lineHeight:1.6}}>Estrategia, diseño, tecnología y automatización para marcas con ambición.</p>
            </div>
            <Link href="/services" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',fontSize:'0.875rem',fontWeight:500,color:'#6B7280',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todos los servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'1rem'}}>
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 55}>
              <Link href={s.href} style={{display:'flex',flexDirection:'column',background:'white',border:'1px solid #E2DDD7',borderRadius:'16px',padding:'1.75rem',textDecoration:'none',height:'100%'}} className="card-lift">
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'1.5rem'}}>
                  <span style={{fontSize:'10px',fontFamily:'monospace',color:'#C4BFB8'}}>{s.num}</span>
                  <span style={{fontSize:'1.25rem',color:'#D4D0CA'}}>{s.icon}</span>
                </div>
                <h3 style={{fontSize:'1.1rem',fontWeight:700,letterSpacing:'-0.02em',marginBottom:'0.75rem',whiteSpace:'pre-line',lineHeight:1.25,color:'#0A0908'}}>{s.title}</h3>
                <p style={{fontSize:'0.8125rem',color:'#6B7280',lineHeight:1.65,marginBottom:'1.25rem',flex:1}}>{s.desc}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'6px'}}>
                  {s.tags.map(tag => (
                    <li key={tag} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'11px',color:'#9CA3AF'}}>
                      <span style={{width:'4px',height:'4px',borderRadius:'50%',background:'#D4D0CA',flexShrink:0}} />{tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <div style={{marginTop:'2rem',textAlign:'center'}}>
            <Link href="/contact" className="btn-primary">
              Solicitar presupuesto · Respondemos en 24h
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// CHARIOT
// ═══════════════════════════════════════════════════════════
function Chariot() {
  const caps = [
    { emoji:'🧠', label:'Análisis creativo', desc:'Audita briefings, competidores y tendencias de mercado antes de abrir Figma. Contexto total.' },
    { emoji:'⚡', label:'Generación de contenido', desc:'Copy, imágenes y assets de marca en minutos. Con la voz y estética exacta de cada cliente.' },
    { emoji:'🔄', label:'Automatización de workflows', desc:'Flujos que corren solos: informes, publicaciones, emails y actualizaciones de cliente.' },
    { emoji:'🎙️', label:'Voz & avatar IA', desc:'Voz sintética personalizada y avatar de video para demos sin cámara ni estudio.' },
    { emoji:'📊', label:'Business intelligence', desc:'Dashboards en tiempo real, rendimiento de campañas y alertas proactivas por proyecto.' },
    { emoji:'🔒', label:'Local · €0 de API', desc:'Todo en infraestructura local con Ollama. Sin subir datos de clientes. Sin facturas mensuales.' },
  ]
  return (
    <section style={{background:'#06040E',position:'relative',overflow:'hidden',padding:'5rem 0'}}>
      <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:'800px',height:'400px',filter:'blur(100px)',opacity:0.14,background:'radial-gradient(ellipse,#7B68EE,transparent)',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative',zIndex:1}}>
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',marginBottom:'3rem',alignItems:'flex-start'}}>
            <div style={{flex:'1 1 320px'}}>
              <div style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 12px',borderRadius:'9999px',border:'1px solid rgba(123,104,238,0.25)',background:'rgba(123,104,238,0.1)',marginBottom:'1.25rem'}}>
                <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#7B68EE'}} className="animate-pulse" />
                <span style={{fontSize:'10px',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.2em',color:'#7B68EE'}}>CHARIOT — Motor interno de RUD</span>
              </div>
              <h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:700,color:'white',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'1.25rem'}}>
                Nuestro Jarvis.<br />
                <span className="gradient-text">IA full-stack</span><br />
                <span style={{color:'rgba(255,255,255,0.2)',fontStyle:'italic',fontWeight:300,fontSize:'0.75em'}}>para agencia creativa.</span>
              </h2>
              <p style={{color:'#6B7280',lineHeight:1.7,maxWidth:'440px',fontSize:'0.9375rem'}}>
                CHARIOT es el super-agente de IA que impulsa RUD internamente. Análisis, creación, optimización y automatización — 100% local, €0 de coste operativo. Así entregamos más calidad en menos tiempo.
              </p>
            </div>

            {/* Terminal */}
            <div style={{flex:'0 0 auto',width:'clamp(260px,100%,320px)',borderRadius:'16px',overflow:'hidden',border:'1px solid rgba(123,104,238,0.2)'}} className="chariot-glow">
              <div style={{background:'#0D0B16',padding:'10px 14px',borderBottom:'1px solid rgba(123,104,238,0.1)',display:'flex',alignItems:'center',gap:'8px'}}>
                <div style={{display:'flex',gap:'5px'}}>
                  {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{width:'10px',height:'10px',borderRadius:'50%',background:c,opacity:0.6}} />)}
                </div>
                <span style={{fontSize:'10px',color:'#3D3556',fontFamily:'monospace',marginLeft:'6px'}}>chariot · sistema activo</span>
              </div>
              <div style={{background:'#080612',padding:'1.25rem',fontFamily:'monospace',fontSize:'11px',display:'flex',flexDirection:'column',gap:'10px'}}>
                {[
                  {k:'modelo',v:'qwen3:14b',c:'#7B68EE'},
                  {k:'estado',v:'● activo',c:'#4ADE80'},
                  {k:'infra',v:'local · ollama',c:'#60A5FA'},
                  {k:'coste API',v:'€0 / mes',c:'#F59E0B'},
                  {k:'uptime',v:'24 / 7',c:'#7B68EE'},
                  {k:'agentes',v:'6 core + 5 spec',c:'#A78BFA'},
                ].map(row => (
                  <div key={row.k} style={{display:'flex',justifyContent:'space-between',gap:'1rem'}}>
                    <span style={{color:'#3D3556'}}>{row.k}</span>
                    <span style={{color:row.c}}>{row.v}</span>
                  </div>
                ))}
                <div style={{paddingTop:'8px',borderTop:'1px solid #1A1525'}}>
                  <span style={{color:'#3D3556'}}>{'> '}</span>
                  <span style={{color:'#7B68EE'}}>analyzing brief.pdf</span>
                  <span className="cursor-blink" style={{color:'#7B68EE'}}>_</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1rem',marginBottom:'2rem'}}>
          {caps.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 55}>
              <div style={{padding:'1.5rem',borderRadius:'16px',border:'1px solid rgba(255,255,255,0.05)',background:'rgba(255,255,255,0.02)',transition:'all 0.3s'}}>
                <div style={{fontSize:'1.5rem',marginBottom:'0.75rem'}}>{c.emoji}</div>
                <h3 style={{fontWeight:700,color:'white',marginBottom:'0.5rem',fontSize:'0.9375rem'}}>{c.label}</h3>
                <p style={{fontSize:'0.8125rem',color:'#6B7280',lineHeight:1.65}}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={360}>
          <div style={{borderRadius:'16px',border:'1px solid rgba(123,104,238,0.15)',background:'rgba(123,104,238,0.05)',padding:'2rem'}}>
            <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',alignItems:'center',justifyContent:'space-between'}}>
              <div>
                <h3 style={{fontSize:'1.125rem',fontWeight:700,color:'white',marginBottom:'0.5rem'}}>¿Quieres CHARIOT en tu empresa?</h3>
                <p style={{fontSize:'0.875rem',color:'#6B7280'}}>Implementamos nuestro stack de IA autónoma adaptado a tu negocio. Sin subscripciones ni nube.</p>
              </div>
              <Link href="/services#chariot" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'0.875rem 1.5rem',background:'#7B68EE',color:'white',borderRadius:'9999px',fontWeight:600,fontSize:'0.875rem',textDecoration:'none',flexShrink:0,transition:'background 0.2s'}}>
                Saber más <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// WORK — 3 clientes reales
// ═══════════════════════════════════════════════════════════
function Work() {
  return (
    <section className="section-padding" style={{background:'#F0EDE6'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'3rem'}}>
            <div>
              <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#9CA3AF',marginBottom:'0.75rem'}}>Clientes & proyectos reales</p>
              <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em'}}>Trabajo que habla.</h2>
            </div>
            <Link href="/work" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'0.875rem',fontWeight:500,color:'#6B7280',textDecoration:'none',whiteSpace:'nowrap'}}>
              Ver todo el portfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* IDNT featured */}
        <ScrollReveal delay={0}>
          <Link href="/work/idnt" style={{display:'block',textDecoration:'none',marginBottom:'1rem'}} className="group">
            <div style={{borderRadius:'16px',overflow:'hidden',background:'white',border:'1px solid #E2DDD7'}} className="card-lift">
              <div style={{display:'grid',gridTemplateColumns:'1fr'}} className="md:grid-cols-2">
                <div style={{position:'relative',minHeight:'260px',overflow:'hidden'}}>
                  <img src="/client-idnt-hero.gif" alt="IDNT® Moda sostenible Barcelona"
                    style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent,rgba(0,0,0,0.12))'}} />
                  <span style={{position:'absolute',top:'1rem',left:'1rem',padding:'6px 12px',background:'rgba(255,255,255,0.2)',backdropFilter:'blur(8px)',border:'1px solid rgba(255,255,255,0.25)',borderRadius:'9999px',fontSize:'10px',fontFamily:'monospace',color:'rgba(255,255,255,0.85)'}}>↗ idnt.es</span>
                </div>
                <div style={{padding:'clamp(1.5rem,4vw,2.5rem)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'6px',marginBottom:'1.25rem'}}>
                      {['E-commerce Shopify','Branding','Identidad Visual','Packaging'].map(t => <span key={t} className="tag-pill">{t}</span>)}
                    </div>
                    <h3 style={{fontSize:'clamp(1.5rem,3vw,2rem)',fontWeight:700,marginBottom:'0.5rem',color:'#0A0908'}}>IDNT®</h3>
                    <p style={{fontSize:'0.75rem',color:'#9CA3AF',fontWeight:500,marginBottom:'1rem'}}>Moda orgánica sostenible · Barcelona</p>
                    <p style={{fontSize:'0.9rem',color:'#6B7280',lineHeight:1.7}}>
                      Ropa orgánica y sostenible hecha en Barcelona. Desarrollamos toda la identidad visual, e-commerce Shopify, packaging y automatizaciones de marketing.
                    </p>
                  </div>
                  <div style={{marginTop:'1.5rem',display:'inline-flex',alignItems:'center',gap:'8px',fontSize:'0.875rem',fontWeight:600,color:'#0A0908'}}>
                    Ver proyecto completo
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Aurum + BrandForce */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1rem',marginBottom:'1rem'}}>
          {[
            {slug:'aurum',name:'Aurum Studio',type:'Joyería artesanal · Barcelona',img:'/client-jewelry-hero.jpg',tags:['Branding Lujo','Identidad Visual','Web','Fotografía'],desc:'Identidad de lujo accesible para joyería artesanal barcelonesa.'},
            {slug:'brandforce',name:'BrandForce Agency',type:'Agencia marketing · Madrid',img:'/client-agency-team.jpg',tags:['White-label','Desarrollo','AI Automation'],desc:'Partner creativo white-label para agencia de marketing.'},
          ].map((p, i) => (
            <ScrollReveal key={p.slug} delay={(i+1)*80}>
              <Link href={`/work/${p.slug}`} style={{display:'flex',flexDirection:'column',background:'white',borderRadius:'16px',overflow:'hidden',border:'1px solid #E2DDD7',textDecoration:'none',height:'100%'}} className="card-lift group">
                <div style={{height:'200px',overflow:'hidden',position:'relative'}}>
                  <img src={p.img} alt={`${p.name} — ${p.type}`}
                    style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.7s'}} />
                  <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,0,0,0.35),transparent)'}} />
                </div>
                <div style={{padding:'1.25rem',flex:1,display:'flex',flexDirection:'column'}}>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'5px',marginBottom:'0.75rem'}}>
                    {p.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                  </div>
                  <h3 style={{fontSize:'1.1rem',fontWeight:700,marginBottom:'0.25rem',color:'#0A0908'}}>{p.name}</h3>
                  <p style={{fontSize:'0.7rem',color:'#9CA3AF',fontWeight:500,marginBottom:'0.5rem'}}>{p.type}</p>
                  <p style={{fontSize:'0.8125rem',color:'#6B7280',lineHeight:1.6,flex:1}}>{p.desc}</p>
                  <div style={{marginTop:'1rem',fontSize:'0.8125rem',fontWeight:600,color:'#0A0908',display:'inline-flex',alignItems:'center',gap:'6px'}}>
                    Ver proyecto <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

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
// WHY RUD
// ═══════════════════════════════════════════════════════════
function WhyRUD() {
  const items = [
    {icon:'◈',title:'Estrategia antes de abrir Figma',desc:'Analizamos mercado, competidores y audiencia antes de proponer nada visual. Cada pixel tiene un porqué.'},
    {icon:'◎',title:'Sin intermediarios — trato directo',desc:'Hablas con quien hace tu proyecto. Sin capas de gestión, sin teléfonos rotos, sin overhead de agencia grande.'},
    {icon:'◉',title:'CHARIOT amplifica la creatividad',desc:'Nuestro agente de IA interno acelera procesos y optimiza resultados sin coste adicional para el cliente.'},
    {icon:'◆',title:'Next.js · 95+ Lighthouse',desc:'Todo lo que construimos puntúa en performance, accesibilidad y SEO técnico. Sin compromisos.'},
    {icon:'◇',title:'Sistemas de marca atemporales',desc:'No diseñamos para la tendencia del mes — construimos identidades que funcionan durante décadas.'},
    {icon:'◐',title:'Barcelona + trabajo global',desc:'Equipo en Barcelona, clientes en España, Europa y América. Online y presencial.'},
  ]
  return (
    <section className="section-padding" style={{background:'#FAFAFA'}}>
      <div className="container-custom">
        <ScrollReveal>
          <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#9CA3AF',marginBottom:'0.75rem'}}>Por qué elegirnos</p>
          <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'3rem',maxWidth:'600px'}}>
            Lo que nos diferencia<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#9CA3AF'}}>de otras agencias.</span>
          </h2>
        </ScrollReveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'1px',background:'#E2DDD7'}}>
          {items.map(item => (
            <div key={item.title} style={{background:'#FAFAFA',padding:'2rem',transition:'background 0.2s'}}
              onMouseEnter={e => (e.currentTarget.style.background='white')}
              onMouseLeave={e => (e.currentTarget.style.background='#FAFAFA')}>
              <div style={{fontSize:'1.5rem',color:'#C4BFB8',marginBottom:'1rem'}}>{item.icon}</div>
              <h3 style={{fontWeight:700,fontSize:'1rem',marginBottom:'0.75rem'}}>{item.title}</h3>
              <p style={{fontSize:'0.8125rem',color:'#6B7280',lineHeight:1.65}}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// PRICING
// ═══════════════════════════════════════════════════════════
function Pricing() {
  const plans = [
    {name:'Starter',price:'€2.500',desc:'Marca lista para lanzar',
      features:['Brand Strategy · 1 sesión','Logo · 3 conceptos','Sistema color & tipografía','Brand Guidelines básico','Formatos editables AI/EPS','Soporte 30 días']},
    {name:'Professional',price:'€7.500',desc:'Identidad + web completa',featured:true,
      features:['Todo en Starter','Identidad visual completa','Diseño web · 5 páginas','Desarrollo Next.js','SEO técnico de base','3 rondas de revisiones']},
    {name:'Enterprise',price:'€15.000+',desc:'Proyecto end-to-end',
      features:['Todo en Professional','E-commerce Shopify','Copywriting completo','Motion branding','AI Automation CHARIOT','Retainer opcional']},
  ]
  return (
    <section className="section-padding" style={{background:'#F7F5F1'}}>
      <div className="container-custom">
        <ScrollReveal>
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#9CA3AF',marginBottom:'0.75rem'}}>Inversión</p>
            <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'0.5rem'}}>Precios transparentes</h2>
            <p style={{color:'#6B7280',fontSize:'0.875rem'}}>Precio fijo, alcance claro. Sin sorpresas.</p>
          </div>
        </ScrollReveal>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'1rem',maxWidth:'900px',margin:'0 auto'}}>
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div style={{
                borderRadius:'16px',padding:'2rem',display:'flex',flexDirection:'column',height:'100%',
                background: plan.featured ? '#0A0908' : 'white',
                border: plan.featured ? '1px solid #0A0908' : '1px solid #E2DDD7',
                transform: plan.featured ? 'none' : 'none',
                boxShadow: plan.featured ? '0 24px 64px rgba(0,0,0,0.15)' : 'none',
              }}>
                {plan.featured && <span style={{display:'inline-block',marginBottom:'1.25rem',padding:'4px 12px',background:'rgba(255,255,255,0.1)',borderRadius:'9999px',fontSize:'10px',fontWeight:500,color:'rgba(255,255,255,0.55)',width:'fit-content'}}>★ Más popular</span>}
                <h3 style={{fontSize:'1.125rem',fontWeight:700,marginBottom:'4px',color:plan.featured?'white':'#0A0908'}}>{plan.name}</h3>
                <p style={{fontSize:'11px',marginBottom:'1.25rem',color:plan.featured?'rgba(255,255,255,0.4)':'#9CA3AF'}}>{plan.desc}</p>
                <p style={{fontSize:'2.75rem',fontWeight:700,letterSpacing:'-0.04em',marginBottom:'1.75rem',color:plan.featured?'white':'#0A0908'}}>{plan.price}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px',flex:1,marginBottom:'1.75rem'}}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{display:'flex',alignItems:'flex-start',gap:'10px',fontSize:'0.8125rem'}}>
                      <svg style={{marginTop:'2px',flexShrink:0}} width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={plan.featured?'rgba(255,255,255,0.1)':'#F0EDE6'}/>
                        <path d="M4 7l2 2 4-4" stroke={plan.featured?'white':'#0A0908'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{color:plan.featured?'rgba(255,255,255,0.6)':'#6B7280'}}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{
                  display:'block',textAlign:'center',padding:'0.875rem',borderRadius:'9999px',
                  fontSize:'0.875rem',fontWeight:600,textDecoration:'none',transition:'opacity 0.2s',
                  background:plan.featured?'white':'#0A0908',color:plan.featured?'#0A0908':'white'
                }}>
                  Empezar con {plan.name}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <p style={{textAlign:'center',fontSize:'0.875rem',color:'#9CA3AF',marginTop:'2rem'}}>
            ¿Proyecto específico? <Link href="/contact" style={{color:'#0A0908',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>Cuéntanos y hacemos presupuesto →</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════
const FAQS = [
  {question:'¿Cuánto tarda un proyecto de branding completo?',answer:'Entre 4 y 6 semanas para identidad completa. Un proyecto branding + web va de 8 a 12 semanas. Acordamos plazos concretos antes de empezar.'},
  {question:'¿Trabajáis solo con clientes en Barcelona?',answer:'No — tenemos clientes en toda España, Europa y América Latina. Todo funciona perfectamente en remoto. Ofrecemos reuniones presenciales en Barcelona si el cliente lo prefiere.'},
  {question:'¿Qué es exactamente CHARIOT?',answer:'CHARIOT es nuestro super-agente de IA interno — no un producto que vendemos, sino la herramienta que usamos para trabajar mejor. Analiza briefings, genera variantes, automatiza tareas y nos permite entregar más calidad en menos tiempo. Si quieres algo similar en tu empresa, hablemos.'},
  {question:'¿Cómo estructuráis los pagos?',answer:'50% al inicio para reservar el proyecto, 50% en la entrega final. Para proyectos Enterprise podemos acordar pagos por hitos. Facturamos con IVA español.'},
  {question:'¿Trabajáis con otras agencias como partners?',answer:'Sí — trabajamos en modo white-label para agencias que necesitan capacidad extra de diseño, desarrollo o automatización IA sin ampliar su equipo fijo.'},
  {question:'¿Ofrecéis mantenimiento después de la entrega?',answer:'Sí. Retainers mensuales para gestión de marca, actualizaciones web, producción de contenido y soporte técnico. Muchos clientes trabajan con nosotros de forma continua.'},
]

function FAQ() {
  return (
    <section className="section-padding" style={{background:'#F0EDE6'}}>
      <div className="container-custom">
        <div style={{maxWidth:'720px',margin:'0 auto'}}>
          <ScrollReveal>
            <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#9CA3AF',marginBottom:'0.75rem'}}>FAQ</p>
            <h2 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,letterSpacing:'-0.03em',marginBottom:'3rem'}}>Preguntas frecuentes</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}><FAQAccordion faqs={FAQS} /></ScrollReveal>
          <ScrollReveal delay={200}>
            <p style={{fontSize:'0.875rem',color:'#6B7280',marginTop:'2.5rem'}}>
              ¿Más preguntas? <Link href="/contact" style={{color:'#0A0908',fontWeight:500,textDecoration:'underline',textUnderlineOffset:'3px'}}>Escríbenos →</Link>
            </p>
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
    <section style={{background:'#0A0908',padding:'6rem 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />
      <div className="container-custom" style={{position:'relative'}}>
        <ScrollReveal>
          <div style={{maxWidth:'700px'}}>
            <p style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#333',marginBottom:'1.25rem'}}>¿Listo?</p>
            <h2 style={{fontSize:'clamp(2rem,5vw,4rem)',fontWeight:700,color:'white',letterSpacing:'-0.03em',lineHeight:1.05,marginBottom:'1.5rem'}}>
              Construyamos algo<br /><span style={{fontStyle:'italic',fontWeight:300,color:'#404040'}}>extraordinario juntos.</span>
            </h2>
            <p style={{color:'#6B7280',fontSize:'clamp(0.9rem,2vw,1.1rem)',marginBottom:'2.5rem',maxWidth:'480px',lineHeight:1.7}}>
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas. Basados en Barcelona, trabajamos globalmente.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginBottom:'1.5rem'}}>
              <Link href="/contact" style={{display:'inline-flex',alignItems:'center',gap:'8px',padding:'1rem 2rem',background:'white',color:'#0A0908',borderRadius:'9999px',fontWeight:600,textDecoration:'none',fontSize:'0.9375rem',transition:'background 0.2s'}}>
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
          <div style={{gridColumn:'span 1'}}>
            <img src="/logo-rud.svg" alt="RUD Barcelona" style={{height:'26px',marginBottom:'1.25rem',filter:'invert(1)',opacity:0.85}} />
            <p style={{color:'#6B7280',fontSize:'0.8125rem',lineHeight:1.7,maxWidth:'220px'}}>
              Agencia creativa de branding, diseño web y automatización IA en Barcelona.
            </p>
            <a href="mailto:hello@rud.studio" style={{display:'inline-block',marginTop:'1rem',color:'#3D3D3D',fontSize:'0.75rem',textDecoration:'none'}}>hello@rud.studio</a>
          </div>

          {[
            {title:'Navegar',links:[['Trabajo','/work'],['Servicios','/services'],['Nosotros','/about'],['Precios','/pricing'],['Blog','/blog'],['Contacto','/contact']]},
            {title:'Servicios',links:[['Branding','/services#branding'],['Identidad Visual','/services#branding'],['Diseño Web','/services#web'],['E-commerce','/services#web'],['AI Automation','/services#chariot']]},
            {title:'Contacto',links:[['hello@rud.studio','mailto:hello@rud.studio'],['Barcelona, España','#'],['Instagram','https://instagram.com/royaluniondesign'],['LinkedIn','https://linkedin.com/company/royaluniondesign']]},
          ].map(col => (
            <div key={col.title}>
              <h4 style={{fontSize:'10px',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.18em',color:'#3D3D3D',marginBottom:'1.25rem'}}>{col.title}</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                {col.links.map(([label, href]) => (
                  <li key={label}><a href={href} style={{fontSize:'0.8125rem',color:'#6B7280',textDecoration:'none',transition:'color 0.2s'}}
                    onMouseEnter={e=>(e.currentTarget.style.color='white')}
                    onMouseLeave={e=>(e.currentTarget.style.color='#6B7280')}>{label}</a></li>
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
// PAGE
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
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
