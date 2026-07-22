import { Icon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function FeatureGrid({
  features,
  columns = 2,
}: {
  features: Array<{ icon: string; title: string; body: string }>;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-5",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
      )}
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-6"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
            <Icon name={feature.icon} size={20} />
          </div>
          <h3 className="text-base font-medium tracking-tight">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
        </div>
      ))}
    </div>
  );
}
