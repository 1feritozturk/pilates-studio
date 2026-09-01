import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog';

/** Teşhis: hero + ikinci yari */
export const metadata: Metadata = {
  title: 'Hero testi — ikinci yari',
  robots: { index: false, follow: false },
};

const HERO_IMAGE = '/images/grup-ders-2.webp';

const dersler = [
  {
    ad: 'Online Grup Ders',
    aciklama: 'Küçük gruplarla, canlı video üzerinden gerçekleştirilen interaktif Pilates seansları. Topluluk enerjisiyle motive olun.',
    sure: '50 dk',
    kapasite: 'Maks. 8 kişi',
    img: '/images/grup-ders-1.jpg.webp',
  },
  {
    ad: 'Online Bireysel Ders',
    aciklama: 'Birebir, tamamen size özel hazırlanmış program. Kendi hızınızda, kendi alanınızda ilerleyin.',
    sure: '50 dk',
    kapasite: '1 kişi',
    img: '/images/bireysel-ders.webp',
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
    soru: 'Farkli sehirlerden de katilabilir miyim?',
    cevap:
      'Evet. Dersler online oldugu icin Turkiye\u2019nin farkli sehirlerinden veya yurt disindan da katilim saglayabilirsiniz.',
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
      'Bulundugum sehir fark etmeden duzenli olarak ayni egitmenle calisabiliyorum. Bu devamli hissi benim icin en degerli seylerden biri oldu.',
  },
];

const istatistikler = [
  { deger: '150+', etiket: 'duzenli katilim gosteren ogrenci' },
  { deger: '1.200+', etiket: 'tamamlanan online ders saati' },
  { deger: '2', etiket: 'farkli ders formati ve seviye secenegi' },
  { deger: '10+', etiket: 'farkli sehirden duzenli katilim' },
];

