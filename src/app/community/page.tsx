import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { IllustrationRevealGrid } from "@/components/ui/illustration-reveal-grid";
import { community } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Community & Seva | JagKalyan Tarak Gurukul",
  description:
    "Community and seva at JagKalyan Tarak Gurukul: JagKalyan Seva Udyan (Nandi Seva Park), a place of compassion, care, and dignity for all.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        crumb="Community & Seva"
        title="Education achieves its highest purpose when it serves"
        subtitle={community.intro}
      />

      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/jk-community-seva.jpg"
          alt="A compassionate care moment in the JagKalyan Seva Udyan garden"
          fill
          className="object-cover"
        />
      </div>

      <Container className="max-w-4xl">
        <Section id="seva-udyan" title={`${community.sevaUdyan.name}, ${community.sevaUdyan.subtitle}`}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {community.sevaUdyan.tagline}
          </p>
          <p className="text-sm font-medium text-primary">
            {community.sevaUdyan.motto}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            &ldquo;{community.sevaUdyan.mottoTranslation}&rdquo;
          </p>
        </Section>

        <Section id="who-we-serve" title="To Serve the Needy">
          <IllustrationRevealGrid items={community.sevaUdyan.servingGroups} columns={3} />
        </Section>

        <Section id="facilities" title="Facilities">
          <IllustrationRevealGrid items={community.sevaUdyan.facilities} columns={3} />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-image">
            <Image
              src="/images/jk-community-care-room.jpg"
              alt="A caregiver and resident sharing a moment in a Seva Udyan common room"
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </Section>
      </Container>
    </>
  );
}
