'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { hasSupabaseBrowserEnv } from '@/lib/supabase/env';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function AdminLoginPage() {
  const router = useRouter();
  const isConfigured = useMemo(() => hasSupabaseBrowserEnv(), []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    const client = getSupabaseBrowserClient();

    client.auth.getSession().then(({ data }) => {
      if (data.session) {
        router.replace('/admin');
      }
    });
  }, [isConfigured, router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const client = getSupabaseBrowserClient();
      const { error: signInError } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      router.replace('/admin');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Beklenmeyen bir hata olustu.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F3F1] px-6 py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-[#EDE0CF] bg-white shadow-sm md:grid-cols-[1.05fr_0.95fr]">
          <section className="bg-[#1C1C1C] px-8 py-10 text-white md:px-12 md:py-14">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#A8C4A2]">Admin</p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Pilates sitesini
              <br />
              tek yerden yonetin.
            </h1>
            <p className="max-w-md text-sm leading-relaxed text-white/75">
              Randevulari takip edin, iletisim mesajlarini yonetin ve icerik alanlarini panelden guncelleyin.
            </p>

            <div className="mt-10 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-sm font-medium">Panelde neler var?</p>
                <p className="mt-1 text-sm text-white/70">Randevu talepleri, iletisim mesajlari, dersler, galeri ve genel ayarlar.</p>
              </div>
              <div>
                <p className="text-sm font-medium">Giris nasil yapilir?</p>
                <p className="mt-1 text-sm text-white/70">Supabase Authentication uzerinden olusturdugun admin kullanicisi ile giris yapilir.</p>
              </div>
            </div>
          </section>

          <section className="px-8 py-10 md:px-12 md:py-14">
            <div className="mb-10">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#7D9B76]">Hos geldiniz</p>
              <h2 className="text-3xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Admin girisi
              </h2>
            </div>

            {!isConfigured ? (
              <div className="rounded-3xl border border-[#EDE0CF] bg-[#FAFAF8] p-6 text-sm text-[#5A5A5A]">
                <p className="font-medium text-[#1C1C1C]">Supabase ayarlari eksik.</p>
                <p className="mt-2 leading-relaxed">
                  Devam etmeden once <code className="rounded bg-white px-2 py-1 text-xs">.env.local</code> icine
                  {' '}<code className="rounded bg-white px-2 py-1 text-xs">NEXT_PUBLIC_SUPABASE_URL</code> ve
                  {' '}<code className="rounded bg-white px-2 py-1 text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
                  {' '}degerlerini ekle.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">E-posta</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@ornek.com"
                    className="w-full rounded-2xl border border-[#EDE0CF] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7D9B76]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">Sifre</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="********"
                    className="w-full rounded-2xl border border-[#EDE0CF] bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#7D9B76]"
                  />
                </div>

                {error ? (
                  <div className="rounded-2xl border border-[#E7C1C1] bg-[#FFF3F2] px-4 py-3 text-sm text-[#9B3D3D]">
                    {error}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[#7D9B76] px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#6A8B63] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Giris yapiliyor...' : 'Panele gir'}
                </button>
              </form>
            )}

            <div className="mt-6">
              <Link href="/" className="text-sm text-[#7D9B76] underline underline-offset-4">
                Siteye geri don
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
