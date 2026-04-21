import { Link } from "@/i18n/navigation";

function LogoIcon({ size = 24 }: { size?: number }) {
  const strokeWidth = size < 20 ? 3.5 : 2.5;
  const dotRadius = size < 20 ? 3.5 : 2.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="26" cy="26" r="24" fill="#C4703E" />
      <path
        d="M7 44Q10 42 14 38Q18 32 20 34Q22 36 23 34Q24 32 27 26Q29 22 32 20Q34 18 36 22Q38 26 42 34"
        stroke="white"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="38" cy="14" r={dotRadius} fill="white" />
    </svg>
  );
}

function Logo({ size = 24 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-[10px]">
      <LogoIcon size={size} />
      <span className="font-[family-name:var(--font-logo)] text-[16px] font-normal text-text-primary tracking-[2.5px]">
        CGT
      </span>
    </Link>
  );
}

export { Logo, LogoIcon };
