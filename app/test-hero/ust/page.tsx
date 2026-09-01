import type { Metadata } from 'next';

/** Teşhis: hero sayfanın en üstünde, öncesinde JSON-LD script YOK. */
export const metadata: Metadata = {
  title: 'Hero testi — üst',
  robots: { index: false, follow: false },
};

const IMG = '/images/grup-ders-2.webp';

export default function TestUstPage() {
  return (
    <>
      <section
        className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${IMG}')` }}
      >
        <div className="absolute inset-0 z-0 bg-[rgba(250,248,244,0.87)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="text-[#6B3D7A] text-xs tracking-[0.18em] uppercase mb-5 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A87A]" />
            Online Pilates
          </p>
          <h1 className="text-5xl text-[#1A1218]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            H — script YOK, hero en üstte
          </h1>
        </div>
      </section>
      <div className="h-40" />
    </>
  );
}
