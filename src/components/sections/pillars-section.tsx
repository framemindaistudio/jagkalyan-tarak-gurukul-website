import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { pillars } from "@/lib/site-data";

export function PillarsSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="A holistic ecosystem to grow young, live well, and age gracefully"
          subtitle="Five pillars carry every part of campus life, from the classroom to the farm to the wellness centre. Tap a pillar to read more."
        />
        <IconRevealGrid items={pillars} columns={3} />
      </Container>
    </section>
  );
}
