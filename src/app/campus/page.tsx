import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { StatGrid } from "@/components/ui/stat-grid";
import { VideoMarquee } from "@/components/sections/video-marquee";
import { Icon } from "@/lib/icon-map";
import {
  campusStats,
  mainBuilding,
  residentialBuildings,
  utilityBuildings,
  grandEntrance,
  sustainableInfrastructure,
  roads,
  waterFeatures,
  parking,
  futureExpansion,
} from "@/lib/campus-data";

export const metadata: Metadata = {
  title: "The Campus | JagKalyan Tarak Gurukul",
  description:
    "The Phase-1 master plan for JagKalyan Tarak Gurukul: campus size, main building floors, residential and utility buildings, and sustainable infrastructure.",
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

export default function CampusPage() {
  return (
    <>
      <PageHero
        eyebrow="Phase-1 Master Plan"
        crumb="The Campus"
        title="A self-sustaining world across 20.4 acres"
        subtitle="Spread across the quiet hills of Dodamarg, the campus is designed so learning, living, research, and service are not separate buildings, but one continuous rhythm."
      />

      <Container className="max-w-4xl">
        <Section id="overview" title="Campus at a Glance">
          <StatGrid stats={campusStats} />
        </Section>

        <Section id="main-building" title="Main Building">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A {mainBuilding.configuration} building totaling {mainBuilding.totalArea}, holding the
            campus&rsquo;s civic, academic, and spiritual heart across three floors.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {mainBuilding.floors.map((floor) => (
              <div key={floor.name} className="flex flex-col gap-3 border-t border-border pt-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium tracking-tight">{floor.name}</h3>
                  <span className="text-xs text-muted-foreground">{floor.area}</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {floor.facilities.map((facility) => (
                    <li key={facility} className="text-sm leading-snug text-muted-foreground">
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="relative my-2 aspect-video w-full overflow-hidden rounded-image">
          <Image
            src="/images/jk-main-building-exterior.jpg"
            alt="The main campus building of JagKalyan Tarak Gurukul, cream stone with a central blue dome"
            fill
            className="object-cover"
          />
        </div>

        <Section id="residential" title="Residential & Activity Buildings">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {residentialBuildings.count} buildings ({residentialBuildings.configuration}), each{" "}
            {residentialBuildings.eachArea}, {residentialBuildings.totalArea} in total.
          </p>
          <TagList items={residentialBuildings.uses} />
        </Section>

        <Section id="utility" title="Utility Buildings">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {utilityBuildings.count} buildings ({utilityBuildings.configuration}), each{" "}
            {utilityBuildings.eachArea}, {utilityBuildings.totalArea} in total.
          </p>
          <TagList items={utilityBuildings.uses} />
        </Section>

        <Section id="entrance" title="Grand Entrance">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-image">
            <Image
              src="/images/jk-grand-entrance.jpg"
              alt="The monumental entrance gate of JagKalyan Tarak Gurukul at dusk"
              fill
              className="object-cover"
            />
          </div>
          <TagList items={grandEntrance} />
        </Section>

        <Section id="sustainability" title="Sustainable Infrastructure">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Landscape</h3>
              <TagList items={sustainableInfrastructure.landscape} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                Green Infrastructure
              </h3>
              <ul className="flex flex-col gap-2">
                {sustainableInfrastructure.greenInfrastructure.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name={item.icon} size={16} className="shrink-0 text-primary" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="roads-water" title="Roads, Water & Parking">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Roads</h3>
              <TagList items={roads} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                Water Features
              </h3>
              <TagList items={waterFeatures} />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-wide text-primary">Parking</h3>
              <TagList items={parking} />
            </div>
          </div>
        </Section>

        <Section id="future" title="Future Expansion">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {futureExpansion.area} of temporary, modular buildings, planned to grow with the campus.
          </p>
          <TagList items={futureExpansion.items} />
        </Section>

        <Section id="progress" title="Progress on the Ground">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Raw clips from the site as work moves forward, unedited and posted as they come in.
          </p>
          <VideoMarquee />
        </Section>
      </Container>
    </>
  );
}
