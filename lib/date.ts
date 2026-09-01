const AYLAR = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
] as const;

/**
 * "2026-04-13" -> "13 Nisan 2026"
 *
 * Date nesnesi kullanılmıyor: new Date("2026-04-13") UTC gece yarısı olarak
 * ayrıştırılır, negatif saat farkı olan bir sunucuda yerel tarihe çevrilirken
 * bir gün geri kayar ve sunucu/istemci çıktısı ayrışır.
 */
export function formatTarih(isoDate: string): string {
  const [yil, ay, gun] = isoDate.split("-");
  const ayAdi = AYLAR[Number(ay) - 1];

  if (!yil || !ayAdi || !gun) return isoDate;

  return `${Number(gun)} ${ayAdi} ${yil}`;
}
