"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Words } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <header className="@container mx-auto max-w-6xl px-5 pb-6 pt-10 sm:px-8 sm:pt-20">
      <motion.p
        className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-moss"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <motion.span
          className="h-px origin-left bg-gold"
          initial={reduce ? { width: 32 } : { width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        />
        {eyebrow}
      </motion.p>
      <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2rem,8.6cqi,4.8rem)] leading-[1.02] tracking-[-0.035em] text-ink sm:leading-[0.96]">
        <Words text={title} delay={0.08} />
      </h1>
      <motion.div
        className="mt-6 max-w-2xl text-lg leading-8 text-muted"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.35 }}
      >
        {children}
      </motion.div>
    </header>
  );
}
