import { NextResponse } from "next/server";
import { buildEmailHtml, sendNotificationEmail } from "@/lib/email";
import { KAYIT_KAPANIS_DK, getScheduledLesson, isLessonOpen, formatLessonDate, formatLessonTime } from "@/lib/schedule";

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

    const scheduledLesson = getScheduledLesson(body.session_id);
    if (body.session_id !== undefined && !scheduledLesson) {
      return NextResponse.json({ error: 'Seçilen ders bulunamadı. Lütfen takvimden yeniden seçim yapın.' }, { status: 400 });
    }
    if (scheduledLesson && !isLessonOpen(scheduledLesson, Date.now())) {
      return NextResponse.json({ error: `Bu dersin kayıt süresi doldu. Kayıtlar ders başlamadan ${KAYIT_KAPANIS_DK} dakika önce kapanır. Lütfen ders takviminden başka bir ders seçin.` }, { status: 409 });
    }

    // Resolve trusted lesson details on the server, not from the submitted title/time.
    const lesson = scheduledLesson?.title ?? body.lesson;
    const fullName = `${body.first_name} ${body.last_name}`.trim();

    const html = buildEmailHtml("Yeni Randevu Talebi", [
      ["Ad Soyad", fullName],
      ["E-posta", body.email],
      ["Telefon", body.phone],
      ["Ders", lesson],
      ["Takvim ders kimliği", scheduledLesson?.id],
      ["Ders tarihi", scheduledLesson ? formatLessonDate(scheduledLesson.startsAt) : undefined],
      ["Ders saati (Türkiye)", scheduledLesson ? `${formatLessonTime(scheduledLesson.startsAt)}–${formatLessonTime(scheduledLesson.endsAt)}` : undefined],
      ["Deneyim", body.experience_level],
      ["Tercih edilen gün", body.preferred_date],
      ["Tercih edilen saat", body.preferred_time],
      ["Not", body.note],
    ]);

    const result = await sendNotificationEmail({
      subject: `[RANDEVU] ${fullName}${lesson ? ` — ${lesson}` : ""}`,
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
