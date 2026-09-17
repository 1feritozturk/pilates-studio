import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, imports = {}, clock = Date) {
  const mod = { exports: {} };
  const code = ts.transpileModule(fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  vm.runInNewContext(code, { module: mod, exports: mod.exports, Date: clock, Intl,
    require: (name) => {
      if (!(name in imports)) throw new Error(`Unexpected test import: ${name}`);
      return imports[name];
    } });
  return mod.exports;
}
const schedule = load('lib/schedule.ts');
const grupDers2 = schedule.getScheduledLesson('20260918-1900');

test('dönem tanımı 8 ders gününü Çarşamba/Cuma ritminde üretir', () => {
  assert.deepEqual([...schedule.dersGunleri(schedule.aktifDonem)], [
    '2026-09-16', '2026-09-18', '2026-09-23', '2026-09-25',
    '2026-09-30', '2026-10-02', '2026-10-07', '2026-10-09',
  ]);
  assert.equal(schedule.donemRitmi(schedule.aktifDonem), 'Her Çarşamba ve Cuma');
});

test('her ders günü için iki seri üretilir ve numaralar sırayla ilerler', () => {
  assert.equal(schedule.scheduledLessons.length, 16);
  assert.equal(schedule.scheduledLessons[0].title, 'Online Pilates Grup – Ders 1');
  assert.equal(schedule.scheduledLessons[1].title, 'Bel ve Boyun Fıtığına Özel Online Pilates – Ders 1');
  assert.equal(grupDers2.title, 'Online Pilates Grup – Ders 2');
  assert.equal(grupDers2.index, 2);
  assert.equal(schedule.scheduledLessons.at(-1).title, 'Bel ve Boyun Fıtığına Özel Online Pilates – Ders 8');

  const grup = schedule.scheduledLessons.filter((row) => row.series === 'grup');
  const fitik = schedule.scheduledLessons.filter((row) => row.series === 'fitik');
  assert.equal(grup.length, 8);
  assert.equal(fitik.length, 8);
  assert.deepEqual([...grup.map((row) => row.index)], [1, 2, 3, 4, 5, 6, 7, 8]);
});

test('takvim verisi yalnızca herkese açık alanları taşır, toplantı bilgisi içermez', () => {
  for (const row of schedule.scheduledLessons) {
    assert.equal(Date.parse(row.endsAt) - Date.parse(row.startsAt), 3600000);
    assert.deepEqual(Object.keys(row).sort(), ['endsAt', 'id', 'index', 'series', 'startsAt', 'title']);
  }
  // Yorum satırları çıkarılır: dosyanın başındaki "asla Zoom linki eklemeyin"
  // uyarısının kendisi bu denetime takılmamalı, aranan şey gerçek veri.
  const kaynak = fs.readFileSync(new URL('../lib/schedule.ts', import.meta.url), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '');
  assert.doesNotMatch(kaynak, /zoom\.us|pwd=|passcode\s*[:=]/i);
});

test('tarih ve saat her zaman İstanbul saat diliminde gösterilir', () => {
  assert.equal(schedule.formatLessonTime('2026-09-16T16:00:00Z'), '19:00');
  assert.match(schedule.formatLessonDate(grupDers2.startsAt), /18 Eylül 2026 Cuma/);
});

test('kayıt ders başlangıcından 30 dakika önce kapanır; ders başlayana kadar listede kalır', () => {
  const start = Date.parse(grupDers2.startsAt);
  const kapanis = start - schedule.KAYIT_KAPANIS_DK * 60000;

  assert.equal(schedule.isLessonOpen(grupDers2, kapanis - 1), true);
  assert.equal(schedule.isLessonOpen(grupDers2, kapanis), false);
  assert.equal(schedule.isLessonOpen(grupDers2, start), false);

  // Kayıt kapansa da ders başlayana kadar takvimde görünmeye devam eder.
  assert.equal(schedule.isLessonUpcoming(grupDers2, kapanis), true);
  assert.equal(schedule.isLessonUpcoming(grupDers2, start - 1), true);
  assert.equal(schedule.isLessonUpcoming(grupDers2, start), false);
});

test('geçersiz kimlikler hiçbir zaman derse çözülmez', () => {
  assert.equal(schedule.getScheduledLesson('missing'), undefined);
  assert.equal(schedule.getScheduledLesson(null), undefined);
});

test('sonraki değişim anı kayıt kapanışı ve ders başlangıcını sırayla verir', () => {
  const start = Date.parse(grupDers2.startsAt);
  const kapanis = start - schedule.KAYIT_KAPANIS_DK * 60000;
  assert.equal(schedule.sonrakiDegisimAni(kapanis - 1000), kapanis);
  assert.equal(schedule.sonrakiDegisimAni(kapanis), start);
  assert.equal(schedule.sonrakiDegisimAni(Date.parse('2026-10-09T21:00:00+03:00')), undefined);
});

function route(now) {
  const sent = [];
  class Clock extends Date { static now() { return Date.parse(now); } }
  const api = load('app/api/bookings/route.ts', {
    '@/lib/schedule': schedule,
    '@/lib/email': {
      buildEmailHtml: (_title, rows) => rows,
      sendNotificationEmail: async (email) => { sent.push(email); return { ok: true }; },
    },
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status ?? 200 }) } },
  }, Clock);
  return { sent, post: (data) => api.POST({ json: async () => ({ first_name: 'Test', last_name: 'User', email: 'test@example.com', ...data }) }) };
}

test('sunucu ders başlığını ve saatini istemciden değil takvimden çözer', async () => {
  const api = route('2026-09-18T18:00:00+03:00');
  const response = await api.post({ session_id: grupDers2.id, lesson: 'Fake title' });
  assert.equal(response.status, 200);
  assert.equal(api.sent.length, 1);
  assert.equal(api.sent[0].html.find(([key]) => key === 'Ders')[1], grupDers2.title);
  assert.equal(api.sent[0].html.find(([key]) => key === 'Ders saati (Türkiye)')[1], '19:00–20:00');
});

test('kayıt kapandıktan sonra gelen ve geçersiz talepler e-posta göndermez', async () => {
  const kapanmis = route('2026-09-18T18:30:00+03:00');
  assert.equal((await kapanmis.post({ session_id: grupDers2.id })).status, 409);
  assert.equal((await kapanmis.post({ session_id: 'missing' })).status, 400);
  assert.equal(kapanmis.sent.length, 0);

  // Kapanış anından bir dakika öncesi hâlâ kabul edilir.
  const acik = route('2026-09-18T18:29:00+03:00');
  assert.equal((await acik.post({ session_id: grupDers2.id })).status, 200);
  assert.equal(acik.sent.length, 1);
});

test('takvim seçimi olmayan genel ders talepleri çalışmaya devam eder', async () => {
  const api = route('2026-09-17T12:00:00+03:00');
  assert.equal((await api.post({ lesson: 'Bireysel Ders' })).status, 200);
  assert.equal(api.sent[0].html.find(([key]) => key === 'Ders')[1], 'Bireysel Ders');
});
