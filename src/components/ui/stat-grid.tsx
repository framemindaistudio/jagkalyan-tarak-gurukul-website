import { Icon } from "@/lib/icon-map";
import { CountUp } from "@/components/motion/count-up";

export function StatGrid({
  stats,
}: {
  stats: Array<{ icon: string; value: string; suffix: string; label: string }>;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col gap-4 rounded-card border border-border bg-surface-raised p-6"
        >
          <Icon name={stat.icon} size={32} className="text-primary" />
          <CountUp
            value={`${stat.value}${stat.suffix}`}
            className="font-display text-3xl tracking-tight tabular-nums md:text-4xl"
          />
          <span className="text-base leading-snug text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
