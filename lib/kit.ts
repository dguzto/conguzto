const KIT_API_KEY = process.env.KIT_API_KEY || "";
const KIT_FORM_ID = process.env.KIT_FORM_ID || "";
const KIT_API_URL = `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`;

export async function subscribeEmail(email: string): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(KIT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: KIT_API_KEY, email }),
  });
  if (res.ok) return { ok: true };
  const data = await res.json().catch(() => ({}));
  return { ok: false, error: data.message || "Subscription failed" };
}
