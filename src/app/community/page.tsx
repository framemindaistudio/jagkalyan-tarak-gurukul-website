import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { IconTileGrid } from "@/components/ui/icon-tile-grid";
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
          <IconTileGrid items={community.sevaUdyan.servingGroups} />
        </Section>

        <Section id="facilities" title="Facilities">
          <IconTileGrid items={community.sevaUdyan.facilities} />
        </Section>
      </Container>
    </>
  );
}
