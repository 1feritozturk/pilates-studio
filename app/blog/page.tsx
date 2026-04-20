import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getBlogImage, getBlogPostsForListing } from "@/lib/blog";
import { createMetadata, defaultKeywords } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Online Pilates, duruş, esneklik ve egzersiz rutini üzerine hazırlanan rehber yazıları inceleyin.",
  path: "/blog",
  keywords: [...defaultKeywords, "pilates blog", "pilates rehberi", "evde pilates"],
});

export default function BlogPage() {
  const posts = getBlogPostsForListing();

  return (
    <>
      <section className="bg-[#F5F9F3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#52C77E] text-sm font-medium tracking-[0.12em] uppercase mb-3">Blog</p>
          <h1
            className="text-5xl font-semibold text-[#1F1F1F] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Pilates rehberleri ve faydalı içerikler
          </h1>
          <p className="max-w-3xl text-[#505050] leading-relaxed">
            Online Pilates dersi, evde egzersiz rutini, duruş ve beden farkındalığı ile ilgili yazılar burada.
            Google’da aranan sorulara daha net cevap veren rehber içeriklerle karar vermenizi kolaylaştırmayı hedefliyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[2rem] border border-[#D5F2E5] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative h-52 overflow-hidden bg-[#F5F9F3]">
                  <Image
                    src={getBlogImage(post.slug).src}
                    alt={getBlogImage(post.slug).alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </Link>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.12em] text-[#52C77E]">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-[#1F1F1F]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#52C77E] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#505050]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-[#9E9E9E]">
                  <span>{post.publishedAt}</span>
                  <span>{post.readingTime}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-medium text-[#52C77E] underline underline-offset-4"
                >
                  Yazıyı oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
