"use client";

const COMPANY_INFO: Record<string, { domain: string }> = {
  amenitiz: { domain: "amenitiz.com" },
  lemlist: { domain: "lemlist.com" },
  payhawk: { domain: "payhawk.com" },
};

export function CompanyLogo({ slug, size = 40 }: { slug: string; size?: number }) {
  const info = COMPANY_INFO[slug];
  const domain = info?.domain;

  if (domain) {
    return (
      <a
        href={`https://${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="block shrink-0 rounded-[10px] overflow-hidden hover:opacity-80 transition-opacity"
        style={{ width: size, height: size }}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${domain}&sz=${size * 2}`}
          alt={slug}
          width={size}
          height={size}
          className="rounded-[10px]"
        />
      </a>
    );
  }

  const initial = slug.charAt(0).toUpperCase();
  return (
    <div
      className="rounded-[10px] flex items-center justify-center text-white font-bold shrink-0 bg-accent"
      style={{ width: size, height: size, fontSize: size < 30 ? 12 : 16 }}
    >
      {initial}
    </div>
  );
}
