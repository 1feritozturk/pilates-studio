import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { createMetadata, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Online Pilates, durus, esneklik ve egzersiz rutini uzerine hazirlanan rehber yazilari inceleyin.",
  path: "/blog",
  keywords: [...defaultKeywords, "pilates blog", "pilates rehberi", "evde pilates"],
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#F4F3F1] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7D9B76] text-sm font-medium tracking-[0.2em] uppercase mb-3">Blog</p>
          <h1
            className="text-5xl font-semibold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Pilates rehberleri ve faydali icerikler
          </h1>
          <p className="max-w-3xl text-[#5A5A5A] leading-relaxed">
            Online Pilates dersi, evde egzersiz rutini, durus ve beden farkindaligi ile ilgili yazilar burada.
            Google’da aranan sorulara daha net cevap veren rehber iceriklerle karar vermenizi kolaylastirmayi hedefliyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-[#EDE0CF] bg-white p-7 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#7D9B76]">{post.category}</p>
              <h2
                className="mt-4 text-2xl font-semibold text-[#1C1C1C]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5A5A5A]">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-[#9E9E9E]">
                <span>{post.publishedAt}</span>
                <span>{post.readingTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-medium text-[#7D9B76] underline underline-offset-4"
              >
                Yaziyi oku
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
