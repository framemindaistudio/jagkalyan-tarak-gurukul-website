"use client";

import { useRef, useState } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function FlythroughShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    setMuted((current) => {
      const next = !current;
      if (videoRef.current) videoRef.current.muted = next;
      return next;
    });
  }

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

        <Reveal
          delay={0.1}
          className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-image border border-border shadow-2xl shadow-foreground/20"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/jk-complex-flythrough-full-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/jk-complex-flythrough-full.mp4" type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="absolute bottom-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-foreground/60 text-on-primary backdrop-blur-md transition-colors hover:bg-foreground/80"
          >
            {muted ? <SpeakerSlash size={18} /> : <SpeakerHigh size={18} />}
          </button>
        </Reveal>
      </Container>
    </section>
  );
}
