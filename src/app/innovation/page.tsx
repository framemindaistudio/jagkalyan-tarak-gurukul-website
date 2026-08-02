import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { IllustrationRevealGrid } from "@/components/ui/illustration-reveal-grid";
import { innovation } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Innovation & Entrepreneurship | JagKalyan Tarak Gurukul",
  description:
    "Innovation and entrepreneurship at JagKalyan Tarak Gurukul: startup incubation, applied AI and GIS research, and Gramodyog rural enterprise.",
};

export default function InnovationPage() {
  return (
    <>
      <PageHero
        crumb="Innovation & Entrepreneurship"
        title="Ideas need soil to grow in too"
        subtitle={innovation.intro}
      />

      <Container className="max-w-4xl">
        <Section id="approach" title="From Concept to Enterprise">
          <IllustrationRevealGrid items={innovation.features} columns={2} />
        </Section>
      </Container>
    </>
  );
}
