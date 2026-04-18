const BUTTONDOWN_API_KEY = process.env.BUTTONDOWN_API_KEY || "";
const BUTTONDOWN_API_URL = "https://api.buttondown.com/v1/subscribers";

export async function subscribeEmail(email: string): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(BUTTONDOWN_API_URL, {
    method: "POST",
    headers: { Authorization: `Token ${BUTTONDOWN_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (res.ok) return { ok: true };
  const data = await res.json().catch(() => ({}));
  if (res.status === 409) return { ok: true };
  return { ok: false, error: data.detail || "Subscription failed" };
}
