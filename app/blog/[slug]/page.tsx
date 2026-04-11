import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { createMetadata, defaultKeywords } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [...defaultKeywords, post.category.toLowerCase(), "online pilates blog"],
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#F5F9F3] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#52C77E] text-sm font-medium tracking-[0.2em] uppercase mb-3">{post.category}</p>
          <h1
            className="text-5xl font-semibold text-[#1F1F1F] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {post.title}
          </h1>
          <div className="flex gap-4 text-sm text-[#9E9E9E]">
            <span>{post.publishedAt}</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <article className="py-16 max-w-3xl mx-auto px-6">
        <div className="space-y-6 text-[#505050] leading-8">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </>
  );
}
