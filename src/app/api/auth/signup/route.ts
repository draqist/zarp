// POST /api/auth/signup
// - Body: { email, password, full_name, phone_number, role?: 'customer'|'vendor'|'driver' }
// - Creates auth user + profile row

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const { email, password, first_name, last_name, phone_number, role } =
    await req.json();

  if (!email || !password || !first_name || !last_name) {
    return NextResponse.json(
      { error: "email, password, first_name, last_name are required" },
      { status: 400 }
    );
  }

  const { data: signUp, error: signUpErr } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
        phone_number,
        role,
      },
    },
  });
  if (signUpErr || !signUp.user) {
    return NextResponse.json(
      { error: signUpErr?.message || "Sign up failed" },
      { status: 400 }
    );
  }

  // const { error: profileErr } = await supabase.from("profiles").insert({
  //   id: signUp.user.id,
  //   full_name: `${first_name} ${last_name}`,
  //   phone_number,
  //   role,
  //   email,
  // });

  // if (profileErr) {
  //   // best-effort cleanup (optional)
  //   await supabase.auth.admin.deleteUser(signUp.user.id).catch(() => { });
  //   return NextResponse.json({ error: profileErr.message }, { status: 500 });
  // }

  return NextResponse.json({ user: signUp.user }, { status: 201 });
}
