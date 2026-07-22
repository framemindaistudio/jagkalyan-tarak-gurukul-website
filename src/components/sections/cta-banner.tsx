import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteMeta } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-primary py-20 text-on-primary md:py-28">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-3xl leading-[1.1] tracking-tight md:text-4xl">
            Come, be part of building this place
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-on-primary/80">
            As a student. A mentor. A partner. A founding supporter. {siteMeta.closingLine}
          </p>
          <Button href="/get-involved" size="lg" className="mt-2">
            Get Involved
            <ArrowRight size={18} />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
