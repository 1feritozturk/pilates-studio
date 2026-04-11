import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kullanim Kosullari",
  description: "Elvin Ozturk Online Pilates web sitesi kullanim kosullari ve genel esaslar.",
  path: "/kullanim-kosullari",
});

export default function KullanimKosullariPage() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <p className="text-[#52C77E] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yasal</p>
      <h1 className="text-4xl font-semibold text-[#1F1F1F] mb-8" style={{ fontFamily: "var(--font-playfair), serif" }}>
        Kullanim Kosullari
      </h1>
      <div className="space-y-5 text-sm leading-7 text-[#505050]">
        <p>Bu web sitesindeki icerikler bilgilendirme amacli sunulur. Ders programlari, saatler ve iletisim kanallari zaman icinde guncellenebilir.</p>
        <p>Randevu talebi olusturmak, otomatik olarak ders kaydinin kesinlestigi anlamina gelmez. Onay ve planlama sureci egitmen tarafindan ayrica degerlendirilir.</p>
        <p>Site icerigindeki metin, gorsel ve marka unsurlari izinsiz cogaltilemez veya ticari amacla kullanilamaz.</p>
      </div>
    </section>
  );
}
