const COMPANY_LOGOS: Record<string, string> = {
  amenitiz: "/logos/amenitiz.svg",
  lemlist: "/logos/lemlist.svg",
  payhawk: "/logos/payhawk.png",
};

export function CompanyLogo({ slug, size = 40 }: { slug: string; size?: number }) {
  const logo = COMPANY_LOGOS[slug];

  if (logo) {
    return (
      <div
        className="shrink-0 rounded-[10px] overflow-hidden"
        style={{ width: size, height: size }}
      >
        <img
          src={logo}
          alt={slug}
          width={size}
          height={size}
          className="rounded-[10px]"
        />
      </div>
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
