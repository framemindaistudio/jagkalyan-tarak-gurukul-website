import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { FlipBook } from "@/components/ui/flip-book";
import { Hero } from "@/components/sections/hero";
import { PillarsSection } from "@/components/sections/pillars-section";
import { FlythroughShowcase } from "@/components/sections/flythrough-showcase";
import { EcosystemStrip } from "@/components/sections/ecosystem-strip";
import { EcoLivingTeaser } from "@/components/sections/eco-living-teaser";
import { VisionTeaser } from "@/components/sections/vision-teaser";
import { CommunityTeaser } from "@/components/sections/community-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";
import { bookletPages } from "@/lib/booklet-data";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <FlythroughShowcase />
      <EcosystemStrip />
      <EcoLivingTeaser />

      <section className="border-t border-border bg-surface py-20 md:py-28">
        <Container className="flex flex-col items-center gap-12">
          <Reveal>
            <SectionHeading
              title="The JagKalyan Tarak Gurukul booklet"
              subtitle="Flip through the full introduction to the campus, its founders, and its vision."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1} className="w-full">
            <FlipBook pages={bookletPages} title="JagKalyan Tarak Gurukul booklet" />
          </Reveal>
        </Container>
      </section>

      <VisionTeaser />
      <CommunityTeaser />
      <CtaBanner />
    </>
  );
}
