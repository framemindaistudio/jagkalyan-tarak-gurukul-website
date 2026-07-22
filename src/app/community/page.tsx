import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { community } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Community & Seva | JagKalyan Tarak Gurukul",
  description:
    "Community and seva at JagKalyan Tarak Gurukul: JagKalyan Seva Udyan (Nandi Seva Park), a place of compassion, care, and dignity for all.",
};

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/80"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

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
          <TagList items={community.sevaUdyan.servingGroups} />
        </Section>

        <Section id="facilities" title="Facilities">
          <TagList items={community.sevaUdyan.facilities} />
        </Section>
      </Container>
    </>
  );
}
