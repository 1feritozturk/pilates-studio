import Link from 'next/link';
import Image from 'next/image';

const sertifikalar = [
  'STOTT Pilates® Sertifikası',
  'Balanced Body® Reformer Eğitimi',
  'APPI Pilates Sertifikası',
  'Prenatal & Postnatal Pilates',
  'Mindfulness & Nefes Teknikleri',
];

const degerler = [
  {
    baslik: 'Her beden farklıdır',
    aciklama: 'Standart programlar yerine her öğrenciye özel yaklaşım benimsiyorum. Bedeninizin ihtiyaçlarını dinleyerek ilerliyoruz.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80&fit=crop',
  },
  {
    baslik: 'Kalite, niceliğin önünde',
    aciklama: 'Az ama doğru hareket, çok ama yanlış hareketten çok daha değerlidir. Her seansta buna odaklanıyorum.',
    img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&q=80&fit=crop',
  },
  {
    baslik: 'Süreklilik',
    aciklama: 'Pilates bir yaşam biçimidir. Sizi bir süreliğine değil, kalıcı olarak bu pratiğin içine çekmeyi hedefliyorum.',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&q=80&fit=crop',
  },
];

export default function HakkimdaPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-72 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1400&q=85&fit=crop"
            alt="Elvin Öztürk"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/55" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="text-[#A8C4A2] text-sm font-medium tracking-[0.2em] uppercase mb-2">Merhaba</p>
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
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=85&fit=crop"
            alt="Elvin Öztürk"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2
            className="text-3xl font-semibold text-[#1C1C1C] mb-6"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Ben Elvin Öztürk.
          </h2>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">
            Pilates ile tanışmam tesadüften çok bir kader gibiydi. Uzun yıllar boyunca kendi bedenimdeki değişimi fark ettikçe, bu deneyimi başkalarıyla paylaşmak istediğimi anladım.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed mb-4">
            Bugün online grup ve bireysel derslerle, dünyanın farklı yerlerinden öğrencilere ulaşabiliyorum. Her seans, yalnızca fiziksel bir çalışma değil; bedenle kurulan yeni bir diyalog.
          </p>
          <p className="text-[#5A5A5A] leading-relaxed mb-8">
            Amacım; her seviyeden bireyin, kendi bedenini daha iyi tanımasına ve günlük yaşamda daha rahat, daha güçlü hissetmesine katkı sağlamak.
          </p>

          {/* Sertifikalar */}
          <div>
            <p className="text-xs text-[#9E9E9E] uppercase tracking-wider mb-3">Sertifika & Eğitimler</p>
            <ul className="space-y-2">
              {sertifikalar.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-[#5A5A5A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7D9B76] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Yaklaşımım</p>
            <h2
              className="text-3xl font-semibold text-[#1C1C1C]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nasıl çalışırım?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {degerler.map((d) => (
              <div key={d.baslik} className="bg-white rounded-2xl overflow-hidden border border-[#EDE0CF]">
                <div className="relative h-44">
                  <Image src={d.img} alt={d.baslik} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1C1C1C] mb-2">{d.baslik}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed">{d.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2
          className="text-3xl font-semibold text-[#1C1C1C] mb-3"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Birlikte çalışalım.
        </h2>
        <p className="text-[#5A5A5A] text-sm mb-8 max-w-md mx-auto">
          Online grup ya da bireysel ders — hangisi size uygunsa, hemen kaydolun.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/randevu"
            className="px-8 py-3.5 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
          >
            Derse Kaydol
          </Link>
          <Link
            href="/iletisim"
            className="px-8 py-3.5 border border-[#1C1C1C]/20 text-[#1C1C1C] text-sm font-medium rounded-full hover:bg-[#1C1C1C]/5 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>
    </>
  );
}
