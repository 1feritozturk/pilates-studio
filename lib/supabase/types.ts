export type BookingStatus = "new" | "called" | "confirmed" | "cancelled";
export type MessageStatus = "unread" | "replied";

export type SiteSettingsRow = {
  id: number;
  site_name: string;
  site_description: string;
  phone: string;
  email: string;
  instagram_url: string;
  instagram_handle: string;
  address: string;
  working_hours: string;
  hero_title: string;
  hero_description: string;
  created_at: string;
  updated_at: string;
};

export type LessonRow = {
  id: string;
  title: string;
  description: string;
  duration: string;
  capacity: string;
  days: string;
  times: string;
  level: string;
  category: "group" | "private";
  image_url: string;
  is_active: boolean;
  created_at: string;
};

export type GalleryItemRow = {
  id: string;
  title: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type BookingRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  lesson: string | null;
  preferred_date: string | null;
  preferred_time: string | null;
  experience_level: string | null;
  note: string | null;
  status: BookingStatus;
  created_at: string;
};

export type ContactMessageRow = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  message: string;
  status: MessageStatus;
  created_at: string;
};

export interface Database {
  public: {
    Tables: {
      site_settings: {
        Row: SiteSettingsRow;
        Insert: Partial<SiteSettingsRow> & { id: number };
        Update: Partial<SiteSettingsRow>;
        Relationships: [];
      };
      lessons: {
        Row: LessonRow;
        Insert: Omit<LessonRow, "id" | "created_at"> & { id?: string; created_at?: string };
        Update: Partial<LessonRow>;
        Relationships: [];
      };
      gallery_items: {
        Row: GalleryItemRow;
        Insert: Omit<GalleryItemRow, "id" | "created_at"> & { id?: string; created_at?: string };
        Update: Partial<GalleryItemRow>;
        Relationships: [];
      };
      bookings: {
        Row: BookingRow;
        Insert: Omit<BookingRow, "id" | "created_at"> & { id?: string; created_at?: string };
        Update: Partial<BookingRow>;
        Relationships: [];
      };
      contact_messages: {
        Row: ContactMessageRow;
        Insert: Omit<ContactMessageRow, "id" | "created_at"> & { id?: string; created_at?: string };
        Update: Partial<ContactMessageRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
