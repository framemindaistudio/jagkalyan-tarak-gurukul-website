import { ArrowRight, CaretDown } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { siteMeta } from "@/lib/site-data";

export function Hero() {
  return (
    <>
      <section className="relative h-[70dvh] w-full overflow-hidden bg-foreground md:h-[85dvh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
        >
          <source src="/videos/jk-hero-flythrough.mp4" type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/jk-hero-flythrough-poster.jpg"
          className="absolute inset-0 h-full w-full object-contain"
        >
          <source src="/videos/jk-hero-flythrough.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-foreground/10" />
        <CaretDown
          size={28}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-on-primary/80"
          aria-hidden="true"
        />
      </section>

      <section className="bg-foreground py-16 md:py-24">
        <Container>
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
    </>
  );
}
