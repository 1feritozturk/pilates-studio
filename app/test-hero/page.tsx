import type { Metadata } from 'next';

/**
 * iOS Safari'de hero'da beliren siyah blok için teşhis sayfası.
 * Hero'nun bileşenlerini tek tek eleyerek hangisinin artefaktı ürettiğini
 * bulmak için var. Sorun çözülünce bu sayfa silinmeli.
 */
export const metadata: Metadata = {
  title: 'Hero testi',
  robots: { index: false, follow: false },
};

const IMG = '/images/grup-ders-2.webp';

function Etiket({ children }: { children: string }) {
  return (
    <div className="bg-black text-white text-sm font-mono px-4 py-2 sticky top-16 z-50">{children}</div>
  );
}

export default function TestHeroPage() {
  return (
    <div className="pt-16">
      <Etiket>A — mevcut hali: background-image + overlay + min-h-90vh + overflow-hidden</Etiket>
      <section
        className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <Etiket>B — overflow-hidden kaldırıldı</Etiket>
      <section
        className="min-h-[70vh] flex flex-col justify-center relative bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <Etiket>C — min-h-[70vh] yerine sabit 500px</Etiket>
      <section
        className="h-[500px] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <Etiket>D — overlay yok, görsel tam görünür</Etiket>
      <section
        className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <Etiket>E — görsel yok, sadece düz renk</Etiket>
      <section className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-[#EDE4E0]">
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <Etiket>F — görsel var, Playfair fontu yok (sistem fontu)</Etiket>
      <section
        className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]">Online Pilates ile</h2>
        </div>
      </section>

      <Etiket>G — img etiketi ile (eski yöntem)</Etiket>
      <section className="min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[rgba(250,248,244,0.87)]" />
        </div>
        <div className="relative z-10 px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h2 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Online Pilates ile
          </h2>
        </div>
      </section>

      <div className="h-40" />
    </div>
  );
}
