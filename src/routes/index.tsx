import { createFileRoute } from "@tanstack/react-router";
import { WeddingSite } from "@/components/wedding/Wedding";
import { wedding } from "@/config/wedding";

const title = "Sai Kiran & Teja Sree — Wedding Invitation · 12 Dec 2026";
const description = "Join us for the wedding of Sai Kiran Reddy and Teja Sree at SS Convention Hall, Mylavaram. Muhurtham 7:29 PM IST, 12 December 2026.";

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
