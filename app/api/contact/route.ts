import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, intent, message } = body;
  if (!name || !email || !intent || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  try {
    await sendContactEmail({ name, email, intent, message });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
