import { NextResponse } from "next/server";
import { buildEmailHtml, sendNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = ["full_name", "email", "message"];
    const missingField = requiredFields.find((field) => !body[field]);

    if (missingField) {
      return NextResponse.json(
        { error: `Eksik alan: ${missingField}` },
        { status: 400 }
      );
    }

    const html = buildEmailHtml("Yeni İletişim Mesajı", [
      ["Ad Soyad", body.full_name],
      ["E-posta", body.email],
      ["Telefon", body.phone],
      ["Mesaj", body.message],
    ]);

    const result = await sendNotificationEmail({
      subject: `[İLETİŞİM] ${body.full_name}`,
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
