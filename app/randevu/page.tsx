'use client';

import { useState } from 'react';

const dersSecenekleri = [
  'Online Grup — Başlangıç',
  'Online Grup — Orta Seviye',
  'Online Grup — Pilates & Nefes',
  'Online Bireysel Ders',
];

const saatSecenekleri = [
  '07:30', '08:00', '09:00', '10:00', '11:00',
  '14:00', '16:00', '18:30', '19:00',
];

export default function RandevuPage() {
  const [form, setForm] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    ders: '',
    tarih: '',
    saat: '',
    deneyim: '',
    not: '',
  });
  const [gonderildi, setGonderildi] = useState(false);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGonderiliyor(true);
    setHata('');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: form.ad,
          last_name: form.soyad,
          email: form.email,
          phone: form.telefon,
          lesson: form.ders,
          preferred_date: form.tarih,
          preferred_time: form.saat,
          experience_level: form.deneyim,
          note: form.not,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setHata(result.error || 'Kayit sirasinda bir sorun olustu.');
        return;
      }

      setGonderildi(true);
    } catch {
      setHata('Kayit gonderilirken baglanti hatasi olustu.');
    } finally {
      setGonderiliyor(false);
    }
  };

  if (gonderildi) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#E8F0E7] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#7D9B76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-3xl font-semibold text-[#1C1C1C] mb-3"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Kaydınız alındı!
          </h2>
          <p className="text-[#5A5A5A] mb-2">
            Merhaba <span className="font-medium text-[#1C1C1C]">{form.ad}</span>, talebiniz başarıyla alındı.
          </p>
          <p className="text-[#5A5A5A] mb-6">
            24 saat içinde <span className="font-medium">{form.email}</span> adresinize Zoom bağlantısı ve ders detayları gönderilecek.
          </p>
          <div className="bg-[#F4F3F1] rounded-2xl p-5 text-left text-sm space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-[#9E9E9E]">Ders</span>
              <span className="font-medium text-[#1C1C1C]">{form.ders || 'Belirtilmedi'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9E9E9E]">Tarih</span>
              <span className="font-medium text-[#1C1C1C]">{form.tarih || 'Belirtilmedi'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#9E9E9E]">Saat</span>
              <span className="font-medium text-[#1C1C1C]">{form.saat || 'Belirtilmedi'}</span>
            </div>
          </div>
          <p className="text-xs text-[#9E9E9E]">
            Sorularınız için: <a href="mailto:info@elvinozturk.com.tr" className="text-[#7D9B76]">info@elvinozturk.com.tr</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#F4F3F1] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Kayıt Formu</p>
          <h1
            className="text-4xl font-semibold text-[#1C1C1C] mb-3"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online Derse Kaydol
          </h1>
          <p className="text-[#5A5A5A] leading-relaxed">
            Formu doldurun, 24 saat içinde Zoom bağlantısı ve ders bilgileri e-posta adresinize gönderilsin.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 max-w-2xl mx-auto px-6">

        {/* Platform bilgisi */}
        <div className="bg-[#E8F0E7] rounded-2xl p-5 mb-10 flex gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#7D9B76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-[#1C1C1C] mb-1">Zoom üzerinden canlı ders</p>
            <p className="text-sm text-[#5A5A5A]">
              Kayıt sonrası Zoom linki e-postanıza iletilir. Telefon, tablet veya bilgisayardan katılabilirsiniz.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {hata ? (
            <div className="rounded-2xl border border-[#E7C1C1] bg-[#FFF3F2] px-4 py-3 text-sm text-[#9B3D3D]">
              {hata}
            </div>
          ) : null}

          {/* Ad Soyad */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Ad *</label>
              <input
                type="text"
                required
                value={form.ad}
                onChange={(e) => setForm({ ...form, ad: e.target.value })}
                className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Soyad *</label>
              <input
                type="text"
                required
                value={form.soyad}
                onChange={(e) => setForm({ ...form, soyad: e.target.value })}
                className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          {/* Email & Telefon */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">E-posta *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Telefon</label>
              <input
                type="tel"
                value={form.telefon}
                onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
                placeholder="5xx xxx xx xx"
              />
            </div>
          </div>

          {/* Ders Seçimi */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-2">Katılmak istediğiniz ders *</label>
            <div className="flex flex-wrap gap-2">
              {dersSecenekleri.map((ders) => (
                <button
                  key={ders}
                  type="button"
                  onClick={() => setForm({ ...form, ders })}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    form.ders === ders
                      ? 'bg-[#7D9B76] text-white border-[#7D9B76]'
                      : 'bg-white text-[#5A5A5A] border-[#EDE0CF] hover:border-[#7D9B76]'
                  }`}
                >
                  {ders}
                </button>
              ))}
            </div>
          </div>

          {/* Tarih & Saat */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Tercih ettiğiniz tarih</label>
              <input
                type="date"
                value={form.tarih}
                onChange={(e) => setForm({ ...form, tarih: e.target.value })}
                className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Tercih ettiğiniz saat</label>
              <div className="flex flex-wrap gap-1.5">
                {saatSecenekleri.map((saat) => (
                  <button
                    key={saat}
                    type="button"
                    onClick={() => setForm({ ...form, saat })}
                    className={`px-3 py-1.5 rounded-lg text-xs border transition-colors ${
                      form.saat === saat
                        ? 'bg-[#7D9B76] text-white border-[#7D9B76]'
                        : 'bg-white text-[#5A5A5A] border-[#EDE0CF] hover:border-[#7D9B76]'
                    }`}
                  >
                    {saat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Deneyim */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-2">Pilates deneyiminiz</label>
            <div className="flex gap-3">
              {['Hiç yapmadım', 'Biraz deneyimim var', 'Düzenli yapıyorum'].map((seviye) => (
                <button
                  key={seviye}
                  type="button"
                  onClick={() => setForm({ ...form, deneyim: seviye })}
                  className={`flex-1 py-2.5 rounded-xl text-xs border transition-colors ${
                    form.deneyim === seviye
                      ? 'bg-[#7D9B76] text-white border-[#7D9B76]'
                      : 'bg-white text-[#5A5A5A] border-[#EDE0CF] hover:border-[#7D9B76]'
                  }`}
                >
                  {seviye}
                </button>
              ))}
            </div>
          </div>

          {/* Not */}
          <div>
            <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Eklemek istediğiniz bir şey var mı?</label>
            <textarea
              rows={3}
              value={form.not}
              onChange={(e) => setForm({ ...form, not: e.target.value })}
              className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors resize-none"
              placeholder="Sağlık durumu, özel istek veya sorularınız..."
            />
          </div>

          <button
            type="submit"
            disabled={gonderiliyor}
            className="w-full py-4 bg-[#7D9B76] text-white font-medium rounded-xl hover:bg-[#6A8B63] transition-colors text-sm tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
          >
            {gonderiliyor ? 'Kayit gonderiliyor...' : 'Kaydi Tamamla'}
          </button>

          <p className="text-center text-xs text-[#9E9E9E]">
            Zoom baglantisi 24 saat icinde e-posta adresinize iletilecektir.
          </p>
        </form>
      </section>
    </>
  );
}
