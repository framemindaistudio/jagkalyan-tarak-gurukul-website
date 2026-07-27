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

export const liveUpdates: LiveUpdate[] = [];
