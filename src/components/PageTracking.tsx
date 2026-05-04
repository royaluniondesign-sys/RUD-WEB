'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initScrollDepth, initEngagementTimer } from '@/lib/analytics'

export default function PageTracking() {
  const pathname = usePathname()

  useEffect(() => {
    const cleanScroll = initScrollDepth()
    const cleanTimer  = initEngagementTimer(30)
    return () => {
      cleanScroll?.()
      cleanTimer?.()
    }
  }, [pathname])

  return null
}
