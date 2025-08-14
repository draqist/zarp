// GET /api/order-status-updates?order_id=:order_id
// POST /api/order-status-updates                  - create update { order_id, status, note? }
// PUT /api/order-status-updates                   - update { id, status?, note? }
// DELETE /api/order-status-updates                - delete { id }

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = await createClient();
  const url = new URL(req.url);
  const orderId = url.searchParams.get("order_id");

  if (!orderId) {
    return NextResponse.json(
      { error: "order_id is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("order_status_updates")
    .select("*")
    .eq("order_id", orderId)
    .order("created_at", { ascending: true });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.json(); // { order_id, status, note? }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const payload = { ...body, updated_by: user?.id || null };

  const { data, error } = await supabase
    .from("order_status_updates")
    .insert(payload)
    .select()
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data, { status: 201 });
}

export async function PUT(req: Request) {
  const supabase = await createClient();
  const body = await req.json();
  const { id, ...updates } = body;
  if (!id)
    return NextResponse.json({ error: "id is required" }, { status: 400 });

  const { data, error } = await supabase
    .from("order_status_updates")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const supabase = await createClient();
  const { id } = await req.json();
  if (!id)
    return NextResponse.json({ error: "id is required" }, { status: 400 });

  const { error } = await supabase
    .from("order_status_updates")
    .delete()
    .eq("id", id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}
