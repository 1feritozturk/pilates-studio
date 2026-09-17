'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  KAYIT_KAPANIS_DK,
  aktifDonem,
  dersSerileri,
  donemRitmi,
  formatLessonDate,
  formatLessonTime,
  isLessonOpen,
  isLessonUpcoming,
  scheduledLessons,
  sonrakiDegisimAni,
} from '@/lib/schedule';

const EN_UZUN_BEKLEME = 2147483647;

export default function LessonSchedule({ initialNow }: { initialNow: number }) {
  const [now, setNow] = useState(initialNow);

  // Saniyede bir yeniden render etmek yerine yalnızca listenin gerçekten
  // değiştiği ana zamanlayıcı kurulur: kayıt kapanışı ya da ders başlangıcı.
  // Bu anlar günde dört kez gelir, saniyelik döngü mobilde boşuna pil yakıyordu.
  useEffect(() => {
    const yenile = () => setNow(Date.now());
    window.addEventListener('focus', yenile);

    const sonraki = sonrakiDegisimAni(now);
    const timer =
      sonraki === undefined
        ? undefined
        : window.setTimeout(yenile, Math.min(sonraki - now + 1000, EN_UZUN_BEKLEME));

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      window.removeEventListener('focus', yenile);
    };
  }, [now]);

  const upcoming = scheduledLessons.filter((lesson) => isLessonUpcoming(lesson, now));
  const dates = [...new Set(upcoming.map((lesson) => formatLessonDate(lesson.startsAt)))];
  const kalanDers = dates.length;

  if (!upcoming.length) {
    return (
      <div className="rounded-3xl border border-[#E8D8F0] bg-white p-6 md:p-8">
        <h2 className="text-xl font-medium mb-3">Yeni dönem yakında</h2>
        <p className="text-[#6B5E68] leading-relaxed mb-5">
          {aktifDonem.ad} tamamlandı. Yeni dönemin tarihleri belirlendiğinde duyurulacak; haberdar
          olmak isterseniz bize ulaşabilirsiniz.
        </p>
        <Link
          href="/iletisim"
          className="inline-flex min-h-11 items-center px-5 py-3 rounded-full bg-[#6B3D7A] text-white text-sm font-medium hover:bg-[#5a3268] transition-colors"
        >
          Haber verin
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-3xl border border-[#E8D8F0] bg-[#FCFAF7] p-5 md:p-7 mb-8">
        <p className="text-[#6B3D7A] text-sm font-medium tracking-[0.12em] uppercase mb-2">
          {aktifDonem.ad}
        </p>
        <p className="text-lg text-[#1A1218] leading-relaxed">
          {donemRitmi(aktifDonem)} ·{' '}
          {aktifDonem.seriler.map((seri) => seri.baslangicSaati).join(' ve ')} ·{' '}
          <span className="font-medium">
            {aktifDonem.dersSayisi} derslik dönemin {kalanDers} dersi kaldı
          </span>
        </p>
        <p className="text-[#6B5E68] leading-relaxed mt-3">
          Derslere sonradan da katılabilirsiniz; tamamlanan derslerin ücreti toplam tutardan
          düşülür. Kayıtlar ders başlamadan {KAYIT_KAPANIS_DK} dakika önce kapanır.
        </p>
      </div>

      <div className="space-y-8">
        {dates.map((date) => (
          <div key={date}>
            <div className="flex flex-wrap justify-between gap-2 border-b border-[#E8D8F0] pb-4 mb-5">
              <h2 className="text-base font-medium">{date}</h2>
              <span className="text-xs text-[#6B5E68]">Türkiye saati · UTC+3</span>
            </div>

            <div className="space-y-4">
              {upcoming
                .filter((lesson) => formatLessonDate(lesson.startsAt) === date)
                .map((lesson) => {
                  const seri = dersSerileri[lesson.series];
                  const acik = isLessonOpen(lesson, now);
                  const dakika = (Date.parse(lesson.endsAt) - Date.parse(lesson.startsAt)) / 60000;

                  return (
                    <article
                      key={lesson.id}
                      className="grid grid-cols-1 sm:grid-cols-[100px_minmax(0,1fr)] lg:grid-cols-[110px_minmax(0,1fr)_auto] gap-5 items-center rounded-3xl border border-[#E8D8F0] bg-white p-5 md:p-7"
                    >
                      <div className="flex sm:flex-col gap-2 sm:gap-1 sm:self-stretch sm:justify-center border-b sm:border-b-0 sm:border-r border-[#E8D8F0] pb-3 sm:pb-0">
                        <time dateTime={lesson.startsAt} className="text-2xl font-medium tabular-nums">
                          {formatLessonTime(lesson.startsAt)}
                        </time>
                        <span className="text-sm text-[#6B5E68] self-center sm:self-start">
                          – <time dateTime={lesson.endsAt}>{formatLessonTime(lesson.endsAt)}</time>
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-[#6B3D7A] mb-2">
                          Canlı · Zoom <span className="mx-2">/</span> {dakika} dakika
                          <span className="mx-2">/</span> {seri.kisaAd}
                        </p>
                        <h3 className="text-lg font-medium leading-relaxed mb-2">{lesson.title}</h3>
                        <p className="text-sm text-[#6B5E68]">Elvin Öztürk ile</p>
                        {seri.uyari ? (
                          <p className="mt-3 rounded-2xl bg-[#F5F0F8] px-4 py-3 text-sm text-[#6B3D7A] leading-relaxed">
                            {seri.uyari}
                          </p>
                        ) : null}
                      </div>

                      {acik ? (
                        <Link
                          href={`/randevu?ders=${lesson.id}`}
                          aria-label={`${lesson.title}, ${formatLessonTime(lesson.startsAt)} için kayıt talebi oluştur`}
                          className="sm:col-start-2 lg:col-start-auto inline-flex justify-center min-h-11 items-center rounded-full px-5 py-3 bg-[#6B3D7A] text-white text-sm font-medium hover:bg-[#5a3268] transition-colors"
                        >
                          Kayıt talebi oluştur
                        </Link>
                      ) : (
                        <span className="sm:col-start-2 lg:col-start-auto inline-flex justify-center min-h-11 items-center rounded-full px-5 py-3 border border-[#E8D8F0] text-[#6B5E68] text-sm font-medium">
                          Kayıt kapandı
                        </span>
                      )}
                    </article>
                  );
                })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-[#E8D8F0] bg-white p-6 md:p-8">
        <h2 className="text-xl font-medium mb-3">Bireysel ders</h2>
        <p className="text-[#6B5E68] leading-relaxed mb-5">
          Grup dersi saatleri size uymuyorsa ya da kendi hedeflerinize göre ilerlemek isterseniz
          bireysel ders alabilirsiniz. Bireysel derslerin gün ve saati takvimde yer almaz; sizinle
          birlikte planlanır.
        </p>
        <Link
          href="/randevu"
          className="inline-flex min-h-11 items-center px-5 py-3 rounded-full border border-[#6B3D7A] text-[#6B3D7A] text-sm font-medium hover:bg-[#6B3D7A] hover:text-white transition-colors"
        >
          Bireysel ders için talep oluşturun
        </Link>
      </div>
    </>
  );
}
