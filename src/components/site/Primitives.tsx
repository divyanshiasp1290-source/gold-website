import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: [0.2, 0.7, 0.2, 1] });
      return () => controls.stop();
    }
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-4xl leading-[1.05] text-ivory md:text-6xl">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export function GoldButton({
  to,
  children,
  variant = "solid",
  external,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const cls =
    variant === "solid"
      ? "bg-gold-gradient text-obsidian hover:opacity-90"
      : "border border-gold/40 text-gold hover:bg-gold hover:text-obsidian";
  const className = `group inline-flex items-center gap-3 px-7 py-4 text-[11px] font-medium tracking-[0.28em] uppercase transition ${cls}`;
  if (external) return <a href={to} className={className}>{children}<span aria-hidden>→</span></a>;
  // Use a plain anchor for cross-route — router-link without strict types
  return <a href={to} className={className}>{children}<span aria-hidden>→</span></a>;
}
