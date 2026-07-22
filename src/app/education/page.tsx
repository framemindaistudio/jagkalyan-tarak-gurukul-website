import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";
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
          <FeatureGrid features={education.features} columns={3} />
        </Section>

        <div className="mb-14 grid gap-6 sm:grid-cols-2 md:mb-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-image">
            <Image
              src="/images/jk-smart-classroom.jpg"
              alt="A modern smart classroom at JagKalyan Tarak Gurukul"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-image">
            <Image
              src="/images/jk-organic-farm-learning.jpg"
              alt="Students learning organic farming on campus grounds"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
