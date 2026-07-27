import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { education } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Holistic Education | JagKalyan Tarak Gurukul",
  description:
    "Holistic education at JagKalyan Tarak Gurukul: smart classrooms, meditation halls, AI and robotics labs, organic farming, martial arts, and the arts.",
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow={education.tagline}
        crumb="Holistic Education"
        title="Learning that goes far beyond textbooks"
        subtitle={education.intro}
      />

      <Container className="max-w-4xl">
        <Section id="approach" title="A Curriculum for the Whole Person">
          <IconRevealGrid items={education.features} columns={3} />
        </Section>
      </Container>
    </>
  );
}
