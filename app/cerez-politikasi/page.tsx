import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cerez Politikasi",
  description: "Elvin Ozturk Online Pilates web sitesinde kullanilan cerezler hakkinda bilgi alin.",
  path: "/cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yasal</p>
      <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
        Cerez Politikasi
      </h1>
      <div className="space-y-5 text-sm leading-7 text-[#5A5A5A]">
        <p>Bu sitede temel performans, guvenlik ve analiz ihtiyaclari icin cerezler kullanilabilir. Google Tag Manager ve ileride eklenecek analiz araclari, kullanici deneyimini ve site performansini anlamaya yardimci olabilir.</p>
        <p>Tarayici ayarlarinizdan cerezleri yonetebilir veya silebilirsiniz. Ancak bazi cerezlerin devre disi birakilmasi site deneyimini etkileyebilir.</p>
      </div>
    </section>
  );
}
