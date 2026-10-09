"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Words } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  return (
    <section className="relative overflow-hidden">
      <div className="orb pointer-events-none absolute -left-24 top-6 h-80 w-80 rounded-full bg-sage/80 blur-3xl" />
      <div className="orb orb-delay pointer-events-none absolute right-[-4rem] top-28 h-72 w-72 rounded-full bg-sand/80 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:gap-12 sm:px-8 sm:pt-12 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="@container lg:col-span-7">
          <motion.p {...rise(0.05)} className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">
            <motion.span
              className="h-px origin-left bg-gold"
              initial={reduce ? { width: 32 } : { width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            />
            Seravia Lifesciences
          </motion.p>
          <h1 className="mt-5 font-serif text-[clamp(1.85rem,11cqi,4.6rem)] leading-[0.96] tracking-[-0.035em] text-ink sm:leading-[0.92]">
            <Words text="Doctor-owned." className="block whitespace-nowrap" delay={0.12} />
            <Words text="Doctor-formulated." className="block whitespace-nowrap" delay={0.32} />
            <Words text="Made for Indian skin." className="mt-1 block italic text-leaf" delay={0.58} />
          </h1>
          <motion.p {...rise(0.85)} className="mt-7 max-w-xl text-lg leading-8 text-muted">
            Skincare should be guided by science, not just marketing. A dermatologist founded Seravia
            so formulas could be written for Indian skin — the heat, the humidity, the sun, and the
            marks that stay.
          </motion.p>
          <motion.div {...rise(0.98)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/story" className="btn btn-primary justify-center sm:justify-start">
              Read our story
              <Arrow />
            </Link>
            <Link href="/science" className="btn btn-ghost justify-center sm:justify-start">
              How we formulate
            </Link>
          </motion.div>
          <motion.dl {...rise(1.1)} className="mt-10 max-w-lg divide-y divide-ink/10 border-y border-ink/10 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:divide-y-0 sm:border-b-0 sm:pt-6">
            {[
              ["Owned", "By a dermatologist"],
              ["Focused", "On skin health"],
              ["Shaped", "For this climate"],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                className="flex items-baseline justify-between gap-4 py-3.5 sm:block sm:py-0"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 1.15 + index * 0.08 }}
              >
                <dt className="font-serif text-lg text-ink sm:text-xl">{title}</dt>
                <dd className="text-right text-sm text-muted sm:mt-1 sm:text-left sm:text-xs sm:leading-5">{text}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
        <motion.div
          className="relative lg:col-span-5"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-sand shadow-[0_30px_80px_-40px_rgba(27,25,22,0.55)]">
            <Image
              src="/images/amber.jpg"
              alt="Amber glass serum bottle standing in warm sunlight, with palm-leaf shadows across the wall."
              fill
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="ken-burns object-cover"
            />
          </div>
          <motion.div
            className="float-card absolute bottom-4 left-4 max-w-[min(15rem,calc(100%-2rem))] rounded-2xl border border-ink/10 bg-cream/95 p-4 shadow-lg backdrop-blur sm:-left-8 sm:bottom-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">The standard</p>
            <p className="mt-1 font-serif text-xl leading-snug text-ink">Founded by a dermatologist.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="btn-arrow h-3.5 w-3.5" aria-hidden="true" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
