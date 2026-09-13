import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Birleştirilen blog yazıları. Eski adresler kalıcı olarak yeni yazıya
      // taşınıyor; 301 olmadan bu URL'ler 404 verir ve birikmiş arama
      // sinyalleri kaybolur.
      {
        source: "/blog/evde-pilates-nedir-nasil-baslanir",
        destination: "/blog/evde-pilates-icin-neler-gerekir",
        permanent: true,
      },
      // Online pilates ailesi tek pillar altında toplandı.
      {
        source: "/blog/online-pilates-nasil-yapilir",
        destination: "/blog/online-pilates-nedir-rehber",
        permanent: true,
      },
      {
        source: "/blog/online-pilatese-yeni-baslayanlar-icin-rehber",
        destination: "/blog/online-pilates-nedir-rehber",
        permanent: true,
      },
      {
        source: "/blog/online-pilatesin-faydalari-nelerdir",
        destination: "/blog/online-pilates-nedir-rehber",
        permanent: true,
      },
      {
        source: "/blog/online-pilates-kimler-icin-uygundur",
        destination: "/blog/online-pilates-nedir-rehber",
        permanent: true,
      },
      {
        source: "/blog/canli-online-pilates-derslerinin-avantajlari",
        destination: "/blog/online-pilates-dersleri-nasil-gecer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
