import type { Metadata } from "next";
import { createMetadata, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Randevu Al",
  description:
    "Online grup veya bireysel Pilates dersi icin randevu olusturun ve size uygun tarih-saat secenegini iletin.",
  path: "/randevu",
  keywords: [...defaultKeywords, "pilates randevu", "online pilates kayit"],
});

export default function RandevuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
