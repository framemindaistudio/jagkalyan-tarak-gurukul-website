import type { Metadata } from "next";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { Icon } from "@/lib/icon-map";
import { GetInvolvedForm } from "@/components/sections/get-involved-form";
import { getInvolvedOptions, contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Get Involved | JagKalyan Tarak Gurukul",
  description:
    "Get in touch, or become a student, mentor, partner, or founding supporter of JagKalyan Tarak Gurukul, an integrated campus for holistic education, wellness, and eco-living.",
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-card border border-border bg-surface-raised p-5 transition-colors hover:border-primary"
              >
                <Phone size={20} className="shrink-0 text-primary" />
                <span className="text-sm font-medium">{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 rounded-card border border-border bg-surface-raised p-5 transition-colors hover:border-primary"
              >
                <EnvelopeSimple size={20} className="shrink-0 text-primary" />
                <span className="text-sm font-medium">{contact.email}</span>
              </a>
              <div className="flex items-center gap-3 rounded-card border border-border bg-surface-raised p-5">
                <MapPin size={20} className="shrink-0 text-primary" />
                <span className="text-sm font-medium">{contact.address}</span>
              </div>
            </div>
            <GetInvolvedForm />
          </div>
        </Section>
      </Container>
    </>
  );
}
