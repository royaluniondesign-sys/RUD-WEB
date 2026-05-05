'use client'
import Link from 'next/link'
import { trackCTA, trackPhoneClick, trackEmailClick, trackWhatsAppClick } from '@/lib/analytics'

interface Props {
  href: string
  label: string
  location?: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  target?: string
  rel?: string
}

export function TrackedLink({ href, label, location, children, ...rest }: Props) {
  const handleClick = () => {
    if (href.startsWith('tel:')) trackPhoneClick(location)
    else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:', ''), location)
    else if (href.includes('wa.me') || href.includes('whatsapp') || href.includes('t.me') || href.includes('telegram')) trackWhatsAppClick(location)
    else trackCTA(label, href, location)
  }
  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}

export function TrackedA({ href, label, location, children, ...rest }: Props) {
  const handleClick = () => {
    if (href.startsWith('tel:')) trackPhoneClick(location)
    else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:', ''), location)
    else if (href.includes('wa.me') || href.includes('whatsapp') || href.includes('t.me') || href.includes('telegram')) trackWhatsAppClick(location)
    else trackCTA(label, href, location)
  }
  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
