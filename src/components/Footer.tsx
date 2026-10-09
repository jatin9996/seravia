import Link from "next/link";
import { nav } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="cream" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-cream/75">
            Doctor’s science for the skin India lives in. Pigmentation, acne, sensitivity, tanning,
            and early ageing, read against heat, humidity, and ordinary sun.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gilt">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-cream/80 transition hover:text-cream">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 transition hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gilt">A note</p>
          <p className="mt-4 text-sm leading-7 text-cream/75">
            This is an introduction to the house. It is not a diagnosis, a prescription, or a promise of
            a clinical result. For skin that is painful, rapidly changing, or not improving, please see a
            dermatologist in person.
          </p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Seravia Lifesciences</p>
          <p>Photography courtesy of Unsplash and Pexels.</p>
        </div>
      </div>
    </footer>
  );
}
