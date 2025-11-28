import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://justvalue.nl'),
  title: {
    default: "JustValue - Nederlands Merk voor Kwaliteitsproducten",
    template: "%s | JustValue"
  },
  description: "JustValue is een Nederlands merk dat meer dan 200 kwaliteitsproducten aanbiedt voor huishouden, elektronica, gezondheid en meer. Ontdek ons assortiment op bol.com.",
  keywords: ["JustValue", "Nederlands merk", "kwaliteitsproducten", "bol.com", "huishouden", "elektronica", "gezondheid", "200+ producten"],
  authors: [{ name: "JustValue" }],
  creator: "JustValue",
  publisher: "JustValue",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://justvalue.nl",
    siteName: "JustValue",
    title: "JustValue - Nederlands Merk voor Kwaliteitsproducten",
    description: "JustValue is een Nederlands merk dat meer dan 200 kwaliteitsproducten aanbiedt voor huishouden, elektronica, gezondheid en meer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustValue - Nederlands Merk voor Kwaliteitsproducten",
    description: "JustValue is een Nederlands merk dat meer dan 200 kwaliteitsproducten aanbiedt.",
  },
  alternates: {
    canonical: "https://justvalue.nl",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // SVG favicon for modern browsers and Google
      { url: "/favicon.ico", sizes: "any" }, // Root favicon for Google fallback
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" }, // Desktop PNG favicon
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico", // Root favicon for better compatibility
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navigation />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

