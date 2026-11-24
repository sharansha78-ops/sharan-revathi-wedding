import { createFileRoute } from "@tanstack/react-router";
import { WeddingSite } from "@/components/wedding/Wedding";
import { wedding } from "@/config/wedding";

const title = "Sharan & Revathi — Wedding Invitation · 14 Dec 2026";
const description = `Join us for the wedding of ${wedding.groom.short} and ${wedding.bride.short} at ${wedding.venue.name}, ${wedding.venue.city}. Muhurtham ${wedding.muhurthamTime}, ${wedding.displayDate}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
      ...(wedding.artwork.preview.url.startsWith('https://') ? [
        { property: "og:image", content: wedding.artwork.preview.url },
        { name: "twitter:image", content: wedding.artwork.preview.url },
      ] : []),
    ],
  }),
  component: WeddingSite,
});