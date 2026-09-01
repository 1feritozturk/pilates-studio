import type { Metadata } from 'next';
import Link from 'next/link';

/** Teşhis: ana sayfadaki hero'nun birebir kopyası, sayfanın geri kalanı olmadan. */
export const metadata: Metadata = {
  title: 'Hero testi — birebir',
  robots: { index: false, follow: false },
};

const HERO_IMAGE = '/images/grup-ders-2.webp';

export default function TestBirebirPage() {
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
      <div className="h-40" />
    </>
  );
}
