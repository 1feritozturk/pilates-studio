import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';
import { createMetadata, defaultKeywords, siteConfig } from '@/lib/seo';

const dersler = [
  {
    ad: 'Online Grup Ders',
    aciklama: 'Küçük gruplarla, canlı video üzerinden gerçekleştirilen interaktif Pilates seansları. Topluluk enerjisiyle motive olun.',
    sure: '55 dk',
    kapasite: 'Maks. 8 kişi',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80&fit=crop',
  },
  {
    ad: 'Online Bireysel Ders',
    aciklama: 'Birebir, tamamen size özel hazırlanmış program. Kendi hızınızda, kendi alanınızda ilerleyin.',
    sure: '55 dk',
    kapasite: '1 kişi',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80&fit=crop',
  },
];

const avantajlar = [
  {
    baslik: 'Evden çıkmadan',
    aciklama: 'İstediğiniz yerden, istediğiniz cihazdan katılın. Seyahat, trafik yok.',
  },
  {
    baslik: 'Kişisel ilgi',
    aciklama: 'Küçük gruplar ve birebir derslerle her hareketi doğru öğrenin.',
  },
  {
    baslik: 'Esnek program',
    aciklama: 'Hafta içi ve hafta sonu farklı saat seçenekleriyle size uygun zamanı seçin.',
  },
  {
    baslik: 'Kayıtlara erişim',
    aciklama: 'Kaçırdığınız dersleri tekrar izleyebilme imkânı.',
  },
];

const sikSorulanlar = [
  {
    soru: 'Online Pilates dersleri kimler icin uygundur?',
    cevap:
      'Baslangic seviyesinden duzenli spor yapanlara kadar farkli seviyelerde katilim saglanabilir. Ders icerigi mevcut seviyenize ve ihtiyaciniza gore sekillenir.',
  },
  {
    soru: 'Dersler hangi platform uzerinden yapiliyor?',
    cevap:
      'Tum online Pilates dersleri Zoom uzerinden canli olarak yapilir. Bilgisayar, tablet veya telefon ile baglanabilirsiniz.',
  },
  {
    soru: 'Istanbul disindan da katilabilir miyim?',
    cevap:
      'Evet. Dersler online oldugu icin Istanbul, Ankara, Izmir veya yurt disindan da katilim saglayabilirsiniz.',
  },
  {
    soru: 'Bireysel Pilates dersi ile grup dersi arasindaki fark nedir?',
    cevap:
      'Grup dersleri ortak bir program akisi ile ilerler. Bireysel derslerde ise hedef, tempo ve hareket secimi tamamen size gore planlanir.',
  },
];

const yorumlar = [
  {
    isim: 'Zeynep K.',
    hedef: 'Masa basi calisma duzeni',
    yorum:
      'Online grup dersleri sayesinde haftalik hareket rutinim oturdu. Ozellikle sirt ve omuz bolgesindeki sertlik hissim belirgin sekilde azaldi.',
  },
  {
    isim: 'Asli D.',
    hedef: 'Birebir destek',
    yorum:
      'Bireysel derslerde hareketlerin neden yapildigini daha iyi anladim. Tempo tamamen bana gore ayarlandigi icin dersten cok daha fazla verim aliyorum.',
  },
  {
    isim: 'Ece T.',
    hedef: 'Esneklik ve duzen',
    yorum:
      'Istanbul disinda yasamama ragmen duzenli olarak ayni egitmenle calisabiliyorum. Bu devamli hissi benim icin en degerli seylerden biri oldu.',
  },
];

const istatistikler = [
  { deger: '150+', etiket: 'duzenli katilim gosteren ogrenci' },
  { deger: '1.200+', etiket: 'tamamlanan online ders saati' },
  { deger: '3', etiket: 'farkli ders formati ve seviye secenegi' },
  { deger: '10+', etiket: 'farkli sehirden duzenli katilim' },
];

