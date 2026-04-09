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

    const requiredFields = ["full_name", "email", "message"];
    const missingField = requiredFields.find((field) => !body[field]);

    if (missingField) {
      return NextResponse.json(
        { error: `Eksik alan: ${missingField}` },
        { status: 400 }
      );
    }

    const supabase = getSupabaseAdminClient();
    const { error } = await supabase.from("contact_messages").insert({
      full_name: body.full_name,
      email: body.email,
      phone: body.phone || null,
      message: body.message,
      status: "unread",
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
