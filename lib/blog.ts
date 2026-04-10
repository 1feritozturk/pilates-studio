export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "online-pilates-kimler-icin-uygundur",
    title: "Online Pilates Kimler Icin Uygundur?",
    excerpt:
      "Online Pilates dersleri hangi seviyeler icin uygundur, kimler bireysel derslerden daha cok fayda gorur ve nereden baslamak gerekir?",
    description:
      "Online Pilates derslerinin kimler icin uygun oldugunu, baslangic seviyesinden masa basi calisanlara kadar farkli ihtiyaclar icin nasil fayda sagladigini inceleyin.",
    publishedAt: "2026-04-10",
    readingTime: "4 dk",
    category: "Baslangic",
    content: [
      "Online Pilates, evden duzenli hareket etmek isteyen ancak kalabalik salon rutini kurmak istemeyen kisiler icin oldukca uygun bir secenektir. Derslerin canli yapilmasi, hareketlerin takip edilmesini ve duzeltmelerin anlik verilmesini kolaylastirir.",
      "Baslangic seviyesindeki katilimcilar icin grup dersleri duzenli bir rutin olusturmak acisindan iyi bir baslangictir. Daha spesifik ihtiyaclari olanlar, ornegin durus sorunu, bel-boyun hassasiyeti veya birebir tempo ihtiyaci hissedenler icin ise bireysel dersler daha verimli olabilir.",
      "Istanbul, Ankara veya farkli bir sehirde olmaniz fark etmez. Online Pilates dersleri sayesinde lokasyon siniri olmadan ayni egitmenle surekli bir program takip etmek mumkundur.",
    ],
  },
  {
    slug: "evde-pilates-yaparken-en-sik-yapilan-hatalar",
    title: "Evde Pilates Yaparken En Sik Yapilan Hatalar",
    excerpt:
      "Evde Pilates yaparken yapilan temel hatalar, durusu bozan aliskanliklar ve daha guvenli bir egzersiz rutini icin dikkat edilmesi gerekenler.",
    description:
      "Evde Pilates yaparken en sik yapilan hatalari ve daha guvenli, verimli bir egzersiz akisi icin dikkat etmeniz gereken noktalarini ogrenin.",
    publishedAt: "2026-04-10",
    readingTime: "5 dk",
    category: "Rehber",
    content: [
      "Evde Pilates yaparken en yaygin hatalardan biri hareketi goruntuden kopyalamaya calisip nefes ve hiz kontrolunu ihmal etmektir. Pilates sadece hareket tekrarindan ibaret degildir; ritim, merkez aktivasyonu ve beden farkindaligi da isin bir parcasidir.",
      "Bir diger hata, seviyeye uygun olmayan egzersiz secmektir. Baslangic seviyesinde zorlayici akislara girmek, ilerlemek yerine motivasyon kaybina ve gereksiz zorlanmaya neden olabilir.",
      "Canli online Pilates dersleri bu noktada fayda saglar. Egitmen takibiyle hareketlerin daha kontrollu uygulanmasi ve bedene uygun alternatiflerin verilmesi daha saglikli bir surec yaratir.",
    ],
  },
  {
    slug: "masa-basi-calisanlar-icin-pilates-rutini",
    title: "Masa Basi Calisanlar Icin Pilates Rutini",
    excerpt:
      "Uzun sure oturanlar icin Pilates neden faydali, hangi bolgelere iyi gelir ve online ders rutini nasil kurulabilir?",
    description:
      "Masa basi calisanlar icin Pilates rutininin faydalarini ve durus, esneklik, beden farkindaligi acisindan nasil destek sagladigini kesfedin.",
    publishedAt: "2026-04-10",
    readingTime: "4 dk",
    category: "Ofis Yasami",
    content: [
      "Uzun sure oturmak omuzlarin kapanmasi, sirtin yorulmasi ve omurga etrafindaki kaslarda dengesizlik hissi yaratabilir. Pilates calismalari tam da bu noktada destekleyici olur.",
      "Ozellikle masa basi calisanlar icin nefes, core aktivasyonu ve omurga farkindaligi odakli bir online Pilates rutini; gune daha acik bir durusla devam etmeyi kolaylastirabilir.",
      "Haftada iki veya uc derslik duzenli bir program, hem hareket aliskanligi kazanmak hem de gun icindeki sertlik hissini azaltmak icin iyi bir baslangic olabilir.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
