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
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <motion.p {...rise(0.05)} className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss">
            <motion.span
              className="h-px origin-left bg-gold"
              initial={reduce ? { width: 32 } : { width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            />
            Seravia Lifesciences
          </motion.p>
          <h1 className="mt-5 font-serif text-[clamp(3rem,6.4vw,5.6rem)] leading-[0.92] tracking-[-0.035em] text-ink">
            <Words text="Doctor-owned." className="block" delay={0.12} />
            <Words text="Doctor-formulated." className="block" delay={0.32} />
            <Words text="Made for Indian skin." className="mt-1 block italic text-leaf" delay={0.58} />
          </h1>
          <motion.p {...rise(0.85)} className="mt-7 max-w-xl text-lg leading-8 text-muted">
            Skincare should be guided by science, not just marketing. A dermatologist founded Seravia
            so formulas could be written for Indian skin — the heat, the humidity, the sun, and the
            marks that stay.
          </motion.p>
          <motion.div {...rise(0.98)} className="mt-8 flex flex-wrap gap-3">
            <Link href="/story" className="btn btn-primary">
              Read our story
              <Arrow />
            </Link>
            <Link href="/science" className="btn btn-ghost">
              How we formulate
            </Link>
          </motion.div>
          <motion.dl {...rise(1.1)} className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            {[
              ["Owned", "By a dermatologist"],
              ["Focused", "On skin health"],
              ["Shaped", "For this climate"],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease, delay: 1.15 + index * 0.08 }}
              >
                <dt className="font-serif text-xl text-ink">{title}</dt>
                <dd className="mt-1 text-xs leading-5 text-muted">{text}</dd>
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
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.8rem] bg-sand shadow-[0_30px_80px_-40px_rgba(20,36,28,0.7)]">
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
            className="float-card absolute -left-3 bottom-8 max-w-[15rem] rounded-2xl border border-ink/10 bg-cream/95 p-4 shadow-lg backdrop-blur sm:-left-8"
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
