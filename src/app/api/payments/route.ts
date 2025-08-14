// GET /api/payments?order_id=:order_id (owner only via RLS)
// POST /api/payments                - create { order_id, amount, status?, payment_method? }
// PUT /api/payments                 - update { id, ...updates }
// DELETE /api/payments              - delete { id }

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = await createClient();
  const url = new URL(req.url);
  const orderId = url.searchParams.get("order_id");

  const query = supabase.from("payments").select("*");
  const { data, error } = orderId
    ? await query.eq("order_id", orderId)
    : await query;

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const body = await req.json();

  const { data, error } = await supabase
    .from("payments")
    .insert(body)
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
    .from("payments")
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

  const { error } = await supabase.from("payments").delete().eq("id", id);
  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}
