import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SiteChrome from "./components/SiteChrome";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elvin Öztürk — Online Pilates",
  description: "Online grup ve bireysel Pilates dersleri. Nerede olursanız olun, canlı Zoom dersleriyle Pilates'in gücünü keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1C1C]" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
