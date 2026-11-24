import { describe, expect, it } from "vitest";
import { wedding } from "@/config/wedding";

describe("invitation music", () => {
  it("sets the supplied music volume to 0.6", () => {
    expect(wedding.audioVolume).toBe(0.6);
  });
  it("uses the exact supplied music file", () => {
    expect(wedding.artwork.audio.original_filename).toBe("music-60e88b49.mp3");
    expect(wedding.audioSrc).toBe(wedding.artwork.audio.url);
  });
});
