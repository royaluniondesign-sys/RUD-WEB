'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initScrollDepth, initEngagementTimer, track } from '@/lib/analytics'

export default function PageTracking() {
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Fire page_view on every client-side route change (Next.js SPA navigation)
    // GA4 only auto-fires page_view on the first hard load — soft navigations need this
    track('page_view', {
      page_path:     pathname,
      page_location: typeof window !== 'undefined' ? window.location.href : pathname,
    })

    const cleanScroll = initScrollDepth()
    const cleanTimer  = initEngagementTimer(30)
    return () => {
      cleanScroll?.()
      cleanTimer?.()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams])

  return null
}
