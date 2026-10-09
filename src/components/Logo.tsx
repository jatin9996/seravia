import Link from "next/link";

export function Logo({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const color = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${color}`} aria-label="Seravia home">
      <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true">
        <circle cx="18" cy="18" r="16.25" fill="none" stroke="currentColor" strokeWidth="1.1" />
        <path
          d="M18 8c5.2 3.4 7 6.8 7 10.8 0 4.6-3 8-7 10.2-4-2.2-7-5.6-7-10.2C11 14.8 12.8 11.4 18 8z"
          fill="currentColor"
          opacity="0.12"
        />
        <path
          d="M18 10.2c3.6 2.6 5 5.2 5 8.4 0 3.4-2.1 6-5 7.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M18 26.2c-2.6-1.8-4.2-4-4.2-6.6 0-2.1 1-4 2.8-5.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif text-[1.65rem] leading-none tracking-[-0.03em]">Seravia</span>
    </Link>
  );
}
