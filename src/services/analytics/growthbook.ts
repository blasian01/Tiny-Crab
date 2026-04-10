// Tiny Crab: feature flags stripped — all features enabled locally
export function initializeGrowthBook(): void {}
export function resetGrowthBook(): void {}
export function checkGate_CACHED_OR_BLOCKING(_gate: string): boolean { return false }
export function checkStatsigFeatureGate_CACHED_MAY_BE_STALE(_gate: string): boolean { return false }
export function getDynamicConfig_BLOCKS_ON_INIT(_key: string): any { return {} }
export function getDynamicConfig_CACHED_MAY_BE_STALE(_key: string): any { return {} }
export function getFeatureValue_CACHED_MAY_BE_STALE(_key: string, fallback: any): any { return fallback }
export function onGrowthBookRefresh(_cb: () => void): void {}
export function refreshGrowthBookAfterAuthChange(): void {}
export const growthbook = null
export function getFeatureValue_CACHED_WITH_REFRESH(...args: any[]) { return null as any }
export function checkSecurityRestrictionGate(...args: any[]) { return null as any }
