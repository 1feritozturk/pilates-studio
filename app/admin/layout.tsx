import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Paneli | Elvin Öztürk Online Pilates",
  description: "Site iceriklerini, mesajlari ve randevulari yonetin.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
