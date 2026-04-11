import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata, defaultKeywords } from '@/lib/seo';

const sertifikalar = [
  '2. Seviye TCF Onayli Pilates Egitmenligi',
  'Hamile Pilatesi Egitimi',
];

const degerler = [
  {
    baslik: 'Her beden farklıdır',
    aciklama: 'Standart programlar yerine her öğrenciye özel yaklaşım benimsiyorum. Bedeninizin ihtiyaçlarını dinleyerek ilerliyoruz.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80&fit=crop',
  },
  {
    baslik: 'Kalite, niceliğin önünde',
    aciklama: 'Az ama doğru hareket, çok ama yanlış hareketten çok daha değerlidir. Her seansta buna odaklanıyorum.',
    img: '/images/kalite.jpg',
  },
  {
    baslik: 'Süreklilik',
    aciklama: 'Pilates bir yaşam biçimidir. Sizi bir süreliğine değil, kalıcı olarak bu pratiğin içine çekmeyi hedefliyorum.',
    img: '/images/sureklilik.jpg',
  },
];

export const metadata: Metadata = createMetadata({
  title: 'Hakkimda',
  description:
    'Elvin Ozturk’un Pilates yaklasimini, egitimlerini ve online derslerdeki calisma bicimini kesfedin.',
  path: '/hakkimda',
  keywords: [...defaultKeywords, 'pilates egitmeni', 'elvin ozturk hakkinda'],
});

export default function HakkimdaPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-72 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1400&q=85&fit=crop"
            alt="Elvin Öztürk"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[#1F1F1F]/55" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="text-[#7DD89D] text-sm font-medium tracking-[0.2em] uppercase mb-2">Merhaba</p>
          <h1
            className="text-5xl font-semibold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Hakkımda
          </h1>
        </div>
      </section>

      {/* Tanıtım */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-square">
          <Image
            src="/images/elvin-hakkimda.jpeg"
            alt="Elvin Öztürk"
            fill
            className="object-cover object-center"
          />
        </div>
        <div>
          <h2
            className="text-3xl font-semibold text-[#1F1F1F] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ben Elvin Öztürk.
          </h2>
          <p className="text-[#505050] leading-relaxed mb-4">
            Pilatesle 7 yil once, bir teknoloji sirketinde beyaz yaka olarak calistigim donemde tanistim. Spor, hayatimin her zaman onemli bir parcasiydi; ancak pilatesle birlikte bedenimi cok daha yakindan tanimaya, gucun ve dengenin yalnizca fiziksel degil, zihinsel bir karsiligi da oldugunu kesfetmeye basladim.
          </p>
          <p className="text-[#505050] leading-relaxed mb-4">
            Kendi bedenimde gordugum degisim, pilatese olan bagliligimi zamanla gercek bir uzmanlik yolculuguna donusturdu. Bu alanda derinlesmeye karar vererek TCF sinavlarina hazirlandim ve bugun 2. seviye TCF onayli pilates egitmeni olarak yoluma devam ediyorum. Hamile pilatesi gibi ozel uzmanlik alanlarinda ise BABS Akademi’den egitimler alarak bilgi ve pratigimi daha da guclendirdim.
          </p>
          <p className="text-[#505050] leading-relaxed mb-4">
            Bir sure beyaz yaka kariyerimi surdururken part-time olarak pilates egitmenligi yaptim. Zamanla pilates, hayatimda bir ilgi alaninin otesine gecti; yasam kalitemi donusturen, beni besleyen ve baskalarina da katki sunmak istedigim guclu bir alan haline geldi. Bu nedenle kariyerimi tamamen bu yone cevirerek, bugun tum odagimi pilatese ve ogrencilerime ayiriyorum.
          </p>
          <p className="text-[#505050] leading-relaxed mb-4">
            Online bireysel ve grup derslerimde amacim; her seviyeden katilimcinin kendi bedenini daha iyi tanimasina, daha guclu, dengeli ve iyi hissetmesine destek olmak. Her dersi, kisinin ihtiyacini merkeze alan; guvenli, etkili ve surdurulebilir bir deneyim olarak planliyorum.
          </p>
          <p className="text-[#505050] leading-relaxed mb-8">
            Pilates benim icin yalnizca bir egzersiz yontemi degil; bedenle daha bilincli, guclu ve dengeli bir bag kurmanin yolu.
          </p>

          {/* Sertifikalar */}
          <div>
            <p className="text-xs text-[#9E9E9E] uppercase tracking-wider mb-3">Sertifika & Eğitimler</p>
            <ul className="space-y-2">
              {sertifikalar.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-[#505050]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52C77E] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="bg-[#F5F9F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#52C77E] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yaklaşımım</p>
            <h2
              className="text-3xl font-semibold text-[#1F1F1F]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nasıl çalışırım?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {degerler.map((d) => (
              <div key={d.baslik} className="bg-white rounded-2xl overflow-hidden border border-[#D5F2E5]">
                <div className="relative h-44">
                  <Image src={d.img} alt={d.baslik} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1F1F1F] mb-2">{d.baslik}</h3>
                  <p className="text-sm text-[#505050] leading-relaxed">{d.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2
          className="text-3xl font-semibold text-[#1F1F1F] mb-3"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Birlikte çalışalım.
        </h2>
        <p className="text-[#505050] text-sm mb-8 max-w-md mx-auto">
          Online grup ya da bireysel ders — hangisi size uygunsa, hemen kaydolun.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/randevu"
            className="px-8 py-3.5 bg-[#52C77E] text-white text-sm font-medium rounded-full hover:bg-[#3FB86D] transition-colors"
          >
            Derse Kaydol
          </Link>
          <Link
            href="/iletisim"
            className="px-8 py-3.5 border border-[#1F1F1F]/20 text-[#1F1F1F] text-sm font-medium rounded-full hover:bg-[#1F1F1F]/5 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}
