export function getCountdown(targetISO: string, now: number = Date.now()) {
  const diff = Math.max(0, new Date(targetISO).getTime() - now);
  const s = Math.floor(diff / 1000);
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60, done: diff === 0 };
}
