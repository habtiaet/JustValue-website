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

