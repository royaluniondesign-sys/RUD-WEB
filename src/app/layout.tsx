import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rud-web.vercel.app"),
  title: {
    default: "RUD — Agencia de Branding y Diseño Web en Barcelona",
    template: "%s | RUD Studio Barcelona",
  },
  description:
    "Agencia de branding y diseño web en Barcelona. Creamos identidades de marca, logos y webs de alto rendimiento para startups y empresas en crecimiento. IDNT · CHARIOT.",
  keywords: [
    "agencia branding Barcelona",
    "diseño web Barcelona",
    "agencia diseño Barcelona",
    "identidad visual Barcelona",
    "diseño de logo Barcelona",
    "agencia creativa Barcelona",
    "branding startup Barcelona",
    "diseño de marca España",
    "web design Barcelona",
    "agencia marketing Barcelona",
    "diseño gráfico Barcelona",
    "brand strategy Barcelona",
    "agencia digital Barcelona",
    "desarrollo web Barcelona",
    "automatización IA Barcelona",
    "Royal Union Design",
    "RUD Studio",
    "IDNT branding",
    "CHARIOT AI automation",
  ],
  authors: [{ name: "RUD Studio", url: "https://rud-web.vercel.app" }],
  creator: "RUD Studio",
  publisher: "RUD Studio",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://rud-web.vercel.app",
    siteName: "RUD Studio",
    title: "RUD — Agencia de Branding y Diseño Web en Barcelona",
    description:
      "Agencia creativa en Barcelona. Branding, identidad visual, diseño web y automatización con IA para empresas que quieren destacar.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RUD Studio Barcelona — Branding y Diseño Web" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUD — Agencia de Branding y Diseño Web en Barcelona",
    description: "Agencia creativa en Barcelona. Branding, identidad visual, diseño web y automatización con IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://rud-web.vercel.app" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "RUD Studio",
  alternateName: "Royal Union Design",
  description: "Agencia de branding y diseño web en Barcelona. Identidades de marca, diseño web y automatización con IA.",
  url: "https://rud-web.vercel.app",
  logo: "https://rud-web.vercel.app/logo-rud-white.png",
  email: "hello@rud.studio",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressRegion: "Cataluña",
    addressCountry: "ES",
  },
  geo: { "@type": "GeoCoordinates", latitude: "41.3851", longitude: "2.1734" },
  areaServed: ["Barcelona", "España", "Europa"],
  serviceType: ["Brand Strategy", "Identidad Visual", "Diseño Web", "Desarrollo Web", "AI Automation", "Contenido"],
  sameAs: [
    "https://instagram.com/royaluniondesign",
    "https://linkedin.com/company/royaluniondesign",
    "https://behance.net/royaluniondesign",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#FAFAFA" />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona" />
        <meta name="geo.position" content="41.3851;2.1734" />
        <meta name="ICBM" content="41.3851, 2.1734" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
