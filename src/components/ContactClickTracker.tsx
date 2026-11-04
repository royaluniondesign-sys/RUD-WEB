'use client'
import { useEffect } from 'react'
import { trackEmailClick, trackPhoneClick, trackTelegramClick, trackWhatsAppClick } from '@/lib/analytics'

function locationOf(a: HTMLAnchorElement) {
  const zone = a.closest('footer') ? 'footer' : a.closest('nav') ? 'nav' : 'body'
  return `${window.location.pathname}#${zone}`
}

export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      const href = a.getAttribute('href') ?? ''
      const loc = locationOf(a)
      if (href.startsWith('tel:')) trackPhoneClick(loc)
      else if (href.startsWith('mailto:')) trackEmailClick(href.replace('mailto:', '').split('?')[0], loc)
      else if (href.includes('wa.me') || href.includes('whatsapp.com')) trackWhatsAppClick(loc)
      else if (href.includes('t.me/') || href.includes('telegram.me')) trackTelegramClick(loc)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
