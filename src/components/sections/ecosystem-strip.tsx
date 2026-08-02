import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { IllustrationRevealGrid } from "@/components/ui/illustration-reveal-grid";
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
          <IllustrationRevealGrid items={ecosystemZones} columns={3} />
        </Reveal>
      </Container>
    </section>
  );
}
