export type DersSerisi = 'grup' | 'fitik';

export type ScheduledLesson = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  series: DersSerisi;
  index: number;
};

type SeriTanimi = {
  key: DersSerisi;
  baslikOneki: string;
  baslangicSaati: string;
  bitisSaati: string;
};

type DonemTanimi = {
  ad: string;
  ilkDersTarihi: string;
  /** Date.getUTCDay() karşılıkları: 0 Pazar ... 3 Çarşamba, 5 Cuma */
  gunler: number[];
  dersSayisi: number;
  seriler: SeriTanimi[];
};

/**
 * Kayıtlar ders başlamadan bu kadar dakika önce kapanır. Elvin'in Zoom
 * bağlantısını iletebilmesi için makul bir süre gerekiyor; kaydın ders
 * saatine kadar açık kalması pratikte işlemiyordu.
 */
export const KAYIT_KAPANIS_DK = 30;

/**
 * Tek kaynak: dersler tek tek yazılmaz, dönem tanımından üretilir. Yeni dönem
 * açıldığında yalnızca bu nesne güncellenir; tarihler, ders numaraları ve
 * kimlikler kendiliğinden doğru gelir.
 *
 * Public schedule only. Never add Zoom links, meeting IDs or passcodes here.
 */
export const aktifDonem: DonemTanimi = {
  ad: 'Eylül–Ekim Dönemi',
  ilkDersTarihi: '2026-09-16',
  gunler: [3, 5],
  dersSayisi: 8,
  seriler: [
    {
      key: 'grup',
      baslikOneki: 'Online Pilates Grup',
      baslangicSaati: '19:00',
      bitisSaati: '20:00',
    },
    {
      key: 'fitik',
      baslikOneki: 'Bel ve Boyun Fıtığına Özel Online Pilates',
      baslangicSaati: '20:00',
      bitisSaati: '21:00',
    },
  ],
};

export const dersSerileri: Record<DersSerisi, { kisaAd: string; uyari?: string }> = {
  grup: {
    kisaAd: 'Grup dersi',
  },
  fitik: {
    kisaAd: 'Özel grup',
    uyari:
      'Bel ve boyun fıtığına yönelik bu derse katılım uygunluğu kayıt öncesinde değerlendirilir.',
  },
};

// Tarih aritmetiği baştan sona UTC üzerinden yapılır. Yerel saatle yapıldığında
// sunucunun saat dilimine göre gün kayması oluşur ve sunucu ile istemci farklı
// tarihler üretir.
function gunEkle(isoTarih: string, gun: number) {
  const [yil, ay, gunSayisi] = isoTarih.split('-').map(Number);
  const zaman = Date.UTC(yil, ay - 1, gunSayisi) + gun * 86400000;
  const d = new Date(zaman);
  const iki = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${iki(d.getUTCMonth() + 1)}-${iki(d.getUTCDate())}`;
}

function haftaninGunu(isoTarih: string) {
  const [yil, ay, gun] = isoTarih.split('-').map(Number);
  return new Date(Date.UTC(yil, ay - 1, gun)).getUTCDay();
}

export function dersGunleri(donem: DonemTanimi): string[] {
  const gunler: string[] = [];
  let tarih = donem.ilkDersTarihi;

  // Dönem tanımı bozuksa sonsuz döngüye girmemek için üst sınır.
  for (let i = 0; gunler.length < donem.dersSayisi && i < 400; i += 1) {
    if (donem.gunler.includes(haftaninGunu(tarih))) gunler.push(tarih);
    tarih = gunEkle(tarih, 1);
  }

  return gunler;
}

function donemDersleri(donem: DonemTanimi): ScheduledLesson[] {
  const dersler: ScheduledLesson[] = [];

  dersGunleri(donem).forEach((tarih, sira) => {
    for (const seri of donem.seriler) {
      // Türkiye kalıcı olarak UTC+3, yaz saati uygulaması yok.
      dersler.push({
        id: `${tarih.replace(/-/g, '')}-${seri.baslangicSaati.replace(':', '')}`,
        title: `${seri.baslikOneki} – Ders ${sira + 1}`,
        startsAt: `${tarih}T${seri.baslangicSaati}:00+03:00`,
        endsAt: `${tarih}T${seri.bitisSaati}:00+03:00`,
        series: seri.key,
        index: sira + 1,
      });
    }
  });

  return dersler.sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt));
}

export const scheduledLessons: ScheduledLesson[] = donemDersleri(aktifDonem);

export function getScheduledLesson(id: unknown) {
  return typeof id === 'string' ? scheduledLessons.find((lesson) => lesson.id === id) : undefined;
}

/** Ders henüz başlamadıysa takvimde görünür. */
export function isLessonUpcoming(lesson: ScheduledLesson, now: number) {
  return Date.parse(lesson.startsAt) > now;
}

/** Kayıt yalnızca ders başlangıcından KAYIT_KAPANIS_DK dakika öncesine kadar açıktır. */
export function isLessonOpen(lesson: ScheduledLesson, now: number) {
  return Date.parse(lesson.startsAt) - KAYIT_KAPANIS_DK * 60000 > now;
}

/** Listenin yeniden hesaplanması gereken anlar: kayıt kapanışı ve ders başlangıcı. */
export function sonrakiDegisimAni(now: number): number | undefined {
  return scheduledLessons
    .flatMap((lesson) => [
      Date.parse(lesson.startsAt) - KAYIT_KAPANIS_DK * 60000,
      Date.parse(lesson.startsAt),
    ])
    .filter((an) => an > now)
    .sort((a, b) => a - b)[0];
}

export function formatLessonTime(value: string) {
  return new Intl.DateTimeFormat('tr-TR', {
    timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(new Date(value));
}

export function formatLessonDate(value: string) {
  return new Intl.DateTimeFormat('tr-TR', {
    timeZone: 'Europe/Istanbul', day: 'numeric', month: 'long', year: 'numeric', weekday: 'long',
  }).format(new Date(value));
}

const GUN_ADLARI = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

/** "Her Çarşamba ve Cuma" — dönem tanımından üretilir, elle yazılmaz. */
export function donemRitmi(donem: DonemTanimi) {
  const adlar = [...donem.gunler].sort((a, b) => a - b).map((gun) => GUN_ADLARI[gun]);
  if (adlar.length < 2) return `Her ${adlar[0] ?? ''}`.trim();
  return `Her ${adlar.slice(0, -1).join(', ')} ve ${adlar[adlar.length - 1]}`;
}
