import { getFaqsForPost, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/seo";

type HeadProps = {
  params: Promise<{ slug: string }>;
};

export default async function Head({ params }: HeadProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return null;
  }

  const faqs = getFaqsForPost(post);
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        author: {
          "@type": "Person",
          name: "Elvin Öztürk",
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        description: post.description,
        url: canonicalUrl,
      },
      ...(faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
