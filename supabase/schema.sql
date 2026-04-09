create extension if not exists "pgcrypto";

create table if not exists public.site_settings (
  id bigint primary key,
  site_name text not null default 'Elvin Ozturk Online Pilates',
  site_description text not null default '',
  phone text not null default '',
  email text not null default '',
  instagram_url text not null default '',
  instagram_handle text not null default '',
  address text not null default '',
  working_hours text not null default '',
  hero_title text not null default '',
  hero_description text not null default '',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

insert into public.site_settings (id)
values (1)
on conflict (id) do nothing;

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  duration text not null default '',
  capacity text not null default '',
  days text not null default '',
  times text not null default '',
  level text not null default '',
  category text not null check (category in ('group', 'private')),
  image_url text not null default '',
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  image_url text not null,
  display_order integer not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  lesson text,
  preferred_date date,
  preferred_time text,
  experience_level text,
  note text,
  status text not null default 'new' check (status in ('new', 'called', 'confirmed', 'cancelled')),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  message text not null,
  status text not null default 'unread' check (status in ('unread', 'replied')),
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.site_settings enable row level security;
alter table public.lessons enable row level security;
alter table public.gallery_items enable row level security;
alter table public.bookings enable row level security;
alter table public.contact_messages enable row level security;

create policy "Authenticated users can manage site settings"
on public.site_settings
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage lessons"
on public.lessons
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage gallery items"
on public.gallery_items
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage bookings"
on public.bookings
for all
to authenticated
using (true)
with check (true);

create policy "Authenticated users can manage contact messages"
on public.contact_messages
for all
to authenticated
using (true)
with check (true);
