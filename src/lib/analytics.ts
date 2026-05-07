declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export const GA_ID = 'G-2CK3CM6Y03'

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag(...args)
}

// ── Core tracker ─────────────────────────────────────────────────────────────
export function track(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  gtag('event', eventName, params)
}

// ── CONVERSIONS ──────────────────────────────────────────────────────────────

/** Formulario de contacto enviado — conversión principal */
export function trackLead(service: string, budget: string) {
  track('generate_lead', {
    currency: 'EUR',
    service,
    budget,
    form_name: 'contact_multistep',
  })
}

/** Lead capturado desde el chat del agente */
export function trackChatLead(page: string) {
  track('generate_lead', {
    form_name: 'agent_chat',
    page_path: page,
    lead_source: 'chat',
  })
}

// ── FORM FUNNEL ───────────────────────────────────────────────────────────────

export function trackFormStart() {
  track('form_start', { form_name: 'contact_multistep' })
}

export function trackFormStep(step: 1 | 2 | 3, value?: string) {
  track(`form_step_${step}`, {
    form_name: 'contact_multistep',
    step_value: value ?? '',
  })
}

export function trackFormSubmitAttempt() {
  track('form_submit_attempt', { form_name: 'contact_multistep' })
}

export function trackFormError(errorMsg: string) {
  track('form_error', {
    form_name: 'contact_multistep',
    error_message: errorMsg.slice(0, 100),
  })
}

// ── CTA CLICKS ───────────────────────────────────────────────────────────────

export function trackCTA(label: string, destination: string, location?: string) {
  track('cta_click', {
    cta_label: label,
    destination,
    cta_location: location ?? 'unknown',
  })
}

export function trackPhoneClick(location?: string) {
  track('phone_call', {
    event_category: 'contact',
    event_label: '+34645593227',
    click_location: location ?? 'unknown',
  })
}

export function trackEmailClick(address: string, location?: string) {
  track('email_click', {
    event_category: 'contact',
    event_label: address,
    click_location: location ?? 'unknown',
  })
}

export function trackWhatsAppClick(location?: string) {
  track('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp_cta',
    click_location: location ?? 'unknown',
  })
}

// ── SERVICE & CONTENT ENGAGEMENT ─────────────────────────────────────────────

export function trackServiceView(service: string) {
  track('service_view', { service_name: service })
}

export function trackServiceCTA(service: string, label: string) {
  track('service_cta_click', { service_name: service, cta_label: label })
}

export function trackPricingView(plan: string) {
  track('pricing_view', { plan_name: plan })
}

export function trackPricingCTA(plan: string, label: string) {
  track('pricing_cta_click', { plan_name: plan, cta_label: label })
}

export function trackProjectView(projectSlug: string, projectName: string) {
  track('portfolio_view', {
    project_slug: projectSlug,
    project_name: projectName.slice(0, 60),
  })
}

export function trackBlogRead(slug: string, title: string) {
  track('blog_post_view', {
    article_slug: slug,
    article_title: title.slice(0, 80),
  })
}

export function trackGalleryView(section: string, imageIndex: number) {
  track('gallery_view', { gallery_section: section, image_index: imageIndex })
}

// ── CHAT AGENT ────────────────────────────────────────────────────────────────

export function trackChatOpen(page: string) {
  track('chat_open', { page_path: page })
}

export function trackChatMessage(messageCount: number) {
  track('chat_message', { message_count: messageCount })
}

export function trackChatLeadForm(page: string) {
  track('chat_lead_form_shown', { page_path: page })
}

// ── NAVIGATION & OUTBOUND ─────────────────────────────────────────────────────

export function trackNavCTA(label: string) {
  track('nav_cta_click', { cta_label: label })
}

export function trackOutbound(url: string, label?: string) {
  track('outbound_link', { link_url: url, link_label: label ?? url })
}

export function trackSocialClick(platform: string) {
  track('social_click', { platform, event_category: 'social' })
}

// ── SCROLL DEPTH ──────────────────────────────────────────────────────────────

export function initScrollDepth() {
  if (typeof window === 'undefined') return
  const milestones = [25, 50, 75, 90]
  const reached = new Set<number>()

  function onScroll() {
    const scrollPct =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    milestones.forEach((m) => {
      if (scrollPct >= m && !reached.has(m)) {
        reached.add(m)
        track('scroll_depth', {
          depth_percent: m,
          page_path: window.location.pathname,
        })
      }
    })
    if (reached.size === milestones.length) {
      window.removeEventListener('scroll', onScroll)
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

// ── TIME ON PAGE ──────────────────────────────────────────────────────────────

export function initEngagementTimer(thresholdSeconds = 30) {
  if (typeof window === 'undefined') return
  const timers = [30, 60, 120]
  const fired = new Set<number>()

  timers.forEach((t) => {
    setTimeout(() => {
      if (!fired.has(t)) {
        fired.add(t)
        track('page_engaged', {
          engaged_seconds: t,
          page_path: window.location.pathname,
        })
      }
    }, t * 1000)
  })

  // Original signature compatibility — return cleanup noop
  return () => {}
}

// ── VIDEO ──────────────────────────────────────────────────────────────────────

export function trackVideoPlay(videoId: string) {
  track('video_play', {
    video_id: videoId,
    page_path: window.location.pathname,
  })
}
