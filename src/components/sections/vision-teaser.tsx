import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { vision, founders } from "@/lib/company-data";

export function VisionTeaser() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Our Vision
          </span>
          <h2 className="font-display text-3xl leading-[1.1] tracking-tight md:text-4xl">
            Built the way a forest grows
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{vision}</p>
          <Button href="/vision" variant="secondary" className="w-fit">
            Meet the founders
            <ArrowRight size={16} />
          </Button>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-3 gap-4">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col items-center gap-3 text-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-border sm:h-24 sm:w-24">
                <Image src={founder.photo} alt={founder.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium leading-snug">{founder.name}</span>
                <span className="text-xs text-muted-foreground">{founder.role}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
