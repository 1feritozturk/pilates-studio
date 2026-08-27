/**
 * Türkiye cep telefonu için giriş maskesi ve doğrulama.
 * Kullanıcı ne yazarsa yazsın rakam dışındakiler atılır ve
 * "5xx xxx xx xx" biçiminde gruplanır.
 */

/** Sadece rakamları alır, başındaki 0 veya 90 ülke kodunu kırpar, 10 haneye sınırlar. */
export function normalizePhone(value: string): string {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("90")) {
    digits = digits.slice(2);
  } else if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  return digits.slice(0, 10);
}

/** Girişi yazarken "5xx xxx xx xx" biçiminde gösterir. */
export function formatPhone(value: string): string {
  const digits = normalizePhone(value);

  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 8),
    digits.slice(8, 10),
  ].filter(Boolean);

  return parts.join(" ");
}

/** Boş ise geçerli sayılır (alan zorunlu değil); dolu ise 5 ile başlayan 10 hane olmalı. */
export function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  if (digits.length === 0) return true;
  return /^5\d{9}$/.test(digits);
}

/** API'ye gönderilecek kanonik biçim: +905xxxxxxxxx */
export function toE164(value: string): string {
  const digits = normalizePhone(value);
  return /^5\d{9}$/.test(digits) ? `+90${digits}` : "";
}
