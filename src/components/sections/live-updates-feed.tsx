import { CalendarBlank } from "@phosphor-icons/react/ssr";
import { Reveal } from "@/components/motion/reveal";
import type { LiveUpdate } from "@/lib/live-updates-data";

function monthLabel(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function dayLabel(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { day: "numeric", month: "short" });
}

function groupByMonth(updates: LiveUpdate[]) {
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date));
  const groups: { key: string; label: string; items: LiveUpdate[] }[] = [];
  for (const update of sorted) {
    const key = update.date.slice(0, 7);
    let group = groups.find((g) => g.key === key);
    if (!group) {
      group = { key, label: monthLabel(update.date), items: [] };
      groups.push(group);
    }
    group.items.push(update);
  }
  return groups;
}

const YOUTUBE_PATTERN = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;

function youTubeEmbedUrl(url: string) {
  const match = url.match(YOUTUBE_PATTERN);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function LiveUpdatesFeed({ updates }: { updates: LiveUpdate[] }) {
  if (updates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-image border border-dashed border-border-strong bg-surface-raised p-16 text-center">
        <CalendarBlank size={40} className="text-muted-foreground" />
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Progress photos and videos from the campus will appear here, month by month, as they come in.
        </p>
      </div>
    );
  }

  const groups = groupByMonth(updates);

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => (
        <div key={group.key} className="flex flex-col gap-6">
          <h3 className="font-display text-xl tracking-tight">{group.label}</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {group.items.map((update, i) => {
              const embedUrl = update.mediaType === "video" ? youTubeEmbedUrl(update.url) : null;
              return (
                <Reveal
                  key={update.id}
                  delay={i * 0.06}
                  className="flex flex-col overflow-hidden rounded-card border border-border bg-surface-raised"
                >
                  <div className="relative aspect-video w-full bg-foreground/5">
                    {update.mediaType === "video" ? (
                      embedUrl ? (
                        <iframe
                          src={embedUrl}
                          title={update.title}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={update.url}
                          controls
                          controlsList="nodownload"
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      )
                    ) : (
                      // Externally-hosted links with an unknown domain, so a
                      // plain img avoids configuring next/image remotePatterns
                      // for every host the client might share a link from.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={update.url}
                        alt={update.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {dayLabel(update.date)}
                    </span>
                    <h4 className="font-display text-lg tracking-tight">{update.title}</h4>
                    {update.description ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">{update.description}</p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
