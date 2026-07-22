import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Icon } from "@/lib/icon-map";
import { pillars } from "@/lib/site-data";

export function PillarsSection() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title="A holistic ecosystem to grow young, live well, and age gracefully"
          subtitle="Five pillars carry every part of campus life, from the classroom to the farm to the wellness centre."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.key} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-card border border-border bg-surface-raised p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon name={pillar.icon} size={20} />
                </div>
                <h3 className="text-base font-medium tracking-tight">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
