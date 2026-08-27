import { NextResponse } from "next/server";
import { buildEmailHtml, sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = ["first_name", "last_name", "email"];
    const missingField = requiredFields.find((field) => !body[field]);

    if (missingField) {
      return NextResponse.json(
        { error: `Eksik alan: ${missingField}` },
        { status: 400 }
      );
    }

    const fullName = `${body.first_name} ${body.last_name}`.trim();

    const html = buildEmailHtml("Yeni Randevu Talebi", [
      ["Ad Soyad", fullName],
      ["E-posta", body.email],
      ["Telefon", body.phone],
      ["Ders", body.lesson],
      ["Deneyim", body.experience_level],
      ["Tercih edilen gün", body.preferred_date],
      ["Tercih edilen saat", body.preferred_time],
      ["Not", body.note],
    ]);

    const result = await sendNotificationEmail({
      subject: `[RANDEVU] ${fullName}${body.lesson ? ` — ${body.lesson}` : ""}`,
      html,
      replyTo: body.email,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Beklenmeyen hata." },
      { status: 500 }
    );
  }
}
