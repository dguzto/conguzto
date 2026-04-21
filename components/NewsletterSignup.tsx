"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function NewsletterSignup() {
  const t = useTranslations("signup");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  if (status === "success") return <p className="text-accent text-[14px] font-medium">{t("success")}</p>;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[420px] mx-auto">
      <div className="flex flex-col sm:flex-row gap-sm">
        <label htmlFor="newsletter-email" className="sr-only">{t("placeholder")}</label>
        <input id="newsletter-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("placeholder")} required className="flex-1 bg-bg-white border border-border-input rounded-input px-md py-[14px] text-[14px] text-text-primary placeholder:text-text-muted outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:border-accent transition-colors" />
        <button type="submit" disabled={status === "loading"} className="bg-text-primary text-white rounded-button px-lg py-[14px] text-[14px] font-medium hover:opacity-90 transition-opacity disabled:opacity-60 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
          {status === "loading" ? "..." : t("button")}
        </button>
      </div>
      {status === "error" && <p className="text-red-500 text-xs mt-sm">{t("error")}</p>}
    </form>
  );
}
