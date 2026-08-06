import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StatGrid } from "@/components/ui/stat-grid";
import { AmenityGrid } from "@/components/project/amenity-grid";
import { IllustrationRevealGrid } from "@/components/ui/illustration-reveal-grid";
import {
  ecoLivingMeta,
  plotStats,
  plotTypes,
  roads,
  amenities,
  infrastructure,
} from "@/lib/eco-living-data";

export const metadata: Metadata = {
  title: "Saiccha Wisdom Valley | JagKalyan Tarak Gurukul",
  description:
    "The Saiccha Wisdom Valley plotted scheme beside JagKalyan Tarak Gurukul: 2,336 plots across 500, 300, and 150 sq.m formats, with a cricket stadium, sports and shopping centres, and a decorative entrance gate.",
};

export default function EcoLivingPage() {
  return (
    <>
      <PageHero
        eyebrow={ecoLivingMeta.location}
        crumb="Saiccha Wisdom Valley"
        title="A gated Saiccha Wisdom Valley scheme, next to the campus"
        subtitle={ecoLivingMeta.tagline}
      />

      <Container className="max-w-4xl">
        <Section id="scale" title="Scale">
          <StatGrid stats={plotStats} />
        </Section>

        <div className="relative aspect-[3/4] w-full max-w-lg mx-auto overflow-hidden rounded-image border border-border">
          <Image
            src="/images/eco-living-layout-3d.jpg"
            alt="3D layout render of JagKalyan Tarak Gurukul and the plotted Saiccha Wisdom Valley scheme at Village Khanyale, Dodamarg Taluka, Sindhudurg District"
            fill
            sizes="(min-width: 640px) 896px, 100vw"
            className="object-contain bg-surface-raised"
          />
        </div>

        <Section id="plots" title="Plot Types">
          <IllustrationRevealGrid items={plotTypes} columns={3} />
          <IllustrationRevealGrid items={roads} columns={2} />
        </Section>

        <Section id="amenities" title="Amenities">
          <AmenityGrid amenities={amenities} />
        </Section>

        <Section id="infrastructure" title="Infrastructure">
          <IllustrationRevealGrid items={infrastructure} columns={2} />
        </Section>
      </Container>
    </>
  );
}
