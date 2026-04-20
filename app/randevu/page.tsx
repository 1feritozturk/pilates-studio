'use client';

import { useState } from 'react';

const dersTipiSecenekleri = ['Grup Dersi', 'Bireysel Ders'] as const;
const grupSeviyeSecenekleri = ['Başlangıç', 'Orta Seviye'] as const;

function getSecilenDersLabel(dersTipi: string, grupSeviyesi: string) {
  if (dersTipi === 'Grup Dersi' && grupSeviyesi) {
    return `Grup Dersi — ${grupSeviyesi}`;
  }

  return dersTipi;
}

export default function RandevuPage() {
  const [form, setForm] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    dersTipi: '',
    grupSeviyesi: '',
    deneyim: '',
    not: '',
  });
  const [gonderildi, setGonderildi] = useState(false);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState('');
  const deneyimGoster = form.dersTipi === 'Grup Dersi' && form.grupSeviyesi === 'Başlangıç';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGonderiliyor(true);
    setHata('');

    if (!form.dersTipi) {
      setHata('Lütfen katılmak istediğiniz ders tipini seçin.');
      setGonderiliyor(false);
      return;
    }

    if (form.dersTipi === 'Grup Dersi' && !form.grupSeviyesi) {
      setHata('Lütfen grup dersi için seviyenizi seçin.');
      setGonderiliyor(false);
      return;
    }

    const secilenDers = getSecilenDersLabel(form.dersTipi, form.grupSeviyesi);

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
          lesson: secilenDers,
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

      // GA4 Event: Lead form gönderildi
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead',
          lesson_type: secilenDers,
          lesson_category: form.dersTipi,
          lesson_level: form.grupSeviyesi || null,
          experience_level: form.deneyim,
        });
      }
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
          <div className="w-20 h-20 bg-[#DCF5E5] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#52C77E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2
            className="text-3xl font-semibold text-[#1F1F1F] mb-3"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Kaydınız alındı!
          </h2>
          <p className="text-[#505050] mb-2">
            Merhaba <span className="font-medium text-[#1F1F1F]">{form.ad}</span>, talebiniz başarıyla alındı.
          </p>
          <p className="text-[#505050] mb-6">
            Kaydınız netleştirildikten sonra <span className="font-medium">{form.email}</span> adresinize Zoom bağlantısı ve ders bilgileriniz gönderilecek.
          </p>
          <div className="bg-[#F5F9F3] rounded-2xl p-5 text-left text-sm space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-[#9E9E9E]">Ders tipi</span>
              <span className="font-medium text-[#1F1F1F]">{form.dersTipi || 'Belirtilmedi'}</span>
            </div>
            {form.dersTipi === 'Grup Dersi' ? (
              <div className="flex justify-between">
                <span className="text-[#9E9E9E]">Seviye</span>
                <span className="font-medium text-[#1F1F1F]">{form.grupSeviyesi || 'Belirtilmedi'}</span>
              </div>
            ) : null}
          </div>
          <p className="text-xs text-[#9E9E9E]">
            Sorularınız için: <a href="mailto:1elvinozturk@gmail.com" className="text-[#52C77E]">1elvinozturk@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F9F3] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#52C77E] text-sm font-medium tracking-[0.12em] uppercase mb-3">Kayıt Formu</p>
          <h1
            className="text-4xl font-semibold text-[#1F1F1F] mb-3"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Online Derse Kaydol
          </h1>
          <p className="text-base text-[#505050] leading-relaxed">
            Formu doldurun, kaydınızı tamamlayın; Zoom bağlantısı ve ders bilgileriniz e-posta adresinize gönderilsin.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 max-w-2xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {hata ? (
            <div className="rounded-2xl border border-[#E7C1C1] bg-[#FFF3F2] px-4 py-3 text-sm text-[#9B3D3D]">
              {hata}
            </div>
          ) : null}

          {/* Ad Soyad */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Ad *</label>
              <input
                type="text"
                required
                value={form.ad}
                onChange={(e) => setForm({ ...form, ad: e.target.value })}
                className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Soyad *</label>
              <input
                type="text"
                required
                value={form.soyad}
                onChange={(e) => setForm({ ...form, soyad: e.target.value })}
                className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors"
                placeholder="Soyadınız"
              />
            </div>
          </div>

          {/* Email & Telefon */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">E-posta *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Telefon</label>
              <input
                type="tel"
                value={form.telefon}
                onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors"
                placeholder="5xx xxx xx xx"
              />
            </div>
          </div>

          {/* Ders Seçimi */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-2">Katılmak istediğiniz ders *</label>
            <div className="flex flex-wrap gap-2">
              {dersTipiSecenekleri.map((dersTipi) => (
                <button
                  key={dersTipi}
                  type="button"
                  onClick={() =>
                    setForm((prev) => ({
                      ...prev,
                      dersTipi,
                      grupSeviyesi: dersTipi === 'Grup Dersi' ? prev.grupSeviyesi : '',
                      deneyim: dersTipi === 'Grup Dersi' && prev.grupSeviyesi === 'Başlangıç' ? prev.deneyim : '',
                    }))
                  }
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    form.dersTipi === dersTipi
                      ? 'bg-[#52C77E] text-white border-[#52C77E]'
                      : 'bg-white text-[#505050] border-[#D5F2E5] hover:border-[#52C77E]'
                  }`}
                >
                  {dersTipi}
                </button>
              ))}
            </div>
          </div>

          {form.dersTipi === 'Grup Dersi' ? (
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">Seviyeniz *</label>
              <div className="flex flex-wrap gap-2">
                {grupSeviyeSecenekleri.map((seviye) => (
                  <button
                    key={seviye}
                    type="button"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        grupSeviyesi: seviye,
                        deneyim: seviye === 'Başlangıç' ? prev.deneyim : '',
                      }))
                    }
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                      form.grupSeviyesi === seviye
                        ? 'bg-[#52C77E] text-white border-[#52C77E]'
                        : 'bg-white text-[#505050] border-[#D5F2E5] hover:border-[#52C77E]'
                    }`}
                  >
                    {seviye}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* Deneyim */}
          {deneyimGoster ? (
            <div>
              <label className="block text-sm font-medium text-[#1F1F1F] mb-2">Pilates deneyiminiz</label>
              <div className="flex gap-3">
                {['Hiç yapmadım', 'Biraz deneyimim var', 'Düzenli yapıyorum'].map((seviye) => (
                  <button
                    key={seviye}
                    type="button"
                    onClick={() => setForm({ ...form, deneyim: seviye })}
                    className={`flex-1 py-2.5 rounded-xl text-xs border transition-colors ${
                      form.deneyim === seviye
                        ? 'bg-[#52C77E] text-white border-[#52C77E]'
                        : 'bg-white text-[#505050] border-[#D5F2E5] hover:border-[#52C77E]'
                    }`}
                  >
                    {seviye}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {/* Not */}
          <div>
            <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Eklemek istediğiniz bir şey var mı?</label>
            <textarea
              rows={3}
              value={form.not}
              onChange={(e) => setForm({ ...form, not: e.target.value })}
              className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors resize-none"
              placeholder="Sağlık durumu, özel istek veya sorularınız..."
            />
          </div>

          <button
            type="submit"
            disabled={gonderiliyor}
            className="w-full py-4 bg-[#FF6B5A] text-white font-medium rounded-xl hover:bg-[#E8564A] transition-colors text-sm tracking-wide disabled:cursor-not-allowed disabled:opacity-70"
          >
            {gonderiliyor ? 'Kayit gonderiliyor...' : 'Kaydi Tamamla'}
          </button>
        </form>
      </section>
    </>
  );
}
