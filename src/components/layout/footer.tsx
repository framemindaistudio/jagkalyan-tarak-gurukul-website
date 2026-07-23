import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple, Phone, MapPin, ArrowSquareOut } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";
import { footerColumns, contact, siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <Container className="grid gap-14 py-20 lg:grid-cols-[1.3fr_2fr] lg:gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex w-fit items-center gap-3 rounded-card bg-surface-raised p-3">
            <Image
              src="/images/logo-icon.png"
              alt=""
              width={576}
              height={300}
              className="h-10 w-auto"
            />
            <span className="font-display text-base leading-tight tracking-tight text-foreground">
              JagKalyan
              <br />
              Tarak Gurukul
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-on-primary/75">
            {siteMeta.tagline}. An integrated campus for holistic education, wellness, and eco-living
            in {siteMeta.location}.
          </p>
          <div className="flex flex-col gap-3 text-sm text-on-primary/85">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-on-primary"
            >
              <Phone size={16} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-on-primary">
              <EnvelopeSimple size={16} />
              {contact.email}
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {contact.address}
            </span>
            <a
              href={contact.parentSiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-on-primary"
            >
              <ArrowSquareOut size={16} />
              JagKalyan Holistic Mission
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-on-primary/60">{col.title}</h3>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-primary/85 transition-colors hover:text-on-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-on-primary/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-on-primary/60">
          A joint initiative of {siteMeta.parentInitiatives.join(" and ")}.
        </p>
      </Container>
    </footer>
  );
}
