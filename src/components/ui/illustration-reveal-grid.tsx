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

type MotionProfile = { rotate?: number; y?: number; scale?: number; duration: number };

/**
 * Per-subject idle "personality" — near-invisible breathing rather than a
 * generic bob, so each pillar reads distinctly at rest. New sections reusing
 * this component should add their own entry; DEFAULT_PROFILE covers the rest.
 */
const MOTION_PROFILES: Record<string, MotionProfile> = {
  "natural-living": { rotate: 0.8, y: 2, duration: 5.5 },
  "holistic-wellness": { scale: 0.012, duration: 7 },
  "lifelong-learning": { rotate: 0.6, y: 1.5, duration: 6 },
  "community-connection": { y: 2, duration: 6.5 },
  "purpose-prosperity": { rotate: 1, y: 2.5, duration: 5 },
};
const DEFAULT_PROFILE: MotionProfile = { rotate: 0.7, y: 2, duration: 6 };

const HOVER_EASE = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

function IllustrationCard({ item, index }: { item: IllustrationItem; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-60, 60], [5, -5]), { stiffness: 180, damping: 26 });
  const rotateY = useSpring(useTransform(mx, [-60, 60], [-5, 5]), { stiffness: 180, damping: 26 });

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

  const profile = MOTION_PROFILES[item.key] ?? DEFAULT_PROFILE;
  const idleAnimate: Record<string, number[]> = {};
  if (profile.rotate) idleAnimate.rotate = [-profile.rotate, profile.rotate];
  if (profile.y) idleAnimate.y = [-profile.y, profile.y];
  if (profile.scale) idleAnimate.scale = [1, 1 + profile.scale];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduce ? undefined : { y: -7, transition: HOVER_EASE }}
      className="group relative flex flex-col items-center rounded-[32px] border border-border bg-gradient-to-b from-[#fffdf8] to-[#faf3e6] px-7 pb-8 pt-[72px] text-center shadow-[0_28px_50px_-28px_rgba(120,80,40,0.18)] transition-[box-shadow,border-color] duration-500 ease-out hover:border-accent/45 hover:shadow-[0_36px_64px_-26px_rgba(120,80,40,0.28)]"
    >
      <motion.div
        className="pointer-events-none absolute -top-[72px] left-1/2 h-36 w-36 -translate-x-1/2"
        style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
      >
        <div className="absolute inset-[-25%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(228,174,20,0.16),transparent_70%)] blur-2xl" />
        <motion.div
          className="relative h-full w-full"
          animate={reduce ? undefined : idleAnimate}
          transition={
            reduce ? undefined : { duration: profile.duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
          }
          whileHover={reduce ? undefined : { scale: 1.05, rotate: 1.5, transition: HOVER_EASE }}
        >
          <Image src={item.image} alt={item.alt} fill sizes="144px" className="object-contain" />
        </motion.div>
        <div className="absolute bottom-1 left-1/2 h-3 w-16 -translate-x-1/2 rounded-full bg-black/10 blur-md" />
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
