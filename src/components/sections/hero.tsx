import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteMeta } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative flex min-h-[80dvh] items-center overflow-hidden bg-foreground">
      <Image
        src="/images/jk-hero-campus-plaza.jpg"
        alt="The JagKalyan Tarak Gurukul campus at golden hour: the central domed pavilion and fountain plaza, flanked by terracotta-roofed buildings and framed by forested hills"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/20" />

      <Container className="relative z-10 py-14 md:py-20">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="text-sm font-medium text-on-primary/70">
            {siteMeta.location}
            {" "}&middot; Concept in development
          </span>
          <span className="h-px w-16 bg-accent" aria-hidden="true" />
          <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-on-primary md:text-5xl lg:text-6xl">
            {siteMeta.tagline}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-on-primary/80 md:text-lg">
            An integrated campus for holistic education, wellness, research, and eco-living, a joint
            initiative of {siteMeta.parentInitiatives.join(" and ")}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/get-involved" size="lg">
              Get Involved
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/campus"
              size="lg"
              variant="secondary"
              className="border-on-primary/40 text-on-primary hover:border-on-primary hover:text-on-primary hover:bg-on-primary/10"
            >
              Explore the Campus
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
