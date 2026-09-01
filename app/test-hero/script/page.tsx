import type { Metadata } from 'next';

/** Teşhis: hero sayfanın en üstünde, öncesinde ana sayfadaki gibi JSON-LD script VAR. */
export const metadata: Metadata = {
  title: 'Hero testi — script',
  robots: { index: false, follow: false },
};

const IMG = '/images/grup-ders-2.webp';

const ornekSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Elvin Öztürk Online Pilates',
  description: 'Teşhis amaçlı örnek yapısal veri.',
};

export default function TestScriptPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ornekSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ornekSchema) }}
      />

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
            I — script VAR, hero en üstte
          </h1>
        </div>
      </section>
      <div className="h-40" />
    </>
  );
}
