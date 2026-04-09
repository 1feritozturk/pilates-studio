'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase/browser';
import { hasSupabaseBrowserEnv } from '@/lib/supabase/env';
import type {
  BookingRow,
  BookingStatus,
  ContactMessageRow,
  GalleryItemRow,
  LessonRow,
  MessageStatus,
  SiteSettingsRow,
} from '@/lib/supabase/types';
import { bookingStatuses, lessonCategories, messageStatuses } from '@/lib/admin/options';

type DashboardTab = 'overview' | 'bookings' | 'messages' | 'lessons' | 'gallery' | 'settings';
type LessonFormState = {
  title: string;
  description: string;
  duration: string;
  capacity: string;
  days: string;
  times: string;
  level: string;
  category: LessonRow['category'];
  image_url: string;
};

const tabs: { id: DashboardTab; label: string }[] = [
  { id: 'overview', label: 'Genel Bakis' },
  { id: 'bookings', label: 'Randevular' },
  { id: 'messages', label: 'Mesajlar' },
  { id: 'lessons', label: 'Dersler' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'settings', label: 'Ayarlar' },
];

const initialLessonForm: LessonFormState = {
  title: '',
  description: '',
  duration: '',
  capacity: '',
  days: '',
  times: '',
  level: '',
  category: 'group',
  image_url: '',
};

const initialGalleryForm = {
  title: '',
  image_url: '',
  display_order: '1',
};

const initialSettingsForm = {
  site_name: '',
  site_description: '',
  phone: '',
  email: '',
  instagram_url: '',
  instagram_handle: '',
  address: '',
  working_hours: '',
  hero_title: '',
  hero_description: '',
};

