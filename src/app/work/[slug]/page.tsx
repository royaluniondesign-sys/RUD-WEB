import Link from 'next/link'
import Navbar from '@/components/Navbar'

export async function generateStaticParams() {
  return [
    { slug: 'future-fur' }, { slug: 'bresicwhitney' }, { slug: 'edlyn-1929' },
    { slug: 'shadey' }, { slug: 'associated-concepts' }, { slug: 'woods' },
    { slug: 'location' }, { slug: 'marshall-white' },
  ]
}

interface Project {
  name: string
  category: string
  year: string
  duration: string
  services: string[]
  heroImage: string
  secondaryImage: string
  tagline: string
  brief: string[]
  approach: string[]
  results: { value: string; label: string; desc: string }[]
  nextSlug: string
  nextName: string
}

const projectsData: Record<string, Project> = {
  'bresicwhitney': {
    name: 'BresicWhitney',
    category: 'Web Design & Development',
    year: '2025',
    duration: '12 weeks',
    services: ['UX Strategy', 'Web Design', 'Next.js Development', 'Performance Optimisation'],
    heroImage: '/work1.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
    tagline: 'Redefining the digital experience for Sydney\'s most recognised real estate brand.',
    brief: [
      'BresicWhitney is one of Sydney\'s most recognised real estate agencies, with 15 offices across the city and a reputation built on exceptional service and market knowledge. When they approached us, their existing website — built in 2019 — was struggling to keep pace with the business it was meant to represent.',
      'The site was slow, difficult to navigate on mobile, and no longer reflected the agency\'s premium positioning. Lead volume from digital had plateaued. The brief was clear: build something that converts, performs, and looks like the market leader they are.',
      'The challenge wasn\'t just aesthetic — it was architectural. The site needed to handle thousands of property listings, agent profiles, suburb guides, and editorial content, all while loading instantly on any device.',
    ],
    approach: [
      'We started with a 3-week discovery phase — analytics deep-dive, competitor audits, and six stakeholder interviews across sales, marketing, and the exec team. The patterns were clear: users were abandoning the property search within 30 seconds, agent profiles weren\'t driving enquiry, and the mobile experience was an afterthought.',
      'From there, we rebuilt the information architecture from scratch. We redesigned the search experience to be frictionless — filtering by suburb, price, and property type in under two taps on mobile. Agent profiles were redesigned around social proof: recent sales, testimonials, and video introductions.',
      'The build was done entirely in Next.js with static generation for property pages and ISR for live listing data. We achieved a 0.9s average load time, down from 3.2s. Every component was built with accessibility (WCAG 2.1 AA) and core web vitals in mind.',
    ],
    results: [
      { value: '+40%', label: 'Qualified Leads', desc: 'Digital enquiries in Q1 post-launch' },
      { value: '0.9s', label: 'Load Time', desc: 'Down from 3.2s on the previous site' },
      { value: '98', label: 'Lighthouse Score', desc: 'Performance on mobile and desktop' },
    ],
    nextSlug: 'edlyn-1929',
    nextName: 'Edlyn 1929',
  },
  'edlyn-1929': {
    name: 'Edlyn 1929',
    category: 'Brand Identity',
    year: '2025',
    duration: '8 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Brand Guidelines'],
    heroImage: '/work2.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1600&q=80',
    tagline: 'Honouring 95 years of craft without living in the past.',
    brief: [
      'Edlyn 1929 is a family-owned food company that has been producing premium condiments and pantry staples since — as the name suggests — 1929. Ninety-five years of business is something to be proud of, but it can also become a trap: brands that lead with heritage can easily look dated rather than established.',
      'The fourth-generation family who commissioned the project came to us with a clear tension: they needed to attract a younger generation of consumers through premium grocers and direct-to-consumer channels, without alienating the loyal customer base that had been buying their products for decades.',
      'The existing brand — a logotype that hadn\'t changed since the 1980s and packaging that felt more convenience store than specialty food — was actively working against them in the channels where growth lived.',
    ],
    approach: [
      'We began with what we call brand archaeology: reviewing every piece of brand material the company had produced since founding, interviewing the family, visiting their production facility, and understanding the genuine story beneath the surface.',
      'The core tension we identified was between provenance and modernity. Our strategic recommendation was to lean into the year itself — 1929 — as a badge of expertise rather than a relic. The visual identity we designed draws from early 20th-century typographic traditions but executes them with precision that reads as contemporary.',
      'The new logo system uses a custom-drawn wordmark alongside a monogram lockup that works across every format from jar labels to trade show stands. The colour palette — deep forest green, warm cream, and black — positions the brand firmly in the premium specialty food tier.',
    ],
    results: [
      { value: '200+', label: 'New Retail Locations', desc: 'Stocked post-rebrand in the first year' },
      { value: '+60%', label: 'D2C Online Sales', desc: 'Year-over-year growth following relaunch' },
      { value: '3×', label: 'Press Coverage', desc: 'Featured in Gourmet Traveller, Broadsheet & Delicious' },
    ],
    nextSlug: 'future-fur',
    nextName: 'Future Fur',
  },
  'future-fur': {
    name: 'Future Fur',
    category: 'Brand Identity & Packaging',
    year: '2025',
    duration: '6 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Launch Assets'],
    heroImage: '/work3.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    tagline: 'Building a challenger brand that punches well above its weight.',
    brief: [
      'Future Fur is a premium pet lifestyle brand founded by two former retail executives who saw a gap between the big-box pet retailers and the genuinely premium end of the market. The category was full of tired, cartoonish branding or clinical whitespace that felt cold.',
      'They came to us seed-funded, with no brand equity and 14 weeks until their first major trade show. The brief was to build an identity from scratch that would earn placement in premium boutiques and lifestyle stores — not pet shop chains.',
      'The positioning challenge was delicate: premium enough to command a price premium, but warm and accessible enough to appeal to the emotional connection people have with their pets.',
    ],
    approach: [
      'We ran a compressed 2-week brand strategy phase — archetype mapping, competitive whitespace analysis, and naming validation. The strategic territory we landed on was "elevated care" — the idea that caring for your pet can be an extension of your own considered lifestyle.',
      'The visual identity we developed uses a refined illustration style, a sophisticated but warm colour palette, and a typographic system that borrows conventions from premium beauty and wellness brands. The result reads as lifestyle, not livestock.',
      'For the packaging, we designed a system that works across 12 SKUs at launch — treats, supplements, and grooming products — with enough flexibility to extend as the range grows.',
    ],
    results: [
      { value: '80+', label: 'Boutique Stockists', desc: 'Within 6 months of launch' },
      { value: 'Series A', label: 'Funding Raised', desc: '4 months after brand launch' },
      { value: 'Vogue Living', label: 'Press Coverage', desc: 'Featured alongside other premium brands' },
    ],
    nextSlug: 'marshall-white',
    nextName: 'Marshall White',
  },
  'marshall-white': {
    name: 'Marshall White',
    category: 'Web Design & Development',
    year: '2025',
    duration: '10 weeks',
    services: ['UX Strategy', 'Editorial Design', 'Web Design', 'Next.js Development'],
    heroImage: '/work4.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80',
    tagline: 'A digital presence worthy of Melbourne\'s most trusted luxury property name.',
    brief: [
      'Marshall White has been selling Melbourne\'s finest homes for over 50 years. In the luxury property market, trust and discretion are everything — and the website needed to project both while also functioning as a high-performing lead generation machine.',
      'The challenge was sophistication: luxury real estate buyers are also sophisticated internet users who expect the same standard of digital experience from their agent as they get from the brands they otherwise interact with — Aesop, Net-a-Porter, Bentley.',
      'The previous site looked like a real estate portal. It was functional but generic, and entirely at odds with the premium positioning Marshall White had built over five decades.',
    ],
    approach: [
      'We spent the first two weeks in deep research: reviewing 18 months of analytics data, interviewing six senior agents, and benchmarking digital experiences across luxury sectors beyond real estate.',
      'The design direction we developed treats property presentation as editorial content — long-form, considered, immersive. Property detail pages are designed to feel like magazine spreads, with full-bleed photography and carefully typeset content that lets the properties speak.',
      'We built a custom property search that prioritises lifestyle attributes — neighbourhood character, school zones, proximity to parks — over raw filters. For agents, we designed profiles that read as expert editorial, not a CV.',
    ],
    results: [
      { value: '+55%', label: 'Time on Site', desc: 'Average session duration post-launch' },
      { value: '-30%', label: 'Bounce Rate', desc: 'Across all core landing pages' },
      { value: 'Shortlisted', label: 'Australian Web Award', desc: 'Real Estate & Property category 2025' },
    ],
    nextSlug: 'bresicwhitney',
    nextName: 'BresicWhitney',
  },
  'location': {
    name: 'Location',
    category: 'Brand Identity & Web',
    year: '2025',
    duration: '8 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design', 'Digital Marketing'],
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80',
    tagline: 'Positioning a boutique agency as the go-to name in Southern Sydney luxury.',
    brief: [
      'Location is a boutique real estate agency specialising in the luxury residential market across Southern Sydney — the beaches, headlands, and harbour suburbs that attract the city\'s most discerning buyers.',
      'As a small agency competing against firms with significantly more resources, they needed a brand that communicated authority and expertise without looking like a scaled-down version of the big players.',
      'The brief was to build a brand and digital presence that would allow a team of ten to compete credibly against agencies of fifty.',
    ],
    approach: [
      'Our strategic positioning for Location centred on deep local knowledge — the argument that a small, specialist team knows these streets, these buildings, and these buyers better than any national firm ever could.',
      'The visual identity we developed is spare and confident: a clean wordmark, a palette of sand and ocean-influenced tones, and a typographic system that projects quiet authority. There\'s no real estate cliché in sight.',
      'The website was designed to put content first — suburb profiles, market commentary, and agent storytelling — so that the site functions as a genuine resource for anyone considering buying or selling in the area.',
    ],
    results: [
      { value: '+35%', label: 'Appraisal Requests', desc: 'In the first 6 months post-launch' },
      { value: '4.9★', label: 'Google Rating', desc: 'Across 80+ verified client reviews' },
      { value: '2×', label: 'Listing Volume', desc: 'Year-over-year growth in premium listings' },
    ],
    nextSlug: 'shadey',
    nextName: 'Shadey',
  },
  'shadey': {
    name: 'Shadey',
    category: 'Brand Identity',
    year: '2025',
    duration: '5 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80',
    tagline: 'A window furnishings brand designed to disappear into beautiful spaces.',
    brief: [
      'Shadey is a premium window furnishings company that designs, manufactures, and installs custom blinds, shutters, and curtains for residential and commercial interiors across Australia.',
      'Despite producing genuinely beautiful work for high-end residential projects, their brand felt closer to a trade business than the interior-adjacent lifestyle brand they aspired to be.',
      'The goal was a rebrand that would allow them to be specified by interior designers, featured in interiors publications, and chosen by premium residential developers — not just found through Google.',
    ],
    approach: [
      'We defined the brand territory as the space between architecture and interior design — where light becomes a design element. That framing unlocked the visual direction: a refined identity that prioritises negative space and the play of light and shadow.',
      'The new mark is a simple geometric form that abstracts the horizontal lines of a blind, rendered in a way that reads as architectural drawing as much as logo.',
      'We developed a comprehensive brand system including a curated material palette, photography direction, and a supplier specification pack that interior designers could use when briefing the Shadey team.',
    ],
    results: [
      { value: '12+', label: 'ID Partnerships', desc: 'Interior designer referral relationships established' },
      { value: '+80%', label: 'Average Project Value', desc: 'Shift toward premium residential projects' },
      { value: '3', label: 'Awards', desc: 'Australian Interior Design Awards nominations' },
    ],
    nextSlug: 'associated-concepts',
    nextName: 'Associated Concepts',
  },
  'associated-concepts': {
    name: 'Associated Concepts',
    category: 'Brand Identity',
    year: '2025',
    duration: '6 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Stationery & Collateral'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
    tagline: 'Thirty years of trusted financial advice — made visible.',
    brief: [
      'Associated Concepts is a family financial planning business with 30 years of history and a client base built almost entirely on referrals. Their brand had not been touched since 2005 and no longer reflected the quality of advice or the calibre of clients they served.',
      'The brief was straightforward: update the brand to match the business. The existing clients would not be alarmed, and new prospective clients — typically professionals and business owners — would see something that matched their expectations of a premium advice relationship.',
    ],
    approach: [
      'Because this is a business where trust is everything, we were deliberate about evolution rather than revolution. We retained the core colour palette — deep navy — and built around it with a cleaner typographic system and a refreshed mark that feels more considered.',
      'The new identity was rolled out across stationery, presentations, client reports, and the website. Every touchpoint was designed to reinforce the message: experienced, trustworthy, and worth the premium.',
    ],
    results: [
      { value: '+25%', label: 'Referral Conversion', desc: 'Prospects converting to clients' },
      { value: '100%', label: 'Client Retention', desc: 'No clients lost during transition' },
      { value: '3', label: 'New Partners', desc: 'Senior advisors hired in the year following rebrand' },
    ],
    nextSlug: 'woods',
    nextName: "Wood's",
  },
  'woods': {
    name: "Wood's",
    category: 'Brand Identity',
    year: '2025',
    duration: '7 weeks',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'E-commerce Design'],
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    tagline: '100% Australian — from paddock to identity.',
    brief: [
      'Wood\'s is a gourmet food brand producing 100% Australian-grown and made condiments, sauces, and pantry essentials. In a market flooded with imported "artisan" products and brands that merely gesture at provenance, Wood\'s is the genuine article.',
      'Their challenge was that their brand didn\'t communicate this. The packaging felt dated, and the story of genuine Australian provenance — which is genuinely rare and valuable — was buried.',
    ],
    approach: [
      'The strategy was simple: make provenance the hero. Every design decision was made in service of communicating that this product is genuinely, unmistakably Australian — without resorting to cliché.',
      'The visual identity draws from Australian pastoral and cartographic traditions: topographic line work, earthy ochres and deep greens, a typographic system that references mid-century Australian print design. The result is brand that feels both nostalgic and contemporary.',
      'We designed a full range of 18 packaging formats, an e-commerce site, and a wholesale catalogue for buyers.',
    ],
    results: [
      { value: '+120%', label: 'Online Revenue', desc: 'Year-over-year following e-commerce relaunch' },
      { value: '40+', label: 'New Stockists', desc: 'Premium grocers and deli accounts' },
      { value: 'Best New Brand', label: 'Fine Food Australia', desc: 'Award at national trade show' },
    ],
    nextSlug: 'location',
    nextName: 'Location',
  },
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug] || projectsData['bresicwhitney']

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero */}
      <article className="pt-20">
        <div className="h-[75vh] relative overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-12 left-0 right-0">
            <div className="container-custom">
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-3">
                {project.category} · {project.year}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
                {project.name}
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Project Overview Panel */}
        <div className="bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="container-custom py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-2">Client</p>
                <p className="font-semibold text-[var(--fg)]">{project.name}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-2">Category</p>
                <p className="font-semibold text-[var(--fg)]">{project.category}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-2">Year</p>
                <p className="font-semibold text-[var(--fg)]">{project.year}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-2">Duration</p>
                <p className="font-semibold text-[var(--fg)]">{project.duration}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-3">Services Delivered</p>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] rounded-full text-xs font-medium text-[var(--fg)]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brief */}
        <div className="container-custom py-20 max-w-4xl">
          <div className="mb-4">
            <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-4">The Brief</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-8">
              The challenge
            </h2>
          </div>
          <div className="space-y-5">
            {project.brief.map((para, i) => (
              <p key={i} className="text-[var(--muted)] text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="bg-[var(--surface)] py-20">
          <div className="container-custom max-w-4xl">
            <p className="text-xs font-medium text-[var(--muted)] uppercase tracking-widest mb-4">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-8">
              How we solved it
            </h2>
            <div className="space-y-5">
              {project.approach.map((para, i) => (
                <p key={i} className="text-[var(--muted)] text-lg leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary image */}
        <div className="h-[60vh] overflow-hidden">
          <img
            src={project.secondaryImage}
            alt={`${project.name} — project detail`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Results */}
        <div className="bg-[#0a0a0a] py-20">
          <div className="container-custom max-w-4xl">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">The Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
              What we delivered
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {project.results.map((result, i) => (
                <div key={i} className="border-t border-white/10 pt-8">
                  <p className="text-5xl font-bold text-white mb-2">{result.value}</p>
                  <p className="text-white font-semibold mb-1">{result.label}</p>
                  <p className="text-gray-500 text-sm">{result.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="container-custom py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-[var(--border)]">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Projects
            </Link>
            <Link
              href={`/work/${project.nextSlug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] hover:gap-4 transition-all duration-200"
            >
              Next: {project.nextName}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
