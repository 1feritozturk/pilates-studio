import type { Metadata } from "next";

export const siteConfig = {
  name: "Elvin Öztürk Online Pilates",
  shortName: "Elvin Öztürk Pilates",
  description:
    "Online grup ve bireysel Pilates dersleri ile esneklik, duruş ve beden farkındalığı kazanın.",
  url: "https://www.elvinozturk.com",
  locale: "tr_TR",
  ogImage: "/opengraph-image",
  email: "1elvinozturk@gmail.com",
  phone: "05380188954",
} as const;

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const defaultKeywords = [
  "online pilates",
  "pilates dersleri",
  "online grup pilates",
  "bireysel pilates dersi",
  "elvin öztürk pilates",
  "istanbul pilates",
];
