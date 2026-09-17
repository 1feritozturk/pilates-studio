import { connection } from 'next/server';
import { createMetadata } from '@/lib/seo';
import LessonSchedule from './LessonSchedule';

export const metadata = createMetadata({
  title: 'Ders Takvimi | Canlı Online Pilates',
  description: 'Yaklaşan canlı online Pilates derslerini ve Türkiye saatiyle ders saatlerini inceleyin. Katılmak istediğiniz ders için kayıt talebinizi oluşturun.',
  path: '/ders-takvimi',
});

export default async function SchedulePage() {
  await connection();
  // Request-time Server Component: use one timestamp for server and client hydration.
  // eslint-disable-next-line react-hooks/purity
  const initialNow = Date.now();
  return (
    <>
      <section className="bg-[#F5F0F8] py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#6B3D7A] text-sm font-medium tracking-[0.12em] uppercase mb-3">Canlı online dersler</p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Ders Takvimi</h1>
          <p className="text-[#6B5E68] leading-relaxed max-w-2xl">Yaklaşan canlı Pilates derslerini inceleyin, katılmak istediğiniz ders için kayıt talebinizi oluşturun.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-8 md:py-10">
        <LessonSchedule initialNow={initialNow} />
        <p className="mt-6 text-sm text-[#6B5E68] leading-relaxed">Kayıt talebinizin ardından sizinle iletişime geçilir. Kaydınız netleştiğinde Zoom bağlantısı ve ders bilgileri e-posta adresinize gönderilir.</p>
      </section>
    </>
  );
}
