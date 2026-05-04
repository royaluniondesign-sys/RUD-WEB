declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag(...args)
}

// ── Core tracker ────────────────────────────────────────────────
export function track(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
) {
  gtag('event', eventName, params)
}

// ── CONVERSIONS ─────────────────────────────────────────────────

/** Formulario enviado con éxito — conversión principal */
export function trackLead(service: string, budget: string) {
  track('generate_lead', {
    currency: 'EUR',
    service,
    budget,
    form_name: 'contact_multistep',
  })
  track('conversion', {
    send_to: 'G-FH9353K02R',
    event_category: 'lead',
    event_label: service,
  })
}

// ── FORM FUNNEL ──────────────────────────────────────────────────

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

// ── CTA CLICKS ───────────────────────────────────────────────────

export function trackCTA(label: string, destination: string) {
  track('cta_click', { cta_label: label, destination })
}

export function trackPhoneClick() {
  track('phone_call', {
    event_category: 'contact',
    event_label: '+34645593227',
  })
}

export function trackEmailClick(address: string) {
  track('email_click', {
    event_category: 'contact',
    event_label: address,
  })
}

export function trackWhatsAppClick() {
  track('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp_cta',
  })
}

// ── SERVICE ENGAGEMENT ───────────────────────────────────────────

export function trackServiceView(service: string) {
  track('service_view', { service_name: service })
}

export function trackPricingView(plan: string) {
  track('pricing_view', { plan_name: plan })
}

export function trackBlogRead(slug: string, title: string) {
  track('blog_post_view', { article_slug: slug, article_title: title.slice(0, 80) })
}

// ── SCROLL DEPTH ─────────────────────────────────────────────────

export function initScrollDepth() {
  if (typeof window === 'undefined') return
  const milestones = [25, 50, 75, 90]
  const reached = new Set<number>()

  function onScroll() {
    const scrolled =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    milestones.forEach((m) => {
      if (scrolled >= m && !reached.has(m)) {
        reached.add(m)
        track('scroll_depth', { depth_percent: m, page_path: window.location.pathname })
      }
    })
    if (reached.size === milestones.length) {
      window.removeEventListener('scroll', onScroll)
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}

// ── TIME ON PAGE ──────────────────────────────────────────────────

export function initEngagementTimer(thresholdSeconds = 30) {
  if (typeof window === 'undefined') return
  const timer = setTimeout(() => {
    track('page_engaged', {
      engaged_seconds: thresholdSeconds,
      page_path: window.location.pathname,
    })
  }, thresholdSeconds * 1000)
  return () => clearTimeout(timer)
}

// ── VIDEO ─────────────────────────────────────────────────────────

export function trackVideoPlay(videoId: string) {
  track('video_play', { video_id: videoId, page_path: window.location.pathname })
}

// ── OUTBOUND LINKS ────────────────────────────────────────────────

export function trackOutbound(url: string, label?: string) {
  track('outbound_link', { link_url: url, link_label: label ?? url })
}
