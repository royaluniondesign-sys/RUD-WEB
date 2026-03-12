import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUD — Building Bold Brands",
  description: "Creative agency specialising in branding, web design and digital strategy for startups and growing businesses.",
  openGraph: {
    title: "RUD — Building Bold Brands",
    description: "Creative agency specialising in branding, web design and digital strategy for startups and growing businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUD — Building Bold Brands",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body className="antialiased font-['Inter_Tight',sans-serif]">{children}</body>
    </html>
  );
}
