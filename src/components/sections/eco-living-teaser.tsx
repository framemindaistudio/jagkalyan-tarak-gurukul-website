import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StatGrid } from "@/components/ui/stat-grid";
import { plotStats, ecoLivingMeta } from "@/lib/eco-living-data";

export function EcoLivingTeaser() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Eco Living
          </span>
          <h2 className="font-display text-3xl leading-[1.1] tracking-tight md:text-4xl">
            A gated eco-living scheme, next to the Gurukul
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{ecoLivingMeta.tagline}</p>
          <StatGrid stats={plotStats} />
          <Button href="/eco-living" variant="secondary" className="w-fit">
            Explore Eco Living
            <ArrowRight size={16} />
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden rounded-image border border-border">
          <Image
            src="/images/eco-living-concept-layout.jpg"
            alt="Concept layout for the Eco Living plotted scheme beside JagKalyan Tarak Gurukul"
            fill
            className="bg-surface-raised object-contain"
          />
        </Reveal>
      </Container>
    </section>
  );
}
