import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Icon } from "@/lib/icon-map";
import { GetInvolvedForm } from "@/components/sections/get-involved-form";
import { getInvolvedOptions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get Involved | JagKalyan Tarak Gurukul",
  description:
    "Become a student, mentor, partner, or founding supporter of JagKalyan Tarak Gurukul, an integrated campus for holistic education, wellness, and eco-living.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        title="Come, be part of building this place"
        subtitle="Together, let's raise a world that is healthier, wiser, and more whole."
      />

      <Container className="max-w-4xl">
        <Section id="ways-to-help" title="Ways to Get Involved">
          <div className="grid gap-5 sm:grid-cols-2">
            {getInvolvedOptions.map((option) => (
              <div
                key={option.key}
                id={option.key}
                className="scroll-mt-28 flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon name={option.icon} size={20} />
                </div>
                <h3 className="text-base font-medium tracking-tight">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{option.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact-form" title="Send a Message">
          <div className="max-w-xl">
            <GetInvolvedForm />
          </div>
        </Section>
      </Container>
    </>
  );
}
