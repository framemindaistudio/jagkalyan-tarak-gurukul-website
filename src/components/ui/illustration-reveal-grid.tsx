"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type IllustrationItem = {
  key: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 24, mass: 0.6 };

function IllustrationCard({ item, index }: { item: IllustrationItem; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-60, 60], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-60, 60], [-7, 7]), { stiffness: 220, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  }
  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { y: -10 }}
      style={{ transition: reduce ? undefined : "box-shadow 350ms ease, border-color 350ms ease" }}
      className="group relative flex flex-col items-center rounded-[28px] border border-border bg-gradient-to-b from-surface-raised to-surface px-7 pb-8 pt-16 text-center shadow-sm hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/10"
    >
      <motion.div
        className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2"
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
      >
        <motion.div
          className="h-full w-full"
          animate={reduce ? undefined : { y: [0, -9, 0] }}
          transition={reduce ? undefined : { duration: 3.4 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
          whileHover={reduce ? undefined : { scale: 1.08, rotate: 2, transition: HOVER_SPRING }}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="128px"
            className="object-contain drop-shadow-[0_18px_22px_rgba(28,38,23,0.18)]"
          />
        </motion.div>
      </motion.div>
      <h3 className="mt-2 font-display text-lg tracking-tight">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
    </motion.div>
  );
}

export function IllustrationRevealGrid({
  items,
  columns = 3,
}: {
  items: IllustrationItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-16 pt-10",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {items.map((item, i) => (
        <IllustrationCard key={item.key} item={item} index={i} />
      ))}
    </div>
  );
}
