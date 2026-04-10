import type { Metadata } from "next";
import { createMetadata, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Iletisim",
  description:
    "Online Pilates dersleri hakkinda soru sormak, bilgi almak veya iletisim kurmak icin Elvin Ozturk ile baglantiya gecin.",
  path: "/iletisim",
  keywords: [...defaultKeywords, "pilates iletisim", "online pilates bilgi al"],
});

export default function IletisimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
