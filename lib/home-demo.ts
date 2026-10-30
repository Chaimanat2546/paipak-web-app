/** Guest counts are whole numbers from 0–50, including typed input. */
export function normalizeGuestCount(value: string): number {
  const count = Number(value);
  return Number.isFinite(count)
    ? Math.min(50, Math.max(0, Math.trunc(count)))
    : 0;
}
