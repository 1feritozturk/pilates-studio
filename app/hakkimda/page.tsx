import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { createMetadata, defaultKeywords } from '@/lib/seo';

const sertifikalar = [
  '2. Seviye Türkiye Cimnastik Federasyonu Onaylı Pilates Eğitmenliği',
  'Türkiye Cimnastik Federasyonu Pilates Gelişim Semineri',
  'Hamile Pilatesi Eğitimi',
];

const degerler = [
  {
    baslik: 'Her beden farklıdır',
    aciklama: 'Standart programlar yerine her öğrenciye özel yaklaşım benimsiyorum. Bedeninizin ihtiyaçlarını dinleyerek ilerliyoruz.',
    img: '/images/her-beden-farklidir.webp',
  },
  {
    baslik: 'Kalite, niceliğin önünde',
    aciklama: 'Az ama doğru hareket, çok ama yanlış hareketten çok daha değerlidir. Her seansta buna odaklanıyorum.',
    img: '/images/kalite.webp',
  },
  {
    baslik: 'Süreklilik',
    aciklama: 'Pilates bir yaşam biçimidir. Sizi bir süreliğine değil, kalıcı olarak bu pratiğin içine çekmeyi hedefliyorum.',
    img: '/images/sureklilik.webp',
  },
];

export const metadata: Metadata = createMetadata({
  title: 'Hakkımda',
  description:
    'Elvin Öztürk’ün Pilates yaklaşımını, eğitimlerini ve online derslerdeki çalışma biçimini keşfedin.',
  path: '/hakkimda',
  keywords: [...defaultKeywords, 'pilates eğitmeni', 'elvin öztürk hakkında'],
});

export default function HakkimdaPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#EDE0F5] bg-[radial-gradient(circle_at_top_right,_rgba(237,224,245,0.9),_rgba(250,248,244,1)_42%,_rgba(245,240,248,1)_100%)]">
        {/* blur-3xl yerine radyal gradient — gerekçe app/page.tsx'teki CTA banner notunda. */}
        <div
          className="absolute top-[-4rem] left-[-3rem] h-56 w-56 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(237,224,245,0.95) 0%, rgba(237,224,245,0.45) 45%, rgba(237,224,245,0) 70%)',
          }}
        />
        <div
          className="absolute bottom-[-5rem] right-[-2rem] h-48 w-48 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(243,235,221,0.95) 0%, rgba(243,235,221,0.45) 45%, rgba(243,235,221,0) 70%)',
          }}
        />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(31,31,31,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(31,31,31,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-[#6B3D7A] text-sm font-medium tracking-[0.12em] uppercase mb-3">Merhaba</p>
            <h1
              className="text-5xl md:text-6xl font-semibold text-[#1A1218] mb-6"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Hakkımda
            </h1>
            <p className="text-[#6B5E68] text-base md:text-lg leading-relaxed max-w-2xl">
              Pilatesle kurduğum bağı, eğitim yolculuğumu ve derslerde nasıl bir çalışma yaklaşımı benimsediğimi bu sayfada bulabilirsiniz.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['2. Seviye TCF onaylı', 'Online grup ve bireysel', 'Güvenli ve sürdürülebilir yaklaşım'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#EDE0F5] bg-white/80 px-4 py-2 text-sm text-[#1A1218] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tanıtım */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden aspect-square">
          <Image
            src="/images/elvin-hakkimda.webp"
            alt="Elvin Öztürk"
            fill
            className="object-cover object-center"
          />
        </div>
        <div>
          <h2
            className="text-3xl font-semibold text-[#1A1218] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ben Elvin Öztürk.
          </h2>
          <p className="text-base text-[#6B5E68] leading-relaxed mb-4">
            Pilatesle 7 yıl önce, bir teknoloji şirketinde beyaz yaka olarak çalıştığım dönemde tanıştım. Spor, hayatımın her zaman önemli bir parçasıydı; ancak pilatesle birlikte bedenimi çok daha yakından tanımaya, gücün ve dengenin yalnızca fiziksel değil, zihinsel bir karşılığı da olduğunu keşfetmeye başladım.
          </p>
          <p className="text-base text-[#6B5E68] leading-relaxed mb-4">
            Kendi bedenimde gördüğüm değişim, pilatese olan bağlılığımı zamanla gerçek bir uzmanlık yolculuğuna dönüştürdü. Bu alanda derinleşmeye karar vererek TCF sınavlarına hazırlandım ve bugün 2. seviye TCF onaylı pilates eğitmeni olarak yoluma devam ediyorum. Hamile pilatesi gibi özel uzmanlık alanlarında ise BABS Akademi’den eğitimler alarak bilgi ve pratiğimi daha da güçlendirdim.
          </p>
          <p className="text-base text-[#6B5E68] leading-relaxed mb-4">
            Bir süre beyaz yaka kariyerimi sürdürürken part-time olarak pilates eğitmenliği yaptım. Zamanla pilates, hayatımda bir ilgi alanının ötesine geçti; yaşam kalitemi dönüştüren, beni besleyen ve başkalarına da katkı sunmak istediğim güçlü bir alan haline geldi. Bu nedenle kariyerimi tamamen bu yöne çevirerek, bugün tüm odağımı pilatese ve öğrencilerime ayırıyorum.
          </p>
          <p className="text-base text-[#6B5E68] leading-relaxed mb-4">
            Online bireysel ve grup derslerimde amacım; her seviyeden katılımcının kendi bedenini daha iyi tanımasına, daha güçlü, dengeli ve iyi hissetmesine destek olmak. Her dersi, kişinin ihtiyacını merkeze alan; güvenli, etkili ve sürdürülebilir bir deneyim olarak planlıyorum.
          </p>
          <p className="text-base text-[#6B5E68] leading-relaxed mb-8">
            Pilates benim için yalnızca bir egzersiz yöntemi değil; bedenle daha bilinçli, güçlü ve dengeli bir bağ kurmanın yolu.
          </p>

          {/* Sertifikalar */}
          <div>
            <p className="text-xs text-[#6B5E68] uppercase tracking-wider mb-3">Sertifika & Eğitimler</p>
            <ul className="space-y-2">
              {sertifikalar.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-[#6B5E68]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9B7FAD] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="bg-[#F5F0F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#6B3D7A] text-sm font-medium tracking-[0.12em] uppercase mb-3">Yaklaşımım</p>
            <h2
              className="text-3xl font-semibold text-[#1A1218]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nasıl çalışırım?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {degerler.map((d) => (
              <div key={d.baslik} className="bg-white rounded-2xl overflow-hidden border border-[#EDE0F5]">
                <div className="relative h-44">
                  <Image src={d.img} alt={d.baslik} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1A1218] mb-2">{d.baslik}</h3>
                  <p className="text-base text-[#6B5E68] leading-relaxed">{d.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2
          className="text-3xl font-semibold text-[#1A1218] mb-3"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Birlikte çalışalım.
        </h2>
        <p className="text-[#6B5E68] text-base mb-8 max-w-md mx-auto">
          Online grup ya da bireysel ders — hangisi size uygunsa, hemen kaydolun.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/randevu"
            className="px-8 py-3.5 bg-[#9B7FAD] text-white text-sm font-medium rounded-full hover:bg-[#6B3D7A] transition-colors"
          >
            Derse Kaydol
          </Link>
          <Link
            href="/iletisim"
            className="px-8 py-3.5 border border-[#1A1218]/20 text-[#1A1218] text-sm font-medium rounded-full hover:bg-[#1A1218]/5 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}