export const metadata: Metadata = createMetadata({
  title: 'Online Pilates Dersleri',
  description:
    'Elvin Ozturk ile online grup ve bireysel Pilates derslerine katilin. Evden canli derslerle esneklik, guc ve durus calismalari yapin.',
  path: '/',
  keywords: [...defaultKeywords, 'evde pilates', 'zoom pilates dersi'],
});

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Elvin Ozturk',
    jobTitle: 'Pilates Egitmeni',
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    worksFor: {
      '@type': 'SportsActivityLocation',
      name: siteConfig.name,
    },
    sameAs: ['https://www.instagram.com/elvinozturk.pilates'],
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sikSorulanlar.map((item) => ({
      '@type': 'Question',
      name: item.soru,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.cevap,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=85&fit=crop"
            alt="Online Pilates"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#FAFAF8]/85" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Online Pilates
            </p>
            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Bedeninizle
              <br />
              <span className="text-[#7D9B76]">yeniden</span>
              <br />
              bağlantı kurun.
            </h1>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-10 max-w-md">
              Elvin Ozturk ile online grup ve bireysel Pilates derslerine katilin. Istanbul merkezli canli derslerle durus, esneklik ve beden farkindaligi uzerine duzenli calisin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/randevu"
                className="px-8 py-3.5 bg-[#7D9B76] text-white font-medium rounded-full hover:bg-[#6A8B63] transition-colors text-sm tracking-wide"
              >
                Derse Kaydol
              </Link>
              <Link
                href="/dersler"
                className="px-8 py-3.5 border border-[#1C1C1C]/20 text-[#1C1C1C] font-medium rounded-full hover:bg-[#1C1C1C]/5 transition-colors text-sm tracking-wide"
              >
                Dersleri Keşfet
              </Link>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#5A5A5A]">
              Online Pilates dersi ariyorsaniz; evden, ofisten ya da seyahatteyken programa baglanabilirsiniz. Kucuk grup dersleri ve bireysel Pilates seanslari sayesinde daha kontrollu ve duzenli bir egzersiz rutini kurabilirsiniz.
            </p>
          </div>

          {/* Sağ: Online ders kartları */}
          <div className="hidden md:flex flex-col gap-4">
            <Link
              href="/dersler"
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-[#EDE0CF] hover:shadow-md transition-shadow group"
            >
              <p className="text-xs text-[#7D9B76] font-medium tracking-wider uppercase mb-2">Grup Ders</p>
              <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">Online Grup Pilates</h3>
              <p className="text-sm text-[#5A5A5A]">Maks. 8 kişi · 55 dk · Canlı yayın</p>
              <p className="text-xs text-[#7D9B76] mt-3 group-hover:underline">Programa bak →</p>
            </Link>
            <Link
              href="/dersler"
              className="bg-[#7D9B76] rounded-2xl p-6 text-white hover:bg-[#6A8B63] transition-colors group"
            >
              <p className="text-xs text-white/70 font-medium tracking-wider uppercase mb-2">Bireysel Ders</p>
              <h3 className="text-lg font-semibold mb-1">Online Özel Pilates</h3>
              <p className="text-sm text-white/80">Birebir · 55 dk · Size özel program</p>
              <p className="text-xs text-white mt-3 group-hover:underline">Randevu al →</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 rounded-[2rem] border border-[#EDE0CF] bg-white p-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7D9B76]">Online Pilates Dersi</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
              Duzenli online Pilates dersleri ile omurga destegi, core guclenmesi ve hareket kalitesi uzerinde calisabilirsiniz.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7D9B76]">Istanbul Merkezli</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
              Istanbul Kadikoy cikisli bir egitmenle calisirken, derslere Turkiye’nin veya dunyanin farkli noktalarindan baglanabilirsiniz.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7D9B76]">Bireysel ve Grup</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
              Hedefiniz toparlanmak, guclenmek veya daha duzenli hareket etmekse size uygun ders formatini secerek ilerleyebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 max-w-6xl mx-auto px-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {istatistikler.map((item) => (
            <div key={item.etiket} className="rounded-[1.75rem] border border-[#EDE0CF] bg-white p-6 text-center">
              <p
                className="text-4xl font-semibold text-[#1C1C1C]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {item.deger}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">{item.etiket}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ONLINE DERSLER */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Programlar</p>
          <h2
            className="text-4xl font-semibold text-[#1C1C1C]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online dersler
          </h2>
          <p className="text-[#5A5A5A] mt-3 max-w-md mx-auto">
            İki farklı format, aynı kalite. Hangisi size uygunsa seçin.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {dersler.map((ders) => (
            <div
              key={ders.ad}
              className="bg-white border border-[#EDE0CF] rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-56">
                <Image src={ders.img} alt={ders.ad} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{ders.ad}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed mb-5">{ders.aciklama}</p>
                <div className="flex gap-3 text-xs text-[#7D9B76] mb-6">
                  <span className="bg-[#F4F3F1] px-3 py-1 rounded-full">{ders.sure}</span>
                  <span className="bg-[#F4F3F1] px-3 py-1 rounded-full">{ders.kapasite}</span>
                  <span className="bg-[#F4F3F1] px-3 py-1 rounded-full">Canlı</span>
                </div>
                <Link
                  href="/randevu"
                  className="w-full block text-center py-3 bg-[#1C1C1C] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
                >
                  Kaydol
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Kimler Icin?</p>
            <h2
              className="text-4xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Pilates ile daha dengeli bir rutin kurun
            </h2>
            <p className="mt-4 text-[#5A5A5A] leading-relaxed">
              Online Pilates dersleri; masa basi calisanlar, evden spor yapmak isteyenler, esneklik ve durus uzerine calismak isteyenler icin guclu bir secenektir. Baslangic seviyesinde olsaniz da daha once deneyiminiz olsa da programa uygun bir ders yapisi bulunabilir.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              'Durus bozuklugu ve hareketsizlik hissi yasayanlar',
              'Evden duzenli spor yapmak isteyenler',
              'Birebir egitmen destegi arayanlar',
              'Kucuk grup enerjisi ile motive olmak isteyenler',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#EDE0CF] bg-[#FAFAF8] px-5 py-4 text-sm text-[#5A5A5A]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yorumlar</p>
            <h2
              className="text-4xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Ogrenci deneyimleri
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {yorumlar.map((item) => (
              <div key={item.isim} className="rounded-[2rem] border border-[#EDE0CF] bg-white p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-[#7D9B76]">{item.hedef}</p>
                <p className="mt-4 text-sm leading-7 text-[#5A5A5A]">{item.yorum}</p>
                <p className="mt-5 font-medium text-[#1C1C1C]">{item.isim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAJLAR */}
      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Neden online?</p>
            <h2
              className="text-4xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Pilates artık her yerde
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantajlar.map((a) => (
              <div key={a.baslik} className="bg-white rounded-2xl p-6 border border-[#EDE0CF]">
                <div className="w-10 h-10 bg-[#E8F0E7] rounded-full mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#7D9B76] rounded-full" />
                </div>
                <h3 className="font-semibold text-[#1C1C1C] mb-2">{a.baslik}</h3>
                <p className="text-sm text-[#5A5A5A] leading-relaxed">{a.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=85&fit=crop"
            alt="Pilates"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#A8C4A2] text-sm font-medium tracking-[0.2em] uppercase mb-4">Başlamaya hazır mısınız?</p>
          <h2
            className="text-4xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online derse katılın.
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Grup ya da bireysel ders — hangi formata uygunsa, hemen kaydolun ve ilk dersinize başlayın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/randevu"
              className="inline-flex px-8 py-3.5 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
            >
              Online Derse Kaydol
            </Link>
            <Link
              href="/dersler"
              className="inline-flex px-8 py-3.5 border border-white/40 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Programı İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#EDE0CF] bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7D9B76]">Karsilastirma</p>
            <h2
              className="mt-4 text-3xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Grup dersi mi bireysel ders mi?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">
              Hedefinize, egzersiz aliskanliginiza ve takip ihtiyaciniza gore sizin icin daha uygun format degisebilir.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#EDE0CF] bg-[#FAFAF8] p-6">
              <h3 className="text-lg font-semibold text-[#1C1C1C]">Online grup dersi</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
                Duzenli program isteyen, kucuk grup enerjisi ile motive olan ve butcesini daha dengeli kullanmak isteyenler icin uygundur.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#EDE0CF] bg-[#FAFAF8] p-6">
              <h3 className="text-lg font-semibold text-[#1C1C1C]">Bireysel ders</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">
                Tamamen kisisel program, daha yakin takip ve hedefe yonelik plan isteyenler icin daha ideal bir secenektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HAKKIMDA */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-square">
          <Image
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=85&fit=crop"
            alt="Elvin Öztürk"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-4">Hakkımda</p>
          <h2
            className="text-4xl font-semibold text-[#1C1C1C] mb-5"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ben Elvin Öztürk.
          </h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-5">
            Pilates&apos;i yalnizca bir egzersiz olarak degil, yasam kalitesini artiran bir pratik olarak goruyorum. Yillardir ogrencilerimle birebir calisarak her bedene uygun programlar hazirliyorum.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed mb-8">
            Online derslerimle artık dünyanın her yerinden öğrencilerimle buluşabiliyorum. Hedefim her seansta size gerçekten fayda sağlamak.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed mb-8">
            Istanbul merkezli online Pilates derslerimde amacim, ekrandan da olsa her ogrencinin hareketini dikkatle takip etmek ve daha guvenli bir egzersiz deneyimi sunmak.
          </p>
          <Link
            href="/hakkimda"
            className="text-sm text-[#7D9B76] font-medium underline underline-offset-4 hover:text-[#6A8B63]"
          >
            Daha fazlası →
          </Link>
        </div>
      </section>

      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Sik Sorulan Sorular</p>
            <h2
              className="text-4xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Pilates hakkinda merak edilenler
            </h2>
          </div>
          <div className="space-y-4">
            {sikSorulanlar.map((item) => (
              <div key={item.soru} className="rounded-2xl border border-[#EDE0CF] bg-white p-6">
                <h3 className="text-lg font-semibold text-[#1C1C1C]">{item.soru}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5A5A]">{item.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center rounded-[2rem] border border-[#EDE0CF] bg-white p-8 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#7D9B76]">Ucretsiz ilk adim</p>
            <h2
              className="mt-4 text-4xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Ucretsiz tanisma gorusmesi planlayin
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5A5A5A]">
              Ders secimi, seviyeniz ve beklentiniz konusunda emin degilseniz once kisa bir tanisma talebi birakabilirsiniz. Boylece size grup ya da bireysel dersin hangisinin daha uygun oldugunu birlikte netlestirebiliriz.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/iletisim"
              className="inline-flex justify-center rounded-full bg-[#7D9B76] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6A8B63]"
            >
              Ucretsiz gorusme talebi gonder
            </Link>
            <Link
              href="/randevu"
              className="inline-flex justify-center rounded-full border border-[#1C1C1C]/20 px-8 py-3.5 text-sm font-medium text-[#1C1C1C] transition-colors hover:bg-[#1C1C1C]/5"
            >
              Dogrudan derse kaydol
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Blog</p>
              <h2
                className="text-4xl font-semibold text-[#1C1C1C]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Pilates hakkinda yeni yazilar
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-[#7D9B76] underline underline-offset-4">
              Tum yazilari gor
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-[2rem] border border-[#EDE0CF] bg-white p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#7D9B76]">{post.category}</p>
                <h3
                  className="mt-4 text-2xl font-semibold text-[#1C1C1C]"
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-[#7D9B76] underline underline-offset-4"
                >
                  Devamini oku
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
