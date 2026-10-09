import type { Metadata } from "next";
import Link from "next/link";
import { ImageFrame } from "@/components/ImageFrame";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Seravia Lifesciences was founded by a dermatologist so Indian skin could be cared for with science, not only marketing.",
};

const refusals = [
  "Claims that outrun the formula.",
  "Ingredients added because the name is fashionable.",
  "Routines copied from a different climate and relabelled.",
  "Language that treats pigmentation as a flaw to erase overnight.",
];

export default function StoryPage() {
  return (
    <main>
      <PageIntro eyebrow="Our story" title="A dermatologist’s house, built for the skin India lives in.">
        <p>
          Seravia began when a dermatologist decided the brief should be the skin people actually
          live in. Not a campaign. Not a borrowed routine. Indian weather, Indian concerns, and
          language that can stand next to the formula.
        </p>
      </PageIntro>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:py-16">
        <ImageFrame
          src="/images/clinic.jpg"
          alt="Gloved hands applying serum during a clinical facial treatment."
          className="aspect-[4/3] rounded-[1.6rem] lg:col-span-7"
          sizes="(min-width: 1024px) 55vw, 100vw"
        />
        <Reveal delay={0.08} className="lg:col-span-5">
          <p className="font-serif text-6xl leading-none text-sand">“</p>
          <p className="font-serif text-3xl leading-snug tracking-[-0.03em] text-ink">
            Consumers deserve products developed with a doctor’s understanding of skin health.
          </p>
          <p className="mt-6 text-base leading-8 text-muted">
            That sentence is the whole company. Not a slogan beside the company. In a market full of
            borrowed routines and loud before-and-afters, Seravia starts from what a dermatologist
            already knows about pigment, acne, barrier, and sun.
          </p>
        </Reveal>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-[-0.03em]">What doctor-owned means</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              It means a dermatologist sets the standard for what earns a place in a formula. Medical
              expertise is not a quote on the box. It decides the ingredient, the texture, and the
              sentence we are willing to print.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              Carefully selected does not mean rare for the sake of rarity. It means each material has
              a job: comfort, tone, barrier, or daylight defence. Clinically focused means the formula
              is aimed at a real concern, then stopped before it becomes a shopping list.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-4xl tracking-[-0.03em]">Why Indian skin is the brief</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Pigmentation, acne, sensitivity, tanning, and premature ageing are everyday reasons
              people in India look for care. They are shaped by melanin, by heat and humidity, by
              pollution, and by a sun that is present on ordinary Tuesdays.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              A formula made for a cool, low-UV city can look sophisticated and still miss the day.
              Seravia is made so the climate is part of the design, not an excuse after the fact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <h2 className="font-serif text-4xl tracking-[-0.03em]">What we will not do</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
            Trust is a boundary. These are the lines the house does not cross, even when they would be
            easier to sell.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {refusals.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="flex gap-4 rounded-[1.3rem] border border-ink/10 bg-paper p-6">
                <span className="font-serif text-2xl text-clay">0{index + 1}</span>
                <p className="pt-1 text-base leading-7">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link href="/science" className="btn btn-primary">
            How a formula is judged
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
