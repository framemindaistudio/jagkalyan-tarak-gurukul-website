"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function FlythroughShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Below-the-fold video: defer the 6MB source until the section is nearly
  // in view instead of downloading it on every page load.
  const inView = useInView(wrapperRef, { once: true, margin: "200px" });

  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            title="See the campus from above"
            subtitle="A drone flythrough of the JagKalyan Tarak Gurukul complex, from the entrance gate to a full view of the grounds."
            align="center"
          />
        </Reveal>

        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-image border border-border shadow-2xl shadow-foreground/20"
        >
          {inView ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload"
              poster="/images/jk-complex-flythrough-full-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source src="/videos/jk-complex-flythrough-full.mp4" type="video/mp4" />
            </video>
          ) : (
            <Image
              src="/images/jk-complex-flythrough-full-poster.jpg"
              alt="Aerial view of the JagKalyan Tarak Gurukul campus"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          )}
        </motion.div>
      </Container>
    </section>
  );
}
