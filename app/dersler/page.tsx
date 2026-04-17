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
    img: '/images/grup-ders-1.jpg.webp',
  },
  {
    ad: 'Orta Seviye Grubu',
    aciklama: 'Temel bilgiye sahip olanlar için ileri teknikler, core güçlendirme ve esneklik çalışmaları.',
    sure: '50 dk',
    kapasite: 'Maks. 8 kişi',
    gunler: 'Salı & Perşembe',
    saat: '07:30 / 18:30',
    seviye: 'Orta',
    img: '/images/grup-ders-2.jpg',
  },
];

const bireyselDersler = [
  {
    ad: 'Bireysel Ders',
    aciklama: 'Tamamen size özel hazırlanmış program. Hedeflerinize, bedeninize ve seviyenize göre kişiselleştirilmiş içerik.',
    sure: '50 dk',
    gunler: 'Her gün',
    saat: 'Randevuya göre',
    ozellikler: ['Kişisel program', 'Anlık geri bildirim', 'Hızlı ilerleme', 'Esnek saat'],
    img: '/images/bireysel-ders.png',
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
      <section className="relative overflow-hidden border-b border-[#D5F2E5] bg-[radial-gradient(circle_at_top_left,_rgba(220,245,229,0.95),_rgba(253,254,249,1)_45%,_rgba(245,249,243,1)_100%)]">
        <div className="absolute -top-24 right-[-4rem] h-64 w-64 rounded-full bg-[#DCF5E5]/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-2rem] h-52 w-52 rounded-full bg-[#F3EBDD]/70 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(82,199,126,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(82,199,126,0.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[#52C77E] text-sm font-medium tracking-[0.12em] uppercase mb-3">Programlar</p>
            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-6"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Dersler
            </h1>
            <p className="text-[#505050] text-base md:text-lg leading-relaxed max-w-2xl">
              Canlı grup dersleri ve bireysel seanslarla, size uygun tempoda sürdürülebilir bir Pilates rutini oluşturun.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Canlı Zoom dersleri', '50 dk seanslar', 'Grup ve bireysel format'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D5F2E5] bg-white/80 px-4 py-2 text-sm text-[#1F1F1F] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Giriş */}
      <section className="py-12 max-w-6xl mx-auto px-6 border-b border-[#D5F2E5]">
        <p className="text-base text-[#505050] max-w-2xl leading-relaxed">
          İki farklı ders formatı sunuyorum: küçük gruplarla yapılan canlı online grup dersleri ve tamamen size özel bireysel seanslar. İkisi de Zoom üzerinden gerçekleşiyor, kayıt opsiyonu mevcut.
        </p>
      </section>

      {/* GRUP DERSLERİ */}
      <section id="grup-dersleri" className="scroll-mt-28 py-16 max-w-6xl mx-auto px-6">
        <div className="flex items-baseline gap-4 mb-10">
          <h2
            className="text-3xl font-semibold text-[#1F1F1F]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online Grup Dersler
          </h2>
          <span className="text-sm text-[#52C77E] bg-[#DCF5E5] px-3 py-1 rounded-full">Maks. 8 kişi</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {grupDersleri.map((ders) => (
            <div
              key={ders.ad}
              className="bg-white border border-[#D5F2E5] rounded-2xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-44">
                <Image src={ders.img} alt={ders.ad} fill className="object-cover" />
                <span className="absolute top-3 left-3 bg-white/90 text-[#52C77E] text-xs font-medium px-3 py-1 rounded-full">
                  {ders.seviye}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#1F1F1F] mb-2">{ders.ad}</h3>
                <p className="text-base text-[#505050] leading-relaxed mb-5 flex-1">{ders.aciklama}</p>
                <div className="space-y-1.5 text-xs text-[#505050] border-t border-[#F5F9F3] pt-4 mb-5">
                  <div className="flex justify-between">
                    <span>Süre</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.sure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kontenjan</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.kapasite}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Günler</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.gunler}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saatler</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.saat}</span>
                  </div>
                </div>
                <Link
                  href="/randevu"
                  className="w-full text-center py-2.5 bg-[#F5F9F3] text-[#1F1F1F] text-sm font-medium rounded-full hover:bg-[#52C77E] hover:text-white transition-colors"
                >
                  Kaydol
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-[#D5F2E5] bg-white p-8">
          <h2
            className="text-3xl font-semibold text-[#1F1F1F] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Hangi ders size daha uygun?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#1F1F1F] mb-2">Baslangic seviyesindeyseniz</h3>
              <p className="text-base leading-relaxed text-[#505050]">
                Grup dersleri ile temel nefes, durus ve hareket kaliplari uzerinde duzenli bir baslangic yapabilirsiniz.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1F1F1F] mb-2">Kisiye ozel destek istiyorsaniz</h3>
              <p className="text-base leading-relaxed text-[#505050]">
                Bireysel Pilates dersi; hedefe yonelik plan, tempo kontrolu ve daha yakindan takip imkani sunar.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1F1F1F] mb-2">Duzenli rutine ihtiyaciniz varsa</h3>
              <p className="text-base leading-relaxed text-[#505050]">
                Haftalik programli ders saatleri sayesinde egzersizi gunluk yasaminiza daha kolay yerlestirebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BİREYSEL DERS */}
      <section id="bireysel-ders" className="scroll-mt-28 bg-[#F5F9F3] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2
              className="text-3xl font-semibold text-[#1F1F1F]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Bireysel Ders
            </h2>
          </div>
          {bireyselDersler.map((ders) => (
            <div
              key={ders.ad}
              className="bg-white rounded-2xl overflow-hidden border border-[#D5F2E5] grid md:grid-cols-2"
            >
              <div className="relative h-64 md:h-auto">
                <Image src={ders.img} alt={ders.ad} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-3">{ders.ad}</h3>
                <p className="text-base text-[#505050] leading-relaxed mb-6">{ders.aciklama}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {ders.ozellikler.map((o) => (
                    <div key={o} className="flex items-center gap-2 text-sm text-[#505050]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#52C77E] flex-shrink-0" />
                      {o}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-[#505050] space-y-1 mb-6">
                  <div className="flex justify-between">
                    <span>Süre</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.sure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saatler</span>
                    <span className="font-medium text-[#1F1F1F]">{ders.saat}</span>
                  </div>
                </div>
                <Link
                  href="/randevu"
                  className="inline-flex justify-center py-3 bg-[#52C77E] text-white text-sm font-medium rounded-full hover:bg-[#3FB86D] transition-colors"
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
        <p className="text-[#52C77E] text-sm font-medium tracking-[0.12em] uppercase mb-4">Nasıl çalışır?</p>
        <h2
          className="text-3xl font-semibold leading-snug text-[#1F1F1F] mb-10"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Dört adımda online derse başlayın
        </h2>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              adim: '01',
              baslik: 'Formu doldurun',
              aciklama: 'Bilgilerinizi paylaşın ve size en uygun ders türünü belirtin.',
            },
            {
              adim: '02',
              baslik: 'Sizinle iletişime geçelim',
              aciklama: 'Talebinizi değerlendirip kaydınızı birlikte netleştirelim.',
            },
            {
              adim: '03',
              baslik: 'Zoom bilgilerinizi alın',
              aciklama: 'Ders bağlantınız ve giriş bilgileriniz e-posta ile size gönderilir.',
            },
            {
              adim: '04',
              baslik: 'Derse katılın',
              aciklama: 'Telefon, tablet veya bilgisayarınızdan kolayca bağlanın.',
            },
          ].map((a) => (
            <div key={a.adim} className="text-center">
              <div className="w-14 h-14 bg-[#DCF5E5] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#52C77E] font-bold text-sm">{a.adim}</span>
              </div>
              <h3 className="font-semibold text-[#1F1F1F] mb-2">{a.baslik}</h3>
              <p className="text-base text-[#505050]">{a.aciklama}</p>
            </div>
          ))}
        </div>
        <Link
          href="/randevu"
          className="mt-12 inline-flex px-8 py-3.5 bg-[#52C77E] text-white text-sm font-medium rounded-full hover:bg-[#3FB86D] transition-colors"
        >
          Hemen Kaydol
        </Link>
      </section>
    </>
  );
}
