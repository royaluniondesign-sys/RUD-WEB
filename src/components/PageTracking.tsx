'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initScrollDepth, initEngagementTimer, track } from '@/lib/analytics'

export default function PageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    // Explicit page_view on every SPA navigation.
    // GA4's gtag('config') only fires on the initial hard load — client-side
    // Next.js route changes need this explicit call.
    track('page_view', {
      page_path: pathname,
      page_location: typeof window !== 'undefined' ? window.location.href : pathname,
    })

    const cleanScroll = initScrollDepth()
    const cleanTimer  = initEngagementTimer(30)
    return () => {
      cleanScroll?.()
      cleanTimer?.()
    }
  }, [pathname])

  return null
}
