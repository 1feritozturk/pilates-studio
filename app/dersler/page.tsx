import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata, defaultKeywords } from '@/lib/seo';

const grupDersleri = [
  {
    ad: 'Başlangıç Grubu',
    aciklama: 'Pilates\'e yeni başlayanlar için temel hareketler, doğru nefes teknikleri ve postür farkındalığı.',
    sure: '50 dk',
    kapasite: 'Maks. 8 kişi',
    gunler: 'Pzt & Çrş',
    saat: '08:00 / 19:00',
    seviye: 'Başlangıç',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80&fit=crop',
  },
  {
    ad: 'Orta Seviye Grubu',
    aciklama: 'Temel bilgiye sahip olanlar için ileri teknikler, core güçlendirme ve esneklik çalışmaları.',
    sure: '50 dk',
    kapasite: 'Maks. 8 kişi',
    gunler: 'Salı & Perşembe',
    saat: '07:30 / 18:30',
    seviye: 'Orta',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80&fit=crop',
  },
];

const bireyselDersler = [
  {
    ad: '1\'e 1 Bireysel Ders',
    aciklama: 'Tamamen size özel hazırlanmış program. Hedeflerinize, bedeninize ve seviyenize göre kişiselleştirilmiş içerik.',
    sure: '50 dk',
    gunler: 'Her gün',
    saat: 'Randevuya göre',
    ozellikler: ['Kişisel program', 'Anlık geri bildirim', 'Hızlı ilerleme', 'Esnek saat'],
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&fit=crop',
  },
];

export const metadata: Metadata = createMetadata({
  title: 'Online Pilates Dersleri',
  description:
    'Online grup dersleri ve bireysel Pilates seanslari. Baslangic, orta seviye ve birebir canli ders seceneklerini inceleyin.',
  path: '/dersler',
  keywords: [...defaultKeywords, 'online pilates ders programi', 'birebir pilates'],
});

export default function DerslerPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-64 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=85&fit=crop"
            alt="Online Dersler"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="text-[#A8C4A2] text-sm font-medium tracking-[0.2em] uppercase mb-2">Programlar</p>
          <h1
            className="text-5xl font-semibold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online Dersler
          </h1>
        </div>
      </section>

      {/* Giriş */}
      <section className="py-12 max-w-6xl mx-auto px-6 border-b border-[#EDE0CF]">
        <p className="text-[#5A5A5A] max-w-2xl leading-relaxed">
          İki farklı ders formatı sunuyorum: küçük gruplarla yapılan canlı online grup dersleri ve tamamen size özel bireysel seanslar. İkisi de Zoom üzerinden gerçekleşiyor, kayıt opsiyonu mevcut.
        </p>
      </section>

      {/* GRUP DERSLERİ */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-10">
          <h2
            className="text-3xl font-semibold text-[#1C1C1C]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online Grup Dersler
          </h2>
          <span className="text-sm text-[#7D9B76] bg-[#E8F0E7] px-3 py-1 rounded-full">Maks. 8 kişi</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {grupDersleri.map((ders) => (
            <div
              key={ders.ad}
              className="bg-white border border-[#EDE0CF] rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-44">
                <Image src={ders.img} alt={ders.ad} fill className="object-cover" />
                <span className="absolute top-3 left-3 bg-white/90 text-[#7D9B76] text-xs font-medium px-3 py-1 rounded-full">
                  {ders.seviye}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">{ders.ad}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5 flex-1">{ders.aciklama}</p>
                <div className="space-y-1.5 text-xs text-[#5A5A5A] border-t border-[#F4F3F1] pt-4 mb-5">
                  <div className="flex justify-between">
                    <span>Süre</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.sure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kontenjan</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.kapasite}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Günler</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.gunler}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saatler</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.saat}</span>
                  </div>
                </div>
                <Link
                  href="/randevu"
                  className="w-full text-center py-2.5 bg-[#F4F3F1] text-[#1C1C1C] text-sm font-medium rounded-full hover:bg-[#7D9B76] hover:text-white transition-colors"
                >
                  Kaydol
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-[#EDE0CF] bg-white p-8">
          <h2
            className="text-3xl font-semibold text-[#1C1C1C] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Hangi ders size daha uygun?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Baslangic seviyesindeyseniz</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Grup dersleri ile temel nefes, durus ve hareket kaliplari uzerinde duzenli bir baslangic yapabilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Kisiye ozel destek istiyorsaniz</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Bireysel Pilates dersi; hedefe yonelik plan, tempo kontrolu ve daha yakindan takip imkani sunar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">Duzenli rutine ihtiyaciniz varsa</h3>
              <p className="text-sm leading-relaxed text-[#5A5A5A]">
                Haftalik programli ders saatleri sayesinde egzersizi gunluk yasaminiza daha kolay yerlestirebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BİREYSEL DERS */}
      <section className="bg-[#F4F3F1] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-baseline gap-4 mb-10">
            <h2
              className="text-3xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Bireysel Ders
            </h2>
            <span className="text-sm text-white bg-[#7D9B76] px-3 py-1 rounded-full">1&apos;e 1</span>
          </div>
          {bireyselDersler.map((ders) => (
            <div
              key={ders.ad}
              className="bg-white rounded-2xl overflow-hidden border border-[#EDE0CF] grid md:grid-cols-2"
            >
              <div className="relative h-64 md:h-auto">
                <Image src={ders.img} alt={ders.ad} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#1C1C1C] mb-3">{ders.ad}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-6">{ders.aciklama}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {ders.ozellikler.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7D9B76] flex-shrink-0" />
                      {o}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-[#5A5A5A] space-y-1 mb-6">
                  <div className="flex justify-between">
                    <span>Süre</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.sure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saatler</span>
                    <span className="font-medium text-[#1C1C1C]">{ders.saat}</span>
                  </div>
                </div>
                <Link
                  href="/randevu"
                  className="inline-flex justify-center py-3 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
                >
                  Randevu Al
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform bilgisi */}
      <section className="py-16 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-4">Nasıl çalışır?</p>
        <h2
          className="text-3xl font-semibold text-[#1C1C1C] mb-10"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          3 adımda online derse başlayın
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { adim: '01', baslik: 'Kaydolun', aciklama: 'Formu doldurun, ders ve saati seçin.' },
            { adim: '02', baslik: 'Zoom linkini alın', aciklama: 'E-posta ile Zoom bağlantınız gelir.' },
            { adim: '03', baslik: 'Derse katılın', aciklama: 'Telefon, tablet veya bilgisayardan bağlanın.' },
          ].map((a) => (
            <div key={a.adim} className="text-center">
              <div className="w-14 h-14 bg-[#E8F0E7] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#7D9B76] font-bold text-sm">{a.adim}</span>
              </div>
              <h3 className="font-semibold text-[#1C1C1C] mb-2">{a.baslik}</h3>
              <p className="text-sm text-[#5A5A5A]">{a.aciklama}</p>
            </div>
          ))}
        </div>
        <Link
          href="/randevu"
          className="mt-12 inline-flex px-8 py-3.5 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
        >
          Hemen Kaydol
        </Link>
      </section>
    </>
  );
}
