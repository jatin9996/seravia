import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { concerns } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skin concerns",
  description:
    "How Seravia thinks about pigmentation, acne, sensitivity, tanning, and premature ageing in Indian skin.",
};

export default function ConcernsPage() {
  return (
    <main>
      <PageIntro eyebrow="Skin concerns" title="The reasons people in India come looking for care.">
        <p>
          Pigmentation, acne, sensitivity, tanning, and premature ageing are patterns, not a mood
          board. They show up in this climate, and Seravia formulates with those patterns in view.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <nav aria-label="Concerns" className="flex flex-wrap gap-2">
          {concerns.map((concern) => (
            <a key={concern.id} href={`#${concern.id}`} className="btn btn-ghost !py-2 !text-sm">
              {concern.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        {concerns.map((concern, index) => (
          <Reveal key={concern.id}>
            <article id={concern.id} className="scroll-mt-28 border-t border-ink/10 py-14 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{concern.index}</p>
                  <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">{concern.title}</h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-moss">{concern.kicker}</p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="text-lg leading-8 text-ink">{concern.summary}</p>
                  <p className="mt-5 text-base leading-8 text-muted">{concern.body}</p>
                  {index === concerns.length - 1 ? (
                    <p className="mt-6 rounded-2xl bg-sage/70 p-5 text-sm leading-7 text-leaf">
                      If a concern is painful, scarring, spreading, or not settling, this page should
                      hand you to a dermatologist. Seravia explains an approach. It does not examine
                      your skin.
                    </p>
                  ) : null}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal className="pb-8">
          <Link href="/contact" className="btn btn-primary">
            Ask about an approach
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
