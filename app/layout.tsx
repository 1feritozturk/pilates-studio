import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";
import { defaultKeywords, siteConfig } from "@/lib/seo";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Elvin Ozturk Online Pilates",
    template: "%s | Elvin Ozturk Online Pilates",
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elvin Ozturk Online Pilates",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvin Ozturk Online Pilates",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body className="min-h-screen flex flex-col bg-[#FDFEF9] text-[#1F1F1F]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
