import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function WorkSlug() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <section className="pt-36 pb-20">
        <div className="container-custom max-w-3xl">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] mb-12 transition-colors">
            ← Back to Work
          </Link>
          <p className="text-[var(--muted)] text-lg">Case study coming soon.</p>
        </div>
      </section>
    </main>
  )
}
