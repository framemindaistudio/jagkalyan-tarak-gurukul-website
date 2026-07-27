"use client";

import { useEffect } from "react";

// Blocks right-click "Save as" and drag-out on images/videos site-wide. This
// is a casual deterrent, not real protection — devtools and view-source
// still expose the underlying files.
export function NoDownloadGuard() {
  useEffect(() => {
    function isMedia(target: EventTarget | null) {
      const el = target as HTMLElement | null;
      return el?.tagName === "IMG" || el?.tagName === "VIDEO";
    }
    function blockContextMenu(e: MouseEvent) {
      if (isMedia(e.target)) e.preventDefault();
    }
    function blockDragStart(e: DragEvent) {
      if (isMedia(e.target)) e.preventDefault();
    }
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockDragStart);
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockDragStart);
    };
  }, []);

  return null;
}
