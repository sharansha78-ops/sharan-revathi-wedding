import { artwork } from "./artwork";

export type WeddingEvent = {
  id: string;
  name: string;
  date?: string;
  time?: string;
  venue?: string;
  confirmed: boolean;
  image: string;
  mapsUrl?: string;
};

export const wedding = {
  groom: {
    name: "Chi. Sharan Kumar L.V.",
    short: "Sharan Kumar L.V.",
  },
  bride: {
    name: "Chi. La. Sou. Revathi P.",
    short: "Revathi P.",
  },
  displayDate: "Monday, December 14, 2026",
  shortDate: "14 December 2026",
  muhurthamTime: "6:55 AM – 8:00 AM IST · Dhanu Lagnam",
  // 2026-12-14 06:55 Asia/Kolkata (UTC+5:30)
  muhurthamISO: "2026-12-14T06:55:00+05:30",
  venue: {
    name: "Buddha Bhavana, Royal Lake Front Residency, Phase -3",
    city: "J.P. Nagar 8th Phase, Bangalore - 560 083",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Buddha+Bhavana+Royal+Lake+Front+Residency+Phase+3+JP+Nagar+8th+Phase+Bangalore+560083",
  },
  groomFamily: {
    blessings: "With the blessings of Sri Muneshwara Swamy",
    parents: "Smt. Sarasamma & Sri Venugopal L.",
    address: "Beereshwaranagar, Chunchanaghatta Main Road, Bangalore",
  },
  brideFamily: {
    parents: "Smt. Sumathi P. & Sri Prakash S.",
    hometown: "Chunchanaghatta Main Road, Bangalore",
  },
  invitationDownload: {
    label: "Download Invitation",
    fileUrl: "/invitation/wedding-invitation.pdf",
    fileName: "Sharan-Revathi-Wedding-Invitation.pdf",
  },
  rsvpWhatsApp: "918553680736",
  audioSrc: artwork.audio.url,
  audioVolume: 0.6,
  audioAutoplay: true,
  artwork,
  invitationDetails: {
    title: "Wedding Invitation",
    date: "13–14 December 2026 · Reception & Muhurtham",
    ceremony: "Muhurtham · Monday, 14 December 2026 · 6:55 AM to 8:00 AM (Dhanu Lagnam)",
    dinner: "Reception · Sunday, 13 December 2026 · 6:30 PM onwards",
    venue:
      "Buddha Bhavana, Royal Lake Front Residency, Phase -3, J.P. Nagar 8th Phase, Bangalore - 560 083",
    blessing:
      "With the blessings of Sri Muneshwara Swamy, we warmly solicit your gracious presence with family and friends to bless the couple.",
  },
  photoPlaceholder: "Our favourite moments, coming soon",
  instagramUrl: "",
  livestream: null as { url: string; isPlaceholder?: boolean } | null,
  story:
    "Two hearts, one family blessing, and a lifetime of grace ahead. From quiet moments of understanding to the joy of bringing our families together, every step has led us to this sacred threshold. As we begin our journey under the blessings of Sri Muneshwara Swamy and our elders, your presence and warm wishes are the greatest blessing we could ask for.",
  hashtag: "#SharanWedsRevathi",
  // Store image files in `public/photos/` and reference them as "/photos/your-photo.jpg"
  photos: [
    "/photos/engagement-1.jpg",
    "/photos/engagement-2.jpg",
    "/photos/engagement-3.jpg",
    "/photos/engagement-4.jpg",
    "/photos/engagement-5.jpg",
  ] as string[],
  events: [
    {
      id: "reception",
      name: "Reception",
      date: "Sunday, December 13, 2026",
      time: "6:30 PM onwards",
      venue:
        "Buddha Bhavana, Royal Lake Front Residency, Phase -3, J.P. Nagar 8th Phase, Bangalore - 560 083",
      image: artwork.dinner.url,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Buddha+Bhavana+Royal+Lake+Front+Residency+Phase+3+JP+Nagar+8th+Phase+Bangalore+560083",
      confirmed: true,
    },
    {
      id: "muhurtham",
      name: "Muhurtham",
      date: "Monday, December 14, 2026",
      time: "6:55 AM to 8:00 AM (Dhanu Lagnam)",
      venue:
        "Buddha Bhavana, Royal Lake Front Residency, Phase -3, J.P. Nagar 8th Phase, Bangalore - 560 083",
      image: artwork.ceremony.url,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Buddha+Bhavana+Royal+Lake+Front+Residency+Phase+3+JP+Nagar+8th+Phase+Bangalore+560083",
      confirmed: true,
    },
  ] as WeddingEvent[],
};