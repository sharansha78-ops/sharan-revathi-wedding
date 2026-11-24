import { describe, it, expect } from "vitest";
import { getCountdown } from "@/lib/countdown";
import { wedding } from "@/config/wedding";

describe("muhurtham countdown", () => {
  it("targets 7:29 PM IST on 12 Dec 2026", () => {
    expect(new Date(wedding.muhurthamISO).toISOString()).toBe("2026-12-12T13:59:00.000Z");
  });
  it("counts exactly one day before", () => {
    const c = getCountdown(wedding.muhurthamISO, Date.parse("2026-12-11T13:59:00Z"));
    expect(c).toMatchObject({ days: 1, hours: 0, minutes: 0, seconds: 0, done: false });
  });
  it("stops at zero after the muhurtham", () => {
    expect(getCountdown(wedding.muhurthamISO, Date.parse("2026-12-13T00:00:00Z")).done).toBe(true);
  });
});
