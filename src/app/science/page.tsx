import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { faqs, ingredients, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "The science",
  description:
    "How Seravia chooses ingredients and writes formulas for Indian skin, climate, and honest claims.",
};

export default function SciencePage() {
  return (
    <main>
      <PageIntro eyebrow="The science" title="Clinically focused, without the theatre.">
        <p>
          A formula earns its place in four moves: read the skin, choose an ingredient for a job,
          make the texture survivable in heat, and stop the sentence where the evidence stops.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:py-16">
        <Reveal>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
            <Image
              src="/images/amber.jpg"
              alt="Amber serum bottle in palm-leaf sunlight."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="photo-zoom object-cover"
            />
          </div>
        </Reveal>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.05}>
              <article className="border-t border-ink/10 pt-6">
                <p className="text-xs uppercase tracking-[0.18em] text-gold">{step.index}</p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight">{step.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal className="max-w-2xl">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-moss">Ingredient point of view</p>
            <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
              Names a dermatologist can explain.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              These are the kinds of materials a doctor-led routine often considers for Indian skin.
              They are a philosophy, not a printed label of finished products.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04}>
                <article className="h-full rounded-[1.4rem] border border-ink/10 bg-paper p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-clay">{item.role}</p>
                  <h3 className="mt-3 font-serif text-2xl">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/rice.jpg"
              alt="A close texture of uncooked rice grains."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="photo-zoom object-cover"
            />
          </figure>
          <figcaption className="mt-4 text-sm leading-7 text-muted">
            Rice is part of how many Indian homes already think about skin. Tradition can guide a
            question. It does not replace a dose.
          </figcaption>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/turmeric.jpg"
              alt="Wooden spoons holding golden and red spice powders on a wooden table."
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="photo-zoom object-cover"
            />
          </figure>
          <figcaption className="mt-4 text-sm leading-7 text-muted">
            Familiar colour is not a formula. Kitchen spices stay in the kitchen unless a
            dermatologist can defend the form, the amount, and the skin they are meant to help.
          </figcaption>
        </Reveal>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Questions worth asking</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-cream/15 border-y border-cream/15">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-xl tracking-tight sm:gap-6 sm:text-2xl">
                  <span>{item.q}</span>
                  <span className="mt-1 shrink-0 text-gilt transition duration-300 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="faq-panel">
                  <div>
                    <p className="max-w-2xl pb-1 pt-3 text-sm leading-7 text-cream/75">{item.a}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
