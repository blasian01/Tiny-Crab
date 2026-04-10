// Tiny Crab: bridge stripped (local-only)
export function isBridgeEnabled() { return false }
export function isEnvLessBridgeEnabled() { return false }
export function getBridgeDisabledReason() { return Promise.resolve('Bridge disabled in local mode') }
export function checkBridgeMinVersion() { return null }
