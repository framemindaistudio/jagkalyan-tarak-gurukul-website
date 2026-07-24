import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { IconTileGrid } from "@/components/ui/icon-tile-grid";
import { ecosystemZones } from "@/lib/site-data";

export function EcosystemStrip() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="One campus, eleven zones, one continuous rhythm"
          subtitle="Learning, living, research, and service are not separate buildings, but one self-sustaining ecosystem."
        />
        <Reveal>
          <IconTileGrid items={ecosystemZones} />
        </Reveal>
      </Container>
    </section>
  );
}
