// POST /api/auth/login
// - Body: { email, password }
// - Signs in via Supabase

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "email and password are required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const { data: existingUser, error: checkError } = await supabase
    .from("profiles")
    .select("id, email")
    .eq("id", data?.user?.id)
    .single();

  if (checkError && checkError.code !== "PGRST116") {
    // PGRST116 = no rows returned
    console.error("Error checking existing user:", checkError);
    return {
      success: false,
      error: checkError,
      message: "User check failed",
    };
  }

  if (existingUser) {
    // User exists, update their data
    return NextResponse.json({ user: existingUser }, { status: 200 });
  } else {
    const { error: profileErr } = await supabase.from("profiles").insert({
      id: data?.user?.id,
      full_name: `${data?.user?.user_metadata.first_name} ${data?.user?.user_metadata.last_name}`,
      phone_number: data?.user?.user_metadata.phone_number,
      role: data?.user?.user_metadata.role,
      email,
    });

    if (profileErr) {
      // best-effort cleanup (optional)
      await supabase.auth.admin
        .deleteUser(data?.user?.id || "")
        .catch(() => {});
      return NextResponse.json({ error: profileErr.message }, { status: 500 });
    }
  }
  if (error)
    return NextResponse.json({ error: error.message }, { status: 401 });

  return NextResponse.json(
    { user: data.user, session: data.session },
    { status: 200 }
  );
}
