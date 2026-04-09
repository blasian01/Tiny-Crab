import { isEnvDefinedFalsy } from '../../utils/envUtils.js'

type NativeColorDiffModule = {
  ColorDiff?: unknown
  ColorFile?: unknown
  getSyntaxTheme?: (themeName: string) => SyntaxTheme | null
}

export type SyntaxTheme = unknown

// color-diff-napi is optional in this local snapshot. If unavailable (or if the
// installed package is a placeholder with no exports), gracefully disable it.
/* eslint-disable @typescript-eslint/no-require-imports */
const nativeColorDiffModule: NativeColorDiffModule | null = (() => {
  try {
    const loaded = require('color-diff-napi') as
      | NativeColorDiffModule
      | { default?: NativeColorDiffModule }
    const candidate =
      typeof loaded === 'object' && loaded !== null && 'default' in loaded
        ? (loaded.default ?? null)
        : loaded
    if (!candidate || Object.keys(candidate).length === 0) {
      return null
    }
    return candidate
  } catch {
    return null
  }
})()
/* eslint-enable @typescript-eslint/no-require-imports */

export type ColorModuleUnavailableReason = 'env'

/**
 * Returns a static reason why the color-diff module is unavailable, or null if available.
 * 'env' = disabled via CLAUDE_CODE_SYNTAX_HIGHLIGHT
 *
 * The TS port of color-diff works in all build modes, so the only way to
 * disable it is via the env var.
 */
export function getColorModuleUnavailableReason(): ColorModuleUnavailableReason | null {
  if (isEnvDefinedFalsy(process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) {
    return 'env'
  }
  if (!nativeColorDiffModule) {
    return 'env'
  }
  return null
}

export function expectColorDiff(): unknown | null {
  return getColorModuleUnavailableReason() === null
    ? (nativeColorDiffModule?.ColorDiff ?? null)
    : null
}

export function expectColorFile(): unknown | null {
  return getColorModuleUnavailableReason() === null
    ? (nativeColorDiffModule?.ColorFile ?? null)
    : null
}

export function getSyntaxTheme(themeName: string): SyntaxTheme | null {
  if (getColorModuleUnavailableReason() !== null) {
    return null
  }
  return nativeColorDiffModule?.getSyntaxTheme?.(themeName) ?? null
}
