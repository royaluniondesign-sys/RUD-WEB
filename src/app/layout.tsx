import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rud-web.vercel.app"),
  title: {
    default: "RUD — Brand Identity & Web Design Agency | Spain",
    template: "%s | RUD Studio",
  },
  description:
    "RUD is a creative brand agency based in Barcelona, Spain specialising in brand strategy, visual identity, web design and digital marketing for startups and growing businesses across Europe and Australia.",
  keywords: [
    "brand agency Spain",
    "branding agency Europe",
    "brand identity design",
    "logo design studio",
    "web design agency",
    "brand strategy consultant",
    "visual identity design",
    "creative agency Spain",
    "agencia de branding España",
    "diseño de marca",
    "web design startup",
    "digital marketing agency",
    "brand design studio",
    "Royal Union Design",
  ],
  authors: [{ name: "RUD Studio", url: "https://rud-web.vercel.app" }],
  creator: "RUD Studio",
  publisher: "RUD Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rud-web.vercel.app",
    siteName: "RUD Studio",
    title: "RUD — Brand Identity & Web Design Agency",
    description:
      "Creative brand agency based in Barcelona, Spain. Brand strategy, visual identity, web design and digital marketing for startups and growing businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RUD Studio — Building Bold Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUD — Brand Identity & Web Design Agency",
    description:
      "Creative brand agency based in Barcelona, Spain. Brand strategy, visual identity, web design and digital marketing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://rud-web.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RUD Studio",
  alternateName: "Royal Union Design",
  description:
    "Creative brand agency specialising in brand strategy, visual identity, web design and digital marketing for startups and growing businesses.",
  url: "https://rud-web.vercel.app",
  logo: "https://rud-web.vercel.app/logo-rud-black.svg",
  email: "hello@rud.studio",
  address: { "@type": "PostalAddress", addressCountry: "ES" },
  areaServed: ["Europe", "Australia", "Americas"],
  serviceType: [
    "Brand Strategy",
    "Visual Identity Design",
    "Web Design",
    "Web Development",
    "Digital Marketing",
    "Content Creation",
  ],
  foundingDate: "2013",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 4, maxValue: 10 },
  sameAs: [
    "https://instagram.com/royaluniondesign",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter+Tight:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-['Inter_Tight',sans-serif]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
