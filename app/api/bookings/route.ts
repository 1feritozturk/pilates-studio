import { NextResponse } from "next/server";
import { hasSupabaseAdminEnv } from "@/lib/supabase/env";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    if (!hasSupabaseAdminEnv()) {
      return NextResponse.json(
        { error: "Supabase ayarlari eksik." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const requiredFields = ["first_name", "last_name", "email"];
    const missingField = requiredFields.find((field) => !body[field]);

    if (missingField) {
      return NextResponse.json(
        { error: `Eksik alan: ${missingField}` },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase.from("bookings").insert({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      phone: body.phone || null,
      lesson: body.lesson || null,
      preferred_date: body.preferred_date || null,
      preferred_time: body.preferred_time || null,
      experience_level: body.experience_level || null,
      note: body.note || null,
      status: "new",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Beklenmeyen hata." },
      { status: 500 }
    );
  }
}
