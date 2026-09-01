import type { Metadata } from "next";
import { getBlogImage, getBlogPostsForListing } from "@/lib/blog";
import { createMetadata, defaultKeywords } from "@/lib/seo";
import BlogList from "./BlogList";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Online Pilates, duruş, esneklik ve egzersiz rutini üzerine hazırlanan rehber yazıları inceleyin.",
  path: "/blog",
  keywords: [...defaultKeywords, "pilates blog", "pilates rehberi", "evde pilates"],
});

export default function BlogPage() {
  const posts = getBlogPostsForListing().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime,
    image: getBlogImage(post.slug),
  }));

  return (
    <>
      <section className="bg-[#F5F0F8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#6B3D7A] text-sm font-medium tracking-[0.12em] uppercase mb-3">Blog</p>
          <h1
            className="text-5xl font-semibold text-[#1A1218] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Pilates rehberleri ve faydalı içerikler
          </h1>
          <p className="max-w-3xl text-[#6B5E68] leading-relaxed">
            Online Pilates dersi, evde egzersiz rutini, duruş ve beden farkındalığı ile ilgili yazılar burada.
            Google’da aranan sorulara daha net cevap veren rehber içeriklerle karar vermenizi kolaylaştırmayı hedefliyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <BlogList posts={posts} />
      </section>
    </>
  );
}
