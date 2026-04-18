import { NextRequest, NextResponse } from "next/server";
import { subscribeEmail } from "@/lib/buttondown";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const email = body.email;
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  const result = await subscribeEmail(email);
  if (result.ok) return NextResponse.json({ success: true });
  return NextResponse.json({ error: result.error }, { status: 500 });
}
