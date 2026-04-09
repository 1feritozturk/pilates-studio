'use client';

import { useState } from 'react';

const iletisimBilgileri = [
  { emoji: '📍', baslik: 'Adres', icerik: 'Moda Cad. No:48/B\nKadıköy, İstanbul' },
  { emoji: '📞', baslik: 'Telefon', icerik: '+90 (212) 123 45 67' },
  { emoji: '✉️', baslik: 'E-posta', icerik: 'info@studiozen.com.tr' },
  { emoji: '🕐', baslik: 'Çalışma Saatleri', icerik: 'Pzt–Cum: 07:00–21:00\nCmt–Paz: 09:00–18:00' },
];

export default function IletisimPage() {
  const [form, setForm] = useState({ ad: '', email: '', telefon: '', mesaj: '' });
  const [gonderildi, setGonderildi] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGonderildi(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Bize ulaşın</p>
          <h1
            className="text-5xl font-semibold text-[#1C1C1C] mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            İletişim
          </h1>
          <p className="text-[#5A5A5A] max-w-xl leading-relaxed">
            Sorularınız için bize yazın ya da arayın. En kısa sürede dönüş yapacağız.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        {/* Sol: İletişim Bilgileri */}
        <div>
          <h2
            className="text-2xl font-semibold text-[#1C1C1C] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Bize ulaşın
          </h2>
          <div className="space-y-6">
            {iletisimBilgileri.map((bilgi) => (
              <div key={bilgi.baslik} className="flex gap-4">
                <div className="w-12 h-12 bg-[#E8F0E7] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {bilgi.emoji}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1C1C1C] mb-1">{bilgi.baslik}</p>
                  <p className="text-sm text-[#5A5A5A] whitespace-pre-line">{bilgi.icerik}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Harita placeholder */}
          <div className="mt-10 bg-[#F4F3F1] rounded-2xl h-56 flex items-center justify-center border border-[#EDE0CF]">
            <div className="text-center">
              <p className="text-4xl mb-2">🗺️</p>
              <p className="text-sm text-[#9E9E9E]">Harita yakında eklenecek</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#7D9B76] underline underline-offset-4 mt-1 inline-block"
              >
                Google Haritalar'da görüntüle
              </a>
            </div>
          </div>
        </div>

        {/* Sağ: Form */}
        <div>
          <h2
            className="text-2xl font-semibold text-[#1C1C1C] mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Mesaj gönderin
          </h2>

          {gonderildi ? (
            <div className="bg-[#E8F0E7] rounded-2xl p-8 text-center">
              <p className="text-4xl mb-3">✅</p>
              <p className="font-semibold text-[#1C1C1C] mb-2">Mesajınız alındı!</p>
              <p className="text-sm text-[#5A5A5A]">En kısa sürede size dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Ad Soyad *</label>
                <input
                  type="text"
                  required
                  value={form.ad}
                  onChange={(e) => setForm({ ...form, ad: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors"
                  placeholder="Adınızı girin"
                />
              </div>

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
                  placeholder="+90 5xx xxx xx xx"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1C1C1C] mb-1.5">Mesajınız *</label>
                <textarea
                  required
                  rows={5}
                  value={form.mesaj}
                  onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                  className="w-full px-4 py-3 border border-[#EDE0CF] rounded-xl text-sm focus:outline-none focus:border-[#7D9B76] bg-white transition-colors resize-none"
                  placeholder="Nasıl yardımcı olabiliriz?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#7D9B76] text-white text-sm font-medium rounded-xl hover:bg-[#6A8B63] transition-colors"
              >
                Gönder
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
