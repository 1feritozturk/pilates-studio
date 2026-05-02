import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogImage, getHubPosts, getInContentLinks, getPostBySlug, getRelatedPosts } from "@/lib/blog";
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

  const hubPosts = getHubPosts(post.slug);
  const inContentLinks = getInContentLinks(post.slug);
  const relatedPosts = getRelatedPosts(post.slug);
  const postImage = getBlogImage(post.slug);

  return (
    <>
      <section className="bg-[#F5F0F8] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#9B7FAD] text-sm font-medium tracking-[0.12em] uppercase mb-3">{post.category}</p>
          <h1
            className="text-5xl font-semibold text-[#1A1218] mb-4"
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
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-[#EDE0F5] bg-white">
          <div className="relative aspect-[4/3] w-full">
            <Image src={postImage.src} alt={postImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" priority />
          </div>
        </div>

        <div className="space-y-6 text-[#6B5E68] leading-8">
          {post.content.map((section, index) => (
            <section key={`${post.slug}-${index}`} className="space-y-4">
              {section.heading ? (
                <h2
                  className="text-2xl font-semibold text-[#1A1218] pt-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {section.heading}
                </h2>
              ) : null}

              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

              {section.bullets?.length ? (
                <ul className="list-disc pl-6 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {inContentLinks.length ? (
          <div className="mt-12 rounded-[1.75rem] border border-[#EDE0F5] bg-[#FCFEFA] p-6 md:p-8">
            <p className="text-[#9B7FAD] text-sm font-medium tracking-[0.12em] uppercase mb-4">Okuma Rotası</p>
            <div className="space-y-4 text-[#6B5E68] leading-8">
              {inContentLinks.map((item) => (
                <p key={`${post.slug}-${item.slug}-${item.anchor}`}>
                  {item.lead}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-[#1A1218] underline decoration-[#9B7FAD]/55 underline-offset-4 hover:text-[#9B7FAD] transition-colors"
                  >
                    {item.anchor}
                  </Link>
                  {item.tail ?? ""}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </article>

      {hubPosts.length ? (
        <section className="pb-8 max-w-5xl mx-auto px-6">
          <div className="rounded-[2rem] border border-[#EDE0F5] bg-[#F5F0F8] p-8 md:p-10">
            <p className="text-[#9B7FAD] text-sm font-medium tracking-[0.12em] uppercase mb-3">Merkez Rehber</p>
            <h2
              className="text-3xl font-semibold leading-snug text-[#1A1218] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Bu rehberde devam edebileceğiniz yazılar
            </h2>
            <p className="text-[#6B5E68] leading-7 mb-8 max-w-2xl">
              Online Pilates konusunda daha derin okumak isterseniz, aşağıdaki başlıklardan ilgili içeriğe doğrudan geçebilirsiniz.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {hubPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="rounded-2xl border border-[#EDE0F5] bg-white px-5 py-4 text-[#1A1218] hover:border-[#9B7FAD] hover:text-[#9B7FAD] transition-colors"
                >
                  {relatedPost.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedPosts.length ? (
        <section className="pb-20 max-w-5xl mx-auto px-6">
          <div className="border-t border-[#EDE0F5] pt-10">
            <p className="text-[#9B7FAD] text-sm font-medium tracking-[0.12em] uppercase mb-3">İlgili Yazılar</p>
            <h2
              className="text-3xl font-semibold leading-snug text-[#1A1218] mb-8"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Okumaya buradan devam edin
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-[1.5rem] border border-[#EDE0F5] bg-white p-6 hover:border-[#9B7FAD] hover:shadow-sm transition-all"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-[#9B7FAD] mb-3">{relatedPost.category}</p>
                  <h3 className="text-2xl font-semibold text-[#1A1218] mb-3 group-hover:text-[#9B7FAD] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-[#6B5E68] leading-7">{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