export default function TestPage() {
  const oneCikanYazilar = blogPosts.slice(0, 3);
  return (
    <>
      <section
        className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#6B3D7A] text-xs font-medium tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-[#C9A87A]" />
              Online Pilates
            </p>
            <h1
              className="text-5xl md:text-6xl font-semibold leading-tight mb-6 text-[#1A1218]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Pilates ile
              <br />
              <em className="italic text-[#6B3D7A]">bedeninizle</em>
              <br />
              yeniden bağlantı kurun.
            </h1>
            <p className="text-[#6B5E68] text-lg leading-relaxed mb-10 max-w-md">
              Elvin Öztürk ile online grup ve bireysel Pilates derslerine katılın. Canlı derslerle duruş, esneklik ve beden farkındalığı üzerine düzenli çalışın.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/randevu"
                className="px-8 py-3.5 bg-[#6B3D7A] text-white font-medium rounded-full hover:bg-[#5a3268] transition-colors text-sm tracking-wide"
              >
                Derse Kaydol
              </Link>
              <Link
                href="/dersler"
                className="px-8 py-3.5 border border-[#C9A87A]/60 text-[#1A1218] font-medium rounded-full hover:bg-[#C9A87A]/10 transition-colors text-sm tracking-wide"
              >
                Dersleri Keşfet
              </Link>
            </div>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#6B5E68]">
              Online Pilates dersi arıyorsanız; evden, ofisten ya da seyahatteyken programa bağlanabilirsiniz. Küçük grup dersleri ve bireysel Pilates seansları sayesinde daha kontrollü ve düzenli bir egzersiz rutini kurabilirsiniz.
            </p>
          </div>

          {/* Sağ: Online ders kartları */}
          <div className="hidden md:flex flex-col gap-4">
            <Link
              href="/dersler#grup-dersleri"
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D8F0] hover:shadow-md transition-shadow group"
            >
              <p className="text-xs text-[#6B3D7A] font-medium tracking-wider uppercase mb-2">Grup Ders</p>
              <h3 className="text-lg font-semibold text-[#1A1218] mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>Online Grup Pilates</h3>
              <p className="text-sm text-[#6B5E68]">Maks. 8 kişi · 50 dk · Canlı yayın</p>
              <p className="text-xs text-[#C9A87A] mt-3 group-hover:underline">Programa bak →</p>
            </Link>
            <Link
              href="/dersler#bireysel-ders"
              className="bg-[#6B3D7A] rounded-2xl p-6 text-white hover:bg-[#5a3268] transition-colors group"
            >
              <p className="text-xs text-white/70 font-medium tracking-wider uppercase mb-2">Bireysel Ders</p>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>Online Özel Pilates</h3>
              <p className="text-sm text-white/80">Birebir · 50 dk · Size özel program</p>
              <p className="text-xs text-[#C9A87A] mt-3 group-hover:underline">Randevu al →</p>
            </Link>
          </div>
        </div>
      </section>
      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden bg-[#1A1218]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B3D7A]/70 via-[#1A1218]/90 to-[#1A1218]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B7FAD]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A87A]/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#C9A87A] text-xs font-medium tracking-[0.18em] uppercase mb-4 flex items-center justify-center gap-3">
            <span className="inline-block w-6 h-px bg-[#C9A87A]/50" />
            Başlamaya hazır mısınız?
            <span className="inline-block w-6 h-px bg-[#C9A87A]/50" />
          </p>
          <h2
            className="text-4xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online derse katılın.
          </h2>
          <p className="text-base text-white/60 mb-8 leading-relaxed">
            Grup ya da bireysel ders — hangi formata uygunsa, hemen kaydolun ve ilk dersinize başlayın.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/randevu"
              className="inline-flex px-8 py-3.5 bg-[#C9A87A] text-[#1A1218] text-sm font-medium rounded-full hover:bg-[#b8976a] transition-colors"
            >
              Online Derse Kaydol
            </Link>
            <Link
              href="/dersler"
              className="inline-flex px-8 py-3.5 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              Programı İncele
            </Link>
          </div>
        </div>
      </section>

      {/* KARŞILAŞTIRMA */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#E8D8F0] bg-white p-8">
            <p className="text-xs uppercase tracking-[0.12em] text-[#6B3D7A]">Karsilastirma</p>
            <h2
              className="mt-4 text-3xl font-semibold leading-snug text-[#1A1218]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Grup dersi mi bireysel ders mi?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B5E68]">
              Hedefinize, egzersiz aliskanliginiza ve takip ihtiyaciniza gore sizin icin daha uygun format degisebilir.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#E8D8F0] bg-[#FAF8F4] p-6">
              <h3 className="text-lg font-semibold text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Online grup dersi</h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B5E68]">
                Duzenli program isteyen, kucuk grup enerjisi ile motive olan ve butcesini daha dengeli kullanmak isteyenler icin uygundur.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#E8D8F0] bg-[#FAF8F4] p-6">
              <h3 className="text-lg font-semibold text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>Bireysel ders</h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B5E68]">
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
            src="/images/elvin-hakkimda.webp"
            alt="Elvin Öztürk"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#C9A87A] rounded-br-3xl pointer-events-none" />
        </div>
        <div>
          <p className="text-[#6B3D7A] text-xs font-medium tracking-[0.18em] uppercase mb-4 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Hakkımda
          </p>
          <h2
            className="text-4xl font-semibold text-[#1A1218] mb-5"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ben <em className="italic text-[#6B3D7A]">Elvin Öztürk.</em>
          </h2>
          <p className="text-[#6B5E68] leading-relaxed mb-5">
            Pilates&apos;i yalnizca bir egzersiz olarak degil, yasam kalitesini artiran bir pratik olarak goruyorum. Yillardir ogrencilerimle birebir calisarak her bedene uygun programlar hazirliyorum.
          </p>
          <p className="text-[#6B5E68] leading-relaxed mb-8">
            Online derslerimle artık dünyanın her yerinden öğrencilerimle buluşabiliyorum. Hedefim her seansta size gerçekten fayda sağlamak.
          </p>
          <Link
            href="/hakkimda"
            className="text-sm text-[#C9A87A] font-medium underline underline-offset-4 hover:text-[#b8976a]"
          >
            Daha fazlası →
          </Link>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-[#F5F0F8] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#6B3D7A] text-xs font-medium tracking-[0.18em] uppercase mb-3 flex items-center justify-center gap-3">
              <span className="inline-block w-6 h-px bg-[#C9A87A]" />
              Sik Sorulan Sorular
              <span className="inline-block w-6 h-px bg-[#C9A87A]" />
            </p>
            <h2
              className="text-4xl font-semibold text-[#1A1218]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Online Pilates hakkinda merak edilenler
            </h2>
          </div>
          <div className="space-y-4">
            {sikSorulanlar.map((item) => (
              <div key={item.soru} className="rounded-2xl border border-[#E8D8F0] bg-white p-6">
                <h3 className="text-lg font-semibold text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.soru}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#6B5E68]">{item.cevap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-[#6B3D7A] text-xs font-medium tracking-[0.18em] uppercase mb-3 flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-[#C9A87A]" />
                Blog
              </p>
              <h2
                className="text-4xl font-semibold text-[#1A1218]"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Pilates hakkinda yeni yazilar
              </h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-[#C9A87A] underline underline-offset-4 hover:text-[#b8976a]">
              Tum yazilari gor
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-[2rem] border border-[#E8D8F0] bg-white p-7">
                <p className="text-xs uppercase tracking-[0.12em] text-[#6B3D7A]">{post.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  {post.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6B5E68]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-[#C9A87A] underline underline-offset-4 hover:text-[#b8976a]"
                >
                  Devamini oku
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="h-40" />
    </>
  );
}
