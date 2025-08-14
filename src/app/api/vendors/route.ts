// app/api/vendors/route.ts
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * GET /api/vendors
 * - Fetch all vendors
 */
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("vendors").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/**
 * POST /api/vendors
 * - Create a new vendor
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  const body = await request.json();

  const { data, error } = await supabase.from("vendors").insert(body).select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

/**
 * PUT /api/vendors
 * - Update an existing vendor
 * - Expects { id: string, ...fieldsToUpdate }
 */
export async function PUT(request: Request) {
  const supabase = await createClient();
  const body = await request.json();
  const { id, ...updates } = body;

  if (!id) {
    return NextResponse.json(
      { error: "Vendor ID is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("vendors")
    .update(updates)
    .eq("id", id)
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

/**
 * DELETE /api/vendors
 * - Delete a vendor by ID
 * - Expects { id: string }
 */
export async function DELETE(request: Request) {
  const supabase = await createClient();
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json(
      { error: "Vendor ID is required" },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("vendors").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
