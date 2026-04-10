// Tiny Crab: analytics stripped — local-only, no telemetry

export type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS = Record<string, string | number | boolean | undefined>
export type AnalyticsMetadata_I_VERIFIED_THIS_IS_PII_TAGGED = Record<string, string | number | boolean | undefined>

export function logEvent(_name: string, _metadata?: any): void {}
export function initAnalytics(): void {}
export function trackEvent(): void {}
export function setAnalyticsUser(): void {}
export function getAnalyticsEnabled(): boolean { return false }
export function shutdownAnalytics(): Promise<void> { return Promise.resolve() }
export function flushAnalytics(): Promise<void> { return Promise.resolve() }
export const analytics = { track: () => {}, identify: () => {}, flush: () => Promise.resolve() }
