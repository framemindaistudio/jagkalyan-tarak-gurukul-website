import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { ScaleShowcase } from "@/components/project/scale-showcase";
import { AmenityGrid } from "@/components/project/amenity-grid";
import { Icon } from "@/lib/icon-map";
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

        <div className="relative aspect-[4/5] w-full max-w-xl overflow-hidden rounded-image border border-border sm:mx-auto">
          <Image
            src="/images/eco-living-concept-layout.jpg"
            alt="Concept layout for JagKalyan Tarak Gurukul and the plotted eco-living scheme at Village Khanyale, Dodamarg Taluka, Sindhudurg District"
            fill
            className="object-contain bg-surface-raised"
          />
        </div>

        <Section id="plots" title="Plot Types">
          <div className="grid gap-5 sm:grid-cols-2">
            {plotTypes.map((plot) => (
              <div
                key={plot.key}
                className="flex flex-col gap-2 rounded-card border border-border bg-surface-raised p-6"
              >
                <h3 className="font-display text-xl tracking-tight">{plot.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{plot.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {roads.map((road) => (
              <span
                key={road}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
              >
                {road}
              </span>
            ))}
          </div>
        </Section>

        <Section id="amenities" title="Amenities">
          <AmenityGrid amenities={amenities} />
        </Section>

        <Section id="infrastructure" title="Infrastructure">
          <ul className="flex flex-col gap-2">
            {infrastructure.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name={item.icon} size={16} className="shrink-0 text-primary" />
                {item.label}
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </>
  );
}
