"use client";

import { motion, useReducedMotion } from "framer-motion";
import { steps } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function MethodList() {
  const reduce = useReducedMotion();

  return (
    <div className="relative lg:col-span-8">
      <motion.span
        aria-hidden="true"
        className="absolute bottom-2 left-[0.7rem] top-3 hidden w-px origin-top bg-gold/45 sm:block"
        initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.25, ease }}
      />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.index}
            className="grid gap-3 sm:grid-cols-[5rem_1fr]"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.7, ease, delay: index * 0.08 }}
          >
            <span className="relative z-10 font-serif text-2xl text-gold">{step.index}</span>
            <div className="border-t border-cream/15 pt-1 sm:border-0 sm:pt-0">
              <h3 className="font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-cream/75">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
