import { createFileRoute } from "@tanstack/react-router";
import { WeddingSite } from "@/components/wedding/Wedding";
import { wedding } from "@/config/wedding";

const SITE_URL = "https://sharan-revathi-wedding.vercel.app";
const title = "💍 Sharan Kumar L V ❤️ Revathi P | Wedding Invitation";
const description = `Join us on ${wedding.displayDate} at ${wedding.muhurthamTime} onwards to celebrate our Wedding at ${wedding.venue.name}, ${wedding.venue.city}.`;
const imageUrl = `${SITE_URL}/share-cover.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
  }),
  component: WeddingSite,
});