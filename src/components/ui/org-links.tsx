import Image from "next/image";
import type { FounderOrgLink } from "@/lib/company-data";

const sizes = {
  sm: { box: "h-12 w-12", padding: "p-1.5", img: 48, gap: "gap-3" },
  md: { box: "h-20 w-20 sm:h-24 sm:w-24", padding: "p-3", img: 80, gap: "gap-4" },
};

export function OrgLinks({
  orgLinks,
  size = "md",
}: {
  orgLinks: FounderOrgLink[];
  size?: keyof typeof sizes;
}) {
  const s = sizes[size];

  return (
    <div className={`flex flex-wrap items-center justify-center ${s.gap}`}>
      {orgLinks.map((org) => {
        const logoBox = (
          <span
            className={`flex ${s.box} items-center justify-center rounded-2xl border border-border bg-surface-raised ${s.padding} shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md`}
          >
            {org.logo ? (
              <Image
                src={org.logo}
                alt={org.name}
                width={s.img}
                height={s.img}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
                Soon
              </span>
            )}
          </span>
        );
        return org.href ? (
          <a key={org.name} href={org.href} target="_blank" rel="noopener noreferrer" title={org.name}>
            {logoBox}
          </a>
        ) : (
          <span key={org.name} title={org.name}>
            {logoBox}
          </span>
        );
      })}
    </div>
  );
}
