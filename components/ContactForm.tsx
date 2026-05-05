"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const INTENTS = ["work", "contentCollab", "podcastCollab", "otherCollab", "articleQuestion", "other"] as const;
type Intent = (typeof INTENTS)[number];
const INTENTS_WITH_CONTEXT: Intent[] = ["work", "contentCollab", "podcastCollab", "otherCollab", "articleQuestion"];

export function ContactForm() {
  const t = useTranslations("contact");
  const [intent, setIntent] = useState<Intent | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!intent) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, intent: t(`intents.${intent}`), message }),
      });
      if (res.ok) { setStatus("success"); setName(""); setEmail(""); setMessage(""); setIntent(""); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  if (status === "success") return <p className="text-accent text-[14px] font-medium">{t("success")}</p>;

  const inputClass = "w-full bg-bg-white border border-border-input rounded-input px-md py-[14px] text-[14px] text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      <div>
        <label className="block text-[14px] text-text-secondary mb-sm">{t("selectIntent")}</label>
        <select value={intent} onChange={(e) => setIntent(e.target.value as Intent)} required className={inputClass}>
          <option value="" disabled>···</option>
          {INTENTS.map((key) => <option key={key} value={key}>{t(`intents.${key}`)}</option>)}
        </select>
      </div>
      {intent && INTENTS_WITH_CONTEXT.includes(intent) && (
        <div className="border-l-2 border-accent pl-md py-sm">
          <p className="text-[14px] text-text-secondary italic">{t(`intents.${intent}Context`)}</p>
        </div>
      )}
      <div>
        <label className="block text-[14px] text-text-secondary mb-sm">{t("name")}</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
      </div>
      <div>
        <label className="block text-[14px] text-text-secondary mb-sm">{t("email")}</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} />
      </div>
      <div>
        <label className="block text-[14px] text-text-secondary mb-sm">{t("message")}</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={4} className={`${inputClass} resize-y`} />
      </div>
      <button type="submit" disabled={status === "loading"} className="bg-text-primary text-white rounded-button px-lg py-[14px] text-[14px] font-medium hover:opacity-90 transition-opacity disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
        {status === "loading" ? "..." : t("send")}
      </button>
      {status === "error" && <p className="text-red-500 text-xs">{t("error")}</p>}
    </form>
  );
}
