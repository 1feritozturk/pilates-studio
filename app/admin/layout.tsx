import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Paneli | Elvin Öztürk Online Pilates",
  description: "Site iceriklerini, mesajlari ve randevulari yonetin.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
