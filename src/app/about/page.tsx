import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-rud.png" alt="RUD" className="h-10" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#work" className="text-sm font-medium hover:text-gray-600 transition">WORK</Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition">ABOUT</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-gray-600 transition">PRICING</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-gray-600 transition">BLOG</Link>
          </div>
          <Link href="/contact" className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-16">
            We are a creative agency building bold brands with thoughtful design.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded over 12 years ago, RUD has grown from a small design studio to a full-service creative agency. We believe in the power of thoughtful design to transform businesses.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of designers, developers, and strategists work together to create impactful solutions that drive results for our clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 text-center">
                <p className="text-4xl font-bold">50+</p>
                <p className="text-gray-500">Projects</p>
              </div>
              <div className="bg-gray-50 p-8 text-center">
                <p className="text-4xl font-bold">30+</p>
                <p className="text-gray-500">Clients</p>
              </div>
              <div className="bg-gray-50 p-8 text-center">
                <p className="text-4xl font-bold">12+</p>
                <p className="text-gray-500">Years</p>
              </div>
              <div className="bg-gray-50 p-8 text-center">
                <p className="text-4xl font-bold">∞</p>
                <p className="text-gray-500">Possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
