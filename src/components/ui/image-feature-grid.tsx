import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageFeatureItem = {
  key: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export function ImageFeatureGrid({
  items,
  columns = 3,
}: {
  items: ImageFeatureItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {items.map((item) => (
        <div
          key={item.key}
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-raised transition-shadow duration-300 hover:shadow-xl hover:shadow-foreground/10"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <h3 className="font-display text-xl tracking-tight">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
