import type { Metadata } from "next";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { GetInvolvedForm } from "@/components/sections/get-involved-form";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | JagKalyan Tarak Gurukul",
  description: "Get in touch with JagKalyan Tarak Gurukul, Dodamarg, North Goa.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let's talk"
        subtitle="Reach out with questions about the campus, admissions, partnership, or support."
      />

      <Container className="grid max-w-4xl gap-12 py-14 md:py-20 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
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
      </Container>
    </>
  );
}
