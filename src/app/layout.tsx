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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme'),d=document.documentElement;if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){d.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
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
