import { cn } from "@/lib/utils";
import { videoClips } from "@/lib/video-gallery-data";

export function VideoMarquee() {
  if (videoClips.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-border-strong p-10 text-center text-sm text-muted-foreground">
        Raw site progress clips will appear here as construction moves forward.
      </div>
    );
  }

  const items = [...videoClips, ...videoClips];

  return (
    <div className="group relative -mx-6 overflow-hidden md:-mx-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />

      <div className="flex w-max animate-marquee gap-4 px-6 group-hover:[animation-play-state:paused] md:px-10">
        {items.map((clip, i) => (
          <div
            key={`${clip.id}-${i}`}
            className={cn(
              "shrink-0 overflow-hidden rounded-image border border-border bg-surface-raised",
              clip.aspect === "16:9" ? "aspect-video w-80" : "aspect-[9/16] w-48"
            )}
          >
            <iframe
              src={clip.embedUrl}
              title={clip.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}
