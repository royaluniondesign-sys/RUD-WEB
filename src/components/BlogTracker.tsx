'use client'
import { useEffect } from 'react'
import { trackBlogRead } from '@/lib/analytics'

export default function BlogTracker({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    trackBlogRead(slug, title)
  }, [slug, title])
  return null
}
