import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { galleryCategories } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Gallery | JagKalyan Tarak Gurukul",
  description: "Concept photography of the JagKalyan Tarak Gurukul campus and campus life.",
};

const images: Record<string, Array<{ src: string; alt: string }>> = {
  campus: [
    {
      src: "/images/jk-hero-campus-plaza.jpg",
      alt: "The central domed pavilion and fountain plaza at golden hour",
    },
    { src: "/images/jk-hero-campus-aerial.jpg", alt: "Aerial view of the campus master plan" },
    { src: "/images/jk-grand-entrance.jpg", alt: "The monumental campus entrance gate" },
    { src: "/images/jk-main-building-exterior.jpg", alt: "The main campus building exterior" },
    { src: "/images/jk-eco-homes.jpg", alt: "A cluster of sustainable eco-homes" },
    { src: "/images/jk-goshala.jpg", alt: "The campus goshala at golden hour" },
  ],
  life: [
    { src: "/images/jk-yoga-sunrise.jpg", alt: "A sunrise yoga session on the lawn" },
    { src: "/images/jk-meditation-hall.jpg", alt: "Students in a meditation hall" },
    { src: "/images/jk-smart-classroom.jpg", alt: "A modern smart classroom" },
    { src: "/images/jk-organic-farm-learning.jpg", alt: "Students learning organic farming" },
    { src: "/images/jk-innovation-lab.jpg", alt: "A startup incubation lab" },
    { src: "/images/jk-herbal-garden.jpg", alt: "Hands harvesting herbs in the herbal garden" },
    { src: "/images/jk-community-seva.jpg", alt: "A community care garden moment" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Gallery"
        subtitle="Concept photography of the campus and campus life. Real photography will replace these once the campus is built."
      />

      <Container className="max-w-5xl">
        {galleryCategories.map((cat) => (
          <Section key={cat.key} id={cat.key} title={cat.title}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{cat.body}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {images[cat.key]?.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-image">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </Section>
        ))}
      </Container>
    </>
  );
}
