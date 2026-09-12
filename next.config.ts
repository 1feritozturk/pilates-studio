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
    ];
  },
};

export default nextConfig;
