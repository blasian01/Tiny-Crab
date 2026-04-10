// Tiny Crab: rate limits stripped — local-only
export function getClaudeAiLimits() { return null }
export function checkRateLimit() { return { limited: false } }
export type ClaudeAiLimits = any
export function getRateLimitErrorMessage(...args: any[]) { return null as any }
export function currentLimits(...args: any[]) { return null as any }
export function extractQuotaStatusFromError(...args: any[]) { return null as any }
export function extractQuotaStatusFromHeaders(...args: any[]) { return null as any }
export function checkQuotaStatus(...args: any[]) { return null as any }
export function statusListeners(...args: any[]) { return null as any }
