import Image from 'next/image';
import Link from 'next/link';

const fotograflar = [
  {
    id: 1,
    baslik: 'Mat Pilates Dersi',
    src: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80&fit=crop',
    span: 'md:col-span-2',
  },
  {
    id: 2,
    baslik: 'Reformer Seansı',
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 3,
    baslik: 'Grup Dersi',
    src: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 4,
    baslik: 'Esneklik Çalışması',
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 5,
    baslik: 'Core Güçlendirme',
    src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 6,
    baslik: 'Denge & Koordinasyon',
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80&fit=crop',
    span: 'md:col-span-2',
  },
  {
    id: 7,
    baslik: 'Özel Ders',
    src: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 8,
    baslik: 'Nefes & Meditasyon',
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop',
    span: '',
  },
  {
    id: 9,
    baslik: 'Prenatal Pilates',
    src: 'https://images.unsplash.com/photo-1593810451564-2b9b9e4e0d6c?w=600&q=80&fit=crop',
    span: '',
  },
];

export default function GaleriPage() {
  return (
    <>
      {/* Header */}
      <section className="relative h-64 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=85&fit=crop"
            alt="Galeri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/55" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-10 w-full">
          <p className="text-[#A8C4A2] text-sm font-medium tracking-[0.2em] uppercase mb-2">Stüdyomuz</p>
          <h1
            className="text-5xl font-semibold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Galeri
          </h1>
        </div>
      </section>

      {/* Galeri Grid */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotograflar.map((foto) => (
            <div
              key={foto.id}
              className={`relative rounded-2xl overflow-hidden aspect-square group cursor-pointer ${foto.span}`}
            >
              <Image
                src={foto.src}
                alt={foto.baslik}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1C1C1C]/0 group-hover:bg-[#1C1C1C]/40 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {foto.baslik}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-[#F4F3F1] py-16 text-center">
        <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Sosyal Medya</p>
        <h2
          className="text-3xl font-semibold text-[#1C1C1C] mb-3"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Bizi Instagram&apos;da takip edin
        </h2>
        <p className="text-[#5A5A5A] text-sm mb-6">
          Güncel ders videoları, ipuçları ve stüdyo haberleri için.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#1C1C1C] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @elvinozturk.pilates
          </a>
          <Link
            href="/randevu"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#7D9B76] text-white text-sm font-medium rounded-full hover:bg-[#6A8B63] transition-colors"
          >
            Deneme Dersi Al
          </Link>
        </div>
      </section>
    </>
  );
}
