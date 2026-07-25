"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight, BookOpen } from "@phosphor-icons/react/ssr";

export function FlipBook({ pages, title }: { pages: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  if (pages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-image border border-dashed border-border-strong bg-surface-raised p-16 text-center">
        <BookOpen size={40} className="text-muted-foreground" />
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          The {title} will appear here as a flip-through booklet, coming soon.
        </p>
      </div>
    );
  }

  function next() {
    setIndex((i) => Math.min(i + 1, pages.length - 1));
  }
  function prev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-image border border-border bg-surface-raised shadow-xl shadow-foreground/10"
        style={{ perspective: 1600 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={reduce ? { opacity: 0 } : { rotateY: 90, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { rotateY: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { rotateY: -90, opacity: 0 }}
            transition={{ duration: reduce ? 0.15 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
          >
            <Image
              src={pages[index]}
              alt={`${title}, page ${index + 1}`}
              fill
              className="object-cover"
              sizes="384px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous page"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <CaretLeft size={18} />
        </button>
        <span className="text-sm tabular-nums text-muted-foreground">
          {index + 1} / {pages.length}
        </span>
        <button
          type="button"
          onClick={next}
          disabled={index === pages.length - 1}
          aria-label="Next page"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <CaretRight size={18} />
        </button>
      </div>
    </div>
  );
}
