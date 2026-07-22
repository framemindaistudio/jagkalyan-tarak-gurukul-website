import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import { wellness } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Wellness & Sustainable Living | JagKalyan Tarak Gurukul",
  description:
    "Wellness at JagKalyan Tarak Gurukul: yoga, Ayurveda, naturopathy, preventive healthcare, sattvic nutrition, and a daily rhythm built around sustainable living.",
};

export default function WellnessPage() {
  return (
    <>
      <PageHero
        crumb="Wellness & Sustainable Living"
        title="Health is the foundation every life is built on"
        subtitle={wellness.intro}
      />

      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/jk-yoga-sunrise.jpg"
          alt="A sunrise yoga session on the campus lawn"
          fill
          className="object-cover"
        />
      </div>

      <Container className="max-w-4xl">
        <Section id="approach" title="Whole-Body Wellness">
          <FeatureGrid features={wellness.features} />
        </Section>

        <Section id="rhythm" title="Every Day, a Step Toward a Better You">
          <div className="grid gap-3 sm:grid-cols-2">
            {wellness.dailyRhythm.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                <CheckCircle size={18} weight="fill" className="shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </Section>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-image">
          <Image
            src="/images/jk-herbal-garden.jpg"
            alt="Hands harvesting herbs in the campus herbal garden"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </>
  );
}
