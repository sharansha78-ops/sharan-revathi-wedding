import gate from "@/assets/original/QUYudzcydz5OmxfmIxgjPrFyb6I.png.asset.json";
import sky from "@/assets/original/xZKlIX9XaacbmAvyKmu8rqVXE.webp.asset.json";
import temple from "@/assets/original/J6YiMAQTDPTAlfG2On7An1Q5lB4.webp.asset.json";
import tree from "@/assets/original/VrdsdVM2OwyjQkw6YWOB0OowTQ.webp.asset.json";
import frame from "@/assets/original/iciTJeQ6Cx2u0gNdZeuKHPf1I.webp.asset.json";
import invitation from "@/assets/original/D4pzTjtAOLwhyi0UPGweoWoztA.webp.asset.json";
import event from "@/assets/original/F2ADq8uKnJWgYF9TX50Ef0rL0U.webp.asset.json";
import portrait from "@/assets/original/Rt8UBMylAa1Uf8GIPommwOJom8.webp.asset.json";
import cloud from "@/assets/original/hV0sxZSugZ1H4ccFPtXXsbHVi54.webp.asset.json";
import groom from "@/assets/original/CUxzxi5SNqNa0t77tmEkNmfHc.webp.asset.json";
import bride from "@/assets/original/sdAKyTg4o5WmZhgAcUR0DbKY.webp.asset.json";
import story from "@/assets/original/sc2GPAV2jTrdKAHcfHti42Mz5YE.webp.asset.json";
import gallery1 from "@/assets/original/mpTuXe92kxp4o8MtgrakEGpuQPA.jpeg.asset.json";
import gallery3 from "@/assets/original/Hroe8U2N75359CjJrk9AA0WAFk.jpeg.asset.json";
import gallery4 from "@/assets/original/HHhvRybKYYn0bwE2ivhhQVsGc5A.jpeg.asset.json";
import instagram from "@/assets/original/f7X3FcEZ4muD31rwPB6wnsMnmsw.webp.asset.json";
import social1 from "@/assets/original/z4FcDC07DapVhAf2xKtlQGU.jpg.asset.json";
import social2 from "@/assets/original/rOJVGWe8W5Nx4kfOdvTCIYo3N30.jpg.asset.json";
import social3 from "@/assets/original/sZJ4c6HdPUPslpxpmOqUaERrJtA.jpg.asset.json";
import preview from "@/assets/original/zBRd2fZShor1nxxKvdVKhKU.webp.asset.json";

// Keep source metadata and original names; serve the actual files in every environment.
const local = <T extends { original_filename: string; url: string }>(asset: T): T => ({
  ...asset,
  url: `/assets/original/${asset.original_filename}`,
});
const extra = (filename: string) => ({
  asset_id: filename,
  original_filename: filename,
  url: `/assets/original/${filename}`,
});
export const artwork = {
  gate: local(gate),
  sky: local(sky),
  temple: local(temple),
  tree: local(tree),
  frame: local(frame),
  invitation: local(invitation),
  event: local(event),
  haldi: extra("AiodKv9zJ0BlEmWhyX3vawMBKn4.webp"),
  ceremony: extra("89YF55J2ugFQJf4BGdUezGe9VYo.webp"),
  dinner: extra("R1S7l0vmwR8QKFU0cqM6naz69g.webp"),
  portrait: local(portrait),
  cloud: local(cloud),
  groom: local(groom),
  bride: local(bride),
  story: local(story),
  instagram: local(instagram),
  preview: local(preview),
  audio: extra("music-60e88b49.mp3"),
  ganesha: extra("7Jc7F5U6LjAzdX4ypVkjja74nO8.webp"),
  photoFrame: extra("a6l8leK3Q1bKzvdCCwf3nSzy7E.png"),
  rsvp: extra("6f9AxarIs54UBYT1Lrm4ws9V764.webp"),
  gallery: [
    local(gallery1),
    extra("123OKdea8oPhNCq0uetsHB8OcDw.jpeg"),
    local(gallery3),
    local(gallery4),
  ],
  social: [local(social1), local(social2), local(social3)],
};
