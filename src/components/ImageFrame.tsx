"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export function ImageFrame({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`group relative overflow-hidden ${className ?? ""}`}
      initial={reduce ? false : { clipPath: "inset(12% 12% 12% 12% round 1.5rem)", opacity: 0.6 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)", opacity: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 1.05, ease }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="photo-zoom object-cover" />
    </motion.div>
  );
}
