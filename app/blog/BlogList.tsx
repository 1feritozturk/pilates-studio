'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatTarih } from '@/lib/date';

const ILK_GOSTERIM = 9;
const ADIM = 9;

export type BlogListItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: { src: string; alt: string };
};

export default function BlogList({ posts }: { posts: BlogListItem[] }) {
  const [gosterilen, setGosterilen] = useState(ILK_GOSTERIM);
  const gorunenler = posts.slice(0, gosterilen);
  const kalan = posts.length - gosterilen;

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gorunenler.map((post, index) => (
          <article
            key={post.slug}
            className="overflow-hidden rounded-3xl border border-[#EDE0F5] bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <div className="relative h-40 overflow-hidden bg-[#F5F0F8]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  {...(index === 0 ? { preload: true, fetchPriority: 'high' as const } : {})}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.1em] text-[#6B3D7A]">{post.category}</p>
                  <p className="text-xs text-[#6B5E68] flex-shrink-0">{post.readingTime}</p>
                </div>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-[#1A1218] group-hover:text-[#6B3D7A] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#6B5E68] line-clamp-2">{post.excerpt}</p>
                <p className="mt-3 text-xs text-[#6B5E68]">{formatTarih(post.publishedAt)}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {kalan > 0 ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setGosterilen((mevcut) => mevcut + ADIM)}
            className="rounded-full border border-[#C9A87A] px-8 py-3 text-sm font-medium text-[#6B3D7A] transition-colors hover:bg-[#C9A87A] hover:text-[#1A1218]"
          >
            Daha fazla göster ({kalan})
          </button>
        </div>
      ) : null}
    </>
  );
}
