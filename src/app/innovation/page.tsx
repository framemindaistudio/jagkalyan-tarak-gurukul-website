import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
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
          <IconRevealGrid items={innovation.features} />
        </Section>

        <div className="relative mb-14 aspect-[4/3] w-full overflow-hidden rounded-image md:mb-20">
          <Image
            src="/images/jk-innovation-lab.jpg"
            alt="A startup incubation and innovation lab on campus"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </>
  );
}
