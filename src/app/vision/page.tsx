import type { Metadata } from "next";
import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { vision, mission, originStory, founders, foundersNote } from "@/lib/company-data";
import { coreValues, contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Vision & Founders | JagKalyan Tarak Gurukul",
  description:
    "The vision, mission, core values, and founders behind JagKalyan Tarak Gurukul, an integrated campus for holistic education, wellness, and eco-living.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        crumb="Vision & Founders"
        title="Where ancient wisdom meets future innovation"
        subtitle="Inspired by the Gurukul tradition, built for a world that needs both knowledge and wisdom."
      />

      <Container className="max-w-4xl">
        <Section id="story" title="How it began">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{originStory}</p>
        </Section>

        <Section id="vision-mission" title="Vision & Mission">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Vision</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{vision}</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Mission</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{mission}</p>
            </div>
          </div>
          <a
            href={contact.parentSiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
          >
            Visit JagKalyan Holistic Mission
            <ArrowSquareOut size={16} />
          </a>
        </Section>

        <Section id="values" title="Core Values">
          <div className="flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="rounded-full border border-border-strong bg-surface-raised px-4 py-2 text-sm font-medium"
              >
                {value}
              </span>
            ))}
          </div>
        </Section>

        <Section id="founders" title="Founders">
          <div className="grid gap-8 sm:grid-cols-3">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border">
                  <Image src={founder.photo} alt={founder.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-base font-medium tracking-tight">{founder.name}</span>
                  <span className="text-sm text-muted-foreground">{founder.role}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{foundersNote}</p>
        </Section>
      </Container>
    </>
  );
}
