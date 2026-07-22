import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/lib/icon-map";
import { ecosystemZones } from "@/lib/site-data";

export function EcosystemStrip() {
  return (
    <section className="border-t border-border bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="One campus, eleven zones, one continuous rhythm"
          subtitle="Learning, living, research, and service are not separate buildings, but one self-sustaining ecosystem."
        />
        <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ecosystemZones.map((zone) => (
            <div
              key={zone.label}
              className="flex items-center gap-3 rounded-card border border-border bg-surface-raised p-4"
            >
              <Icon name={zone.icon} size={20} className="shrink-0 text-primary" />
              <span className="text-sm leading-snug font-medium">{zone.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
