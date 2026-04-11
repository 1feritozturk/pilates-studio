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
      <section className="bg-[#F5F9F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#52C77E] text-sm font-medium tracking-[0.2em] uppercase mb-3">Blog</p>
          <h1
            className="text-5xl font-semibold text-[#1F1F1F] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Pilates rehberleri ve faydali icerikler
          </h1>
          <p className="max-w-3xl text-[#505050] leading-relaxed">
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
              className="rounded-[2rem] border border-[#D5F2E5] bg-white p-7 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#52C77E]">{post.category}</p>
              <h2
                className="mt-4 text-2xl font-semibold text-[#1F1F1F]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#505050]">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs text-[#9E9E9E]">
                <span>{post.publishedAt}</span>
                <span>{post.readingTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-medium text-[#52C77E] underline underline-offset-4"
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
