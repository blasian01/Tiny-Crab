// Tiny Crab: x402 stripped (local-only)
export function getX402Tracker() { return null }
export function createX402Tracker(...args: any[]) { return { track: () => {}, getStats: () => ({}) } }
export type X402Tracker = any