export default function AdminDashboard() {
  const router = useRouter();
  const isConfigured = useMemo(() => hasSupabaseBrowserEnv(), []);
  const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
  const [loading, setLoading] = useState(isConfigured);
  const [sessionChecked, setSessionChecked] = useState(!isConfigured);
  const [bookings, setBookings] = useState<BookingRow[]>([]);
  const [messages, setMessages] = useState<ContactMessageRow[]>([]);
  const [lessons, setLessons] = useState<LessonRow[]>([]);
  const [galleryItems, setGalleryItems] = useState<GalleryItemRow[]>([]);
  const [settings, setSettings] = useState<SiteSettingsRow | null>(null);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [lessonForm, setLessonForm] = useState<LessonFormState>(initialLessonForm);
  const [galleryForm, setGalleryForm] = useState(initialGalleryForm);
  const [settingsForm, setSettingsForm] = useState(initialSettingsForm);

  async function loadBookings() {
    const client = getSupabaseBrowserClient();
    const { data, error: loadError } = await client
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (loadError) {
      setError(loadError.message);
      return;
    }

    setBookings(data ?? []);
  }

  async function loadMessages() {
    const client = getSupabaseBrowserClient();
    const { data, error: loadError } = await client
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (loadError) {
      setError(loadError.message);
      return;
    }

    setMessages(data ?? []);
  }

  async function loadLessons() {
    const client = getSupabaseBrowserClient();
    const { data, error: loadError } = await client
      .from('lessons')
      .select('*')
      .order('created_at', { ascending: false });

    if (loadError) {
      setError(loadError.message);
      return;
    }

    setLessons(data ?? []);
  }

  async function loadGallery() {
    const client = getSupabaseBrowserClient();
    const { data, error: loadError } = await client
      .from('gallery_items')
      .select('*')
      .order('display_order', { ascending: true });

    if (loadError) {
      setError(loadError.message);
      return;
    }

    setGalleryItems(data ?? []);
  }

  async function loadSettings() {
    const client = getSupabaseBrowserClient();
    const { data, error: loadError } = await client
      .from('site_settings')
      .select('*')
      .limit(1)
      .maybeSingle();

    if (loadError) {
      setError(loadError.message);
      return;
    }

    const record = data as SiteSettingsRow | null;

    setSettings(record);
    if (record) {
      setSettingsForm({
        site_name: record.site_name ?? '',
        site_description: record.site_description ?? '',
        phone: record.phone ?? '',
        email: record.email ?? '',
        instagram_url: record.instagram_url ?? '',
        instagram_handle: record.instagram_handle ?? '',
        address: record.address ?? '',
        working_hours: record.working_hours ?? '',
        hero_title: record.hero_title ?? '',
        hero_description: record.hero_description ?? '',
      });
    }
  }

  async function handleSignOut() {
    const client = getSupabaseBrowserClient();
    await client.auth.signOut();
    router.replace('/admin/login');
  }

  async function updateBookingStatus(id: string, status: BookingStatus) {
    const client = getSupabaseBrowserClient();
    const { error: updateError } = await client.from('bookings').update({ status }).eq('id', id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setBookings((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
    setFeedback('Randevu durumu guncellendi.');
  }

  async function updateMessageStatus(id: string, status: MessageStatus) {
    const client = getSupabaseBrowserClient();
    const { error: updateError } = await client.from('contact_messages').update({ status }).eq('id', id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessages((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
    setFeedback('Mesaj durumu guncellendi.');
  }

  async function toggleLesson(id: string, isActive: boolean) {
    const client = getSupabaseBrowserClient();
    const { error: updateError } = await client.from('lessons').update({ is_active: isActive }).eq('id', id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setLessons((current) => current.map((item) => (item.id === id ? { ...item, is_active: isActive } : item)));
    setFeedback('Ders durumu guncellendi.');
  }

  async function toggleGalleryItem(id: string, isActive: boolean) {
    const client = getSupabaseBrowserClient();
    const { error: updateError } = await client.from('gallery_items').update({ is_active: isActive }).eq('id', id);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setGalleryItems((current) => current.map((item) => (item.id === id ? { ...item, is_active: isActive } : item)));
    setFeedback('Galeri ogesi guncellendi.');
  }

  async function createLesson(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const client = getSupabaseBrowserClient();
    const payload = {
      ...lessonForm,
      is_active: true,
    };

    const { error: insertError } = await client.from('lessons').insert(payload);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setLessonForm(initialLessonForm);
    setFeedback('Yeni ders eklendi.');
    await loadLessons();
  }

  async function createGalleryItem(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const client = getSupabaseBrowserClient();
    const payload = {
      title: galleryForm.title,
      image_url: galleryForm.image_url,
      display_order: Number(galleryForm.display_order),
      is_active: true,
    };

    const { error: insertError } = await client.from('gallery_items').insert(payload);

    if (insertError) {
      setError(insertError.message);
      return;
    }

    setGalleryForm(initialGalleryForm);
    setFeedback('Yeni galeri ogesi eklendi.');
    await loadGallery();
  }

  async function saveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const client = getSupabaseBrowserClient();
    const payload = settings ? { id: settings.id, ...settingsForm } : { id: 1, ...settingsForm };

    const { error: upsertError } = await client.from('site_settings').upsert(payload);

    if (upsertError) {
      setError(upsertError.message);
      return;
    }

    setFeedback('Genel ayarlar kaydedildi.');
    await loadSettings();
  }

  useEffect(() => {
    if (!isConfigured) {
      return;
    }

    const client = getSupabaseBrowserClient();

    client.auth.getSession().then(async ({ data }) => {
      if (!data.session) {
        router.replace('/admin/login');
        return;
      }

      setSessionChecked(true);
      await Promise.all([
        loadBookings(),
        loadMessages(),
        loadLessons(),
        loadGallery(),
        loadSettings(),
      ]);
      setLoading(false);
    });
  }, [isConfigured, router]);

  if (!sessionChecked || loading) {
    return (
      <div className="min-h-screen bg-[#F4F3F1] px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#EDE0CF] bg-white p-10 text-sm text-[#5A5A5A]">
          Panel hazirlaniyor...
        </div>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-[#F4F3F1] px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#EDE0CF] bg-white p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[#7D9B76]">Admin paneli</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Supabase ayarlari bekleniyor.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#5A5A5A]">
            Panelin calisabilmesi icin <code className="rounded bg-[#F4F3F1] px-2 py-1 text-xs">.env.local</code> icine
            {' '}<code className="rounded bg-[#F4F3F1] px-2 py-1 text-xs">NEXT_PUBLIC_SUPABASE_URL</code>,
            {' '}<code className="rounded bg-[#F4F3F1] px-2 py-1 text-xs">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> ve
            {' '}<code className="rounded bg-[#F4F3F1] px-2 py-1 text-xs">SUPABASE_SERVICE_ROLE_KEY</code> eklenmeli.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F3F1] px-4 py-6 md:px-6 md:py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-[2rem] border border-[#EDE0CF] bg-white px-6 py-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7D9B76]">Yonetim paneli</p>
              <h1 className="mt-2 text-3xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Elvin Ozturk Online Pilates
              </h1>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-full border border-[#EDE0CF] px-5 py-2.5 text-sm text-[#1C1C1C] transition-colors hover:bg-[#F4F3F1]"
            >
              Cikis yap
            </button>
          </div>
        </div>

        {(feedback || error) ? (
          <div className={`mb-6 rounded-2xl px-4 py-3 text-sm ${error ? 'border border-[#E7C1C1] bg-[#FFF3F2] text-[#9B3D3D]' : 'border border-[#DCEBD8] bg-[#F2F8F1] text-[#486244]'}`}>
            {error || feedback}
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-[#EDE0CF] bg-white p-4 shadow-sm">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
                    activeTab === tab.id ? 'bg-[#1C1C1C] text-white' : 'text-[#5A5A5A] hover:bg-[#F4F3F1]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <section className="space-y-6">
            {activeTab === 'overview' ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <SummaryCard label="Yeni randevu" value={String(bookings.filter((item) => item.status === 'new').length)} />
                  <SummaryCard label="Yeni mesaj" value={String(messages.filter((item) => item.status === 'unread').length)} />
                  <SummaryCard label="Aktif ders" value={String(lessons.filter((item) => item.is_active).length)} />
                  <SummaryCard label="Galeri ogesi" value={String(galleryItems.length)} />
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                  <PanelCard title="Son randevular">
                    <div className="space-y-3">
                      {bookings.slice(0, 5).map((item) => (
                        <div key={item.id} className="rounded-2xl border border-[#EDE0CF] px-4 py-3">
                          <p className="text-sm font-medium text-[#1C1C1C]">{item.first_name} {item.last_name}</p>
                          <p className="mt-1 text-xs text-[#5A5A5A]">{item.lesson || 'Ders secilmedi'} · {item.preferred_time || 'Saat yok'}</p>
                        </div>
                      ))}
                    </div>
                  </PanelCard>
                  <PanelCard title="Son mesajlar">
                    <div className="space-y-3">
                      {messages.slice(0, 5).map((item) => (
                        <div key={item.id} className="rounded-2xl border border-[#EDE0CF] px-4 py-3">
                          <p className="text-sm font-medium text-[#1C1C1C]">{item.full_name}</p>
                          <p className="mt-1 text-xs text-[#5A5A5A] line-clamp-2">{item.message}</p>
                        </div>
                      ))}
                    </div>
                  </PanelCard>
                </div>
              </>
            ) : null}

            {activeTab === 'bookings' ? (
              <PanelCard title="Randevu talepleri">
                <div className="space-y-4">
                  {bookings.map((item) => (
                    <div key={item.id} className="rounded-3xl border border-[#EDE0CF] p-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-base font-semibold text-[#1C1C1C]">{item.first_name} {item.last_name}</p>
                          <p className="mt-1 text-sm text-[#5A5A5A]">{item.email}{item.phone ? ` · ${item.phone}` : ''}</p>
                          <p className="mt-3 text-sm text-[#5A5A5A]">Ders: <span className="font-medium text-[#1C1C1C]">{item.lesson || 'Belirtilmedi'}</span></p>
                          <p className="mt-1 text-sm text-[#5A5A5A]">Tercih: <span className="font-medium text-[#1C1C1C]">{item.preferred_date || 'Tarih yok'} / {item.preferred_time || 'Saat yok'}</span></p>
                          <p className="mt-1 text-sm text-[#5A5A5A]">Deneyim: <span className="font-medium text-[#1C1C1C]">{item.experience_level || 'Belirtilmedi'}</span></p>
                          {item.note ? <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">{item.note}</p> : null}
                        </div>
                        <select
                          value={item.status}
                          onChange={(event) => updateBookingStatus(item.id, event.target.value as BookingStatus)}
                          className="rounded-xl border border-[#EDE0CF] bg-white px-4 py-2 text-sm outline-none focus:border-[#7D9B76]"
                        >
                          {bookingStatuses.map((status) => (
                            <option key={status.value} value={status.value}>{status.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </PanelCard>
            ) : null}

            {activeTab === 'messages' ? (
              <PanelCard title="Iletisim mesajlari">
                <div className="space-y-4">
                  {messages.map((item) => (
                    <div key={item.id} className="rounded-3xl border border-[#EDE0CF] p-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-base font-semibold text-[#1C1C1C]">{item.full_name}</p>
                          <p className="mt-1 text-sm text-[#5A5A5A]">{item.email}{item.phone ? ` · ${item.phone}` : ''}</p>
                          <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">{item.message}</p>
                        </div>
                        <select
                          value={item.status}
                          onChange={(event) => updateMessageStatus(item.id, event.target.value as MessageStatus)}
                          className="rounded-xl border border-[#EDE0CF] bg-white px-4 py-2 text-sm outline-none focus:border-[#7D9B76]"
                        >
                          {messageStatuses.map((status) => (
                            <option key={status.value} value={status.value}>{status.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </PanelCard>
            ) : null}

            {activeTab === 'lessons' ? (
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <PanelCard title="Ders listesi">
                  <div className="space-y-4">
                    {lessons.map((item) => (
                      <div key={item.id} className="rounded-3xl border border-[#EDE0CF] p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <p className="text-base font-semibold text-[#1C1C1C]">{item.title}</p>
                            <p className="mt-1 text-sm text-[#5A5A5A]">{item.category === 'group' ? 'Grup dersi' : 'Bireysel ders'} · {item.level}</p>
                            <p className="mt-3 text-sm leading-relaxed text-[#5A5A5A]">{item.description}</p>
                            <p className="mt-3 text-xs text-[#5A5A5A]">{item.days} · {item.times} · {item.duration}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleLesson(item.id, !item.is_active)}
                            className={`rounded-full px-4 py-2 text-sm ${item.is_active ? 'bg-[#E8F0E7] text-[#486244]' : 'bg-[#F4F3F1] text-[#5A5A5A]'}`}
                          >
                            {item.is_active ? 'Aktif' : 'Pasif'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </PanelCard>

                <PanelCard title="Yeni ders ekle">
                  <form onSubmit={createLesson} className="space-y-4">
                    <AdminInput label="Ders adi" value={lessonForm.title} onChange={(value) => setLessonForm((current) => ({ ...current, title: value }))} />
                    <AdminTextarea label="Aciklama" value={lessonForm.description} onChange={(value) => setLessonForm((current) => ({ ...current, description: value }))} />
                    <div className="grid grid-cols-2 gap-3">
                      <AdminInput label="Sure" value={lessonForm.duration} onChange={(value) => setLessonForm((current) => ({ ...current, duration: value }))} />
                      <AdminInput label="Kapasite" value={lessonForm.capacity} onChange={(value) => setLessonForm((current) => ({ ...current, capacity: value }))} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <AdminInput label="Gunler" value={lessonForm.days} onChange={(value) => setLessonForm((current) => ({ ...current, days: value }))} />
                      <AdminInput label="Saatler" value={lessonForm.times} onChange={(value) => setLessonForm((current) => ({ ...current, times: value }))} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <AdminInput label="Seviye" value={lessonForm.level} onChange={(value) => setLessonForm((current) => ({ ...current, level: value }))} />
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">Kategori</label>
                        <select
                          value={lessonForm.category}
                          onChange={(event) => setLessonForm((current) => ({ ...current, category: event.target.value as LessonRow['category'] }))}
                          className="w-full rounded-2xl border border-[#EDE0CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#7D9B76]"
                        >
                          {lessonCategories.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <AdminInput label="Gorsel URL" value={lessonForm.image_url} onChange={(value) => setLessonForm((current) => ({ ...current, image_url: value }))} />
                    <button type="submit" className="w-full rounded-2xl bg-[#7D9B76] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6A8B63]">
                      Dersi kaydet
                    </button>
                  </form>
                </PanelCard>
              </div>
            ) : null}

            {activeTab === 'gallery' ? (
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <PanelCard title="Galeri ogeleri">
                  <div className="space-y-4">
                    {galleryItems.map((item) => (
                      <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-[#EDE0CF] p-5 md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-base font-semibold text-[#1C1C1C]">{item.title}</p>
                          <p className="mt-1 text-sm text-[#5A5A5A]">Sira: {item.display_order}</p>
                          <p className="mt-1 text-xs text-[#7D9B76]">{item.image_url}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleGalleryItem(item.id, !item.is_active)}
                          className={`rounded-full px-4 py-2 text-sm ${item.is_active ? 'bg-[#E8F0E7] text-[#486244]' : 'bg-[#F4F3F1] text-[#5A5A5A]'}`}
                        >
                          {item.is_active ? 'Aktif' : 'Pasif'}
                        </button>
                      </div>
                    ))}
                  </div>
                </PanelCard>
                <PanelCard title="Yeni galeri ogesi">
                  <form onSubmit={createGalleryItem} className="space-y-4">
                    <AdminInput label="Baslik" value={galleryForm.title} onChange={(value) => setGalleryForm((current) => ({ ...current, title: value }))} />
                    <AdminInput label="Gorsel URL" value={galleryForm.image_url} onChange={(value) => setGalleryForm((current) => ({ ...current, image_url: value }))} />
                    <AdminInput label="Sira no" value={galleryForm.display_order} onChange={(value) => setGalleryForm((current) => ({ ...current, display_order: value }))} />
                    <button type="submit" className="w-full rounded-2xl bg-[#7D9B76] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6A8B63]">
                      Galeri ogesini ekle
                    </button>
                  </form>
                </PanelCard>
              </div>
            ) : null}

            {activeTab === 'settings' ? (
              <PanelCard title="Genel ayarlar">
                <form onSubmit={saveSettings} className="grid gap-4 xl:grid-cols-2">
                  <AdminInput label="Site adi" value={settingsForm.site_name} onChange={(value) => setSettingsForm((current) => ({ ...current, site_name: value }))} />
                  <AdminInput label="E-posta" value={settingsForm.email} onChange={(value) => setSettingsForm((current) => ({ ...current, email: value }))} />
                  <AdminInput label="Telefon" value={settingsForm.phone} onChange={(value) => setSettingsForm((current) => ({ ...current, phone: value }))} />
                  <AdminInput label="Instagram handle" value={settingsForm.instagram_handle} onChange={(value) => setSettingsForm((current) => ({ ...current, instagram_handle: value }))} />
                  <div className="xl:col-span-2">
                    <AdminInput label="Instagram URL" value={settingsForm.instagram_url} onChange={(value) => setSettingsForm((current) => ({ ...current, instagram_url: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <AdminTextarea label="Site aciklamasi" value={settingsForm.site_description} onChange={(value) => setSettingsForm((current) => ({ ...current, site_description: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <AdminTextarea label="Adres" value={settingsForm.address} onChange={(value) => setSettingsForm((current) => ({ ...current, address: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <AdminTextarea label="Calisma saatleri" value={settingsForm.working_hours} onChange={(value) => setSettingsForm((current) => ({ ...current, working_hours: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <AdminInput label="Hero basligi" value={settingsForm.hero_title} onChange={(value) => setSettingsForm((current) => ({ ...current, hero_title: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <AdminTextarea label="Hero aciklamasi" value={settingsForm.hero_description} onChange={(value) => setSettingsForm((current) => ({ ...current, hero_description: value }))} />
                  </div>
                  <div className="xl:col-span-2">
                    <button type="submit" className="rounded-2xl bg-[#1C1C1C] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]">
                      Ayarlari kaydet
                    </button>
                  </div>
                </form>
              </PanelCard>
            ) : null}
          </section>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.75rem] border border-[#EDE0CF] bg-white p-5 shadow-sm">
      <p className="text-sm text-[#5A5A5A]">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
        {value}
      </p>
    </div>
  );
}

function PanelCard({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="rounded-[2rem] border border-[#EDE0CF] bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-2xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function AdminInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">{label}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[#EDE0CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#7D9B76]"
      />
    </div>
  );
}

function AdminTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#1C1C1C]">{label}</label>
      <textarea
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[#EDE0CF] bg-white px-4 py-3 text-sm outline-none focus:border-[#7D9B76]"
      />
    </div>
  );
}
