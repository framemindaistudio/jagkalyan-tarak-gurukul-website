// Progress photos and videos, shared as external links (Google Drive, YouTube,
// or any direct file host) rather than files uploaded into this repo. Add
// each entry here as it comes in — the Live Updates page groups them by
// month automatically and shows a "coming soon" placeholder while this list
// is empty.
export type LiveUpdate = {
  id: string;
  date: string; // "YYYY-MM-DD", the date the photo/video was taken or shared
  title: string;
  description?: string;
  mediaType: "photo" | "video";
  url: string;
};

// Note: the Kommodo-hosted links below expire Aug 26, 2026 — move these to
// permanent hosting before then, or the images will stop loading.
export const liveUpdates: LiveUpdate[] = [
  {
    id: "2026-07-25-1",
    date: "2026-07-25",
    title: "Campus Progress Update 1",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/ctQJXPpsVroIwi6dQQHx/image.jpg",
  },
  {
    id: "2026-07-25-2",
    date: "2026-07-25",
    title: "Campus Progress Update 2",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/fy9Zh68DPmqwjLX0QB3o/image.jpg",
  },
  {
    id: "2026-07-25-3",
    date: "2026-07-25",
    title: "Campus Progress Update 3",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/3YfMR2U2t2r2fAE9nTCr/image.jpg",
  },
  {
    id: "2026-07-25-4",
    date: "2026-07-25",
    title: "Campus Progress Update 4",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/NWSxIJE24rsOqH4dbFdQ/image.jpg",
  },
  {
    id: "2026-07-25-5",
    date: "2026-07-25",
    title: "Campus Progress Update 5",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/aBC7mIbM7mcA7eZwCYvJ/image.jpg",
  },
  {
    id: "2026-07-25-6",
    date: "2026-07-25",
    title: "Campus Progress Update 6",
    mediaType: "photo",
    url: "https://plain-apac-prod-public.komododecks.com/202607/27/Zr82qJ5GrOKq4xwIFjIk/image.jpg",
  },
];
