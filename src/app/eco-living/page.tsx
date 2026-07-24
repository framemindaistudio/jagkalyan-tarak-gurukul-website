import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { ScaleShowcase } from "@/components/project/scale-showcase";
import { AmenityGrid } from "@/components/project/amenity-grid";
import { IconRevealGrid } from "@/components/ui/icon-reveal-grid";
import { IconTileGrid } from "@/components/ui/icon-tile-grid";
import {
  ecoLivingMeta,
  scale,
  plotTypes,
  roads,
  amenities,
  infrastructure,
} from "@/lib/eco-living-data";

export const metadata: Metadata = {
  title: "Eco Living | JagKalyan Tarak Gurukul",
  description:
    "The Eco Living plotted scheme beside JagKalyan Tarak Gurukul: 500 and 150 sq.m plots, Phase 1 of 1,000 plots, 3,000 planned in total, with a cricket stadium, sports and shopping centres, and a decorative entrance gate.",
};

export default function EcoLivingPage() {
  return (
    <>
      <PageHero
        eyebrow={ecoLivingMeta.location}
        crumb="Eco Living"
        title="A gated eco-living scheme, next to the Gurukul"
        subtitle={ecoLivingMeta.tagline}
      />

      <Container className="max-w-4xl">
        <Section id="scale" title="Scale">
          <ScaleShowcase {...scale} />
        </Section>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-image border border-border">
          <Image
            src="/images/eco-living-layout-3d.jpg"
            alt="3D layout render of JagKalyan Tarak Gurukul and the plotted eco-living scheme at Village Khanyale, Dodamarg Taluka, Sindhudurg District"
            fill
            sizes="(min-width: 640px) 896px, 100vw"
            className="object-contain bg-surface-raised"
          />
        </div>

        <Section id="plots" title="Plot Types">
          <IconRevealGrid items={plotTypes} />
          <IconTileGrid items={roads} columns={2} />
        </Section>

        <Section id="amenities" title="Amenities">
          <AmenityGrid amenities={amenities} />
        </Section>

        <Section id="infrastructure" title="Infrastructure">
          <IconTileGrid items={infrastructure} />
        </Section>
      </Container>
    </>
  );
}
