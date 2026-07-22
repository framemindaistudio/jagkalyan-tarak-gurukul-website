import { Hero } from "@/components/sections/hero";
import { PillarsSection } from "@/components/sections/pillars-section";
import { EcosystemStrip } from "@/components/sections/ecosystem-strip";
import { VisionTeaser } from "@/components/sections/vision-teaser";
import { CommunityTeaser } from "@/components/sections/community-teaser";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <EcosystemStrip />
      <VisionTeaser />
      <CommunityTeaser />
      <CtaBanner />
    </>
  );
}
