/** Delay (seconds) for the Nth item in a staggered Reveal grid/list. */
export function staggerDelay(index: number, step = 0.08, max = 0.48) {
  return Math.min(index * step, max);
}
