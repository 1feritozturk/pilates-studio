import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Gizlilik Politikasi",
  description:
    "Elvin Ozturk Online Pilates web sitesinin gizlilik politikasi ve veri kullanimi esaslari.",
  path: "/gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yasal</p>
      <h1 className="text-4xl font-semibold text-[#1C1C1C] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
        Gizlilik Politikasi
      </h1>
      <div className="space-y-5 text-sm leading-7 text-[#5A5A5A]">
        <p>Bu web sitesi uzerinden iletilen ad, e-posta, telefon ve mesaj bilgileri sadece iletisim kurmak, randevu taleplerini degerlendirmek ve kullaniciya geri donus saglamak amaciyla islenir.</p>
        <p>Kisisel veriler ucuncu kisilerle reklam amacli paylasilmaz. Yasal zorunluluklar ve teknik hizmet saglayicilar haricinde veriler sinirli erisimle korunur.</p>
        <p>Verilerinizin guncellenmesi, silinmesi veya bilgi talebiniz icin iletisim sayfasindaki kanallar uzerinden bizimle iletisime gecebilirsiniz.</p>
      </div>
    </section>
  );
}
