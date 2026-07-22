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
          className="flex flex-col gap-3 rounded-card border border-border bg-surface-raised p-5"
        >
          <Icon name={stat.icon} size={22} className="text-primary" />
          <CountUp
            value={`${stat.value}${stat.suffix}`}
            className="font-display text-2xl tracking-tight tabular-nums md:text-3xl"
          />
          <span className="text-sm leading-snug text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
