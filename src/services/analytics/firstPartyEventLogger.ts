// Tiny Crab: 1P event logging stripped
export function logEventTo1P(_event: any): void {}
export function shutdown1PEventLogging(): Promise<void> { return Promise.resolve() }
export function initialize1PEventLogging(): void {}
export function reinitialize1PEventLoggingIfConfigChanged(): void {}
