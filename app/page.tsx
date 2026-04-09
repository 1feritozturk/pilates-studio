import Link from 'next/link';
import Image from 'next/image';

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

export default function Home() {
  return (
    <>
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
              Nerede olursanız olun, online grup ve bireysel derslerle Pilates&apos;in gucunu kesfedin.
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
          <Link
            href="/hakkimda"
            className="text-sm text-[#7D9B76] font-medium underline underline-offset-4 hover:text-[#6A8B63]"
          >
            Daha fazlası →
          </Link>
        </div>
      </section>
    </>
  );
}
