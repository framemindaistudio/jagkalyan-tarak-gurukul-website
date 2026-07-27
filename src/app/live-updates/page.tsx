import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { LiveUpdatesFeed } from "@/components/sections/live-updates-feed";
import { liveUpdates } from "@/lib/live-updates-data";

export const metadata: Metadata = {
  title: "Live Updates | JagKalyan Tarak Gurukul",
  description:
    "Photos and videos from the JagKalyan Tarak Gurukul campus as construction and campus life progress, organized month by month.",
};

export default function LiveUpdatesPage() {
  return (
    <>
      <PageHero
        crumb="Live Updates"
        title="Follow the campus, month by month"
        subtitle="Photos and videos from the ground, posted as they happen."
      />
      <Container className="max-w-5xl">
        <Section id="updates" title="Progress Updates">
          <LiveUpdatesFeed updates={liveUpdates} />
        </Section>
      </Container>
    </>
  );
}
