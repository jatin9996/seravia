import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ImageFrame } from "@/components/ImageFrame";
import { Marquee } from "@/components/Marquee";
import { MethodList } from "@/components/MethodList";
import { Reveal } from "@/components/Reveal";
import { concerns, dayMoments, pillars } from "@/lib/content";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />

      <section className="relative isolate overflow-hidden bg-ink text-cream">
        <Image src="/images/leaves.jpg" alt="" fill className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-0 bg-ink/75" />
        <Reveal className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <p className="text-xs uppercase tracking-[0.22em] text-gilt">The belief</p>
          <p className="quote-mark font-serif text-7xl leading-none text-gilt/90" aria-hidden="true">
            “
          </p>
          <blockquote className="font-serif text-[clamp(1.65rem,4.6vw,3.7rem)] leading-[1.2] tracking-[-0.03em] sm:leading-[1.15]">
            Skincare should be guided by science, not just marketing.
          </blockquote>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-cream/75">
            In India, where pigmentation, acne, sensitivity, tanning, and premature ageing are common,
            people deserve products developed with a doctor’s understanding of skin health.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <ImageFrame
          src="/images/ritual.jpg"
          alt="A resting face during a clay-mask treatment, with a brush moving across the forehead."
          className="aspect-[5/4] rounded-[1.6rem]"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <Reveal delay={0.1}>
          <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">
            <span className="h-px w-8 bg-gold" />
            Why Seravia exists
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
            A formula should know the weather it will live in.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Seravia Lifesciences started from a plain idea: Indian skin is not a smaller version of a
            formula made somewhere else. Heat, humidity, pollution, and strong sun change what a routine
            is asked to do before lunch.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Founded by a dermatologist, the house brings that clinical eye together with carefully
            selected ingredients and formulations that stay focused on skin health.
          </p>
          <Link href="/story" className="btn btn-ghost mt-8">
            The full story
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-ink/10 bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <Reveal>
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">One ordinary day</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Skin meets three climates before bed.
            </h2>
          </Reveal>
          <div className="relative mt-12 grid gap-10 md:grid-cols-3">
            <div className="draw-x absolute left-0 right-0 top-3 hidden h-px bg-gold/50 md:block" aria-hidden="true" />
            {dayMoments.map((moment, index) => (
              <Reveal key={moment.time} delay={index * 0.1}>
                <article>
                  <p className="relative inline-flex bg-cream pr-3 font-serif text-lg text-clay">{moment.time}</p>
                  <h3 className="mt-4 font-serif text-2xl tracking-tight">{moment.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{moment.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">Concerns we formulate around</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                Five reasons people come looking for care.
              </h2>
            </div>
            <Link href="/concerns" className="btn btn-ghost">
              Explore each one
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {concerns.map((concern, index) => (
              <Reveal
                key={concern.id}
                delay={index * 0.05}
                className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Link
                  href={`/concerns#${concern.id}`}
                  className="card-shine group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-ink/10 bg-cream p-6 transition duration-500 hover:-translate-y-1.5 hover:border-leaf/30 hover:shadow-[0_24px_50px_-28px_rgba(27,25,22,0.45)]"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gold">
                      <span>{concern.index}</span>
                      <span className="translate-x-0 text-ink/40 transition group-hover:translate-x-1 group-hover:text-clay">
                        →
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif text-3xl tracking-tight text-ink">{concern.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{concern.summary}</p>
                  </div>
                  <p className="mt-8 text-xs uppercase tracking-[0.16em] text-moss">{concern.kicker}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">How the house works</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Four commitments, before a single claim.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06} className="bg-paper p-6 transition duration-500 hover:-translate-y-1 sm:p-7">
              <p className="font-serif text-4xl text-sand">0{index + 1}</p>
              <h3 className="mt-6 font-serif text-2xl tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-leaf text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-gilt">The method</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              From a concern to a formula that can live in this weather.
            </h2>
            <Link href="/science" className="btn btn-light mt-8">
              See the science
            </Link>
          </Reveal>
          <MethodList />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">Climate is an ingredient</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Humidity, hard water, and a sun that does not take a season off.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            A formula can be elegant in a cool laboratory and miserable on a May afternoon. Seravia
            designs for the day people actually have: sweat, air-conditioning, dust, and ultraviolet
            light on the way to work.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            That is why texture, layering, and daily protection sit beside the ingredient list. If it
            will not be worn, it cannot help.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <ImageFrame
            src="/images/monsoon.jpg"
            alt="Raindrops on glass, a study in humidity."
            className="aspect-[3/4] rounded-[1.4rem] min-[420px]:mt-8"
            sizes="(min-width: 1024px) 22vw, 45vw"
          />
          <ImageFrame
            src="/images/serum-hands.jpg"
            alt="A drop of clear serum falling from a glass dropper toward an open palm."
            className="aspect-[3/4] rounded-[1.4rem]"
            sizes="(min-width: 1024px) 22vw, 45vw"
          />
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[1.8rem] bg-sand px-5 py-10 sm:px-12 sm:py-14 md:flex-row md:items-center">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-clay">Seravia</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Doctor’s science. Indian skin. Trusted care.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Begin a conversation
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
