'use client';

import { useState } from 'react';

const iletisimBilgileri = [
  { emoji: '📞', baslik: 'Telefon', icerik: '0538 018 89 54', href: 'tel:+905380188954' },
  { emoji: '✉️', baslik: 'E-posta', icerik: '1elvinozturk@gmail.com' },
];

export default function IletisimPage() {
  const [form, setForm] = useState({ ad: '', email: '', telefon: '', mesaj: '' });
  const [gonderildi, setGonderildi] = useState(false);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [hata, setHata] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGonderiliyor(true);
    setHata('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: form.ad,
          email: form.email,
          phone: form.telefon,
          message: form.mesaj,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setHata(result.error || 'Mesaj gonderilirken bir sorun olustu.');
        return;
      }

      setGonderildi(true);
    } catch {
      setHata('Mesaj gonderilirken baglanti hatasi olustu.');
    } finally {
      setGonderiliyor(false);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#F5F9F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#52C77E] text-sm font-medium tracking-[0.2em] uppercase mb-3">Bize ulaşın</p>
          <h1
            className="text-5xl font-semibold text-[#1F1F1F] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            İletişim
          </h1>
          <p className="text-[#505050] max-w-xl leading-relaxed">
            Sorularınız için bize yazın ya da arayın. En kısa sürede dönüş yapacağız.
          </p>
          <p className="text-[#505050] max-w-2xl leading-relaxed mt-4">
            Online Pilates dersi, bireysel seanslar veya grup dersleri hakkinda bilgi almak icin formu doldurabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Sol: İletişim Bilgileri */}
        <div>
          <h2
            className="text-2xl font-semibold text-[#1F1F1F] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Bize ulaşın
          </h2>
          <div className="space-y-6">
            {iletisimBilgileri.map((bilgi) => (
              <div key={bilgi.baslik} className="flex gap-4">
                <div className="w-12 h-12 bg-[#DCF5E5] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {bilgi.emoji}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1F1F1F] mb-1">{bilgi.baslik}</p>
                  {bilgi.href ? (
                    <a href={bilgi.href} className="text-sm text-[#505050] hover:text-[#52C77E] transition-colors">{bilgi.icerik}</a>
                  ) : (
                    <p className="text-sm text-[#505050] whitespace-pre-line">{bilgi.icerik}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Sağ: Form */}
        <div>
          <h2
            className="text-2xl font-semibold text-[#1F1F1F] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Mesaj gönderin
          </h2>

          {gonderildi ? (
            <div className="bg-[#DCF5E5] rounded-2xl p-8 text-center">
              <p className="text-4xl mb-3">✅</p>
              <p className="font-semibold text-[#1F1F1F] mb-2">Mesajınız alındı!</p>
              <p className="text-sm text-[#505050]">En kısa sürede size dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  value={form.ad}
                  onChange={(e) => setForm({ ...form, ad: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors"
                  placeholder="Adınızı girin"
                />
              </div>

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
                  placeholder="+90 5xx xxx xx xx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F1F1F] mb-1.5">Mesajınız *</label>
                <textarea
                  required
                  rows={5}
                  value={form.mesaj}
                  onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                  className="w-full px-4 py-3 border border-[#D5F2E5] rounded-xl text-sm focus:outline-none focus:border-[#52C77E] bg-white transition-colors resize-none"
                  placeholder="Nasıl yardımcı olabiliriz?"
                />
              </div>

              {hata ? (
                <div className="rounded-2xl border border-[#E7C1C1] bg-[#FFF3F2] px-4 py-3 text-sm text-[#9B3D3D]">
                  {hata}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={gonderiliyor}
                className="w-full py-3.5 bg-[#FF6B5A] text-white text-sm font-medium rounded-xl hover:bg-[#E8564A] transition-colors disabled:cursor-not-allowed disabled:opacity-70"
              >
                {gonderiliyor ? 'Gonderiliyor...' : 'Gonder'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
