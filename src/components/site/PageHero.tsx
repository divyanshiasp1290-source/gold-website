import { motion } from "motion/react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="absolute inset-0 -z-10">
        {image ? (
          <>
            <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/85 via-obsidian/70 to-obsidian" />
          </>
        ) : (
          <div className="bg-luxury-radial absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.135_82/0.15),transparent_60%)]" />
      </div>
      <div className="container-luxury">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="eyebrow flex items-center gap-3">
          <span className="h-px w-10 bg-gold" /> {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display mt-6 max-w-5xl text-5xl leading-[1.02] text-ivory md:text-7xl">
          {title}
        </motion.h1>
        {description && (
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
