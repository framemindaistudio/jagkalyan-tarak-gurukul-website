import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { community } from "@/lib/content-data";

export function CommunityTeaser() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <Reveal className="grid gap-10 overflow-hidden rounded-card border border-border bg-surface-raised lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image
              src="/images/jk-community-seva.jpg"
              alt="A community care moment in the JagKalyan Seva Udyan garden"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {community.sevaUdyan.name}
              {" "}&middot;{" "}
              {community.sevaUdyan.subtitle}
            </span>
            <h2 className="font-display text-2xl leading-[1.15] tracking-tight md:text-3xl">
              {community.sevaUdyan.tagline}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {community.sevaUdyan.mottoTranslation}
            </p>
            <Button href="/community" variant="secondary" className="w-fit">
              Learn about Seva Udyan
              <ArrowRight size={16} />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
