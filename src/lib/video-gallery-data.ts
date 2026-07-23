export type VideoClip = {
  id: string;
  embedUrl: string;
  aspect: "16:9" | "9:16";
  title: string;
};

// Raw work-in-progress clips, embedded by link (YouTube/Vimeo) rather than
// hosted, to keep repo/storage size down. Add entries here once the client
// supplies links, for example:
// {
//   id: "site-clearing-week-1",
//   embedUrl: "https://www.youtube.com/embed/VIDEO_ID",
//   aspect: "16:9",
//   title: "Site clearing, Week 1",
// },
export const videoClips: VideoClip[] = [];
