"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Icon } from "@/lib/icon-map";
import { CountUp } from "@/components/motion/count-up";

export function ScaleShowcase({
  phase1,
  phase1Label,
  total,
  totalLabel,
  percent,
  progressLabel,
}: {
  phase1: string;
  phase1Label: string;
  total: string;
  totalLabel: string;
  percent: number;
  progressLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-card border border-border bg-primary text-on-primary">
      <div className="grid gap-10 p-8 sm:grid-cols-2 sm:p-12">
        <div className="flex flex-col gap-3">
          <Icon name="Ruler" size={28} className="text-accent" />
          <CountUp
            value={phase1}
            className="font-display text-6xl tracking-tight tabular-nums md:text-7xl"
          />
          <span className="text-sm text-on-primary/70">{phase1Label}</span>
        </div>
        <div className="flex flex-col gap-3 sm:border-l sm:border-on-primary/15 sm:pl-10">
          <Icon name="GridFour" size={28} className="text-accent" />
          <CountUp
            value={total}
            className="font-display text-6xl tracking-tight tabular-nums md:text-7xl"
          />
          <span className="text-sm text-on-primary/70">{totalLabel}</span>
        </div>
      </div>

      <div ref={ref} className="border-t border-on-primary/15 px-8 py-6 sm:px-12">
        <div className="mb-2.5 flex items-center justify-between text-xs font-medium text-on-primary/70">
          <span>{progressLabel}</span>
          <span>{percent}% of the total plan</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-on-primary/15">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={reduce ? { width: `${percent}%` } : { width: 0 }}
            animate={inView ? { width: `${percent}%` } : undefined}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}
