export const bookingStatuses = [
  { value: "new", label: "Yeni" },
  { value: "called", label: "Arandi" },
  { value: "confirmed", label: "Onaylandi" },
  { value: "cancelled", label: "Iptal" },
] as const;

export const messageStatuses = [
  { value: "unread", label: "Okunmadi" },
  { value: "replied", label: "Cevaplandi" },
] as const;

export const lessonCategories = [
  { value: "group", label: "Grup" },
  { value: "private", label: "Bireysel" },
] as const;
