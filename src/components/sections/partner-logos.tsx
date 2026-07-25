import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { founders } from "@/lib/company-data";

const partners = founders.flatMap((founder) => founder.orgLinks ?? []);

export function PartnerLogos() {
  return (
    <section className="border-t border-border py-14 md:py-20">
      <Container className="flex flex-col items-center gap-8">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          In Partnership With
        </span>
        <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((org) => {
            const logo = org.logo ? (
              <Image
                src={org.logo}
                alt={org.name}
                width={44}
                height={44}
                className="h-11 w-11 object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
              />
            ) : null;
            return org.href ? (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                title={org.name}
                className="group flex items-center gap-2 opacity-70 transition-opacity duration-200 hover:opacity-100"
              >
                {logo}
              </a>
            ) : (
              <span key={org.name} title={org.name} className="flex items-center gap-2 opacity-70">
                {logo}
              </span>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
